const mysqlConnection = require("../config/mySqlconnection");
const jwt = require("jsonwebtoken");

const nodeEnvConfig = require("../nodeEnvConfig");
nodeEnvConfig.envConfig();

/**
 * Service to get session details for the user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise} - A promise that resolves to the session token.
 */
const getSessionService = async (req, res) => {
  return new Promise((resolve, reject) => {
    try {
      const id = req.user.userId;
      let func_head = false;
      let prac_head = false;

      // Check if the user is a practice head
      mysqlConnection.query(
        `SELECT d.* FROM main_users a LEFT JOIN main_employees b ON a.id=b.user_id LEFT JOIN main_departments c ON b.department_id = c.id LEFT JOIN main_users d ON c.depthead = d.id WHERE d.id=${id} LIMIT 1`,
        (err, row) => {
          if (!err) {
            if (row.length > 0) {
              prac_head = true;
            }

            // Check if the user is a function head
            const func_query = `SELECT d.*, c.functional_head FROM main_users a LEFT JOIN main_employees b ON a.id=b.user_id LEFT JOIN main_businessunits c ON b.businessunit_id = c.id LEFT JOIN main_users d ON c.functional_head = d.id WHERE d.id=${id} AND a.isactive=1 AND b.isactive=1 AND c.isactive=1 AND d.isactive=1 LIMIT 1`;
            mysqlConnection.query(func_query, (err, result) => {
              if (!err) {
                if (result.length > 0) {
                  func_head = true;
                }

                // Get user details
                const query_one = `SELECT 
                  b.id as function_id,
                  a.BandLevel, 
                  a.reporting_manager AS reporting_manager_id,
                  c.id AS function_head_id, 
                  c.userfullname AS function_head_name,
                  c.emailaddress AS function_head_email
                FROM 
                  main_employees a 
                LEFT JOIN main_businessunits b ON a.businessunit_id = b.id 
                LEFT JOIN main_users c ON c.id = b.functional_head 
                WHERE 
                  a.user_id = '${id}' 
                  AND a.isactive = 1`;

                mysqlConnection.query(query_one, (err, result_one) => {
                  if (!err) {
                    try {
                      const query_two = `SELECT userfullname as requester_rm_name, id as requester_rm_id, emailaddress as requester_rm_email FROM main_users WHERE id='${result_one[0]?.reporting_manager_id}' AND isactive=1`;
                      mysqlConnection.query(query_two, (err, result_two) => {
                        if (!err) {
                          const queryCoo = `SELECT a.id AS coo_id, a.userfullname AS coo_name, a.emailaddress AS coo_email FROM main_users a LEFT JOIN ticketing_access_matrix b ON b.user_id = a.id WHERE b.coo_access=1`;
                          mysqlConnection.query(queryCoo, (err, rowsCoo) => {
                            if (!err) {
                              try {
                                const query_four = `SELECT a.user_id, a.department_id, b.depthead, b.deptname, c.userfullname, c.emailaddress FROM main_employees a LEFT JOIN main_departments b ON a.department_id=b.id LEFT JOIN main_users c ON b.depthead=c.id WHERE a.user_id='${id}' AND a.isactive=1`;
                                mysqlConnection.query(
                                  query_four,
                                  (err, result_four) => {
                                    if (!err) {
                                      try {
                                        const query_three = `SELECT a.*, b.*, c.jobtitlecode, c.jobtitlename, d.Location, d.coun_group_id AS countryGroupId, COUNT(r.id) AS is_cost_center 
                                        FROM main_users a 
                                        LEFT JOIN ticketing_access_matrix b ON a.id=b.user_id
                                        LEFT JOIN ticketing_details r ON r.cost_center_owner_id=a.id
                                        LEFT JOIN ticketing_locations d ON a.LocationID=d.id
                                        LEFT JOIN main_jobtitles c ON a.jobtitle_id=c.id  
                                        WHERE a.isactive=1 AND a.id='${id}' ORDER BY a.userfullname ASC`;
                                        if (id !== undefined && id !== "") {
                                          mysqlConnection.query(
                                            query_three,
                                            (err, rows) => {
                                              if (!err) {
                                                try {
                                                  let prac_head_num = 0;
                                                  let cost_center_num = 0;
                                                  let func_head_num = 0;
                                                  if (rows.length > 0) {
                                                    let user = rows[0];

                                                    let access = [];
                                                    let accesskey = [];
                                                    if (
                                                      parseInt(
                                                        rows[0].is_cost_center
                                                      ) > 0
                                                    ) {
                                                      access.push("CCO");
                                                      cost_center_num = 1;
                                                      accesskey.push("cco");
                                                    }
                                                    if (prac_head) {
                                                      access.push("PH");
                                                      prac_head_num = 1;
                                                      accesskey.push("ph");
                                                    }

                                                    if (func_head) {
                                                      access.push(
                                                        "FunctionHead"
                                                      );
                                                      func_head_num = 1;
                                                      accesskey.push(
                                                        "functionHead"
                                                      );
                                                    }
                                                    if (
                                                      user.coo_access !==
                                                        undefined &&
                                                      user.coo_access === 1
                                                    ) {
                                                      access.push("COO");
                                                      accesskey.push("coo");
                                                    }
                                                    if (
                                                      user.ticketing_access !==
                                                        undefined &&
                                                      user.ticketing_access ===
                                                        1
                                                    ) {
                                                      access.push("Ticketing");
                                                      accesskey.push(
                                                        "ticketing"
                                                      );
                                                    }
                                                    if (
                                                      user.finance_access !==
                                                        undefined &&
                                                      user.finance_access === 1
                                                    ) {
                                                      access.push("Finance");
                                                      accesskey.push("finance");
                                                    }
                                                    if (
                                                      user.pmo_access !==
                                                        undefined &&
                                                      user.pmo_access === 1
                                                    ) {
                                                      access.push("PMO");
                                                      accesskey.push("pmo");
                                                    }
                                                    if (
                                                      user.finance_team_access !==
                                                        undefined &&
                                                      user.finance_team_access ===
                                                        1
                                                    ) {
                                                      access.push(
                                                        "FinanceTeam"
                                                      );
                                                      accesskey.push(
                                                        "financeTeam"
                                                      );
                                                    }
                                                    access = access.join(",");
                                                    accesskey =
                                                      accesskey.join(",");

                                                    const token = jwt.sign(
                                                      {
                                                        user_id: id,
                                                        coo_id:
                                                          rowsCoo[0].coo_id,
                                                        coo_name:
                                                          rowsCoo[0].coo_name,
                                                        coo_email:
                                                          rowsCoo[0].coo_email,
                                                        userfullname:
                                                          user.userfullname,
                                                        location: user.Location,
                                                        countryGroupId:
                                                          user.countryGroupId,
                                                        firstname:
                                                          user.firstname,
                                                        lastname: user.lastname,
                                                        emailaddress:
                                                          user.emailaddress,
                                                        is_ta_team:
                                                          user.is_ta_team,
                                                        is_bd_team:
                                                          user.is_bd_team,
                                                        employeeId:
                                                          user.employeeId,
                                                        contactnumber:
                                                          user.contactnumber,
                                                        profileimg:
                                                          user.profileimg,
                                                        jobtitlecode:
                                                          user.jobtitlecode,
                                                        jobtitlename:
                                                          user.jobtitlename,
                                                        access: access,
                                                        accesskey: accesskey,
                                                        ph: prac_head_num,
                                                        cco: cost_center_num,
                                                        functionHead:
                                                          func_head_num,
                                                        COO: user.coo_access,
                                                        finance:
                                                          user.finance_access,
                                                        ticketing:
                                                          user.ticketing_access,
                                                        financeTeam:
                                                          user.finance_team_access,
                                                        pmo: user.pmo_access,
                                                        requester_rm_name:
                                                          result_two[0]
                                                            ?.requester_rm_name,
                                                        requester_rm_email:
                                                          result_two[0]
                                                            ?.requester_rm_email,
                                                        requester_rm_id:
                                                          result_two[0]
                                                            ?.requester_rm_id,
                                                        requester_band:
                                                          result_one[0]
                                                            ?.BandLevel,
                                                        function_id:
                                                          result_one[0]
                                                            ?.function_id,
                                                        function_head_id:
                                                          result_one[0]
                                                            ?.function_head_id,
                                                        function_head_email:
                                                          result_one[0]
                                                            ?.function_head_email,
                                                        function_head_name:
                                                          result_one[0]
                                                            ?.function_head_name,
                                                        practice_id:
                                                          result_four[0]
                                                            ?.department_id,
                                                        practice_name:
                                                          result_four[0]
                                                            ?.deptname,
                                                        practice_head_name:
                                                          result_four[0]
                                                            ?.userfullname,
                                                        practice_head_mail:
                                                          result_four[0]
                                                            ?.emailaddress,
                                                        practice_head_id:
                                                          result_four[0]
                                                            ?.depthead,
                                                        indianLocation:
                                                          process.env
                                                            .INDIAN_LOCATION,
                                                        locationID:
                                                          user.LocationID,
                                                        sortCodeLocation:
                                                          process.env
                                                            .SORT_CODE_LOCATION,
                                                        ibanLocation:
                                                          process.env
                                                            .SWIFT_LOCATION,
                                                        routerLocation:
                                                          process.env
                                                            .ROUTER_LOCATION,
                                                      },
                                                      process.env.TOKEN_KEY,
                                                      { expiresIn: "2h" }
                                                    );
                                                    resolve(token);
                                                  } else {
                                                    console.log(err);
                                                    reject(new Error());
                                                  }
                                                } catch (e) {
                                                  console.log(e);
                                                  reject(e);
                                                }
                                              } else {
                                                reject(err);
                                              }
                                            }
                                          );
                                        } else {
                                          reject(new Error());
                                        }
                                      } catch (e) {
                                        reject(e);
                                      }
                                    } else {
                                      reject(err);
                                    }
                                  }
                                );
                              } catch (e) {
                                reject(e);
                              }
                            } else {
                              reject(err);
                            }
                          });
                        } else {
                          reject(err);
                        }
                      });
                    } catch (e) {
                      reject(e);
                    }
                  } else {
                    reject(err);
                  }
                });
              } else {
                reject(err); // Handle error
              }
            });
          } else {
            reject(err);
          }
        }
      );
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getSessionService,
};

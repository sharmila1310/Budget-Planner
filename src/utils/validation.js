export const formValidation = (data) => {
  let response = [];

  if (!data.region) {
    response["region"] = "Please select the region";
  }
  if (!data.BusinessFunction) {
    response["BusinessFunction"] = "Please select the department name";
  }
  if (!data.PracticeName) {
    response["PracticeName"] = "Please select the practiceName";
  }
  if (!data.ConstOwner) {
    response["ConstOwner"] = "Please enter the const center owner";
  }
  if (!data.ProjectName) {
    response["ProjectName"] = "Please enter the project Name";
  }
  // if (!data.state) {
  //   response["state"] = "Please select the state";
  // }
  if (!data.CustomerType === "") {
    response["CustomerType"] = "Please select the customer type";
  }
  if (!data.Customer) {
    response["Customer"] = "Please enter the customer name";
  }

  //   if (
  //     data.projectClientCode?.length < 3 ||
  //     data.projectClientCode?.length > 3
  //   ) {
  //     response["projectClientCode"] =
  //       "Please enter codes with 3 characters only.";
  //   }
  console.log("form validation err", data);
  return response;
};

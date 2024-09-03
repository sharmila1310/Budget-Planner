import UserIcon from "../../assets/images/user.png";
// import overAllProjectIcon from "../../Assets/images/Overall Projects.png";
// import draft from "../../Assets/images/draft.png";
// import newProjectIcon from "../../Assets/images/planning.png";
// import importDB from "../../Assets/images/database.png";
// import Users from "../../Assets/images/users.png";
import helpIcon from "../../assets/images/help.png";
// import CustomerImg from "../../Assets/images/customer.png";
// import InhouseImg from "../../Assets/images/inhouse.png";
// import { NavLink, useLocation } from "react-router-dom";
// import { mainRoutePaths } from "../../Routes/RoutePaths";
// import { decodeUser } from "../../constants/decryptToken.js";
// import jwtDecode from "jwt-decode";

const Sidebar = () => {
  let tokenDetails = { userFullName: "Natesan G", roleName: "Manager" };
  // let tokenDetails = decodeUser();
  // const location = useLocation();
  // const fromPage = location.state?.fromPage;
  // const queryParams = new URLSearchParams(location.search);
  // const type = queryParams.get("type");
  // console.log("ddd fromPage", fromPage);
  // console.log("ddd type", type);
  // console.log("ddd locationState", location.state);
  // let access = jwtDecode(localStorage.getItem("USER_ACCESS"));
  return (
    <div className="sidebar-container">
      <div className="sidebar-body">
        <div className="user-con">
          <img src={UserIcon} alt="user" />
          <span>{tokenDetails?.userFullName}</span>
          <span>{tokenDetails?.roleName}</span>
        </div>

        {/* <NavLink
          to={`${mainRoutePaths.root}?type=Customer`}
          className={({ isActive }) =>
            ((isActive && !fromPage) || fromPage === "customerProject") &&
            (type === "Customer" || !type)
              ? "active"
              : ""
          }
        >
          <div className="project-con">
            <img src={CustomerImg} alt="project" />
            <span>Customer Projects</span>
          </div>
        </NavLink> */}

        <div className="project-con">
          <img src={helpIcon} alt="project" />
          <span>System User Guide</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

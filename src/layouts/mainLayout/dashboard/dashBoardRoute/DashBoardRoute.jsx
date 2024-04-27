import { NavLink, Outlet } from "react-router-dom";

const DashBoardRoute = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col lg:flex-row max-w-[1200px] mx-auto ">
        {/* Sidebar */}
        <div className="lg:w-1/4  p-4 text-white">
          {/* <h1 className="text-2xl font-bold text-white mb-4">Dashboard</h1> */}
          <ul className="menu space-y-2 text-[#14F194]">
            <>
              <li>
                <NavLink to="/dashboard/organizer-profile">
                Affiliate Portal
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-a-camp">Trader Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-camps">Orders</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-registered-camps">
                Downloads
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">Edit Account</NavLink>
              </li>
            </>
            <>
              <li>
                <NavLink to="/dashboard/participant-profile">
                KYC Verification
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/registered-camp">Addresses</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment-history">
                Logout
                </NavLink>
              </li>
            </>
          </ul>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4 p-4">
          {/* Add main content components */}
          {/* <h2 className="text-3xl font-bold text-white mb-4">
            Welcome to Your Dashboard
          </h2> */}
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoardRoute;

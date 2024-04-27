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
          <h2 className="text-xl font-bold text-white mb-8">
          Hello Az SLeverage (not Az SLeverage? <span className="text-[#14F194]">Log Out</span>)
          </h2>
          <p className="text-white text-xl">From your account dashboard you can view your <span className="text-[#14f194]">recent orders</span>, manage your ,<span className="text-[#14f194]">shipping and billing addresses</span>, and <span className="text-[#14f194]">edit your password and account details</span>.</p>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoardRoute;

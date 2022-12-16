import 'bootstrap/dist/css/bootstrap.css';

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
           <li className="nav-item active">
             <a className="nav-link" href="/">Home</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/addEmployee">Add Employee</a>
           </li>
            <li className="nav-item">
             <a className="nav-link" href="/addDepartment">Add Department</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/inputSalary">Input Salary</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/employee">Employee List</a>
           
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
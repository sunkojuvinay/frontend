import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';

function Dropdownbox() {
  return (
    <>
    <div>
<div class="container dropfilter mt-3">
  <h2 class="bold">Microsoft SQL Server</h2>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" href="#">Select Product</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Microsoft SQL Server VERSION</a>
      <ul class="dropdown-menu scrollable-menu" role="menu">
        
        <Dropdown.Item href="./Sql2022">Microsoft SQL Server 2022</Dropdown.Item>
        <Dropdown.Item href="./Sql2019">Microsoft SQL Server 2019</Dropdown.Item>
        <Dropdown.Item href="./Sql2017">Microsoft SQL Server 2017</Dropdown.Item>
        <Dropdown.Item href="./Sql2016">Microsoft SQL Server 2016</Dropdown.Item>
        <Dropdown.Item href="./Sql2014">Microsoft SQL Server 2014</Dropdown.Item>
        <Dropdown.Item href="./Sql2012">Microsoft SQL Server 2012</Dropdown.Item>
        <Dropdown.Item href="./Sql2009">Microsoft SQL Server 2008 R2</Dropdown.Item>
        <Dropdown.Item href="./Sql2008">Microsoft SQL Server 2008</Dropdown.Item>
        <Dropdown.Item href="./Sql2005">Microsoft SQL Server 2005</Dropdown.Item>
        <Dropdown.Item href="./Sql2001">Microsoft SQL Server 2000</Dropdown.Item>
        
              </ul>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">KB VERSION</a>
      <ul class="dropdown-menu scrollable-menu" role="menu">
        <Dropdown.Item href="./SU">Security Updates(SU)</Dropdown.Item>
        <Dropdown.Item href="./CU">Cumulative Updates(CU)</Dropdown.Item>
        <Dropdown.Item href="./CriticalUpdate">Critical Update</Dropdown.Item>
        <Dropdown.Item href="./FIXErrors">FIX Update</Dropdown.Item>
        <Dropdown.Item href="./GDR">General Distribution Release Update(GDR)</Dropdown.Item>
        <Dropdown.Item href="./RTM">Release to Manufacturing Update(RTM)</Dropdown.Item>
        <Dropdown.Item href="./MS">Microsoft Update(MS)</Dropdown.Item>
        <Dropdown.Item href="./TLS">Transport Layer Security(TLS)</Dropdown.Item>
        <Dropdown.Item href="./RS">Reporting Service Update</Dropdown.Item>
        <Dropdown.Item href="./Hotflix">Hotflix Update</Dropdown.Item>
        <Dropdown.Item href="./AzureConnect">Azure Connect Update</Dropdown.Item>
        <Dropdown.Item href="./Servicing">Servicing Update</Dropdown.Item>
      
      </ul>
    </li>
  </ul>
</div>
</div>

    
    </>
  );
}

export default Dropdownbox;
import Dropdown from 'react-bootstrap/Dropdown';

function Dropdownbox() {
  return (
    <>
<div class="container mt-3">
  <h2>SQL Server</h2>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" href="#">Select Product</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">SQL VERSION</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="SqlServer">SQL2022</a></li>
        <li><a class="dropdown-item" href="#">SQL2021</a></li>
        <li><a class="dropdown-item" href="#">SQL2019</a></li>
      </ul>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">KB VERSION</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">SU</a></li>
        <li><a class="dropdown-item" href="#">GDR</a></li>
        <li><a class="dropdown-item" href="#">CU</a></li>
      </ul>
    </li>
  </ul>
</div>

    
    </>
  );
}

export default Dropdownbox;
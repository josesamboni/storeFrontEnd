import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  const location = useLocation();

  const paths = [
    { path: "/", label: "Home" },
    { path: "/LoginForm", label: "LoginForm" },
    { path: "/register", label: "Register" },
    { path: "/checkout", label: "Checkout" },
    { path: "/account", label: "Account" },
  ];

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Welcome to Our Store!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {paths.filter(({ condition }) => condition !== false).map(({ path, label }) => (
            <Nav.Link as={Link} to={path} key={path} className={location.pathname === path ? "active" : ""}>
              {label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
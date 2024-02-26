import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  const location = useLocation();

  const paths = [
    { path: "/", label: "Home" },
    { path: "/LoginForm", label: "LoginForm" },
    { path: "/register", label: "Register" },
    { path: "/cart", label: "Cart" },
    { path: "/account", label: "Account" },
  ];

  return (
    <Navbar bg="light" expand="lg" style={{ boxShadow: '0 2px 4px rgba(0,0,0,.1)' }}>
      <Navbar.Brand as={Link} to="/" style={{ fontWeight: 'bold', color: '#0056b3', fontSize: '24px' }}>Welcome to Our Store!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {paths.map(({ path, label }) => (
            <Nav.Link
              as={Link}
              to={path}
              key={path}
              className={location.pathname === path ? "active" : ""}
              style={{
                color: location.pathname === path ? '#007bff' : '#555',
                fontWeight: location.pathname === path ? 'bold' : 'normal',
                fontSize: '18px',
                marginRight: '20px',
              }}
            >
              {label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
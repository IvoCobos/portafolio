import { Nav, NavDropdown, Container } from "react-bootstrap";

export const NavBar = () => {
    return (
        <NavBar bg="light" expand="lg">
            <Container>
                <NavBar.Brand href="#home">Inicio</NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav"/>
                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Other action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separed link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </NavBar.Collapse>
            </Container>
        </NavBar>
    )
}
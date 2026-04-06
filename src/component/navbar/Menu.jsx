import { useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import "./menu.css";
import { IoChevronDownOutline, IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import NavLogo from "../../assets/navLogo.png";
import CommonButton from "../commonButton/CommonButtom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar expand="lg" className="navMain" expanded={isOpen} collapseOnSelect>
      <div className="navOverlayParent">
        <div className="navOne"></div>
        <div className="navTwo"></div>
      </div>
      <Container>
        <Navbar.Brand href="#home">
          <Image src={NavLogo} />
        </Navbar.Brand>

        {/* Custom Toggle Button */}
        <button
          className="navToggleBtn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <IoCloseOutline size={28} color="#fff" />
          ) : (
            <IoMenuOutline size={28} color="#fff" />
          )}
        </button>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navElement">
            <Nav.Link href="#home" onClick={() => setIsOpen(false)}>
              Home <IoChevronDownOutline />
            </Nav.Link>
            <Nav.Link href="#link" onClick={() => setIsOpen(false)}>
              About <IoChevronDownOutline />
            </Nav.Link>
            <Nav.Link href="#link" onClick={() => setIsOpen(false)}>
              Service <IoChevronDownOutline />
            </Nav.Link>
            <Nav.Link href="#link" onClick={() => setIsOpen(false)}>
              Pages <IoChevronDownOutline />
            </Nav.Link>
            <Nav.Link href="#link" onClick={() => setIsOpen(false)}>
              News <IoChevronDownOutline />
            </Nav.Link>
          </Nav>
          <div className="navButton">
            <CommonButton buttonName={"Login"} className={"navButtonOne"} />
            <CommonButton buttonName={"Free Consultation"} className={"navButtonTwo"} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
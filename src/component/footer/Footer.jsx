import { Col, Container, Form, Image, Row } from "react-bootstrap";
import "./footer.css";
import NavLogo from "../../assets/navLogo.png";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaTwitter, FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <Row className="footerTopRow">
          <Col xs={12} sm={6} lg={2} className="footerCol">
            <div className="brandIndenty">
              <Image src={NavLogo}  className="footer-logo"/>
              <p className="brandIndentyParagraph commonParagraph">
                Build a modern and creative website with Innovate.
              </p>
              <div className="brandIndentyIconMain">
                <div className="iconParent">
                  <IoLogoGoogleplus className="brandIndentyIcon" />
                </div>
                <div className="iconParent">
                  <FaTwitter className="brandIndentyIcon" />
                </div>
                <div className="iconParent">
                  <FaInstagramSquare className="brandIndentyIcon" />
                </div>
                <div className="iconParent">
                  <FaLinkedin className="brandIndentyIcon" />
                </div>
              </div>
            </div>
          </Col>

          <Col xs={6} sm={6} lg={{ span: 2, offset: 1 }} className="footerCol">
            <ul className="listMain">
              <li><a href="#" className="listFirstText">Product</a></li>
              <li><a href="#">Landingpages</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Benefits</a></li>
              <li><a href="#">Features</a></li>
            </ul>
          </Col>

          <Col xs={6} sm={6} lg={2} className="footerCol">
            <ul className="listMain">
              <li><a href="#" className="listFirstText">Company</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>

          <Col xs={6} sm={6} lg={2} className="footerCol">
            <ul className="listMain">
              <li><a href="#" className="listFirstText">Resources</a></li>
              <li><a href="#">Guides and resources</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Tools</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </Col>

          <Col xs={12} sm={6} lg={3} className="footerCol">
            <div className="updatePart">
              <p className="updateHeading listFirstText">Get Latest Updates</p>
              <p className="updateParagarph">
                Subscribe to our newsletter and get many interesting things every week
              </p>
              <Form className="inputFrom">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="email"
                    placeholder="Your Email Address"
                    className="footerInput"
                  />
                  <div className="updateIconParent">
                    <RiSendPlaneFill className="updateIcon" />
                  </div>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <div className="footerDivider"></div>
          </Col>
        </Row>

        <Row className="footerBottom">
          <Col xs={12} lg={3}>
            <p className="footerBottomParagarph">© 2020 Innovate - All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
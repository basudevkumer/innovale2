import { Col, Container, Image, Row } from "react-bootstrap";
import "./company.css";
import Button from "../commonButton/CommonButtom";
// import icon
import { MdDone } from "react-icons/md";
// import images
import CompanyImage from "../../assets/companyimage.png";
import DotImages from "../../assets/dotnet.png";
import LineSprateTwo from "../../assets/linespread2.png";

const Company = () => {
  return (
    <section className="company">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={5}>
            <div className="leftSideComp">
              <Image src={CompanyImage} className="companyImages" fluid />
              <Image src={DotImages} className="dotnet" />
              <Image src={LineSprateTwo} className="lineFilmeImage" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={{ span: 6, offset: 1 }}>
            <div className="rightSideComp">
              <h6 className="rightSideCompHeadingOne">ABOUT US</h6>
              <h2 className="rightSideCompHeadingTwo">
                Welcome to World Best Business Company
              </h2>
              <p className="rightSideCompParagraph">
                We partner with experienced and qualified Accountants, Financial
                Advisors and Chartered Secretaries to provide
              </p>
              <ul>
                <li>
                  <span>
                    <MdDone className="rightSideCompIcon" />
                  </span>
                  Monthly assessment report
                </li>
                <li>
                  <span>
                    <MdDone className="rightSideCompIcon" />
                  </span>
                  Monthly assessment report
                </li>
                <li>
                  <span>
                    <MdDone className="rightSideCompIcon" />
                  </span>
                  Monthly assessment report
                </li>
              </ul>
              <Button buttonName={"Free Consultation"} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Company;
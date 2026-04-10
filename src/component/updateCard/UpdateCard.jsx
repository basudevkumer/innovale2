import { Card } from "react-bootstrap";
import { BsCalendar2Check } from "react-icons/bs";
import "./updateCard.css";

const UpdateCard = ({
  heading,
  paragraph,
  personImage,
  personName,
  imageSrc,
  dateText,
}) => {
  return (
    <div className="updateCardMain">
      <Card className="updateCardElement">
        <Card.Img variant="top" src={imageSrc} />

        <Card.Body>
          <Card.Title className="updateCardHeading">
            {heading}
          </Card.Title>

          <Card.Text className="updateCardParagraph">
            {paragraph}
          </Card.Text>

          <div className="nameDatePart">
            {/* Person */}
            <div className="nameDatePartCommon">
              <Card.Img
                src={personImage}
                className="nameDatePartPersonImage"
              />
              <Card.Text className="updateCardParagraphTwo">
                {personName}
              </Card.Text>
            </div>

            {/* Date */}
            <div className="nameDatePartCommon">
              <BsCalendar2Check className="updateCardIcon" />
              <Card.Text className="updateCardParagraphTwo">
                {dateText}
              </Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UpdateCard;
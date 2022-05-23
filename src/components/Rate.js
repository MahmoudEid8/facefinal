import { Rate } from "rsuite";
import FrownIcon from "@rsuite/icons/legacy/FrownO";
import MehIcon from "@rsuite/icons/legacy/MehO";
import SmileIcon from "@rsuite/icons/legacy/SmileO";
import "rsuite/dist/rsuite.min.css";
import { useState } from "react";

const renderCharacter = (value, index) => {
  // unselected character
  if (value === 1) {
    return <MehIcon className="face-icon" style={{ color: "#F32013" }} />;
  }
  if (value === 2) {
    return <FrownIcon className="face-icon" style={{ color: "#C9451F" }} />;
  }
  if (value === 3) {
    return <FrownIcon className="face-icon" style={{ color: "#9F6A2B" }} />;
  }
  if (value === 4) {
    return <MehIcon className="face-icon" style={{ color: "#758F37" }} />;
  }
  return <SmileIcon className="face-icon" style={{ color: "#4BB543" }} />;
};

const RateComp = ({ rating, setRating }) => {
  const [hoverValue, setHoverValue] = useState(3);

  return (
    <div>
      <Rate
        value={rating}
        onChange={(rate) => {
          setRating(rate);
        }}
        size="lg"
        renderCharacter={renderCharacter}
        // onChangeActive={setHoverValue}
      />
    </div>
  );
};

export default RateComp;

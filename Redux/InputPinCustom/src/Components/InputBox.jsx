import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { PinItems } from "./Pinitems";

export const InputBox = ({ setMainVal, perBox, length, style }) => {
  const [values, setValues] = useState(new Array(length).fill(""));
  const elements = useRef([]);

  const handleChange = (v, i) => {
    const vals = [...values];
    vals[i] = v;
    setValues(vals);

    // next input focus
    if (v && i < length - 1) {
      elements.current[i + 1]?.focus();
    }

    setMainVal(vals.join(""));
  };

  return (
    <>
      {values.map((item, index) => (
        <PinItems
          key={index}
          ref={(el) => (elements.current[index] = el)}
          style={style}
          max={perBox}
          handleChange={(dataVal) => handleChange(dataVal, index)}
        />
      ))}
    </>
  );
};

// ✅ correct propTypes
InputBox.propTypes = {
  length: PropTypes.number.isRequired,
  perBox: PropTypes.number.isRequired,
  setMainVal: PropTypes.func.isRequired,
  style: PropTypes.object,
};

InputBox.defaultProps = {
  length: 3,
  perBox: 1,
};

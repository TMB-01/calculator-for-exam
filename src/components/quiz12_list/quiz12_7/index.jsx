import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz12_7.png";

function Quiz12_7() {
  const [data, setData] = useState({});
  const R = data?.R || 0;
  const E = data?.E || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["R", "E"]} />
        i(5T) = (0.5 * E) / R + (E / (6 * R)) * Math.E ** -10<br />
        Result: {((0.5 * E) / R + (E / (6 * R)) * Math.E ** -10).toFixed(4)} I
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz12_7;

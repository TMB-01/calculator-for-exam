import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz6_9.png";

function Quiz6_9() {
  const [data, setData] = useState({});
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;
  const R3 = data?.R3 || 0;
  const R4 = data?.R4 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["R1", "R2", "R3", "R4"]} />
        (R1 * R4) / (R1 + R4) + (R3 * R2) / (R3 + R2) <br />
        Result: {((R1 * R4) / (R1 + R4) + (R3 * R2) / (R3 + R2)).toFixed(4)} Ω
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz6_9;

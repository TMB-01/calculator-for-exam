import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz12_3.png";

function Quiz12_3() {
  const [data, setData] = useState({});
  const C = data?.C || 0;
  const E = data?.E || 0;
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["C", "E", "R1", "R2"]} />
        W = 0.5 * C * E ** 2 * ((R1 - R2) / (R1 + R2)) ** 2<br />
        Result: {(0.5 * C * E ** 2 * ((R1 - R2) / (R1 + R2)) ** 2).toFixed(4)} v
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz12_3;

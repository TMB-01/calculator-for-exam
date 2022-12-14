import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz12_6.png";

function Quiz12_6() {
  const [data, setData] = useState({});
  const I = data?.I || 0;
  const C1 = data?.C1 || 0;
  const C2 = data?.C2 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["I", "C1", "C2"]} />
        I1 = (I * C1) / (C1 + C2)<br />
        Result: {((I * C1) / (C1 + C2)).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz12_6;

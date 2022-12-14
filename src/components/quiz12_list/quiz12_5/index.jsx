import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz12_5.png";

function Quiz12_5() {
  const [data, setData] = useState({});
  const R = data?.R || 0;
  const E = data?.E || 0;
  const t = data?.t || 0;
  const u = data?.u || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["R", "E", "t", "u"]} />
        C = (-2 * t) / (R * Math.log(2 * (u / E) - 1)) <br />
        Result: {((-2 * t) / (R * Math.log(2 * (u / E) - 1))).toFixed(4)} v
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz12_5;

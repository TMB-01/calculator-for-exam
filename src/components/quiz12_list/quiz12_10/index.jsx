import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz12_10.png";

function Quiz12_10() {
  const [data, setData] = useState({});
  const C = data?.C || 0;
  const R = data?.R || 0;
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;
  const E1 = data?.E1 || 0;
  const E2 = data?.E2 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["C", "R", "R1", "R2", "E1", "E2"]}
        />
        deltaW = 0.5 * C * (R ** 2) * (((E2 / (R2 + R)) ** 2) - ((E1 / (R1 + R))
        ** 2))
        <br />
        Result:{" "}
        {(
          0.5 *
          C *
          R ** 2 *
          ((E2 / (R2 + R)) ** 2 - (E1 / (R1 + R)) ** 2)
        ).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz12_10;

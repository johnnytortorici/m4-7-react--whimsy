import React from "react";
import styled from "styled-components";

const Stat = ({ num, label }) => {
  return (
    <>
      <StatNum>{num}</StatNum>
      <StatLabel>{label}</StatLabel>
    </>
  );
};

const StatNum = styled.span`
  color: #000;
  font-weight: bold;
  padding-right: 5px;
`;

const StatLabel = styled.span`
  color: rgb(101, 119, 134);
  padding-right: 20px;
`;

export default Stat;

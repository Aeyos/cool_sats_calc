import React from "react";
import styled from "styled-components";
import COLORS from "../const/Colors";
import { Machine } from "../const/Enums";
import { MACHINE_GRAPHICS } from "../const/Graphics";
import { toFixed4 } from "../utils/float";
import StringUtils from "../utils/string";

const StyledMachineRender = styled.div`
  padding: 0.5rem;
  /* background: linear-gradient(0deg, #4d4d4d, #333); */
  background: #cccbcb;
  border-radius: 5px;
  border: 2px solid #333;
  position: relative;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 25%);
  margin: auto;
  display: inline-block;

  img {
    width: ${({ $small }) => ($small ? 196 : 256)}px;
  }

  .item_render__rates,
  .item_render__amount {
    position: absolute;
    background: ${COLORS.ORANGE};
    color: white;
    border-radius: 3px;
    font-weight: bold;
    line-height: 1.5;
    padding: 0 0.5rem;
    font-size: 1.5rem;
    z-index: 9999;
  }
  .item_render__amount {
    bottom: -0.25rem;
    right: -0.25rem;
  }

  .item_render__rates {
    top: -0.25rem;
    left: -0.25rem;
  }
`;

type ItemRenderProps = {
  machine: Machine;
  amount: number;
  clock: string;
  small?: boolean;
  inputRatios?: number[];
  outputRatios: number[];
};

function MachineRender({
  machine,
  amount,
  clock,
  small,
  inputRatios = [],
  outputRatios
}: ItemRenderProps) {
  return (
    <StyledMachineRender
      title={`x${amount} ${StringUtils.separateCamelCase(
        Machine[machine]
      )} with ${clock}% speed`}
      $small={small}
    >
      <img
        src={MACHINE_GRAPHICS[machine]}
        alt={StringUtils.separateCamelCase(Machine[machine])}
      />
      <span className="item_render__amount">
        x{toFixed4(amount)} ({clock}%)
      </span>
      <span className="item_render__rates">
        {inputRatios.join(",")}
        {inputRatios?.length ? " : " : ""}
        {outputRatios.join(",")}
      </span>
    </StyledMachineRender>
  );
}

export default MachineRender;

import React from "react";
import styled, { css } from "styled-components";
import COLORS from "../const/Colors";
import { Item } from "../const/Enums";
import { ITEM_GRAPHICS } from "../const/Graphics";
import { toFixed4 } from "../utils/float";
import StringUtils from "../utils/string";

type StyledItemRenderProps = {
  $small?: boolean
}

const StyledItemRender = styled.div<StyledItemRenderProps>`
  padding: 0.5rem;
  background: #cccbcb;
  border-radius: 5px;
  border: 2px solid #333;
  position: relative;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 25%);

  img {
    width: 128px;
  }

  .item_render__amount {
    position: absolute;
    bottom: -0.25rem;
    right: -0.25rem;
    background: ${COLORS.ORANGE};
    color: white;
    border-radius: 3px;
    font-weight: bold;
    line-height: 1.5;
    padding: 0 0.5rem;
    font-size: 1.5rem;
    z-index: 0;
  }

  & + & {
    margin-top: 1rem;
  }

  ${({ $small }) =>
    $small &&
    css`
      img {
        width: 32px;
      }

  .item_render__amount {
    font-size: 0.75rem;
  }
    `}
`;

type ItemRenderProps = {
  item: Item;
  amount?: number;
  label?: string;
  small?: boolean;
};

function ItemRender({ item, amount, label, small }: ItemRenderProps) {
  return (
    <StyledItemRender
      title={StringUtils.separateCamelCase(Item[item])}
      $small={small}
    >
      <img src={ITEM_GRAPHICS[item]} alt={Item[item]} />
      {amount || label ? (
        <span className="item_render__amount">{label || toFixed4(amount)}</span>
      ) : null}
    </StyledItemRender>
  );
}

export default ItemRender;

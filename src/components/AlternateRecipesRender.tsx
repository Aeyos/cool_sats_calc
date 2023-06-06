import styled from "styled-components";
import { Recipe } from "../models/Recipe";
import ItemRender from "./ItemRender";

type AlternateRecipesRenderProps = {
  alternateRecipes: Recipe[];
};

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * + * {
    margin-left: 2rem;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Inputs = styled.div`
  position: absolute;
  top: -0.75rem;
  left: -0.75rem;
  z-index: 0;
  display: flex;

  & > * {
    margin: 0 0.5rem 0 0 !important;
  }
`;

function AlternateRecipesRender({
  alternateRecipes
}: AlternateRecipesRenderProps) {
  if (!alternateRecipes?.length) return null;

  return (
    <Flex>
      {alternateRecipes.map((alternateRecipe) => (
        <Wrapper>
          <Inputs>
            {alternateRecipe.inputs.map((item) => (
              <ItemRender key={item} item={item} amount={alternateRecipe.ratioFor(item)} small />
            ))}
          </Inputs>
          <ItemRender
            key={alternateRecipe.outputs[0]}
            item={alternateRecipe.outputs[0]}
            amount={alternateRecipe.ratioFor(alternateRecipe.outputs[0])}
          />
        </Wrapper>
      ))}
    </Flex>
  );
}

export default AlternateRecipesRender;

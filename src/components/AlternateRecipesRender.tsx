import styled from "styled-components";
import { Recipe } from "../models/Recipe";
import ItemRender from "./ItemRender";

type AlternateRecipesRenderProps = {
  alternateRecipes: Recipe[];
};

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Inputs = styled.div`
  position: absolute;
  top: 0;
  width: 32px;
  height: 32px;
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
              <ItemRender key={item} item={item} small />
            ))}
          </Inputs>
          <ItemRender
            key={alternateRecipe.outputs[0]}
            item={alternateRecipe.outputs[0]}
          />
        </Wrapper>
      ))}
    </Flex>
  );
}

export default AlternateRecipesRender;

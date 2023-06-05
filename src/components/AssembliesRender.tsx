import React from "react";
import { Item } from "../const/Enums";
import { Calculation } from "../models/Calculation";
import AssemblyRender from "./AssemblyRender";

type AssembliesRenderProps = {
  calculation: Calculation;
  update: () => void;
};

function AssembliesRender({ calculation, update }: AssembliesRenderProps) {
  const removeAssembly = (index) => () => {
    calculation.removeAssembly(index);
    update();
  };

  const alternateRecipe = (item: Item) => () => {
    calculation.useAlternateRecipe(item);
    update();
  };

  return calculation
    ? calculation.assemblies.map((assembly, index) => (
        <AssemblyRender
          key={assembly.getMachineMetadata().output}
          assembly={assembly}
          hasAlternateRecipe={calculation.hasAlternateRecipe(
            assembly.recipe.outputs[0]
          )}
          onRemoveClick={removeAssembly(index)}
          onAlternateRecipeClick={alternateRecipe(assembly.recipe.outputs[0])}
        />
      ))
    : null;
}

export default AssembliesRender;

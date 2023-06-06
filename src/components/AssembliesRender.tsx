import React from "react";
import { Item, Machine } from "../const/Enums";
import { Calculation } from "../models/Calculation";
import { Recipe } from "../models/Recipe";
import AssemblyRender from "./AssemblyRender";

type AssembliesRenderProps = {
  itemType: string,
  amount: string,
  alternateRecipes: Recipe[],
  providedItems: Item[],
  lowestMachineLevel?: Machine
};

const defaultCalculation = new Calculation(Item.AutomatedWiring, 15)

function AssembliesRender({ itemType, amount, alternateRecipes, providedItems, lowestMachineLevel = Machine.MinerMk1 }: AssembliesRenderProps) {
  const [calculation, setCalculation] = React.useState<Calculation>(defaultCalculation);

  React.useEffect(() => {
    if (calculation.finalProduct === +itemType && calculation.finalProductAmount === +amount) return

    setCalculation(new Calculation(+itemType, +amount))
  }, [itemType, amount])

  const removeAssembly = (index: number) => () => {
    calculation.removeAssembly(index);
  };

  const alternateRecipe = (item: Item) => () => {
    calculation.useAlternateRecipe(item);
  };

  return calculation
    ? <>{calculation.assemblies.map((assembly, index) => (
      <AssemblyRender
        key={assembly.getMachineMetadata().output}
        assembly={assembly}
        hasAlternateRecipe={calculation.hasAlternateRecipe(
          assembly.recipe.outputs[0]
        )}
        onRemoveClick={removeAssembly(index)}
        onAlternateRecipeClick={alternateRecipe(assembly.recipe.outputs[0])}
      />
    ))}</>
    : null;
}

export default AssembliesRender;

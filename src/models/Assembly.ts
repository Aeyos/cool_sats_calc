import { Recipe } from "./Recipe";
import { percentToFixed4 } from "../utils/float";
import { Machine } from "../const/Enums";

export class Assembly {
  recipe: Recipe;
  amount: number;

  constructor(recipe: Recipe, amount: number) {
    this.recipe = recipe;
    this.amount = amount;
  }

  getMachineMetadata() {
    const machineAmount = Math.ceil(this.amount);
    const machineAmountX2 = Math.ceil(this.amount / 2);
    const machineAmountX4 = Math.ceil(this.amount / 4);
    const recipe = this.recipe;

    return {
      inputs: recipe.inputs,
      outputs: recipe.outputs,
      output: recipe.outputs[0],
      outputCount: recipe.ratioFor(recipe.outputs[0]) * this.amount,
      machine: recipe.machine,
      machineName: Machine[recipe.machine],
      machineAmount: Math.ceil(this.amount),
      machineAmountX2: Math.ceil(this.amount / 2),
      machineAmountX4: Math.ceil(this.amount / 4),
      clock: percentToFixed4(this.amount / machineAmount),
      clockX2: percentToFixed4(this.amount / machineAmountX2 / 2),
      clockX4: percentToFixed4(this.amount / machineAmountX4 / 4),
      inputRatios: recipe.inputs.map(recipe.ratioFor),
      outputRatios: recipe.outputs.map(recipe.ratioFor)
    };
  }
}

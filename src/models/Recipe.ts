import { Item, Machine } from "../const/Enums";

export class Recipe {
  inputs: Item[];
  outputs: Item[];
  allItems: Item[];
  machine: Machine;
  ratio: ReadonlyArray<number>;

  constructor(
    inputs: Item[],
    outputs: Item[],
    machine: Machine,
    ratio: number[]
  ) {
    this.inputs = inputs;
    this.outputs = outputs;
    this.machine = machine;
    this.ratio = ratio;
    this.allItems = [...inputs, ...outputs];
  }

  ratioFor = (item: Item) => {
    const itemIndex = this.allItems.indexOf(item);
    if (itemIndex >= this.ratio.length) {
      throw Error(`Invalid ratio index for item ${item}`);
    }

    return this.ratio[itemIndex];
  };

  machinesFor(item: Item, requiredAmount: number) {
    const ratio = this.ratioFor(item);

    if (ratio < 0.0000000001) {
      throw Error(`Ratio for ${Item[item]} is too small ${ratio}`);
    }

    return requiredAmount / ratio;
  }
}

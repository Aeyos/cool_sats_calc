import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import AssembliesRender from "./components/AssembliesRender";
import { Item } from "./const/Enums";
import RECIPES, { ALTERNATE_RECIPES } from "./const/Recipes";
import { Calculation } from "./models/Calculation";
import AppStyle from "./components/AppStyle";
import "./styles.css";
import StringUtils from "./utils/string";
import Select from "./components/Select";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import useHackyUpdate from "./hooks/useHackyUpdate";
import ProvisionsRender from "./components/ProvisionsRender";
import AlternateRecipesRender from "./components/AlternateRecipesRender";
import { Recipe } from "./models/Recipe";
import Fixed from "./components/Fixed";

const defaultItemType =
  window.localStorage.getItem("app.form.values.itemType") ??
  Item.AutomatedWiring.toString();
const defaultAmount =
  window.localStorage.getItem("app.form.values.amount") ?? "10";

const options = Object.keys(RECIPES)
  .map((key) => ({
    label: StringUtils.separateCamelCase(Item[+key]),
    value: key
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

const alternateRecipesOptions = [{
  label: "Select an alternate recipe",
  value: '',
}].concat(Object.keys(ALTERNATE_RECIPES)
  .map((key) => ({
    label: StringUtils.separateCamelCase(key),
    value: key,
  }))
  .sort((a, b) => a.label.localeCompare(b.label)));

export default function App() {
  // STATE
  const [values, setValues] = useState({
    itemType: defaultItemType,
    amount: defaultAmount,
    alternateRecipe: Object.keys(ALTERNATE_RECIPES)[0]
  });
  const [alternateRecipes, setAlternateRecipes] = useState<string[]>([]);

  // HANDLERS
  function handleChange(evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    console.log({ evt, value: evt.target.value });
    setValues({
      ...values,
      [evt.target.name]: evt.target.value
    });
  }

  function handleAlternateRecipeAdd(evt: React.ChangeEvent<HTMLSelectElement>) {
    setAlternateRecipes([...alternateRecipes, evt.target.value])
  }

  // MEMO
  const { filteredAlternateRecipes, alternateRecipesObject } = React.useMemo(() => ({
    filteredAlternateRecipes: alternateRecipesOptions.filter(option => !alternateRecipes.includes(option.value)),
    alternateRecipesObject: alternateRecipes.map(key => ALTERNATE_RECIPES[key]),
  }), [alternateRecipes])

  // COMPONENT
  return (
    <AppStyle>
      <Fixed>
        <p>Satisfactory Calculator</p>
        <Select
          name="itemType"
          onChange={handleChange}
          options={options}
          value={values.itemType}
        />
        <TextInput type="number" name="amount" onChange={handleChange} value={values.amount} />
      </Fixed>

      <h2>Alternate Recipes</h2>
      <Select
        name="alternateRecipe"
        onChange={handleAlternateRecipeAdd}
        options={filteredAlternateRecipes}
        value=""
      />
      {/* <Button onClick={addAlternateRecipe}>Add</Button> */}
      <AlternateRecipesRender alternateRecipes={alternateRecipesObject} />

      <h2>Provided Items</h2>

      <h2>Factory</h2>
      <AssembliesRender
        itemType={values.itemType}
        amount={values.amount}
        alternateRecipes={[]}
        providedItems={[]}
        lowestMachineLevel={undefined}
      />
    </AppStyle>
  );
}

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

const alternateRecipesOptions = Object.keys(ALTERNATE_RECIPES)
  .map((key) => ({
    label: StringUtils.separateCamelCase(key),
    value: key
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

const defaultCalculation = new Calculation(+defaultItemType, +defaultAmount)

export default function App() {
  const [values, setValues] = useState({
    itemType: defaultItemType,
    amount: defaultAmount,
    alternateRecipe: Object.keys(ALTERNATE_RECIPES)[0]
  });
  const [calculation, setCalculation] = useState<Calculation>(defaultCalculation);
  const [alternateRecipes, setAlternateRecipes] = useState<Recipe[]>([]);
  const update = useHackyUpdate();

  const calculateDisabled =
    calculation &&
    String(calculation.finalProduct) === values.itemType &&
    String(calculation.finalProductAmount) === values.amount;

  function calculate() {
    const calculation = new Calculation(
      values.itemType ? +values.itemType : 0,
      values.amount ? +values.amount : 1
    );

    window.localStorage.setItem("app.form.values.itemType", values.itemType);
    window.localStorage.setItem("app.form.values.amount", values.amount);

    setCalculation(calculation);
  }

  function handleChange(evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    console.log({ evt, value: evt.target.value });
    setValues({
      ...values,
      [evt.target.name]: evt.target.value
    });
  }

  function addAlternateRecipe() {
    console.log({
      ALTERNATE_RECIPES,
      valuesAl: values.alternateRecipe,
      v: ALTERNATE_RECIPES[values.alternateRecipe]
    });
    setAlternateRecipes([
      ...alternateRecipes,
      ALTERNATE_RECIPES[values.alternateRecipe]
    ]);
  }

  useEffect(() => {
    calculate();
    /** @reason We only want to fire calculate on first render */
    // eslint-disable-next-line
  }, []);

  return (
    <AppStyle>
      <h1>Satisfactory Calculator</h1>
      <Select
        name="itemType"
        onChange={handleChange}
        options={options}
        value={values.itemType}
      />
      <TextInput name="amount" onChange={handleChange} value={values.amount} />
      <Button disabled={calculateDisabled} onClick={calculate}>
        Calculate
      </Button>

      <h2>Alternate Recipes</h2>
      <Select
        name="alternateRecipe"
        onChange={handleChange}
        options={alternateRecipesOptions}
        value={values.alternateRecipe}
      />
      <Button onClick={addAlternateRecipe}>Add</Button>
      <AlternateRecipesRender alternateRecipes={alternateRecipes} />

      <h2>Provided Items</h2>

      <h2>Factory</h2>
      <AssembliesRender calculation={calculation} update={update} />
    </AppStyle>
  );
}

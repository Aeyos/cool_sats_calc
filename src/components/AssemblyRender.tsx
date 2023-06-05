import styled from "styled-components";
import { Machine } from "../const/Enums";
import { Assembly } from "../models/Assembly";
import ItemRender from "./ItemRender";
import MachineRender from "./MachineRender";
import { Clear, ChangeCircle } from "@mui/icons-material";

const FlexCell = styled.div`
  padding: 1rem;
  border-radius: 5px;
  background: #333;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto 1rem;
  z-index: 1;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 2rem;
  position: relative;

  &::before {
    background: #333;
    position: absolute;
    content: " ";
    height: 1rem;
    width: 500px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Button = styled.button`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: orange;
  color: white;
  font-weight: bold;
  border: none;
  transition: filter 0.1s ease-in-out;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(1.25);
  }

  &:active {
    filter: brightness(0.75);
  }
`;

type AssemblyRenderProps = {
  assembly: Assembly;
  hasAlternateRecipe: boolean;
  onRemoveClick: () => void;
  onAlternateRecipeClick: () => void;
};

function AssemblyRender({
  assembly,
  hasAlternateRecipe,
  onRemoveClick,
  onAlternateRecipeClick
}: AssemblyRenderProps) {
  const meta = assembly.getMachineMetadata();

  function renderCorrectMachine() {
    if (meta.machine === Machine.MinerMk1) {
      return (
        <div style={{ display: "flex" }}>
          <MachineRender
            machine={meta.machine}
            amount={meta.machineAmount}
            clock={meta.clock}
            outputRatios={[60]}
            small
          />
          <MachineRender
            machine={Machine.MinerMk2}
            amount={meta.machineAmountX2}
            clock={meta.clockX2}
            outputRatios={[120]}
            small
          />
          <MachineRender
            machine={Machine.MinerMk3}
            amount={meta.machineAmountX4}
            clock={meta.clockX4}
            outputRatios={[240]}
            small
          />
        </div>
      );
    }

    if (meta.machine === Machine.Refinery) {
      return (
        <MachineRender
          machine={Machine.OilExtractor}
          amount={meta.machineAmount}
          clock={meta.clock}
          outputRatios={[120]}
          small
        />
      );
    }

    return (
      <MachineRender
        machine={meta.machine}
        amount={meta.machineAmount}
        clock={meta.clock}
        outputRatios={meta.outputRatios}
      />
    );
  }

  return (
    <Flex>
      <FlexCell>
        <Button title="Remove this assembly line" onClick={onRemoveClick}>
          <Clear />
        </Button>
        {hasAlternateRecipe ? (
          <Button title="Use alternate recipe" onClick={onAlternateRecipeClick}>
            <ChangeCircle />
          </Button>
        ) : null}
      </FlexCell>
      {assembly.recipe.inputs.length ? (
        <FlexCell>
          {assembly.recipe.inputs.map((input) => (
            <ItemRender
              key={input}
              item={input}
              amount={assembly.recipe.ratioFor(input) * assembly.amount}
            />
          ))}
        </FlexCell>
      ) : null}
      <FlexCell>{renderCorrectMachine()}</FlexCell>
      <FlexCell>
        {assembly.recipe.outputs.map((output) => (
          <ItemRender
            key={output}
            item={output}
            amount={assembly.recipe.ratioFor(output) * assembly.amount}
          />
        ))}
      </FlexCell>
    </Flex>
  );
}

export default AssemblyRender;

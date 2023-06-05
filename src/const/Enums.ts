enum Item {
  // ORE
  Limestone,
  CoalOre,
  IronOre,
  CopperOre,
  CrudeOil,
  QuartzCrystal,
  // INGOT
  Concrete,
  IronIngot,
  CopperIngot,
  SteelIngot,

  // LEVEL 1 CONSTRUCTOR
  // Iron
  IronPlate,
  IronRod,
  // Copper
  Wire,
  CopperSheet,
  // Steel
  SteelBeam,
  SteelPipe,
  // Plastic
  EmptyCanister,

  // LEVEL 2 CONSTUCTOR
  Screws,
  Cable,

  // Level 1 Refinery
  Rubber,
  Plastic,
  Fuel,
  HeavyOilResidue,
  LiquidBiofuel,
  PetroleumCoke,
  PolymerResin,

  // LEVEL 1 ASSEMBLER
  // Iron
  ReinforcedIronPlate,
  Rotor,
  // Copper
  Stator,
  // Steel
  EncasedIndustrialBeam,
  // Plastic
  CircuitBoard,
  // Quartz
  Silica,

  // LEVEL 2 ASSEMBLER
  ModularFrame,
  Motor,

  // Packager
  PackagedFuel,
  PackagedHeavyOilResidue,
  PackagedLiquidBiofuel,

  // LEVEL 1 MANUFACTURER
  Computer,

  // SPACE ELEVATOR
  SmartPlating,
  VersatileFramework,
  AutomatedWiring,
  AdaptiveControlUnit,
  ModularEngine,

  // CONSUMABLES
  SolidBiofuel,
  ColorCartridge
}

enum Machine {
  Assembler,
  Blender,
  Constructor,
  CraftBench,
  EquipmentWorkshop,
  Foundry,
  Manufacturer,
  MinerMk1,
  MinerMk2,
  MinerMk3,
  OilExtractor,
  Packager,
  Refinery,
  Smelter
}

export { Item, Machine };

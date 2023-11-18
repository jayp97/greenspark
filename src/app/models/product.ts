export type SelectableColors = "white" | "black" | "blue" | "green" | "beige";

export type Product = {
  id: number;
  type: "carbon" | "plastic bottles" | "trees";
  amount: number;
  action: "collects" | "plants" | "offsets";
  active: boolean;
  linked: boolean;
  selectedColor: SelectableColors;
};

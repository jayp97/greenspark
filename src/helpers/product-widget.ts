import { Product, SelectableColors } from "@/app/models/product";

export const badgeColorSelector = (color: SelectableColors) => {
  switch (color) {
    case "white":
      return "bg-gs-white";
    case "black":
      return "bg-gs-black";
    case "green":
      return "bg-gs-green";
    case "blue":
      return "bg-gs-blue";
    case "beige":
      return "bg-gs-beige";
    default:
      return "bg-gs-white";
  }
};

export const descriptionMaker = (product: Product) => {
  switch (product.type) {
    case "trees":
      return {
        partOne: `This product ${product.action}`,
        partTwo: `${product.amount} trees`,
      };
    case "carbon":
      return {
        partOne: `This product ${product.action}`,
        partTwo: `${product.amount}kgs of carbon`,
      };
    case "plastic bottles":
      return {
        partOne: `This product ${product.action}`,
        partTwo: `${product.amount} plastic bottles`,
      };
    default:
      return {
        partOne: `This product ${product.action}`,
        partTwo: `${product.amount} trees`,
      };
  }
};

"use client";

import { Product } from "@/app/models/product";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Switch } from "../ui/switch";
import { BadgeColorCheckbox } from "../badge-color-checkbox";
import GreensparkLogo from "../greenspark-logo";

type ProductProps = {
  product: Product;
};

const badgeColorSelector = (color: string) => {
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

export default function ProductWidget({ product }: ProductProps) {
  const [color, setColor] = useState(product.selectedColor);
  return (
    <div className="">
      <div
        className={cn(
          badgeColorSelector(color),
          "text-gs-white rounded-md w-full p-3"
        )}
      >
        <div className="flex flex-row">
          <div className="mr-4">
            <GreensparkLogo
              color={color === "white" || color === "beige" ? "green" : "white"}
            />
          </div>
          <div className="flex flex-col justify-start items-start">
            <span className="text-sm">{`This product ${product.action}`}</span>
            <span className="font-semibold text-xl">{`${product.amount} ${product.type}`}</span>
          </div>
        </div>
      </div>
      <div className="py-3 w-full grid grid-cols gap-2">
        <div className="text-gs-green flex flex-row justify-between items-center group">
          <span>Link to Public Profile</span>
          <Checkbox />
        </div>
        <div className="text-gs-green flex flex-row justify-between items-center group">
          <span>Badge color</span>
          <BadgeColorCheckbox />
        </div>
        <div className="text-gs-green flex flex-row justify-between items-center group">
          <span>Active badge</span>
          <Switch />
        </div>
      </div>
    </div>
  );
}

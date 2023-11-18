"use client";

import { Product } from "@/app/models/product";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Switch } from "../ui/switch";
import { BadgeColorCheckbox } from "../badge-color-checkbox";
import GreensparkLogo from "../greenspark-logo";
import useProductWidgetStore from "@/stores/use-product-widget-store";

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

const descriptionMaker = (product: Product) => {
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

export default function ProductWidget({ product }: ProductProps) {
  const [color, setColor] = useState(product.selectedColor);
  const [linked, setLinked] = useState(product.linked);
  const activeBadge = useProductWidgetStore((state) => state.activeBadge);
  const setActiveBadge = useProductWidgetStore((state) => state.setActiveBadge);

  const { partOne, partTwo } = descriptionMaker(product);

  useEffect(() => {
    setColor(product.selectedColor);
    if (product.active) {
      setActiveBadge(product.type);
    }
  }, [product.selectedColor, product.active, setActiveBadge, product.type]);

  const onCheckboxChange = () => {
    if (product.type === activeBadge) {
      setActiveBadge("");
      return;
    }
    setActiveBadge(product.type);
  };

  const onLinkedChange = () => {
    setLinked(!linked);
  };
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
            <span className="text-sm">{partOne}</span>
            <span className="font-semibold text-xl">{partTwo}</span>
          </div>
        </div>
      </div>
      <div className="py-3 w-full grid grid-cols gap-2">
        <div className="text-gs-green flex flex-row justify-between items-center group">
          <span>Link to Public Profile</span>
          <Checkbox checked={linked} onCheckedChange={onLinkedChange} />
        </div>
        <div className="text-gs-green flex flex-row justify-between items-center group">
          <span>Badge color</span>
          <BadgeColorCheckbox />
        </div>
        <div className="text-gs-green flex flex-row justify-between items-center group">
          <span>Active badge</span>
          <Switch
            checked={product.type === activeBadge}
            onCheckedChange={onCheckboxChange}
          />
        </div>
      </div>
    </div>
  );
}

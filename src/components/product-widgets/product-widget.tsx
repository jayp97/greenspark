"use client";

import { Product } from "@/app/models/product";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Switch } from "../ui/switch";
import GreensparkLogo from "../greenspark-logo";
import useProductWidgetStore from "@/stores/use-product-widget-store";
import BadgeColorSelector from "./badge-color-selector";
import { badgeColorSelector, descriptionMaker } from "@/helpers/product-widget";
import { Icons } from "@/icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type ProductProps = {
  product: Product;
};

export default function ProductWidget({ product }: ProductProps) {
  const [selectedColor, setSelectedColor] = useState(product.selectedColor);
  const [linked, setLinked] = useState(product.linked);
  const activeBadge = useProductWidgetStore((state) => state.activeBadge);
  const setActiveBadge = useProductWidgetStore((state) => state.setActiveBadge);

  const { partOne, partTwo } = descriptionMaker(product);

  useEffect(() => {
    setSelectedColor(product.selectedColor);
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
    <div>
      <div
        className={cn(
          badgeColorSelector(selectedColor),
          selectedColor === "white" || selectedColor === "beige"
            ? "text-gs-green"
            : "text-gs-white",
          "rounded-md w-full p-3"
        )}
      >
        <div className="flex flex-row">
          <div className="mr-4">
            <GreensparkLogo
              color={
                selectedColor === "white" || selectedColor === "beige"
                  ? "green"
                  : "white"
              }
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
          <div className="flex flex-row justify-start items-start">
            <span>Link to Public Profile</span>
            <Tooltip>
              <TooltipTrigger>
                <Icons.info className="text-gs-green h-3 w-3 ml-[1px]" />
              </TooltipTrigger>
              <TooltipContent className="max-w-[250px] p-6 border-none text-center">
                <p className="text-gs-black pb-3">
                  This widget links directly to your public profile so that you
                  can easily share your impact with your customers. Turn it off
                  here if you do not want the badge to link to it.
                </p>
                <a
                  className="text-center text-gs-darkGreen font-semibold"
                  href="#"
                >
                  View Public Profile
                </a>
              </TooltipContent>
            </Tooltip>
          </div>

          <Checkbox checked={linked} onCheckedChange={onLinkedChange} />
        </div>
        <div className="text-gs-green flex flex-row justify-between items-center group">
          <span>Badge color</span>
          <BadgeColorSelector
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
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

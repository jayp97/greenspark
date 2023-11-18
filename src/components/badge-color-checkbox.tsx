"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

interface BadgeColorCheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  color: string;
}

const BadgeColorCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  BadgeColorCheckboxProps
>(({ className, color, ...props }, ref) => {
  const [isHovering, setIsHovering] = React.useState(false);
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "peer h-4 w-4 shrink-0  disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-2 data-[state=checked]:border-gs-gray data-[state=checked]:text-transparent",
        isHovering
          ? "group-hover:bg-opacity-50 group-hover:border-opacity-10"
          : "",
        color === "white" ? "bg-white" : "",
        color === "black" ? "bg-gs-black" : "",
        color === "green" ? "bg-gs-green" : "",
        color === "blue" ? "bg-gs-blue" : "",
        color === "beige" ? "bg-gs-beige" : "",

        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
BadgeColorCheckbox.displayName = CheckboxPrimitive.Root.displayName;

export { BadgeColorCheckbox };

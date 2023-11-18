"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const [isHovering, setIsHovering] = React.useState(false);
  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-gs-paleGreen transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gs-darkGreen data-[state=unchecked]:bg-input data-[state=checked]:border-gs-gray",

        className
      )}
      {...props}
      ref={ref}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-6 w-6 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-[-1px] border border-gs-cream data-[state=checked]:border-gs-darkGreen  ",
          isHovering
            ? "group-hover:ring-opacity-20 group-hover:ring-[6px] group-hover:ring-gs-darkGreen"
            : ""
        )}
      />
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };

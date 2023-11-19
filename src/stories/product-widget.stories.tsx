import type { Meta, StoryObj } from "@storybook/react";

import ProductWidget from "@/components/product-widgets/product-widget";
import { TooltipProvider } from "@/components/ui/tooltip";

const meta = {
  title: "Example/ProductWidget",
  component: ProductWidget,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div>
        <TooltipProvider delayDuration={200}>
          <Story />
        </TooltipProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof ProductWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PlasticBottles: Story = {
  args: {
    product: {
      id: 1,
      type: "plastic bottles",
      amount: 100,
      action: "collects",
      active: true,
      linked: true,
      selectedColor: "green",
    },
  },
};

export const CarbonOffset: Story = {
  args: {
    product: {
      id: 2,
      type: "carbon",
      amount: 20,
      action: "offsets",
      active: false,
      linked: false,
      selectedColor: "blue",
    },
  },
};

export const Trees: Story = {
  args: {
    product: {
      id: 3,
      type: "trees",
      amount: 10,
      action: "plants",
      active: false,
      linked: false,
      selectedColor: "black",
    },
  },
};

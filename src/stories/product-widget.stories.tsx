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

export const Primary: Story = {
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

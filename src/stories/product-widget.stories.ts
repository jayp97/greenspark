import type { Meta, StoryObj } from "@storybook/react";

import ProductWidget from "@/components/product-widgets/product-widget";

const meta = {
  title: "Example/ProductWidget",
  component: ProductWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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

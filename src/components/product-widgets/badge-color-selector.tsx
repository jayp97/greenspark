import { SelectableColors } from "@/app/models/product";
import { BadgeColorCheckbox } from "../badge-color-checkbox";

type BadgeColorSelectorProps = {
  selectedColor: SelectableColors;
  setSelectedColor: (color: SelectableColors) => void;
};

const selectableColorsArray: SelectableColors[] = [
  "blue",
  "green",
  "beige",
  "white",
  "black",
];

export default function BadgeColorSelector({
  selectedColor,
  setSelectedColor,
}: BadgeColorSelectorProps) {
  return (
    <div className="flex flex-row gap-2 justify-center items-center">
      {selectableColorsArray.map((color, id) => (
        <div key={id} className="">
          <BadgeColorCheckbox
            color={color}
            checked={selectedColor === color}
            onChange={() => setSelectedColor(color)}
          />
        </div>
      ))}
    </div>
  );
}

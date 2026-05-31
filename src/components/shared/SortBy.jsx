import { Button, Dropdown, Header, Label } from "@heroui/react";  // removed Selection
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const CategoryDropdown = ({ onChange }) => {
  const [selected, setSelected] = useState(new Set([]));

  const handleChange = (keys) => {
    setSelected(keys);
    const value = Array.from(keys)[0];
    onChange(value);
  };

  return (
    <Dropdown>
      <Button
        aria-label="Category"
        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1a1f2e] hover:bg-[#2d6a4f] border-none rounded-xl text-white text-sm font-medium transition-colors"
      >
        <SlidersHorizontal size={16} />
        Category
        <ChevronDown size={14} className="text-[#a8d8b9]" />
      </Button>

      <Dropdown.Popover className="min-w-60">
        <Dropdown.Menu
          selectedKeys={selected}
          selectionMode="single"
          onSelectionChange={handleChange}
        >
          <Dropdown.Section>
            <Header>Sports</Header>
            <Dropdown.Item id="Football" textValue="Football">
              <Dropdown.ItemIndicator />
              <Label>Football</Label>
            </Dropdown.Item>
            <Dropdown.Item id="Cricket" textValue="Cricket">
              <Dropdown.ItemIndicator />
              <Label>Cricket</Label>
            </Dropdown.Item>
            <Dropdown.Item id="Badminton" textValue="Badminton">
              <Dropdown.ItemIndicator />
              <Label>Badminton</Label>
            </Dropdown.Item>
            <Dropdown.Item id="Tennis" textValue="Tennis">
              <Dropdown.ItemIndicator />
              <Label>Tennis</Label>
            </Dropdown.Item>
            <Dropdown.Item id="Basketball" textValue="Basketball">
              <Dropdown.ItemIndicator />
              <Label>Basketball</Label>
            </Dropdown.Item>
            <Dropdown.Item id="Volleyball" textValue="Volleyball">
              <Dropdown.ItemIndicator />
              <Label>Volleyball</Label>
            </Dropdown.Item>
            <Dropdown.Item id="Other" textValue="Other">
              <Dropdown.ItemIndicator />
              <Label>Other</Label>
            </Dropdown.Item>
          </Dropdown.Section>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default CategoryDropdown;
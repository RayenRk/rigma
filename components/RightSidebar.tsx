import { useRef } from "react";
import Export from "./settings/Export";
import Dimensions from "./settings/Dimensions";
import Text from "./settings/Text";
import Color from "./settings/Color";
import { RightSidebarProps } from "@/types/type";
import { modifyShape } from "@/lib/shapes";

function RightSidebar({
  elementAttributes,
  setElementAttributes,
  fabricRef,
  activeObjectRef,
  isEditingRef,
  syncShapeInStorage,
}: RightSidebarProps) {

  const colorInputRef = useRef(null);
  const strokeInputRef = useRef(null);

  const handleInputChange = (property: string, value: string) => {
    if (!isEditingRef.current) isEditingRef.current = true;

    setElementAttributes((prev) => ({
      ...prev,
      [property]: value,
    }));

    modifyShape({
      canvas: fabricRef.current as fabric.Canvas,
      property,
      value,
      activeObjectRef,
      syncShapeInStorage,
    });
  }

  return (
    <section
      className="flex flex-col border-t border-primary-grey-200
    bg-primary-black text-primary-grey-300 
    sticky right-0 h-screen w-[232px] max-sm:hidden select-none"
    >
      <h3 className="px-5 pt-4 text-xs uppercase">Design</h3>
      <span className="text-sm text-primary-grey-300 mt-3 px-5 border-b border-primary-grey-200 pb-4">
        Change Propreties
      </span>

      <Dimensions 
      width={elementAttributes.width}
      height={elementAttributes.height}
      handleInputChange={handleInputChange}
      isEditingRef={isEditingRef}
      />
      <Text 
      fontFamily={elementAttributes.fontFamily}
      fontSize={elementAttributes.fontSize}
      fontWeight={elementAttributes.fontWeight}
      handleInputChange={handleInputChange}
      />
      <div className="flex flex-row w-full">
      <Color 
      inputRef={colorInputRef}
      attribute={elementAttributes.fill}
      attributeType="fill"
      placeholder="color"
      handleInputChange={handleInputChange}
      />
      <Color 
      inputRef={strokeInputRef}
      attribute={elementAttributes.stroke}
      attributeType="stroke"
      placeholder="stroke"
      handleInputChange={handleInputChange}
      />
      </div>
      <Export />
    </section>
  );
}

export default RightSidebar;

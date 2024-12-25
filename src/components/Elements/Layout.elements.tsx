import { DndContext } from "@dnd-kit/core";
import { LayoutTypes } from "../../@types/Element.types";
import Draggable from "../Drag&Drop/DraggableElement";

const elements: LayoutTypes[] = [
  {
    id: "kdjfls",
    name: (
      <span className="">
        H <sub>2</sub>
      </span>
    ),
    note: "Title field",
  },
  {
    id: "kdjfls",
    name: (
      <span>
        H <sub>2</sub>
      </span>
    ),
    note: "SubTitle field",
  },
  {
    id: "00000000",
    name: <span>P</span>,
    note: "Paragraph field",
  },
];

export const LayoutElement = () => {
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over) {
      console.log(`Dropped ${active.id} over ${over.id}`);
    }
  };

  return (
    <div className=" w-full flex flex-col items-start justify-start gap-2">
      <h1 className=" text-[10px] text-[var(--secondary-text)] w-full ">
        Layout Element
      </h1>
      <div className="w-full justify-start  gap-x-7 gap-y-3 flex-wrap flex">
        {elements?.map((element) => (
          <DndContext  onDragEnd={handleDragEnd}>
            <Draggable {...element} key={element.id} />
          </DndContext>
        ))}
      </div>
    </div>
  );
};

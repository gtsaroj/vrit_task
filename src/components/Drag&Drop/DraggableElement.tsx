import { useDraggable } from "@dnd-kit/core";
import { LayoutTypes } from "../../@types/Element.types";

export default function Draggable({ id, name, note }: LayoutTypes) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });

 const style = {

    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    cursor: "grab",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <div
        draggable
        className=" flex hover:bg-slate-100 flex-col w-[100px] h-[75px] cursor-pointer hover:shadowsm duration-150 p-2 rounded-lg border-[1px] border-[var(--border-color)] items-center justify-evenly gap-0.5 "
        key={id}
      >
        {name}
        <p className="text-[11px] text-center ">{note}</p>
      </div>
    </div>
  );
}

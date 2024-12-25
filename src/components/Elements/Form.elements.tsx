import { FormTypes } from "../../@types/Element.types";
import { MdOutlineTextFields } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";
import { TbNumber123 } from "react-icons/tb";
import { BsTextareaResize } from "react-icons/bs";
import { MdOutlineCheckBox } from "react-icons/md";
import { LuLassoSelect } from "react-icons/lu";

const elements: FormTypes[] = [
  {
    id: "fsjldjoas",
    note: "Text field",
    icon: <MdOutlineTextFields className="size-5" />,
  },
  {
    id: "skdfjlksdjodsj",
    note: "Number field",
    icon: <TbNumber123 className="size-5" />,
  },
  {
    id: "skdf123jlksdjodsj",
    note: "Text area field",
    icon: <BsTextareaResize className="size-5" />,
  },
  {
    id: "skdf123j75lksdjodsj",
    note: "Date field",
    icon: <BsCalendarDateFill className="size-5" />,
  },
  {
    id: "skdf123j75lksdje3odsj",
    note: "Select field",
    icon: <LuLassoSelect className="size-5" />,
  },
  {
    id: "skdf123j7fe5lksdjodsj",
    note: "CheckBox field",
    icon: <LuLassoSelect className="size-5" />,
  },
];

export const FormElement = () => {
  return (
    <div className="flex flex-col  w-full   items-start justify-start gap-3">
      <h1 className="text-[10px] text-[var(--secondary-text)] w-full ">Form Elements</h1>
      <div className=" w-full grid grid-cols-2 justify-items-start  gap-y-3 ">
        {elements?.map((element) => (
          <div draggable
            className=" cursor-pointer hover:bg-slate-100 hover:shadow-sm duration-150 flex flex-col w-[100px] h-[75px]  p-2 rounded-lg border-[1px] border-[var(--border-color)] items-center justify-evenly gap-0.5"
            key={element.id}
          >
            {element.icon}
            <p className=" text-center text-[11px] ">
              {element.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

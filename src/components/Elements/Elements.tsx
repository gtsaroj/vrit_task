import { FormElement } from "./Form.elements"
import { LayoutElement } from "./Layout.elements"

export const Elements = () => {
 return (
  <div className="  w-full p-3 bg-[var(--light-foreground)] h-full flex flex-col items-start gap-7 justify-start ">
   <h1 className=" text-[11px] text-[var(--secondary-text)] border-b-[1px] border-[var(--border-color)] w-full pb-2 ">Drag & Drag Elements</h1>
   <div className="w-full flex flex-col items-start h-fit overflow-y-auto justify-start gap-8">
    <LayoutElement/>
    <FormElement/>
    </div>
  </div>
 )
}


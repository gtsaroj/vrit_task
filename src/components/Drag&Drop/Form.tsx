import React from "react";
import { FormPreview } from "../FormPreview/FormPreview";
import { FormCanvas } from "./FormCanvas";

export const Form = () => {
  const states = ["preview", "json", "code"];

  const [state, setState] = React.useState<"preview" | "json" | "code">(
    "preview"
  );
  return (
    <div className="  w-full 2xl:h-[100vh] md:py-10 flex md:flex-row flex-col-reverse gap-y-10 items-center justify-center gap-x-40 h-full ">
      <div className="flex max-w-[500px] min-w-[100px]   gap-4 flex-col w-full items-center justify-center">
        <div className="flex w-full items-center p-2 rounded-lg shadow-inner justify-center gap-4  bg-[var(--light-foreground)] ">
          {states?.map((st) => (
            <button
              onClick={() => setState(st as "preview" | "json" | "code")}
              className={`p-1 w-[70px] text-[14px] ${
                state === st
                  ? "border-[1px] bg-slate-200 border-[var(--border-color)]  "
                  : ""
              } rounded-lg`}
            >
              {st.charAt(0).toUpperCase() + st.slice(1)}
            </button>
          ))}
        </div>
        <FormPreview />
      </div>
      <FormCanvas />
    </div>
  );
};

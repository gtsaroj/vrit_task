import { Form } from "../components/Drag&Drop/Form";
import { Elements } from "../components/Elements/Elements";
import { Navbar } from "../components/Navbar/Navbar";

export const HomePage = () => {
  return (
    <div className="w-full  bg-slate-300 h-full flex flex-col items-start justify-center">
      <Navbar />
      <div className="w-full mt-10 sm:px-2 px-5 md:py-0 sm:py-5 py-10 gap-6 flex items-start justify-between ">
        <Form />
        <div className="min-w-[200px]  mt-3 max-w-[300px]  h-screen hidden xl:flex ">
          <Elements />
        </div>
      </div>
    </div>
  );
};

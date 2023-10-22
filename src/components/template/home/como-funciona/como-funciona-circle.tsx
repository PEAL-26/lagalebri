import { AiOutlineHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { TfiMapAlt } from "react-icons/tfi";

export function ComoFunctionCircle() {
  return (
    <div className="relative flex h-64 w-64 items-center justify-center rounded-full border-2 border-primary">
      <div className="absolute left-7 top-5 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-primary">
        <BsSearch className="text-white" size={20} />
      </div>
      <div className="absolute right-7 top-5 flex h-12 w-12 translate-x-1/2 items-center justify-center rounded-full bg-primary">
        <AiOutlineHome className="text-white" size={20} />
      </div>
      <div className="absolute bottom-0 flex h-12 w-12 translate-y-1/2 items-center justify-center rounded-full bg-primary">
        <TfiMapAlt className="text-white" size={20} />
      </div>

      <div className="flex h-40 w-40 items-center justify-center rounded-full bg-primary">
        <h3 className="w-32 text-center text-xl font-bold text-white">
          Como Funciona
        </h3>
      </div>
    </div>
  );
}

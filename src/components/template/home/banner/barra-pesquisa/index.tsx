import { CiSearch } from "react-icons/ci";
import { BarraPesquisaOpcoes } from "./opcoes";
import { Select } from "@/libs/select";

export function BarraPesquisa() {
  return (
    <div className="mt-10">
      <BarraPesquisaOpcoes />
      <div className="flex items-center justify-between rounded-lg rounded-ss-none border bg-white p-3 pl-5 lg:w-[944px]">
        <div className="flex lg:gap-16">
          <div>
            {/* <label htmlFor="localizacao">Localização</label> */}
            <Select placeholder="Selecionar" id="localizacao" />
          </div>

          {/* <Select placeholder="Selecionar" />
          <Select placeholder="Selecionar" /> */}
        </div>
        <button
          title="search"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary"
        >
          <CiSearch className="text-white" size={24} />
        </button>
      </div>
    </div>
  );
}

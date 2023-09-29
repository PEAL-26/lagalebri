"use client";

import { useState } from "react";
import { OpcoesRadio } from "./radio";

type OpcoesType = "comprar" | "arrendar" | "vender";
export function BarraPesquisaOpcoes() {
  const [opcoes, setOpcoes] = useState<OpcoesType>("comprar");

  const getActiveClass = (op: OpcoesType) => {
    const className = {
      active: "py-3 px-5 cursor-pointer bg-primary text-white font-bold",
      inactive:
        "py-3 px-5 cursor-pointer hover:bg-primary hover:text-white transition-all",
    };

    return className[opcoes === op ? "active" : "inactive"];
  };

  return (
    <div className="flex w-max rounded-t-lg border border-b-0 bg-white">
      <div
        className={`rounded-ss-lg ${getActiveClass("comprar")}`}
        onClick={() => setOpcoes("comprar")}
      >
        Comprar
        <OpcoesRadio opcao={opcoes} value="comprar" />
      </div>
      <div
        className={`${getActiveClass("arrendar")}`}
        onClick={() => setOpcoes("arrendar")}
      >
        Arrendar
        <OpcoesRadio opcao={opcoes} value="arrendar" />
      </div>
      <div
        className={`rounded-se-lg ${getActiveClass("vender")}`}
        onClick={() => setOpcoes("vender")}
      >
        Vender
        <OpcoesRadio opcao={opcoes} value="vender" />
      </div>
    </div>
  );
}

import Link from "next/link";
import { LogoMarca } from "./logo-marca";

interface LogoProps {
  color?: "default" | "white";
}

export function Logo(props: LogoProps) {
  const { color = "default" } = props;

  const className = {
    default:
      "bg-gradient-to-r from-[#04405E] to-black bg-clip-text text-transparent ",
    white: "text-white",
  }[color];

  return (
    <Link href="/" className="flex items-center gap-2">
      <LogoMarca width={32} height={38.36} color={color} />
      <span
        className={`flex-col ${className} flex text-2xl font-bold uppercase leading-none `}
      >
        Lagalebri
        <span className="text-[7px] font-normal capitalize ">
          Tecnologia & Imobiliária
        </span>
      </span>
    </Link>
  );
}

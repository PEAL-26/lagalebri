import { twMerge } from "tailwind-merge";

interface CardProps {
  title: string;
  value: string;
  primary?: boolean;
}

export function Card(props: CardProps) {
  const { title, value, primary = false } = props;

  const className = {
    title: primary ? "text-white" : "text-neutral-500",
    value: primary ? "text-white" : "text-sky-900",
    card: primary
      ? "bg-primary border border-primary"
      : "border border-zinc-300 bg-white",
  };

  return (
    <div
      className={twMerge(
        "flex h-16 w-48 flex-col items-center justify-center rounded-xl py-3 shadow",
        className.card,
      )}
    >
      <span className={twMerge("text-xl font-bold ", className.value)}>
        {value}
      </span>
      <span className={twMerge("text-sm font-normal ", className.title)}>
        {title}
      </span>
    </div>
  );
}

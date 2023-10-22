import { twMerge } from "tailwind-merge";

interface CardProps {
  title: string;
  description?: string;
  className?: string;
}

export function Card(props: CardProps) {
  const { title, description, className } = props;

  return (
    <div className={twMerge("flex w-64 flex-col", className)}>
      <span className="text-center text-lg font-bold text-black">{title}</span>
      <span className="mt-3 text-base font-normal text-black leading-snug">{description}</span>
    </div>
  );
}

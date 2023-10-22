import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps extends HTMLProps<HTMLDivElement> {
  backgroundColor?: string;
}

export function Section(props: SectionProps) {
  const { children, backgroundColor = "", className, ...rest } = props;
  return (
    <section className="w-full" style={{ backgroundColor }}>
      <div
        className={twMerge(
          "mx-auto flex max-w-screen-xl px-4 pb-10 lg:px-16 lg:py-10",
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    </section>
  );
}

import Link from "next/link";
import { ElementType } from "react";
import { IconBaseProps } from "react-icons";

interface RedeSocialProps {
  url: string;
  icon: ElementType<IconBaseProps>;
}

export function RedeSocial(props: RedeSocialProps) {
  const { url, icon: Icon } = props;

  return (
    <Link
      href={url}
      target="_blank"
      className="group flex h-10 w-10 items-center justify-center rounded-full bg-white transition-all hover:border hover:border-white hover:bg-primary"
    >
      <Icon className="text-primary group-hover:text-white" size={22} />
    </Link>
  );
}

"use client";
import ReactSelect, { Props } from "react-select";

export function Select(props: Props) {
  const { ...rest } = props;

  return <ReactSelect {...rest} />;
}

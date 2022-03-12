import React from "react";

type ButtonProps = {
    handleClick: (id: number) => void
}

export default function Button(props: ButtonProps) {
  return <div onClick={() => props.handleClick(4)}>Click</div>;
}

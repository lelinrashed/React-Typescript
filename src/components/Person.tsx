import React from "react";

type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export default function Person(props: PersonProps) {
  const { first, last } = props.name;
  return <div>{first} {last}</div>;
}

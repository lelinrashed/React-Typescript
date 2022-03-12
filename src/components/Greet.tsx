import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export default function Greet(props: GreetProps) {
  const {name, messageCount = 0} = props
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${name}! You have ${messageCount} unread message`
          : "Welcome Guest"}
      </h2>
    </div>
  );
}
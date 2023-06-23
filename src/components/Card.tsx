import React from "react";

type CardProps = {
  color?: "blue" | "red" | "green" | "yellow" | "purple";
};

export default function Card(props: CardProps): React.ReactNode {
  // Handle default props this way ---->
  const { color = "green" } = props;
  return <div style={color && { backgroundColor: color }}>This is a card</div>;
}

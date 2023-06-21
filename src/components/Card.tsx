type CardProps = {
  color?: "blue" | "red" | "green" | "yellow" | "purple";
};

export default function Card(props: CardProps) {
  // Handle default props this way ---->
  const { color = "green" } = props;
  return <div style={color && { backgroundColor: color }}>This is a card</div>;
}

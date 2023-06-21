type GreetProps = {
  name: string;
};
function Greet(props: GreetProps) {
  return (
    <div>
      <h2>Hello {props.name}</h2>
    </div>
  );
}

export default Greet;

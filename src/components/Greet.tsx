type GreetProps = {
  name: string;
  messageCount?: number;
};
function Greet(props: GreetProps) {
  return (
    <div>
      <h2>
        Hello {props.name} you have {props.messageCount}
      </h2>
    </div>
  );
}

export default Greet;

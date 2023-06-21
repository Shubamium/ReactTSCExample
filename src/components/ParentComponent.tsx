type ParentComponentProp = {
  heading: string;
  children: React.ReactNode;
};
export default function ParentComponent(props: ParentComponentProp) {
  return (
    <div>
      <h2>{props.heading}</h2>
      {props.children}
    </div>
  );
}

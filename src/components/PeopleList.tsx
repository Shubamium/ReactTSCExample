export type Employee = {
  id: number;
  name: string;
  position: string;
};

type PeopleProps = {
  nameList: Employee[];
};
export default function PeopleList(props: PeopleProps) {
  return (
    <div>
      <h2>Employee List</h2>
      {props.nameList &&
        props.nameList.map((em) => {
          return (
            <div key={em.id}>
              <h2>{em.name}</h2>
              <p>{em.position}</p>
            </div>
          );
        })}
    </div>
  );
}

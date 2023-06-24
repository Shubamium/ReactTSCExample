import Card from "./components/Card";
import EventSample from "./components/EventSample";
import Greet from "./components/Greet";
import ParentComponent from "./components/ParentComponent";
import PeopleList, { Employee } from "./components/PeopleList";
import StylePropSample from "./components/StylePropSample";
import UseStateSample from "./components/UseStateSample";

function App() {
  const employees: Employee[] = [
    {
      id: 1,
      name: "John Doe",
      position: "Manager",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Developer",
    },
    {
      id: 3,
      name: "Mark Johnson",
      position: "Designer",
    },
    {
      id: 4,
      name: "Elton Mark",
      position: "Quality Assurance",
    },
    // Add more objects as needed
  ];
  return (
    <main>
      {/* Standard Props */}
      <Greet name="Viswhas" messageCount={2} />

      {/* List */}
      <PeopleList nameList={employees} />

      {/* Union Props */}
      <Card color="yellow" />

      {/* Children Props */}
      <ParentComponent heading="this is a parent">
        <p>This is the child element</p>
        <Card color="green"></Card>
      </ParentComponent>

      {/* React.MouseEvent */}
      <EventSample
        handleClick={(e) => {
          console.log("222");
          console.log(e);
        }}
      />

      {/* React.CSSProperties */}
      <StylePropSample
        styles={{ border: "2px solid black", fontWeight: "bold" }}
      />

      {/* UseState Hooks*/}
      <UseStateSample />
    </main>
  );
}

export default App;

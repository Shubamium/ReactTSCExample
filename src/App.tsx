import Card from "./components/Card";
import Greet from "./components/Greet";
import ParentComponent from "./components/ParentComponent";
import PeopleList, { Employee } from "./components/PeopleList";

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
      <ParentComponent heading="Yellow">
        <p>Hellow</p>
      </ParentComponent>
    </main>
  );
}

export default App;

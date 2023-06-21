import Greet from "./components/Greet";
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
      <Greet name="Viswhas" messageCount={2} />
      <PeopleList nameList={employees} />
    </main>
  );
}

export default App;

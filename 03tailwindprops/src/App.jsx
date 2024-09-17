import "./App.css";
import Card from "./components/Card";

function App() {
  const myobj = {
    name: "mahesh kumar",
    age: 25,
    salary: 40000,
    position: "developer",
  };
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl p-4 mb-4">
        Tailwind CSS Demo
      </h1>
      <Card name="Marry" detail={myobj} btnText="Click Me" />
      <Card name="Natasha" detail={myobj} btnText="Visit on my website" />
      <Card name="swity" detail={myobj} btnText="Live go" />
    </>
  );
}

export default App;

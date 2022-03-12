import "./App.css";
import LoggedIn from "./components/state/LoggedIn";

function App() {
  // const personName = {
  //   first: "Lelin",
  //   last: "Rashed",
  // };

  // const nameList = [
  //   {
  //     first: "Lelin",
  //     last: "Rashed",
  //   },
  //   {
  //     first: "Lelin",
  //     last: "Rashed",
  //   },
  //   {
  //     first: "Lelin",
  //     last: "Rashed",
  //   },
  // ];

  return (
    <div className="App">
      {/* <Person name={personName} />
      <Greet name="rashed" isLoggedIn={true} messageCount={10} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Heading>Placeholder text from app.tsx</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar> */}

      {/* <Button handleClick={(id) => console.log("Handle Click", id)} />
      <Input value="" handleChange={(event) => console.log(event)} /> */}

      {/* <Container styles={{ border: `1px solid black` }} /> */}

      <LoggedIn />
    
    </div>
  );
}

export default App;

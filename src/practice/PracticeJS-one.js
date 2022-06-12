import "./App.css";

//! creating a component
const Person = (props) => {
  return (
    <>
      <h1>First Name : {props.firstName}</h1>
      <h1>Last Name : {props.lastName}</h1>
      <h1>Age : {props.age}</h1>
    </>
  );
};
//! converted into Arrow function
const App = () => {
  // const name = "Arafat";
  const name = null;
  const isShowingName = false;
  return (
    <div className="App">
      {/* injecting the component */}
      <Person firstName="Aquib" lastName="ahmed" age="24" />
      <Person firstName="Sania" lastName="Mirza" age="34" />
      <Person firstName="Momin" lastName="ahmed" age="22" />
      <Person firstName="Mahem" lastName="Khan" age="21" />

      <h1>Hello, {name}</h1>
      <h2>Name is showing ? {isShowingName ? "Yes" : "No"}</h2>
      {/* React fragment */}
      {name ? (
        <>true</>
      ) : (
        <>
          <h2>test 3</h2>
          <h2>Goku</h2>
        </>
      )}
    </div>
  );
};

export default App;

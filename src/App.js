import "./App.css";

function App() {
  const title = "Welcome to the site";
  const likes = 50;
  // const obj1 = { name: "name", age: "23" };
  const link = "https://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Likes: {likes}</p>
        {/* Can not put objects inside curly braces */}
        {/* <p>{obj1}</p> */}
        <p>{"Hello, pandas"}</p>
        <p>{Math.random() * 100}</p>
        <a href={link}>Go to google</a>
      </div>
    </div>
  );
}

export default App;

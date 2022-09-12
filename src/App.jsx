import { useState } from "react";

function App() {
  const [msg, setMsg] = useState();
  fetch("http://localhost:4000/")
    .then((response) => response.json())
    .then((data) => setMsg(data.msg));

  return (
    <div className="App">
      <h1>Hello world</h1>
      <h2>{msg}</h2>
    </div>
  );
}

export default App;

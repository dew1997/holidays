import { useState } from "react";
const SERVER = import.meta.env.VITE_SERVER;

function App() {
  const [msg, setMsg] = useState();
  fetch(SERVER)
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

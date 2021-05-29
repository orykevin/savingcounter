import './App.css';
import { useState } from "react"
import Header from "./component/Header";
import Main from "./component/Main";
import Info from "./component/Info"

function App() {
  const [displayInfo,setDis] = useState(false);
  return (
    <div className="App">
      <Header setDis={setDis} />
      <Main setDis={setDis} displayInfo={displayInfo} />
    </div>
  );
}

export default App;

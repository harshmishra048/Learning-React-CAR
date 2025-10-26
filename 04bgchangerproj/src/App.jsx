import { useState } from "react";
import Bgbtn from "./components/Bgbtn";
import Heading from "./components/Heading";

function App() {
  const [color, setcolor] = useState("olive");
  const [txtCol, settxtCol] = useState("olive");


  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="font-bold text-6xl fixed top-12 left-1/2 -translate-x-1/2 text-center"
        style={{ color: txtCol }}
      >
        Welcome To Color Combinatior
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-26 inset-x-0 px-3">
        <Bgbtn setcolor={setcolor} />
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-6 inset-x-0 px-3">
        <Heading settxtCol={settxtCol} />
      </div>
    </div>
  );
}

export default App;

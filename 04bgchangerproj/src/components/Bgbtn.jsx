import React from "react";

function Bgbtn({ setcolor }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-100 py-2 px-3 rounded-xl">
      <h1>Bg-color</h1>
      <button
        onClick={() => setcolor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "red" }}
      >
        Red
      </button>
      <button
        onClick={() => setcolor("blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "blue" }}
      >
        blue
      </button>
      <button
        onClick={() => setcolor("green")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "green" }}
      >
        green
      </button>
      <button
        onClick={() => setcolor("yellow")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "yellow" }}
      >
        yellow
      </button>
      <button
        onClick={() => setcolor("pink")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "pink" }}
      >
        pink
      </button>
      <button
        onClick={() => setcolor("gold")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "gold" }}
      >
        gold
      </button>
      <button
        onClick={() => setcolor("grey")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "grey" }}
      >
        grey
      </button>
      <button
        onClick={() => setcolor("cyan")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "cyan" }}
      >
        cyan
      </button>
      <button
        onClick={() => setcolor("violet")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "violet" }}
      >
        violet
      </button>
      <button
        onClick={() => setcolor("purple")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "purple" }}
      >
        purple
      </button>
      <button
        onClick={() => setcolor("black")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "black" }}
      >
        black
      </button>
      <button
        onClick={() => setcolor("white")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
        style={{ backgroundColor: "white" }}
      >
        white
      </button>
    </div>
  );
}

export default Bgbtn;

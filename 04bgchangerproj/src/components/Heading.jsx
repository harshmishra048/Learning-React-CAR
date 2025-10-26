import React from 'react'


function Heading({settxtCol}) {

    return (
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-100 py-2 px-3 rounded-xl">
        <h1>Text-Color</h1>
        <button
          onClick={() => settxtCol("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => settxtCol("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "blue" }}
        >
          blue
        </button>
        <button
          onClick={() => settxtCol("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "green" }}
        >
          green
        </button>
        <button
          onClick={() => settxtCol("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "yellow" }}
        >
          yellow
        </button>
        <button
          onClick={() => settxtCol("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "pink" }}
        >
          pink
        </button>
        <button
          onClick={() => settxtCol("gold")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "gold" }}
        >
          gold
        </button>
        <button
          onClick={() => settxtCol("grey")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "grey" }}
        >
          grey
        </button>
        <button
          onClick={() => settxtCol("cyan")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "cyan" }}
        >
          cyan
        </button>
        <button
          onClick={() => settxtCol("violet")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "violet" }}
        >
          violet
        </button>
        <button
          onClick={() => settxtCol("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "purple" }}
        >
          purple
        </button>
        <button
          onClick={() => settxtCol("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "black" }}
        >
          black
        </button>
        <button
          onClick={() => settxtCol("white")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "white" }}
        >
          white
        </button>
      </div>
    );
}

export default Heading

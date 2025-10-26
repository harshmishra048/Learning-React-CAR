import { useState, useCallback, useEffect,useRef } from "react";
function App() {
  const [len, setlen] = useState(8);
  const [numyes, setnumyes] = useState(false);
  const [charyes, setcharyes] = useState(false);
  const [pass, setpass] = useState("");

  // useref hook 
  const passwordRef = useRef(null)

  const PasswordGen = useCallback(() => {
    let pas = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numyes) str += "0123456789";
    if (charyes) str += "~!@#$%^&*()[]{}";

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pas += str.charAt(char);
    }
    setpass(pas);
  }, [len, numyes, charyes, setpass]);

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0 , 99)
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  useEffect(() => {
    PasswordGen();
  }, [len, numyes, charyes, PasswordGen]);
  return (
    <>
      <div className="bg-gray-500 text-orange-500 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none py-1 px-3 w-full bg-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassToClipboard}
            className="bg-amber-500 text-black outline-none px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={len}
              className="cursor-pointer"
              onChange={(e) => {
                setlen(e.target.value);
              }}
            />
            <label>Length : {len}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numyes}
              id="numberInput"
              onChange={() => {
                setnumyes((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charyes}
              id="charInput"
              onChange={() => {
                setcharyes((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import './App.css'
import Card from './Components/Card';

function App() {
  // let myobj = {
  //   name: 'harsh',
  //   class: 10,
  // }

  // let myarr = [1,2,3,4,5,6,7,8,9,10]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-4xl mb-4">
        Tailwindcss Test
      </h1>
      <Card userName="harshmishra" buttonLabel="visit our page" />
      <Card userName="varsha" buttonLabel="aage bhago" />

    </>
  );
}

export default App

import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <h1 className="text-red-600">Hello world</h1>

      <Button className="bg-lime-400" variant={"link"}>
        Submit
      </Button>
    </>
  );
}

export default App;

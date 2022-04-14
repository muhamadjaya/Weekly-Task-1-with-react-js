import "./App.css";
import Tabs from "./components/Tabs";
import dataset from "./dataset";

const App = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Muhamad Jaya's Summaries</h1>
        <Tabs dataset={dataset} />
      </div>
    </>
  );
};

export default App;

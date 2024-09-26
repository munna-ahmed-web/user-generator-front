import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-gray-100">
      <Toaster />
      <Home />
    </div>
  );
}

export default App;

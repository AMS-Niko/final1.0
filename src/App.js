import Form from "./components/Form";
import { BrowserRouter as Router, Route, Routes, Link, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
    <Router>

      <Link to="/home"></Link>

      <br/>

      <Routes>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>

    </Router>

    <div className="flex w-full h-screen">

      <div className=" w-full flex items-center justify-center lg:w-1/2">
        <Form />
      </div>

      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-red-500 to-yellow-400 rounded-full animate-bounce"/>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"/>
      </div>

    </div>
    </>
  );
}

export default App;

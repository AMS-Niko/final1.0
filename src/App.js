import Form from "./components/Form";
import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";
import '@radix-ui/themes/styles.css';
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import AfterLogin from "./components/AfterLogin";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element = {<Home/>} />
        <Route path='form' element= {<Form/>} />
        <Route path='signup' element= {<SignUp/>} />
        <Route path='afterlogin' element= {<AfterLogin/>} />
        <Route path='profilepage' element= {<ProfilePage/>} />
      </Routes>
    </Router>
  );
}

export default App;

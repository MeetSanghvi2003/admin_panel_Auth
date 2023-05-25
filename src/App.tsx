//Package Imports
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

// Css Imports
import "./Components/css/App.css";
import "./Components/css/forms.css";
import "./Components/css/nav.css";
import "./Components/css/main.css";

//Component Imports
import Signin from "./Components/pages/Forms/Signin";
import Signup from "./Components/pages/Forms/Signup";
import Protected from "./Components/pages/Protected";
import Dashboard from "./Components/pages/Main/Dashboard";
import Sellers from "./Components/pages/Main/Sellers";
import Buyers from "./Components/pages/Main/Buyers";
import UserAnswers from "./Components/pages/Main/UserAnswers";
import Profile from "./Components/pages/Main/Profile";
import Notifications from "./Components/pages/Main/Notifications";

function App() {
  return (
    <>
      <BrowserRouter basename="/admin">
        <Router>
          <Route path="/" element={<Protected Component={Dashboard} />}></Route>
          <Route
            path="/sellers"
            element={<Protected Component={Sellers} />}
          ></Route>
          <Route
            path="/buyers"
            element={<Protected Component={Buyers} />}
          ></Route>
          <Route
            path="/users-answers"
            element={<Protected Component={UserAnswers} />}
          ></Route>
          <Route
            path="/profile"
            element={<Protected Component={Profile} />}
          ></Route>
          <Route
            path="/notifications"
            element={<Protected Component={Notifications} />}
          ></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Router>
      </BrowserRouter>
    </>
  );
}

export default App;

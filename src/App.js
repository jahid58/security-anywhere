import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import { createContext, useState } from "react";
import Login from "./components/Login/Login/Login";
import AdminPanel from "./components/Admin/AdminPanel/AdminPanel";
import Hire from "./components/Dashboard/Hire/Hire";
import HiringList from "./components/Dashboard/HiringList/HiringList";
import Review from "./components/Dashboard/Review/Review";
import HiredService from "./components/Admin/HiredService/HiredService";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import AddService from "./components/Admin/AddService/AddService";
import ManageServices from "./components/Admin/ManageServices/ManageServices";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Route>
          <Navbar></Navbar>
        </Route>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/admin">
            <AdminPanel></AdminPanel>
          </Route>
          <Route path="/hire/:id">
            <Hire />
          </Route>
          <Route path="/hiringList">
            <HiringList></HiringList>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/hiredService">
            <HiredService></HiredService>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/manageServices">
            <ManageServices></ManageServices>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

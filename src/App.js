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
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
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
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/admin">
            <AdminPanel></AdminPanel>
          </PrivateRoute>
          <PrivateRoute path="/hire/:id">
            <Hire />
          </PrivateRoute>
          <PrivateRoute path="/hire">
            <Hire />
          </PrivateRoute>
          <PrivateRoute path="/hiringList">
            <HiringList></HiringList>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/hiredService">
            <HiredService></HiredService>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/manageServices">
            <ManageServices></ManageServices>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import history from "./history"
import {Route, BrowserRouter, Switch} from "react-router-dom"
import Homepage from "./components/Homepage"
import Login from "./components/Login"
import Register from './components/Register';
import ViewLecSurveys from './components/ViewLecSurveys';
import ViewHWSurveys from './components/ViewHWSurveys';
import ViewLecData from './components/ViewLecData';
import ViewHWData from './components/ViewHWData';
import StudentHomepage from './components/StudentHomepage';
import LecForm from './components/LecForm';
import HWForm from './components/HWForm';

function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/view-lec" exact component={ViewLecSurveys} />
        <Route path="/view-hw" exact component={ViewHWSurveys} />
        <Route path="/view-lec-data" exact component={ViewLecData} />
        <Route path="/view-hw-data" exact component={ViewHWData} />
        <Route path="/student-homepage" exact component={StudentHomepage} />
        <Route path="/lec-form" exact component={LecForm} />
        <Route path="/hw-form" exact component={HWForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;


// history.push("/Homepage")
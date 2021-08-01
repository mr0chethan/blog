import {useState} from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Signin from "./Signin"
import User from "./User"


function App() {

  let [user, setUser] = useState(null)

  return (
    <Router>
      <Switch>
        <Route path="/user">
          <User user ={user}/>
        </Route>
        <Route path="/">
          <Signin handleUser={setUser} user={user}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

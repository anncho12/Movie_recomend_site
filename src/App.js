import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from "react-router-dom"

import Home from './routes/Home';
import Detail from './routes/Detail';
//ROuter 밑에 Switch를 넣은 이유는 한번에 하나의 Route만 랜더링하기 위해서이다.
// 2개의 Switch를 넣으면 두개의 Route를 한번에 랜더링할 수 있따.
function App() {
  return <Router>
    <Switch>
      <Route path='/movie/:id'>
        <Detail/>
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </Router>
}

export default App;
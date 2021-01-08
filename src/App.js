import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Math from './Math';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/:operation/:num1/:num2">
            <Math />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

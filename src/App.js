import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Routes from 'routes/Routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Routes />
        </Switch>
        <Switch>
          <Route exact path="/"
            render={() => {
              return (
                <Redirect to="/home" />
              )
            }}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

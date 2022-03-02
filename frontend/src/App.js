import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="main">
      <Header/>
      <Switch>
        <Route path='/' component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;

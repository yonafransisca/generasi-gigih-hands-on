import './App.css';
import SearchGif from './pages/searchGif/index';
import TrendingGif from './pages/trendingGif';
import Navbar from './components/navbar/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/search">
            <SearchGif style={{display: 'flex'}} />
          </Route>
          <Route path="/trending">
            <TrendingGif />
          </Route>
          <Route path="/">
            <SearchGif />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import { Route, Switch} from 'react-router-dom';
import AllMeetupsPage from './components/pages/AllMeetups';
import FavoritesPage from './components/pages/Favorite';
import NewMeetuppage from './components/pages/NewMeetup';
function App() {
  return <div>
    <Switch>
    <Route path='/' exact>
      <AllMeetupsPage />
    </Route>
    <Route path='/new-meetup'>
      <NewMeetuppage />
    </Route>
    <Route path='/favorite'>
      <FavoritesPage />
    </Route>
    </Switch>
  </div>
}
export default App; 
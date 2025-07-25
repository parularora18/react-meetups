import { Route, Switch} from 'react-router-dom';
import AllMeetupsPage from './components/pages/AllMeetups';
import FavoritesPage from './components/pages/Favorite';
import NewMeetuppage from './components/pages/NewMeetup';
import MainNavigation from './components/layout/MainNavigation';
function App() {
  return <div>
    <MainNavigation />
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
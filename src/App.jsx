import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorite';
import NewMeetuppage from './pages/NewMeetup';
import Layout from './components/layout/layout'
function App() {
  return (
    <Layout>
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
    </Layout>
  );
}
export default App;  
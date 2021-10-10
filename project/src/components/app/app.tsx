import MainPage from '../main-page/main-page';
import { AppProps } from './types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import FilmPage from '../film-page/film-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../const';

function App({filmInfo}: AppProps): JSX.Element {
  const {
    name,
    genre,
    year,
  } = filmInfo;
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MainPage filmName={name} filmGenre={genre} filmYear={year} />
        </Route>
        <Route path='/login' exact>
          <SignIn />
        </Route>
        <PrivateRoute exact path='/mylist' render={() => <MyList />} authorizationStatus={AuthorizationStatus.NoAuth} />
        <Route path='/films/:id' exact>
          <FilmPage />
        </Route>
        <Route path='/films/:id/review' exact>
          <AddReview />
        </Route>
        <Route path='/player'>
          <Player />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

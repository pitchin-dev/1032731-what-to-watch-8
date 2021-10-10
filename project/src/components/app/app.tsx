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
import { AuthorizationStatus, AppRoute } from '../../const';

function App({filmInfo}: AppProps): JSX.Element {
  const {
    name,
    genre,
    year,
  } = filmInfo;
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MainPage} exact>
          <MainPage filmName={name} filmGenre={genre} filmYear={year} />
        </Route>
        <Route path={AppRoute.SignIn} exact>
          <SignIn />
        </Route>
        <PrivateRoute exact path={AppRoute.MyList} render={() => <MyList />} authorizationStatus={AuthorizationStatus.NoAuth} />
        <Route path={AppRoute.FilmPage} exact>
          <FilmPage />
        </Route>
        <Route path={AppRoute.AddReview} exact>
          <AddReview />
        </Route>
        <Route path={AppRoute.Player}>
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

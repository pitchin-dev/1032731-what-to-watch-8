import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router';
import { AuthorizationStatus } from '../../const';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element,
  authorizationStatus: AuthorizationStatus,
}

function PrivateRoute(props: PrivateRouteProps):JSX.Element {
  const {exact, path, render, authorizationStatus} = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth ?
          render()
          :
          <Redirect to='/login' />
      )}
    />
  );
}

export default PrivateRoute;

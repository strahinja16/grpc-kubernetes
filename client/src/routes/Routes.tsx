import React, { FC, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AppLayout from '../components/AppLayout/AppLayout';
import Loading from '../components/Loading/Loading';
import Login from "../components/Login/Login";
import {GET_LOGGED_IN_USER} from "../graphql/queries/personnel";
import {useQuery} from "@apollo/react-hooks";
import {Logout} from "../components/Logout/Logout";

const SignUp = React.lazy(() => import('../components/SignUp/SignUp'));

const LoggedInRouteList: FC = () => (
	<Suspense fallback={Loading}>
		<Switch>
			<Route exact={true} path="/material" render={() => <div>material logged in</div>} />
			<Route exact={true} path="/logout" component={Logout} />
			<Redirect to="/material" />
		</Switch>
	</Suspense>
);

const LoggedOutRouteList: FC = () => (
  <Suspense fallback={Loading}>
    <Switch>
      <Route exact={true} path="/login" component={Login} />
      <Route exact={true} path="/sign-up" component={SignUp} />
      <Redirect to="/login" />
    </Switch>
  </Suspense>
);

const Routes: FC = () => {
  const { data } = useQuery(GET_LOGGED_IN_USER);
  return <AppLayout>{data && data.user ? <LoggedInRouteList /> : <LoggedOutRouteList />}</AppLayout>;
};

export default Routes;

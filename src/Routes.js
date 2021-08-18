import { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Jobly from "./Jobly";
import CompanyDetail from "./CompanyDetail";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from './ProfileForm';
import UserContext from './userContext';

/** Routes
 *  TODO: functions for forms
 *  props:
 * - handleSave - function for signup & login
 * App -> Routes
 */

function Routes({ handleSave }) {

  const user = useContext(UserContext);

  if (!user) {
    return (
      <Switch>
        <Route exact path="/login">
          <LoginForm handleSave={handleSave} />
        </Route>
        <Route exact path="/signup">
          <SignupForm handleSave={handleSave} />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Redirect to="/login" />
      </Switch>
    )
  }

  return (
    <Switch>

      <Route exact path="/login">
        <LoginForm handleSave={handleSave} />
      </Route>
      <Route exact path="/signup">
        <SignupForm handleSave={handleSave} />
      </Route>
      <Route exact path="/profile">
        <ProfileForm handleSave={handleSave} />
      </Route>
      <Route exact path="/companies">
        <Jobly listType="companies" />
      </Route>
      <Route exact path="/companies/:handle">
        <CompanyDetail />
      </Route>
      <Route exact path="/jobs">
        <Jobly listType="jobs" />
      </Route>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Redirect to="/" />
    </Switch>

  )
}

export default Routes
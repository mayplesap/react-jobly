import { Route, Switch, Redirect } from 'react-router-dom';
import Jobly from "./Jobly";
import CompanyDetail from "./CompanyDetail";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from './ProfileForm';

/** Routes
 *  TODO: functions for forms
 *  TODO: list & company 
 * App -> Routes
 */

function Routes(){
  return (
    <Switch>
      <Route exact path="/login">
        <LoginForm />
      </Route>
      <Route exact path="/signup">
        <SignupForm />
      </Route>
      <Route exact path="/profile">
        <ProfileForm />
      </Route>
      <Route exact path="/companies">
        <Jobly list={ list } listType="companies"/>
      </Route>
      <Route exact path="/companies/:company">
        <CompanyDetail company={ company }/>
      </Route>
      <Route exact path="/jobs">
        <Jobly list={ list } listType="jobs"/>
      </Route>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes
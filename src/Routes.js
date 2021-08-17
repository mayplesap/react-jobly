import { Route, Switch, Redirect } from 'react-router-dom';
import Jobly from "./Jobly";
import CompanyDetail from "./CompanyDetail";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from './ProfileForm';

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
        <Jobly listType="companies"/>
      </Route>
      <Route exact path="/companies/:company">
        <CompanyDetail />
      </Route>
      <Route exact path="/jobs">
        <Jobly listType="jobs"/>
      </Route>
      <Route exact path="/">
        <Homepage/>
      </Route>
    </Switch>
  )
}

export default Routes
import { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ListWithSearch from "./ListWithSearch";
import CompanyDetail from "./CompanyDetail";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from './ProfileForm';
import UserContext from './userContext';
import { LIST_TYPE_COMPANIES, LIST_TYPE_JOBS } from "./constants";

/** Routes
 *  
 *  props:
 * - handleSave - function for signup, login, profile
 * 
 * context:
 * - user: UserContext
 * 
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
//TODO: listType need be constants - passing down something that is very specific
//can put in a file where can import or in companyList/joblist
//from a single place where pulling them in 
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
        <ListWithSearch listType={LIST_TYPE_COMPANIES} />
      </Route>
      <Route exact path="/companies/:handle">
        <CompanyDetail />
      </Route>
      <Route exact path="/jobs">
        <ListWithSearch listType={LIST_TYPE_JOBS} />
      </Route>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Redirect to="/" />
    </Switch>

  )
}

export default Routes
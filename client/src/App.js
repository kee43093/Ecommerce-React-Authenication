import React from 'react';
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Index from './Pages/index'
import Index2 from './Pages/Index2'
import Index3 from './Pages/index3'
import LogIn from './components/AUTHENTICATION/LogIn'
import LogOut from './components/AUTHENTICATION/LogOut'
import SignUp from './components/AUTHENTICATION/SignUp'
import httpClient from './httpClient'
import Header from './components/Header/Header'


class App extends React.Component {
  state = { currentUser: httpClient.getCurrentUser() }
  

  onLoginSuccess(user) {
		this.setState({ currentUser: httpClient.getCurrentUser() })
	}

	logOut() {
		httpClient.logOut()
		this.setState({ currentUser: null })
	}
  
  render(){
    const { currentUser } = this.state
    return (
      <div className="App container">

        <Header currentUser={currentUser}/>
        

    <Switch>
      <Route exact path="/" exact component={Index} />
      <Route path="/products" component={Index2} />
      <Route path="/Contact" component={Index3}/>
      <Route path="/Login" render={(props) => {
						return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
					}} />
      <Route path="/signup" render={(props) => {
						return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
					}}/>

      <Route path="/Logout" render={(props) => {
						return <LogOut onLogOut={this.logOut.bind(this)} />
					}}/>
    </Switch>

    </div>
  )
}
}
export default App;

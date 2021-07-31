import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Footer from './components/Footer';
import Login from './components/Private/Login';
import Navbar from './components/Private/Navbar'
import Registration from './components/Private/Registration';
import './css/App.css'

function App() {
  return (
    <BrowserRouter >
      <div className='app'>
        <Navbar />

        <div className='wrapper'>
          <Switch>
            <Route path='/registration' component={Registration} exact={true} />
            <Route path='/login' component={Login} exact={true}  />
            <Redirect to='/registration' />
          </Switch>
        </div>


        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

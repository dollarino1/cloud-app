import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Footer from './components/Footer';
import Login from './components/Private/Login';
import Navbar from './components/Private/Navbar'
import Registration from './components/Private/Registration';
import './css/App.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './api/user';
import Disk from './components/disk/Disk';

function App() {
  const isAuth = useSelector(state => state.users.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    // if user has logged previosly, checks his token from local storage, if true, app automatically logs user.
    dispatch(auth())
  }, [])

  useEffect (() => {
        //remove user token on log out
        if(!isAuth) {
          localStorage.removeItem('token')
        }
  }, [isAuth])
  
  return (
      <BrowserRouter >
        <div className='app'>
          <Navbar />
          {isAuth ? //if user is authenticated
          <div className='wrapper'>
            <Switch>
              <Route exact path='/' component={Disk}/>
              <Redirect to='/' />
            </Switch>
          </div>
          : //if user is not authenticated
          <div className='wrapper'>
            <Switch>
              <Route exact path='/registration' component={Registration} />
              <Route path='/login' component={Login} exact={true}  />
              <Redirect to='/login' />
            </Switch>
          </div>
          }
          


          <Footer />
        </div>
      </BrowserRouter>  
  );
}

export default App;

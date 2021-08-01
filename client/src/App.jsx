import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Footer from './components/Footer';
import Login from './components/Private/Login';
import Navbar from './components/Private/Navbar'
import Registration from './components/Private/Registration';
import './css/App.css'
import { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './api/user';

export const Context = createContext(null)

function App() {
  const isAuth = useSelector(state => state.users.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
    if(!isAuth) {
      localStorage.removeItem('token')
    }
  }, [])
  return (
    <Context.Provider>
      <BrowserRouter >
        <div className='app'>
          <Navbar />
          {isAuth ? <div>logged in</div>
          :<div className='wrapper'>
            <Switch>
              <Route path='/registration' component={Registration} exact={true} />
              <Route path='/login' component={Login} exact={true}  />
              <Redirect to='/registration' />
            </Switch>
          </div>
          }
          


          <Footer />
        </div>
      </BrowserRouter>
    </Context.Provider>
    
  );
}

export default App;

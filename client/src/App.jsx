import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Footer from './components/Footer';
import Login from './components/Private/Login';
import Navbar from './components/Private/Navbar'
import Registration from './components/Private/Registration';
import './css/App.css'
import { createContext } from 'react';

export const Context = createContext(null)

function App() {
  return (
    <Context.Provider>
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
    </Context.Provider>
    
  );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';
import Header from "./Header";
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./Login.js";
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from "./Payment.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe("pk_test_51HRc9jE5G4blOvWjRskY8gg009MVM3yopf6GzbkFX1II9RwRu6gRdANugCljBuKmaXjLWrNUg0KUiRCE8MO0MWH900NrvM4p7J");

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>> ", authUser)
      if (authUser) {
        // The user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        // the user just logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    })

    return () => {

    }
  }, [])

  return (
    //BEM
    <div className="App">
      <Router>
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;

//My Uploaded project
/* https://challenge-15d22.web.app/checkout */
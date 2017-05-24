/* global paypal */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentWillUnmount() {
    delete window.React
    delete window.ReactDOM
  }

  render() {

    const env = 'sandbox';

    const client = {
        sandbox: 'AbEPs70tTrCza99jLp9Lo9tqhF9mOSeI6dw8Xib7Gy9IJ34xQ5KONYr7u-Ri_rlee1m_e9qgZjG2jlBb',
        production: 'AczimbNSwfSeTXzcugnB8sg1zGYo5LMe4K_454DYzQvaf8WTtESohRHbXLMIEAJKA8CIjHmLK5h10bEb'
    };

    const payment = () => {
      console.log("::::::::: Payement Create :::::::", paypal.rest.payment.create);
      return paypal.rest.payment.create(env, client, {
        intent: "sale",
        redirect_urls: {
          return_url: "http://www.google.com",
          cancel_url: "http://www.google.com"
        },
        payer: {
          payment_method: "paypal"
        },
        transactions: [
          {
            amount: {
              total: '7.47',
              currency: 'USD'
            }
          }
        ]
      })
    };

    const onAuthorize = (data, actions) => {
      console.log("::::::::: Data :::::::::::", data);
      console.log("::::::::: Actions :::::::::::", actions);
      // Optional: display a confirmation page here

      return actions.payment.execute().then(function () {
        // Show a success page to the buyer
        console.log("::::: Payment Done ::::::");
      });
    };

    const onCancel = (data) => {
      console.log("Data:::::::::::", data);
    };

    const PaypalButton = paypal.Button.driver('react', {
      React: window.React,
      ReactDOM: window.ReactDOM
    });

    console.log(PaypalButton);

    return (
      <div className="App">
        <PaypalButton
          env={env}
          client={client}
          payment={payment}
          commit={true}
          onAuthorize={onAuthorize}
          onCancel={onCancel}
        />
      </div>
    );
  }
}

export default App;

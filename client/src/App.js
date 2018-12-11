import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Container } from 'reactstrap';

import { GlobalProvider, GlobalContext } from './GlobalProvider';
import Dashboard from './Dashboard'

import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Aside from './Aside/Aside'

import AccountAdd from './Account/Add'
import AccountList from './Account/List'

import { Provider } from "constate";

class App extends Component {
  render() {
    return (
      <Provider devtools={process.env.NODE_ENV === "development" }>
        <GlobalProvider>
          <Router>
            <div className="app">
              <Header />
              <div className="app-body">
                <Sidebar {...this.props} />
                <main className="main">
                  <div className="wrapper">
                    <Container fluid>
                      <Switch>
                        <Route path="/dashboard" name="Dashboard" component={Dashboard} />
                        <Route path="/account/add" name="Account Add" component={AccountAdd} />
                        <Route path="/account/list" name="Account Add" component={AccountList} />
                      </Switch>
                    </Container>
                  </div>
                </main>
              </div>
              <Aside />
            </div>
            <Footer />
          </Router>
        </GlobalProvider >
      </Provider>
    );
  }
}

export default App;
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Routes } from './components/Routes';
import { GenerateToken } from './components/GenerateToken';
import { ListToken } from './components/ListToken';

function App() {
  return (
    <>
      <Routes />
      <main>
        <Switch>
            <Route path={`/generateToken`} name="tokengeneration" exact={true} component={GenerateToken} />
            <Route path={`/listToken`} name="listtoken" exact={true} component={ListToken} />
            <Redirect to={'/'} />
        </Switch>
      </main>

    </>
  );
}

export default App;

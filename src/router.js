import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const nodePath = require('path');

let RouterContainer = (props) => {
  const routes = props.routes || [];

  routes.forEach((item, i, arr) => {
    if (item.component) {
      if (item.routes) {
        item.routes.unshift({
          title: item.title,
          path: '',
          exact: true,
          dir: '',
          component: item.component ? item.component : SubLayout
        });
        delete item.component;
      }
    }
    item.dir = props.match ? props.match.path : '';
  });


  return (
    <div>
      <Route>
      {
        routes.length > 0 ?
          <Switch>
            {routes.map((route, i) => {
              const path = nodePath.normalize(`${route.dir}${route.path}`);
              const Component = route.component ? route.component : RouterContainer;
              return (
                <Route path={path} key={i} exact={route.exact ? true : false} render={props => (<Component {...props} routes={route.routes} />)} />
              );
            })}
            {
              `${routes[0].dir}` === '' || `${routes[0].dir}` === '/' ? <Redirect to={routes[0].path} /> : null
            }
          </Switch>
          : null
      }
    </Route>
    </div>
  );
}

export default RouterContainer;

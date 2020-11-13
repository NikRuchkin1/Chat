import React from 'react';
import { Route } from 'react-router-dom';

import { Auth, Home } from 'pages';
class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Route path={['/', '/login']} component={Auth} exact />
        <Route path="/im" component={Home} exact />
      </div>
    );
  }
}

export default App;

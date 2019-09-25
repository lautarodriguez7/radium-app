import React from 'react';
import App from './components/app/app'
import MainScreen from './components/routes/main-screen/main-screen'

class Route extends React.Component {
  render() {
     return (
    <App>
        <MainScreen />
    </App>
    );
  }
 
}

export default Route;

import React from 'react';
import TicketList from './TicketList';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm.jsx';

function App() {

  return (
    <div>
      <style global jsx>{`
        body {
          background-color: #3D3A39;
        }
        body::after {
          content: "";
          background: url("https://static1.squarespace.com/static/5524448ee4b0d6f6b83ab9e2/t/56f32109859fd0cad67fe1e1/1458774289324");
          background-size: cover;
          opacity: 0.2;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          position: absolute;
          z-index: -1;   
        }
      `}</style>
      <Header />
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
      </Switch>
    </div>
  );
}

export default App;
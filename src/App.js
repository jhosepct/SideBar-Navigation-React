import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ExampleSidebar from './components/ExampleSidebar';
import { routes } from './components/helpers/data';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ExampleSidebar />} >
          <Route path={routes.dashboard} element={<p>dashboard</p>} />
          <Route path={routes.projects} element={<p>projects</p>} />
          <Route path={routes.personal} element={<p>personal</p>} />
          <Route path={routes.business} element={<p>business</p>} />
          <Route path={routes.messages} element={<p>messages</p>} />
          <Route path={routes.employees} element={<p>employees</p>} />
          <Route path={routes.shipment} element={<p>shipment</p>} />
          <Route path={routes.file} element={<p>file</p>} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;

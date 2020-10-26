import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import AddNoteScreen from './screens/AddNoteScreen';

function App() {
  return (
    <BrowserRouter>
      <>
        <Route path="/add-note" component={AddNoteScreen} />
        <Route path="/" exact={true} component={HomeScreen} />
        {/*<Route path="//:id" component={UpdateNoteScreen} />
        <Route path="//:id" component={DetailsScreen} />
        <Route path="/" exact={true} component={HomeScreen} />*/}
      </>
    </BrowserRouter>
  );
}

export default App;

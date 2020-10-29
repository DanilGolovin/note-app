import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import AddNoteScreen from './screens/AddNoteScreen';
import UpdateNoteScreen from './screens/UpdateNoteScreen';
import DetailNoteScreen from './screens/DetailNoteScreen';
import CategoriesScreen from './screens/CategoriesScreen';

import Header from './componets/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <>
        <Route path="/" exact={true} component={HomeScreen} />
        <Route path="/add-note" component={AddNoteScreen} />
        <Route path="/update-note/:id" component={UpdateNoteScreen} />
        <Route path="/detail-note/:id" component={DetailNoteScreen} />
        <Route path="/categories" component={CategoriesScreen} />
      </>
    </BrowserRouter>
  );
}

export default App;

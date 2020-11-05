import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import HomeScreen from '../screens/HomeScreen';
import AddNoteScreen from '../screens/AddNoteScreen';
import UpdateNoteScreen from '../screens/UpdateNoteScreen';
import DetailNoteScreen from '../screens/DetailNoteScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import LoginScreen from '../screens/AuthScreen';
import { useSelector } from 'react-redux';
import Loader from '../componets/Loader';

const AppRouter = () => {
  const isLoading = useSelector((state) => state.auth.loading);

  const content = isLoading ? (
    <Loader />
  ) : (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" component={LoginScreen} exact={true} />
        <PrivateRoute path="/dashboard" component={HomeScreen} />
        <PrivateRoute path="/add-note" component={AddNoteScreen} />
        <PrivateRoute path="/update-note/:id" component={UpdateNoteScreen} />
        <PrivateRoute path="/detail-note/:id" component={DetailNoteScreen} />
        <PrivateRoute path="/categories" component={CategoriesScreen} />
      </Switch>
    </BrowserRouter>
  );

  return content;
};

export default AppRouter;

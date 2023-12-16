// import { Layout } from './Layout.styled';
// import { ContactsForm } from './ContactsForm/ContactsForm';
// import { Contacts } from './Contacts/Contacts';
// import { Filter } from './Filter/Filter';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/operations/auth-operations';

export const App = () => {
  const dispatch = useDispatch();
  const Refreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return Refreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};

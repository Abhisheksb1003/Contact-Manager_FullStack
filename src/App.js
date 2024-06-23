import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure bootstrap CSS is imported
import ContactList from './components/contacts/ContactList/ContactList';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddContact from './components/contacts/AddContact/AddContact';
import ViewContact from './components/contacts/ViewContact/ViewContact';
import EditContact from './components/contacts/EditContact/EditContact';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/contacts/list" />} />
        <Route path="/contacts/list" element={<ContactList />} />
        <Route path="/contacts/add" element={<AddContact />} />
        <Route path="/contacts/view/:contactId" element={<ViewContact />} /> {/* Changed to lowercase 'contactId' */}
        <Route path="/contacts/edit/:contactId" element={<EditContact />} /> {/* Changed to lowercase 'contactId' */}
      </Routes>
    </React.Fragment>
  );
};

export default App;

import React from 'react';
import './App.css';
import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import ContactList from './components/contacts/ContactList/ContactList';
import NavBar from './components/NavBar/NavBar';
import {Routes,Route,Navigate} from 'react-router-dom'
import AddContact from './components/contacts/AddContact/AddContact';
import ViewContact from './components/contacts/ViewContact/ViewContact';
import EditContact from './components/contacts/EditContact/EditContact';
import Spinner from './components/Spinner/Spinner';

const App=() => {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<Navigate to="/contacts/list" />} />
        <Route path={'/contacts/list'} element={<ContactList />}/>
        <Route path={'/contacts/add'} element={<AddContact />}/>
        <Route path={'/contacts/view/:ContactId'} element={<ViewContact />}/>
        <Route path={'/contacts/edit/:ContactId'} element={<EditContact />}/>
      </Routes> 
      
    </React.Fragment>
    
  )
}
<AddContact/>

export default App;

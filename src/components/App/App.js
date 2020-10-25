import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import styles from './App.module.css';


import Todo from '../Todo/Todo'; 
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

const App = () => {
    return (
        <Router>
            <div >
                <Card  className={styles.sidebar}>
                  <MenuList >
                    <Link to='/'><MenuItem>Обо мне</MenuItem></Link>
                    <Link to='/todo'><MenuItem>Дела</MenuItem></Link>
                    <Link to='/contacts'><MenuItem>Контакты</MenuItem></Link>
                  </MenuList>
                </Card>
                <Card>
                    <Route path='/' exact component={About} />
                    <Route path='/todo' component={Todo} />
                    <Route path='/contacts' component={Contacts} />
                </Card>
            </div>
        </Router>
    )
};


export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CreateGroupPage from './components/CreateGroupPage';
import GroupDetailPage from './components/GroupDetailPage';

function App() {
    {
        return ( <
            Router >
            <
            Routes >
            <
            Route path = "/"
            element = { < HomePage / > }
            /> <
            Route path = "/create-group"
            element = { < CreateGroupPage / > }
            /> <
            Route path = "/group/:id"
            element = { < GroupDetailPage / > }
            /> < /
            Routes > <
            /Router>
        );
    }

    export default App;
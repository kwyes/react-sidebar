import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About } from '../pages';
import Sidebar from '../components/Sidebar';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';


class App extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </>
        );
    }
}

export default App;
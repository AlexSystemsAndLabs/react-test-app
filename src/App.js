import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router'
import './App.css';
import CardsList from './components/CardsList'
import FullCard from "./components/FullCard";

class App extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <Router basename={'/'}>
                <div className="App">
                    <Route exact path = '/' component={CardsList} />
                    <Route path = {`/:id`} component={FullCard} />
                </div>
            </Router>
        );
    }
}

export default connect(null)(App);

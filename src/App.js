import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Panel from './components/Panel/Panel';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row } from "react-bootstrap"
import Buy from './components/buy/buy';

class App extends Component {
    render() {
        return (
            <Router>

<Header />
            
   <Panel />
                       
                 
               
                <Container>
                    <Switch>


                        <Route exact path='/buy'>
<Buy/>
                        </Route>
                        <Route exact path='/'>

                        </Route>




                    </Switch>
                </Container>
                <Footer />
            </Router>
        )
    }

}

export default App;
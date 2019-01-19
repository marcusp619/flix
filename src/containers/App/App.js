import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/simpleAction';
import BackgroundVideo from '../../containers/BackgroundVideo'
import Header from '../../components/Header'


import { createGlobalStyle } from "styled-components";
import './App.css';

class App extends Component {
  
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <Header />
        <BackgroundVideo />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

 const GlobalStyles = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css?family=Kanit|Roboto');
        font-family: 'Kanit', sans-serif;
    }
` 

export default connect(mapStateToProps, mapDispatchToProps)(App);

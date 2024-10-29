import React, { Component } from 'react';
import { Modal } from './components/Modal/Modal.jsx';

import './App.css';

export class App extends Component {
  
  state = {
    showModal: false
  }

  componentDidMount() {
    // console.log("Виклик");
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("meow");
    // console.log(prevState);
    
    
  }

  toggleModal = () => {
    console.log("спрацювало");
    
    this.setState((prevState)=>({showModal: !prevState.showModal})) 
  }

  render(){
    return (
      <>
        <button type='button' onClick={this.toggleModal}>Відкрити модальне вікно</button>
        {this.state.showModal && <Modal onClose={this.toggleModal}>
          <h1>hi, meow</h1>
          <button type='button' onClick={this.toggleModal}>закрити модалку</button>
        </Modal>}
      </>
    );
  }
}

export default App;

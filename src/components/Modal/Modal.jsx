import React, { Component } from 'react';
import { ModalBackdrop, ModalContent } from './Modal';

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener("keydown", (event)=> {
      if (event.code === "Escape") {
        console.log(this.props.onClose);
        this.props.onClose()
        
      }
      
    })
  }

    render(){
        return (
          <ModalBackdrop>
            <ModalContent>
              {this.props.children}
            </ModalContent>
          </ModalBackdrop>
        );
      }
}














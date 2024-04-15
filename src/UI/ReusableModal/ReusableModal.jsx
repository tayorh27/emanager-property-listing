import React from 'react'
import styled from 'styled-components'

const ReusableModal = ({isOpen, toggleModal, children}) => {
  return (
    <ModalStyle className={`overlay ${isOpen} ? "open" : ""`} onClick={toggleModal}>
      <div className='modal'>
        {children}
      </div>1
    </ModalStyle>
  )
}

const ModalStyle = styled.div`
  .overlay , .modal {
    position : fixed;
    opacity : 0;
    visibility : hidden;
    transition : 0.5s;
  }

  .overlay{
    z-index : 1;
    top : 0;
    left : 0;
    right : 0;
    bottom : 0;
    background : rgba(0, 0, 0, 0.5);
  }

  .open{
    visibility : visible;
    opacity : 1;
    animation : overlay-in 2s both;

    @keyframes overlay-in {
      0% {scale : 0 0.004;}
      33% {scale : 1 0.004;}
      66%,
      100% {scale : 1 1;}
    }
  }

  .modal {
    z-index ; 2;
    width : 300px;
    height : 5rem;
    top : 50%;
    left : 50%;
    background : #fff;
    border-radius : 10px;
    padding : 40px 50px;
    translate : -50% -50%;
    box-shadow : 0 10px 30px rgba(0,0,0,0.3);
  }

  @keyframes modal-in {
    0%,
    66%{
      opacity : 0;
      visibility : hidden;
      translate : -50% -40%;
    }
    100% {
      opacity : 1;
      visibility : visible;
    }
  }

  .open .modal {
    opacity : 1;
    visibility : visible;
    animation : modal-in 1s;
  }
`

export default ReusableModal
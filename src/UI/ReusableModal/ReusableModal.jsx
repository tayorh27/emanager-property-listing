import React from 'react'
import styled from 'styled-components'

const ReusableModal = ({content, closeModal}) => {
  return (
    <ModalStyle>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-content">{content}</div>
    </ModalStyle>
  )
}

const ModalStyle = styled.div`
  position : fixed;
  top :0;
  left : 0;
  height : 100vh;
  width : 100%;
  z-index : 1000;

  display : flex;
  align-items : center;
  justify-content : center;

  @keyframes overlay-in {
    0% {scale : 0 0.004;}
    33% {scale : 1 0.004;}
    66%
    100% {scale : 1 1;}
  }

  .modal-overlay {
    position : absolute;
    top : 0;
    left : 0;
    width : 100%;
    height : 100%;
    background-color : rgba(0,0,0,0.45);
    filter : blur(4px);
    animation : overlay-in 1s both;
  }

  @keyframes modal-in {
    0%,
    66% {
      opacity : 0;
      visibility : hidden;
      translate : -50% -40%;
    }
    100% {
      opacity : 1;
      visibility : visible;
    }
  }

  .modal-content{
    padding : 2rem;
    position : relative;
    z-index : 100;
    box-shadow : 0 0 1rem rgba(0,0,0,0.3);
    border-radius : 1rem;
    background-color :white;
    animation : modal-in 2s;
    max-width: 90%; /* Set maximum width */
    max-height: 90%; /* Set maximum height */
    overflow: auto; /* Enable scrolling if content overflows */
    width: auto; /* Set width to auto */
    height: auto; /* Set height to auto */
  }
`

export default ReusableModal
import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../../UI/SectionHeader'
import { PiChatCircleTextFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Message = () => {
  return (
    <MessageStyle>
      <SectionHeader title='We would love to hear from you.'/>
      <div className="main">
        <div className="left relative">
          <span>
            <PiChatCircleTextFill 
              style={{
                fontSize : "2.5rem",
                background : "orange",
                padding : "10px",
                borderRadius :  "100%",
                color : "white"
              }}
            />
          </span>
          <h3 className='text-[2rem] font-[500]'>Live Chat</h3>
          <span className='text-[#6E7679]'>Need to reach to us urgently?</span>
          <small className='text-[#6E7379] font-[200]'>We are available and we respond immediately</small>
          <Link className='text-[#547CC9] text-[20px]'>
            <small>Start a conversation</small>
          </Link>
        </div>
        <div className="right gap-[2.5rem] rounded-[13px] h-[100%] flex flex-col justify-center w-full bg-[#F6F8FA]">
          <h2>Send us a message</h2>
          <div>
            <form action="" className='flex flex-col'>
              <div className="input flex flex-col mb-6">
                <label htmlFor="title" className='mb-3 text-[1rem]'>Your title</label>
                <input type="text" name="text" placeholder='Enter your title..' id="" />
              </div>
              <div className="textarea flex flex-col mb-6">
                <label htmlFor="messasge" className='mb-3'>Your message</label>
                <textarea name="message" id="" cols="10" rows="4" placeholder='Enter your message here...'>
                </textarea>
              </div>
              <button type="submit" className='w-[100%] bg-[#547CC9] py-2 text-white rounded-[9px]'>
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </MessageStyle>
  )
}

const MessageStyle = styled.section`
  width : 100%;
  height : 90vh;
  background :transparent;
  display: flex;
  flex-direction : column;
  gap : 1.5rem;
  padding: 3rem 10%;

  .main {
    display : grid;
    justify-content : space-between;
    gap : 3rem;
    grid-template-columns: 1fr 1fr;
    width : 95%;
    margin-inline : auto;
    margin-bottom : 3rem;

    .left {
      display : flex;
      flex-direction : column;
      gap : 1rem;
    }

    .right {
      padding : 2rem;
      padding-top : 1rem;

      h2{
        font-size : 1.5rem;
        font-weight : 500;
      }

      input, textarea {
        padding : 0.5rem;
        outline : none;
        resize : none;
        border-radius : 8px;
        border : 0.2px solid #D2D4D4;
      }
    }
  }
`
export default Message
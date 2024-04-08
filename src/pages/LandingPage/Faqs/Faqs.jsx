import React, { useState } from "react";
import styled from 'styled-components'
import SectionHeader from '../../../components/SectionHeader'
import {FAQdata} from './FaqData'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Faqs = () => {
  return (
    <FaqStyle>
      <SectionHeader title="Frequently Asked Questions (FAQ)"
        subtitle="Have some questions in mind? Take a look at our frequently asked questions below for more information:"
      />
      <div className="main">
        {FAQdata.map((faq) => {
          const {id, question , answer} = faq
          return (
            <Faq id={id} question={question} answer={answer}/>
          )
        })}
      </div>
    </FaqStyle>
  )
};

const Faq = ({id, answer, question}) => {
  const [isShowAnswer, setShowAnswer] = useState(false)

  const ShowAnswer = (index) => {
    if(isShowAnswer === index){
      return setShowAnswer(null)
    }
    setShowAnswer(prev => !prev)
  }

  return (
    <article className={`faq-item
    cursor-pointer relative w-[100%] bg-[#E5F2FF]
    rounded-[8px] px-5 py-2 ${isShowAnswer ? 'bg-[#d0e5fd]' : ""}`}
      key={id} onClick={() => ShowAnswer(id)}
    >
      <div className="flex justify-between items-center mb-2">
        <h4>{question}</h4>
        <button className="faq-icon" onClick={() => ShowAnswer(id)}>
            {
              isShowAnswer ? <AiOutlineMinus/> : <AiOutlinePlus/>  
            }
        </button>
      </div>
      <div className={`faq-content ${isShowAnswer ? 'open' : ''}`}>
          {
            isShowAnswer && <p>{answer}</p>
          }
        </div>
    </article>
  )
}

const FaqStyle = styled.section`
  height : 100%;
  width : 100vw;
  padding : 4rem 10%;

  .main {
    margin : 0 auto;
    margin-top : 3rem;
    width : 85%;
    display : flex;
    flex-direction : column;
    gap : 2rem;

    .faq-item {
      transition: background-color 0.3s ease-in-out;
      display : flex;
      flex-direction : column;

      .faq-content {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.3s ease-out;
      }

      .open {
        max-height : 100px;
      }
    }
  }
`

export default Faqs;

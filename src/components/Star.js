import React from 'react'
import { icons } from 'react-icons'
import {FaStar, FaStarHalfAlt} from "react-icons/fa"
import {AiOutlineStar} from "react-icons/ai"
import styled from 'styled-components'
const Star = ({stars, reviews}) => {
    const ratingStar = Array.from({length:5}, (elem, index)=>{
        let numbers = index + 0.5;
        return (
            <span key={index}>
                {stars>=index+1 ? (
                    <FaStar className='icon'></FaStar>
                ) : stars>=numbers ? (
                    <FaStarHalfAlt className='icon'></FaStarHalfAlt>
                ) : (<AiOutlineStar className='icon'></AiOutlineStar>
                )}
            </span>
        )
    })
  return (
    <Wrapper>
        <div className='icon-style'>
            {ratingStar}
            <p>({reviews} customer reviews)</p>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
    .icon {
      font-size: 2rem;
      color: orange;
    }
    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;
export default Star
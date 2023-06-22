import React from 'react'
import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components';
import { useFilterContext } from '../context/FilterContext';
import FormatPrice from '../Helper/FormatPrice';
import { Button } from '../styles/Button';


const FilterSection = () => {
  const {filters:{text, category, company, colors, price, minPrice, maxPrice}, updateFilterValue, all_products, clearFilters} = useFilterContext();

  const getUniqueData = (data, property)=>{
    let newVal = data.map((currEle)=>{
      return currEle[property];
    })
    if(property==="colors")
    return (newVal = ['ALL', ...new Set([].concat(...newVal))]);
    else
    return (newVal = ['ALL', ...new Set(newVal)]);
  }

  const onlyCategory = getUniqueData(all_products, "category");
  const onlyCompany = getUniqueData(all_products, "company");
  const onlyColors = getUniqueData(all_products, "colors");
  return (
    <Wrapper>
      <div className='filter-search'>
        <form onSubmit={(e)=>e.preventDefault()}>
          <input type="text" name="text" placeholder='search' onChange={updateFilterValue} value={text}></input>
        </form>
      </div>
      <div className='filter-category'>
      <h3>Category</h3>
      <div>
      {
        onlyCategory.map((currEle, index)=>{
          return(
            <button key={index} type="button" name="category" value={currEle} 
            onClick={updateFilterValue}>{currEle}</button>
          )
        })
      }
      </div>
      </div>
      <div className='filter-company'>
        <h3>Company</h3>
        <form action="#">
        <div>
            <select name="company" id="company" className='filter-company--select' onClick={updateFilterValue}>
              {
                onlyCompany.map((curElem, index)=>{
                return(
                    <option value = {curElem} key={index} name="company">{curElem}</option>
                )
            })}
            </select>          
        </div>
        </form>
      </div>
      <div className='filter-colors colors'>
        <h3>Colors</h3>
        <div className='filter-colors-style'>
            {
            onlyColors.map((currEle, index)=>{
              if(currEle==="ALL")
              {
                return(<button key={index} onClick={updateFilterValue} type="button" 
                name="colors" value='ALL' className='color-all--style' >all</button>
                )
              }
              else{
                return(
                  <button key={index} onClick={updateFilterValue} type="button" 
                  name="colors" value={currEle}
                  style= {{backgroundColor : currEle}} className= {colors===currEle ? "active btnStyle" : "btnStyle"} >
                    {colors===currEle? <FaCheck className='checkStyle'></FaCheck> : null}
                  </button>
                )
              }
              
            })
          }
        </div>
      </div>
      <div className='filter_price'>
          <h3>Price</h3>
          <p><FormatPrice price={price}></FormatPrice></p>
          <input type="range" min={minPrice} max={maxPrice} 
          name="price" value={price} onChange={updateFilterValue}></input>
      </div>
      <div className='filter-clear'>
        <Button className='btn' onClick={clearFilters}>Clear Filters</Button>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;
export default FilterSection
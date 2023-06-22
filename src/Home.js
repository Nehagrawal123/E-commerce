import React from 'react'
import styled from 'styled-components'
import FeatureProduct from './components/FeatureProduct';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';

const Home = () => {
  const data={
    name : "Thapa Store",
  };
  return (
    <>
        <HeroSection myData={data}></HeroSection>
        <FeatureProduct></FeatureProduct>
        <Services></Services>
        <Trusted></Trusted>
    </>
    

  )
}
const Wrapper = styled.section`
    background-color : ${({theme})=> theme.colors.bg};
    width : 20rem;
    height : 20rem;
`;

export default Home
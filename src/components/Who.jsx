import React from 'react'
import { OrbitControls } from '@react-three/drei'
import {Canvas} from '@react-three/fiber' 
import styled from 'styled-components'
import Cube from './Cube';

const Section = styled.div`
  height : 100vh;
  background-color : #7112d735;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  height: 100vh;
  width: 1400px;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div` 
  flex: 1;

  @media only screen and (max-width: 768px){
       display :none ;
      }

`;




const Right = styled.div`
  flex: 1;
  display: flex;
 flex-direction: column;
 justify-content: center;
 gap: 20px;

 @media only screen and (max-width: 768px){
       align-items :center ;
       text-align: center;
      }

`;
  const Title = styled.h1`
    font-size: 74px;

    @media only screen and (max-width: 768px){
        font-size: 60px;
      }
  `;
    
  const WhatWeDo = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
  `;

      const Line = styled.img`
      width: 30px;

      `
      const Subtitle = styled.h2`
      color: #da4ea2;
      `

  const Desc = styled.p`
  color: lightgray;
  `;

  const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  `;


  

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera = {{fov:25,pos:[5,5,5]}}>
            <OrbitControls enableZoom = {false} autoRotate/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]} />
          <mesh>
          <Cube />
          </mesh>

          </Canvas>
        </Left>
        <Right>
          <Title>Think Outside the square space</Title>
          <WhatWeDo>
            <Line src = "./img/line.png"  />
            <Subtitle >Who we are</Subtitle>
          </WhatWeDo>

          <Desc>
            a cretive group of designers and developers with a passion for arts
          </Desc>
          <Button>See Our Works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who



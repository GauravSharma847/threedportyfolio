import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height : 100vh;
  background-color : #7112d735;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px){
    height: 200vh;    
  }
`
const Container = styled.div`
  height: 100%;
  width: 1400px;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
  }
`

const Left = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 gap: 20px;
  flex: 2;

  @media only screen and (max-width: 768px){
       flex :1 ;
       align-items: center;
       width: 100%;
      }
`

  const Title = styled.h1`
    font-size: 74px;
    @media only screen and (max-width: 768px){
        text-align: center;
        font-size: 50px;
        margin-top: 320px;
      }
  `
    const Line = styled.img`
      width: 30px;
      
    `
    const Subtitle = styled.h2`
      color: #da4ea2;
    `


  const WhatWeDo = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

  `

  const Desc = styled.p`
    color: lightgray;

    @media only screen and (max-width: 768px){
       padding: 20px;
       text-align: center;

      }
  `

  const Button = styled.button`
    background-color: #da4ea2;
    color: white;
    font-weight: 500;
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `

  
const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px){
       flex :1 ;
       width: 100%;
      }

`
  const Img = styled.img`
    width: 500px;
    height: 500px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    animation: animate 2s infinite ease alternate;

    @keyframes animate {
      to{
        transform: translateY(20px);
      }
    }

    @media only screen and (max-width: 768px){
        height: 300px;
        width: 300px;
      }
    
  `

const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src = "./img/line.png"  />
            <Subtitle >What we do</Subtitle>
          </WhatWeDo>

          <Desc>
            We enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
        <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src = './img/moon1.png' />
        </Right>
      </Container>
    </Section>
  )
}

export default Hero




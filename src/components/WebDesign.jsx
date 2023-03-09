import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Mac from "./Mac";

const Desc = styled.div`
  width: 200px;
  height: 80px;
  padding: 20px;
  color: #ffffff;
  background-color: #6714685c;
  border-radius: 10px;
  position: absolute;
  font-weight: 400;
  /* margin-bottom: 5px; */
  top: 100px;
  right: 100px;
  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Mac />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </Desc>
    </>
  );
};

export default WebDesign;



// to install 3d images in our project 

// npm i -g gltf-pipeline

// to convert gltf file to draco gltf
    //  go to folder of 3d image
        // -> gltf-pipeline -i scene.gltf -o chair.gltf

// convert chair.gltf to chair.jsx
    // npx gltfjsx chair.gltf --transform 

    // put jsx file into component
    //  and chair.transform.glb to our public folder
import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Test from "./components/Test";
import Who from "./components/Who";
import Works from "./components/Works";
// import img from "";


const Container = styled.div`
  height : 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url(./img/bg.jpg);
  &::-webkit-scrollbar{// for chrome we have to write this scrollbar width to work
    display: none;
  }

`

function App() {


  return (
    <Container>

      <Hero />
      <Who />
      <Works />
      <Contact />
  
    </Container>
  );
}

export default App;




//yarn add styled-components   -> for snapping effect
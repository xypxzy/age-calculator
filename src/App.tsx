
import Main from "./components/Main.tsx";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {


  return (
    <Wrapper>
        <Main />
    </Wrapper>
  )
}

export default App

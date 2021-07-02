import React from 'react'
import styled from 'styled-components'
import TabMain from './screens/Main/TabMain'

const Container = styled.div`
  width: 900px;
  margin: auto;
  overflow: hidden;
  height: 100vh;
`

function App() {
  return (
    <Container>
      <TabMain />
    </Container>
  )
}

export default App

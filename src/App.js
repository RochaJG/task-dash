import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {Container} from './styles'

import Routes from './routes'

function App () {
  return (
    <Container>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Container>
  )
}

export default App

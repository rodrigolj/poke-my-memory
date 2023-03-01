import { useState } from 'react'
import { Header as Nav } from './components/Header'
import { Content } from './pages/Content'
import styled from 'styled-components'

const Wrap = styled.div`
background: #0A285F;
height: 100%;
`

function App() {

    const [gameNumber, setGameNumber] = useState<number>(1);

    return (
        <Wrap>
            <Nav gameNumber={gameNumber} setGameNumber={setGameNumber} />
            <Content gameNumber={gameNumber} />
        </Wrap>
    )
}

export default App

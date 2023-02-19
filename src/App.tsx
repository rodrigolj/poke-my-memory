import { Header as Nav } from './components/Header'
import { Content } from './components/Content'
import styled from 'styled-components'

const Wrap = styled.div`
background: #0A285F;
height: 100%;
`

function App() {
    return (
        <Wrap>
            <Nav />
            <Content />
        </Wrap>
    )
}

export default App

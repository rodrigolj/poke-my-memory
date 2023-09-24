import { GamesProvider } from 'utils/GamesContext';
import { Nav } from './components/Nav';
import { Content } from './pages/Content';
import styled from 'styled-components';

const Wrap = styled.div`
    background: #0a285f;
    height: 100%;
`;

function App() {
    return (
        <GamesProvider>
            <Wrap>
                <Nav />
                <Content />
            </Wrap>
        </GamesProvider>
    );
}

export default App;

import { GamesProvider } from 'utils/GamesContext';
import { Nav } from './components/Nav';
import { Content } from './pages/Content';
import styled from 'styled-components';
import { MenuProvider } from 'utils/MenuContext';

const Wrap = styled.div`
    background: #0a285f;
    height: 100%;
`;

function App() {
    console.log('App render');

    return (
        <MenuProvider>
            <GamesProvider>
                <Wrap>
                    <Nav />
                    <Content />
                </Wrap>
            </GamesProvider>
        </MenuProvider>
    );
}

export default App;

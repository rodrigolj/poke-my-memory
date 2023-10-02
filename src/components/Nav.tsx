import styled from 'styled-components';
import MenuButton from './MenuButton';
import { useMenuDispatch } from 'utils/MenuContext';
import { Menu } from './Menu';

const Container = styled.div`
    display: flex;
    background-color: #ffcc00;
    width: 100%;
    height: 6rem;
    align-items: center;
    vertical-align: middle;
    justify-content: space-between;
    padding: 1rem;
`;

const Logo = styled.img`
    height: 3.5rem;
`;

export const Nav = () => {
    const dispatch = useMenuDispatch();

    return (
        <>
            <Container>
                <Logo src="/pokescramble.png" alt="Pokescramble Logo" />
                <MenuButton
                    color="#0075BE"
                    onClick={() => {
                        dispatch({ type: 'open' });
                    }}
                />
            </Container>
            <Menu />
        </>
    );
};

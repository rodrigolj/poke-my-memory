import styled from 'styled-components';
import MenuButton from './MenuButton';
import { Dispatch, useState } from 'react';
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

type HeaderProps = {
    gameNumber: number;
    setGameNumber: Dispatch<React.SetStateAction<number>>;
};

export const Header = ({ gameNumber, setGameNumber }: HeaderProps) => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <>
            <Container>
                <Logo
                    src="/pokescramble.png"
                    alt="Pokescramble Logo"
                />
                <MenuButton
                    color="#0075BE"
                    isMenuOpen={isMenuOpen}
                    setMenuOpen={setMenuOpen}
                />
            </Container>
            {!!isMenuOpen && (
                <Menu isMenuOpen={isMenuOpen} setGameNumber={setGameNumber} />
            )}
        </>
    );
};

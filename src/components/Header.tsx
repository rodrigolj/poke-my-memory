import styled from "styled-components"
import MenuButton from "./MenuButton"
import { Dispatch, useState } from "react"
import { Menu } from "./Menu"

const Container = styled.div`
display: flex;
background-color: #FFCC00;
width: 100%;
height: 6rem;
align-items: center;
vertical-align: middle;
justify-content: space-between;
padding: 1rem;
`

const Logo = styled.img`
height: 4rem;
`

type HeaderProps = {
    setGameNumber: Dispatch<React.SetStateAction<number>>
}

export const Header = ({ gameNumber, setGameNumber }: HeaderProps) => {

    const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

    return (
        <>
            <Container>
                <Logo src="/src/public/pokescramble.png" alt="Pokescramble Logo" />
                <MenuButton color="#0075BE" isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
            </Container>
            {!!isMenuOpen && (
                <Menu setGameNumber={setGameNumber} />
            )
            }
        </>
    )
}

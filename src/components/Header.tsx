import styled from "styled-components"
import MenuButton from "./MenuButton"

const Container = styled.div`
display: flex;
background-color: #FFCC00;
width: 100vw;
height: 4rem;
align-items: center;
vertical-align: middle;
justify-content: space-between;
padding: 1rem;
`

const Logo = styled.img`
height: 3rem;
`


export const Header = () => {
    return (
        <Container>
            <Logo src="/src/public/pokescramble.png" alt="Pokescramble Logo" />
            <MenuButton color="#0075BE"/>
        </Container>
    )
}

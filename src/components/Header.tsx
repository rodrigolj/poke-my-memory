import styled from "styled-components"

const Container = styled("div")`
position: absolute;
background-color: #FFCC00;
width: 100%;
height: 16vh;
`
const Logo = styled("img")`
position: relative;
height: 12vh;
margin: 2vh;
`

export const Header = () => {
    return (
        <Container>
            <Logo src="/src/public/pokescramble.png" alt="Pokescramble Logo" />
        </Container>
    )
}

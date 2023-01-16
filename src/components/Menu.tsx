import styled from "styled-components";

// if setting size, then it's better to use Container
// if it's not necessary, just use a fractal
const Container = styled.div`
display: flex;
flex-flow: column wrap;
flex-grow: 1;

padding-top: 2vh;
margin: 1em;

background: white;
`

const MenuTitle = styled.h2`
font-size: 1.2rem;
font-weight: thin;
text-align: center;
margin: 2vh;
`

const UnorderedList = styled.ul`
padding: 0;
list-style-type: none;
text-align: center;
`

const ListItem = styled.li`
`
const Link = styled.a`
text-decoration: none;
color: #0A285F;
font-weight: bold;
&:hover {
text-decoration: underline;
}
&:active {
color: #0075BE;
}
`

export const Menu = () => {
    return (
        <Container>
            <MenuTitle>Jogos</MenuTitle>
            <UnorderedList>
                <ListItem><Link href="#">Jogo 1</Link></ListItem>
                <ListItem><Link href="#">Jogo 2</Link></ListItem>
                <ListItem><Link href="#">Jogo 3</Link></ListItem>
            </UnorderedList>
        </Container>
    )
}

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
const Button = styled.button`
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

export const Menu = ({setGame}: any) => {
    return (
        <Container>
            <MenuTitle>Jogos</MenuTitle>
            <UnorderedList>
                <ListItem><Button onClick={() => setGame(1)}>Jogo 1</Button></ListItem>
                <ListItem><Button onClick={() => setGame(2)}>Jogo 2</Button></ListItem>
                <ListItem><Button onClick={() => setGame(3)}>Jogo 3</Button></ListItem>
            </UnorderedList>
        </Container>
    )
}

import styled from "styled-components";
import ButtonComponent from "./Button";

const Wrap = styled.div`
display: flex;
justify-content: flex-end;
`


const Container = styled.div`
position: absolute;
z-index: 10;
display: flex;
flex-flow: column wrap;
background: white;
border: 1px solid black;
width: fit-content;
padding: 1rem;
margin-right: 0.5rem;
margin-top: -1rem;
`

const UnorderedList = styled.ul`
display: flex;
flex-flow: column nowrap;
gap: 0.5rem;
list-style-type: none;
text-align: center;
`

const ListItem = styled.li`
`

export function Menu({setGameNumber}: {setGameNumber: React.Dispatch<React.SetStateAction<number>>}) {

    const setGame1 = () => { setGameNumber(1) }
    const setGame2 = () => { setGameNumber(2) }
    const setGame3 = () => { setGameNumber(3) }

    return (
        <Wrap>
            <Container>
                <UnorderedList>
                    <ListItem><ButtonComponent onClick={setGame1}>Quem é este Pokémon?</ButtonComponent></ListItem>
                    <ListItem><ButtonComponent onClick={setGame2}>Game 2</ButtonComponent></ListItem>
                    <ListItem><ButtonComponent onClick={setGame3}>Game 3</ButtonComponent></ListItem>
                </UnorderedList>
            </Container>
        </Wrap>
    )
}

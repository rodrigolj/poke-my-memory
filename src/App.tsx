import { Header as Nav } from './components/Header'
import { Content } from './components/Content'

function App() {
    return (
        // isto é um fractal
        <>
            <div style={{ display: "flex", flexDirection: "row", background: "#0A285F" }}>
                <Nav />
                <Content />
            </div>
        </>
    )
}

export default App

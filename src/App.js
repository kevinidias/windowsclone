import React from 'react';
import {Container, BackIMG} from './Appstyled.js';
import BarraTarefa from './components/BarraTarefas/Barra';


function App() {
    return (
        <Container>
            <BackIMG src={"https://images.hdqwalls.com/download/windows-10-dark-to-1280x1024.jpg"}></BackIMG>
            <BarraTarefa />
        </Container>
    );
}

export default App;

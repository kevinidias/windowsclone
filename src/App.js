import React, {useState} from 'react';
import {Container, BackIMG} from './Appstyled.js';
import BarraTarefa from './components/BarraTarefas/Barra';
import TodoList from './components/ListaTarefas/List';
import Calculator from './components/Calculator/calc';


function App() {
    
    const [ List, setList] = useState(false);
 
    const  OpenList = () => {
        setList(true);
    }

    const  CloseList = () => {
        setList(false);
    }


    const [ Calc, setCalc] = useState(false);

 
    const  OpenCalc = () => {
        setCalc(true);
    }

    const  CloseCalc = () => {
        setCalc(false);
    }


 
    

    return (
        <Container>
            { List &&
                <TodoList
                    offList={CloseList}
                />
            }

            { Calc &&
                <Calculator
                    offCalc={CloseCalc}
                />
            }  
            <BackIMG src={"https://images.hdqwalls.com/download/windows-10-dark-to-1280x1024.jpg"}></BackIMG>
            
            <BarraTarefa 
                onList={OpenList}
                onCalc={OpenCalc}
            />
 
        </Container>
    );
}

export default App;

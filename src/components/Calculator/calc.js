import React from 'react';
import Display from './display/display';
import { FaCalculator } from 'react-icons/fa';  
import {Container,
        AreaItems,
        AreaButtonX,
        ButtonX,
} from './styled';


function Calc(props) {

    const  CloseCalc = () => {
        props.offCalc()
    }


    return (
        <Container>
            <AreaItems>
                <AreaButtonX>
                    <FaCalculator style={{color: 'black', height: '50%', width:'5%'}} />
                    <p style={{fontSize:'1vw', width:'85%'}}>Calculadora</p>
                    <ButtonX onClick={CloseCalc}>x</ButtonX>    
                </AreaButtonX>

                <Display />
                

            </AreaItems>
        </Container>
    )
}

export default Calc;



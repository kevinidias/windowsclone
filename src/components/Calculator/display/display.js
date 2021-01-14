import React, {useState} from 'react';
import { Container,
         Displayy,
         ButtonClear,
         AreaButtons,
         Area1,
         Button1,
         Button2,
         Button3,
         ButtonS,
         Area2,
         Button4,
         Button5,
         Button6,
         Buttonm,
         Area3,
         Button7,
         Button8,
         Button9,
         ButtonD,
         Area4,
         Button0,
         ButtonP,
         ButtonI,
         ButtonX,

} from './styled';
 
function Display() {

    const [data, setData] = useState("");


    return (
        <>
        <Container onSubmit={e => e.preventDefault()}>
            <ButtonClear onClick={()=> setData("")}>x</ButtonClear>
            <Displayy>{data}</Displayy>     
        </Container>

        <AreaButtons>
            <Area1>
                <Button1 onClick={(e)=> setData(data + e.target.value)} value={1}>1</Button1>
                <Button2 onClick={(e)=> setData(data + e.target.value)} value={2}>2</Button2>
                <Button3 onClick={(e)=> setData(data + e.target.value)} value={3}>3</Button3>
                <ButtonS onClick={(e)=> setData(data + e.target.value)} value={'+'}>+</ButtonS>
            </Area1>

            <Area2>
                <Button4 onClick={(e)=> setData(data + e.target.value)} value={4}>4</Button4>
                <Button5 onClick={(e)=> setData(data + e.target.value)} value={5}>5</Button5>
                <Button6 onClick={(e)=> setData(data + e.target.value)} value={6}>6</Button6>
                <Buttonm onClick={(e)=> setData(data + e.target.value)} value={'-'}>-</Buttonm>
            </Area2>      

            <Area3>
                <Button7 onClick={(e)=> setData(data + e.target.value)} value={7}>7</Button7>
                <Button8 onClick={(e)=> setData(data + e.target.value)} value={8}>8</Button8>
                <Button9 onClick={(e)=> setData(data + e.target.value)} value={9}>9</Button9>
                <ButtonD onClick={(e)=> setData(data + e.target.value)} value={'/'}>/</ButtonD>
            </Area3> 

            <Area4>
                <Button0 onClick={(e)=> setData(data + e.target.value)} value={0}>0</Button0>
                <ButtonP onClick={(e)=> setData(data + e.target.value)} value={'.'}>.</ButtonP>

                <ButtonI onClick={(e)=> {try{
                    setData(
                        String(eval(data)).lenght > 3 &&
                            String(eval(data)).includes (".")
                            ? String(eval(data).toFixed(4))
                                : String(eval(data))
                    )
                    }
                    catch(err){
                        console.log(err)
                    }
                    
                }}
                    value={'='}
                >
                    =
                </ButtonI>


                <ButtonX onClick={(e)=> setData(data + e.target.value)} value={'*'}>x</ButtonX>
            </Area4>       

        </AreaButtons>


        </>


    )
}

export default Display;

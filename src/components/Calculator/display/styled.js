import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 94%;
    height: 15%;
`;

export const Displayy = styled.div`
    height: 100%;
    width: 80%;
    border: none;
    text-align: right;
    font-size: 4rem;
    :focus{
        border: none;
        outline: none;
    }
`;

export const ButtonClear = styled.button`
    height: 80%;
    width: 15%;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    color: #FFF;
    background-color: #000;
    font-size: 1.5rem;
    outline: none;
`;

export const AreaButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75%;
    width: 100%;
    flex-direction: column;
`;

export const Area1 = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 95%;
    padding: 5px;
`;

export const Button1 = styled.button`
    height: 100%;
    width: 23%;
    background-color: #000;
    color: #FFF;
    border: none;
    outline: none;
    font-size: 3rem;
`;

export const Button2 = styled(Button1)``;

export const Button3 = styled(Button1)``;

export const ButtonS = styled.button`
    height: 100%;
    width: 23%;
    background-color: #DDD;
    color: #000;
    border: none;
    outline: none;
    font-size: 3rem;
`;


export const Area2 = styled(Area1)``;

export const Button4 = styled(Button1)``;

export const Button5 = styled(Button1)``;

export const Button6 = styled(Button1)``;

export const Buttonm = styled(ButtonS)``;

export const Area3 = styled(Area1)``;

export const Button7 = styled(Button1)``;

export const Button8 = styled(Button1)``;

export const Button9 = styled(Button1)``;

export const ButtonD = styled(ButtonS)``;

export const Area4 = styled(Area1)``;

export const Button0 = styled(Button1)``;

export const ButtonP = styled(ButtonS)``;

export const ButtonI = styled(ButtonS)`
    background-color: green;
`;

export const ButtonX = styled(ButtonS)``;



import styled from 'styled-components';

export const AreaItems = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10%;
    width: 100%;
    padding: 5px;
    border-bottom: 2px solid #DDD;
`;

export const NameTask = styled.span`
    &.complete{
        text-decoration: line-through
    }
    width: 50%;

`;

export const DeleteTask = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 100%;
    cursor: pointer;
    background-color: #FFF; 
    color: #fff;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 5px;
`;

export const CompleteTask = styled.button`
    width: 21%;
    height: 95%;
    cursor: pointer;
    background-color: green;
    font-size: 1.2vw;
    text-align: center;
    border: none;
    outline: none;
    border-radius: 10px; 
    
    &.Tarefacompleta{
        background-color: green;
        color: #FFF;
    }

    &.Completartarefa{
        background-color: yellow;   
        color: #000;
    }
`;
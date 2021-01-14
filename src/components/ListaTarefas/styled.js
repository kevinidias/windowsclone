import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95%;
    width: 100%;
    position: absolute;
`;

export const AreaList = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 60%;
    width: 60%;
    background-color: #FFF;
    flex-direction: column;
`;

export const AreaButtonX = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 7%;
`;

export const ButtonX = styled.button`
    width: 6%;
    height: 100%;
    cursor: pointer;  
    background-color: transparent;
    font-size: 1.6vw;
    color: #000;
    border: none;
    outline: none;  
    :hover{
        background-color: red;
        color: #FFF;
    }
`;


export const AreaTasks = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 70%;
    width: 98%;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
    border: 2px solid #EEE;


    ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
    }
    ::-webkit-scrollbar {
        width: 6px;
        background: #F4F4F4;
    }
    ::-webkit-scrollbar-thumb {
        background: #dad7d7;
    }

`;
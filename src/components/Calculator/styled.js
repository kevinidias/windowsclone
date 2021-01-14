import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95%;
    width: 100%;
    position: fixed;  
`;

export const AreaItems = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50%;
    width: 30%;
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
    width: 9%;
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

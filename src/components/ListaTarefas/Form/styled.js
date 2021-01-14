import styled from 'styled-components';

export const AreaForm = styled.form`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;
`;

export const InputList = styled.input`
    height: 20%;
    width: 50%;
    outline: none;
    border: 2px solid #000;
    padding: 5px;
    font-size: 1.2vw;
    color: #000;
    border-radius: 4px;
`;

export const ButtonList = styled.button`
    width: 30%;
    height: 40%;
    cursor: pointer;
    background-color: green;    
    font-size: 1.2vw;
    text-align: center;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 10px;
`;
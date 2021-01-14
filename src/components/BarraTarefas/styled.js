import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: #000;
`;

export const AreaImWindows9 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 3.8%;
    :hover{
        background-color: #363636;
    }
`;

export const RemainingArea = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 96.2%;
    border-right: 1px solid #FFF;
`;

export const Areaspaces = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 19%;
    padding-right: 8px;
`;

export const AreaArrow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 15%;
    :hover{
        background-color: #363636;
    }
`;

export const AreaSound = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 17%;
    :hover{
        background-color: #363636;
    }
`;

export const AreaLanguage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    height: 100%;
    width: 17%;
    color: #FFF;
    font-size: 12px;
    flex-direction: column;
    :hover{
        background-color: #363636;
    }
`;

export const AreaHour = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    height: 100%;
    flex-direction :column;
    width: 32%;
    color: #FFF;
    font-size: 12px;
    :hover{
        background-color: #363636;
    }
`;

export const AreaBiMessageAlt = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 22%;
    :hover{
        background-color: #363636;
    }
`;

//menu iniciar
export const MenuTotalLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    height: 95%;
    width: 100%;
    position: absolute;
    background-color: transparent;   
`;


export const AreaMenuLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    height: 95%;
    width: 25%;
    background-color: #353535;
    padding: 4px;
    flex-direction: column;
`;

export const Area1MenuLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 65%;
    height: 5%;
    cursor: pointer;
    :hover{
        background-color: #5a5a5a;
    }
`;

export const Area2MenuLeft = styled(Area1MenuLeft)``;



//central de notificações
export const MenuTotalRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 95%;
    width: 100%;
    position: absolute;
    background-color: transparent;
`;



export const AreaMenuRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 35%;
    opacity: 0.9;
    flex-direction: column;
    background-color: #353535;
`;

export const Area1MenuRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    height: 33.3%;
    width: 95%; 
`;

export const Message1 = styled.p`
    color: #DDD;
    font-size: 1vw;
    :hover{
        color: #FFF;
    }
`;

export const Area2MenuRight =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 100%;
`;

export const Message2 = styled.p`
    color: #FFF;
    font-size: 1.2vw;
`;

export const Area3MenuRight = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 33.3%;
    width: 93%;
    flex-direction: column;
`;

export const NameRecolher = styled.p`
    height: 5%;
`;

export const AreaItemsMenuRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 80%;
    width: 95%;
    flex-wrap: wrap;
`;





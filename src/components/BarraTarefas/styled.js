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

export const MenuTotalLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    height: 95%;
    width: 100%;
    position: absolute;
    background-color: transparent;
`;

//menu iniciar
export const AreaMenuLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95%;
    width: 25%;
    background-color: #353535;
`;

export const MenuTotalRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 95%;
    width: 100%;
    position: absolute;
    background-color: transparent;
`;


//central de notificações
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

export const AreaIconNameRede = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32%;
    width: 24.2%;
    flex-direction: column;
    background-color: #4F4F4F;
    :hover{
        border: 1px solid #FFF;
        background-color: #636363;
    }
    
`;

export const AreaMdNetworkWifi = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 40%;
    width: 100%;
`;

export const AreaRede = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 100%;
`;

export const NameRede = styled.p`
    height: 20%;
    width: 90.3%;
    color: #FFF;
`;

export const AreaIconNameLocation = styled(AreaIconNameRede)``;

export const AreaVscLocation = styled(AreaMdNetworkWifi)``;

export const AreaLocation = styled(AreaRede)``;

export const NameLocation = styled(NameRede)``;

export const AreaIconNameSun = styled(AreaIconNameRede)``;

export const AreaIoSunnyOutline = styled(AreaMdNetworkWifi)``;

export const AreaSun = styled(AreaRede)``;

export const NameIoSun = styled(NameRede)``;

export const AreaIconNameGear = styled(AreaIconNameRede)``;

export const AreaVscGear = styled(AreaMdNetworkWifi)``;

export const AreaGear = styled(AreaRede)``;

export const NameGear = styled(NameRede)``;

export const AreaIconNameMoon = styled(AreaIconNameRede)`
`;

export const AreaBiMoon = styled(AreaMdNetworkWifi)``;

export const AreaMoon = styled(AreaRede)`
    height: 55%;
`;

export const NameMoon = styled(NameRede)`
    height: 100%;
`;

export const AreaIconNameScissors = styled(AreaIconNameRede)``;

export const AreaRiScissorsCutLine = styled(AreaMdNetworkWifi)``;

export const AreScissors = styled(AreaRede)``;

export const NameScissors = styled(NameRede)``;

export const AreaIconNameVPN = styled(AreaIconNameRede)``;

export const AreaFaProjectDiagram = styled(AreaMdNetworkWifi)``;

export const AreaVPN = styled(AreaRede)``;

export const NameVPN = styled(NameRede)``;

export const AreaIconNamebluetooth = styled(AreaIconNameRede)``;

export const AreaRiBluetoothConnectLine = styled(AreaMdNetworkWifi)``;

export const Areabluetooth = styled(AreaRede)``;

export const Namebluetooth = styled(NameRede)``;

export const AreaIconNameConnect = styled(AreaIconNameRede)``;

export const AreaMdCastConnected = styled(AreaMdNetworkWifi)``;

export const AreaConnect = styled(AreaRede)``;

export const NameConnect = styled(NameRede)``;




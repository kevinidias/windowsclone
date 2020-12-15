import React, {useState} from 'react';
import { ImWindows8 } from 'react-icons/im';
import { BiMessageAlt, BiMoon} from 'react-icons/bi';
import { AiOutlineSound } from 'react-icons/ai';
import { IoIosArrowUp } from 'react-icons/io';
import { MdNetworkWifi, MdCastConnected } from 'react-icons/md';
import { VscLocation, VscGear } from 'react-icons/vsc';
import { IoSunnyOutline } from 'react-icons/io5';
import { RiScissorsCutLine, RiBluetoothConnectLine } from 'react-icons/ri';
import { FaProjectDiagram } from 'react-icons/fa';  
import { Container,
         AreaImWindows9,
         RemainingArea,
         Areaspaces,
         AreaArrow,
         AreaSound,
         AreaLanguage,
         AreaHour,
         AreaBiMessageAlt,
         MenuTotalLeft,
         AreaMenuLeft,
         MenuTotalRight,
         AreaMenuRight,
         Area1MenuRight,
         Message1,
         Area2MenuRight,
         Message2,
         Area3MenuRight,
         NameRecolher,
         AreaItemsMenuRight,
         AreaIconNameRede,
         AreaMdNetworkWifi,
         AreaRede,
         NameRede,
         AreaIconNameLocation,
         AreaVscLocation,
         AreaLocation,
         NameLocation,
         AreaIconNameSun,
         AreaIoSunnyOutline,
         AreaSun,
         NameIoSun,
         AreaIconNameGear,
         AreaVscGear,
         AreaGear,
         NameGear,
         AreaIconNameMoon,
         AreaBiMoon,
         AreaMoon,
         NameMoon,
         AreaIconNameScissors,
         AreaRiScissorsCutLine,
         AreScissors,
         NameScissors,
         AreaIconNameVPN,
         AreaFaProjectDiagram,
         AreaVPN,
         NameVPN,
         AreaIconNamebluetooth,
         AreaRiBluetoothConnectLine,
         Areabluetooth,
         Namebluetooth,
         AreaIconNameConnect,
         AreaMdCastConnected,
         AreaConnect,
         NameConnect
         
} from './styled';




function Barra() {

    const clickMenuLeft = () => {
        if(Menuleft === false) {
            setMenuleft(true)
            setMenuTotalLefts(true)
        } else{
            setMenuleft(false)
            setMenuTotalLefts(false)
        }
    }

    const clickMenuRight = () => {
        if(Menuright === false) {
            setMenuright(true)
            setMenuTotalRights(true)
        } else{
            setMenuright(false)
            setMenuTotalRights(false)

        }
    }

    const clickMenuTotals = () => {
        if(MenuTotalLefts === true) {
            setMenuTotalLefts(false)
        } else if(MenuTotalRights === true) {
            setMenuTotalRights(false)
        } else if(MenuTotalRights && MenuTotalLefts === true) {
            setMenuTotalRights(false)
            setMenuTotalLefts(false)
        }
    }


    const [ MenuTotalLefts, setMenuTotalLefts ] = useState(false);
    const [ Menuleft, setMenuleft ] = useState(false);
    const [MenuTotalRights, setMenuTotalRights] = useState(true);
    const [ Menuright, setMenuright ] = useState(true);

    return (
        <>
        <Container>
            <AreaImWindows9  onClick={()=> setMenuleft(clickMenuLeft)}>
                <ImWindows8 
                    style={{color:'white', height: '100%', width:'40%'}}
                />
            </AreaImWindows9>
            <RemainingArea>
                <Areaspaces>
                    <AreaArrow>
                        <IoIosArrowUp 
                            style={{color:'white', height: '100%', width:'60%'}} 
                        />
                    </AreaArrow>
                    <AreaSound>
                        <AiOutlineSound
                            style={{color:'white', height: '100%', width:'50%'}}
                        />
                    </AreaSound>
                    <AreaLanguage>
                        POR 
                        PTB2
                    </AreaLanguage>
                    <AreaHour>
                        08:54
                        10/12/2020
                    </AreaHour>
                    <AreaBiMessageAlt onClick={()=> setMenuright(clickMenuRight)}>
                        <BiMessageAlt
                            style={{color:'white', height: '100%', width:'45%'}}
                        />
                    </AreaBiMessageAlt>
                </Areaspaces>
            </RemainingArea>
        </Container>


            {MenuTotalLefts &&
                <MenuTotalLeft onClick={()=> setMenuTotalLefts(clickMenuTotals)}>
                    {Menuleft &&
                    //menu iniciar
                        <AreaMenuLeft onClick={(e)=> e.stopPropagation()}>

                        </AreaMenuLeft>
                    }
                </MenuTotalLeft>
            }

            {MenuTotalRights &&
                <MenuTotalRight onClick={()=> setMenuTotalRights(clickMenuTotals)}>
                    {Menuright &&
                    //central de notificações do windows
                        <AreaMenuRight onClick={(e)=> e.stopPropagation()}>
                            <Area1MenuRight>
                                <Message1>
                                    Gerenciar notificações
                                </Message1>
                            </Area1MenuRight>
                            <Area2MenuRight>
                                <Message2>
                                    Não há notificações novas
                                </Message2>
                            </Area2MenuRight>
                            <Area3MenuRight style={{fontSize:'1vw', color: '#DDD'}}> 
                                <NameRecolher>
                                    Recolher
                                </NameRecolher>
                                    
                                <AreaItemsMenuRight>
                                    <AreaIconNameRede>
                                        <AreaMdNetworkWifi>
                                            <MdNetworkWifi
                                                style={{color:'white', height: '75%', width:'30%'}}
                                            />
                                        </AreaMdNetworkWifi>
                                            <AreaRede>
                                                <NameRede>
                                                    Rede
                                                </NameRede>
                                            </AreaRede>
                                    </AreaIconNameRede>
                                    <AreaIconNameLocation>
                                        <AreaVscLocation>
                                            <VscLocation
                                                style={{color:'white', height: '85%', width:'30%'}}
                                            />
                                        </AreaVscLocation>
                                            <AreaLocation>
                                                <NameLocation>
                                                    Localização
                                                </NameLocation>
                                            </AreaLocation>
                                    </AreaIconNameLocation>
                                    <AreaIconNameSun>
                                        <AreaIoSunnyOutline>
                                            <IoSunnyOutline
                                                style={{color:'white', height: '85%', width:'30%'}}
                                            />
                                        </AreaIoSunnyOutline>
                                            <AreaSun>
                                                <NameIoSun>
                                                    Luz noturna
                                                </NameIoSun>
                                            </AreaSun>
                                    </AreaIconNameSun>
                                    <AreaIconNameGear>
                                        <AreaVscGear>
                                            <VscGear
                                                style={{color:'white', height: '75%', width:'30%'}}
                                            />
                                        </AreaVscGear>
                                            <AreaGear>
                                                <NameGear>
                                                    Configurações
                                                </NameGear>
                                            </AreaGear>
                                    </AreaIconNameGear>
                                    <AreaIconNameMoon>
                                        <AreaBiMoon>
                                            <BiMoon
                                                style={{color:'white', height: '75%', width:'30%'}}
                                            />
                                        </AreaBiMoon>
                                            <AreaMoon>
                                                <NameMoon>
                                                    Assistente de foco
                                                </NameMoon>
                                            </AreaMoon>
                                    </AreaIconNameMoon>
                                    <AreaIconNameScissors>
                                        <AreaRiScissorsCutLine>
                                            <RiScissorsCutLine
                                                style={{color:'white', height: '65%', width:'30%'}}
                                            />
                                        </AreaRiScissorsCutLine>
                                            <AreScissors>
                                                <NameScissors>
                                                    Captura de tela
                                                </NameScissors>
                                            </AreScissors>
                                    </AreaIconNameScissors>
                                    <AreaIconNameVPN>
                                        <AreaFaProjectDiagram>
                                            <FaProjectDiagram
                                                style={{color:'white', height: '55%', width:'30%'}}
                                            />
                                        </AreaFaProjectDiagram>
                                            <AreaVPN>
                                                <NameVPN>
                                                    VPN
                                                </NameVPN>
                                            </AreaVPN>
                                    </AreaIconNameVPN>
                                    <AreaIconNamebluetooth>
                                        <AreaRiBluetoothConnectLine>
                                            <RiBluetoothConnectLine
                                                style={{color:'white', height: '70%', width:'30%'}}
                                            />
                                        </AreaRiBluetoothConnectLine>
                                            <Areabluetooth>
                                                <Namebluetooth>
                                                    Bluetooth
                                                </Namebluetooth>
                                            </Areabluetooth>
                                    </AreaIconNamebluetooth>
                                    <AreaIconNameConnect>
                                        <AreaMdCastConnected>
                                            <MdCastConnected
                                                style={{color:'white', height: '65%', width:'30%'}}
                                            />
                                        </AreaMdCastConnected>
                                            <AreaConnect>
                                                <NameConnect>
                                                    Conectar
                                                </NameConnect>
                                            </AreaConnect>
                                    </AreaIconNameConnect>
                                </AreaItemsMenuRight>
                            </Area3MenuRight>
                        </AreaMenuRight>
                    }
                </MenuTotalRight>
            }
            
        </>
    )
}

export default Barra;

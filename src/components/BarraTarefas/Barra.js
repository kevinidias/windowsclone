import React, {useState} from 'react';
import { ImWindows8 } from 'react-icons/im';
import { BiMessageAlt, BiMoon} from 'react-icons/bi';
import { AiOutlineSound } from 'react-icons/ai';
import { IoIosArrowUp } from 'react-icons/io';
import { MdNetworkWifi, MdCastConnected } from 'react-icons/md';
import { VscLocation, VscGear } from 'react-icons/vsc';
import { IoSunnyOutline } from 'react-icons/io5';
import { RiScissorsCutLine, RiBluetoothConnectLine } from 'react-icons/ri';
import { FaProjectDiagram, FaCalculator } from 'react-icons/fa';  
import { BsCardChecklist } from 'react-icons/bs';


import ItemRight from './MenuRight/Itensmenuright';
import ItensLeft from './MenuLeft/Itensmenuleft';
import Time from './Hours/hours';

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
         Area1MenuLeft,
         Area2MenuLeft,
         MenuTotalRight,
         AreaMenuRight,
         Area1MenuRight,
         Message1,
         Area2MenuRight,
         Message2,
         Area3MenuRight,
         NameRecolher,
         AreaItemsMenuRight,
         
} from './styled';






function Barra(props) {

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



        
    const OpenList = () => {
        props.onList()
        setMenuTotalLefts(false)
    }


    const OpenCalc = () => {
        props.onCalc()
        setMenuTotalLefts(false)
    }



    const [ MenuTotalLefts, setMenuTotalLefts ] = useState(false);
    const [ Menuleft, setMenuleft ] = useState(false);
    const [ MenuTotalRights, setMenuTotalRights] = useState(false);
    const [ Menuright, setMenuright ] = useState(false);

   


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
                        <Time />
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
                        <AreaMenuLeft  onClick={(e)=> e.stopPropagation()}>
                            <Area1MenuLeft onClick={OpenList}>
                                <ItensLeft
                                    name='Lista de tarefas'
                                    icon={<BsCardChecklist style={{color: 'white', height: '100%', width:'100%'}} />}
                                />     
                            </Area1MenuLeft>

                            <Area2MenuLeft onClick={OpenCalc}>
                                <ItensLeft 
                                    name='Calculadora'
                                    icon={<FaCalculator style={{color: 'white', height: '90%', width:'100%'}} />}
                                />
                            </Area2MenuLeft>

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

                                    <ItemRight 
                                        nome="Rede"
                                        Icon= {<MdNetworkWifi 
                                            style={{color:'white', height: '85%', width:'30%'}}
                                        />}
                                    />

                                    <ItemRight 
                                        nome="Localização"
                                        Icon= {<VscLocation 
                                            style={{color:'white', height: '85%', width:'30%'}}
                                        />}
                                    />

                                    <ItemRight 
                                        nome="Luz noturna"
                                        Icon = {<IoSunnyOutline
                                            style={{color:'white', height: '85%', width:'30%'}}
                                        />}                                    
                                    />


                                    
                                    <ItemRight 
                                        nome="Configurações"
                                        Icon = {<VscGear
                                            style={{color:'white', height: '75%', width:'30%'}}
                                        />}                                    
                                    />

                                    <ItemRight 
                                        nome="Assistente"
                                        Icon = {<BiMoon
                                            style={{color:'white', height: '75%', width:'30%'}}
                                        />}                                    
                                    />


                                    <ItemRight 
                                        nome="Capturar tela"
                                        Icon = {<RiScissorsCutLine
                                            style={{color:'white', height: '65%', width:'30%'}}
                                        />}                                    
                                    />
                                    
                                    <ItemRight 
                                        nome="VPN"
                                        Icon = {<FaProjectDiagram
                                            style={{color:'white', height: '55%', width:'30%'}}
                                        />}                                    
                                    />

                                    <ItemRight 
                                        nome="Bluetooth"
                                        Icon = {<RiBluetoothConnectLine
                                            style={{color:'white', height: '70%', width:'30%'}}
                                        />}                                    
                                    />
                                    
                                    <ItemRight 
                                        nome="Conectar"
                                        Icon = {<MdCastConnected
                                            style={{color:'white', height: '65%', width:'30%'}}
                                        />}                                    
                                    />


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

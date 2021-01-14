import React from 'react'

import {    AreaBsCardChecklist,
            AreaNameList,
            NameList} 
            
from './styled';

function Itensmenuleft(props) {




    return (
        <> 
                <AreaBsCardChecklist>
                    {props.icon} 
                </AreaBsCardChecklist>
                <AreaNameList>
                    <NameList>{props.name}</NameList>
                </AreaNameList>
                
        </>
    )
}

export default Itensmenuleft

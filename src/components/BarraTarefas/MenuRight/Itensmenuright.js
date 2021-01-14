import React from 'react';

import {AreaIconName,
        AreaIcon,
        AreaName,
        Name
} from './styled';


function Menuright(props) {
    return (
        <AreaIconName>
            <AreaIcon>
                {props.Icon}
            </AreaIcon>
            <AreaName>
                <Name>
                    {props.nome}
                </Name>
            </AreaName>
        </AreaIconName>
    )
}

export default Menuright;

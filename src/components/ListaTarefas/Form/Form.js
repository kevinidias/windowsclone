import React, {useState} from 'react';
import {AreaForm, InputList, ButtonList} from './styled';

function Form(props) {

    const {onSave} = props;

    const [text, setText] = useState(" ");

    return (
        <AreaForm onSubmit={e => e.preventDefault()}>
            <InputList 
                value={text || ""}
                onChange={(e)=> setText(e.target.value)}
                placeholder="Digite uma tarefa"
            />
            <ButtonList onClick={()=> { onSave(text); setText(""); }}>Salvar Tarefa</ButtonList>
        </AreaForm>
    )
}

export default Form;
 
import React from 'react';
import { IoTrashBinOutline } from 'react-icons/io5';
import {AreaItems, NameTask, DeleteTask, CompleteTask } from './styled';

function items(props) {

    const { tasks } = props;

    return (
        <>
            {tasks.map((task, index) => {
                return(
                    <AreaItems key={index}>
                        <NameTask className={task.isComplete ? "complete" : ""}>
                            {task.task}
                        </NameTask>
                        <DeleteTask onClick={() => props.deleteTask(index)}> 
                            <IoTrashBinOutline style={{color: 'black', height:'100%', width: '100%'}} /> 
                        </DeleteTask>
                        <CompleteTask className={task.isComplete ? "Tarefacompleta" : "Completartarefa" } onClick={() => props.completeTask(index)}>
                            {task.isComplete ? "Tarefa completa" : "Completar tarefa" }
                        </CompleteTask>
                    </AreaItems>
                );
            })}
        </>
    )
}

export default items;

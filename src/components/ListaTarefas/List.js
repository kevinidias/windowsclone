import React, {useState, useEffect} from 'react';
import { BsCardChecklist } from 'react-icons/bs';
import Form from './Form/Form';
import Items from './Items/items';
import { Container,
         AreaList,
         AreaButtonX,
         ButtonX,
         AreaTasks
} from './styled';

function List(props) {

    const  CloseList = () => {
        props.offList()
    }


    const [tasks, setTasks] = useState();

    const addTask = (task) => {
        const newTask = {
            task,
            isComplete: false
        };

        const newTasks = [...(tasks || []), newTask ];

        setTasks(newTasks);
        saveTasks(newTasks);
    };

    const deleteTask = (index) => {
        let newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
        saveTasks(newTasks);
    };

    const toggleComplete = (index) => {
        let newTasks = [...tasks];
        newTasks[index].isComplete = !newTasks[index].isComplete;
        setTasks(newTasks);
        saveTasks(newTasks);
    };
        

    const saveTasks = (tasksToSave) => {
        localStorage.setItem('tasks', JSON.stringify(tasksToSave));
    };

    const loadTasks = () => {
        const loadedTasks = JSON.parse(localStorage.getItem("tasks"));
        return loadedTasks;
    };

    useEffect(() => {
        if (tasks) {
            saveTasks(tasks);
        }
        
    }, [tasks]);

    useEffect(() => {
        const loadedTasks =  loadTasks();
        setTasks(loadedTasks);
    }, []);


    return (
        <Container >
            <AreaList>
                <AreaButtonX>
                    <BsCardChecklist style={{color: 'black', height: '60%', width:'5%'}} />
                    <p style={{fontSize:'1vw', width:'90%'}}>Lista de tarefas</p>
                    <ButtonX onClick={CloseList}>x</ButtonX>    
                </AreaButtonX> 

                <Form onSave={addTask} />

            <AreaTasks>


                {tasks ?
                <Items tasks={tasks} deleteTask={deleteTask} completeTask={toggleComplete} />
                : null}

            </AreaTasks>

                
            </AreaList>
        </Container>
    )
}

export default List;

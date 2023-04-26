import React, { Fragment, useState } from 'react';
import './TodoList.css';
import taskImg from '../../assets/images/tasks.png';
import userImg from '../../assets/images/users.png';
import addBtn from '../../assets/images/add-btn.svg';
import { faker } from '@faker-js/faker';
import Form from '../Form/Form';
import ListItem from '../ListItem/ListItem';
import UserListItem from '../UserListItem/UserListItem';
import { v4 } from 'uuid';

const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const [state, setState] = useState(false);
    const [names, setNames] = useState([]);

    console.log('TodoList')

    const createNames = () => {
        const name = faker.name.fullName();
        const id = v4();
        setNames([...names, { name, id }])
    }

    const handleClick = () => {
        setState(!state)
    }

    const removeItem = (id) => {
        const updateList = todo.filter(item => item.id !== id);
        setTodo(updateList);
    }
    
    const completedTask = (id) => {
        const updateList = todo.map(task => {
            if (task.id === id) {
                return ({ ...task, isDone: !task.isDone })
            }
            return task
        })

        setTodo(updateList)
    }

    return (
        <div>
            <div className='wrapper'>
                <button onClick={handleClick} className='button category-btn'>
                    Show {state ? 'users' : 'tasks'} List
                    <img src={state ? userImg : taskImg} />
                </button>
            </div>

            {state ? 
                <Fragment>
                    <h2>Tasks</h2>
                    <Form todo={todo} setTodo={setTodo} />
                    <div>
                        <ul className='list'>
                        { todo.map(task => {
                            return (
                                <ListItem 
                                key={task.id}
                                task={task}
                                    completedTask={completedTask}
                                    removeItem={removeItem}
                                />
                            )
                        })}
                        </ul>
                    </div>
                </Fragment>
                :
                <div>
                    <h2>Users</h2>
                    <button className='button add-btn' onClick={createNames} style={{margin: '0 auto'}}>
                        Create 
                        <img src={addBtn} />
                    </button>
                    <ol className='list user-list'>
                        { names.map(name => {
                            return (
                                <UserListItem 
                                key={name.id}
                                id={name.id}
                                user={name}
                            />
                        )
                        })}
                    </ol>
                </div>
            }
        </div>
    );
};

export default TodoList;

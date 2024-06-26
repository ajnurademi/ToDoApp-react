import React, { useState } from 'react';
import Todolist from './todolist/todolist.jsx';
import './main.scss';

function Main() {
    // Example initial notes state
    const initialNotes = [
        { id: 1, text: 'Task 1', completed: false },
        { id: 2, text: 'Task 2', completed: false },
        { id: 3, text: 'Task 3', completed: false },
    ];

    const [notes, setNotes] = useState(initialNotes);
    const [darkMode, setDarkMode] = useState(false);
    const [fontcolor, setFontColor] = useState(false);

    const toggleComplete = (id) => {
        const updatedNotes = notes.map(note =>
            note.id === id ? { ...note, completed: !note.completed } : note
        );
        setNotes(updatedNotes);
    };

    const handleAddTask = () => {
        const newTask = {
            id: notes.length + 1,
            text: `New Task ${notes.length + 1}`,
            completed: false
        };
        setNotes([...notes, newTask]);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`container ${darkMode ? 'dark' : ''}`}>
            <div className={`header ${darkMode ? 'dark' : ''}`}>
                <p>TODO LIST</p>
            </div>
            <div className="button-group">
                <button className="darkmode" onClick={toggleDarkMode}>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                <button className="add-button" onClick={handleAddTask}>Add</button>
            </div>
            <div className="search-darkmode">
                <input type="text" placeholder="Enter task..." className="search" />
            </div>
            <div className={`notes ${darkMode ? 'dark' : ''}`}>
                <ul>
                    <Todolist/>
                </ul>
            </div>
        </div>
    );
}

export default Main;

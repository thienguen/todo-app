import React from "react";

const TodoForm = ({ inputText, setInputText, setTodos, todos, setStatus }) => {
  
  /* Function inputTextHandler: */
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  /* 
    Function submitTodoHandler: [...todos] => copy the todos array
    => prevent form from submitting (prevent refresh page), 21
    => create a new todo object
    => add the new todo object to the todo list, 24
    => clear the input text, for the next todo
  */
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  /* 
    Function statusHandler:
    => Receive the value of the selected option
  */
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    /* The entire form */
    <form>

      {/* Input text */}
      <input
        value={inputText}
        onChange={inputHandler}
        type="text"
        className="todo-input"
      />

      {/* Add todo button */}
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      {/* Filter */}
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>

    {/* Ending Form */}
    </form>
  );
};

export default TodoForm;

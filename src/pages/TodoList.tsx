import React, { useEffect, useState } from 'react';
import { getTodos } from '../api/todoApi';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((res) => setTodos(res));
  }, []);

  return (
    <div className="flex flex-col w-[30rem] items-center gap-10 border-2 border-gray border-opacity-50 p-10 rounded-lg">
      <h2 className="text-blue font-bold text-[1.8rem]">Todo List</h2>
      <div className="flex gap-2 mb-5">
        <input type="text" data-testid="new-todo-input" className="border border-blue border-opacity-80 rounded px-2" />
        <button type="submit" data-testid="new-todo-add-button" className="bg-blue px-3 py-1 rounded-md text-white">
          추가
        </button>
      </div>
      <ul>
        {todos.length
          ? todos.map((todo) => (
              <li>
                <label>
                  <input type="text" />
                  <span>{todo}</span>
                </label>
              </li>
            ))
          : '리스트가 없습니다.'}
      </ul>
    </div>
  );
};

export default TodoList;

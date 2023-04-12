import React, { useEffect, useState } from 'react';
import { createTodo, getTodos } from '../api/todoApi';

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoInput, setTodoInput] = useState('');

  useEffect(() => {
    getTodos().then((res) => setTodos(res));
  }, []);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createTodo(todoInput).then((res) => setTodos([...todos, res]));
    setTodoInput('');
  };
  console.log(todos);
  return (
    <div className="flex flex-col w-[30rem] items-center gap-10 border-2 border-gray border-opacity-50 p-10 rounded-lg">
      <h2 className="text-blue font-bold text-[1.8rem]">Todo List</h2>
      <form className="flex gap-2 mb-5 w-full justify-between" onSubmit={onSubmit}>
        <input
          type="text"
          data-testid="new-todo-input"
          className="border border-blue border-opacity-80 w-3/4 rounded px-2"
          placeholder="새로운 할일을 입력하세요."
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button type="submit" data-testid="new-todo-add-button" className="bg-blue px-3 py-1 rounded-md text-white">
          추가
        </button>
      </form>
      <ul>
        {todos.length
          ? todos.map((todo) => (
              <li key={todo.id}>
                <label>
                  <input type="checkbox" checked={todo.isCompleted} />
                  <span>{todo.todo}</span>
                </label>
              </li>
            ))
          : '리스트가 없습니다.'}
      </ul>
    </div>
  );
};

export default TodoList;

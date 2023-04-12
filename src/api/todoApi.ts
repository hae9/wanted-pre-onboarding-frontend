import { authInstance } from './instance';

// todo 생성
export const createTodo = async (todo: string) => {
  const res = await authInstance.post(`/todos`, {
    todo,
  });
  console.log(todo);
  return res.data;
};

// todo 목록 조회
export const getTodos = async () => {
  const res = await authInstance.get(`/todos`);
  return res.data;
};

// todo 수정
export const updateTodo = async ({ id, todo, isCompleted }: updateTodoData) => {
  const res = await authInstance.put(`/todos/${id}`, {
    todo,
    isCompleted,
  });
  return res.data;
};

// todo 삭제
export const deleteTodo = async (id: number) => {
  const res = await authInstance.delete(`/todos/${id}`);
  return res;
};

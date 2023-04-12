interface signData {
  email: string;
  password: string;
}

interface updateTodoData {
  id: number;
  todo: string;
  isCompleted: boolean;
}

interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

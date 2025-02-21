import { defineStore } from "pinia";

interface Todo {
  id: number;
  text: string;
  isCheck: boolean;
}

interface TodoState {
  todos: Todo[];
}

let todoId = 0

export const useTodosStore = defineStore('todo', {
  state: (): TodoState => ({
    todos: [] as Todo[],
  }),
  getters:{
    completedTodos(): Todo[]{
      return this.todos.filter(todo => todo.isCheck)
    },
    uncompletedTodos(): Todo[]{
      return this.todos.filter(todo => !todo.isCheck)
    }
  },
  actions:{
    addTodo(text:string){
      console.log('Adding todo:', text)

      const newTodo: Todo = {
        id: ++todoId,
        text: text.trim(),
        isCheck: false
      }

      this.todos.push(newTodo)

      console.log('Current todos:', this.todos)
    },
    deleteTodo(id:number){
      const index = this.todos.findIndex(todo => todo.id === id)
      if(index !== -1){
        this.todos.splice(index,1)
      }
    },
    toggleTodo(id:number){
      const todo = this.todos.find(todo => todo.id === id)
      if(todo){
        todo.isCheck = !todo.isCheck
      }
    }
  }
    

})


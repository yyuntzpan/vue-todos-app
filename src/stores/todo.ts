import { defineStore } from "pinia";

interface Todo {
  id: number;
  text: string;
  isCheck: boolean;
}
interface TodoState {
  todos: Todo[];
}

export const useTodosStore = defineStore('todo', {
  state: (): TodoState => ({
    todos: []
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
      const newTodo: Todo = {
        id: Date.now(),
        text,
        isCheck: false
      }
      this.todos.push(newTodo)
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


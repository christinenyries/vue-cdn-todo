import { createApp, ref, reactive } from "vue";
import ToDoItem from "./todo-item.js";

const app = createApp({
  setup() {
    const title = "To-do List";
    const newTodo = ref("");
    const todos = reactive([]);

    const add = () => {
      todos.unshift({ id: Date.now(), text: newTodo.value, done: false });
      newTodo.value = "";
    };
    const remove = (id) => {
      const index = todos.findIndex((todo) => todo.id === id);
      todos.splice(index, 1);
    };
    return { add, title, todos, newTodo, remove };
  },
});

app.component("todo-item", ToDoItem);
app.mount("#app");

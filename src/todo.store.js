const { BehaviorSubject } = rxjs;
const { produce } = immer;

export default class TodoStore {

  subject = new BehaviorSubject();

  get todos() {
    return this.subject;
  }

  set todos(todos) {
    const newTodos = produce(this.subject.value, draft => {
      draft.todos = todos;
    });

    this.subject.next(newTodos);
  }

}

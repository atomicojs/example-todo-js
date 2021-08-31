import { c, useProp, html, css } from "atomico";
import tokens from "../tokens";

function todo() {
  /**
   * @type {import("atomico").UseProp<Task[]>}
   */
  const [task, setTask] = useProp("task");
  /**
   * @type {import("atomico").UseProp<View>}
   */
  const [view, setView] = useProp("view");
  return html`<host shadowDom>
    <todo-header
      onNewTask=${
        /**
         * @param {import("atomico").DOMCustomEvent<Task>} event
         */
        (event) => {
          setTask((tasks) => [...tasks, event.detail]);
        }
      }
    ></todo-header>
    <div class="tasks">
      <div class="list">
        ${task
          .filter((task) =>
            view == "complete"
              ? task.checked
              : view == "active"
              ? !task.checked
              : true
          )
          .map(
            ({ value, checked, id }) => html`<todo-task
              checked=${checked}
              onchange=${
                /**
                 * @param {import("atomico").DOMEvent<"change",HTMLInputElement>} event
                 */
                (event) => {
                  const { target } = event;
                  setTask((task) =>
                    task.map((task) =>
                      id === task.id
                        ? { ...task, checked: target.checked }
                        : task
                    )
                  );
                }
              }
            >
              ${value}
            </todo-task>`
          )}
      </div>
    </div>
    <todo-footer class="footer">
      <todo-tab selected=${view === "all"} onclick=${() => setView("all")}>
        All
      </todo-tab>
      <todo-tab
        selected=${view === "active"}
        onclick=${() => setView("active")}
      >
        Active
      </todo-tab>
      <todo-tab
        selected=${view === "complete"}
        onclick=${() => setView("complete")}
      >
        Complete
      </todo-tab>
    </todo-footer>
  </host>`;
}

todo.props = {
  view: {
    type: String,
    value: "all",
  },
  task: {
    type: Array,
    value: () => [],
    /**
     * We reflect the state as an attribute to visualize the change,
     * this is not strict, it is only to know it through the examples
     */
    reflect: true,
  },
};

todo.styles = [
  tokens,
  css`
    :host {
      display: flex;
      flex-flow: column nowrap;
      color: var(--token--contrast);
      border-radius: var(--token--box-radius);
      background: var(--token--secondary);
      min-height: 280px;
    }

    .tasks {
      padding: 1rem 2.5rem;
    }

    .footer {
      margin: auto 0px 0px;
    }
  `,
];

export const Todo = c(todo);

/**
 * @typedef {{id:number,value:string,checked:boolean}} Task
 */

/**
 * @typedef {"all" | "active" | "complete"} View
 */

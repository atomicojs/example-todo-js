import { c, useEvent, html, css } from "atomico";
import tokens from "../tokens";

let id = Date.now();

function todoHeader() {
  const dispatchNewTask = useEvent("NewTask", {
    bubbles: true,
    composed: true,
  });

  return html`<host shadowDom>
    <form
      class="header"
      onsubmit=${(event) => {
        event.preventDefault();
        const { target } = event;
        const {
          input: { value },
        } = target;
        if (value.trim()) {
          id++;
          dispatchNewTask({
            id,
            value,
            checked: false,
          });
          target.reset();
        }
      }}
    >
      <todo-input placeholder="Todo" required name="input"></todo-input>
      <todo-button
        style=${{
          "--radius": `0 var(--box-radius) 0 var(--box-radius)`,
        }}
      ></todo-button>
    </form>
  </host>`;
}

todoHeader.styles = [
  tokens,
  css`
    .header {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-gap: var(--box-gap);
      padding-left: var(--box-gap);
      align-items: flex-end;
    }
  `,
];

export const TodoHeader = c(todoHeader);

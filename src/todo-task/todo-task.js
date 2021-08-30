import { c, html, css } from "atomico";
import tokens from "../tokens";

/**
 * @param {import("atomico").Props<typeof todoTask.props>} props
 */
function todoTask({ checked }) {
  return html`<host shadowDom>
    <label>
      <todo-checkbox checked="${checked}" />
      <span>
        <slot></slot>
      </span>
    </label>
  </host>`;
}

todoTask.props = {
  checked: {
    type: Boolean,
    reflect: true,
  },
};

todoTask.styles = [
  tokens,
  css`
    label {
      display: grid;
      padding: 0.25rem 0.5rem;
      grid-template-columns: auto 12fr;
      grid-gap: 0.5rem;
      align-items: center;
      cursor: pointer;
    }

    label:hover {
      background-color: var(--token--secondary-light-1);
      border-radius: calc(var(--token--box-radius) * 0.33);
    }
  `,
];

export const TodoTask = c(todoTask);

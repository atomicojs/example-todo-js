import { c, html, css } from "atomico";
import tokens from "../tokens";

function todoFooter() {
  return html`<host shadowDom>
    <slot></slot>
  </host>`;
}

todoFooter.styles = [
  tokens,
  css`
    :host {
      display: flex;
      padding: 0 var(--token--box-gap);
    }

    slot {
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      background: var(--token--secondary-light-1);

      border-radius: var(--token--box-radius) var(--token--box-radius) 0 0;
      width: 100%;
    }
  `,
];

export const TodoFooter = c(todoFooter);

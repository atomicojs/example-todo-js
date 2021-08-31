import { c, html, css } from "atomico";
import tokens from "../tokens";

function tab() {
  return html`<host shadowDom>
    <button>
      <slot></slot>
    </button>
  </host>`;
}

tab.props = {
  selected: {
    type: Boolean,
    reflect: true,
  },
};

tab.styles = [
  tokens,
  css`
    button {
      border: none;
      background: none;
      color: currentColor;
      font-family: unset;
      height: calc(var(--token--box-min-height) * 0.75);
      position: relative;
      padding: 0px 0.5rem;
      cursor: pointer;
    }

    button:before {
      width: 100%;
      height: 10%;
      position: absolute;
      left: 0;
      bottom: 0;
      background: transparent;
      content: "";
      display: block;
      border-radius: var(--token--box-radius) var(--token--box-radius) 0 0;
    }

    :host([selected]) button:before {
      background: var(--token--primary);
    }
  `,
];

export const Tab = c(tab);

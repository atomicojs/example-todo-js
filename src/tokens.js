import { css } from "atomico";
/**
  The following snippet allows you to contextualize the design tokens.  
  */
export default css`
  :host {
    --primary: var(--todo--primary, #ffee00);
    --secondary: var(--todo--secondary, black);
    --contrast: var(--todo--contrast, #fff);
    --secondary-light-1: var(
      --todo-secondary-light-1,
      rgba(255, 255, 255, 0.2)
    );
    --secondary-light-2: var(
      --todo-secondary-light-2,
      rgba(255, 255, 255, 0.5)
    );
    --box-radius: var(--todo--box-radius, 1rem);
    --box-min-height: var(--todo--box-min-height, 3rem);
    --box-gap: var(--todo--box-gap, 3rem);
  }
`;

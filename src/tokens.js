import { css } from "atomico";
/**
  The following snippet allows you to contextualize the design tokens.  
  */
export default css`
  :host {
    --token--primary: var(--todo--primary, #ffee00);
    --token--secondary: var(--todo--secondary, black);
    --token--contrast: var(--todo--contrast, #fff);
    --token--secondary-light-1: var(
      --secondary-light-1,
      rgba(255, 255, 255, 0.2)
    );
    --token--secondary-light-2: var(
      --secondary-light-2,
      rgba(255, 255, 255, 0.5)
    );
    --token--box-radius: var(--todo--box-radius, 1rem);
    --token--box-min-height: var(--todo--box-min-height, 3rem);
    --token--box-gap: var(--todo--box-gap, 3rem);
  }
`;

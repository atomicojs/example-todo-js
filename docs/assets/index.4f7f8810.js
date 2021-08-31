import{c as e,a as t,u as o,b as r,d as n,h as s,e as a}from"./vendor.6860be20.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var i=e`
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
`;const d=({color:e,width:t})=>s`<svg height="2" width="${t}">
  <line
    x1="0"
    y1="50%"
    x2="100%"
    y2="50%"
    stroke="${e}"
    stroke-linecap="round"
    stroke-width="2"
    stroke-dasharray="0.1 5"
  />
</svg>`;function c({value:e="",...t}){const[,a]=o("value");return r("reset",(()=>a(""))),n((()=>s`<input
        ...${t}
        slot="input"
        type="text"
        value=${e}
        oninput=${e=>a(e.target.value)}
      />`)),s`<host shadowDom>
    <div class="box">
      <slot name="input"></slot>
      ${d({color:"var(--token--secondary-light-2)",width:"100%"})}
      ${d({color:"var(--token--primary)",width:1+.7*e.replace(/s+/g,"").length+"em"})}
    </div>
  </host>`}c.props={value:String,name:String,required:Boolean,placeholder:String},c.styles=[i,e`
    .box {
      position: relative;
    }
    .box svg {
      position: absolute;
      left: 0;
      bottom: 0;
      max-width: 100%;
    }

    ::slotted(input) {
      width: 100%;
      box-sizing: border-box;
      background: transparent;
      border: none;
      color: unset;
      padding: 0.5em 1em 0.25em 1em;
      outline: none;
      font-size: 1em;
      font-family: unset;
      cursor: pointer;
    }
  `];const l=t(c);function u(){return n((()=>s`<button slot="button">
      <svg width="12" height="12" viewBox="0 0 12 12">
        <path
          id="icon-plus"
          d="M5,11V7H1A1,1,0,0,1,1,5H5V1A1,1,0,0,1,7,1V5h4a1,1,0,0,1,0,2H7v4a1,1,0,0,1-2,0Z"
          fill="var(--token--primary)"
        />
      </svg>
    </button>`)),s`<host shadowDom>
    <slot name="button"></slot>
  </host>`}u.styles=[i,e`
    :host {
      --radius: var(--token--box-radius);
    }
    ::slotted(button) {
      --size: var(--token--box-min-height);
      width: var(--size);
      height: var(--size);
      background: var(--token--secondary-light-1);
      border: none;
      border-radius: var(--radius);
      cursor: pointer;
    }
  `];const h=t(u);function p(e){const[,t]=o("checked");return n((()=>s`<input
        slot="input"
        type="checkbox"
        onchange=${e=>{t(e.target.checked)}}
        ...${e}
      />`)),s`<host shadowDom>
    <slot name="input"></slot>
    <div class="icon">
      <slot name="checked">
        <svg width="12.728" height="12.728" viewBox="0 0 12.728 12.728">
          <path
            d="M326.657-927.172a1,1,0,0,1-1-1,1,1,0,0,1,1-1h3v-9a1,1,0,0,1,1-1,1,1,0,0,1,1,1v10a1,1,0,0,1-1,1Z"
            transform="translate(-885.884 433.82) rotate(45)"
          />
        </svg>
      </slot>
    </div>
  </host>`}p.props={checked:{type:Boolean,reflect:!0}},p.styles=[i,e`
    :host {
      position: relative;
      display: inline-flex;
    }

    ::slotted(input) {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: calc(var(--token--box-radius) * 0.33);
      appearance: unset;
      border: 2px solid var(--token--primary);
      margin: auto;
    }

    ::slotted(input:checked) {
      background: var(--token--primary);
    }

    .icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }

    :host([checked]) .icon {
      opacity: 1;
    }
  `];const m=t(p);function b(){return s`<host shadowDom>
    <button>
      <slot></slot>
    </button>
  </host>`}b.props={selected:{type:Boolean,reflect:!0}},b.styles=[i,e`
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
  `];const g=t(b);let k=Date.now();function v(){const e=a("NewTask",{bubbles:!0,composed:!0});return s`<host shadowDom>
    <form
      class="header"
      onsubmit=${t=>{t.preventDefault();const{target:o}=t,{input:{value:r}}=o;r.trim()&&(k++,e({id:k,value:r,checked:!1}),o.reset())}}
    >
      <todo-input placeholder="Todo" required name="input"></todo-input>
      <todo-button
        style=${{"--radius":"0 var(--token--box-radius) 0 var(--token--box-radius)"}}
      ></todo-button>
    </form>
  </host>`}v.styles=[i,e`
    .header {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-gap: var(--token--box-gap);
      padding-left: var(--token--box-gap);
      align-items: flex-end;
    }
  `];const f=t(v);function y({checked:e}){const[,t]=o("checked");return s`<host shadowDom>
    <label>
      <!--
      In this case we must reflect the checked state 
      to the component that nests it, in order to 
      synchronize the state of both the parent and the child.
      -->
      <todo-checkbox
        checked="${e}"
        onchange=${e=>t(e.target.checked)}
      />
      <span>
        <slot></slot>
      </span>
    </label>
  </host>`}y.props={checked:{type:Boolean,reflect:!0,event:{type:"change",bubbles:!0,composed:!0}}},y.styles=[i,e`
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
  `];const x=t(y);function w(){return s`<host shadowDom>
    <slot></slot>
  </host>`}w.styles=[i,e`
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
  `];const $=t(w);function D(){const[e,t]=o("task"),[r,n]=o("view");return s`<host shadowDom>
    <todo-header
      onNewTask=${e=>{t((t=>[...t,e.detail]))}}
    ></todo-header>
    <div class="tasks">
      <div class="list">
        ${e.filter((e=>"complete"==r?e.checked:"active"!=r||!e.checked)).map((({value:e,checked:o,id:r})=>s`<todo-task
              checked=${o}
              onchange=${e=>{const{target:o}=e;t((e=>e.map((e=>r===e.id?{...e,checked:o.checked}:e))))}}
            >
              ${e}
            </todo-task>`))}
      </div>
    </div>
    <todo-footer class="footer">
      <todo-tab selected=${"all"===r} onclick=${()=>n("all")}>
        All
      </todo-tab>
      <todo-tab
        selected=${"active"===r}
        onclick=${()=>n("active")}
      >
        Active
      </todo-tab>
      <todo-tab
        selected=${"complete"===r}
        onclick=${()=>n("complete")}
      >
        Complete
      </todo-tab>
    </todo-footer>
  </host>`}D.props={view:{type:String,value:"all"},task:{type:Array,value:()=>[],reflect:!0}},D.styles=[i,e`
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
  `];const E=t(D);customElements.define("todo-input",l),customElements.define("todo-button",h),customElements.define("todo-checkbox",m),customElements.define("todo-tab",g),customElements.define("todo-header",f),customElements.define("todo-task",x),customElements.define("todo-footer",$),customElements.define("todo-app",E);

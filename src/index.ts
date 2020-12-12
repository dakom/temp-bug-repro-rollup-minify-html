import { LitElement, html, css, customElement} from 'lit-element';

const red = css`red`;

@customElement('circle-button')
export class _ extends LitElement {

  static get styles() {
    return [css`
      main {
        border-radius: 9999px;
        height: 48px;
        width: 48px;
        border-style: solid;
        border-width: 1px;
        border-color: grey; 
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: ${red}; 
      }

      .label {
        text-align: center;
        width: 100%;
      }

    `];
  }

  // Define the element's template
  render() {

    console.log(red);


    return html`
      <main>
        <div class="label">?</div>
      </main>
  `;
  }
}
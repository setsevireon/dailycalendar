import { savePdf } from './pdfgen.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Daily Calendar Generator</h1>
    <div>
      <button id="generate" type="button">Save</button>
    </div>
  </div>
`

document.querySelector<HTMLButtonElement>('#generate')?.addEventListener('click', () => savePdf('Hello'))

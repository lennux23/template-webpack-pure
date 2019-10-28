const html = document.querySelector('html')
const content = document.querySelector('.content')

content.addEventListener('click', e => {
  if (e.target.tagName == 'BUTTON'){
    trans();
    let theme = html.getAttribute('data-theme')
    theme == 'dark' ? html.setAttribute('data-theme', '') : html.setAttribute('data-theme', 'dark')
  }
})

const trans = () => {
  html.classList.add ('transition');
  window.setTimeout(() => {
    html.classList.remove ('transition');
  }, 1000)
}
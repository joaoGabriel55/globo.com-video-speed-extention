const intervalChats = setInterval(() => {
  const panel = document.querySelector('.media-control-panel__lower')
  if (!panel)
    return
  const controlsContainer = panel.querySelector('.opposites-container')
  if (!controlsContainer)
    return
  const menu = controlsContainer.querySelector('.media-control-position__right')
  if (!menu)
    return
  if (!menu.querySelector('#speed_menu'))
    menu.appendChild(htmlToElement(speedBtn))
  else {
    const speedMenu = document.getElementById('speed_menu')
    speedMenu.onchange = function (e) {
      e.stopPropagation()
      document.querySelectorAll('video').forEach(video => {
        if (!video.paused) {
          video.playbackRate = Number(e.target.value)
        }
      })
      return false
    }
  }

}, 1000)

function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}

const speedBtn = `
<select name="speed_select" class="media-control-element"
  style="
    background-color: #191919b8;
    color: white;
    padding: 4px;
    margin-bottom: 8px;
    border-radius: 8px;
  "
  id="speed_menu"
  >
  <option value="2">2x</option>
  <option value="1.75">1.75x</option>
  <option value="1.5">1.5x</option>
  <option value="1.25">1.25x</option>
  <option value="1" selected="1">Normal</option>
  <option value="0.75">0.75x</option>
  <option value="0.5">0.5x</option>
  <option value="0.25">0.25x</option>
</select>`
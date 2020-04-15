
// handle init button for mobiles

const geoportalInit = function () {
  const buttonContinue = document.querySelector('.continue');
  const mobileHeader = document.querySelector('.mobileHeader');
  buttonContinue.addEventListener('click', function () {
    mobileHeader.classList.toggle('active')
  })


}

geoportalInit()

// handle layer menu for mobiles

const toolsHandle = function () {
  const layersMenu = document.querySelector('.tool.layer');
  const layersList = document.querySelector('.layerList');
  layersMenu.addEventListener('click', function () {
    layersList.classList.toggle('active')
  })

}


toolsHandle()





const geoportal = function () {
  let x = 2338462.5263971756;
  let y = 7087490.511769734;
  let mapZoom = 10;

  const map = new ol.Map({
    view: new ol.View({
      center: [x, y],
      zoom: mapZoom
    }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      })
    ],
    target: 'map'
  })


}

geoportal()
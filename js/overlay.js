
const mpzpOverlayFunction = function () {

  const mpzpOverlayHTML = document.querySelector('.mpzpOverlay')

  const mpzpOznKonturu = document.querySelector('span.oznaczenie')
  const mpzpPrzeznaczenie1 = document.querySelector('span.przeznaczenie1')
  const mpzpPrzeznaczenie2 = document.querySelector('span.przeznaczenie2')
  const mpzpNrU = document.querySelector('span.nrU')
  const mpzpNazwa = document.querySelector('span.nazwa')

  const mpzpOverlay = new ol.Overlay({
    element: mpzpOverlayHTML
  })
  map.addOverlay(mpzpOverlay)

  const mpzpOverlayFunction = function (e) {
    mpzpOverlay.setPosition(undefined);
    map.forEachFeatureAtPixel(e.pixel, function (feature, layer) {

      let coordinates = e.coordinate
      let clickedPolygonOznKonturu = feature.get('NR_KONTURU') + feature.get('OZNACZ_KON')
      let clickedPolygonPrzeznaczenie1 = feature.get('PRZEZN')
      let clickedPolygonPrzeznaczenie2 = feature.get('PRZEZN2')
      let clickedPolygonNrU = feature.get('NR_UCHWALY')
      let clickedPolygonNazwa = feature.get('NAZWA_PLAN')

      mpzpOverlay.setPosition(coordinates)
      mpzpOznKonturu.innerHTML = clickedPolygonOznKonturu
      mpzpPrzeznaczenie1.innerHTML = clickedPolygonPrzeznaczenie1
      mpzpPrzeznaczenie2.innerHTML = clickedPolygonPrzeznaczenie2
      mpzpNrU.innerHTML = clickedPolygonNrU
      mpzpNazwa.innerHTML = clickedPolygonNazwa

    },
      {
        layerFilter: function (layerCandidate) {
          return layerCandidate.get('title') === 'MPZP'
        }
      }

    )
  }

  map.addEventListener('click', mpzpOverlayFunction)


}
const geolocation = function (geolocationButton, map) {
  console.log('d')
  let markerLayer;

  const mapViewProjection = map.getView().getProjection()
  const geolocationFunction = new ol.Geolocation({
    tracking: true,
    trackingOptions: {
      enableHighAccuracy: true
    },
    projection: mapViewProjection
  })



  const markerStyle = new ol.style.Style({
    image: new ol.style.Icon({
      src: 'data/ikony svg/marker_ico.svg',
      size: [11, 18],
      scale: 2,
      opacity: 1
    }),
    text: new ol.style.Text({
      text: 'Kliknij na mapę aby usunąć znacznik',
      offsetY: 50,
      scale: 1.5
    })
  })

  let geoAccuracy = new ol.Feature()
  geolocationFunction.on('change:accuracyGeometry', function () {
    geoAccuracy.setGeometry(geolocationFunction.getAccuracyGeometry())
  })




  let positionMarker = new ol.Feature()
  positionMarker.setStyle(markerStyle)

  geolocationFunction.on('change', function (e) {
    let geoPosition = this.getPosition()
    map.getView().setCenter(geoPosition)
    map.getView().setZoom(20)
    positionMarker.setGeometry(geoPosition ? new ol.geom.Point(geoPosition) : null)
  })


  markerLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [geoAccuracy, positionMarker]
    }),
    visible: false
  })

  map.addLayer(markerLayer)



  // do naprawy
  if (geolocationButton.classList.contains('clicked')) {
    markerLayer.setVisible(true)
    geolocationFunction.setTracking(true)
    console.log('dodaje')



  }

  map.on('click', function () {
    markerLayer.setVisible(false)
    geolocationButton.classList.remove('clicked')
    geolocationFunction.setTracking(false)
  })



}
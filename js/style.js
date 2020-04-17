const vectorFillStyleTransparent = new ol.style.Style({
  fill: new ol.style.Fill({
    color: [0, 0, 0, 0]
  }),
  stroke: new ol.style.Stroke({
    color: [0, 0, 0, 1],
    width: 2
  })
})




const roadsVectorStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: [0, 0, 0, 1],
    width: 1
  })
})

const trainVectorStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: [150, 150, 150, 1],
    width: 1
  })
})


const parkingFillStyleTransparent = new ol.style.Style({
  fill: new ol.style.Fill({
    color: [0, 0, 0, .5]
  }),
  stroke: new ol.style.Stroke({
    color: [0, 0, 0, 1],
    width: 1
  })
})



const shopIcon = 'data/ikony svg/sklep_ico.svg'
const postIcon = 'data/ikony svg/poczta_ico.svg'
const hotelIcon = 'data/ikony svg/hotel_ico.svg'
const gastroIcon = 'data/ikony svg/gastronomia_ico.svg'
const bankIcon = 'data/ikony svg/bank_ico.svg'
const pharmacyIcon = 'data/ikony svg/apteka_ico.svg'

const iconSize = [137, 152]
const iconScale = .3
const iconOpacity = 1

const shopStyle = new ol.style.Style({
  image: new ol.style.Icon({
    src: shopIcon,
    size: iconSize,
    scale: iconScale,
    opacity: iconOpacity
  })
})

const postStyle = new ol.style.Style({
  image: new ol.style.Icon({
    src: postIcon,
    size: iconSize,
    scale: iconScale,
    opacity: iconOpacity
  })
})

const hotelStyle = new ol.style.Style({
  image: new ol.style.Icon({
    src: hotelIcon,
    size: iconSize,
    scale: iconScale,
    opacity: iconOpacity
  })
})

const gastroStyle = new ol.style.Style({
  image: new ol.style.Icon({
    src: gastroIcon,
    size: iconSize,
    scale: iconScale,
    opacity: iconOpacity
  })
})

const bankStyle = new ol.style.Style({
  image: new ol.style.Icon({
    src: bankIcon,
    size: iconSize,
    scale: iconScale,
    opacity: iconOpacity
  })
})

const pharmacyStyle = new ol.style.Style({
  image: new ol.style.Icon({
    src: pharmacyIcon,
    size: iconSize,
    scale: iconScale,
    opacity: iconOpacity
  })
})






const addLayerStyle = function (feature) {
  let nameOfThePoint = feature.get('fclass')

  if (nameOfThePoint === 'sklep') {
    feature.setStyle([shopStyle])
  }
  if (nameOfThePoint === 'poczta') {
    feature.setStyle([postStyle])
  }
  if (nameOfThePoint === 'hotel') {
    feature.setStyle([hotelStyle])
  }
  if (nameOfThePoint === 'gastronomia') {
    feature.setStyle([gastroStyle])
  }
  if (nameOfThePoint === 'bankomat') {
    feature.setStyle([bankStyle])
  }
  if (nameOfThePoint === 'bank') {
    feature.setStyle([bankStyle])
  }
  if (nameOfThePoint === 'apteka') {
    feature.setStyle([pharmacyStyle])
  }



}


const busStopIconStyle = new ol.style.Style({
  image: new ol.style.Icon({
    src: 'data/ikony svg/autobus_ico.svg',
    size: iconSize,
    scale: iconScale,
    opacity: iconOpacity
  })
})

const fuelIconStyle = new ol.style.Style({
  image: new ol.style.Icon({
    src: 'data/ikony svg/paliwo_ico.svg',
    size: iconSize,
    scale: iconScale,
    opacity: iconOpacity
  })
})



// style for selected elements 

const selectStyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: [0, 0, 255, 0.3]
  }),
  stroke: new ol.style.Stroke({
    color: [255, 0, 0, 1],
    width: 2
  })
})

// handle init button for mobiles

const geoportalInit = function () {
  const buttonContinue = document.querySelector('.continue');
  const mobileHeader = document.querySelector('.mobileHeader');
  buttonContinue.addEventListener('click', function () {
    mobileHeader.classList.toggle('active')
  })


}

geoportalInit()



// main geoportal function

const geoportal = function () {
  // Szczytno coordinates
  let x = 2337120.1007963326;
  let y = 7087900.5246428475;

  // default map zoom
  let mapZoom = 14;

  // add new controls to map
  const zoomSlider = new ol.control.ZoomSlider()
  const scaleLine = new ol.control.ScaleLine()
  const zoomToExtent = new ol.control.ZoomToExtent({
    label: 'Z',
    extent: [2333232.4535, 7084767.8512, 2341708.2129, 7091120.6602]
  })

  const myMapControls = ol.control.defaults().extend([
    zoomSlider, scaleLine, zoomToExtent
  ])


  // create map
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const map = new ol.Map({
    view: new ol.View({
      center: [x, y],
      zoom: mapZoom,
      extent: [2312781.9973548115, 7070756.490883543, 2361599.185495575, 7104310.199451966]
    }),
    target: 'map',
    controls: myMapControls,
    interactions: ol.interaction.defaults({
      doubleClickZoom: false,
      pinchRotate: false

    })
  })


  // extent of raster layers from QGIS

  const suikzpExtent = [2333232.4535, 7084767.8512, 2341708.2129, 7091120.6602];
  const mpzp7Extent = [2336687.7880, 7090257.5061, 2337170.7133, 7091085.5821];
  const mpzp11Extent = [2337177.4102, 7087410.8075, 2337499.9269, 7087711.3955];
  const mpzp12Extent = [2336249.8249, 7087992.5162, 2336374.6029, 7088161.4778];
  const mpzp13Extent = [2336642.6545, 7088262.7856, 2336719.1756, 7088336.7744];
  const mpzp14Extent = [2337478.1913, 7087331.5381, 2337787.7960, 7087578.7501];
  const mpzp15Extent = [2336806.3937, 7087786.2646, 2337117.9912, 7088075.5130];
  const mpzp16Extent = [2337181.1400, 7087743.1493, 2337507.1288, 7088018.5609];
  const mpzp17Extent = [2338957.8665, 7087201.5559, 2340230.7309, 7089035.2091];
  const mpzp18Extent = [2337363.5117, 7087389.2466, 2337585.4803, 7087589.5833];
  const mpzp19Extent = [2336294.5654, 7084796.2510, 2337071.2763, 7086444.4352];
  const mpzp20Extent = [2333220.3652, 7088133.4883, 2336675.8563, 7089599.2594];
  const mpzp21Extent = [2336593.8091, 7088230.5655, 2336673.0181, 7088273.9497];
  const mpzp22Extent = [2335493.0002, 7088806.7391, 2336921.3296, 7089967.6922];
  const mpzp23Extent = [2333271.3740, 7085345.0383, 2335542.1731, 7087350.5242];
  const mpzp24Extent = [2336332.1762, 7087734.1726, 2336708.4500, 7088121.6599];
  const mpzp25Extent = [2339418.5989, 7087336.8675, 2339548.5030, 7087476.4090];
  const mpzp26Extent = [2336776.9052, 7088068.6848, 2337446.0241, 7088442.8847];
  const mpzp27Extent = [2337265.5102, 7087368.9895, 2338419.7994, 7088422.7236];

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // default OSM map

  const defaultOSM = new ol.layer.Tile({
    source: new ol.source.OSM(),
    visible: true,
    title: 'OSM'
  })


  // define vector layers
  const suikzpVectorLayer = new ol.layer.VectorImage({
    source: new ol.source.Vector({
      url: 'data/warstwy gis GEOJSON/suikzp_3857_geo.geojson',
      format: new ol.format.GeoJSON(),
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'SUIKZP',
    style: vectorFillStyleTransparent
  })

  const mpzpVectorLayer = new ol.layer.VectorImage({
    source: new ol.source.Vector({
      url: 'data/warstwy gis GEOJSON/mpzp_3857_geo.geojson',
      format: new ol.format.GeoJSON(),
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'MPZP',
    style: vectorFillStyleTransparent
  })

  const busVectorLayer = new ol.layer.VectorImage({
    source: new ol.source.Vector({
      url: 'data/warstwy gis GEOJSON/autobusy_osm_3857_geo.geojson',
      format: new ol.format.GeoJSON(),
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'bus',
    style: busStopIconStyle
  })

  const roadVectorLayer = new ol.layer.VectorImage({
    source: new ol.source.Vector({
      url: 'data/warstwy gis GEOJSON/drogi_osm_3857_geo.geojson',
      format: new ol.format.GeoJSON(),
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'road',
    style: roadsVectorStyle
  })

  const trainVectorLayer = new ol.layer.VectorImage({
    source: new ol.source.Vector({
      url: 'data/warstwy gis GEOJSON/kolej_osm_3857_geo.geojson',
      format: new ol.format.GeoJSON(),
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'train',
    style: trainVectorStyle
  })

  const fuelVectorLayer = new ol.layer.VectorImage({
    source: new ol.source.Vector({
      url: 'data/warstwy gis GEOJSON/paliwo_osm_3857_geo.geojson',
      format: new ol.format.GeoJSON(),
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'fuel',
    style: fuelIconStyle
  })

  const parkingVectorLayer = new ol.layer.VectorImage({
    source: new ol.source.Vector({
      url: 'data/warstwy gis GEOJSON/parking_osm_3857_geo.geojson',
      format: new ol.format.GeoJSON(),
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'parking',
    style: parkingFillStyleTransparent
  })

  const addVectorLayer = new ol.layer.VectorImage({
    source: new ol.source.Vector({
      url: 'data/warstwy gis GEOJSON/rozne_osm_3857_geo.geojson',
      format: new ol.format.GeoJSON(),
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'add',
    style: addLayerStyle
  })

  const szczytnoVectorLayer = new ol.layer.VectorImage({
    source: new ol.source.Vector({
      url: 'data/warstwy gis GEOJSON/szczytno_3857_geojson.geojson',
      format: new ol.format.GeoJSON(),
      attributions: 'by BC2020'
    }),
    visible: true,
    title: 'szczytno',
    style: vectorFillStyleTransparent
  })

  // define raster layers

  const suikzpRasterLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: 'data/raster/suikzp.png',
      imageExtent: suikzpExtent,
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'SUIKZP'
  })

  const mpzp07RasterLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: 'data/raster/07.png',
      imageExtent: mpzp7Extent,
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'MPZP'
  })

  const mpzp11RasterLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: 'data/raster/11.png',
      imageExtent: mpzp11Extent,
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'MPZP'
  })

  const mpzp12RasterLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: 'data/raster/12.png',
      imageExtent: mpzp12Extent,
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'MPZP'
  })

  const mpzp13RasterLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: 'data/raster/13.png',
      imageExtent: mpzp13Extent,
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'MPZP'
  })

  const mpzp14RasterLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: 'data/raster/14.png',
      imageExtent: mpzp14Extent,
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'MPZP'
  })

  const mpzp15RasterLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: 'data/raster/15.png',
      imageExtent: mpzp15Extent,
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'MPZP'
  })

  const mpzp16RasterLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: 'data/raster/16.png',
      imageExtent: mpzp16Extent,
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'MPZP'
  })

  const mpzp17RasterLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: 'data/raster/17.png',
      imageExtent: mpzp17Extent,
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'MPZP'
  })

  const mpzp18RasterLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: 'data/raster/18.png',
      imageExtent: mpzp18Extent,
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'MPZP'
  })

  const mpzp19RasterLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: 'data/raster/19.png',
      imageExtent: mpzp19Extent,
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'MPZP'
  })

  const mpzp20RasterLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: 'data/raster/20.png',
      imageExtent: mpzp20Extent,
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'MPZP'
  })

  const mpzp21RasterLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: 'data/raster/21.png',
      imageExtent: mpzp21Extent,
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'MPZP'
  })

  const mpzp22RasterLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: 'data/raster/22.png',
      imageExtent: mpzp22Extent,
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'MPZP'
  })

  const mpzp23RasterLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: 'data/raster/23.png',
      imageExtent: mpzp23Extent,
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'MPZP'
  })

  const mpzp24RasterLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: 'data/raster/24.png',
      imageExtent: mpzp24Extent,
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'MPZP'
  })

  const mpzp25RasterLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: 'data/raster/25.png',
      imageExtent: mpzp25Extent,
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'MPZP'
  })

  const mpzp26RasterLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: 'data/raster/26.png',
      imageExtent: mpzp26Extent,
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'MPZP'
  })

  const mpzp27RasterLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: 'data/raster/27.png',
      imageExtent: mpzp27Extent,
      attributions: 'by BC2020'
    }),
    visible: false,
    title: 'MPZP'
  })

  // add wms layers
  const ortophotomapWMSLayer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url: 'http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer',
      params: { LAYERS: 'Raster' },
      attributions: 'Geoportal'
    }),
    visible: false,
    title: 'orto'
  })

  const dzialkiWMSLayer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url: 'https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaEwidencjiGruntow',
      params: { LAYERS: 'DZIALKI,NUMERY_DZIALEK' },
      attributions: 'GUGIK'
    }),
    visible: false,
    title: 'dzialki'
  })

  const budynkiWMSLayer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url: 'https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaEwidencjiGruntow',
      params: { LAYERS: 'BUDYNKI' },
      attributions: 'GUGIK'
    }),
    visible: false,
    title: 'building'
  })

  // add layer group

  const fullLayerGroup = new ol.layer.Group({
    layers: [
      // default OSM
      defaultOSM,
      // raster 1
      suikzpRasterLayer,
      mpzp07RasterLayer, mpzp11RasterLayer, mpzp12RasterLayer, mpzp13RasterLayer, mpzp14RasterLayer, mpzp15RasterLayer, mpzp16RasterLayer, mpzp17RasterLayer, mpzp18RasterLayer, mpzp19RasterLayer, mpzp20RasterLayer, mpzp21RasterLayer, mpzp22RasterLayer, mpzp23RasterLayer, mpzp24RasterLayer, mpzp25RasterLayer, mpzp26RasterLayer, mpzp27RasterLayer,
      // wms 2
      ortophotomapWMSLayer, dzialkiWMSLayer, budynkiWMSLayer,
      // vector 3
      szczytnoVectorLayer, suikzpVectorLayer, mpzpVectorLayer,
      busVectorLayer, roadVectorLayer, trainVectorLayer, fuelVectorLayer, parkingVectorLayer, addVectorLayer
    ]
  })

  // add layers to map
  map.addLayer(fullLayerGroup)

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // layer switcher
  const geoportalLayerOptions = document.querySelectorAll('.layerList input[type=checkbox]');

  // console.log(geoportalLayerOptions)

  geoportalLayerOptions.forEach(option => {
    option.addEventListener('change', function () {
      let geoportalLayerOptionsElement = this.id;
      let geoportalLayerGroup = fullLayerGroup.getLayers();
      let currentLayer = [];

      geoportalLayerGroup.forEach(element => {
        let elementTitle = element.get('title');
        if (geoportalLayerOptionsElement === elementTitle) {
          currentLayer.push(element)
        }
      })
      // console.log(currentLayer)
      this.checked ? currentLayer.forEach(one => one.setVisible(true)) : currentLayer.forEach(one => one.setVisible(false))
      // console.log(this.checked);
    })
  })




  // map.on('click', function (e) {
  //   console.log(e.coordinate)
  // })


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // handle tools menu 
  const toolsHandle = function () {
    const layersMenu = document.querySelector('.tool.layer');
    const layersList = document.querySelector('.layerList');
    const mapHTML = document.querySelector('#map')
    const toolsHTML = document.querySelector('.tools')
    const geoportalInfo = document.querySelector('.geoportalDesktop')
    const everyObjectInHTML = [layersList, mapHTML, toolsHTML, geoportalInfo]

    // flag for layer list
    let flag = true;
    //handle mobile layer list (layer button)

    layersMenu.addEventListener('click', function () {
      if (window.innerWidth <= 1024) {
        layersList.classList.toggle('active')
      } else {
        layersMenu.classList.toggle('clicked')
        everyObjectInHTML.forEach(object => {
          if (flag) {
            object.style.left = `${Math.round((object.offsetLeft / window.innerWidth - 0.25) * 100)}%`;
            if (object.id === 'map' || object.classList.contains('geoportalDesktop')) {
              object.style.width = `${(Math.round(100 - object.offsetLeft / window.innerWidth * 100) + 25)}%`

            }
          } else {
            object.style.left = `${Math.round((object.offsetLeft / window.innerWidth + 0.25) * 100)}%`
            if (object.id === 'map' || object.classList.contains('geoportalDesktop')) {
              object.style.width = `${(Math.round(100 - object.offsetLeft / window.innerWidth * 100) - 25)}%`
            }
          }
        })
      }
      flag = !flag
      setInterval(mapRefresh, 1)

    })


    // handle info button
    const select = new ol.interaction.Select({
      style: selectStyle,
      layers: [mpzpVectorLayer]
    });

    const infoButton = document.querySelector('.info')


    infoButton.addEventListener('click', function () {

      infoButton.classList.toggle('clicked');
      if (infoButton.classList.contains('clicked')) {
        map.addInteraction(select);
        mpzpOverlayFunction()
        generalOverlayFunction()

      } else {
        map.removeInteraction(select);
        mpzpOverlayFunction()
        generalOverlayFunction()
      }
    })


    // handle measure button
    const measureButton = document.querySelector('.measure')
    measureButton.addEventListener('click', function () {
      measureButton.classList.toggle('clicked')

      let button = document.querySelector('.measure')
      const typeOfMeasureInfo = document.querySelector('.chooseMeasureMethod')
      typeOfMeasureInfo.classList.toggle('active')




      let source = new ol.source.Vector({
        format: new ol.format.GeoJSON()
      })
      let drawLine = new ol.interaction.Draw({
        source: source,
        type: 'LineString',
        style: drawLineStyle
        // finishCondition: new ol.events.condition.pointerMove()
      })

      let drawArea = new ol.interaction.Draw({
        source: source,
        type: 'Polygon',
        style: drawAreaStyle
      })


      let typeOfMeasure;

      const typeOfMeasureOptions = document.querySelectorAll('.chooseMeasureMethod button')
      typeOfMeasureOptions.forEach(type => type.addEventListener('click', function () {
        typeOfMeasure = type.classList[0]
        console.log(typeOfMeasure)
        measure(button, source, typeOfMeasure, drawLine, drawArea, typeOfMeasureInfo)

      }))



    })


    // handle geolocation button
    const geolocationButton = document.querySelector('.geolocation')
    const geo = function () {
      geolocationButton.classList.toggle('clicked')

      geolocation(geolocationButton, map)
    }
    geolocationButton.addEventListener('click', geo)


    // end of toolsHandle function
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // function for getting info about mpzp - used in toolsHandle function
  const mpzpOverlayFunction = function () {

    const mpzpOverlayHTML = document.querySelector('.mpzpOverlay')

    const mpzpOznKonturu = document.querySelector('span.oznaczenie')
    const mpzpPrzeznaczenie1 = document.querySelector('span.przeznaczenie1')
    const mpzpPrzeznaczenie2 = document.querySelector('span.przeznaczenie2')
    const mpzpNrU = document.querySelector('span.nrU')
    const mpzpNazwa = document.querySelector('span.nazwa')
    const mpzpLegenda = document.querySelector('a.legenda')
    const mpzpUchwala = document.querySelector('a.uchwala')

    const mpzpOverlay = new ol.Overlay({
      element: mpzpOverlayHTML,
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
        mpzpLegenda.href = `data/legenda/${feature.get('id')}.jpg`
        mpzpUchwala.href = `data/uchwaly/${feature.get('id')}.pdf`

      },
        {
          layerFilter: function (layerCandidate) {
            return layerCandidate.get('title') === 'MPZP' || layerCandidate.get('title') === 'SUIKZP'
          }
        }
      )
    }

    if (document.querySelector('.info').classList.contains('clicked')) {
      map.addEventListener('click', mpzpOverlayFunction)
    } else {
      map.removeEventListener('click', mpzpOverlayFunction)
    }

  }
  // function for getting info about other vector layers - used in toolsHandle function

  const generalOverlayFunction = function () {
    const generalOverlayHTML = document.querySelector('.generalOverlay')
    const generalOverlayFclass = document.querySelector('span.fclass')
    const generalOverlayName = document.querySelector('span.name')

    const generalOverlay = new ol.Overlay({
      element: generalOverlayHTML
    })

    map.addOverlay(generalOverlay)

    const generalOverlayF = function (e) {
      generalOverlay.setPosition(undefined)

      map.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
        let coordinates = e.coordinate
        let clickedFclass = feature.get('fclass')
        let clickedName = feature.get('name')
        generalOverlay.setPosition(coordinates)
        generalOverlayFclass.innerHTML = clickedFclass

        if (clickedName === null) {
          generalOverlayName.innerHTML = '-'
        } else {
          generalOverlayName.innerHTML = clickedName
        }

      },
        {
          layerFilter: function (layerCandidate) {
            return layerCandidate.get('title') === 'bus' || layerCandidate.get('title') === 'add' || layerCandidate.get('title') === 'fuel' || layerCandidate.get('title') === 'parking' || layerCandidate.get('title') === 'road' || layerCandidate.get('title') === 'train'
          }
        }
      )
    }

    if (document.querySelector('.info').classList.contains('clicked')) {
      map.addEventListener('click', generalOverlayF)
    } else {
      map.removeEventListener('click', generalOverlayF)
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // function for measure button 


  const measure = function (button, source, typeOfMeasure, drawLine, drawArea, typeOfMeasureInfo) {

    // add function to measure distance

    const measureDistance = function () {

      let x1 = 0
      let y1 = 0
      let x2 = 0
      let y2 = 0
      let distance = 0
      let infoPos;
      const distContainer = document.querySelector('.distance')

      const distanceOverlay = new ol.Overlay({
        element: distContainer
      })
      map.addOverlay(distanceOverlay)
      distanceOverlay.setPosition(undefined)

      let coordinatesTable = []
      let numberOfDistances = 0


      const distanceFunction = function (e) {
        coordinatesTable.push(e.coordinate)

        if (numberOfDistances > 0) {
          infoPos = e.coordinate
          x1 = coordinatesTable[numberOfDistances - 1][0]
          y1 = coordinatesTable[numberOfDistances - 1][1]
          x2 = coordinatesTable[numberOfDistances][0]
          y2 = coordinatesTable[numberOfDistances][1]

          // korekta ze względu na błąd układu odniesienia - obliczona ze średniej wartości błędu odległości kontrolnych
          let korektaDl = 1.66091752354641
          distance = parseInt((Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) / korektaDl).toFixed(2)) + distance

          distanceOverlay.setPosition(infoPos)

          if (distance >= 1000) {
            distContainer.innerHTML = (distance / 1000).toFixed(2) + 'km'

          } else {
            distContainer.innerHTML = distance + 'm'
          }
        }
        numberOfDistances++

      }

      map.on('click', distanceFunction)

      draw.on('drawend', function () {
        map.removeInteraction(draw)
        button.classList.remove('clicked')
        map.removeEventListener('click', distanceFunction)
        distanceOverlay.setPosition(undefined)
        typeOfMeasureInfo.classList.remove('active')
        draw.finishDrawing()

      })
    }

    // add function to measure area

    const measureArea = function () {
      const areaContainer = document.querySelector('.distance')

      const areaOverlay = new ol.Overlay({
        element: areaContainer
      })
      map.addOverlay(areaOverlay)
      areaOverlay.setPosition(undefined)

      let area = 0;
      let areaPart = 0;
      let infoPos;
      let coordinatesTable = []

      const areaFunction = function (e) {
        // console.log('dd')
        coordinatesTable.push(e.coordinate)
        // infoPos = e.coordinate
        let wspK = coordinatesTable.length - 1
        let wspW = 0



        if (coordinatesTable.length > 2) {
          for (let i = 0; i < coordinatesTable.length; i++) {
            if (wspK >= coordinatesTable.length) {
              wspK = 0
            }
            if (wspW === coordinatesTable.length - 1) {
              wspW = -1
            }
            areaPart = ((coordinatesTable[wspW + 1][1] - coordinatesTable[wspK][1]) * coordinatesTable[i][0]) / 2
            area = area + areaPart
            console.log(coordinatesTable)
            wspK++;
            wspW++
          }

        }

        // współczynnik korygujący, na podstawie średniej błędu powierzchni (porównanie danych z geoportal.pl)
        // let korekta = 2.34655008125637
        let korekta = 2.22610768770516
        console.log(area)
        area = Math.floor(-1 * area / korekta)

        // etykieta
        if (coordinatesTable.length > 2) {
          let infoPosXMiddle = ((coordinatesTable[0][0] + coordinatesTable[Math.floor(coordinatesTable.length / 2) + 1][0]) / 2)
          let infoPosYMiddle = ((coordinatesTable[0][1] + coordinatesTable[Math.floor(coordinatesTable.length / 2) - 1][1]) / 2)
          infoPos = [infoPosXMiddle, infoPosYMiddle]
          console.log(infoPos)
          areaOverlay.setPosition(infoPos)

          if (area > 1000000) {
            areaContainer.innerHTML = (area / 1000000).toFixed(2) + 'km<sup>2</sup>'

          } else {
            areaContainer.innerHTML = area + 'm<sup>2</sup>'
          }
        }


      }
      map.on('click', areaFunction)


      // map.on('click', function (e) {
      //   // if (this.e.target)
      //   console.log(this)

      // })


      draw.on('drawend', function () {
        map.removeInteraction(draw)
        button.classList.remove('clicked')
        map.removeEventListener('click', areaFunction)
        areaOverlay.setPosition(undefined)
        typeOfMeasureInfo.classList.remove('active')

      })

    }


    if (typeOfMeasure === 'drawLine') {
      draw = drawLine
      finishDrawing(drawLine, drawArea)
      map.addInteraction(draw)

      measureDistance()

    } else {
      draw = drawArea
      finishDrawing(drawLine, drawArea)

      map.addInteraction(draw)
      measureArea()
    }


  }

  const finishDrawing = function (drawLine, drawArea) {
    const buttonsForChooseType = [...document.querySelectorAll('.chooseMeasureMethod button')]
    const buttonsForTools = [...document.querySelectorAll('.tools div.tool')]
    const buttonsArray = buttonsForChooseType.concat(buttonsForTools)

    buttonsArray.forEach(button => button.addEventListener('click', function () {
      drawLine.finishDrawing()
      drawArea.finishDrawing()
      map.removeInteraction(drawLine)
      map.removeInteraction(drawArea)
    }))

  }



  // map refresh function
  const mapRefresh = function () {
    map.updateSize()
  }

  toolsHandle()


}


geoportal()
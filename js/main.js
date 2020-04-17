
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

  const map = new ol.Map({
    view: new ol.View({
      center: [x, y],
      zoom: mapZoom,
      extent: [2312781.9973548115, 7070756.490883543, 2361599.185495575, 7104310.199451966]
    }),
    target: 'map',
    controls: myMapControls
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

  // default OSM map

  const defaultOSM = new ol.layer.Tile({
    source: new ol.source.OSM(),
    visible: true,
    title: 'OSM'
  })


  // define vector layers
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
      attributions: 'do zmiany'
    }),
    visible: false,
    title: 'orto'
  })

  const dzialkiWMSLayer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url: 'https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaEwidencjiGruntow',
      params: { LAYERS: 'DZIALKI,NUMERY_DZIALEK' },
      attributions: 'do zmiany'
    }),
    visible: false,
    title: 'dzialki'
  })

  const budynkiWMSLayer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url: 'https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaEwidencjiGruntow',
      params: { LAYERS: 'BUDYNKI' },
      attributions: 'do zmiany'
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
      mpzp07RasterLayer, mpzp11RasterLayer, mpzp12RasterLayer, mpzp13RasterLayer, mpzp14RasterLayer, mpzp15RasterLayer, mpzp16RasterLayer, mpzp17RasterLayer, mpzp18RasterLayer, mpzp19RasterLayer, mpzp20RasterLayer, mpzp21RasterLayer, mpzp22RasterLayer, mpzp23RasterLayer, mpzp24RasterLayer, mpzp25RasterLayer, mpzp26RasterLayer, mpzp27RasterLayer, suikzpRasterLayer,
      // wms 2
      ortophotomapWMSLayer, dzialkiWMSLayer, budynkiWMSLayer,
      // vector 3
      szczytnoVectorLayer, mpzpVectorLayer,
      busVectorLayer, roadVectorLayer, trainVectorLayer, fuelVectorLayer, parkingVectorLayer, addVectorLayer
    ]
  })

  // add layers to map
  map.addLayer(fullLayerGroup)

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


  const select = new ol.interaction.Select();
  map.addInteraction(select);



  map.on('click', function (e) {
    console.log(e.coordinate)
  })


}

geoportal()
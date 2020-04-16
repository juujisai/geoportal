
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







  map.addLayer(
    new ol.layer.VectorImage({
      source: new ol.source.Vector({
        url: 'data/warstwy gis GEOJSON/szczytno_3857_geojson.geojson',
        format: new ol.format.GeoJSON()
      })
    })
  )

  map.addLayer(
    new ol.layer.Image({
      source: new ol.source.ImageStatic({
        url: 'suikzp.png',
        imageExtent: suikzpExtent,

      })
    })
  )


}

geoportal()
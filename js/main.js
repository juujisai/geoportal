const geoportalInit = function () {
  const buttonContinue = document.querySelector('.continue');
  const mobileHeader = document.querySelector('.mobileHeader');
  buttonContinue.addEventListener('click', function () {
    mobileHeader.classList.toggle('active')
  })


}

geoportalInit()



const toolsHandle = function () {
  const layersMenu = document.querySelector('.tool.layer');
  const layersList = document.querySelector('.layerList');
  layersMenu.addEventListener('click', function () {
    layersList.classList.toggle('active')
  })

}


toolsHandle()
var planets = [
  {
    name:"mercury",
    image:"img/mercury.png"
  },
  {
    name:"venus",
    image:"img/venus.png"
  },
  {
    name:"earth",
    image:"img/earth.png"
  },
  {
    name:"mars",
    image:"img/mars.png"
  },
  {
    name:"jupiter",
    image:"img/jupiter.png"
  },
  {
    name:"saturn",
    image:"img/saturn.png"
  },
  {
    name:"uranus",
    image:"img/uranus.png"
  },
  {
    name:"neptune",
    image:"img/neptune.png"
  },
]
var dimg = document.getElementById('dimg');

function view() {
  dimg.innerHTML = '';
  var planetname = document.getElementById('planetname')

  console.log(planetname)
  console.log("user wants to view " + planetname.value)

    var isSuccess = false

    for(var i=0; i<planets.length; i++) {
      if(planetname.value.toLowerCase() == planets[i].name.toLowerCase()) {
        isSuccess = true
        break
      } else {
        isSuccess = false
      }
    }
      if(isSuccess) {
        console.log("user is viewing " + planetname.value)

        dimg.setAttribute("style", "width: 500px; height: 400px;")
        // animate.width = '500px'
        // animate.height = '400px'

        var x = document.createElement('img')
        x.className = 'animated fadeIn'
        x.src = planets[i].image

        dimg.appendChild(x)



      }
}

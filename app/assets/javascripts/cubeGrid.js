var cubeGrid = function(){
  //  emitter factory
  var attribs = {
    currentAnimationId: null,
    emitterFrequency: null
  }
  // Helpers
  // Creates random colors
  function randomFairColor() {
    var min = 64;
    var max = 224;
    var r = (Math.floor(Math.random() * (max - min + 1)) + min) * 65536;
    var g = (Math.floor(Math.random() * (max - min + 1)) + min) * 256;
    var b = (Math.floor(Math.random() * (max - min + 1)) + min);
    return r + g + b;
  }

  var cubeFactory = function (x,y){

    var geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    var material = new THREE.MeshPhongMaterial({
      color: randomFairColor(),
      ambient: '0x808080',
      specular: 0xffffff,
      shininess: 10,
      reflectivity: 1.5
    });

    //Not sure how this part works, need to figure out.
    var cube = new THREE.Mesh(geometry, material);
    //Left position on screen??
    cube.position.x = x*2;
    cube.position.y = y*2;
    cube.position.z = 30;
    return cube;
  }

  var emitterFactory = function(x, y) {
    var settings = {
      //where particles start, settings here for colors?, spread speed?
      positionStyle  : Type.SPHERE,
      positionBase   : new THREE.Vector3( x, y, 0 ),
      positionRadius : 10,

      velocityStyle  : Type.SPHERE,
      speedBase      : 90,
      speedSpread    : 10,
      accelerationBase : new THREE.Vector3( 0, 0, -80  ),
      particleTexture : THREE.ImageUtils.loadTexture( 'images/white.png' ),
      blendStyle   : THREE.AdditiveBlending,

      sizeTween    : new Tween( [1], [2] ),//size of particles
      sizeBase    : 0.9,
      sizeSpread  : 0.5,
      colorBase   : new THREE.Vector3(1, 1, 1), // H,S,L
      colorSpread : new THREE.Vector3(1, 1, 1),
      opacityBase : 1,

      particlesPerSecond : 10,
      particleDeathAge   : 1,
      emitterDeathAge    : .5
    };
    var engine = new ParticleEngine()
    engine.setValues(settings);//starting the particle engine
    engine.initialize();
    // emitters.push(engine);
    return engine;
  };

  function init () {
    //Creating the scene and objects
    scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(60, $(window).width() / $(window).height(), 1, 1000);
    var renderer = new THREE.WebGLRenderer();
    var cubes = []; //Array of cubes
    var emitters = [] //Emitter array
    // Add OrbitControls so that we can pan around with the mouse.
      controls = new THREE.OrbitControls(camera, renderer.domElement);
    //var controls;

    $('#container').append(renderer.domElement);

    // create cubes probably can change this setting x y ie. just change divisor
    for (i=0; i < 512; i++){
      var x = Math.floor(i/16)-16;
      var y = i % 16;
      var cube = cubeFactory(x,y);
      console.log(cube);
      cubes.push(cube);
      scene.add(cube);
    };

    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(0,1,1);
    scene.add(directionalLight);
     var directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(-6,1,1);
    scene.add(directionalLight);

    camera.position.z = 50;
    camera.position.x = 0;
    camera.position.y = -50;
  }

  var render = function(){

    var freqPoints = [];
    var freqArray = getTimeDomain();
    var freqData = getFrequencies();
    // Get data and move blocks
    for (var i = 0; i < freqArray.length; i++) {
      cubes[i].position.z = freqArray[i]/50;
    };
    emitters.push(emitterFactory(_.random(0, 50), _.random(0, 50)));// create explosions
    // update emissions
    for (var i = 0; i < emitters.length; i++) {
      emitters[i].update(.15);
    }
    attribs.currentAnimationId = requestAnimationFrame(render);
    renderer.render(scene, camera);
    controls.update();
  };

  // Begin program
  init()
  render();
  renderer.setSize($(window).width(), $(window).height());
  currentVisualiser = attribs;
}
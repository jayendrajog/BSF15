 $(function() {

  var $body = $(document.body),
   $window = $(window);
  // Background

  var canvas = document.createElement('canvas');
  $body.appendChild(canvas);
  var backgroundEnabled = canvas.getContext && canvas.getContext('2d') && $('#container').css('display') !== 'none';

  if (backgroundEnabled) {
    config.background = {
      enabled: true,

      RENDER: {
        renderer: 'canvas'
      },

      MESH: {
        width: 1.2,
        height: 1.2,
        depth: 10,
        segments: 16,
        slices: 8,
        xRange: 0.8,
        yRange: 0.1,
        zRange: 1.0,
        ambient: '#555555',
        diffuse: '#FFFFFF',
        speed: 0.0005
      },

      LIGHT: {
        count: 2,
        xyScalar: 1,
        zOffset: 50,
        ambient: '#82A2FB',
        diffuse: '#97227B',
        speed: 0.001,
        gravity: 1200,
        dampening: 0.15,
        minLimit: 8,
        maxLimit: null,
        minDistance: 20,
        maxDistance: 400,
        autopilot: true,
        draw: false
      }
    };

    initBackground();
  }
});

//  // 1) Create a Renderer for the context you would like to render to.
// //    You can use either the WebGLRenderer, CanvasRenderer or SVGRenderer.
// var renderer = new FSS.CanvasRenderer();

// // 2) Add the Renderer's element to the DOM:
// var container = document.getElementById('container');
// container.appendChild(renderer.element);

// // 3) Create a Scene:
// var scene = new FSS.Scene();

// // 4) Create some Geometry & a Material, pass them to a Mesh constructor, and add the Mesh to the Scene:
// var geometry = new FSS.Plane(200, 100, 4, 2);
// var material = new FSS.Material('#444444', '#FFFFFF');
// var mesh = new FSS.Mesh(geometry, material);
// scene.add(mesh);

// // 5) Create and add a Light to the Scene:
// var light = new FSS.Light('#FF0000', '#0000FF');
// scene.add(light);

// // 6) Finally, render the Scene:
// renderer.render(scene);


 $(function() 
 {

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

AFRAME.registerComponent('rectframe', {
    schema: {
      height: {type:'number'},
      width: {type:'number'},
      src: {type: 'map', default: '#floorTexture'},    
    },
    dependencies: ['htmlembed'],
  
   init: function() {
       let obj = this.el.object3D;
       let data = this.data;
       let texture = new THREE.TextureLoader().load(data.src.src)
  
  
       // create two geometries, one for vert, one for hor
       let geomVert = new THREE.BoxBufferGeometry(0.04, data.width, 0.04);
       let geomHor = new THREE.BoxBufferGeometry(0.04, data.height, 0.04);
  
       // duplicate the geometries twice
       var frameTop = new THREE.Mesh(geomHor, new THREE.MeshStandardMaterial({map: texture}));
       var frameBottom = new THREE.Mesh(geomHor, new THREE.MeshStandardMaterial({map: texture}));
       var frameRight = new THREE.Mesh(geomVert, new THREE.MeshStandardMaterial({map: texture}));
       var frameLeft = new THREE.Mesh(geomVert, new THREE.MeshStandardMaterial({map: texture}));
  
    //    y = obj.height / 2 - depth / 2
    //    x = obj.width / 2 - depth / 2
  
       //set positions and rotation
       frameTop.position.set(geomVert.parameters.height/2 - 0.02, 0, 0.04);
       frameBottom.position.set(-geomVert.parameters.height/2 - 0.02, 0, 0.04);
  
       console.log(frameTop.position.y);
       console.log(frameBottom.position.y);
  
       frameRight.position.set(0, geomHor.parameters.height/2 - 0.02, 0.04);
       frameLeft.position.set(0, -geomHor.parameters.height/2 - 0.02, 0.04);
  
       console.log(frameRight.position.y);
       console.log(frameLeft.position.y);
  
       frameRight.rotation.set(0, 0, Math.PI / 2);
       frameLeft.rotation.set(0, 0, Math.PI / 2);
  
       obj.add(frameTop);
       obj.add(frameBottom);
       obj.add(frameRight);
       obj.add(frameLeft);
    }
  });
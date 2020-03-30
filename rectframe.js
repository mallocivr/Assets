AFRAME.registerComponent('rectframe', {
    schema: {
        src:{type: 'string', default: 'textures/concrete_floor.jpg'},
    },

   init: function() {
       let obj = this.el.object3D;
       let el = this.el;
       let data = this.data;
       mesh = new THREE.Object3D();
       let box = new THREE.Box3().setFromObject(obj);
       console.log(box.getSize().y);
       // create material
       let frameMaterials = []

       for(let i = 0; i < 6; i++)
       {
         let texture = new THREE.TextureLoader().load(data.src)
         frameMaterials.push(new THREE.MeshStandardMaterial({map: texture}))
       }

       // create two geometries, one for vert, one for hor
       let geomVert = new THREE.BoxGeometry(0.04, box.getSize().x, 0.04);
       let geomHor = new THREE.BoxGeometry(0.04, box.getSize().y, 0.04);

       // duplicate the geometries twice
       var frameTop = new THREE.Mesh(geomHor, frameMaterials);
       var frameBottom = new THREE.Mesh(geomHor, frameMaterials);
       var frameRight = new THREE.Mesh(geomVert, frameMaterials);
       var frameLeft = new THREE.Mesh(geomVert, frameMaterials);

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
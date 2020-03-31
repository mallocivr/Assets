AFRAME.registerComponent('skew-faces', {
    update: function () {
      let geometry = new THREE.Geometry();
      //console.log(geometry);
      let bufferGeometry = this.el.getObject3D('mesh').geometry;
      geometry = new THREE.Geometry().fromBufferGeometry( bufferGeometry );
      //console.log(geometry.vertices);
      let vertices = geometry.vertices;
      //console.log(vertices);
      const originalVertices = vertices.map(v => v.clone());
      //console.log(originalVertices);
      vertices.forEach((vertex, i) => {
        const original = originalVertices[i];
        //console.log(vertex)
        vertex.copy(original);
        vertex.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.sin(vertex.y + 1.6 * 2.05));
        //console.log(vertex)
      });
      geometry.verticesNeedUpdate = true;
      //console.log(geometry)
      this.el.getObject3D('mesh').geometry = geometry;
    }
});

AFRAME.registerComponent('skewedpedestal', {
    schema: {
        src:{type: 'string', default: 'textures/wood.jpg'},
    },

    init: function() {
        let obj = this.el.object3D;
        let el = this.el;
        let data = this.data;

        let geometry = new THREE.CylinderGeometry( 0.2, 0.15, 1.5, 6, 2 ); 
        let texture = new THREE.TextureLoader().load(data.src);
        let material = new THREE.MeshStandardMaterial( {
            map: texture,
            flatShading: true
        } );

        let mesh = new THREE.Mesh(geometry, material);
        el.setObject3D('mesh', mesh)

        let vertices = geometry.vertices;
        let originalVertices = geometry.vertices.map(v => v.clone());

        vertices.forEach((vertex, i) => {
            const original = originalVertices[i];
            vertex.copy(original);
            vertex.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.sin(vertex.y + 1.6 * 2.05));
            //console.log(vertex)
        });
        geometry.verticesNeedUpdate = true;
    }
});

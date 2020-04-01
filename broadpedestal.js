AFRAME.registerComponent('broadpedestal', {
    schema: {
        src:{type: 'string', default: 'textures/wood.jpg'},
    },

    init: function() {
        
        let el = this.el;
        let data = this.data;

        let geometry1 = new THREE.CylinderGeometry( 0.4, 0.4, 0.125, 6, 1 );
        let geometry2 = new THREE.CylinderGeometry( 0.35, 0.07, 0.25, 6, 2 ); 
        let texture = new THREE.TextureLoader().load(data.src);
        let material = new THREE.MeshStandardMaterial( {
            map: texture,
            flatShading: true
        } );

        let mesh1 = new THREE.Mesh(geometry1, material);
        let mesh2 = new THREE.Mesh(geometry2, material);
        el.setObject3D('mesh', mesh1);
        mesh2.position.set(0, -0.25, 0);
        el.object3D.add(mesh2);
    }
});


//hexagonal outline-frame (without fill)
AFRAME.registerComponent('hexframeempty', {
    schema: {
        src:{type: 'string', default: 'textures/wood.jpg'}
    },

    init:function() {
        let data = this.data;
        let el = this.el;

        let geometry = new THREE.TorusGeometry( 0.2, 0.009, 3, 6 ); 
        let texture = new THREE.TextureLoader().load(data.src);
        let material = new THREE.MeshStandardMaterial( {
			map: texture
        } );
        let hexFrameMesh = new THREE.Mesh( geometry, material );

        el.setObject3D('mesh', hexFrameMesh)
    }
});

//hexagonal tile-frame (filled)
AFRAME.registerComponent('hexframefilled', {
    schema: {
        src:{type: 'string', default: 'textures/wood.jpg'}
    },

    init:function() {
        let data = this.data;
        let el = this.el;

        let geometry = new THREE.CylinderGeometry( 0.2, 0.2, 0.015, 6 ); 
        let texture = new THREE.TextureLoader().load(data.src);
        let material = new THREE.MeshStandardMaterial( {
			map: texture
        } );
        let hexFrameMesh = new THREE.Mesh( geometry, material );

        hexFrameMesh.rotation.set(Math.PI / 2, 0, 0);
        el.setObject3D('mesh', hexFrameMesh)
    }
});
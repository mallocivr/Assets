function windowEntity() {
    let windowEnt = document.createElement('a-entity');
    windowEnt.setAttribute('id', 'window');
    
    let windowInner = document.createElement('a-entity');
    windowInner.setAttribute('id', 'window-inner-frame');

    let boxHor = document.createElement('a-box');
    boxHor.setAttribute('position', '0 0 0.04');
    boxHor.setAttribute('material', {color: '#d7bd98'});
    boxHor.setAttribute('width', '0.04');
    boxHor.setAttribute('depth', '0.04');
    boxHor.setAttribute('height', '1.54');
    boxHor.setAttribute('shadow','');

    let boxVer = document.createElement('a-box');
    boxVer.setAttribute('position', '0 0 0.04');
    boxVer.setAttribute('rotation', '0 0 90');
    boxVer.setAttribute('material', {color: '#d7bd98'});
    boxVer.setAttribute('width', '0.04');
    boxVer.setAttribute('depth', '0.04');
    boxVer.setAttribute('height', '1');
    boxVer.setAttribute('shadow','');

    windowInner.appendChild(boxHor);
    windowInner.appendChild(boxVer);

    let windowOuter = document.createElement('a-entity');
    windowInner.setAttribute('id', 'window-outer-frame');

    let boxTop = document.createElement('a-box');
    boxTop.setAttribute('position', '-0.5 0 0.04');
    boxTop.setAttribute('material', {color: '#d7bd98'});
    boxTop.setAttribute('width', '0.04');
    boxTop.setAttribute('depth', '0.04');
    boxTop.setAttribute('height', '1.54');
    boxTop.setAttribute('shadow','');

    let boxBottom = document.createElement('a-box');
    boxBottom.setAttribute('position', '0.5 0 0.04');
    boxBottom.setAttribute('material', {color: '#d7bd98'});
    boxBottom.setAttribute('width', '0.04');
    boxBottom.setAttribute('depth', '0.04');
    boxBottom.setAttribute('height', '1.54');
    boxBottom.setAttribute('shadow','');

    let boxRight = document.createElement('a-box');
    boxRight.setAttribute('position', '0 0.75 0.04');
    boxRight.setAttribute('rotation', '0 0 90');
    boxRight.setAttribute('material', {color: '#d7bd98'});
    boxRight.setAttribute('width', '0.04');
    boxRight.setAttribute('depth', '0.04');
    boxRight.setAttribute('height', '1');
    boxRight.setAttribute('shadow','');

    let boxLeft = document.createElement('a-box');
    boxLeft.setAttribute('position', '0 -0.75 0.04');
    boxLeft.setAttribute('rotation', '0 0 90');
    boxLeft.setAttribute('material', {color: '#d7bd98'});
    boxLeft.setAttribute('width', '0.04');
    boxLeft.setAttribute('depth', '0.04');
    boxLeft.setAttribute('height', '1');
    boxLeft.setAttribute('shadow','');

    windowOuter.appendChild(boxTop);
    windowOuter.appendChild(boxBottom);
    windowOuter.appendChild(boxLeft);
    windowOuter.appendChild(boxRight);

    windowEntity.addEventListener('loaded', function () {
        console.log('window is in');
    });

    return windowEnt;
}

//hexagonal outline-frame (without fill)
function hex1frameEntity() {
    let pframeEnt = document.createElement('a-entity');
    pframeEnt.setAttribute('id', 'frame1');
    pframeEnt.setAttribute('geometry', {primitive: 'torus', radius: 0.2, radiusTubular: 0.009, segmentsRadial:3, segmentsTubular:6}, true);
    //pframeEnt.object3D.scale.set(1, 1, 1);

    // hex1frameEntity.addEventListener('loaded', function () {
    //     console.log('hex frame1 is in');
    // });

    return pframeEnt;
}

//hexagonal tile-frame (filled)
function hex2frameEntity() {
    let pframeEnt = document.createElement('a-entity');
    pframeEnt.setAttribute('id', 'frame2');
    pframeEnt.setAttribute('geometry', {primitive: 'cylinder', radius: 0.2, height: 0.015, segmentsRadial:6}, true);
    pframeEnt.setAttribute('rotation', '90 0 0');
    //pframeEnt.object3D.scale.set(1, 1, 1);

    // hex2frameEntity.addEventListener('loaded', function () {
    //     console.log('hex frame2 is in');
    // });

    return pframeEnt;
}

//pedestal
function pedestalEntity() {

    let pedestalEnt = document.createElement('a-entity');
    pedestalEnt.setAttribute('id', 'pedestal');
    pedestalEnt.setAttribute('geometry', {primitive: 'cylinder', radius: 0.2, height: 1.5, segmentsRadial:6, segmentsHeight: 2}, true);
    pedestalEnt.setAttribute('material', {shader: 'flat'});
    // const pedestal = new THREE.CylinderGeometry(radius, radius, height, sides, heightSegments, true);
    // const material = new THREE.MeshNormalMaterial({ flatShading: true });
    // pedestal.vertices.forEach((vertex, i) => {
    //     vertex.applyAxisAngle(new THREE.Vector3(0, 0.2, 0), Math.sin(original.y + time * 2) * 1);
    // });
    pedestalEnt.setAttribute('skew-faces', '');
    return pedestalEnt;
}

function pedestalGeometry() {
    AFRAME.registerComponent('skew-faces', {
        dependencies: ['geometry'],

        update: function () {

            var geometry = this.el.getObject3D('mesh').geometry;
            var mesh = this.el.getObject3D('mesh');
            var originalVertices = geometry.vertices.map(v => v.clone());
            geometry.vertices.forEach((vertex, i) => {
                const original = originalVertices[i];

                vertex.copy(original);
                vertex.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.sin(vertex.y + 1.6 * 2.05));
            });
            geometry.verticesNeedUpdate = true;
            this.geometry = geometry;
        }
    });
}
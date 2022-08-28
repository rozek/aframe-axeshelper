/**** (re)define a component for A-Frame ****/
delete AFRAME.components['axeshelper'];
AFRAME.registerComponent('axeshelper', {
    multiple: false,
    schema: {
        size: { type: 'number', default: 1 }
    },
    init: function () {
        this.AxesHelper = new THREE.AxesHelper(this.data.size);
        this.el.setObject3D('axeshelper', this.AxesHelper); // specific "purpose"
    },
    remove: function () {
        this.el.removeObject3D('axeshelper');
    }
});
/**** define a primitive for the "axeshelper" component (if not already present) ****/
if (AFRAME.primitives.primitives['a-axeshelper'] == null) {
    AFRAME.registerPrimitive('a-axeshelper', {
        defaultComponents: {
            axeshelper: { size: 1 }
        },
        mappings: {
            size: 'axeshelper.size'
        }
    });
}
else {
    console.warn('an A-Frame primitive called "a-axeshelper" exists already');
}
//# sourceMappingURL=aframe-axeshelper-component.esm.js.map

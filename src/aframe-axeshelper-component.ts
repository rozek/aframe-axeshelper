  declare const AFRAME:any, THREE:any

/**** (re)define a component for A-Frame ****/

  delete AFRAME.components['axeshelper']

  AFRAME.registerComponent('axeshelper',{
    multiple: false,                       // at most one axes-helper per entity
    schema: {
      size: { type:'number', default:1 }
    },

    init: function ():void {
      this.AxesHelper = new THREE.AxesHelper(this.data.size)
      this.el.setObject3D('axeshelper',this.AxesHelper)    // specific "purpose"
    },

    remove: function ():void {
      this.el.removeObject3D('axeshelper')
    }
  })

/**** define a primitive for the "axeshelper" component (if not already present) ****/

  if (AFRAME.primitives.primitives['a-axeshelper'] == null) {
    AFRAME.registerPrimitive('a-axeshelper',{
      defaultComponents: {
        axeshelper: { size:1 }
      },

      mappings: {
        size:'axeshelper.size'
      }
    })
  } else {
    console.warn('an A-Frame primitive called "a-axeshelper" exists already')
  }


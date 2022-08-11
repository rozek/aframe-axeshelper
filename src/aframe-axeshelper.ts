  declare const AFRAME:any
  declare const THREE:any

  import "aframe"

  AFRAME.registerComponent('axeshelper',{
    multiple: false,                        // at most one axeshelper per entity
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

  AFRAME.registerPrimitive('a-axeshelper',{
    defaultComponents: {
      axeshelper: { size:1 }
    },
    mappings: {
      size:'axeshelper.size'
    }
  })

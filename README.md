# aframe-axeshelper #

a trivial [A-Frame](https://aframe.io/) component and primitive for the [Three.js](https://threejs.org/) [AxesHelper](https://threejs.org/docs/#api/en/helpers/AxesHelper)

**NPM users**: please consider the [Github README](https://github.com/rozek/aframe-axeshelper/blob/main/README.md) for the latest description of this package (as updating the docs would otherwise always require a new NPM package version)

## Installation ##

`aframe-axeshelper` may be used as an ECMAScript module (ESM) or explicitly loaded after the `<script>` tag for A-Frame itself.

For the ESM variant, install the package into your build environment using [NPM](https://docs.npmjs.com/) with the command

```
npm install aframe-axeshelper
```

and `import` it in your code whereever needed

```javascript
import "aframe-axeshelper"
```

Otherwise, load the plain script file directly

```html
<script src="https://unpkg.com/aframe-axeshelper"></script>
```

## Usage ##

Once loaded or imported, you may use the `aframe-axeshelper` either a an A-Frame component

```html
<a-scene>
  <a-entity axeshelper position="1 1 -3" rotation="45 30 15"/>
</a-scene>
```

or as an A-Frame primitive

```html
<a-scene>
  <a-axeshelper position="1 1 -3" rotation="45 30 15"/>
</a-scene>
```

whatever seems more appropriate.

## License ##

[MIT License](LICENSE.md)

# vue-xiti-smarttag

Vue plugin for [xiti's smarttag](https://developers.atinternet-solutions.com/javascript-en/getting-started-javascript-en/tracker-initialisation-javascript-en/) javascript library

## NPM 

```console
npm install --save vue-xiti-smarttag
```
In the main.js

```javascript
import Vue from 'vue'
import VueXitiSmarttagPlugin from 'vue-xiti-smarttag' 

Vue.use(VueXitiSmarttagPlugin, {id: 'XXXXXX'/*at internet site id*/})
```
In a component
```vue
   <template>
       <h1>hello world</h1>
       <button @click="sendSomething"></button>
   </template>
   
   <script>
     export default {
       name: 'hello',
       created() {
         // this is the Page hit
         this.$xitiSendPage({ name: 'sample_page', customObject: { crazyID: '454353frg45' } }); //xiti object
       },
       methods: {
         sendSomething() {
           // this is the Click hit
           this.$xitiSendClick({elem: this, name: 'clickName', level2: 'clickLvl2', type: 'navigation'});
         },
       },
     };
   </script>

```
## CDN

In this case the plugin is auto-installed
```html
<head>  
    <script src="https://unpkg.com/vue/dist/vue.min.js"></script>
    <script src="https://unpkg.com/vue-xiti-smarttag/dist/vue-xiti-smarttag.min.js"></script>
</head>
<body>
    <div id="app">
        <my-component></mycomponent>
    </div>

    <script>
        new Vue({  el: '#app' })
    </script>
</body>
```

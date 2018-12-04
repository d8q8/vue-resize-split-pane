webpackJsonp([1],{"+Z9X":function(e,s){},"4ww8":function(e,s){},NHnr:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=r("7+uW"),t=r("woOf"),o=r.n(t),n={name:"resizer-comp",props:["splitTo","resizerColor","resizerBorderColor","resizerThickness","resizerBorderThickness"],data:function(){return{isMouseOver:!1}},computed:{resizerTotalThickness:function(){return this.resizerThickness+2*this.resizerBorderThickness},margin:function(){return this.resizerBorderThickness+Math.floor(this.resizerThickness/2)},rBorder:function(){return"rows"===this.splitTo?{border1:"top",border2:"bottom"}:{border1:"left",border2:"right"}},resStyle:function(){var e={};return e["background-color"]=this.resizerColor,"rows"===this.splitTo?(e.height=this.resizerTotalThickness+"px",e.margin="-"+this.margin+"px 0",e.padding="0 "+this.resizerBorderThickness+"px"):(e.width=this.resizerTotalThickness+"px",e.margin="0 -"+this.margin+"px",e.padding=this.resizerBorderThickness+"px 0"),this.isMouseOver?e["border-"+this.rBorder.border1]=e["border-"+this.rBorder.border2]=this.resizerBorderColor+" solid "+this.resizerBorderThickness+"px":e["border-"+this.rBorder.border1]=e["border-"+this.rBorder.border2]="transparent solid "+this.resizerBorderThickness+"px",e}}},l={render:function(){var e=this,s=e.$createElement;return(e._self._c||s)("span",{staticClass:"Resizer",style:e.resStyle,on:{mouseover:function(s){e.isMouseOver=!0},mouseout:function(s){e.isMouseOver=!1}}})},staticRenderFns:[]};var a={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"Pane"},[this._t("default",[this._v("Content")])],2)},staticRenderFns:[]};function c(e,s){if(e.selection)e.selection.empty();else try{s.getSelection().removeAllRanges()}catch(e){}}var d={name:"pane-rs",components:{"resizer-comp":r("VU/8")(n,l,!1,function(e){r("+Z9X")},"data-v-5c23195e",null).exports,"pane-comp":r("VU/8")({name:"pane-comp",data:function(){return{}}},a,!1,function(e){r("4ww8")},"data-v-6df9e7fc",null).exports},props:{allowResize:{type:Boolean,default:!1},splitTo:{type:String,default:"columns"},primary:{type:String,default:"first"},size:{type:Number,default:16},units:{type:String,default:"pixels"},minSize:{type:Number,default:16},maxSize:{type:Number,default:0},step:{type:Number,default:0},resizerThickness:{type:Number,default:2},resizerColor:{type:String,default:"#AAA"},resizerBorderColor:{type:String,default:"rgba(0,0,0, 0.15)"},resizerBorderThickness:{type:Number,default:3}},data:function(){return{active:!1,position:0,localSize:this.size}},watch:{size:function(e,s){this.localSize=e}},computed:{classObject:function(){return{columns:"columns"===this.splitTo,rows:"rows"===this.splitTo}},iStyleFirst:function(){var e={flex:1,position:"relative",outline:"none"};if("first"===this.primary){e.flex="0 0 auto";var s="pixels"===this.units?"px":"%";"columns"===this.splitTo?e.width=this.localSize+s:e.height=this.localSize+s}else e.flex="1 1 0%";return e},iStyleSecond:function(){var e={flex:1,position:"relative",outline:"none"};if("second"===this.primary){e.flex="0 0 auto";var s="pixels"===this.units?"px":"%";"columns"===this.splitTo?e.width=this.localSize+s:e.height=this.localSize+s}else e.flex="1 1 0%";return e}},methods:{round2Fixed:function(e){var s=+e;return isNaN(s)?NaN:+((s=Math.round(+(s.toString()+"e2"))).toString()+"e-2")},onMouseDown:function(e){if(this.allowResize){var s=o()({},e,{touches:[{clientX:e.clientX,clientY:e.clientY}]});this.onTouchStart(s)}},onTouchStart:function(e){if(this.allowResize){c(document,window);var s="columns"===this.splitTo?e.touches[0].clientX:e.touches[0].clientY;"function"==typeof this.onDragStarted&&onDragStarted(),this.active=!0,this.position=s}},onMouseMove:function(e){if(this.allowResize){var s=o()({},e,{touches:[{clientX:e.clientX,clientY:e.clientY}]});this.onTouchMove(s)}},onTouchMove:function(e){var s=this.$data,r=s.active,i=s.position,t=this.$props,o=t.maxSize,n=t.minSize,l=(t.step,t.allowResize),a=t.splitTo,d=t.primary;if(l&&r){c(document,window);var u="first"===d,h=u?"pane1":"pane2";if(h){var p=this.$refs[h].$vnode.elm;if(p.getBoundingClientRect){var v="columns"===a?e.touches[0].clientX:e.touches[0].clientY,z="columns"===a?p.getBoundingClientRect().width:p.getBoundingClientRect().height,f="columns"===a?this.$refs[h].$parent.$vnode.elm.getBoundingClientRect().width:this.$refs[h].$parent.$vnode.elm.getBoundingClientRect().height,m=i-v,_=u?m:-m,T="percents"===this.units?this.round2Fixed(100*(z-_)/f):z-_,g=i-m;if(this.step){if(Math.abs(m)<this.step)return;m=~~(m/this.step)*this.step}n&&T<n&&(T=n),o&&T>o&&(T=o),this.localSize=T,this.position=g}}}},onMouseUp:function(){var e={allowResize:this.allowResize,onDragFinished:this.onDragFinished},s=e.allowResize,r=e.onDragFinished,i={active:this.active,draggedSize:this.draggedSize};s&&i.active&&("function"==typeof r&&r(i.draggedSize),this.$emit("update:size",this.localSize),console.log("Resizing to: ",this.localSize),this.active=!1)}}},u={render:function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"pane-rs root",class:e.classObject,on:{mousemove:e.onMouseMove,mouseup:e.onMouseUp}},[r("pane-comp",{ref:"pane1",class:{column:"columns"===e.splitTo,row:"rows"===e.splitTo},style:e.iStyleFirst},[e._t("firstPane")],2),e._v(" "),e.allowResize?r("resizer-comp",{class:{rows:"rows"===e.splitTo,columns:"columns"===e.splitTo},attrs:{splitTo:e.splitTo,resizerColor:e.resizerColor,resizerBorderColor:e.resizerBorderColor,resizerThickness:e.resizerThickness,resizerBorderThickness:e.resizerBorderThickness},nativeOn:{mousedown:function(s){return e.onMouseDown(s)}}}):e._e(),e._v(" "),r("pane-comp",{ref:"pane2",class:{column:"columns"===e.splitTo,row:"rows"===e.splitTo},style:e.iStyleSecond},[e._t("secondPane")],2)],1)},staticRenderFns:[]};var h={name:"HelloWorld",components:{"rs-panes":r("VU/8")(d,u,!1,function(e){r("k5BX")},"data-v-aa33c8fe",null).exports},data:function(){return{msg:"Welcome to Your Vue.js App",localSize:250,localResizerColor:"#DEF",localResizerBorderColor:"rgba(0,0,0,.2)",localResizerThickness:2,localBorderThickness:2}},methods:{setSize:function(){this.localSize=Math.ceil(500*Math.random())},setResizerWidth:function(){this.localResizerThickness=20*Math.random()},setResizerBorderWidth:function(){this.localBorderThickness=20*Math.random()}}},p={render:function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"hello"},[r("rs-panes",{attrs:{"split-to":"columns","allow-resize":!1,size:250}},[r("div",{staticClass:"hello menu",attrs:{slot:"firstPane"},slot:"firstPane"},[r("div",{staticClass:"title"},[r("h2",[e._v("Vue-resize-split-panel")]),e._v(" "),r("i",[e._v("in level1.firstPane")])]),e._v(" "),r("div",[r("label",{attrs:{for:"rSize"}},[e._v("Dynamic size: "+e._s(e.localSize)+"px")]),e._v(" "),r("button",{attrs:{id:"rSize"},on:{click:e.setSize}},[e._v("New size")])]),e._v(" "),r("div",[r("label",{attrs:{for:"ResizerWidth"}},[e._v("Resizer thickness: "+e._s(e.localResizerThickness)+"px")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.localResizerThickness,expression:"localResizerThickness"}],attrs:{id:"ResizerWidth",type:"range",min:"1",max:"15",step:"1"},domProps:{value:e.localResizerThickness},on:{__r:function(s){e.localResizerThickness=s.target.value}}})]),e._v(" "),r("div",[r("label",{attrs:{for:"ResizerColor"}},[e._v("Resizer color: "+e._s(e.localResizerColor))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.localResizerColor,expression:"localResizerColor"}],attrs:{id:"ResizerColor",type:"color"},domProps:{value:e.localResizerColor},on:{input:function(s){s.target.composing||(e.localResizerColor=s.target.value)}}}),e._v(" "),r("br"),e._v(" "),r("small",[e._v("This is html color picker so transparency is not available.")])]),e._v(" "),r("div",[r("label",{attrs:{for:"BorderWidth"}},[e._v("Resizer border width: "+e._s(e.localBorderThickness)+"px")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.localBorderThickness,expression:"localBorderThickness"}],attrs:{id:"BorderWidth",type:"range",min:"0",max:"10",step:"1"},domProps:{value:e.localBorderThickness},on:{__r:function(s){e.localBorderThickness=s.target.value}}}),e._v(" "),r("br"),e._v(" "),r("small",[e._v("Mouse over resizer to see the border")])]),e._v(" "),r("div",[r("label",{attrs:{for:"BorderColor"}},[e._v("Resizer color: "+e._s(e.localResizerBorderColor))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.localResizerBorderColor,expression:"localResizerBorderColor"}],attrs:{id:"BorderColor",type:"color"},domProps:{value:e.localResizerBorderColor},on:{input:function(s){s.target.composing||(e.localResizerBorderColor=s.target.value)}}}),e._v(" "),r("br"),e._v(" "),r("small",[e._v("This is html color picker so transparency is not available.")])])]),e._v(" "),r("div",{attrs:{slot:"secondPane"},slot:"secondPane"},[r("rs-panes",{attrs:{"split-to":"columns","allow-resize":!0,size:+e.localSize,resizerColor:e.localResizerColor,resizerBorderColor:e.localResizerBorderColor,resizerThickness:+e.localResizerThickness,resizerBorderThickness:+e.localBorderThickness},on:{"update:size":function(s){e.localSize=s}}},[r("div",{attrs:{slot:"firstPane"},slot:"firstPane"},[r("rs-panes",{attrs:{"split-to":"rows","allow-resize":!0,size:450,resizerColor:e.localResizerColor,resizerBorderColor:e.localResizerBorderColor,resizerThickness:+e.localResizerThickness,resizerBorderThickness:+e.localBorderThickness}},[r("div",{attrs:{slot:"firstPane"},slot:"firstPane"},[r("div",{staticClass:"paneContent"},[r("h3",[e._v(" Panes can be nested as deep as you want!")]),e._v(" "),r("p",[e._v(" This entire page is made out of "),r("b",[e._v("ResizeSplitPane")]),e._v(".")]),e._v(" "),r("p",[e._v(" Menu is in "),r("b",[e._v("level1.firsPane")]),e._v(" and resizing is disabled!")]),e._v(" "),r("h4",[e._v("level1.secondPane > level2.firstPane > level3.firstPane")])])]),e._v(" "),r("div",{attrs:{slot:"secondPane"},slot:"secondPane"},[r("div",{staticClass:"paneContent"},[r("h3",[e._v(" Each ResizeSplitPane has his own settings.")]),e._v(" "),r("p",[e._v(" Or they can share the same data!")]),e._v(" "),r("h4",[e._v("level1.secondPane > level2.firstPane > level3.secondPane")])])])])],1),e._v(" "),r("div",{attrs:{slot:"secondPane"},slot:"secondPane"},[r("div",{staticClass:"paneContent"},[r("div",{staticClass:"paneContent"},[r("h3",[e._v("Links:")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/raven78/vue-resize-split-pane",target:"_blank"}},[e._v("GitHub repo")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.npmjs.com/package/vue-resize-split-pane",target:"_blank"}},[e._v("Node module")])]),e._v(" "),r("h4",[e._v("level1.secondPane > level2.secondPane")])])])])])],1)])],1)},staticRenderFns:[]};var v={name:"App",components:{HelloWorld:r("VU/8")(h,p,!1,function(e){r("VhIf")},"data-v-633aa52c",null).exports}},z={render:function(){var e=this.$createElement,s=this._self._c||e;return s("div",{attrs:{id:"app"}},[s("HelloWorld")],1)},staticRenderFns:[]};var f=r("VU/8")(v,z,!1,function(e){r("W96P")},null,null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:f},template:"<App/>"})},VhIf:function(e,s){},W96P:function(e,s){},k5BX:function(e,s){}},["NHnr"]);
//# sourceMappingURL=app.528bb2bb9511b7fa244f.js.map
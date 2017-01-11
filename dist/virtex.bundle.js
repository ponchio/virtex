(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.TinyEmitter = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function E () {
	// Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
	on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;

},{}]},{},[1])(1)
});
!function(f){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{var g;g="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,g.baseComponent=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){(function(global){var _Components;!function(_Components){function applyMixins(derivedCtor,baseCtors){baseCtors.forEach(function(baseCtor){Object.getOwnPropertyNames(baseCtor.prototype).forEach(function(name){derivedCtor.prototype[name]=baseCtor.prototype[name]})})}var BaseComponent=function(){function BaseComponent(options){this.options=$.extend(this._getDefaultOptions(),options)}return BaseComponent.prototype._init=function(){return this._$element=$(this.options.element),this._$element.length?(this._$element.empty(),!0):(console.warn("element not found"),!1)},BaseComponent.prototype._getDefaultOptions=function(){return{}},BaseComponent.prototype._emit=function(event){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];return this.emit(event,args)},BaseComponent.prototype._resize=function(){},BaseComponent.prototype.databind=function(data){},BaseComponent}();_Components.BaseComponent=BaseComponent,_Components.applyMixins=applyMixins,applyMixins(BaseComponent,[TinyEmitter])}(_Components||(_Components={})),function(g){g._Components||(g._Components=_Components)}(global)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)});
// threejs.org/license
(function(l,pa){"object"===typeof exports&&"undefined"!==typeof module?pa(exports):"function"===typeof define&&define.amd?define(["exports"],pa):pa(l.THREE=l.THREE||{})})(this,function(l){function pa(){}function E(a,b){this.x=a||0;this.y=b||0}function da(a,b,c,d,e,f,g,h,m,k){Object.defineProperty(this,"id",{value:Ye++});this.uuid=P.generateUUID();this.name="";this.image=void 0!==a?a:da.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:da.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:1001;this.wrapT=
void 0!==d?d:1001;this.magFilter=void 0!==e?e:1006;this.minFilter=void 0!==f?f:1008;this.anisotropy=void 0!==m?m:1;this.format=void 0!==g?g:1023;this.type=void 0!==h?h:1009;this.offset=new E(0,0);this.repeat=new E(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.encoding=void 0!==k?k:3E3;this.version=0;this.onUpdate=null}function fa(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1}function $a(a,b,c){this.uuid=P.generateUUID();this.width=
a;this.height=b;this.scissor=new fa(0,0,a,b);this.scissorTest=!1;this.viewport=new fa(0,0,a,b);c=c||{};void 0===c.minFilter&&(c.minFilter=1006);this.texture=new da(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding);this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.depthTexture=void 0!==c.depthTexture?c.depthTexture:null}function Fb(a,b,c){$a.call(this,a,b,c);this.activeMipMapLevel=
this.activeCubeFace=0}function Z(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1}function q(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0}function M(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}function ab(a,b,c,d,e,f,g,h,m,k){a=void 0!==a?a:[];da.call(this,a,void 0!==b?b:301,c,d,e,f,g,h,m,k);this.flipY=!1}function Gb(a,b,c){var d=a[0];if(0>=
d||0<d)return a;var e=b*c,f=ze[e];void 0===f&&(f=new Float32Array(e),ze[e]=f);if(0!==b)for(d.toArray(f,0),d=1,e=0;d!==b;++d)e+=c,a[d].toArray(f,e);return f}function Ae(a,b){var c=Be[b];void 0===c&&(c=new Int32Array(b),Be[b]=c);for(var d=0;d!==b;++d)c[d]=a.allocTextureUnit();return c}function Ze(a,b){a.uniform1f(this.addr,b)}function $e(a,b){a.uniform1i(this.addr,b)}function af(a,b){void 0===b.x?a.uniform2fv(this.addr,b):a.uniform2f(this.addr,b.x,b.y)}function bf(a,b){void 0!==b.x?a.uniform3f(this.addr,
b.x,b.y,b.z):void 0!==b.r?a.uniform3f(this.addr,b.r,b.g,b.b):a.uniform3fv(this.addr,b)}function cf(a,b){void 0===b.x?a.uniform4fv(this.addr,b):a.uniform4f(this.addr,b.x,b.y,b.z,b.w)}function df(a,b){a.uniformMatrix2fv(this.addr,!1,b.elements||b)}function ef(a,b){a.uniformMatrix3fv(this.addr,!1,b.elements||b)}function ff(a,b){a.uniformMatrix4fv(this.addr,!1,b.elements||b)}function gf(a,b,c){var d=c.allocTextureUnit();a.uniform1i(this.addr,d);c.setTexture2D(b||Ce,d)}function hf(a,b,c){var d=c.allocTextureUnit();
a.uniform1i(this.addr,d);c.setTextureCube(b||De,d)}function Ee(a,b){a.uniform2iv(this.addr,b)}function Fe(a,b){a.uniform3iv(this.addr,b)}function Ge(a,b){a.uniform4iv(this.addr,b)}function jf(a){switch(a){case 5126:return Ze;case 35664:return af;case 35665:return bf;case 35666:return cf;case 35674:return df;case 35675:return ef;case 35676:return ff;case 35678:return gf;case 35680:return hf;case 5124:case 35670:return $e;case 35667:case 35671:return Ee;case 35668:case 35672:return Fe;case 35669:case 35673:return Ge}}
function kf(a,b){a.uniform1fv(this.addr,b)}function lf(a,b){a.uniform1iv(this.addr,b)}function mf(a,b){a.uniform2fv(this.addr,Gb(b,this.size,2))}function nf(a,b){a.uniform3fv(this.addr,Gb(b,this.size,3))}function of(a,b){a.uniform4fv(this.addr,Gb(b,this.size,4))}function pf(a,b){a.uniformMatrix2fv(this.addr,!1,Gb(b,this.size,4))}function qf(a,b){a.uniformMatrix3fv(this.addr,!1,Gb(b,this.size,9))}function rf(a,b){a.uniformMatrix4fv(this.addr,!1,Gb(b,this.size,16))}function sf(a,b,c){var d=b.length,
e=Ae(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.setTexture2D(b[a]||Ce,e[a])}function tf(a,b,c){var d=b.length,e=Ae(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.setTextureCube(b[a]||De,e[a])}function uf(a){switch(a){case 5126:return kf;case 35664:return mf;case 35665:return nf;case 35666:return of;case 35674:return pf;case 35675:return qf;case 35676:return rf;case 35678:return sf;case 35680:return tf;case 5124:case 35670:return lf;case 35667:case 35671:return Ee;case 35668:case 35672:return Fe;
case 35669:case 35673:return Ge}}function vf(a,b,c){this.id=a;this.addr=c;this.setValue=jf(b.type)}function wf(a,b,c){this.id=a;this.addr=c;this.size=b.size;this.setValue=uf(b.type)}function He(a){this.id=a;this.seq=[];this.map={}}function bb(a,b,c){this.seq=[];this.map={};this.renderer=c;c=a.getProgramParameter(b,a.ACTIVE_UNIFORMS);for(var d=0;d!==c;++d){var e=a.getActiveUniform(b,d),f=a.getUniformLocation(b,e.name),g=this,h=e.name,m=h.length;for(Sd.lastIndex=0;;){var k=Sd.exec(h),z=Sd.lastIndex,
p=k[1],n=k[3];"]"===k[2]&&(p|=0);if(void 0===n||"["===n&&z+2===m){h=g;e=void 0===n?new vf(p,e,f):new wf(p,e,f);h.seq.push(e);h.map[e.id]=e;break}else n=g.map[p],void 0===n&&(n=new He(p),p=g,g=n,p.seq.push(g),p.map[g.id]=g),g=n}}}function F(a,b,c){return void 0===b&&void 0===c?this.set(a):this.setRGB(a,b,c)}function fb(a,b,c,d,e,f,g,h,m,k,z,p){da.call(this,null,f,g,h,m,k,d,e,z,p);this.image={data:a,width:b,height:c};this.magFilter=void 0!==m?m:1003;this.minFilter=void 0!==k?k:1003;this.flipY=this.generateMipmaps=
!1;this.unpackAlignment=1}function tc(a,b){this.min=void 0!==a?a:new E(Infinity,Infinity);this.max=void 0!==b?b:new E(-Infinity,-Infinity)}function xf(a,b){var c,d,e,f,g,h,m,k,z,p,n=a.context,t=a.state,l,r,x,u,v,L;this.render=function(y,D,Q){if(0!==b.length){y=new q;var C=Q.w/Q.z,J=.5*Q.z,ca=.5*Q.w,T=16/Q.w,ea=new E(T*C,T),Ca=new q(1,1,0),gb=new E(1,1),Hb=new tc;Hb.min.set(Q.x,Q.y);Hb.max.set(Q.x+(Q.z-16),Q.y+(Q.w-16));if(void 0===u){var T=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),N=
new Uint16Array([0,1,2,0,2,3]);l=n.createBuffer();r=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,l);n.bufferData(n.ARRAY_BUFFER,T,n.STATIC_DRAW);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r);n.bufferData(n.ELEMENT_ARRAY_BUFFER,N,n.STATIC_DRAW);v=n.createTexture();L=n.createTexture();t.bindTexture(n.TEXTURE_2D,v);n.texImage2D(n.TEXTURE_2D,0,n.RGB,16,16,0,n.RGB,n.UNSIGNED_BYTE,null);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);
n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST);t.bindTexture(n.TEXTURE_2D,L);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,16,16,0,n.RGBA,n.UNSIGNED_BYTE,null);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST);var T=x={vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},N=n.createProgram(),O=n.createShader(n.FRAGMENT_SHADER),
R=n.createShader(n.VERTEX_SHADER),S="precision "+a.getPrecision()+" float;\n";n.shaderSource(O,S+T.fragmentShader);n.shaderSource(R,S+T.vertexShader);n.compileShader(O);n.compileShader(R);n.attachShader(N,O);n.attachShader(N,R);n.linkProgram(N);u=N;z=n.getAttribLocation(u,"position");p=n.getAttribLocation(u,"uv");c=n.getUniformLocation(u,"renderType");d=n.getUniformLocation(u,"map");e=n.getUniformLocation(u,"occlusionMap");f=n.getUniformLocation(u,"opacity");g=n.getUniformLocation(u,"color");h=n.getUniformLocation(u,
"scale");m=n.getUniformLocation(u,"rotation");k=n.getUniformLocation(u,"screenPosition")}n.useProgram(u);t.initAttributes();t.enableAttribute(z);t.enableAttribute(p);t.disableUnusedAttributes();n.uniform1i(e,0);n.uniform1i(d,1);n.bindBuffer(n.ARRAY_BUFFER,l);n.vertexAttribPointer(z,2,n.FLOAT,!1,16,0);n.vertexAttribPointer(p,2,n.FLOAT,!1,16,8);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r);t.disable(n.CULL_FACE);t.setDepthWrite(!1);N=0;for(O=b.length;N<O;N++)if(T=16/Q.w,ea.set(T*C,T),R=b[N],y.set(R.matrixWorld.elements[12],
R.matrixWorld.elements[13],R.matrixWorld.elements[14]),y.applyMatrix4(D.matrixWorldInverse),y.applyMatrix4(D.projectionMatrix),Ca.copy(y),gb.x=Q.x+Ca.x*J+J-8,gb.y=Q.y+Ca.y*ca+ca-8,!0===Hb.containsPoint(gb)){t.activeTexture(n.TEXTURE0);t.bindTexture(n.TEXTURE_2D,null);t.activeTexture(n.TEXTURE1);t.bindTexture(n.TEXTURE_2D,v);n.copyTexImage2D(n.TEXTURE_2D,0,n.RGB,gb.x,gb.y,16,16,0);n.uniform1i(c,0);n.uniform2f(h,ea.x,ea.y);n.uniform3f(k,Ca.x,Ca.y,Ca.z);t.disable(n.BLEND);t.enable(n.DEPTH_TEST);n.drawElements(n.TRIANGLES,
6,n.UNSIGNED_SHORT,0);t.activeTexture(n.TEXTURE0);t.bindTexture(n.TEXTURE_2D,L);n.copyTexImage2D(n.TEXTURE_2D,0,n.RGBA,gb.x,gb.y,16,16,0);n.uniform1i(c,1);t.disable(n.DEPTH_TEST);t.activeTexture(n.TEXTURE1);t.bindTexture(n.TEXTURE_2D,v);n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0);R.positionScreen.copy(Ca);R.customUpdateCallback?R.customUpdateCallback(R):R.updateLensFlares();n.uniform1i(c,2);t.enable(n.BLEND);for(var S=0,w=R.lensFlares.length;S<w;S++){var W=R.lensFlares[S];.001<W.opacity&&.001<
W.scale&&(Ca.x=W.x,Ca.y=W.y,Ca.z=W.z,T=W.size*W.scale/Q.w,ea.x=T*C,ea.y=T,n.uniform3f(k,Ca.x,Ca.y,Ca.z),n.uniform2f(h,ea.x,ea.y),n.uniform1f(m,W.rotation),n.uniform1f(f,W.opacity),n.uniform3f(g,W.color.r,W.color.g,W.color.b),t.setBlending(W.blending,W.blendEquation,W.blendSrc,W.blendDst),a.setTexture2D(W.texture,1),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0))}}t.enable(n.CULL_FACE);t.enable(n.DEPTH_TEST);t.setDepthWrite(!0);a.resetGLState()}}}function yf(a,b){var c,d,e,f,g,h,m,k,z,p,n,t,l,r,
x,u,v;function L(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:b.id-a.id}var y=a.context,D=a.state,Q,C,J,ca,T=new q,ea=new Z,Ca=new q;this.render=function(q,Hb){if(0!==b.length){if(void 0===J){var N=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),O=new Uint16Array([0,1,2,0,2,3]);Q=y.createBuffer();C=y.createBuffer();y.bindBuffer(y.ARRAY_BUFFER,Q);y.bufferData(y.ARRAY_BUFFER,N,y.STATIC_DRAW);y.bindBuffer(y.ELEMENT_ARRAY_BUFFER,C);y.bufferData(y.ELEMENT_ARRAY_BUFFER,
O,y.STATIC_DRAW);var N=y.createProgram(),O=y.createShader(y.VERTEX_SHADER),R=y.createShader(y.FRAGMENT_SHADER);y.shaderSource(O,["precision "+a.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
y.shaderSource(R,["precision "+a.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
y.compileShader(O);y.compileShader(R);y.attachShader(N,O);y.attachShader(N,R);y.linkProgram(N);J=N;u=y.getAttribLocation(J,"position");v=y.getAttribLocation(J,"uv");c=y.getUniformLocation(J,"uvOffset");d=y.getUniformLocation(J,"uvScale");e=y.getUniformLocation(J,"rotation");f=y.getUniformLocation(J,"scale");g=y.getUniformLocation(J,"color");h=y.getUniformLocation(J,"map");m=y.getUniformLocation(J,"opacity");k=y.getUniformLocation(J,"modelViewMatrix");z=y.getUniformLocation(J,"projectionMatrix");p=
y.getUniformLocation(J,"fogType");n=y.getUniformLocation(J,"fogDensity");t=y.getUniformLocation(J,"fogNear");l=y.getUniformLocation(J,"fogFar");r=y.getUniformLocation(J,"fogColor");x=y.getUniformLocation(J,"alphaTest");N=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");N.width=8;N.height=8;O=N.getContext("2d");O.fillStyle="white";O.fillRect(0,0,8,8);ca=new da(N);ca.needsUpdate=!0}y.useProgram(J);D.initAttributes();D.enableAttribute(u);D.enableAttribute(v);D.disableUnusedAttributes();
D.disable(y.CULL_FACE);D.enable(y.BLEND);y.bindBuffer(y.ARRAY_BUFFER,Q);y.vertexAttribPointer(u,2,y.FLOAT,!1,16,0);y.vertexAttribPointer(v,2,y.FLOAT,!1,16,8);y.bindBuffer(y.ELEMENT_ARRAY_BUFFER,C);y.uniformMatrix4fv(z,!1,Hb.projectionMatrix.elements);D.activeTexture(y.TEXTURE0);y.uniform1i(h,0);O=N=0;(R=q.fog)?(y.uniform3f(r,R.color.r,R.color.g,R.color.b),R.isFog?(y.uniform1f(t,R.near),y.uniform1f(l,R.far),y.uniform1i(p,1),O=N=1):R.isFogExp2&&(y.uniform1f(n,R.density),y.uniform1i(p,2),O=N=2)):(y.uniform1i(p,
0),O=N=0);for(var R=0,S=b.length;R<S;R++){var w=b[R];w.modelViewMatrix.multiplyMatrices(Hb.matrixWorldInverse,w.matrixWorld);w.z=-w.modelViewMatrix.elements[14]}b.sort(L);for(var W=[],R=0,S=b.length;R<S;R++){var w=b[R],qa=w.material;!1!==qa.visible&&(y.uniform1f(x,qa.alphaTest),y.uniformMatrix4fv(k,!1,w.modelViewMatrix.elements),w.matrixWorld.decompose(T,ea,Ca),W[0]=Ca.x,W[1]=Ca.y,w=0,q.fog&&qa.fog&&(w=O),N!==w&&(y.uniform1i(p,w),N=w),null!==qa.map?(y.uniform2f(c,qa.map.offset.x,qa.map.offset.y),
y.uniform2f(d,qa.map.repeat.x,qa.map.repeat.y)):(y.uniform2f(c,0,0),y.uniform2f(d,1,1)),y.uniform1f(m,qa.opacity),y.uniform3f(g,qa.color.r,qa.color.g,qa.color.b),y.uniform1f(e,qa.rotation),y.uniform2fv(f,W),D.setBlending(qa.blending,qa.blendEquation,qa.blendSrc,qa.blendDst),D.setDepthTest(qa.depthTest),D.setDepthWrite(qa.depthWrite),qa.map?a.setTexture2D(qa.map,0):a.setTexture2D(ca,0),y.drawElements(y.TRIANGLES,6,y.UNSIGNED_SHORT,0))}D.enable(y.CULL_FACE);a.resetGLState()}}}function X(){Object.defineProperty(this,
"id",{value:zf++});this.uuid=P.generateUUID();this.name="";this.type="Material";this.lights=this.fog=!0;this.blending=1;this.side=0;this.shading=2;this.vertexColors=0;this.opacity=1;this.transparent=!1;this.blendSrc=204;this.blendDst=205;this.blendEquation=100;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.depthFunc=3;this.depthWrite=this.depthTest=!0;this.clippingPlanes=null;this.clipShadows=this.clipIntersection=!1;this.colorWrite=!0;this.precision=null;this.polygonOffset=
!1;this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.premultipliedAlpha=!1;this.overdraw=0;this._needsUpdate=this.visible=!0}function Ia(a){X.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=
this.morphTargets=this.skinning=this.clipping=this.lights=this.fog=!1;this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(a))}function cb(a){X.call(this);this.type="MeshDepthMaterial";this.depthPacking=3200;this.morphTargets=
this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.setValues(a)}function Pa(a,b){this.min=void 0!==a?a:new q(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new q(-Infinity,-Infinity,-Infinity)}function Ea(a,b){this.center=void 0!==a?a:new q;this.radius=void 0!==b?b:0}function xa(){this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]);0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}
function la(a,b){this.normal=void 0!==a?a:new q(1,0,0);this.constant=void 0!==b?b:0}function uc(a,b,c,d,e,f){this.planes=[void 0!==a?a:new la,void 0!==b?b:new la,void 0!==c?c:new la,void 0!==d?d:new la,void 0!==e?e:new la,void 0!==f?f:new la]}function Ie(a,b,c,d){function e(b,c,d,e){var f=b.geometry,g;g=x;var h=b.customDepthMaterial;d&&(g=u,h=b.customDistanceMaterial);h?g=h:(h=!1,c.morphTargets&&(f&&f.isBufferGeometry?h=f.morphAttributes&&f.morphAttributes.position&&0<f.morphAttributes.position.length:
f&&f.isGeometry&&(h=f.morphTargets&&0<f.morphTargets.length)),b=b.isSkinnedMesh&&c.skinning,f=0,h&&(f|=1),b&&(f|=2),g=g[f]);a.localClippingEnabled&&!0===c.clipShadows&&0!==c.clippingPlanes.length&&(f=g.uuid,h=c.uuid,b=v[f],void 0===b&&(b={},v[f]=b),f=b[h],void 0===f&&(f=g.clone(),b[h]=f),g=f);g.visible=c.visible;g.wireframe=c.wireframe;h=c.side;ea.renderSingleSided&&2==h&&(h=0);ea.renderReverseSided&&(0===h?h=1:1===h&&(h=0));g.side=h;g.clipShadows=c.clipShadows;g.clippingPlanes=c.clippingPlanes;g.wireframeLinewidth=
c.wireframeLinewidth;g.linewidth=c.linewidth;d&&void 0!==g.uniforms.lightPos&&g.uniforms.lightPos.value.copy(e);return g}function f(a,b,c){if(!1!==a.visible){0!==(a.layers.mask&b.layers.mask)&&(a.isMesh||a.isLine||a.isPoints)&&a.castShadow&&(!1===a.frustumCulled||!0===m.intersectsObject(a))&&!0===a.material.visible&&(a.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,a.matrixWorld),r.push(a));a=a.children;for(var d=0,e=a.length;d<e;d++)f(a[d],b,c)}}var g=a.context,h=a.state,m=new uc,k=new M,
z=b.shadows,p=new E,n=new E(d.maxTextureSize,d.maxTextureSize),t=new q,l=new q,r=[],x=Array(4),u=Array(4),v={},L=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],y=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)],D=[new fa,new fa,new fa,new fa,new fa,new fa];b=new cb;b.depthPacking=3201;b.clipping=!0;d=Ib.distanceRGBA;for(var Q=Ja.clone(d.uniforms),C=0;4!==C;++C){var J=0!==(C&1),ca=0!==(C&2),T=b.clone();T.morphTargets=J;T.skinning=
ca;x[C]=T;J=new Ia({defines:{USE_SHADOWMAP:""},uniforms:Q,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,morphTargets:J,skinning:ca,clipping:!0});u[C]=J}var ea=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=1;this.renderSingleSided=this.renderReverseSided=!0;this.render=function(b,d){if(!1!==ea.enabled&&(!1!==ea.autoUpdate||!1!==ea.needsUpdate)&&0!==z.length){h.buffers.color.setClear(1,1,1,1);h.disable(g.BLEND);h.setDepthTest(!0);h.setScissorTest(!1);for(var v,
q,x=0,u=z.length;x<u;x++){var C=z[x],Q=C.shadow;if(void 0===Q)console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");else{var J=Q.camera;p.copy(Q.mapSize);p.min(n);if(C&&C.isPointLight){v=6;q=!0;var ca=p.x,T=p.y;D[0].set(2*ca,T,ca,T);D[1].set(0,T,ca,T);D[2].set(3*ca,T,ca,T);D[3].set(ca,T,ca,T);D[4].set(3*ca,0,ca,T);D[5].set(ca,0,ca,T);p.x*=4;p.y*=2}else v=1,q=!1;null===Q.map&&(Q.map=new $a(p.x,p.y,{minFilter:1003,magFilter:1003,format:1023}),J.updateProjectionMatrix());Q.isSpotLightShadow&&Q.update(C);
Q&&Q.isRectAreaLightShadow&&Q.update(C);ca=Q.map;Q=Q.matrix;l.setFromMatrixPosition(C.matrixWorld);J.position.copy(l);a.setRenderTarget(ca);a.clear();for(ca=0;ca<v;ca++){q?(t.copy(J.position),t.add(L[ca]),J.up.copy(y[ca]),J.lookAt(t),h.viewport(D[ca])):(t.setFromMatrixPosition(C.target.matrixWorld),J.lookAt(t));J.updateMatrixWorld();J.matrixWorldInverse.getInverse(J.matrixWorld);Q.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);Q.multiply(J.projectionMatrix);Q.multiply(J.matrixWorldInverse);k.multiplyMatrices(J.projectionMatrix,
J.matrixWorldInverse);m.setFromMatrix(k);r.length=0;f(b,d,J);for(var T=0,w=r.length;T<w;T++){var E=r[T],Td=c.update(E),Sa=E.material;if(Sa&&Sa.isMultiMaterial)for(var A=Td.groups,Sa=Sa.materials,G=0,Fa=A.length;G<Fa;G++){var F=A[G],M=Sa[F.materialIndex];!0===M.visible&&(M=e(E,M,q,l),a.renderBufferDirect(J,null,Td,M,E,F))}else M=e(E,Sa,q,l),a.renderBufferDirect(J,null,Td,M,E,null)}}}}v=a.getClearColor();q=a.getClearAlpha();a.setClearColor(v,q);ea.needsUpdate=!1}}}function db(a,b){this.origin=void 0!==
a?a:new q;this.direction=void 0!==b?b:new q}function eb(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||eb.DefaultOrder}function pd(){this.mask=1}function A(){Object.defineProperty(this,"id",{value:Af++});this.uuid=P.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=A.DefaultUp.clone();var a=new q,b=new eb,c=new Z,d=new q(1,1,1);b.onChange(function(){c.setFromEuler(b,!1)});c.onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,
{position:{enumerable:!0,value:a},rotation:{enumerable:!0,value:b},quaternion:{enumerable:!0,value:c},scale:{enumerable:!0,value:d},modelViewMatrix:{value:new M},normalMatrix:{value:new xa}});this.matrix=new M;this.matrixWorld=new M;this.matrixAutoUpdate=A.DefaultMatrixAutoUpdate;this.matrixWorldNeedsUpdate=!1;this.layers=new pd;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={};this.onBeforeRender=function(){};this.onAfterRender=function(){}}
function ib(a,b){this.start=void 0!==a?a:new q;this.end=void 0!==b?b:new q}function ya(a,b,c){this.a=void 0!==a?a:new q;this.b=void 0!==b?b:new q;this.c=void 0!==c?c:new q}function ha(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d&&d.isVector3?d:new q;this.vertexNormals=Array.isArray(d)?d:[];this.color=e&&e.isColor?e:new F;this.vertexColors=Array.isArray(e)?e:[];this.materialIndex=void 0!==f?f:0}function Ka(a){X.call(this);this.type="MeshBasicMaterial";this.color=new F(16777215);this.lightMap=
this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.lights=this.morphTargets=this.skinning=!1;this.setValues(a)}function w(a,b,c){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.uuid=P.generateUUID();this.array=a;
this.itemSize=b;this.count=void 0!==a?a.length/b:0;this.normalized=!0===c;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.onUploadCallback=function(){};this.version=0}function wc(a,b){w.call(this,new Int8Array(a),b)}function xc(a,b){w.call(this,new Uint8Array(a),b)}function yc(a,b){w.call(this,new Uint8ClampedArray(a),b)}function zc(a,b){w.call(this,new Int16Array(a),b)}function Ua(a,b){w.call(this,new Uint16Array(a),b)}function Ac(a,b){w.call(this,new Int32Array(a),b)}function Va(a,b){w.call(this,
new Uint32Array(a),b)}function V(a,b){w.call(this,new Float32Array(a),b)}function Bc(a,b){w.call(this,new Float64Array(a),b)}function Je(){this.indices=[];this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=!1}function I(){Object.defineProperty(this,"id",
{value:Ud++});this.uuid=P.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.verticesNeedUpdate=this.elementsNeedUpdate=!1}function G(){Object.defineProperty(this,"id",
{value:Ud++});this.uuid=P.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.drawRange={start:0,count:Infinity}}function za(a,b){A.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new G;this.material=void 0!==b?b:new Ka({color:16777215*Math.random()});this.drawMode=0;this.updateMorphTargets()}function Jb(a,b,c,d,e,f){I.call(this);this.type="BoxGeometry";this.parameters=
{width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};this.fromBufferGeometry(new jb(a,b,c,d,e,f));this.mergeVertices()}function jb(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,m,k,w,E){var A=f/k,N=g/w,O=f/2,R=g/2,S=m/2;g=k+1;for(var G=w+1,W=f=0,F=new q,K=0;K<G;K++)for(var M=K*N-R,I=0;I<g;I++)F[a]=(I*A-O)*d,F[b]=M*e,F[c]=S,p[l]=F.x,p[l+1]=F.y,p[l+2]=F.z,F[a]=0,F[b]=0,F[c]=0<m?1:-1,n[l]=F.x,n[l+1]=F.y,n[l+2]=F.z,t[r]=I/k,t[r+1]=1-K/w,l+=3,r+=2,f+=1;for(K=0;K<w;K++)for(I=0;I<k;I++)a=
u+I+g*(K+1),b=u+(I+1)+g*(K+1),c=u+(I+1)+g*K,z[x]=u+I+g*K,z[x+1]=a,z[x+2]=c,z[x+3]=a,z[x+4]=b,z[x+5]=c,x+=6,W+=6;h.addGroup(v,W,E);v+=W;u+=f}G.call(this);this.type="BoxBufferGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};var h=this;d=Math.floor(d)||1;e=Math.floor(e)||1;f=Math.floor(f)||1;var m=function(a,b,c){return a=0+(a+1)*(b+1)*2+(a+1)*(c+1)*2+(c+1)*(b+1)*2}(d,e,f),k=function(a,b,c){a=0+a*b*2+a*c*2+c*b*2;return 6*a}(d,e,f),z=new (65535<k?Uint32Array:
Uint16Array)(k),p=new Float32Array(3*m),n=new Float32Array(3*m),t=new Float32Array(2*m),l=0,r=0,x=0,u=0,v=0;g("z","y","x",-1,-1,c,b,a,f,e,0);g("z","y","x",1,-1,c,b,-a,f,e,1);g("x","z","y",1,1,a,c,b,d,f,2);g("x","z","y",1,-1,a,c,-b,d,f,3);g("x","y","z",1,-1,a,b,c,d,e,4);g("x","y","z",-1,-1,a,b,-c,d,e,5);this.setIndex(new w(z,1));this.addAttribute("position",new w(p,3));this.addAttribute("normal",new w(n,3));this.addAttribute("uv",new w(t,2))}function Cc(a,b,c,d){I.call(this);this.type="PlaneGeometry";
this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new kb(a,b,c,d))}function kb(a,b,c,d){G.call(this);this.type="PlaneBufferGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};var e=a/2,f=b/2;c=Math.floor(c)||1;d=Math.floor(d)||1;var g=c+1,h=d+1,m=a/c,k=b/d;b=new Float32Array(g*h*3);a=new Float32Array(g*h*3);for(var z=new Float32Array(g*h*2),p=0,n=0,t=0;t<h;t++)for(var l=t*k-f,r=0;r<g;r++)b[p]=r*m-e,b[p+1]=-l,a[p+2]=1,z[n]=r/c,z[n+
1]=1-t/d,p+=3,n+=2;p=0;e=new (65535<b.length/3?Uint32Array:Uint16Array)(c*d*6);for(t=0;t<d;t++)for(r=0;r<c;r++)f=r+g*(t+1),h=r+1+g*(t+1),m=r+1+g*t,e[p]=r+g*t,e[p+1]=f,e[p+2]=m,e[p+3]=f,e[p+4]=h,e[p+5]=m,p+=6;this.setIndex(new w(e,1));this.addAttribute("position",new w(b,3));this.addAttribute("normal",new w(a,3));this.addAttribute("uv",new w(z,2))}function sa(){A.call(this);this.type="Camera";this.matrixWorldInverse=new M;this.projectionMatrix=new M}function Ga(a,b,c,d){sa.call(this);this.type="PerspectiveCamera";
this.fov=void 0!==a?a:50;this.zoom=1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.focus=10;this.aspect=void 0!==b?b:1;this.view=null;this.filmGauge=35;this.filmOffset=0;this.updateProjectionMatrix()}function Kb(a,b,c,d,e,f){sa.call(this);this.type="OrthographicCamera";this.zoom=1;this.view=null;this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()}function Bf(a,b,c){var d,e,f;return{setMode:function(a){d=a},
setIndex:function(c){c.array instanceof Uint32Array&&b.get("OES_element_index_uint")?(e=a.UNSIGNED_INT,f=4):c.array instanceof Uint16Array?(e=a.UNSIGNED_SHORT,f=2):(e=a.UNSIGNED_BYTE,f=1)},render:function(b,h){a.drawElements(d,h,e,b*f);c.calls++;c.vertices+=h;d===a.TRIANGLES&&(c.faces+=h/3)},renderInstances:function(g,h,m){var k=b.get("ANGLE_instanced_arrays");null===k?console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."):
(k.drawElementsInstancedANGLE(d,m,e,h*f,g.maxInstancedCount),c.calls++,c.vertices+=m*g.maxInstancedCount,d===a.TRIANGLES&&(c.faces+=g.maxInstancedCount*m/3))}}}function Cf(a,b,c){var d;return{setMode:function(a){d=a},render:function(b,f){a.drawArrays(d,b,f);c.calls++;c.vertices+=f;d===a.TRIANGLES&&(c.faces+=f/3)},renderInstances:function(e){var f=b.get("ANGLE_instanced_arrays");if(null===f)console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
else{var g=e.attributes.position,g=g.isInterleavedBufferAttribute?g.data.count:g.count;f.drawArraysInstancedANGLE(d,0,g,e.maxInstancedCount);c.calls++;c.vertices+=g*e.maxInstancedCount;d===a.TRIANGLES&&(c.faces+=e.maxInstancedCount*g/3)}}}}function Df(){var a={};return{get:function(b){if(void 0!==a[b.id])return a[b.id];var c;switch(b.type){case "DirectionalLight":c={direction:new q,color:new F,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new E};break;case "SpotLight":c={position:new q,direction:new q,
color:new F,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new E};break;case "PointLight":c={position:new q,color:new F,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new E};break;case "HemisphereLight":c={direction:new q,skyColor:new F,groundColor:new F};break;case "RectAreaLight":c={color:new F,position:new q,halfWidth:new q,halfHeight:new q}}return a[b.id]=c}}}function Ef(a){a=a.split("\n");for(var b=0;b<a.length;b++)a[b]=
b+1+": "+a[b];return a.join("\n")}function Ke(a,b,c){var d=a.createShader(b);a.shaderSource(d,c);a.compileShader(d);!1===a.getShaderParameter(d,a.COMPILE_STATUS)&&console.error("THREE.WebGLShader: Shader couldn't compile.");""!==a.getShaderInfoLog(d)&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",b===a.VERTEX_SHADER?"vertex":"fragment",a.getShaderInfoLog(d),Ef(c));return d}function Le(a){switch(a){case 3E3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE",
"( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw Error("unsupported encoding: "+a);}}function Vd(a,b){var c=Le(b);return"vec4 "+a+"( vec4 value ) { return "+c[0]+"ToLinear"+c[1]+"; }"}function Ff(a,b){var c=Le(b);return"vec4 "+a+"( vec4 value ) { return LinearTo"+c[0]+c[1]+"; }"}function Gf(a,b){var c;switch(b){case 1:c="Linear";break;
case 2:c="Reinhard";break;case 3:c="Uncharted2";break;case 4:c="OptimizedCineon";break;default:throw Error("unsupported toneMapping: "+b);}return"vec3 "+a+"( vec3 color ) { return "+c+"ToneMapping( color ); }"}function Hf(a,b,c){a=a||{};return[a.derivatives||b.envMapCubeUV||b.bumpMap||b.normalMap||b.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(a.fragDepth||b.logarithmicDepthBuffer)&&c.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",a.drawBuffers&&c.get("WEBGL_draw_buffers")?
"#extension GL_EXT_draw_buffers : require":"",(a.shaderTextureLOD||b.envMap)&&c.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Dc).join("\n")}function If(a){var b=[],c;for(c in a){var d=a[c];!1!==d&&b.push("#define "+c+" "+d)}return b.join("\n")}function Dc(a){return""!==a}function Me(a,b){return a.replace(/NUM_DIR_LIGHTS/g,b.numDirLights).replace(/NUM_SPOT_LIGHTS/g,b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,
b.numPointLights).replace(/NUM_HEMI_LIGHTS/g,b.numHemiLights)}function Wd(a){return a.replace(/#include +<([\w\d.]+)>/g,function(a,c){var d=ba[c];if(void 0===d)throw Error("Can not resolve #include <"+c+">");return Wd(d)})}function Ne(a){return a.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,function(a,c,d,e){a="";for(c=parseInt(c);c<parseInt(d);c++)a+=e.replace(/\[ i \]/g,"[ "+c+" ]");return a})}function Jf(a,b,c,d){var e=a.context,f=c.extensions,g=c.defines,h=c.__webglShader.vertexShader,
m=c.__webglShader.fragmentShader,k="SHADOWMAP_TYPE_BASIC";1===d.shadowMapType?k="SHADOWMAP_TYPE_PCF":2===d.shadowMapType&&(k="SHADOWMAP_TYPE_PCF_SOFT");var z="ENVMAP_TYPE_CUBE",p="ENVMAP_MODE_REFLECTION",n="ENVMAP_BLENDING_MULTIPLY";if(d.envMap){switch(c.envMap.mapping){case 301:case 302:z="ENVMAP_TYPE_CUBE";break;case 306:case 307:z="ENVMAP_TYPE_CUBE_UV";break;case 303:case 304:z="ENVMAP_TYPE_EQUIREC";break;case 305:z="ENVMAP_TYPE_SPHERE"}switch(c.envMap.mapping){case 302:case 304:p="ENVMAP_MODE_REFRACTION"}switch(c.combine){case 0:n=
"ENVMAP_BLENDING_MULTIPLY";break;case 1:n="ENVMAP_BLENDING_MIX";break;case 2:n="ENVMAP_BLENDING_ADD"}}var t=0<a.gammaFactor?a.gammaFactor:1,f=Hf(f,d,a.extensions),l=If(g),r=e.createProgram();c.isRawShaderMaterial?(g=[l,"\n"].filter(Dc).join("\n"),k=[f,l,"\n"].filter(Dc).join("\n")):(g=["precision "+d.precision+" float;","precision "+d.precision+" int;","#define SHADER_NAME "+c.__webglShader.name,l,d.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+t,"#define MAX_BONES "+
d.maxBones,d.map?"#define USE_MAP":"",d.envMap?"#define USE_ENVMAP":"",d.envMap?"#define "+p:"",d.lightMap?"#define USE_LIGHTMAP":"",d.aoMap?"#define USE_AOMAP":"",d.emissiveMap?"#define USE_EMISSIVEMAP":"",d.bumpMap?"#define USE_BUMPMAP":"",d.normalMap?"#define USE_NORMALMAP":"",d.displacementMap&&d.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",d.specularMap?"#define USE_SPECULARMAP":"",d.roughnessMap?"#define USE_ROUGHNESSMAP":"",d.metalnessMap?"#define USE_METALNESSMAP":"",d.alphaMap?
"#define USE_ALPHAMAP":"",d.vertexColors?"#define USE_COLOR":"",d.flatShading?"#define FLAT_SHADED":"",d.skinning?"#define USE_SKINNING":"",d.useVertexTexture?"#define BONE_TEXTURE":"",d.morphTargets?"#define USE_MORPHTARGETS":"",d.morphNormals&&!1===d.flatShading?"#define USE_MORPHNORMALS":"",d.doubleSided?"#define DOUBLE_SIDED":"",d.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+d.numClippingPlanes,d.shadowMapEnabled?"#define USE_SHADOWMAP":"",d.shadowMapEnabled?"#define "+k:"",
d.sizeAttenuation?"#define USE_SIZEATTENUATION":"",d.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",d.logarithmicDepthBuffer&&a.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","\tattribute vec3 color;","#endif",
"#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING",
"\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(Dc).join("\n"),k=[f,"precision "+d.precision+" float;","precision "+d.precision+" int;","#define SHADER_NAME "+c.__webglShader.name,l,d.alphaTest?"#define ALPHATEST "+d.alphaTest:"","#define GAMMA_FACTOR "+t,d.useFog&&d.fog?"#define USE_FOG":"",d.useFog&&d.fogExp?"#define FOG_EXP2":"",d.map?"#define USE_MAP":"",d.envMap?"#define USE_ENVMAP":"",d.envMap?"#define "+z:"",d.envMap?"#define "+p:"",d.envMap?"#define "+n:
"",d.lightMap?"#define USE_LIGHTMAP":"",d.aoMap?"#define USE_AOMAP":"",d.emissiveMap?"#define USE_EMISSIVEMAP":"",d.bumpMap?"#define USE_BUMPMAP":"",d.normalMap?"#define USE_NORMALMAP":"",d.specularMap?"#define USE_SPECULARMAP":"",d.roughnessMap?"#define USE_ROUGHNESSMAP":"",d.metalnessMap?"#define USE_METALNESSMAP":"",d.alphaMap?"#define USE_ALPHAMAP":"",d.vertexColors?"#define USE_COLOR":"",d.gradientMap?"#define USE_GRADIENTMAP":"",d.flatShading?"#define FLAT_SHADED":"",d.doubleSided?"#define DOUBLE_SIDED":
"",d.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+d.numClippingPlanes,"#define UNION_CLIPPING_PLANES "+(d.numClippingPlanes-d.numClipIntersection),d.shadowMapEnabled?"#define USE_SHADOWMAP":"",d.shadowMapEnabled?"#define "+k:"",d.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",d.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",d.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",d.logarithmicDepthBuffer&&a.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":
"",d.envMap&&a.extensions.get("EXT_shader_texture_lod")?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",0!==d.toneMapping?"#define TONE_MAPPING":"",0!==d.toneMapping?ba.tonemapping_pars_fragment:"",0!==d.toneMapping?Gf("toneMapping",d.toneMapping):"",d.outputEncoding||d.mapEncoding||d.envMapEncoding||d.emissiveMapEncoding?ba.encodings_pars_fragment:"",d.mapEncoding?Vd("mapTexelToLinear",d.mapEncoding):"",d.envMapEncoding?Vd("envMapTexelToLinear",d.envMapEncoding):
"",d.emissiveMapEncoding?Vd("emissiveMapTexelToLinear",d.emissiveMapEncoding):"",d.outputEncoding?Ff("linearToOutputTexel",d.outputEncoding):"",d.depthPacking?"#define DEPTH_PACKING "+c.depthPacking:"","\n"].filter(Dc).join("\n"));h=Wd(h,d);h=Me(h,d);m=Wd(m,d);m=Me(m,d);c.isShaderMaterial||(h=Ne(h),m=Ne(m));m=k+m;h=Ke(e,e.VERTEX_SHADER,g+h);m=Ke(e,e.FRAGMENT_SHADER,m);e.attachShader(r,h);e.attachShader(r,m);void 0!==c.index0AttributeName?e.bindAttribLocation(r,0,c.index0AttributeName):!0===d.morphTargets&&
e.bindAttribLocation(r,0,"position");e.linkProgram(r);d=e.getProgramInfoLog(r);z=e.getShaderInfoLog(h);p=e.getShaderInfoLog(m);t=n=!0;if(!1===e.getProgramParameter(r,e.LINK_STATUS))n=!1,console.error("THREE.WebGLProgram: shader error: ",e.getError(),"gl.VALIDATE_STATUS",e.getProgramParameter(r,e.VALIDATE_STATUS),"gl.getProgramInfoLog",d,z,p);else if(""!==d)console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",d);else if(""===z||""===p)t=!1;t&&(this.diagnostics={runnable:n,material:c,programLog:d,
vertexShader:{log:z,prefix:g},fragmentShader:{log:p,prefix:k}});e.deleteShader(h);e.deleteShader(m);var q;this.getUniforms=function(){void 0===q&&(q=new bb(e,r,a));return q};var u;this.getAttributes=function(){if(void 0===u){for(var a={},b=e.getProgramParameter(r,e.ACTIVE_ATTRIBUTES),c=0;c<b;c++){var d=e.getActiveAttrib(r,c).name;a[d]=e.getAttribLocation(r,d)}u=a}return u};this.destroy=function(){e.deleteProgram(r);this.program=void 0};Object.defineProperties(this,{uniforms:{get:function(){console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");
return this.getUniforms()}},attributes:{get:function(){console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");return this.getAttributes()}}});this.id=Kf++;this.code=b;this.usedTimes=1;this.program=r;this.vertexShader=h;this.fragmentShader=m;return this}function Lf(a,b){function c(a,b){var c;a?a.isTexture?c=a.encoding:a.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),c=
a.texture.encoding):c=3E3;3E3===c&&b&&(c=3007);return c}var d=[],e={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points"},f="precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking".split(" ");
this.getParameters=function(d,f,m,k,z,p){var n=e[d.type],t;b.floatVertexTextures&&p&&p.skeleton&&p.skeleton.useVertexTexture?t=1024:(t=Math.floor((b.maxVertexUniforms-20)/4),void 0!==p&&p&&p.isSkinnedMesh&&(t=Math.min(p.skeleton.bones.length,t),t<p.skeleton.bones.length&&console.warn("WebGLRenderer: too many bones - "+p.skeleton.bones.length+", this GPU supports just "+t+" (try OpenGL instead of ANGLE)")));var l=a.getPrecision();null!==d.precision&&(l=b.getMaxPrecision(d.precision),l!==d.precision&&
console.warn("THREE.WebGLProgram.getParameters:",d.precision,"not supported, using",l,"instead."));var r=a.getCurrentRenderTarget();return{shaderID:n,precision:l,supportsVertexTextures:b.vertexTextures,outputEncoding:c(r?r.texture:null,a.gammaOutput),map:!!d.map,mapEncoding:c(d.map,a.gammaInput),envMap:!!d.envMap,envMapMode:d.envMap&&d.envMap.mapping,envMapEncoding:c(d.envMap,a.gammaInput),envMapCubeUV:!!d.envMap&&(306===d.envMap.mapping||307===d.envMap.mapping),lightMap:!!d.lightMap,aoMap:!!d.aoMap,
emissiveMap:!!d.emissiveMap,emissiveMapEncoding:c(d.emissiveMap,a.gammaInput),bumpMap:!!d.bumpMap,normalMap:!!d.normalMap,displacementMap:!!d.displacementMap,roughnessMap:!!d.roughnessMap,metalnessMap:!!d.metalnessMap,specularMap:!!d.specularMap,alphaMap:!!d.alphaMap,gradientMap:!!d.gradientMap,combine:d.combine,vertexColors:d.vertexColors,fog:!!m,useFog:d.fog,fogExp:m&&m.isFogExp2,flatShading:1===d.shading,sizeAttenuation:d.sizeAttenuation,logarithmicDepthBuffer:b.logarithmicDepthBuffer,skinning:d.skinning,
maxBones:t,useVertexTexture:b.floatVertexTextures&&p&&p.skeleton&&p.skeleton.useVertexTexture,morphTargets:d.morphTargets,morphNormals:d.morphNormals,maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:f.directional.length,numPointLights:f.point.length,numSpotLights:f.spot.length,numRectAreaLights:f.rectArea.length,numHemiLights:f.hemi.length,numClippingPlanes:k,numClipIntersection:z,shadowMapEnabled:a.shadowMap.enabled&&p.receiveShadow&&0<f.shadows.length,shadowMapType:a.shadowMap.type,
toneMapping:a.toneMapping,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:d.premultipliedAlpha,alphaTest:d.alphaTest,doubleSided:2===d.side,flipSided:1===d.side,depthPacking:void 0!==d.depthPacking?d.depthPacking:!1}};this.getProgramCode=function(a,b){var c=[];b.shaderID?c.push(b.shaderID):(c.push(a.fragmentShader),c.push(a.vertexShader));if(void 0!==a.defines)for(var d in a.defines)c.push(d),c.push(a.defines[d]);for(d=0;d<f.length;d++)c.push(b[f[d]]);return c.join()};this.acquireProgram=
function(b,c,e){for(var f,z=0,p=d.length;z<p;z++){var n=d[z];if(n.code===e){f=n;++f.usedTimes;break}}void 0===f&&(f=new Jf(a,e,b,c),d.push(f));return f};this.releaseProgram=function(a){if(0===--a.usedTimes){var b=d.indexOf(a);d[b]=d[d.length-1];d.pop();a.destroy()}};this.programs=d}function Mf(a,b,c){function d(a){var h=a.target;a=f[h.id];null!==a.index&&e(a.index);var m=a.attributes,k;for(k in m)e(m[k]);h.removeEventListener("dispose",d);delete f[h.id];k=b.get(h);k.wireframe&&e(k.wireframe);b["delete"](h);
h=b.get(a);h.wireframe&&e(h.wireframe);b["delete"](a);c.memory.geometries--}function e(c){var d;d=c.isInterleavedBufferAttribute?b.get(c.data).__webglBuffer:b.get(c).__webglBuffer;void 0!==d&&(a.deleteBuffer(d),c.isInterleavedBufferAttribute?b["delete"](c.data):b["delete"](c))}var f={};return{get:function(a){var b=a.geometry;if(void 0!==f[b.id])return f[b.id];b.addEventListener("dispose",d);var e;b.isBufferGeometry?e=b:b.isGeometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=(new G).setFromObject(a)),
e=b._bufferGeometry);f[b.id]=e;c.memory.geometries++;return e}}}function Nf(a,b,c){function d(c,d){var e=c.isInterleavedBufferAttribute?c.data:c,m=b.get(e);if(void 0===m.__webglBuffer){m.__webglBuffer=a.createBuffer();a.bindBuffer(d,m.__webglBuffer);a.bufferData(d,e.array,e.dynamic?a.DYNAMIC_DRAW:a.STATIC_DRAW);var k=a.FLOAT,z=e.array;z instanceof Float32Array?k=a.FLOAT:z instanceof Float64Array?console.warn("Unsupported data buffer format: Float64Array"):z instanceof Uint16Array?k=a.UNSIGNED_SHORT:
z instanceof Int16Array?k=a.SHORT:z instanceof Uint32Array?k=a.UNSIGNED_INT:z instanceof Int32Array?k=a.INT:z instanceof Int8Array?k=a.BYTE:z instanceof Uint8Array&&(k=a.UNSIGNED_BYTE);m.bytesPerElement=z.BYTES_PER_ELEMENT;m.type=k;m.version=e.version;e.onUploadCallback()}else m.version!==e.version&&(a.bindBuffer(d,m.__webglBuffer),!1===e.dynamic?a.bufferData(d,e.array,a.STATIC_DRAW):-1===e.updateRange.count?a.bufferSubData(d,0,e.array):0===e.updateRange.count?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):
(a.bufferSubData(d,e.updateRange.offset*e.array.BYTES_PER_ELEMENT,e.array.subarray(e.updateRange.offset,e.updateRange.offset+e.updateRange.count)),e.updateRange.count=0),m.version=e.version)}var e=new Mf(a,b,c);return{getAttributeBuffer:function(a){return a.isInterleavedBufferAttribute?b.get(a.data).__webglBuffer:b.get(a).__webglBuffer},getAttributeProperties:function(a){return a.isInterleavedBufferAttribute?b.get(a.data):b.get(a)},getWireframeAttribute:function(c){var e=b.get(c);if(void 0!==e.wireframe)return e.wireframe;
var h=[],m=c.index,k=c.attributes;c=k.position;if(null!==m)for(var m=m.array,k=0,z=m.length;k<z;k+=3){var p=m[k+0],n=m[k+1],t=m[k+2];h.push(p,n,n,t,t,p)}else for(m=k.position.array,k=0,z=m.length/3-1;k<z;k+=3)p=k+0,n=k+1,t=k+2,h.push(p,n,n,t,t,p);h=new w(new (65535<c.count?Uint32Array:Uint16Array)(h),1);d(h,a.ELEMENT_ARRAY_BUFFER);return e.wireframe=h},update:function(b){var c=e.get(b);b.geometry.isGeometry&&c.updateFromObject(b);b=c.index;var h=c.attributes;null!==b&&d(b,a.ELEMENT_ARRAY_BUFFER);
for(var m in h)d(h[m],a.ARRAY_BUFFER);b=c.morphAttributes;for(m in b)for(var h=b[m],k=0,z=h.length;k<z;k++)d(h[k],a.ARRAY_BUFFER);return c}}}function Of(a,b,c,d,e,f,g){function h(a,b){if(a.width>b||a.height>b){var c=b/Math.max(a.width,a.height),d=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");d.width=Math.floor(a.width*c);d.height=Math.floor(a.height*c);d.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,d.width,d.height);console.warn("THREE.WebGLRenderer: image is too big ("+
a.width+"x"+a.height+"). Resized to "+d.width+"x"+d.height,a);return d}return a}function m(a){return P.isPowerOfTwo(a.width)&&P.isPowerOfTwo(a.height)}function k(b){return 1003===b||1004===b||1005===b?a.NEAREST:a.LINEAR}function z(b){b=b.target;b.removeEventListener("dispose",z);a:{var c=d.get(b);if(b.image&&c.__image__webglTextureCube)a.deleteTexture(c.__image__webglTextureCube);else{if(void 0===c.__webglInit)break a;a.deleteTexture(c.__webglTexture)}d["delete"](b)}q.textures--}function p(b){b=b.target;
b.removeEventListener("dispose",p);var c=d.get(b),e=d.get(b.texture);if(b){void 0!==e.__webglTexture&&a.deleteTexture(e.__webglTexture);b.depthTexture&&b.depthTexture.dispose();if(b.isWebGLRenderTargetCube)for(e=0;6>e;e++)a.deleteFramebuffer(c.__webglFramebuffer[e]),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer[e]);else a.deleteFramebuffer(c.__webglFramebuffer),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer);d["delete"](b.texture);d["delete"](b)}q.textures--}function n(b,
g){var k=d.get(b);if(0<b.version&&k.__version!==b.version){var n=b.image;if(void 0===n)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined",b);else if(!1===n.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete",b);else{void 0===k.__webglInit&&(k.__webglInit=!0,b.addEventListener("dispose",z),k.__webglTexture=a.createTexture(),q.textures++);c.activeTexture(a.TEXTURE0+g);c.bindTexture(a.TEXTURE_2D,k.__webglTexture);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,
b.flipY);a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha);a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);var p=h(b.image,e.maxTextureSize);if((1001!==b.wrapS||1001!==b.wrapT||1003!==b.minFilter&&1006!==b.minFilter)&&!1===m(p))if(n=p,n instanceof HTMLImageElement||n instanceof HTMLCanvasElement){var l=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");l.width=P.nearestPowerOfTwo(n.width);l.height=P.nearestPowerOfTwo(n.height);l.getContext("2d").drawImage(n,0,0,
l.width,l.height);console.warn("THREE.WebGLRenderer: image is not power of two ("+n.width+"x"+n.height+"). Resized to "+l.width+"x"+l.height,n);p=l}else p=n;var n=m(p),l=f(b.format),r=f(b.type);t(a.TEXTURE_2D,b,n);var H=b.mipmaps;if(b.isDepthTexture){H=a.DEPTH_COMPONENT;if(1015===b.type){if(!u)throw Error("Float Depth Texture only supported in WebGL2.0");H=a.DEPTH_COMPONENT32F}else u&&(H=a.DEPTH_COMPONENT16);1026===b.format&&H===a.DEPTH_COMPONENT&&1012!==b.type&&1014!==b.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
b.type=1012,r=f(b.type));1027===b.format&&(H=a.DEPTH_STENCIL,1020!==b.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=1020,r=f(b.type)));c.texImage2D(a.TEXTURE_2D,0,H,p.width,p.height,0,l,r,null)}else if(b.isDataTexture)if(0<H.length&&n){for(var T=0,ea=H.length;T<ea;T++)p=H[T],c.texImage2D(a.TEXTURE_2D,T,l,p.width,p.height,0,l,r,p.data);b.generateMipmaps=!1}else c.texImage2D(a.TEXTURE_2D,0,l,p.width,p.height,0,l,r,p.data);else if(b.isCompressedTexture)for(T=
0,ea=H.length;T<ea;T++)p=H[T],1023!==b.format&&1022!==b.format?-1<c.getCompressedTextureFormats().indexOf(l)?c.compressedTexImage2D(a.TEXTURE_2D,T,l,p.width,p.height,0,p.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):c.texImage2D(a.TEXTURE_2D,T,l,p.width,p.height,0,l,r,p.data);else if(0<H.length&&n){T=0;for(ea=H.length;T<ea;T++)p=H[T],c.texImage2D(a.TEXTURE_2D,T,l,l,r,p);b.generateMipmaps=!1}else c.texImage2D(a.TEXTURE_2D,0,l,l,
r,p);b.generateMipmaps&&n&&a.generateMipmap(a.TEXTURE_2D);k.__version=b.version;if(b.onUpdate)b.onUpdate(b);return}}c.activeTexture(a.TEXTURE0+g);c.bindTexture(a.TEXTURE_2D,k.__webglTexture)}function t(c,g,h){h?(a.texParameteri(c,a.TEXTURE_WRAP_S,f(g.wrapS)),a.texParameteri(c,a.TEXTURE_WRAP_T,f(g.wrapT)),a.texParameteri(c,a.TEXTURE_MAG_FILTER,f(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,f(g.minFilter))):(a.texParameteri(c,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(c,a.TEXTURE_WRAP_T,
a.CLAMP_TO_EDGE),1001===g.wrapS&&1001===g.wrapT||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.",g),a.texParameteri(c,a.TEXTURE_MAG_FILTER,k(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,k(g.minFilter)),1003!==g.minFilter&&1006!==g.minFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.",g));!(h=b.get("EXT_texture_filter_anisotropic"))||
1015===g.type&&null===b.get("OES_texture_float_linear")||1016===g.type&&null===b.get("OES_texture_half_float_linear")||!(1<g.anisotropy||d.get(g).__currentAnisotropy)||(a.texParameterf(c,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,e.getMaxAnisotropy())),d.get(g).__currentAnisotropy=g.anisotropy)}function l(b,e,g,h){var m=f(e.texture.format),k=f(e.texture.type);c.texImage2D(h,0,m,e.width,e.height,0,m,k,null);a.bindFramebuffer(a.FRAMEBUFFER,b);a.framebufferTexture2D(a.FRAMEBUFFER,g,h,d.get(e.texture).__webglTexture,
0);a.bindFramebuffer(a.FRAMEBUFFER,null)}function r(b,c){a.bindRenderbuffer(a.RENDERBUFFER,b);c.depthBuffer&&!c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,b)):c.depthBuffer&&c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,b)):a.renderbufferStorage(a.RENDERBUFFER,
a.RGBA4,c.width,c.height);a.bindRenderbuffer(a.RENDERBUFFER,null)}var q=g.memory,u="undefined"!==typeof WebGL2RenderingContext&&a instanceof WebGL2RenderingContext;this.setTexture2D=n;this.setTextureCube=function(b,g){var k=d.get(b);if(6===b.image.length)if(0<b.version&&k.__version!==b.version){k.__image__webglTextureCube||(b.addEventListener("dispose",z),k.__image__webglTextureCube=a.createTexture(),q.textures++);c.activeTexture(a.TEXTURE0+g);c.bindTexture(a.TEXTURE_CUBE_MAP,k.__image__webglTextureCube);
a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY);for(var n=b&&b.isCompressedTexture,p=b.image[0]&&b.image[0].isDataTexture,l=[],r=0;6>r;r++)l[r]=n||p?p?b.image[r].image:b.image[r]:h(b.image[r],e.maxCubemapSize);var H=m(l[0]),u=f(b.format),ea=f(b.type);t(a.TEXTURE_CUBE_MAP,b,H);for(r=0;6>r;r++)if(n)for(var w,E=l[r].mipmaps,A=0,N=E.length;A<N;A++)w=E[A],1023!==b.format&&1022!==b.format?-1<c.getCompressedTextureFormats().indexOf(u)?c.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+r,A,u,w.width,w.height,
0,w.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+r,A,u,w.width,w.height,0,u,ea,w.data);else p?c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,u,l[r].width,l[r].height,0,u,ea,l[r].data):c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,u,u,ea,l[r]);b.generateMipmaps&&H&&a.generateMipmap(a.TEXTURE_CUBE_MAP);k.__version=b.version;if(b.onUpdate)b.onUpdate(b)}else c.activeTexture(a.TEXTURE0+
g),c.bindTexture(a.TEXTURE_CUBE_MAP,k.__image__webglTextureCube)};this.setTextureCubeDynamic=function(b,e){c.activeTexture(a.TEXTURE0+e);c.bindTexture(a.TEXTURE_CUBE_MAP,d.get(b).__webglTexture)};this.setupRenderTarget=function(b){var e=d.get(b),f=d.get(b.texture);b.addEventListener("dispose",p);f.__webglTexture=a.createTexture();q.textures++;var g=!0===b.isWebGLRenderTargetCube,h=m(b);if(g){e.__webglFramebuffer=[];for(var k=0;6>k;k++)e.__webglFramebuffer[k]=a.createFramebuffer()}else e.__webglFramebuffer=
a.createFramebuffer();if(g){c.bindTexture(a.TEXTURE_CUBE_MAP,f.__webglTexture);t(a.TEXTURE_CUBE_MAP,b.texture,h);for(k=0;6>k;k++)l(e.__webglFramebuffer[k],b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+k);b.texture.generateMipmaps&&h&&a.generateMipmap(a.TEXTURE_CUBE_MAP);c.bindTexture(a.TEXTURE_CUBE_MAP,null)}else c.bindTexture(a.TEXTURE_2D,f.__webglTexture),t(a.TEXTURE_2D,b.texture,h),l(e.__webglFramebuffer,b,a.COLOR_ATTACHMENT0,a.TEXTURE_2D),b.texture.generateMipmaps&&h&&a.generateMipmap(a.TEXTURE_2D),
c.bindTexture(a.TEXTURE_2D,null);if(b.depthBuffer){e=d.get(b);f=!0===b.isWebGLRenderTargetCube;if(b.depthTexture){if(f)throw Error("target.depthTexture not supported in Cube render targets");if(b&&b.isWebGLRenderTargetCube)throw Error("Depth Texture with cube render targets is not supported!");a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer);if(!b.depthTexture||!b.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");d.get(b.depthTexture).__webglTexture&&
b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0);n(b.depthTexture,0);e=d.get(b.depthTexture).__webglTexture;if(1026===b.depthTexture.format)a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,e,0);else if(1027===b.depthTexture.format)a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,e,0);else throw Error("Unknown depthTexture format");
}else if(f)for(e.__webglDepthbuffer=[],f=0;6>f;f++)a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer[f]),e.__webglDepthbuffer[f]=a.createRenderbuffer(),r(e.__webglDepthbuffer[f],b);else a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer),e.__webglDepthbuffer=a.createRenderbuffer(),r(e.__webglDepthbuffer,b);a.bindFramebuffer(a.FRAMEBUFFER,null)}};this.updateRenderTargetMipmap=function(b){var e=b.texture;e.generateMipmaps&&m(b)&&1003!==e.minFilter&&1006!==e.minFilter&&(b=b&&b.isWebGLRenderTargetCube?
a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,e=d.get(e).__webglTexture,c.bindTexture(b,e),a.generateMipmap(b),c.bindTexture(b,null))}}function Pf(){var a={};return{get:function(b){b=b.uuid;var c=a[b];void 0===c&&(c={},a[b]=c);return c},"delete":function(b){delete a[b.uuid]},clear:function(){a={}}}}function Qf(a,b,c){function d(b,c,d){var e=new Uint8Array(4),f=a.createTexture();a.bindTexture(b,f);a.texParameteri(b,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(b,a.TEXTURE_MAG_FILTER,a.NEAREST);for(b=0;b<d;b++)a.texImage2D(c+
b,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,e);return f}function e(b){!0!==v[b]&&(a.enable(b),v[b]=!0)}function f(b){!1!==v[b]&&(a.disable(b),v[b]=!1)}function g(b,d,g,h,m,k,n,p){0!==b?e(a.BLEND):f(a.BLEND);if(b!==y||p!==ea)2===b?p?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE,a.ONE,a.ONE)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.SRC_ALPHA,a.ONE)):3===b?p?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ONE_MINUS_SRC_ALPHA)):
(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.ONE_MINUS_SRC_COLOR)):4===b?p?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.SRC_COLOR)):p?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)):(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)),
y=b,ea=p;if(5===b){m=m||d;k=k||g;n=n||h;if(d!==D||m!==J)a.blendEquationSeparate(c(d),c(m)),D=d,J=m;if(g!==Q||h!==C||k!==ca||n!==T)a.blendFuncSeparate(c(g),c(h),c(k),c(n)),Q=g,C=h,ca=k,T=n}else T=ca=J=C=Q=D=null}function h(a){n.setFunc(a)}function m(b){w!==b&&(b?a.frontFace(a.CW):a.frontFace(a.CCW),w=b)}function k(b){0!==b?(e(a.CULL_FACE),b!==E&&(1===b?a.cullFace(a.BACK):2===b?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):f(a.CULL_FACE);E=b}function z(b){void 0===b&&(b=a.TEXTURE0+S-1);W!==b&&
(a.activeTexture(b),W=b)}var p=new function(){var b=!1,c=new fa,d=null,e=new fa;return{setMask:function(c){d===c||b||(a.colorMask(c,c,c,c),d=c)},setLocked:function(a){b=a},setClear:function(b,d,f,g,h){!0===h&&(b*=g,d*=g,f*=g);c.set(b,d,f,g);!1===e.equals(c)&&(a.clearColor(b,d,f,g),e.copy(c))},reset:function(){b=!1;d=null;e.set(0,0,0,1)}}},n=new function(){var b=!1,c=null,d=null,g=null;return{setTest:function(b){b?e(a.DEPTH_TEST):f(a.DEPTH_TEST)},setMask:function(d){c===d||b||(a.depthMask(d),c=d)},
setFunc:function(b){if(d!==b){if(b)switch(b){case 0:a.depthFunc(a.NEVER);break;case 1:a.depthFunc(a.ALWAYS);break;case 2:a.depthFunc(a.LESS);break;case 3:a.depthFunc(a.LEQUAL);break;case 4:a.depthFunc(a.EQUAL);break;case 5:a.depthFunc(a.GEQUAL);break;case 6:a.depthFunc(a.GREATER);break;case 7:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}else a.depthFunc(a.LEQUAL);d=b}},setLocked:function(a){b=a},setClear:function(b){g!==b&&(a.clearDepth(b),g=b)},reset:function(){b=!1;g=d=c=null}}},
t=new function(){var b=!1,c=null,d=null,g=null,h=null,m=null,k=null,n=null,p=null;return{setTest:function(b){b?e(a.STENCIL_TEST):f(a.STENCIL_TEST)},setMask:function(d){c===d||b||(a.stencilMask(d),c=d)},setFunc:function(b,c,e){if(d!==b||g!==c||h!==e)a.stencilFunc(b,c,e),d=b,g=c,h=e},setOp:function(b,c,d){if(m!==b||k!==c||n!==d)a.stencilOp(b,c,d),m=b,k=c,n=d},setLocked:function(a){b=a},setClear:function(b){p!==b&&(a.clearStencil(b),p=b)},reset:function(){b=!1;p=n=k=m=h=g=d=c=null}}},l=a.getParameter(a.MAX_VERTEX_ATTRIBS),
r=new Uint8Array(l),q=new Uint8Array(l),u=new Uint8Array(l),v={},L=null,y=null,D=null,Q=null,C=null,J=null,ca=null,T=null,ea=!1,w=null,E=null,A=null,N=null,O=null,R=null,S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),l=parseFloat(/^WebGL\ ([0-9])/.exec(a.getParameter(a.VERSION))[1]),F=1<=parseFloat(l),W=null,G={},K=new fa,M=new fa,I={};I[a.TEXTURE_2D]=d(a.TEXTURE_2D,a.TEXTURE_2D,1);I[a.TEXTURE_CUBE_MAP]=d(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6);return{buffers:{color:p,depth:n,stencil:t},
init:function(){p.setClear(0,0,0,1);n.setClear(1);t.setClear(0);e(a.DEPTH_TEST);h(3);m(!1);k(1);e(a.CULL_FACE);e(a.BLEND);g(1)},initAttributes:function(){for(var a=0,b=r.length;a<b;a++)r[a]=0},enableAttribute:function(c){r[c]=1;0===q[c]&&(a.enableVertexAttribArray(c),q[c]=1);0!==u[c]&&(b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c,0),u[c]=0)},enableAttributeAndDivisor:function(b,c,d){r[b]=1;0===q[b]&&(a.enableVertexAttribArray(b),q[b]=1);u[b]!==c&&(d.vertexAttribDivisorANGLE(b,c),u[b]=
c)},disableUnusedAttributes:function(){for(var b=0,c=q.length;b!==c;++b)q[b]!==r[b]&&(a.disableVertexAttribArray(b),q[b]=0)},enable:e,disable:f,getCompressedTextureFormats:function(){if(null===L&&(L=[],b.get("WEBGL_compressed_texture_pvrtc")||b.get("WEBGL_compressed_texture_s3tc")||b.get("WEBGL_compressed_texture_etc1")))for(var c=a.getParameter(a.COMPRESSED_TEXTURE_FORMATS),d=0;d<c.length;d++)L.push(c[d]);return L},setBlending:g,setColorWrite:function(a){p.setMask(a)},setDepthTest:function(a){n.setTest(a)},
setDepthWrite:function(a){n.setMask(a)},setDepthFunc:h,setStencilTest:function(a){t.setTest(a)},setStencilWrite:function(a){t.setMask(a)},setStencilFunc:function(a,b,c){t.setFunc(a,b,c)},setStencilOp:function(a,b,c){t.setOp(a,b,c)},setFlipSided:m,setCullFace:k,setLineWidth:function(b){b!==A&&(F&&a.lineWidth(b),A=b)},setPolygonOffset:function(b,c,d){if(b){if(e(a.POLYGON_OFFSET_FILL),N!==c||O!==d)a.polygonOffset(c,d),N=c,O=d}else f(a.POLYGON_OFFSET_FILL)},getScissorTest:function(){return R},setScissorTest:function(b){(R=
b)?e(a.SCISSOR_TEST):f(a.SCISSOR_TEST)},activeTexture:z,bindTexture:function(b,c){null===W&&z();var d=G[W];void 0===d&&(d={type:void 0,texture:void 0},G[W]=d);if(d.type!==b||d.texture!==c)a.bindTexture(b,c||I[b]),d.type=b,d.texture=c},compressedTexImage2D:function(){try{a.compressedTexImage2D.apply(a,arguments)}catch(b){console.error(b)}},texImage2D:function(){try{a.texImage2D.apply(a,arguments)}catch(b){console.error(b)}},scissor:function(b){!1===K.equals(b)&&(a.scissor(b.x,b.y,b.z,b.w),K.copy(b))},
viewport:function(b){!1===M.equals(b)&&(a.viewport(b.x,b.y,b.z,b.w),M.copy(b))},reset:function(){for(var b=0;b<q.length;b++)1===q[b]&&(a.disableVertexAttribArray(b),q[b]=0);v={};W=L=null;G={};E=w=y=null;p.reset();n.reset();t.reset()}}}function Rf(a,b,c){function d(b){if("highp"===b){if(0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision)return"highp";b="mediump"}return"mediump"===b&&0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,
a.MEDIUM_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision?"mediump":"lowp"}var e,f=void 0!==c.precision?c.precision:"highp",g=d(f);g!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);c=!0===c.logarithmicDepthBuffer&&!!b.get("EXT_frag_depth");var g=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),h=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=a.getParameter(a.MAX_TEXTURE_SIZE),k=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),
z=a.getParameter(a.MAX_VERTEX_ATTRIBS),p=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),n=a.getParameter(a.MAX_VARYING_VECTORS),t=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),l=0<h,r=!!b.get("OES_texture_float");return{getMaxAnisotropy:function(){if(void 0!==e)return e;var c=b.get("EXT_texture_filter_anisotropic");return e=null!==c?a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0},getMaxPrecision:d,precision:f,logarithmicDepthBuffer:c,maxTextures:g,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:k,
maxAttributes:z,maxVertexUniforms:p,maxVaryings:n,maxFragmentUniforms:t,vertexTextures:l,floatFragmentTextures:r,floatVertexTextures:l&&r}}function Sf(a){var b={};return{get:function(c){if(void 0!==b[c])return b[c];var d;switch(c){case "WEBGL_depth_texture":d=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case "EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||
a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case "WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;case "WEBGL_compressed_texture_etc1":d=a.getExtension("WEBGL_compressed_texture_etc1");
break;default:d=a.getExtension(c)}null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d}}}function Tf(){function a(){k.value!==d&&(k.value=d,k.needsUpdate=0<e);c.numPlanes=e;c.numIntersection=0}function b(a,b,d,e){var f=null!==a?a.length:0,g=null;if(0!==f){g=k.value;if(!0!==e||null===g){e=d+4*f;b=b.matrixWorldInverse;m.getNormalMatrix(b);if(null===g||g.length<e)g=new Float32Array(e);for(e=0;e!==f;++e,d+=4)h.copy(a[e]).applyMatrix4(b,m),h.normal.toArray(g,d),g[d+
3]=h.constant}k.value=g;k.needsUpdate=!0}c.numPlanes=f;return g}var c=this,d=null,e=0,f=!1,g=!1,h=new la,m=new xa,k={value:null,needsUpdate:!1};this.uniform=k;this.numIntersection=this.numPlanes=0;this.init=function(a,c,g){var h=0!==a.length||c||0!==e||f;f=c;d=b(a,g,0);e=a.length;return h};this.beginShadows=function(){g=!0;b(null)};this.endShadows=function(){g=!1;a()};this.setState=function(c,h,m,t,l,r){if(!f||null===c||0===c.length||g&&!m)g?b(null):a();else{m=g?0:e;var q=4*m,u=l.clippingState||null;
k.value=u;u=b(c,t,q,r);for(c=0;c!==q;++c)u[c]=d[c];l.clippingState=u;this.numIntersection=h?this.numPlanes:0;this.numPlanes+=m}}}function Xd(a){function b(){Y.init();Y.scissor(ba.copy(ga).multiplyScalar(Ra));Y.viewport(vc.copy(ia).multiplyScalar(Ra));Y.buffers.color.setClear(Fa.r,Fa.g,Fa.b,hb,J)}function c(){V=P=null;X="";K=-1;Y.reset()}function d(a){a.preventDefault();c();b();ha.clear()}function e(a){a=a.target;a.removeEventListener("dispose",e);f(a);ha["delete"](a)}function f(a){var b=ha.get(a).program;
a.program=void 0;void 0!==b&&xa.releaseProgram(b)}function g(a,b){return Math.abs(b[0])-Math.abs(a[0])}function h(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.material.program&&b.material.program&&a.material.program!==b.material.program?a.material.program.id-b.material.program.id:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function m(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-
b.object.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function k(a,b,c,d,e){var f;c.transparent?(d=A,f=++I):(d=w,f=++E);f=d[f];void 0!==f?(f.id=a.id,f.object=a,f.geometry=b,f.material=c,f.z=Ha.z,f.group=e):(f={id:a.id,object:a,geometry:b,material:c,z:Ha.z,group:e},d.push(f))}function z(a){if(!ma.intersectsSphere(a))return!1;var b=Z.numPlanes;if(0===b)return!0;var c=S.clippingPlanes,d=a.center;a=-a.radius;var e=0;do if(c[e].distanceToPoint(d)<a)return!1;while(++e!==b);return!0}function p(a,b){if(!1!==a.visible){if(0!==
(a.layers.mask&b.layers.mask))if(a.isLight)T.push(a);else if(a.isSprite){var c;(c=!1===a.frustumCulled)||(na.center.set(0,0,0),na.radius=.7071067811865476,na.applyMatrix4(a.matrixWorld),c=!0===z(na));c&&O.push(a)}else if(a.isLensFlare)R.push(a);else if(a.isImmediateRenderObject)!0===S.sortObjects&&(Ha.setFromMatrixPosition(a.matrixWorld),Ha.applyMatrix4(ua)),k(a,null,a.material,Ha.z,null);else if(a.isMesh||a.isLine||a.isPoints)if(a.isSkinnedMesh&&a.skeleton.update(),(c=!1===a.frustumCulled)||(c=a.geometry,
null===c.boundingSphere&&c.computeBoundingSphere(),na.copy(c.boundingSphere).applyMatrix4(a.matrixWorld),c=!0===z(na)),c){var d=a.material;if(!0===d.visible)if(!0===S.sortObjects&&(Ha.setFromMatrixPosition(a.matrixWorld),Ha.applyMatrix4(ua)),c=ra.update(a),d.isMultiMaterial)for(var e=c.groups,f=d.materials,d=0,g=e.length;d<g;d++){var h=e[d],m=f[h.materialIndex];!0===m.visible&&k(a,c,m,Ha.z,h)}else k(a,c,d,Ha.z,null)}c=a.children;d=0;for(g=c.length;d<g;d++)p(c[d],b)}}function n(a,b,c,d){for(var e=
0,f=a.length;e<f;e++){var g=a[e],h=g.object,m=g.geometry,k=void 0===d?g.material:d,g=g.group;h.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,h.matrixWorld);h.normalMatrix.getNormalMatrix(h.modelViewMatrix);h.onBeforeRender(S,b,c,m,k,g);if(h.isImmediateRenderObject){t(k);var n=l(c,b.fog,k,h);X="";h.render(function(a){S.renderBufferImmediate(a,n,k)})}else S.renderBufferDirect(c,b.fog,m,k,h,g);h.onAfterRender(S,b,c,m,k,g)}}function t(a){2===a.side?Y.disable(B.CULL_FACE):Y.enable(B.CULL_FACE);
Y.setFlipSided(1===a.side);!0===a.transparent?Y.setBlending(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha,a.premultipliedAlpha):Y.setBlending(0);Y.setDepthFunc(a.depthFunc);Y.setDepthTest(a.depthTest);Y.setDepthWrite(a.depthWrite);Y.setColorWrite(a.colorWrite);Y.setPolygonOffset(a.polygonOffset,a.polygonOffsetFactor,a.polygonOffsetUnits)}function l(a,b,c,d){da=0;var g=ha.get(c);oa&&(sa||a!==V)&&Z.setState(c.clippingPlanes,c.clipIntersection,
c.clipShadows,a,g,a===V&&c.id===K);!1===c.needsUpdate&&(void 0===g.program?c.needsUpdate=!0:c.fog&&g.fog!==b?c.needsUpdate=!0:c.lights&&g.lightsHash!==aa.hash?c.needsUpdate=!0:void 0===g.numClippingPlanes||g.numClippingPlanes===Z.numPlanes&&g.numIntersection===Z.numIntersection||(c.needsUpdate=!0));if(c.needsUpdate){a:{var h=ha.get(c),m=xa.getParameters(c,aa,b,Z.numPlanes,Z.numIntersection,d),k=xa.getProgramCode(c,m),n=h.program,p=!0;if(void 0===n)c.addEventListener("dispose",e);else if(n.code!==
k)f(c);else if(void 0!==m.shaderID)break a;else p=!1;p&&(m.shaderID?(n=Ib[m.shaderID],h.__webglShader={name:c.type,uniforms:Ja.clone(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}):h.__webglShader={name:c.type,uniforms:c.uniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader},c.__webglShader=h.__webglShader,n=xa.acquireProgram(c,m,k),h.program=n,c.program=n);m=n.getAttributes();if(c.morphTargets)for(k=c.numSupportedMorphTargets=0;k<S.maxMorphTargets;k++)0<=
m["morphTarget"+k]&&c.numSupportedMorphTargets++;if(c.morphNormals)for(k=c.numSupportedMorphNormals=0;k<S.maxMorphNormals;k++)0<=m["morphNormal"+k]&&c.numSupportedMorphNormals++;m=h.__webglShader.uniforms;if(!c.isShaderMaterial&&!c.isRawShaderMaterial||!0===c.clipping)h.numClippingPlanes=Z.numPlanes,h.numIntersection=Z.numIntersection,m.clippingPlanes=Z.uniform;h.fog=b;h.lightsHash=aa.hash;c.lights&&(m.ambientLightColor.value=aa.ambient,m.directionalLights.value=aa.directional,m.spotLights.value=
aa.spot,m.rectAreaLights.value=aa.rectArea,m.pointLights.value=aa.point,m.hemisphereLights.value=aa.hemi,m.directionalShadowMap.value=aa.directionalShadowMap,m.directionalShadowMatrix.value=aa.directionalShadowMatrix,m.spotShadowMap.value=aa.spotShadowMap,m.spotShadowMatrix.value=aa.spotShadowMatrix,m.pointShadowMap.value=aa.pointShadowMap,m.pointShadowMatrix.value=aa.pointShadowMatrix);k=h.program.getUniforms();m=bb.seqWithValue(k.seq,m);h.uniformsList=m}c.needsUpdate=!1}var z=!1,p=n=!1,h=g.program,
m=h.getUniforms(),k=g.__webglShader.uniforms;h.id!==P&&(B.useProgram(h.program),P=h.id,p=n=z=!0);c.id!==K&&(K=c.id,n=!0);if(z||a!==V){m.set(B,a,"projectionMatrix");la.logarithmicDepthBuffer&&m.setValue(B,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2));a!==V&&(V=a,p=n=!0);if(c.isShaderMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.envMap)z=m.map.cameraPosition,void 0!==z&&z.setValue(B,Ha.setFromMatrixPosition(a.matrixWorld));(c.isMeshPhongMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||
c.isMeshStandardMaterial||c.isShaderMaterial||c.skinning)&&m.setValue(B,"viewMatrix",a.matrixWorldInverse);m.set(B,S,"toneMappingExposure");m.set(B,S,"toneMappingWhitePoint")}c.skinning&&(m.setOptional(B,d,"bindMatrix"),m.setOptional(B,d,"bindMatrixInverse"),a=d.skeleton)&&(la.floatVertexTextures&&a.useVertexTexture?(m.set(B,a,"boneTexture"),m.set(B,a,"boneTextureWidth"),m.set(B,a,"boneTextureHeight")):m.setOptional(B,a,"boneMatrices"));if(n){c.lights&&(a=p,k.ambientLightColor.needsUpdate=a,k.directionalLights.needsUpdate=
a,k.pointLights.needsUpdate=a,k.spotLights.needsUpdate=a,k.rectAreaLights.needsUpdate=a,k.hemisphereLights.needsUpdate=a);b&&c.fog&&(k.fogColor.value=b.color,b.isFog?(k.fogNear.value=b.near,k.fogFar.value=b.far):b.isFogExp2&&(k.fogDensity.value=b.density));if(c.isMeshBasicMaterial||c.isMeshLambertMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.isMeshNormalMaterial||c.isMeshDepthMaterial){k.opacity.value=c.opacity;k.diffuse.value=c.color;c.emissive&&k.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity);
k.map.value=c.map;k.specularMap.value=c.specularMap;k.alphaMap.value=c.alphaMap;c.lightMap&&(k.lightMap.value=c.lightMap,k.lightMapIntensity.value=c.lightMapIntensity);c.aoMap&&(k.aoMap.value=c.aoMap,k.aoMapIntensity.value=c.aoMapIntensity);var t;c.map?t=c.map:c.specularMap?t=c.specularMap:c.displacementMap?t=c.displacementMap:c.normalMap?t=c.normalMap:c.bumpMap?t=c.bumpMap:c.roughnessMap?t=c.roughnessMap:c.metalnessMap?t=c.metalnessMap:c.alphaMap?t=c.alphaMap:c.emissiveMap&&(t=c.emissiveMap);void 0!==
t&&(t.isWebGLRenderTarget&&(t=t.texture),b=t.offset,t=t.repeat,k.offsetRepeat.value.set(b.x,b.y,t.x,t.y));k.envMap.value=c.envMap;k.flipEnvMap.value=c.envMap&&c.envMap.isCubeTexture?-1:1;k.reflectivity.value=c.reflectivity;k.refractionRatio.value=c.refractionRatio}c.isLineBasicMaterial?(k.diffuse.value=c.color,k.opacity.value=c.opacity):c.isLineDashedMaterial?(k.diffuse.value=c.color,k.opacity.value=c.opacity,k.dashSize.value=c.dashSize,k.totalSize.value=c.dashSize+c.gapSize,k.scale.value=c.scale):
c.isPointsMaterial?(k.diffuse.value=c.color,k.opacity.value=c.opacity,k.size.value=c.size*Ra,k.scale.value=.5*Ec,k.map.value=c.map,null!==c.map&&(t=c.map.offset,c=c.map.repeat,k.offsetRepeat.value.set(t.x,t.y,c.x,c.y))):c.isMeshLambertMaterial?c.emissiveMap&&(k.emissiveMap.value=c.emissiveMap):c.isMeshToonMaterial?(r(k,c),c.gradientMap&&(k.gradientMap.value=c.gradientMap)):c.isMeshPhongMaterial?r(k,c):c.isMeshPhysicalMaterial?(k.clearCoat.value=c.clearCoat,k.clearCoatRoughness.value=c.clearCoatRoughness,
x(k,c)):c.isMeshStandardMaterial?x(k,c):c.isMeshDepthMaterial?c.displacementMap&&(k.displacementMap.value=c.displacementMap,k.displacementScale.value=c.displacementScale,k.displacementBias.value=c.displacementBias):c.isMeshNormalMaterial&&(c.bumpMap&&(k.bumpMap.value=c.bumpMap,k.bumpScale.value=c.bumpScale),c.normalMap&&(k.normalMap.value=c.normalMap,k.normalScale.value.copy(c.normalScale)),c.displacementMap&&(k.displacementMap.value=c.displacementMap,k.displacementScale.value=c.displacementScale,
k.displacementBias.value=c.displacementBias));void 0!==k.ltcMat&&(k.ltcMat.value=THREE.UniformsLib.LTC_MAT_TEXTURE);void 0!==k.ltcMag&&(k.ltcMag.value=THREE.UniformsLib.LTC_MAG_TEXTURE);bb.upload(B,g.uniformsList,k,S)}m.set(B,d,"modelViewMatrix");m.set(B,d,"normalMatrix");m.setValue(B,"modelMatrix",d.matrixWorld);return h}function r(a,b){a.specular.value=b.specular;a.shininess.value=Math.max(b.shininess,1E-4);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,
a.bumpScale.value=b.bumpScale);b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale));b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias)}function x(a,b){a.roughness.value=b.roughness;a.metalness.value=b.metalness;b.roughnessMap&&(a.roughnessMap.value=b.roughnessMap);b.metalnessMap&&(a.metalnessMap.value=b.metalnessMap);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);
b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale);b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale));b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias);b.envMap&&(a.envMapIntensity.value=b.envMapIntensity)}function u(a){var b;if(1E3===a)return B.REPEAT;if(1001===a)return B.CLAMP_TO_EDGE;if(1002===a)return B.MIRRORED_REPEAT;if(1003===a)return B.NEAREST;
if(1004===a)return B.NEAREST_MIPMAP_NEAREST;if(1005===a)return B.NEAREST_MIPMAP_LINEAR;if(1006===a)return B.LINEAR;if(1007===a)return B.LINEAR_MIPMAP_NEAREST;if(1008===a)return B.LINEAR_MIPMAP_LINEAR;if(1009===a)return B.UNSIGNED_BYTE;if(1017===a)return B.UNSIGNED_SHORT_4_4_4_4;if(1018===a)return B.UNSIGNED_SHORT_5_5_5_1;if(1019===a)return B.UNSIGNED_SHORT_5_6_5;if(1010===a)return B.BYTE;if(1011===a)return B.SHORT;if(1012===a)return B.UNSIGNED_SHORT;if(1013===a)return B.INT;if(1014===a)return B.UNSIGNED_INT;
if(1015===a)return B.FLOAT;if(1016===a&&(b=ja.get("OES_texture_half_float"),null!==b))return b.HALF_FLOAT_OES;if(1021===a)return B.ALPHA;if(1022===a)return B.RGB;if(1023===a)return B.RGBA;if(1024===a)return B.LUMINANCE;if(1025===a)return B.LUMINANCE_ALPHA;if(1026===a)return B.DEPTH_COMPONENT;if(1027===a)return B.DEPTH_STENCIL;if(100===a)return B.FUNC_ADD;if(101===a)return B.FUNC_SUBTRACT;if(102===a)return B.FUNC_REVERSE_SUBTRACT;if(200===a)return B.ZERO;if(201===a)return B.ONE;if(202===a)return B.SRC_COLOR;
if(203===a)return B.ONE_MINUS_SRC_COLOR;if(204===a)return B.SRC_ALPHA;if(205===a)return B.ONE_MINUS_SRC_ALPHA;if(206===a)return B.DST_ALPHA;if(207===a)return B.ONE_MINUS_DST_ALPHA;if(208===a)return B.DST_COLOR;if(209===a)return B.ONE_MINUS_DST_COLOR;if(210===a)return B.SRC_ALPHA_SATURATE;if(2001===a||2002===a||2003===a||2004===a)if(b=ja.get("WEBGL_compressed_texture_s3tc"),null!==b){if(2001===a)return b.COMPRESSED_RGB_S3TC_DXT1_EXT;if(2002===a)return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(2003===a)return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;
if(2004===a)return b.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(2100===a||2101===a||2102===a||2103===a)if(b=ja.get("WEBGL_compressed_texture_pvrtc"),null!==b){if(2100===a)return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(2101===a)return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(2102===a)return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(2103===a)return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(2151===a&&(b=ja.get("WEBGL_compressed_texture_etc1"),null!==b))return b.COMPRESSED_RGB_ETC1_WEBGL;if(103===a||104===a)if(b=ja.get("EXT_blend_minmax"),
null!==b){if(103===a)return b.MIN_EXT;if(104===a)return b.MAX_EXT}return 1020===a&&(b=ja.get("WEBGL_depth_texture"),null!==b)?b.UNSIGNED_INT_24_8_WEBGL:0}console.log("THREE.WebGLRenderer","84dev");a=a||{};var v=void 0!==a.canvas?a.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),L=void 0!==a.context?a.context:null,y=void 0!==a.alpha?a.alpha:!1,D=void 0!==a.depth?a.depth:!0,Q=void 0!==a.stencil?a.stencil:!0,C=void 0!==a.antialias?a.antialias:!1,J=void 0!==a.premultipliedAlpha?
a.premultipliedAlpha:!0,ca=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,T=[],w=[],E=-1,A=[],I=-1,N=new Float32Array(8),O=[],R=[];this.domElement=v;this.context=null;this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.clippingPlanes=[];this.localClippingEnabled=!1;this.gammaFactor=2;this.physicallyCorrectLights=this.gammaOutput=this.gammaInput=!1;this.toneMappingWhitePoint=this.toneMappingExposure=this.toneMapping=1;this.maxMorphTargets=
8;this.maxMorphNormals=4;var S=this,P=null,W=null,U=null,K=-1,X="",V=null,ba=new fa,Sa=null,vc=new fa,da=0,Fa=new F(0),hb=0,od=v.width,Ec=v.height,Ra=1,ga=new fa(0,0,od,Ec),ka=!1,ia=new fa(0,0,od,Ec),ma=new uc,Z=new Tf,oa=!1,sa=!1,na=new Ea,ua=new M,Ha=new q,Aa=new M,va=new M,aa={hash:"",ambient:[0,0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],shadows:[]},pa={calls:0,
vertices:0,faces:0,points:0};this.info={render:pa,memory:{geometries:0,textures:0},programs:null};var B;try{y={alpha:y,depth:D,stencil:Q,antialias:C,premultipliedAlpha:J,preserveDrawingBuffer:ca};B=L||v.getContext("webgl",y)||v.getContext("experimental-webgl",y);if(null===B){if(null!==v.getContext("webgl"))throw"Error creating WebGL context with your selected attributes.";throw"Error creating WebGL context.";}void 0===B.getShaderPrecisionFormat&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,
rangeMax:1,precision:1}});v.addEventListener("webglcontextlost",d,!1)}catch(Uf){console.error("THREE.WebGLRenderer: "+Uf)}var ja=new Sf(B);ja.get("WEBGL_depth_texture");ja.get("OES_texture_float");ja.get("OES_texture_float_linear");ja.get("OES_texture_half_float");ja.get("OES_texture_half_float_linear");ja.get("OES_standard_derivatives");ja.get("ANGLE_instanced_arrays");ja.get("OES_element_index_uint")&&(G.MaxIndex=4294967296);var la=new Rf(B,ja,a),Y=new Qf(B,ja,u),ha=new Pf,ta=new Of(B,ja,Y,ha,la,
u,this.info),ra=new Nf(B,ha,this.info),xa=new Lf(this,la),ya=new Df;this.info.programs=xa.programs;var La=new Cf(B,ja,pa),Na=new Bf(B,ja,pa),Oa=new Kb(-1,1,1,-1,0,1),Ba=new Ga,Da=new za(new kb(2,2),new Ka({depthTest:!1,depthWrite:!1,fog:!1}));a=Ib.cube;var wa=new za(new jb(5,5,5),new Ia({uniforms:a.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1}));b();this.context=B;this.capabilities=la;this.extensions=ja;this.properties=ha;this.state=
Y;var Ma=new Ie(this,aa,ra,la);this.shadowMap=Ma;var Pa=new yf(this,O),Qa=new xf(this,R);this.getContext=function(){return B};this.getContextAttributes=function(){return B.getContextAttributes()};this.forceContextLoss=function(){ja.get("WEBGL_lose_context").loseContext()};this.getMaxAnisotropy=function(){return la.getMaxAnisotropy()};this.getPrecision=function(){return la.precision};this.getPixelRatio=function(){return Ra};this.setPixelRatio=function(a){void 0!==a&&(Ra=a,this.setSize(ia.z,ia.w,!1))};
this.getSize=function(){return{width:od,height:Ec}};this.setSize=function(a,b,c){od=a;Ec=b;v.width=a*Ra;v.height=b*Ra;!1!==c&&(v.style.width=a+"px",v.style.height=b+"px");this.setViewport(0,0,a,b)};this.setViewport=function(a,b,c,d){Y.viewport(ia.set(a,b,c,d))};this.setScissor=function(a,b,c,d){Y.scissor(ga.set(a,b,c,d))};this.setScissorTest=function(a){Y.setScissorTest(ka=a)};this.getClearColor=function(){return Fa};this.setClearColor=function(a,b){Fa.set(a);hb=void 0!==b?b:1;Y.buffers.color.setClear(Fa.r,
Fa.g,Fa.b,hb,J)};this.getClearAlpha=function(){return hb};this.setClearAlpha=function(a){hb=a;Y.buffers.color.setClear(Fa.r,Fa.g,Fa.b,hb,J)};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=B.COLOR_BUFFER_BIT;if(void 0===b||b)d|=B.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=B.STENCIL_BUFFER_BIT;B.clear(d)};this.clearColor=function(){this.clear(!0,!1,!1)};this.clearDepth=function(){this.clear(!1,!0,!1)};this.clearStencil=function(){this.clear(!1,!1,!0)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);
this.clear(b,c,d)};this.resetGLState=c;this.dispose=function(){A=[];I=-1;w=[];E=-1;v.removeEventListener("webglcontextlost",d,!1)};this.renderBufferImmediate=function(a,b,c){Y.initAttributes();var d=ha.get(a);a.hasPositions&&!d.position&&(d.position=B.createBuffer());a.hasNormals&&!d.normal&&(d.normal=B.createBuffer());a.hasUvs&&!d.uv&&(d.uv=B.createBuffer());a.hasColors&&!d.color&&(d.color=B.createBuffer());b=b.getAttributes();a.hasPositions&&(B.bindBuffer(B.ARRAY_BUFFER,d.position),B.bufferData(B.ARRAY_BUFFER,
a.positionArray,B.DYNAMIC_DRAW),Y.enableAttribute(b.position),B.vertexAttribPointer(b.position,3,B.FLOAT,!1,0,0));if(a.hasNormals){B.bindBuffer(B.ARRAY_BUFFER,d.normal);if(!c.isMeshPhongMaterial&&!c.isMeshStandardMaterial&&!c.isMeshNormalMaterial&&1===c.shading)for(var e=0,f=3*a.count;e<f;e+=9){var g=a.normalArray,h=(g[e+0]+g[e+3]+g[e+6])/3,k=(g[e+1]+g[e+4]+g[e+7])/3,m=(g[e+2]+g[e+5]+g[e+8])/3;g[e+0]=h;g[e+1]=k;g[e+2]=m;g[e+3]=h;g[e+4]=k;g[e+5]=m;g[e+6]=h;g[e+7]=k;g[e+8]=m}B.bufferData(B.ARRAY_BUFFER,
a.normalArray,B.DYNAMIC_DRAW);Y.enableAttribute(b.normal);B.vertexAttribPointer(b.normal,3,B.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(B.bindBuffer(B.ARRAY_BUFFER,d.uv),B.bufferData(B.ARRAY_BUFFER,a.uvArray,B.DYNAMIC_DRAW),Y.enableAttribute(b.uv),B.vertexAttribPointer(b.uv,2,B.FLOAT,!1,0,0));a.hasColors&&0!==c.vertexColors&&(B.bindBuffer(B.ARRAY_BUFFER,d.color),B.bufferData(B.ARRAY_BUFFER,a.colorArray,B.DYNAMIC_DRAW),Y.enableAttribute(b.color),B.vertexAttribPointer(b.color,3,B.FLOAT,!1,0,0));Y.disableUnusedAttributes();
B.drawArrays(B.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,f){t(d);var h=l(a,b,d,e),k=!1;a=c.id+"_"+h.id+"_"+d.wireframe;a!==X&&(X=a,k=!0);b=e.morphTargetInfluences;if(void 0!==b){var m=[];a=0;for(var n=b.length;a<n;a++)k=b[a],m.push([k,a]);m.sort(g);8<m.length&&(m.length=8);var p=c.morphAttributes;a=0;for(n=m.length;a<n;a++)k=m[a],N[a]=k[0],0!==k[0]?(b=k[1],!0===d.morphTargets&&p.position&&c.addAttribute("morphTarget"+a,p.position[b]),!0===d.morphNormals&&p.normal&&
c.addAttribute("morphNormal"+a,p.normal[b])):(!0===d.morphTargets&&c.removeAttribute("morphTarget"+a),!0===d.morphNormals&&c.removeAttribute("morphNormal"+a));a=m.length;for(b=N.length;a<b;a++)N[a]=0;h.getUniforms().setValue(B,"morphTargetInfluences",N);k=!0}b=c.index;n=c.attributes.position;m=1;!0===d.wireframe&&(b=ra.getWireframeAttribute(c),m=2);null!==b?(a=Na,a.setIndex(b)):a=La;if(k){a:{var k=void 0,z;if(c&&c.isInstancedBufferGeometry&&(z=ja.get("ANGLE_instanced_arrays"),null===z)){console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
break a}void 0===k&&(k=0);Y.initAttributes();var p=c.attributes,h=h.getAttributes(),r=d.defaultAttributeValues,q;for(q in h){var v=h[q];if(0<=v){var u=p[q];if(void 0!==u){var y=u.normalized,x=u.itemSize,C=ra.getAttributeProperties(u),Q=C.__webglBuffer,J=C.type,C=C.bytesPerElement;if(u.isInterleavedBufferAttribute){var L=u.data,D=L.stride,u=u.offset;L&&L.isInstancedInterleavedBuffer?(Y.enableAttributeAndDivisor(v,L.meshPerAttribute,z),void 0===c.maxInstancedCount&&(c.maxInstancedCount=L.meshPerAttribute*
L.count)):Y.enableAttribute(v);B.bindBuffer(B.ARRAY_BUFFER,Q);B.vertexAttribPointer(v,x,J,y,D*C,(k*D+u)*C)}else u.isInstancedBufferAttribute?(Y.enableAttributeAndDivisor(v,u.meshPerAttribute,z),void 0===c.maxInstancedCount&&(c.maxInstancedCount=u.meshPerAttribute*u.count)):Y.enableAttribute(v),B.bindBuffer(B.ARRAY_BUFFER,Q),B.vertexAttribPointer(v,x,J,y,0,k*x*C)}else if(void 0!==r&&(y=r[q],void 0!==y))switch(y.length){case 2:B.vertexAttrib2fv(v,y);break;case 3:B.vertexAttrib3fv(v,y);break;case 4:B.vertexAttrib4fv(v,
y);break;default:B.vertexAttrib1fv(v,y)}}}Y.disableUnusedAttributes()}null!==b&&B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,ra.getAttributeBuffer(b))}z=0;null!==b?z=b.count:void 0!==n&&(z=n.count);b=c.drawRange.start*m;n=null!==f?f.start*m:0;q=Math.max(b,n);f=Math.max(0,Math.min(z,b+c.drawRange.count*m,n+(null!==f?f.count*m:Infinity))-1-q+1);if(0!==f){if(e.isMesh)if(!0===d.wireframe)Y.setLineWidth(d.wireframeLinewidth*(null===W?Ra:1)),a.setMode(B.LINES);else switch(e.drawMode){case 0:a.setMode(B.TRIANGLES);
break;case 1:a.setMode(B.TRIANGLE_STRIP);break;case 2:a.setMode(B.TRIANGLE_FAN)}else e.isLine?(d=d.linewidth,void 0===d&&(d=1),Y.setLineWidth(d*(null===W?Ra:1)),e.isLineSegments?a.setMode(B.LINES):a.setMode(B.LINE_STRIP)):e.isPoints&&a.setMode(B.POINTS);c&&c.isInstancedBufferGeometry?0<c.maxInstancedCount&&a.renderInstances(c,q,f):a.render(q,f)}};this.render=function(a,b,c,d){if(void 0!==b&&!0!==b.isCamera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{X=
"";K=-1;V=null;!0===a.autoUpdate&&a.updateMatrixWorld();null===b.parent&&b.updateMatrixWorld();b.matrixWorldInverse.getInverse(b.matrixWorld);ua.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);ma.setFromMatrix(ua);T.length=0;I=E=-1;O.length=0;R.length=0;sa=this.localClippingEnabled;oa=Z.init(this.clippingPlanes,sa,b);p(a,b);w.length=E+1;A.length=I+1;!0===S.sortObjects&&(w.sort(h),A.sort(m));oa&&Z.beginShadows();for(var e=T,f=0,g=0,k=e.length;g<k;g++){var z=e[g];z.castShadow&&(aa.shadows[f++]=
z)}aa.shadows.length=f;Ma.render(a,b);for(var e=T,t=z=0,l=0,r,H,v,q,u=b.matrixWorldInverse,y=0,x=0,C=0,Q=0,L=0,f=0,g=e.length;f<g;f++)if(k=e[f],r=k.color,H=k.intensity,v=k.distance,q=k.shadow&&k.shadow.map?k.shadow.map.texture:null,k.isAmbientLight)z+=r.r*H,t+=r.g*H,l+=r.b*H;else if(k.isDirectionalLight){var D=ya.get(k);D.color.copy(k.color).multiplyScalar(k.intensity);D.direction.setFromMatrixPosition(k.matrixWorld);Ha.setFromMatrixPosition(k.target.matrixWorld);D.direction.sub(Ha);D.direction.transformDirection(u);
if(D.shadow=k.castShadow)D.shadowBias=k.shadow.bias,D.shadowRadius=k.shadow.radius,D.shadowMapSize=k.shadow.mapSize;aa.directionalShadowMap[y]=q;aa.directionalShadowMatrix[y]=k.shadow.matrix;aa.directional[y++]=D}else if(k.isSpotLight){D=ya.get(k);D.position.setFromMatrixPosition(k.matrixWorld);D.position.applyMatrix4(u);D.color.copy(r).multiplyScalar(H);D.distance=v;D.direction.setFromMatrixPosition(k.matrixWorld);Ha.setFromMatrixPosition(k.target.matrixWorld);D.direction.sub(Ha);D.direction.transformDirection(u);
D.coneCos=Math.cos(k.angle);D.penumbraCos=Math.cos(k.angle*(1-k.penumbra));D.decay=0===k.distance?0:k.decay;if(D.shadow=k.castShadow)D.shadowBias=k.shadow.bias,D.shadowRadius=k.shadow.radius,D.shadowMapSize=k.shadow.mapSize;aa.spotShadowMap[C]=q;aa.spotShadowMatrix[C]=k.shadow.matrix;aa.spot[C++]=D}else if(k.isRectAreaLight)D=ya.get(k),D.color.copy(r).multiplyScalar(H/(k.width*k.height)),D.position.setFromMatrixPosition(k.matrixWorld),D.position.applyMatrix4(u),va.identity(),Aa.copy(k.matrixWorld),
Aa.premultiply(u),va.extractRotation(Aa),D.halfWidth.set(.5*k.width,0,0),D.halfHeight.set(0,.5*k.height,0),D.halfWidth.applyMatrix4(va),D.halfHeight.applyMatrix4(va),aa.rectArea[Q++]=D;else if(k.isPointLight){D=ya.get(k);D.position.setFromMatrixPosition(k.matrixWorld);D.position.applyMatrix4(u);D.color.copy(k.color).multiplyScalar(k.intensity);D.distance=k.distance;D.decay=0===k.distance?0:k.decay;if(D.shadow=k.castShadow)D.shadowBias=k.shadow.bias,D.shadowRadius=k.shadow.radius,D.shadowMapSize=k.shadow.mapSize;
aa.pointShadowMap[x]=q;void 0===aa.pointShadowMatrix[x]&&(aa.pointShadowMatrix[x]=new M);Ha.setFromMatrixPosition(k.matrixWorld).negate();aa.pointShadowMatrix[x].identity().setPosition(Ha);aa.point[x++]=D}else k.isHemisphereLight&&(D=ya.get(k),D.direction.setFromMatrixPosition(k.matrixWorld),D.direction.transformDirection(u),D.direction.normalize(),D.skyColor.copy(k.color).multiplyScalar(H),D.groundColor.copy(k.groundColor).multiplyScalar(H),aa.hemi[L++]=D);aa.ambient[0]=z;aa.ambient[1]=t;aa.ambient[2]=
l;aa.directional.length=y;aa.spot.length=C;aa.rectArea.length=Q;aa.point.length=x;aa.hemi.length=L;aa.hash=y+","+x+","+C+","+Q+","+L+","+aa.shadows.length;oa&&Z.endShadows();pa.calls=0;pa.vertices=0;pa.faces=0;pa.points=0;void 0===c&&(c=null);this.setRenderTarget(c);e=a.background;null===e?Y.buffers.color.setClear(Fa.r,Fa.g,Fa.b,hb,J):e&&e.isColor&&(Y.buffers.color.setClear(e.r,e.g,e.b,1,J),d=!0);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);e&&e.isCubeTexture?
(Ba.projectionMatrix.copy(b.projectionMatrix),Ba.matrixWorld.extractRotation(b.matrixWorld),Ba.matrixWorldInverse.getInverse(Ba.matrixWorld),wa.material.uniforms.tCube.value=e,wa.modelViewMatrix.multiplyMatrices(Ba.matrixWorldInverse,wa.matrixWorld),ra.update(wa),S.renderBufferDirect(Ba,null,wa.geometry,wa.material,wa,null)):e&&e.isTexture&&(Da.material.map=e,ra.update(Da),S.renderBufferDirect(Oa,null,Da.geometry,Da.material,Da,null));a.overrideMaterial?(d=a.overrideMaterial,n(w,a,b,d),n(A,a,b,d)):
(Y.setBlending(0),n(w,a,b),n(A,a,b));Pa.render(a,b);Qa.render(a,b,vc);c&&ta.updateRenderTargetMipmap(c);Y.setDepthTest(!0);Y.setDepthWrite(!0);Y.setColorWrite(!0)}};this.setFaceCulling=function(a,b){Y.setCullFace(a);Y.setFlipSided(0===b)};this.allocTextureUnit=function(){var a=da;a>=la.maxTextures&&console.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+la.maxTextures);da+=1;return a};this.setTexture2D=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTarget&&
(a||(console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),a=!0),b=b.texture);ta.setTexture2D(b,c)}}();this.setTexture=function(){var a=!1;return function(b,c){a||(console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),a=!0);ta.setTexture2D(b,c)}}();this.setTextureCube=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTargetCube&&(a||(console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),
a=!0),b=b.texture);b&&b.isCubeTexture||Array.isArray(b.image)&&6===b.image.length?ta.setTextureCube(b,c):ta.setTextureCubeDynamic(b,c)}}();this.getCurrentRenderTarget=function(){return W};this.setRenderTarget=function(a){(W=a)&&void 0===ha.get(a).__webglFramebuffer&&ta.setupRenderTarget(a);var b=a&&a.isWebGLRenderTargetCube,c;a?(c=ha.get(a),c=b?c.__webglFramebuffer[a.activeCubeFace]:c.__webglFramebuffer,ba.copy(a.scissor),Sa=a.scissorTest,vc.copy(a.viewport)):(c=null,ba.copy(ga).multiplyScalar(Ra),
Sa=ka,vc.copy(ia).multiplyScalar(Ra));U!==c&&(B.bindFramebuffer(B.FRAMEBUFFER,c),U=c);Y.scissor(ba);Y.setScissorTest(Sa);Y.viewport(vc);b&&(b=ha.get(a.texture),B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+a.activeCubeFace,b.__webglTexture,a.activeMipMapLevel))};this.readRenderTargetPixels=function(a,b,c,d,e,f){if(!1===(a&&a.isWebGLRenderTarget))console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");else{var g=
ha.get(a).__webglFramebuffer;if(g){var h=!1;g!==U&&(B.bindFramebuffer(B.FRAMEBUFFER,g),h=!0);try{var k=a.texture,m=k.format,n=k.type;1023!==m&&u(m)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)?console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."):1009===n||u(n)===B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)||1015===n&&(ja.get("OES_texture_float")||ja.get("WEBGL_color_buffer_float"))||1016===n&&ja.get("EXT_color_buffer_half_float")?
B.checkFramebufferStatus(B.FRAMEBUFFER)===B.FRAMEBUFFER_COMPLETE?0<=b&&b<=a.width-d&&0<=c&&c<=a.height-e&&B.readPixels(b,c,d,e,u(m),u(n),f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."):console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")}finally{h&&B.bindFramebuffer(B.FRAMEBUFFER,U)}}}}}function Lb(a,b){this.name="";this.color=new F(a);this.density=
void 0!==b?b:2.5E-4}function Mb(a,b,c){this.name="";this.color=new F(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3}function lb(){A.call(this);this.type="Scene";this.overrideMaterial=this.fog=this.background=null;this.autoUpdate=!0}function Yd(a,b,c,d,e){A.call(this);this.lensFlares=[];this.positionScreen=new q;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)}function mb(a){X.call(this);this.type="SpriteMaterial";this.color=new F(16777215);this.map=null;this.rotation=0;this.lights=
this.fog=!1;this.setValues(a)}function Fc(a){A.call(this);this.type="Sprite";this.material=void 0!==a?a:new mb}function Gc(){A.call(this);this.type="LOD";Object.defineProperties(this,{levels:{enumerable:!0,value:[]}})}function qd(a,b,c){this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new M;a=a||[];this.bones=a.slice(0);this.useVertexTexture?(a=Math.sqrt(4*this.bones.length),a=P.nextPowerOfTwo(Math.ceil(a)),this.boneTextureHeight=this.boneTextureWidth=a=Math.max(a,4),this.boneMatrices=new Float32Array(this.boneTextureWidth*
this.boneTextureHeight*4),this.boneTexture=new fb(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,1023,1015)):this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton bonInverses is the wrong length."),this.boneInverses=[],b=0,a=this.bones.length;b<a;b++)this.boneInverses.push(new M)}function rd(){A.call(this);this.type="Bone"}function sd(a,
b,c){za.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new M;this.bindMatrixInverse=new M;a=[];if(this.geometry&&void 0!==this.geometry.bones){for(var d,e=0,f=this.geometry.bones.length;e<f;++e)d=this.geometry.bones[e],b=new rd,a.push(b),b.name=d.name,b.position.fromArray(d.pos),b.quaternion.fromArray(d.rotq),void 0!==d.scl&&b.scale.fromArray(d.scl);e=0;for(f=this.geometry.bones.length;e<f;++e)d=this.geometry.bones[e],-1!==d.parent&&null!==d.parent&&void 0!==a[d.parent]?
a[d.parent].add(a[e]):this.add(a[e])}this.normalizeSkinWeights();this.updateMatrixWorld(!0);this.bind(new qd(a,void 0,c),this.matrixWorld)}function ia(a){X.call(this);this.type="LineBasicMaterial";this.color=new F(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.lights=!1;this.setValues(a)}function Wa(a,b,c){if(1===c)return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),new ga(a,b);A.call(this);this.type="Line";this.geometry=
void 0!==a?a:new G;this.material=void 0!==b?b:new ia({color:16777215*Math.random()})}function ga(a,b){Wa.call(this,a,b);this.type="LineSegments"}function Na(a){X.call(this);this.type="PointsMaterial";this.color=new F(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.lights=!1;this.setValues(a)}function Nb(a,b){A.call(this);this.type="Points";this.geometry=void 0!==a?a:new G;this.material=void 0!==b?b:new Na({color:16777215*Math.random()})}function Hc(){A.call(this);this.type="Group"}
function td(a,b,c,d,e,f,g,h,m){function k(){requestAnimationFrame(k);a.readyState>=a.HAVE_CURRENT_DATA&&(z.needsUpdate=!0)}da.call(this,a,b,c,d,e,f,g,h,m);this.generateMipmaps=!1;var z=this;k()}function Ob(a,b,c,d,e,f,g,h,m,k,z,p){da.call(this,null,f,g,h,m,k,d,e,z,p);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1}function ud(a,b,c,d,e,f,g,h,m){da.call(this,a,b,c,d,e,f,g,h,m);this.needsUpdate=!0}function Ic(a,b,c,d,e,f,g,h,m,k){k=void 0!==k?k:1026;if(1026!==k&&1027!==
k)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===c&&1026===k&&(c=1012);void 0===c&&1027===k&&(c=1020);da.call(this,null,d,e,f,g,h,k,c,m);this.image={width:a,height:b};this.magFilter=void 0!==g?g:1003;this.minFilter=void 0!==h?h:1003;this.generateMipmaps=this.flipY=!1}function Pb(a){function b(a,b){return a-b}G.call(this);var c=[0,0],d={},e=["a","b","c"];if(a&&a.isGeometry){var f=a.vertices,g=a.faces,h=0,m=new Uint32Array(6*g.length);a=0;for(var k=
g.length;a<k;a++)for(var z=g[a],p=0;3>p;p++){c[0]=z[e[p]];c[1]=z[e[(p+1)%3]];c.sort(b);var n=c.toString();void 0===d[n]&&(m[2*h]=c[0],m[2*h+1]=c[1],d[n]=!0,h++)}c=new Float32Array(6*h);a=0;for(k=h;a<k;a++)for(p=0;2>p;p++)d=f[m[2*a+p]],h=6*a+3*p,c[h+0]=d.x,c[h+1]=d.y,c[h+2]=d.z;this.addAttribute("position",new w(c,3))}else if(a&&a.isBufferGeometry){if(null!==a.index){k=a.index.array;f=a.attributes.position;e=a.groups;h=0;0===e.length&&a.addGroup(0,k.length);m=new Uint32Array(2*k.length);g=0;for(z=
e.length;g<z;++g){a=e[g];p=a.start;n=a.count;a=p;for(var t=p+n;a<t;a+=3)for(p=0;3>p;p++)c[0]=k[a+p],c[1]=k[a+(p+1)%3],c.sort(b),n=c.toString(),void 0===d[n]&&(m[2*h]=c[0],m[2*h+1]=c[1],d[n]=!0,h++)}c=new Float32Array(6*h);a=0;for(k=h;a<k;a++)for(p=0;2>p;p++)h=6*a+3*p,d=m[2*a+p],c[h+0]=f.getX(d),c[h+1]=f.getY(d),c[h+2]=f.getZ(d)}else for(f=a.attributes.position.array,h=f.length/3,m=h/3,c=new Float32Array(6*h),a=0,k=m;a<k;a++)for(p=0;3>p;p++)h=18*a+6*p,m=9*a+3*p,c[h+0]=f[m],c[h+1]=f[m+1],c[h+2]=f[m+
2],d=9*a+(p+1)%3*3,c[h+3]=f[d],c[h+4]=f[d+1],c[h+5]=f[d+2];this.addAttribute("position",new w(c,3))}}function Jc(a,b,c){I.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};this.fromBufferGeometry(new Qb(a,b,c));this.mergeVertices()}function Qb(a,b,c){G.call(this);this.type="ParametricBufferGeometry";this.parameters={func:a,slices:b,stacks:c};var d=[],e=[],f,g,h,m,k,z=b+1;for(f=0;f<=c;f++)for(k=f/c,g=0;g<=b;g++)m=g/b,h=a(m,k),d.push(h.x,h.y,h.z),e.push(m,k);a=[];
var p;for(f=0;f<c;f++)for(g=0;g<b;g++)h=f*z+g,m=f*z+g+1,k=(f+1)*z+g+1,p=(f+1)*z+g,a.push(h,m,p),a.push(m,k,p);this.setIndex(new (65535<a.length?Va:Ua)(a,1));this.addAttribute("position",new V(d,3));this.addAttribute("uv",new V(e,2));this.computeVertexNormals()}function Kc(a,b,c,d){I.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};this.fromBufferGeometry(new Aa(a,b,c,d));this.mergeVertices()}function Aa(a,b,c,d){function e(a){h.push(a.x,a.y,a.z)}function f(b,
c){var d=3*b;c.x=a[d+0];c.y=a[d+1];c.z=a[d+2]}function g(a,b,c,d){0>d&&1===a.x&&(m[b]=a.x-1);0===c.x&&0===c.z&&(m[b]=d/2/Math.PI+.5)}G.call(this);this.type="PolyhedronBufferGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;var h=[],m=[];(function(a){for(var c=new q,d=new q,g=new q,h=0;h<b.length;h+=3){f(b[h+0],c);f(b[h+1],d);f(b[h+2],g);var m=c,l=d,x=g,u=Math.pow(2,a),v=[],L,y;for(L=0;L<=u;L++){v[L]=[];var D=m.clone().lerp(x,L/u),Q=l.clone().lerp(x,L/u),C=u-L;for(y=0;y<=C;y++)v[L][y]=
0===y&&L===u?D:D.clone().lerp(Q,y/C)}for(L=0;L<u;L++)for(y=0;y<2*(u-L)-1;y++)m=Math.floor(y/2),0===y%2?(e(v[L][m+1]),e(v[L+1][m]),e(v[L][m])):(e(v[L][m+1]),e(v[L+1][m+1]),e(v[L+1][m]))}})(d||0);(function(a){for(var b=new q,c=0;c<h.length;c+=3)b.x=h[c+0],b.y=h[c+1],b.z=h[c+2],b.normalize().multiplyScalar(a),h[c+0]=b.x,h[c+1]=b.y,h[c+2]=b.z})(c);(function(){for(var a=new q,b=0;b<h.length;b+=3)a.x=h[b+0],a.y=h[b+1],a.z=h[b+2],m.push(Math.atan2(a.z,-a.x)/2/Math.PI+.5,1-(Math.atan2(-a.y,Math.sqrt(a.x*
a.x+a.z*a.z))/Math.PI+.5));for(var a=new q,b=new q,c=new q,d=new q,e=new E,f=new E,l=new E,x=0,u=0;x<h.length;x+=9,u+=6){a.set(h[x+0],h[x+1],h[x+2]);b.set(h[x+3],h[x+4],h[x+5]);c.set(h[x+6],h[x+7],h[x+8]);e.set(m[u+0],m[u+1]);f.set(m[u+2],m[u+3]);l.set(m[u+4],m[u+5]);d.copy(a).add(b).add(c).divideScalar(3);var v=Math.atan2(d.z,-d.x);g(e,u+0,a,v);g(f,u+2,b,v);g(l,u+4,c,v)}for(a=0;a<m.length;a+=6)b=m[a+0],c=m[a+2],d=m[a+4],e=Math.min(b,c,d),.9<Math.max(b,c,d)&&.1>e&&(.2>b&&(m[a+0]+=1),.2>c&&(m[a+2]+=
1),.2>d&&(m[a+4]+=1))})();this.addAttribute("position",new V(h,3));this.addAttribute("normal",new V(h.slice(),3));this.addAttribute("uv",new V(m,2));this.normalizeNormals();this.boundingSphere=new Ea(new q,c)}function Lc(a,b){I.call(this);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Rb(a,b));this.mergeVertices()}function Rb(a,b){Aa.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronBufferGeometry";this.parameters=
{radius:a,detail:b}}function Mc(a,b){I.call(this);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new nb(a,b));this.mergeVertices()}function nb(a,b){Aa.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Nc(a,b){I.call(this);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Sb(a,
b));this.mergeVertices()}function Sb(a,b){var c=(1+Math.sqrt(5))/2;Aa.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Oc(a,b){I.call(this);this.type="DodecahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Tb(a,
b));this.mergeVertices()}function Tb(a,b){var c=(1+Math.sqrt(5))/2,d=1/c;Aa.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,
b);this.type="DodecahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Pc(a,b,c,d,e,f){I.call(this);this.type="TubeGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};void 0!==f&&console.warn("THREE.TubeGeometry: taper has been removed.");a=new Ub(a,b,c,d,e);this.tangents=a.tangents;this.normals=a.normals;this.binormals=a.binormals;this.fromBufferGeometry(a);this.mergeVertices()}function Ub(a,b,c,d,e){function f(e){var f=a.getPointAt(e/b),k=g.normals[e];
e=g.binormals[e];for(p=0;p<=d;p++){var z=p/d*Math.PI*2,l=Math.sin(z),z=-Math.cos(z);m.x=z*k.x+l*e.x;m.y=z*k.y+l*e.y;m.z=z*k.z+l*e.z;m.normalize();t.push(m.x,m.y,m.z);h.x=f.x+c*m.x;h.y=f.y+c*m.y;h.z=f.z+c*m.z;n.push(h.x,h.y,h.z)}}G.call(this);this.type="TubeBufferGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;var g=a.computeFrenetFrames(b,e);this.tangents=g.tangents;this.normals=g.normals;this.binormals=g.binormals;var h=new q,
m=new q,k=new E,z,p,n=[],t=[],l=[],r=[];for(z=0;z<b;z++)f(z);f(!1===e?b:0);for(z=0;z<=b;z++)for(p=0;p<=d;p++)k.x=z/b,k.y=p/d,l.push(k.x,k.y);(function(){for(p=1;p<=b;p++)for(z=1;z<=d;z++){var a=(d+1)*p+(z-1),c=(d+1)*p+z,e=(d+1)*(p-1)+z;r.push((d+1)*(p-1)+(z-1),a,e);r.push(a,c,e)}})();this.setIndex(new (65535<r.length?Va:Ua)(r,1));this.addAttribute("position",new V(n,3));this.addAttribute("normal",new V(t,3));this.addAttribute("uv",new V(l,2))}function Qc(a,b,c,d,e,f,g){I.call(this);this.type="TorusKnotGeometry";
this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};void 0!==g&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");this.fromBufferGeometry(new Vb(a,b,c,d,e,f));this.mergeVertices()}function Vb(a,b,c,d,e,f){function g(a,b,c,d,e){var f=Math.sin(a);b=c/b*a;c=Math.cos(b);e.x=d*(2+c)*.5*Math.cos(a);e.y=d*(2+c)*f*.5;e.z=d*Math.sin(b)*.5}G.call(this);this.type="TorusKnotBufferGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,
radialSegments:d,p:e,q:f};a=a||100;b=b||40;c=Math.floor(c)||64;d=Math.floor(d)||8;e=e||2;f=f||3;var h=(d+1)*(c+1),m=d*c*6,m=new w(new (65535<m?Uint32Array:Uint16Array)(m),1),k=new w(new Float32Array(3*h),3),z=new w(new Float32Array(3*h),3),h=new w(new Float32Array(2*h),2),p,n,l=0,H=0,r=new q,x=new q,u=new E,v=new q,L=new q,y=new q,D=new q,Q=new q;for(p=0;p<=c;++p)for(n=p/c*e*Math.PI*2,g(n,e,f,a,v),g(n+.01,e,f,a,L),D.subVectors(L,v),Q.addVectors(L,v),y.crossVectors(D,Q),Q.crossVectors(y,D),y.normalize(),
Q.normalize(),n=0;n<=d;++n){var C=n/d*Math.PI*2,J=-b*Math.cos(C),C=b*Math.sin(C);r.x=v.x+(J*Q.x+C*y.x);r.y=v.y+(J*Q.y+C*y.y);r.z=v.z+(J*Q.z+C*y.z);k.setXYZ(l,r.x,r.y,r.z);x.subVectors(r,v).normalize();z.setXYZ(l,x.x,x.y,x.z);u.x=p/c;u.y=n/d;h.setXY(l,u.x,u.y);l++}for(n=1;n<=c;n++)for(p=1;p<=d;p++)a=(d+1)*n+(p-1),b=(d+1)*n+p,e=(d+1)*(n-1)+p,m.setX(H,(d+1)*(n-1)+(p-1)),H++,m.setX(H,a),H++,m.setX(H,e),H++,m.setX(H,a),H++,m.setX(H,b),H++,m.setX(H,e),H++;this.setIndex(m);this.addAttribute("position",k);
this.addAttribute("normal",z);this.addAttribute("uv",h)}function Rc(a,b,c,d,e){I.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};this.fromBufferGeometry(new Wb(a,b,c,d,e))}function Wb(a,b,c,d,e){G.call(this);this.type="TorusBufferGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||100;b=b||40;c=Math.floor(c)||8;d=Math.floor(d)||6;e=e||2*Math.PI;var f=(c+1)*(d+1),g=c*d*6,g=new (65535<g?Uint32Array:
Uint16Array)(g),h=new Float32Array(3*f),m=new Float32Array(3*f),f=new Float32Array(2*f),k=0,z=0,p=0,n=new q,l=new q,H=new q,r,x;for(r=0;r<=c;r++)for(x=0;x<=d;x++){var u=x/d*e,v=r/c*Math.PI*2;l.x=(a+b*Math.cos(v))*Math.cos(u);l.y=(a+b*Math.cos(v))*Math.sin(u);l.z=b*Math.sin(v);h[k]=l.x;h[k+1]=l.y;h[k+2]=l.z;n.x=a*Math.cos(u);n.y=a*Math.sin(u);H.subVectors(l,n).normalize();m[k]=H.x;m[k+1]=H.y;m[k+2]=H.z;f[z]=x/d;f[z+1]=r/c;k+=3;z+=2}for(r=1;r<=c;r++)for(x=1;x<=d;x++)a=(d+1)*(r-1)+x-1,b=(d+1)*(r-1)+
x,e=(d+1)*r+x,g[p]=(d+1)*r+x-1,g[p+1]=a,g[p+2]=e,g[p+3]=a,g[p+4]=b,g[p+5]=e,p+=6;this.setIndex(new w(g,1));this.addAttribute("position",new w(h,3));this.addAttribute("normal",new w(m,3));this.addAttribute("uv",new w(f,2))}function La(a,b){"undefined"!==typeof a&&(I.call(this),this.type="ExtrudeGeometry",a=Array.isArray(a)?a:[a],this.addShapeList(a,b),this.computeFaceNormals())}function Sc(a,b){b=b||{};var c=b.font;if(!1===(c&&c.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),
new I;c=c.generateShapes(a,b.size,b.curveSegments);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);La.call(this,c,b);this.type="TextGeometry"}function Tc(a,b,c,d,e,f,g){I.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};this.fromBufferGeometry(new ob(a,b,c,d,e,f,g))}function ob(a,
b,c,d,e,f,g){G.call(this);this.type="SphereBufferGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||50;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;for(var h=f+g,m=(b+1)*(c+1),k=new w(new Float32Array(3*m),3),z=new w(new Float32Array(3*m),3),m=new w(new Float32Array(2*m),2),p=0,n=[],l=new q,H=0;H<=c;H++){for(var r=[],x=H/c,u=0;u<=
b;u++){var v=u/b,L=-a*Math.cos(d+v*e)*Math.sin(f+x*g),y=a*Math.cos(f+x*g),D=a*Math.sin(d+v*e)*Math.sin(f+x*g);l.set(L,y,D).normalize();k.setXYZ(p,L,y,D);z.setXYZ(p,l.x,l.y,l.z);m.setXY(p,v,1-x);r.push(p);p++}n.push(r)}d=[];for(H=0;H<c;H++)for(u=0;u<b;u++)e=n[H][u+1],g=n[H][u],p=n[H+1][u],l=n[H+1][u+1],(0!==H||0<f)&&d.push(e,g,l),(H!==c-1||h<Math.PI)&&d.push(g,p,l);this.setIndex(new (65535<k.count?Va:Ua)(d,1));this.addAttribute("position",k);this.addAttribute("normal",z);this.addAttribute("uv",m);
this.boundingSphere=new Ea(new q,a)}function Uc(a,b,c,d,e,f){I.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};this.fromBufferGeometry(new Xb(a,b,c,d,e,f))}function Xb(a,b,c,d,e,f){G.call(this);this.type="RingBufferGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||20;b=b||50;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,
c):8;d=void 0!==d?Math.max(1,d):1;var g=(c+1)*(d+1),h=c*d*6,h=new w(new (65535<h?Uint32Array:Uint16Array)(h),1),m=new w(new Float32Array(3*g),3),k=new w(new Float32Array(3*g),3),g=new w(new Float32Array(2*g),2),z=0,p=0,n,l=a,H=(b-a)/d,r=new q,x=new E,u;for(a=0;a<=d;a++){for(u=0;u<=c;u++)n=e+u/c*f,r.x=l*Math.cos(n),r.y=l*Math.sin(n),m.setXYZ(z,r.x,r.y,r.z),k.setXYZ(z,0,0,1),x.x=(r.x/b+1)/2,x.y=(r.y/b+1)/2,g.setXY(z,x.x,x.y),z++;l+=H}for(a=0;a<d;a++)for(b=a*(c+1),u=0;u<c;u++)e=n=u+b,f=n+c+1,z=n+c+2,
n+=1,h.setX(p,e),p++,h.setX(p,f),p++,h.setX(p,z),p++,h.setX(p,e),p++,h.setX(p,z),p++,h.setX(p,n),p++;this.setIndex(h);this.addAttribute("position",m);this.addAttribute("normal",k);this.addAttribute("uv",g)}function Vc(a,b,c,d){I.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};this.fromBufferGeometry(new Yb(a,b,c,d));this.mergeVertices()}function Yb(a,b,c,d){G.call(this);this.type="LatheBufferGeometry";this.parameters={points:a,segments:b,phiStart:c,
phiLength:d};b=Math.floor(b)||12;c=c||0;d=d||2*Math.PI;d=P.clamp(d,0,2*Math.PI);for(var e=(b+1)*a.length,f=b*a.length*6,g=new w(new (65535<f?Uint32Array:Uint16Array)(f),1),h=new w(new Float32Array(3*e),3),m=new w(new Float32Array(2*e),2),k=0,z=0,p=1/b,n=new q,l=new E,e=0;e<=b;e++)for(var f=c+e*p*d,H=Math.sin(f),r=Math.cos(f),f=0;f<=a.length-1;f++)n.x=a[f].x*H,n.y=a[f].y,n.z=a[f].x*r,h.setXYZ(k,n.x,n.y,n.z),l.x=e/b,l.y=f/(a.length-1),m.setXY(k,l.x,l.y),k++;for(e=0;e<b;e++)for(f=0;f<a.length-1;f++)c=
f+e*a.length,k=c+a.length,p=c+a.length+1,n=c+1,g.setX(z,c),z++,g.setX(z,k),z++,g.setX(z,n),z++,g.setX(z,k),z++,g.setX(z,p),z++,g.setX(z,n),z++;this.setIndex(g);this.addAttribute("position",h);this.addAttribute("uv",m);this.computeVertexNormals();if(d===2*Math.PI)for(d=this.attributes.normal.array,g=new q,h=new q,m=new q,c=b*a.length*3,f=e=0;e<a.length;e++,f+=3)g.x=d[f+0],g.y=d[f+1],g.z=d[f+2],h.x=d[c+f+0],h.y=d[c+f+1],h.z=d[c+f+2],m.addVectors(g,h).normalize(),d[f+0]=d[c+f+0]=m.x,d[f+1]=d[c+f+1]=
m.y,d[f+2]=d[c+f+2]=m.z}function Zb(a,b){I.call(this);this.type="ShapeGeometry";"object"===typeof b&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),b=b.curveSegments);this.parameters={shapes:a,curveSegments:b};this.fromBufferGeometry(new $b(a,b));this.mergeVertices()}function $b(a,b){function c(a){var c,h,k=d.length/3;a=a.extractPoints(b);var l=a.shape,r=a.holes;if(!1===Oa.isClockWise(l))for(l=l.reverse(),a=0,c=r.length;a<c;a++)h=r[a],!0===Oa.isClockWise(h)&&(r[a]=h.reverse());
var q=Oa.triangulateShape(l,r);a=0;for(c=r.length;a<c;a++)h=r[a],l=l.concat(h);a=0;for(c=l.length;a<c;a++)h=l[a],d.push(h.x,h.y,0),e.push(0,0,1),f.push(h.x,h.y);a=0;for(c=q.length;a<c;a++)l=q[a],g.push(l[0]+k,l[1]+k,l[2]+k),m+=3}G.call(this);this.type="ShapeBufferGeometry";this.parameters={shapes:a,curveSegments:b};b=b||12;var d=[],e=[],f=[],g=[],h=0,m=0;if(!1===Array.isArray(a))c(a);else for(var k=0;k<a.length;k++)c(a[k]),this.addGroup(h,m,k),h+=m,m=0;this.setIndex(new (65535<g.length?Va:Ua)(g,1));
this.addAttribute("position",new V(d,3));this.addAttribute("normal",new V(e,3));this.addAttribute("uv",new V(f,2))}function ac(a,b){function c(a,b){return a-b}G.call(this);var d=Math.cos(P.DEG2RAD*(void 0!==b?b:1)),e=[0,0],f={},g=["a","b","c"],h;a.isBufferGeometry?(h=new I,h.fromBufferGeometry(a)):h=a.clone();h.mergeVertices();h.computeFaceNormals();var m=h.vertices;h=h.faces;for(var k=0,z=h.length;k<z;k++)for(var p=h[k],n=0;3>n;n++){e[0]=p[g[n]];e[1]=p[g[(n+1)%3]];e.sort(c);var l=e.toString();void 0===
f[l]?f[l]={vert1:e[0],vert2:e[1],face1:k,face2:void 0}:f[l].face2=k}e=[];for(l in f)if(g=f[l],void 0===g.face2||h[g.face1].normal.dot(h[g.face2].normal)<=d)k=m[g.vert1],e.push(k.x),e.push(k.y),e.push(k.z),k=m[g.vert2],e.push(k.x),e.push(k.y),e.push(k.z);this.addAttribute("position",new V(e,3))}function pb(a,b,c,d,e,f,g,h){I.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};this.fromBufferGeometry(new Xa(a,
b,c,d,e,f,g,h));this.mergeVertices()}function Xa(a,b,c,d,e,f,g,h){function m(c){var e,f,m,n=new E,p=new q,l=0,z=!0===c?a:b,L=!0===c?1:-1;f=u;for(e=1;e<=d;e++)H.setXYZ(u,0,y*L,0),r.setXYZ(u,0,L,0),n.x=.5,n.y=.5,x.setXY(u,n.x,n.y),u++;m=u;for(e=0;e<=d;e++){var w=e/d*h+g,A=Math.cos(w),w=Math.sin(w);p.x=z*w;p.y=y*L;p.z=z*A;H.setXYZ(u,p.x,p.y,p.z);r.setXYZ(u,0,L,0);n.x=.5*A+.5;n.y=.5*w*L+.5;x.setXY(u,n.x,n.y);u++}for(e=0;e<d;e++)n=f+e,p=m+e,!0===c?(t.setX(v,p),v++,t.setX(v,p+1)):(t.setX(v,p+1),v++,t.setX(v,
p)),v++,t.setX(v,n),v++,l+=3;k.addGroup(D,l,!0===c?1:2);D+=l}G.call(this);this.type="CylinderBufferGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};var k=this;a=void 0!==a?a:20;b=void 0!==b?b:20;c=void 0!==c?c:100;d=Math.floor(d)||8;e=Math.floor(e)||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;h=void 0!==h?h:2*Math.PI;var l=0;!1===f&&(0<a&&l++,0<b&&l++);var p=function(){var a=(d+1)*(e+1);!1===f&&(a+=(d+1)*l+d*l);return a}(),
n=function(){var a=d*e*6;!1===f&&(a+=d*l*3);return a}(),t=new w(new (65535<n?Uint32Array:Uint16Array)(n),1),H=new w(new Float32Array(3*p),3),r=new w(new Float32Array(3*p),3),x=new w(new Float32Array(2*p),2),u=0,v=0,L=[],y=c/2,D=0;(function(){var f,m,n=new q,p=new q,l=0,z=(b-a)/c;for(m=0;m<=e;m++){var w=[],E=m/e,A=E*(b-a)+a;for(f=0;f<=d;f++){var N=f/d,O=N*h+g,R=Math.sin(O),O=Math.cos(O);p.x=A*R;p.y=-E*c+y;p.z=A*O;H.setXYZ(u,p.x,p.y,p.z);n.set(R,z,O).normalize();r.setXYZ(u,n.x,n.y,n.z);x.setXY(u,N,
1-E);w.push(u);u++}L.push(w)}for(f=0;f<d;f++)for(m=0;m<e;m++)n=L[m+1][f],p=L[m+1][f+1],z=L[m][f+1],t.setX(v,L[m][f]),v++,t.setX(v,n),v++,t.setX(v,z),v++,t.setX(v,n),v++,t.setX(v,p),v++,t.setX(v,z),v++,l+=6;k.addGroup(D,l,0);D+=l})();!1===f&&(0<a&&m(!0),0<b&&m(!1));this.setIndex(t);this.addAttribute("position",H);this.addAttribute("normal",r);this.addAttribute("uv",x)}function Wc(a,b,c,d,e,f,g){pb.call(this,0,a,b,c,d,e,f,g);this.type="ConeGeometry";this.parameters={radius:a,height:b,radialSegments:c,
heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function Xc(a,b,c,d,e,f,g){Xa.call(this,0,a,b,c,d,e,f,g);this.type="ConeBufferGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function Yc(a,b,c,d){I.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};this.fromBufferGeometry(new bc(a,b,c,d))}function bc(a,b,c,d){G.call(this);this.type="CircleBufferGeometry";this.parameters=
{radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||50;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e=b+2,f=new Float32Array(3*e),g=new Float32Array(3*e),e=new Float32Array(2*e);g[2]=1;e[0]=.5;e[1]=.5;for(var h=0,m=3,k=2;h<=b;h++,m+=3,k+=2){var l=c+h/b*d;f[m]=a*Math.cos(l);f[m+1]=a*Math.sin(l);g[m+2]=1;e[k]=(f[m]/a+1)/2;e[k+1]=(f[m+1]/a+1)/2}c=[];for(m=1;m<=b;m++)c.push(m,m+1,0);this.setIndex(new w(new Uint16Array(c),1));this.addAttribute("position",new w(f,3));this.addAttribute("normal",
new w(g,3));this.addAttribute("uv",new w(e,2));this.boundingSphere=new Ea(new q,a)}function cc(){Ia.call(this,{uniforms:Ja.merge([U.lights,{opacity:{value:1}}]),vertexShader:ba.shadow_vert,fragmentShader:ba.shadow_frag});this.transparent=this.lights=!0;Object.defineProperties(this,{opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(a){this.uniforms.opacity.value=a}}})}function dc(a){Ia.call(this,a);this.type="RawShaderMaterial"}function Zc(a){this.uuid=P.generateUUID();
this.type="MultiMaterial";this.materials=Array.isArray(a)?a:[];this.visible=!0}function Qa(a){X.call(this);this.defines={STANDARD:""};this.type="MeshStandardMaterial";this.color=new F(16777215);this.metalness=this.roughness=.5;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new F(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new E(1,1);this.displacementMap=null;this.displacementScale=
1;this.displacementBias=0;this.envMap=this.alphaMap=this.metalnessMap=this.roughnessMap=null;this.envMapIntensity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function qb(a){Qa.call(this);this.defines={PHYSICAL:""};this.type="MeshPhysicalMaterial";this.reflectivity=.5;this.clearCoatRoughness=this.clearCoat=0;this.setValues(a)}function Ba(a){X.call(this);
this.type="MeshPhongMaterial";this.color=new F(16777215);this.specular=new F(1118481);this.shininess=30;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new F(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new E(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;
this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function rb(a){Ba.call(this);this.defines={TOON:""};this.type="MeshToonMaterial";this.gradientMap=null;this.setValues(a)}function sb(a){X.call(this,a);this.type="MeshNormalMaterial";this.bumpMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new E(1,1);this.displacementMap=null;this.displacementScale=
1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.lights=this.fog=!1;this.setValues(a)}function tb(a){X.call(this);this.type="MeshLambertMaterial";this.color=new F(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new F(0);this.emissiveIntensity=1;this.envMap=this.alphaMap=this.specularMap=this.emissiveMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=
.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function ub(a){X.call(this);this.type="LineDashedMaterial";this.color=new F(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.lights=!1;this.setValues(a)}function Zd(a,b,c){var d=this,e=!1,f=0,g=0;this.onStart=void 0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){g++;if(!1===e&&
void 0!==d.onStart)d.onStart(a,f,g);e=!0};this.itemEnd=function(a){f++;if(void 0!==d.onProgress)d.onProgress(a,f,g);if(f===g&&(e=!1,void 0!==d.onLoad))d.onLoad()};this.itemError=function(a){if(void 0!==d.onError)d.onError(a)}}function Da(a){this.manager=void 0!==a?a:ta}function Oe(a){this.manager=void 0!==a?a:ta;this._parser=null}function $d(a){this.manager=void 0!==a?a:ta;this._parser=null}function $c(a){this.manager=void 0!==a?a:ta}function ae(a){this.manager=void 0!==a?a:ta}function vd(a){this.manager=
void 0!==a?a:ta}function ma(a,b){A.call(this);this.type="Light";this.color=new F(a);this.intensity=void 0!==b?b:1;this.receiveShadow=void 0}function wd(a,b,c){ma.call(this,a,c);this.type="HemisphereLight";this.castShadow=void 0;this.position.copy(A.DefaultUp);this.updateMatrix();this.groundColor=new F(b)}function vb(a){this.camera=a;this.bias=0;this.radius=1;this.mapSize=new E(512,512);this.map=null;this.matrix=new M}function xd(){vb.call(this,new Ga(50,1,.5,500))}function yd(a,b,c,d,e,f){ma.call(this,
a,b);this.type="SpotLight";this.position.copy(A.DefaultUp);this.updateMatrix();this.target=new A;Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(a){this.intensity=a/Math.PI}});this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.penumbra=void 0!==e?e:0;this.decay=void 0!==f?f:1;this.shadow=new xd}function zd(a,b,c,d){ma.call(this,a,b);this.type="PointLight";Object.defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI},
set:function(a){this.intensity=a/(4*Math.PI)}});this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1;this.shadow=new vb(new Ga(90,1,.5,500))}function Ad(){vb.call(this,new Kb(-5,5,5,-5,.5,500))}function Bd(a,b){ma.call(this,a,b);this.type="DirectionalLight";this.position.copy(A.DefaultUp);this.updateMatrix();this.target=new A;this.shadow=new Ad}function Cd(a,b){ma.call(this,a,b);this.type="AmbientLight";this.castShadow=void 0}function va(a,b,c,d){this.parameterPositions=a;this._cachedIndex=0;this.resultBuffer=
void 0!==d?d:new b.constructor(c);this.sampleValues=b;this.valueSize=c}function Dd(a,b,c,d){va.call(this,a,b,c,d);this._offsetNext=this._weightNext=this._offsetPrev=this._weightPrev=-0}function ad(a,b,c,d){va.call(this,a,b,c,d)}function Ed(a,b,c,d){va.call(this,a,b,c,d)}function wb(a,b,c,d){if(void 0===a)throw Error("track name is undefined");if(void 0===b||0===b.length)throw Error("no keyframes in track named "+a);this.name=a;this.times=na.convertArray(b,this.TimeBufferType);this.values=na.convertArray(c,
this.ValueBufferType);this.setInterpolation(d||this.DefaultInterpolation);this.validate();this.optimize()}function ec(a,b,c,d){wb.call(this,a,b,c,d)}function Fd(a,b,c,d){va.call(this,a,b,c,d)}function bd(a,b,c,d){wb.call(this,a,b,c,d)}function fc(a,b,c,d){wb.call(this,a,b,c,d)}function Gd(a,b,c,d){wb.call(this,a,b,c,d)}function Hd(a,b,c){wb.call(this,a,b,c)}function Id(a,b,c,d){wb.call(this,a,b,c,d)}function xb(a,b,c,d){wb.apply(this,arguments)}function ra(a,b,c){this.name=a;this.tracks=c;this.duration=
void 0!==b?b:-1;this.uuid=P.generateUUID();0>this.duration&&this.resetDuration();this.optimize()}function Jd(a){this.manager=void 0!==a?a:ta;this.textures={}}function be(a){this.manager=void 0!==a?a:ta}function yb(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}}function ce(a){"boolean"===typeof a&&(console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),a=void 0);this.manager=void 0!==a?a:ta;this.withCredentials=!1}
function Pe(a){this.manager=void 0!==a?a:ta;this.texturePath=""}function Qe(a,b,c,d,e){b=.5*(d-b);e=.5*(e-c);var f=a*a;return(2*c-2*d+b+e)*a*f+(-3*c+3*d-2*b-e)*f+b*a+c}function zb(a,b,c,d){var e=1-a;return e*e*b+2*(1-a)*a*c+a*a*d}function Ab(a,b,c,d,e){var f=1-a,g=1-a;return f*f*f*b+3*g*g*a*c+3*(1-a)*a*a*d+a*a*a*e}function ua(){}function Ta(a,b){this.v1=a;this.v2=b}function cd(){this.curves=[];this.autoClose=!1}function Ya(a,b,c,d,e,f,g,h){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=
e;this.aEndAngle=f;this.aClockwise=g;this.aRotation=h||0}function Bb(a){this.points=void 0===a?[]:a}function gc(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d}function hc(a,b,c){this.v0=a;this.v1=b;this.v2=c}function dd(a){cd.call(this);this.currentPoint=new E;a&&this.fromPoints(a)}function Cb(){dd.apply(this,arguments);this.holes=[]}function de(){this.subPaths=[];this.currentPath=null}function ee(a){this.data=a}function Re(a){this.manager=void 0!==a?a:ta}function fe(a){this.manager=void 0!==a?
a:ta}function ge(a,b,c,d){ma.call(this,a,b);this.type="RectAreaLight";this.position.set(0,1,0);this.updateMatrix();this.width=void 0!==c?c:10;this.height=void 0!==d?d:10}function Se(){this.type="StereoCamera";this.aspect=1;this.eyeSep=.064;this.cameraL=new Ga;this.cameraL.layers.enable(1);this.cameraL.matrixAutoUpdate=!1;this.cameraR=new Ga;this.cameraR.layers.enable(2);this.cameraR.matrixAutoUpdate=!1}function Kd(a,b,c){A.call(this);this.type="CubeCamera";var d=new Ga(90,1,a,b);d.up.set(0,-1,0);
d.lookAt(new q(1,0,0));this.add(d);var e=new Ga(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new q(-1,0,0));this.add(e);var f=new Ga(90,1,a,b);f.up.set(0,0,1);f.lookAt(new q(0,1,0));this.add(f);var g=new Ga(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new q(0,-1,0));this.add(g);var h=new Ga(90,1,a,b);h.up.set(0,-1,0);h.lookAt(new q(0,0,1));this.add(h);var m=new Ga(90,1,a,b);m.up.set(0,-1,0);m.lookAt(new q(0,0,-1));this.add(m);this.renderTarget=new Fb(c,c,{format:1022,magFilter:1006,minFilter:1006});this.updateCubeMap=
function(a,b){null===this.parent&&this.updateMatrixWorld();var c=this.renderTarget,n=c.texture.generateMipmaps;c.texture.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.texture.generateMipmaps=n;c.activeCubeFace=5;a.render(b,m,c);a.setRenderTarget(null)}}function he(){A.call(this);this.type="AudioListener";this.context=ie.getContext();this.gain=this.context.createGain();
this.gain.connect(this.context.destination);this.filter=null}function ic(a){A.call(this);this.type="Audio";this.context=a.context;this.gain=this.context.createGain();this.gain.connect(a.getInput());this.autoplay=!1;this.buffer=null;this.loop=!1;this.startTime=0;this.playbackRate=1;this.isPlaying=!1;this.hasPlaybackControl=!0;this.sourceType="empty";this.filters=[]}function je(a){ic.call(this,a);this.panner=this.context.createPanner();this.panner.connect(this.gain)}function ke(a,b){this.analyser=a.context.createAnalyser();
this.analyser.fftSize=void 0!==b?b:2048;this.data=new Uint8Array(this.analyser.frequencyBinCount);a.getOutput().connect(this.analyser)}function Ld(a,b,c){this.binding=a;this.valueSize=c;a=Float64Array;switch(b){case "quaternion":b=this._slerp;break;case "string":case "bool":a=Array;b=this._select;break;default:b=this._lerp}this.buffer=new a(4*c);this._mixBufferRegion=b;this.referenceCount=this.useCount=this.cumulativeWeight=0}function ka(a,b,c){this.path=b;this.parsedPath=c||ka.parseTrackName(b);
this.node=ka.findNode(a,this.parsedPath.nodeName)||a;this.rootNode=a}function le(a){this.uuid=P.generateUUID();this._objects=Array.prototype.slice.call(arguments);this.nCachedObjects_=0;var b={};this._indicesByUUID=b;for(var c=0,d=arguments.length;c!==d;++c)b[arguments[c].uuid]=c;this._paths=[];this._parsedPaths=[];this._bindings=[];this._bindingsIndicesByPath={};var e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}
function me(a,b,c){this._mixer=a;this._clip=b;this._localRoot=c||null;a=b.tracks;b=a.length;c=Array(b);for(var d={endingStart:2400,endingEnd:2400},e=0;e!==b;++e){var f=a[e].createInterpolant(null);c[e]=f;f.settings=d}this._interpolantSettings=d;this._interpolants=c;this._propertyBindings=Array(b);this._weightInterpolant=this._timeScaleInterpolant=this._byClipCacheIndex=this._cacheIndex=null;this.loop=2201;this._loopCount=-1;this._startTime=null;this.time=0;this._effectiveWeight=this.weight=this._effectiveTimeScale=
this.timeScale=1;this.repetitions=Infinity;this.paused=!1;this.enabled=!0;this.clampWhenFinished=!1;this.zeroSlopeAtEnd=this.zeroSlopeAtStart=!0}function ed(a){this._root=a;this._initMemoryManager();this.time=this._accuIndex=0;this.timeScale=1}function Md(a,b){"string"===typeof a&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),a=b);this.value=a}function Db(){G.call(this);this.type="InstancedBufferGeometry";this.maxInstancedCount=void 0}function ne(a,b,c,d){this.uuid=P.generateUUID();
this.data=a;this.itemSize=b;this.offset=c;this.normalized=!0===d}function jc(a,b){this.uuid=P.generateUUID();this.array=a;this.stride=b;this.count=void 0!==a?a.length/b:0;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.onUploadCallback=function(){};this.version=0}function kc(a,b,c){jc.call(this,a,b);this.meshPerAttribute=c||1}function lc(a,b,c){w.call(this,a,b);this.meshPerAttribute=c||1}function oe(a,b,c,d){this.ray=new db(a,b);this.near=c||0;this.far=d||Infinity;this.params={Mesh:{},Line:{},
LOD:{},Points:{threshold:1},Sprite:{}};Object.defineProperties(this.params,{PointCloud:{get:function(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");return this.Points}}})}function Te(a,b){return a.distance-b.distance}function pe(a,b,c,d){if(!1!==a.visible&&(a.raycast(b,c),!0===d)){a=a.children;d=0;for(var e=a.length;d<e;d++)pe(a[d],b,c,!0)}}function qe(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1}function re(a,
b,c){this.radius=void 0!==a?a:1;this.phi=void 0!==b?b:0;this.theta=void 0!==c?c:0;return this}function se(a,b,c){this.radius=void 0!==a?a:1;this.theta=void 0!==b?b:0;this.y=void 0!==c?c:0;return this}function oa(a,b){za.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)}function fd(a){A.call(this);this.material=a;this.render=function(a){}}function gd(a,b,c,d){this.object=
a;this.size=void 0!==b?b:1;a=void 0!==c?c:16711680;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&c.isGeometry?b=3*c.faces.length:c&&c.isBufferGeometry&&(b=c.attributes.normal.count);c=new G;b=new V(6*b,3);c.addAttribute("position",b);ga.call(this,c,new ia({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update()}function mc(a){A.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;a=new G;for(var b=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,
0,0,0,1,1,0,0,0,0,-1,1],c=0,d=1;32>c;c++,d++){var e=c/32*Math.PI*2,f=d/32*Math.PI*2;b.push(Math.cos(e),Math.sin(e),1,Math.cos(f),Math.sin(f),1)}a.addAttribute("position",new V(b,3));b=new ia({fog:!1});this.cone=new ga(a,b);this.add(this.cone);this.update()}function nc(a){this.bones=this.getBoneList(a);for(var b=new G,c=[],d=[],e=new F(0,0,1),f=new F(0,1,0),g=0;g<this.bones.length;g++){var h=this.bones[g];h.parent&&h.parent.isBone&&(c.push(0,0,0),c.push(0,0,0),d.push(e.r,e.g,e.b),d.push(f.r,f.g,f.b))}b.addAttribute("position",
new V(c,3));b.addAttribute("color",new V(d,3));c=new ia({vertexColors:2,depthTest:!1,depthWrite:!1,transparent:!0});ga.call(this,b,c);this.root=a;this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.update()}function oc(a,b){this.light=a;this.light.updateMatrixWorld();var c=new ob(b,4,2),d=new Ka({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);za.call(this,c,d);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1}function pc(a){A.call(this);this.light=
a;this.light.updateMatrixWorld();var b=new Ka({color:a.color,fog:!1});a=new Ka({color:a.color,fog:!1,wireframe:!0});var c=new G;c.addAttribute("position",new w(new Float32Array(18),3));this.add(new za(c,b));this.add(new za(c,a));this.update()}function qc(a,b){A.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;var c=new nb(b);c.rotateY(.5*Math.PI);var d=new Ka({vertexColors:2,wireframe:!0}),e=c.getAttribute("position"),e=new Float32Array(3*e.count);
c.addAttribute("color",new w(e,3));this.add(new za(c,d));this.update()}function hd(a,b,c,d){a=a||10;b=b||10;c=new F(void 0!==c?c:4473924);d=new F(void 0!==d?d:8947848);for(var e=b/2,f=2*a/b,g=[],h=[],m=0,k=0,l=-a;m<=b;m++,l+=f){g.push(-a,0,l,a,0,l);g.push(l,0,-a,l,0,a);var p=m===e?c:d;p.toArray(h,k);k+=3;p.toArray(h,k);k+=3;p.toArray(h,k);k+=3;p.toArray(h,k);k+=3}a=new G;a.addAttribute("position",new V(g,3));a.addAttribute("color",new V(h,3));g=new ia({vertexColors:2});ga.call(this,a,g)}function Nd(a,
b,c,d,e,f){a=a||10;b=b||16;c=c||8;d=d||64;e=new F(void 0!==e?e:4473924);f=new F(void 0!==f?f:8947848);var g=[],h=[],m,k,l,p,n;for(l=0;l<=b;l++)k=l/b*2*Math.PI,m=Math.sin(k)*a,k=Math.cos(k)*a,g.push(0,0,0),g.push(m,0,k),n=l&1?e:f,h.push(n.r,n.g,n.b),h.push(n.r,n.g,n.b);for(l=0;l<=c;l++)for(n=l&1?e:f,p=a-a/c*l,b=0;b<d;b++)k=b/d*2*Math.PI,m=Math.sin(k)*p,k=Math.cos(k)*p,g.push(m,0,k),h.push(n.r,n.g,n.b),k=(b+1)/d*2*Math.PI,m=Math.sin(k)*p,k=Math.cos(k)*p,g.push(m,0,k),h.push(n.r,n.g,n.b);a=new G;a.addAttribute("position",
new V(g,3));a.addAttribute("color",new V(h,3));g=new ia({vertexColors:2});ga.call(this,a,g)}function id(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&c.isGeometry?b=c.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");c=new G;b=new V(6*b,3);c.addAttribute("position",b);ga.call(this,c,new ia({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update()}
function rc(a,b){A.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;void 0===b&&(b=1);var c=new G;c.addAttribute("position",new V([-b,b,0,b,b,0,b,-b,0,-b,-b,0,-b,b,0],3));var d=new ia({fog:!1});this.add(new Wa(c,d));c=new G;c.addAttribute("position",new V([0,0,0,0,0,1],3));this.add(new Wa(c,d));this.update()}function jd(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){f.push(0,0,0);g.push(b.r,b.g,b.b);void 0===h[a]&&(h[a]=[]);h[a].push(f.length/
3-1)}var d=new G,e=new ia({color:16777215,vertexColors:1}),f=[],g=[],h={},m=new F(16755200),k=new F(16711680),l=new F(43775),p=new F(16777215),n=new F(3355443);b("n1","n2",m);b("n2","n4",m);b("n4","n3",m);b("n3","n1",m);b("f1","f2",m);b("f2","f4",m);b("f4","f3",m);b("f3","f1",m);b("n1","f1",m);b("n2","f2",m);b("n3","f3",m);b("n4","f4",m);b("p","n1",k);b("p","n2",k);b("p","n3",k);b("p","n4",k);b("u1","u2",l);b("u2","u3",l);b("u3","u1",l);b("c","t",p);b("p","c",n);b("cn1","cn2",n);b("cn3","cn4",n);
b("cf1","cf2",n);b("cf3","cf4",n);d.addAttribute("position",new V(f,3));d.addAttribute("color",new V(g,3));ga.call(this,d,e);this.camera=a;this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=h;this.update()}function sc(a,b){void 0===b&&(b=16776960);var c=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),d=new Float32Array(24),e=new G;e.setIndex(new w(c,1));e.addAttribute("position",new w(d,3));ga.call(this,
e,new ia({color:b}));void 0!==a&&this.update(a)}function Eb(a,b,c,d,e,f){A.call(this);void 0===d&&(d=16776960);void 0===c&&(c=1);void 0===e&&(e=.2*c);void 0===f&&(f=.2*e);this.position.copy(b);this.line=new Wa(Ue,new ia({color:d}));this.line.matrixAutoUpdate=!1;this.add(this.line);this.cone=new za(Ve,new Ka({color:d}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);this.setLength(c,e,f)}function Od(a){a=a||1;var b=[0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a];a=new G;a.addAttribute("position",
new V(b,3));a.addAttribute("color",new V([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));b=new ia({vertexColors:2});ga.call(this,a,b)}function te(){var a=0,b=0,c=0,d=0;return{initCatmullRom:function(e,f,g,h,m){e=m*(g-e);h=m*(h-f);a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h},initNonuniformCatmullRom:function(e,f,g,h,m,k,l){e=((f-e)/m-(g-e)/(m+k)+(g-f)/k)*k;h=((g-f)/k-(h-f)/(k+l)+(h-g)/l)*k;a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h},calc:function(e){var f=e*e;return a+b*e+c*f+d*f*e}}}function wa(a){this.points=
a||[];this.closed=!1}function kd(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d}function ld(a,b,c){this.v0=a;this.v1=b;this.v2=c}function md(a,b){this.v1=a;this.v2=b}function Pd(a,b,c,d,e,f){Ya.call(this,a,b,c,c,d,e,f)}function We(a){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");wa.call(this,a);this.type="catmullrom";this.closed=!0}function Xe(a){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");wa.call(this,
a);this.type="catmullrom"}function ue(a){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");wa.call(this,a);this.type="catmullrom"}void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52));void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a});void 0===Function.prototype.name&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});void 0===Object.assign&&function(){Object.assign=function(a){if(void 0===
a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(void 0!==d&&null!==d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=d[e])}return b}}();pa.prototype={addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=
this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;var c=[],d,e=b.length;for(d=0;d<e;d++)c[d]=b[d];for(d=0;d<e;d++)c[d].call(this,a)}}}};var P={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8===e||13===e||18===e||23===e?b[e]="-":14===e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19===e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return Math.max(b,Math.min(c,a))},euclideanModulo:function(a,b){return(a%b+b)%b},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},lerp:function(a,b,c){return(1-c)*a+c*b},smoothstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*
a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(a){return a*P.DEG2RAD},radToDeg:function(a){return a*P.RAD2DEG},isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a},nearestPowerOfTwo:function(a){return Math.pow(2,Math.round(Math.log(a)/Math.LN2))},
nextPowerOfTwo:function(a){a--;a|=a>>1;a|=a>>2;a|=a>>4;a|=a>>8;a|=a>>16;a++;return a}};E.prototype={constructor:E,isVector2:!0,get width(){return this.x},set width(a){this.x=a},get height(){return this.y},set height(a){this.y=a},set:function(a,b){this.x=a;this.y=b;return this},setScalar:function(a){this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+
a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},
addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},subScalar:function(a){this.x-=a;this.y-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=
a.y;return this},multiplyScalar:function(a){isFinite(a)?(this.x*=a,this.y*=a):this.y=this.x=0;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));return this},
clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new E,b=new E);a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.multiplyScalar(Math.max(a,Math.min(b,c))/c)},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this},roundToZero:function(){this.x=
0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length())},angle:function(){var a=Math.atan2(this.y,
this.x);0>a&&(a+=2*Math.PI);return a},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a},distanceToManhattan:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)},setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===
this.x&&a.y===this.y},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);return this},rotateAround:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=this.x-a.x,f=this.y-a.y;this.x=e*c-f*d+a.x;this.y=e*d+f*c+a.y;return this}};
var Ye=0;da.DEFAULT_IMAGE=void 0;da.DEFAULT_MAPPING=300;da.prototype={constructor:da,isTexture:!0,set needsUpdate(a){!0===a&&this.version++},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.image=a.image;this.mipmaps=a.mipmaps.slice(0);this.mapping=a.mapping;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.format=a.format;this.type=a.type;this.offset.copy(a.offset);this.repeat.copy(a.repeat);
this.generateMipmaps=a.generateMipmaps;this.premultiplyAlpha=a.premultiplyAlpha;this.flipY=a.flipY;this.unpackAlignment=a.unpackAlignment;this.encoding=a.encoding;return this},toJSON:function(a){if(void 0!==a.textures[this.uuid])return a.textures[this.uuid];var b={metadata:{version:4.4,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,
magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY};if(void 0!==this.image){var c=this.image;void 0===c.uuid&&(c.uuid=P.generateUUID());if(void 0===a.images[c.uuid]){var d=a.images,e=c.uuid,f=c.uuid,g;void 0!==c.toDataURL?g=c:(g=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),g.width=c.width,g.height=c.height,g.getContext("2d").drawImage(c,0,0,c.width,c.height));g=2048<g.width||2048<g.height?g.toDataURL("image/jpeg",.6):g.toDataURL("image/png");d[e]={uuid:f,url:g}}b.image=
c.uuid}return a.textures[this.uuid]=b},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(a){if(300===this.mapping){a.multiply(this.repeat);a.add(this.offset);if(0>a.x||1<a.x)switch(this.wrapS){case 1E3:a.x-=Math.floor(a.x);break;case 1001:a.x=0>a.x?0:1;break;case 1002:a.x=1===Math.abs(Math.floor(a.x)%2)?Math.ceil(a.x)-a.x:a.x-Math.floor(a.x)}if(0>a.y||1<a.y)switch(this.wrapT){case 1E3:a.y-=Math.floor(a.y);break;case 1001:a.y=0>a.y?0:1;break;case 1002:a.y=1===Math.abs(Math.floor(a.y)%
2)?Math.ceil(a.y)-a.y:a.y-Math.floor(a.y)}this.flipY&&(a.y=1-a.y)}}};Object.assign(da.prototype,pa.prototype);fa.prototype={constructor:fa,isVector4:!0,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setScalar:function(a){this.w=this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;
case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;this.w+=a.w*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,
b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;this.w-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){isFinite(a)?(this.x*=a,this.y*=a,this.z*=a,this.w*=a):this.w=this.z=this.y=this.x=0;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*
d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){var b,c,d;a=a.elements;var e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],m=a[9];c=a[2];b=a[6];var k=a[10];if(.01>Math.abs(d-g)&&.01>
Math.abs(f-c)&&.01>Math.abs(m-b)){if(.1>Math.abs(d+g)&&.1>Math.abs(f+c)&&.1>Math.abs(m+b)&&.1>Math.abs(e+h+k-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;k=(k+1)/2;d=(d+g)/4;f=(f+c)/4;m=(m+b)/4;e>h&&e>k?.01>e?(b=0,d=c=.707106781):(b=Math.sqrt(e),c=d/b,d=f/b):h>k?.01>h?(b=.707106781,c=0,d=.707106781):(c=Math.sqrt(h),b=d/c,d=m/c):.01>k?(c=b=.707106781,d=0):(d=Math.sqrt(k),b=f/d,c=m/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-m)*(b-m)+(f-c)*(f-c)+(g-d)*(g-d));.001>Math.abs(a)&&
(a=1);this.x=(b-m)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+k-1)/2);return this},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);this.w=Math.min(this.w,a.w);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);this.w=Math.max(this.w,a.w);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,
this.z));this.w=Math.max(a.w,Math.min(b.w,this.w));return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new fa,b=new fa);a.set(c,c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);
this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*
this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},lerpVectors:function(a,
b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");
this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);this.w=a.getW(b);return this}};$a.prototype={constructor:$a,isWebGLRenderTarget:!0,setSize:function(a,b){if(this.width!==a||this.height!==b)this.width=a,this.height=b,this.dispose();this.viewport.set(0,0,a,b);this.scissor.set(0,0,a,b)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.width=a.width;this.height=a.height;this.viewport.copy(a.viewport);this.texture=a.texture.clone();this.depthBuffer=a.depthBuffer;this.stencilBuffer=
a.stencilBuffer;this.depthTexture=a.depthTexture;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}};Object.assign($a.prototype,pa.prototype);Fb.prototype=Object.create($a.prototype);Fb.prototype.constructor=Fb;Fb.prototype.isWebGLRenderTargetCube=!0;Z.prototype={constructor:Z,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},
get w(){return this._w},set w(a){this._w=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;this._w=a.w;this.onChangeCallback();return this},setFromEuler:function(a,b){if(!1===(a&&a.isEuler))throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),g=Math.sin(a._y/2),h=Math.sin(a._z/2),m=a.order;"XYZ"===m?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"YXZ"===m?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"ZXY"===m?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"ZYX"===m?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"YZX"===
m?(this._x=f*d*e+c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e-f*g*h):"XZY"===m&&(this._x=f*d*e-c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e+f*g*h);if(!1!==b)this.onChangeCallback();return this},setFromAxisAngle:function(a,b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this.onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],m=b[6],b=b[10],k=c+
f+b;0<k?(c=.5/Math.sqrt(k+1),this._w=.25/c,this._x=(m-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(m-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=.25*c,this._z=(g+m)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+m)/c,this._z=.25*c);this.onChangeCallback();return this},setFromUnitVectors:function(){var a,b;return function(c,d){void 0===a&&(a=new q);b=c.dot(d)+1;1E-6>
b?(b=0,Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;return this.normalize()}}(),inverse:function(){return this.conjugate().normalize()},conjugate:function(){this._x*=-1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*
this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this},multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},premultiply:function(a){return this.multiplyQuaternions(a,
this)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,f=a._w,g=b._x,h=b._y,m=b._z,k=b._w;this._x=c*k+f*g+d*m-e*h;this._y=d*k+f*h+e*g-c*m;this._z=e*k+f*m+c*h-d*g;this._w=f*k-c*g-d*h-e*m;this.onChangeCallback();return this},slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=
d,this._z=e,this;var h=Math.sqrt(1-g*g);if(.001>Math.abs(h))return this._w=.5*(f+this._w),this._x=.5*(c+this._x),this._y=.5*(d+this._y),this._z=.5*(e+this._z),this;var m=Math.atan2(h,g),g=Math.sin((1-b)*m)/h,h=Math.sin(b*m)/h;this._w=f*g+this._w*h;this._x=c*g+this._x*h;this._y=d*g+this._y*h;this._z=e*g+this._z*h;this.onChangeCallback();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=
a[b+1];this._z=a[b+2];this._w=a[b+3];this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){}};Object.assign(Z,{slerp:function(a,b,c,d){return c.copy(a).slerp(b,d)},slerpFlat:function(a,b,c,d,e,f,g){var h=c[d+0],m=c[d+1],k=c[d+2];c=c[d+3];d=e[f+0];var l=e[f+1],p=e[f+2];e=e[f+3];if(c!==e||h!==d||m!==l||k!==
p){f=1-g;var n=h*d+m*l+k*p+c*e,t=0<=n?1:-1,q=1-n*n;q>Number.EPSILON&&(q=Math.sqrt(q),n=Math.atan2(q,n*t),f=Math.sin(f*n)/q,g=Math.sin(g*n)/q);t*=g;h=h*f+d*t;m=m*f+l*t;k=k*f+p*t;c=c*f+e*t;f===1-g&&(g=1/Math.sqrt(h*h+m*m+k*k+c*c),h*=g,m*=g,k*=g,c*=g)}a[b]=h;a[b+1]=m;a[b+2]=k;a[b+3]=c}});q.prototype={constructor:q,isVector3:!0,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setScalar:function(a){this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=
a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},
add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){isFinite(a)?(this.x*=a,this.y*=
a,this.z*=a):this.z=this.y=this.x=0;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a;return function(b){!1===(b&&b.isEuler)&&console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");void 0===a&&(a=new Z);return this.applyQuaternion(a.setFromEuler(b))}}(),applyAxisAngle:function(){var a;return function(b,c){void 0===a&&(a=new Z);return this.applyQuaternion(a.setFromAxisAngle(b,
c))}}(),applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this.divideScalar(a[3]*b+a[7]*c+a[11]*d+a[15])},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,
m=a*c+g*b-e*d,k=a*d+e*c-f*b,b=-e*b-f*c-g*d;this.x=h*a+b*-e+m*-g-k*-f;this.y=m*a+b*-f+k*-e-h*-g;this.z=k*a+b*-g+h*-f-m*-e;return this},project:function(){var a;return function(b){void 0===a&&(a=new M);a.multiplyMatrices(b.projectionMatrix,a.getInverse(b.matrixWorld));return this.applyMatrix4(a)}}(),unproject:function(){var a;return function(b){void 0===a&&(a=new M);a.multiplyMatrices(b.matrixWorld,a.getInverse(b.projectionMatrix));return this.applyMatrix4(a)}}(),transformDirection:function(a){var b=
this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;return this.normalize()},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);return this},clamp:function(a,
b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new q,b=new q);a.set(c,c,c);b.set(d,d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.multiplyScalar(Math.max(a,Math.min(b,c))/c)},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=
Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*
a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},lerpVectors:function(a,
b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},cross:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this},crossVectors:function(a,b){var c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;this.x=d*h-e*g;this.y=e*f-c*h;this.z=c*g-d*f;return this},projectOnVector:function(a){var b=a.dot(this)/
a.lengthSq();return this.copy(a).multiplyScalar(b)},projectOnPlane:function(){var a;return function(b){void 0===a&&(a=new q);a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a;return function(b){void 0===a&&(a=new q);return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=this.dot(a)/Math.sqrt(this.lengthSq()*a.lengthSq());return Math.acos(P.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=
this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},distanceToManhattan:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)},setFromSpherical:function(a){var b=Math.sin(a.phi)*a.radius;this.x=b*Math.sin(a.theta);this.y=Math.cos(a.phi)*a.radius;this.z=b*Math.cos(a.theta);return this},setFromCylindrical:function(a){this.x=a.radius*Math.sin(a.theta);this.y=a.y;this.z=a.radius*Math.cos(a.theta);return this},setFromMatrixPosition:function(a){return this.setFromMatrixColumn(a,
3)},setFromMatrixScale:function(a){var b=this.setFromMatrixColumn(a,0).length(),c=this.setFromMatrixColumn(a,1).length();a=this.setFromMatrixColumn(a,2).length();this.x=b;this.y=c;this.z=a;return this},setFromMatrixColumn:function(a,b){if("number"===typeof a){console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");var c=a;a=b;b=c}return this.fromArray(a.elements,4*b)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){void 0===b&&
(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);return this}};M.prototype={constructor:M,isMatrix4:!0,set:function(a,b,c,d,e,f,g,h,m,k,l,p,n,t,q,r){var x=this.elements;x[0]=a;x[4]=b;x[8]=c;x[12]=d;x[1]=
e;x[5]=f;x[9]=g;x[13]=h;x[2]=m;x[6]=k;x[10]=l;x[14]=p;x[3]=n;x[7]=t;x[11]=q;x[15]=r;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},clone:function(){return(new M).fromArray(this.elements)},copy:function(a){this.elements.set(a.elements);return this},copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractBasis:function(a,b,c){a.setFromMatrixColumn(this,0);b.setFromMatrixColumn(this,1);c.setFromMatrixColumn(this,
2);return this},makeBasis:function(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this},extractRotation:function(){var a;return function(b){void 0===a&&(a=new q);var c=this.elements,d=b.elements,e=1/a.setFromMatrixColumn(b,0).length(),f=1/a.setFromMatrixColumn(b,1).length();b=1/a.setFromMatrixColumn(b,2).length();c[0]=d[0]*e;c[1]=d[1]*e;c[2]=d[2]*e;c[4]=d[4]*f;c[5]=d[5]*f;c[6]=d[6]*f;c[8]=d[8]*b;c[9]=d[9]*b;c[10]=d[10]*b;return this}}(),makeRotationFromEuler:function(a){!1===
(a&&a.isEuler)&&console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){a=f*h;var m=f*e,k=c*h,l=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=m+k*d;b[5]=a-l*d;b[9]=-c*g;b[2]=l-a*d;b[6]=k+m*d;b[10]=f*g}else"YXZ"===a.order?(a=g*h,m=g*e,k=d*h,l=d*e,b[0]=a+l*c,b[4]=k*c-m,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=
m*c-k,b[6]=l+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,m=g*e,k=d*h,l=d*e,b[0]=a-l*c,b[4]=-f*e,b[8]=k+m*c,b[1]=m+k*c,b[5]=f*h,b[9]=l-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,m=f*e,k=c*h,l=c*e,b[0]=g*h,b[4]=k*d-m,b[8]=a*d+l,b[1]=g*e,b[5]=l*d+a,b[9]=m*d-k,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,m=f*d,k=c*g,l=c*d,b[0]=g*h,b[4]=l-a*e,b[8]=k*e+m,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=m*e+k,b[10]=a-l*e):"XZY"===a.order&&(a=f*g,m=f*d,k=c*g,l=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+l,
b[5]=f*h,b[9]=m*e-k,b[2]=k*e-m,b[6]=c*h,b[10]=l*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,m=e+e;a=c*g;var k=c*h,c=c*m,l=d*h,d=d*m,e=e*m,g=f*g,h=f*h,f=f*m;b[0]=1-(l+e);b[4]=k-f;b[8]=c+h;b[1]=k+f;b[5]=1-(a+e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+l);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a,b,c;return function(d,e,f){void 0===a&&
(a=new q,b=new q,c=new q);var g=this.elements;c.subVectors(d,e).normalize();0===c.lengthSq()&&(c.z=1);a.crossVectors(f,c).normalize();0===a.lengthSq()&&(c.z+=1E-4,a.crossVectors(f,c).normalize());b.crossVectors(c,a);g[0]=a.x;g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,
a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],m=c[12],k=c[1],l=c[5],p=c[9],n=c[13],t=c[2],q=c[6],r=c[10],x=c[14],u=c[3],v=c[7],L=c[11],c=c[15],y=d[0],D=d[4],Q=d[8],C=d[12],J=d[1],w=d[5],T=d[9],E=d[13],A=d[2],F=d[6],G=d[10],N=d[14],O=d[3],R=d[7],S=d[11],d=d[15];e[0]=f*y+g*J+h*A+m*O;e[4]=f*D+g*w+h*F+m*R;e[8]=f*Q+g*T+h*G+m*S;e[12]=f*C+g*E+h*N+m*d;e[1]=k*y+l*J+p*A+n*O;e[5]=k*D+l*w+p*F+
n*R;e[9]=k*Q+l*T+p*G+n*S;e[13]=k*C+l*E+p*N+n*d;e[2]=t*y+q*J+r*A+x*O;e[6]=t*D+q*w+r*F+x*R;e[10]=t*Q+q*T+r*G+x*S;e[14]=t*C+q*E+r*N+x*d;e[3]=u*y+v*J+L*A+c*O;e[7]=u*D+v*w+L*F+c*R;e[11]=u*Q+v*T+L*G+c*S;e[15]=u*C+v*E+L*N+c*d;return this},multiplyToArray:function(a,b,c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=
this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},applyToBufferAttribute:function(){var a;return function(b){void 0===a&&(a=new q);for(var c=0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix4(this),b.setXYZ(c,a.x,a.y,a.z);return b}}(),determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],m=a[13],k=a[2],l=a[6],p=a[10],n=a[14];
return a[3]*(+e*h*l-d*m*l-e*g*p+c*m*p+d*g*n-c*h*n)+a[7]*(+b*h*n-b*m*p+e*f*p-d*f*n+d*m*k-e*h*k)+a[11]*(+b*m*l-b*g*n-e*f*l+c*f*n+e*g*k-c*m*k)+a[15]*(-d*g*k-b*h*l+b*g*p+d*f*l-c*f*p+c*h*k)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},setPosition:function(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,
b){var c=this.elements,d=a.elements,e=d[0],f=d[1],g=d[2],h=d[3],m=d[4],k=d[5],l=d[6],p=d[7],n=d[8],t=d[9],q=d[10],r=d[11],x=d[12],u=d[13],v=d[14],d=d[15],L=t*v*p-u*q*p+u*l*r-k*v*r-t*l*d+k*q*d,y=x*q*p-n*v*p-x*l*r+m*v*r+n*l*d-m*q*d,D=n*u*p-x*t*p+x*k*r-m*u*r-n*k*d+m*t*d,Q=x*t*l-n*u*l-x*k*q+m*u*q+n*k*v-m*t*v,C=e*L+f*y+g*D+h*Q;if(0===C){if(!0===b)throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
return this.identity()}C=1/C;c[0]=L*C;c[1]=(u*q*h-t*v*h-u*g*r+f*v*r+t*g*d-f*q*d)*C;c[2]=(k*v*h-u*l*h+u*g*p-f*v*p-k*g*d+f*l*d)*C;c[3]=(t*l*h-k*q*h-t*g*p+f*q*p+k*g*r-f*l*r)*C;c[4]=y*C;c[5]=(n*v*h-x*q*h+x*g*r-e*v*r-n*g*d+e*q*d)*C;c[6]=(x*l*h-m*v*h-x*g*p+e*v*p+m*g*d-e*l*d)*C;c[7]=(m*q*h-n*l*h+n*g*p-e*q*p-m*g*r+e*l*r)*C;c[8]=D*C;c[9]=(x*t*h-n*u*h-x*f*r+e*u*r+n*f*d-e*t*d)*C;c[10]=(m*u*h-x*k*h+x*f*p-e*u*p-m*f*d+e*k*d)*C;c[11]=(n*k*h-m*t*h-n*f*p+e*t*p+m*f*r-e*k*r)*C;c[12]=Q*C;c[13]=(n*u*g-x*t*g+x*f*q-e*u*
q-n*f*v+e*t*v)*C;c[14]=(x*k*g-m*u*g-x*f*l+e*u*l+m*f*v-e*k*v)*C;c[15]=(m*t*g-n*k*g+n*f*l-e*t*l-m*f*q+e*k*q)*C;return this},scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10]))},makeTranslation:function(a,b,c){this.set(1,
0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,m=e*f,k=e*g;this.set(m*f+c,m*
g-d*h,m*h+d*g,0,m*g+d*h,k*g+c,k*h-d*f,0,m*h-d*g,k*h+d*f,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},makeShear:function(a,b,c){this.set(1,b,c,0,a,1,c,0,a,b,1,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a,b;return function(c,d,e){void 0===a&&(a=new q,b=new M);var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],
f[5],f[6]).length(),m=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];c.y=f[13];c.z=f[14];b.elements.set(this.elements);c=1/g;var f=1/h,k=1/m;b.elements[0]*=c;b.elements[1]*=c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=k;b.elements[9]*=k;b.elements[10]*=k;d.setFromRotationMatrix(b);e.x=g;e.y=h;e.z=m;return this}}(),makePerspective:function(a,b,c,d,e,f){void 0===f&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(c-d);g[9]=(c+d)/(c-d);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=1/(b-a),m=1/(c-d),k=1/(f-e);g[0]=2*h;g[4]=0;g[8]=0;g[12]=-((b+a)*h);g[1]=0;g[5]=2*m;g[9]=0;g[13]=-((c+d)*m);g[2]=0;g[6]=0;g[10]=-2*k;g[14]=-((f+e)*k);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},equals:function(a){var b=this.elements;
a=a.elements;for(var c=0;16>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;16>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a}};ab.prototype=Object.create(da.prototype);
ab.prototype.constructor=ab;ab.prototype.isCubeTexture=!0;Object.defineProperty(ab.prototype,"images",{get:function(){return this.image},set:function(a){this.image=a}});var Ce=new da,De=new ab,ze=[],Be=[];He.prototype.setValue=function(a,b){for(var c=this.seq,d=0,e=c.length;d!==e;++d){var f=c[d];f.setValue(a,b[f.id])}};var Sd=/([\w\d_]+)(\])?(\[|\.)?/g;bb.prototype.setValue=function(a,b,c){b=this.map[b];void 0!==b&&b.setValue(a,c,this.renderer)};bb.prototype.set=function(a,b,c){var d=this.map[c];
void 0!==d&&d.setValue(a,b[c],this.renderer)};bb.prototype.setOptional=function(a,b,c){b=b[c];void 0!==b&&this.setValue(a,c,b)};bb.upload=function(a,b,c,d){for(var e=0,f=b.length;e!==f;++e){var g=b[e],h=c[g.id];!1!==h.needsUpdate&&g.setValue(a,h.value,d)}};bb.seqWithValue=function(a,b){for(var c=[],d=0,e=a.length;d!==e;++d){var f=a[d];f.id in b&&c.push(f)}return c};var Ja={merge:function(a){for(var b={},c=0;c<a.length;c++){var d=this.clone(a[c]),e;for(e in d)b[e]=d[e]}return b},clone:function(a){var b=
{},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture)?b[c][d]=e.clone():Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e}}return b}},ba={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
begin_vertex:"\nvec3 transformed = vec3( position );\n",beginnormal_vertex:"\nvec3 objectNormal = vec3( normal );\n",bsdfs:"float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t\t}\n\t\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 ltcTextureCoords( const in GeometricContext geometry, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = (LUT_SIZE - 1.0)/LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5/LUT_SIZE;\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 P = geometry.position;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nvoid clipQuadToHorizon( inout vec3 L[5], out int n ) {\n\tint config = 0;\n\tif ( L[0].z > 0.0 ) config += 1;\n\tif ( L[1].z > 0.0 ) config += 2;\n\tif ( L[2].z > 0.0 ) config += 4;\n\tif ( L[3].z > 0.0 ) config += 8;\n\tn = 0;\n\tif ( config == 0 ) {\n\t} else if ( config == 1 ) {\n\t\tn = 3;\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t\tL[2] = -L[3].z * L[0] + L[0].z * L[3];\n\t} else if ( config == 2 ) {\n\t\tn = 3;\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t} else if ( config == 3 ) {\n\t\tn = 4;\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t\tL[3] = -L[3].z * L[0] + L[0].z * L[3];\n\t} else if ( config == 4 ) {\n\t\tn = 3;\n\t\tL[0] = -L[3].z * L[2] + L[2].z * L[3];\n\t\tL[1] = -L[1].z * L[2] + L[2].z * L[1];\n\t} else if ( config == 5 ) {\n\t\tn = 0;\n\t} else if ( config == 6 ) {\n\t\tn = 4;\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t\tL[3] = -L[3].z * L[2] + L[2].z * L[3];\n\t} else if ( config == 7 ) {\n\t\tn = 5;\n\t\tL[4] = -L[3].z * L[0] + L[0].z * L[3];\n\t\tL[3] = -L[3].z * L[2] + L[2].z * L[3];\n\t} else if ( config == 8 ) {\n\t\tn = 3;\n\t\tL[0] = -L[0].z * L[3] + L[3].z * L[0];\n\t\tL[1] = -L[2].z * L[3] + L[3].z * L[2];\n\t\tL[2] =  L[3];\n\t} else if ( config == 9 ) {\n\t\tn = 4;\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t\tL[2] = -L[2].z * L[3] + L[3].z * L[2];\n\t} else if ( config == 10 ) {\n\t\tn = 0;\n\t} else if ( config == 11 ) {\n\t\tn = 5;\n\t\tL[4] = L[3];\n\t\tL[3] = -L[2].z * L[3] + L[3].z * L[2];\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t} else if ( config == 12 ) {\n\t\tn = 4;\n\t\tL[1] = -L[1].z * L[2] + L[2].z * L[1];\n\t\tL[0] = -L[0].z * L[3] + L[3].z * L[0];\n\t} else if ( config == 13 ) {\n\t\tn = 5;\n\t\tL[4] = L[3];\n\t\tL[3] = L[2];\n\t\tL[2] = -L[1].z * L[2] + L[2].z * L[1];\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t} else if ( config == 14 ) {\n\t\tn = 5;\n\t\tL[4] = -L[0].z * L[3] + L[3].z * L[0];\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t} else if ( config == 15 ) {\n\t\tn = 4;\n\t}\n\tif ( n == 3 )\n\t\tL[3] = L[0];\n\tif ( n == 4 )\n\t\tL[4] = L[0];\n}\nfloat integrateLtcBrdfOverRectEdge( vec3 v1, vec3 v2 ) {\n\tfloat cosTheta = dot( v1, v2 );\n\tfloat theta = acos( cosTheta );\n\tfloat res = cross( v1, v2 ).z * ( ( theta > 0.001 ) ? theta / sin( theta ) : 1.0 );\n\treturn res;\n}\nvoid initRectPoints( const in vec3 pos, const in vec3 halfWidth, const in vec3 halfHeight, out vec3 rectPoints[4] ) {\n\trectPoints[0] = pos - halfWidth - halfHeight;\n\trectPoints[1] = pos + halfWidth - halfHeight;\n\trectPoints[2] = pos + halfWidth + halfHeight;\n\trectPoints[3] = pos - halfWidth + halfHeight;\n}\nvec3 integrateLtcBrdfOverRect( const in GeometricContext geometry, const in mat3 brdfMat, const in vec3 rectPoints[4] ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 P = geometry.position;\n\tvec3 T1, T2;\n\tT1 = normalize(V - N * dot( V, N ));\n\tT2 = - cross( N, T1 );\n\tmat3 brdfWrtSurface = brdfMat * transpose( mat3( T1, T2, N ) );\n\tvec3 clippedRect[5];\n\tclippedRect[0] = brdfWrtSurface * ( rectPoints[0] - P );\n\tclippedRect[1] = brdfWrtSurface * ( rectPoints[1] - P );\n\tclippedRect[2] = brdfWrtSurface * ( rectPoints[2] - P );\n\tclippedRect[3] = brdfWrtSurface * ( rectPoints[3] - P );\n\tint n;\n\tclipQuadToHorizon(clippedRect, n);\n\tif ( n == 0 )\n\t\treturn vec3( 0, 0, 0 );\n\tclippedRect[0] = normalize( clippedRect[0] );\n\tclippedRect[1] = normalize( clippedRect[1] );\n\tclippedRect[2] = normalize( clippedRect[2] );\n\tclippedRect[3] = normalize( clippedRect[3] );\n\tclippedRect[4] = normalize( clippedRect[4] );\n\tfloat sum = 0.0;\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[0], clippedRect[1] );\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[1], clippedRect[2] );\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[2], clippedRect[3] );\n\tif (n >= 4)\n\t\tsum += integrateLtcBrdfOverRectEdge( clippedRect[3], clippedRect[4] );\n\tif (n == 5)\n\t\tsum += integrateLtcBrdfOverRectEdge( clippedRect[4], clippedRect[0] );\n\tsum = max( 0.0, sum );\n\tvec3 Lo_i = vec3( sum, sum, sum );\n\treturn Lo_i;\n}\nvec3 Rect_Area_Light_Specular_Reflectance(\n\t\tconst in GeometricContext geometry,\n\t\tconst in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight,\n\t\tconst in float roughness,\n\t\tconst in sampler2D ltcMat, const in sampler2D ltcMag ) {\n\tvec3 rectPoints[4];\n\tinitRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );\n\tvec2 uv = ltcTextureCoords( geometry, roughness );\n\tvec4 brdfLtcApproxParams, t;\n\tbrdfLtcApproxParams = texture2D( ltcMat, uv );\n\tt = texture2D( ltcMat, uv );\n\tfloat brdfLtcScalar = texture2D( ltcMag, uv ).a;\n\tmat3 brdfLtcApproxMat = mat3(\n\t\tvec3(   1,   0, t.y ),\n\t\tvec3(   0, t.z,   0 ),\n\t\tvec3( t.w,   0, t.x )\n\t);\n\tvec3 specularReflectance = integrateLtcBrdfOverRect( geometry, brdfLtcApproxMat, rectPoints );\n\tspecularReflectance *= brdfLtcScalar;\n\treturn specularReflectance;\n}\nvec3 Rect_Area_Light_Diffuse_Reflectance(\n\t\tconst in GeometricContext geometry,\n\t\tconst in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight ) {\n\tvec3 rectPoints[4];\n\tinitRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );\n\tmat3 diffuseBrdfMat = mat3(1);\n\tvec3 diffuseReflectance = integrateLtcBrdfOverRect( geometry, diffuseBrdfMat, rectPoints );\n\treturn diffuseReflectance;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n",
clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",color_pars_vertex:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transpose( const in mat3 v ) {\n\tmat3 tmp;\n\ttmp[0] = vec3(v[0].x, v[1].x, v[2].x);\n\ttmp[1] = vec3(v[0].y, v[1].y, v[2].y);\n\ttmp[2] = vec3(v[0].z, v[1].z, v[2].z);\n\treturn tmp;\n}\n",
cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
defaultnormal_vertex:"#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",encodings_fragment:"  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",
envmap_fragment:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
envmap_pars_fragment:"#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",envmap_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
fog_fragment:"#ifdef USE_FOG\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
gradientmap_pars_fragment:"#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
lights_pars:"uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_BlinnPhong( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 matDiffColor = material.diffuseColor;\n\t\tvec3 matSpecColor = material.specularColor;\n\t\tvec3 lightColor   = rectAreaLight.color;\n\t\tfloat roughness = BlinnExponentToGGXRoughness( material.specularShininess );\n\t\tvec3 spec = Rect_Area_Light_Specular_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,\n\t\t\t\troughness,\n\t\t\t\tltcMat, ltcMag );\n\t\tvec3 diff = Rect_Area_Light_Diffuse_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );\n\t\treflectedLight.directSpecular += lightColor * matSpecColor * spec / PI2;\n\t\treflectedLight.directDiffuse  += lightColor * matDiffColor * diff / PI2;\n\t}\n#endif\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 matDiffColor = material.diffuseColor;\n\t\tvec3 matSpecColor = material.specularColor;\n\t\tvec3 lightColor   = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 spec = Rect_Area_Light_Specular_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,\n\t\t\t\troughness,\n\t\t\t\tltcMat, ltcMag );\n\t\tvec3 diff = Rect_Area_Light_Diffuse_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );\n\t\treflectedLight.directSpecular += lightColor * matSpecColor * spec;\n\t\treflectedLight.directDiffuse  += lightColor * matDiffColor * diff;\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
lights_template:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
logdepthbuf_fragment:"#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n",
map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",map_particle_fragment:"#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",map_particle_pars_fragment:"#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n",
metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.r;\n#endif\n",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
normal_flip:"#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n",normal_fragment:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",project_vertex:"#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.r;\n#endif\n",
roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",tonemapping_pars_fragment:"#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
uv_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n",
uv_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n",cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
cube_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
distanceRGBA_frag:"uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n",distanceRGBA_vert:"varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition;\n}\n",
equirect_frag:"uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",equirect_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n}\n",
meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n}\n",
meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n}\n",
meshphysical_frag:"#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshphysical_vert:"#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n",
normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n",
shadow_frag:"uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0 - getShadowMask() ) );\n}\n",shadow_vert:"#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n"};F.prototype={constructor:F,
isColor:!0,r:1,g:1,b:1,set:function(a){a&&a.isColor?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setScalar:function(a){this.b=this.g=this.r=a;return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(){function a(a,c,d){0>d&&(d+=1);1<d&&--d;return d<1/6?a+6*(c-a)*d:.5>d?c:d<2/3?a+6*(c-a)*(2/3-d):a}return function(b,
c,d){b=P.euclideanModulo(b,1);c=P.clamp(c,0,1);d=P.clamp(d,0,1);0===c?this.r=this.g=this.b=d:(c=.5>=d?d*(1+c):d+c-d*c,d=2*d-c,this.r=a(d,c,b+1/3),this.g=a(d,c,b),this.b=a(d,c,b-1/3));return this}}(),setStyle:function(a){function b(b){void 0!==b&&1>parseFloat(b)&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}var c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d=c[2];switch(c[1]){case "rgb":case "rgba":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=
Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/255,this.b=Math.min(255,parseInt(c[3],10))/255,b(c[5]),this;if(c=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,b(c[5]),this;break;case "hsl":case "hsla":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)){var d=parseFloat(c[1])/
360,e=parseInt(c[2],10)/100,f=parseInt(c[3],10)/100;b(c[5]);return this.setHSL(d,e,f)}}}else if(c=/^\#([A-Fa-f0-9]+)$/.exec(a)){c=c[1];d=c.length;if(3===d)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,this;if(6===d)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,this}a&&0<a.length&&(c=Vf[a],void 0!==
c?this.setHex(c):console.warn("THREE.Color: Unknown color "+a));return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);var c=0<b?1/b:1;this.r=Math.pow(a.r,c);this.g=Math.pow(a.g,c);this.b=Math.pow(a.b,c);return this},convertGammaToLinear:function(){var a=
this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a=a||{h:0,s:0,l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var m=e-f,f=.5>=h?m/(e+f):
m/(2-e-f);switch(e){case b:g=(c-d)/m+(c<d?6:0);break;case c:g=(d-b)/m+2;break;case d:g=(b-c)/m+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=
a;this.g+=a;this.b+=a;return this},sub:function(a){this.r=Math.max(0,this.r-a.r);this.g=Math.max(0,this.g-a.g);this.b=Math.max(0,this.b-a.b);return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a,b){void 0===b&&(b=
0);this.r=a[b];this.g=a[b+1];this.b=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a},toJSON:function(){return this.getHex()}};var Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,
cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,
floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,
lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,
moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,
silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};fb.prototype=Object.create(da.prototype);fb.prototype.constructor=fb;fb.prototype.isDataTexture=!0;var U={common:{diffuse:{value:new F(15658734)},opacity:{value:1},map:{value:null},offsetRepeat:{value:new fa(0,
0,1,1)},specularMap:{value:null},alphaMap:{value:null},envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new E(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},
roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:2.5E-4},fogNear:{value:1},fogFar:{value:2E3},fogColor:{value:new F(16777215)}},lights:{ambientLightColor:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},
direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},
width:{},height:{}}}},points:{diffuse:{value:new F(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},offsetRepeat:{value:new fa(0,0,1,1)}}},Ib={basic:{uniforms:Ja.merge([U.common,U.aomap,U.lightmap,U.fog]),vertexShader:ba.meshbasic_vert,fragmentShader:ba.meshbasic_frag},lambert:{uniforms:Ja.merge([U.common,U.aomap,U.lightmap,U.emissivemap,U.fog,U.lights,{emissive:{value:new F(0)}}]),vertexShader:ba.meshlambert_vert,fragmentShader:ba.meshlambert_frag},phong:{uniforms:Ja.merge([U.common,
U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.gradientmap,U.fog,U.lights,{emissive:{value:new F(0)},specular:{value:new F(1118481)},shininess:{value:30}}]),vertexShader:ba.meshphong_vert,fragmentShader:ba.meshphong_frag},standard:{uniforms:Ja.merge([U.common,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.roughnessmap,U.metalnessmap,U.fog,U.lights,{emissive:{value:new F(0)},roughness:{value:.5},metalness:{value:0},envMapIntensity:{value:1}}]),
vertexShader:ba.meshphysical_vert,fragmentShader:ba.meshphysical_frag},points:{uniforms:Ja.merge([U.points,U.fog]),vertexShader:ba.points_vert,fragmentShader:ba.points_frag},dashed:{uniforms:Ja.merge([U.common,U.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ba.linedashed_vert,fragmentShader:ba.linedashed_frag},depth:{uniforms:Ja.merge([U.common,U.displacementmap]),vertexShader:ba.depth_vert,fragmentShader:ba.depth_frag},normal:{uniforms:Ja.merge([U.common,U.bumpmap,U.normalmap,
U.displacementmap,{opacity:{value:1}}]),vertexShader:ba.normal_vert,fragmentShader:ba.normal_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ba.cube_vert,fragmentShader:ba.cube_frag},equirect:{uniforms:{tEquirect:{value:null},tFlip:{value:-1}},vertexShader:ba.equirect_vert,fragmentShader:ba.equirect_frag},distanceRGBA:{uniforms:{lightPos:{value:new q}},vertexShader:ba.distanceRGBA_vert,fragmentShader:ba.distanceRGBA_frag}};Ib.physical={uniforms:Ja.merge([Ib.standard.uniforms,
{clearCoat:{value:0},clearCoatRoughness:{value:0}}]),vertexShader:ba.meshphysical_vert,fragmentShader:ba.meshphysical_frag};tc.prototype={constructor:tc,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new E;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),clone:function(){return(new this.constructor).copy(this)},
copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(a){a=a||new E;return this.isEmpty()?a.set(0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){a=a||new E;return this.isEmpty()?a.set(0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);
return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y},getParameter:function(a,b){return(b||new E).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-
this.min.y))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0},clampPoint:function(a,b){return(b||new E).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new E;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);
this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}};var zf=0;X.prototype={constructor:X,isMaterial:!0,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else{var d=this[b];void 0===d?console.warn("THREE."+this.type+": '"+b+"' is not a property of this material."):
d&&d.isColor?d.set(c):d&&d.isVector3&&c&&c.isVector3?d.copy(c):this[b]="overdraw"===b?Number(c):c}}},toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=void 0===a;c&&(a={textures:{},images:{}});var d={metadata:{version:4.4,type:"Material",generator:"Material.toJSON"}};d.uuid=this.uuid;d.type=this.type;""!==this.name&&(d.name=this.name);this.color&&this.color.isColor&&(d.color=this.color.getHex());void 0!==this.roughness&&(d.roughness=this.roughness);
void 0!==this.metalness&&(d.metalness=this.metalness);this.emissive&&this.emissive.isColor&&(d.emissive=this.emissive.getHex());this.specular&&this.specular.isColor&&(d.specular=this.specular.getHex());void 0!==this.shininess&&(d.shininess=this.shininess);void 0!==this.clearCoat&&(d.clearCoat=this.clearCoat);void 0!==this.clearCoatRoughness&&(d.clearCoatRoughness=this.clearCoatRoughness);this.map&&this.map.isTexture&&(d.map=this.map.toJSON(a).uuid);this.alphaMap&&this.alphaMap.isTexture&&(d.alphaMap=
this.alphaMap.toJSON(a).uuid);this.lightMap&&this.lightMap.isTexture&&(d.lightMap=this.lightMap.toJSON(a).uuid);this.bumpMap&&this.bumpMap.isTexture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=this.bumpScale);this.normalMap&&this.normalMap.isTexture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalScale=this.normalScale.toArray());this.displacementMap&&this.displacementMap.isTexture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,d.displacementScale=this.displacementScale,d.displacementBias=
this.displacementBias);this.roughnessMap&&this.roughnessMap.isTexture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid);this.metalnessMap&&this.metalnessMap.isTexture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid);this.emissiveMap&&this.emissiveMap.isTexture&&(d.emissiveMap=this.emissiveMap.toJSON(a).uuid);this.specularMap&&this.specularMap.isTexture&&(d.specularMap=this.specularMap.toJSON(a).uuid);this.envMap&&this.envMap.isTexture&&(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=this.reflectivity);
this.gradientMap&&this.gradientMap.isTexture&&(d.gradientMap=this.gradientMap.toJSON(a).uuid);void 0!==this.size&&(d.size=this.size);void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation);1!==this.blending&&(d.blending=this.blending);2!==this.shading&&(d.shading=this.shading);0!==this.side&&(d.side=this.side);0!==this.vertexColors&&(d.vertexColors=this.vertexColors);1>this.opacity&&(d.opacity=this.opacity);!0===this.transparent&&(d.transparent=this.transparent);d.depthFunc=this.depthFunc;
d.depthTest=this.depthTest;d.depthWrite=this.depthWrite;0<this.alphaTest&&(d.alphaTest=this.alphaTest);!0===this.premultipliedAlpha&&(d.premultipliedAlpha=this.premultipliedAlpha);!0===this.wireframe&&(d.wireframe=this.wireframe);1<this.wireframeLinewidth&&(d.wireframeLinewidth=this.wireframeLinewidth);"round"!==this.wireframeLinecap&&(d.wireframeLinecap=this.wireframeLinecap);"round"!==this.wireframeLinejoin&&(d.wireframeLinejoin=this.wireframeLinejoin);d.skinning=this.skinning;d.morphTargets=this.morphTargets;
c&&(c=b(a.textures),a=b(a.images),0<c.length&&(d.textures=c),0<a.length&&(d.images=a));return d},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.fog=a.fog;this.lights=a.lights;this.blending=a.blending;this.side=a.side;this.shading=a.shading;this.vertexColors=a.vertexColors;this.opacity=a.opacity;this.transparent=a.transparent;this.blendSrc=a.blendSrc;this.blendDst=a.blendDst;this.blendEquation=a.blendEquation;this.blendSrcAlpha=a.blendSrcAlpha;this.blendDstAlpha=
a.blendDstAlpha;this.blendEquationAlpha=a.blendEquationAlpha;this.depthFunc=a.depthFunc;this.depthTest=a.depthTest;this.depthWrite=a.depthWrite;this.colorWrite=a.colorWrite;this.precision=a.precision;this.polygonOffset=a.polygonOffset;this.polygonOffsetFactor=a.polygonOffsetFactor;this.polygonOffsetUnits=a.polygonOffsetUnits;this.alphaTest=a.alphaTest;this.premultipliedAlpha=a.premultipliedAlpha;this.overdraw=a.overdraw;this.visible=a.visible;this.clipShadows=a.clipShadows;this.clipIntersection=a.clipIntersection;
a=a.clippingPlanes;var b=null;if(null!==a)for(var c=a.length,b=Array(c),d=0;d!==c;++d)b[d]=a[d].clone();this.clippingPlanes=b;return this},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};Object.assign(X.prototype,pa.prototype);Ia.prototype=Object.create(X.prototype);Ia.prototype.constructor=Ia;Ia.prototype.isShaderMaterial=!0;Ia.prototype.copy=function(a){X.prototype.copy.call(this,a);this.fragmentShader=a.fragmentShader;this.vertexShader=
a.vertexShader;this.uniforms=Ja.clone(a.uniforms);this.defines=a.defines;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.lights=a.lights;this.clipping=a.clipping;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;this.extensions=a.extensions;return this};Ia.prototype.toJSON=function(a){a=X.prototype.toJSON.call(this,a);a.uniforms=this.uniforms;a.vertexShader=this.vertexShader;a.fragmentShader=this.fragmentShader;return a};cb.prototype=
Object.create(X.prototype);cb.prototype.constructor=cb;cb.prototype.isMeshDepthMaterial=!0;cb.prototype.copy=function(a){X.prototype.copy.call(this,a);this.depthPacking=a.depthPacking;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this};Pa.prototype=
{constructor:Pa,isBox3:!0,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromArray:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,m=a.length;h<m;h+=3){var k=a[h],l=a[h+1],p=a[h+2];k<b&&(b=k);l<c&&(c=l);p<d&&(d=p);k>e&&(e=k);l>f&&(f=l);p>g&&(g=p)}this.min.set(b,c,d);this.max.set(e,f,g)},setFromBufferAttribute:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,m=a.count;h<m;h++){var k=a.getX(h),
l=a.getY(h),p=a.getZ(h);k<b&&(b=k);l<c&&(c=l);p<d&&(d=p);k>e&&(e=k);l>f&&(f=l);p>g&&(g=p)}this.min.set(b,c,d);this.max.set(e,f,g)},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new q;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(){var a=new q;return function(b){var c=this;b.updateMatrixWorld(!0);this.makeEmpty();
b.traverse(function(b){var e,f;e=b.geometry;if(void 0!==e)if(e.isGeometry){var g=e.vertices;e=0;for(f=g.length;e<f;e++)a.copy(g[e]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)}else if(e.isBufferGeometry&&(g=e.attributes.position,void 0!==g))for(e=0,f=g.count;e<f;e++)a.fromBufferAttribute(g,e).applyMatrix4(b.matrixWorld),c.expandByPoint(a)});return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=
this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(a){a=a||new q;return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){a=a||new q;return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);
this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z},getParameter:function(a,b){return(b||new q).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/
(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},intersectsSphere:function(){var a;return function(b){void 0===a&&(a=new q);this.clampPoint(b.center,a);return a.distanceToSquared(b.center)<=b.radius*b.radius}}(),intersectsPlane:function(a){var b,c;0<a.normal.x?(b=a.normal.x*this.min.x,c=a.normal.x*this.max.x):(b=a.normal.x*
this.max.x,c=a.normal.x*this.min.x);0<a.normal.y?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y);0<a.normal.z?(b+=a.normal.z*this.min.z,c+=a.normal.z*this.max.z):(b+=a.normal.z*this.max.z,c+=a.normal.z*this.min.z);return b<=a.constant&&c>=a.constant},clampPoint:function(a,b){return(b||new q).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new q;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),
getBoundingSphere:function(){var a=new q;return function(b){b=b||new Ea;this.getCenter(b.center);b.radius=.5*this.getSize(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);this.isEmpty()&&this.makeEmpty();return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new q,new q,new q,new q,new q,new q,new q,new q];return function(b){if(this.isEmpty())return this;a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(b);
a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);this.max.add(a);
return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}};Ea.prototype={constructor:Ea,set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=new Pa;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).getCenter(d);for(var e=0,f=0,g=b.length;f<g;f++)e=Math.max(e,d.distanceToSquared(b[f]));this.radius=Math.sqrt(e);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.center.copy(a.center);
this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},intersectsBox:function(a){return a.intersectsSphere(this)},intersectsPlane:function(a){return Math.abs(this.center.dot(a.normal)-a.constant)<=this.radius},
clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new q;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));return d},getBoundingBox:function(a){a=a||new Pa;a.set(this.center,this.center);a.expandByScalar(this.radius);return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&
a.radius===this.radius}};xa.prototype={constructor:xa,isMatrix3:!0,set:function(a,b,c,d,e,f,g,h,m){var k=this.elements;k[0]=a;k[1]=d;k[2]=g;k[3]=b;k[4]=e;k[5]=h;k[6]=c;k[7]=f;k[8]=m;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this},setFromMatrix4:function(a){a=a.elements;this.set(a[0],a[4],a[8],a[1],a[5],a[9],
a[2],a[6],a[10]);return this},applyToBufferAttribute:function(){var a;return function(b){void 0===a&&(a=new q);for(var c=0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix3(this),b.setXYZ(c,a.x,a.y,a.z);return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],m=a[7],a=a[8];return b*f*a-b*g*m-c*e*
a+c*g*h+d*e*m-d*f*h},getInverse:function(a,b){a&&a.isMatrix4&&console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");var c=a.elements,d=this.elements,e=c[0],f=c[1],g=c[2],h=c[3],m=c[4],k=c[5],l=c[6],p=c[7],c=c[8],n=c*m-k*p,t=k*l-c*h,q=p*h-m*l,r=e*n+f*t+g*q;if(0===r){if(!0===b)throw Error("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");console.warn("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");return this.identity()}r=1/r;d[0]=n*r;
d[1]=(g*p-c*f)*r;d[2]=(k*f-g*m)*r;d[3]=t*r;d[4]=(c*e-g*l)*r;d[5]=(g*h-k*e)*r;d[6]=q*r;d[7]=(f*l-p*e)*r;d[8]=(m*e-f*h)*r;return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},getNormalMatrix:function(a){return this.setFromMatrix4(a).getInverse(this).transpose()},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},
fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;9>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a}};la.prototype={constructor:la,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,
b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new q,b=new q;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,c);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},
negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,b){var c=this.distanceToPoint(a);return(b||new q).copy(this.normal).multiplyScalar(c)},intersectLine:function(){var a=new q;return function(b,c){var d=c||new q,e=b.delta(a),f=this.normal.dot(e);
if(0===f){if(0===this.distanceToPoint(b.start))return d.copy(b.start)}else return f=-(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start)}}(),intersectsLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectsBox:function(a){return a.intersectsPlane(this)},intersectsSphere:function(a){return a.intersectsPlane(this)},coplanarPoint:function(a){return(a||new q).copy(this.normal).multiplyScalar(-this.constant)},
applyMatrix4:function(){var a=new q,b=new xa;return function(c,d){var e=this.coplanarPoint(a).applyMatrix4(c),f=d||b.getNormalMatrix(c),f=this.normal.applyMatrix3(f).normalize();this.constant=-e.dot(f);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&a.constant===this.constant}};uc.prototype={constructor:uc,set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);
g[5].copy(f);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],m=c[6],k=c[7],l=c[8],p=c[9],n=c[10],t=c[11],q=c[12],r=c[13],x=c[14],c=c[15];b[0].setComponents(f-a,k-g,t-l,c-q).normalize();b[1].setComponents(f+a,k+g,t+l,c+q).normalize();b[2].setComponents(f+d,k+h,t+p,c+r).normalize();b[3].setComponents(f-
d,k-h,t-p,c-r).normalize();b[4].setComponents(f-e,k-m,t-n,c-x).normalize();b[5].setComponents(f+e,k+m,t+n,c+x).normalize();return this},intersectsObject:function(){var a=new Ea;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere).applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSprite:function(){var a=new Ea;return function(b){a.center.set(0,0,0);a.radius=.7071067811865476;a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),
intersectsSphere:function(a){var b=this.planes,c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new q,b=new q;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var g=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>
g&&0>f)return!1}return!0}}(),containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0}};db.prototype={constructor:db,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new q).copy(this.direction).multiplyScalar(a).add(this.origin)},lookAt:function(a){this.direction.copy(a).sub(this.origin).normalize();
return this},recast:function(){var a=new q;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){var c=b||new q;c.subVectors(a,this.origin);var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(a){return Math.sqrt(this.distanceSqToPoint(a))},distanceSqToPoint:function(){var a=new q;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceToSquared(b);
a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceToSquared(b)}}(),distanceSqToSegment:function(){var a=new q,b=new q,c=new q;return function(d,e,f,g){a.copy(d).add(e).multiplyScalar(.5);b.copy(e).sub(d).normalize();c.copy(this.origin).sub(a);var h=.5*d.distanceTo(e),m=-this.direction.dot(b),k=c.dot(this.direction),l=-c.dot(b),p=c.lengthSq(),n=Math.abs(1-m*m),t;0<n?(d=m*l-k,e=m*k-l,t=h*n,0<=d?e>=-t?e<=t?(h=1/n,d*=h,e*=h,m=d*(d+m*e+2*k)+e*(m*d+e+2*l)+p):(e=h,d=Math.max(0,-(m*
e+k)),m=-d*d+e*(e+2*l)+p):(e=-h,d=Math.max(0,-(m*e+k)),m=-d*d+e*(e+2*l)+p):e<=-t?(d=Math.max(0,-(-m*h+k)),e=0<d?-h:Math.min(Math.max(-h,-l),h),m=-d*d+e*(e+2*l)+p):e<=t?(d=0,e=Math.min(Math.max(-h,-l),h),m=e*(e+2*l)+p):(d=Math.max(0,-(m*h+k)),e=0<d?h:Math.min(Math.max(-h,-l),h),m=-d*d+e*(e+2*l)+p)):(e=0<m?-h:h,d=Math.max(0,-(m*e+k)),m=-d*d+e*(e+2*l)+p);f&&f.copy(this.direction).multiplyScalar(d).add(this.origin);g&&g.copy(b).multiplyScalar(e).add(a);return m}}(),intersectSphere:function(){var a=new q;
return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d,f=b.radius*b.radius;if(e>f)return null;f=Math.sqrt(f-e);e=d-f;d+=f;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c)}}(),intersectsSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,
b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},intersectsPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},intersectBox:function(a,b){var c,d,e,f,g;d=1/this.direction.x;f=1/this.direction.y;g=1/this.direction.z;var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=f?(e=(a.min.y-h.y)*f,f*=a.max.y-h.y):(e=(a.max.y-h.y)*f,f*=a.min.y-h.y);if(c>f||e>d)return null;if(e>c||c!==c)c=e;
if(f<d||d!==d)d=f;0<=g?(e=(a.min.z-h.z)*g,g*=a.max.z-h.z):(e=(a.max.z-h.z)*g,g*=a.min.z-h.z);if(c>g||e>d)return null;if(e>c||c!==c)c=e;if(g<d||d!==d)d=g;return 0>d?null:this.at(0<=c?c:d,b)},intersectsBox:function(){var a=new q;return function(b){return null!==this.intersectBox(b,a)}}(),intersectTriangle:function(){var a=new q,b=new q,c=new q,d=new q;return function(e,f,g,h,m){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<f){if(h)return null;h=1}else if(0>f)h=
-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));if(0>g||e+g>f)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/f,m)}}(),applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);this.direction.normalize();return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}};eb.RotationOrders=
"XYZ YZX ZXY XZY YXZ ZYX".split(" ");eb.DefaultOrder="XYZ";eb.prototype={constructor:eb,isEuler:!0,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get order(){return this._order},set order(a){this._order=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();return this},
clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this.onChangeCallback();return this},setFromRotationMatrix:function(a,b,c){var d=P.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],h=e[1],m=e[5],k=e[9],l=e[2],p=e[6],e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.99999>Math.abs(g)?(this._x=Math.atan2(-k,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(p,m),this._z=0)):"YXZ"===
b?(this._x=Math.asin(-d(k,-1,1)),.99999>Math.abs(k)?(this._y=Math.atan2(g,e),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-l,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(p,-1,1)),.99999>Math.abs(p)?(this._y=Math.atan2(-l,e),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(l,-1,1)),.99999>Math.abs(l)?(this._x=Math.atan2(p,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,m))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.99999>Math.abs(h)?(this._x=
Math.atan2(-k,m),this._y=Math.atan2(-l,a)):(this._x=0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=Math.asin(-d(f,-1,1)),.99999>Math.abs(f)?(this._x=Math.atan2(p,m),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-k,e),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;if(!1!==c)this.onChangeCallback();return this},setFromQuaternion:function(){var a;return function(b,c,d){void 0===a&&(a=new M);a.makeRotationFromQuaternion(b);return this.setFromRotationMatrix(a,
c,d)}}(),setFromVector3:function(a,b){return this.set(a.x,a.y,a.z,b||this._order)},reorder:function(){var a=new Z;return function(b){a.setFromEuler(this);return this.setFromQuaternion(a,b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=
this._y;a[b+2]=this._z;a[b+3]=this._order;return a},toVector3:function(a){return a?a.set(this._x,this._y,this._z):new q(this._x,this._y,this._z)},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){}};pd.prototype={constructor:pd,set:function(a){this.mask=1<<a},enable:function(a){this.mask|=1<<a},toggle:function(a){this.mask^=1<<a},disable:function(a){this.mask&=~(1<<a)},test:function(a){return 0!==(this.mask&a.mask)}};var Af=0;A.DefaultUp=new q(0,1,0);A.DefaultMatrixAutoUpdate=
!0;A.prototype={constructor:A,isObject3D:!0,applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new Z;return function(b,
c){a.setFromAxisAngle(b,c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=new q(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new q(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new q(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new q;return function(b,c){a.copy(b).applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));return this}}(),
translateX:function(){var a=new q(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new q(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new q(0,0,1);return function(b){return this.translateOnAxis(a,b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new M;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),lookAt:function(){var a=new M;return function(b){a.lookAt(b,
this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this;a&&a.isObject3D?(null!==a.parent&&a.parent.remove(a),a.parent=this,a.dispatchEvent({type:"added"}),this.children.push(a)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this},remove:function(a){if(1<
arguments.length)for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);b=this.children.indexOf(a);-1!==b&&(a.parent=null,a.dispatchEvent({type:"removed"}),this.children.splice(b,1))},getObjectById:function(a){return this.getObjectByProperty("id",a)},getObjectByName:function(a){return this.getObjectByProperty("name",a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,b);if(void 0!==e)return e}},
getWorldPosition:function(a){a=a||new q;this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var a=new q,b=new q;return function(c){c=c||new Z;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,c,b);return c}}(),getWorldRotation:function(){var a=new Z;return function(b){b=b||new eb;this.getWorldQuaternion(a);return b.setFromQuaternion(a,this.rotation.order,!1)}}(),getWorldScale:function(){var a=new q,b=new Z;return function(c){c=c||new q;
this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,b,c);return c}}(),getWorldDirection:function(){var a=new Z;return function(b){b=b||new q;this.getWorldQuaternion(a);return b.set(0,0,1).applyQuaternion(a)}}(),raycast:function(){},traverse:function(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverse(a)},traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverseVisible(a)}},traverseAncestors:function(a){var b=this.parent;
null!==b&&(a(b),b.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].updateMatrixWorld(a)},
toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=void 0===a||""===a,d={};c&&(a={geometries:{},materials:{},textures:{},images:{}},d.metadata={version:4.4,type:"Object",generator:"Object3D.toJSON"});var e={};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);"{}"!==JSON.stringify(this.userData)&&(e.userData=this.userData);!0===this.castShadow&&(e.castShadow=!0);!0===this.receiveShadow&&(e.receiveShadow=!0);!1===this.visible&&
(e.visible=!1);e.matrix=this.matrix.toArray();void 0!==this.geometry&&(void 0===a.geometries[this.geometry.uuid]&&(a.geometries[this.geometry.uuid]=this.geometry.toJSON(a)),e.geometry=this.geometry.uuid);void 0!==this.material&&(void 0===a.materials[this.material.uuid]&&(a.materials[this.material.uuid]=this.material.toJSON(a)),e.material=this.material.uuid);if(0<this.children.length){e.children=[];for(var f=0;f<this.children.length;f++)e.children.push(this.children[f].toJSON(a).object)}if(c){var c=
b(a.geometries),f=b(a.materials),g=b(a.textures);a=b(a.images);0<c.length&&(d.geometries=c);0<f.length&&(d.materials=f);0<g.length&&(d.textures=g);0<a.length&&(d.images=a)}d.object=e;return d},clone:function(a){return(new this.constructor).copy(this,a)},copy:function(a,b){void 0===b&&(b=!0);this.name=a.name;this.up.copy(a.up);this.position.copy(a.position);this.quaternion.copy(a.quaternion);this.scale.copy(a.scale);this.matrix.copy(a.matrix);this.matrixWorld.copy(a.matrixWorld);this.matrixAutoUpdate=
a.matrixAutoUpdate;this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate;this.layers.mask=a.layers.mask;this.visible=a.visible;this.castShadow=a.castShadow;this.receiveShadow=a.receiveShadow;this.frustumCulled=a.frustumCulled;this.renderOrder=a.renderOrder;this.userData=JSON.parse(JSON.stringify(a.userData));if(!0===b)for(var c=0;c<a.children.length;c++)this.add(a.children[c].clone());return this}};Object.assign(A.prototype,pa.prototype);ib.prototype={constructor:ib,set:function(a,b){this.start.copy(a);
this.end.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},getCenter:function(a){return(a||new q).addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){return(a||new q).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,b){var c=b||new q;return this.delta(c).multiplyScalar(a).add(this.start)},
closestPointToPointParameter:function(){var a=new q,b=new q;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=P.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new q;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)}};
ya.normal=function(){var a=new q;return function(b,c,d,e){e=e||new q;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}();ya.barycoordFromPoint=function(){var a=new q,b=new q,c=new q;return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);f=a.dot(c);var m=b.dot(b);g=b.dot(c);var k=d*m-e*e;h=h||new q;if(0===k)return h.set(-2,-1,-1);k=1/k;m=(m*f-e*g)*k;d=(d*g-e*f)*k;return h.set(1-m-
d,d,m)}}();ya.containsPoint=function(){var a=new q;return function(b,c,d,e){b=ya.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}();ya.prototype={constructor:ya,set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},
area:function(){var a=new q,b=new q;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,this.b);return.5*a.cross(b).length()}}(),midpoint:function(a){return(a||new q).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return ya.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new la).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return ya.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return ya.containsPoint(a,
this.a,this.b,this.c)},closestPointToPoint:function(){var a,b,c,d;return function(e,f){void 0===a&&(a=new la,b=[new ib,new ib,new ib],c=new q,d=new q);var g=f||new q,h=Infinity;a.setFromCoplanarPoints(this.a,this.b,this.c);a.projectPoint(e,c);if(!0===this.containsPoint(c))g.copy(c);else{b[0].set(this.a,this.b);b[1].set(this.b,this.c);b[2].set(this.c,this.a);for(var m=0;m<b.length;m++){b[m].closestPointToPoint(c,!0,d);var k=c.distanceToSquared(d);k<h&&(h=k,g.copy(d))}}return g}}(),equals:function(a){return a.a.equals(this.a)&&
a.b.equals(this.b)&&a.c.equals(this.c)}};ha.prototype={constructor:ha,clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a=a.a;this.b=a.b;this.c=a.c;this.normal.copy(a.normal);this.color.copy(a.color);this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++)this.vertexNormals[b]=a.vertexNormals[b].clone();b=0;for(c=a.vertexColors.length;b<c;b++)this.vertexColors[b]=a.vertexColors[b].clone();return this}};Ka.prototype=Object.create(X.prototype);Ka.prototype.constructor=
Ka;Ka.prototype.isMeshBasicMaterial=!0;Ka.prototype.copy=function(a){X.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;
this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;return this};w.prototype={constructor:w,isBufferAttribute:!0,set needsUpdate(a){!0===a&&this.version++},setArray:function(a){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=void 0!==a?a.length/this.itemSize:0;this.array=a},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=
new a.array.constructor(a.array);this.itemSize=a.itemSize;this.count=a.count;this.normalized=a.normalized;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},copyArray:function(a){this.array.set(a);return this},copyColorsArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",
d),f=new F);b[c++]=f.r;b[c++]=f.g;b[c++]=f.b}return this},copyIndicesArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];b[c++]=f.a;b[c++]=f.b;b[c++]=f.c}return this},copyVector2sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",d),f=new E);b[c++]=f.x;b[c++]=f.y}return this},copyVector3sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=
a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",d),f=new q);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z}return this},copyVector4sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),f=new fa);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z;b[c++]=f.w}return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},getX:function(a){return this.array[a*
this.itemSize]},setX:function(a,b){this.array[a*this.itemSize]=b;return this},getY:function(a){return this.array[a*this.itemSize+1]},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},getZ:function(a){return this.array[a*this.itemSize+2]},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},getW:function(a){return this.array[a*this.itemSize+3]},setW:function(a,b){this.array[a*this.itemSize+3]=b;return this},setXY:function(a,b,c){a*=this.itemSize;this.array[a+0]=b;this.array[a+
1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this},onUpload:function(a){this.onUploadCallback=a;return this},clone:function(){return(new this.constructor(this.array,this.itemSize)).copy(this)}};wc.prototype=Object.create(w.prototype);wc.prototype.constructor=wc;xc.prototype=Object.create(w.prototype);
xc.prototype.constructor=xc;yc.prototype=Object.create(w.prototype);yc.prototype.constructor=yc;zc.prototype=Object.create(w.prototype);zc.prototype.constructor=zc;Ua.prototype=Object.create(w.prototype);Ua.prototype.constructor=Ua;Ac.prototype=Object.create(w.prototype);Ac.prototype.constructor=Ac;Va.prototype=Object.create(w.prototype);Va.prototype.constructor=Va;V.prototype=Object.create(w.prototype);V.prototype.constructor=V;Bc.prototype=Object.create(w.prototype);Bc.prototype.constructor=Bc;
Object.assign(Je.prototype,{computeGroups:function(a){var b,c=[],d=void 0;a=a.faces;for(var e=0;e<a.length;e++){var f=a[e];f.materialIndex!==d&&(d=f.materialIndex,void 0!==b&&(b.count=3*e-b.start,c.push(b)),b={start:3*e,materialIndex:d})}void 0!==b&&(b.count=3*e-b.start,c.push(b));this.groups=c},fromGeometry:function(a){var b=a.faces,c=a.vertices,d=a.faceVertexUvs,e=d[0]&&0<d[0].length,f=d[1]&&0<d[1].length,g=a.morphTargets,h=g.length,m;if(0<h){m=[];for(var k=0;k<h;k++)m[k]=[];this.morphTargets.position=
m}var l=a.morphNormals,p=l.length,n;if(0<p){n=[];for(k=0;k<p;k++)n[k]=[];this.morphTargets.normal=n}for(var t=a.skinIndices,q=a.skinWeights,r=t.length===c.length,x=q.length===c.length,k=0;k<b.length;k++){var u=b[k];this.vertices.push(c[u.a],c[u.b],c[u.c]);var v=u.vertexNormals;3===v.length?this.normals.push(v[0],v[1],v[2]):(v=u.normal,this.normals.push(v,v,v));v=u.vertexColors;3===v.length?this.colors.push(v[0],v[1],v[2]):(v=u.color,this.colors.push(v,v,v));!0===e&&(v=d[0][k],void 0!==v?this.uvs.push(v[0],
v[1],v[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",k),this.uvs.push(new E,new E,new E)));!0===f&&(v=d[1][k],void 0!==v?this.uvs2.push(v[0],v[1],v[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",k),this.uvs2.push(new E,new E,new E)));for(v=0;v<h;v++){var L=g[v].vertices;m[v].push(L[u.a],L[u.b],L[u.c])}for(v=0;v<p;v++)L=l[v].vertexNormals[k],n[v].push(L.a,L.b,L.c);r&&this.skinIndices.push(t[u.a],t[u.b],t[u.c]);x&&this.skinWeights.push(q[u.a],
q[u.b],q[u.c])}this.computeGroups(a);this.verticesNeedUpdate=a.verticesNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this}});var Ud=0;I.prototype={constructor:I,isGeometry:!0,applyMatrix:function(a){for(var b=(new xa).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();
for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=this.verticesNeedUpdate=!0;return this},rotateX:function(){var a;return function(b){void 0===a&&(a=new M);a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a;return function(b){void 0===a&&(a=new M);a.makeRotationY(b);this.applyMatrix(a);return this}}(),
rotateZ:function(){var a;return function(b){void 0===a&&(a=new M);a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a;return function(b,c,d){void 0===a&&(a=new M);a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a;return function(b,c,d){void 0===a&&(a=new M);a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a;return function(b){void 0===a&&(a=new A);a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),
fromBufferGeometry:function(a){function b(a,b,d,e){var f=void 0!==g?[l[a].clone(),l[b].clone(),l[d].clone()]:[],t=void 0!==h?[c.colors[a].clone(),c.colors[b].clone(),c.colors[d].clone()]:[];e=new ha(a,b,d,f,t,e);c.faces.push(e);void 0!==m&&c.faceVertexUvs[0].push([p[a].clone(),p[b].clone(),p[d].clone()]);void 0!==k&&c.faceVertexUvs[1].push([n[a].clone(),n[b].clone(),n[d].clone()])}var c=this,d=null!==a.index?a.index.array:void 0,e=a.attributes,f=e.position.array,g=void 0!==e.normal?e.normal.array:
void 0,h=void 0!==e.color?e.color.array:void 0,m=void 0!==e.uv?e.uv.array:void 0,k=void 0!==e.uv2?e.uv2.array:void 0;void 0!==k&&(this.faceVertexUvs[1]=[]);for(var l=[],p=[],n=[],t=e=0;e<f.length;e+=3,t+=2)c.vertices.push(new q(f[e],f[e+1],f[e+2])),void 0!==g&&l.push(new q(g[e],g[e+1],g[e+2])),void 0!==h&&c.colors.push(new F(h[e],h[e+1],h[e+2])),void 0!==m&&p.push(new E(m[t],m[t+1])),void 0!==k&&n.push(new E(k[t],k[t+1]));if(void 0!==d)if(f=a.groups,0<f.length)for(e=0;e<f.length;e++)for(var H=f[e],
r=H.start,x=H.count,t=r,r=r+x;t<r;t+=3)b(d[t],d[t+1],d[t+2],H.materialIndex);else for(e=0;e<d.length;e+=3)b(d[e],d[e+1],d[e+2]);else for(e=0;e<f.length/3;e+=3)b(e,e+1,e+2);this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this},center:function(){this.computeBoundingBox();var a=this.boundingBox.getCenter().negate();this.translate(a.x,a.y,a.z);return a},normalize:function(){this.computeBoundingSphere();
var a=this.boundingSphere.center,b=this.boundingSphere.radius,b=0===b?1:1/b,c=new M;c.set(b,0,0,-b*a.x,0,b,0,-b*a.y,0,0,b,-b*a.z,0,0,0,1);this.applyMatrix(c);return this},computeFaceNormals:function(){for(var a=new q,b=new q,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){void 0===a&&(a=!0);var b,c,d;d=Array(this.vertices.length);
b=0;for(c=this.vertices.length;b<c;b++)d[b]=new q;if(a){var e,f,g,h=new q,m=new q;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=this.vertices[c.a],f=this.vertices[c.b],g=this.vertices[c.c],h.subVectors(g,f),m.subVectors(e,f),h.cross(m),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h)}else for(this.computeFaceNormals(),a=0,b=this.faces.length;a<b;a++)c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal);b=0;for(c=this.vertices.length;b<c;b++)d[b].normalize();a=0;for(b=this.faces.length;a<
b;a++)c=this.faces[a],e=c.vertexNormals,3===e.length?(e[0].copy(d[c.a]),e[1].copy(d[c.b]),e[2].copy(d[c.c])):(e[0]=d[c.a].clone(),e[1]=d[c.b].clone(),e[2]=d[c.c].clone());0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var a,b,c;this.computeFaceNormals();a=0;for(b=this.faces.length;a<b;a++){c=this.faces[a];var d=c.vertexNormals;3===d.length?(d[0].copy(c.normal),d[1].copy(c.normal),d[2].copy(c.normal)):(d[0]=c.normal.clone(),d[1]=c.normal.clone(),d[2]=c.normal.clone())}0<
this.faces.length&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++)for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=e.normal.clone(),e.__originalVertexNormals||(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone();var f=new I;f.faces=
this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;var g=this.morphNormals[a].vertexNormals,h,m;c=0;for(d=this.faces.length;c<d;c++)h=new q,m={a:new q,b:new q,c:new q},e.push(h),g.push(m)}g=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=
this.faces[c],h=g.faceNormals[c],m=g.vertexNormals[c],h.copy(e.normal),m.a.copy(e.vertexNormals[0]),m.b.copy(e.vertexNormals[1]),m.c.copy(e.vertexNormals[2])}c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Pa);
this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new Ea);this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(!1===(a&&a.isGeometry))console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a);else{var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,m=a.faces,k=this.faceVertexUvs[0],l=a.faceVertexUvs[0],p=this.colors,n=a.colors;void 0===c&&(c=0);void 0!==
b&&(d=(new xa).getNormalMatrix(b));a=0;for(var t=g.length;a<t;a++){var q=g[a].clone();void 0!==b&&q.applyMatrix4(b);f.push(q)}a=0;for(t=n.length;a<t;a++)p.push(n[a].clone());a=0;for(t=m.length;a<t;a++){var g=m[a],r=g.vertexNormals,n=g.vertexColors,p=new ha(g.a+e,g.b+e,g.c+e);p.normal.copy(g.normal);void 0!==d&&p.normal.applyMatrix3(d).normalize();b=0;for(f=r.length;b<f;b++)q=r[b].clone(),void 0!==d&&q.applyMatrix3(d).normalize(),p.vertexNormals.push(q);p.color.copy(g.color);b=0;for(f=n.length;b<f;b++)q=
n[b],p.vertexColors.push(q.clone());p.materialIndex=g.materialIndex+c;h.push(p)}a=0;for(t=l.length;a<t;a++)if(c=l[a],d=[],void 0!==c){b=0;for(f=c.length;b<f;b++)d.push(c[b].clone());k.push(d)}}},mergeMesh:function(a){!1===(a&&a.isMesh)?console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a):(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix))},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,g;f=0;for(g=this.vertices.length;f<g;f++)d=this.vertices[f],
d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];a=[];f=0;for(g=this.faces.length;f<g;f++)for(e=this.faces[f],e.a=c[e.a],e.b=c[e.b],e.c=c[e.c],e=[e.a,e.b,e.c],d=0;3>d;d++)if(e[d]===e[(d+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(e=a[f],this.faces.splice(e,1),c=0,g=this.faceVertexUvs.length;c<g;c++)this.faceVertexUvs[c].splice(e,1);f=this.vertices.length-b.length;this.vertices=b;return f},sortFacesByMaterialIndex:function(){for(var a=
this.faces,b=a.length,c=0;c<b;c++)a[c]._id=c;a.sort(function(a,b){return a.materialIndex-b.materialIndex});var d=this.faceVertexUvs[0],e=this.faceVertexUvs[1],f,g;d&&d.length===b&&(f=[]);e&&e.length===b&&(g=[]);for(c=0;c<b;c++){var h=a[c]._id;f&&f.push(d[h]);g&&g.push(e[h])}f&&(this.faceVertexUvs[0]=f);g&&(this.faceVertexUvs[1]=g)},toJSON:function(){function a(a,b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==k[b])return k[b];k[b]=m.length/
3;m.push(a.x,a.y,a.z);return k[b]}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==p[b])return p[b];p[b]=l.length;l.push(a.getHex());return p[b]}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==t[b])return t[b];t[b]=n.length/2;n.push(a.x,a.y);return t[b]}var e={metadata:{version:4.4,type:"Geometry",generator:"Geometry.toJSON"}};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var f=this.parameters,g;for(g in f)void 0!==
f[g]&&(e[g]=f[g]);return e}f=[];for(g=0;g<this.vertices.length;g++){var h=this.vertices[g];f.push(h.x,h.y,h.z)}var h=[],m=[],k={},l=[],p={},n=[],t={};for(g=0;g<this.faces.length;g++){var q=this.faces[g],r=void 0!==this.faceVertexUvs[0][g],x=0<q.normal.length(),u=0<q.vertexNormals.length,v=1!==q.color.r||1!==q.color.g||1!==q.color.b,L=0<q.vertexColors.length,y=0,y=a(y,0,0),y=a(y,1,!0),y=a(y,2,!1),y=a(y,3,r),y=a(y,4,x),y=a(y,5,u),y=a(y,6,v),y=a(y,7,L);h.push(y);h.push(q.a,q.b,q.c);h.push(q.materialIndex);
r&&(r=this.faceVertexUvs[0][g],h.push(d(r[0]),d(r[1]),d(r[2])));x&&h.push(b(q.normal));u&&(x=q.vertexNormals,h.push(b(x[0]),b(x[1]),b(x[2])));v&&h.push(c(q.color));L&&(q=q.vertexColors,h.push(c(q[0]),c(q[1]),c(q[2])))}e.data={};e.data.vertices=f;e.data.normals=m;0<l.length&&(e.data.colors=l);0<n.length&&(e.data.uvs=[n]);e.data.faces=h;return e},clone:function(){return(new I).copy(this)},copy:function(a){this.vertices=[];this.faces=[];this.faceVertexUvs=[[]];this.colors=[];for(var b=a.vertices,c=0,
d=b.length;c<d;c++)this.vertices.push(b[c].clone());b=a.colors;c=0;for(d=b.length;c<d;c++)this.colors.push(b[c].clone());b=a.faces;c=0;for(d=b.length;c<d;c++)this.faces.push(b[c].clone());c=0;for(d=a.faceVertexUvs.length;c<d;c++){b=a.faceVertexUvs[c];void 0===this.faceVertexUvs[c]&&(this.faceVertexUvs[c]=[]);for(var e=0,f=b.length;e<f;e++){for(var g=b[e],h=[],m=0,k=g.length;m<k;m++)h.push(g[m].clone());this.faceVertexUvs[c].push(h)}}return this},dispose:function(){this.dispatchEvent({type:"dispose"})}};
Object.assign(I.prototype,pa.prototype);G.prototype={constructor:G,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(a){this.index=a},addAttribute:function(a,b,c){if(!1===(b&&b.isBufferAttribute)&&!1===(b&&b.isInterleavedBufferAttribute))console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.addAttribute(a,new w(b,c));else if("index"===a)console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(b);
else return this.attributes[a]=b,this},getAttribute:function(a){return this.attributes[a]},removeAttribute:function(a){delete this.attributes[a];return this},addGroup:function(a,b,c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(a,b){this.drawRange.start=a;this.drawRange.count=b},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(a.applyToBufferAttribute(b),b.needsUpdate=!0);b=this.attributes.normal;
void 0!==b&&((new xa).getNormalMatrix(a).applyToBufferAttribute(b),b.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();return this},rotateX:function(){var a;return function(b){void 0===a&&(a=new M);a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a;return function(b){void 0===a&&(a=new M);a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a;return function(b){void 0===
a&&(a=new M);a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a;return function(b,c,d){void 0===a&&(a=new M);a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a;return function(b,c,d){void 0===a&&(a=new M);a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a;return function(b){void 0===a&&(a=new A);a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),center:function(){this.computeBoundingBox();var a=this.boundingBox.getCenter().negate();
this.translate(a.x,a.y,a.z);return a},setFromObject:function(a){var b=a.geometry;if(a.isPoints||a.isLine){a=new V(3*b.vertices.length,3);var c=new V(3*b.colors.length,3);this.addAttribute("position",a.copyVector3sArray(b.vertices));this.addAttribute("color",c.copyColorsArray(b.colors));b.lineDistances&&b.lineDistances.length===b.vertices.length&&(a=new V(b.lineDistances.length,1),this.addAttribute("lineDistance",a.copyArray(b.lineDistances)));null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone());
null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone())}else a.isMesh&&b&&b.isGeometry&&this.fromGeometry(b);return this},updateFromObject:function(a){var b=a.geometry;if(a.isMesh){var c=b.__directGeometry;!0===b.elementsNeedUpdate&&(c=void 0,b.elementsNeedUpdate=!1);if(void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate;c.normalsNeedUpdate=b.normalsNeedUpdate;c.colorsNeedUpdate=b.colorsNeedUpdate;c.uvsNeedUpdate=b.uvsNeedUpdate;c.groupsNeedUpdate=b.groupsNeedUpdate;
b.verticesNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.groupsNeedUpdate=!1;b=c}!0===b.verticesNeedUpdate&&(c=this.attributes.position,void 0!==c&&(c.copyVector3sArray(b.vertices),c.needsUpdate=!0),b.verticesNeedUpdate=!1);!0===b.normalsNeedUpdate&&(c=this.attributes.normal,void 0!==c&&(c.copyVector3sArray(b.normals),c.needsUpdate=!0),b.normalsNeedUpdate=!1);!0===b.colorsNeedUpdate&&(c=this.attributes.color,void 0!==c&&(c.copyColorsArray(b.colors),c.needsUpdate=!0),
b.colorsNeedUpdate=!1);b.uvsNeedUpdate&&(c=this.attributes.uv,void 0!==c&&(c.copyVector2sArray(b.uvs),c.needsUpdate=!0),b.uvsNeedUpdate=!1);b.lineDistancesNeedUpdate&&(c=this.attributes.lineDistance,void 0!==c&&(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1);b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=b.groups,b.groupsNeedUpdate=!1);return this},fromGeometry:function(a){a.__directGeometry=(new Je).fromGeometry(a);return this.fromDirectGeometry(a.__directGeometry)},
fromDirectGeometry:function(a){var b=new Float32Array(3*a.vertices.length);this.addAttribute("position",(new w(b,3)).copyVector3sArray(a.vertices));0<a.normals.length&&(b=new Float32Array(3*a.normals.length),this.addAttribute("normal",(new w(b,3)).copyVector3sArray(a.normals)));0<a.colors.length&&(b=new Float32Array(3*a.colors.length),this.addAttribute("color",(new w(b,3)).copyColorsArray(a.colors)));0<a.uvs.length&&(b=new Float32Array(2*a.uvs.length),this.addAttribute("uv",(new w(b,2)).copyVector2sArray(a.uvs)));
0<a.uvs2.length&&(b=new Float32Array(2*a.uvs2.length),this.addAttribute("uv2",(new w(b,2)).copyVector2sArray(a.uvs2)));0<a.indices.length&&(b=new (65535<a.vertices.length?Uint32Array:Uint16Array)(3*a.indices.length),this.setIndex((new w(b,1)).copyIndicesArray(a.indices)));this.groups=a.groups;for(var c in a.morphTargets){for(var b=[],d=a.morphTargets[c],e=0,f=d.length;e<f;e++){var g=d[e],h=new V(3*g.length,3);b.push(h.copyVector3sArray(g))}this.morphAttributes[c]=b}0<a.skinIndices.length&&(c=new V(4*
a.skinIndices.length,4),this.addAttribute("skinIndex",c.copyVector4sArray(a.skinIndices)));0<a.skinWeights.length&&(c=new V(4*a.skinWeights.length,4),this.addAttribute("skinWeight",c.copyVector4sArray(a.skinWeights)));null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Pa);var a=this.attributes.position;void 0!==a?this.boundingBox.setFromBufferAttribute(a):
this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){var a=new Pa,b=new q;return function(){null===this.boundingSphere&&(this.boundingSphere=new Ea);var c=this.attributes.position;if(c){var d=this.boundingSphere.center;a.setFromBufferAttribute(c);
a.getCenter(d);for(var e=0,f=0,g=c.count;f<g;f++)b.x=c.getX(f),b.y=c.getY(f),b.z=c.getZ(f),e=Math.max(e,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(e);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var a=this.index,b=this.attributes,c=this.groups;if(b.position){var d=b.position.array;
if(void 0===b.normal)this.addAttribute("normal",new w(new Float32Array(d.length),3));else for(var e=b.normal.array,f=0,g=e.length;f<g;f++)e[f]=0;var e=b.normal.array,h,m,k,l=new q,p=new q,n=new q,t=new q,H=new q;if(a){a=a.array;0===c.length&&this.addGroup(0,a.length);for(var r=0,x=c.length;r<x;++r)for(f=c[r],g=f.start,h=f.count,f=g,g+=h;f<g;f+=3)h=3*a[f+0],m=3*a[f+1],k=3*a[f+2],l.fromArray(d,h),p.fromArray(d,m),n.fromArray(d,k),t.subVectors(n,p),H.subVectors(l,p),t.cross(H),e[h]+=t.x,e[h+1]+=t.y,
e[h+2]+=t.z,e[m]+=t.x,e[m+1]+=t.y,e[m+2]+=t.z,e[k]+=t.x,e[k+1]+=t.y,e[k+2]+=t.z}else for(f=0,g=d.length;f<g;f+=9)l.fromArray(d,f),p.fromArray(d,f+3),n.fromArray(d,f+6),t.subVectors(n,p),H.subVectors(l,p),t.cross(H),e[f]=t.x,e[f+1]=t.y,e[f+2]=t.z,e[f+3]=t.x,e[f+4]=t.y,e[f+5]=t.z,e[f+6]=t.x,e[f+7]=t.y,e[f+8]=t.z;this.normalizeNormals();b.normal.needsUpdate=!0}},merge:function(a,b){if(!1===(a&&a.isBufferGeometry))console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
a);else{void 0===b&&(b=0);var c=this.attributes,d;for(d in c)if(void 0!==a.attributes[d])for(var e=c[d].array,f=a.attributes[d],g=f.array,h=0,f=f.itemSize*b;h<g.length;h++,f++)e[f]=g[h];return this}},normalizeNormals:function(){for(var a=this.attributes.normal.array,b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},toNonIndexed:function(){if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),
this;var a=new G,b=this.index.array,c=this.attributes,d;for(d in c){for(var e=c[d],f=e.array,e=e.itemSize,g=new f.constructor(b.length*e),h,m=0,k=0,l=b.length;k<l;k++){h=b[k]*e;for(var p=0;p<e;p++)g[m++]=f[h++]}a.addAttribute(d,new w(g,e))}return a},toJSON:function(){var a={metadata:{version:4.4,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};a.uuid=this.uuid;a.type=this.type;""!==this.name&&(a.name=this.name);if(void 0!==this.parameters){var b=this.parameters,c;for(c in b)void 0!==b[c]&&
(a[c]=b[c]);return a}a.data={attributes:{}};var d=this.index;null!==d&&(b=Array.prototype.slice.call(d.array),a.data.index={type:d.array.constructor.name,array:b});d=this.attributes;for(c in d){var e=d[c],b=Array.prototype.slice.call(e.array);a.data.attributes[c]={itemSize:e.itemSize,type:e.array.constructor.name,array:b,normalized:e.normalized}}c=this.groups;0<c.length&&(a.data.groups=JSON.parse(JSON.stringify(c)));c=this.boundingSphere;null!==c&&(a.data.boundingSphere={center:c.center.toArray(),
radius:c.radius});return a},clone:function(){return(new G).copy(this)},copy:function(a){var b,c,d;this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;c=a.index;null!==c&&this.setIndex(c.clone());c=a.attributes;for(b in c)this.addAttribute(b,c[b].clone());var e=a.morphAttributes;for(b in e){var f=[],g=e[b];c=0;for(d=g.length;c<d;c++)f.push(g[c].clone());this.morphAttributes[b]=f}b=a.groups;c=0;for(d=b.length;c<d;c++)e=
b[c],this.addGroup(e.start,e.count,e.materialIndex);b=a.boundingBox;null!==b&&(this.boundingBox=b.clone());b=a.boundingSphere;null!==b&&(this.boundingSphere=b.clone());this.drawRange.start=a.drawRange.start;this.drawRange.count=a.drawRange.count;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}};G.MaxIndex=65535;Object.assign(G.prototype,pa.prototype);za.prototype=Object.assign(Object.create(A.prototype),{constructor:za,isMesh:!0,setDrawMode:function(a){this.drawMode=a},copy:function(a){A.prototype.copy.call(this,
a);this.drawMode=a.drawMode;return this},updateMorphTargets:function(){var a=this.geometry.morphTargets;if(void 0!==a&&0<a.length){this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var b=0,c=a.length;b<c;b++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[a[b].name]=b}},raycast:function(){function a(a,b,c,d,e,f,g){ya.barycoordFromPoint(a,b,c,d,r);e.multiplyScalar(r.x);f.multiplyScalar(r.y);g.multiplyScalar(r.z);e.add(f).add(g);return e.clone()}function b(a,b,c,d,e,f,g){var h=
a.material;if(null===(1===h.side?c.intersectTriangle(f,e,d,!0,g):c.intersectTriangle(d,e,f,2!==h.side,g)))return null;u.copy(g);u.applyMatrix4(a.matrixWorld);c=b.ray.origin.distanceTo(u);return c<b.near||c>b.far?null:{distance:c,point:u.clone(),object:a}}function c(c,d,e,f,k,l,p,q){g.fromBufferAttribute(f,l);h.fromBufferAttribute(f,p);m.fromBufferAttribute(f,q);if(c=b(c,d,e,g,h,m,x))k&&(n.fromBufferAttribute(k,l),t.fromBufferAttribute(k,p),H.fromBufferAttribute(k,q),c.uv=a(x,g,h,m,n,t,H)),c.face=
new ha(l,p,q,ya.normal(g,h,m)),c.faceIndex=l;return c}var d=new M,e=new db,f=new Ea,g=new q,h=new q,m=new q,k=new q,l=new q,p=new q,n=new E,t=new E,H=new E,r=new q,x=new q,u=new q;return function(q,r){var u=this.geometry,D=this.material,w=this.matrixWorld;if(void 0!==D&&(null===u.boundingSphere&&u.computeBoundingSphere(),f.copy(u.boundingSphere),f.applyMatrix4(w),!1!==q.ray.intersectsSphere(f)&&(d.getInverse(w),e.copy(q.ray).applyMatrix4(d),null===u.boundingBox||!1!==e.intersectsBox(u.boundingBox)))){var C;
if(u.isBufferGeometry){var J,E,D=u.index,A=u.attributes.position,w=u.attributes.uv,F,G;if(null!==D)for(F=0,G=D.count;F<G;F+=3){if(u=D.getX(F),J=D.getX(F+1),E=D.getX(F+2),C=c(this,q,e,A,w,u,J,E))C.faceIndex=Math.floor(F/3),r.push(C)}else for(F=0,G=A.count;F<G;F+=3)if(u=F,J=F+1,E=F+2,C=c(this,q,e,A,w,u,J,E))C.index=u,r.push(C)}else if(u.isGeometry){var I,M,w=D&&D.isMultiMaterial;F=!0===w?D.materials:null;G=u.vertices;J=u.faces;E=u.faceVertexUvs[0];0<E.length&&(A=E);for(var N=0,O=J.length;N<O;N++){var R=
J[N];C=!0===w?F[R.materialIndex]:D;if(void 0!==C){E=G[R.a];I=G[R.b];M=G[R.c];if(!0===C.morphTargets){C=u.morphTargets;var S=this.morphTargetInfluences;g.set(0,0,0);h.set(0,0,0);m.set(0,0,0);for(var U=0,W=C.length;U<W;U++){var P=S[U];if(0!==P){var K=C[U].vertices;g.addScaledVector(k.subVectors(K[R.a],E),P);h.addScaledVector(l.subVectors(K[R.b],I),P);m.addScaledVector(p.subVectors(K[R.c],M),P)}}g.add(E);h.add(I);m.add(M);E=g;I=h;M=m}if(C=b(this,q,e,E,I,M,x))A&&(S=A[N],n.copy(S[0]),t.copy(S[1]),H.copy(S[2]),
C.uv=a(x,E,I,M,n,t,H)),C.face=R,C.faceIndex=N,r.push(C)}}}}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});Jb.prototype=Object.create(I.prototype);Jb.prototype.constructor=Jb;jb.prototype=Object.create(G.prototype);jb.prototype.constructor=jb;Cc.prototype=Object.create(I.prototype);Cc.prototype.constructor=Cc;kb.prototype=Object.create(G.prototype);kb.prototype.constructor=kb;sa.prototype=Object.create(A.prototype);sa.prototype.constructor=sa;sa.prototype.isCamera=
!0;sa.prototype.getWorldDirection=function(){var a=new Z;return function(b){b=b||new q;this.getWorldQuaternion(a);return b.set(0,0,-1).applyQuaternion(a)}}();sa.prototype.lookAt=function(){var a=new M;return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a)}}();sa.prototype.clone=function(){return(new this.constructor).copy(this)};sa.prototype.copy=function(a){A.prototype.copy.call(this,a);this.matrixWorldInverse.copy(a.matrixWorldInverse);this.projectionMatrix.copy(a.projectionMatrix);
return this};Ga.prototype=Object.assign(Object.create(sa.prototype),{constructor:Ga,isPerspectiveCamera:!0,copy:function(a){sa.prototype.copy.call(this,a);this.fov=a.fov;this.zoom=a.zoom;this.near=a.near;this.far=a.far;this.focus=a.focus;this.aspect=a.aspect;this.view=null===a.view?null:Object.assign({},a.view);this.filmGauge=a.filmGauge;this.filmOffset=a.filmOffset;return this},setFocalLength:function(a){a=.5*this.getFilmHeight()/a;this.fov=2*P.RAD2DEG*Math.atan(a);this.updateProjectionMatrix()},
getFocalLength:function(){var a=Math.tan(.5*P.DEG2RAD*this.fov);return.5*this.getFilmHeight()/a},getEffectiveFOV:function(){return 2*P.RAD2DEG*Math.atan(Math.tan(.5*P.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(a,b,c,d,e,f){this.aspect=a/b;this.view={fullWidth:a,fullHeight:b,offsetX:c,offsetY:d,width:e,height:f};this.updateProjectionMatrix()},clearViewOffset:function(){this.view=
null;this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=this.near,b=a*Math.tan(.5*P.DEG2RAD*this.fov)/this.zoom,c=2*b,d=this.aspect*c,e=-.5*d,f=this.view;if(null!==f)var g=f.fullWidth,h=f.fullHeight,e=e+f.offsetX*d/g,b=b-f.offsetY*c/h,d=f.width/g*d,c=f.height/h*c;f=this.filmOffset;0!==f&&(e+=a*f/this.getFilmWidth());this.projectionMatrix.makePerspective(e,e+d,b,b-c,a,this.far)},toJSON:function(a){a=A.prototype.toJSON.call(this,a);a.object.fov=this.fov;a.object.zoom=this.zoom;a.object.near=
this.near;a.object.far=this.far;a.object.focus=this.focus;a.object.aspect=this.aspect;null!==this.view&&(a.object.view=Object.assign({},this.view));a.object.filmGauge=this.filmGauge;a.object.filmOffset=this.filmOffset;return a}});Kb.prototype=Object.assign(Object.create(sa.prototype),{constructor:Kb,isOrthographicCamera:!0,copy:function(a){sa.prototype.copy.call(this,a);this.left=a.left;this.right=a.right;this.top=a.top;this.bottom=a.bottom;this.near=a.near;this.far=a.far;this.zoom=a.zoom;this.view=
null===a.view?null:Object.assign({},a.view);return this},setViewOffset:function(a,b,c,d,e,f){this.view={fullWidth:a,fullHeight:b,offsetX:c,offsetY:d,width:e,height:f};this.updateProjectionMatrix()},clearViewOffset:function(){this.view=null;this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2,e=c-a,c=c+a,a=d+b,b=d-b;if(null!==this.view)var c=this.zoom/
(this.view.width/this.view.fullWidth),b=this.zoom/(this.view.height/this.view.fullHeight),f=(this.right-this.left)/this.view.width,d=(this.top-this.bottom)/this.view.height,e=e+this.view.offsetX/c*f,c=e+this.view.width/c*f,a=a-this.view.offsetY/b*d,b=a-this.view.height/b*d;this.projectionMatrix.makeOrthographic(e,c,a,b,this.near,this.far)},toJSON:function(a){a=A.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.left=this.left;a.object.right=this.right;a.object.top=this.top;a.object.bottom=
this.bottom;a.object.near=this.near;a.object.far=this.far;null!==this.view&&(a.object.view=Object.assign({},this.view));return a}});var Kf=0;Lb.prototype.isFogExp2=!0;Lb.prototype.clone=function(){return new Lb(this.color.getHex(),this.density)};Lb.prototype.toJSON=function(a){return{type:"FogExp2",color:this.color.getHex(),density:this.density}};Mb.prototype.isFog=!0;Mb.prototype.clone=function(){return new Mb(this.color.getHex(),this.near,this.far)};Mb.prototype.toJSON=function(a){return{type:"Fog",
color:this.color.getHex(),near:this.near,far:this.far}};lb.prototype=Object.create(A.prototype);lb.prototype.constructor=lb;lb.prototype.copy=function(a,b){A.prototype.copy.call(this,a,b);null!==a.background&&(this.background=a.background.clone());null!==a.fog&&(this.fog=a.fog.clone());null!==a.overrideMaterial&&(this.overrideMaterial=a.overrideMaterial.clone());this.autoUpdate=a.autoUpdate;this.matrixAutoUpdate=a.matrixAutoUpdate;return this};lb.prototype.toJSON=function(a){var b=A.prototype.toJSON.call(this,
a);null!==this.background&&(b.object.background=this.background.toJSON(a));null!==this.fog&&(b.object.fog=this.fog.toJSON());return b};Yd.prototype=Object.assign(Object.create(A.prototype),{constructor:Yd,isLensFlare:!0,copy:function(a){A.prototype.copy.call(this,a);this.positionScreen.copy(a.positionScreen);this.customUpdateCallback=a.customUpdateCallback;for(var b=0,c=a.lensFlares.length;b<c;b++)this.lensFlares.push(a.lensFlares[b]);return this},add:function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===
c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new F(16777215));void 0===d&&(d=1);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:0,opacity:f,color:e,blending:d})},updateLensFlares:function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=c.x*Math.PI*.25,c.rotation+=.25*(c.wantedRotation-
c.rotation)}});mb.prototype=Object.create(X.prototype);mb.prototype.constructor=mb;mb.prototype.copy=function(a){X.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.rotation=a.rotation;return this};Fc.prototype=Object.assign(Object.create(A.prototype),{constructor:Fc,isSprite:!0,raycast:function(){var a=new q;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.distanceSqToPoint(a);d>this.scale.x*this.scale.y/4||c.push({distance:Math.sqrt(d),point:this.position,
face:null,object:this})}}(),clone:function(){return(new this.constructor(this.material)).copy(this)}});Gc.prototype=Object.assign(Object.create(A.prototype),{constructor:Gc,copy:function(a){A.prototype.copy.call(this,a,!1);a=a.levels;for(var b=0,c=a.length;b<c;b++){var d=a[b];this.addLevel(d.object.clone(),d.distance)}return this},addLevel:function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++);c.splice(d,0,{distance:b,object:a});this.add(a)},getObjectForDistance:function(a){for(var b=
this.levels,c=1,d=b.length;c<d&&!(a<b[c].distance);c++);return b[c-1].object},raycast:function(){var a=new q;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c)}}(),update:function(){var a=new q,b=new q;return function(c){var d=this.levels;if(1<d.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);d[0].object.visible=!0;for(var e=1,f=d.length;e<f;e++)if(c>=d[e].distance)d[e-
1].object.visible=!1,d[e].object.visible=!0;else break;for(;e<f;e++)d[e].object.visible=!1}}}(),toJSON:function(a){a=A.prototype.toJSON.call(this,a);a.object.levels=[];for(var b=this.levels,c=0,d=b.length;c<d;c++){var e=b[c];a.object.levels.push({object:e.object.uuid,distance:e.distance})}return a}});Object.assign(qd.prototype,{calculateInverses:function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new M;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}},
pose:function(){for(var a,b=0,c=this.bones.length;b<c;b++)(a=this.bones[b])&&a.matrixWorld.getInverse(this.boneInverses[b]);b=0;for(c=this.bones.length;b<c;b++)if(a=this.bones[b])a.parent&&a.parent.isBone?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)},update:function(){var a=new M;return function(){for(var b=0,c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b]?this.bones[b].matrixWorld:
this.identityMatrix,this.boneInverses[b]),a.toArray(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}(),clone:function(){return new qd(this.bones,this.boneInverses,this.useVertexTexture)}});rd.prototype=Object.assign(Object.create(A.prototype),{constructor:rd,isBone:!0});sd.prototype=Object.assign(Object.create(za.prototype),{constructor:sd,isSkinnedMesh:!0,bind:function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),
b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){if(this.geometry&&this.geometry.isGeometry)for(var a=0;a<this.geometry.skinWeights.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1,0,0,0)}else if(this.geometry&&this.geometry.isBufferGeometry)for(var b=new fa,d=this.geometry.attributes.skinWeight,a=0;a<d.count;a++)b.x=d.getX(a),b.y=d.getY(a),
b.z=d.getZ(a),b.w=d.getW(a),c=1/b.lengthManhattan(),Infinity!==c?b.multiplyScalar(c):b.set(1,0,0,0),d.setXYZW(a,b.x,b.y,b.z,b.w)},updateMatrixWorld:function(a){za.prototype.updateMatrixWorld.call(this,!0);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh unrecognized bindMode: "+this.bindMode)},clone:function(){return(new this.constructor(this.geometry,this.material,
this.skeleton.useVertexTexture)).copy(this)}});ia.prototype=Object.create(X.prototype);ia.prototype.constructor=ia;ia.prototype.isLineBasicMaterial=!0;ia.prototype.copy=function(a){X.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.linecap=a.linecap;this.linejoin=a.linejoin;return this};Wa.prototype=Object.assign(Object.create(A.prototype),{constructor:Wa,isLine:!0,raycast:function(){var a=new M,b=new db,c=new Ea;return function(d,e){var f=d.linePrecision,f=f*f,
g=this.geometry,h=this.matrixWorld;null===g.boundingSphere&&g.computeBoundingSphere();c.copy(g.boundingSphere);c.applyMatrix4(h);if(!1!==d.ray.intersectsSphere(c)){a.getInverse(h);b.copy(d.ray).applyMatrix4(a);var m=new q,k=new q,h=new q,l=new q,p=this&&this.isLineSegments?2:1;if(g.isBufferGeometry){var n=g.index,t=g.attributes.position.array;if(null!==n)for(var n=n.array,g=0,H=n.length-1;g<H;g+=p){var r=n[g+1];m.fromArray(t,3*n[g]);k.fromArray(t,3*r);r=b.distanceSqToSegment(m,k,l,h);r>f||(l.applyMatrix4(this.matrixWorld),
r=d.ray.origin.distanceTo(l),r<d.near||r>d.far||e.push({distance:r,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else for(g=0,H=t.length/3-1;g<H;g+=p)m.fromArray(t,3*g),k.fromArray(t,3*g+3),r=b.distanceSqToSegment(m,k,l,h),r>f||(l.applyMatrix4(this.matrixWorld),r=d.ray.origin.distanceTo(l),r<d.near||r>d.far||e.push({distance:r,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else if(g.isGeometry)for(m=g.vertices,
k=m.length,g=0;g<k-1;g+=p)r=b.distanceSqToSegment(m[g],m[g+1],l,h),r>f||(l.applyMatrix4(this.matrixWorld),r=d.ray.origin.distanceTo(l),r<d.near||r>d.far||e.push({distance:r,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});ga.prototype=Object.assign(Object.create(Wa.prototype),{constructor:ga,isLineSegments:!0});Na.prototype=Object.create(X.prototype);Na.prototype.constructor=
Na;Na.prototype.isPointsMaterial=!0;Na.prototype.copy=function(a){X.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.size=a.size;this.sizeAttenuation=a.sizeAttenuation;return this};Nb.prototype=Object.assign(Object.create(A.prototype),{constructor:Nb,isPoints:!0,raycast:function(){var a=new M,b=new db,c=new Ea;return function(d,e){function f(a,c){var f=b.distanceSqToPoint(a);if(f<l){var h=b.closestPointToPoint(a);h.applyMatrix4(m);var k=d.ray.origin.distanceTo(h);k<d.near||
k>d.far||e.push({distance:k,distanceToRay:Math.sqrt(f),point:h.clone(),index:c,face:null,object:g})}}var g=this,h=this.geometry,m=this.matrixWorld,k=d.params.Points.threshold;null===h.boundingSphere&&h.computeBoundingSphere();c.copy(h.boundingSphere);c.applyMatrix4(m);if(!1!==d.ray.intersectsSphere(c)){a.getInverse(m);b.copy(d.ray).applyMatrix4(a);var k=k/((this.scale.x+this.scale.y+this.scale.z)/3),l=k*k,k=new q;if(h.isBufferGeometry){var p=h.index,h=h.attributes.position.array;if(null!==p)for(var n=
p.array,p=0,t=n.length;p<t;p++){var H=n[p];k.fromArray(h,3*H);f(k,H)}else for(p=0,n=h.length/3;p<n;p++)k.fromArray(h,3*p),f(k,p)}else for(k=h.vertices,p=0,n=k.length;p<n;p++)f(k[p],p)}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});Hc.prototype=Object.assign(Object.create(A.prototype),{constructor:Hc});td.prototype=Object.create(da.prototype);td.prototype.constructor=td;Ob.prototype=Object.create(da.prototype);Ob.prototype.constructor=Ob;Ob.prototype.isCompressedTexture=
!0;ud.prototype=Object.create(da.prototype);ud.prototype.constructor=ud;Ic.prototype=Object.create(da.prototype);Ic.prototype.constructor=Ic;Ic.prototype.isDepthTexture=!0;Pb.prototype=Object.create(G.prototype);Pb.prototype.constructor=Pb;Jc.prototype=Object.create(I.prototype);Jc.prototype.constructor=Jc;Qb.prototype=Object.create(G.prototype);Qb.prototype.constructor=Qb;Kc.prototype=Object.create(I.prototype);Kc.prototype.constructor=Kc;Aa.prototype=Object.create(G.prototype);Aa.prototype.constructor=
Aa;Lc.prototype=Object.create(I.prototype);Lc.prototype.constructor=Lc;Rb.prototype=Object.create(Aa.prototype);Rb.prototype.constructor=Rb;Mc.prototype=Object.create(I.prototype);Mc.prototype.constructor=Mc;nb.prototype=Object.create(Aa.prototype);nb.prototype.constructor=nb;Nc.prototype=Object.create(I.prototype);Nc.prototype.constructor=Nc;Sb.prototype=Object.create(Aa.prototype);Sb.prototype.constructor=Sb;Oc.prototype=Object.create(I.prototype);Oc.prototype.constructor=Oc;Tb.prototype=Object.create(Aa.prototype);
Tb.prototype.constructor=Tb;Pc.prototype=Object.create(I.prototype);Pc.prototype.constructor=Pc;Ub.prototype=Object.create(G.prototype);Ub.prototype.constructor=Ub;Qc.prototype=Object.create(I.prototype);Qc.prototype.constructor=Qc;Vb.prototype=Object.create(G.prototype);Vb.prototype.constructor=Vb;Rc.prototype=Object.create(I.prototype);Rc.prototype.constructor=Rc;Wb.prototype=Object.create(G.prototype);Wb.prototype.constructor=Wb;var Oa={area:function(a){for(var b=a.length,c=0,d=b-1,e=0;e<b;d=e++)c+=
a[d].x*a[e].y-a[e].x*a[d].y;return.5*c},triangulate:function(){return function(a,b){var c=a.length;if(3>c)return null;var d=[],e=[],f=[],g,h,m;if(0<Oa.area(a))for(h=0;h<c;h++)e[h]=h;else for(h=0;h<c;h++)e[h]=c-1-h;var k=2*c;for(h=c-1;2<c;){if(0>=k--){console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()");break}g=h;c<=g&&(g=0);h=g+1;c<=h&&(h=0);m=h+1;c<=m&&(m=0);var l;a:{var p,n,t,q,r,x,u,v;p=a[e[g]].x;n=a[e[g]].y;t=a[e[h]].x;q=a[e[h]].y;r=a[e[m]].x;x=a[e[m]].y;if(0>=(t-
p)*(x-n)-(q-n)*(r-p))l=!1;else{var L,y,D,w,C,J,E,A,F,G;L=r-t;y=x-q;D=p-r;w=n-x;C=t-p;J=q-n;for(l=0;l<c;l++)if(u=a[e[l]].x,v=a[e[l]].y,!(u===p&&v===n||u===t&&v===q||u===r&&v===x)&&(E=u-p,A=v-n,F=u-t,G=v-q,u-=r,v-=x,F=L*G-y*F,E=C*A-J*E,A=D*v-w*u,F>=-Number.EPSILON&&A>=-Number.EPSILON&&E>=-Number.EPSILON)){l=!1;break a}l=!0}}if(l){d.push([a[e[g]],a[e[h]],a[e[m]]]);f.push([e[g],e[h],e[m]]);g=h;for(m=h+1;m<c;g++,m++)e[g]=e[m];c--;k=2*c}}return b?f:d}}(),triangulateShape:function(a,b){function c(a){var b=
a.length;2<b&&a[b-1].equals(a[0])&&a.pop()}function d(a,b,c){return a.x!==b.x?a.x<b.x?a.x<=c.x&&c.x<=b.x:b.x<=c.x&&c.x<=a.x:a.y<b.y?a.y<=c.y&&c.y<=b.y:b.y<=c.y&&c.y<=a.y}function e(a,b,c,e,f){var g=b.x-a.x,h=b.y-a.y,k=e.x-c.x,m=e.y-c.y,l=a.x-c.x,n=a.y-c.y,p=h*k-g*m,q=h*l-g*n;if(Math.abs(p)>Number.EPSILON){if(0<p){if(0>q||q>p)return[];k=m*l-k*n;if(0>k||k>p)return[]}else{if(0<q||q<p)return[];k=m*l-k*n;if(0<k||k<p)return[]}if(0===k)return!f||0!==q&&q!==p?[a]:[];if(k===p)return!f||0!==q&&q!==p?[b]:[];
if(0===q)return[c];if(q===p)return[e];f=k/p;return[{x:a.x+f*g,y:a.y+f*h}]}if(0!==q||m*l!==k*n)return[];h=0===g&&0===h;k=0===k&&0===m;if(h&&k)return a.x!==c.x||a.y!==c.y?[]:[a];if(h)return d(c,e,a)?[a]:[];if(k)return d(a,b,c)?[c]:[];0!==g?(a.x<b.x?(g=a,k=a.x,h=b,a=b.x):(g=b,k=b.x,h=a,a=a.x),c.x<e.x?(b=c,p=c.x,m=e,c=e.x):(b=e,p=e.x,m=c,c=c.x)):(a.y<b.y?(g=a,k=a.y,h=b,a=b.y):(g=b,k=b.y,h=a,a=a.y),c.y<e.y?(b=c,p=c.y,m=e,c=e.y):(b=e,p=e.y,m=c,c=c.y));return k<=p?a<p?[]:a===p?f?[]:[b]:a<=c?[b,h]:[b,m]:
k>c?[]:k===c?f?[]:[g]:a<=c?[g,h]:[g,m]}function f(a,b,c,d){var e=b.x-a.x,f=b.y-a.y;b=c.x-a.x;c=c.y-a.y;var g=d.x-a.x;d=d.y-a.y;a=e*c-f*b;e=e*d-f*g;return Math.abs(a)>Number.EPSILON?(b=g*c-d*b,0<a?0<=e&&0<=b:0<=e||0<=b):0<e}c(a);b.forEach(c);var g,h,m,k,l,p={};m=a.concat();g=0;for(h=b.length;g<h;g++)Array.prototype.push.apply(m,b[g]);g=0;for(h=m.length;g<h;g++)l=m[g].x+":"+m[g].y,void 0!==p[l]&&console.warn("THREE.ShapeUtils: Duplicate point",l,g),p[l]=g;g=function(a,b){function c(a,b){var d=h.length-
1,e=a-1;0>e&&(e=d);var g=a+1;g>d&&(g=0);d=f(h[a],h[e],h[g],k[b]);if(!d)return!1;d=k.length-1;e=b-1;0>e&&(e=d);g=b+1;g>d&&(g=0);return(d=f(k[b],k[e],k[g],h[a]))?!0:!1}function d(a,b){var c,f;for(c=0;c<h.length;c++)if(f=c+1,f%=h.length,f=e(a,b,h[c],h[f],!0),0<f.length)return!0;return!1}function g(a,c){var d,f,h,k;for(d=0;d<m.length;d++)for(f=b[m[d]],h=0;h<f.length;h++)if(k=h+1,k%=f.length,k=e(a,c,f[h],f[k],!0),0<k.length)return!0;return!1}var h=a.concat(),k,m=[],l,n,p,q,z,w=[],E,A,F,G=0;for(l=b.length;G<
l;G++)m.push(G);E=0;for(var N=2*m.length;0<m.length;){N--;if(0>N){console.log("Infinite Loop! Holes left:"+m.length+", Probably Hole outside Shape!");break}for(n=E;n<h.length;n++){p=h[n];l=-1;for(G=0;G<m.length;G++)if(q=m[G],z=p.x+":"+p.y+":"+q,void 0===w[z]){k=b[q];for(A=0;A<k.length;A++)if(q=k[A],c(n,A)&&!d(p,q)&&!g(p,q)){l=A;m.splice(G,1);E=h.slice(0,n+1);q=h.slice(n);A=k.slice(l);F=k.slice(0,l+1);h=E.concat(A).concat(F).concat(q);E=n;break}if(0<=l)break;w[z]=!0}if(0<=l)break}}return h}(a,b);var n=
Oa.triangulate(g,!1);g=0;for(h=n.length;g<h;g++)for(k=n[g],m=0;3>m;m++)l=k[m].x+":"+k[m].y,l=p[l],void 0!==l&&(k[m]=l);return n.concat()},isClockWise:function(a){return 0>Oa.area(a)}};La.prototype=Object.create(I.prototype);La.prototype.constructor=La;La.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};La.prototype.addShape=function(a,b){function c(a,b,c){b||console.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a)}
function d(a,b,c){var d,e,f;e=a.x-b.x;f=a.y-b.y;d=c.x-a.x;var g=c.y-a.y,h=e*e+f*f;if(Math.abs(e*g-f*d)>Number.EPSILON){var k=Math.sqrt(h),m=Math.sqrt(d*d+g*g),h=b.x-f/k;b=b.y+e/k;g=((c.x-g/m-h)*g-(c.y+d/m-b)*d)/(e*g-f*d);d=h+e*g-a.x;e=b+f*g-a.y;f=d*d+e*e;if(2>=f)return new E(d,e);f=Math.sqrt(f/2)}else a=!1,e>Number.EPSILON?d>Number.EPSILON&&(a=!0):e<-Number.EPSILON?d<-Number.EPSILON&&(a=!0):Math.sign(f)===Math.sign(g)&&(a=!0),a?(d=-f,f=Math.sqrt(h)):(d=e,e=f,f=Math.sqrt(h/2));return new E(d/f,e/f)}
function e(a,b){var c,d;for(K=a.length;0<=--K;){c=K;d=K-1;0>d&&(d=a.length-1);var e,f=t+2*l;for(e=0;e<f;e++){var g=V*e,h=V*(e+1),k=b+c+g,g=b+d+g,m=b+d+h,h=b+c+h,k=k+G,g=g+G,m=m+G,h=h+G;F.faces.push(new ha(k,g,h,null,null,1));F.faces.push(new ha(g,m,h,null,null,1));k=u.generateSideWallUV(F,k,g,m,h);F.faceVertexUvs[0].push([k[0],k[1],k[3]]);F.faceVertexUvs[0].push([k[1],k[2],k[3]])}}}function f(a,b,c){F.vertices.push(new q(a,b,c))}function g(a,b,c){a+=G;b+=G;c+=G;F.faces.push(new ha(a,b,c,null,null,
0));a=u.generateTopUV(F,a,b,c);F.faceVertexUvs[0].push(a)}var h=void 0!==b.amount?b.amount:100,m=void 0!==b.bevelThickness?b.bevelThickness:6,k=void 0!==b.bevelSize?b.bevelSize:m-2,l=void 0!==b.bevelSegments?b.bevelSegments:3,p=void 0!==b.bevelEnabled?b.bevelEnabled:!0,n=void 0!==b.curveSegments?b.curveSegments:12,t=void 0!==b.steps?b.steps:1,H=b.extrudePath,r,x=!1,u=void 0!==b.UVGenerator?b.UVGenerator:La.WorldUVGenerator,v,w,y,D;H&&(r=H.getSpacedPoints(t),x=!0,p=!1,v=void 0!==b.frames?b.frames:
H.computeFrenetFrames(t,!1),w=new q,y=new q,D=new q);p||(k=m=l=0);var A,C,J,F=this,G=this.vertices.length,H=a.extractPoints(n),n=H.shape,I=H.holes;if(H=!Oa.isClockWise(n)){n=n.reverse();C=0;for(J=I.length;C<J;C++)A=I[C],Oa.isClockWise(A)&&(I[C]=A.reverse());H=!1}var M=Oa.triangulateShape(n,I),U=n;C=0;for(J=I.length;C<J;C++)A=I[C],n=n.concat(A);var P,N,O,R,S,V=n.length,W,X=M.length,H=[],K=0;O=U.length;P=O-1;for(N=K+1;K<O;K++,P++,N++)P===O&&(P=0),N===O&&(N=0),H[K]=d(U[K],U[P],U[N]);var ba=[],Z,da=H.concat();
C=0;for(J=I.length;C<J;C++){A=I[C];Z=[];K=0;O=A.length;P=O-1;for(N=K+1;K<O;K++,P++,N++)P===O&&(P=0),N===O&&(N=0),Z[K]=d(A[K],A[P],A[N]);ba.push(Z);da=da.concat(Z)}for(P=0;P<l;P++){O=P/l;R=m*Math.cos(O*Math.PI/2);N=k*Math.sin(O*Math.PI/2);K=0;for(O=U.length;K<O;K++)S=c(U[K],H[K],N),f(S.x,S.y,-R);C=0;for(J=I.length;C<J;C++)for(A=I[C],Z=ba[C],K=0,O=A.length;K<O;K++)S=c(A[K],Z[K],N),f(S.x,S.y,-R)}N=k;for(K=0;K<V;K++)S=p?c(n[K],da[K],N):n[K],x?(y.copy(v.normals[0]).multiplyScalar(S.x),w.copy(v.binormals[0]).multiplyScalar(S.y),
D.copy(r[0]).add(y).add(w),f(D.x,D.y,D.z)):f(S.x,S.y,0);for(O=1;O<=t;O++)for(K=0;K<V;K++)S=p?c(n[K],da[K],N):n[K],x?(y.copy(v.normals[O]).multiplyScalar(S.x),w.copy(v.binormals[O]).multiplyScalar(S.y),D.copy(r[O]).add(y).add(w),f(D.x,D.y,D.z)):f(S.x,S.y,h/t*O);for(P=l-1;0<=P;P--){O=P/l;R=m*Math.cos(O*Math.PI/2);N=k*Math.sin(O*Math.PI/2);K=0;for(O=U.length;K<O;K++)S=c(U[K],H[K],N),f(S.x,S.y,h+R);C=0;for(J=I.length;C<J;C++)for(A=I[C],Z=ba[C],K=0,O=A.length;K<O;K++)S=c(A[K],Z[K],N),x?f(S.x,S.y+r[t-1].y,
r[t-1].x+R):f(S.x,S.y,h+R)}(function(){if(p){var a=0*V;for(K=0;K<X;K++)W=M[K],g(W[2]+a,W[1]+a,W[0]+a);a=V*(t+2*l);for(K=0;K<X;K++)W=M[K],g(W[0]+a,W[1]+a,W[2]+a)}else{for(K=0;K<X;K++)W=M[K],g(W[2],W[1],W[0]);for(K=0;K<X;K++)W=M[K],g(W[0]+V*t,W[1]+V*t,W[2]+V*t)}})();(function(){var a=0;e(U,a);a+=U.length;C=0;for(J=I.length;C<J;C++)A=I[C],e(A,a),a+=A.length})()};La.WorldUVGenerator={generateTopUV:function(a,b,c,d){a=a.vertices;b=a[b];c=a[c];d=a[d];return[new E(b.x,b.y),new E(c.x,c.y),new E(d.x,d.y)]},
generateSideWallUV:function(a,b,c,d,e){a=a.vertices;b=a[b];c=a[c];d=a[d];e=a[e];return.01>Math.abs(b.y-c.y)?[new E(b.x,1-b.z),new E(c.x,1-c.z),new E(d.x,1-d.z),new E(e.x,1-e.z)]:[new E(b.y,1-b.z),new E(c.y,1-c.z),new E(d.y,1-d.z),new E(e.y,1-e.z)]}};Sc.prototype=Object.create(La.prototype);Sc.prototype.constructor=Sc;Tc.prototype=Object.create(I.prototype);Tc.prototype.constructor=Tc;ob.prototype=Object.create(G.prototype);ob.prototype.constructor=ob;Uc.prototype=Object.create(I.prototype);Uc.prototype.constructor=
Uc;Xb.prototype=Object.create(G.prototype);Xb.prototype.constructor=Xb;Vc.prototype=Object.create(I.prototype);Vc.prototype.constructor=Vc;Yb.prototype=Object.create(G.prototype);Yb.prototype.constructor=Yb;Zb.prototype=Object.create(I.prototype);Zb.prototype.constructor=Zb;$b.prototype=Object.create(G.prototype);$b.prototype.constructor=$b;ac.prototype=Object.create(G.prototype);ac.prototype.constructor=ac;pb.prototype=Object.create(I.prototype);pb.prototype.constructor=pb;Xa.prototype=Object.create(G.prototype);
Xa.prototype.constructor=Xa;Wc.prototype=Object.create(pb.prototype);Wc.prototype.constructor=Wc;Xc.prototype=Object.create(Xa.prototype);Xc.prototype.constructor=Xc;Yc.prototype=Object.create(I.prototype);Yc.prototype.constructor=Yc;bc.prototype=Object.create(G.prototype);bc.prototype.constructor=bc;var Ma=Object.freeze({WireframeGeometry:Pb,ParametricGeometry:Jc,ParametricBufferGeometry:Qb,TetrahedronGeometry:Lc,TetrahedronBufferGeometry:Rb,OctahedronGeometry:Mc,OctahedronBufferGeometry:nb,IcosahedronGeometry:Nc,
IcosahedronBufferGeometry:Sb,DodecahedronGeometry:Oc,DodecahedronBufferGeometry:Tb,PolyhedronGeometry:Kc,PolyhedronBufferGeometry:Aa,TubeGeometry:Pc,TubeBufferGeometry:Ub,TorusKnotGeometry:Qc,TorusKnotBufferGeometry:Vb,TorusGeometry:Rc,TorusBufferGeometry:Wb,TextGeometry:Sc,SphereGeometry:Tc,SphereBufferGeometry:ob,RingGeometry:Uc,RingBufferGeometry:Xb,PlaneGeometry:Cc,PlaneBufferGeometry:kb,LatheGeometry:Vc,LatheBufferGeometry:Yb,ShapeGeometry:Zb,ShapeBufferGeometry:$b,ExtrudeGeometry:La,EdgesGeometry:ac,
ConeGeometry:Wc,ConeBufferGeometry:Xc,CylinderGeometry:pb,CylinderBufferGeometry:Xa,CircleGeometry:Yc,CircleBufferGeometry:bc,BoxGeometry:Jb,BoxBufferGeometry:jb});cc.prototype=Object.create(Ia.prototype);cc.prototype.constructor=cc;cc.prototype.isShadowMaterial=!0;dc.prototype=Object.create(Ia.prototype);dc.prototype.constructor=dc;dc.prototype.isRawShaderMaterial=!0;Zc.prototype={constructor:Zc,isMultiMaterial:!0,toJSON:function(a){for(var b={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},
uuid:this.uuid,type:this.type,materials:[]},c=this.materials,d=0,e=c.length;d<e;d++){var f=c[d].toJSON(a);delete f.metadata;b.materials.push(f)}b.visible=this.visible;return b},clone:function(){for(var a=new this.constructor,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());a.visible=this.visible;return a}};Qa.prototype=Object.create(X.prototype);Qa.prototype.constructor=Qa;Qa.prototype.isMeshStandardMaterial=!0;Qa.prototype.copy=function(a){X.prototype.copy.call(this,a);
this.defines={STANDARD:""};this.color.copy(a.color);this.roughness=a.roughness;this.metalness=a.metalness;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;
this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.roughnessMap=a.roughnessMap;this.metalnessMap=a.metalnessMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.envMapIntensity=a.envMapIntensity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=
a.morphNormals;return this};qb.prototype=Object.create(Qa.prototype);qb.prototype.constructor=qb;qb.prototype.isMeshPhysicalMaterial=!0;qb.prototype.copy=function(a){Qa.prototype.copy.call(this,a);this.defines={PHYSICAL:""};this.reflectivity=a.reflectivity;this.clearCoat=a.clearCoat;this.clearCoatRoughness=a.clearCoatRoughness;return this};Ba.prototype=Object.create(X.prototype);Ba.prototype.constructor=Ba;Ba.prototype.isMeshPhongMaterial=!0;Ba.prototype.copy=function(a){X.prototype.copy.call(this,
a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=
a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};rb.prototype=
Object.create(Ba.prototype);rb.prototype.constructor=rb;rb.prototype.isMeshToonMaterial=!0;rb.prototype.copy=function(a){Ba.prototype.copy.call(this,a);this.gradientMap=a.gradientMap;return this};sb.prototype=Object.create(X.prototype);sb.prototype.constructor=sb;sb.prototype.isMeshNormalMaterial=!0;sb.prototype.copy=function(a){X.prototype.copy.call(this,a);this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;
this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};tb.prototype=Object.create(X.prototype);tb.prototype.constructor=tb;tb.prototype.isMeshLambertMaterial=!0;tb.prototype.copy=function(a){X.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=
a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;
this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};ub.prototype=Object.create(X.prototype);ub.prototype.constructor=ub;ub.prototype.isLineDashedMaterial=!0;ub.prototype.copy=function(a){X.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.scale=a.scale;this.dashSize=a.dashSize;this.gapSize=a.gapSize;return this};var Wf=Object.freeze({ShadowMaterial:cc,SpriteMaterial:mb,RawShaderMaterial:dc,ShaderMaterial:Ia,PointsMaterial:Na,
MultiMaterial:Zc,MeshPhysicalMaterial:qb,MeshStandardMaterial:Qa,MeshPhongMaterial:Ba,MeshToonMaterial:rb,MeshNormalMaterial:sb,MeshLambertMaterial:tb,MeshDepthMaterial:cb,MeshBasicMaterial:Ka,LineDashedMaterial:ub,LineBasicMaterial:ia,Material:X}),nd={enabled:!1,files:{},add:function(a,b){!1!==this.enabled&&(this.files[a]=b)},get:function(a){if(!1!==this.enabled)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}},ta=new Zd;Object.assign(Da.prototype,{load:function(a,
b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);var e=this,f=nd.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;var g=a.match(/^data:(.*?)(;base64)?,(.*)$/);if(g){var h=g[1],m=!!g[2],g=g[3],g=window.decodeURIComponent(g);m&&(g=window.atob(g));try{var k,l=(this.responseType||"").toLowerCase();switch(l){case "arraybuffer":case "blob":k=new ArrayBuffer(g.length);for(var p=new Uint8Array(k),m=0;m<g.length;m++)p[m]=g.charCodeAt(m);
"blob"===l&&(k=new Blob([k],{type:h}));break;case "document":k=(new DOMParser).parseFromString(g,h);break;case "json":k=JSON.parse(g);break;default:k=g}window.setTimeout(function(){b&&b(k);e.manager.itemEnd(a)},0)}catch(q){window.setTimeout(function(){d&&d(q);e.manager.itemError(a)},0)}}else{var n=new XMLHttpRequest;n.open("GET",a,!0);n.addEventListener("load",function(c){var f=c.target.response;nd.add(a,f);200===this.status?(b&&b(f),e.manager.itemEnd(a)):0===this.status?(console.warn("THREE.FileLoader: HTTP Status 0 received."),
b&&b(f),e.manager.itemEnd(a)):(d&&d(c),e.manager.itemError(a))},!1);void 0!==c&&n.addEventListener("progress",function(a){c(a)},!1);n.addEventListener("error",function(b){d&&d(b);e.manager.itemError(a)},!1);void 0!==this.responseType&&(n.responseType=this.responseType);void 0!==this.withCredentials&&(n.withCredentials=this.withCredentials);n.overrideMimeType&&n.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain");n.send(null)}e.manager.itemStart(a);return n},setPath:function(a){this.path=
a;return this},setResponseType:function(a){this.responseType=a;return this},setWithCredentials:function(a){this.withCredentials=a;return this},setMimeType:function(a){this.mimeType=a;return this}});Object.assign(Oe.prototype,{load:function(a,b,c,d){function e(e){m.load(a[e],function(a){a=f._parser(a,!0);g[e]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};k+=1;6===k&&(1===a.mipmapCount&&(h.minFilter=1006),h.format=a.format,h.needsUpdate=!0,b&&b(h))},c,d)}var f=this,g=[],h=new Ob;
h.image=g;var m=new Da(this.manager);m.setPath(this.path);m.setResponseType("arraybuffer");if(Array.isArray(a))for(var k=0,l=0,p=a.length;l<p;++l)e(l);else m.load(a,function(a){a=f._parser(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,d=0;d<c;d++){g[d]={mipmaps:[]};for(var e=0;e<a.mipmapCount;e++)g[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+e]),g[d].format=a.format,g[d].width=a.width,g[d].height=a.height}else h.image.width=a.width,h.image.height=a.height,h.mipmaps=a.mipmaps;1===a.mipmapCount&&
(h.minFilter=1006);h.format=a.format;h.needsUpdate=!0;b&&b(h)},c,d);return h},setPath:function(a){this.path=a;return this}});Object.assign($d.prototype,{load:function(a,b,c,d){var e=this,f=new fb,g=new Da(this.manager);g.setResponseType("arraybuffer");g.load(a,function(a){if(a=e._parser(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:1001,f.wrapT=void 0!==a.wrapT?a.wrapT:1001,f.magFilter=void 0!==
a.magFilter?a.magFilter:1006,f.minFilter=void 0!==a.minFilter?a.minFilter:1008,f.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps),1===a.mipmapCount&&(f.minFilter=1006),f.needsUpdate=!0,b&&b(f,a)},c,d);return f}});Object.assign($c.prototype,{load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);var e=this,f=nd.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&
b(f);e.manager.itemEnd(a)},0),f;c=document.createElementNS("http://www.w3.org/1999/xhtml","img");c.addEventListener("load",function(){nd.add(a,this);b&&b(this);e.manager.itemEnd(a)},!1);c.addEventListener("error",function(b){d&&d(b);e.manager.itemError(a)},!1);void 0!==this.crossOrigin&&(c.crossOrigin=this.crossOrigin);e.manager.itemStart(a);c.src=a;return c},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});Object.assign(ae.prototype,{load:function(a,
b,c,d){function e(c){g.load(a[c],function(a){f.images[c]=a;h++;6===h&&(f.needsUpdate=!0,b&&b(f))},void 0,d)}var f=new ab,g=new $c(this.manager);g.setCrossOrigin(this.crossOrigin);g.setPath(this.path);var h=0;for(c=0;c<a.length;++c)e(c);return f},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});Object.assign(vd.prototype,{load:function(a,b,c,d){var e=new da,f=new $c(this.manager);f.setCrossOrigin(this.crossOrigin);f.setPath(this.path);f.load(a,
function(c){var d=0<a.search(/\.(jpg|jpeg)$/)||0===a.search(/^data\:image\/jpeg/);e.format=d?1022:1023;e.image=c;e.needsUpdate=!0;void 0!==b&&b(e)},c,d);return e},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});ma.prototype=Object.assign(Object.create(A.prototype),{constructor:ma,isLight:!0,copy:function(a){A.prototype.copy.call(this,a);this.color.copy(a.color);this.intensity=a.intensity;return this},toJSON:function(a){a=A.prototype.toJSON.call(this,
a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;void 0!==this.groundColor&&(a.object.groundColor=this.groundColor.getHex());void 0!==this.distance&&(a.object.distance=this.distance);void 0!==this.angle&&(a.object.angle=this.angle);void 0!==this.decay&&(a.object.decay=this.decay);void 0!==this.penumbra&&(a.object.penumbra=this.penumbra);void 0!==this.shadow&&(a.object.shadow=this.shadow.toJSON());return a}});wd.prototype=Object.assign(Object.create(ma.prototype),{constructor:wd,
isHemisphereLight:!0,copy:function(a){ma.prototype.copy.call(this,a);this.groundColor.copy(a.groundColor);return this}});Object.assign(vb.prototype,{copy:function(a){this.camera=a.camera.clone();this.bias=a.bias;this.radius=a.radius;this.mapSize.copy(a.mapSize);return this},clone:function(){return(new this.constructor).copy(this)},toJSON:function(){var a={};0!==this.bias&&(a.bias=this.bias);1!==this.radius&&(a.radius=this.radius);if(512!==this.mapSize.x||512!==this.mapSize.y)a.mapSize=this.mapSize.toArray();
a.camera=this.camera.toJSON(!1).object;delete a.camera.matrix;return a}});xd.prototype=Object.assign(Object.create(vb.prototype),{constructor:xd,isSpotLightShadow:!0,update:function(a){var b=2*P.RAD2DEG*a.angle,c=this.mapSize.width/this.mapSize.height;a=a.distance||500;var d=this.camera;if(b!==d.fov||c!==d.aspect||a!==d.far)d.fov=b,d.aspect=c,d.far=a,d.updateProjectionMatrix()}});yd.prototype=Object.assign(Object.create(ma.prototype),{constructor:yd,isSpotLight:!0,copy:function(a){ma.prototype.copy.call(this,
a);this.distance=a.distance;this.angle=a.angle;this.penumbra=a.penumbra;this.decay=a.decay;this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});zd.prototype=Object.assign(Object.create(ma.prototype),{constructor:zd,isPointLight:!0,copy:function(a){ma.prototype.copy.call(this,a);this.distance=a.distance;this.decay=a.decay;this.shadow=a.shadow.clone();return this}});Ad.prototype=Object.assign(Object.create(vb.prototype),{constructor:Ad});Bd.prototype=Object.assign(Object.create(ma.prototype),
{constructor:Bd,isDirectionalLight:!0,copy:function(a){ma.prototype.copy.call(this,a);this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});Cd.prototype=Object.assign(Object.create(ma.prototype),{constructor:Cd,isAmbientLight:!0});var na={arraySlice:function(a,b,c){return na.isTypedArray(a)?new a.constructor(a.subarray(b,c)):a.slice(b,c)},convertArray:function(a,b,c){return!a||!c&&a.constructor===b?a:"number"===typeof b.BYTES_PER_ELEMENT?new b(a):Array.prototype.slice.call(a)},
isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){for(var b=a.length,c=Array(b),d=0;d!==b;++d)c[d]=d;c.sort(function(b,c){return a[b]-a[c]});return c},sortedArray:function(a,b,c){for(var d=a.length,e=new a.constructor(d),f=0,g=0;g!==d;++f)for(var h=c[f]*b,m=0;m!==b;++m)e[g++]=a[h+m];return e},flattenJSON:function(a,b,c,d){for(var e=1,f=a[0];void 0!==f&&void 0===f[d];)f=a[e++];if(void 0!==f){var g=f[d];if(void 0!==g)if(Array.isArray(g)){do g=
f[d],void 0!==g&&(b.push(f.time),c.push.apply(c,g)),f=a[e++];while(void 0!==f)}else if(void 0!==g.toArray){do g=f[d],void 0!==g&&(b.push(f.time),g.toArray(c,c.length)),f=a[e++];while(void 0!==f)}else{do g=f[d],void 0!==g&&(b.push(f.time),c.push(g)),f=a[e++];while(void 0!==f)}}}};va.prototype={constructor:va,evaluate:function(a){var b=this.parameterPositions,c=this._cachedIndex,d=b[c],e=b[c-1];a:{b:{c:{d:if(!(a<d)){for(var f=c+2;;){if(void 0===d){if(a<e)break d;this._cachedIndex=c=b.length;return this.afterEnd_(c-
1,a,e)}if(c===f)break;e=d;d=b[++c];if(a<d)break b}d=b.length;break c}if(a>=e)break a;else{f=b[1];a<f&&(c=2,e=f);for(f=c-2;;){if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(c===f)break;d=e;e=b[--c-1];if(a>=e)break b}d=c;c=0}}for(;c<d;)e=c+d>>>1,a<b[e]?d=e:c=e+1;d=b[c];e=b[c-1];if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(void 0===d)return this._cachedIndex=c=b.length,this.afterEnd_(c-1,e,a)}this._cachedIndex=c;this.intervalChanged_(c,e,d)}return this.interpolate_(c,
e,a,d)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(a){var b=this.resultBuffer,c=this.sampleValues,d=this.valueSize;a*=d;for(var e=0;e!==d;++e)b[e]=c[a+e];return b},interpolate_:function(a,b,c,d){throw Error("call to abstract method");},intervalChanged_:function(a,b,c){}};Object.assign(va.prototype,{beforeStart_:va.prototype.copySampleValue_,afterEnd_:va.prototype.copySampleValue_});Dd.prototype=Object.assign(Object.create(va.prototype),
{constructor:Dd,DefaultSettings_:{endingStart:2400,endingEnd:2400},intervalChanged_:function(a,b,c){var d=this.parameterPositions,e=a-2,f=a+1,g=d[e],h=d[f];if(void 0===g)switch(this.getSettings_().endingStart){case 2401:e=a;g=2*b-c;break;case 2402:e=d.length-2;g=b+d[e]-d[e+1];break;default:e=a,g=c}if(void 0===h)switch(this.getSettings_().endingEnd){case 2401:f=a;h=2*c-b;break;case 2402:f=1;h=c+d[1]-d[0];break;default:f=a-1,h=b}a=.5*(c-b);d=this.valueSize;this._weightPrev=a/(b-g);this._weightNext=
a/(h-c);this._offsetPrev=e*d;this._offsetNext=f*d},interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g,m=this._offsetPrev,k=this._offsetNext,l=this._weightPrev,p=this._weightNext,n=(c-b)/(d-b);c=n*n;d=c*n;b=-l*d+2*l*c-l*n;l=(1+l)*d+(-1.5-2*l)*c+(-.5+l)*n+1;n=(-1-p)*d+(1.5+p)*c+.5*n;p=p*d-p*c;for(c=0;c!==g;++c)e[c]=b*f[m+c]+l*f[h+c]+n*f[a+c]+p*f[k+c];return e}});ad.prototype=Object.assign(Object.create(va.prototype),{constructor:ad,interpolate_:function(a,
b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g;b=(c-b)/(d-b);c=1-b;for(d=0;d!==g;++d)e[d]=f[h+d]*c+f[a+d]*b;return e}});Ed.prototype=Object.assign(Object.create(va.prototype),{constructor:Ed,interpolate_:function(a,b,c,d){return this.copySampleValue_(a-1)}});var Za;Za={TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function(a){return new Ed(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodLinear:function(a){return new ad(this.times,
this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:function(a){return new Dd(this.times,this.values,this.getValueSize(),a)},setInterpolation:function(a){var b;switch(a){case 2300:b=this.InterpolantFactoryMethodDiscrete;break;case 2301:b=this.InterpolantFactoryMethodLinear;break;case 2302:b=this.InterpolantFactoryMethodSmooth}if(void 0===b){b="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);
else throw Error(b);console.warn(b)}else this.createInterpolant=b},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}},getValueSize:function(){return this.values.length/this.times.length},shift:function(a){if(0!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]+=a;return this},scale:function(a){if(1!==a)for(var b=this.times,c=
0,d=b.length;c!==d;++c)b[c]*=a;return this},trim:function(a,b){for(var c=this.times,d=c.length,e=0,f=d-1;e!==d&&c[e]<a;)++e;for(;-1!==f&&c[f]>b;)--f;++f;if(0!==e||f!==d)e>=f&&(f=Math.max(f,1),e=f-1),d=this.getValueSize(),this.times=na.arraySlice(c,e,f),this.values=na.arraySlice(this.values,e*d,f*d);return this},validate:function(){var a=!0,b=this.getValueSize();0!==b-Math.floor(b)&&(console.error("invalid value size in track",this),a=!1);var c=this.times,b=this.values,d=c.length;0===d&&(console.error("track is empty",
this),a=!1);for(var e=null,f=0;f!==d;f++){var g=c[f];if("number"===typeof g&&isNaN(g)){console.error("time is not a valid number",this,f,g);a=!1;break}if(null!==e&&e>g){console.error("out of order keys",this,f,g,e);a=!1;break}e=g}if(void 0!==b&&na.isTypedArray(b))for(f=0,c=b.length;f!==c;++f)if(d=b[f],isNaN(d)){console.error("value is not a valid number",this,f,d);a=!1;break}return a},optimize:function(){for(var a=this.times,b=this.values,c=this.getValueSize(),d=2302===this.getInterpolation(),e=1,
f=a.length-1,g=1;g<f;++g){var h=!1,m=a[g];if(m!==a[g+1]&&(1!==g||m!==m[0]))if(d)h=!0;else for(var k=g*c,l=k-c,p=k+c,m=0;m!==c;++m){var n=b[k+m];if(n!==b[l+m]||n!==b[p+m]){h=!0;break}}if(h){if(g!==e)for(a[e]=a[g],h=g*c,k=e*c,m=0;m!==c;++m)b[k+m]=b[h+m];++e}}if(0<f){a[e]=a[f];h=f*c;k=e*c;for(m=0;m!==c;++m)b[k+m]=b[h+m];++e}e!==a.length&&(this.times=na.arraySlice(a,0,e),this.values=na.arraySlice(b,0,e*c));return this}};ec.prototype=Object.assign(Object.create(Za),{constructor:ec,ValueTypeName:"vector"});
Fd.prototype=Object.assign(Object.create(va.prototype),{constructor:Fd,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;b=(c-b)/(d-b);for(c=a+g;a!==c;a+=4)Z.slerpFlat(e,0,f,a-g,f,a,b);return e}});bd.prototype=Object.assign(Object.create(Za),{constructor:bd,ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function(a){return new Fd(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:void 0});
fc.prototype=Object.assign(Object.create(Za),{constructor:fc,ValueTypeName:"number"});Gd.prototype=Object.assign(Object.create(Za),{constructor:Gd,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});Hd.prototype=Object.assign(Object.create(Za),{constructor:Hd,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});
Id.prototype=Object.assign(Object.create(Za),{constructor:Id,ValueTypeName:"color"});xb.prototype=Za;Za.constructor=xb;Object.assign(xb,{parse:function(a){if(void 0===a.type)throw Error("track type undefined, can not parse");var b=xb._getTrackTypeForValueTypeName(a.type);if(void 0===a.times){var c=[],d=[];na.flattenJSON(a.keys,c,d,"value");a.times=c;a.values=d}return void 0!==b.parse?b.parse(a):new b(a.name,a.times,a.values,a.interpolation)},toJSON:function(a){var b=a.constructor;if(void 0!==b.toJSON)b=
b.toJSON(a);else{var b={name:a.name,times:na.convertArray(a.times,Array),values:na.convertArray(a.values,Array)},c=a.getInterpolation();c!==a.DefaultInterpolation&&(b.interpolation=c)}b.type=a.ValueTypeName;return b},_getTrackTypeForValueTypeName:function(a){switch(a.toLowerCase()){case "scalar":case "double":case "float":case "number":case "integer":return fc;case "vector":case "vector2":case "vector3":case "vector4":return ec;case "color":return Id;case "quaternion":return bd;case "bool":case "boolean":return Hd;
case "string":return Gd}throw Error("Unsupported typeName: "+a);}});ra.prototype={constructor:ra,resetDuration:function(){for(var a=0,b=0,c=this.tracks.length;b!==c;++b)var d=this.tracks[b],a=Math.max(a,d.times[d.times.length-1]);this.duration=a},trim:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].trim(0,this.duration);return this},optimize:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].optimize();return this}};Object.assign(ra,{parse:function(a){for(var b=[],c=a.tracks,
d=1/(a.fps||1),e=0,f=c.length;e!==f;++e)b.push(xb.parse(c[e]).scale(d));return new ra(a.name,a.duration,b)},toJSON:function(a){var b=[],c=a.tracks;a={name:a.name,duration:a.duration,tracks:b};for(var d=0,e=c.length;d!==e;++d)b.push(xb.toJSON(c[d]));return a},CreateFromMorphTargetSequence:function(a,b,c,d){for(var e=b.length,f=[],g=0;g<e;g++){var h=[],m=[];h.push((g+e-1)%e,g,(g+1)%e);m.push(0,1,0);var k=na.getKeyframeOrder(h),h=na.sortedArray(h,1,k),m=na.sortedArray(m,1,k);d||0!==h[0]||(h.push(e),
m.push(m[0]));f.push((new fc(".morphTargetInfluences["+b[g].name+"]",h,m)).scale(1/c))}return new ra(a,-1,f)},findByName:function(a,b){var c=a;Array.isArray(a)||(c=a.geometry&&a.geometry.animations||a.animations);for(var d=0;d<c.length;d++)if(c[d].name===b)return c[d];return null},CreateClipsFromMorphTargetSequences:function(a,b,c){for(var d={},e=/^([\w-]*?)([\d]+)$/,f=0,g=a.length;f<g;f++){var h=a[f],m=h.name.match(e);if(m&&1<m.length){var k=m[1];(m=d[k])||(d[k]=m=[]);m.push(h)}}a=[];for(k in d)a.push(ra.CreateFromMorphTargetSequence(k,
d[k],b,c));return a},parseAnimation:function(a,b){if(!a)return console.error("  no animation in JSONLoader data"),null;for(var c=function(a,b,c,d,e){if(0!==c.length){var f=[],g=[];na.flattenJSON(c,f,g,d);0!==f.length&&e.push(new a(b,f,g))}},d=[],e=a.name||"default",f=a.length||-1,g=a.fps||30,h=a.hierarchy||[],m=0;m<h.length;m++){var k=h[m].keys;if(k&&0!==k.length)if(k[0].morphTargets){for(var f={},l=0;l<k.length;l++)if(k[l].morphTargets)for(var p=0;p<k[l].morphTargets.length;p++)f[k[l].morphTargets[p]]=
-1;for(var n in f){for(var q=[],H=[],p=0;p!==k[l].morphTargets.length;++p){var r=k[l];q.push(r.time);H.push(r.morphTarget===n?1:0)}d.push(new fc(".morphTargetInfluence["+n+"]",q,H))}f=f.length*(g||1)}else l=".bones["+b[m].name+"]",c(ec,l+".position",k,"pos",d),c(bd,l+".quaternion",k,"rot",d),c(ec,l+".scale",k,"scl",d)}return 0===d.length?null:new ra(e,f,d)}});Object.assign(Jd.prototype,{load:function(a,b,c,d){var e=this;(new Da(e.manager)).load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setTextures:function(a){this.textures=
a},parse:function(a){function b(a){void 0===c[a]&&console.warn("THREE.MaterialLoader: Undefined texture",a);return c[a]}var c=this.textures,d=new Wf[a.type];void 0!==a.uuid&&(d.uuid=a.uuid);void 0!==a.name&&(d.name=a.name);void 0!==a.color&&d.color.setHex(a.color);void 0!==a.roughness&&(d.roughness=a.roughness);void 0!==a.metalness&&(d.metalness=a.metalness);void 0!==a.emissive&&d.emissive.setHex(a.emissive);void 0!==a.specular&&d.specular.setHex(a.specular);void 0!==a.shininess&&(d.shininess=a.shininess);
void 0!==a.clearCoat&&(d.clearCoat=a.clearCoat);void 0!==a.clearCoatRoughness&&(d.clearCoatRoughness=a.clearCoatRoughness);void 0!==a.uniforms&&(d.uniforms=a.uniforms);void 0!==a.vertexShader&&(d.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(d.fragmentShader=a.fragmentShader);void 0!==a.vertexColors&&(d.vertexColors=a.vertexColors);void 0!==a.fog&&(d.fog=a.fog);void 0!==a.shading&&(d.shading=a.shading);void 0!==a.blending&&(d.blending=a.blending);void 0!==a.side&&(d.side=a.side);void 0!==
a.opacity&&(d.opacity=a.opacity);void 0!==a.transparent&&(d.transparent=a.transparent);void 0!==a.alphaTest&&(d.alphaTest=a.alphaTest);void 0!==a.depthTest&&(d.depthTest=a.depthTest);void 0!==a.depthWrite&&(d.depthWrite=a.depthWrite);void 0!==a.colorWrite&&(d.colorWrite=a.colorWrite);void 0!==a.wireframe&&(d.wireframe=a.wireframe);void 0!==a.wireframeLinewidth&&(d.wireframeLinewidth=a.wireframeLinewidth);void 0!==a.wireframeLinecap&&(d.wireframeLinecap=a.wireframeLinecap);void 0!==a.wireframeLinejoin&&
(d.wireframeLinejoin=a.wireframeLinejoin);void 0!==a.skinning&&(d.skinning=a.skinning);void 0!==a.morphTargets&&(d.morphTargets=a.morphTargets);void 0!==a.size&&(d.size=a.size);void 0!==a.sizeAttenuation&&(d.sizeAttenuation=a.sizeAttenuation);void 0!==a.map&&(d.map=b(a.map));void 0!==a.alphaMap&&(d.alphaMap=b(a.alphaMap),d.transparent=!0);void 0!==a.bumpMap&&(d.bumpMap=b(a.bumpMap));void 0!==a.bumpScale&&(d.bumpScale=a.bumpScale);void 0!==a.normalMap&&(d.normalMap=b(a.normalMap));if(void 0!==a.normalScale){var e=
a.normalScale;!1===Array.isArray(e)&&(e=[e,e]);d.normalScale=(new E).fromArray(e)}void 0!==a.displacementMap&&(d.displacementMap=b(a.displacementMap));void 0!==a.displacementScale&&(d.displacementScale=a.displacementScale);void 0!==a.displacementBias&&(d.displacementBias=a.displacementBias);void 0!==a.roughnessMap&&(d.roughnessMap=b(a.roughnessMap));void 0!==a.metalnessMap&&(d.metalnessMap=b(a.metalnessMap));void 0!==a.emissiveMap&&(d.emissiveMap=b(a.emissiveMap));void 0!==a.emissiveIntensity&&(d.emissiveIntensity=
a.emissiveIntensity);void 0!==a.specularMap&&(d.specularMap=b(a.specularMap));void 0!==a.envMap&&(d.envMap=b(a.envMap));void 0!==a.reflectivity&&(d.reflectivity=a.reflectivity);void 0!==a.lightMap&&(d.lightMap=b(a.lightMap));void 0!==a.lightMapIntensity&&(d.lightMapIntensity=a.lightMapIntensity);void 0!==a.aoMap&&(d.aoMap=b(a.aoMap));void 0!==a.aoMapIntensity&&(d.aoMapIntensity=a.aoMapIntensity);void 0!==a.gradientMap&&(d.gradientMap=b(a.gradientMap));if(void 0!==a.materials)for(var e=0,f=a.materials.length;e<
f;e++)d.materials.push(this.parse(a.materials[e]));return d}});Object.assign(be.prototype,{load:function(a,b,c,d){var e=this;(new Da(e.manager)).load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){var b=new G,c=a.data.index,d={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:Uint8ClampedArray,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};void 0!==c&&(c=new d[c.type](c.array),
b.setIndex(new w(c,1)));var e=a.data.attributes,f;for(f in e){var g=e[f],c=new d[g.type](g.array);b.addAttribute(f,new w(c,g.itemSize,g.normalized))}d=a.data.groups||a.data.drawcalls||a.data.offsets;if(void 0!==d)for(f=0,c=d.length;f!==c;++f)e=d[f],b.addGroup(e.start,e.count,e.materialIndex);a=a.data.boundingSphere;void 0!==a&&(d=new q,void 0!==a.center&&d.fromArray(a.center),b.boundingSphere=new Ea(d,a.radius));return b}});yb.prototype={constructor:yb,crossOrigin:void 0,extractUrlBase:function(a){a=
a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/"},initMaterials:function(a,b,c){for(var d=[],e=0;e<a.length;++e)d[e]=this.createMaterial(a[e],b,c);return d},createMaterial:function(){var a={NoBlending:0,NormalBlending:1,AdditiveBlending:2,SubtractiveBlending:3,MultiplyBlending:4,CustomBlending:5},b,c,d;return function(e,f,g){function h(a,b,d,e,h){a=f+a;var k=yb.Handlers.get(a);null!==k?a=k.load(a):(c.setCrossOrigin(g),a=c.load(a));void 0!==b&&(a.repeat.fromArray(b),1!==b[0]&&
(a.wrapS=1E3),1!==b[1]&&(a.wrapT=1E3));void 0!==d&&a.offset.fromArray(d);void 0!==e&&("repeat"===e[0]&&(a.wrapS=1E3),"mirror"===e[0]&&(a.wrapS=1002),"repeat"===e[1]&&(a.wrapT=1E3),"mirror"===e[1]&&(a.wrapT=1002));void 0!==h&&(a.anisotropy=h);b=P.generateUUID();m[b]=a;return b}void 0===b&&(b=new F);void 0===c&&(c=new vd);void 0===d&&(d=new Jd);var m={},k={uuid:P.generateUUID(),type:"MeshLambertMaterial"},l;for(l in e){var p=e[l];switch(l){case "DbgColor":case "DbgIndex":case "opticalDensity":case "illumination":break;
case "DbgName":k.name=p;break;case "blending":k.blending=a[p];break;case "colorAmbient":case "mapAmbient":console.warn("THREE.Loader.createMaterial:",l,"is no longer supported.");break;case "colorDiffuse":k.color=b.fromArray(p).getHex();break;case "colorSpecular":k.specular=b.fromArray(p).getHex();break;case "colorEmissive":k.emissive=b.fromArray(p).getHex();break;case "specularCoef":k.shininess=p;break;case "shading":"basic"===p.toLowerCase()&&(k.type="MeshBasicMaterial");"phong"===p.toLowerCase()&&
(k.type="MeshPhongMaterial");"standard"===p.toLowerCase()&&(k.type="MeshStandardMaterial");break;case "mapDiffuse":k.map=h(p,e.mapDiffuseRepeat,e.mapDiffuseOffset,e.mapDiffuseWrap,e.mapDiffuseAnisotropy);break;case "mapDiffuseRepeat":case "mapDiffuseOffset":case "mapDiffuseWrap":case "mapDiffuseAnisotropy":break;case "mapEmissive":k.emissiveMap=h(p,e.mapEmissiveRepeat,e.mapEmissiveOffset,e.mapEmissiveWrap,e.mapEmissiveAnisotropy);break;case "mapEmissiveRepeat":case "mapEmissiveOffset":case "mapEmissiveWrap":case "mapEmissiveAnisotropy":break;
case "mapLight":k.lightMap=h(p,e.mapLightRepeat,e.mapLightOffset,e.mapLightWrap,e.mapLightAnisotropy);break;case "mapLightRepeat":case "mapLightOffset":case "mapLightWrap":case "mapLightAnisotropy":break;case "mapAO":k.aoMap=h(p,e.mapAORepeat,e.mapAOOffset,e.mapAOWrap,e.mapAOAnisotropy);break;case "mapAORepeat":case "mapAOOffset":case "mapAOWrap":case "mapAOAnisotropy":break;case "mapBump":k.bumpMap=h(p,e.mapBumpRepeat,e.mapBumpOffset,e.mapBumpWrap,e.mapBumpAnisotropy);break;case "mapBumpScale":k.bumpScale=
p;break;case "mapBumpRepeat":case "mapBumpOffset":case "mapBumpWrap":case "mapBumpAnisotropy":break;case "mapNormal":k.normalMap=h(p,e.mapNormalRepeat,e.mapNormalOffset,e.mapNormalWrap,e.mapNormalAnisotropy);break;case "mapNormalFactor":k.normalScale=[p,p];break;case "mapNormalRepeat":case "mapNormalOffset":case "mapNormalWrap":case "mapNormalAnisotropy":break;case "mapSpecular":k.specularMap=h(p,e.mapSpecularRepeat,e.mapSpecularOffset,e.mapSpecularWrap,e.mapSpecularAnisotropy);break;case "mapSpecularRepeat":case "mapSpecularOffset":case "mapSpecularWrap":case "mapSpecularAnisotropy":break;
case "mapMetalness":k.metalnessMap=h(p,e.mapMetalnessRepeat,e.mapMetalnessOffset,e.mapMetalnessWrap,e.mapMetalnessAnisotropy);break;case "mapMetalnessRepeat":case "mapMetalnessOffset":case "mapMetalnessWrap":case "mapMetalnessAnisotropy":break;case "mapRoughness":k.roughnessMap=h(p,e.mapRoughnessRepeat,e.mapRoughnessOffset,e.mapRoughnessWrap,e.mapRoughnessAnisotropy);break;case "mapRoughnessRepeat":case "mapRoughnessOffset":case "mapRoughnessWrap":case "mapRoughnessAnisotropy":break;case "mapAlpha":k.alphaMap=
h(p,e.mapAlphaRepeat,e.mapAlphaOffset,e.mapAlphaWrap,e.mapAlphaAnisotropy);break;case "mapAlphaRepeat":case "mapAlphaOffset":case "mapAlphaWrap":case "mapAlphaAnisotropy":break;case "flipSided":k.side=1;break;case "doubleSided":k.side=2;break;case "transparency":console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity");k.opacity=p;break;case "depthTest":case "depthWrite":case "colorWrite":case "opacity":case "reflectivity":case "transparent":case "visible":case "wireframe":k[l]=
p;break;case "vertexColors":!0===p&&(k.vertexColors=2);"face"===p&&(k.vertexColors=1);break;default:console.error("THREE.Loader.createMaterial: Unsupported",l,p)}}"MeshBasicMaterial"===k.type&&delete k.emissive;"MeshPhongMaterial"!==k.type&&delete k.specular;1>k.opacity&&(k.transparent=!0);d.setTextures(m);return d.parse(k)}}()};yb.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b)},get:function(a){for(var b=this.handlers,c=0,d=b.length;c<d;c+=2){var e=b[c+1];if(b[c].test(a))return e}return null}};
Object.assign(ce.prototype,{load:function(a,b,c,d){var e=this,f=this.texturePath&&"string"===typeof this.texturePath?this.texturePath:yb.prototype.extractUrlBase(a),g=new Da(this.manager);g.setWithCredentials(this.withCredentials);g.load(a,function(c){c=JSON.parse(c);var d=c.metadata;if(void 0!==d&&(d=d.type,void 0!==d)){if("object"===d.toLowerCase()){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.ObjectLoader instead.");return}if("scene"===d.toLowerCase()){console.error("THREE.JSONLoader: "+
a+" should be loaded with THREE.SceneLoader instead.");return}}c=e.parse(c,f);b(c.geometry,c.materials)},c,d)},setTexturePath:function(a){this.texturePath=a},parse:function(a,b){var c=new I,d=void 0!==a.scale?1/a.scale:1;(function(b){var d,g,h,m,k,l,p,n,t,w,r,x,u,v=a.faces;l=a.vertices;var A=a.normals,y=a.colors,D=0;if(void 0!==a.uvs){for(d=0;d<a.uvs.length;d++)a.uvs[d].length&&D++;for(d=0;d<D;d++)c.faceVertexUvs[d]=[]}m=0;for(k=l.length;m<k;)d=new q,d.x=l[m++]*b,d.y=l[m++]*b,d.z=l[m++]*b,c.vertices.push(d);
m=0;for(k=v.length;m<k;)if(b=v[m++],t=b&1,h=b&2,d=b&8,p=b&16,w=b&32,l=b&64,b&=128,t){t=new ha;t.a=v[m];t.b=v[m+1];t.c=v[m+3];r=new ha;r.a=v[m+1];r.b=v[m+2];r.c=v[m+3];m+=4;h&&(h=v[m++],t.materialIndex=h,r.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<D;d++)for(x=a.uvs[d],c.faceVertexUvs[d][h]=[],c.faceVertexUvs[d][h+1]=[],g=0;4>g;g++)n=v[m++],u=x[2*n],n=x[2*n+1],u=new E(u,n),2!==g&&c.faceVertexUvs[d][h].push(u),0!==g&&c.faceVertexUvs[d][h+1].push(u);p&&(p=3*v[m++],t.normal.set(A[p++],A[p++],A[p]),
r.normal.copy(t.normal));if(w)for(d=0;4>d;d++)p=3*v[m++],w=new q(A[p++],A[p++],A[p]),2!==d&&t.vertexNormals.push(w),0!==d&&r.vertexNormals.push(w);l&&(l=v[m++],l=y[l],t.color.setHex(l),r.color.setHex(l));if(b)for(d=0;4>d;d++)l=v[m++],l=y[l],2!==d&&t.vertexColors.push(new F(l)),0!==d&&r.vertexColors.push(new F(l));c.faces.push(t);c.faces.push(r)}else{t=new ha;t.a=v[m++];t.b=v[m++];t.c=v[m++];h&&(h=v[m++],t.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<D;d++)for(x=a.uvs[d],c.faceVertexUvs[d][h]=
[],g=0;3>g;g++)n=v[m++],u=x[2*n],n=x[2*n+1],u=new E(u,n),c.faceVertexUvs[d][h].push(u);p&&(p=3*v[m++],t.normal.set(A[p++],A[p++],A[p]));if(w)for(d=0;3>d;d++)p=3*v[m++],w=new q(A[p++],A[p++],A[p]),t.vertexNormals.push(w);l&&(l=v[m++],t.color.setHex(y[l]));if(b)for(d=0;3>d;d++)l=v[m++],t.vertexColors.push(new F(y[l]));c.faces.push(t)}})(d);(function(){var b=void 0!==a.influencesPerVertex?a.influencesPerVertex:2;if(a.skinWeights)for(var d=0,g=a.skinWeights.length;d<g;d+=b)c.skinWeights.push(new fa(a.skinWeights[d],
1<b?a.skinWeights[d+1]:0,2<b?a.skinWeights[d+2]:0,3<b?a.skinWeights[d+3]:0));if(a.skinIndices)for(d=0,g=a.skinIndices.length;d<g;d+=b)c.skinIndices.push(new fa(a.skinIndices[d],1<b?a.skinIndices[d+1]:0,2<b?a.skinIndices[d+2]:0,3<b?a.skinIndices[d+3]:0));c.bones=a.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&console.warn("When skinning, number of vertices ("+c.vertices.length+"), skinIndices ("+c.skinIndices.length+"), and skinWeights ("+
c.skinWeights.length+") should match.")})();(function(b){if(void 0!==a.morphTargets)for(var d=0,g=a.morphTargets.length;d<g;d++){c.morphTargets[d]={};c.morphTargets[d].name=a.morphTargets[d].name;c.morphTargets[d].vertices=[];for(var h=c.morphTargets[d].vertices,m=a.morphTargets[d].vertices,k=0,l=m.length;k<l;k+=3){var p=new q;p.x=m[k]*b;p.y=m[k+1]*b;p.z=m[k+2]*b;h.push(p)}}if(void 0!==a.morphColors&&0<a.morphColors.length)for(console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'),
b=c.faces,h=a.morphColors[0].colors,d=0,g=b.length;d<g;d++)b[d].color.fromArray(h,3*d)})(d);(function(){var b=[],d=[];void 0!==a.animation&&d.push(a.animation);void 0!==a.animations&&(a.animations.length?d=d.concat(a.animations):d.push(a.animations));for(var g=0;g<d.length;g++){var h=ra.parseAnimation(d[g],c.bones);h&&b.push(h)}c.morphTargets&&(d=ra.CreateClipsFromMorphTargetSequences(c.morphTargets,10),b=b.concat(d));0<b.length&&(c.animations=b)})();c.computeFaceNormals();c.computeBoundingSphere();
if(void 0===a.materials||0===a.materials.length)return{geometry:c};d=yb.prototype.initMaterials(a.materials,b,this.crossOrigin);return{geometry:c,materials:d}}});Object.assign(Pe.prototype,{load:function(a,b,c,d){""===this.texturePath&&(this.texturePath=a.substring(0,a.lastIndexOf("/")+1));var e=this;(new Da(e.manager)).load(a,function(c){var d=null;try{d=JSON.parse(c)}catch(h){console.error("THREE:ObjectLoader: Can't parse "+a+".",h.message);return}c=d.metadata;void 0===c||void 0===c.type||"geometry"===
c.type.toLowerCase()?console.error("THREE.ObjectLoader: Can't load "+a+". Use THREE.JSONLoader instead."):e.parse(d,b)},c,d)},setTexturePath:function(a){this.texturePath=a},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a,b){var c=this.parseGeometries(a.geometries),d=this.parseImages(a.images,function(){void 0!==b&&b(e)}),d=this.parseTextures(a.textures,d),d=this.parseMaterials(a.materials,d),e=this.parseObject(a.object,c,d);a.animations&&(e.animations=this.parseAnimations(a.animations));
void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new ce,d=new be,e=0,f=a.length;e<f;e++){var g,h=a[e];switch(h.type){case "PlaneGeometry":case "PlaneBufferGeometry":g=new Ma[h.type](h.width,h.height,h.widthSegments,h.heightSegments);break;case "BoxGeometry":case "BoxBufferGeometry":case "CubeGeometry":g=new Ma[h.type](h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case "CircleGeometry":case "CircleBufferGeometry":g=
new Ma[h.type](h.radius,h.segments,h.thetaStart,h.thetaLength);break;case "CylinderGeometry":case "CylinderBufferGeometry":g=new Ma[h.type](h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case "ConeGeometry":case "ConeBufferGeometry":g=new Ma[h.type](h.radius,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case "SphereGeometry":case "SphereBufferGeometry":g=new Ma[h.type](h.radius,h.widthSegments,
h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "DodecahedronGeometry":case "IcosahedronGeometry":case "OctahedronGeometry":case "TetrahedronGeometry":g=new Ma[h.type](h.radius,h.detail);break;case "RingGeometry":case "RingBufferGeometry":g=new Ma[h.type](h.innerRadius,h.outerRadius,h.thetaSegments,h.phiSegments,h.thetaStart,h.thetaLength);break;case "TorusGeometry":case "TorusBufferGeometry":g=new Ma[h.type](h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);
break;case "TorusKnotGeometry":case "TorusKnotBufferGeometry":g=new Ma[h.type](h.radius,h.tube,h.tubularSegments,h.radialSegments,h.p,h.q);break;case "LatheGeometry":case "LatheBufferGeometry":g=new Ma[h.type](h.points,h.segments,h.phiStart,h.phiLength);break;case "BufferGeometry":g=d.parse(h);break;case "Geometry":g=c.parse(h.data,this.texturePath).geometry;break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+h.type+'"');continue}g.uuid=h.uuid;void 0!==h.name&&(g.name=h.name);
b[h.uuid]=g}return b},parseMaterials:function(a,b){var c={};if(void 0!==a){var d=new Jd;d.setTextures(b);for(var e=0,f=a.length;e<f;e++){var g=d.parse(a[e]);c[g.uuid]=g}}return c},parseAnimations:function(a){for(var b=[],c=0;c<a.length;c++){var d=ra.parse(a[c]);b.push(d)}return b},parseImages:function(a,b){function c(a){d.manager.itemStart(a);return g.load(a,function(){d.manager.itemEnd(a)},void 0,function(){d.manager.itemError(a)})}var d=this,e={};if(void 0!==a&&0<a.length){var f=new Zd(b),g=new $c(f);
g.setCrossOrigin(this.crossOrigin);for(var f=0,h=a.length;f<h;f++){var m=a[f],k=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(m.url)?m.url:d.texturePath+m.url;e[m.uuid]=c(k)}}return e},parseTextures:function(a,b){function c(a,b){if("number"===typeof a)return a;console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",a);return b[a]}var d={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,SphericalReflectionMapping:305,
CubeUVReflectionMapping:306,CubeUVRefractionMapping:307},e={RepeatWrapping:1E3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},f={NearestFilter:1003,NearestMipMapNearestFilter:1004,NearestMipMapLinearFilter:1005,LinearFilter:1006,LinearMipMapNearestFilter:1007,LinearMipMapLinearFilter:1008},g={};if(void 0!==a)for(var h=0,m=a.length;h<m;h++){var k=a[h];void 0===k.image&&console.warn('THREE.ObjectLoader: No "image" specified for',k.uuid);void 0===b[k.image]&&console.warn("THREE.ObjectLoader: Undefined image",
k.image);var l=new da(b[k.image]);l.needsUpdate=!0;l.uuid=k.uuid;void 0!==k.name&&(l.name=k.name);void 0!==k.mapping&&(l.mapping=c(k.mapping,d));void 0!==k.offset&&l.offset.fromArray(k.offset);void 0!==k.repeat&&l.repeat.fromArray(k.repeat);void 0!==k.wrap&&(l.wrapS=c(k.wrap[0],e),l.wrapT=c(k.wrap[1],e));void 0!==k.minFilter&&(l.minFilter=c(k.minFilter,f));void 0!==k.magFilter&&(l.magFilter=c(k.magFilter,f));void 0!==k.anisotropy&&(l.anisotropy=k.anisotropy);void 0!==k.flipY&&(l.flipY=k.flipY);g[k.uuid]=
l}return g},parseObject:function(){var a=new M;return function(b,c,d){function e(a){void 0===c[a]&&console.warn("THREE.ObjectLoader: Undefined geometry",a);return c[a]}function f(a){if(void 0!==a)return void 0===d[a]&&console.warn("THREE.ObjectLoader: Undefined material",a),d[a]}var g;switch(b.type){case "Scene":g=new lb;void 0!==b.background&&Number.isInteger(b.background)&&(g.background=new F(b.background));void 0!==b.fog&&("Fog"===b.fog.type?g.fog=new Mb(b.fog.color,b.fog.near,b.fog.far):"FogExp2"===
b.fog.type&&(g.fog=new Lb(b.fog.color,b.fog.density)));break;case "PerspectiveCamera":g=new Ga(b.fov,b.aspect,b.near,b.far);void 0!==b.focus&&(g.focus=b.focus);void 0!==b.zoom&&(g.zoom=b.zoom);void 0!==b.filmGauge&&(g.filmGauge=b.filmGauge);void 0!==b.filmOffset&&(g.filmOffset=b.filmOffset);void 0!==b.view&&(g.view=Object.assign({},b.view));break;case "OrthographicCamera":g=new Kb(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":g=new Cd(b.color,b.intensity);break;case "DirectionalLight":g=
new Bd(b.color,b.intensity);break;case "PointLight":g=new zd(b.color,b.intensity,b.distance,b.decay);break;case "SpotLight":g=new yd(b.color,b.intensity,b.distance,b.angle,b.penumbra,b.decay);break;case "HemisphereLight":g=new wd(b.color,b.groundColor,b.intensity);break;case "Mesh":g=e(b.geometry);var h=f(b.material);g=g.bones&&0<g.bones.length?new sd(g,h):new za(g,h);break;case "LOD":g=new Gc;break;case "Line":g=new Wa(e(b.geometry),f(b.material),b.mode);break;case "LineSegments":g=new ga(e(b.geometry),
f(b.material));break;case "PointCloud":case "Points":g=new Nb(e(b.geometry),f(b.material));break;case "Sprite":g=new Fc(f(b.material));break;case "Group":g=new Hc;break;case "SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh type. Instantiates Object3D instead.");default:g=new A}g.uuid=b.uuid;void 0!==b.name&&(g.name=b.name);void 0!==b.matrix?(a.fromArray(b.matrix),a.decompose(g.position,g.quaternion,g.scale)):(void 0!==b.position&&g.position.fromArray(b.position),
void 0!==b.rotation&&g.rotation.fromArray(b.rotation),void 0!==b.quaternion&&g.quaternion.fromArray(b.quaternion),void 0!==b.scale&&g.scale.fromArray(b.scale));void 0!==b.castShadow&&(g.castShadow=b.castShadow);void 0!==b.receiveShadow&&(g.receiveShadow=b.receiveShadow);b.shadow&&(void 0!==b.shadow.bias&&(g.shadow.bias=b.shadow.bias),void 0!==b.shadow.radius&&(g.shadow.radius=b.shadow.radius),void 0!==b.shadow.mapSize&&g.shadow.mapSize.fromArray(b.shadow.mapSize),void 0!==b.shadow.camera&&(g.shadow.camera=
this.parseObject(b.shadow.camera)));void 0!==b.visible&&(g.visible=b.visible);void 0!==b.userData&&(g.userData=b.userData);if(void 0!==b.children)for(var m in b.children)g.add(this.parseObject(b.children[m],c,d));if("LOD"===b.type)for(b=b.levels,h=0;h<b.length;h++){var k=b[h];m=g.getObjectByProperty("uuid",k.object);void 0!==m&&g.addLevel(m,k.distance)}return g}}()});ua.prototype={constructor:ua,getPoint:function(a){console.warn("THREE.Curve: Warning, getPoint() not implemented!");return null},getPointAt:function(a){a=
this.getUtoTmapping(a);return this.getPoint(a)},getPoints:function(a){isNaN(a)&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));return b},getSpacedPoints:function(a){isNaN(a)&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPointAt(c/a));return b},getLength:function(){var a=this.getLengths();return a[a.length-1]},getLengths:function(a){isNaN(a)&&(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;
this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b},updateArcLengths:function(){this.needsUpdate=!0;this.getLengths()},getUtoTmapping:function(a,b){var c=this.getLengths(),d,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,m;g<=h;)if(d=Math.floor(g+(h-g)/2),m=c[d]-f,0>m)g=d+1;else if(0<m)h=d-1;else{h=d;break}d=h;if(c[d]===f)return d/(e-1);g=c[d];return(d+(f-g)/(c[d+1]-g))/(e-1)},getTangent:function(a){var b=
a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()},getTangentAt:function(a){a=this.getUtoTmapping(a);return this.getTangent(a)},computeFrenetFrames:function(a,b){var c=new q,d=[],e=[],f=[],g=new q,h=new M,m,k;for(m=0;m<=a;m++)k=m/a,d[m]=this.getTangentAt(k),d[m].normalize();e[0]=new q;f[0]=new q;m=Number.MAX_VALUE;k=Math.abs(d[0].x);var l=Math.abs(d[0].y),p=Math.abs(d[0].z);k<=m&&(m=k,c.set(1,0,0));l<=m&&(m=l,c.set(0,1,0));p<=m&&c.set(0,0,1);
g.crossVectors(d[0],c).normalize();e[0].crossVectors(d[0],g);f[0].crossVectors(d[0],e[0]);for(m=1;m<=a;m++)e[m]=e[m-1].clone(),f[m]=f[m-1].clone(),g.crossVectors(d[m-1],d[m]),g.length()>Number.EPSILON&&(g.normalize(),c=Math.acos(P.clamp(d[m-1].dot(d[m]),-1,1)),e[m].applyMatrix4(h.makeRotationAxis(g,c))),f[m].crossVectors(d[m],e[m]);if(!0===b)for(c=Math.acos(P.clamp(e[0].dot(e[a]),-1,1)),c/=a,0<d[0].dot(g.crossVectors(e[0],e[a]))&&(c=-c),m=1;m<=a;m++)e[m].applyMatrix4(h.makeRotationAxis(d[m],c*m)),
f[m].crossVectors(d[m],e[m]);return{tangents:d,normals:e,binormals:f}}};Ta.prototype=Object.create(ua.prototype);Ta.prototype.constructor=Ta;Ta.prototype.isLineCurve=!0;Ta.prototype.getPoint=function(a){if(1===a)return this.v2.clone();var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};Ta.prototype.getPointAt=function(a){return this.getPoint(a)};Ta.prototype.getTangent=function(a){return this.v2.clone().sub(this.v1).normalize()};cd.prototype=Object.assign(Object.create(ua.prototype),
{constructor:cd,add:function(a){this.curves.push(a)},closePath:function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new Ta(b,a))},getPoint:function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],c=a.getLength(),a.getPointAt(0===c?0:1-b/c);a++}return null},getLength:function(){var a=this.getCurveLengths();return a[a.length-1]},updateArcLengths:function(){this.needsUpdate=
!0;this.cacheLengths=null;this.getLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var a=[],b=0,c=0,d=this.curves.length;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a},getSpacedPoints:function(a){isNaN(a)&&(a=40);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));this.autoClose&&b.push(b[0]);return b},getPoints:function(a){a=a||12;for(var b=[],c,d=0,e=this.curves;d<e.length;d++)for(var f=
e[d],f=f.getPoints(f&&f.isEllipseCurve?2*a:f&&f.isLineCurve?1:f&&f.isSplineCurve?a*f.points.length:a),g=0;g<f.length;g++){var h=f[g];c&&c.equals(h)||(b.push(h),c=h)}this.autoClose&&1<b.length&&!b[b.length-1].equals(b[0])&&b.push(b[0]);return b},createPointsGeometry:function(a){a=this.getPoints(a);return this.createGeometry(a)},createSpacedPointsGeometry:function(a){a=this.getSpacedPoints(a);return this.createGeometry(a)},createGeometry:function(a){for(var b=new I,c=0,d=a.length;c<d;c++){var e=a[c];
b.vertices.push(new q(e.x,e.y,e.z||0))}return b}});Ya.prototype=Object.create(ua.prototype);Ya.prototype.constructor=Ya;Ya.prototype.isEllipseCurve=!0;Ya.prototype.getPoint=function(a){for(var b=2*Math.PI,c=this.aEndAngle-this.aStartAngle,d=Math.abs(c)<Number.EPSILON;0>c;)c+=b;for(;c>b;)c-=b;c<Number.EPSILON&&(c=d?0:b);!0!==this.aClockwise||d||(c=c===b?-b:c-b);b=this.aStartAngle+a*c;a=this.aX+this.xRadius*Math.cos(b);var e=this.aY+this.yRadius*Math.sin(b);0!==this.aRotation&&(b=Math.cos(this.aRotation),
c=Math.sin(this.aRotation),d=a-this.aX,e-=this.aY,a=d*b-e*c+this.aX,e=d*c+e*b+this.aY);return new E(a,e)};Bb.prototype=Object.create(ua.prototype);Bb.prototype.constructor=Bb;Bb.prototype.isSplineCurve=!0;Bb.prototype.getPoint=function(a){var b=this.points,c=(b.length-1)*a;a=Math.floor(c);var c=c-a,d=b[0===a?a:a-1],e=b[a],f=b[a>b.length-2?b.length-1:a+1],b=b[a>b.length-3?b.length-1:a+2];return new E(Qe(c,d.x,e.x,f.x,b.x),Qe(c,d.y,e.y,f.y,b.y))};gc.prototype=Object.create(ua.prototype);gc.prototype.constructor=
gc;gc.prototype.getPoint=function(a){var b=this.v0,c=this.v1,d=this.v2,e=this.v3;return new E(Ab(a,b.x,c.x,d.x,e.x),Ab(a,b.y,c.y,d.y,e.y))};hc.prototype=Object.create(ua.prototype);hc.prototype.constructor=hc;hc.prototype.getPoint=function(a){var b=this.v0,c=this.v1,d=this.v2;return new E(zb(a,b.x,c.x,d.x),zb(a,b.y,c.y,d.y))};var ve=Object.assign(Object.create(cd.prototype),{fromPoints:function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)},moveTo:function(a,
b){this.currentPoint.set(a,b)},lineTo:function(a,b){var c=new Ta(this.currentPoint.clone(),new E(a,b));this.curves.push(c);this.currentPoint.set(a,b)},quadraticCurveTo:function(a,b,c,d){a=new hc(this.currentPoint.clone(),new E(a,b),new E(c,d));this.curves.push(a);this.currentPoint.set(c,d)},bezierCurveTo:function(a,b,c,d,e,f){a=new gc(this.currentPoint.clone(),new E(a,b),new E(c,d),new E(e,f));this.curves.push(a);this.currentPoint.set(e,f)},splineThru:function(a){var b=[this.currentPoint.clone()].concat(a),
b=new Bb(b);this.curves.push(b);this.currentPoint.copy(a[a.length-1])},arc:function(a,b,c,d,e,f){this.absarc(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f)},absarc:function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)},ellipse:function(a,b,c,d,e,f,g,h){this.absellipse(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f,g,h)},absellipse:function(a,b,c,d,e,f,g,h){a=new Ya(a,b,c,d,e,f,g,h);0<this.curves.length&&(b=a.getPoint(0),b.equals(this.currentPoint)||this.lineTo(b.x,b.y));this.curves.push(a);
a=a.getPoint(1);this.currentPoint.copy(a)}});dd.prototype=ve;ve.constructor=dd;Cb.prototype=Object.assign(Object.create(ve),{constructor:Cb,getPointsHoles:function(a){for(var b=[],c=0,d=this.holes.length;c<d;c++)b[c]=this.holes[c].getPoints(a);return b},extractAllPoints:function(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)}},extractPoints:function(a){return this.extractAllPoints(a)}});de.prototype={moveTo:function(a,b){this.currentPath=new dd;this.subPaths.push(this.currentPath);
this.currentPath.moveTo(a,b)},lineTo:function(a,b){this.currentPath.lineTo(a,b)},quadraticCurveTo:function(a,b,c,d){this.currentPath.quadraticCurveTo(a,b,c,d)},bezierCurveTo:function(a,b,c,d,e,f){this.currentPath.bezierCurveTo(a,b,c,d,e,f)},splineThru:function(a){this.currentPath.splineThru(a)},toShapes:function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new Cb;f.curves=e.curves;b.push(f)}return b}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=
b[f],k=h.x-g.x,m=h.y-g.y;if(Math.abs(m)>Number.EPSILON){if(0>m&&(g=b[f],k=-k,h=b[e],m=-m),!(a.y<g.y||a.y>h.y))if(a.y===g.y){if(a.x===g.x)return!0}else{e=m*(a.x-g.x)-k*(a.y-g.y);if(0===e)return!0;0>e||(d=!d)}}else if(a.y===g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=h.x))return!0}return d}var e=Oa.isClockWise,f=this.subPaths;if(0===f.length)return[];if(!0===b)return c(f);var g,h,m,k=[];if(1===f.length)return h=f[0],m=new Cb,m.curves=h.curves,k.push(m),k;var l=!e(f[0].getPoints()),l=a?!l:l;m=[];var p=
[],n=[],q=0,w;p[q]=void 0;n[q]=[];for(var r=0,x=f.length;r<x;r++)h=f[r],w=h.getPoints(),g=e(w),(g=a?!g:g)?(!l&&p[q]&&q++,p[q]={s:new Cb,p:w},p[q].s.curves=h.curves,l&&q++,n[q]=[]):n[q].push({h:h,p:w[0]});if(!p[0])return c(f);if(1<p.length){r=!1;h=[];e=0;for(f=p.length;e<f;e++)m[e]=[];e=0;for(f=p.length;e<f;e++)for(g=n[e],l=0;l<g.length;l++){q=g[l];w=!0;for(x=0;x<p.length;x++)d(q.p,p[x].p)&&(e!==x&&h.push({froms:e,tos:x,hole:l}),w?(w=!1,m[x].push(q)):r=!0);w&&m[e].push(q)}0<h.length&&(r||(n=m))}r=
0;for(e=p.length;r<e;r++)for(m=p[r].s,k.push(m),h=n[r],f=0,g=h.length;f<g;f++)m.holes.push(h[f].h);return k}};Object.assign(ee.prototype,{isFont:!0,generateShapes:function(a,b,c){void 0===b&&(b=100);void 0===c&&(c=4);var d=this.data;a=String(a).split("");var e=b/d.resolution,f=(d.boundingBox.yMax-d.boundingBox.yMin+d.underlineThickness)*e,g=0,h=0;b=[];for(var m=0;m<a.length;m++){var k=a[m];if("\n"===k)g=0,h-=f;else{var l;l=e;var p=g,n=h;if(k=d.glyphs[k]||d.glyphs["?"]){var q=new de,w=[],r,x,u,v,A,
y,D,E;if(k.o)for(var C=k._cachedOutline||(k._cachedOutline=k.o.split(" ")),F=0,G=C.length;F<G;)switch(C[F++]){case "m":r=C[F++]*l+p;x=C[F++]*l+n;q.moveTo(r,x);break;case "l":r=C[F++]*l+p;x=C[F++]*l+n;q.lineTo(r,x);break;case "q":r=C[F++]*l+p;x=C[F++]*l+n;A=C[F++]*l+p;y=C[F++]*l+n;q.quadraticCurveTo(A,y,r,x);if(v=w[w.length-1]){u=v.x;v=v.y;for(var I=1;I<=c;I++){var M=I/c;zb(M,u,A,r);zb(M,v,y,x)}}break;case "b":if(r=C[F++]*l+p,x=C[F++]*l+n,A=C[F++]*l+p,y=C[F++]*l+n,D=C[F++]*l+p,E=C[F++]*l+n,q.bezierCurveTo(A,
y,D,E,r,x),v=w[w.length-1])for(u=v.x,v=v.y,I=1;I<=c;I++)M=I/c,Ab(M,u,A,D,r),Ab(M,v,y,E,x)}l={offsetX:k.ha*l,path:q}}else l=void 0;g+=l.offsetX;b.push(l.path)}}c=[];d=0;for(a=b.length;d<a;d++)Array.prototype.push.apply(c,b[d].toShapes());return c}});Object.assign(Re.prototype,{load:function(a,b,c,d){var e=this;(new Da(this.manager)).load(a,function(a){var c;try{c=JSON.parse(a)}catch(d){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(a.substring(65,
a.length-2))}a=e.parse(c);b&&b(a)},c,d)},parse:function(a){return new ee(a)}});var Qd,ie={getContext:function(){void 0===Qd&&(Qd=new (window.AudioContext||window.webkitAudioContext));return Qd},setContext:function(a){Qd=a}};Object.assign(fe.prototype,{load:function(a,b,c,d){var e=new Da(this.manager);e.setResponseType("arraybuffer");e.load(a,function(a){ie.getContext().decodeAudioData(a,function(a){b(a)})},c,d)}});ge.prototype=Object.assign(Object.create(ma.prototype),{constructor:ge,isRectAreaLight:!0,
copy:function(a){ma.prototype.copy.call(this,a);this.width=a.width;this.height=a.height;return this}});Object.assign(Se.prototype,{update:function(){var a,b,c,d,e,f,g,h=new M,m=new M;return function(k){if(a!==this||b!==k.focus||c!==k.fov||d!==k.aspect*this.aspect||e!==k.near||f!==k.far||g!==k.zoom){a=this;b=k.focus;c=k.fov;d=k.aspect*this.aspect;e=k.near;f=k.far;g=k.zoom;var l=k.projectionMatrix.clone(),p=this.eyeSep/2,n=p*e/b,q=e*Math.tan(P.DEG2RAD*c*.5)/g,w;m.elements[12]=-p;h.elements[12]=p;p=
-q*d+n;w=q*d+n;l.elements[0]=2*e/(w-p);l.elements[8]=(w+p)/(w-p);this.cameraL.projectionMatrix.copy(l);p=-q*d-n;w=q*d-n;l.elements[0]=2*e/(w-p);l.elements[8]=(w+p)/(w-p);this.cameraR.projectionMatrix.copy(l)}this.cameraL.matrixWorld.copy(k.matrixWorld).multiply(m);this.cameraR.matrixWorld.copy(k.matrixWorld).multiply(h)}}()});Kd.prototype=Object.create(A.prototype);Kd.prototype.constructor=Kd;he.prototype=Object.assign(Object.create(A.prototype),{constructor:he,getInput:function(){return this.gain},
removeFilter:function(){null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null)},getFilter:function(){return this.filter},setFilter:function(a){null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination);this.filter=a;this.gain.connect(this.filter);this.filter.connect(this.context.destination)},getMasterVolume:function(){return this.gain.gain.value},
setMasterVolume:function(a){this.gain.gain.value=a},updateMatrixWorld:function(){var a=new q,b=new Z,c=new q,d=new q;return function(e){A.prototype.updateMatrixWorld.call(this,e);e=this.context.listener;var f=this.up;this.matrixWorld.decompose(a,b,c);d.set(0,0,-1).applyQuaternion(b);e.positionX?(e.positionX.setValueAtTime(a.x,this.context.currentTime),e.positionY.setValueAtTime(a.y,this.context.currentTime),e.positionZ.setValueAtTime(a.z,this.context.currentTime),e.forwardX.setValueAtTime(d.x,this.context.currentTime),
e.forwardY.setValueAtTime(d.y,this.context.currentTime),e.forwardZ.setValueAtTime(d.z,this.context.currentTime),e.upX.setValueAtTime(f.x,this.context.currentTime),e.upY.setValueAtTime(f.y,this.context.currentTime),e.upZ.setValueAtTime(f.z,this.context.currentTime)):(e.setPosition(a.x,a.y,a.z),e.setOrientation(d.x,d.y,d.z,f.x,f.y,f.z))}}()});ic.prototype=Object.assign(Object.create(A.prototype),{constructor:ic,getOutput:function(){return this.gain},setNodeSource:function(a){this.hasPlaybackControl=
!1;this.sourceType="audioNode";this.source=a;this.connect();return this},setBuffer:function(a){this.buffer=a;this.sourceType="buffer";this.autoplay&&this.play();return this},play:function(){if(!0===this.isPlaying)console.warn("THREE.Audio: Audio is already playing.");else if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else{var a=this.context.createBufferSource();a.buffer=this.buffer;a.loop=this.loop;a.onended=this.onEnded.bind(this);a.playbackRate.setValueAtTime(this.playbackRate,
this.startTime);a.start(0,this.startTime);this.isPlaying=!0;this.source=a;return this.connect()}},pause:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.source.stop(),this.startTime=this.context.currentTime,this.isPlaying=!1,this},stop:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.source.stop(),this.startTime=0,this.isPlaying=!1,this},connect:function(){if(0<
this.filters.length){this.source.connect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].connect(this.filters[a]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(0<this.filters.length){this.source.disconnect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].disconnect(this.filters[a]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());
return this},getFilters:function(){return this.filters},setFilters:function(a){a||(a=[]);!0===this.isPlaying?(this.disconnect(),this.filters=a,this.connect()):this.filters=a;return this},getFilter:function(){return this.getFilters()[0]},setFilter:function(a){return this.setFilters(a?[a]:[])},setPlaybackRate:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.playbackRate=a,!0===this.isPlaying&&this.source.playbackRate.setValueAtTime(this.playbackRate,
this.context.currentTime),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.loop=a,!0===this.isPlaying&&(this.source.loop=this.loop),this},getVolume:function(){return this.gain.gain.value},
setVolume:function(a){this.gain.gain.value=a;return this}});je.prototype=Object.assign(Object.create(ic.prototype),{constructor:je,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(a){this.panner.refDistance=a},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(a){this.panner.rolloffFactor=a},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(a){this.panner.distanceModel=
a},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(a){this.panner.maxDistance=a},updateMatrixWorld:function(){var a=new q;return function(b){A.prototype.updateMatrixWorld.call(this,b);a.setFromMatrixPosition(this.matrixWorld);this.panner.setPosition(a.x,a.y,a.z)}}()});Object.assign(ke.prototype,{getFrequencyData:function(){this.analyser.getByteFrequencyData(this.data);return this.data},getAverageFrequency:function(){for(var a=0,b=this.getFrequencyData(),c=0;c<b.length;c++)a+=
b[c];return a/b.length}});Ld.prototype={constructor:Ld,accumulate:function(a,b){var c=this.buffer,d=this.valueSize,e=a*d+d,f=this.cumulativeWeight;if(0===f){for(f=0;f!==d;++f)c[e+f]=c[f];f=b}else f+=b,this._mixBufferRegion(c,e,0,b/f,d);this.cumulativeWeight=f},apply:function(a){var b=this.valueSize,c=this.buffer;a=a*b+b;var d=this.cumulativeWeight,e=this.binding;this.cumulativeWeight=0;1>d&&this._mixBufferRegion(c,a,3*b,1-d,b);for(var d=b,f=b+b;d!==f;++d)if(c[d]!==c[d+b]){e.setValue(c,a);break}},
saveOriginalState:function(){var a=this.buffer,b=this.valueSize,c=3*b;this.binding.getValue(a,c);for(var d=b;d!==c;++d)a[d]=a[c+d%b];this.cumulativeWeight=0},restoreOriginalState:function(){this.binding.setValue(this.buffer,3*this.valueSize)},_select:function(a,b,c,d,e){if(.5<=d)for(d=0;d!==e;++d)a[b+d]=a[c+d]},_slerp:function(a,b,c,d,e){Z.slerpFlat(a,b,a,b,a,c,d)},_lerp:function(a,b,c,d,e){for(var f=1-d,g=0;g!==e;++g){var h=b+g;a[h]=a[h]*f+a[c+g]*d}}};ka.prototype={constructor:ka,getValue:function(a,
b){this.bind();this.getValue(a,b)},setValue:function(a,b){this.bind();this.setValue(a,b)},bind:function(){var a=this.node,b=this.parsedPath,c=b.objectName,d=b.propertyName,e=b.propertyIndex;a||(this.node=a=ka.findNode(this.rootNode,b.nodeName)||this.rootNode);this.getValue=this._getValue_unavailable;this.setValue=this._setValue_unavailable;if(a){if(c){var f=b.objectIndex;switch(c){case "materials":if(!a.material){console.error("  can not bind to material as node does not have a material",this);return}if(!a.material.materials){console.error("  can not bind to material.materials as node.material does not have a materials array",
this);return}a=a.material.materials;break;case "bones":if(!a.skeleton){console.error("  can not bind to bones as node does not have a skeleton",this);return}a=a.skeleton.bones;for(c=0;c<a.length;c++)if(a[c].name===f){f=c;break}break;default:if(void 0===a[c]){console.error("  can not bind to objectName of node, undefined",this);return}a=a[c]}if(void 0!==f){if(void 0===a[f]){console.error("  trying to bind to objectIndex of objectName, but is undefined:",this,a);return}a=a[f]}}f=a[d];if(void 0===f)console.error("  trying to update property for track: "+
b.nodeName+"."+d+" but it wasn't found.",a);else{b=this.Versioning.None;void 0!==a.needsUpdate?(b=this.Versioning.NeedsUpdate,this.targetObject=a):void 0!==a.matrixWorldNeedsUpdate&&(b=this.Versioning.MatrixWorldNeedsUpdate,this.targetObject=a);c=this.BindingType.Direct;if(void 0!==e){if("morphTargetInfluences"===d){if(!a.geometry){console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry",this);return}if(!a.geometry.morphTargets){console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets",
this);return}for(c=0;c<this.node.geometry.morphTargets.length;c++)if(a.geometry.morphTargets[c].name===e){e=c;break}}c=this.BindingType.ArrayElement;this.resolvedProperty=f;this.propertyIndex=e}else void 0!==f.fromArray&&void 0!==f.toArray?(c=this.BindingType.HasFromToArray,this.resolvedProperty=f):void 0!==f.length?(c=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=d;this.getValue=this.GetterByBindingType[c];this.setValue=this.SetterByBindingTypeAndVersioning[c][b]}}else console.error("  trying to update node for track: "+
this.path+" but it wasn't found.")},unbind:function(){this.node=null;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound}};Object.assign(ka.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},_getValue_unbound:ka.prototype.getValue,_setValue_unbound:ka.prototype.setValue,BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(a,b){a[b]=this.node[this.propertyName]},
function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)a[b++]=c[d]},function(a,b){a[b]=this.resolvedProperty[this.propertyIndex]},function(a,b){this.resolvedProperty.toArray(a,b)}],SetterByBindingTypeAndVersioning:[[function(a,b){this.node[this.propertyName]=a[b]},function(a,b){this.node[this.propertyName]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.node[this.propertyName]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){for(var c=this.resolvedProperty,
d=0,e=c.length;d!==e;++d)c[d]=a[b++]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.needsUpdate=!0},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty[this.propertyIndex]=a[b]},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];
this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty.fromArray(a,b)},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.matrixWorldNeedsUpdate=!0}]]});ka.Composite=function(a,b,c){c=c||ka.parseTrackName(b);this._targetGroup=a;this._bindings=a.subscribe_(b,c)};ka.Composite.prototype={constructor:ka.Composite,getValue:function(a,b){this.bind();var c=this._bindings[this._targetGroup.nCachedObjects_];
void 0!==c&&c.getValue(a,b)},setValue:function(a,b){for(var c=this._bindings,d=this._targetGroup.nCachedObjects_,e=c.length;d!==e;++d)c[d].setValue(a,b)},bind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].bind()},unbind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].unbind()}};ka.create=function(a,b,c){return a&&a.isAnimationObjectGroup?new ka.Composite(a,b,c):new ka(a,b,c)};ka.parseTrackName=function(a){var b=
/^((?:[\w-]+[\/:])*)([\w-]+)?(?:\.([\w-]+)(?:\[(.+)\])?)?\.([\w-]+)(?:\[(.+)\])?$/.exec(a);if(!b)throw Error("cannot parse trackName at all: "+a);b={nodeName:b[2],objectName:b[3],objectIndex:b[4],propertyName:b[5],propertyIndex:b[6]};if(null===b.propertyName||0===b.propertyName.length)throw Error("can not parse propertyName from trackName: "+a);return b};ka.findNode=function(a,b){if(!b||""===b||"root"===b||"."===b||-1===b||b===a.name||b===a.uuid)return a;if(a.skeleton){var c=function(a){for(var c=
0;c<a.bones.length;c++){var d=a.bones[c];if(d.name===b)return d}return null}(a.skeleton);if(c)return c}if(a.children){var d=function(a){for(var c=0;c<a.length;c++){var g=a[c];if(g.name===b||g.uuid===b||(g=d(g.children)))return g}return null};if(c=d(a.children))return c}return null};le.prototype={constructor:le,isAnimationObjectGroup:!0,add:function(a){for(var b=this._objects,c=b.length,d=this.nCachedObjects_,e=this._indicesByUUID,f=this._paths,g=this._parsedPaths,h=this._bindings,m=h.length,k=0,l=
arguments.length;k!==l;++k){var p=arguments[k],n=p.uuid,q=e[n];if(void 0===q){q=c++;e[n]=q;b.push(p);for(var n=0,w=m;n!==w;++n)h[n].push(new ka(p,f[n],g[n]))}else if(q<d){var r=--d,w=b[r];e[w.uuid]=q;b[q]=w;e[n]=r;b[r]=p;n=0;for(w=m;n!==w;++n){var x=h[n],u=x[q];x[q]=x[r];void 0===u&&(u=new ka(p,f[n],g[n]));x[r]=u}}else void 0!==b[q]&&console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")}this.nCachedObjects_=d},remove:function(a){for(var b=
this._objects,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._bindings,f=e.length,g=0,h=arguments.length;g!==h;++g){var m=arguments[g],k=m.uuid,l=d[k];if(void 0!==l&&l>=c){var p=c++,n=b[p];d[n.uuid]=l;b[l]=n;d[k]=p;b[p]=m;m=0;for(k=f;m!==k;++m){var n=e[m],q=n[l];n[l]=n[p];n[p]=q}}}this.nCachedObjects_=c},uncache:function(a){for(var b=this._objects,c=b.length,d=this.nCachedObjects_,e=this._indicesByUUID,f=this._bindings,g=f.length,h=0,m=arguments.length;h!==m;++h){var k=arguments[h].uuid,l=e[k];
if(void 0!==l)if(delete e[k],l<d){var k=--d,p=b[k],n=--c,q=b[n];e[p.uuid]=l;b[l]=p;e[q.uuid]=k;b[k]=q;b.pop();p=0;for(q=g;p!==q;++p){var w=f[p],r=w[n];w[l]=w[k];w[k]=r;w.pop()}}else for(n=--c,q=b[n],e[q.uuid]=l,b[l]=q,b.pop(),p=0,q=g;p!==q;++p)w=f[p],w[l]=w[n],w.pop()}this.nCachedObjects_=d},subscribe_:function(a,b){var c=this._bindingsIndicesByPath,d=c[a],e=this._bindings;if(void 0!==d)return e[d];var f=this._paths,g=this._parsedPaths,h=this._objects,l=this.nCachedObjects_,k=Array(h.length),d=e.length;
c[a]=d;f.push(a);g.push(b);e.push(k);c=l;for(d=h.length;c!==d;++c)k[c]=new ka(h[c],a,b);return k},unsubscribe_:function(a){var b=this._bindingsIndicesByPath,c=b[a];if(void 0!==c){var d=this._paths,e=this._parsedPaths,f=this._bindings,g=f.length-1,h=f[g];b[a[g]]=c;f[c]=h;f.pop();e[c]=e[g];e.pop();d[c]=d[g];d.pop()}}};me.prototype={constructor:me,play:function(){this._mixer._activateAction(this);return this},stop:function(){this._mixer._deactivateAction(this);return this.reset()},reset:function(){this.paused=
!1;this.enabled=!0;this.time=0;this._loopCount=-1;this._startTime=null;return this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(a){this._startTime=a;return this},setLoop:function(a,b){this.loop=a;this.repetitions=b;return this},setEffectiveWeight:function(a){this.weight=a;this._effectiveWeight=this.enabled?
a:0;return this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(a){return this._scheduleFading(a,0,1)},fadeOut:function(a){return this._scheduleFading(a,1,0)},crossFadeFrom:function(a,b,c){a.fadeOut(b);this.fadeIn(b);if(c){c=this._clip.duration;var d=a._clip.duration,e=c/d;a.warp(1,d/c,b);this.warp(e,1,b)}return this},crossFadeTo:function(a,b,c){return a.crossFadeFrom(this,b,c)},stopFading:function(){var a=this._weightInterpolant;null!==a&&(this._weightInterpolant=
null,this._mixer._takeBackControlInterpolant(a));return this},setEffectiveTimeScale:function(a){this.timeScale=a;this._effectiveTimeScale=this.paused?0:a;return this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(a){this.timeScale=this._clip.duration/a;return this.stopWarping()},syncWith:function(a){this.time=a.time;this.timeScale=a.timeScale;return this.stopWarping()},halt:function(a){return this.warp(this._effectiveTimeScale,0,a)},warp:function(a,
b,c){var d=this._mixer,e=d.time,f=this._timeScaleInterpolant,g=this.timeScale;null===f&&(this._timeScaleInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;d[1]=e+c;f[0]=a/g;f[1]=b/g;return this},stopWarping:function(){var a=this._timeScaleInterpolant;null!==a&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||
this._mixer._root},_update:function(a,b,c,d){var e=this._startTime;if(null!==e){b=(a-e)*c;if(0>b||0===c)return;this._startTime=null;b*=c}b*=this._updateTimeScale(a);c=this._updateTime(b);a=this._updateWeight(a);if(0<a){b=this._interpolants;for(var e=this._propertyBindings,f=0,g=b.length;f!==g;++f)b[f].evaluate(c),e[f].accumulate(d,a)}},_updateWeight:function(a){var b=0;if(this.enabled){var b=this.weight,c=this._weightInterpolant;if(null!==c){var d=c.evaluate(a)[0],b=b*d;a>c.parameterPositions[1]&&
(this.stopFading(),0===d&&(this.enabled=!1))}}return this._effectiveWeight=b},_updateTimeScale:function(a){var b=0;if(!this.paused){var b=this.timeScale,c=this._timeScaleInterpolant;if(null!==c){var d=c.evaluate(a)[0],b=b*d;a>c.parameterPositions[1]&&(this.stopWarping(),0===b?this.paused=!0:this.timeScale=b)}}return this._effectiveTimeScale=b},_updateTime:function(a){var b=this.time+a;if(0===a)return b;var c=this._clip.duration,d=this.loop,e=this._loopCount;if(2200===d)a:{if(-1===e&&(this._loopCount=
0,this._setEndings(!0,!0,!1)),b>=c)b=c;else if(0>b)b=0;else break a;this.clampWhenFinished?this.paused=!0:this.enabled=!1;this._mixer.dispatchEvent({type:"finished",action:this,direction:0>a?-1:1})}else{d=2202===d;-1===e&&(0<=a?(e=0,this._setEndings(!0,0===this.repetitions,d)):this._setEndings(0===this.repetitions,!0,d));if(b>=c||0>b){var f=Math.floor(b/c),b=b-c*f,e=e+Math.abs(f),g=this.repetitions-e;0>g?(this.clampWhenFinished?this.paused=!0:this.enabled=!1,b=0<a?c:0,this._mixer.dispatchEvent({type:"finished",
action:this,direction:0<a?1:-1})):(0===g?(a=0>a,this._setEndings(a,!a,d)):this._setEndings(!1,!1,d),this._loopCount=e,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:f}))}if(d&&1===(e&1))return this.time=b,c-b}return this.time=b},_setEndings:function(a,b,c){var d=this._interpolantSettings;c?(d.endingStart=2401,d.endingEnd=2401):(d.endingStart=a?this.zeroSlopeAtStart?2401:2400:2402,d.endingEnd=b?this.zeroSlopeAtEnd?2401:2400:2402)},_scheduleFading:function(a,b,c){var d=this._mixer,e=d.time,
f=this._weightInterpolant;null===f&&(this._weightInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;f[0]=b;d[1]=e+a;f[1]=c;return this}};ed.prototype={constructor:ed,clipAction:function(a,b){var c=b||this._root,d=c.uuid,e="string"===typeof a?ra.findByName(c,a):a,c=null!==e?e.uuid:a,f=this._actionsByClip[c],g=null;if(void 0!==f){g=f.actionByRoot[d];if(void 0!==g)return g;g=f.knownActions[0];null===e&&(e=g._clip)}if(null===e)return null;e=new me(this,e,b);this._bindAction(e,
g);this._addInactiveAction(e,c,d);return e},existingAction:function(a,b){var c=b||this._root,d=c.uuid,c="string"===typeof a?ra.findByName(c,a):a,c=this._actionsByClip[c?c.uuid:a];return void 0!==c?c.actionByRoot[d]||null:null},stopAllAction:function(){for(var a=this._actions,b=this._nActiveActions,c=this._bindings,d=this._nActiveBindings,e=this._nActiveBindings=this._nActiveActions=0;e!==b;++e)a[e].reset();for(e=0;e!==d;++e)c[e].useCount=0;return this},update:function(a){a*=this.timeScale;for(var b=
this._actions,c=this._nActiveActions,d=this.time+=a,e=Math.sign(a),f=this._accuIndex^=1,g=0;g!==c;++g){var h=b[g];h.enabled&&h._update(d,a,e,f)}a=this._bindings;b=this._nActiveBindings;for(g=0;g!==b;++g)a[g].apply(f);return this},getRoot:function(){return this._root},uncacheClip:function(a){var b=this._actions;a=a.uuid;var c=this._actionsByClip,d=c[a];if(void 0!==d){for(var d=d.knownActions,e=0,f=d.length;e!==f;++e){var g=d[e];this._deactivateAction(g);var h=g._cacheIndex,l=b[b.length-1];g._cacheIndex=
null;g._byClipCacheIndex=null;l._cacheIndex=h;b[h]=l;b.pop();this._removeInactiveBindingsForAction(g)}delete c[a]}},uncacheRoot:function(a){a=a.uuid;var b=this._actionsByClip,c;for(c in b){var d=b[c].actionByRoot[a];void 0!==d&&(this._deactivateAction(d),this._removeInactiveAction(d))}c=this._bindingsByRootAndName[a];if(void 0!==c)for(var e in c)a=c[e],a.restoreOriginalState(),this._removeInactiveBinding(a)},uncacheAction:function(a,b){var c=this.existingAction(a,b);null!==c&&(this._deactivateAction(c),
this._removeInactiveAction(c))}};Object.assign(ed.prototype,{_bindAction:function(a,b){var c=a._localRoot||this._root,d=a._clip.tracks,e=d.length,f=a._propertyBindings,g=a._interpolants,h=c.uuid,l=this._bindingsByRootAndName,k=l[h];void 0===k&&(k={},l[h]=k);for(l=0;l!==e;++l){var q=d[l],p=q.name,n=k[p];if(void 0===n){n=f[l];if(void 0!==n){null===n._cacheIndex&&(++n.referenceCount,this._addInactiveBinding(n,h,p));continue}n=new Ld(ka.create(c,p,b&&b._propertyBindings[l].binding.parsedPath),q.ValueTypeName,
q.getValueSize());++n.referenceCount;this._addInactiveBinding(n,h,p)}f[l]=n;g[l].resultBuffer=n.buffer}},_activateAction:function(a){if(!this._isActiveAction(a)){if(null===a._cacheIndex){var b=(a._localRoot||this._root).uuid,c=a._clip.uuid,d=this._actionsByClip[c];this._bindAction(a,d&&d.knownActions[0]);this._addInactiveAction(a,c,b)}b=a._propertyBindings;c=0;for(d=b.length;c!==d;++c){var e=b[c];0===e.useCount++&&(this._lendBinding(e),e.saveOriginalState())}this._lendAction(a)}},_deactivateAction:function(a){if(this._isActiveAction(a)){for(var b=
a._propertyBindings,c=0,d=b.length;c!==d;++c){var e=b[c];0===--e.useCount&&(e.restoreOriginalState(),this._takeBackBinding(e))}this._takeBackAction(a)}},_initMemoryManager:function(){this._actions=[];this._nActiveActions=0;this._actionsByClip={};this._bindings=[];this._nActiveBindings=0;this._bindingsByRootAndName={};this._controlInterpolants=[];this._nActiveControlInterpolants=0;var a=this;this.stats={actions:{get total(){return a._actions.length},get inUse(){return a._nActiveActions}},bindings:{get total(){return a._bindings.length},
get inUse(){return a._nActiveBindings}},controlInterpolants:{get total(){return a._controlInterpolants.length},get inUse(){return a._nActiveControlInterpolants}}}},_isActiveAction:function(a){a=a._cacheIndex;return null!==a&&a<this._nActiveActions},_addInactiveAction:function(a,b,c){var d=this._actions,e=this._actionsByClip,f=e[b];void 0===f?(f={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,e[b]=f):(b=f.knownActions,a._byClipCacheIndex=b.length,b.push(a));a._cacheIndex=d.length;d.push(a);
f.actionByRoot[c]=a},_removeInactiveAction:function(a){var b=this._actions,c=b[b.length-1],d=a._cacheIndex;c._cacheIndex=d;b[d]=c;b.pop();a._cacheIndex=null;var c=a._clip.uuid,d=this._actionsByClip,e=d[c],f=e.knownActions,g=f[f.length-1],h=a._byClipCacheIndex;g._byClipCacheIndex=h;f[h]=g;f.pop();a._byClipCacheIndex=null;delete e.actionByRoot[(b._localRoot||this._root).uuid];0===f.length&&delete d[c];this._removeInactiveBindingsForAction(a)},_removeInactiveBindingsForAction:function(a){a=a._propertyBindings;
for(var b=0,c=a.length;b!==c;++b){var d=a[b];0===--d.referenceCount&&this._removeInactiveBinding(d)}},_lendAction:function(a){var b=this._actions,c=a._cacheIndex,d=this._nActiveActions++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackAction:function(a){var b=this._actions,c=a._cacheIndex,d=--this._nActiveActions,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_addInactiveBinding:function(a,b,c){var d=this._bindingsByRootAndName,e=d[b],f=this._bindings;void 0===e&&(e={},d[b]=
e);e[c]=a;a._cacheIndex=f.length;f.push(a)},_removeInactiveBinding:function(a){var b=this._bindings,c=a.binding,d=c.rootNode.uuid,c=c.path,e=this._bindingsByRootAndName,f=e[d],g=b[b.length-1];a=a._cacheIndex;g._cacheIndex=a;b[a]=g;b.pop();delete f[c];a:{for(var h in f)break a;delete e[d]}},_lendBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=this._nActiveBindings++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=
--this._nActiveBindings,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_lendControlInterpolant:function(){var a=this._controlInterpolants,b=this._nActiveControlInterpolants++,c=a[b];void 0===c&&(c=new ad(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),c.__cacheIndex=b,a[b]=c);return c},_takeBackControlInterpolant:function(a){var b=this._controlInterpolants,c=a.__cacheIndex,d=--this._nActiveControlInterpolants,e=b[d];a.__cacheIndex=d;b[d]=a;e.__cacheIndex=c;
b[c]=e},_controlInterpolantsResultBuffer:new Float32Array(1)});Object.assign(ed.prototype,pa.prototype);Md.prototype.clone=function(){return new Md(void 0===this.value.clone?this.value:this.value.clone())};Db.prototype=Object.create(G.prototype);Db.prototype.constructor=Db;Db.prototype.isInstancedBufferGeometry=!0;Db.prototype.addGroup=function(a,b,c){this.groups.push({start:a,count:b,materialIndex:c})};Db.prototype.copy=function(a){var b=a.index;null!==b&&this.setIndex(b.clone());var b=a.attributes,
c;for(c in b)this.addAttribute(c,b[c].clone());a=a.groups;c=0;for(b=a.length;c<b;c++){var d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}return this};ne.prototype={constructor:ne,isInterleavedBufferAttribute:!0,get count(){return this.data.count},get array(){return this.data.array},setX:function(a,b){this.data.array[a*this.data.stride+this.offset]=b;return this},setY:function(a,b){this.data.array[a*this.data.stride+this.offset+1]=b;return this},setZ:function(a,b){this.data.array[a*this.data.stride+
this.offset+2]=b;return this},setW:function(a,b){this.data.array[a*this.data.stride+this.offset+3]=b;return this},getX:function(a){return this.data.array[a*this.data.stride+this.offset]},getY:function(a){return this.data.array[a*this.data.stride+this.offset+1]},getZ:function(a){return this.data.array[a*this.data.stride+this.offset+2]},getW:function(a){return this.data.array[a*this.data.stride+this.offset+3]},setXY:function(a,b,c){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+
1]=c;return this},setXYZ:function(a,b,c,d){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;this.data.array[a+3]=e;return this}};jc.prototype={constructor:jc,isInterleavedBuffer:!0,set needsUpdate(a){!0===a&&this.version++},setArray:function(a){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
this.count=void 0!==a?a.length/this.stride:0;this.array=a},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.count=a.count;this.stride=a.stride;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.stride;c*=b.stride;for(var d=0,e=this.stride;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},clone:function(){return(new this.constructor).copy(this)},onUpload:function(a){this.onUploadCallback=
a;return this}};kc.prototype=Object.create(jc.prototype);kc.prototype.constructor=kc;kc.prototype.isInstancedInterleavedBuffer=!0;kc.prototype.copy=function(a){jc.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this};lc.prototype=Object.create(w.prototype);lc.prototype.constructor=lc;lc.prototype.isInstancedBufferAttribute=!0;lc.prototype.copy=function(a){w.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this};oe.prototype={constructor:oe,linePrecision:1,
set:function(a,b){this.ray.set(a,b)},setFromCamera:function(a,b){b&&b.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(b.matrixWorld),this.ray.direction.set(a.x,a.y,.5).unproject(b).sub(this.ray.origin).normalize()):b&&b.isOrthographicCamera?(this.ray.origin.set(a.x,a.y,(b.near+b.far)/(b.near-b.far)).unproject(b),this.ray.direction.set(0,0,-1).transformDirection(b.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(a,b){var c=[];pe(a,this,c,
b);c.sort(Te);return c},intersectObjects:function(a,b){var c=[];if(!1===Array.isArray(a))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),c;for(var d=0,e=a.length;d<e;d++)pe(a[d],this,c,b);c.sort(Te);return c}};qe.prototype={constructor:qe,start:function(){this.oldTime=this.startTime=(performance||Date).now();this.elapsedTime=0;this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},
getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=(performance||Date).now(),a=(b-this.oldTime)/1E3;this.oldTime=b;this.elapsedTime+=a}return a}};re.prototype={constructor:re,set:function(a,b,c){this.radius=a;this.phi=b;this.theta=c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.phi=a.phi;this.theta=a.theta;return this},makeSafe:function(){this.phi=Math.max(1E-6,Math.min(Math.PI-1E-6,this.phi));
return this},setFromVector3:function(a){this.radius=a.length();0===this.radius?this.phi=this.theta=0:(this.theta=Math.atan2(a.x,a.z),this.phi=Math.acos(P.clamp(a.y/this.radius,-1,1)));return this}};se.prototype={constructor:se,set:function(a,b,c){this.radius=a;this.theta=b;this.y=c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.theta=a.theta;this.y=a.y;return this},setFromVector3:function(a){this.radius=Math.sqrt(a.x*a.x+a.z*a.z);
this.theta=Math.atan2(a.x,a.z);this.y=a.y;return this}};oa.prototype=Object.create(za.prototype);oa.prototype.constructor=oa;oa.prototype.createAnimation=function(a,b,c,d){b={start:b,end:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};oa.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)_?(\d+)/i,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<
g;f++){var h=e.morphTargets[f].name.match(b);if(h&&1<h.length){var l=h[1];d[l]||(d[l]={start:Infinity,end:-Infinity});h=d[l];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=l)}}for(l in d)h=d[l],this.createAnimation(l,h.start,h.end,a);this.firstAnimation=c};oa.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};oa.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};oa.prototype.setAnimationFPS=
function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};oa.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};oa.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};oa.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};oa.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};oa.prototype.getAnimationDuration=
function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};oa.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("THREE.MorphBlendMesh: animation["+a+"] undefined in .playAnimation()")};oa.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};oa.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>
d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.start+P.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);d.currentFrame!==
d.lastFrame?(this.morphTargetInfluences[d.currentFrame]=e*g,this.morphTargetInfluences[d.lastFrame]=(1-e)*g):this.morphTargetInfluences[d.currentFrame]=g}}};fd.prototype=Object.create(A.prototype);fd.prototype.constructor=fd;fd.prototype.isImmediateRenderObject=!0;gd.prototype=Object.create(ga.prototype);gd.prototype.constructor=gd;gd.prototype.update=function(){var a=new q,b=new q,c=new xa;return function(){var d=["a","b","c"];this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);
var e=this.object.matrixWorld,f=this.geometry.attributes.position,g=this.object.geometry;if(g&&g.isGeometry)for(var h=g.vertices,l=g.faces,k=g=0,q=l.length;k<q;k++)for(var p=l[k],n=0,t=p.vertexNormals.length;n<t;n++){var w=p.vertexNormals[n];a.copy(h[p[d[n]]]).applyMatrix4(e);b.copy(w).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);f.setXYZ(g,a.x,a.y,a.z);g+=1;f.setXYZ(g,b.x,b.y,b.z);g+=1}else if(g&&g.isBufferGeometry)for(d=g.attributes.position,h=g.attributes.normal,n=g=0,t=d.count;n<
t;n++)a.set(d.getX(n),d.getY(n),d.getZ(n)).applyMatrix4(e),b.set(h.getX(n),h.getY(n),h.getZ(n)),b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),f.setXYZ(g,a.x,a.y,a.z),g+=1,f.setXYZ(g,b.x,b.y,b.z),g+=1;f.needsUpdate=!0;return this}}();mc.prototype=Object.create(A.prototype);mc.prototype.constructor=mc;mc.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};mc.prototype.update=function(){var a=new q,b=new q;return function(){var c=this.light.distance?
this.light.distance:1E3,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();nc.prototype=Object.create(ga.prototype);nc.prototype.constructor=nc;nc.prototype.getBoneList=function(a){var b=[];a&&a.isBone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,this.getBoneList(a.children[c]));
return b};nc.prototype.update=function(){var a=new q,b=new M,c=new M;return function(){var d=this.geometry,e=d.getAttribute("position");c.getInverse(this.root.matrixWorld);for(var f=0,g=0;f<this.bones.length;f++){var h=this.bones[f];h.parent&&h.parent.isBone&&(b.multiplyMatrices(c,h.matrixWorld),a.setFromMatrixPosition(b),e.setXYZ(g,a.x,a.y,a.z),b.multiplyMatrices(c,h.parent.matrixWorld),a.setFromMatrixPosition(b),e.setXYZ(g+1,a.x,a.y,a.z),g+=2)}d.getAttribute("position").needsUpdate=!0}}();oc.prototype=
Object.create(za.prototype);oc.prototype.constructor=oc;oc.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};oc.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};pc.prototype=Object.create(A.prototype);pc.prototype.constructor=pc;pc.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose();this.children[1].geometry.dispose();this.children[1].material.dispose()};pc.prototype.update=
function(){var a=new q,b=new q;return function(){var c=this.children[0],d=this.children[1];if(this.light.target){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);var e=b.clone().sub(a);c.lookAt(e);d.lookAt(e)}c.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);d.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);var d=.5*this.light.width,e=.5*this.light.height,c=c.geometry.getAttribute("position"),
f=c.array;f[0]=d;f[1]=-e;f[2]=0;f[3]=d;f[4]=e;f[5]=0;f[6]=-d;f[7]=e;f[8]=0;f[9]=-d;f[10]=e;f[11]=0;f[12]=-d;f[13]=-e;f[14]=0;f[15]=d;f[16]=-e;f[17]=0;c.needsUpdate=!0}}();qc.prototype=Object.create(A.prototype);qc.prototype.constructor=qc;qc.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose()};qc.prototype.update=function(){var a=new q,b=new F,c=new F;return function(){var d=this.children[0],e=d.geometry.getAttribute("color");b.copy(this.light.color).multiplyScalar(this.light.intensity);
c.copy(this.light.groundColor).multiplyScalar(this.light.intensity);for(var f=0,g=e.count;f<g;f++){var h=f<g/2?b:c;e.setXYZ(f,h.r,h.g,h.b)}d.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());e.needsUpdate=!0}}();hd.prototype=Object.create(ga.prototype);hd.prototype.constructor=hd;Nd.prototype=Object.create(ga.prototype);Nd.prototype.constructor=Nd;id.prototype=Object.create(ga.prototype);id.prototype.constructor=id;id.prototype.update=function(){var a=new q,b=new q,c=new xa;return function(){this.object.updateMatrixWorld(!0);
c.getNormalMatrix(this.object.matrixWorld);for(var d=this.object.matrixWorld,e=this.geometry.attributes.position,f=this.object.geometry,g=f.vertices,f=f.faces,h=0,l=0,k=f.length;l<k;l++){var q=f[l],p=q.normal;a.copy(g[q.a]).add(g[q.b]).add(g[q.c]).divideScalar(3).applyMatrix4(d);b.copy(p).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);e.setXYZ(h,a.x,a.y,a.z);h+=1;e.setXYZ(h,b.x,b.y,b.z);h+=1}e.needsUpdate=!0;return this}}();rc.prototype=Object.create(A.prototype);rc.prototype.constructor=
rc;rc.prototype.dispose=function(){var a=this.children[0],b=this.children[1];a.geometry.dispose();a.material.dispose();b.geometry.dispose();b.material.dispose()};rc.prototype.update=function(){var a=new q,b=new q,c=new q;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);var d=this.children[0],e=this.children[1];d.lookAt(c);d.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);e.lookAt(c);
e.scale.z=c.length()}}();jd.prototype=Object.create(ga.prototype);jd.prototype.constructor=jd;jd.prototype.update=function(){function a(a,g,h,l){d.set(g,h,l).unproject(e);a=c[a];if(void 0!==a)for(g=b.getAttribute("position"),h=0,l=a.length;h<l;h++)g.setXYZ(a[h],d.x,d.y,d.z)}var b,c,d=new q,e=new sa;return function(){b=this.geometry;c=this.pointMap;e.projectionMatrix.copy(this.camera.projectionMatrix);a("c",0,0,-1);a("t",0,0,1);a("n1",-1,-1,-1);a("n2",1,-1,-1);a("n3",-1,1,-1);a("n4",1,1,-1);a("f1",
-1,-1,1);a("f2",1,-1,1);a("f3",-1,1,1);a("f4",1,1,1);a("u1",.7,1.1,-1);a("u2",-.7,1.1,-1);a("u3",0,2,-1);a("cf1",-1,0,1);a("cf2",1,0,1);a("cf3",0,-1,1);a("cf4",0,1,1);a("cn1",-1,0,-1);a("cn2",1,0,-1);a("cn3",0,-1,-1);a("cn4",0,1,-1);b.getAttribute("position").needsUpdate=!0}}();sc.prototype=Object.create(ga.prototype);sc.prototype.constructor=sc;sc.prototype.update=function(){var a=new Pa;return function(b){b&&b.isBox3?a.copy(b):a.setFromObject(b);if(!a.isEmpty()){b=a.min;var c=a.max,d=this.geometry.attributes.position,
e=d.array;e[0]=c.x;e[1]=c.y;e[2]=c.z;e[3]=b.x;e[4]=c.y;e[5]=c.z;e[6]=b.x;e[7]=b.y;e[8]=c.z;e[9]=c.x;e[10]=b.y;e[11]=c.z;e[12]=c.x;e[13]=c.y;e[14]=b.z;e[15]=b.x;e[16]=c.y;e[17]=b.z;e[18]=b.x;e[19]=b.y;e[20]=b.z;e[21]=c.x;e[22]=b.y;e[23]=b.z;d.needsUpdate=!0;this.geometry.computeBoundingSphere()}}}();var Ue=new G;Ue.addAttribute("position",new V([0,0,0,0,1,0],3));var Ve=new Xa(0,.5,1,5,1);Ve.translate(0,-.5,0);Eb.prototype=Object.create(A.prototype);Eb.prototype.constructor=Eb;Eb.prototype.setDirection=
function(){var a=new q,b;return function(c){.99999<c.y?this.quaternion.set(0,0,0,1):-.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();Eb.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,Math.max(0,a-b),1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};Eb.prototype.setColor=function(a){this.line.material.color.copy(a);
this.cone.material.color.copy(a)};Od.prototype=Object.create(ga.prototype);Od.prototype.constructor=Od;var Rd=new q,we=new te,xe=new te,ye=new te;wa.prototype=Object.create(ua.prototype);wa.prototype.constructor=wa;wa.prototype.getPoint=function(a){var b=this.points,c=b.length;2>c&&console.log("duh, you need at least 2 points");a*=c-(this.closed?0:1);var d=Math.floor(a);a-=d;this.closed?d+=0<d?0:(Math.floor(Math.abs(d)/b.length)+1)*b.length:0===a&&d===c-1&&(d=c-2,a=1);var e,f,g;this.closed||0<d?e=
b[(d-1)%c]:(Rd.subVectors(b[0],b[1]).add(b[0]),e=Rd);f=b[d%c];g=b[(d+1)%c];this.closed||d+2<c?b=b[(d+2)%c]:(Rd.subVectors(b[c-1],b[c-2]).add(b[c-1]),b=Rd);if(void 0===this.type||"centripetal"===this.type||"chordal"===this.type){var h="chordal"===this.type?.5:.25,c=Math.pow(e.distanceToSquared(f),h),d=Math.pow(f.distanceToSquared(g),h),h=Math.pow(g.distanceToSquared(b),h);1E-4>d&&(d=1);1E-4>c&&(c=d);1E-4>h&&(h=d);we.initNonuniformCatmullRom(e.x,f.x,g.x,b.x,c,d,h);xe.initNonuniformCatmullRom(e.y,f.y,
g.y,b.y,c,d,h);ye.initNonuniformCatmullRom(e.z,f.z,g.z,b.z,c,d,h)}else"catmullrom"===this.type&&(c=void 0!==this.tension?this.tension:.5,we.initCatmullRom(e.x,f.x,g.x,b.x,c),xe.initCatmullRom(e.y,f.y,g.y,b.y,c),ye.initCatmullRom(e.z,f.z,g.z,b.z,c));return new q(we.calc(a),xe.calc(a),ye.calc(a))};kd.prototype=Object.create(ua.prototype);kd.prototype.constructor=kd;kd.prototype.getPoint=function(a){var b=this.v0,c=this.v1,d=this.v2,e=this.v3;return new q(Ab(a,b.x,c.x,d.x,e.x),Ab(a,b.y,c.y,d.y,e.y),
Ab(a,b.z,c.z,d.z,e.z))};ld.prototype=Object.create(ua.prototype);ld.prototype.constructor=ld;ld.prototype.getPoint=function(a){var b=this.v0,c=this.v1,d=this.v2;return new q(zb(a,b.x,c.x,d.x),zb(a,b.y,c.y,d.y),zb(a,b.z,c.z,d.z))};md.prototype=Object.create(ua.prototype);md.prototype.constructor=md;md.prototype.getPoint=function(a){if(1===a)return this.v2.clone();var b=new q;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b};Pd.prototype=Object.create(Ya.prototype);Pd.prototype.constructor=
Pd;ua.create=function(a,b){console.log("THREE.Curve.create() has been deprecated");a.prototype=Object.create(ua.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a};We.prototype=Object.create(wa.prototype);Xe.prototype=Object.create(wa.prototype);ue.prototype=Object.create(wa.prototype);Object.assign(ue.prototype,{initFromArray:function(a){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(a){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},
reparametrizeByArcLength:function(a){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});hd.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Object.assign(tc.prototype,{center:function(a){console.warn("THREE.Box2: .center() has been renamed to .getCenter().");return this.getCenter(a)},empty:function(){console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");return this.isEmpty()},
isIntersectionBox:function(a){console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},size:function(a){console.warn("THREE.Box2: .size() has been renamed to .getSize().");return this.getSize(a)}});Object.assign(Pa.prototype,{center:function(a){console.warn("THREE.Box3: .center() has been renamed to .getCenter().");return this.getCenter(a)},empty:function(){console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");return this.isEmpty()},
isIntersectionBox:function(a){console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},isIntersectionSphere:function(a){console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a)},size:function(a){console.warn("THREE.Box3: .size() has been renamed to .getSize().");return this.getSize(a)}});ib.prototype.center=function(a){console.warn("THREE.Line3: .center() has been renamed to .getCenter().");
return this.getCenter(a)};P.random16=function(){console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead.");return Math.random()};Object.assign(xa.prototype,{flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b)},multiplyVector3:function(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},
multiplyVector3Array:function(a){console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)},applyToBuffer:function(a,b,c){console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");return this.applyToBufferAttribute(a)},applyToVector3Array:function(a,b,c){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});Object.assign(M.prototype,
{extractPosition:function(a){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");return this.copyPosition(a)},flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b)},getPosition:function(){var a;return function(){void 0===a&&(a=new q);console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");return a.setFromMatrixColumn(this,
3)}}(),setRotationFromQuaternion:function(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");return this.makeRotationFromQuaternion(a)},multiplyVector3:function(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector4:function(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
return a.applyMatrix4(this)},multiplyVector3Array:function(a){console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)},rotateAxis:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this)},crossVector:function(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
return a.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBuffer:function(a,b,c){console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");
return this.applyToBufferAttribute(a)},applyToVector3Array:function(a,b,c){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(a,b,c,d,e,f){console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");return this.makePerspective(a,b,d,c,e,f)}});la.prototype.isIntersectionLine=function(a){console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");return this.intersectsLine(a)};
Z.prototype.multiplyVector3=function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this)};Object.assign(db.prototype,{isIntersectionBox:function(a){console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},isIntersectionPlane:function(a){console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");return this.intersectsPlane(a)},
isIntersectionSphere:function(a){console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a)}});Object.assign(Cb.prototype,{extrude:function(a){console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");return new La(this,a)},makeGeometry:function(a){console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");return new Zb(this,a)}});Object.assign(E.prototype,{fromAttribute:function(a,
b,c){console.error("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)}});Object.assign(q.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(b,a)},applyProjection:function(a){console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");return this.applyMatrix4(a)},
fromAttribute:function(a,b,c){console.error("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)}});Object.assign(fa.prototype,{fromAttribute:function(a,b,c){console.error("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)}});I.prototype.computeTangents=function(){console.warn("THREE.Geometry: .computeTangents() has been removed.")};Object.assign(A.prototype,{getChildByName:function(a){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
return this.getObjectByName(a)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a)}});Object.defineProperties(A.prototype,{eulerOrder:{get:function(){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");return this.rotation.order},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
this.rotation.order=a}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.defineProperties(Gc.prototype,{objects:{get:function(){console.warn("THREE.LOD: .objects has been renamed to .levels.");return this.levels}}});Ga.prototype.setLens=function(a,b){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");
void 0!==b&&(this.filmGauge=b);this.setFocalLength(a)};Object.defineProperties(ma.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");this.shadow.camera.fov=a}},shadowCameraLeft:{set:function(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");
this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");this.shadow.camera.near=a}},shadowCameraFar:{set:function(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");
this.shadow.camera.far=a}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias.");this.shadow.bias=a}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");
this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");this.shadow.mapSize.height=a}}});Object.defineProperties(w.prototype,{length:{get:function(){console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");return this.array.length}}});Object.assign(G.prototype,{addIndex:function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");this.setIndex(a)},addDrawCall:function(a,
b,c){void 0!==c&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");this.addGroup(a,b)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")}});
Object.defineProperties(G.prototype,{drawcalls:{get:function(){console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");return this.groups}},offsets:{get:function(){console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");return this.groups}}});Object.defineProperties(Md.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");
return this}}});Object.defineProperties(X.prototype,{wrapAround:{get:function(){console.warn("THREE."+this.type+": .wrapAround has been removed.")},set:function(){console.warn("THREE."+this.type+": .wrapAround has been removed.")}},wrapRGB:{get:function(){console.warn("THREE."+this.type+": .wrapRGB has been removed.");return new F}}});Object.defineProperties(Ba.prototype,{metal:{get:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");
return!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(Ia.prototype,{derivatives:{get:function(){console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");return this.extensions.derivatives},set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");this.extensions.derivatives=a}}});Object.assign(Xd.prototype,
{supportsFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");return this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");return this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
return this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");return this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");return this.extensions.get("WEBGL_compressed_texture_pvrtc")},
supportsBlendMinMax:function(){console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");return this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");return this.capabilities.vertexTextures},supportsInstancedArrays:function(){console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");
return this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");this.setScissorTest(a)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")}});
Object.defineProperties(Xd.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");this.shadowMap.type=a}},shadowMapCullFace:{get:function(){return this.shadowMap.cullFace},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace.");
this.shadowMap.cullFace=a}}});Object.defineProperties(Ie.prototype,{cullFace:{get:function(){return this.renderReverseSided?2:1},set:function(a){a=1!==a;console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to "+a+".");this.renderReverseSided=a}}});Object.defineProperties($a.prototype,{wrapS:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");return this.texture.wrapS},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
this.texture.wrapS=a}},wrapT:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");return this.texture.wrapT},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");this.texture.wrapT=a}},magFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");return this.texture.magFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");this.texture.magFilter=
a}},minFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");return this.texture.minFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");this.texture.minFilter=a}},anisotropy:{get:function(){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");return this.texture.anisotropy},set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");this.texture.anisotropy=
a}},offset:{get:function(){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");return this.texture.offset},set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");this.texture.offset=a}},repeat:{get:function(){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");return this.texture.repeat},set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");this.texture.repeat=a}},format:{get:function(){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
return this.texture.format},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");this.texture.format=a}},type:{get:function(){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");return this.texture.type},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");this.texture.type=a}},generateMipmaps:{get:function(){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");return this.texture.generateMipmaps},
set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");this.texture.generateMipmaps=a}}});ic.prototype.load=function(a){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var b=this;(new fe).load(a,function(a){b.setBuffer(a)});return this};ke.prototype.getData=function(){console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");return this.getFrequencyData()};l.WebGLRenderTargetCube=Fb;l.WebGLRenderTarget=
$a;l.WebGLRenderer=Xd;l.ShaderLib=Ib;l.UniformsLib=U;l.UniformsUtils=Ja;l.ShaderChunk=ba;l.FogExp2=Lb;l.Fog=Mb;l.Scene=lb;l.LensFlare=Yd;l.Sprite=Fc;l.LOD=Gc;l.SkinnedMesh=sd;l.Skeleton=qd;l.Bone=rd;l.Mesh=za;l.LineSegments=ga;l.Line=Wa;l.Points=Nb;l.Group=Hc;l.VideoTexture=td;l.DataTexture=fb;l.CompressedTexture=Ob;l.CubeTexture=ab;l.CanvasTexture=ud;l.DepthTexture=Ic;l.Texture=da;l.CompressedTextureLoader=Oe;l.DataTextureLoader=$d;l.CubeTextureLoader=ae;l.TextureLoader=vd;l.ObjectLoader=Pe;l.MaterialLoader=
Jd;l.BufferGeometryLoader=be;l.DefaultLoadingManager=ta;l.LoadingManager=Zd;l.JSONLoader=ce;l.ImageLoader=$c;l.FontLoader=Re;l.FileLoader=Da;l.Loader=yb;l.Cache=nd;l.AudioLoader=fe;l.SpotLightShadow=xd;l.SpotLight=yd;l.PointLight=zd;l.RectAreaLight=ge;l.HemisphereLight=wd;l.DirectionalLightShadow=Ad;l.DirectionalLight=Bd;l.AmbientLight=Cd;l.LightShadow=vb;l.Light=ma;l.StereoCamera=Se;l.PerspectiveCamera=Ga;l.OrthographicCamera=Kb;l.CubeCamera=Kd;l.Camera=sa;l.AudioListener=he;l.PositionalAudio=je;
l.AudioContext=ie;l.AudioAnalyser=ke;l.Audio=ic;l.VectorKeyframeTrack=ec;l.StringKeyframeTrack=Gd;l.QuaternionKeyframeTrack=bd;l.NumberKeyframeTrack=fc;l.ColorKeyframeTrack=Id;l.BooleanKeyframeTrack=Hd;l.PropertyMixer=Ld;l.PropertyBinding=ka;l.KeyframeTrack=xb;l.AnimationUtils=na;l.AnimationObjectGroup=le;l.AnimationMixer=ed;l.AnimationClip=ra;l.Uniform=Md;l.InstancedBufferGeometry=Db;l.BufferGeometry=G;l.GeometryIdCount=function(){return Ud++};l.Geometry=I;l.InterleavedBufferAttribute=ne;l.InstancedInterleavedBuffer=
kc;l.InterleavedBuffer=jc;l.InstancedBufferAttribute=lc;l.Face3=ha;l.Object3D=A;l.Raycaster=oe;l.Layers=pd;l.EventDispatcher=pa;l.Clock=qe;l.QuaternionLinearInterpolant=Fd;l.LinearInterpolant=ad;l.DiscreteInterpolant=Ed;l.CubicInterpolant=Dd;l.Interpolant=va;l.Triangle=ya;l.Math=P;l.Spherical=re;l.Cylindrical=se;l.Plane=la;l.Frustum=uc;l.Sphere=Ea;l.Ray=db;l.Matrix4=M;l.Matrix3=xa;l.Box3=Pa;l.Box2=tc;l.Line3=ib;l.Euler=eb;l.Vector4=fa;l.Vector3=q;l.Vector2=E;l.Quaternion=Z;l.Color=F;l.MorphBlendMesh=
oa;l.ImmediateRenderObject=fd;l.VertexNormalsHelper=gd;l.SpotLightHelper=mc;l.SkeletonHelper=nc;l.PointLightHelper=oc;l.RectAreaLightHelper=pc;l.HemisphereLightHelper=qc;l.GridHelper=hd;l.PolarGridHelper=Nd;l.FaceNormalsHelper=id;l.DirectionalLightHelper=rc;l.CameraHelper=jd;l.BoxHelper=sc;l.ArrowHelper=Eb;l.AxisHelper=Od;l.CatmullRomCurve3=wa;l.CubicBezierCurve3=kd;l.QuadraticBezierCurve3=ld;l.LineCurve3=md;l.ArcCurve=Pd;l.EllipseCurve=Ya;l.SplineCurve=Bb;l.CubicBezierCurve=gc;l.QuadraticBezierCurve=
hc;l.LineCurve=Ta;l.Shape=Cb;l.Path=dd;l.ShapePath=de;l.Font=ee;l.CurvePath=cd;l.Curve=ua;l.ShapeUtils=Oa;l.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new Hc,d=0,e=b.length;d<e;d++)c.add(new za(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new M;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};l.WireframeGeometry=Pb;l.ParametricGeometry=Jc;l.ParametricBufferGeometry=Qb;l.TetrahedronGeometry=
Lc;l.TetrahedronBufferGeometry=Rb;l.OctahedronGeometry=Mc;l.OctahedronBufferGeometry=nb;l.IcosahedronGeometry=Nc;l.IcosahedronBufferGeometry=Sb;l.DodecahedronGeometry=Oc;l.DodecahedronBufferGeometry=Tb;l.PolyhedronGeometry=Kc;l.PolyhedronBufferGeometry=Aa;l.TubeGeometry=Pc;l.TubeBufferGeometry=Ub;l.TorusKnotGeometry=Qc;l.TorusKnotBufferGeometry=Vb;l.TorusGeometry=Rc;l.TorusBufferGeometry=Wb;l.TextGeometry=Sc;l.SphereGeometry=Tc;l.SphereBufferGeometry=ob;l.RingGeometry=Uc;l.RingBufferGeometry=Xb;l.PlaneGeometry=
Cc;l.PlaneBufferGeometry=kb;l.LatheGeometry=Vc;l.LatheBufferGeometry=Yb;l.ShapeGeometry=Zb;l.ShapeBufferGeometry=$b;l.ExtrudeGeometry=La;l.EdgesGeometry=ac;l.ConeGeometry=Wc;l.ConeBufferGeometry=Xc;l.CylinderGeometry=pb;l.CylinderBufferGeometry=Xa;l.CircleGeometry=Yc;l.CircleBufferGeometry=bc;l.BoxGeometry=Jb;l.BoxBufferGeometry=jb;l.ShadowMaterial=cc;l.SpriteMaterial=mb;l.RawShaderMaterial=dc;l.ShaderMaterial=Ia;l.PointsMaterial=Na;l.MultiMaterial=Zc;l.MeshPhysicalMaterial=qb;l.MeshStandardMaterial=
Qa;l.MeshPhongMaterial=Ba;l.MeshToonMaterial=rb;l.MeshNormalMaterial=sb;l.MeshLambertMaterial=tb;l.MeshDepthMaterial=cb;l.MeshBasicMaterial=Ka;l.LineDashedMaterial=ub;l.LineBasicMaterial=ia;l.Material=X;l.Float64BufferAttribute=Bc;l.Float32BufferAttribute=V;l.Uint32BufferAttribute=Va;l.Int32BufferAttribute=Ac;l.Uint16BufferAttribute=Ua;l.Int16BufferAttribute=zc;l.Uint8ClampedBufferAttribute=yc;l.Uint8BufferAttribute=xc;l.Int8BufferAttribute=wc;l.BufferAttribute=w;l.REVISION="84dev";l.MOUSE={LEFT:0,
MIDDLE:1,RIGHT:2};l.CullFaceNone=0;l.CullFaceBack=1;l.CullFaceFront=2;l.CullFaceFrontBack=3;l.FrontFaceDirectionCW=0;l.FrontFaceDirectionCCW=1;l.BasicShadowMap=0;l.PCFShadowMap=1;l.PCFSoftShadowMap=2;l.FrontSide=0;l.BackSide=1;l.DoubleSide=2;l.FlatShading=1;l.SmoothShading=2;l.NoColors=0;l.FaceColors=1;l.VertexColors=2;l.NoBlending=0;l.NormalBlending=1;l.AdditiveBlending=2;l.SubtractiveBlending=3;l.MultiplyBlending=4;l.CustomBlending=5;l.AddEquation=100;l.SubtractEquation=101;l.ReverseSubtractEquation=
102;l.MinEquation=103;l.MaxEquation=104;l.ZeroFactor=200;l.OneFactor=201;l.SrcColorFactor=202;l.OneMinusSrcColorFactor=203;l.SrcAlphaFactor=204;l.OneMinusSrcAlphaFactor=205;l.DstAlphaFactor=206;l.OneMinusDstAlphaFactor=207;l.DstColorFactor=208;l.OneMinusDstColorFactor=209;l.SrcAlphaSaturateFactor=210;l.NeverDepth=0;l.AlwaysDepth=1;l.LessDepth=2;l.LessEqualDepth=3;l.EqualDepth=4;l.GreaterEqualDepth=5;l.GreaterDepth=6;l.NotEqualDepth=7;l.MultiplyOperation=0;l.MixOperation=1;l.AddOperation=2;l.NoToneMapping=
0;l.LinearToneMapping=1;l.ReinhardToneMapping=2;l.Uncharted2ToneMapping=3;l.CineonToneMapping=4;l.UVMapping=300;l.CubeReflectionMapping=301;l.CubeRefractionMapping=302;l.EquirectangularReflectionMapping=303;l.EquirectangularRefractionMapping=304;l.SphericalReflectionMapping=305;l.CubeUVReflectionMapping=306;l.CubeUVRefractionMapping=307;l.RepeatWrapping=1E3;l.ClampToEdgeWrapping=1001;l.MirroredRepeatWrapping=1002;l.NearestFilter=1003;l.NearestMipMapNearestFilter=1004;l.NearestMipMapLinearFilter=1005;
l.LinearFilter=1006;l.LinearMipMapNearestFilter=1007;l.LinearMipMapLinearFilter=1008;l.UnsignedByteType=1009;l.ByteType=1010;l.ShortType=1011;l.UnsignedShortType=1012;l.IntType=1013;l.UnsignedIntType=1014;l.FloatType=1015;l.HalfFloatType=1016;l.UnsignedShort4444Type=1017;l.UnsignedShort5551Type=1018;l.UnsignedShort565Type=1019;l.UnsignedInt248Type=1020;l.AlphaFormat=1021;l.RGBFormat=1022;l.RGBAFormat=1023;l.LuminanceFormat=1024;l.LuminanceAlphaFormat=1025;l.RGBEFormat=1023;l.DepthFormat=1026;l.DepthStencilFormat=
1027;l.RGB_S3TC_DXT1_Format=2001;l.RGBA_S3TC_DXT1_Format=2002;l.RGBA_S3TC_DXT3_Format=2003;l.RGBA_S3TC_DXT5_Format=2004;l.RGB_PVRTC_4BPPV1_Format=2100;l.RGB_PVRTC_2BPPV1_Format=2101;l.RGBA_PVRTC_4BPPV1_Format=2102;l.RGBA_PVRTC_2BPPV1_Format=2103;l.RGB_ETC1_Format=2151;l.LoopOnce=2200;l.LoopRepeat=2201;l.LoopPingPong=2202;l.InterpolateDiscrete=2300;l.InterpolateLinear=2301;l.InterpolateSmooth=2302;l.ZeroCurvatureEnding=2400;l.ZeroSlopeEnding=2401;l.WrapAroundEnding=2402;l.TrianglesDrawMode=0;l.TriangleStripDrawMode=
1;l.TriangleFanDrawMode=2;l.LinearEncoding=3E3;l.sRGBEncoding=3001;l.GammaEncoding=3007;l.RGBEEncoding=3002;l.LogLuvEncoding=3003;l.RGBM7Encoding=3004;l.RGBM16Encoding=3005;l.RGBDEncoding=3006;l.BasicDepthPacking=3200;l.RGBADepthPacking=3201;l.CubeGeometry=Jb;l.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new ha(a,b,c,e,f,g)};l.LineStrip=0;l.LinePieces=1;l.MeshFaceMaterial=function(a){console.warn("THREE.MeshFaceMaterial has been renamed to THREE.MultiMaterial.");
return new Zc(a)};l.PointCloud=function(a,b){console.warn("THREE.PointCloud has been renamed to THREE.Points.");return new Nb(a,b)};l.Particle=function(a){console.warn("THREE.Particle has been renamed to THREE.Sprite.");return new Fc(a)};l.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");return new Nb(a,b)};l.PointCloudMaterial=function(a){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");return new Na(a)};l.ParticleBasicMaterial=
function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");return new Na(a)};l.ParticleSystemMaterial=function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");return new Na(a)};l.Vertex=function(a,b,c){console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");return new q(a,b,c)};l.DynamicBufferAttribute=function(a,b){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");
return(new w(a,b)).setDynamic(!0)};l.Int8Attribute=function(a,b){console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");return new wc(a,b)};l.Uint8Attribute=function(a,b){console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");return new xc(a,b)};l.Uint8ClampedAttribute=function(a,b){console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");return new yc(a,
b)};l.Int16Attribute=function(a,b){console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");return new zc(a,b)};l.Uint16Attribute=function(a,b){console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");return new Ua(a,b)};l.Int32Attribute=function(a,b){console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");return new Ac(a,b)};l.Uint32Attribute=function(a,b){console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");
return new Va(a,b)};l.Float32Attribute=function(a,b){console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");return new V(a,b)};l.Float64Attribute=function(a,b){console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");return new Bc(a,b)};l.ClosedSplineCurve3=We;l.SplineCurve3=Xe;l.Spline=ue;l.BoundingBoxHelper=function(a,b){console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");
return new sc(a,b)};l.EdgesHelper=function(a,b){console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");return new ga(new ac(a.geometry),new ia({color:void 0!==b?b:16777215}))};l.WireframeHelper=function(a,b){console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");return new ga(new Pb(a.geometry),new ia({color:void 0!==b?b:16777215}))};l.XHRLoader=function(a){console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");return new Da(a)};
l.BinaryTextureLoader=function(a){console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");return new $d(a)};l.GeometryUtils={merge:function(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");var d;b.isMesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,b=b.geometry);a.merge(b,d,c)},center:function(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");
return a.center()}};l.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var e=new vd;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a},loadTextureCube:function(a,b,c,d){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var e=new ae;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=
b);return a},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")}};l.Projector=function(){console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");this.projectVector=function(a,b){console.warn("THREE.Projector: .projectVector() is now vector.project().");
a.project(b)};this.unprojectVector=function(a,b){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");a.unproject(b)};this.pickingRay=function(){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}};l.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");this.domElement=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");this.clear=function(){};this.render=function(){};
this.setClearColor=function(){};this.setSize=function(){}};Object.defineProperty(l,"__esModule",{value:!0})});

/**
 * @author dmarcos / https://github.com/dmarcos
 * @author mrdoob / http://mrdoob.com
 */

THREE.VRControls = function ( object, onError ) {

	var scope = this;

	var vrDisplay, vrDisplays;

	var standingMatrix = new THREE.Matrix4();

	var frameData = null;

	if ( 'VRFrameData' in window ) {

		frameData = new VRFrameData();

	}

	function gotVRDisplays( displays ) {

		vrDisplays = displays;

		if ( displays.length > 0 ) {

			vrDisplay = displays[ 0 ];

		} else {

			if ( onError ) onError( 'VR input not available.' );

		}

	}

	if ( navigator.getVRDisplays ) {

		navigator.getVRDisplays().then( gotVRDisplays ).catch ( function () {

			console.warn( 'THREE.VRControls: Unable to get VR Displays' );

		} );

	}

	// the Rift SDK returns the position in meters
	// this scale factor allows the user to define how meters
	// are converted to scene units.

	this.scale = 1;

	// If true will use "standing space" coordinate system where y=0 is the
	// floor and x=0, z=0 is the center of the room.
	this.standing = false;

	// Distance from the users eyes to the floor in meters. Used when
	// standing=true but the VRDisplay doesn't provide stageParameters.
	this.userHeight = 1.6;

	this.getVRDisplay = function () {

		return vrDisplay;

	};

	this.setVRDisplay = function ( value ) {

		vrDisplay = value;

	};

	this.getVRDisplays = function () {

		console.warn( 'THREE.VRControls: getVRDisplays() is being deprecated.' );
		return vrDisplays;

	};

	this.getStandingMatrix = function () {

		return standingMatrix;

	};

	this.update = function () {

		if ( vrDisplay ) {

			var pose;

			if ( vrDisplay.getFrameData ) {

				vrDisplay.getFrameData( frameData );
				pose = frameData.pose;

			} else if ( vrDisplay.getPose ) {

				pose = vrDisplay.getPose();

			}

			if ( pose.orientation !== null ) {

				object.quaternion.fromArray( pose.orientation );

			}

			if ( pose.position !== null ) {

				object.position.fromArray( pose.position );

			} else {

				object.position.set( 0, 0, 0 );

			}

			if ( this.standing ) {

				if ( vrDisplay.stageParameters ) {

					object.updateMatrix();

					standingMatrix.fromArray( vrDisplay.stageParameters.sittingToStandingTransform );
					object.applyMatrix( standingMatrix );

				} else {

					object.position.setY( object.position.y + this.userHeight );

				}

			}

			object.position.multiplyScalar( scope.scale );

		}

	};

	this.resetPose = function () {

		if ( vrDisplay ) {

			vrDisplay.resetPose();

		}

	};

	this.resetSensor = function () {

		console.warn( 'THREE.VRControls: .resetSensor() is now .resetPose().' );
		this.resetPose();

	};

	this.zeroSensor = function () {

		console.warn( 'THREE.VRControls: .zeroSensor() is now .resetPose().' );
		this.resetPose();

	};

	this.dispose = function () {

		vrDisplay = null;

	};

};

/**
 * @author dmarcos / https://github.com/dmarcos
 * @author mrdoob / http://mrdoob.com
 *
 * WebVR Spec: http://mozvr.github.io/webvr-spec/webvr.html
 *
 * Firefox: http://mozvr.com/downloads/
 * Chromium: https://webvr.info/get-chrome
 *
 */

THREE.VREffect = function( renderer, onError ) {

	var vrDisplay, vrDisplays;
	var eyeTranslationL = new THREE.Vector3();
	var eyeTranslationR = new THREE.Vector3();
	var renderRectL, renderRectR;

	var frameData = null;

	if ( 'VRFrameData' in window ) {

		frameData = new window.VRFrameData();

	}

	function gotVRDisplays( displays ) {

		vrDisplays = displays;

		if ( displays.length > 0 ) {

			vrDisplay = displays[ 0 ];

		} else {

			if ( onError ) onError( 'HMD not available' );

		}

	}

	if ( navigator.getVRDisplays ) {

		navigator.getVRDisplays().then( gotVRDisplays ).catch( function() {

			console.warn( 'THREE.VREffect: Unable to get VR Displays' );

		} );

	}

	//

	this.isPresenting = false;
	this.scale = 1;

	var scope = this;

	var rendererSize = renderer.getSize();
	var rendererUpdateStyle = false;
	var rendererPixelRatio = renderer.getPixelRatio();

	this.getVRDisplay = function() {

		return vrDisplay;

	};

	this.setVRDisplay = function( value ) {

		vrDisplay = value;

	};

	this.getVRDisplays = function() {

		console.warn( 'THREE.VREffect: getVRDisplays() is being deprecated.' );
		return vrDisplays;

	};

	this.setSize = function( width, height, updateStyle ) {

		rendererSize = { width: width, height: height };
		rendererUpdateStyle = updateStyle;

		if ( scope.isPresenting ) {

			var eyeParamsL = vrDisplay.getEyeParameters( 'left' );
			renderer.setPixelRatio( 1 );
			renderer.setSize( eyeParamsL.renderWidth * 2, eyeParamsL.renderHeight, false );

		} else {

			renderer.setPixelRatio( rendererPixelRatio );
			renderer.setSize( width, height, updateStyle );

		}

	};

	// VR presentation

	var canvas = renderer.domElement;
	var defaultLeftBounds = [ 0.0, 0.0, 0.5, 1.0 ];
	var defaultRightBounds = [ 0.5, 0.0, 0.5, 1.0 ];

	function onVRDisplayPresentChange() {

		var wasPresenting = scope.isPresenting;
		scope.isPresenting = vrDisplay !== undefined && vrDisplay.isPresenting;

		if ( scope.isPresenting ) {

			var eyeParamsL = vrDisplay.getEyeParameters( 'left' );
			var eyeWidth = eyeParamsL.renderWidth;
			var eyeHeight = eyeParamsL.renderHeight;

			if ( ! wasPresenting ) {

				rendererPixelRatio = renderer.getPixelRatio();
				rendererSize = renderer.getSize();

				renderer.setPixelRatio( 1 );
				renderer.setSize( eyeWidth * 2, eyeHeight, false );

			}

		} else if ( wasPresenting ) {

			renderer.setPixelRatio( rendererPixelRatio );
			renderer.setSize( rendererSize.width, rendererSize.height, rendererUpdateStyle );

		}

	}

	window.addEventListener( 'vrdisplaypresentchange', onVRDisplayPresentChange, false );

	this.setFullScreen = function( boolean ) {

		return new Promise( function( resolve, reject ) {

			if ( vrDisplay === undefined ) {

				reject( new Error( 'No VR hardware found.' ) );
				return;

			}

			if ( scope.isPresenting === boolean ) {

				resolve();
				return;

			}

			if ( boolean ) {

				resolve( vrDisplay.requestPresent( [ { source: canvas } ] ) );

			} else {

				resolve( vrDisplay.exitPresent() );

			}

		} );

	};

	this.requestPresent = function() {

		return this.setFullScreen( true );

	};

	this.exitPresent = function() {

		return this.setFullScreen( false );

	};

	this.requestAnimationFrame = function( f ) {

		if ( vrDisplay !== undefined ) {

			return vrDisplay.requestAnimationFrame( f );

		} else {

			return window.requestAnimationFrame( f );

		}

	};

	this.cancelAnimationFrame = function( h ) {

		if ( vrDisplay !== undefined ) {

			vrDisplay.cancelAnimationFrame( h );

		} else {

			window.cancelAnimationFrame( h );

		}

	};

	this.submitFrame = function() {

		if ( vrDisplay !== undefined && scope.isPresenting ) {

			vrDisplay.submitFrame();

		}

	};

	this.autoSubmitFrame = true;

	// render

	var cameraL = new THREE.PerspectiveCamera();
	cameraL.layers.enable( 1 );

	var cameraR = new THREE.PerspectiveCamera();
	cameraR.layers.enable( 2 );

	this.render = function( scene, camera, renderTarget, forceClear ) {

		if ( vrDisplay && scope.isPresenting ) {

			var autoUpdate = scene.autoUpdate;

			if ( autoUpdate ) {

				scene.updateMatrixWorld();
				scene.autoUpdate = false;

			}

			var eyeParamsL = vrDisplay.getEyeParameters( 'left' );
			var eyeParamsR = vrDisplay.getEyeParameters( 'right' );

			eyeTranslationL.fromArray( eyeParamsL.offset );
			eyeTranslationR.fromArray( eyeParamsR.offset );

			if ( Array.isArray( scene ) ) {

				console.warn( 'THREE.VREffect.render() no longer supports arrays. Use object.layers instead.' );
				scene = scene[ 0 ];

			}

			// When rendering we don't care what the recommended size is, only what the actual size
			// of the backbuffer is.
			var size = renderer.getSize();
			var layers = vrDisplay.getLayers();
			var leftBounds;
			var rightBounds;

			if ( layers.length ) {

				var layer = layers[ 0 ];

				leftBounds = layer.leftBounds !== null && layer.leftBounds.length === 4 ? layer.leftBounds : defaultLeftBounds;
				rightBounds = layer.rightBounds !== null && layer.rightBounds.length === 4 ? layer.rightBounds : defaultRightBounds;

			} else {

				leftBounds = defaultLeftBounds;
				rightBounds = defaultRightBounds;

			}

			renderRectL = {
				x: Math.round( size.width * leftBounds[ 0 ] ),
				y: Math.round( size.height * leftBounds[ 1 ] ),
				width: Math.round( size.width * leftBounds[ 2 ] ),
				height: Math.round( size.height * leftBounds[ 3 ] )
			};
			renderRectR = {
				x: Math.round( size.width * rightBounds[ 0 ] ),
				y: Math.round( size.height * rightBounds[ 1 ] ),
				width: Math.round( size.width * rightBounds[ 2 ] ),
				height: Math.round( size.height * rightBounds[ 3 ] )
			};

			if ( renderTarget ) {

				renderer.setRenderTarget( renderTarget );
				renderTarget.scissorTest = true;

			} else {

				renderer.setRenderTarget( null );
				renderer.setScissorTest( true );

			}

			if ( renderer.autoClear || forceClear ) renderer.clear();

			if ( camera.parent === null ) camera.updateMatrixWorld();

			camera.matrixWorld.decompose( cameraL.position, cameraL.quaternion, cameraL.scale );
			camera.matrixWorld.decompose( cameraR.position, cameraR.quaternion, cameraR.scale );

			var scale = this.scale;
			cameraL.translateOnAxis( eyeTranslationL, scale );
			cameraR.translateOnAxis( eyeTranslationR, scale );

			if ( vrDisplay.getFrameData ) {

				vrDisplay.depthNear = camera.near;
				vrDisplay.depthFar = camera.far;

				vrDisplay.getFrameData( frameData );

				cameraL.projectionMatrix.elements = frameData.leftProjectionMatrix;
				cameraR.projectionMatrix.elements = frameData.rightProjectionMatrix;

			} else {

				cameraL.projectionMatrix = fovToProjection( eyeParamsL.fieldOfView, true, camera.near, camera.far );
				cameraR.projectionMatrix = fovToProjection( eyeParamsR.fieldOfView, true, camera.near, camera.far );

			}

			// render left eye
			if ( renderTarget ) {

				renderTarget.viewport.set( renderRectL.x, renderRectL.y, renderRectL.width, renderRectL.height );
				renderTarget.scissor.set( renderRectL.x, renderRectL.y, renderRectL.width, renderRectL.height );

			} else {

				renderer.setViewport( renderRectL.x, renderRectL.y, renderRectL.width, renderRectL.height );
				renderer.setScissor( renderRectL.x, renderRectL.y, renderRectL.width, renderRectL.height );

			}
			renderer.render( scene, cameraL, renderTarget, forceClear );

			// render right eye
			if ( renderTarget ) {

				renderTarget.viewport.set( renderRectR.x, renderRectR.y, renderRectR.width, renderRectR.height );
				renderTarget.scissor.set( renderRectR.x, renderRectR.y, renderRectR.width, renderRectR.height );

			} else {

				renderer.setViewport( renderRectR.x, renderRectR.y, renderRectR.width, renderRectR.height );
				renderer.setScissor( renderRectR.x, renderRectR.y, renderRectR.width, renderRectR.height );

			}
			renderer.render( scene, cameraR, renderTarget, forceClear );

			if ( renderTarget ) {

				renderTarget.viewport.set( 0, 0, size.width, size.height );
				renderTarget.scissor.set( 0, 0, size.width, size.height );
				renderTarget.scissorTest = false;
				renderer.setRenderTarget( null );

			} else {

				renderer.setViewport( 0, 0, size.width, size.height );
				renderer.setScissorTest( false );

			}

			if ( autoUpdate ) {

				scene.autoUpdate = true;

			}

			if ( scope.autoSubmitFrame ) {

				scope.submitFrame();

			}

			return;

		}

		// Regular render mode if not HMD

		renderer.render( scene, camera, renderTarget, forceClear );

	};

	this.dispose = function() {

		window.removeEventListener( 'vrdisplaypresentchange', onVRDisplayPresentChange, false );

	};

	//

	function fovToNDCScaleOffset( fov ) {

		var pxscale = 2.0 / ( fov.leftTan + fov.rightTan );
		var pxoffset = ( fov.leftTan - fov.rightTan ) * pxscale * 0.5;
		var pyscale = 2.0 / ( fov.upTan + fov.downTan );
		var pyoffset = ( fov.upTan - fov.downTan ) * pyscale * 0.5;
		return { scale: [ pxscale, pyscale ], offset: [ pxoffset, pyoffset ] };

	}

	function fovPortToProjection( fov, rightHanded, zNear, zFar ) {

		rightHanded = rightHanded === undefined ? true : rightHanded;
		zNear = zNear === undefined ? 0.01 : zNear;
		zFar = zFar === undefined ? 10000.0 : zFar;

		var handednessScale = rightHanded ? - 1.0 : 1.0;

		// start with an identity matrix
		var mobj = new THREE.Matrix4();
		var m = mobj.elements;

		// and with scale/offset info for normalized device coords
		var scaleAndOffset = fovToNDCScaleOffset( fov );

		// X result, map clip edges to [-w,+w]
		m[ 0 * 4 + 0 ] = scaleAndOffset.scale[ 0 ];
		m[ 0 * 4 + 1 ] = 0.0;
		m[ 0 * 4 + 2 ] = scaleAndOffset.offset[ 0 ] * handednessScale;
		m[ 0 * 4 + 3 ] = 0.0;

		// Y result, map clip edges to [-w,+w]
		// Y offset is negated because this proj matrix transforms from world coords with Y=up,
		// but the NDC scaling has Y=down (thanks D3D?)
		m[ 1 * 4 + 0 ] = 0.0;
		m[ 1 * 4 + 1 ] = scaleAndOffset.scale[ 1 ];
		m[ 1 * 4 + 2 ] = - scaleAndOffset.offset[ 1 ] * handednessScale;
		m[ 1 * 4 + 3 ] = 0.0;

		// Z result (up to the app)
		m[ 2 * 4 + 0 ] = 0.0;
		m[ 2 * 4 + 1 ] = 0.0;
		m[ 2 * 4 + 2 ] = zFar / ( zNear - zFar ) * - handednessScale;
		m[ 2 * 4 + 3 ] = ( zFar * zNear ) / ( zNear - zFar );

		// W result (= Z in)
		m[ 3 * 4 + 0 ] = 0.0;
		m[ 3 * 4 + 1 ] = 0.0;
		m[ 3 * 4 + 2 ] = handednessScale;
		m[ 3 * 4 + 3 ] = 0.0;

		mobj.transpose();

		return mobj;

	}

	function fovToProjection( fov, rightHanded, zNear, zFar ) {

		var DEG2RAD = Math.PI / 180.0;

		var fovPort = {
			upTan: Math.tan( fov.upDegrees * DEG2RAD ),
			downTan: Math.tan( fov.downDegrees * DEG2RAD ),
			leftTan: Math.tan( fov.leftDegrees * DEG2RAD ),
			rightTan: Math.tan( fov.rightDegrees * DEG2RAD )
		};

		return fovPortToProjection( fovPort, rightHanded, zNear, zFar );

	}

};

// stats.js - http://github.com/mrdoob/stats.js
var Stats=function(){function h(a){c.appendChild(a.dom);return a}function k(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?"block":"none";l=a}var l=0,c=document.createElement("div");c.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click",function(a){a.preventDefault();k(++l%c.children.length)},!1);var g=(performance||Date).now(),e=g,a=0,r=h(new Stats.Panel("FPS","#0ff","#002")),f=h(new Stats.Panel("MS","#0f0","#020"));
if(self.performance&&self.performance.memory)var t=h(new Stats.Panel("MB","#f08","#201"));k(0);return{REVISION:16,dom:c,addPanel:h,showPanel:k,begin:function(){g=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();f.update(c-g,200);if(c>e+1E3&&(r.update(1E3*a/(c-e),100),e=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){g=this.end()},domElement:c,setMode:k}};
Stats.Panel=function(h,k,l){var c=Infinity,g=0,e=Math.round,a=e(window.devicePixelRatio||1),r=80*a,f=48*a,t=3*a,u=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement("canvas");q.width=r;q.height=f;q.style.cssText="width:80px;height:48px";var b=q.getContext("2d");b.font="bold "+9*a+"px Helvetica,Arial,sans-serif";b.textBaseline="top";b.fillStyle=l;b.fillRect(0,0,r,f);b.fillStyle=k;b.fillText(h,t,u);b.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(f,
v){c=Math.min(c,f);g=Math.max(g,f);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=k;b.fillText(e(f)+" "+h+" ("+e(c)+"-"+e(g)+")",t,u);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,e((1-f/v)*p))}}};"object"===typeof module&&(module.exports=Stats);

/**
 * @author Rich Tibbett / https://github.com/richtr
 * @author mrdoob / http://mrdoob.com/
 * @author Tony Parisi / http://www.tonyparisi.com/
 * @author Takahiro / https://github.com/takahirox
 */

THREE.GLTFLoader = ( function () {

	function GLTFLoader( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

	}

	GLTFLoader.prototype = {

		constructor: GLTFLoader,

		load: function ( url, onLoad, onProgress, onError ) {

			var scope = this;

			var path = this.path && ( typeof this.path === "string" ) ? this.path : THREE.Loader.prototype.extractUrlBase( url );

			var loader = new THREE.FileLoader( scope.manager );
			loader.load( url, function ( text ) {

				scope.parse( JSON.parse( text ), onLoad, path );

			}, onProgress, onError );

		},

		setCrossOrigin: function ( value ) {

			this.crossOrigin = value;

		},

		setPath: function ( value ) {

			this.path = value;

		},

		parse: function ( json, callback, path ) {

			console.time( 'GLTFLoader' );

			var parser = new GLTFParser( json, {

				path: path || this.path,
				crossOrigin: this.crossOrigin

			} );

			parser.parse( function ( scene, scenes, cameras, animations ) {

				console.timeEnd( 'GLTFLoader' );

				var glTF = {
					"scene": scene,
					"scenes": scenes,
					"cameras": cameras,
					"animations": animations
				};

				callback( glTF );

			} );

		}

	};

	/* GLTFREGISTRY */

	function GLTFRegistry() {

		var objects = {};

		return	{

			get: function ( key ) {

				return objects[ key ];

			},

			add: function ( key, object ) {

				objects[ key ] = object;

			},

			remove: function ( key ) {

				delete objects[ key ];

			},

			removeAll: function () {

				objects = {};

			},

			update: function ( scene, camera ) {

				// update scene graph

				scene.updateMatrixWorld();

				// update camera matrices and frustum

				camera.updateMatrixWorld();
				camera.matrixWorldInverse.getInverse( camera.matrixWorld );

				for ( var name in objects ) {

					var object = objects[ name ];

					if ( object.update ) {

						object.update( scene, camera );

					}

				}

			}

		};

	}

	/* GLTFSHADERS */

	GLTFLoader.Shaders = new GLTFRegistry();

	/* GLTFSHADER */

	function GLTFShader( targetNode, allNodes ) {

		var boundUniforms = {};

		// bind each uniform to its source node

		var uniforms = targetNode.material.uniforms;

		for ( var uniformId in uniforms ) {

			var uniform = uniforms[ uniformId ];

			if ( uniform.semantic ) {

				var sourceNodeRef = uniform.node;

				var sourceNode = targetNode;

				if ( sourceNodeRef ) {

					sourceNode = allNodes[ sourceNodeRef ];

				}

				boundUniforms[ uniformId ] = {
					semantic: uniform.semantic,
					sourceNode: sourceNode,
					targetNode: targetNode,
					uniform: uniform
				};

			}

		}

		this.boundUniforms = boundUniforms;
		this._m4 = new THREE.Matrix4();

	}

	// Update - update all the uniform values
	GLTFShader.prototype.update = function ( scene, camera ) {

		var boundUniforms = this.boundUniforms;

		for ( var name in boundUniforms ) {

			var boundUniform = boundUniforms[ name ];

			switch ( boundUniform.semantic ) {

				case "MODELVIEW":

					var m4 = boundUniform.uniform.value;
					m4.multiplyMatrices( camera.matrixWorldInverse, boundUniform.sourceNode.matrixWorld );
					break;

				case "MODELVIEWINVERSETRANSPOSE":

					var m3 = boundUniform.uniform.value;
					this._m4.multiplyMatrices( camera.matrixWorldInverse, boundUniform.sourceNode.matrixWorld );
					m3.getNormalMatrix( this._m4 );
					break;

				case "PROJECTION":

					var m4 = boundUniform.uniform.value;
					m4.copy( camera.projectionMatrix );
					break;

				case "JOINTMATRIX":

					var m4v = boundUniform.uniform.value;

					for ( var mi = 0; mi < m4v.length; mi ++ ) {

						// So it goes like this:
						// SkinnedMesh world matrix is already baked into MODELVIEW;
						// transform joints to local space,
						// then transform using joint's inverse
						m4v[ mi ]
							.getInverse( boundUniform.sourceNode.matrixWorld )
							.multiply( boundUniform.targetNode.skeleton.bones[ mi ].matrixWorld )
							.multiply( boundUniform.targetNode.skeleton.boneInverses[ mi ] )
							.multiply( boundUniform.targetNode.bindMatrix );

					}

					break;

				default :

					console.warn( "Unhandled shader semantic: " + boundUniform.semantic );
					break;

			}

		}

	};


	/* ANIMATION */

	GLTFLoader.Animations = {

		update: function () {

			console.warn( 'THREE.GLTFLoader.Animation has been deprecated. Use THREE.AnimationMixer instead.' );

		}

	};

	/*********************************/
	/********** INTERNALS ************/
	/*********************************/

	/* CONSTANTS */

	var WEBGL_CONSTANTS = {
		FLOAT: 5126,
		//FLOAT_MAT2: 35674,
		FLOAT_MAT3: 35675,
		FLOAT_MAT4: 35676,
		FLOAT_VEC2: 35664,
		FLOAT_VEC3: 35665,
		FLOAT_VEC4: 35666,
		LINEAR: 9729,
		REPEAT: 10497,
		SAMPLER_2D: 35678,
		TRIANGLES: 4,
		LINES: 1,
		UNSIGNED_BYTE: 5121,
		UNSIGNED_SHORT: 5123,

		VERTEX_SHADER: 35633,
		FRAGMENT_SHADER: 35632
	};

	var WEBGL_TYPE = {
		5126: Number,
		//35674: THREE.Matrix2,
		35675: THREE.Matrix3,
		35676: THREE.Matrix4,
		35664: THREE.Vector2,
		35665: THREE.Vector3,
		35666: THREE.Vector4,
		35678: THREE.Texture
	};

	var WEBGL_COMPONENT_TYPES = {
		5120: Int8Array,
		5121: Uint8Array,
		5122: Int16Array,
		5123: Uint16Array,
		5125: Uint32Array,
		5126: Float32Array
	};

	var WEBGL_FILTERS = {
		9728: THREE.NearestFilter,
		9729: THREE.LinearFilter,
		9984: THREE.NearestMipMapNearestFilter,
		9985: THREE.LinearMipMapNearestFilter,
		9986: THREE.NearestMipMapLinearFilter,
		9987: THREE.LinearMipMapLinearFilter
	};

	var WEBGL_WRAPPINGS = {
		33071: THREE.ClampToEdgeWrapping,
		33648: THREE.MirroredRepeatWrapping,
		10497: THREE.RepeatWrapping
	};

	var WEBGL_SIDES = {
		1028: THREE.BackSide,  // Culling front
		1029: THREE.FrontSide  // Culling back
		//1032: THREE.NoSide   // Culling front and back, what to do?
	};

	var WEBGL_DEPTH_FUNCS = {
		512: THREE.NeverDepth,
		513: THREE.LessDepth,
		514: THREE.EqualDepth,
		515: THREE.LessEqualDepth,
		516: THREE.GreaterEqualDepth,
		517: THREE.NotEqualDepth,
		518: THREE.GreaterEqualDepth,
		519: THREE.AlwaysDepth
	};

	var WEBGL_BLEND_EQUATIONS = {
		32774: THREE.AddEquation,
		32778: THREE.SubtractEquation,
		32779: THREE.ReverseSubtractEquation
	};

	var WEBGL_BLEND_FUNCS = {
		0: THREE.ZeroFactor,
		1: THREE.OneFactor,
		768: THREE.SrcColorFactor,
		769: THREE.OneMinusSrcColorFactor,
		770: THREE.SrcAlphaFactor,
		771: THREE.OneMinusSrcAlphaFactor,
		772: THREE.DstAlphaFactor,
		773: THREE.OneMinusDstAlphaFactor,
		774: THREE.DstColorFactor,
		775: THREE.OneMinusDstColorFactor,
		776: THREE.SrcAlphaSaturateFactor
		// The followings are not supported by Three.js yet
		//32769: CONSTANT_COLOR,
		//32770: ONE_MINUS_CONSTANT_COLOR,
		//32771: CONSTANT_ALPHA,
		//32772: ONE_MINUS_CONSTANT_COLOR
	};

	var WEBGL_TYPE_SIZES = {
		'SCALAR': 1,
		'VEC2': 2,
		'VEC3': 3,
		'VEC4': 4,
		'MAT2': 4,
		'MAT3': 9,
		'MAT4': 16
	};

	var PATH_PROPERTIES = {
		scale: 'scale',
		translation: 'position',
		rotation: 'quaternion'
	};

	var INTERPOLATION = {
		LINEAR: THREE.InterpolateLinear,
		STEP: THREE.InterpolateDiscrete
	};

	var STATES_ENABLES = {
		2884: 'CULL_FACE',
		2929: 'DEPTH_TEST',
		3042: 'BLEND',
		3089: 'SCISSOR_TEST',
		32823: 'POLYGON_OFFSET_FILL',
		32926: 'SAMPLE_ALPHA_TO_COVERAGE'
	};

	/* UTILITY FUNCTIONS */

	function _each( object, callback, thisObj ) {

		if ( !object ) {
			return Promise.resolve();
		}

		var results;
		var fns = [];

		if ( Object.prototype.toString.call( object ) === '[object Array]' ) {

			results = [];

			var length = object.length;
			for ( var idx = 0; idx < length; idx ++ ) {
				var value = callback.call( thisObj || this, object[ idx ], idx );
				if ( value ) {
					fns.push( value );
					if ( value instanceof Promise ) {
						value.then( function( key, value ) {
							results[ idx ] = value;
						}.bind( this, key ));
					} else {
						results[ idx ] = value;
					}
				}
			}

		} else {

			results = {};

			for ( var key in object ) {
				if ( object.hasOwnProperty( key ) ) {
					var value = callback.call( thisObj || this, object[ key ], key );
					if ( value ) {
						fns.push( value );
						if ( value instanceof Promise ) {
							value.then( function( key, value ) {
								results[ key ] = value;
							}.bind( this, key ));
						} else {
							results[ key ] = value;
						}
					}
				}
			}

		}

		return Promise.all( fns ).then( function() {
			return results;
		});

	}

	function resolveURL( url, path ) {

		// Invalid URL
		if ( typeof url !== 'string' || url === '' )
			return '';

		// Absolute URL
		if ( /^https?:\/\//i.test( url ) ) {

			return url;

		}

		// Data URI
		if ( /^data:.*,.*$/i.test( url ) ) {

			return url;

		}

		// Relative URL
		return ( path || '' ) + url;

	}

	// Three.js seems too dependent on attribute names so globally
	// replace those in the shader code
	function replaceTHREEShaderAttributes( shaderText, technique ) {

		// Expected technique attributes
		var attributes = {};

		for ( var attributeId in technique.attributes ) {

			var pname = technique.attributes[ attributeId ];

			var param = technique.parameters[ pname ];
			var atype = param.type;
			var semantic = param.semantic;

			attributes[ attributeId ] = {
				type: atype,
				semantic: semantic
			};

		}

		// Figure out which attributes to change in technique

		var shaderParams = technique.parameters;
		var shaderAttributes = technique.attributes;
		var params = {};

		for ( var attributeId in attributes ) {

			var pname = shaderAttributes[ attributeId ];
			var shaderParam = shaderParams[ pname ];
			var semantic = shaderParam.semantic;
			if ( semantic ) {

				params[ attributeId ] = shaderParam;

			}

		}

		for ( var pname in params ) {

			var param = params[ pname ];
			var semantic = param.semantic;

			var regEx = new RegExp( "\\b" + pname + "\\b", "g" );

			switch ( semantic ) {

				case "POSITION":

					shaderText = shaderText.replace( regEx, 'position' );
					break;

				case "NORMAL":

					shaderText = shaderText.replace( regEx, 'normal' );
					break;

				case 'TEXCOORD_0':
				case 'TEXCOORD0':
				case 'TEXCOORD':

					shaderText = shaderText.replace( regEx, 'uv' );
					break;

				case 'COLOR_0':
				case 'COLOR0':
				case 'COLOR':

					shaderText = shaderText.replace( regEx, 'color' );
					break;

				case "WEIGHT":

					shaderText = shaderText.replace( regEx, 'skinWeight' );
					break;

				case "JOINT":

					shaderText = shaderText.replace( regEx, 'skinIndex' );
					break;

			}

		}

		return shaderText;

	}

	function createDefaultMaterial() {

		return new THREE.MeshPhongMaterial( {
			color: 0x00000,
			emissive: 0x888888,
			specular: 0x000000,
			shininess: 0,
			transparent: false,
			depthTest: true,
			side: THREE.FrontSide
		} );

	};

	// Deferred constructor for RawShaderMaterial types
	function DeferredShaderMaterial( params ) {

		this.isDeferredShaderMaterial = true;

		this.params = params;

	}

	DeferredShaderMaterial.prototype.create = function () {

		var uniforms = THREE.UniformsUtils.clone( this.params.uniforms );

		for ( var uniformId in this.params.uniforms ) {

			var originalUniform = this.params.uniforms[ uniformId ];

			if ( originalUniform.value instanceof THREE.Texture ) {

				uniforms[ uniformId ].value = originalUniform.value;
				uniforms[ uniformId ].value.needsUpdate = true;

			}

			uniforms[ uniformId ].semantic = originalUniform.semantic;
			uniforms[ uniformId ].node = originalUniform.node;

		}

		this.params.uniforms = uniforms;

		return new THREE.RawShaderMaterial( this.params );

	};

	/* GLTF PARSER */

	function GLTFParser( json, options ) {

		this.json = json || {};
		this.options = options || {};

		// loader object cache
		this.cache = new GLTFRegistry();

	}

	GLTFParser.prototype._withDependencies = function ( dependencies ) {

		var _dependencies = {};

		for ( var i = 0; i < dependencies.length; i ++ ) {

			var dependency = dependencies[ i ];
			var fnName = "load" + dependency.charAt( 0 ).toUpperCase() + dependency.slice( 1 );

			var cached = this.cache.get( dependency );

			if ( cached !== undefined ) {

				_dependencies[ dependency ] = cached;

			} else if ( this[ fnName ] ) {

				var fn = this[ fnName ]();
				this.cache.add( dependency, fn );

				_dependencies[ dependency ] = fn;

			}

		}

		return _each( _dependencies, function ( dependency ) {

			return dependency;

		} );

	};

	GLTFParser.prototype.parse = function ( callback ) {

		var json = this.json;

		// Clear the loader cache
		this.cache.removeAll();

		// Fire the callback on complete
		this._withDependencies( [

			"scenes",
			"cameras",
			"animations"

		] ).then( function ( dependencies ) {

			var scene = dependencies.scenes[ json.scene ];

			var scenes = [];

			for ( var name in dependencies.scenes ) {

				scenes.push( dependencies.scenes[ name ] );

			}

			var cameras = [];

			for ( var name in dependencies.cameras ) {

				var camera = dependencies.cameras[ name ];
				cameras.push( camera );

			}

			var animations = [];

			for ( var name in dependencies.animations ) {

				animations.push( dependencies.animations[ name ] );

			}

			callback( scene, scenes, cameras, animations );

		} );

	};

	GLTFParser.prototype.loadShaders = function () {

		var json = this.json;
		var options = this.options;

		return _each( json.shaders, function ( shader ) {

			return new Promise( function ( resolve ) {

				var loader = new THREE.FileLoader();
				loader.setResponseType( 'text' );
				loader.load( resolveURL( shader.uri, options.path ), function ( shaderText ) {

					resolve( shaderText );

				} );

			} );

		} );

	};

	GLTFParser.prototype.loadBuffers = function () {

		var json = this.json;
		var options = this.options;

		return _each( json.buffers, function ( buffer ) {

			if ( buffer.type === 'arraybuffer' || buffer.type === undefined ) {

				return new Promise( function ( resolve ) {

					var loader = new THREE.FileLoader();
					loader.setResponseType( 'arraybuffer' );
					loader.load( resolveURL( buffer.uri, options.path ), function ( buffer ) {

						resolve( buffer );

					} );

				} );

			} else {

				console.warn( 'THREE.GLTFLoader: ' + buffer.type + ' buffer type is not supported' );

			}

		} );

	};

	GLTFParser.prototype.loadBufferViews = function () {

		var json = this.json;

		return this._withDependencies( [

			"buffers"

		] ).then( function ( dependencies ) {

			return _each( json.bufferViews, function ( bufferView ) {

				var arraybuffer = dependencies.buffers[ bufferView.buffer ];

				return arraybuffer.slice( bufferView.byteOffset, bufferView.byteOffset + bufferView.byteLength );

			} );

		} );

	};

	GLTFParser.prototype.loadAccessors = function () {

		var json = this.json;

		return this._withDependencies( [

			"bufferViews"

		] ).then( function ( dependencies ) {

			return _each( json.accessors, function ( accessor ) {

				var arraybuffer = dependencies.bufferViews[ accessor.bufferView ];
				var itemSize = WEBGL_TYPE_SIZES[ accessor.type ];
				var TypedArray = WEBGL_COMPONENT_TYPES[ accessor.componentType ];

				// For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
				var elementBytes = TypedArray.BYTES_PER_ELEMENT;
				var itemBytes = elementBytes * itemSize;

				// The buffer is not interleaved if the stride is the item size in bytes.
				if ( accessor.byteStride && accessor.byteStride !== itemBytes ) {

					// Use the full buffer if it's interleaved.
					var array = new TypedArray( arraybuffer );

					// Integer parameters to IB/IBA are in array elements, not bytes.
					var ib = new THREE.InterleavedBuffer( array, accessor.byteStride / elementBytes );

					return new THREE.InterleavedBufferAttribute( ib, itemSize, accessor.byteOffset / elementBytes );

				} else {

					array = new TypedArray( arraybuffer, accessor.byteOffset, accessor.count * itemSize );

					return new THREE.BufferAttribute( array, itemSize );

				}

			} );

		} );

	};

	GLTFParser.prototype.loadTextures = function () {

		var json = this.json;
		var options = this.options;

		return _each( json.textures, function ( texture ) {

			if ( texture.source ) {

				return new Promise( function ( resolve ) {

					var source = json.images[ texture.source ];

					var textureLoader = THREE.Loader.Handlers.get( source.uri );

					if ( textureLoader === null ) {

						textureLoader = new THREE.TextureLoader();

					}

					textureLoader.setCrossOrigin( options.crossOrigin );

					textureLoader.load( resolveURL( source.uri, options.path ), function ( _texture ) {

						_texture.flipY = false;

						if ( texture.sampler ) {

							var sampler = json.samplers[ texture.sampler ];

							_texture.magFilter = WEBGL_FILTERS[ sampler.magFilter ];
							_texture.minFilter = WEBGL_FILTERS[ sampler.minFilter ];
							_texture.wrapS = WEBGL_WRAPPINGS[ sampler.wrapS ];
							_texture.wrapT = WEBGL_WRAPPINGS[ sampler.wrapT ];

						}

						resolve( _texture );

					}, undefined, function () {

						resolve();

					} );

				} );

			}

		} );

	};

	GLTFParser.prototype.loadMaterials = function () {

		var json = this.json;

		return this._withDependencies( [

			"shaders",
			"textures"

		] ).then( function ( dependencies ) {

			return _each( json.materials, function ( material ) {

				var materialType;
				var materialValues = {};
				var materialParams = {};

				var khr_material;

				if ( material.extensions && material.extensions.KHR_materials_common ) {

					khr_material = material.extensions.KHR_materials_common;

				} else if ( json.extensions && json.extensions.KHR_materials_common ) {

					khr_material = json.extensions.KHR_materials_common;

				}

				if ( khr_material ) {

					switch ( khr_material.technique ) {

						case 'BLINN' :
						case 'PHONG' :
							materialType = THREE.MeshPhongMaterial;
							break;

						case 'LAMBERT' :
							materialType = THREE.MeshLambertMaterial;
							break;

						case 'CONSTANT' :
						default :
							materialType = THREE.MeshBasicMaterial;
							break;

					}

					Object.assign( materialValues, khr_material.values );

					if ( khr_material.doubleSided || materialValues.doubleSided ) {

						materialParams.side = THREE.DoubleSide;

					}

					if ( khr_material.transparent || materialValues.transparent ) {

						materialParams.transparent = true;
						materialParams.opacity = ( materialValues.transparency !== undefined ) ? materialValues.transparency : 1;

					}

				} else if ( material.technique === undefined ) {

					materialType = THREE.MeshPhongMaterial;

					Object.assign( materialValues, material.values );

				} else {

					materialType = DeferredShaderMaterial;

					var technique = json.techniques[ material.technique ];

					materialParams.uniforms = {};

					var program = json.programs[ technique.program ];

					if ( program ) {

						materialParams.fragmentShader = dependencies.shaders[ program.fragmentShader ];

						if ( ! materialParams.fragmentShader ) {

							console.warn( "ERROR: Missing fragment shader definition:", program.fragmentShader );
							materialType = THREE.MeshPhongMaterial;

						}

						var vertexShader = dependencies.shaders[ program.vertexShader ];

						if ( ! vertexShader ) {

							console.warn( "ERROR: Missing vertex shader definition:", program.vertexShader );
							materialType = THREE.MeshPhongMaterial;

						}

						// IMPORTANT: FIX VERTEX SHADER ATTRIBUTE DEFINITIONS
						materialParams.vertexShader = replaceTHREEShaderAttributes( vertexShader, technique );

						var uniforms = technique.uniforms;

						for ( var uniformId in uniforms ) {

							var pname = uniforms[ uniformId ];
							var shaderParam = technique.parameters[ pname ];

							var ptype = shaderParam.type;

							if ( WEBGL_TYPE[ ptype ] ) {

								var pcount = shaderParam.count;
								var value;

								if ( material.values !== undefined ) value = material.values[ pname ];

								var uvalue = new WEBGL_TYPE[ ptype ]();
								var usemantic = shaderParam.semantic;
								var unode = shaderParam.node;

								switch ( ptype ) {

									case WEBGL_CONSTANTS.FLOAT:

										uvalue = shaderParam.value;

										if ( pname == "transparency" ) {

											materialParams.transparent = true;

										}

										if ( value !== undefined ) {

											uvalue = value;

										}

										break;

									case WEBGL_CONSTANTS.FLOAT_VEC2:
									case WEBGL_CONSTANTS.FLOAT_VEC3:
									case WEBGL_CONSTANTS.FLOAT_VEC4:
									case WEBGL_CONSTANTS.FLOAT_MAT3:

										if ( shaderParam && shaderParam.value ) {

											uvalue.fromArray( shaderParam.value );

										}

										if ( value ) {

											uvalue.fromArray( value );

										}

										break;

									case WEBGL_CONSTANTS.FLOAT_MAT2:

										// what to do?
										console.warn( "FLOAT_MAT2 is not a supported uniform type" );
										break;

									case WEBGL_CONSTANTS.FLOAT_MAT4:

										if ( pcount ) {

											uvalue = new Array( pcount );

											for ( var mi = 0; mi < pcount; mi ++ ) {

												uvalue[ mi ] = new WEBGL_TYPE[ ptype ]();

											}

											if ( shaderParam && shaderParam.value ) {

												var m4v = shaderParam.value;
												uvalue.fromArray( m4v );

											}

											if ( value ) {

												uvalue.fromArray( value );

											}

										} else {

											if ( shaderParam && shaderParam.value ) {

												var m4 = shaderParam.value;
												uvalue.fromArray( m4 );

											}

											if ( value ) {

												uvalue.fromArray( value );

											}

										}

										break;

									case WEBGL_CONSTANTS.SAMPLER_2D:

										if ( value !== undefined ) {

											uvalue = dependencies.textures[ value ];

										} else if ( shaderParam.value !== undefined ) {

											uvalue = dependencies.textures[ shaderParam.value ];

										} else {

											uvalue = null;

										}

										break;

								}

								materialParams.uniforms[ uniformId ] = {
									value: uvalue,
									semantic: usemantic,
									node: unode
								};

							} else {

								throw new Error( "Unknown shader uniform param type: " + ptype );

							}

						}

						var states = technique.states || {};
						var enables = states.enable || [];
						var functions = states.functions || {};

						var enableCullFace = false;
						var enableDepthTest = false;
						var enableBlend = false;

						for ( var i = 0, il = enables.length; i < il; i ++ ) {

							var enable = enables[ i ];

							switch( STATES_ENABLES[ enable ] ) {

								case 'CULL_FACE':

									enableCullFace = true;

									break;

								case 'DEPTH_TEST':

									enableDepthTest = true;

									break;

								case 'BLEND':

									enableBlend = true;

									break;

								// TODO: implement
								case 'SCISSOR_TEST':
								case 'POLYGON_OFFSET_FILL':
								case 'SAMPLE_ALPHA_TO_COVERAGE':

									break;

								default:

									throw new Error( "Unknown technique.states.enable: " + enable );

							}

						}

						if ( enableCullFace ) {

							materialParams.side = functions.cullFace !== undefined ? WEBGL_SIDES[ functions.cullFace ] : THREE.FrontSide;

						} else {

							materialParams.side = THREE.DoubleSide;

						}

						materialParams.depthTest = enableDepthTest;
						materialParams.depthFunc = functions.depthFunc !== undefined ? WEBGL_DEPTH_FUNCS[ functions.depthFunc ] : THREE.LessDepth;
						materialParams.depthWrite = functions.depthMask !== undefined ? functions.depthMask[ 0 ] : true;

						materialParams.blending = enableBlend ? THREE.CustomBlending : THREE.NoBlending;
						materialParams.transparent = enableBlend;

						var blendEquationSeparate = functions.blendEquationSeparate;

						if ( blendEquationSeparate !== undefined ) {

							materialParams.blendEquation = WEBGL_BLEND_EQUATIONS[ blendEquationSeparate[ 0 ] ];
							materialParams.blendEquationAlpha = WEBGL_BLEND_EQUATIONS[ blendEquationSeparate[ 1 ] ];

						} else {

							materialParams.blendEquation = THREE.AddEquation;
							materialParams.blendEquationAlpha = THREE.AddEquation;

						}

						var blendFuncSeparate = functions.blendFuncSeparate;

						if ( blendFuncSeparate !== undefined ) {

							materialParams.blendSrc = WEBGL_BLEND_FUNCS[ blendFuncSeparate[ 0 ] ];
							materialParams.blendDst = WEBGL_BLEND_FUNCS[ blendFuncSeparate[ 1 ] ];
							materialParams.blendSrcAlpha = WEBGL_BLEND_FUNCS[ blendFuncSeparate[ 2 ] ];
							materialParams.blendDstAlpha = WEBGL_BLEND_FUNCS[ blendFuncSeparate[ 3 ] ];

						} else {

							materialParams.blendSrc = THREE.OneFactor;
							materialParams.blendDst = THREE.ZeroFactor;
							materialParams.blendSrcAlpha = THREE.OneFactor;
							materialParams.blendDstAlpha = THREE.ZeroFactor;

						}

					}

				}

				if ( Array.isArray( materialValues.diffuse ) ) {

					materialParams.color = new THREE.Color().fromArray( materialValues.diffuse );

				} else if ( typeof( materialValues.diffuse ) === 'string' ) {

					materialParams.map = dependencies.textures[ materialValues.diffuse ];

				}

				delete materialParams.diffuse;

				if ( typeof( materialValues.reflective ) === 'string' ) {

					materialParams.envMap = dependencies.textures[ materialValues.reflective ];

				}

				if ( typeof( materialValues.bump ) === 'string' ) {

					materialParams.bumpMap = dependencies.textures[ materialValues.bump ];

				}

				if ( Array.isArray( materialValues.emission ) ) {

					if ( materialType === THREE.MeshBasicMaterial ) {

						materialParams.color = new THREE.Color().fromArray( materialValues.emission );

					} else {

						materialParams.emissive = new THREE.Color().fromArray( materialValues.emission );

					}

				} else if ( typeof( materialValues.emission ) === 'string' ) {

					if ( materialType === THREE.MeshBasicMaterial ) {

						materialParams.map = dependencies.textures[ materialValues.emission ];

					} else {

						materialParams.emissiveMap = dependencies.textures[ materialValues.emission ];

					}

				}

				if ( Array.isArray( materialValues.specular ) ) {

					materialParams.specular = new THREE.Color().fromArray( materialValues.specular );

				} else if ( typeof( materialValues.specular ) === 'string' ) {

					materialParams.specularMap = dependencies.textures[ materialValues.specular ];

				}

				if ( materialValues.shininess !== undefined ) {

					materialParams.shininess = materialValues.shininess;

				}

				var _material = new materialType( materialParams );
				if ( material.name !== undefined ) _material.name = material.name;

				return _material;

			} );

		} );

	};

	GLTFParser.prototype.loadMeshes = function () {

		var json = this.json;

		return this._withDependencies( [

			"accessors",
			"materials"

		] ).then( function ( dependencies ) {

			return _each( json.meshes, function ( mesh ) {

				var group = new THREE.Object3D();
				if ( mesh.name !== undefined ) group.name = mesh.name;

				if ( mesh.extras ) group.userData = mesh.extras;

				var primitives = mesh.primitives;

				for ( var name in primitives ) {

					var primitive = primitives[ name ];

					if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLES || primitive.mode === undefined ) {

						var geometry = new THREE.BufferGeometry();

						var attributes = primitive.attributes;

						for ( var attributeId in attributes ) {

							var attributeEntry = attributes[ attributeId ];

							if ( ! attributeEntry ) return;

							var bufferAttribute = dependencies.accessors[ attributeEntry ];

							switch ( attributeId ) {

								case 'POSITION':
									geometry.addAttribute( 'position', bufferAttribute );
									break;

								case 'NORMAL':
									geometry.addAttribute( 'normal', bufferAttribute );
									break;

								case 'TEXCOORD_0':
								case 'TEXCOORD0':
								case 'TEXCOORD':
									geometry.addAttribute( 'uv', bufferAttribute );
									break;

								case 'COLOR_0':
								case 'COLOR0':
								case 'COLOR':
									geometry.addAttribute( 'color', bufferAttribute );
									break;

								case 'WEIGHT':
									geometry.addAttribute( 'skinWeight', bufferAttribute );
									break;

								case 'JOINT':
									geometry.addAttribute( 'skinIndex', bufferAttribute );
									break;

							}

						}

						if ( primitive.indices ) {

							geometry.setIndex( dependencies.accessors[ primitive.indices ] );

						}

						var material = dependencies.materials !== undefined ? dependencies.materials[ primitive.material ] : createDefaultMaterial();

						var meshNode = new THREE.Mesh( geometry, material );
						meshNode.castShadow = true;
						meshNode.name = ( name === "0" ? group.name : group.name + name );

						if ( primitive.extras ) meshNode.userData = primitive.extras;

						group.add( meshNode );

					} else if ( primitive.mode === WEBGL_CONSTANTS.LINES ) {

						var geometry = new THREE.BufferGeometry();

						var attributes = primitive.attributes;


						for ( var attributeId in attributes ) {

							var attributeEntry = attributes[ attributeId ];

							if ( ! attributeEntry ) return;

							var bufferAttribute = dependencies.accessors[ attributeEntry ];

							switch ( attributeId ) {

								case 'POSITION':
									geometry.addAttribute( 'position', bufferAttribute );
									break;
				
								case 'COLOR_0':
								case 'COLOR0':
								case 'COLOR':
									geometry.addAttribute( 'color', bufferAttribute );
									break;

							}
						};

						var material = dependencies.materials[ primitive.material ];

						var meshNode;

						if ( primitive.indices ) {

							geometry.setIndex( dependencies.accessors[ primitive.indices ] );

							meshNode = new THREE.LineSegments( geometry, material );

						} else {

							meshNode = new THREE.Line( geometry, material );

						}

						meshNode.name = ( name === "0" ? group.name : group.name + name );

						if ( primitive.extras ) meshNode.userData = primitive.extras;

						group.add( meshNode );

					} else {

						console.warn( "Only triangular and line primitives are supported" );

					}

				}

				return group;

			} );

		} );

	};

	GLTFParser.prototype.loadCameras = function () {

		var json = this.json;

		return _each( json.cameras, function ( camera ) {

			if ( camera.type == "perspective" && camera.perspective ) {

				var yfov = camera.perspective.yfov;
				var xfov = camera.perspective.xfov;
				var aspect_ratio = camera.perspective.aspect_ratio || 1;

				// According to COLLADA spec...
				// aspect_ratio = xfov / yfov
				xfov = ( xfov === undefined && yfov ) ? yfov * aspect_ratio : xfov;

				// According to COLLADA spec...
				// aspect_ratio = xfov / yfov
				// yfov = ( yfov === undefined && xfov ) ? xfov / aspect_ratio : yfov;

				var _camera = new THREE.PerspectiveCamera( THREE.Math.radToDeg( xfov ), aspect_ratio, camera.perspective.znear || 1, camera.perspective.zfar || 2e6 );
				if ( camera.name !== undefined ) _camera.name = camera.name;

				if ( camera.extras ) _camera.userData = camera.extras;

				return _camera;

			} else if ( camera.type == "orthographic" && camera.orthographic ) {

				var _camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, camera.orthographic.znear, camera.orthographic.zfar );
				if ( camera.name !== undefined ) _camera.name = camera.name;

				if ( camera.extras ) _camera.userData = camera.extras;

				return _camera;

			}

		} );

	};

	GLTFParser.prototype.loadSkins = function () {

		var json = this.json;

		return this._withDependencies( [

			"accessors"

		] ).then( function ( dependencies ) {

			return _each( json.skins, function ( skin ) {

				var _skin = {
					bindShapeMatrix: new THREE.Matrix4().fromArray( skin.bindShapeMatrix ),
					jointNames: skin.jointNames,
					inverseBindMatrices: dependencies.accessors[ skin.inverseBindMatrices ]
				};

				return _skin;

			} );

		} );

	};

	GLTFParser.prototype.loadAnimations = function () {

		var json = this.json;

		return this._withDependencies( [

			"accessors",
			"nodes"

		] ).then( function ( dependencies ) {

			return _each( json.animations, function ( animation, animationId ) {

				var tracks = [];

				for ( var channelId in animation.channels ) {

					var channel = animation.channels[ channelId ];
					var sampler = animation.samplers[ channel.sampler ];

					if ( sampler ) {

						var target = channel.target;
						var name = target.id;
						var input = animation.parameters !== undefined ? animation.parameters[ sampler.input ] : sampler.input;
						var output = animation.parameters !== undefined ? animation.parameters[ sampler.output ] : sampler.output;

						var inputAccessor = dependencies.accessors[ input ];
						var outputAccessor = dependencies.accessors[ output ];

						var node = dependencies.nodes[ name ];

						if ( node ) {

							node.updateMatrix();
							node.matrixAutoUpdate = true;

							var TypedKeyframeTrack = PATH_PROPERTIES[ target.path ] === PATH_PROPERTIES.rotation
								? THREE.QuaternionKeyframeTrack
								: THREE.VectorKeyframeTrack;

							var targetName = node.name ? node.name : node.uuid;

							// KeyframeTrack.optimize() will modify given 'times' and 'values'
							// buffers before creating a truncated copy to keep. Because buffers may
							// be reused by other tracks, make copies here.
							tracks.push( new TypedKeyframeTrack(
								targetName + '.' + PATH_PROPERTIES[ target.path ],
								THREE.AnimationUtils.arraySlice( inputAccessor.array, 0 ),
								THREE.AnimationUtils.arraySlice( outputAccessor.array, 0 ),
								INTERPOLATION[ sampler.interpolation ]
							) );

						}

					}

				}

				return new THREE.AnimationClip( "animation_" + animationId, undefined, tracks );

			} );

		} );

	};

	GLTFParser.prototype.loadNodes = function () {

		var json = this.json;
		var scope = this;

		return _each( json.nodes, function ( node ) {

			var matrix = new THREE.Matrix4();

			var _node;

			if ( node.jointName ) {

				_node = new THREE.Bone();
				_node.name = node.name !== undefined ? node.name : node.jointName;
				_node.jointName = node.jointName;

			} else {

				_node = new THREE.Object3D();
				if ( node.name !== undefined ) _node.name = node.name;

			}

			if ( node.extras ) _node.userData = node.extras;

			if ( node.matrix !== undefined ) {

				matrix.fromArray( node.matrix );
				_node.applyMatrix( matrix );

			} else {

				if ( node.translation !== undefined ) {

					_node.position.fromArray( node.translation );

				}

				if ( node.rotation !== undefined ) {

					_node.quaternion.fromArray( node.rotation );

				}

				if ( node.scale !== undefined ) {

					_node.scale.fromArray( node.scale );

				}

			}

			return _node;

		} ).then( function ( __nodes ) {

			return scope._withDependencies( [

				"meshes",
				"skins",
				"cameras",
				"extensions"

			] ).then( function ( dependencies ) {

				return _each( __nodes, function ( _node, nodeId ) {

					var node = json.nodes[ nodeId ];

					if ( node.meshes !== undefined ) {

						for ( var meshId in node.meshes ) {

							var mesh = node.meshes[ meshId ];
							var group = dependencies.meshes[ mesh ];

							if ( group === undefined ) {

								console.warn( 'GLTFLoader: Couldn\'t find node "' + mesh + '".' );
								continue;

							}

							for ( var childrenId in group.children ) {

								var child = group.children[ childrenId ];

								// clone Mesh to add to _node

								var originalMaterial = child.material;
								var originalGeometry = child.geometry;
								var originalUserData = child.userData;
								var originalName = child.name;

								var material;

								if ( originalMaterial.isDeferredShaderMaterial ) {

									originalMaterial = material = originalMaterial.create();

								} else {

									material = originalMaterial;

								}

								switch ( child.type ) {

									case 'LineSegments':
										child = new THREE.LineSegments( originalGeometry, material );
										break;

									case 'Line':
										child = new THREE.Line( originalGeometry, material );
										break;

									default:
										child = new THREE.Mesh( originalGeometry, material );

								}

								child.castShadow = true;
								child.userData = originalUserData;
								child.name = originalName;

								var skinEntry;

								if ( node.skin ) {

									skinEntry = dependencies.skins[ node.skin ];

								}

								// Replace Mesh with SkinnedMesh in library
								if ( skinEntry ) {

									var getJointNode = function ( jointId ) {

										var keys = Object.keys( __nodes );

										for ( var i = 0, il = keys.length; i < il; i ++ ) {

											var n = __nodes[ keys[ i ] ];

											if ( n.jointName === jointId ) return n;

										}

										return null;

									}

									var geometry = originalGeometry;
									var material = originalMaterial;
									material.skinning = true;

									child = new THREE.SkinnedMesh( geometry, material, false );
									child.castShadow = true;
									child.userData = originalUserData;
									child.name = originalName;

									var bones = [];
									var boneInverses = [];

									for ( var i = 0, l = skinEntry.jointNames.length; i < l; i ++ ) {

										var jointId = skinEntry.jointNames[ i ];
										var jointNode = getJointNode( jointId );

										if ( jointNode ) {

											bones.push( jointNode );

											var m = skinEntry.inverseBindMatrices.array;
											var mat = new THREE.Matrix4().fromArray( m, i * 16 );
											boneInverses.push( mat );

										} else {

											console.warn( "WARNING: joint: ''" + jointId + "' could not be found" );

										}

									}

									child.bind( new THREE.Skeleton( bones, boneInverses, false ), skinEntry.bindShapeMatrix );

									var buildBoneGraph = function ( parentJson, parentObject, property ) {

										var children = parentJson[ property ];

										if ( children === undefined ) return;

										for ( var i = 0, il = children.length; i < il; i ++ ) {

											var nodeId = children[ i ];
											var bone = __nodes[ nodeId ];
											var boneJson = json.nodes[ nodeId ];

											if ( bone !== undefined && bone.isBone === true && boneJson !== undefined ) {

												parentObject.add( bone );
												buildBoneGraph( boneJson, bone, 'children' );

											}

										}

									}

									buildBoneGraph( node, child, 'skeletons' );

								}

								_node.add( child );

							}

						}

					}

					if ( node.camera !== undefined ) {

						var camera = dependencies.cameras[ node.camera ];

						_node.add( camera );

					}

					if ( node.extensions && node.extensions.KHR_materials_common && node.extensions.KHR_materials_common.light ) {

						var light = dependencies.extensions.KHR_materials_common.lights[ node.extensions.KHR_materials_common.light ];

						_node.add( light );

					}

					return _node;

				} );

			} );

		} );

	};

	GLTFParser.prototype.loadExtensions = function () {

		var json = this.json;

		return _each( json.extensions, function ( extension, extensionId ) {

			switch ( extensionId ) {

				case "KHR_materials_common":

					var extensionNode = {
						lights: {}
					};

					var lights = extension.lights;

					for ( var lightId in lights ) {

						var light = lights[ lightId ];
						var lightNode;

						var lightParams = light[ light.type ];
						var color = new THREE.Color().fromArray( lightParams.color );

						switch ( light.type ) {

							case "directional":
								lightNode = new THREE.DirectionalLight( color );
								lightNode.position.set( 0, 0, 1 );
								break;

							case "point":
								lightNode = new THREE.PointLight( color );
								break;

							case "spot":
								lightNode = new THREE.SpotLight( color );
								lightNode.position.set( 0, 0, 1 );
								break;

							case "ambient":
								lightNode = new THREE.AmbientLight( color );
								break;

						}

						if ( lightNode ) {

							extensionNode.lights[ lightId ] = lightNode;

						}

					}

					return extensionNode;

					break;

			}

		} );

	};

	GLTFParser.prototype.loadScenes = function () {

		var json = this.json;

		// scene node hierachy builder

		function buildNodeHierachy( nodeId, parentObject, allNodes ) {

			var _node = allNodes[ nodeId ];
			parentObject.add( _node );

			var node = json.nodes[ nodeId ];

			if ( node.children ) {

				var children = node.children;

				for ( var i = 0, l = children.length; i < l; i ++ ) {

					var child = children[ i ];
					buildNodeHierachy( child, _node, allNodes );

				}

			}

		}

		return this._withDependencies( [

			"nodes"

		] ).then( function ( dependencies ) {

			return _each( json.scenes, function ( scene ) {

				var _scene = new THREE.Scene();
				if ( scene.name !== undefined ) _scene.name = scene.name;

				if ( scene.extras ) _scene.userData = scene.extras;

				var nodes = scene.nodes;

				for ( var i = 0, l = nodes.length; i < l; i ++ ) {

					var nodeId = nodes[ i ];
					buildNodeHierachy( nodeId, _scene, dependencies.nodes );

				}

				_scene.traverse( function ( child ) {

					// Register raw material meshes with GLTFLoader.Shaders
					if ( child.material && child.material.isRawShaderMaterial ) {

						var xshader = new GLTFShader( child, dependencies.nodes );
						GLTFLoader.Shaders.add( child.uuid, xshader );

					}

				} );

				return _scene;

			} );

		} );

	};

	return GLTFLoader;

} )();
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

var Detector = {

	canvas: !! window.CanvasRenderingContext2D,
	webgl: ( function () {

		try {

			var canvas = document.createElement( 'canvas' ); return !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );

		} catch ( e ) {

			return false;

		}

	} )(),
	workers: !! window.Worker,
	fileapi: window.File && window.FileReader && window.FileList && window.Blob,

	getWebGLErrorMessage: function () {

		var element = document.createElement( 'div' );
		element.id = 'webgl-error-message';
		element.style.fontFamily = 'monospace';
		element.style.fontSize = '13px';
		element.style.fontWeight = 'normal';
		element.style.textAlign = 'center';
		element.style.background = '#fff';
		element.style.color = '#000';
		element.style.padding = '1.5em';
		element.style.width = '400px';
		element.style.margin = '5em auto 0';

		if ( ! this.webgl ) {

			element.innerHTML = window.WebGLRenderingContext ? [
				'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />',
				'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
			].join( '\n' ) : [
				'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>',
				'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
			].join( '\n' );

		}

		return element;

	},

	addGetWebGLMessage: function ( parameters ) {

		var parent, id, element;

		parameters = parameters || {};

		parent = parameters.parent !== undefined ? parameters.parent : document.body;
		id = parameters.id !== undefined ? parameters.id : 'oldie';

		element = Detector.getWebGLErrorMessage();
		element.id = id;

		parent.appendChild( element );

	}

};

// browserify support
if ( typeof module === 'object' ) {

	module.exports = Detector;

}

/**
 * @author mrdoob / http://mrdoob.com
 * Based on @tojiro's vr-samples-utils.js
 */

var WEBVR = {

	isLatestAvailable: function () {

		console.warn( 'WEBVR: isLatestAvailable() is being deprecated. Use .isAvailable() instead.' );
		return this.isAvailable();

	},

	isAvailable: function () {

		return navigator.getVRDisplays !== undefined;

	},

	getMessage: function () {

		var message;

		if ( navigator.getVRDisplays ) {

			navigator.getVRDisplays().then( function ( displays ) {

				if ( displays.length === 0 ) message = 'WebVR supported, but no VRDisplays found.';

			} );

		} else {

			message = 'Your browser does not support WebVR. See <a href="http://webvr.info">webvr.info</a> for assistance.';

		}

		if ( message !== undefined ) {

			var container = document.createElement( 'div' );
			container.style.position = 'absolute';
			container.style.left = '0';
			container.style.top = '0';
			container.style.right = '0';
			container.style.zIndex = '999';
			container.align = 'center';

			var error = document.createElement( 'div' );
			error.style.fontFamily = 'sans-serif';
			error.style.fontSize = '16px';
			error.style.fontStyle = 'normal';
			error.style.lineHeight = '26px';
			error.style.backgroundColor = '#fff';
			error.style.color = '#000';
			error.style.padding = '10px 20px';
			error.style.margin = '50px';
			error.style.display = 'inline-block';
			error.innerHTML = message;
			container.appendChild( error );

			return container;

		}

	},

	getButton: function ( effect ) {

		var button = document.createElement( 'button' );
		button.style.position = 'absolute';
		button.style.left = 'calc(50% - 50px)';
		button.style.bottom = '20px';
		button.style.width = '100px';
		button.style.border = '0';
		button.style.padding = '8px';
		button.style.cursor = 'pointer';
		button.style.backgroundColor = '#000';
		button.style.color = '#fff';
		button.style.fontFamily = 'sans-serif';
		button.style.fontSize = '13px';
		button.style.fontStyle = 'normal';
		button.style.textAlign = 'center';
		button.style.zIndex = '999';
		button.textContent = 'ENTER VR';
		button.onclick = function() {

			effect.isPresenting ? effect.exitPresent() : effect.requestPresent();

		};

		window.addEventListener( 'vrdisplaypresentchange', function ( event ) {

			button.textContent = effect.isPresenting ? 'EXIT VR' : 'ENTER VR';

		}, false );

		return button;

	}

};

var KeyCodes;
(function (KeyCodes) {
    var KeyDown;
    (function (KeyDown) {
        KeyDown.Backspace = 8;
        KeyDown.Tab = 9;
        KeyDown.Enter = 13;
        KeyDown.Shift = 16;
        KeyDown.Ctrl = 17;
        KeyDown.Alt = 18;
        KeyDown.PauseBreak = 19;
        KeyDown.CapsLock = 20;
        KeyDown.Escape = 27;
        KeyDown.Spacebar = 32;
        KeyDown.PageUp = 33;
        KeyDown.PageDown = 34;
        KeyDown.End = 35;
        KeyDown.Home = 36;
        KeyDown.LeftArrow = 37;
        KeyDown.UpArrow = 38;
        KeyDown.RightArrow = 39;
        KeyDown.DownArrow = 40;
        KeyDown.PrintScrn = 44;
        KeyDown.Insert = 45;
        KeyDown.Delete = 46;
        KeyDown.Zero = 48;
        KeyDown.One = 49;
        KeyDown.Two = 50;
        KeyDown.Three = 51;
        KeyDown.Four = 52;
        KeyDown.Five = 53;
        KeyDown.Six = 54;
        KeyDown.Seven = 55;
        KeyDown.Eight = 56;
        KeyDown.Nine = 57;
        KeyDown.a = 65;
        KeyDown.b = 66;
        KeyDown.c = 67;
        KeyDown.d = 68;
        KeyDown.e = 69;
        KeyDown.f = 70;
        KeyDown.g = 71;
        KeyDown.h = 72;
        KeyDown.i = 73;
        KeyDown.j = 74;
        KeyDown.k = 75;
        KeyDown.l = 76;
        KeyDown.m = 77;
        KeyDown.n = 78;
        KeyDown.o = 79;
        KeyDown.p = 80;
        KeyDown.q = 81;
        KeyDown.r = 82;
        KeyDown.s = 83;
        KeyDown.t = 84;
        KeyDown.u = 85;
        KeyDown.v = 86;
        KeyDown.w = 87;
        KeyDown.x = 88;
        KeyDown.y = 89;
        KeyDown.z = 90;
        KeyDown.LeftWindowKey = 91;
        KeyDown.RightWindowKey = 92;
        KeyDown.SelectKey = 93;
        KeyDown.Numpad0 = 96;
        KeyDown.Numpad1 = 97;
        KeyDown.Numpad2 = 98;
        KeyDown.Numpad3 = 99;
        KeyDown.Numpad4 = 100;
        KeyDown.Numpad5 = 101;
        KeyDown.Numpad6 = 102;
        KeyDown.Numpad7 = 103;
        KeyDown.Numpad8 = 104;
        KeyDown.Numpad9 = 105;
        KeyDown.Multiply = 106;
        KeyDown.NumpadPlus = 107;
        KeyDown.NumpadMinus = 109;
        KeyDown.DecimalPoint = 110;
        KeyDown.Divide = 111;
        KeyDown.F1 = 112;
        KeyDown.F2 = 113;
        KeyDown.F3 = 114;
        KeyDown.F4 = 115;
        KeyDown.F5 = 116;
        KeyDown.F6 = 117;
        KeyDown.F7 = 118;
        KeyDown.F8 = 119;
        KeyDown.F9 = 120;
        KeyDown.F10 = 121;
        KeyDown.F11 = 122;
        KeyDown.F12 = 123;
        KeyDown.NumLock = 144;
        KeyDown.ScrollLock = 145;
        KeyDown.Semicolon = 186;
        KeyDown.Equals = 187;
        KeyDown.Comma = 188;
        KeyDown.LessThan = 188;
        KeyDown.Dash = 189;
        KeyDown.Period = 190;
        KeyDown.GreaterThan = 190;
        KeyDown.ForwardSlash = 191;
        KeyDown.QuestionMark = 191;
        KeyDown.GraveAccent = 192;
        KeyDown.Tilde = 192;
        KeyDown.OpenCurlyBracket = 219;
        KeyDown.OpenSquareBracket = 219;
        KeyDown.BackSlash = 220;
        KeyDown.VerticalPipe = 220;
        KeyDown.CloseCurlyBracket = 221;
        KeyDown.CloseSquareBracket = 221;
        KeyDown.Quote = 222;
        KeyDown.CommandFF = 224;
    })(KeyDown = KeyCodes.KeyDown || (KeyCodes.KeyDown = {}));
})(KeyCodes || (KeyCodes = {}));
var KeyCodes;
(function (KeyCodes) {
    var KeyPress;
    (function (KeyPress) {
        KeyPress.Backspace = 8;
        KeyPress.Enter = 13;
        KeyPress.Spacebar = 32;
        KeyPress.Hash = 35;
        KeyPress.GraveAccent = 39;
        KeyPress.ForwardSlash = 32;
        KeyPress.DoubleQuote = 34;
        KeyPress.Asterisk = 42;
        KeyPress.Plus = 43;
        KeyPress.Comma = 44;
        KeyPress.Minus = 45;
        KeyPress.Period = 46;
        KeyPress.ForwardSlash = 47;
        KeyPress.Zero = 48;
        KeyPress.One = 49;
        KeyPress.Two = 50;
        KeyPress.Three = 51;
        KeyPress.Four = 52;
        KeyPress.Five = 53;
        KeyPress.Six = 54;
        KeyPress.Seven = 55;
        KeyPress.Eight = 56;
        KeyPress.Nine = 57;
        KeyPress.Colon = 58;
        KeyPress.Semicolon = 59;
        KeyPress.LessThan = 60;
        KeyPress.Equals = 61;
        KeyPress.GreaterThan = 62;
        KeyPress.QuestionMark = 63;
        KeyPress.At = 64;
        KeyPress.OpenSquareBracket = 91;
        KeyPress.BackSlash = 92;
        KeyPress.CloseSquareBracket = 93;
        KeyPress.a = 97;
        KeyPress.b = 98;
        KeyPress.c = 99;
        KeyPress.d = 100;
        KeyPress.e = 101;
        KeyPress.f = 102;
        KeyPress.g = 103;
        KeyPress.h = 104;
        KeyPress.i = 105;
        KeyPress.j = 106;
        KeyPress.k = 107;
        KeyPress.l = 108;
        KeyPress.m = 109;
        KeyPress.n = 110;
        KeyPress.o = 111;
        KeyPress.p = 112;
        KeyPress.q = 113;
        KeyPress.r = 114;
        KeyPress.s = 115;
        KeyPress.t = 116;
        KeyPress.u = 117;
        KeyPress.v = 118;
        KeyPress.w = 119;
        KeyPress.x = 120;
        KeyPress.y = 121;
        KeyPress.z = 122;
        KeyPress.OpenCurlyBracket = 123;
        KeyPress.VerticalPipe = 124;
        KeyPress.CloseCurlyBracket = 125;
        KeyPress.Tilde = 126;
    })(KeyPress = KeyCodes.KeyPress || (KeyCodes.KeyPress = {}));
})(KeyCodes || (KeyCodes = {}));

!function(f){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{var g;g="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,g.virtex=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){var Virtex;!function(Virtex){var StringValue=function(){function StringValue(value){this.value="",value&&(this.value=value.toLowerCase())}return StringValue.prototype.toString=function(){return this.value},StringValue}();Virtex.StringValue=StringValue}(Virtex||(Virtex={}));var Virtex,__extends=this&&this.__extends||function(d,b){function __(){this.constructor=d}for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p]);d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)};!function(Virtex){var FileType=function(_super){function FileType(){return _super.apply(this,arguments)||this}return __extends(FileType,_super),FileType}(Virtex.StringValue);FileType.GLTF=new FileType("model/gltf+json"),FileType.THREEJS=new FileType("application/vnd.threejs+json"),Virtex.FileType=FileType}(Virtex||(Virtex={}));var Virtex,__extends=this&&this.__extends||function(d,b){function __(){this.constructor=d}for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p]);d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)},requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,5)}}();!function(Virtex){var Viewport=function(_super){function Viewport(options){var _this=_super.call(this,options)||this;_this._viewportCenter=new THREE.Vector2,_this._isFullscreen=!1,_this._isMouseDown=!1,_this._isVRMode=!1,_this._mousePos=new THREE.Vector2,_this._mousePosOnMouseDown=new THREE.Vector2,_this._pinchStart=new THREE.Vector2,_this._targetRotationOnMouseDown=new THREE.Vector2,_this._targetRotation=new THREE.Vector2,_this._vrEnabled=!0;var success=_this._init();return _this._resize(),success&&_this._tick(),_this}return __extends(Viewport,_super),Viewport.prototype._init=function(){var success=_super.prototype._init.call(this);return success?Detector.webgl?(this._$element.append('<div class="viewport"></div><div class="loading"><div class="bar"></div></div>'),this._$viewport=this._$element.find(".viewport"),this._$loading=this._$element.find(".loading"),this._$loadingBar=this._$loading.find(".bar"),this._$loading.hide(),this._scene=new THREE.Scene,this._objectGroup=new THREE.Object3D,this._scene.add(this._objectGroup),this._createLights(),this._createCamera(),this._createControls(),this._createRenderer(),this._createEventListeners(),this._loadObject(this.options.file),this.options.showStats&&(this._stats=new Stats,this._stats.domElement.style.position="absolute",this._stats.domElement.style.top="0px",this._$viewport.append(this._stats.domElement)),!0):(Detector.addGetWebGLMessage(),this._$oldie=$("#oldie"),this._$oldie.appendTo(this._$element),!1):(console.error("Virtex failed to initialise"),!1)},Viewport.prototype._getDefaultOptions=function(){return{ambientLightColor:13684944,ambientLightIntensity:1,cameraZ:4.5,directionalLight1Color:16777215,directionalLight1Intensity:.75,directionalLight2Color:10584,directionalLight2Intensity:.5,doubleSided:!0,fadeSpeed:1750,far:1e4,file:"",fitFovToObject:!0,fullscreenEnabled:!0,maxZoom:10,minZoom:2,near:.05,shading:THREE.SmoothShading,showStats:!1,type:Virtex.FileType.THREEJS,vrBackgroundColor:0,zoomSpeed:1}},Viewport.prototype._getVRDisplay=function(){return new Promise(function(resolve){navigator.getVRDisplays().then(function(devices){for(var i=0;i<devices.length;i++)if(devices[i]instanceof VRDisplay){resolve(devices[i]);break}resolve(void 0)},function(){resolve(void 0)})})},Viewport.prototype._createLights=function(){this._lightGroup=new THREE.Object3D,this._scene.add(this._lightGroup);var light1=new THREE.DirectionalLight(this.options.directionalLight1Color,this.options.directionalLight1Intensity);light1.position.set(1,1,1),this._lightGroup.add(light1);var light2=new THREE.DirectionalLight(this.options.directionalLight2Color,this.options.directionalLight2Intensity);light2.position.set(-1,-1,-1),this._lightGroup.add(light2);var ambientLight=new THREE.AmbientLight(this.options.ambientLightColor,this.options.ambientLightIntensity);this._lightGroup.add(ambientLight)},Viewport.prototype._createCamera=function(){this._camera=new THREE.PerspectiveCamera(this._getFov(),this._getAspectRatio(),this.options.near,this.options.far);var cameraZ=this._getCameraZ();this._camera.position.z=this._targetZoom=cameraZ},Viewport.prototype._createRenderer=function(){this._renderer=new THREE.WebGLRenderer({antialias:!0,alpha:!0}),this._isVRMode?(this._renderer.setClearColor(this.options.vrBackgroundColor),this._vrEffect=new THREE.VREffect(this._renderer),this._vrEffect.setSize(this._$viewport.width(),this._$viewport.height())):(this._renderer.setClearColor(this.options.vrBackgroundColor,0),this._renderer.setSize(this._$viewport.width(),this._$viewport.height())),this._$viewport.empty().append(this._renderer.domElement)},Viewport.prototype._createControls=function(){this._isVRMode&&(this._vrControls=new THREE.VRControls(this._camera))},Viewport.prototype._createEventListeners=function(){var _this=this;this.options.fullscreenEnabled&&$(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange",function(){_this._fullscreenChanged()}),this._$element.on("mousedown",function(e){_this._onMouseDown(e.originalEvent)}),this._$element.on("mousemove",function(e){_this._onMouseMove(e.originalEvent)}),this._$element.on("mouseup",function(){_this._onMouseUp()}),this._$element.on("mouseout",function(){_this._onMouseOut()}),this._$element.on("mousewheel",function(e){_this._onMouseWheel(e.originalEvent)}),this._$element.on("DOMMouseScroll",function(e){_this._onMouseWheel(e.originalEvent)}),this._$element.on("touchstart",function(e){_this._onTouchStart(e.originalEvent)}),this._$element.on("touchmove",function(e){_this._onTouchMove(e.originalEvent)}),this._$element.on("touchend",function(){_this._onTouchEnd()}),window.addEventListener("resize",function(){return _this._resize()},!1)},Viewport.prototype._loadObject=function(object){var _this=this;this._$loading.show();var loader;loader=this._isGLTF()?new THREE.GLTFLoader:new THREE.ObjectLoader,loader.setCrossOrigin("anonymous"),loader.load(object,function(obj){if(_this._isGLTF()){if(_this._objectGroup.add(obj.scene),obj.animations)for(var animations=obj.animations,i=0,l=animations.length;i<l;i++){var animation=animations[i];animation.loop=!0,animation.play()}_this._scene=obj.scene,obj.cameras&&obj.cameras.length&&(_this._camera=obj.cameras[0])}else _this._objectGroup.add(obj),_this._createCamera();_this._$loading.fadeOut(_this.options.fadeSpeed),_this._emit(Virtex.Events.LOADED,obj)},function(e){e.lengthComputable&&_this._loadProgress(e.loaded/e.total)},function(e){console.error(e)})},Viewport.prototype._getBoundingBox=function(){return(new THREE.Box3).setFromObject(this._objectGroup)},Viewport.prototype._getBoundingWidth=function(){return this._getBoundingBox().getSize().x},Viewport.prototype._getBoundingHeight=function(){return this._getBoundingBox().getSize().y},Viewport.prototype._getCameraZ=function(){return this._getBoundingWidth()*this.options.cameraZ},Viewport.prototype._getFov=function(){if(!this._camera)return 1;var width=this._getBoundingWidth(),height=this._getBoundingHeight(),dist=this._getCameraZ()-width,fov=2*Math.atan(height/(2*dist))*(180/Math.PI);return fov},Viewport.prototype._isGLTF=function(){return this.options.type.toString()===Virtex.FileType.GLTF.toString()},Viewport.prototype._loadProgress=function(progress){var fullWidth=this._$loading.width(),width=Math.floor(fullWidth*progress);this._$loadingBar.width(width)},Viewport.prototype._fullscreenChanged=function(){this._isFullscreen?(this.exitFullscreen(),this._$element.width(this._lastWidth),this._$element.height(this._lastHeight)):(this._lastWidth=this._getWidth(),this._lastHeight=this._getHeight()),this._isFullscreen=!this._isFullscreen,this._resize()},Viewport.prototype._onMouseDown=function(event){event.preventDefault(),this._isMouseDown=!0,this._mousePosOnMouseDown.x=event.clientX-this._viewportCenter.x,this._targetRotationOnMouseDown.x=this._targetRotation.x,this._mousePosOnMouseDown.y=event.clientY-this._viewportCenter.y,this._targetRotationOnMouseDown.y=this._targetRotation.y},Viewport.prototype._onMouseMove=function(event){this._mousePos.x=event.clientX-this._viewportCenter.x,this._mousePos.y=event.clientY-this._viewportCenter.y,this._isMouseDown&&(this._targetRotation.y=this._targetRotationOnMouseDown.y+.02*(this._mousePos.y-this._mousePosOnMouseDown.y),this._targetRotation.x=this._targetRotationOnMouseDown.x+.02*(this._mousePos.x-this._mousePosOnMouseDown.x))},Viewport.prototype._onMouseUp=function(){this._isMouseDown=!1},Viewport.prototype._onMouseOut=function(){this._isMouseDown=!1},Viewport.prototype._onMouseWheel=function(event){event.preventDefault(),event.stopPropagation();var delta=0;void 0!==event.wheelDelta?delta=event.wheelDelta:void 0!==event.detail&&(delta=-event.detail),delta>0?this.zoomIn():delta<0&&this.zoomOut()},Viewport.prototype._onTouchStart=function(event){var touches=event.touches;1===touches.length&&(this._isMouseDown=!0,event.preventDefault(),this._mousePosOnMouseDown.x=touches[0].pageX-this._viewportCenter.x,this._targetRotationOnMouseDown.x=this._targetRotation.x,this._mousePosOnMouseDown.y=touches[0].pageY-this._viewportCenter.y,this._targetRotationOnMouseDown.y=this._targetRotation.y)},Viewport.prototype._onTouchMove=function(event){event.preventDefault(),event.stopPropagation();var touches=event.touches;switch(touches.length){case 1:event.preventDefault(),this._mousePos.x=touches[0].pageX-this._viewportCenter.x,this._targetRotation.x=this._targetRotationOnMouseDown.x+.05*(this._mousePos.x-this._mousePosOnMouseDown.x),this._mousePos.y=touches[0].pageY-this._viewportCenter.y,this._targetRotation.y=this._targetRotationOnMouseDown.y+.05*(this._mousePos.y-this._mousePosOnMouseDown.y);break;case 2:var dx=touches[0].pageX-touches[1].pageX,dy=touches[0].pageY-touches[1].pageY,distance=Math.sqrt(dx*dx+dy*dy),pinchEnd=new THREE.Vector2(0,distance),pinchDelta=new THREE.Vector2;pinchDelta.subVectors(pinchEnd,this._pinchStart),pinchDelta.y>0?this.zoomIn():pinchDelta.y<0&&this.zoomOut(),this._pinchStart.copy(pinchEnd);break;case 3:}},Viewport.prototype._onTouchEnd=function(){this._isMouseDown=!1},Viewport.prototype._tick=function(){var _this=this;requestAnimFrame(function(){return _this._tick()}),this._update(),this._draw(),this.options.showStats&&this._stats.update()},Viewport.prototype.rotateY=function(radians){var rotation=this._objectGroup.rotation.y+radians;this._objectGroup.rotation.y=rotation},Viewport.prototype._update=function(){if(this._isGLTF()&&(THREE.GLTFLoader.Animations.update(),THREE.GLTFLoader.Shaders.update(this._scene,this._camera)),this._isVRMode)this._vrControls.update();else{this.rotateY(.1*(this._targetRotation.x-this._objectGroup.rotation.y));var finalRotationY=this._targetRotation.y-this._objectGroup.rotation.x;this._objectGroup.rotation.x<=1&&this._objectGroup.rotation.x>=-1&&(this._objectGroup.rotation.x+=.1*finalRotationY),this._objectGroup.rotation.x>1?this._objectGroup.rotation.x=1:this._objectGroup.rotation.x<-1&&(this._objectGroup.rotation.x=-1);var zoomDelta=.1*(this._targetZoom-this._camera.position.z);this._camera.position.z+=zoomDelta}},Viewport.prototype._draw=function(){this._isVRMode?this._vrEffect.render(this._scene,this._camera):this._renderer.render(this._scene,this._camera)},Viewport.prototype._getWidth=function(){return this._isFullscreen?window.innerWidth:this._$element.width()},Viewport.prototype._getHeight=function(){return this._isFullscreen?window.innerHeight:this._$element.height()},Viewport.prototype._getZoomSpeed=function(){return this._getBoundingWidth()*this.options.zoomSpeed},Viewport.prototype._getMaxZoom=function(){return this._getBoundingWidth()*this.options.maxZoom},Viewport.prototype._getMinZoom=function(){return this._getBoundingWidth()*this.options.minZoom},Viewport.prototype.zoomIn=function(){var targetZoom=this._camera.position.z-this._getZoomSpeed();targetZoom>this._getMinZoom()?this._targetZoom=targetZoom:this._targetZoom=this._getMinZoom()},Viewport.prototype.zoomOut=function(){var targetZoom=this._camera.position.z+this._getZoomSpeed();targetZoom<this._getMaxZoom()?this._targetZoom=targetZoom:this._targetZoom=this._getMaxZoom()},Viewport.prototype.enterVR=function(){var _this=this;this._vrEnabled&&(this._isVRMode=!0,this._prevCameraPosition=this._camera.position.clone(),this._prevCameraRotation=this._camera.rotation.clone(),this._createControls(),this._createRenderer(),this._getVRDisplay().then(function(display){display&&(_this._vrEffect.setVRDisplay(display),_this._vrControls.setVRDisplay(display),_this._vrEffect.setFullScreen(!0))}))},Viewport.prototype.exitVR=function(){this._vrEnabled&&(this._isVRMode=!1,this._camera.position.copy(this._prevCameraPosition),this._camera.rotation.copy(this._prevCameraRotation),this._createRenderer())},Viewport.prototype.toggleVR=function(){this._vrEnabled&&(this._isVRMode?this.exitVR():this.enterVR())},Viewport.prototype.enterFullscreen=function(){if(this.options.fullscreenEnabled){var elem=this._$element[0],requestFullScreen=this._getRequestFullScreen(elem);requestFullScreen&&requestFullScreen.call(elem)}},Viewport.prototype.exitFullscreen=function(){var exitFullScreen=this._getExitFullScreen();exitFullScreen&&exitFullScreen.call(document)},Viewport.prototype._getRequestFullScreen=function(elem){return elem.requestFullscreen?elem.requestFullscreen:elem.msRequestFullscreen?elem.msRequestFullscreen:elem.mozRequestFullScreen?elem.mozRequestFullScreen:!!elem.webkitRequestFullscreen&&elem.webkitRequestFullscreen},Viewport.prototype._getExitFullScreen=function(){return document.exitFullscreen?document.exitFullscreen:document.msExitFullscreen?document.msExitFullscreen:document.mozCancelFullScreen?document.mozCancelFullScreen:!!document.webkitExitFullscreen&&document.webkitExitFullscreen},Viewport.prototype._getAspectRatio=function(){return this._$viewport.width()/this._$viewport.height()},Viewport.prototype._resize=function(){this._$element&&this._$viewport?(this._$element.width(this._getWidth()),this._$element.height(this._getHeight()),this._$viewport.width(this._getWidth()),this._$viewport.height(this._getHeight()),this._viewportCenter.x=this._$viewport.width()/2,this._viewportCenter.y=this._$viewport.height()/2,this._camera.aspect=this._getAspectRatio(),this._camera.updateProjectionMatrix(),this._isVRMode?this._vrEffect.setSize(this._$viewport.width(),this._$viewport.height()):this._renderer.setSize(this._$viewport.width(),this._$viewport.height()),this._$loading.css({left:this._viewportCenter.x-this._$loading.width()/2,top:this._viewportCenter.y-this._$loading.height()/2})):this._$oldie&&this._$oldie.css({left:this._$element.width()/2-this._$oldie.outerWidth()/2,top:this._$element.height()/2-this._$oldie.outerHeight()/2})},Viewport}(_Components.BaseComponent);Virtex.Viewport=Viewport}(Virtex||(Virtex={})),function(Virtex){var Events=function(){function Events(){}return Events}();Events.LOADED="loaded",Virtex.Events=Events}(Virtex||(Virtex={})),function(w){w.Virtex||(w.Virtex=Virtex)}(window)},{}]},{},[1])(1)});
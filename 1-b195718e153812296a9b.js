(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{162:function(A,e,t){"use strict";var a=t(163),i=t(0),n=t.n(i),r=t(1),b=t.n(r),s=t(164),c=t.n(s),o=t(2);function d(A){var e=A.description,t=A.lang,i=A.meta,r=A.keywords,b=A.title;return n.a.createElement(o.StaticQuery,{query:l,render:function(A){var a=e||A.site.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:t},title:b,titleTemplate:"%s | "+A.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:b},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:A.site.siteMetadata.author},{name:"twitter:title",content:b},{name:"twitter:description",content:a}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(i)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:b.a.string,lang:b.a.string,meta:b.a.array,keywords:b.a.arrayOf(b.a.string),title:b.a.string.isRequired},e.a=d;var l="1025518380"},163:function(A){A.exports={data:{site:{siteMetadata:{title:"Ben Wiley",description:"Ben Wiley's site",author:"Ben Wiley"}}}}},165:function(A,e,t){"use strict";t(22),t(177),t(178),t(82);var a=t(183),i=t(0),n=t.n(i),r=t(1),b=t.n(r),s=t(2),c=t(184),o=t.n(c),d=function(A){var e,t=A.data,a=A.filename,i=A.caption,r=A.right,b=t.images.edges,s=Array.isArray(b),c=0;for(b=s?b:b[Symbol.iterator]();;){var d;if(s){if(c>=b.length)break;d=b[c++]}else{if((c=b.next()).done)break;d=c.value}var l=d,w=l.node.childImageSharp;if(w&&w.fluid.originalName===a){e=l.node.childImageSharp;break}}return e?n.a.createElement("figure",{className:"profile_image"+(r?" right":"")},n.a.createElement(o.a,{fluid:e.fluid}),i&&n.a.createElement("figcaption",null,i)):null};e.a=function(A){return n.a.createElement(s.StaticQuery,{query:"3139896817",render:function(e){return n.a.createElement(d,Object.assign({},A,{data:e}))},data:a})},d.propTypes={filename:b.a.string.isRequired,caption:b.a.string,right:b.a.bool.isRequired},d.defaultProps={right:!1}},167:function(A,e,t){var a=t(7),i=t(23),n=t(42),r=t(168),b=t(32).f;A.exports=function(A){var e=i.Symbol||(i.Symbol=n?{}:a.Symbol||{});"_"==A.charAt(0)||A in e||b(e,A,{value:r.f(A)})}},168:function(A,e,t){e.f=t(5)},169:function(A,e,t){var a=t(87),i=t(61).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(A){return a(A,i)}},177:function(A,e,t){t(167)("asyncIterator")},178:function(A,e,t){"use strict";var a=t(7),i=t(33),n=t(24),r=t(13),b=t(25),s=t(179).KEY,c=t(31),o=t(60),d=t(44),l=t(43),w=t(5),f=t(168),g=t(167),E=t(180),p=t(90),u=t(8),B=t(14),j=t(41),h=t(84),Q=t(59),y=t(91),Y=t(181),m=t(182),N=t(32),S=t(40),R=m.f,x=N.f,C=Y.f,D=a.Symbol,I=a.JSON,M=I&&I.stringify,_=w("_hidden"),G=w("toPrimitive"),F={}.propertyIsEnumerable,P=o("symbol-registry"),v=o("symbols"),k=o("op-symbols"),O=Object.prototype,T="function"==typeof D,W=a.QObject,L=!W||!W.prototype||!W.prototype.findChild,U=n&&c(function(){return 7!=y(x({},"a",{get:function(){return x(this,"a",{value:7}).a}})).a})?function(A,e,t){var a=R(O,e);a&&delete O[e],x(A,e,t),a&&A!==O&&x(O,e,a)}:x,z=function(A){var e=v[A]=y(D.prototype);return e._k=A,e},X=T&&"symbol"==typeof D.iterator?function(A){return"symbol"==typeof A}:function(A){return A instanceof D},V=function(A,e,t){return A===O&&V(k,e,t),u(A),e=h(e,!0),u(t),i(v,e)?(t.enumerable?(i(A,_)&&A[_][e]&&(A[_][e]=!1),t=y(t,{enumerable:Q(0,!1)})):(i(A,_)||x(A,_,Q(1,{})),A[_][e]=!0),U(A,e,t)):x(A,e,t)},Z=function(A,e){u(A);for(var t,a=E(e=j(e)),i=0,n=a.length;n>i;)V(A,t=a[i++],e[t]);return A},H=function(A){var e=F.call(this,A=h(A,!0));return!(this===O&&i(v,A)&&!i(k,A))&&(!(e||!i(this,A)||!i(v,A)||i(this,_)&&this[_][A])||e)},J=function(A,e){if(A=j(A),e=h(e,!0),A!==O||!i(v,e)||i(k,e)){var t=R(A,e);return!t||!i(v,e)||i(A,_)&&A[_][e]||(t.enumerable=!0),t}},q=function(A){for(var e,t=C(j(A)),a=[],n=0;t.length>n;)i(v,e=t[n++])||e==_||e==s||a.push(e);return a},K=function(A){for(var e,t=A===O,a=C(t?k:j(A)),n=[],r=0;a.length>r;)!i(v,e=a[r++])||t&&!i(O,e)||n.push(v[e]);return n};T||(b((D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var A=l(arguments.length>0?arguments[0]:void 0),e=function(t){this===O&&e.call(k,t),i(this,_)&&i(this[_],A)&&(this[_][A]=!1),U(this,A,Q(1,t))};return n&&L&&U(O,A,{configurable:!0,set:e}),z(A)}).prototype,"toString",function(){return this._k}),m.f=J,N.f=V,t(169).f=Y.f=q,t(83).f=H,t(85).f=K,n&&!t(42)&&b(O,"propertyIsEnumerable",H,!0),f.f=function(A){return z(w(A))}),r(r.G+r.W+r.F*!T,{Symbol:D});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),AA=0;$.length>AA;)w($[AA++]);for(var eA=S(w.store),tA=0;eA.length>tA;)g(eA[tA++]);r(r.S+r.F*!T,"Symbol",{for:function(A){return i(P,A+="")?P[A]:P[A]=D(A)},keyFor:function(A){if(!X(A))throw TypeError(A+" is not a symbol!");for(var e in P)if(P[e]===A)return e},useSetter:function(){L=!0},useSimple:function(){L=!1}}),r(r.S+r.F*!T,"Object",{create:function(A,e){return void 0===e?y(A):Z(y(A),e)},defineProperty:V,defineProperties:Z,getOwnPropertyDescriptor:J,getOwnPropertyNames:q,getOwnPropertySymbols:K}),I&&r(r.S+r.F*(!T||c(function(){var A=D();return"[null]"!=M([A])||"{}"!=M({a:A})||"{}"!=M(Object(A))})),"JSON",{stringify:function(A){for(var e,t,a=[A],i=1;arguments.length>i;)a.push(arguments[i++]);if(t=e=a[1],(B(e)||void 0!==A)&&!X(A))return p(e)||(e=function(A,e){if("function"==typeof t&&(e=t.call(this,A,e)),!X(e))return e}),a[1]=e,M.apply(I,a)}}),D.prototype[G]||t(15)(D.prototype,G,D.prototype.valueOf),d(D,"Symbol"),d(Math,"Math",!0),d(a.JSON,"JSON",!0)},179:function(A,e,t){var a=t(43)("meta"),i=t(14),n=t(33),r=t(32).f,b=0,s=Object.isExtensible||function(){return!0},c=!t(31)(function(){return s(Object.preventExtensions({}))}),o=function(A){r(A,a,{value:{i:"O"+ ++b,w:{}}})},d=A.exports={KEY:a,NEED:!1,fastKey:function(A,e){if(!i(A))return"symbol"==typeof A?A:("string"==typeof A?"S":"P")+A;if(!n(A,a)){if(!s(A))return"F";if(!e)return"E";o(A)}return A[a].i},getWeak:function(A,e){if(!n(A,a)){if(!s(A))return!0;if(!e)return!1;o(A)}return A[a].w},onFreeze:function(A){return c&&d.NEED&&s(A)&&!n(A,a)&&o(A),A}}},180:function(A,e,t){var a=t(40),i=t(85),n=t(83);A.exports=function(A){var e=a(A),t=i.f;if(t)for(var r,b=t(A),s=n.f,c=0;b.length>c;)s.call(A,r=b[c++])&&e.push(r);return e}},181:function(A,e,t){var a=t(41),i=t(169).f,n={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];A.exports.f=function(A){return r&&"[object Window]"==n.call(A)?function(A){try{return i(A)}catch(e){return r.slice()}}(A):i(a(A))}},182:function(A,e,t){var a=t(83),i=t(59),n=t(41),r=t(84),b=t(33),s=t(86),c=Object.getOwnPropertyDescriptor;e.f=t(24)?c:function(A,e){if(A=n(A),e=r(e,!0),s)try{return c(A,e)}catch(t){}if(b(A,e))return i(!a.f.call(A,e),A[e])}},183:function(A){A.exports={data:{images:{edges:[{node:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAEEAgX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAAB82tU5kBehgL/xAAcEAABBAMBAAAAAAAAAAAAAAAAAQIhMgMEEDH/2gAIAQEAAQUCbIscx32biDvT/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQMBAT8BI//EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAECAQE/ASH/xAAWEAADAAAAAAAAAAAAAAAAAAABECD/2gAIAQEABj8CYr//xAAbEAADAAIDAAAAAAAAAAAAAAAAAREhMRBBYf/aAAgBAQABPyFMvBKQmPKauRVGrOhLBty//9oADAMBAAIAAwAAABAw8ML/xAAYEQACAwAAAAAAAAAAAAAAAAABEBEhQf/aAAgBAwEBPxAUlYv/xAAXEQADAQAAAAAAAAAAAAAAAAARICEx/9oACAECAQE/EDMR/8QAGhABAAMBAQEAAAAAAAAAAAAAAQARITFBcf/aAAgBAQABPxBHbxG6Cy9ip2YddEEpWuj5KozYxjVW39hyf//Z",aspectRatio:1.0957613814756673,src:"/2019.benwiley.org/static/783a1c89d5492e8faa605eeac3d38658/3e5d5/halloween.jpg",srcSet:"/2019.benwiley.org/static/783a1c89d5492e8faa605eeac3d38658/8bbd3/halloween.jpg 150w,\n/2019.benwiley.org/static/783a1c89d5492e8faa605eeac3d38658/03d0a/halloween.jpg 300w,\n/2019.benwiley.org/static/783a1c89d5492e8faa605eeac3d38658/3e5d5/halloween.jpg 600w,\n/2019.benwiley.org/static/783a1c89d5492e8faa605eeac3d38658/769e0/halloween.jpg 698w",srcWebp:"/2019.benwiley.org/static/783a1c89d5492e8faa605eeac3d38658/0b80c/halloween.webp",srcSetWebp:"/2019.benwiley.org/static/783a1c89d5492e8faa605eeac3d38658/bc9bf/halloween.webp 150w,\n/2019.benwiley.org/static/783a1c89d5492e8faa605eeac3d38658/82e06/halloween.webp 300w,\n/2019.benwiley.org/static/783a1c89d5492e8faa605eeac3d38658/0b80c/halloween.webp 600w,\n/2019.benwiley.org/static/783a1c89d5492e8faa605eeac3d38658/90688/halloween.webp 698w",sizes:"(max-width: 600px) 100vw, 600px",originalName:"halloween.jpg"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIBAwQF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAF89CYoSWZ7nwHXKzL/xAAbEAACAwEBAQAAAAAAAAAAAAAAAQIDESESIv/aAAgBAQABBQJNnYnB2uSfDfJukvl21XeoRhorJtf/xAAWEQADAAAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8BI//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8Bm1n/xAAgEAACAgEDBQAAAAAAAAAAAAAAAREhAgMQMRIiUXGR/9oACAEBAAY/AuTJ6matHJUL0W5L6fh4IZ240S1srP/EABwQAQADAQEBAQEAAAAAAAAAAAEAESFBMVGRof/aAAgBAQABPyFw3bMPkN07A4sVeBlHodpLC7AVs5A92LGjx/ZczN+JOn07UoFLenI5+xUX5P/aAAwDAQACAAMAAAAQcBv+/8QAFhEBAQEAAAAAAAAAAAAAAAAAEBEh/9oACAEDAQE/EMgp/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARcf/aAAgBAgEBPxAyZYQi5cb/xAAfEAEAAgICAgMAAAAAAAAAAAABABEhMUFhUdGBkaH/2gAIAQEAAT8Qs1FwQo+4RRxvEXrH7GrS5Rxf1Er2skN9+owkxArAZLaAeRMJbqBVAINb8F7m0gMIUvrUYNPpCz88TJm4CQaIYpEQsU7ep//Z",aspectRatio:.6720516962843296,src:"/2019.benwiley.org/static/9f1e6aeb8f2630d0c7c990f111fb715b/6d077/grad_proof.jpg",srcSet:"/2019.benwiley.org/static/9f1e6aeb8f2630d0c7c990f111fb715b/f254e/grad_proof.jpg 150w,\n/2019.benwiley.org/static/9f1e6aeb8f2630d0c7c990f111fb715b/e4955/grad_proof.jpg 300w,\n/2019.benwiley.org/static/9f1e6aeb8f2630d0c7c990f111fb715b/6d077/grad_proof.jpg 416w",srcWebp:"/2019.benwiley.org/static/9f1e6aeb8f2630d0c7c990f111fb715b/24088/grad_proof.webp",srcSetWebp:"/2019.benwiley.org/static/9f1e6aeb8f2630d0c7c990f111fb715b/7d33f/grad_proof.webp 150w,\n/2019.benwiley.org/static/9f1e6aeb8f2630d0c7c990f111fb715b/4d6df/grad_proof.webp 300w,\n/2019.benwiley.org/static/9f1e6aeb8f2630d0c7c990f111fb715b/24088/grad_proof.webp 416w",sizes:"(max-width: 416px) 100vw, 416px",originalName:"grad_proof.jpg"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAXAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAAG6Lc8r1jAzXLQrP0TQE//EAB4QAAEDBAMAAAAAAAAAAAAAAAIAAQMEESMyEBMz/9oACAEBAAEFApBuRjcY9JWfsdU7YZeIGxmh0p/L/8QAGBEAAwEBAAAAAAAAAAAAAAAAAQMREAL/2gAIAQMBAT8B5XRcDIJn/8QAFxEBAAMAAAAAAAAAAAAAAAAAEBESQf/aAAgBAgEBPwGSun//xAAZEAEBAAMBAAAAAAAAAAAAAAABABAgIUH/2gAIAQEABj8CudiXxwbF/8QAHhABAAICAgMBAAAAAAAAAAAAAQARITFBYVFxoeH/2gAIAQEAAT8htGJ+bUFuCEBf6pdEOZi3iz7Hp7m9ZlJ9sa2LiYNMRXZ5Z//aAAwDAQACAAMAAAAQaA2A/8QAGREAAQUAAAAAAAAAAAAAAAAAAAEQESEx/9oACAEDAQE/ENMy9Uk//8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERMSH/2gAIAQIBAT8QcuDfSXoen//EAB0QAQADAQACAwAAAAAAAAAAAAEAESExQXFhgaH/2gAIAQEAAT8QLLV8XKaxcoT6INZBAW01IPS00HbCGyDjuRCkWwntC0UOlMhsE+hcqf4V5Ygg24uRLm19Ijkr0X5Z/9k=",aspectRatio:.75,src:"/2019.benwiley.org/static/ae1b3f9bcf928beb1c58f500454c6897/3e5d5/293443_2583038215655_372621686_n.jpg",srcSet:"/2019.benwiley.org/static/ae1b3f9bcf928beb1c58f500454c6897/8bbd3/293443_2583038215655_372621686_n.jpg 150w,\n/2019.benwiley.org/static/ae1b3f9bcf928beb1c58f500454c6897/03d0a/293443_2583038215655_372621686_n.jpg 300w,\n/2019.benwiley.org/static/ae1b3f9bcf928beb1c58f500454c6897/3e5d5/293443_2583038215655_372621686_n.jpg 600w,\n/2019.benwiley.org/static/ae1b3f9bcf928beb1c58f500454c6897/9f3cc/293443_2583038215655_372621686_n.jpg 720w",srcWebp:"/2019.benwiley.org/static/ae1b3f9bcf928beb1c58f500454c6897/0b80c/293443_2583038215655_372621686_n.webp",srcSetWebp:"/2019.benwiley.org/static/ae1b3f9bcf928beb1c58f500454c6897/bc9bf/293443_2583038215655_372621686_n.webp 150w,\n/2019.benwiley.org/static/ae1b3f9bcf928beb1c58f500454c6897/82e06/293443_2583038215655_372621686_n.webp 300w,\n/2019.benwiley.org/static/ae1b3f9bcf928beb1c58f500454c6897/0b80c/293443_2583038215655_372621686_n.webp 600w,\n/2019.benwiley.org/static/ae1b3f9bcf928beb1c58f500454c6897/e6c4b/293443_2583038215655_372621686_n.webp 720w",sizes:"(max-width: 600px) 100vw, 600px",originalName:"293443_2583038215655_372621686_n.jpg"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFAv/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABoJ5SRuiBl//EABoQAAEFAQAAAAAAAAAAAAAAAAEAAgMEEhH/2gAIAQEAAQUCI4K7zIsozlak2LLuf//EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAgBAwEBPwGJj//EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAgBAgEBPwGrr//EAB0QAAICAQUAAAAAAAAAAAAAAAABAhEhECIxUXH/2gAIAQEABj8Cskpcp6bVfo5qk30ZWT//xAAcEAEAAgEFAAAAAAAAAAAAAAARAAEhEEFRcfH/2gAIAQEAAT8hpvttmEUseaS4OyAyzaxDD5E//9oADAMBAAIAAwAAABAQH//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/EAy//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAFh/9oACAECAQE/ELbJ/8QAHhABAAICAgMBAAAAAAAAAAAAAQARITFhcVGxwfD/2gAIAQEAAT8QIdQqAteo2zWhNHLyfZ2jSZIbQP1yi4sEvRnDtXcEXNOPU//Z",aspectRatio:1.3333333333333333,src:"/2019.benwiley.org/static/8739d710239ba0a040bbb9dadbfa0c39/3e5d5/tunisia_walk.jpg",srcSet:"/2019.benwiley.org/static/8739d710239ba0a040bbb9dadbfa0c39/8bbd3/tunisia_walk.jpg 150w,\n/2019.benwiley.org/static/8739d710239ba0a040bbb9dadbfa0c39/03d0a/tunisia_walk.jpg 300w,\n/2019.benwiley.org/static/8739d710239ba0a040bbb9dadbfa0c39/3e5d5/tunisia_walk.jpg 600w,\n/2019.benwiley.org/static/8739d710239ba0a040bbb9dadbfa0c39/614ba/tunisia_walk.jpg 900w,\n/2019.benwiley.org/static/8739d710239ba0a040bbb9dadbfa0c39/7138d/tunisia_walk.jpg 1200w,\n/2019.benwiley.org/static/8739d710239ba0a040bbb9dadbfa0c39/70313/tunisia_walk.jpg 1800w,\n/2019.benwiley.org/static/8739d710239ba0a040bbb9dadbfa0c39/ab307/tunisia_walk.jpg 2048w",srcWebp:"/2019.benwiley.org/static/8739d710239ba0a040bbb9dadbfa0c39/0b80c/tunisia_walk.webp",srcSetWebp:"/2019.benwiley.org/static/8739d710239ba0a040bbb9dadbfa0c39/bc9bf/tunisia_walk.webp 150w,\n/2019.benwiley.org/static/8739d710239ba0a040bbb9dadbfa0c39/82e06/tunisia_walk.webp 300w,\n/2019.benwiley.org/static/8739d710239ba0a040bbb9dadbfa0c39/0b80c/tunisia_walk.webp 600w,\n/2019.benwiley.org/static/8739d710239ba0a040bbb9dadbfa0c39/7b897/tunisia_walk.webp 900w,\n/2019.benwiley.org/static/8739d710239ba0a040bbb9dadbfa0c39/51574/tunisia_walk.webp 1200w,\n/2019.benwiley.org/static/8739d710239ba0a040bbb9dadbfa0c39/a42c8/tunisia_walk.webp 1800w,\n/2019.benwiley.org/static/8739d710239ba0a040bbb9dadbfa0c39/24ebf/tunisia_walk.webp 2048w",sizes:"(max-width: 600px) 100vw, 600px",originalName:"tunisia_walk.jpg"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUBAwQG/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGuxYyXWaDDj2S1pqQZg//EAB0QAAIDAAIDAAAAAAAAAAAAAAIDAAEREhMUIjL/2gAIAQEAAQUCTup2zoMnddQC8ehcJBOWpBmDF16L+f/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABURAQEAAAAAAAAAAAAAAAAAABAB/9oACAECAQE/ASn/xAAcEAACAgIDAAAAAAAAAAAAAAABEQAQIUFRYbH/2gAIAQEABj8CK4ntYxCU3uAql1AqFf/EAB0QAQACAgIDAAAAAAAAAAAAAAEAETFBIWEQUbH/2gAIAQEAAT8hY7VnC2vGTENVBe5KXqOoMZ6TcMeDnCEtMzcLDqfSf//aAAwDAQACAAMAAAAQYyZP/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/EMMYhy2//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARMf/aAAgBAgEBPxBcSe2LC//EAB8QAQACAgICAwAAAAAAAAAAAAEAESExQWFRcaGxwf/aAAgBAQABPxCxmChWLCyOlGpyK76z9y8ltfmOlmAnpUNKEW77BOR8y9SxsrTyQXPcwUQObzYblkFC23nX5HaNFGc5uPCn/9k=",aspectRatio:.7498759305210918,src:"/2019.benwiley.org/static/b32329539dfb976578a527088d4ba38b/3e5d5/heardofwhat.jpg",srcSet:"/2019.benwiley.org/static/b32329539dfb976578a527088d4ba38b/8bbd3/heardofwhat.jpg 150w,\n/2019.benwiley.org/static/b32329539dfb976578a527088d4ba38b/03d0a/heardofwhat.jpg 300w,\n/2019.benwiley.org/static/b32329539dfb976578a527088d4ba38b/3e5d5/heardofwhat.jpg 600w,\n/2019.benwiley.org/static/b32329539dfb976578a527088d4ba38b/614ba/heardofwhat.jpg 900w,\n/2019.benwiley.org/static/b32329539dfb976578a527088d4ba38b/7138d/heardofwhat.jpg 1200w,\n/2019.benwiley.org/static/b32329539dfb976578a527088d4ba38b/72e84/heardofwhat.jpg 1511w",srcWebp:"/2019.benwiley.org/static/b32329539dfb976578a527088d4ba38b/0b80c/heardofwhat.webp",srcSetWebp:"/2019.benwiley.org/static/b32329539dfb976578a527088d4ba38b/bc9bf/heardofwhat.webp 150w,\n/2019.benwiley.org/static/b32329539dfb976578a527088d4ba38b/82e06/heardofwhat.webp 300w,\n/2019.benwiley.org/static/b32329539dfb976578a527088d4ba38b/0b80c/heardofwhat.webp 600w,\n/2019.benwiley.org/static/b32329539dfb976578a527088d4ba38b/7b897/heardofwhat.webp 900w,\n/2019.benwiley.org/static/b32329539dfb976578a527088d4ba38b/51574/heardofwhat.webp 1200w,\n/2019.benwiley.org/static/b32329539dfb976578a527088d4ba38b/6ac4a/heardofwhat.webp 1511w",sizes:"(max-width: 600px) 100vw, 600px",originalName:"heardofwhat.jpg"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAE/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwL/2gAMAwEAAhADEAAAARFsQI1jlj//xAAaEAACAwEBAAAAAAAAAAAAAAAAAQIRIRIi/9oACAEBAAEFApQ8qjDuyLxn/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Bp//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPwGRj//EABsQAAEEAwAAAAAAAAAAAAAAAAABEBExEiFR/9oACAEBAAY/Asm6RFC6pv/EABwQAAICAgMAAAAAAAAAAAAAAAERACExQVFxsf/aAAgBAQABPyHJIuA6bBG+YSKHiV6q9xhIUOZ//9oADAMBAAIAAwAAABCoD//EABcRAQADAAAAAAAAAAAAAAAAAAABEVH/2gAIAQMBAT8QnS3/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPxAw/8QAHBABAQABBQEAAAAAAAAAAAAAAREAITFBUWFx/9oACAEBAAE/ENOAOBrTpw6ATJsI58uDhINWkvM8y2QEN3xgww1Jz9yyK279z//Z",aspectRatio:1.4938001458789205,src:"/2019.benwiley.org/static/bb9e3888959a2d68d7b619fdb90a1b20/3e5d5/trustees.jpg",srcSet:"/2019.benwiley.org/static/bb9e3888959a2d68d7b619fdb90a1b20/8bbd3/trustees.jpg 150w,\n/2019.benwiley.org/static/bb9e3888959a2d68d7b619fdb90a1b20/03d0a/trustees.jpg 300w,\n/2019.benwiley.org/static/bb9e3888959a2d68d7b619fdb90a1b20/3e5d5/trustees.jpg 600w,\n/2019.benwiley.org/static/bb9e3888959a2d68d7b619fdb90a1b20/614ba/trustees.jpg 900w,\n/2019.benwiley.org/static/bb9e3888959a2d68d7b619fdb90a1b20/7138d/trustees.jpg 1200w,\n/2019.benwiley.org/static/bb9e3888959a2d68d7b619fdb90a1b20/70313/trustees.jpg 1800w,\n/2019.benwiley.org/static/bb9e3888959a2d68d7b619fdb90a1b20/ab307/trustees.jpg 2048w",srcWebp:"/2019.benwiley.org/static/bb9e3888959a2d68d7b619fdb90a1b20/0b80c/trustees.webp",srcSetWebp:"/2019.benwiley.org/static/bb9e3888959a2d68d7b619fdb90a1b20/bc9bf/trustees.webp 150w,\n/2019.benwiley.org/static/bb9e3888959a2d68d7b619fdb90a1b20/82e06/trustees.webp 300w,\n/2019.benwiley.org/static/bb9e3888959a2d68d7b619fdb90a1b20/0b80c/trustees.webp 600w,\n/2019.benwiley.org/static/bb9e3888959a2d68d7b619fdb90a1b20/7b897/trustees.webp 900w,\n/2019.benwiley.org/static/bb9e3888959a2d68d7b619fdb90a1b20/51574/trustees.webp 1200w,\n/2019.benwiley.org/static/bb9e3888959a2d68d7b619fdb90a1b20/a42c8/trustees.webp 1800w,\n/2019.benwiley.org/static/bb9e3888959a2d68d7b619fdb90a1b20/24ebf/trustees.webp 2048w",sizes:"(max-width: 600px) 100vw, 600px",originalName:"trustees.jpg"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwACBP/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAU1ypnSxyP/EABgQAAMBAQAAAAAAAAAAAAAAAAECEQAS/9oACAEBAAEFAhzoIsKjMSFVov8A/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAES/9oACAEDAQE/AYRCP//EABYRAAMAAAAAAAAAAAAAAAAAAAACE//aAAgBAgEBPwGjFGP/xAAXEAEBAQEAAAAAAAAAAAAAAAAAASEQ/9oACAEBAAY/AmJzEf/EABwQAAMAAgMBAAAAAAAAAAAAAAABEUFRITFhkf/aAAgBAQABPyGu/g6shGD7nMHwNLi+iatH/9oADAMBAAIAAwAAABDz7//EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAEDAQE/ELn/AP/EABcRAAMBAAAAAAAAAAAAAAAAAAARIQH/2gAIAQIBAT8QojXQ/8QAGxABAQADAQEBAAAAAAAAAAAAAREAITFBUcH/2gAIAQEAAT8QXLB1knVPcjEoaNX2ZN+pc7kgaXrP3ClApZFz/9k=",aspectRatio:1.3342019543973942,src:"/2019.benwiley.org/static/e111d87a924ddda363515799e1140354/3e5d5/tunisia_desert.jpg",srcSet:"/2019.benwiley.org/static/e111d87a924ddda363515799e1140354/8bbd3/tunisia_desert.jpg 150w,\n/2019.benwiley.org/static/e111d87a924ddda363515799e1140354/03d0a/tunisia_desert.jpg 300w,\n/2019.benwiley.org/static/e111d87a924ddda363515799e1140354/3e5d5/tunisia_desert.jpg 600w,\n/2019.benwiley.org/static/e111d87a924ddda363515799e1140354/614ba/tunisia_desert.jpg 900w,\n/2019.benwiley.org/static/e111d87a924ddda363515799e1140354/7138d/tunisia_desert.jpg 1200w,\n/2019.benwiley.org/static/e111d87a924ddda363515799e1140354/70313/tunisia_desert.jpg 1800w,\n/2019.benwiley.org/static/e111d87a924ddda363515799e1140354/ab307/tunisia_desert.jpg 2048w",srcWebp:"/2019.benwiley.org/static/e111d87a924ddda363515799e1140354/0b80c/tunisia_desert.webp",srcSetWebp:"/2019.benwiley.org/static/e111d87a924ddda363515799e1140354/bc9bf/tunisia_desert.webp 150w,\n/2019.benwiley.org/static/e111d87a924ddda363515799e1140354/82e06/tunisia_desert.webp 300w,\n/2019.benwiley.org/static/e111d87a924ddda363515799e1140354/0b80c/tunisia_desert.webp 600w,\n/2019.benwiley.org/static/e111d87a924ddda363515799e1140354/7b897/tunisia_desert.webp 900w,\n/2019.benwiley.org/static/e111d87a924ddda363515799e1140354/51574/tunisia_desert.webp 1200w,\n/2019.benwiley.org/static/e111d87a924ddda363515799e1140354/a42c8/tunisia_desert.webp 1800w,\n/2019.benwiley.org/static/e111d87a924ddda363515799e1140354/24ebf/tunisia_desert.webp 2048w",sizes:"(max-width: 600px) 100vw, 600px",originalName:"tunisia_desert.jpg"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIEBQED/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAB9qkZjuOkYWubTmC7/8QAHBAAAgICAwAAAAAAAAAAAAAAAAIBEQMTEiMy/9oACAEBAAEFAskWmuznlNsuL1tQs02bzDtB/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/ATIz/8QAFxEBAQEBAAAAAAAAAAAAAAAAARACMf/aAAgBAgEBPwFEmuz/xAAdEAACAQQDAAAAAAAAAAAAAAAAASECERIxIlGB/9oACAEBAAY/AiL5FuUdGChMWa2aEyrwhn//xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhQVExYf/aAAgBAQABPyHMHpmWOSe3c3OGEW4MC4EXJeo2fDEE7HfzvLgUL7P/2gAMAwEAAgADAAAAEK8AAv/EABkRAAIDAQAAAAAAAAAAAAAAAAABESExcf/aAAgBAwEBPxBIWUbfBYf/xAAYEQEBAAMAAAAAAAAAAAAAAAABABEhMf/aAAgBAgEBPxBIC3cIDF//xAAeEAEBAAMAAQUAAAAAAAAAAAABEQAhMXFBYaGx0f/aAAgBAQABPxB1hWK8xWFDpfL2wMFoF9YG2ncH0Ia2v5gK5TvqeuFRuCI6mdRJPnLBDQfNT6wcSIAWf//Z",aspectRatio:.9965260545905708,src:"/2019.benwiley.org/static/7a7d0252f959d8788935a7250c49b04a/3e5d5/ben_new.jpg",srcSet:"/2019.benwiley.org/static/7a7d0252f959d8788935a7250c49b04a/8bbd3/ben_new.jpg 150w,\n/2019.benwiley.org/static/7a7d0252f959d8788935a7250c49b04a/03d0a/ben_new.jpg 300w,\n/2019.benwiley.org/static/7a7d0252f959d8788935a7250c49b04a/3e5d5/ben_new.jpg 600w,\n/2019.benwiley.org/static/7a7d0252f959d8788935a7250c49b04a/614ba/ben_new.jpg 900w,\n/2019.benwiley.org/static/7a7d0252f959d8788935a7250c49b04a/7138d/ben_new.jpg 1200w,\n/2019.benwiley.org/static/7a7d0252f959d8788935a7250c49b04a/70313/ben_new.jpg 1800w,\n/2019.benwiley.org/static/7a7d0252f959d8788935a7250c49b04a/f0d2c/ben_new.jpg 2008w",srcWebp:"/2019.benwiley.org/static/7a7d0252f959d8788935a7250c49b04a/0b80c/ben_new.webp",srcSetWebp:"/2019.benwiley.org/static/7a7d0252f959d8788935a7250c49b04a/bc9bf/ben_new.webp 150w,\n/2019.benwiley.org/static/7a7d0252f959d8788935a7250c49b04a/82e06/ben_new.webp 300w,\n/2019.benwiley.org/static/7a7d0252f959d8788935a7250c49b04a/0b80c/ben_new.webp 600w,\n/2019.benwiley.org/static/7a7d0252f959d8788935a7250c49b04a/7b897/ben_new.webp 900w,\n/2019.benwiley.org/static/7a7d0252f959d8788935a7250c49b04a/51574/ben_new.webp 1200w,\n/2019.benwiley.org/static/7a7d0252f959d8788935a7250c49b04a/a42c8/ben_new.webp 1800w,\n/2019.benwiley.org/static/7a7d0252f959d8788935a7250c49b04a/4ad7c/ben_new.webp 2008w",sizes:"(max-width: 600px) 100vw, 600px",originalName:"ben_new.jpg"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQCAwUB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAY9RrNsATNC6VImWf//EABsQAAMAAwEBAAAAAAAAAAAAAAECAwASMgQR/9oACAEBAAEFAjXTFuCSFbLKWoAFII1rJnWfm+IBoJ8ZXr//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAgEAACAQMEAwAAAAAAAAAAAAAAAQIRITEQEiIyUmFx/9oACAEBAAY/AktscHSInRCp4oyKhGUb2OWfQkR+a//EAB4QAQACAgEFAAAAAAAAAAAAAAEAESExgRBBYXGh/9oACAEBAAE/ITVti2ko3wg45DsTiAcQjtTGIhPEMxVCr1iXtW2aUw7WIOk0ep//2gAMAwEAAgADAAAAELTEAP/EABYRAAMAAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPxCs/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERMf/aAAgBAgEBPxBqpx//xAAeEAEAAwEAAQUAAAAAAAAAAAABABEhMUFRYbHB8P/aAAgBAQABPxDDI6g2Tif5YpdNMi7YZWXEdfKEoEYtFe5EVEaeOsBUKgngs+9iisTSZ6Fyl8Epd0qwFk2nxAmf16z/2Q==",aspectRatio:.75,src:"/2019.benwiley.org/static/661afb0d0f72b70c348a581ee859a75d/3e5d5/game_jam.jpg",srcSet:"/2019.benwiley.org/static/661afb0d0f72b70c348a581ee859a75d/8bbd3/game_jam.jpg 150w,\n/2019.benwiley.org/static/661afb0d0f72b70c348a581ee859a75d/03d0a/game_jam.jpg 300w,\n/2019.benwiley.org/static/661afb0d0f72b70c348a581ee859a75d/3e5d5/game_jam.jpg 600w,\n/2019.benwiley.org/static/661afb0d0f72b70c348a581ee859a75d/614ba/game_jam.jpg 900w,\n/2019.benwiley.org/static/661afb0d0f72b70c348a581ee859a75d/7138d/game_jam.jpg 1200w,\n/2019.benwiley.org/static/661afb0d0f72b70c348a581ee859a75d/70313/game_jam.jpg 1800w,\n/2019.benwiley.org/static/661afb0d0f72b70c348a581ee859a75d/2ceac/game_jam.jpg 1962w",srcWebp:"/2019.benwiley.org/static/661afb0d0f72b70c348a581ee859a75d/0b80c/game_jam.webp",srcSetWebp:"/2019.benwiley.org/static/661afb0d0f72b70c348a581ee859a75d/bc9bf/game_jam.webp 150w,\n/2019.benwiley.org/static/661afb0d0f72b70c348a581ee859a75d/82e06/game_jam.webp 300w,\n/2019.benwiley.org/static/661afb0d0f72b70c348a581ee859a75d/0b80c/game_jam.webp 600w,\n/2019.benwiley.org/static/661afb0d0f72b70c348a581ee859a75d/7b897/game_jam.webp 900w,\n/2019.benwiley.org/static/661afb0d0f72b70c348a581ee859a75d/51574/game_jam.webp 1200w,\n/2019.benwiley.org/static/661afb0d0f72b70c348a581ee859a75d/a42c8/game_jam.webp 1800w,\n/2019.benwiley.org/static/661afb0d0f72b70c348a581ee859a75d/880de/game_jam.webp 1962w",sizes:"(max-width: 600px) 100vw, 600px",originalName:"game_jam.jpg"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUBAgT/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGBdrRYXkaf/8QAGxAAAgMAAwAAAAAAAAAAAAAAAQMAAhESEyH/2gAIAQEAAQUC4ZMNh5AxliLsWrtM/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAES/9oACAEDAQE/Aa0//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAES/9oACAECAQE/AYy//8QAGxAAAQQDAAAAAAAAAAAAAAAAAAEQESECEiL/2gAIAQEABj8CKxpo2F6SG//EABoQAQACAwEAAAAAAAAAAAAAAAEAESExQWH/2gAIAQEAAT8h0YuXi9NpBJ2LE19YupNqqtuYDuJ//9oADAMBAAIAAwAAABAIP//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQMBAT8QOdCAF//EABcRAQEBAQAAAAAAAAAAAAAAAAEAEUH/2gAIAQIBAT8QXGdX/8QAGxABAQADAAMAAAAAAAAAAAAAAREAITFBUWH/2gAIAQEAAT8Qt8Kz1cdwVhoTtcMbQ7EuzNMxahI+E5jWlQsRPmWOUQvK5//Z",aspectRatio:1.3330388692579505,src:"/2019.benwiley.org/static/6e2341dbb7cb5e5752b14c6e867933e8/3e5d5/cassette_presentation.jpg",srcSet:"/2019.benwiley.org/static/6e2341dbb7cb5e5752b14c6e867933e8/8bbd3/cassette_presentation.jpg 150w,\n/2019.benwiley.org/static/6e2341dbb7cb5e5752b14c6e867933e8/03d0a/cassette_presentation.jpg 300w,\n/2019.benwiley.org/static/6e2341dbb7cb5e5752b14c6e867933e8/3e5d5/cassette_presentation.jpg 600w,\n/2019.benwiley.org/static/6e2341dbb7cb5e5752b14c6e867933e8/614ba/cassette_presentation.jpg 900w,\n/2019.benwiley.org/static/6e2341dbb7cb5e5752b14c6e867933e8/7138d/cassette_presentation.jpg 1200w,\n/2019.benwiley.org/static/6e2341dbb7cb5e5752b14c6e867933e8/70313/cassette_presentation.jpg 1800w,\n/2019.benwiley.org/static/6e2341dbb7cb5e5752b14c6e867933e8/a6333/cassette_presentation.jpg 3018w",srcWebp:"/2019.benwiley.org/static/6e2341dbb7cb5e5752b14c6e867933e8/0b80c/cassette_presentation.webp",srcSetWebp:"/2019.benwiley.org/static/6e2341dbb7cb5e5752b14c6e867933e8/bc9bf/cassette_presentation.webp 150w,\n/2019.benwiley.org/static/6e2341dbb7cb5e5752b14c6e867933e8/82e06/cassette_presentation.webp 300w,\n/2019.benwiley.org/static/6e2341dbb7cb5e5752b14c6e867933e8/0b80c/cassette_presentation.webp 600w,\n/2019.benwiley.org/static/6e2341dbb7cb5e5752b14c6e867933e8/7b897/cassette_presentation.webp 900w,\n/2019.benwiley.org/static/6e2341dbb7cb5e5752b14c6e867933e8/51574/cassette_presentation.webp 1200w,\n/2019.benwiley.org/static/6e2341dbb7cb5e5752b14c6e867933e8/a42c8/cassette_presentation.webp 1800w,\n/2019.benwiley.org/static/6e2341dbb7cb5e5752b14c6e867933e8/65efa/cassette_presentation.webp 3018w",sizes:"(max-width: 600px) 100vw, 600px",originalName:"cassette_presentation.jpg"}}}}]}}}},184:function(A,e,t){"use strict";var a=t(9);e.__esModule=!0,e.default=void 0;var i,n=a(t(6)),r=a(t(10)),b=a(t(88)),s=a(t(89)),c=a(t(0)),o=a(t(1)),d=function(A){var e=(0,s.default)({},A);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},l={},w=function(A){var e=d(A),t=e.fluid?e.fluid.src:e.fixed.src;return l[t]||!1},f=[];var g=function(A,e){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(A){A.forEach(function(A){f.forEach(function(e){e[0]===A.target&&(A.isIntersecting||A.intersectionRatio>0)&&(i.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),i).observe(A),f.push([A,e])},E=function(A){var e=A.src?'src="'+A.src+'" ':'src="" ',t=A.sizes?'sizes="'+A.sizes+'" ':"",a=A.srcSetWebp?"<source type='image/webp' srcSet=\""+A.srcSetWebp+'" '+t+"/>":"",i=A.srcSet?'<source srcSet="'+A.srcSet+'" '+t+"/>":"",n=A.title?'title="'+A.title+'" ':"",r=A.alt?'alt="'+A.alt+'" ':'alt="" ',b=A.width?'width="'+A.width+'" ':"",s=A.height?'height="'+A.height+'" ':"",c=A.opacity?A.opacity:"1";return"<picture>"+a+i+"<img "+b+s+e+r+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(A.transitionDelay?A.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},p=c.default.forwardRef(function(A,e){var t=A.style,a=A.onLoad,i=A.onError,n=(0,b.default)(A,["style","onLoad","onError"]);return c.default.createElement("img",(0,s.default)({},n,{onLoad:a,onError:i,ref:e,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))});p.propTypes={style:o.default.object,onError:o.default.func,onLoad:o.default.func};var u=function(A){function e(e){var t;t=A.call(this,e)||this;var a=!0,i=!1,n=e.fadeIn,b=w(e);!b&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,i=!0),"undefined"==typeof window&&(a=!1),e.critical&&(a=!0,i=!1);var s=!(t.props.critical&&!t.props.fadeIn);return t.state={isVisible:a,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:s,seenBefore:b},t.imageRef=c.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,r.default)((0,r.default)(t))),t.handleRef=t.handleRef.bind((0,r.default)((0,r.default)(t))),t}(0,n.default)(e,A);var t=e.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:w(this.props)}),this.props.critical){var A=this.imageRef.current;A&&A.complete&&this.handleImageLoaded()}},t.handleRef=function(A){var e=this;this.state.IOSupported&&A&&g(A,function(){e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:w(e.props)}),e.setState({isVisible:!0,imgLoaded:!1})})},t.handleImageLoaded=function(){var A,e,t;A=this.props,e=d(A),t=e.fluid?e.fluid.src:e.fixed.src,l[t]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var A=d(this.props),e=A.title,t=A.alt,a=A.className,i=A.style,n=void 0===i?{}:i,r=A.imgStyle,b=void 0===r?{}:r,o=A.placeholderStyle,l=void 0===o?{}:o,w=A.placeholderClassName,f=A.fluid,g=A.fixed,u=A.backgroundColor,B=A.Tag,j="boolean"==typeof u?"lightgray":u,h=(0,s.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},b,l),Q=(0,s.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},b),y={title:e,alt:this.state.isVisible?"":t,style:h,className:w};if(f){var Y=f;return c.default.createElement(B,{className:(a||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(Y.srcSet)},c.default.createElement(B,{style:{width:"100%",paddingBottom:100/Y.aspectRatio+"%"}}),Y.base64&&c.default.createElement(p,(0,s.default)({src:Y.base64},y)),Y.tracedSVG&&c.default.createElement(p,(0,s.default)({src:Y.tracedSVG},y)),j&&c.default.createElement(B,{title:e,style:{backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,Y.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:Y.srcSetWebp,sizes:Y.sizes}),c.default.createElement("source",{srcSet:Y.srcSet,sizes:Y.sizes}),c.default.createElement(p,{alt:t,title:e,src:Y.src,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,s.default)({alt:t,title:e},Y))}}))}if(g){var m=g,N=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:m.width,height:m.height},n);return"inherit"===n.display&&delete N.display,c.default.createElement(B,{className:(a||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(m.srcSet)},m.base64&&c.default.createElement(p,(0,s.default)({src:m.base64},y)),m.tracedSVG&&c.default.createElement(p,(0,s.default)({src:m.tracedSVG},y)),j&&c.default.createElement(B,{title:e,style:{backgroundColor:j,width:m.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:m.height}}),this.state.isVisible&&c.default.createElement("picture",null,m.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:m.srcSetWebp,sizes:m.sizes}),c.default.createElement("source",{srcSet:m.srcSet,sizes:m.sizes}),c.default.createElement(p,{alt:t,title:e,width:m.width,height:m.height,src:m.src,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,s.default)({alt:t,title:e,width:m.width,height:m.height},m))}}))}return null},e}(c.default.Component);u.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var B=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string}),j=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string});u.propTypes={resolutions:B,sizes:j,fixed:B,fluid:j,fadeIn:o.default.bool,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onStartLoad:o.default.func,Tag:o.default.string};var h=u;e.default=h}}]);
//# sourceMappingURL=1-b195718e153812296a9b.js.map
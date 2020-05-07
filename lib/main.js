module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"PerformanceAnalytics",(function(){return G})),n.d(t,"ErrorAnalytics",(function(){return H}));var r={t:!1,i:15e3},o=window,i=o.console,a=document,u=o.navigator,c=o.performance,s=function(){return u.deviceMemory},f=function(){return u.hardwareConcurrency},l=function(){return c&&!!c.getEntriesByType&&!!c.now&&!!c.mark},d="4g",v=!1,p=function(){return!!(f()&&f()<=4)||!!(s()&&s()<=4)},m=function(e,t){return!!p()||!!["slow-2g","2g","3g"].includes(e)||!!t},y={o:!1},g=function(e){a.hidden&&(e(),y.o=a.hidden)},k=function(e){return parseFloat(e.toFixed(2))},T=function(e){return"number"!=typeof e?null:k(e/Math.pow(1024,2))},b=function(e,t,n){var i;i=function(){y.o&&e.indexOf("Final")<0||!r.analyticsTracker||r.analyticsTracker({metricName:e,data:t,eventProperties:n||{},navigatorInformation:u?{deviceMemory:s()||0,hardwareConcurrency:f()||0,serviceWorkerStatus:"serviceWorker"in u?u.serviceWorker.controller?"controlled":"supported":"unsupported",isLowEndDevice:p(),isLowEndExperience:m(d,v)}:{}})},"requestIdleCallback"in o?o.requestIdleCallback(i,{timeout:3e3}):i()},w=function(e,t,n){Object.keys(t).forEach((function(e){"number"==typeof t[e]&&(t[e]=k(t[e]))})),b(e,t,n)},h=function(e,t){var n=k(e);n<=r.i&&n>0&&b(t,n)},S=function(e){c.measure(e,"mark_"+e+"_start","mark_"+e+"_end");var t=c.getEntriesByName(e).pop();return t&&"measure"===t.entryType?t.duration:-1},_={},E={value:0},x={value:0},j={value:0},M={value:{beacon:0,css:0,fetch:0,img:0,other:0,script:0,total:0,xmlhttprequest:0}},O={value:0},P=function(e){var t=e.pop();t&&!t.u&&t.value&&(E.value+=t.value)},B={},D=function(e,t){try{var n=new PerformanceObserver((function(e){t(e.getEntries())}));return n.observe({type:e,buffered:!0}),n}catch(e){i.warn("Perfume.js:",e)}return null},q=function(e){B[e].disconnect(),delete B[e]},F=function(e){var t=e.pop();t&&h(t.duration,"fid"),q(1),h(j.value,"lcp"),B[3].takeRecords(),h(E.value,"cls"),h(O.value,"tbt"),setTimeout((function(){h(O.value,"tbt5S")}),5e3),setTimeout((function(){h(O.value,"tbt10S"),w("dataConsumption",M.value)}),1e4)},L=function(e){e.forEach((function(e){if(!("self"!==e.name||e.startTime<x.value)){var t=e.duration-50;t>0&&(O.value+=t)}}))},z=function(e){e.forEach((function(e){"first-paint"===e.name?h(e.startTime,"fp"):"first-contentful-paint"===e.name&&(x.value=e.startTime,h(x.value,"fcp"),B[4]=D("longtask",L),q(0))}))},C=function(e){var t=e.pop();t&&(j.value=t.renderTime||t.loadTime)},W=function(e){e.forEach((function(e){if(r.t&&w("resourceTiming",e),e.decodedBodySize&&e.initiatorType){var t=e.decodedBodySize/1e3;M.value[e.initiatorType]+=t,M.value.total+=t}}))},I=function(){h(j.value,"lcpFinal"),q(2),B[3].takeRecords(),h(E.value,"clsFinal"),q(3),h(O.value,"tbtFinal"),q(4)},N=function(e){var t="usageDetails"in e?e.usageDetails:{};w("storageEstimate",{quota:T(e.quota),usage:T(e.usage),caches:T(t.caches),indexedDB:T(t.indexedDB),serviceWorker:T(t.serviceWorkerRegistrations)})},R=function(){function e(e){void 0===e&&(e={}),this.s="5.0.0-rc.17",r.analyticsTracker=e.analyticsTracker,r.t=!!e.resourceTiming,r.i=e.maxMeasureTime||r.i,l()&&("PerformanceObserver"in o&&(B[0]=D("paint",z),B[1]=D("first-input",F),B[2]=D("largest-contentful-paint",C),r.t&&D("resource",W),B[3]=D("layout-shift",P)),void 0!==a.hidden&&a.addEventListener("visibilitychange",g.bind(this,I)),w("navigationTiming",function(){if(!l())return{};var e=c.getEntriesByType("navigation")[0];if(!e)return{};var t=e.responseStart,n=e.responseEnd;return{fetchTime:n-e.fetchStart,workerTime:e.workerStart>0?n-e.workerStart:0,totalTime:n-e.requestStart,downloadTime:n-t,timeToFirstByte:t-e.requestStart,headerSize:e.transferSize-e.encodedBodySize||0,dnsLookupTime:e.domainLookupEnd-e.domainLookupStart}}()),w("networkInformation",function(){if("connection"in u){var e=u.connection;return"object"!=typeof e?{}:(d=e.effectiveType,v=!!e.saveData,{downlink:e.downlink,effectiveType:e.effectiveType,rtt:e.rtt,saveData:!!e.saveData})}return{}}()),u&&u.storage&&u.storage.estimate().then(N))}return e.prototype.start=function(e){l()&&!_[e]&&(_[e]=!0,c.mark("mark_"+e+"_start"),y.o=!1)},e.prototype.end=function(e,t){void 0===t&&(t={}),l()&&_[e]&&(c.mark("mark_"+e+"_end"),delete _[e],w(e,{data:k(S(e))},t))},e.prototype.endPaint=function(e,t){var n=this;setTimeout((function(){n.end(e,t)}))},e.prototype.clear=function(e){delete _[e],c.clearMarks&&(c.clearMarks("mark_"+e+"_start"),c.clearMarks("mark_"+e+"_end"))},e}();function A(e,t){window.gtag&&window.gtag("event",e,t)}var $=function(e,t=!1){const{metricName:n,data:r}=e;if(t)o=n,i=r,console.log(o,i);else{A("timing_complete",{name:n,value:r,event_category:"rum"})}var o,i};var G=function(e=!1){return new R({analyticsTracker:t=>$(t,e)})};var H=function(){"object"==typeof window.onerror&&(window.onerror=(e,t,n)=>{A("exception",{description:`${n}: ${e}`})})}}]);
(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),r=c(11),i=c.n(r),o=(c(17),c(7)),s=(c.p,c(18),c(19),c(1)),l="dedeb7c6599b636ce8aa4a3e222a687f";var j=function(e){var t=Object(a.useState)(),c=Object(o.a)(t,2),n=c[0],r=c[1],i=Object(a.useState)(!0),j=Object(o.a)(i,2),h=(j[0],j[1],Object(a.useState)("")),b=Object(o.a)(h,2),u=b[0],d=b[1];return fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e.lat,"&lon=").concat(e.long,"&appid=").concat(l)).then((function(e){return e.json()})).then((function(e){r(e.main.temp),console.log(e.main.temp)})),fetch("https://api.openweathermap.org/geo/1.0/reverse?lat=".concat(e.lat,"&lon=").concat(e.long,"&limit=5&appid=").concat(l)).then((function(e){return e.json()})).then((function(e){return d(e[0].name)})),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"cityName"}),Object(s.jsxs)("p",{children:["It is currently ",Math.floor(1.8*n-459.67)+"\xb0F"," degrees in ",u]})]})};var h=function(e){var t=Object(a.useState)([]),c=Object(o.a)(t,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e.lat,"&lon=").concat(e.long,"&exclude=daily,current,minutely,hourly&appid=").concat("dedeb7c6599b636ce8aa4a3e222a687f")).then((function(e){return e.json()})).then((function(e){return r(e[0])}))}),[]),Object(s.jsx)("div",{children:null==n?Object(s.jsx)("h4",{style:{color:"black"},children:"No Current Weather Alerts"}):Object(s.jsx)("h4",{children:n})})},b=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"navTitle",children:[Object(s.jsx)("li",{className:"gitHub",children:Object(s.jsxs)("a",{href:"https://github.com/JMLINE/WeatherApp",target:"_blank",children:[" ",Object(s.jsx)("i",{className:"fab fa-github fa-2x"})]})}),Object(s.jsx)("div",{className:"newTitle",children:"Weather App"}),Object(s.jsx)("div",{className:"current",children:0===e.lat?"":Object(s.jsx)(j,{lat:e.lat,long:e.long})}),Object(s.jsx)(h,{lat:e.lat,long:e.long})]})})},u=c(25),d=c(26),O=c(27),p=c(28),f=c(29),x=c(30),g=c(31),m=c(32);var v=function(){var e=Object(a.useState)("NaNa"),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!0),i=Object(o.a)(r,2),l=i[0],j=i[1],h=Object(a.useState)(""),b=Object(o.a)(h,2),v=b[0],N=b[1],S=Object(a.useState)(""),y=Object(o.a)(S,2),w=(y[0],y[1],Object(a.useState)("")),C=Object(o.a)(w,2),F=C[0],k=C[1];function I(){j(!0!==l)}return Object(s.jsxs)("div",{children:[Object(s.jsx)(u.a,{onSubmit:function(e){e.preventDefault(),fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(v,"&appid=").concat("dedeb7c6599b636ce8aa4a3e222a687f")).then((function(e){return e.json()})).then((function(e){n(e.main.temp),k(e.weather[0].description)}))},children:Object(s.jsx)(d.a,{children:Object(s.jsx)(O.a,{children:Object(s.jsxs)(p.a,{sm:"12",md:{size:6,offset:3},children:[Object(s.jsxs)(f.a,{children:[Object(s.jsx)(x.a,{htmlFor:"city"}),Object(s.jsx)(g.a,{name:"city",placeholder:"Search a City",required:!0,onChange:function(e){N(e.target.value)},value:v})]}),Object(s.jsx)(p.a,{sm:"12",md:{size:6,offset:3},children:Object(s.jsx)(m.a,{children:"Search"})})]})})})}),Object(s.jsx)("div",{className:"cityName"}),"NaNa"===c?"":Object(s.jsxs)("h3",{children:["It is currently ",!0===l?Math.floor(1.8*c-459.67)+"\xb0F":Math.floor(c-273.12)+"\xb0C"," degrees in ",v," with ",F,"."]}),Object(s.jsx)("br",{}),"NaNa"===c?"":!0===l?Object(s.jsx)(m.a,{outline:!0,color:"success",style:{width:"20%"},onClick:I,children:"Prefer Celcius?"}):Object(s.jsx)(m.a,{outline:!0,color:"primary",style:{width:"20%"},onClick:I,children:"Prefer Fahrenheit?"}),Object(s.jsx)("br",{}),"NaNa"===c?"":Object(s.jsx)(m.a,{outline:!0,color:"danger",type:"submit",style:{width:"20%"},onClick:function(){n("NaNa"),N("")},children:"Clear"})]})};var N=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(0),i=Object(o.a)(r,2),l=i[0],j=i[1];return navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){n(e.coords.latitude.toFixed(2)),j(e.coords.longitude.toFixed(2)),localStorage.setItem("lat",c),localStorage.setItem("long",l)})),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(b,{lat:c,long:l}),Object(s.jsx)(v,{})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))};c(23);i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root")),S()}},[[24,1,2]]]);
//# sourceMappingURL=main.c20296b0.chunk.js.map
(this.webpackJsonpbytearraytopdf=this.webpackJsonpbytearraytopdf||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),l=a.n(o),c=(a(10),a(4)),i=a(3),s=a.n(i);a(11);var u=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Byte Array to PDF Converter"),r.a.createElement("p",null,"Convert Byte Array to PDF online using a free decoding tool which allows you to decode Byte Array as PDF and display it directly in the browser. In addition, you will receive some basic information about this PDF (MIME type, extension, size). And, of course, you will have a special link to download the PDF to your device."),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"flex-between"},r.a.createElement("h3",null,"Byte Array*"),r.a.createElement("div",{className:"flex-start"},r.a.createElement("p",{onClick:function(){var e=document.getElementById("byte-arr-area");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),alert("Copied ! ")}},"Copy"),r.a.createElement("p",{onClick:function(){o("")}},"Clear"))),r.a.createElement("textarea",{id:"byte-arr-area",className:"text-area",name:"data",value:a,placeholder:"Example : 37, 80, 68, 70, 45, 49, 46, 52, 10, 37",onChange:function(e){var t=e.target.value;o(t)}})),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){if(""===a)alert("Input must not be empty !");else{var e=a.trim().replace(/ /g,"");e.replace(/\r?\n|\r/g,""),function(e){for(var t=atob(e),a=[],n=0;n<t.length;n+=512){for(var r=t.slice(n,n+512),o=new Array(r.length),l=0;l<r.length;l++)o[l]=r.charCodeAt(l);var c=new Uint8Array(o);a.push(c)}var i=new Blob(a,{type:"application/pdf"});i=s()(e,"application/pdf");var u=URL.createObjectURL(i);window.open(u)}(function(e){for(var t,a="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=new Uint8Array(e),o=r.byteLength,l=o%3,c=o-l,i=0;i<c;i+=3)a+=n[(16515072&(t=r[i]<<16|r[i+1]<<8|r[i+2]))>>18]+n[(258048&t)>>12]+n[(4032&t)>>6]+n[63&t];return 1===l?a+=n[(252&(t=r[c]))>>2]+n[(3&t)<<4]+"==":2===l&&(a+=n[(64512&(t=r[c]<<8|r[c+1]))>>10]+n[(1008&t)>>4]+n[(15&t)<<2]+"="),a}(JSON.parse("["+e+"]")))}}},"Convert Byte Array to PDF"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.63c88c38.chunk.js.map
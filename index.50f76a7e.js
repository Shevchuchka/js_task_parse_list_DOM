function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,a=Array(r);e<r;e++)a[e]=t[e];return a}var r,e,a,n=document.querySelectorAll("li");r=[],n.forEach(function(t){r.push({name:t.textContent.trim(),position:t.getAttribute("data-position"),salary:t.getAttribute("data-salary"),age:t.getAttribute("data-age")})});var o=(e=function(r){if(Array.isArray(r))return t(r)}(n)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(r,e){if(r){if("string"==typeof r)return t(r,void 0);var a=Object.prototype.toString.call(r).slice(8,-1);if("Object"===a&&r.constructor&&(a=r.constructor.name),"Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(r,void 0)}}(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=function(t){return t.slice(1).split(",").join("")},e.sort(function(t,r){var e=a(t.getAttribute("data-salary"));return a(r.getAttribute("data-salary"))-e})),i=document.querySelector("ul");i.innerHTML="",o.forEach(function(t){var r=document.createElement("li");r.textContent=t.textContent,r.setAttribute("data-position",t.getAttribute("data-position")),r.setAttribute("data-salary",t.getAttribute("data-salary")),r.setAttribute("data-age",t.getAttribute("data-age")),i.appendChild(r)});
//# sourceMappingURL=index.50f76a7e.js.map

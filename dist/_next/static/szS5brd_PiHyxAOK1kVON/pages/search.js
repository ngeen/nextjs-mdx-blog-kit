(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"19J2":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){var e=n("eOhz");return{page:e.default||e}}])},D02B:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"search-layout"},t)}},eOhz:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",function(){return u}),n.d(t,"default",function(){return i});var a=n("q1tI"),r=n.n(a),l=n("D02B"),c=n("lTUs"),u={title:"Search",tags:["javascript","python"],layout:"page",publishDate:"2011-01-01",modifiedDate:!1,seoDescription:"This page lists all posts with a given tag."};function i(e){var t,n,a,u=e.allData.filter(function(e){return"post"==e.type});return r.a.createElement(l.a,null,r.a.createElement("h1",null,"Posts tagged: ",r.a.createElement("span",null,e.router.query.q)),(t=u,n=e.router.query.q,(a=t.filter(function(e){return e.tags.includes(n)}).map(function(e,t){return r.a.createElement(c.a,{key:t,post:e,index:t})})).length?a:r.a.createElement("h2",{key:"not-found-headline"},"No results")))}i.defaultProps={allData:[]}},lTUs:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("q1tI"),r=n.n(a),l=n("YFqc"),c=n.n(l),u=n("OoXJ");function i(e){var t=e.post,n=e.index;return r.a.createElement(r.a.Fragment,{key:"post-list-".concat(n)},r.a.createElement("h2",{key:"".concat(t.name,"-headline")},r.a.createElement(c.a,{prefetch:!0,href:"/blog/".concat(t.name)},r.a.createElement("a",null,t.title))),r.a.createElement(u.a,{tags:t.tags}))}}},[["19J2",1,0]]]);
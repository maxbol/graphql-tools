(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{192:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),c=(a(0),a(200)),l={id:"_loaders_json_file_src_index_.jsonfileloader",title:"JsonFileLoader",sidebar_label:"JsonFileLoader"},o={unversionedId:"api/classes/_loaders_json_file_src_index_.jsonfileloader",id:"api/classes/_loaders_json_file_src_index_.jsonfileloader",isDocsHomePage:!1,title:"JsonFileLoader",description:"This loader loads documents and type definitions from JSON files.",source:"@site/docs/api/classes/_loaders_json_file_src_index_.jsonfileloader.md",slug:"/api/classes/_loaders_json_file_src_index_.jsonfileloader",permalink:"/docs/api/classes/_loaders_json_file_src_index_.jsonfileloader",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/classes/_loaders_json_file_src_index_.jsonfileloader.md",version:"current",sidebar_label:"JsonFileLoader",sidebar:"someSidebar",previous:{title:"HoistField",permalink:"/docs/api/classes/_wrap_src_index_.hoistfield"},next:{title:"MapFields",permalink:"/docs/api/classes/_wrap_src_index_.mapfields"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Index",id:"index",children:[{value:"Methods",id:"methods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"canLoad",id:"canload",children:[]},{value:"canLoadSync",id:"canloadsync",children:[]},{value:"load",id:"load",children:[]},{value:"loadSync",id:"loadsync",children:[]},{value:"loaderId",id:"loaderid",children:[]}]}],i={rightToc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This loader loads documents and type definitions from JSON files."),Object(c.b)("p",null,"The JSON file can be the result of an introspection query made against a schema:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const schema = await loadSchema('schema-introspection.json', {\n  loaders: [\n    new JsonFileLoader()\n  ]\n});\n")),Object(c.b)("p",null,"Or it can be a ",Object(c.b)("inlineCode",{parentName:"p"},"DocumentNode")," object representing a GraphQL document or type definitions:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const documents = await loadDocuments('queries/*.json', {\n  loaders: [\n    new GraphQLFileLoader()\n  ]\n});\n")),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"JsonFileLoader"))),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/interfaces/_utils_src_index_.loader"}),"Loader"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/classes/_loaders_json_file_src_index_.jsonfileloader#canload"}),"canLoad")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/classes/_loaders_json_file_src_index_.jsonfileloader#canloadsync"}),"canLoadSync")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/classes/_loaders_json_file_src_index_.jsonfileloader#load"}),"load")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/classes/_loaders_json_file_src_index_.jsonfileloader#loadsync"}),"loadSync")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/classes/_loaders_json_file_src_index_.jsonfileloader#loaderid"}),"loaderId"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"canload"},"canLoad"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"canLoad"),"(",Object(c.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/utils#schemapointersingle"}),"SchemaPointerSingle"),", ",Object(c.b)("inlineCode",{parentName:"p"},"options"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/_loaders_json_file_src_index_.jsonfileloaderoptions"}),"JsonFileLoaderOptions"),"): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039boolean\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/json-file/src/index.ts#L48"}),"packages/loaders/json-file/src/index.ts:48"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"pointer")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/modules/utils#schemapointersingle"}),"SchemaPointerSingle"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"options")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/_loaders_json_file_src_index_.jsonfileloaderoptions"}),"JsonFileLoaderOptions"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039boolean\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"canloadsync"},"canLoadSync"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"canLoadSync"),"(",Object(c.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/utils#schemapointersingle"}),"SchemaPointerSingle"),", ",Object(c.b)("inlineCode",{parentName:"p"},"options"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/_loaders_json_file_src_index_.jsonfileloaderoptions"}),"JsonFileLoaderOptions"),"): ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/json-file/src/index.ts#L59"}),"packages/loaders/json-file/src/index.ts:59"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"pointer")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/modules/utils#schemapointersingle"}),"SchemaPointerSingle"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"options")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/_loaders_json_file_src_index_.jsonfileloaderoptions"}),"JsonFileLoaderOptions"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"load"},"load"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"load"),"(",Object(c.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/utils#schemapointersingle"}),"SchemaPointerSingle"),", ",Object(c.b)("inlineCode",{parentName:"p"},"options"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/_loaders_json_file_src_index_.jsonfileloaderoptions"}),"JsonFileLoaderOptions"),"): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/interfaces/_utils_src_index_.source"}),"Source"),"\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/json-file/src/index.ts#L71"}),"packages/loaders/json-file/src/index.ts:71"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"pointer")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/modules/utils#schemapointersingle"}),"SchemaPointerSingle"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"options")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/_loaders_json_file_src_index_.jsonfileloaderoptions"}),"JsonFileLoaderOptions"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/interfaces/_utils_src_index_.source"}),"Source"),"\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"loadsync"},"loadSync"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"loadSync"),"(",Object(c.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/utils#schemapointersingle"}),"SchemaPointerSingle"),", ",Object(c.b)("inlineCode",{parentName:"p"},"options"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/_loaders_json_file_src_index_.jsonfileloaderoptions"}),"JsonFileLoaderOptions"),"): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/interfaces/_utils_src_index_.source"}),"Source"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/json-file/src/index.ts#L82"}),"packages/loaders/json-file/src/index.ts:82"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"pointer")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/modules/utils#schemapointersingle"}),"SchemaPointerSingle"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"options")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/_loaders_json_file_src_index_.jsonfileloaderoptions"}),"JsonFileLoaderOptions"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/interfaces/_utils_src_index_.source"}),"Source"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"loaderid"},"loaderId"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"loaderId"),"(): ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Implementation of ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/interfaces/_utils_src_index_.loader"}),"Loader"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/json-file/src/index.ts#L44"}),"packages/loaders/json-file/src/index.ts:44"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string")))}s.isMDXComponent=!0},200:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=s(a),j=n,O=p["".concat(l,".").concat(j)]||p[j]||d[j]||c;return a?r.a.createElement(O,o({ref:t},i,{components:a})):r.a.createElement(O,o({ref:t},i))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=j;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var i=2;i<c;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);
import{r as o,e as c,b as h,d as u,j as e,B as p,L as b,c as g}from"./index-BLCHSEHv.js";import j from"./_...all_-DNKZwXmj.js";const v=t=>{var{src:i,config:d,children:f}=t,x=function(s,r){var l={};for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&r.indexOf(a)<0&&(l[a]=s[a]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function"){var n=0;for(a=Object.getOwnPropertySymbols(s);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(s,a[n])&&(l[a[n]]=s[a[n]])}return l}(t,["src","config","children"]);const m=Object.assign(Object.assign({},{}),d);return o.useEffect(()=>{const s=document.createElement("script");return s.src="https://unpkg.com/@ruffle-rs/ruffle",s.async=!0,s.onload=()=>{window.RufflePlayer=window.RufflePlayer||{},window.RufflePlayer.config=m},document.body.appendChild(s),()=>{document.body.removeChild(s)}},[]),c.createElement(c.Fragment,null,c.createElement("object",Object.assign({data:i},x),c.createElement("param",{name:"movie",value:i}),f||c.createElement("p",null,"Your browser does not support WASM,"," ",c.createElement("a",{href:"https://ruffle.rs/",rel:"noopener noreferrer"},"see Ruffle documentation")," ","for more information.")))},w=v;function E(){const[t,i]=o.useState(null),d=o.useRef(null),[f,x]=o.useState(!1),{id:m}=h();return o.useEffect(()=>{const s=u.find(r=>r.id===m);s&&(x(!1),i(s))},[m]),o.useEffect(()=>{const s=()=>{try{const l=window.adsbygoogle;console.log({adsbygoogle:l}),l.push({})}catch(l){console.error(l)}};let r=setInterval(()=>{window.adsbygoogle&&(s(),clearInterval(r))},300);return()=>{clearInterval(r)}},[]),e.jsx(e.Fragment,{children:t?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"text-left flex p-[25px] items-center justify-center rounded-md w-[62.5vw]",children:e.jsxs("div",{children:[e.jsxs("div",{className:"w-[62.5vw] h-[35vw] relative",ref:d,children:[f?e.jsx(e.Fragment,{children:t.embed?e.jsx("iframe",{src:t.embed,className:"border-none absolute left-0 top-0 w-full h-[calc(100%-40px)]"}):t.flash?e.jsx(w,{className:"border-none absolute left-0 top-0 w-full h-[calc(100%-40px)]",src:t.flash,config:{autoplay:"on",preloader:!1,backgroundColor:"#000",contextMenu:"off"}}):e.jsx(e.Fragment,{children:e.jsx("p",{className:"text-[#bbb]",children:"An error occured, try again and if that doesn't work please contact us."})})}):e.jsx("div",{className:"absolute left-0 top-0 w-full h-[calc(100%-40px)] bg-[#061819] flex justify-center items-center text-center",children:e.jsxs("section",{children:[e.jsxs("div",{className:"hidden xl:block",children:[e.jsx("img",{src:t.image,className:"aspect-[5/3] rounded-xl h-40 mb-2 object-cover"}),e.jsxs("h2",{className:"text-xl flex items-center justify-center gap-2 mb-2",children:[e.jsx("img",{src:"/logo.png",className:"h-5 w-5"}),t.title]})]}),e.jsxs(p,{onClick:()=>{x(!0);const s=localStorage.getItem("play-history");let r=[];s&&(r=s.split(","));const l=r.indexOf(t.id);l>-1&&r.splice(l,1),r=[t.id,...r],localStorage.setItem("play-history",r.join(","))},children:[e.jsx("svg",{height:20,width:20,viewBox:"0 0 24 24",fill:"#fff",className:"mr-px",children:e.jsx("path",{d:"M8 5v14l11-7z"})}),"Play"]})]})}),e.jsxs("div",{className:"absolute bottom-0 w-full bg-[#091011] h-[40px] overflow-hidden left-0 inline-flex items-center text-sm",children:[e.jsxs("div",{className:"flex justify-between gap-[10px] items-center ml-[10px]",children:[e.jsx("img",{src:"/logo.png",height:25,width:25}),e.jsx("b",{children:t.title})]}),e.jsx("div",{className:"absolute right-0",children:e.jsx("button",{className:"bg-[rgba(0,0,0,0.5)] border-none text-white cursor-pointer transition-all duration-300 rounded-none w-[40px] h-[40px] hover:bg-[rgba(0,0,0,0.8)]",onClick:()=>{var s;document.fullscreenElement?document.exitFullscreen():(s=d.current)==null||s.requestFullscreen()},children:e.jsx("svg",{viewBox:"0 0 24 24",height:20,width:20,fill:"#fff",children:e.jsx("path",{d:"M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z"})})})})]})]}),e.jsxs("div",{className:"flex justify-center flex-col-reverse xl:flex-row xl:justify-between items-start w-[62.5vw] relative p-[25px] bg-[#1e1f30]",children:[e.jsxs("div",{className:"xl:w-1/2",children:[e.jsx("h2",{className:"font-bold text-2xl my-5",children:t.title}),e.jsx("br",{}),e.jsx(b,{to:`/?ref=${t.id}`,children:e.jsx(g,{className:"text-xs",sx:{textTransform:"none",marginBottom:"25px",background:"linear-gradient(90deg, rgba(0,195,255,1) 0%, rgba(255,255,28,1) 100%)",borderRadius:"20px",color:"#0b1516",padding:"8px 14px !important",minWidth:"unset"},children:"Browse More"})}),e.jsx("br",{}),e.jsxs("div",{className:"mb-4",children:[e.jsx("b",{children:"Developers"}),": ",t.developers," ",e.jsx("br",{}),e.jsx("b",{children:"Released"}),": ",t.released," ",e.jsx("br",{}),e.jsx("b",{children:"Technology"}),": ",t.technology," ",e.jsx("br",{})]}),e.jsx("hr",{className:"bg-[#0c0d14] rounded-[25px] h-[5px]"}),e.jsx("h3",{className:"text-lg my-4",children:"Description"}),e.jsx("p",{className:"text-[#bbb] text-sm",children:t.description})]}),e.jsx("div",{className:"xl:w-1/2 w-full relative flex justify-center items-center",children:e.jsx("ins",{className:"adsbygoogle block min-h-64 min-w-96 scale-[0.65] xl:scale-95 bg-[#0c0d14] rounded-md border-none shadow-xl","date-ad-client":"ca-pub-9319396643474304","data-ad-slot":"6536714452","data-ad-format":"auto","data-full-width-responsive":"true"})})]})]})})}),e.jsx("h2",{className:"text-xl mb-4",id:"browse-more",children:"Suggested games"}),e.jsx("p",{className:"text-[#bbb] text-sm",children:"This feature is currently under maintenance."})]}):e.jsx(e.Fragment,{children:e.jsx(j,{})})})}export{E as default};

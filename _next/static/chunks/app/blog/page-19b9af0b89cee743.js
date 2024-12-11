(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[831],{9025:(e,t,a)=>{Promise.resolve().then(a.bind(a,894))},7401:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var s=a(2115);let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((e,t,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===t).join(" ").trim()};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,s.forwardRef)((e,t)=>{let{color:a="currentColor",size:l=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:c="",children:d,iconNode:h,...u}=e;return(0,s.createElement)("svg",{ref:t,...i,width:l,height:l,stroke:a,strokeWidth:o?24*Number(n)/Number(l):n,className:r("lucide",c),...u},[...h.map(e=>{let[t,a]=e;return(0,s.createElement)(t,a)}),...Array.isArray(d)?d:[d]])}),o=(e,t)=>{let a=(0,s.forwardRef)((a,i)=>{let{className:o,...c}=a;return(0,s.createElement)(n,{ref:i,iconNode:t,className:r("lucide-".concat(l(e)),o),...c})});return a.displayName="".concat(e),a}},8427:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]])},5236:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]])},2104:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]])},7725:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]])},894:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var s=a(5155),l=a(2115),r=a(9345),i=a(4370),n=a(9675);let o=[{id:1,title:"My First Blog Post",excerpt:"This is a sample blog post about my journey into the world of blogging. It's a reflection on my initial thoughts and aspirations.",date:"June 15, 2024",tags:["Personal","Development"]},{id:2,title:"Web Development Insights",excerpt:"Exploring the latest trends in web development, including modern frameworks and tools.",date:"July 1, 2024",tags:["Technology","Web Dev"]},{id:3,title:"How to Start a Successful Blog",excerpt:"Learn the essential steps and strategies to create and grow a blog that resonates with your audience.",date:"August 10, 2024",tags:["Blogging","Tips"]},{id:4,title:"The Future of Artificial Intelligence",excerpt:"Dive into the possibilities and ethical considerations surrounding AI in our daily lives.",date:"September 5, 2024",tags:["AI","Technology"]},{id:5,title:"Balancing Work and Life as a Developer",excerpt:"Tips and personal experiences on maintaining a healthy work-life balance in the tech industry.",date:"October 15, 2024",tags:["Personal","Work-Life Balance"]},{id:6,title:"Understanding Tailwind CSS",excerpt:"A beginner-friendly guide to mastering Tailwind CSS for rapid UI development.",date:"November 20, 2024",tags:["CSS","Web Dev"]}],c=()=>{let[e,t]=(0,l.useState)(!1),[a,c]=(0,l.useState)(null);(0,l.useEffect)(()=>{let e=localStorage.getItem("theme"),a=window.matchMedia("(prefers-color-scheme: dark)").matches;("dark"===e||!e&&a)&&t(!0)},[]);let d=a?o.filter(e=>e.tags.includes(a)):o;return(0,s.jsxs)("div",{className:"".concat(e?"dark bg-gray-900 text-white":"bg-white text-black"," min-h-screen transition-colors duration-300"),children:[(0,s.jsx)(r.A,{isDarkMode:e,toggleDarkMode:()=>{let a=!e;t(a),localStorage.setItem("theme",a?"dark":"light"),document.documentElement.classList.toggle("dark",a)}}),(0,s.jsx)("div",{className:"container mx-auto px-4 py-24",children:(0,s.jsxs)(n.P.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5},className:"max-w-4xl mx-auto",children:[(0,s.jsx)("h1",{className:"text-4xl font-bold mb-8 text-center dark:text-white",children:"My Blog"}),(0,s.jsx)("div",{className:"flex justify-center space-x-4 mb-8",children:Array.from(new Set(o.flatMap(e=>e.tags))).map(e=>(0,s.jsx)(n.P.button,{onClick:()=>c(e===a?null:e),whileHover:{scale:1.1},whileTap:{scale:.95},className:"px-4 py-2 rounded-full ".concat(a===e?"bg-blue-500 text-white":"bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"),children:e},e))}),d.map(e=>(0,s.jsxs)(n.P.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.5},className:"bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6",children:[(0,s.jsx)("h2",{className:"text-2xl font-semibold mb-2 dark:text-white",children:e.title}),(0,s.jsx)("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:e.excerpt}),(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:e.date}),(0,s.jsx)("div",{className:"space-x-2",children:e.tags.map(e=>(0,s.jsx)("span",{className:"bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs",children:e},e))})]})]},e.id)),0===d.length&&(0,s.jsx)("p",{className:"text-center text-gray-500 dark:text-gray-400",children:"No blog posts found."})]})}),(0,s.jsx)(i.A,{})]})}},4370:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var s=a(5155);a(2115);let l=()=>(0,s.jsx)("footer",{className:"bg-blue-600 dark:bg-blue-900 text-white py-4 text-center",children:(0,s.jsx)("p",{children:"\xa9 2024 Lovish Manchanda. All Rights Reserved."})})},9345:(e,t,a)=>{"use strict";a.d(t,{A:()=>h});var s=a(5155);a(2115);var l=a(9675),r=a(5236),i=a(8427),n=a(7725),o=a(2104),c=a(3999),d=a(6046);let h=e=>{let{isDarkMode:t,toggleDarkMode:a}=e,{currentUser:h,logout:u}=(0,c.A)(),x=(0,d.useRouter)(),g=e=>{if(e.includes("#")){let t=e.split("#")[1],a=document.getElementById(t);a&&a.scrollIntoView({behavior:"smooth"})}else x.push(e)},m=async()=>{if(h)try{await u(),x.push("/")}catch(e){console.error("Logout failed",e)}else x.push("/auth")};return(0,s.jsx)(l.P.nav,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.5},className:"fixed top-0 left-0 w-full z-50 ".concat(t?"bg-gray-800 text-white":"bg-white text-black"," shadow-md"),children:(0,s.jsxs)("div",{className:"container mx-auto flex justify-between items-center p-4",children:[(0,s.jsx)("button",{onClick:()=>g("/"),className:"text-2xl font-bold",children:"Lovish Manchanda"}),(0,s.jsxs)("div",{className:"flex items-center space-x-6",children:[[{name:"Home",href:"/"},{name:"About",href:"/#about"},{name:"Skills",href:"/#skills"},{name:"Projects",href:"/#projects"},{name:"Education",href:"/#education"},{name:"Blog",href:"/blog"},{name:"Contact",href:"/#contact"}].map(e=>(0,s.jsx)(l.P.div,{whileHover:{scale:1.1},whileTap:{scale:.95},children:(0,s.jsx)("button",{onClick:()=>g(e.href),className:"hover:text-blue-500 transition-colors ".concat(t?"hover:text-blue-300":"hover:text-blue-700"),children:e.name})},e.name)),(0,s.jsx)(l.P.button,{onClick:m,whileHover:{scale:1.1},whileTap:{scale:.95},className:"flex items-center space-x-2 px-3 py-2 rounded-full ".concat(h?t?"bg-red-700 hover:bg-red-600 text-white":"bg-red-500 hover:bg-red-600 text-white":t?"bg-blue-700 hover:bg-blue-600 text-white":"bg-blue-500 hover:bg-blue-600 text-white"),children:h?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{size:20}),(0,s.jsx)("span",{children:"Logout"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{size:20}),(0,s.jsx)("span",{children:"Login"})]})}),(0,s.jsx)(l.P.button,{onClick:a,whileHover:{scale:1.1},whileTap:{scale:.95},className:"ml-2",children:t?(0,s.jsx)(n.A,{className:"text-yellow-500"}):(0,s.jsx)(o.A,{className:"text-gray-800"})})]})]})})}},3999:(e,t,a)=>{"use strict";a.d(t,{A:()=>o}),a(5155);var s=a(2115),l=a(399),r=a(9904);let i=(0,r.Dk)().length?(0,r.Sx)():(0,r.Wp)({apiKey:"AIzaSyD53X5KFkX9nfs8J3y8wObT2WtXNGGC32k",authDomain:"portfolio-lovish.firebaseapp.com",projectId:"portfolio-lovish",storageBucket:"portfolio-lovish.firebasestorage.app",messagingSenderId:"66190612910",appId:"1:66190612910:web:0803350d1203ee64a8103f"});(0,l.xI)(i);let n=(0,s.createContext)({currentUser:null,signup:async()=>{},login:async()=>{},logout:async()=>{}}),o=()=>(0,s.useContext)(n)}},e=>{var t=t=>e(e.s=t);e.O(0,[882,594,441,517,358],()=>t(9025)),_N_E=e.O()}]);
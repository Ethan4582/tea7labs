import { PROJECTS_DATA } from "./content_data";

export interface FeatureItem {
   label: string;
   isLink?: boolean;
   link?: string;
}

export interface Project {
   title: string;
   image: string;
   Video?: string;
   year: number;
   Logo?: string;Tags: ["EXPERIENCE", "3D", "WEBGL"],
   href: string;
   slug: string;
   bgColor: string;

   // Blog post specific fields
   liveLink?: string;
   codeLink?: string;
   subHeading?: string;
   aboutText?: string;
   features?: FeatureItem[];
   assets?: string[];
}



const rawProjects: Project[] = [
   {
title:"Neon Frame",
image:"https://picsum.photos/id/1011/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/neon-frame",
slug:"neon-frame",
bgColor:"#1f1f2e"
},
{
title:"Silent Code",
image:"https://picsum.photos/id/1015/900/1200",
year:2023,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/silent-code",
slug:"silent-code",
bgColor:"#242433"
},
{
title:"Pixel Motion",
image:"https://picsum.photos/id/1016/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/pixel-motion",
slug:"pixel-motion",
bgColor:"#1b2735"
},
{
title:"Shadow Drift",
image:"https://picsum.photos/id/1020/900/1200",
year:2023,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/shadow-drift",
slug:"shadow-drift",
bgColor:"#2c2f3a"
},
{
title:"Liquid Light",
image:"https://picsum.photos/id/1024/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/liquid-light",
slug:"liquid-light",
bgColor:"#1c1f2b"
},
{
title:"Orbit Design",
image:"https://picsum.photos/id/1027/900/1200",
year:2023,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/orbit-design",
slug:"orbit-design",
bgColor:"#1e2b2e"
},
{
title:"Glass Pulse",
image:"https://picsum.photos/id/1033/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/glass-pulse",
slug:"glass-pulse",
bgColor:"#232323"
},
{
title:"Echo Render",
image:"https://picsum.photos/id/1035/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/echo-render",
slug:"echo-render",
bgColor:"#292f36"
},
{
title:"Future Thread",
image:"https://picsum.photos/id/1037/900/1200",
year:2023,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/future-thread",
slug:"future-thread",
bgColor:"#21232c"
},
{
title:"Blur Phase",
image:"https://picsum.photos/id/1040/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/blur-phase",
slug:"blur-phase",
bgColor:"#202028"
},
{
title:"Vector Path",
image:"https://picsum.photos/id/1041/900/1200",
year:2023,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/vector-path",
slug:"vector-path",
bgColor:"#1a2634"
},
{
title:"Nova Screen",
image:"https://picsum.photos/id/1043/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/nova-screen",
slug:"nova-screen",
bgColor:"#1c2a22"
},
{
title:"Crystal Depth",
image:"https://picsum.photos/id/1050/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/crystal-depth",
slug:"crystal-depth",
bgColor:"#2b1f2b"
},
{
title:"Digital Still",
image:"https://picsum.photos/id/1052/900/1200",
year:2023,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/digital-still",
slug:"digital-still",
bgColor:"#23282e"
},
{
title:"Reflex Tone",
image:"https://picsum.photos/id/1060/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/reflex-tone",
slug:"reflex-tone",
bgColor:"#1f2c24"
},
{
title:"Dynamic Layer",
image:"https://picsum.photos/id/1067/900/1200",
year:2023,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/dynamic-layer",
slug:"dynamic-layer",
bgColor:"#2d2323"
},
{
title:"Aurora Frame",
image:"https://picsum.photos/id/1070/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/aurora-frame",
slug:"aurora-frame",
bgColor:"#1d2431"
},
{
title:"Quantum Grid",
image:"https://picsum.photos/id/1080/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/quantum-grid",
slug:"quantum-grid",
bgColor:"#1c1c22"
},
{
title:"Sonic Canvas",
image:"https://picsum.photos/id/1084/900/1200",
year:2023,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/sonic-canvas",
slug:"sonic-canvas",
bgColor:"#232c29"
},
{
title:"Neural Blur",
image:"https://picsum.photos/id/1081/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/neural-blur",
slug:"neural-blur",
bgColor:"#2a2020"
},
{
title:"Stellar Drift",
image:"https://picsum.photos/id/1082/900/1200",
year:2023,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/stellar-drift",
slug:"stellar-drift",
bgColor:"#1a2a33"
},
{
title:"Optic Pulse",
image:"https://picsum.photos/id/1083/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/optic-pulse",
slug:"optic-pulse",
bgColor:"#1c2230"
},
{
title:"Gamma Motion",
image:"https://picsum.photos/id/1085/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/gamma-motion",
slug:"gamma-motion",
bgColor:"#252525"
},
{
title:"Fluid Echo",
image:"https://picsum.photos/id/1089/900/1200",
year:2023,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/fluid-echo",
slug:"fluid-echo",
bgColor:"#2a2a30"
},
{
title:"Binary Horizon",
image:"https://picsum.photos/id/109/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/binary-horizon",
slug:"binary-horizon",
bgColor:"#1f2528"
},
{
title:"Nova Geometry",
image:"https://picsum.photos/id/110/900/1200",
year:2023,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/nova-geometry",
slug:"nova-geometry",
bgColor:"#1b1e27"
},
{
title:"Magnet Shift",
image:"https://picsum.photos/id/111/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/magnet-shift",
slug:"magnet-shift",
bgColor:"#2b2d35"
},
{
title:"Spectrum Flow",
image:"https://picsum.photos/id/112/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/spectrum-flow",
slug:"spectrum-flow",
bgColor:"#1e2830"
},
{
title:"Photon Surface",
image:"https://picsum.photos/id/113/900/1200",
year:2023,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/photon-surface",
slug:"photon-surface",
bgColor:"#1d2121"
},
{
title:"Matrix Edge",
image:"https://picsum.photos/id/114/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/matrix-edge",
slug:"matrix-edge",
bgColor:"#1a1f2c"
},
{
title:"Pulse Archive",
image:"https://picsum.photos/id/115/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/pulse-archive",
slug:"pulse-archive",
bgColor:"#242424"
},
{
title:"Zenith Motion",
image:"https://picsum.photos/id/116/900/1200",
year:2023,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/zenith-motion",
slug:"zenith-motion",
bgColor:"#1e2626"
},
{
title:"Infinite Layer",
image:"https://picsum.photos/id/117/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/infinite-layer",
slug:"infinite-layer",
bgColor:"#23212c"
},
{
title:"Signal Render",
image:"https://picsum.photos/id/118/900/1200",
year:2024,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/signal-render",
slug:"signal-render",
bgColor:"#1c2029"
},
{
title:"Horizon Bloom",
image:"https://picsum.photos/id/119/900/1200",
year:2023,
Logo:"",
Tags: ["EXPERIENCE", "3D", "WEBGL"],
href:"/projects/horizon-bloom",
slug:"horizon-bloom",
bgColor:"#222831"
}

   
   
];

export const projects: Project[] = rawProjects.map((p) => ({
   ...p,
   liveLink: p.liveLink || "https://example.com/live",
   codeLink: p.codeLink || "https://example.com/code",
   subHeading: p.subHeading || "Groundbreaking insights deserve an experience to match. A content-first digital report that allows users to explore insights at their own pace.",
   aboutText: p.aboutText || "The platform distills complex material into sharp, confident narratives that are as engaging as they are informative. Layered with bold visuals and seamless animation, the experience brings expertise to life in a way that feels natural, exciting, and built for discovery. Created for longevity, the experience evolves with ongoing research and thought leadership.",
   features: p.features || [
      { label: "Website / Demo", isLink: true, link: "https://example.com" },
      { label: "AI" },
      { label: "POSITIONING" },
      { label: "TOOL" },
      { label: "MOTION" },
      { label: "blogpost" }
   ],
   assets: p.assets || [
      p.image,
      p.image,
      p.image,
      p.image,
      p.image
   ]
}));

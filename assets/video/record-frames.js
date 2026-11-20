const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
await p.goto('file://'+process.cwd()+'/intro.html');await p.waitForLoadState('networkidle');await p.evaluate(()=>document.fonts.ready);
fs.mkdirSync('frames',{recursive:true});const fps=30,T=16;
for(let i=0;i<fps*T;i++){await p.evaluate(t=>render(t),i/fps);await p.screenshot({path:`frames/f${String(i).padStart(4,'0')}.jpg`,type:'jpeg',quality:92});}
await b.close()})();

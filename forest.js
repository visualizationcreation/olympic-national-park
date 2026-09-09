/* Independent, gapless background for Feel & Experience. Bella remains unchanged. */
'use strict';
const forest = (() => {
 const panel=document.querySelector('#forest-controls'),toggle=document.querySelector('#forest-enabled'),slider=document.querySelector('#forest-volume'),status=document.querySelector('#forest-status');
 let enabled=true,level=.35,context,buffer,pending,source,gain,serial=0;
 try{const saved=JSON.parse(localStorage.getItem('olympic-forest-settings'));if(saved&&typeof saved.enabled==='boolean')enabled=saved.enabled;if(saved&&Number.isFinite(saved.level))level=Math.max(0,Math.min(1,saved.level));}catch{}
 toggle.checked=enabled;slider.value=level;
 const wanted=()=>mode==='feel'&&enabled&&level>0&&!audio.paused&&!audio.ended&&!busy;
 const time=()=>chapterIndex>=0?course.chapters[chapterIndex].start+audio.currentTime:globalTime;
 function persist(){try{localStorage.setItem('olympic-forest-settings',JSON.stringify({enabled,level}))}catch{}}
 function unlock(){if(mode!=='feel'||!enabled)return;context ||= new (window.AudioContext||window.webkitAudioContext)();if(context.state==='suspended')context.resume().catch(()=>{});}
 async function load(){
  if(buffer)return buffer;if(pending)return pending;
  pending=(async()=>{
   let bytes;
   if(location.protocol==='file:'){
    if(!window.OLYMPIC_FOREST_AUDIO)await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='forest-audio-data.js';script.onload=resolve;script.onerror=()=>{script.remove();reject(Error('Forest sound could not load.'))};document.head.append(script)});
    bytes=Uint8Array.from(atob(window.OLYMPIC_FOREST_AUDIO),c=>c.charCodeAt(0)).buffer;
   }else{const response=await fetch('olympic-forest-drone-v1.mp3');if(!response.ok)throw Error('Forest sound could not load.');bytes=await response.arrayBuffer()}
   buffer=await context.decodeAudioData(bytes);return buffer;
  })().catch(e=>{pending=null;throw e});return pending;
 }
 function stop(immediate=false){
  serial++;if(!source)return;const old=source,oldGain=gain;source=null;gain=null;
  const now=context.currentTime;oldGain.gain.cancelScheduledValues(now);oldGain.gain.setValueAtTime(oldGain.gain.value,now);oldGain.gain.linearRampToValueAtTime(0,now+(immediate?.02:.35));old.stop(now+(immediate?.03:.4));old.onended=()=>{old.disconnect();oldGain.disconnect()};
 }
 function setLevel(){if(gain){const remaining=Math.max(0,course.duration-time()),target=level*Math.min(1,remaining/4);gain.gain.setTargetAtTime(target,context.currentTime,.15)}}
 async function start(){
  if(!wanted())return stop();if(source)return setLevel();const ticket=++serial;
  try{unlock();await context.resume();const decoded=await load();if(ticket!==serial||!wanted())return;
   source=context.createBufferSource();gain=context.createGain();source.buffer=decoded;source.loop=true;source.connect(gain);gain.connect(context.destination);
   gain.gain.setValueAtTime(0,context.currentTime);gain.gain.linearRampToValueAtTime(level,context.currentTime+1.5);source.start(0,time()%decoded.duration);status.textContent='';
  }catch{if(ticket===serial)status.textContent='Forest sound unavailable. Toggle it off and on to retry; narration can continue.';}
 }
 function modeChanged(){panel.hidden=mode!=='feel';stop();}
 toggle.onchange=()=>{enabled=toggle.checked;persist();enabled?start():stop()};
 slider.oninput=()=>{level=Number(slider.value);persist();if(level===0)stop();else if(source)setLevel();else start()};
 document.addEventListener('click',unlock,{capture:true});
 audio.addEventListener('playing',start);audio.addEventListener('pause',()=>stop());audio.addEventListener('waiting',()=>stop());audio.addEventListener('seeking',()=>stop());audio.addEventListener('seeked',()=>{if(!audio.paused)start()});audio.addEventListener('ended',()=>stop());audio.addEventListener('error',()=>stop());audio.addEventListener('timeupdate',setLevel);
 document.querySelector('#course-mode').addEventListener('change',modeChanged);window.addEventListener('pagehide',()=>stop(true));modeChanged();
 return {get active(){return !!source},get enabled(){return enabled},get level(){return level},get duration(){return buffer?.duration||0},get contextState(){return context?.state||'uninitialized'}};
})();

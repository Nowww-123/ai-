import{c as e,f as t,h as n,l as r,p as i,r as a,u as o}from"./vendor-a2Ckr2n1.js";import{n as s,t as c}from"./index-T9T2dz54.js";var l=null;function u(){return l||(l=new Promise((e,t)=>{window._AMapSecurityConfig={securityJsCode:`fb75174b09340ed5ea6474c18507bcc2`};let n=document.createElement(`script`);n.src=`https://webapi.amap.com/maps?v=2.0&key=2360f7e125c8235a68df4c41883e2521`,n.onload=()=>{window.AMap?e(window.AMap):t(Error(`AMap load failed`))},n.onerror=t,document.head.appendChild(n)}),l)}var d={guangzhou:{lng:113.264435,lat:23.129163,name:`广州`,color:`#E9A568`},shenzhen:{lng:114.057868,lat:22.543099,name:`深圳`,color:`#38BDF8`},hongkong:{lng:114.173355,lat:22.320048,name:`香港`,color:`#6EE7B7`}},f=[114,22.8],p={class:`map-view`},m={key:0,class:`loading`},h=c({__name:`MapView`,setup(c){let l=a(),h=s(),g=n(null),_=n(null),v=n(!0);t(async()=>{try{let e=await u();_.value=new e.Map(g.value,{zoom:8,center:f,mapStyle:`amap://styles/normal`,viewMode:`2D`,showIndoorMap:!1,showBuildingBlock:!1,labelzIndex:110}),await h.init(),b(e),x(e),window.currentPhotoIndex={},window.swipeStartX={},window.handleSwipeStart=(e,t)=>{window.swipeStartX[t]=e.touches[0].clientX},window.handleSwipeEnd=(e,t,n)=>{let r=e.changedTouches[0].clientX,i=window.swipeStartX[t]-r;Math.abs(i)>50&&(i>0?window.nextPhoto(t,n):window.prevPhoto(t,n))},window.nextPhoto=(e,n)=>{window.currentPhotoIndex[e]||(window.currentPhotoIndex[e]=0);let r=window.currentPhotoIndex[e],i=(r+1)%n;document.getElementById(`photo-${e}-${r}`).style.display=`none`,document.getElementById(`photo-${e}-${i}`).style.display=`block`,t(e,r,i),window.currentPhotoIndex[e]=i},window.prevPhoto=(e,n)=>{window.currentPhotoIndex[e]||(window.currentPhotoIndex[e]=0);let r=window.currentPhotoIndex[e],i=(r-1+n)%n;document.getElementById(`photo-${e}-${r}`).style.display=`none`,document.getElementById(`photo-${e}-${i}`).style.display=`block`,t(e,r,i),window.currentPhotoIndex[e]=i};function t(e,t,n){let r=document.querySelectorAll(`.indicator-${e}`);r[t]&&(r[t].style.width=`8px`,r[t].style.background=`rgba(255, 255, 255, 0.4)`),r[n]&&(r[n].style.width=`28px`,r[n].style.background=`rgba(255, 255, 255, 0.95)`)}v.value=!1}catch(e){console.error(`地图加载失败:`,e),v.value=!1}});function y(e){let t=e.photos.map((t,n)=>`photo-${e.id}-${n}`),n=e.photos.map((e,n)=>`<img id="${t[n]}" src="${e.url}" style="width: 100%; height: 100%; object-fit: contain; background: #0A0D12; display: ${n===0?`block`:`none`};" />`).join(``),r=e.essay.split(`
`).map(e=>e.trim()).filter(e=>e.length>0).map(e=>`<p style="text-indent: 2em; margin: 0 0 12px 0;">${e}</p>`).join(``);return`
    <div style="width: 720px; height: 720px; background: #FFFFFF; border-radius: 20px; overflow: hidden; box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2); display: flex; flex-direction: column;">
      <!-- 顶部信息栏 -->
      <div style="background: linear-gradient(135deg, #FBFAF7 0%, #F5F3EE 100%); padding: 20px 28px; border-bottom: 1px solid #E7E3DA;">
        <div style="font-size: 28px; font-weight: 600; color: #0F8FB8; margin-bottom: 10px;">
          ${e.cityName}
        </div>
        <div style="display: flex; gap: 20px; color: #5B6472; font-size: 14px;">
          <div>📅 ${e.startDate} ~ ${e.endDate}</div>
          <div>☁️ ${e.weather}</div>
          <div>⏱️ ${e.duration}天</div>
        </div>
      </div>

      <!-- 照片区域（全出血） -->
      <div id="photo-area-${e.id}" style="position: relative; height: 320px; overflow: hidden; background: #0A0D12;">
        <!-- 照片轮播 -->
        <div id="carousel-${e.id}" style="width: 100%; height: 100%; position: relative; touch-action: none; user-select: none;"
          ontouchstart="window.handleSwipeStart(event, '${e.id}')"
          ontouchmove="event.preventDefault()"
          ontouchend="window.handleSwipeEnd(event, '${e.id}', ${e.photos.length})">
          ${n}
          ${e.photos.length>1?`
            <button onclick="window.prevPhoto('${e.id}', ${e.photos.length})" style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); width: 32px; height: 32px; border-radius: 50%; background: rgba(255, 255, 255, 0.85); border: none; cursor: pointer; font-size: 18px; color: #1F2937; box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25); display: flex; align-items: center; justify-content: center; transition: all 0.2s; opacity: 0.7; z-index: 5;">‹</button>
            <button onclick="window.nextPhoto('${e.id}', ${e.photos.length})" style="position: absolute; right: 16px; top: 50%; transform: translateY(-50%); width: 32px; height: 32px; border-radius: 50%; background: rgba(255, 255, 255, 0.85); border: none; cursor: pointer; font-size: 18px; color: #1F2937; box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25); display: flex; align-items: center; justify-content: center; transition: all 0.2s; opacity: 0.7; z-index: 5;">›</button>
          `:``}
        </div>

        <!-- 照片指示器 -->
        ${e.photos.length>1?`
          <div id="indicators-${e.id}" style="position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px; z-index: 10;">
            ${e.photos.map((t,n)=>`<div class="indicator-${e.id}" style="width: ${n===0?`28px`:`8px`}; height: 8px; border-radius: 4px; background: ${n===0?`rgba(255, 255, 255, 0.95)`:`rgba(255, 255, 255, 0.4)`}; transition: all 0.3s; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);"></div>`).join(``)}
          </div>
        `:``}
      </div>

      <!-- 底部随笔区 -->
      <div style="flex: 1; background: linear-gradient(135deg, #FBFAF7 0%, #F5F3EE 100%); padding: 24px 28px; overflow-y: auto;">
        <div style="color: #1F2937; font-size: 15px; line-height: 1.9; text-align: justify;">
          ${r}
        </div>
      </div>
    </div>
  `}function b(e){h.sortedTrips.forEach(t=>{let n=d[t.cityKey],r=new e.Marker({position:[n.lng,n.lat],title:n.name,offset:new e.Pixel(-15,-15)}),i=new e.InfoWindow({content:y(t),offset:new e.Pixel(0,-30)});r.on(`click`,()=>{i.open(_.value,r.getPosition())}),r.setMap(_.value)})}function x(e){h.sortedTrips.length<2||e.plugin(`AMap.Driving`,()=>{let t=0,n=h.sortedTrips.length-1;for(let r=0;r<h.sortedTrips.length-1;r++){let i=h.sortedTrips[r],a=h.sortedTrips[r+1],o=d[i.cityKey],s=d[a.cityKey];new e.Driving({map:_.value,hideMarkers:!0,autoFitView:!1,showTraffic:!1,policy:e.DrivingPolicy.LEAST_TIME,polyOptions:{strokeColor:`#F59E0B`,strokeWeight:6,strokeOpacity:.9,strokeStyle:`solid`,showDir:!1}}).search(new e.LngLat(o.lng,o.lat),new e.LngLat(s.lng,s.lat),()=>{t++,t===n&&setTimeout(()=>{S()},500)})}})}function S(){try{if(!_.value)return;let e=g.value;if(!e)return;let t=document.createElement(`canvas`),n=e.offsetWidth,r=e.offsetHeight;t.width=n,t.height=r;let i=t.getContext(`2d`),a=e.querySelector(`canvas`);if(a){i.drawImage(a,0,0,n,r);let e=t.toDataURL(`image/png`);window.saveMapSnapshot&&window.saveMapSnapshot(e),console.log(`地图截图已保存`)}else console.warn(`未找到地图canvas元素`)}catch(e){console.error(`地图截图失败:`,e)}}function C(){l.push({name:`poster`})}return(t,n)=>(i(),o(`div`,p,[e(`div`,{class:`header`},[n[0]||=e(`h1`,{class:`title`},`洄游笔记`,-1),e(`button`,{class:`btn btn-primary`,onClick:C},` 生成海报 `)]),v.value?(i(),o(`div`,m,[...n[1]||=[e(`div`,{class:`spinner`},null,-1),e(`p`,null,`地图加载中...`,-1)]])):r(``,!0),e(`div`,{ref_key:`mapContainer`,ref:g,class:`map-container`},null,512)]))}},[[`__scopeId`,`data-v-8f30b557`]]);export{h as default};

/* ================= 数据与常量 ================= */
const LS_KEY='starStudy_v3';
const SKIN='#ffe7d6';

const ACC_SVG=`
<g class="acc-head bow" data-part="bow">
  <path d="M138 86 C112 56 80 62 66 86 C92 94 116 94 138 86 Z" fill="#ff8fb8"/>
  <path d="M138 86 C164 56 196 62 210 86 C184 94 160 94 138 86 Z" fill="#ff8fb8"/>
  <circle cx="138" cy="86" r="10" fill="#ff6fae"/>
  <path d="M138 96 C130 116 124 136 130 152 C136 144 142 138 142 120 C142 110 141 102 138 96 Z" fill="#ff8fb8"/>
</g>
<g class="acc-head cat" data-part="cat">
  <path d="M205 54 L185 6 L242 44 Z" fill="#57a5b1"/>
  <path d="M213 46 L194 18 L230 44 Z" fill="#ffc7d9"/>
  <path d="M295 54 L315 6 L258 44 Z" fill="#57a5b1"/>
  <path d="M287 46 L306 18 L270 44 Z" fill="#ffc7d9"/>
</g>
<g class="acc-head headphone" data-part="headphone">
  <path d="M150 80 C150 18 350 18 350 80" fill="none" stroke="#6d5b9e" stroke-width="18" stroke-linecap="round"/>
  <rect x="132" y="76" width="28" height="60" rx="14" fill="#58c9bd"/>
  <rect x="340" y="76" width="28" height="60" rx="14" fill="#58c9bd"/>
  <circle cx="146" cy="106" r="7" fill="#fff" opacity=".65"/>
  <circle cx="354" cy="106" r="7" fill="#fff" opacity=".65"/>
</g>
<g class="acc-head star" data-part="star">
  <path d="M356 58 L365 82 L390 84 L371 101 L377 127 L356 114 L335 127 L341 101 L322 84 L347 82 Z" fill="#ffd77a" stroke="#f2b93f" stroke-width="3" stroke-linejoin="round"/>
</g>
<g class="acc-head halo" data-part="halo">
  <ellipse cx="250" cy="18" rx="58" ry="12" fill="none" stroke="#ffd77a" stroke-width="12"/>
  <circle cx="250" cy="18" r="30" fill="#ffe9a8" opacity=".35"/>
</g>
<g class="acc-face glasses" data-part="glasses">
  <circle cx="205" cy="235" r="30" fill="rgba(255,255,255,.15)" stroke="#a98ad0" stroke-width="6"/>
  <circle cx="295" cy="235" r="30" fill="rgba(255,255,255,.15)" stroke="#a98ad0" stroke-width="6"/>
  <path d="M235 233 Q250 227 265 233" fill="none" stroke="#a98ad0" stroke-width="6"/>
  <path d="M175 230 L142 218 M325 230 L358 218" fill="none" stroke="#a98ad0" stroke-width="6" stroke-linecap="round"/>
</g>
`;

const ACC_HEADS=[
  {id:'none',name:'不戴配饰',price:0,emoji:'🙈'},
  {id:'bow',name:'蝴蝶结',price:0,emoji:'🎀'},
  {id:'cat',name:'猫耳朵',price:80,emoji:'🐱'},
  {id:'headphone',name:'耳机',price:120,emoji:'🎧'},
  {id:'star',name:'星星发夹',price:100,emoji:'⭐'},
  {id:'halo',name:'小光环',price:150,emoji:'😇'},
  {id:'glasses',name:'圆框眼镜',price:60,emoji:'👓'}
];
const BGS=[
  {id:'study',name:'温馨书房',price:0,emoji:'🏠'},
  {id:'sakura',name:'樱花校园',price:100,emoji:'🌸'},
  {id:'stars',name:'星空夜景',price:120,emoji:'🌙'},
  {id:'candy',name:'糖果小屋',price:150,emoji:'🍬'},
  {id:'city',name:'城市夜景',price:180,emoji:'🌃'}
];
const CATALOG=[
  {key:'accHead',stateKey:'accHead',cat:'accHeads',name:'配饰',items:ACC_HEADS},
  {key:'bg',stateKey:'bg',cat:'bgs',name:'背景',items:BGS}
];
const BADGES=[
  {id:'first',emoji:'✨',name:'初露锋芒',desc:'完成第一次专注',reward:30,check:()=>state.totalSessions>=1},
  {id:'streak3',emoji:'🔥',name:'星光不息',desc:'连续打卡3天',reward:40,check:()=>state.recordStreak>=3},
  {id:'focus2h',emoji:'⏳',name:'专注小达人',desc:'累计专注120分钟',reward:50,check:()=>state.totalFocusMin>=120},
  {id:'streak7',emoji:'🌟',name:'习惯之星',desc:'连续打卡7天',reward:100,check:()=>state.recordStreak>=7},
  {id:'star100',emoji:'💫',name:'百星闪耀',desc:'累计获得100颗星星',reward:60,check:()=>(state.totalStarsEarned||0)>=100},
  {id:'task50',emoji:'📚',name:'任务达人',desc:'完成50个学习任务',reward:80,check:()=>state.totalTasks>=50},
  {id:'night',emoji:'🌙',name:'月下学习家',desc:'完成一次夜晚专注',reward:50,check:()=>!!state.nightStudy},
  {id:'weekend',emoji:'🌈',name:'周末小卷王',desc:'周末完成3个任务',reward:50,check:()=>(state.weekendTasks||0)>=3},
  {id:'wardrobe',emoji:'👗',name:'衣橱收藏家',desc:'收集10件装扮',reward:60,check:()=>ownedCount()>=10},
  {id:'fullset',emoji:'🎀',name:'全副武装',desc:'集齐所有配饰',reward:80,check:()=>['bow','cat','headphone','star','halo','glasses'].every(x=>state.owned.accHeads.includes(x))},
  {id:'designer',emoji:'🎨',name:'小屋设计师',desc:'拥有全部5个场景',reward:80,check:()=>state.owned.bgs.length>=5},
  {id:'journal3',emoji:'📔',name:'手账新星',desc:'连续3天写成长手账',reward:40,check:()=>journalStreak()>=3},
  {id:'journal7',emoji:'📚',name:'手账大师',desc:'累计记录7篇成长手账',reward:80,check:()=>state.journal.length>=7},
  {id:'letter1',emoji:'💌',name:'未来之约',desc:'收到第一封未来来信',reward:30,check:()=>state.letters.length>=1},
  {id:'lvl10',emoji:'👑',name:'星海主宰',desc:'达到10级',reward:150,check:()=>state.xp>=4000}
];
const LEVELS=[
  {xp:0,name:'星光学徒'},{xp:80,name:'星光精灵'},{xp:200,name:'魔法少女'},
  {xp:400,name:'闪耀偶像'},{xp:700,name:'樱花舞姬'},{xp:1100,name:'星之公主'},
  {xp:1600,name:'月光歌姬'},{xp:2200,name:'银河女神'},{xp:3000,name:'幻梦天使'},
  {xp:4000,name:'星海主宰'}
];

let state=null;
let timer={running:false,paused:false,total:0,remain:0,endAt:0,iv:null,taskId:null,checkInEvery:600000,checkInAt:null,checkInActive:false,checkInDeadline:0};
let selectedDuration=25;
let parentUnlocked=false;
let confirmCb=null;
let wardCat='accHead';
let pinBuf='';
let pendingPhotoTask=null;

/* ================= 工具 ================= */
function $(id){return document.getElementById(id);}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7);}
function fmtDate(d){const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),dd=String(d.getDate()).padStart(2,'0');return y+'-'+m+'-'+dd;}
function todayStr(){return fmtDate(new Date());}
function daysAgoStr(n){return fmtDate(new Date(Date.now()-n*86400000));}
function emptyLog(){return {minutes:0,tasks:0,stars:0,sessions:0};}
function getLog(d){state.dayLog[d]=state.dayLog[d]||emptyLog();return state.dayLog[d];}
function ownedCount(){
  return state.owned.bgs.length + state.owned.accHeads.filter(x=>x!=='none').length;
}

/* ================= 状态 ================= */
function defaultState(){
  const t=todayStr();
  return {
    v:1,stars:0,xp:0,totalStarsEarned:0,streak:0,recordStreak:0,lastActive:'',
    totalFocusMin:0,totalSessions:0,totalTasks:0,nightStudy:false,weekendTasks:0,
    dayLog:{},
    tasks:{[t]:[
      {id:uid(),emoji:'📐',name:'数学《二次函数》练习 30分钟',min:30,done:false},
      {id:uid(),emoji:'🔤',name:'英语中考词汇背诵 20分钟',min:20,done:false}
    ]},
    wardrobe:{accHead:'none',accFace:'none',bg:'study'},
    owned:{accHeads:['none'],accFaces:[],bgs:['study']},
    badges:[],
    redemptions:[],
    journal:[],
    letters:[],
    letterToday:'',
    verifications:[],
    rewards:[
      {id:uid(),name:'手机自由时间 30分钟',cost:150},
      {id:uid(),name:'零花钱 10元',cost:300},
      {id:uid(),name:'周末出去玩一下午',cost:800}
    ],
    settings:{pin:'1234',goalMin:60,durations:[25,40,45,60],focusDefault:25,childName:'宝贝',childAge:15,sound:true,photoVerify:true}
  };
}
function mergeState(){
  const d=defaultState();
  for(const k in d){if(state[k]===undefined)state[k]=d[k];}
  state.settings=Object.assign({},d.settings,state.settings||{});
  state.wardrobe=Object.assign({accHead:'none',accFace:'none',bg:'study'},state.wardrobe||{});
  state.owned=Object.assign({accHeads:['none'],accFaces:[],bgs:['study']},state.owned||{});
  if(!Array.isArray(state.owned.accHeads)||!state.owned.accHeads.length)state.owned.accHeads=['none'];
  if(!Array.isArray(state.owned.bgs)||!state.owned.bgs.length)state.owned.bgs=['study'];
  state.owned.accFaces=Array.isArray(state.owned.accFaces)?state.owned.accFaces:[];
  if(!ACC_HEADS.some(x=>x.id===state.wardrobe.accHead))state.wardrobe.accHead='none';
  if(state.wardrobe.accFace!=='glasses')state.wardrobe.accFace='none';
  if(!BGS.some(x=>x.id===state.wardrobe.bg))state.wardrobe.bg='study';
  state.tasks=state.tasks||{}; state.dayLog=state.dayLog||{};
  if(!Array.isArray(state.rewards)||!state.rewards.length)state.rewards=d.rewards;
}
function load(){
  try{
    let raw=localStorage.getItem(LS_KEY);
    if(!raw)raw=localStorage.getItem('starStudy_v2');
    if(!raw)raw=localStorage.getItem('starStudy_v1');
    if(raw){state=JSON.parse(raw);mergeState();}
    else state=defaultState();
  }catch(e){state=defaultState();}
}
function save(){try{localStorage.setItem(LS_KEY,JSON.stringify(state));}catch(e){}}

function rollDay(){
  const t=todayStr();
  if(state.lastActive&&state.lastActive!==t){
    if(state.lastActive===daysAgoStr(1)){/* 昨天有活动，连续保持 */}
    else state.streak=0;
  }
  if(!state.tasks[t])state.tasks[t]=[];
  getLog(t);
}
function markActivity(){
  const t=todayStr();
  if(state.lastActive===t){}
  else if(state.lastActive===daysAgoStr(1)){state.streak+=1;}
  else{state.streak=1;}
  state.lastActive=t;
  state.recordStreak=Math.max(state.recordStreak,state.streak);
}
function earnStars(n){state.stars+=n;state.totalStarsEarned=(state.totalStarsEarned||0)+n;}

/* ================= 声音 ================= */
let actx=null;
function tone(freq,start,dur,type,vol){
  try{
    actx=actx||new (window.AudioContext||window.webkitAudioContext)();
    const o=actx.createOscillator(),g=actx.createGain();
    o.type=type||'sine';o.frequency.value=freq;
    o.connect(g);g.connect(actx.destination);
    const t=actx.currentTime+start;
    g.gain.setValueAtTime(0,t);
    g.gain.linearRampToValueAtTime(vol||.12,t+.02);
    g.gain.exponentialRampToValueAtTime(.001,t+(dur||.2));
    o.start(t);o.stop(t+(dur||.2)+.05);
  }catch(e){}
}
function sfx(name){
  if(!state||!state.settings.sound)return;
  if(name==='click')tone(660,0,.08,'triangle',.07);
  else if(name==='buy'){tone(523,0,.12);tone(659,.09,.12);tone(784,.18,.2);}
  else if(name==='done'){tone(523,0,.15);tone(659,.12,.15);tone(784,.24,.15);tone(1047,.36,.4);}
  else if(name==='badge'){tone(659,0,.12);tone(880,.1,.12);tone(1175,.2,.28);}
  else if(name==='coin'){tone(988,0,.07);tone(1319,.07,.13);}
}

/* ================= 弹窗 ================= */
function askConfirm(title,msg,onYes){
  $('confirmTitle').textContent=title;
  $('confirmMsg').textContent=msg;
  confirmCb=onYes;
  $('confirmModal').classList.add('show');
}
function closeConfirm(){$('confirmModal').classList.remove('show');confirmCb=null;}
function doConfirm(){const cb=confirmCb;closeConfirm();if(cb)cb();}
$('confirmYes').onclick=doConfirm;
$('confirmNo').onclick=closeConfirm;

let toastTimer=null;
function toast(msg){
  const t=$('toast');t.textContent=msg;t.classList.add('show');
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2200);
}

function confetti(){
  const colors=['#ff9ec7','#b79cff','#7fd0f5','#ffd77a','#5fd4c4','#ff8fb8'];
  for(let i=0;i<46;i++){
    const c=document.createElement('i');
    c.className='confetti';
    c.style.left=(Math.random()*100)+'vw';
    c.style.background=colors[i%colors.length];
    c.style.animationDelay=(Math.random()*.5)+'s';
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),3700);
  }
}

/* ================= 等级 ================= */
function levelInfo(){
  let idx=0;
  for(let i=0;i<LEVELS.length;i++)if(state.xp>=LEVELS[i].xp)idx=i;
  const cur=LEVELS[idx],next=LEVELS[idx+1];
  const pct=next?Math.min(100,Math.round((state.xp-cur.xp)/(next.xp-cur.xp)*100)):100;
  return {idx:idx+1,name:cur.name,pct,next,nextXp:next?next.xp:null};
}

/* ================= 角色 ================= */
function setOn(cls,id){
  document.querySelectorAll('.char-acc').forEach(svg=>{
    svg.querySelectorAll(cls).forEach(el=>el.classList.toggle('on',el.dataset.part===id));
  });
}
function setExpression(){/* 静态立绘，无表情切换 */}
function syncChar(){
  const w=state.wardrobe;
  setOn('.acc-head',w.accHead);setOn('.acc-face',w.accFace);
  document.querySelectorAll('[data-scene]').forEach(el=>el.dataset.scene=w.bg);
}

/* ================= 渲染 ================= */
function renderTop(){
  const li=levelInfo();
  $('starsTop').textContent=state.stars;
  $('levelTop').textContent='Lv.'+li.idx;
  $('levelNameTop').textContent=li.name;
  $('streakTop').textContent=state.streak;
  const h=new Date().getHours();
  const name=state.settings.childName||'宝贝';
  let t=h<6?'夜深了':h<11?'早上好':h<13?'中午好':h<18?'下午好':'晚上好';
  $('greet').textContent=`${t}，${name}！今天也要闪闪发光哦 ✨`;
}

function renderTasks(){
  const t=todayStr();
  const list=state.tasks[t]||[];
  const el=$('taskList');
  if(!list.length){
    el.innerHTML='<div class="empty-tip">今天还没有任务～点下方添加第一个吧！✨</div>';
  }else{
    el.innerHTML=list.map(task=>`
      <div class="task-row ${task.done?'done':''}">
        <span class="t-emoji">${task.emoji}</span>
        <div class="t-info"><div class="t-name">${esc(task.name)}</div><div class="t-meta">${task.min||'--'} 分钟${task.needPhoto?' · 📸需验证':''}</div></div>
        <button class="t-btn" onclick="toggleTask('${task.id}')" title="完成">${task.done?'✅':'⭕'}</button>
        <button class="t-btn start" onclick="startFocus('${task.id}')" title="开始专注">▶</button>
        <button class="t-btn del" onclick="delTask('${task.id}')" title="删除">🗑</button>
      </div>`).join('');
  }
  const done=list.filter(x=>x.done).length;
  $('taskProgress').textContent=done+'/'+list.length+' 已完成';
  const remain=list.filter(x=>!x.done).length;
  if(list.length&&remain===0)$('stageCaption').textContent='今天的任务都完成啦，好厉害！去换装看看新衣服吧 👗';
  else if(!list.length)$('stageCaption').textContent='今天想学点什么呀？先添加一个任务吧！';
  else $('stageCaption').textContent=`还有 ${remain} 个任务等着你，专注完成后星星会更多哦 ⭐`;
}

function renderDurationChips(){
  const durs=state.settings.durations||[25,40,45,60];
  if(!durs.includes(selectedDuration))selectedDuration=durs[0];
  $('durationChips').innerHTML=durs.map(d=>`<button class="chip ${d===selectedDuration?'on':''}" onclick="pickDuration(${d})">${d}分钟</button>`).join('');
  updateTimerUI();
}
function pickDuration(d){selectedDuration=d;sfx('click');renderDurationChips();}

function updateTimerUI(){
  const C1=351.86,C2=515.22;
  const total=selectedDuration*60;
  let remain=timer.running?(timer.remain<0?0:timer.remain):total;
  const fmt=Math.floor(remain/60)+':'+String(remain%60).padStart(2,'0');
  $('timerNum').textContent=fmt;
  $('ringFg').style.strokeDashoffset=C1*(1-(total?remain/total:0));
  $('focusTimer').textContent=fmt;
  $('ringFg2').style.strokeDashoffset=C2*(1-(total?remain/total:0));
}

function renderWardrobe(){
  const tabs=CATALOG.map(c=>`<button class="chip ${wardCat===c.key?'on':''}" onclick="setWardCat('${c.key}')">${c.name}</button>`).join('');
  $('catTabs').innerHTML=tabs;
  const cat=CATALOG.find(c=>c.key===wardCat);
  if(!cat)return;
  const owned=state.owned[cat.cat];
  $('wardGrid').innerHTML=cat.items.map(item=>{
    const isOwned=item.id==='none'||owned.includes(item.id);
    let equipped=state.wardrobe[cat.stateKey]===item.id;
    if(cat.key==='accHead')equipped=item.id==='glasses'?state.wardrobe.accFace==='glasses':state.wardrobe.accHead===item.id;
    const priceHtml=isOwned?'':`<div class="w-price">⭐ ${item.price}</div>`;
    const vis=`<div class="w-emoji">${item.emoji}</div>`;
    return `<div class="w-item ${equipped?'equipped':''} ${isOwned?'':'locked'}" onclick="buyItem('${cat.cat}','${item.id}')">
      ${isOwned?'':'<span class="lock">🔒</span>'}${vis}
      <div class="w-name">${item.name}</div>${priceHtml}
    </div>`;
  }).join('');
}
function setWardCat(k){wardCat=k;sfx('click');renderWardrobe();}

function buyItem(cat,id){
  const catDef=CATALOG.find(c=>c.cat===cat);
  const item=catDef.items.find(i=>i.id===id);
  if(!item)return;
  if(id==='none'){state.wardrobe.accHead='none';save();renderAll();return;}
  const owned=state.owned[cat];
  if(owned.includes(id)){equip(cat,id);return;}
  if(item.price===0){
    owned.push(id);equip(cat,id);save();renderAll();return;
  }
  askConfirm('购买装扮',`确定用 ⭐${item.price} 购买「${item.name}」吗？`,()=>{
    if(state.stars<item.price){toast('星星还不够，再专注一会儿吧 ✨');return;}
    state.stars-=item.price;
    owned.push(id);
    equip(cat,id);
    sfx('buy');save();renderAll();
    toast(`购入「${item.name}」！`);
  });
}
function equip(cat,id){
  const w=state.wardrobe;
  if(cat==='accHeads'){if(id==='glasses')w.accFace='glasses';else{w.accHead=id;if(id==='none')w.accFace='none';}}
  else if(cat==='bgs')w.bg=id;
  save();renderAll();
}

function renderBadges(){
  $('badgeGrid').innerHTML=BADGES.map(b=>{
    const got=state.badges.includes(b.id);
    return `<div class="badge ${got?'':'locked'}">
      <div class="b-emoji">${b.emoji}</div>
      <div class="b-name">${b.name}</div>
      <div class="b-desc">${b.desc}</div>
      <div class="b-desc">${got?'已解锁 +'+b.reward+'⭐':'🔒 +'+b.reward+'⭐'}</div>
    </div>`;
  }).join('');
}

function renderReport(){
  const days=[];
  for(let i=6;i>=0;i--)days.push(daysAgoStr(i));
  const logs=days.map(d=>state.dayLog[d]||emptyLog());
  const totalMin=logs.reduce((s,l)=>s+l.minutes,0);
  const totalTasks=logs.reduce((s,l)=>s+l.tasks,0);
  const totalStars=logs.reduce((s,l)=>s+l.stars,0);
  $('reportCards').innerHTML=`
    <div class="r-card"><b>${totalMin}</b><span>专注分钟</span></div>
    <div class="r-card"><b>${totalTasks}</b><span>完成任务</span></div>
    <div class="r-card"><b>${totalStars}</b><span>获得星星</span></div>`;
  const max=Math.max(30,...logs.map(l=>l.minutes));
  const wk=['日','一','二','三','四','五','六'];
  $('chart').innerHTML=days.map((d,i)=>{
    const date=new Date(d+'T12:00:00');
    const h=Math.round(logs[i].minutes/max*100);
    return `<div class="c-col">
      <span class="c-val">${logs[i].minutes>0?logs[i].minutes:''}</span>
      <div class="c-bar ${logs[i].minutes?'':'empty'}" style="height:${Math.max(logs[i].minutes?4:3,h)}%"></div>
      <span class="c-label">${wk[date.getDay()]}</span>
    </div>`;
  }).join('');
  const li=levelInfo();
  $('reportRange').textContent=`${days[0].slice(5)} ~ ${days[6].slice(5)}`;
  $('levelInfo').textContent=`Lv.${li.idx}「${li.name}」· 经验 ${state.xp}`;
  $('levelBar').style.width=li.pct+'%';
  $('levelTip').textContent=li.nextXp?`再积累 ${li.nextXp-state.xp} 经验就能升到 Lv.${li.idx+1} 啦（约等于专注 ${li.nextXp-state.xp} 分钟）`:'已经满级啦，你就是星海之主！👑';
}

/* ================= 任务 ================= */
function addTask(){
  const name=$('taskName').value.trim();
  if(!name){toast('先写下任务名称吧 ✏️');return;}
  const min=Math.max(1,Math.min(240,parseInt($('taskMin').value)||0));
  const t=todayStr();
  state.tasks[t]=state.tasks[t]||[];
  state.tasks[t].push({id:uid(),emoji:$('taskSubject').value,name,min,done:false,needPhoto:$('taskPhoto').checked});
  $('taskName').value='';$('taskMin').value='';
  sfx('click');save();renderTasks();
  toast('任务添加好啦！');
}
function delTask(id){
  const t=todayStr();
  state.tasks[t]=(state.tasks[t]||[]).filter(x=>x.id!==id);
  save();renderTasks();
}
function toggleTask(id){
  const t=todayStr();
  const task=(state.tasks[t]||[]).find(x=>x.id===id);
  if(!task)return;
  if(!task.done){
    if(task.needPhoto){
      const v={id:uid(),taskId:task.id,taskEmoji:task.emoji,taskName:task.name,date:t,photoId:null,status:'pending',bonus:5,ts:Date.now()};
      state.verifications.push(v);
      save();
      openPhotoModal(v);
      toast('提交任务成果，家长确认后 +5⭐');
    }else{
      task.done=true;
      earnStars(5);
      getLog(t).tasks+=1;
      state.totalTasks+=1;
      const d=new Date().getDay();
      if(d===0||d===6)state.weekendTasks=(state.weekendTasks||0)+1;
      markActivity();
      sfx('coin');confetti();
      toast('任务完成！+5⭐');
    }
  }else task.done=false;
  save();checkBadges();renderAll();
}

/* ================= 任务拍照验证 ================= */
let photoDB=null;
let currentVerifyId=null;
function openPhotoDB(){
  return new Promise((res,rej)=>{
    if(photoDB){res(photoDB);return;}
    const req=indexedDB.open('starStudyDB',1);
    req.onupgradeneeded=e=>{const db=e.target.result;if(!db.objectStoreNames.contains('photos'))db.createObjectStore('photos');};
    req.onsuccess=e=>{photoDB=e.target.result;res(photoDB);};
    req.onerror=()=>rej(req.error);
  });
}
async function dbPutPhoto(id,dataUrl){
  const db=await openPhotoDB();
  return new Promise((res,rej)=>{
    const tx=db.transaction('photos','readwrite');
    tx.objectStore('photos').put({id,dataUrl,ts:Date.now()});
    tx.oncomplete=res;tx.onerror=()=>rej(tx.error);
  });
}
async function dbGetPhoto(id){
  const db=await openPhotoDB();
  return new Promise((res,rej)=>{
    const rq=db.transaction('photos').objectStore('photos').get(id);
    rq.onsuccess=()=>res(rq.result||null);rq.onerror=()=>rej(rq.error);
  });
}
async function dbCleanPhotos(days){
  try{
    const db=await openPhotoDB();
    const cut=Date.now()-days*86400000;
    const tx=db.transaction('photos','readwrite');
    const store=tx.objectStore('photos');
    const rq=store.openCursor();
    rq.onsuccess=()=>{
      const c=rq.result;
      if(c){if(c.value.ts<cut)store.delete(c.key);c.continue();}
    };
  }catch(e){}
}
function processPhoto(file){
  return new Promise((res,rej)=>{
    const fr=new FileReader();
    fr.onload=()=>{
      const img=new Image();
      img.onload=()=>{
        const max=900;
        let w=img.width,h=img.height;
        if(w>max||h>max){const s=Math.min(max/w,max/h);w=Math.round(w*s);h=Math.round(h*s);}
        const c=document.createElement('canvas');c.width=w;c.height=h;
        c.getContext('2d').drawImage(img,0,0,w,h);
        res(c.toDataURL('image/jpeg',0.72));
      };
      img.onerror=()=>rej(new Error('img'));
      img.src=fr.result;
    };
    fr.onerror=()=>rej(new Error('fr'));
    fr.readAsDataURL(file);
  });
}
function openPhotoModal(v){
  currentVerifyId=v.id;
  $('photoModalMsg').textContent=`给「${v.taskEmoji||''} ${v.taskName}」的成果拍张照吧～照片只保存在这台设备上。`;
  $('photoModal').classList.add('show');
  sfx('click');
}
function closePhotoModal(){$('photoModal').classList.remove('show');}
function pickPhoto(){$('photoInput').click();}
function pickPhotoGallery(){$('photoInputGallery').click();}
async function photoChosen(ev){
  const file=ev.target.files&&ev.target.files[0];
  ev.target.value='';
  if(!file)return;
  const dataUrl=await processPhoto(file).catch(()=>null);
  if(!dataUrl){toast('照片处理失败，换一张试试');return;}
  const photoId=uid();
  await dbPutPhoto(photoId,dataUrl).catch(()=>{});
  const v=state.verifications.find(x=>x.id===currentVerifyId);
  if(v)v.photoId=photoId;
  save();
  $('photoModal').classList.remove('show');
  sfx('coin');
  toast('照片已提交，等家长确认 📸');
}
function skipPhoto(){
  $('photoModal').classList.remove('show');
  toast('已标记"待家长确认"');
}
function approveVerification(id){
  const v=state.verifications.find(x=>x.id===id);
  if(!v||v.status!=='pending')return;
  v.status='approved';
  let task=null;
  for(const d in state.tasks){
    const f=(state.tasks[d]||[]).find(x=>x.id===v.taskId);
    if(f){task=f;break;}
  }
  if(task&&!task.done)task.done=true;
  earnStars(v.bonus);
  state.xp+=v.bonus;
  const log=getLog(v.date);log.tasks+=1;state.totalTasks+=1;
  const dd=new Date(v.date+'T12:00:00').getDay();
  if(dd===0||dd===6)state.weekendTasks=(state.weekendTasks||0)+1;
  if(v.date===todayStr())markActivity();
  sfx('coin');save();checkBadges();renderAll();
  toast(`已通过「${v.taskName}」，+${v.bonus}⭐`);
}
function rejectVerification(id){
  const v=state.verifications.find(x=>x.id===id);
  if(!v||v.status!=='pending')return;
  v.status='rejected';
  save();renderAll();
  toast('已标记不通过');
}
function renderVerifyPhotos(){
  document.querySelectorAll('[data-photo]').forEach(el=>{
    dbGetPhoto(el.dataset.photo).then(r=>{if(r&&el)el.src=r.dataUrl;}).catch(()=>{});
  });
}

/* ================= 专注计时 ================= */
function startFocus(taskId){
  if(timer.running)return;
  timer.taskId=taskId||null;
  timer.total=selectedDuration*60;
  timer.remain=timer.total;
  timer.running=true;timer.paused=false;
  timer.endAt=Date.now()+timer.total*1000;
  timer.checkInActive=false;
  $('checkInOverlay').classList.remove('show');
  timer.checkInAt=(timer.total*1000>timer.checkInEvery)?Date.now()+timer.checkInEvery:null;
  const task=taskId?todayTasks().find(x=>x.id===taskId):null;
  $('focusTaskName').textContent=task?`${task.emoji} ${task.name}`:'自由专注';
  $('pauseBtn').textContent='⏸️ 暂停';
  $('focusSub').textContent='学习中…';
  $('focusNote').textContent='专注的时候，星星会一颗一颗亮起来 ✨';
  $('focusOverlay').classList.add('show');
  clearInterval(timer.iv);
  timer.iv=setInterval(tick,250);
  sfx('click');updateTimerUI();
}
function todayTasks(){const t=todayStr();return state.tasks[t]||[];}
function tick(){
  if(!timer.running||timer.paused)return;
  if(timer.checkInActive){tickCheckIn();return;}
  timer.remain=Math.max(0,Math.round((timer.endAt-Date.now())/1000));
  updateTimerUI();
  if(timer.remain<=0){completeFocus();return;}
  if(timer.checkInAt&&Date.now()>=timer.checkInAt)activateCheckIn();
}
function activateCheckIn(){
  timer.checkInActive=true;
  timer.checkInDeadline=Date.now()+15000;
  $('checkInTip').textContent='还有 15 秒';
  $('checkInOverlay').classList.add('show');
  sfx('coin');
}
function tickCheckIn(){
  const left=Math.max(0,Math.round((timer.checkInDeadline-Date.now())/1000));
  $('checkInTip').textContent='还有 '+left+' 秒';
  if(left<=0)checkInTimeout();
}
function answerCheckIn(){
  if(!timer.checkInActive)return;
  timer.checkInActive=false;
  $('checkInOverlay').classList.remove('show');
  timer.checkInAt=Date.now()+timer.checkInEvery;
  sfx('done');
  toast('专注确认成功 ✨');
}
function checkInTimeout(){
  timer.checkInActive=false;
  $('checkInOverlay').classList.remove('show');
  pauseFocus();
  toast('刚才没来得及确认，计时已暂停，回来点"继续"就好～');
}
function pauseFocus(){
  if(!timer.running)return;
  if(timer.checkInActive){timer.checkInActive=false;$('checkInOverlay').classList.remove('show');}
  if(timer.paused){
    timer.paused=false;
    timer.endAt=Date.now()+timer.remain*1000;
    if(timer.checkInAt&&timer.checkInAt<Date.now())timer.checkInAt=Date.now()+timer.checkInEvery;
    timer.iv=setInterval(tick,250);
    $('pauseBtn').textContent='⏸️ 暂停';
    $('focusSub').textContent='学习中…';
  }else{
    timer.paused=true;
    timer.remain=Math.max(0,Math.round((timer.endAt-Date.now())/1000));
    clearInterval(timer.iv);
    $('pauseBtn').textContent='▶️ 继续';
    $('focusSub').textContent='已暂停，休息一下～';
  }
  sfx('click');
}
function endFocusEarly(){
  askConfirm('结束专注？','现在结束不会获得星星和经验的奖励哦，确定要结束吗？',()=>{
    clearInterval(timer.iv);
    timer.running=false;timer.paused=false;timer.checkInActive=false;
    $('checkInOverlay').classList.remove('show');
    $('focusOverlay').classList.remove('show');
    updateTimerUI();
    toast('没关系，休息一下再继续～');
  });
}
function completeFocus(){
  clearInterval(timer.iv);
  timer.running=false;timer.paused=false;timer.checkInActive=false;
  $('checkInOverlay').classList.remove('show');
  const mins=timer.total/60;
  const t=todayStr();
  const task=timer.taskId?todayTasks().find(x=>x.id===timer.taskId):null;
  const taskDone=task&&!task.done;
  let stars=mins;
  let xp=mins;
  const lvBefore=levelInfo().idx;
  let needPhoto=false;
  if(taskDone){
    if(task.needPhoto){
      needPhoto=true;
      state.verifications.push({id:uid(),taskId:task.id,taskEmoji:task.emoji,taskName:task.name,date:t,photoId:null,status:'pending',bonus:10,ts:Date.now()});
      pendingPhotoTask={vid:state.verifications[state.verifications.length-1].id};
    }else{
      task.done=true;
      stars+=10;xp+=10;
      getLog(t).tasks+=1;state.totalTasks+=1;
      const d=new Date().getDay();
      if(d===0||d===6)state.weekendTasks=(state.weekendTasks||0)+1;
    }
  }
  const h=new Date().getHours();
  if(h>=21||h<4)state.nightStudy=true;
  state.totalFocusMin+=mins;
  state.totalSessions+=1;
  const log=getLog(t);
  log.minutes+=mins;log.stars+=stars;log.sessions+=1;
  earnStars(stars);
  state.xp+=xp;
  markActivity();
  const lvAfter=levelInfo().idx;
  $('focusOverlay').classList.remove('show');
  $('celebrateTitle').textContent='太棒啦！';
  $('celebrateMsg').textContent=(task?`「${task.emoji} ${task.name}」完成啦！`:'自由专注完成！')+(needPhoto?' 记得给任务成果拍照验证哦 📸':'')+(lvAfter>lvBefore?` 升级到 Lv.${lvAfter}「${levelInfo().name}」！`:'');
  $('gainStars').textContent=Math.round(stars);
  $('gainXp').textContent=Math.round(xp);
  $('celebrate').classList.add('show');
  confetti();sfx('done');
  save();checkBadges();renderAll();
}
function closeCelebrate(){
  $('celebrate').classList.remove('show');
  updateTimerUI();
  if(pendingPhotoTask){
    const v=state.verifications.find(x=>x.id===pendingPhotoTask.vid);
    pendingPhotoTask=null;
    if(v)openPhotoModal(v);
  }
}

/* ================= 成就 ================= */
function checkBadges(){
  let changed=false;
  BADGES.forEach(b=>{
    if(state.badges.includes(b.id))return;
    if(b.check()){
      state.badges.push(b.id);
      earnStars(b.reward);
      sfx('badge');confetti();
      toast(`🏆 解锁成就「${b.name}」 +${b.reward}⭐`);
      changed=true;
    }
  });
  if(changed){save();renderAll();}
}

/* ================= 心愿兑换 ================= */
function openRewards(){
  renderRewards();
  $('rewardModal').classList.add('show');
  sfx('click');
}
function closeRewards(){$('rewardModal').classList.remove('show');}
function renderRewards(){
  const list=state.rewards.map(r=>`
    <div class="reward-item">
      <div class="r-info"><div class="r-name">${esc(r.name)}</div><div class="r-cost">需要 ⭐${r.cost} · 我还有 ⭐${state.stars}</div></div>
      <button class="btn" style="padding:8px 14px;font-size:13px" ${state.stars<r.cost?'disabled':''} onclick="askRedeem('${r.id}')">兑换</button>
    </div>`).join('')||'<p>家长还没设置奖励规则哦</p>';
  $('rewardList').innerHTML=list;
  const stMap={pending:'等待家长确认',approved:'✅ 已确认',declined:'❌ 已拒绝'};
  $('redemptionHistory').innerHTML=state.redemptions.length?
    '<p style="font-weight:800;margin-top:14px">兑换记录</p>'+state.redemptions.slice().reverse().map(r=>`<div class="red-item"><span>🎁 ${esc(r.name)}</span><span class="st ${r.status}">${stMap[r.status]||r.status}</span></div>`).join('')
    :'';
}
function askRedeem(id){
  const r=state.rewards.find(x=>x.id===id);
  if(!r)return;
  askConfirm('确认兑换',`确定要用 ⭐${r.cost} 兑换「${r.name}」吗？提交后等家长确认就好～`,()=>{
    state.redemptions.push({id:uid(),rewardId:id,name:r.name,cost:r.cost,ts:Date.now(),status:'pending'});
    sfx('coin');save();renderRewards();renderParent();
    toast('已提交兑换申请 💌');
  });
}

/* ================= 手账 / 未来来信 ================= */
const MOODS=[
  {id:'great',emoji:'🤩',name:'超棒'},
  {id:'happy',emoji:'😊',name:'开心'},
  {id:'ok',emoji:'😐',name:'一般'},
  {id:'tough',emoji:'😣',name:'有点难'},
  {id:'sad',emoji:'😭',name:'难过'}
];
let selectedMood='happy';

const LETTER_ENCOURAGE=[
  '现在觉得很难的事，三年后回头看，都会变成你笑着说出来的故事。',
  '不要怕慢，乌龟也能赢过兔子。你走的每一步都算数。',
  '如果今天有点累，就允许自己休息一下，明天再出发。你已经很棒了。',
  '你比自己想象的勇敢得多——相信我，我见过未来的你。',
  '成绩只是路上的一盏灯，真正让你发光的，是你一直在往前走。',
  '偶尔的失败不是句号，是逗号。你的故事还在继续呢。',
  '别总和别人比，今天的你比昨天好一点点，就很了不起。',
  '那些背不下来的单词、算不出的题，都会在未来变成你的底气。'
];
const LETTER_CLOSING=[
  '所以呀，别着急，慢慢来，我在未来等你。',
  '现在的你只管努力，剩下的交给时间。',
  '无论今天怎么样，未来的我都为你骄傲。',
  '答应我，照顾好自己，也要继续闪闪发光。',
  '把烦恼留在今天吧，明天又是新的开始。'
];
const LETTER_PS=[
  '记得多喝水、早点睡，未来的我可不想看到一个顶着黑眼圈的自己。',
  '如果今天有开心的小事，记得写进手账里哦。',
  '你现在背的每一个单词，未来的我真的都会用到。',
  '别偷吃太多零食，说好的健康长大呀～',
  '累了就抬头看看天空，那朵云说不定也在为你加油。',
  '今天也要对爸爸妈妈好一点，他们真的很爱你。'
];
const LETTER_SIGNS=[
  '永远站在你这边',
  '一直为你骄傲',
  '在时光另一头等你',
  '和你一起长大'
];

function pick(arr){return arr[Math.floor(Math.random()*arr.length)];}

function journalStreak(){
  const dates=new Set(state.journal.map(e=>e.date));
  let n=0;const d=new Date();
  while(dates.has(fmtDate(d))){n++;d.setDate(d.getDate()-1);}
  if(n===0&&dates.has(daysAgoStr(1)))n=1;
  return n;
}

function renderJournal(){
  const today=todayStr();
  const entry=state.journal.find(e=>e.date===today);
  if(entry)selectedMood=entry.mood;
  $('moodChips').innerHTML=MOODS.map(m=>`<button class="chip ${selectedMood===m.id?'on':''}" onclick="pickMood('${m.id}')">${m.emoji} ${m.name}</button>`).join('');
  if(entry){
    if(document.activeElement!==$('journalText'))$('journalText').value=entry.text||'';
    if(document.activeElement!==$('journalGoal'))$('journalGoal').value=entry.goal||'';
  }
  const list=state.journal.slice().sort((a,b)=>b.date.localeCompare(a.date));
  $('journalCount').textContent=state.journal.length+' 篇';
  $('journalList').innerHTML=list.length?list.map(e=>{
    const m=MOODS.find(x=>x.id===e.mood)||MOODS[0];
    return `<div class="journal-item">
      <span class="j-mood">${m.emoji}</span>
      <div class="j-main">
        <div class="j-date">${e.date}${e.date===today?' · 今天':''}</div>
        <div class="j-text">${esc(e.text||'(没有内容)')}</div>
        ${e.goal?`<div class="j-goal">🎯 明天：${esc(e.goal)}</div>`:''}
      </div>
      <button class="t-btn del" onclick="delJournal('${e.id}')" title="删除">🗑</button>
    </div>`;
  }).join(''):'<div class="empty-tip">还没有手账～从今天开始记录吧 📔</div>';
  const last=state.letters[state.letters.length-1];
  if(last){
    $('letterPreview').innerHTML=`<div class="lp-title">${esc(last.title)}</div><div class="lp-body">${esc(last.body.split('\n\n')[0])}……</div><div class="lp-sig">${esc(last.sig)}</div>`;
  }
}
function pickMood(id){selectedMood=id;sfx('click');renderJournal();}
function saveJournal(){
  const text=$('journalText').value.trim();
  const goal=$('journalGoal').value.trim();
  if(!text){toast('写点什么再保存吧 ✏️');return;}
  const today=todayStr();
  const old=state.journal.find(e=>e.date===today);
  const isNew=!old;
  if(old){old.mood=selectedMood;old.text=text;old.goal=goal;old.ts=Date.now();}
  else state.journal.push({id:uid(),date:today,mood:selectedMood,text,goal,ts:Date.now()});
  if(isNew){earnStars(5);markActivity();}
  sfx('coin');save();checkBadges();renderAll();
  toast(isNew?'手账保存成功 +5⭐':'手账已更新 ✨');
}
function delJournal(id){
  askConfirm('删除这篇手账','删除后无法恢复，确定吗？',()=>{
    state.journal=state.journal.filter(e=>e.id!==id);
    save();renderJournal();
    toast('已删除');
  });
}

function generateLetter(){
  const name=state.settings.childName||'宝贝';
  const age=Math.max(10,parseInt(state.settings.childAge)||15);
  const gap=pick([3,4,5,6,7,8,10]);
  const fa=age+gap;
  const year=new Date().getFullYear()+gap;
  const weather=pick(['阳光很好','下着小雨','星星很多','风很温柔','晚霞很美','雪刚刚停']);
  const scene=pick(['刚下班回家','在图书馆发呆','在旅行途中','在天台上看风景','在咖啡店写东西','在回家的地铁上']);
  const thanks=[];
  if(state.totalFocusMin>=60)thanks.push(`专注学习了 ${Math.round(state.totalFocusMin)} 分钟`);
  if(state.totalTasks>0)thanks.push(`认认真真完成了 ${state.totalTasks} 个学习任务`);
  if(state.streak>0)thanks.push(`连续 ${state.streak} 天都没有放弃`);
  if(state.recordStreak>=3)thanks.push(`坚持打卡了 ${state.recordStreak} 天`);
  if(state.badges.length>0)thanks.push(`集齐了 ${state.badges.length} 枚成长徽章`);
  if(state.stars>0)thanks.push(`攒下了 ${state.stars} 颗闪闪的星星`);
  if(state.journal.length>0)thanks.push(`写了 ${state.journal.length} 篇成长手账`);
  const thanksText=thanks.length?`谢谢你，${name}。谢谢你${thanks.join('、')}。`:`谢谢你，${name}。谢谢你在这个年纪选择努力，这就已经足够让我骄傲了。`;
  const body=[
    `我是${fa}岁的你。现在是${year}年，${weather}，我${scene}。忽然特别想给${age}岁的你写一封信。`,
    thanksText,
    pick(LETTER_ENCOURAGE),
    pick(LETTER_CLOSING),
    `P.S. ${pick(LETTER_PS)}`
  ].join('\n\n');
  return {id:uid(),date:todayStr(),title:`致${age}岁的${name}`,body,sig:`—— ${pick(LETTER_SIGNS)}，${fa}岁的你`,ts:Date.now()};
}
function openLetter(){
  renderLetterList();
  const today=todayStr();
  let letter=state.letters.find(l=>l.date===today);
  if(!letter){
    letter=generateLetter();
    state.letters.push(letter);
    state.letterToday=today;
    save();checkBadges();
    sfx('done');confetti();
    toast('收到一封来自未来的信 💌');
  }else sfx('click');
  showLetter(letter);
  $('letterModal').classList.add('show');
}
function closeLetter(){$('letterModal').classList.remove('show');}
function showLetter(l){
  $('letterBox').innerHTML=`<div class="letter-paper">
    <div class="lp-title">${esc(l.title)}</div>
    <div class="lp-body">${esc(l.body)}</div>
    <div class="lp-sig">${esc(l.sig)}</div>
  </div>`;
}
function showLetterById(id){
  const l=state.letters.find(x=>x.id===id);
  if(l)showLetter(l);
}
function renderLetterList(){
  $('letterCount').textContent=state.letters.length?`已收藏 ${state.letters.length} 封来信`:'';
  $('letterList').innerHTML=state.letters.slice().reverse().map(l=>`
    <div class="letter-item" onclick="showLetterById('${l.id}')">
      <span>💌</span><span>${esc(l.title)}</span><span class="li-date">${l.date}</span>
    </div>`).join('')||'<p style="text-align:center;color:var(--ink-soft);font-size:13px">还没有收到来信，点上方按钮收第一封吧～</p>';
}
function drawExtraLetter(){
  if(state.stars<8){toast('星星不够啦，先专注一会儿吧 ✨');return;}
  state.stars-=8;
  const l=generateLetter();
  state.letters.push(l);
  save();checkBadges();renderLetterList();showLetter(l);
  sfx('buy');toast('新的来信写好啦 💌');
}

/* ================= 家长区 ================= */
function renderParent(){
  const el=$('parentBody');
  if(!parentUnlocked){
    el.innerHTML=`
      <p style="text-align:center">这里是家长专区，输入PIN码进入</p>
      <div class="pin-dots" id="pinDots"><i></i><i></i><i></i><i></i></div>
      <div class="pin-keypad">
        ${['1','2','3','4','5','6','7','8','9','','0','del'].map(k=>k?`<button onclick="pinPress('${k}')">${k==='del'?'⌫':k}</button>`:'<button></button>').join('')}
      </div>
      <p style="font-size:12px;color:var(--ink-soft);text-align:center">初始PIN：1234（进入后请尽快修改）</p>`;
    return;
  }
  const pending=state.redemptions.filter(r=>r.status==='pending').length;
  const pendingV=state.verifications.filter(v=>v.status==='pending').length;
  const vstMap={pending:'待审核',approved:'✅ 已通过',rejected:'❌ 未通过'};
  const stMap={pending:'等待确认',approved:'✅ 已确认',declined:'❌ 已拒绝'};
  el.innerHTML=`
    <h3 style="margin:6px 0 4px">👩‍👧 孩子档案</h3>
    <label>孩子昵称</label>
    <input id="setName" type="text" value="${esc(state.settings.childName)}" maxlength="10">
    <label>孩子年龄（用于未来来信）</label>
    <input id="setAge" type="number" value="${state.settings.childAge||15}" min="10" max="18">
    <label>每日专注目标（分钟）</label>
    <input id="setGoal" type="number" value="${state.settings.goalMin}" min="10" max="600">
    <label>可选专注时长（分钟，用逗号分隔）</label>
    <input id="setDurs" type="text" value="${(state.settings.durations||[]).join(',')}">
    <button class="btn block" style="margin-top:12px" onclick="saveChildSettings()">保存孩子设置</button>

    <h3 style="margin:22px 0 4px">🎁 奖励规则</h3>
    <div id="rewardRules">
      ${state.rewards.map((r,i)=>`
        <div class="reward-item">
          <div class="r-info" style="flex:1">
            <input type="text" value="${esc(r.name)}" onchange="updateReward(${i},'name',this.value)" style="width:100%">
            <span style="font-size:12px;color:var(--ink-soft)">需要 ⭐<input type="number" value="${r.cost}" onchange="updateReward(${i},'cost',this.value)" style="width:74px;display:inline;padding:4px 8px"> </span>
          </div>
          <button class="t-btn del" onclick="delReward('${r.id}')">🗑</button>
        </div>`).join('')}
    </div>
    <button class="btn ghost" style="width:100%" onclick="addRewardRule()">＋ 添加奖励</button>

    <h3 style="margin:22px 0 4px">📮 兑换申请 ${pending?`<span style="color:var(--pink-deep)">(${pending}条待确认)</span>`:''}</h3>
    <div id="redemptionList">
      ${state.redemptions.length?state.redemptions.slice().reverse().map(r=>`
        <div class="red-item">
          <span style="flex:1">🎁 ${esc(r.name)} · ⭐${r.cost}</span>
          <span class="st ${r.status}">${stMap[r.status]||r.status}</span>
          ${r.status==='pending'?`<button class="t-btn start" onclick="approveRed('${r.id}')">同意</button><button class="t-btn del" onclick="declineRed('${r.id}')">✕</button>`:''}
        </div>`).join(''):'<p style="color:var(--ink-soft);font-size:13px">还没有兑换申请～</p>'}
    </div>

    <h3 style="margin:22px 0 4px">📸 任务验证 ${pendingV?`<span style="color:var(--pink-deep)">(${pendingV}条待审核)</span>`:''}</h3>
    <p style="font-size:12px;color:var(--ink-soft);margin:4px 0 8px">孩子完成任务拍的成果照在这里审核；通过后任务才算完成并发放奖励。照片只存本机，30 天自动清理。</p>
    <div id="verifyList">
      ${state.verifications.length?state.verifications.slice().reverse().map(v=>`
        <div class="red-item">
          <span style="flex:1">${esc(v.taskEmoji||'')} ${esc(v.taskName)}<br><small style="color:var(--ink-soft)">${v.date} · +${v.bonus}⭐</small></span>
          ${v.photoId?`<img class="v-thumb" data-photo="${esc(v.photoId)}" alt="成果照片">`:'<span class="v-thumb empty">📷</span>'}
          <span class="st ${v.status}">${vstMap[v.status]||v.status}</span>
          ${v.status==='pending'?`<button class="t-btn start" onclick="approveVerification('${v.id}')">通过</button><button class="t-btn del" onclick="rejectVerification('${v.id}')">✕</button>`:''}
        </div>`).join(''):'<p style="color:var(--ink-soft);font-size:13px">还没有任务验证记录～</p>'}
    </div>

    <h3 style="margin:22px 0 4px">🔊 提示音</h3>
    <label style="display:flex;align-items:center;gap:8px"><input type="checkbox" id="setSound" ${state.settings.sound?'checked':''} onchange="state.settings.sound=this.checked;save()"> 开启完成庆祝音效</label>
    <label style="display:flex;align-items:center;gap:8px;margin-top:8px"><input type="checkbox" id="setPhoto" ${state.settings.photoVerify?'checked':''}> 📸 新任务默认需要拍照验证</label>

    <h3 style="margin:22px 0 4px">🔑 修改PIN</h3>
    <div class="row">
      <input id="pin1" type="password" placeholder="新PIN（4位）" maxlength="4">
      <input id="pin2" type="password" placeholder="再输入一次" maxlength="4">
    </div>
    <button class="btn block" style="margin-top:12px" onclick="changePin()">修改PIN</button>

    <h3 style="margin:22px 0 4px">💾 数据管理</h3>
    <div class="row">
      <button class="btn ghost" style="flex:1" onclick="exportData()">导出备份</button>
      <button class="btn ghost" style="flex:1" onclick="$('importFile').click()">导入备份</button>
    </div>
    <input type="file" id="importFile" accept=".json" style="display:none" onchange="importData(event)">
    <button class="btn ghost" style="width:100%;margin-top:10px;color:#d9536b;border-color:#ffd6dc" onclick="resetData()">清空全部数据</button>
    <p style="font-size:12px;color:var(--ink-soft)">导出备份可以保存到其他设备，防止数据丢失；清空后无法恢复，请先导出。</p>`;
}
function pinPress(k){
  if(k==='del')pinBuf=pinBuf.slice(0,-1);
  else if(pinBuf.length<4)pinBuf+=k;
  if(pinBuf.length===4){
    if(pinBuf===state.settings.pin){
      parentUnlocked=true;pinBuf='';sfx('done');
      renderParent();toast('欢迎回来，家长～');
    }else{pinBuf='';toast('PIN码不对哦');}
  }
  const dots=document.querySelectorAll('#pinDots i');
  dots.forEach((d,i)=>d.classList.toggle('on',i<pinBuf.length));
}
function saveChildSettings(){
  state.settings.childName=$('setName').value.trim()||'宝贝';
  state.settings.childAge=Math.max(10,Math.min(18,parseInt($('setAge').value)||15));
  const g=parseInt($('setGoal').value)||60;
  state.settings.goalMin=Math.max(10,Math.min(600,g));
  state.settings.photoVerify=!!$('setPhoto')&&$('setPhoto').checked;
  const durs=$('setDurs').value.split(/[,，\s]+/).map(x=>parseInt(x)).filter(x=>x>=5&&x<=180).slice(0,6);
  if(durs.length){state.settings.durations=durs;}
  save();renderAll();toast('已保存 ✔');
}
function updateReward(i,field,val){
  if(!state.rewards[i])return;
  if(field==='cost')state.rewards[i].cost=Math.max(1,parseInt(val)||10);
  else state.rewards[i].name=val.trim()||'未命名奖励';
  save();
}
function delReward(id){state.rewards=state.rewards.filter(r=>r.id!==id);save();renderParent();}
function addRewardRule(){
  state.rewards.push({id:uid(),name:'新奖励',cost:100});
  save();renderParent();
}
function approveRed(id){
  const r=state.redemptions.find(x=>x.id===id);
  if(!r)return;
  if(state.stars>=r.cost){
    state.stars-=r.cost;
    r.status='approved';
    sfx('coin');toast('已同意兑换 ✔');
  }else{
    r.status='declined';
    toast('星星不够了，自动拒绝');
  }
  save();renderAll();
}
function declineRed(id){
  const r=state.redemptions.find(x=>x.id===id);
  if(r){r.status='declined';save();renderParent();toast('已拒绝该申请');}
}
function changePin(){
  const p1=$('pin1').value,p2=$('pin2').value;
  if(!/^\d{4}$/.test(p1)||p1!==p2){toast('请输入相同的4位数字PIN');return;}
  state.settings.pin=p1;
  $('pin1').value='';$('pin2').value='';
  save();toast('PIN已修改 ✔');
}
function exportData(){
  const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download='星光学习小屋备份.json';
  a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),2000);
}
function importData(ev){
  const file=ev.target.files[0];
  if(!file)return;
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const data=JSON.parse(reader.result);
      if(typeof data!=='object'||data===null)throw 0;
      state=data;mergeState();save();renderAll();
      toast('导入成功 ✔');
    }catch(e){toast('文件格式不对哦');}
  };
  reader.readAsText(file);
  ev.target.value='';
}
function resetData(){
  askConfirm('清空全部数据','将删除所有星星、任务和记录，且无法恢复。确定要清空吗？',()=>{
    try{localStorage.removeItem(LS_KEY);}catch(e){}
    state=defaultState();save();renderAll();
    toast('已重新开始，加油！');
  });
}

/* ================= 汇总渲染 ================= */
function renderAll(){
  renderTop();renderTasks();renderDurationChips();syncChar();
  renderWardrobe();renderBadges();renderReport();renderJournal();renderParent();
  renderVerifyPhotos();
  if($('rewardModal').classList.contains('show'))renderRewards();
  if($('letterModal').classList.contains('show'))renderLetterList();
  updateTimerUI();
}

/* ================= 初始化 ================= */
document.querySelectorAll('.char-acc').forEach(s=>{s.innerHTML=ACC_SVG;});
load();rollDay();
if(!state.settings.durations.includes(selectedDuration))selectedDuration=state.settings.durations[0];
setExpression('normal');
renderAll();
checkBadges();
dbCleanPhotos(30);

document.querySelectorAll('.nav button').forEach(b=>{
  b.onclick=()=>{
    document.querySelectorAll('.nav button').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    $('tab-'+b.dataset.tab).classList.add('active');
    if(b.dataset.tab==='parent'){renderParent();renderVerifyPhotos();}
    if(b.dataset.tab==='wardrobe')renderWardrobe();
    sfx('click');
    window.scrollTo(0,0);
  };
});

document.addEventListener('visibilitychange',()=>{
  if(document.hidden){
    if(timer.running&&!timer.paused){
      pauseFocus();
      toast('离开页面已自动暂停，回来点"继续"就好～');
    }
    return;
  }
  const before=todayStr();
  rollDay();
  if(before!==todayStr())renderAll();
  if(timer.running&&!timer.paused)tick();
});
setInterval(()=>{
  const t=todayStr();
  if(state.lastActive&&state.lastActive!==t){
    rollDay();renderAll();
  }
},60000);

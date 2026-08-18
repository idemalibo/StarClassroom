
/* ================= 数据与常量 ================= */
const LS_KEY='starStudy_v1';
const SKIN='#ffe7d6';

const CHAR_SVG=`
<ellipse class="shadow" cx="160" cy="352" rx="88" ry="12" fill="rgba(110,75,135,.16)"/>
<g class="hair-back twintails" data-part="twintails">
  <ellipse cx="160" cy="126" rx="64" ry="62" fill="var(--hair)"/>
  <ellipse cx="152" cy="90" rx="40" ry="11" fill="#fff" opacity=".28"/>
  <path d="M100 118 C68 126 56 194 66 282 C74 302 96 307 104 296 C112 285 106 267 96 246 C86 224 86 176 110 132 Z" fill="var(--hair)"/>
  <ellipse cx="74" cy="200" rx="9" ry="13" fill="var(--hair-dark)"/>
  <path d="M220 118 C252 126 264 194 254 282 C246 302 224 307 216 296 C208 285 214 267 224 246 C234 224 234 176 210 132 Z" fill="var(--hair)"/>
  <ellipse cx="246" cy="200" rx="9" ry="13" fill="var(--hair-dark)"/>
</g>
<g class="hair-back long" data-part="long">
  <ellipse cx="160" cy="126" rx="64" ry="62" fill="var(--hair)"/>
  <ellipse cx="152" cy="90" rx="40" ry="11" fill="#fff" opacity=".28"/>
  <path d="M100 118 C100 64 220 64 220 118 L220 210 C220 252 208 294 184 320 C172 332 148 332 136 320 C112 294 100 252 100 210 Z" fill="var(--hair)"/>
</g>
<g class="hair-back buns" data-part="buns">
  <ellipse cx="160" cy="126" rx="64" ry="62" fill="var(--hair)"/>
  <circle cx="104" cy="82" r="27" fill="var(--hair)"/>
  <circle cx="216" cy="82" r="27" fill="var(--hair)"/>
  <ellipse cx="104" cy="106" rx="15" ry="5" fill="var(--hair-dark)"/>
  <ellipse cx="216" cy="106" rx="15" ry="5" fill="var(--hair-dark)"/>
  <ellipse cx="150" cy="90" rx="36" ry="10" fill="#fff" opacity=".28"/>
</g>
<g class="hair-back bob" data-part="bob">
  <path d="M100 118 C98 62 222 62 220 118 C220 150 216 178 206 198 C200 212 188 212 182 202 C176 216 160 216 154 204 C148 218 132 218 126 206 C116 216 102 214 94 200 C86 182 90 148 100 118 Z" fill="var(--hair)"/>
  <ellipse cx="152" cy="92" rx="38" ry="10" fill="#fff" opacity=".28"/>
</g>
<g class="hair-back braids" data-part="braids">
  <ellipse cx="160" cy="126" rx="64" ry="62" fill="var(--hair)"/>
  <ellipse cx="152" cy="90" rx="40" ry="11" fill="#fff" opacity=".28"/>
  <path d="M102 116 C74 126 62 170 74 232 C80 262 74 288 68 310 C78 314 86 311 90 302 C84 276 88 244 92 212 C96 176 102 142 118 126 Z" fill="var(--hair)"/>
  <ellipse cx="80" cy="182" rx="10" ry="4.5" fill="var(--hair-dark)"/>
  <ellipse cx="77" cy="226" rx="9" ry="4" fill="var(--hair-dark)"/>
  <ellipse cx="74" cy="270" rx="8" ry="4" fill="var(--hair-dark)"/>
  <path d="M218 116 C246 126 258 170 246 232 C240 262 246 288 252 310 C242 314 234 311 230 302 C236 276 232 244 228 212 C224 176 218 142 202 126 Z" fill="var(--hair)"/>
  <ellipse cx="240" cy="182" rx="10" ry="4.5" fill="var(--hair-dark)"/>
  <ellipse cx="243" cy="226" rx="9" ry="4" fill="var(--hair-dark)"/>
  <ellipse cx="246" cy="270" rx="8" ry="4" fill="var(--hair-dark)"/>
</g>

<g class="outfit school" data-part="school">
  <rect x="126" y="186" width="68" height="72" rx="20" fill="#ffffff" stroke="#e6d9f7" stroke-width="2"/>
  <path d="M126 198 L160 234 L194 198 C186 208 174 212 160 212 C146 212 134 208 126 198 Z" fill="#a8e8e0" stroke="#7fd4cb" stroke-width="1.5"/>
  <path d="M155 205 L160 228 L165 205 Z" fill="#ff8fb8"/>
  <circle cx="160" cy="205" r="5.5" fill="#ff6fae"/>
  <rect x="108" y="192" width="22" height="36" rx="11" fill="#ffffff" stroke="#e6d9f7" stroke-width="2"/>
  <rect x="190" y="192" width="22" height="36" rx="11" fill="#ffffff" stroke="#e6d9f7" stroke-width="2"/>
  <circle cx="119" cy="238" r="8" fill="${SKIN}"/>
  <circle cx="201" cy="238" r="8" fill="${SKIN}"/>
  <path d="M124 254 L196 254 L204 312 L116 312 Z" fill="#7d8ce0"/>
  <path d="M134 254 L130 312 M147 254 L146 312 M160 254 L160 312 M173 254 L174 312 M186 254 L190 312" stroke="#93a2ec" stroke-width="1.5"/>
  <rect x="116" y="304" width="88" height="8" fill="#6b7bd8"/>
  <rect x="142" y="312" width="12" height="17" rx="6" fill="${SKIN}"/>
  <rect x="166" y="312" width="12" height="17" rx="6" fill="${SKIN}"/>
  <rect x="137" y="327" width="21" height="11" rx="6" fill="#5b4a63"/>
  <rect x="162" y="327" width="21" height="11" rx="6" fill="#5b4a63"/>
</g>
<g class="outfit idol" data-part="idol">
  <rect x="126" y="186" width="68" height="64" rx="20" fill="#3d4056"/>
  <path d="M126 216 Q160 228 194 216 L194 222 Q160 234 126 222 Z" fill="#39c5bb"/>
  <path d="M154 205 L160 228 L166 205 Z" fill="#39c5bb"/>
  <rect x="155" y="201" width="10" height="9" rx="3" fill="#2ea898"/>
  <rect x="110" y="190" width="20" height="32" rx="10" fill="#3d4056"/>
  <rect x="190" y="190" width="20" height="32" rx="10" fill="#3d4056"/>
  <rect x="110" y="218" width="20" height="8" rx="4" fill="#ffffff"/>
  <rect x="190" y="218" width="20" height="8" rx="4" fill="#ffffff"/>
  <circle cx="120" cy="236" r="8" fill="${SKIN}"/>
  <circle cx="200" cy="236" r="8" fill="${SKIN}"/>
  <path d="M124 248 L196 248 L203 312 L117 312 Z" fill="#39c5bb"/>
  <path d="M136 248 L133 312 M148 248 L147 312 M160 248 L160 312 M172 248 L173 312 M184 248 L187 312" stroke="#2ea898" stroke-width="1.5"/>
  <rect x="117" y="304" width="86" height="8" fill="#2f2f46"/>
  <rect x="142" y="312" width="12" height="15" rx="6" fill="${SKIN}"/>
  <rect x="166" y="312" width="12" height="15" rx="6" fill="${SKIN}"/>
  <rect x="135" y="326" width="24" height="13" rx="6" fill="#3d4056"/>
  <rect x="161" y="326" width="24" height="13" rx="6" fill="#3d4056"/>
  <rect x="154" y="184" width="12" height="5" rx="2" fill="#39c5bb"/>
</g>
<g class="outfit hoodie" data-part="hoodie">
  <ellipse cx="160" cy="186" rx="46" ry="16" fill="#c9b8f5"/>
  <rect x="126" y="192" width="68" height="62" rx="20" fill="#c9b8f5"/>
  <path d="M136 236 L184 236 L180 252 L140 252 Z" fill="#b7a4ec"/>
  <path d="M151 202 L149 222 M169 202 L171 222" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <circle cx="149" cy="225" r="2.5" fill="#fff"/><circle cx="171" cy="225" r="2.5" fill="#fff"/>
  <rect x="110" y="196" width="22" height="36" rx="11" fill="#c9b8f5"/>
  <rect x="188" y="196" width="22" height="36" rx="11" fill="#c9b8f5"/>
  <circle cx="121" cy="240" r="8" fill="${SKIN}"/>
  <circle cx="199" cy="240" r="8" fill="${SKIN}"/>
  <rect x="128" y="252" width="64" height="58" fill="#9fb7e8"/>
  <path d="M160 252 L160 310" stroke="#8da6dd" stroke-width="2"/>
  <rect x="134" y="312" width="26" height="13" rx="6" fill="#ffffff" stroke="#e3e9f5" stroke-width="1.5"/>
  <rect x="134" y="321" width="26" height="5" rx="3" fill="#ff9ec7"/>
  <rect x="160" y="312" width="26" height="13" rx="6" fill="#ffffff" stroke="#e3e9f5" stroke-width="1.5"/>
  <rect x="160" y="321" width="26" height="5" rx="3" fill="#ff9ec7"/>
</g>
<g class="outfit dress" data-part="dress">
  <circle cx="118" cy="208" r="13" fill="#ffd0e4"/>
  <circle cx="202" cy="208" r="13" fill="#ffd0e4"/>
  <rect x="132" y="188" width="56" height="50" rx="18" fill="#ffb7d5"/>
  <rect x="132" y="232" width="56" height="8" fill="#ff6fae"/>
  <path d="M152 236 L142 226 M168 236 L178 226" stroke="#ff6fae" stroke-width="4" stroke-linecap="round"/>
  <circle cx="160" cy="236" r="5" fill="#ff6fae"/>
  <circle cx="118" cy="232" r="8" fill="${SKIN}"/>
  <circle cx="202" cy="232" r="8" fill="${SKIN}"/>
  <path d="M124 238 C128 270 150 282 160 282 C170 282 192 270 196 238 L202 296 C196 310 186 304 180 292 C174 306 164 306 160 292 C156 306 146 306 140 292 C134 304 124 310 118 296 Z" fill="#ff9ec7"/>
  <path d="M160 282 L160 306" stroke="#ff8fb8" stroke-width="1.5" opacity=".7"/>
  <rect x="142" y="300" width="12" height="15" rx="6" fill="${SKIN}"/>
  <rect x="166" y="300" width="12" height="15" rx="6" fill="${SKIN}"/>
  <rect x="138" y="315" width="22" height="11" rx="6" fill="#ff6fae"/>
  <rect x="160" y="315" width="22" height="11" rx="6" fill="#ff6fae"/>
</g>
<g class="outfit maid" data-part="maid">
  <rect x="126" y="186" width="68" height="66" rx="20" fill="#4a4d78"/>
  <path d="M142 208 L146 190 M178 208 L174 190" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
  <rect x="138" y="206" width="44" height="52" rx="10" fill="#ffffff"/>
  <rect x="110" y="190" width="22" height="34" rx="11" fill="#ffffff"/>
  <rect x="188" y="190" width="22" height="34" rx="11" fill="#ffffff"/>
  <circle cx="121" cy="232" r="8" fill="${SKIN}"/>
  <circle cx="199" cy="232" r="8" fill="${SKIN}"/>
  <path d="M124 250 L196 250 L202 306 L118 306 Z" fill="#ffffff"/>
  <path d="M118 300 C126 293 134 300 142 293 C150 300 158 293 166 300 C174 293 182 300 190 293 L202 300 L202 306 L118 306 Z" fill="#f0e9ff"/>
  <path d="M138 258 L138 272 M160 258 L160 272 M182 258 L182 272" stroke="#f0e9ff" stroke-width="2"/>
  <rect x="142" y="306" width="12" height="13" rx="6" fill="${SKIN}"/>
  <rect x="166" y="306" width="12" height="13" rx="6" fill="${SKIN}"/>
  <rect x="138" y="318" width="21" height="11" rx="6" fill="#3c3f58"/>
  <rect x="161" y="318" width="21" height="11" rx="6" fill="#3c3f58"/>
</g>

<g class="headskin">
  <rect x="150" y="176" width="20" height="18" rx="8" fill="${SKIN}"/>
  <ellipse cx="160" cy="128" rx="60" ry="56" fill="${SKIN}"/>
  <ellipse cx="101" cy="142" rx="8" ry="11" fill="${SKIN}"/>
  <ellipse cx="219" cy="142" rx="8" ry="11" fill="${SKIN}"/>
  <ellipse cx="101" cy="143" rx="4" ry="6" fill="#f7cbb6"/>
  <ellipse cx="219" cy="143" rx="4" ry="6" fill="#f7cbb6"/>
</g>

<g class="hair-front twintails" data-part="twintails">
  <path d="M100 116 C98 74 118 64 160 64 C202 64 222 74 220 116 C220 108 214 106 210 112 C206 118 198 112 194 104 C190 114 182 110 178 102 C174 112 166 110 162 102 C158 112 150 110 146 102 C142 112 134 110 130 102 C126 112 118 110 114 104 C110 110 104 110 100 116 Z" fill="var(--hair)"/>
  <path d="M100 116 C90 140 92 168 102 190 C110 184 114 172 114 154 C114 140 108 126 100 116 Z" fill="var(--hair)"/>
  <path d="M220 116 C230 140 228 168 218 190 C210 184 206 172 206 154 C206 140 212 126 220 116 Z" fill="var(--hair)"/>
</g>
<g class="hair-front long" data-part="long">
  <path d="M100 116 C98 74 118 64 160 64 C202 64 222 74 220 116 C220 108 214 106 210 112 C206 118 198 112 194 104 C190 114 182 110 178 102 C174 112 166 110 162 102 C158 112 150 110 146 102 C142 112 134 110 130 102 C126 112 118 110 114 104 C110 110 104 110 100 116 Z" fill="var(--hair)"/>
  <path d="M100 116 C90 140 92 168 102 190 C110 184 114 172 114 154 C114 140 108 126 100 116 Z" fill="var(--hair)"/>
  <path d="M220 116 C230 140 228 168 218 190 C210 184 206 172 206 154 C206 140 212 126 220 116 Z" fill="var(--hair)"/>
</g>
<g class="hair-front buns" data-part="buns">
  <path d="M100 116 C98 74 118 64 160 64 C202 64 222 74 220 116 C220 108 214 106 210 112 C206 118 198 112 194 104 C190 114 182 110 178 102 C174 112 166 110 162 102 C158 112 150 110 146 102 C142 112 134 110 130 102 C126 112 118 110 114 104 C110 110 104 110 100 116 Z" fill="var(--hair)"/>
  <path d="M100 116 C90 140 92 168 102 190 C110 184 114 172 114 154 C114 140 108 126 100 116 Z" fill="var(--hair)"/>
  <path d="M220 116 C230 140 228 168 218 190 C210 184 206 172 206 154 C206 140 212 126 220 116 Z" fill="var(--hair)"/>
</g>
<g class="hair-front bob" data-part="bob">
  <path d="M100 116 C98 74 118 64 160 64 C202 64 222 74 220 116 C220 108 214 106 210 112 C206 118 198 112 194 104 C190 114 182 110 178 102 C174 112 166 110 162 102 C158 112 150 110 146 102 C142 112 134 110 130 102 C126 112 118 110 114 104 C110 110 104 110 100 116 Z" fill="var(--hair)"/>
  <path d="M100 116 C90 140 92 168 102 190 C110 184 114 172 114 154 C114 140 108 126 100 116 Z" fill="var(--hair)"/>
  <path d="M220 116 C230 140 228 168 218 190 C210 184 206 172 206 154 C206 140 212 126 220 116 Z" fill="var(--hair)"/>
</g>
<g class="hair-front braids" data-part="braids">
  <path d="M100 116 C98 74 118 64 160 64 C202 64 222 74 220 116 C220 108 214 106 210 112 C206 118 198 112 194 104 C190 114 182 110 178 102 C174 112 166 110 162 102 C158 112 150 110 146 102 C142 112 134 110 130 102 C126 112 118 110 114 104 C110 110 104 110 100 116 Z" fill="var(--hair)"/>
  <path d="M100 116 C90 140 92 168 102 190 C110 184 114 172 114 154 C114 140 108 126 100 116 Z" fill="var(--hair)"/>
  <path d="M220 116 C230 140 228 168 218 190 C210 184 206 172 206 154 C206 140 212 126 220 116 Z" fill="var(--hair)"/>
</g>

<g class="facebase">
  <path d="M126 108 Q140 101 154 108 M166 108 Q180 101 194 108" stroke="#c98a9a" stroke-width="3.5" stroke-linecap="round" fill="none"/>
  <ellipse cx="121" cy="150" rx="10" ry="5" fill="#ffb9cf" opacity=".5"/>
  <ellipse cx="199" cy="150" rx="10" ry="5" fill="#ffb9cf" opacity=".5"/>
</g>

<g class="expr normal" data-part="normal">
  <g class="eyes">
    <ellipse cx="140" cy="134" rx="13" ry="16" fill="#463a58"/>
    <ellipse cx="142" cy="136" rx="7.5" ry="9.5" fill="var(--eye)"/>
    <circle cx="136" cy="128" r="4.5" fill="#fff"/>
    <circle cx="144" cy="141" r="2.2" fill="#fff" opacity=".9"/>
    <ellipse cx="180" cy="134" rx="13" ry="16" fill="#463a58"/>
    <ellipse cx="178" cy="136" rx="7.5" ry="9.5" fill="var(--eye)"/>
    <circle cx="176" cy="128" r="4.5" fill="#fff"/>
    <circle cx="184" cy="141" r="2.2" fill="#fff" opacity=".9"/>
  </g>
  <path d="M153 158 Q160 165 167 158" stroke="#e06d8f" stroke-width="3" stroke-linecap="round" fill="none"/>
</g>
<g class="expr focus" data-part="focus">
  <ellipse cx="140" cy="136" rx="12" ry="6.5" fill="#463a58"/>
  <ellipse cx="141" cy="137" rx="6" ry="3" fill="var(--eye)"/>
  <circle cx="137" cy="134" r="2.5" fill="#fff"/>
  <ellipse cx="180" cy="136" rx="12" ry="6.5" fill="#463a58"/>
  <ellipse cx="179" cy="137" rx="6" ry="3" fill="var(--eye)"/>
  <circle cx="177" cy="134" r="2.5" fill="#fff"/>
  <path d="M155 161 L165 161" stroke="#e06d8f" stroke-width="3" stroke-linecap="round"/>
</g>
<g class="expr happy" data-part="happy">
  <path d="M128 137 Q140 148 152 137 M168 137 Q180 148 192 137" stroke="#463a58" stroke-width="4" stroke-linecap="round" fill="none"/>
  <path d="M151 156 Q160 170 169 156 Z" fill="#e06d8f"/>
</g>

<g class="acc-head bow" data-part="bow">
  <path d="M101 92 C87 74 70 78 62 92 C76 96 88 96 101 92 Z" fill="#ff8fb8"/>
  <path d="M101 92 C115 74 132 78 140 92 C126 96 114 96 101 92 Z" fill="#ff8fb8"/>
  <circle cx="101" cy="92" r="7" fill="#ff6fae"/>
  <path d="M101 98 C97 108 93 116 96 126 C100 122 104 118 104 108 C104 104 103 101 101 98 Z" fill="#ff8fb8"/>
</g>
<g class="acc-head cat" data-part="cat">
  <path d="M116 76 L128 42 L148 70 Z" fill="var(--hair)"/>
  <path d="M124 70 L129 50 L141 68 Z" fill="#ffc7d9"/>
  <path d="M204 76 L192 42 L172 70 Z" fill="var(--hair)"/>
  <path d="M196 70 L191 50 L179 68 Z" fill="#ffc7d9"/>
</g>
<g class="acc-head headphone" data-part="headphone">
  <path d="M98 108 C98 60 222 60 222 108" fill="none" stroke="#6d5b9e" stroke-width="10" stroke-linecap="round"/>
  <rect x="90" y="100" width="16" height="34" rx="8" fill="#58c9bd"/>
  <rect x="214" y="100" width="16" height="34" rx="8" fill="#58c9bd"/>
  <circle cx="98" cy="117" r="4" fill="#fff" opacity=".65"/>
  <circle cx="222" cy="117" r="4" fill="#fff" opacity=".65"/>
</g>
<g class="acc-head star" data-part="star">
  <path d="M212 64 L216.5 75 L228 75.8 L219.3 83.2 L222 94.5 L212 89 L202 94.5 L204.7 83.2 L196 75.8 L207.5 75 Z" fill="#ffd77a" stroke="#f2b93f" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M197 62 l2.2 4.5 4.5 2.2 -4.5 2.2 -2.2 4.5 -2.2 -4.5 -4.5 -2.2 4.5 -2.2 Z" fill="#ffe9a8"/>
</g>
<g class="acc-head halo" data-part="halo">
  <ellipse cx="160" cy="54" rx="30" ry="7" fill="none" stroke="#ffd77a" stroke-width="7"/>
  <circle cx="160" cy="54" r="17" fill="#ffe9a8" opacity=".35"/>
</g>
<g class="acc-face glasses" data-part="glasses">
  <circle cx="140" cy="136" r="16" fill="rgba(255,255,255,.18)" stroke="#a98ad0" stroke-width="3"/>
  <circle cx="180" cy="136" r="16" fill="rgba(255,255,255,.18)" stroke="#a98ad0" stroke-width="3"/>
  <path d="M156 134 Q160 130 164 134" fill="none" stroke="#a98ad0" stroke-width="3"/>
  <path d="M124 132 L110 126 M196 132 L210 126" fill="none" stroke="#a98ad0" stroke-width="3" stroke-linecap="round"/>
</g>
`;

const HAIR_STYLES=[
  {id:'twintails',name:'双马尾',price:0,emoji:'🎀'},
  {id:'long',name:'长直发',price:120,emoji:'💇‍♀️'},
  {id:'buns',name:'丸子头',price:90,emoji:'🍡'},
  {id:'bob',name:'波波头',price:80,emoji:'🪄'},
  {id:'braids',name:'麻花辫',price:140,emoji:'🥨'}
];
const HAIR_COLORS=[
  {id:'mint',name:'薄荷绿',hex:'#45c4ad',dark:'#2fa393'},
  {id:'pink',name:'樱粉色',hex:'#ff9ec7',dark:'#ef7fab'},
  {id:'purple',name:'薰衣草紫',hex:'#b79cff',dark:'#9c7df0'},
  {id:'gold',name:'奶金色',hex:'#ffd77a',dark:'#e8b64e'},
  {id:'blue',name:'天空蓝',hex:'#7fd0f5',dark:'#5fb7e6'}
];
const OUTFITS=[
  {id:'school',name:'水手校服',price:0,emoji:'🎒'},
  {id:'idol',name:'偶像演出服',price:200,emoji:'🎤'},
  {id:'hoodie',name:'休闲卫衣',price:100,emoji:'🧸'},
  {id:'dress',name:'梦幻连衣裙',price:150,emoji:'👗'},
  {id:'maid',name:'小女仆装',price:180,emoji:'🍰'}
];
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
  {key:'hair',stateKey:'hair',cat:'hairs',name:'发型',items:HAIR_STYLES},
  {key:'hairColor',stateKey:'hairColor',cat:'hairColors',name:'发色',items:HAIR_COLORS},
  {key:'outfit',stateKey:'outfit',cat:'outfits',name:'服装',items:OUTFITS},
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
  {id:'lvl10',emoji:'👑',name:'星海主宰',desc:'达到10级',reward:150,check:()=>state.xp>=4000}
];
const LEVELS=[
  {xp:0,name:'星光学徒'},{xp:80,name:'星光精灵'},{xp:200,name:'魔法少女'},
  {xp:400,name:'闪耀偶像'},{xp:700,name:'樱花舞姬'},{xp:1100,name:'星之公主'},
  {xp:1600,name:'月光歌姬'},{xp:2200,name:'银河女神'},{xp:3000,name:'幻梦天使'},
  {xp:4000,name:'星海主宰'}
];

let state=null;
let timer={running:false,paused:false,total:0,remain:0,endAt:0,iv:null,taskId:null};
let selectedDuration=25;
let parentUnlocked=false;
let confirmCb=null;
let wardCat='hair';
let pinBuf='';

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
  let n=state.owned.hairs.length+state.owned.hairColors.length+state.owned.outfits.length+state.owned.bgs.length;
  n+=state.owned.accHeads.filter(x=>x!=='none').length;
  return n;
}

/* ================= 状态 ================= */
function defaultState(){
  const t=todayStr();
  return {
    v:1,stars:0,xp:0,totalStarsEarned:0,streak:0,recordStreak:0,lastActive:'',
    totalFocusMin:0,totalSessions:0,totalTasks:0,nightStudy:false,weekendTasks:0,
    dayLog:{},
    tasks:{[t]:[
      {id:uid(),emoji:'📐',name:'试试点：数学练习 30分钟',min:30,done:false},
      {id:uid(),emoji:'📖',name:'阅读语文课文 20分钟',min:20,done:false}
    ]},
    wardrobe:{hair:'twintails',hairColor:'mint',outfit:'school',accHead:'bow',accFace:'none',bg:'study'},
    owned:{hairs:['twintails'],hairColors:['mint'],outfits:['school'],accHeads:['none','bow'],accFaces:[],bgs:['study']},
    badges:[],
    redemptions:[],
    rewards:[
      {id:uid(),name:'手机自由时间 30分钟',cost:150},
      {id:uid(),name:'零花钱 10元',cost:300},
      {id:uid(),name:'周末出去玩一下午',cost:800}
    ],
    settings:{pin:'1234',goalMin:60,durations:[25,40,45,60],focusDefault:25,childName:'宝贝',sound:true}
  };
}
function mergeState(){
  const d=defaultState();
  for(const k in d){if(state[k]===undefined)state[k]=d[k];}
  state.settings=Object.assign({},d.settings,state.settings||{});
  state.owned=Object.assign({},d.owned,state.owned||{});
  state.tasks=state.tasks||{}; state.dayLog=state.dayLog||{};
  if(!Array.isArray(state.rewards)||!state.rewards.length)state.rewards=d.rewards;
}
function load(){
  try{
    const raw=localStorage.getItem(LS_KEY);
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
  if(!state.lastActive)state.lastActive=t;
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
  document.querySelectorAll('.char-svg').forEach(svg=>{
    svg.querySelectorAll(cls).forEach(el=>el.classList.toggle('on',el.dataset.part===id));
  });
}
function setExpression(e){
  document.querySelectorAll('.char-svg').forEach(svg=>{
    svg.querySelectorAll('.expr').forEach(el=>el.classList.toggle('on',el.dataset.part===e));
  });
}
function syncChar(){
  const w=state.wardrobe;
  const hc=HAIR_COLORS.find(c=>c.id===w.hairColor)||HAIR_COLORS[0];
  document.querySelectorAll('.char-svg').forEach(svg=>{
    svg.style.setProperty('--hair',hc.hex);
    svg.style.setProperty('--hair-dark',hc.dark);
    svg.style.setProperty('--eye',hc.hex);
  });
  setOn('.hair-back',w.hair);setOn('.hair-front',w.hair);setOn('.outfit',w.outfit);
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
        <div class="t-info"><div class="t-name">${esc(task.name)}</div><div class="t-meta">${task.min||'--'} 分钟</div></div>
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
  const current=cat.key==='accHead'?(state.wardrobe.accHead==='none'?'none':state.wardrobe.accFace==='glasses'?'glasses':state.wardrobe.accHead):state.wardrobe[cat.stateKey];
  $('wardGrid').innerHTML=cat.items.map(item=>{
    const isOwned=item.id==='none'||owned.includes(item.id);
    const equipped=current===item.id;
    const priceHtml=isOwned?'':`<div class="w-price">⭐ ${item.price}</div>`;
    const vis=cat.key==='hairColor'?`<div class="swatch" style="background:${item.hex}"></div>`:`<div class="w-emoji">${item.emoji}</div>`;
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
  if(cat==='hairs')w.hair=id;
  else if(cat==='hairColors')w.hairColor=id;
  else if(cat==='outfits')w.outfit=id;
  else if(cat==='accHeads'){if(id==='glasses')w.accFace='glasses';else{w.accHead=id;if(id==='none')w.accFace='none';}}
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
  state.tasks[t].push({id:uid(),emoji:$('taskSubject').value,name,min,done:false});
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
    task.done=true;
    earnStars(5);
    getLog(t).tasks+=1;
    state.totalTasks+=1;
    const d=new Date().getDay();
    if(d===0||d===6)state.weekendTasks=(state.weekendTasks||0)+1;
    markActivity();
    sfx('coin');confetti();
    toast('任务完成！+5⭐');
  }else task.done=false;
  save();checkBadges();renderAll();
}

/* ================= 专注计时 ================= */
function startFocus(taskId){
  if(timer.running)return;
  timer.taskId=taskId||null;
  timer.total=selectedDuration*60;
  timer.remain=timer.total;
  timer.running=true;timer.paused=false;
  timer.endAt=Date.now()+timer.total*1000;
  const task=taskId?todayTasks().find(x=>x.id===taskId):null;
  $('focusTaskName').textContent=task?`${task.emoji} ${task.name}`:'自由专注';
  $('pauseBtn').textContent='⏸️ 暂停';
  $('focusSub').textContent='学习中…';
  $('focusNote').textContent='专注的时候，星星会一颗一颗亮起来 ✨';
  $('focusOverlay').classList.add('show');
  setExpression('focus');
  clearInterval(timer.iv);
  timer.iv=setInterval(tick,250);
  sfx('click');updateTimerUI();
}
function todayTasks(){const t=todayStr();return state.tasks[t]||[];}
function tick(){
  if(!timer.running||timer.paused)return;
  timer.remain=Math.max(0,Math.round((timer.endAt-Date.now())/1000));
  updateTimerUI();
  if(timer.remain<=0)completeFocus();
}
function pauseFocus(){
  if(!timer.running)return;
  if(timer.paused){
    timer.paused=false;
    timer.endAt=Date.now()+timer.remain*1000;
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
    timer.running=false;timer.paused=false;
    $('focusOverlay').classList.remove('show');
    setExpression('normal');
    updateTimerUI();
    toast('没关系，休息一下再继续～');
  });
}
function completeFocus(){
  clearInterval(timer.iv);
  timer.running=false;timer.paused=false;
  const mins=timer.total/60;
  const t=todayStr();
  const task=timer.taskId?todayTasks().find(x=>x.id===timer.taskId):null;
  const taskDone=task&&!task.done;
  let stars=mins+(taskDone?10:0);
  let xp=mins+(taskDone?10:0);
  const lvBefore=levelInfo().idx;
  if(taskDone){task.done=true;getLog(t).tasks+=1;state.totalTasks+=1;}
  const d=new Date().getDay();
  if(taskDone&&(d===0||d===6))state.weekendTasks=(state.weekendTasks||0)+1;
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
  $('celebrateMsg').textContent=(task?`「${task.emoji} ${task.name}」完成啦！`:'自由专注完成！')+(lvAfter>lvBefore?` 升级到 Lv.${lvAfter}「${levelInfo().name}」！`:'');
  $('gainStars').textContent=Math.round(stars);
  $('gainXp').textContent=Math.round(xp);
  $('celebrate').classList.add('show');
  setExpression('happy');
  confetti();sfx('done');
  save();checkBadges();renderAll();
}
function closeCelebrate(){
  $('celebrate').classList.remove('show');
  setExpression('normal');
  updateTimerUI();
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
  const stMap={pending:'等待确认',approved:'✅ 已确认',declined:'❌ 已拒绝'};
  el.innerHTML=`
    <h3 style="margin:6px 0 4px">👩‍👧 孩子档案</h3>
    <label>孩子昵称</label>
    <input id="setName" type="text" value="${esc(state.settings.childName)}" maxlength="10">
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

    <h3 style="margin:22px 0 4px">🔊 提示音</h3>
    <label style="display:flex;align-items:center;gap:8px"><input type="checkbox" id="setSound" ${state.settings.sound?'checked':''} onchange="state.settings.sound=this.checked;save()"> 开启完成庆祝音效</label>

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
  const g=parseInt($('setGoal').value)||60;
  state.settings.goalMin=Math.max(10,Math.min(600,g));
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
  renderWardrobe();renderBadges();renderReport();renderParent();
  if($('rewardModal').classList.contains('show'))renderRewards();
  updateTimerUI();
}

/* ================= 初始化 ================= */
document.querySelectorAll('.char-svg').forEach(s=>{s.innerHTML=CHAR_SVG;});
load();rollDay();
if(!state.settings.durations.includes(selectedDuration))selectedDuration=state.settings.durations[0];
setExpression('normal');
renderAll();
checkBadges();

document.querySelectorAll('.nav button').forEach(b=>{
  b.onclick=()=>{
    document.querySelectorAll('.nav button').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    $('tab-'+b.dataset.tab).classList.add('active');
    if(b.dataset.tab==='parent')renderParent();
    if(b.dataset.tab==='wardrobe')renderWardrobe();
    sfx('click');
    window.scrollTo(0,0);
  };
});

document.addEventListener('visibilitychange',()=>{
  if(!document.hidden){
    const before=todayStr();
    rollDay();
    if(before!==todayStr())renderAll();
    if(timer.running&&!timer.paused)tick();
  }
});
setInterval(()=>{
  const t=todayStr();
  if(state.lastActive&&state.lastActive!==t){
    rollDay();renderAll();
  }
},60000);

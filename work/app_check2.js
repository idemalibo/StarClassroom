
/* ================= 数据与常量 ================= */
const LS_KEY='starStudy_v2';
const SKIN='#ffe7d6';

const CHAR_SVG=`
<defs>
  <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
    <stop class="hg1" offset="0" stop-color="#45c4ad"/>
    <stop class="hg2" offset="1" stop-color="#2ba99b"/>
  </linearGradient>
  <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffebdf"/>
    <stop offset="1" stop-color="#ffd9c4"/>
  </linearGradient>
  <linearGradient id="blackGrad" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#34343f"/>
    <stop offset="1" stop-color="#1c1c25"/>
  </linearGradient>
</defs>
<ellipse class="shadow" cx="160" cy="372" rx="86" ry="11" fill="rgba(110,75,135,.16)"/>

<g class="hair-back twintails" data-part="twintails">
  <path d="M106 112 C102 62 128 54 160 54 C192 54 218 62 214 112 C214 140 196 168 160 172 C124 168 106 140 106 112 Z" fill="url(#hairGrad)"/>
  <path d="M106 110 C66 118 52 208 66 322 C74 348 102 354 110 340 C118 326 112 304 102 278 C90 244 92 172 120 128 Z" fill="url(#hairGrad)"/>
  <path d="M214 110 C254 118 268 208 254 322 C246 348 218 354 210 340 C202 326 208 304 218 278 C230 244 228 172 200 128 Z" fill="url(#hairGrad)"/>
  <ellipse cx="86" cy="126" rx="12" ry="17" fill="#0f6e66"/>
  <ellipse cx="86" cy="118" rx="13" ry="6" fill="#0f6e66"/>
  <ellipse cx="234" cy="126" rx="12" ry="17" fill="#0f6e66"/>
  <ellipse cx="234" cy="118" rx="13" ry="6" fill="#0f6e66"/>
  <path d="M126 78 Q152 68 184 76 L184 84 Q152 78 126 88 Z" fill="#fff" opacity=".30"/>
  <path d="M100 150 Q86 210 94 286" stroke="#fff" stroke-width="5" fill="none" opacity=".22" stroke-linecap="round"/>
  <path d="M220 150 Q234 210 226 286" stroke="#fff" stroke-width="5" fill="none" opacity=".22" stroke-linecap="round"/>
</g>
<g class="hair-back long" data-part="long">
  <path d="M106 112 C102 62 128 54 160 54 C192 54 218 62 214 112 C214 150 206 240 186 312 C176 336 144 336 134 312 C114 240 106 150 106 112 Z" fill="url(#hairGrad)"/>
  <path d="M126 78 Q152 68 184 76 L184 84 Q152 78 126 88 Z" fill="#fff" opacity=".30"/>
</g>
<g class="hair-back buns" data-part="buns">
  <path d="M106 112 C102 62 128 54 160 54 C192 54 218 62 214 112 C214 140 196 168 160 172 C124 168 106 140 106 112 Z" fill="url(#hairGrad)"/>
  <circle cx="108" cy="78" r="26" fill="url(#hairGrad)"/>
  <circle cx="212" cy="78" r="26" fill="url(#hairGrad)"/>
  <ellipse cx="108" cy="102" rx="14" ry="5" fill="var(--hair-dark)"/>
  <ellipse cx="212" cy="102" rx="14" ry="5" fill="var(--hair-dark)"/>
  <path d="M132 74 Q140 66 150 70 L150 78 Q140 74 132 82 Z" fill="#fff" opacity=".30"/>
</g>
<g class="hair-back bob" data-part="bob">
  <path d="M106 112 C102 60 218 60 214 112 C214 146 210 176 202 200 C196 214 184 214 178 204 C172 218 154 218 148 206 C142 220 124 220 118 208 C108 218 94 216 86 202 C78 182 84 146 106 112 Z" fill="url(#hairGrad)"/>
  <path d="M128 76 Q150 66 178 74 L178 82 Q150 76 128 86 Z" fill="#fff" opacity=".30"/>
</g>
<g class="hair-back braids" data-part="braids">
  <path d="M106 112 C102 62 128 54 160 54 C192 54 218 62 214 112 C214 140 196 168 160 172 C124 168 106 140 106 112 Z" fill="url(#hairGrad)"/>
  <path d="M108 110 C76 122 62 172 74 236 C80 268 72 300 66 326 C76 330 86 326 90 316 C84 288 88 254 92 220 C96 184 102 148 122 126 Z" fill="url(#hairGrad)"/>
  <path d="M212 110 C244 122 258 172 246 236 C240 268 248 300 254 326 C244 330 234 326 230 316 C236 288 232 254 228 220 C224 184 218 148 198 126 Z" fill="url(#hairGrad)"/>
  <ellipse cx="82" cy="176" rx="10" ry="4.5" fill="var(--hair-dark)"/>
  <ellipse cx="79" cy="220" rx="9" ry="4" fill="var(--hair-dark)"/>
  <ellipse cx="76" cy="264" rx="8" ry="4" fill="var(--hair-dark)"/>
  <ellipse cx="238" cy="176" rx="10" ry="4.5" fill="var(--hair-dark)"/>
  <ellipse cx="241" cy="220" rx="9" ry="4" fill="var(--hair-dark)"/>
  <ellipse cx="244" cy="264" rx="8" ry="4" fill="var(--hair-dark)"/>
</g>

<g class="outfit idol" data-part="idol">
  <rect x="126" y="180" width="68" height="78" rx="20" fill="url(#blackGrad)"/>
  <path d="M126 192 Q160 212 194 192 L194 199 Q160 219 126 199 Z" fill="#39c5bb"/>
  <path d="M156 196 L164 196 L168 228 L160 242 L152 228 Z" fill="#1b1b24"/>
  <rect x="153" y="194" width="14" height="11" rx="3" fill="#0f6e66"/>
  <rect x="126" y="248" width="68" height="10" fill="#39c5bb"/>
  <rect x="110" y="184" width="22" height="26" rx="10" fill="url(#blackGrad)"/>
  <rect x="188" y="184" width="22" height="26" rx="10" fill="url(#blackGrad)"/>
  <rect x="110" y="206" width="22" height="34" rx="10" fill="#ffffff"/>
  <rect x="188" y="206" width="22" height="34" rx="10" fill="#ffffff"/>
  <circle cx="121" cy="248" r="8" fill="url(#skinGrad)"/>
  <circle cx="199" cy="248" r="8" fill="url(#skinGrad)"/>
  <path d="M122 258 L198 258 L206 322 L114 322 Z" fill="url(#blackGrad)"/>
  <path d="M134 258 L130 322 M146 258 L145 322 M160 258 L160 322 M174 258 L175 322 M186 258 L190 322" stroke="#4b4b5c" stroke-width="1.5"/>
  <rect x="114" y="313" width="92" height="9" fill="#39c5bb"/>
  <rect x="142" y="322" width="12" height="22" rx="6" fill="url(#skinGrad)"/>
  <rect x="166" y="322" width="12" height="22" rx="6" fill="url(#skinGrad)"/>
  <rect x="134" y="342" width="25" height="22" rx="9" fill="url(#blackGrad)"/>
  <rect x="161" y="342" width="25" height="22" rx="9" fill="url(#blackGrad)"/>
  <rect x="134" y="360" width="25" height="6" rx="3" fill="#39c5bb"/>
  <rect x="161" y="360" width="25" height="6" rx="3" fill="#39c5bb"/>
  <rect x="153" y="176" width="14" height="6" rx="3" fill="#39c5bb"/>
</g>
<g class="outfit school" data-part="school">
  <rect x="126" y="180" width="68" height="78" rx="20" fill="#ffffff" stroke="#e6d9f7" stroke-width="2"/>
  <path d="M126 192 L160 230 L194 192 C186 202 174 206 160 206 C146 206 134 202 126 192 Z" fill="#a8e8e0" stroke="#7fd4cb" stroke-width="1.5"/>
  <path d="M155 202 L160 226 L165 202 Z" fill="#ff8fb8"/>
  <circle cx="160" cy="202" r="5.5" fill="#ff6fae"/>
  <rect x="110" y="184" width="22" height="40" rx="11" fill="#ffffff" stroke="#e6d9f7" stroke-width="2"/>
  <rect x="188" y="184" width="22" height="40" rx="11" fill="#ffffff" stroke="#e6d9f7" stroke-width="2"/>
  <circle cx="121" cy="234" r="8" fill="url(#skinGrad)"/>
  <circle cx="199" cy="234" r="8" fill="url(#skinGrad)"/>
  <path d="M122 258 L198 258 L206 322 L114 322 Z" fill="#7d8ce0"/>
  <path d="M134 258 L130 322 M146 258 L145 322 M160 258 L160 322 M174 258 L175 322 M186 258 L190 322" stroke="#93a2ec" stroke-width="1.5"/>
  <rect x="114" y="313" width="92" height="9" fill="#6b7bd8"/>
  <rect x="142" y="322" width="12" height="22" rx="6" fill="url(#skinGrad)"/>
  <rect x="166" y="322" width="12" height="22" rx="6" fill="url(#skinGrad)"/>
  <rect x="137" y="342" width="22" height="12" rx="6" fill="#5b4a63"/>
  <rect x="161" y="342" width="22" height="12" rx="6" fill="#5b4a63"/>
</g>
<g class="outfit hoodie" data-part="hoodie">
  <ellipse cx="160" cy="182" rx="46" ry="16" fill="#c9b8f5"/>
  <rect x="126" y="188" width="68" height="66" rx="20" fill="#c9b8f5"/>
  <path d="M136 234 L184 234 L180 250 L140 250 Z" fill="#b7a4ec"/>
  <path d="M151 198 L149 220 M169 198 L171 220" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <circle cx="149" cy="223" r="2.5" fill="#fff"/><circle cx="171" cy="223" r="2.5" fill="#fff"/>
  <rect x="110" y="192" width="22" height="40" rx="11" fill="#c9b8f5"/>
  <rect x="188" y="192" width="22" height="40" rx="11" fill="#c9b8f5"/>
  <circle cx="121" cy="240" r="8" fill="url(#skinGrad)"/>
  <circle cx="199" cy="240" r="8" fill="url(#skinGrad)"/>
  <rect x="128" y="252" width="64" height="62" fill="#9fb7e8"/>
  <path d="M160 252 L160 314" stroke="#8da6dd" stroke-width="2"/>
  <rect x="133" y="314" width="27" height="14" rx="7" fill="#ffffff" stroke="#e3e9f5" stroke-width="1.5"/>
  <rect x="133" y="324" width="27" height="5" rx="3" fill="#ff9ec7"/>
  <rect x="160" y="314" width="27" height="14" rx="7" fill="#ffffff" stroke="#e3e9f5" stroke-width="1.5"/>
  <rect x="160" y="324" width="27" height="5" rx="3" fill="#ff9ec7"/>
</g>
<g class="outfit dress" data-part="dress">
  <circle cx="118" cy="206" r="13" fill="#ffd0e4"/>
  <circle cx="202" cy="206" r="13" fill="#ffd0e4"/>
  <rect x="132" y="184" width="56" height="52" rx="18" fill="#ffb7d5"/>
  <rect x="132" y="230" width="56" height="8" fill="#ff6fae"/>
  <path d="M152 234 L142 224 M168 234 L178 224" stroke="#ff6fae" stroke-width="4" stroke-linecap="round"/>
  <circle cx="160" cy="234" r="5" fill="#ff6fae"/>
  <circle cx="118" cy="230" r="8" fill="url(#skinGrad)"/>
  <circle cx="202" cy="230" r="8" fill="url(#skinGrad)"/>
  <path d="M124 238 C128 270 150 284 160 284 C170 284 192 270 196 238 L202 300 C196 314 186 308 180 296 C174 310 164 310 160 296 C156 310 146 310 140 296 C134 308 124 314 118 300 Z" fill="#ff9ec7"/>
  <rect x="142" y="302" width="12" height="16" rx="6" fill="url(#skinGrad)"/>
  <rect x="166" y="302" width="12" height="16" rx="6" fill="url(#skinGrad)"/>
  <rect x="138" y="318" width="22" height="12" rx="6" fill="#ff6fae"/>
  <rect x="160" y="318" width="22" height="12" rx="6" fill="#ff6fae"/>
</g>
<g class="outfit maid" data-part="maid">
  <rect x="126" y="182" width="68" height="72" rx="20" fill="#4a4d78"/>
  <path d="M142 206 L146 188 M178 206 L174 188" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
  <rect x="138" y="204" width="44" height="56" rx="10" fill="#ffffff"/>
  <rect x="110" y="188" width="22" height="38" rx="11" fill="#ffffff"/>
  <rect x="188" y="188" width="22" height="38" rx="11" fill="#ffffff"/>
  <circle cx="121" cy="234" r="8" fill="url(#skinGrad)"/>
  <circle cx="199" cy="234" r="8" fill="url(#skinGrad)"/>
  <path d="M122 254 L198 254 L206 312 L114 312 Z" fill="#ffffff"/>
  <path d="M114 304 C122 297 130 304 138 297 C146 304 154 297 162 304 C170 297 178 304 186 297 L206 304 L206 312 L114 312 Z" fill="#f0e9ff"/>
  <rect x="142" y="312" width="12" height="16" rx="6" fill="url(#skinGrad)"/>
  <rect x="166" y="312" width="12" height="16" rx="6" fill="url(#skinGrad)"/>
  <rect x="137" y="328" width="22" height="12" rx="6" fill="#3c3f58"/>
  <rect x="161" y="328" width="22" height="12" rx="6" fill="#3c3f58"/>
</g>

<g class="headskin">
  <rect x="150" y="164" width="20" height="22" rx="8" fill="url(#skinGrad)"/>
  <ellipse cx="160" cy="118" rx="54" ry="52" fill="url(#skinGrad)"/>
  <ellipse cx="105" cy="130" rx="7" ry="10" fill="url(#skinGrad)"/>
  <ellipse cx="215" cy="130" rx="7" ry="10" fill="url(#skinGrad)"/>
  <ellipse cx="105" cy="131" rx="3.5" ry="5.5" fill="#f2bda4"/>
  <ellipse cx="215" cy="131" rx="3.5" ry="5.5" fill="#f2bda4"/>
</g>

<g class="hair-front twintails" data-part="twintails">
  <path d="M104 112 C102 72 124 58 160 58 C196 58 218 72 216 112 L210 104 C206 98 200 102 196 108 C192 100 184 102 180 108 C176 100 168 100 164 106 C160 98 152 98 148 104 C144 96 136 98 132 104 C128 96 120 100 116 106 C112 104 108 106 104 112 Z" fill="url(#hairGrad)"/>
  <path d="M104 110 C92 138 94 168 106 198 C114 194 118 182 118 164 C118 144 112 126 104 110 Z" fill="url(#hairGrad)"/>
  <path d="M216 110 C228 138 226 168 214 198 C206 194 202 182 202 164 C202 144 208 126 216 110 Z" fill="url(#hairGrad)"/>
  <path d="M160 56 Q166 44 158 36 Q165 42 174 38" stroke="var(--hair)" stroke-width="3.5" fill="none" stroke-linecap="round"/>
</g>
<g class="hair-front long" data-part="long">
  <path d="M104 112 C102 72 124 58 160 58 C196 58 218 72 216 112 L210 104 C206 98 200 102 196 108 C192 100 184 102 180 108 C176 100 168 100 164 106 C160 98 152 98 148 104 C144 96 136 98 132 104 C128 96 120 100 116 106 C112 104 108 106 104 112 Z" fill="url(#hairGrad)"/>
  <path d="M104 110 C92 138 94 168 106 198 C114 194 118 182 118 164 C118 144 112 126 104 110 Z" fill="url(#hairGrad)"/>
  <path d="M216 110 C228 138 226 168 214 198 C206 194 202 182 202 164 C202 144 208 126 216 110 Z" fill="url(#hairGrad)"/>
  <path d="M160 56 Q166 44 158 36 Q165 42 174 38" stroke="var(--hair)" stroke-width="3.5" fill="none" stroke-linecap="round"/>
</g>
<g class="hair-front buns" data-part="buns">
  <path d="M104 112 C102 72 124 58 160 58 C196 58 218 72 216 112 L210 104 C206 98 200 102 196 108 C192 100 184 102 180 108 C176 100 168 100 164 106 C160 98 152 98 148 104 C144 96 136 98 132 104 C128 96 120 100 116 106 C112 104 108 106 104 112 Z" fill="url(#hairGrad)"/>
  <path d="M104 110 C92 138 94 168 106 198 C114 194 118 182 118 164 C118 144 112 126 104 110 Z" fill="url(#hairGrad)"/>
  <path d="M216 110 C228 138 226 168 214 198 C206 194 202 182 202 164 C202 144 208 126 216 110 Z" fill="url(#hairGrad)"/>
  <path d="M160 56 Q166 44 158 36 Q165 42 174 38" stroke="var(--hair)" stroke-width="3.5" fill="none" stroke-linecap="round"/>
</g>
<g class="hair-front bob" data-part="bob">
  <path d="M104 112 C102 72 124 58 160 58 C196 58 218 72 216 112 L210 104 C206 98 200 102 196 108 C192 100 184 102 180 108 C176 100 168 100 164 106 C160 98 152 98 148 104 C144 96 136 98 132 104 C128 96 120 100 116 106 C112 104 108 106 104 112 Z" fill="url(#hairGrad)"/>
  <path d="M104 110 C92 138 94 168 106 198 C114 194 118 182 118 164 C118 144 112 126 104 110 Z" fill="url(#hairGrad)"/>
  <path d="M216 110 C228 138 226 168 214 198 C206 194 202 182 202 164 C202 144 208 126 216 110 Z" fill="url(#hairGrad)"/>
  <path d="M160 56 Q166 44 158 36 Q165 42 174 38" stroke="var(--hair)" stroke-width="3.5" fill="none" stroke-linecap="round"/>
</g>
<g class="hair-front braids" data-part="braids">
  <path d="M104 112 C102 72 124 58 160 58 C196 58 218 72 216 112 L210 104 C206 98 200 102 196 108 C192 100 184 102 180 108 C176 100 168 100 164 106 C160 98 152 98 148 104 C144 96 136 98 132 104 C128 96 120 100 116 106 C112 104 108 106 104 112 Z" fill="url(#hairGrad)"/>
  <path d="M104 110 C92 138 94 168 106 198 C114 194 118 182 118 164 C118 144 112 126 104 110 Z" fill="url(#hairGrad)"/>
  <path d="M216 110 C228 138 226 168 214 198 C206 194 202 182 202 164 C202 144 208 126 216 110 Z" fill="url(#hairGrad)"/>
  <path d="M160 56 Q166 44 158 36 Q165 42 174 38" stroke="var(--hair)" stroke-width="3.5" fill="none" stroke-linecap="round"/>
</g>

<g class="facebase">
  <path d="M128 94 Q142 88 156 94 M164 94 Q178 88 192 94" stroke="#c28694" stroke-width="3" stroke-linecap="round" fill="none"/>
  <ellipse cx="122" cy="142" rx="9" ry="4.5" fill="#ffb3c8" opacity=".55"/>
  <ellipse cx="198" cy="142" rx="9" ry="4.5" fill="#ffb3c8" opacity=".55"/>
</g>

<g class="expr normal" data-part="normal">
  <g class="eyes">
    <path d="M128 116 Q142 104 156 116" stroke="#332c3d" stroke-width="4" stroke-linecap="round" fill="none"/>
    <ellipse cx="142" cy="126" rx="13" ry="17" fill="#332c3d"/>
    <ellipse cx="143" cy="128" rx="8" ry="10" fill="var(--eye)"/>
    <ellipse cx="143" cy="134" rx="5.5" ry="4.5" fill="#1f8d80" opacity=".65"/>
    <circle cx="138" cy="120" r="4.2" fill="#fff"/>
    <circle cx="147" cy="133" r="1.8" fill="#fff"/>
    <path d="M192 116 Q178 104 164 116" stroke="#332c3d" stroke-width="4" stroke-linecap="round" fill="none"/>
    <ellipse cx="178" cy="126" rx="13" ry="17" fill="#332c3d"/>
    <ellipse cx="177" cy="128" rx="8" ry="10" fill="var(--eye)"/>
    <ellipse cx="177" cy="134" rx="5.5" ry="4.5" fill="#1f8d80" opacity=".65"/>
    <circle cx="173" cy="120" r="4.2" fill="#fff"/>
    <circle cx="182" cy="133" r="1.8" fill="#fff"/>
  </g>
  <path d="M153 152 Q160 159 167 152" stroke="#d96a8d" stroke-width="3" stroke-linecap="round" fill="none"/>
</g>
<g class="expr focus" data-part="focus">
  <path d="M128 116 Q142 104 156 116 M164 116 Q178 104 192 116" stroke="#332c3d" stroke-width="4" stroke-linecap="round" fill="none"/>
  <ellipse cx="142" cy="128" rx="12" ry="7" fill="#332c3d"/>
  <ellipse cx="143" cy="129" rx="6.5" ry="3.5" fill="var(--eye)"/>
  <circle cx="139" cy="126" r="2" fill="#fff"/>
  <ellipse cx="178" cy="128" rx="12" ry="7" fill="#332c3d"/>
  <ellipse cx="177" cy="129" rx="6.5" ry="3.5" fill="var(--eye)"/>
  <circle cx="174" cy="126" r="2" fill="#fff"/>
  <path d="M155 158 L165 158" stroke="#d96a8d" stroke-width="3" stroke-linecap="round"/>
</g>
<g class="expr happy" data-part="happy">
  <path d="M129 126 Q142 138 155 126 M165 126 Q178 138 191 126" stroke="#332c3d" stroke-width="4.5" stroke-linecap="round" fill="none"/>
  <path d="M151 150 Q160 166 169 150 Z" fill="#d96a8d"/>
</g>

<g class="acc-head bow" data-part="bow">
  <path d="M100 84 C84 66 66 70 58 84 C72 88 86 88 100 84 Z" fill="#ff8fb8"/>
  <path d="M100 84 C116 66 134 70 142 84 C128 88 114 88 100 84 Z" fill="#ff8fb8"/>
  <circle cx="100" cy="84" r="7" fill="#ff6fae"/>
  <path d="M100 90 C96 100 92 108 95 118 C99 114 103 110 103 100 C103 96 102 93 100 90 Z" fill="#ff8fb8"/>
</g>
<g class="acc-head cat" data-part="cat">
  <path d="M118 72 L128 38 L148 66 Z" fill="var(--hair)"/>
  <path d="M125 66 L129 47 L141 64 Z" fill="#ffc7d9"/>
  <path d="M202 72 L192 38 L172 66 Z" fill="var(--hair)"/>
  <path d="M195 66 L191 47 L179 64 Z" fill="#ffc7d9"/>
</g>
<g class="acc-head headphone" data-part="headphone">
  <path d="M100 102 C100 52 220 52 220 102" fill="none" stroke="#6d5b9e" stroke-width="10" stroke-linecap="round"/>
  <rect x="92" y="96" width="16" height="34" rx="8" fill="#58c9bd"/>
  <rect x="212" y="96" width="16" height="34" rx="8" fill="#58c9bd"/>
  <circle cx="100" cy="113" r="4" fill="#fff" opacity=".65"/>
  <circle cx="220" cy="113" r="4" fill="#fff" opacity=".65"/>
</g>
<g class="acc-head star" data-part="star">
  <path d="M214 60 L218.5 71 L230 71.8 L221.3 79.2 L224 90.5 L214 85 L204 90.5 L206.7 79.2 L198 71.8 L209.5 71 Z" fill="#ffd77a" stroke="#f2b93f" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M199 58 l2.2 4.5 4.5 2.2 -4.5 2.2 -2.2 4.5 -2.2 -4.5 -4.5 -2.2 4.5 -2.2 Z" fill="#ffe9a8"/>
</g>
<g class="acc-head halo" data-part="halo">
  <ellipse cx="160" cy="44" rx="30" ry="7" fill="none" stroke="#ffd77a" stroke-width="7"/>
  <circle cx="160" cy="44" r="16" fill="#ffe9a8" opacity=".35"/>
</g>
<g class="acc-face glasses" data-part="glasses">
  <circle cx="142" cy="126" r="16" fill="rgba(255,255,255,.16)" stroke="#a98ad0" stroke-width="3"/>
  <circle cx="178" cy="126" r="16" fill="rgba(255,255,255,.16)" stroke="#a98ad0" stroke-width="3"/>
  <path d="M158 124 Q160 120 162 124" fill="none" stroke="#a98ad0" stroke-width="3"/>
  <path d="M126 124 L112 118 M194 124 L208 118" fill="none" stroke="#a98ad0" stroke-width="3" stroke-linecap="round"/>
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
      {id:uid(),emoji:'📐',name:'数学《二次函数》练习 30分钟',min:30,done:false},
      {id:uid(),emoji:'🔤',name:'英语中考词汇背诵 20分钟',min:20,done:false}
    ]},
    wardrobe:{hair:'twintails',hairColor:'mint',outfit:'idol',accHead:'none',accFace:'none',bg:'study'},
    owned:{hairs:['twintails'],hairColors:['mint'],outfits:['idol'],accHeads:['none'],accFaces:[],bgs:['study']},
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
    let raw=localStorage.getItem(LS_KEY);
    let migrated=false;
    if(!raw){raw=localStorage.getItem('starStudy_v1');migrated=!!raw;}
    if(raw){state=JSON.parse(raw);mergeState();}
    else state=defaultState();
    if(migrated){
      state.wardrobe=Object.assign(state.wardrobe||{}, {outfit:'idol',accHead:'none',hair:'twintails',hairColor:'mint'});
      state.owned=Object.assign(state.owned||{}, {outfits:['idol'],accHeads:['none']});
      save();
    }
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
  $('wardGrid').innerHTML=cat.items.map(item=>{
    const isOwned=item.id==='none'||owned.includes(item.id);
    let equipped=state.wardrobe[cat.stateKey]===item.id;
    if(cat.key==='accHead')equipped=item.id==='glasses'?state.wardrobe.accFace==='glasses':state.wardrobe.accHead===item.id;
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

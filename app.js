const app=document.getElementById('app');
const lessons = [
  {
    id:'vars-1', title:'変数って何？', unit:'C++の基礎', minutes:4, xp:50,
    intro:{title:'変数とは？', body:'変数は、値を入れておくための「名前付きの箱」です。ゲームではHP、移動速度、残り時間など、変化する値を保存するために使います。', code:'int hp = 100;', explain:[['int','整数として扱う型'],['hp','データにつけた名前'],['=','右の値を左に入れる'],['100','最初に保存する値'],[';','命令の終わり']]},
    questions:[
      {type:'choice',q:'このコードが表している内容として正しいものは？',code:'int hp = 100;',options:['hpという整数の変数を作り、100を入れている','hpという関数を作っている','100という変数を作っている','hpに100を足している'],answer:0,explain:'int は整数型、hp は変数名、= で 100 を代入しています。'},
      {type:'choice',q:'HPを表す型として、まず最も自然なのはどれ？',options:['int','bool','void','class'],answer:0,explain:'HPは通常 100、80、0 のような整数で扱うので int が自然です。'},
      {type:'fill',q:'プレイヤーのHPを100で作ってください。',template:'____ hp = ____;',answer:['int','100'],explain:'int hp = 100; になります。'},
      {type:'code',q:'攻撃力 attack を 20 で作る1行を書いてください。',placeholder:'// ここに書く',check:v=>/\bint\s+attack\s*=\s*20\s*;/.test(v),model:'int attack = 20;',hint:['整数なので int を使います。','変数名は attack です。','最後に ; を忘れずに。']},
      {type:'choice',q:'なぜ「死亡しているか」を bool で表すのが分かりやすい？',options:['true / false の2状態を表したいから','bool が一番大きな数を保存できるから','bool は文字列専用だから','C++では必ず bool を使う決まりだから'],answer:0,explain:'型は値だけでなく「このデータは何を表しているか」という意図も伝えます。'}
    ]
  },
  {
    id:'vars-2', title:'データの型', unit:'C++の基礎', minutes:5, xp:60,
    intro:{title:'型は「値の種類」を表す',body:'int は整数、float は小数、bool は true / false を扱います。型を選ぶことで、データの意味がコードから読み取りやすくなります。',code:'int hp = 100;\nfloat speed = 4.5f;\nbool isDead = false;',explain:[['int','整数'],['float','小数'],['bool','真偽値']]},
    questions:[
      {type:'choice',q:'移動速度 4.5 を保存するなら？',options:['float','bool','void','char'],answer:0,explain:'小数を扱いたいので float が適しています。'},
      {type:'choice',q:'isDead という名前から最も自然な型は？',options:['bool','int','float','double'],answer:0,explain:'死亡している / していないの2状態なので bool が意図を表しやすいです。'},
      {type:'fill',q:'移動速度 speed を 5.0f で作ってください。',template:'____ speed = ____;',answer:['float','5.0f'],explain:'float speed = 5.0f; です。'},
      {type:'code',q:'死亡状態 isDead を false で初期化してください。',check:v=>/\bbool\s+isDead\s*=\s*false\s*;/.test(v),model:'bool isDead = false;',hint:['2状態なので bool。','初期状態は false。']}
    ]
  },
  {
    id:'op-1', title:'代入と計算', unit:'C++の基礎', minutes:5, xp:60,
    intro:{title:'値はあとから変更できる',body:'変数に保存した値はあとから更新できます。ダメージ処理やスコア加算など、ゲームでは頻繁に使います。',code:'int hp = 100;\nhp = hp - 20;',explain:[['hp =','hp に新しい値を代入'],['hp - 20','現在のHPから20減らす']]},
    questions:[
      {type:'choice',q:'実行後の hp はいくつ？',code:'int hp = 100;\nhp = hp - 20;',options:['80','100','120','20'],answer:0,explain:'右辺の hp - 20 が 80 になり、その結果を hp に戻します。'},
      {type:'choice',q:'hp -= 20; と同じ意味なのは？',options:['hp = hp - 20;','hp = 20;','hp == hp - 20;','hp + 20;'],answer:0,explain:'-= は「今の値から引いて、その結果を代入する」という複合代入です。'},
      {type:'code',q:'score に 100 を加算する1行を書いてください。',check:v=>/\bscore\s*(\+=\s*100|=\s*score\s*\+\s*100)\s*;/.test(v),model:'score += 100;',hint:['+= が使えます。','右側は 100 です。']}
    ]
  },
  {
    id:'if-1', title:'ifで条件分岐', unit:'制御構文', minutes:6, xp:70,
    intro:{title:'条件によって処理を変える',body:'if は「条件が true のときだけ処理する」ための文法です。HPが0以下なら死亡、鍵を持っていれば扉を開ける、などに使います。',code:'if (hp <= 0)\n{\n    isDead = true;\n}',explain:[['if','条件分岐'],['hp <= 0','HPが0以下か？'],['{ ... }','条件がtrueなら実行']]},
    questions:[
      {type:'choice',q:'hp が 0 のとき、この if の中は実行される？',code:'if (hp <= 0)',options:['実行される','実行されない'],answer:0,explain:'<= は「以下」なので 0 も条件に含まれます。'},
      {type:'choice',q:'= と == の違いとして正しいものは？',options:['= は代入、== は比較','= は比較、== は代入','どちらも同じ','== は足し算'],answer:0,explain:'if の条件で「等しいか」を調べるときは == を使います。'},
      {type:'code',q:'HPが0以下なら isDead を true にする処理を書いてください。',check:v=>/if\s*\(\s*hp\s*<=\s*0\s*\)[\s\S]*isDead\s*=\s*true\s*;/.test(v),model:'if (hp <= 0)\n{\n    isDead = true;\n}',hint:['if (...) を使います。','条件は hp <= 0。','中で isDead = true;']}
    ]
  }
];

const STORAGE='cppQuestStateV1';
const defaultState={xp:0,completed:[],wrong:[],weekly:[false,false,false,false,false,false,false],bestStreak:0,currentStreak:0,totalDays:0,lastStudy:null,screen:'home'};
let state=load(); let activeLesson=null; let step=0; let selected=null; let answerLocked=false; let hintsShown=0;
function load(){try{return {...defaultState,...JSON.parse(localStorage.getItem(STORAGE)||'{}')}}catch{return {...defaultState}}}
function save(){localStorage.setItem(STORAGE,JSON.stringify(state))}
function esc(s=''){return s.replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m]))}
function studyToday(){
  const d=new Date(); const key=d.toISOString().slice(0,10); if(state.lastStudy===key)return;
  const dow=(d.getDay()+6)%7; state.weekly[dow]=true; state.totalDays++;
  if(state.lastStudy){const prev=new Date(state.lastStudy+'T00:00:00'); const diff=Math.round((new Date(key+'T00:00:00')-prev)/86400000); state.currentStreak=diff===1?state.currentStreak+1:1;} else state.currentStreak=1;
  state.bestStreak=Math.max(state.bestStreak,state.currentStreak); state.lastStudy=key; save();
}
function nav(active){return `<nav class="nav"><div class="nav-inner"><button data-nav="home" class="${active==='home'?'active':''}">🏠<div class="tiny">ホーム</div></button><button data-nav="road" class="${active==='road'?'active':''}">🗺️<div class="tiny">ロード</div></button><button data-nav="review" class="${active==='review'?'active':''}">🧠<div class="tiny">復習</div></button><button data-nav="profile" class="${active==='profile'?'active':''}">👤<div class="tiny">進捗</div></button></div></nav>`}
function shell(body,active='home'){app.innerHTML=`<main class="wrap">${body}</main>${nav(active)}`; bindNav()}
function bindNav(){document.querySelectorAll('[data-nav]').forEach(b=>b.addEventListener('click',()=>render(b.dataset.nav)))}
function render(screen='home'){state.screen=screen;save(); if(screen==='home')home(); if(screen==='road')road(); if(screen==='review')review(); if(screen==='profile')profile()}
function home(){
 const done=state.completed.length; const next=lessons.find(l=>!state.completed.includes(l.id))||lessons[0]; const weekCount=state.weekly.filter(Boolean).length;
 shell(`<div class="topbar"><div class="brand">C++ <span>Quest</span></div><button class="icon-btn" aria-label="設定">⚙️</button></div>
 <section class="grid grid-2"><div class="card hero"><div class="eyebrow">今日のミニレッスン</div><h1>${esc(next.title)}</h1><p>約 ${next.minutes} 分。1レッスンだけでも十分。短く積み重ねよう。</p><div class="cta-row"><button class="primary-btn" id="startNow">▶ 今日のレッスン</button><button class="ghost-btn" data-nav="road">学習ロードを見る</button></div></div>
 <div class="card"><div class="section-title"><h2>今週の学習</h2><span class="muted">${weekCount}/5日</span></div><div class="week">${['月','火','水','木','金','土','日'].map((d,i)=>`<div class="day ${state.weekly[i]?'done':''}">${d}</div>`).join('')}</div><p class="muted tiny">連続記録は補助。今週の積み上げをメインに表示しています。</p></div></section>
 <section class="grid grid-2" style="margin-top:16px"><div class="card"><div class="section-title"><h2>学習ロード</h2><button class="ghost-btn tiny" data-nav="road">すべて見る</button></div><div class="progress"><span style="width:${Math.round(done/lessons.length*100)}%"></span></div><p class="muted">${done}/${lessons.length} レッスン完了</p>${lessonRows(lessons.slice(0,3))}</div>
 <div class="card"><div class="section-title"><h2>成長</h2></div><div class="stats"><div class="stat"><strong>${state.xp}</strong><span>XP</span></div><div class="stat"><strong>${state.totalDays}</strong><span>学習日</span></div><div class="stat"><strong>${state.currentStreak}</strong><span>連続日</span></div></div><p class="muted tiny">最長連続 ${state.bestStreak} 日。途切れても累計の成長は残ります。</p></div></section>`, 'home');
 document.getElementById('startNow').onclick=()=>startLesson(next.id); bindLessonButtons();
}
function lessonRows(list){return `<div class="roadmap" style="margin-top:12px">${list.map((l,i)=>{const done=state.completed.includes(l.id);const unlocked=i===0||state.completed.includes(lessons[Math.max(0,lessons.indexOf(l)-1)]?.id);return `<div class="lesson-item ${unlocked?'':'locked'}"><div class="badge ${done?'':'blue'}">${done?'✓':lessons.indexOf(l)+1}</div><div><h3>${esc(l.title)}</h3><p>${esc(l.unit)} ・ 約${l.minutes}分</p></div><button class="chip tiny" data-lesson="${l.id}" ${unlocked?'':'disabled'}>${done?'復習':'開始'}</button></div>`}).join('')}</div>`}
function bindLessonButtons(){document.querySelectorAll('[data-lesson]').forEach(b=>b.addEventListener('click',()=>startLesson(b.dataset.lesson)))}
function road(){shell(`<div class="topbar"><div><div class="brand">学習ロード</div><div class="muted tiny">1回3〜7分の小さなレッスン</div></div></div><div class="card"><div class="section-title"><h2>C++ 基礎 → ゲーム開発</h2><span class="pill">初版</span></div>${lessonRows(lessons)}<div class="lesson-item locked"><div class="badge">🔒</div><div><h3>関数 / vector / class / ゲームループ…</h3><p>今後のアップデートで追加できる構成です。</p></div></div></div>`, 'road');bindLessonButtons()}
function startLesson(id){activeLesson=lessons.find(l=>l.id===id);step=0;selected=null;answerLocked=false;hintsShown=0;studyToday();renderLesson()}
function renderLesson(){
 const total=activeLesson.questions.length+1; const pct=Math.round((step/total)*100);
 if(step===0){const x=activeLesson.intro;shell(`<div class="lesson-shell"><div class="lesson-head"><button class="icon-btn" id="exit">←</button><div class="progress"><span style="width:${pct}%"></span></div><span class="tiny">1/${total}</span></div><section class="card lesson-card"><div class="eyebrow">${esc(activeLesson.unit)}</div><h2>${esc(x.title)}</h2><p class="muted">${esc(x.body)}</p><div class="code">${esc(x.code)}</div><div class="explain-grid">${x.explain.map(a=>`<code>${esc(a[0])}</code><div>${esc(a[1])}</div>`).join('')}</div><div class="lesson-actions"><span></span><button class="primary-btn" id="next">わかった →</button></div></section></div>`,''); document.querySelector('.nav').remove(); document.getElementById('exit').onclick=()=>render('home');document.getElementById('next').onclick=()=>{step++;renderLesson()};return;}
 const q=activeLesson.questions[step-1]; const idx=step+1;
 let body=''; if(q.code) body+=`<div class="code">${esc(q.code)}</div>`;
 if(q.type==='choice') body+=`<div class="choices">${q.options.map((o,i)=>`<button class="choice-btn" data-choice="${i}">${String.fromCharCode(65+i)}. ${esc(o)}</button>`).join('')}</div>`;
 if(q.type==='fill'){const parts=q.template.split('____'); body+=`<div class="code">${esc(parts[0])}<input class="input" id="f0" style="display:inline-block;width:110px;padding:8px">${esc(parts[1])}<input class="input" id="f1" style="display:inline-block;width:110px;padding:8px">${esc(parts[2]||'')}</div>`}
 if(q.type==='code') body+=`<textarea class="editor" id="editor" spellcheck="false" placeholder="${esc(q.placeholder||'// ここにコードを書いてください')}"></textarea><div id="hints"></div>`;
 shell(`<div class="lesson-shell"><div class="lesson-head"><button class="icon-btn" id="exit">←</button><div class="progress"><span style="width:${pct}%"></span></div><span class="tiny">${idx}/${total}</span></div><section class="card lesson-card"><div class="eyebrow">問題 ${step}/${activeLesson.questions.length}</div><h2 class="question-title">${esc(q.q)}</h2>${body}<div id="feedback"></div><div class="lesson-actions"><button class="ghost-btn" id="hintBtn" ${q.type==='code'?'':'disabled'}>💡 ヒント</button><button class="primary-btn" id="check">答える</button></div></section></div>`,''); document.querySelector('.nav').remove(); document.getElementById('exit').onclick=()=>render('home');
 document.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>{if(answerLocked)return;selected=Number(b.dataset.choice);document.querySelectorAll('[data-choice]').forEach(x=>x.classList.remove('selected'));b.classList.add('selected')});
 const hintBtn=document.getElementById('hintBtn'); if(q.type==='code')hintBtn.onclick=()=>showHint(q);
 document.getElementById('check').onclick=()=>checkAnswer(q);
}
function showHint(q){if(!q.hint||hintsShown>=q.hint.length)return; const box=document.createElement('div');box.className='hint';box.textContent=`ヒント ${hintsShown+1}: ${q.hint[hintsShown]}`;document.getElementById('hints').appendChild(box);hintsShown++}
function checkAnswer(q){if(answerLocked){advance();return} let ok=false;
 if(q.type==='choice'){if(selected===null)return;ok=selected===q.answer;document.querySelectorAll('[data-choice]').forEach((b,i)=>{if(i===q.answer)b.classList.add('correct');else if(i===selected)b.classList.add('wrong')})}
 if(q.type==='fill'){const vals=[document.getElementById('f0').value.trim(),document.getElementById('f1').value.trim()];ok=vals.every((v,i)=>v===q.answer[i])}
 if(q.type==='code'){const v=document.getElementById('editor').value;ok=q.check(v)}
 answerLocked=true; const fb=document.getElementById('feedback');fb.className='feedback'+(ok?'':' bad');fb.innerHTML=ok?`<strong>✓ 正解！</strong><div class="tiny" style="margin-top:6px">${esc(q.explain||'いい感じです。')}</div>`:`<strong>もう一歩！</strong><div class="tiny" style="margin-top:6px">${q.model?`模範例: <code>${esc(q.model)}</code>`:esc(q.explain||'解説を確認して次へ進もう。')}</div>`;
 if(!ok){const key=activeLesson.id+':'+(step-1); if(!state.wrong.includes(key))state.wrong.push(key);save()}
 const btn=document.getElementById('check');btn.textContent=step===activeLesson.questions.length?'結果を見る':'次へ →';
}
function advance(){if(step>=activeLesson.questions.length){finishLesson();return} step++;selected=null;answerLocked=false;hintsShown=0;renderLesson()}
function finishLesson(){const fresh=!state.completed.includes(activeLesson.id);if(fresh){state.completed.push(activeLesson.id);state.xp+=activeLesson.xp;save()} shell(`<div class="lesson-shell"><section class="card center"><div class="result-stars">⭐ ⭐ ⭐</div><div class="result-big">レッスン完了！</div><p class="muted">${esc(activeLesson.title)} を完了しました。</p><div class="stats" style="margin:18px 0"><div class="stat"><strong>+${fresh?activeLesson.xp:0}</strong><span>XP</span></div><div class="stat"><strong>${activeLesson.minutes}分</strong><span>目安</span></div><div class="stat"><strong>${state.completed.length}</strong><span>完了</span></div></div><div class="cta-row"><button class="primary-btn" id="nextLesson">次のレッスン</button><button class="ghost-btn" id="toHome">ホームへ</button></div></section></div>`,'');document.querySelector('.nav').remove();document.getElementById('toHome').onclick=()=>render('home');document.getElementById('nextLesson').onclick=()=>{const i=lessons.indexOf(activeLesson);startLesson(lessons[(i+1)%lessons.length].id)}}
function review(){const items=state.wrong.map(k=>{const [id,qi]=k.split(':');const l=lessons.find(x=>x.id===id);return l?{l,q:l.questions[Number(qi)]}:null}).filter(Boolean);shell(`<div class="topbar"><div><div class="brand">復習</div><div class="muted tiny">間違えた問題を効率よく再確認</div></div></div><div class="card"><div class="section-title"><h2>復習リスト</h2><span class="pill">${items.length}問</span></div>${items.length?`<div class="review-list">${items.map(({l,q})=>`<div class="review-item"><div><strong>${esc(q.q)}</strong><div class="muted tiny">${esc(l.title)}</div></div><button class="chip" data-lesson="${l.id}">復習</button></div>`).join('')}</div>`:'<p class="muted">まだ復習問題はありません。間違えた問題がここに追加されます。</p>'}</div>`,'review');bindLessonButtons()}
function profile(){const pct=Math.round(state.completed.length/lessons.length*100);shell(`<div class="topbar"><div><div class="brand">学習の記録</div><div class="muted tiny">連続より「積み上げ」を主役に</div></div></div><section class="grid grid-2"><div class="card"><div class="section-title"><h2>全体進捗</h2><strong>${pct}%</strong></div><div class="progress"><span style="width:${pct}%"></span></div><div class="stats" style="margin-top:16px"><div class="stat"><strong>${state.xp}</strong><span>合計XP</span></div><div class="stat"><strong>${state.totalDays}</strong><span>合計学習日</span></div><div class="stat"><strong>${state.completed.length}</strong><span>完了レッスン</span></div></div></div><div class="card"><h2>継続</h2><p class="muted">現在 ${state.currentStreak} 日連続 / 最長 ${state.bestStreak} 日</p><p class="tiny muted">途切れても、XP・完了レッスン・合計学習日は消えません。</p><button class="ghost-btn" id="resetWeek">デモ用：週間記録をリセット</button></div></section>`,'profile');document.getElementById('resetWeek').onclick=()=>{state.weekly=[false,false,false,false,false,false,false];save();profile()}}
render(state.screen||'home');

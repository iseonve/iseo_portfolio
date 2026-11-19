/* Main page About panel (draft): oevra-style layout — staggered headline, a label with a rule, three photos
   (one cut off by the right edge), one narrow column of text and a mono link to the About page. */
(function () {
  var IMG = 'https://iseonve.github.io/img/about/';
  var ph = function (f, c, pos) { return '<i class="ap ' + c + '" style="background-image:url(' + IMG + f + ');background-position:' + (pos || '50% 50%') + '"></i>'; };
  var DB = {A:[".###.","#...#","#...#","#####","#...#","#...#","#...#"],B:["####.","#...#","#...#","####.","#...#","#...#","####."],C:[".###.","#...#","#....","#....","#....","#...#",".###."],D:["####.","#...#","#...#","#...#","#...#","#...#","####."],E:["#####","#....","#....","####.","#....","#....","#####"],F:["#####","#....","#....","####.","#....","#....","#...."],G:[".###.","#...#","#....","#.###","#...#","#...#",".####"],H:["#...#","#...#","#...#","#####","#...#","#...#","#...#"],I:["#####","..#..","..#..","..#..","..#..","..#..","#####"],J:["..###","...#.","...#.","...#.","...#.","#..#.",".##.."],K:["#...#","#..#.","#.#..","##...","#.#..","#..#.","#...#"],L:["#....","#....","#....","#....","#....","#....","#####"],M:["#...#","##.##","#.#.#","#.#.#","#...#","#...#","#...#"],N:["#...#","##..#","#.#.#","#.#.#","#..##","#...#","#...#"],O:[".###.","#...#","#...#","#...#","#...#","#...#",".###."],P:["####.","#...#","#...#","####.","#....","#....","#...."],Q:[".###.","#...#","#...#","#...#","#.#.#","#..#.",".##.#"],R:["####.","#...#","#...#","####.","#.#..","#..#.","#...#"],S:[".####","#....","#....",".###.","....#","....#","####."],T:["#####","..#..","..#..","..#..","..#..","..#..","..#.."],U:["#...#","#...#","#...#","#...#","#...#","#...#",".###."],V:["#...#","#...#","#...#","#...#","#...#",".#.#.","..#.."],W:["#...#","#...#","#...#","#.#.#","#.#.#","#.#.#",".#.#."],X:["#...#","#...#",".#.#.","..#..",".#.#.","#...#","#...#"],Y:["#...#","#...#",".#.#.","..#..","..#..","..#..","..#.."],Z:["#####","....#","...#.","..#..",".#...","#....","#####"],",":["..","..","..","..",".#",".#","#."],".":[".",".",".",".",".",".","#"],"'":["#","#",".",".",".",".","."],"!":["#","#","#","#","#",".","#"],"?":[".###.","#...#","....#","..##.","..#..",".....","..#.."],"-":["....","....","....","####","....","....","...."]," ":["...","...","...","...","...","...","..."]};
  function dot(w, c) {
    var x = 0, r = [];
    w.toUpperCase().split('').forEach(function (ch) {
      var g = DB[ch === '’' ? "'" : ch] || DB[' '];
      g.forEach(function (row, y) { for (var i = 0; i < row.length; i++) if (row[i] === '#') r.push('<rect x="' + (x + i) * 10 + '" y="' + y * 10 + '" width="8.2" height="8.2"/>'); });
      x += g[0].length + 1;
    });
    var W = (x - 1) * 10 - 1.8;
    return '<svg class="dw ' + (c || '') + '" viewBox="0 0 ' + W + ' 68.2" style="width:' + (W / 68.2 * .66).toFixed(3) + 'em" aria-hidden="true">' + r.join('') + '</svg>';
  }
  function line(ws) { return '<span class="dl">' + ws.map(function (w) { return dot(w[0], w[1]); }).join('') + '</span>'; }
  var WORDS = ['listens', 'breaks down', 'compares', 'connects'];
  var HTML =
    '<div class="ab0 abg">' +
      '<p class="g-k">ME.00 — About</p>' +
      '<div class="g-l"><h2 aria-label="I find where people">' + line([['I', ''], ['find', '']]) + line([['where', 'mu']]) + line([['people', 'mu']]) + '</h2>' +
        '<p class="g-lab"><i>?</i>Who</p><p class="g-tx">어릴 때부터 디자인 한 길을 걸어왔어요. 스타트업에서 기획자와 화면을 그리며, 사용자가 막힘 없이 지나가는 길을 만드는 일에 보람을 느껴 UX로 방향을 잡았어요. 롯데이노베이트 운영팀에서는 2년 7개월 동안 실제 방문자가 매일 보는 웹사이트를 맡았어요.</p></div>' +
      '<div class="g-mid"><span class="strap" aria-hidden="true"><b>ISEO KIM · UI/UX · ISEO KIM · UI/UX · ISEO KIM · UI/UX · ISEO KIM · UI/UX ·</b></span>' +
        '<div class="badge"><span class="clip" aria-hidden="true"></span>' +
          '<div class="b-top"><span>ME.00</span><span>Access · All areas</span></div>' +
          '<div class="b-ph"><i style="background-image:url(img/about/badge.webp?2);background-position:50% 50%"></i></div>' +
          '<div class="b-nm" aria-label="Iseo Kim">' + line([['iseo', ''], ['kim', '']]) + '</div>' +
          '<div class="b-row"><span>UI/UX Designer</span><span>Seoul</span></div>' +
          '<div class="b-scr"><span class="b-pre">Iseo</span><span class="wv">' + WORDS.map(function (w, i) { return '<span class="wi' + (i ? '' : ' on') + '" aria-label="' + w + '">' + dot(w) + '</span>'; }).join('') + '</span></div>' +
          '<div class="b-bar" aria-hidden="true"></div>' +
        '</div></div>' +
      '<div class="g-r"><h2 aria-label="get stuck.">' + line([['get', 'mu']]) + line([['stuck.', 'ac']]) + '</h2>' +
        '<p class="g-lab"><i>!</i>How</p><p class="g-tx">지금은 사용자가 <em>멈춘 순간</em>을 찾아 다시 잇는 UI/UX 디자이너예요. 먼저 듣고, 잘게 나누고, 여러 시안으로 비교한 뒤 직접 코드로 구현해 개발자와 같은 화면을 보며 이야기해요.</p>' +
        '<a class="g-go" href="https://iseonve.github.io/about.html">More about me <span>→</span></a></div>' +
    '</div>';
  (function words() {
    var v = document.querySelector('.abg .wv');
    if (!v) { requestAnimationFrame(words); return; }
    var it = v.querySelectorAll('.wi'), i = 0;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setInterval(function () {
      var a = it[i]; i = (i + 1) % it.length; var b = it[i];
      a.classList.remove('on'); a.classList.add('off');
      b.classList.remove('off'); b.classList.add('in'); void b.offsetWidth; b.classList.remove('in'); b.classList.add('on');
      setTimeout(function () { a.classList.remove('off'); }, 800);
    }, 2600);
  })();
  /* the badge hangs from its strap: a slow sway, and it tilts toward the pointer */
  (function sway() {
    var g = document.querySelector('.abg .badge');
    if (!g) { requestAnimationFrame(sway); return; }
    var tx = 0, ty = 0, cx = 0, cy = 0, t0 = performance.now(), still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    addEventListener('pointermove', function (e) {
      var r = g.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
      tx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / 500));
      ty = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / 500));
    });
    (function f(t) {
      requestAnimationFrame(f); if (still) return;
      cx += (tx - cx) * .06; cy += (ty - cy) * .06;
      var sw = Math.sin((t - t0) / 1600) * 1.4;
      g.style.transform = 'rotateZ(' + (sw - cx * 3).toFixed(2) + 'deg) rotateY(' + (cx * 14).toFixed(2) + 'deg) rotateX(' + (-cy * 8).toFixed(2) + 'deg)';
    })(t0);
  })();
  (function fonts() { if (document.getElementById('binder-font')) return; var l = document.createElement('link'); l.id = 'binder-font'; l.rel = 'stylesheet'; l.href = 'https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,300&family=La+Belle+Aurore&display=swap'; document.head.appendChild(l); })();
  /* every title line is sized to the same width; the photo line a bit smaller, its photos outside the title */
  function fit() {
    var h = document.querySelector('.ab1 .ah'); if (!h) return;
    var W = h.clientWidth;
    h.querySelectorAll('.ln').forEach(function (l) {
      var w = l.querySelector('.w'); w.style.fontSize = '100px';
      var f = W / (w.offsetWidth / 100) * (l.classList.contains('lp') ? .74 : 1);
      w.style.fontSize = f + 'px'; l.style.marginTop = l.previousElementSibling ? (f * .2) + 'px' : '0';
    });
  }
  (function firstFit() { if (document.querySelector('.ab1 .ah')) { fit(); if (document.fonts) document.fonts.ready.then(fit); setTimeout(fit, 800); } else requestAnimationFrame(firstFit); })();
  addEventListener('resize', fit);
  (function wait() {
    var p = document.querySelector('.page .panel');
    if (!p || !p.querySelector('.pbig')) { requestAnimationFrame(wait); return; }
    if (!p.querySelector('.ab0')) p.insertAdjacentHTML('beforeend', HTML);
  })();
  function light() {
    var p = document.querySelector('.page .panel'); if (!p) return;
    var r = p.getBoundingClientRect();
    document.documentElement.classList.remove('onlight');
  }
  (function tick() { light(); requestAnimationFrame(tick); })();
  /* PJ.03: a "Period" row in place of FLOW and DATA */
  (function period() {
    var m = document.querySelector('.page .head.c3 .hmore');
    if (!m) { requestAnimationFrame(period); return; }
    if (m.querySelector('.hper')) return;
    var r = document.createElement('div'); r.className = 'hper';
    r.innerHTML = '<span class="lab">Period</span><span class="v">2023.08 \u2013 2026.03<small>2\uB144 7\uAC1C\uC6D4</small></span>';
    m.appendChild(r);
  })();
  /* PJ.02 card: the SENSE logo in place of the word in the top-right label */
  (function logo() {
    var c = document.querySelectorAll('.page .cardsec .card')[1];
    var h = c && c.querySelector('h3');
    if (!h) { requestAnimationFrame(logo); return; }
    if (h.querySelector('img')) return;
    h.innerHTML = '<img class="slogo" src="img/sense-logo.png" alt="SENSE">';
  })();
  /* PJ.01: ChatGPT mark + "Concept for ChatGPT" (an unofficial concept, not a partnership) */
  (function gpt() {
    var c = document.querySelectorAll('.page .cardsec .card')[0];
    var h = c && c.querySelector('h3');
    var t = document.querySelectorAll('.ohit[data-pj="1"] .ot, .lbl[data-for="lock"] .lt');
    if (!h || t.length < 2) { requestAnimationFrame(gpt); return; }
    var mark = '<img class="gmark" src="img/chatgpt-mark.png" alt="ChatGPT">';
    if (!h.querySelector('img')) { h.innerHTML = mark; h.setAttribute('aria-label','Concept for ChatGPT'); } h.classList.add('clab');
  })();
  /* PJ.03: Lotte mark beside the label */
  (function lotte() {
    var c = document.querySelectorAll('.page .cardsec .card')[2];
    var h = c && c.querySelector('h3');
    var t = document.querySelectorAll('.ohit[data-pj="3"] .ot, .lbl[data-for="folder"] .lt');
    if (!h || t.length < 2) { requestAnimationFrame(lotte); return; }
    var mark = '<img class="gmark" src="img/lotte-mark.png" alt="Lotte">';
    if (!h.querySelector('img')) { h.setAttribute('aria-label', h.textContent); h.innerHTML = mark; h.classList.add('clab'); }
  })();

  /* footer labels: only show once the objects have landed in the footer (not over the About panel) */
  (function glabs() {
    var g = document.getElementById('gather');
    if (!g) { requestAnimationFrame(glabs); return; }
    g.classList.add('gwait');
    (function tick() {
      requestAnimationFrame(tick);
      var r = g.getBoundingClientRect(), on = r.top < window.innerHeight * 0.62;
      g.classList.toggle('gon', on);
    })();
  })();
})();

/* header: capsule once the window scrolls + reading progress */
(()=>{const R=document.documentElement;const u=()=>{const H=R.scrollHeight-innerHeight;R.style.setProperty("--hp",H>0?Math.min(1,scrollY/H).toFixed(4):0);R.classList.toggle("hscr",scrollY>20);};addEventListener("scroll",u,{passive:true});addEventListener("resize",u);u();})();

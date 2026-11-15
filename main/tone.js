/* Main page About panel (draft): oevra-style layout — staggered headline, a label with a rule, three photos
   (one cut off by the right edge), one narrow column of text and a mono link to the About page. */
(function () {
  var SITE = 'https://iseonve.github.io/iseo_portfolio/', IMG = SITE + 'img/about/';
  var HTML =
    '<div class="ab0">' +
      '<h2 aria-label="Hi, I’m iseo, reconnecting paused moments"><span class="l1">Hi, I’m <span class="ii">i</span>seo,</span><span class="l2">reconnecting</span><span class="l3">paused moments</span></h2>' +
      '<p class="lab">About iseo</p>' +
      '<i class="ph p1" style="background-image:url(' + IMG + 'me.webp);background-position:22% 30%"></i>' +
      '<i class="ph p2" style="background-image:url(' + IMG + 's1b.webp);background-position:50% 30%"></i>' +
      '<i class="ph p3" style="background-image:url(' + IMG + 't1.webp);background-position:70% 40%"></i>' +
      '<div class="txt">' +
        '<p>어릴 때 포토샵으로 놀던 아이가, 그대로 디자인 한 길을 걸어왔어요. 지금은 사용자가 <em>멈춘 순간</em>을 찾아 다시 지나갈 수 있는 화면으로 잇는 UI/UX 디자이너예요.</p>' +
        '<p>화면을 그리기 전에 먼저 사람들의 이야기를 들어요. 인터뷰를 포스트잇 916장으로 쪼개서, 사용자가 어디서 막히는지 찾아요.</p>' +
        '<p>시안은 여러 개 펼쳐 놓고 고르고, 직접 코드로 구현해 개발자와 같은 화면을 보며 이야기해요. 쉴 땐 카페와 산책, 여행으로 채워요.</p>' +
        '<a class="go" href="' + SITE + 'about.html">More about me <i>- - ▸</i></a>' +
      '</div>' +
    '</div>';
  (function wait() {
    var p = document.querySelector('.page .panel');
    if (!p || !p.querySelector('.pbig')) { requestAnimationFrame(wait); return; }
    if (!p.querySelector('.ab0')) p.insertAdjacentHTML('beforeend', HTML);
  })();
  /* height from the lowest part (so nothing is cut), and the traces, in vw so they scale with the page */
  function layout() {
    var a = document.querySelector('.ab0'); if (!a || innerWidth <= 760) return;
    var A = a.getBoundingClientRect(), u = A.width / 100;
    var low = 0;
    a.querySelectorAll('h2,.ph,.txt').forEach(function (e) { var r = e.getBoundingClientRect(); low = Math.max(low, r.bottom - A.top); });
    a.style.height = (low / u + 7) + 'vw';
    var v = function (e) { var r = e.getBoundingClientRect(); return { l: (r.left - A.left) / u, t: (r.top - A.top) / u, r: (r.right - A.left) / u, b: (r.bottom - A.top) / u }; };
    var l1 = v(a.querySelector('.l1')), l3 = v(a.querySelector('.l3')), tx = v(a.querySelector('.txt')), p2 = v(a.querySelector('.p2')), go = v(a.querySelector('.go'));
    var ps = [].map.call(a.querySelectorAll('.txt p'), function (p) { var q = v(p); return q.t + 0.75; });
    var H = low / u + 7, X = tx.l - 2.2, y1 = (l1.t + l1.b) / 2, yj = l3.b + 1.6, yg = (go.t + go.b) / 2;
    var pm = (p2.t + p2.b) / 2, y0 = pm - (X - p2.r);
    var d1 = 'M 3 ' + y1 + ' L ' + (l1.l - 1.4) + ' ' + y1;
    var d2 = 'M ' + X + ' ' + yj + ' L ' + X + ' ' + yg + ' L ' + (go.l - 1) + ' ' + yg;
    var d3 = 'M ' + X + ' ' + y0 + ' L ' + p2.r + ' ' + pm;
    var pad = function (x, y, c) { return '<rect x="' + (x - .28) + '" y="' + (y - .28) + '" width=".56" height=".56" fill="' + (c || '#141214') + '"/>'; };
    var star = 'M ' + X + ' ' + (yj - .7) + ' L ' + (X + .18) + ' ' + yj + ' L ' + X + ' ' + (yj + .7) + ' L ' + (X - .18) + ' ' + yj + ' Z M ' + (X - .7) + ' ' + yj + ' L ' + X + ' ' + (yj - .18) + ' L ' + (X + .7) + ' ' + yj + ' L ' + X + ' ' + (yj + .18) + ' Z';
    var g = '<path class="ln" d="' + d1 + '"/><path class="ln" d="' + d2 + '"/><path class="ln" d="' + d3 + '"/>' +
      '<path class="sm" pathLength="1" d="' + d2 + '"/>' +
      pad(3, y1) + pad(l1.l - 1.4, y1) + ps.map(function (y) { return pad(X, y); }).join('') + pad(X, yg, '#f0699f') + pad(p2.r, pm) +
      '<path d="' + star + '" fill="#141214"/>';
    var s = a.querySelector('.trc');
    if (!s) { s = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); s.setAttribute('class', 'trc'); s.setAttribute('aria-hidden', 'true'); a.insertBefore(s, a.firstChild); }
    s.setAttribute('viewBox', '0 0 100 ' + H); s.style.height = H + 'vw'; s.innerHTML = g;
  }
  (function first() { if (document.querySelector('.ab0 .go')) { layout(); setTimeout(layout, 600); setTimeout(layout, 2000); } else requestAnimationFrame(first); })();
  addEventListener('resize', layout);
  if (document.fonts) document.fonts.ready.then(layout);
  function light() {
    var p = document.querySelector('.page .panel'); if (!p) return;
    var r = p.getBoundingClientRect();
    document.documentElement.classList.toggle('onlight', r.top < 70 && r.bottom > 40);
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
    var mark = '<img class="gmark" src="img/chatgpt-mark.png" alt="">';
    if (!h.querySelector('img')) h.innerHTML = mark + 'Concept for ChatGPT'; h.classList.add('glab');
  })();
  /* PJ.03: Lotte mark beside the label */
  (function lotte() {
    var c = document.querySelectorAll('.page .cardsec .card')[2];
    var h = c && c.querySelector('h3');
    var t = document.querySelectorAll('.ohit[data-pj="3"] .ot, .lbl[data-for="folder"] .lt');
    if (!h || t.length < 2) { requestAnimationFrame(lotte); return; }
    var mark = '<img class="gmark" src="img/lotte-mark.png" alt="">';
    if (!h.querySelector('img')) { h.innerHTML = mark + h.textContent; h.classList.add('glab'); }
  })();
})();

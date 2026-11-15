/* Main page About panel (draft): oevra-style layout — staggered headline, a label with a rule, three photos
   (one cut off by the right edge), one narrow column of text and a mono link to the About page. */
(function () {
  var IMG = 'https://iseonve.github.io/iseo_portfolio/img/about/';
  var ph = function (f, c, pos) { return '<i class="ap ' + c + '" style="background-image:url(' + IMG + f + ');background-position:' + (pos || '50% 50%') + '"></i>'; };
  var HTML =
    '<div class="ab0 ab1">' +
      '<div class="hd">' +
        '<div class="tags"><span>UI/UX Designer</span><span>Paused moments</span><s>Stuck</s></div>' +
        '<h2 class="ah" aria-label="Hi, I’m iseo. Unstuck by design.">' +
          '<span class="ln"><span class="w">Hi, I’m <b>i</b>seo</span></span>' +
          '<span class="ln lp"><span class="w">Unstuck</span>' + ph('s1b.webp', 'pl', '50% 30%') + ph('t1.webp', 'pr', '70% 50%') + '</span>' +
          '<span class="ln"><span class="w">By design</span></span>' +
        '</h2>' +
      '</div>' +
      '<div class="scat">' +
        ph('r1.webp', 'q3', '40% 40%') + ph('r3.webp', 'q4', '50% 30%') + ph('r2.webp', 'q5', '50% 40%') + ph('s1a.webp', 'q6', '60% 50%') +
        '<p class="tx t1">어릴 때부터 디자인 한 길을 걸어왔고, 지금은 사용자가 <em>멈춘 순간</em>을 찾아 다시 지나갈 수 있는 화면으로 잇는 UI/UX 디자이너예요.</p>' +
        '<p class="tx t2">화면을 그리기 전에 사람들의 이야기를 먼저 듣고 어디서 막히는지 찾아요. 시안은 여러 개 펼쳐 놓고 고른 뒤, 직접 코드로 구현해 개발자와 같은 화면을 보며 이야기해요.</p>' +
      '</div>' +
    '</div>';
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

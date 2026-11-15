/* Main page About panel (draft): oevra-style layout — staggered headline, a label with a rule, three photos
   (one cut off by the right edge), one narrow column of text and a mono link to the About page. */
(function () {
  var IMG = 'https://iseonve.github.io/iseo_portfolio/img/about/';
  var ph = function (f, c, pos) { return '<i class="ap ' + c + '" style="background-image:url(' + IMG + f + ');background-position:' + (pos || '50% 50%') + '"></i>'; };
  var HTML =
    '<div class="ab0 abb"><div class="binder">' +
      '<div class="holes" aria-hidden="true">' + new Array(10).join('<i></i>') + '</div>' +
      '<div class="bh-l k"><span>About me</span><span class="sq"></span></div>' +
      '<div class="bh-r k"><span>Iseo Kim</span><span>UI/UX Designer · Seoul</span></div>' +
      '<figure class="bleft"><img src="' + IMG + 'me.webp" alt="포스트잇 벽 앞에서 웃는 김이서" loading="lazy"><figcaption><span>hi, I’m Iseo</span><b>916 sticky notes</b></figcaption></figure>' +
      '<div class="bright"><h2>I find where people get stuck.</h2>' +
        '<div class="doesrow"><span>Iseo</span><span class="w" id="abw">listens</span><span>first</span></div>' +
        '<div class="bio"><p>멈춘 순간을 다시 잇는 UI/UX 디자이너, 김이서입니다.</p><p>먼저 듣고, 잘게 나누고, 여러 시안으로 비교합니다.</p></div></div>' +
      '<div class="bf-l k"><span>Cafés · Walks · Travel</span></div>' +
      '<a class="bf-r k" href="https://iseonve.github.io/iseo_portfolio/about.html" target="_blank" rel="noopener"><span>More about me</span><span>↗</span></a>' +
    '</div></div>';
  (function words() {
    var W = ['listens', 'breaks it down', 'compares', 'connects'], i = 0, w = document.getElementById('abw');
    if (!w) { requestAnimationFrame(words); return; }
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setInterval(function () { w.classList.add('out'); setTimeout(function () { i = (i + 1) % W.length; w.textContent = W[i]; w.classList.remove('out'); }, 320); }, 2600);
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

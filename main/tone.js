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
  function light() {
    var p = document.querySelector('.page .panel'); if (!p) return;
    var r = p.getBoundingClientRect();
    document.documentElement.classList.toggle('onlight', r.top < 70 && r.bottom > 40);
  }
  (function tick() { light(); requestAnimationFrame(tick); })();
})();

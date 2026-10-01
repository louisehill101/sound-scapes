// Plays the video with sound as soon as the page opens.
// Phones often block sound until the person taps, so a big play button appears if that happens.
(function(){
  const video = document.querySelector('video');
  const tap = document.querySelector('.tap');
  const label = tap.querySelector('.label');

  function showTap(text){ label.textContent = text; tap.classList.add('show'); tap.focus(); }

  function play(){
    video.muted = false;
    const p = video.play();
    if (p && p.catch) p.then(() => tap.classList.remove('show')).catch(() => showTap('Tap to play'));
  }

  tap.addEventListener('click', () => { if (video.ended) video.currentTime = 0; play(); });
  video.addEventListener('ended', () => showTap('Play again'));
  play();
})();

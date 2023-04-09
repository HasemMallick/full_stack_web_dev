window.addEventListener('scroll', function() {
  let scrollTop = window.scrollY;
  let windowHeight = window.innerHeight;
  let documentHeight = document.body.clientHeight;
  let progress = (scrollTop / (documentHeight - windowHeight)) * 100;
  let progressBar = document.getElementById('progress-bar');
  progressBar.style.width = progress + '%';
});

function bglowdiv(subjects) {
  for (var testimonialText of subjects) {
    testimonialText.insertAdjacentHTML('afterend', '<div class="bottom_glow"> </div>');
  }
}

var subjects = document.querySelectorAll('.catalog__product-content');
bglowdiv(subjects);
		

particlesJS.load('particles-js', 'particlesjs-config2.json');

	
function bglowdiv(subjects) {
  for (var testimonialText of subjects) {
    testimonialText.insertAdjacentHTML('afterend', '<div class="bottom_glow"> </div>');
  }
}

var subjects = document.querySelectorAll('.catalog__product-content');
bglowdiv(subjects);
	
	

particlesJS.load('particles-js', 'particlesjs-config.json');

// Cursor
var cursor = document.getElementById("cursor"),
    follower = document.getElementById("aura"),
    follower2 = document.getElementById("spintext");

// Cursor - coords
var posX = 0,
	posY = 0;

var mouseX = 0,
	mouseY = 0;

// Cursor position
function mouseCoords(e) {

    // For IE
    if (document.all)  {
      mouseX = event.x + document.body.scrollLeft;
      mouseY = event.y + document.body.scrollTop;

    // For Everything else
    } else {
      mouseX = e.pageX; // Координата X курсора
      mouseY = e.pageY; // Координата Y курсора
    }
}

// GSAP Cursor position css change
gsap.to({}, 0.010, {
	repeat: -1,
	onRepeat: function() {
		posX += (mouseX - posX) / 9;
		posY += (mouseY - posY) / 9;

		gsap.set(follower, {
			css: {
				left: posX - 48,
				top: posY - 48
			}
		});
    
 		gsap.set(follower2, {
			css: {
				left: posX - 48,
				top: posY - 48
			}
		});

		gsap.set(cursor, {
			css: {
				left: mouseX,
				top: mouseY
			}
		});
	}
});

// Cursor on links hover add/remove class
links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
	// Cursor hover link
	links[i].addEventListener("mouseover", function () {
		cursor.classList.add("active");
		follower.classList.add("active");
		follower2.classList.add("active");
  });
	// Cursor leave out link
  links[i].addEventListener("mouseout", function () {
		cursor.classList.remove("active");
		follower.classList.remove("active");
	   	follower2.classList.remove("active");
  });
}

// Cursor on card hover add/remove class
links = document.getElementsByClassName('card');
for (var i = 0; i < links.length; i++) {
	// Cursor hover link
	links[i].addEventListener("mouseover", function () {
		cursor.classList.add("active");
		follower.classList.add("active");
		follower2.classList.add("active");
  });
	// Cursor leave out link
  links[i].addEventListener("mouseout", function () {
		cursor.classList.remove("active");
		follower.classList.remove("active");
		follower2.classList.remove("active");
  });
}

// Hide cursor when off screen
function mouseOut() {
	cursor.classList.add("hidden");
	follower.classList.add("hidden");
	follower2.classList.add("hidden");
}

// bring back when back to screen
function mouseIn() {
	cursor.classList.remove("hidden");
	follower.classList.remove("hidden");
	follower2.classList.remove("hidden");
}

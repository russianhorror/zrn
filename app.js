/************************************/
/* ADD BACKGLOW DIV TO PRODUCT CARD */
/************* START ****************/

function bglowdiv(subjects) {
  for (var testimonialText of subjects) {
    testimonialText.insertAdjacentHTML('afterend', '<div class="bottom_glow"> </div>');
  }
}

var subjects = document.querySelectorAll('.catalog__product-content');
bglowdiv(subjects);
	
/************** END *****************/	
/* ADD BACKGLOW DIV TO PRODUCT CARD */
/************************************/	



/*-----------------------------------*/



/************************************/
/*         CURSOR EMITTER           */
/************* START ****************/

function emitterCursor() {
  
  var possibleEmoji = ["❄", "*", ".", "+"]
  var width = window.clientWidth;
  var height = window.clientWidth;
  var cursor = {x: width/2, y: width/2};
  var particles = [];
  var thefirstChild = document.querySelector("#__nuxt");
  
  function init() {
    bindEvents();
    loop();
  }
  
  // Bind events that are needed
  function bindEvents() {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchstart', onTouchMove);
    
    window.addEventListener('resize', onWindowResize);
  }
  
  function onWindowResize(e) {
    width = window.clientWidth;
    height = window.clientWidth;
  }
  
  function onTouchMove(e) {
    if( e.touches.length > 0 ) {
      for( var i = 0; i < e.touches.length; i++ ) {
        addParticle( e.touches[i].clientX, e.touches[i].clientY, possibleEmoji[Math.floor(Math.random()*possibleEmoji.length)]);
      }
    }
  }
  
  function onMouseMove(e) {    
    cursor.x = e.clientX;
    cursor.y = e.clientY;
    
    addParticle( cursor.x, cursor.y, possibleEmoji[Math.floor(Math.random()*possibleEmoji.length)]);
  }
  
  function addParticle(x, y, character) {
    var particle = new Particle();
    particle.init(x, y, character);
    particles.push(particle);
  }
  
  function updateParticles() {
    
    // Updated
    for( var i = 0; i < particles.length; i++ ) {
      particles[i].update();
    }
    
    // Remove dead particles
    for( var i = particles.length -1; i >= 0; i-- ) {
      if( particles[i].lifeSpan < 0 ) {
        particles[i].die();
        particles.splice(i, 1);
      }
    }
    
  }
  
  function loop() {
    requestAnimationFrame(loop);
    updateParticles();
  }
  
  /**
   * Particles
   */
  
  function Particle() {

    this.lifeSpan = 120; //ms
    this.initialStyles ={
      "position": "absolute",
      "display": "block",
      "pointerEvents": "none",
      "z-index": "10000000",
      "fontSize": "16px",
      "will-change": "transform"
    };

    // Init, and set properties
    this.init = function(x, y, character) {

      this.velocity = {
        x:  (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
        y: 1
      };
      
      this.position = {x: x - 10, y: y - 20};

      this.element = document.createElement('span');
      this.element.innerHTML = character;
      applyProperties(this.element, this.initialStyles);
      this.update();
      
      document.body.insertBefore(this.element, thefirstChild);

    };
    
    this.update = function() {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.lifeSpan--;
      
      this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + (this.lifeSpan / 120) + ")";
    }
    
    this.die = function() {
      this.element.parentNode.removeChild(this.element);
    }
    
  }
  
  /**
   * Utils
   */
  
  // Applies css `properties` to an element.
  function applyProperties( target, properties ) {
    for( var key in properties ) {
      target.style[ key ] = properties[ key ];
    }
  }
  
  init();

/************** END *****************/	
/*         CURSOR EMITTER           */
/************************************/


	
/*-----------------------------------*/


	
/************************************/
/*        CURSOR FOLLOWERS          */
/************* START ****************/

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
      mouseX = e.pageX;
      mouseY = e.pageY; 
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
        top: posY - 48 } });



    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY } });


  } });


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
links = document.getElementsByClassName('catalog__item');
for (var i = 0; i < links.length; i++) {
  // Cursor hover card
  links[i].addEventListener("mouseover", function () {
    cursor.classList.add("active");
    follower.classList.add("active");
    follower2.classList.add("active");
  });
  // Cursor leave out card
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



/************** END *****************/	
/*        CURSOR FOLLOWERS          */
/************************************/
	
	

// SNOWFALL

particlesJS.load('particles-js', 'particlesjs-config2.json');

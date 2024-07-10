function canvas(){

    const canvas = document.querySelector("#page2 canvas");
const context = canvas.getContext("2d");

canvas.height = window.innerHeight/1.4;
canvas.width = window.innerWidth/2.7;



window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
https://media.rolex.com/image/upload/t_v7/f_auto,q_auto:best,c_limit,w_750/v1/rolexcom/collection/family-pages/classic-watches/oyster-perpetual/family-page/scrollersive/portrait/oyster-perpetual-scrollersive-portrait-${index.toString().padStart(4,0)}

 `;
  return data;
}

const frameCount = 160;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub:1,
    // markers:true,
    trigger: `#page2>canvas`,
    //   set start end according to preference
    start: `top 0%`,
    end: `120% top`,
   
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
    );
  }
  ScrollTrigger.create({
    
    trigger: "#page2",
    pin: true,
    // markers:true,
    
    //   set start end according to preference
    start: `top top`,
    end: `0% -130%`,
    
  });
  
}
canvas()

// loader-----------------
var tl10 = gsap.timeline()
tl10.to("#loader span svg",{
  opacity:1,
  duration:1,
 })
tl10.to("#loader span svg",{
    x:-70,
    delay:0.3,
    duration:1,
 },'a')
 tl10.to(".btn-shine",{
    opacity:1,
    x:-120,
    delay:0.3,
    duration:1,
 },'a')
 tl10.to(".btn-shin",{
    opacity:1,
    y:2,
    // delay:0.3,
 })
 tl10.to("#loader",{
    top:"-100vh",
    // opacity:0,
    // delay:2,
    // duration:0.2,
 })
//PAGE2 RIGHT SECTION ANIMATIONS------------------------->

gsap.to("#page2 #right h1",{
  opacity:0,
  top:"35%",
  scrollTrigger:{
    trigger: `#page2 #right`,
    // markers:true,
    start: `top 00%`,
    end: `30% 0%`,
    scrub:1,
  }
})
gsap.to("#page2 #right h3",{
  opacity:1,
  top:"35%",
  scrollTrigger:{
    trigger: `#page2 #right `,
    // markers:true,
    scrub:1,
    start: `55% 00%`,
    end: `90% 0%`,
    
  }
})
gsap.to("#page2 #right h3",{
 
  opacity:0,
  scrollTrigger:{
    trigger: `#page2 #right `,
    // markers:true,
    scrub:1,
    start: `85% 0%`,
    end: `100% 0%`,
    
  }
})
gsap.to("#page2 #right p",{
  opacity:1,
 top:"30%",
  scrollTrigger:{
    trigger: `#page2 #right`,
    scrub:1,
    // markers:true,
    start: `105% 0%`,
    end: `160% 0%`,
  }
})

//PAGE3  ANIMATIONS------------------------->
var tl = gsap.timeline({scrollTrigger:{
  trigger:"#page3",
  start:"12% 20%",
  end:"100% 20%",
  scrub:1.5,
  pin:true,
  // markers:true  
}})
tl.to("#ione",{
 scale:0.7,
 opacity:0,
 },'a')
 tl.to("#name1",{
  scale:1,
  opacity:0,
  },'a')
  tl.to("#dis1",{
    scale:0.7,
    opacity:0,
    },'a')
tl.to("#itwo",{
 y:-500,
 duration:1,
pin :true,
},'a')
tl.to("#name2",{
  y:-400,
 pin :true,
  },'a')
tl.to("#dis2",{
  y:-580,
 duration:1,
pin :true,
    },'a')
tl.to("#itwo",{
 scale:0.7,
 opacity:0,
 duration:1,
},'b')
tl.to("#name2",{
  scale:0.7,
  opacity:0,
  },'b')
tl.to("#dis2",{
  scale:0.7,
  opacity:0,
    },'b')
tl.to("#ithree",{
y:-1000,
 duration:1,
 pin:true,
},'b')
tl.to("#name3",{
  y:-800,
 pin :true,
  },'b')
tl.to("#dis3",{
  y:-1100,
 duration:.8,
pin :true,
    },'b')
tl.to("#ithree",{
scale:0.7,
opacity:0,
duration:1,
},'c')
tl.to("#name3",{
  scale:0.7,
  opacity:0,
  duration:1,
  },'c')
tl.to("#dis3",{
  scale:0.7,
  opacity:0,
  duration:1,
    },'c')
tl.to("#ifour",{
y:-1425,
duration:.7,
pin:true,
},'c')
tl.to("#name4",{
  y:-1170,
  duration:.7,
  pin:true,
  },'c')
tl.to("#dis4",{
  y:-1600,
duration:.7,
pin:true,
  },'c')
  
//PAGE4  ANIMATIONS------------------------->
  var v = document.querySelector("#v4")
  document.querySelector("#one")
  var a= document.querySelector("#box1")
  a.addEventListener("mouseenter",function(){
      one.style.opacity=1
      v.style.opacity=0
      gsap.from("#one",{
        y:60,
      })
  })
  a.addEventListener("mouseleave",function(){
      one.style.opacity=0,
      v.style.opacity=1
  })
  var b= document.querySelector("#box2")
  document.querySelector("#two")
  b.addEventListener("mouseenter",function(){
      two.style.opacity=1,  
      v.style.opacity=0,
      one.style.opacity=0,
      gsap.from("#two",{
        y:60,
      })
  })
  b.addEventListener("mouseleave",function(){
      two.style.opacity=0,
      v.style.opacity=1
  })
  
  var c= document.querySelector("#box3")
  document.querySelector("#three ")
  c.addEventListener("mouseenter",function(){
      three.style.opacity=1,
      v.style.opacity=0,
      gsap.from("#three",{
        y:60,
      })
  })
  c.addEventListener("mouseleave",function(){
      three.style.opacity=0,
      v.style.opacity=1
  })
  
  var d= document.querySelector("#box4")
  document.querySelector("#four")
  d.addEventListener("mouseenter",function(){
      four.style.opacity=1,
      v.style.opacity=0,
      gsap.from("#four",{
        y:60,
      })
  })
  d.addEventListener("mouseleave",function(){
      four.style.opacity=0,
      v.style.opacity=1
  })
  
  var e=document.querySelector("#box5")
  document.querySelector("#five")
  e.addEventListener("mouseenter",function(){
      five.style.opacity=1,
      v.style.opacity=0,
      gsap.from("#five",{
        y:60,
      })
  })
  e.addEventListener("mouseleave",function(){
      five.style.opacity=0,
      v.style.opacity=1
  })
  
  var f=document.querySelector("#box6")
  document.querySelector("#six")
  f.addEventListener("mouseenter",function(){
      six.style.opacity=1,
      v.style.opacity=0,
      gsap.from("#six",{
        y:60,
      })
  })
  f.addEventListener("mouseleave",function(){
      six.style.opacity=0,
      v.style.opacity=1
  })
//page5----------------->


function lerp({ x, y }, { x: targetX, y: targetY }) {
  const fraction = 0.1;
  x += (targetX - x) * fraction;
  y += (targetY - y) * fraction;
  return { x, y };
}

class Slider {
  constructor(el) {
    this.IMG_CLASS = 'slider__images-item';
    this.TEXT_CLASS = 'slider__text-item';
    this.ACTIVE_IMG_CLASS = `${this.IMG_CLASS}--active`;
    this.ACTIVE_TEXT_CLASS = `${this.TEXT_CLASS}--active`;

    this.el = el;
    this.contentEl = document.getElementById('slider-content');

    this.activeImg = el.getElementsByClassName(this.ACTIVE_IMG_CLASS);
    this.activeText = el.getElementsByClassName(this.ACTIVE_TEXT_CLASS);
    this.images = el.getElementsByTagName('img');

    document.getElementById('slider-dots').addEventListener('click', this.onDotClick.bind(this));
    document.getElementById('left').addEventListener('click', this.prev.bind(this));
    document.getElementById('right').addEventListener('click', this.next.bind(this));

    window.addEventListener('resize', this.onResize.bind(this));

    this.onResize();

    this.length = this.images.length;
    this.lastX = this.lastY = this.targetX = this.targetY = 0;

    this.initAutoSlide();
  }

  onResize() {
    const htmlStyles = getComputedStyle(document.documentElement);
    const mobileBreakpoint = htmlStyles.getPropertyValue('--mobile-bkp');
    const isMobile = this.isMobile = matchMedia(`only screen and (max-width: ${mobileBreakpoint})`).matches;

    this.halfWidth = innerWidth / 2;
    this.halfHeight = innerHeight / 2;
    this.zDistance = htmlStyles.getPropertyValue('--z-distance');

    if (!isMobile && !this.mouseWatched) {
      this.mouseWatched = true;
      this.el.addEventListener('mousemove', this.onMouseMove.bind(this));
      this.el.style.setProperty('--img-prev', `url(${this.images[+this.activeImg[0].dataset.id - 1].src})`);
      this.contentEl.style.setProperty('transform', `translateZ(${this.zDistance})`);
    } else if (isMobile && this.mouseWatched) {
      this.mouseWatched = false;
      this.el.removeEventListener('mousemove', this.onMouseMove.bind(this));
      this.contentEl.style.setProperty('transform', 'none');
    }
  }

  getMouseCoefficients({ pageX, pageY } = {}) {
    const halfWidth = this.halfWidth;
    const halfHeight = this.halfHeight;
    const xCoeff = ((pageX || this.targetX) - halfWidth) / halfWidth;
    const yCoeff = (halfHeight - (pageY || this.targetY)) / halfHeight;
    return { xCoeff, yCoeff };
  }

  onMouseMove({ pageX, pageY }) {
    this.targetX = pageX;
    this.targetY = pageY;
    if (!this.animationRunning) {
      this.animationRunning = true;
      this.runAnimation();
    }
  }

  runAnimation() {
    if (this.animationStopped) {
      this.animationRunning = false;
      return;
    }

    const maxX =1.5; // Reduced rotation angles for minimal effect
    const maxY = 0; // Reduced rotation angles for minimal effect

    const newPos = lerp({ x: this.lastX, y: this.lastY }, { x: this.targetX, y: this.targetY });

    const { xCoeff, yCoeff } = this.getMouseCoefficients({ pageX: newPos.x, pageY: newPos.y });

    this.lastX = newPos.x;
    this.lastY = newPos.y;

    this.positionImage({ xCoeff, yCoeff });

    this.contentEl.style.setProperty('transform', `
      translateZ(${this.zDistance})
      rotateX(${maxY * yCoeff}deg)
      rotateY(${maxX * xCoeff}deg)
    `);

    if (this.reachedFinalPoint) {
      this.animationRunning = false;
    } else {
      requestAnimationFrame(this.runAnimation.bind(this));
    }
  }

  get reachedFinalPoint() {
    const lastX = ~~this.lastX;
    const lastY = ~~this.lastY;
    const targetX = this.targetX;
    const targetY = this.targetY;

    return (lastX === targetX || lastX - 1 === targetX || lastX + 1 === targetX) && (
      lastY === targetY || lastY - 1 === targetY || lastY + 1 === targetY);
  }

  positionImage({ xCoeff, yCoeff }) {
    const maxImgOffset = 0; // Reduced translation distance for minimal effect
    const currentImage = this.activeImg[0].children[0];

    currentImage.style.setProperty('transform', `
      translateX(${maxImgOffset * -xCoeff}em)
      translateY(${maxImgOffset * yCoeff}em)
    `);
  }

  onDotClick({ target }) {
    if (this.inTransit) return;

    const dot = target.closest('.slider__nav-dot');
    if (!dot) return;

    const nextId = dot.dataset.id;
    const currentId = this.activeImg[0].dataset.id;

    if (currentId == nextId) return;

    this.startTransition(nextId);
  }

  transitionItem(nextId) {
    const self = this;
    const el = this.el;
    const currentImg = this.activeImg[0];
    const currentId = currentImg.dataset.id;
    const imgClass = this.IMG_CLASS;
    const textClass = this.TEXT_CLASS;
    const activeImgClass = this.ACTIVE_IMG_CLASS;
    const activeTextClass = this.ACTIVE_TEXT_CLASS;
    const subActiveClass = `${imgClass}--subactive`;
    const transitClass = `${imgClass}--transit`;
    const nextImg = el.querySelector(`.${imgClass}[data-id='${nextId}']`);
    const nextText = el.querySelector(`.${textClass}[data-id='${nextId}']`);

    let outClass = '';
    let inClass = '';

    this.animationStopped = true;

    nextText.classList.add(activeTextClass);
    el.style.setProperty('--from-left', nextId);

    currentImg.classList.remove(activeImgClass);
    currentImg.classList.add(subActiveClass);

    if (currentId < nextId) {
      outClass = `${imgClass}--next`;
      inClass = `${imgClass}--prev`;
    } else {
      outClass = `${imgClass}--prev`;
      inClass = `${imgClass}--next`;
    }

    nextImg.classList.add(outClass);

    requestAnimationFrame(() => {
      nextImg.classList.add(transitClass, activeImgClass);
      nextImg.classList.remove(outClass);

      this.animationStopped = false;
      this.positionImage(this.getMouseCoefficients());

      currentImg.classList.add(transitClass, inClass);
      currentImg.addEventListener('transitionend', function onImageTransitionEnd(e) {
        e.stopPropagation();
        nextImg.classList.remove(transitClass);
        self.inTransit = false;
        this.className = imgClass;
        this.removeEventListener('transitionend', onImageTransitionEnd);
      });
    });

    if (!this.isMobile) this.switchBackgroundImage(nextId);
  }

  startTransition(nextId) {
    if (this.inTransit) return;

    const activeText = this.activeText[0];
    const backwardsClass = `${this.TEXT_CLASS}--backwards`;
    const self = this;

    this.inTransit = true;

    activeText.classList.add(backwardsClass);
    activeText.classList.remove(this.ACTIVE_TEXT_CLASS);
    activeText.addEventListener('transitionend', function onTextTransitionEnd(e) {
      if (!e.pseudoElement) {
        e.stopPropagation();
        requestAnimationFrame(() => {
          self.transitionItem(nextId);
        });
        this.removeEventListener('transitionend', onTextTransitionEnd);
      }
    });

    requestAnimationFrame(() => {
      activeText.classList.remove(backwardsClass);
    });
  }

  next() {
    if (this.inTransit) return;

    let nextId = +this.activeImg[0].dataset.id + 1;
    if (nextId > this.length) nextId = 1;
    this.startTransition(nextId);
  }

  prev() {
    if (this.inTransit) return;

    let nextId = +this.activeImg[0].dataset.id - 1;
    if (nextId < 1) nextId = this.length;
    this.startTransition(nextId);
  }

  switchBackgroundImage(nextId) {
    const bgClass = 'slider--bg-next';
    const el = this.el;
    const imageUrl = `url(${this.images[+nextId - 1].src})`;

    el.style.setProperty('--img-next', imageUrl);
    el.addEventListener('transitionend', function onBackgroundTransitionEnd(e) {
      if (e.target === this) {
        this.style.setProperty('--img-prev', imageUrl);
        this.classList.remove(bgClass);
        this.removeEventListener('transitionend', onBackgroundTransitionEnd);
      }
    });
    el.classList.add(bgClass);
  }

  initAutoSlide() {
    let timer = 0;

    const autoSlide = () => {
      requestAnimationFrame(() => {
        this.next();
      });
      timer = setTimeout(autoSlide, 3000);
    };

    const stopAutoSlide = () => {
      clearTimeout(timer);
    };

    this.el.addEventListener('mousemove', stopAutoSlide);
    this.el.addEventListener('touchstart', stopAutoSlide);
    timer = setTimeout(autoSlide, 2000);
  }
}

const sliderEl = document.getElementById('slider');
const slider = new Slider(sliderEl);



// PAGE6_ANIMATIONS--------------------->
function page6_canvas(){
  const canvas = document.querySelector("#page6 #page6_canvas");
  const context = canvas.getContext("2d");
  
  canvas.height = window.innerHeight/1.3;
  canvas.width = window.innerWidth/1.5;
  
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
      https://media.rolex.com/image/upload/t_v7/f_auto,q_auto:best,c_limit,w_1920/v1/rolexcom/new-watches/2024/hub-new-watches/scrollersive/landscape/new-watches-2024-hub-landscape-${index.toString().padStart(4,0)}

   `;
    return data;
  }
  
  const frameCount = 174;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub:1,
      // markers:true,
      trigger: `#page6_canvas`,
      //   set start end according to preference
      start: `top 0%`,
      end: `200% top`,
     
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
      );
    }
    ScrollTrigger.create({
      
      trigger: "#page6",
      pin: true,
     
      start: `top top`,
      end: `0% -250%`,
      // snap:true,

    });
}
page6_canvas();

gsap.from("#left_watch #left1",{
  opacity:0,
  scrollTrigger:{
    trigger:"#page6",
    start:'0% 0%',
    end:'0% -50%',
    scrub:1,
      onLeave: () => gsap.to("#left_watch #left1", { opacity: 0, y: 0, duration: 1 }),
      
    // markers:true

  }
})

gsap.to("#right_watch #right1",{
  opacity:1,
  
  
  scrollTrigger:{
    trigger:"#page6_content",
    start:'100% 00%',
    end:'120% 00%',
    scrub:1,
      onLeave: () => gsap.to("#right_watch #right1", { opacity: 0, y: 0, duration:1 }),
      
    // markers:true

  }
})

gsap.to("#left_watch #left2",{
  opacity:1,
 
  scrollTrigger:{
    trigger:"#page6_content",
    start:'150% 00%',
    end:'170% 00%',
    scrub:1,
      onLeave: () => gsap.to("#left_watch #left2", { opacity: 0, y: 0, duration:1 }),
      
    // markers:true

  }
})
gsap.to("#right_watch #right2",{
  opacity:1,
  scrollTrigger:{
    trigger:"#page6_content",
    start:'210% 00%',
    end:'230% 00%',
    scrub:1,
      onLeave: () => gsap.to("#right_watch #right2", { opacity: 0, y: 0, duration:1 }), 
  }
})


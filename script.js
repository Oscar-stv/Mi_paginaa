gsap.registerPlugin(ScrollTrigger);

// Animar secciones al aparecer
gsap.utils.toArray("section").forEach(sec=>{
gsap.from(sec,{
y:60,
opacity:0,
duration:.9,
scrollTrigger:{
trigger:sec,
start:"top 85%",
once:true
}
});
});

// Stack con profundidad ligera
gsap.utils.toArray(".stack-card").forEach((card,i)=>{
gsap.fromTo(card,
{y:100,opacity:0,scale:.9},
{
y:0,
opacity:1,
scale:1 - i*.04,
scrollTrigger:{
trigger:card,
start:"top 85%",
scrub:true
}
});
});

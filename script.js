gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach(sec=>{
gsap.from(sec,{
y:60,
opacity:0,
duration:.8,
scrollTrigger:{
trigger:sec,
start:"top 85%",
once:true
}
});
});

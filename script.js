gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach(sec=>{
gsap.from(sec,{
opacity:0,
y:80,
duration:1,
scrollTrigger:{
trigger:sec,
start:"top 80%",
once:true
}
});
});

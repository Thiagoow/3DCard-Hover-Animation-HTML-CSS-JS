/*============= Vanilla Tilt Js Library =============*/
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 300,
  scale: 1,
  glare: true,
  reverse: true,
  //axis: "y",
  transition: true,
  gyroscope: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  "max-glare": 0.3
});

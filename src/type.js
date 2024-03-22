'use strict';

new TypeIt('.home__title__strong',  {
  loop: true,
  speed: 125,
})
.move(-11)
.type('Amazing ')
.pause(1000)
.move(null, { to: 'END'})
.delete()
.type('Front-end Enginner')
.pause(1000)
.move(-9)
.delete(9)
.type('Back-end')
.pause(1000)
.delete(9)
.type('Full-stack')
.move(9)
.pause(1000)
.delete()
.go();
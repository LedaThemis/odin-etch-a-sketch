# [Odin | Etch-a-sketch](https://ledathemis.github.io/odin-etch-a-sketch)
Technologies used:

![HTML5](https://img.shields.io/badge/html5-E34F26.svg?style=for-the-badge&logo=html5&logoColor=FFF)
![CSS3](https://img.shields.io/badge/css3-1572B6.svg?style=for-the-badge&logo=css3&logoColor=FFF)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Struggles faced:

- Finding a way to darken a color, turns out you can do it for an rgb by multiplying each value by a factor
  e.g. `rgb(R*0.9, G*0.9, B*0.9)` would darken given color by 10%
- Having the color reach black after 10 hovers was also quite difficult, the solution I used was to store 
  initial color values of each block and use `darkenRGB()` on it.
  
  Note: an alternative approach would be the use of `filter: brightness(X%), but that would darken everything (even border)
  

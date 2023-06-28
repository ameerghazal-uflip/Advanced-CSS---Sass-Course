/*

  
  SECTION 2 NATOURS PROJECT PART 1

  Building the Header (1-2)
  - vh is the viewport height.
  - background-positon: ...; is how the background image adjusts to resizing.
  - To set a background image with a tint use this:
    background-image: linear-gradient(
        to right bottom,
        rgba(126, 213, 111, 0.8),
        rgba(40, 180, 133, 0.8)
      ),
      url(../img/hero.jpg);
  - clip-path: polygon(coordinates)
  - We can use clip-path to specify something would look on the screen. The first coordinate is the top, then the right, then the bottom right, bottom left, etc.
  - Ex: clip-path: polygon(0 0, 100% 0, 100% 200px, 0 100%);
  - We can use percents or any type of unit. 
  - It uses the flipped CS graph, where (0,0) is at the top-left of the page.
  - Remember, the reference for the abs. positioning is the parent which is set to relative.
  - Don't forget that using absolute positioning, we need to translate back the percentage to get the text in the middle. Check the other course's notes. 

  Creating Cool CSS Animations
  - We can basically write functions in css for animations. Use the @keyframe withTheName {}
  - Inside of the keyframe we can specifiy percentages with what happens at that value.
  ex:
    @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }

    80% {
      transform: translateX(10px);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }

  - From there, if we want to use this animation on an element, specify the animation-name: ... and animation-duration: ... properties.
  - animation-delay: ... will cause the animation to delay.
  - animation-iteration-count: ...; number of times to do the animation.
  - animation-timing-function: ...; 
  - We can also specify these in the shorthand way by using animation: name duration time-function.
  ex: animation: moveInLeft 1s ease-out;
  - backface-visibility: hidden; helps the shaking from elements when using animations.
  - We can reuse animations all over the place. It does not only have to be on reloads.


  Building a Complex Animated Button (1-2)
  - transtion: ... & transform: ...; are very important propeties for animations.
  - For after pseudo elements, we have to specify the content.
  - Use the 
  - transform: scale() will change the size of the element
  - z-index specifies which one appears on top if two things are on top of each other.
  - animation-fill-mode: backwards; will apply the styles of the 0% before the code is styled.
  -
  -
  -


  _______________________________________________________________________________







*/

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
  


  _______________________________________________________________________________


  SECTION 3: HOW CSS WORKS

  Three Pillars of HTML, CSS
  - Responsive Design: Fluid Layouts, media queries, correct units, repsonsive image, etc.
  - Maintainable and Scaleable code
  - Web performance
  
  How CSS Works Behind the Scences
  - Loaded html, parses html, which builds the dom, and loads the css at the same time
  - Look at the charts in the notes.
  
  How CSS is Parsed (1): Cascade & Specificy
  - Cascade: proccess of cimbining different stylesheets and resolving conflicts between different CSS rules and declarations, when more than one rule applies to a certain element.
  - Importance > Specificity > Source Order
  - (User importance, author importantce, author, user, default browser)
  - If everything has the same importance, then it goes down to the specificty: (Inline, ID's, Classes (Pseudo classes count also), Elements)
  Ex: nav#nav div.pull-right .button would be (0, 1, 2, 2) is the specifcity.
  - The higher one is applied by the look from left to right; the value of the winning decleation is the cascasded value.
  - If is there still a tie between importance and specificy, then the order matters: the last one is used.
  - The universal selector has no specificy (0,0,0,0)
  - Rely more on specificty than the order of the selectors. 

  How CSS is Parsed Part (2): Value Processing
  - Some properties have inital values. 
  - Font-size (root) has a browser default of 16px.
  - Rem unit is always computed through the root size.
  - How units are comverted from relative to abs. px:
  - Percentages:
    - ex: font-size: 150%, that text has a font-size 150% larger than the parent elements font-size.
    - ex: % lengths: padding: 10% is 10% of the parent's width.
  - Font-based
    - em (font): reference is the parent computed font-size
    - em (length): reference is the current element computed font-size.
    - rem: root computed font-size.
  - Viewport-based
    - vh: 1% of viewport height
    - vw: 1% of viewport width
  
    How CSS is Parsed Part (3): Inheritance
    - Some properties are inherited, while some are not.
    - If a parent container has a value that is not declared on the child and inheritable, it is passed down to the child.
    - With that said, the value that is passed down is the computed value.
    - For example, line-height: 150% of font-size: 20px on the parent is used after computed, not 150% of the child's font-size.
    - Properties related to text are inherited.
    - Inherit keyword forces inheritance on a certain property.
    - Initial keywordresets a property to inital value.

    Converting px into rem
    - Use percentages for converting font-sizes.
    For example, html { font-size: 62.5% == 1rem == 10px}
    - Set the box-sizing on the body and inherit through the universal selector.
    
    How CSS renders the website
    - 1. The Box Model: by setting box-sizing to border-box, the total width and height = specified.
    - 2. Box-Types: block, inline-block, inline
    - 3. Positioning Scheme: normal, floats, abs. positioning
    - 4. Stacking-Contexts: z-index
    
    CSS Archetecutre, Components, BEM
    - Divide pages into modular building blocks components, that are reusable across a project. 
    - Use meaningful class names. (block element modifer). (block__element__modifer)
    - 7-1 Pattern: 7 different folders for partial sass files, and 1 main sass file to importat all other files into a complied css style sheet.
    Ex: base, componenets, layout, pages, themes, abstracts, vendors, etc.
    


  _________________________________________________

  SECTION 4: INTRODUCTION INTO SASS AND NPM

  What is Sass?
  - Extenstion of CSS that adds power and elegance to the basic language.
  - Write Sass code into multiple files, use a compiler, and it converts all our code into css. 
  - Variables: reusable values such as color, font-sizes, spacing, etc.
  - Nesting: nest selectors inside of one another.
  - Operators: for mathemtical operations
  - Partials and Imports: to write css in different files and import them all into one.
  - Mixins: reusable css code.
  - Functions: they produce a value that can be used.
  - Extends: make different selectors inherit declerations that are common to all of them.
  - Control directives: for complex code with conditionals and loops.
  - Sass syntax does not use curly braces, but SCSS syntax is sassy css, which is the exact same thing with curly braces.

  First Steps w/ Sass: Variables & Nesting
  - Comments work the same as JS with double slashes.
  - We can create variables in Sass by using the "$" along with the variable name. We can re use the variable name throughout the code.
  - Ex: $color-primary: #000;
  - With sass, we can use nested selectors.
  - For example,
    . nav {
      .li {
        ...

        &:first-child {
        }
      }
    }
  - When using pseudo childs & pseudo elements, we need to repeat the path by using "&". It writes the path up until the current point.
  - The complied css code changes it back to normal, but we don't need to do all of that.
  - There is no limits for the nesting.
  - We can use everything for variables; for example, $width-btn: 90px;
  - We can use built in sass functions for many things; for example, the background-color: darken(color, percentage), or lighten(color, percent).

  First Steps w/ Sass: Mixins, Extends, and Functions
  - By creating a mix-in, we can use it anywhere, similar to variables or functions.
  - Ex: @mixin hidden { ... } and to use it: @include hidden;
  - Also, we can pass in arguments while using mixins. For example, if we create a mixin for properties that are used multiple times, we can include an parameter that will change the color based on the argument.
  - Ex: @mixin styl($color)
  - We can also use functions in Sass. These are the same thing as javascript.
  - Ex: @function name(arguments...) { @return...}
  - We can also use extends. They function, in part, as the opposite of mixins.
  - Simply use the % followed by a placeholder name. What will happen is that anywhere we extend the place holder, in the final code, the class that extends it will also be replaced with it.
  - Ex: 
    %btn-placeholder {
      ......
    }
    .btn-main {
      @extend %btn-placeholder;
    }
  - The final code would make both of these .btn-main.
  - Only use extends for things that are inherintly related. Otherwise, use mixins.



  A brief introduction into the command line
  - ls: to see the content of the folder.
  - cd nameOfFolder: moves to the folder
  - cd .. : moves back in the folder strucutre
  - clear: clears it
  - mkdir js: creates a new directory / folder
  - edit fileName.html fileName.js (etc.)
  - copy fileName .. (copies the file into the folder above).
  - move fileName .. (moves the file into the folder above).
  - del fileName (removes the entire file, no recycle, it is gone)
  - we can stack different files.
  -devDependices are just for dev to run, while dependencies more important.
  - --save-dev is for devD, while --save is for dep
  - By using npm install (the program looks at the packagae.json files w/ the dependcies & create the node_moduels from there, that is why we can always delete them)
  - -g: global


  ___________________________________________

  SECTION 5: Natours Project Part 2

  Converting CSS to Sass
  - Remeber, the "&" copies the path up to the point. For example, &__text (would be header__text)
  - All we will do is seperate the code into 7 different scss files. From there, we will use our main.scss file and import all the other files.
  - Ex: @import "abstracts/function";

  
  Reviewing Response Design Principles & Layout Types
  - max-width is better for fluid layouts.
  - Use percentages to adapt to the viewport.
  - Use % for images dimensions.
  - Use rem.
  - Use media queries.  


  Building a Custom Float Grid
  - :not() psedudo class taking in an argument. For example, &:not(:last-child) {} will apply the styles to everything but the last child.
  - calc() css function we can mix units to do mathematical operations.
  - In sass when using variables inside of a calc function, we have to wrap it inside of a hash and braces.
  Ex: width: calc((100% - #{$gutter-horizontal}) / 2);
  - When using floats, the width cloapses to 0. To avoid this, use the clearfix hack.
  - We can use the attribute selector by using the bracket notation.
  Ex:  [class^="col-"] {
  }
  - By using this notation, we can select all the elements that start with "col-"
  - ^: starts with col-
  - $: ends with col-
  - #: is includied in the class.



*/
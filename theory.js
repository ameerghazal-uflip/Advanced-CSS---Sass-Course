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

   <!-- <section class="grid-test">
      <div class="row">
        <div class="col-1-of-2">Col 1 of 2</div>
        <div class="col-1-of-2">Col 1 of 2</div>
      </div>

      <div class="row">
        <div class="col-1-of-3">Col 1 of 3</div>
        <div class="col-1-of-3">Col 1 of 3</div>
        <div class="col-1-of-3">Col 1 of 3</div>
      </div>

      <div class="row">
        <div class="col-1-of-3">Col 1 of 3</div>
        <div class="col-2-of-3">Col 2 of 3</div>
      </div>

      <div class="row">
        <div class="col-1-of-4">Col 1 of 4</div>
        <div class="col-1-of-4">Col 1 of 4</div>
        <div class="col-1-of-4">Col 1 of 4</div>
        <div class="col-1-of-4">Col 1 of 4</div>
      </div>

      <div class="row">
        <div class="col-1-of-4">Col 1 of 4</div>
        <div class="col-1-of-4">Col 1 of 4</div>
        <div class="col-2-of-4">Col 2 of 4</div>
      </div>

      <div class="row">
        <div class="col-1-of-4">Col 1 of 4</div>
        <div class="col-3-of-4">Col 3 of 4</div>
      </div>
    </section> -->


  Building an About Section (Part 1-3)
  - by using -webkit-background-clip: text, we make it so the background only occupies the text area.
  - From there, we can change the color to transparent to make the gradient apply.
  - This will make the text be the color of the gradient. 
  ex: -webkit-background-clip: text;
      color: transparent;
  - transform: skew() takes in degrees
  ex:  transform: skewY(2deg) skewX(15deg) scale(1.1);
  ex: display: inline-block;
    -webkit-background-clip: text;
    background-image: linear-gradient(
      to right,
      $color-primary-light,
      $color-primary-dark
    );
    color: transparent;

  - Utlility classes have one simple goal to center text.
  - Emmet extension is very good 
  - .composition>img.photo.photo2 = <div comp 
    w/ img with 2 classes trapped inside.
    - If we want a border with space inside, use an outline. The outline-offsest: .. property allows us to add that space.
    Ex: outline: 1.5rem solid $color-primary;
        outline-offset: 2rem;

    - <i></i> can be used for icons.

    Building the Features Section
    - transform: skewY(-7deg); will skew the entire div. This is good for cool shapes.
    - & > * {} will select all of the direct children. 
    

    Building a Tours Section (1-3)
    - We can define perspective in css.
    - We can do this by defining it on the parent element. Use a very large number and wrap the remainng conents into a div.
    ex:
    .card {
      perspective: 150rem;
      -moz-perspective: 150rem;

      &__side {
        background-color: orange;
        height: 50rem;
        transition: all 0.8s;
      }

      &:hover &__side {
        transform: rotateY(180deg);
      }
    }
    - backface-visibilty: hidden. Hides the back part of an element.
    - Remember, for linear gradients, it is image. (background-image)
    - We can use the background-image on a div, which can be better than using an image.
    - background-blend-mode: screen, ... (& more) can be used to blend a gradient over a background url image.
    - overflow: hidden; hides any overflowing where a child may overflow a parent.
    - box-decoration-break: clone; Adds the correct spacing with line managment. This one is verid.
    - &nsbp; is used for representing empty spaces.

    Building the Stories Section (1-3)
    - <figure></figure> is good for an image with a caption. ex: q/a section
    -  With the shape outside, we can deterimine where the content goes outside of the circle. From there, to actually make it into a cirle, use the clip-path: cirle() property with the same numbers.
    Ex: -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    - backface-visibility: hidden; is used for animation glithces.
    - filter: ...; can filter anything. I used this alot when editing the opacity. We can add blurs, brigtness, change things, etc.
    - ex: filter: blur(3px) brightness(80%);
    - <video></video> is a new html 5 element for creating a video in the background.
    - <source> is to specify the video attributes.
    Ex:
    <video class="bg-video__content">
            <source src="img/video.mp4" type="video/mp4" autoplay muted loop />
            <source
              src="img/video.webm"
              type="video/webm"
              autoplay
              muted
              loop
            />
            Your browser is not supported!
          </video>

    -  object-fit: cover; allows element to keep their aspect ratio while fitting the screen. This is similar to background-size: cover, but for videos & html elements.
    - Remember, overflow: hidden; is great for these types of things.


    Building the Booking Section (1-3: Form)
    -background-size: ..%, we can use percentages also.
    - We can add more values to the lienar gradients to make them cooler. For example, the percentage to see how it takes up the box.
    Ex: background-image: linear-gradient(
      105deg,
      rgba($color-white, 0.9) 0%,
      rbga($color-white, 0.9) 50%,
      transparent 50%
    ),
    url(../img/nat-10.jpg);
    - Input elements do not automatically inherit the font-family. So, we can use the inherit keyword for it. & same with colors/
    - :focus pseudo class if for people who tab alot to get across the screen.
    - ::-webkit-input-placeholder is a pseudo element that can be used to style input placeholders. 
    - We can also style invalid classes. For example, an email box using a form which checks if the input has a valid email address. 
    -Ex: :focus:invalid, use this pseduo class for such.
    *- General sibling selector: ~
    *- Adjacent sibling selector: + (sibling right after)
    - The input needs to be before the label when using the sibling selector
    - :placeholder-shown psuedo class is if the placeholder is used.
    ex: 
  &__input:placeholder-shown + &__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
    - We can create small radio buttons and build our own buttons with css.
    ex: 
    <input
      type="radio"
      class="form__radio-input"
      id="large"
      name="size"
      />
      <label for="large" class="form__radio-label"
      >Large tour group</label>
    - For more than one of these, we apply the same name attribute to both to identify the switch.
    - For creating "myown" button, connect the input and the label and from there, create an empty span element inside the label, style the span element and position is properly. Use the after pseudo element (*specify content & display)
    - :checked pseduo class will check if an input box has been checked. From there, if th checked class is on, sibling select the label and grab the direct button child with the after psuedo element.
    Ex: &__radio-input:checked ~ &__radio-label &__radio-button::after {
    opacity: 1;
  }
    - When using utility classses, use the important keyword.
    

  Building a Navigation (1-3)
  - position: fixed; is for sticky.
  - radial-gradient() ... will take in values and start in the middle and expand outwards.
  - For example,  background-image: radial-gradient(
      $color-primary-light,
      $color-primary-dark
    ); will be a circle & inside will be light & outside will be dark.
  - We can add a transition by using the backgorund image gradients again, setting the background size to double (200%) and, when hovered, change the position to 100%
  - We can secerlty hide something by setting the opacity to 0 and the width to 0.
  - Using the :checked pseduo class & the silbling selector, scale up the background & display the words.
  ex: 
   &__checkbox:checked ~ &__background {
    transform: scale(80);
  }

  &__checkbox:checked ~ &__nav {
    opacity: 1;
    width: 100%;
  } 
  - Ex: transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  - cubic-beizer() can be used for custom ease in-out-etc. animations.
  - We can use the checkbox hack for the x animiation.
  - Simply make the middle bar transparent.
  -transform-orign: ..., we can shift the origin of the transformation. Typically, rotations are from the center, but if we want, we could simply rotate from the left or the right.


  Building a Pure CSS Popup
  - We can use the column properties for seperating columns.
  Ex: 
     column-count: 2;
    column-gap: 4rem;
    column-rule: 1px solid $color-grey-light-2;
  - The css will balance the height of the columns and the column rule is like a border-right.
  - hyphens: auto; will automatically add hypens to texts if the text begins to break (or is resized).
- the hypen property only works by setting the lanugage on the html tag (e.g. <html lang="en"></html>)
  - We should not add webkit prefixes ourselves. It is better to find an online tool for them.
  - For anchors and targets, what we can do is add an id to something, and follow it with a #id on the button (e.g., #section-tours). When the button is clicked, we will go to that section of the page. 
  - :target psudo class is based on the hash at the top. So, if we hit the button that leads us to the hash (e.g., #popup) we can do .popup:target {} as it becomes the target. The target becomes the entire element.
  - We can implement a close button which will go to a different href. In doing this, the target class no longer applies to the pop up so it goes back to its default styles and is hidden.
  - 
  &:target {
    opacity: 1;
    visibility: visible;
  }

  &:target &__content {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  - these are for hiding, etc.


  _____________________________________________________________________________


  SECTION 6 NATOURS ADVANCED RESPONSIVE DESIGN
  
  Mobile First vs. Desktop First Breakpoints
  - min-width: for mobile (is the current query >= 600px)
  - max-width: for desktop (maxiumum width at which the media query still applies). It asks the questin, is (width <= 600px) or diff.
  - Situations depend, but desktop starting is typically better due to over simplifcation. 
  - Regardless, keep both in mind.
  - Selecting breakpoints
    - bad: choosing different phone screen sizes.
    - good: group the most used device widths (laptop, tablets, etc)
    - perfect: Ignore all devices and just add breakpoints when the device breaks. This can be hard, but it can be very helpful.
  - Check the notes for the chart on breakpoints.
  - For the largest screen, use min-width

  Using the Power of Sass Mixins to write Media Queries
  - The best way to write media queries in sass is by creating a mixin, defining the media querey breakpoint width, and inside it, simply use the @content call. 
  - @content: will accept the value from the included tag.
  - When wanting to use the mixin, media query, simply use the @include mixinName and define the content.
  - This approch is still not the best approch.
  - @if: is basically an if statment
  - em's are the best options for media queries (1em = 16px)
  - The best option for media queries is to create a large mixin with an @if statment & in the media query, use the @content. 
  - Using it like this makes it much easier to use elsewhere.

  Ex: 
    @mixin respond($breakpoint) {
      @if $breakpoint == phone {
        @media (max-width: 37.5em) {
          @content;
        }
      }

      @if $breakpoint == tab-port {
        @media (max-width: 56.25em) {
          @content;
        }
      }

      @if $breakpoint == tab-land {
        @media (max-width: 75em) {
          @content;
        }
      }

      @if $breakpoint == big-desktop {
        @media (min-width: 112.5em) {
          @content;
        }
      }
    }

    ex:   // @include respond(phone) {
  //   font-size: 50%;
  // }

  @include respond(tab-port) {
    font-size: 50%; // 1rem = 8px, 8/16 = 50%
  }

  @include respond(tab-land) {
    font-size: 56.25%; // 1rem = 8px, 8/16 = 50%
  }

  @include respond(big-desktop) {
    font-size: 80%; //1rem = 12px, 12/16
  }
  - The order of the queries matter, so be careful. The last one applies. For example, if both are under 900px, the most recent one will apply. 
  - We can combat this by using min-width and max-width, or just by watching the order. 
  - For mobile first, it is the other way around. 



  Writing Media Queries: Base, Typography, and Layout, etc.
  - Order: Base + Typograhpy > general layout + grid > page layout > components
  - Sizzy is a great way to check different sizes. 
  
  Responsive Images
  - Serve the right image to the right screen size. 
  - Responsive images are very advanced.
  - Resolution switching: decrease image resoultion on a smaller screen.
  - Density switching: half the image res on a @1x screen (high res screen use @2x screens)
  - Art-direction: different image on smaller screen.
  
  Responsive Images in HTML (Art Directiom, Density Switching)
  - CSS is background img, while html is a <img> tag.
  - Density Switching: swtich the src attribute on <img> tags to srcset and give it 2 different images. 
  - What this will do is the browser will select whichever one is best in the situation. 
  - Ex: <img
          srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" />
  - Seperate both by a comma and specify 1x or 2x.
  - <picture></picture>, is used for Art Direction which needs 0 or more <source srcset="" media=""> and an <img srcsec="">
  - Art Direction: it is used for switching images based on the viewporth width.
  - With these, we can define media queries
  Ex:

  <picture class="footer__logo">
          <source
            srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x"
            media="(max-width: 37.5em)"
          />
          <img
            srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x"
            alt="Full logo"
          />
        </picture>


  Responsive Images in HTML (Resolution Switching)
  - We can simulute different pixel ratios in the dev tools.
  - It is a good practice to still include the src attribute on the images regardless of which approach we take because some browsers may not support srcset. 
  - Resolution Switching: define the srcset="img1 width, 1mglarge width" with the image path and the width; then, define the sizes="(max-width:...) vw" with the media query width followed by the viewport width, alt, class, and src.
  Ex: 
  <img
    srcset="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
    sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
    alt="Photo 1"
    class="composition__photo composition__photo--p1"
    src="img/nat-1-large.jpg"
  />

  - Doing so accounts for both density switching and res. switching.
  

  Responsive Images in CSS
  - Simply write media queries. 
  - For example, 
  Ex:   
  @media (min-resolution: 192dpi) and (min-width: 600px), (min-width: 2000px) {
    background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, 0.8),
        rgba($color-primary-dark, 0.8)
      ),
      url(../img/hero.jpg);
  }
  - We can extend media queires using the 'and' keyword.
  - We can use a comma "," to imply an "or" statmenet through media queries. 
  - -webkit-min-device-pixel-ratio: 2; is the same as the 192 above, but the version for safari
  

  Testing for Browser Support with @supports
  - Check CANIUSE.com before using a modern css property in production.
  - @supports () {} will check if what is given is supported, and if so, it will apply the styles. This is event degredation 
  Ex:
    @supports (-webkit-backdrop-filter: blur(10px)) or
    (backdrop-filter: blur(10px)) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba($color-black, 0.3);
  }
  - Some things need -webkit- prefixes, so make to check these.
  - backdrop-filter: blur(10px) will blur the background rather than having to change the background color. 
  - @supports queries are very important for testing breaks. Not all browsers work the same, so they are very important.

  Setting up a Simple Build Process with NPM Scripts
  - npm i concat: installs the concat installment which allows us to concatenat css files & more.
  - npm i prefix is for the prefixes. 
  - Here are some good tasks and save devs for the future
  "scripts": {
    "watch:sass": "node-sass sass/main.scss css/style.css -w",
    "devserver": "live-server",
    "start": "npm-run-all --parallel devserver watch:sass",
    "compile:sass": "node-sass sass/main.scss css/style.comp.css",
    "concat:css": "concat -o css/style.concat.css css/icon-font.css css/style.comp.css",
    "prefix:css": "postcss --use autoprefixer -b 'last 10 versions' css/style.concat.css -o css/style.prefix.css",
    "compress:css": "node-sass css/style.prefix.css css/style.css --output-style compressed",
    "build:css": "npm-run-all compile:sass concat:css prefix:css compress:css"
  },
  "author": "Ameer G",
  "license": "ISC",
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "concat": "^1.0.3",
    "node-sass": "^9.0.0",
    "npm-run-all": "^4.1.5",
    "postcss-cli": "^10.1.0"
  }
  
  Natours Final Considerations
  - ::selection {} psuedo class deals with highlights on a page.
  - For example, ::selection {color:red, background-color: green} would make the text red and the highlight green opposed to the normal.
  - Also, for media queries, use the only screen tag so that they only apply to screens, not if the page is attempted to be printied. 
  - <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  - This html tag is very important because it tells the browser to open the page subject to the viewport width.
  - only screen and (hover: none) is a media query option which will change the styles if the device does not support hovers. For example, an ipad without a mouse. 
  
  _______________________________________________________________________________________

  SECTION 7: TRILLO PROJECT

  - Main axis is the horizonatal axis, and cross axis is the vertical axis. We can flip these.
  - Container Properties:
    - flex-direction: row, column, row-reverse, etc.
    - flex-wrap: (defines if the flex items should wrap into a new line if no space)
    - justify-content: alignment
    - align-items: alignment (vertical, if not switched)
    - align-content: multiple rows or containers.
  - Item Properties:
    - align-self: defines how one specific item should position
    - order: order of the items
    - flex-grow, flex-shrink, and flex-basis = flex: ...
    

    A Basic Intro to Flexbox: The Flex Container
    - row-reverse anc column-reverse: invert the main axis.
    - justify-content: alignment for the main axis.
    - space-evenly evenly spaces everything, space-around makes the left and right the same space and the middle double.
    - align-items: alignment across the cross axis.
    - baseline aligns the items text to the center, not the containers.
    - When changing the direction to column, the main-axis is changed, so justify content & align-items are flipped. Just like we have been doing.
    
    A Basic Intro to Flexbox: Flex Items
    - align-self: overrides the align property for one specific container. This is very useful. (e.g. align-self: flex-end)
    - Flex-box orders all the elements by their order number, so by making the order negative, it would be the first one. (e.g. order: -1, or order: 1 for the end)
    - flex-grow: 1 occupies the entire space that they can. It gives items the largest space to grow. By setting flex-grow: 2 or something else on specific containers will make it take double the size. flex: 1 (or any #) is the short hand for just flex-grow
    - flex-basis: we can set the width of a flex-item. This is better than auto setting the width on a flex-item, for example (flex-basis: 20%).
    - flex-shrink: controls how an element can shrink. The default setting is 1, which allows the element to shrink. By changing flex-shrink: 0, we make it so the item would not shrink (short hand: flex: 0 1 300px)
    - flex: flex-grow flex-shrink flex-basis; is the short hand for all of them.

    A Basic Intro to Flexbox: Adding More Flex Items
    - flex-wrap: wrap; will create a newline for items that no longer fit the container size. 
    - This is good to avoid overflowing. For example, setting a width on a container and then using flex-wrap. 
    - The default property of flex-wrap is none, so it needs to be changed to wrap to work properly.
    - align-content: aligns entire rows across the cross axis. For example, align-content: flex-start; moves all the rows to the start, space-between, strech, center, etc.
    
    
    Project Overview
    - npm install: will install all of the packages in the json folder.

    Defining Project Settings and Custom Properties
    - CSS variables are applicable. We do not need to use a preprocessor for sass.
    - They can be manuplated in JS and are inhertient, can cascade, and can be edited in the devtools.
    - :root {} is the global parent element. All the variables put inside of it will apply to the entire page. The :root pseudo class is like the html class with a higher specifiity.
    - For personal properties, use --name: ...
    For example:
        :root {
      --color-primary: #eb2f64;
      --color-primary-light: #ff3366;
      --color-primary-dark: #ba265d;
    }
    - Use the var() function to use the colors.
    var(--color-primary-light),
    var(--color-primary-dark);


    Building the Overall Layout
    - By using max-width: ... we specify the width we want if possible. If it is not possible, the browser will simply utilze 100% of the avaliable width.
    
    Building the Header (1-3)
    - Icon fonts fail more often than normal. Svg's are better to use.
    - <svg></svg> stands for scable vector graphics.
    - sprite file is a file that contins all the svgs.
    -  <svg class="search__icon">
            <use xlink:href="img/sprite.svg#icon-magnifying-glass"></use>
          </svg>
    - This is the best way for using svg's. Using the xlink is only applicable for web servers.
    - We can style SVG's by using the width and height.
    - > * selects all of the direct children.
    - fill: ... is the property to change the color of svg's.
    - fill: currentColor; and currentColor is the color of the parent element, so it basically inherits it. This is a very useful feature with, for example, hovers and links. 
    - transform-origin: bottom; this is a property used to specify where the transformation starts from. 
    - We can specify different types of transitions; for different types of items. For example, transition: transform 0.2s, width 0.4s 0.2s;


    Building the Navigation (1-2)
    - more scss

    Building the Hotel Overview (1-2)
    - margin-right:auto; is a good trick when we need extra space while using flex-box. (can be used with margin-left:auto aswell)
    - svg's are treated like inline elements, so sometimes they have an automatic spacing.
    -   border-bottom: 1px solid currentColor;
    - Again, current color is a very helpful property.
    - @keyframes are frames that we can create.
    - animation: pulsate 1s infinite; the infinite state will make an animation infinite. 


    Building the Description Section (1-2)
    - :last-of-type is a pseudo class of the last type (e.g. p element)
    - For older browsers, use the background-image property to use an svg.
    - For newer browsers, use masks which defines an area where we can look through the element
    - Ex: mask-image: url(../img/chevron-thin-right.svg);
    mask-size: cover;
    - box-sizing: content-box; will change the boxsizing back to the default, which, if a border is added, it is on top of the width and height, rather than included.

    Building the User Reviews Section
    - For css entites, similar to html enties, we use the iso numbers. 
    - Ex: "\201C"
    - z-index only works by setting the position. 
    - ex:  z-index: 2;
    position: relative;
    - overflow: hidden; is very good for abs. positioning and hiding certain elements.

    Media Queries (1-2)
    - Simply just put the media queries inside of the css, for example,
     @media only screen and (max-width: $bp-smallest) {
    order: 1;
    flex: 0 0 100%;
    background-color: var(--color-grey-light-2);
  }
    - Don't forget the feature supports query so certain things in different browsers.
    - For example,
      @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      background-color: var(--color-primary);
      -webkit-mask-image: url(../img/chevron-thin-right.svg);
      -webkit-mask-size: cover;
      mask-image: url(../img/chevron-thin-right.svg);
      mask-size: cover;
      background-image: none;
    }
    -

    ____________________________________________________________________________

    SECTION 8: QUICK INTRO TO CSS GRID LAYOUTS
    - grid-lines are automatically numbered for the number of columns and rows + 1
    - Items are seperated by a gutter.
    - grid-cell item in a cell
    - Many many grid properties.
    - $*number is a handy trick with emment notatation
    - grid-template-rows: define the number of rows.
    - grid-template-columns: define the number of columns. 
    - Typically, we only need to define the columns 
    Use the layout devtools for grid.
    - Column lines and row lines get automatically numbered. For exmaple, with 3 columns, the grid lines would be 1-4
    - grid-row-gap: row gutter (..px)
    - grid-column-gap: column gutter
    - grid-gap: both the row and column gutter

    Getting Familiar with the fr Unit
    - fr: fractional unit,
    - repeat(#rows/columns, size); for example, repeat(5, 1fr) would be 5 rows(columns)
    - We can combine the repeat() function with other normal tracks. For example, repeat(5, 150px) 300px
    - fr's occupy the space they can occupy. 
    - 1fr is a fraction of the avaliable space. 
    - We can treat fr's - in a way - like percentages. For example, grid-template-columns: 1fr 2fr 1fr.
    - Fr's are very good for responsive layouts.
    - We can also use percentages for sizing columns or rows, but they do not take the gap into account. 

    Positioning Grid Items
    - grid-cell is between the row line and column lines
    Ex: Assume there is a 3x3 matrix (thus 1-4 column lines and 1-4 row lines)
    - grid-row-start: row-line 2 
    - grid-row-end: row-line 3 
    - Using these properties would put it in the middle row of the 3x3 column
    - grid-column-start: 2
    - grid-column-end: 3
    - it would put it in the middle of the matrix.
    - Short hand:
      - grid-row: 2 / 3; (display the start and the end in one statment.)
      - grid-column: 2 / 3;
    - Using the line dev tools is great for grids. 
    - Even more short hand:
      - grid-area: row-start / column-start / row-end / column-end
      ex: grid-area: 2 / 2 / 3 / 3
      - this can get confusing. 
      
      Spanning Grid Items
      - We can span over more lines. 
      - For example, grid-column: 2 / 4;
      - We can have mutliple items in the same cell. Items can be hidden.
      - To make something that is hidden move on top, give it a higher z-index.
      - If items are explcity placed, we cannot just override them without explcitiy placing them
      - We can also use the 'span' keyword.
      - For example, grid-column: 2 / span 2 will start from 2 and span 2 columns. 
      - -1 represents the last column. We can do this instead of hardcoding the end.
      Ex: grid-row: 1 / -1 would span the entire row. 

      Naming Grid Lines
      - All we have to do is to use the sqere brackets.
      - For example, grid-template-columns: [header-start] 1fr [header-end box-start] 300px
      - We can give grid-lines more than one name. [header-end box-start] 100px
      - Doing so makes it plausible to use them more than once. 
      - Also, by naming grid-lines, it making the positioning easier.  
      - Using it works the exact same as the number grid-lines, for example, 
      gird-row: box-start / box-end.
      - For repeat functions, we can also name them. Doing so will give each grid line its own specilty.
      Ex: For example, repeat(3,[col-start] 1fr [col-end]). So, from 1 / 2 it would be [col-start 1] / [col-end 1 col-start 2] and more. 
        - grid-column: col-start 1 / grid-end
      

      Naming Grid Areas
      - grid-template-areas: "head head head head
                              box box box side
                              main main main side
                              foot foot foot foot";
      - Using grid-template-areas is a way to use a template string. We basically are naming the cells. Doing this makes it very easy to place items. 
      - To place the item in the template area, use grid-area: ... followed by the area name from the template areas. 
      Ex: grid-area: box; would place the element over grid-row 2 / 3 and grid-column: 1 / 4
      - When using the template areas, we need to name all the cells. 
      - To keep a cell empty, simply put a period (.) in the space of the name.
      Ex: grid-template-areas: "head . side ."
      - Very good and straightforward for smaller layouts. 

      Implict Grids vs. Explicit Grids
      - Implicit Grids: defined in order to fit the content that does not fit in the explicit grid.
        - 
        -
      - Explicit Grids: explicity defined part of the grid 
        - This is the part of the grid that we specifiy add and define ourselves.
        - For example, if we define the template rows, or columns. 
        -
        -
      - We can style implict grids by using the grid-auto properites. By using these we can control what the auto rows/columns will look like even if they are not on the page, hence implict. 
      - grid-auto-row: height, grid-auto-columns: height/width. What th
      Ex: grid-auto-row: 50px;
      - Also, implict grids are typically rows, which is set by the grid-auto-flow property. We can change this property in order to make the implict change be columns, reverse columns, etc.
      Ex: grid-auto-flow: column;
      - Using these auto added rows and columns is very good for styling without knowing what will be on the page.
    
      Aligning Grid Items
      - align-items: sets things across the column (vertical axis) this is also the same from flex-box. For example, align-items: center; will align it in the track. This property is defaulted to strech, but there are end, start, center, strech, etc. 
      - justify-items: aligns items across the row axis (horizontally) we align the items within the entire area. This is not in flexbox, in way it behave the same, though. There are other propertys, aswell
      - align-self: ..., justify-self: ..., also work the same for specific items, which will align the specific item to its own position. This is similar to flexbox.
      - In flex-box, we only have align-self because it is a 1-d layout. 
      
      
      Aligning Grid Tracks
      - justify-content: ... (horizontally) will align the entire grid-container. For example, if we have body container with and an inner div all in flex-box, if we use this property we can, for example, center that entire div grid in the body.
      - This property works the same from flex-box, with space-between, center, space-around, start, end etc.
      - align-content: ..., the same thing as above, just vertically. it has the exact same properties and everything.
      - We can center it completely, both vertically and horizontally, displaying the 2d layout. 
      **- items relates to inside the grid, self relates to cell, and content relates to the entire grid.
      **- align relates vertically, justify is horizontally.
      - to get rid of empty cells from the auto placement algo "holes", use the 'dense' keyword on the grid-auto-flow: row dense; property. This will ensure that all the cells are used without any holes.
      Ex: grid-auto-flow: row dense;
      

      Using min-content, max-content, and the minmax() function
      - Instead of using a real unit for the template-rows(columns), we can use the max-content keyword. It will take all the only about of space it needs for the max-content.
      - max-content keyword attempts to avoid line-breaks.
      Ex: grid-template-columns: max-content 1fr 1fr;
      - Also, we have the min-content keyword. It will use the minimum amount of space needed to fit the content. This one uses line-breaks as it tries to cram everything in. Just as wide as nessicary.
      Ex: grid-template-rows: repeat(2, min-content)
      - Having max or min are not entierly different, but they can be. 
      - To avoid overflowing, use the minmax() function. 
      - minmax() is where we pass 2 values in "at least and at most" values.
      - We are allowing css grid to size between a range, and from there, css grid will do the job.
      - Ex: grid-template-rows: repeat(2, minmax(150px, min-content));
      - We allow the grid to accomadate for the spacing at a minium of 150px.
      - For exmaple, if we want have a grid-template-column and we want one of the columns to be between 200px and 300px regardless of the size, use the minmax function
      Ex: grid-template-rows: minmax(200px, 1fr) what this will do is stay at most 1fr, and if smaller, the lowest it will go is 200px.
      - At the limits about fr's, they will resize to fill what is nessicary rather than overflowing (only at the limit).


      Responsive Layouts with auto-fit and auto-fill
      - Using the auto-fill keyword will automatically create the amount of tracks (columns or rows) that we desire without us having to specifiy. This is good for reponsive layouts.
      - Ex: grid-template-columns: repeat(auto-fill, 100px), in this example, let's say the width is 1000px and we only have 8 items in the container. The autofill function will still create 10 columns at 100px each to maxize the space for the width. Then, it will put our items in their respective grids. 
      - Usually, columns are not defined with pixels, so it should not be too much of an issue. Just need to pay-attention
      - Using the auto-fit keyword will do the exact same thing as the auto-fill keyword; however, it will collapse the remaing tracks (such as 2 in the example) and give them a width of 0. They are not gone, though, they are just collapsed and have a width of 0.
      - Ex: grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))
      - What auto-fit does after being collapsed with no more space, it will cut a column (row) and create a row (column) in order to maintain the adaptive layout.
      - This trick with the minmax is very very helpful for adapting to the screen size without using media queries. 
      - Ex: If we have 8 columns and collapse it to mobile, we would automaticallty have 1 column with 8 rows. This is just an example. 


      ______________________________________________________________________

      SECTION 9 NEXTER PROJECT MASTER CSS GRID LAYOUT

      Project Overview
      - in the package.json() file for the deserver, we can specify what browser to open with by user (--browser=[nameofbrowser])
      

      Building the Overall Layout (1-2)
      - auto or min-content means that there will be enough space to fit the content in the grid display.
      - vh or vw are some of the best units for adapting. 
      -   grid-template-columns: repeat(8, minmax(min-content, 14rem));
      - This says that we want 8 columns with a minmium width of min-content and a max of 14rem
      Ex:  grid-template-columns:
    [sidebir-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr)
    [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
    [center-end] minmax(6rem, 1fr)
    [full-end];
      - By creating names, it is very very helpful for completing the layouts.
      - From there, we got to each section and specify the grid-column: full-start / col-start 6; for example.



      */

# Frontend Mentor - QR code component solution

  

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 
  

## Table of contents

  

- [Overview](#overview)

- [Screenshot](#screenshot)

- [Links](#links)

- [My Solution](#my-solution)

- [Steps](#steps)

- [What I learned](#what-i-learned)

- [Author](#author)
  
  

## Overview

  

### Screenshot

  
![](./screenshots/desktop.jpeg)
![](./screenshots/mobile.jpeg)

 

    

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

  

### Links

  

- Solution URL: [Solution](https://github.com/FrontEndMentor-JoseRomo98/QR-Code-Component)

- Live Site URL: [LivePage](https://frontendmentor-joseromo98.github.io/QR-Code-Component)

  

## My Solution

  

### Built with
- Semantic HTML5 markup

- CSS custom classes

- CSS basic properties

### Steps
First I identified the three main parts of the design and divided it into four blocks:
- General Container.
- Content Container
- Image container
- Text container

Then I translated these blocks into HTML code:

```html

<main > <!--General Container-->
	<div> <!--Content Container-->
		<div> <!--QR Image Container -->
			<img  src="images/image-qr-code.png"  alt="QR Image">
		</div>
		<div> <!--Text Container-->
		<h2>Improve your front-end skills by building projects</h2>
			<p>
				Scan the QR code to visit Frontend Mentor and take yourcoding skills to the next level
			</p>
		</div>
	</div>
</main>
```
The next step was to create CSS variables to avoid defining properties that could potentially repeat across multiple classes such as colors and fonts:
```css
:root {
	--white:  hsl(0, 0%, 100%);
	--lihtGray:  hsl(212, 45%, 89%);
	--grayishBlue:  hsl(220, 15%, 55%);
	--darkBlue:  hsl(218, 44%, 22%); 
	--mainFont:  'Outfit', sans-serif;
}
```
Then I defined the classes to my HTML structure according to where they would be needed.

```html
<div class="qr">
	<div class="qr__image__container"><img src="images/image-qr-code.png" alt="QR Image" /></div>
	<div class="main-font text-content">
		<h2 class="title">Improve your front-end skills by building projects</h2>
		<p class="paragraph">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
	</div>
</div>
```
Finally, I added the CSS classes previously defined in my HTML structure and added the properties until the desired design was achieved.

``` css
body {
	font-size:  1.4rem;
	background-color:  var(--lihtGray);
}

img {
	width:  100%;
}

.container {
	max-width:  45rem;
	margin:  0  auto;
}

.qr {
	align-items:  center;
	background-color:  var(--white);
	border-radius:  2rem;
	padding:  2rem;
	margin:  15rem  2rem;
}

.qr__image__container img {
	border-radius:  1.6rem;
}

.text-content {
	margin:  1.5rem;
	text-align:  center;
}

.title {
	color:  var(--darkBlue);
	font-family:  var(--mainFont);
}

.paragraph {
	font-family:  var(--mainFont);
	color:  var(--grayishBlue);
	text-align:  center;
}
```


### What I learned

  

With this exercise I learned how to structure the elements of my html document to make the application of the stylesheet easier.

  

To see how you can add code snippets, see below:



## Author

- Frontend Mentor - [@JoseRomo98](https://www.frontendmentor.io/profile/JoseRomo98)
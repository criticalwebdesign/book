# Critical Web Design Resources
<!-- https://bit.ly/cwd-resources -->


A collection of related content, references, and inspiration to accompany the book.




## 0-Introduction







## 1-Networks




### Design Manifestos

A list of manifestos by / for artists, designers, and engineers:

- https://molleindustria.org/files/BIG-DATA.html 
- https://designmanifestos.org 
- https://designmanifestos.org/first-things-first-a-manifesto-2020-edition/ 
- https://antisoftware.club/manifesto.html 
- https://criticalengineering.org 







## 2-View Source








## 3-Critical Design








## 4-On the Grid








## 5-Usability & Forms








## 6-Off the Grid








## 7-Ethical Design





### Accessibility Testing Tools

A list of accessibility testing tools that we found to be helpful and intuitive:

- WAVE https://wave.webaim.org/ 
- ANDI https://www.ssa.gov/accessibility/andi/ 
- LERA https://advancedbytez.com/lera/ 








## 8-Generative Design





### Generative Art & Design

See these sites and texts for more inspiring examples of generative design: 

- A browser extension that shows curated generative works when you open a new tab https://arttab.xyz/ 
- A selection of generative projects https://www.artblocks.io/ 
- Generative Design: Visualize, Program, and Create with JavaScript in p5.js, 2nd Edition (2018) https://generative-gestaltung.de
- Form+Code in Design, Art, and Architecture (2010) https://formandcode.com 
- Generative design tutorials and examples https://generativeartistry.com/ 
- Google Experiments https://experiments.withgoogle.com/ 


### Creative Coding Tools

- Two.js https://two.js.org (Jonathan "Jono" Brandel) is a two-dimensional drawing library for the web that also lets you output graphics to the page using SVG, HTML Canvas, and WebGL. See his [codepen](https://codepen.io/jonobr1/) for [inspiring examples](https://codepen.io/jonobr1/pen/MWaeWRr) [created using two.js](https://codepen.io/jonobr1/pen/qBONdKX)
- Three.js https://threejs.org (Ricardo Cabello) is a 3D graphics library for the web using JS and WebGL. This framework, and Cabello's (“mrdoob”) personal work, is rooted in the early generative visualizations of the DemoScene and Flash. See his [work](https://mrdoob.com/#/117/fire) at https://mrdoob.com


### Flash

Macromedia’s Flash was a software tool that combined an animation timeline, a highly intuitive vector drawing and tweening tool, and a script editor which allowed creators to attach scripts to keyframes, objects, or events. Flash files could be exported in SWF format and then embedded in HTML. Flash was widespread, inspiring international conferences, and artists, designers, game developers across the web. Adobe, who purchased Macromedia, has mostly discontinued Flash today due to performance, accessibility, and security issues on mobile devices. While publishing Flash projects online is no longer possible one can still find evidence of its impact on generative design:

- Flash Math Creativity (see photos http://levitated.net/bones/flashmath/photos.html) with interviews and sample code from generative artists and designers 
- Jared Tarbell https://www.artnome.com/news/2020/8/24/interview-with-generative-artist-jared-tarbell 
- Paul Prudence https://www.transphormetic.com/ 
- Manny Tan https://experiments.withgoogle.com/search?q=Manny%20Tan 
- The New York Times has recently made it possible to view all their interactive reporting built using Flash in their archives. See: Robert Kosara, “The New York Times Now Has a Web Flash Player,” (January 8, 2024) https://eagereyes.org/blog/2024/nytimes-web-flash-player.


### Electronic and Generative Literature

If you are interested in computational, electronic, or generative literature/poetry, the following organizations, journals, prize, and school offer much inspiration:

- The Electronic Literature Archives https://eliterature.org/electronic-literature-archives/
- The Electronic Literature Organization https://eliterature.org/
- The New Media Writing Prize https://newmediawritingprize.co.uk/
- The New River: A Journal of Digital Art & Literature https://thenewriver.us/
- The School for Poetic Computation https://sfpc.study/
- Taper https://taper.badquar.to/


### Generative Interfaces

Example generative art and design web interfaces

- The NSynth Sound Maker (2017) by Yotam Mann https://experiments.withgoogle.com/sound-maker
- Pixeldudesmaker by 0x72 https://0x72.itch.io/pixeldudesmaker
- itch.io is popular for publishing indie games, but also showcases an impressive collection of procedural generators https://itch.io/tools/tag-procedural 
- Pippen Barr https://pippinbarr.com/itisasifyouweredoingwork/





## 9-Data Tracking





### Javascript Prototype

Objects are commonly used to represent the properties and behaviors of entities in a programming model called **Object Oriented Programming (OOP)**. OOP languages use predefined classes and inheritance to derive behavior. For example, all objects of a car class will have wheels and headlights that turn on, which are inherited by its child classes that define more specific properties. 

Javascript uses a(n arguably simpler) **prototype** pattern to define objects. When you create a new variable in Javascript it creates a new copy of the object prototype, cloning all its functionality and data. Javascript's prototype shares many of the OOP's benefits. For example, Javascript objects use **encapsulation** to group and identify similar information inside a single container (like formats for a color), and standardizes access to their properties. 

Type an open and close curly brace in the DevTools Console to see the properties all objects receive from the prototype:

```js
{} 
// -> [[Prototype]]: Object
    constructor: ƒ Date()
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf: ƒ isPrototypeOf()
    ...
```

In the console, create a new object: 

```js
let color = {
    name: "red",
}
```

If you log the color value you can see the `name` property you creaded, as well as the constructor from the prototype:

```js
color
// -> {name: "red"}
    [[Prototype]]: Object
        constructor: ƒ Date()
        hasOwnProperty: ƒ hasOwnProperty()
        isPrototypeOf: ƒ isPrototypeOf()
        ...
```

If you type the constructor (the method in each object that creates itself) of any data type based on the object, like Date, you will again see the prototype functions listed below the functions (ƒ) specific to that object.

```js
new Date()
    // -> constructor: ƒ Date()
    getDate: ƒ getDate()
    getDay: ƒ getDay()
    getFullYear: ƒ getFullYear()
    ...
    [[Prototype]]: Object
        constructor: ƒ Date()
        ...
```


### Install Node

Here's a basic install process for Node.js. While you can download and run a [prebuilt installer](https://nodejs.org/en/download) we prefer using NVM (Node Version Manager) to let you manage and upgrade your installation later:

1. Install NVM with Homebrew (Mac only) or run the [Node NVM install scripts](https://nodejs.org/en/download/package-manager) (all platforms) one line at a time on the command line.

```bash
# installs NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

2. Use NVM to install Node

```bash
# download and install Node.js
nvm install 20
# verifies the right Node.js version is in the environment
node -v # should print `v20.11.1`
# verifies the right NPM version is in the environment
npm -v # should print `10.2.4`
```

3. Create a project directory and change to it: 

```bash
mkdir hello-node & cd hello-node
```

4. Create a file in this folder named `index.js` and paste the below code.

```js
let greeting = "Hello, from Node";
console.log(greeting);
```

5. In the Terminal, run the script with: 

```bash
node index.js
```




## 10-Design & Power








## 11-Distribution







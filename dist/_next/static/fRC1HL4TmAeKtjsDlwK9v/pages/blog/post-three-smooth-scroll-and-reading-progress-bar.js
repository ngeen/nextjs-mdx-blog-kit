(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{AwqF:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/post-three-smooth-scroll-and-reading-progress-bar",function(){var e=o("gzBg");return{page:e.default||e}}])},Bi3C:function(e,t,o){var a;a=function(e){return function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=o(1),r=(a=n)&&a.__esModule?a:{default:a};t.default=r.default},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},r=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),i=o(2),s=(a=i)&&a.__esModule?a:{default:a};var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.smoothScroll=o.smoothScroll.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"componentDidMount",value:function(){o(3).polyfill()}},{key:"smoothScroll",value:function(e){var t=this;e.preventDefault();var o=function(){return 0};void 0!==this.props.offset&&(o=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(t.props.offset)});var a=e.currentTarget.getAttribute("href").slice(1);window.scroll({top:document.getElementById(a).offsetTop-o(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(e)}},{key:"render",value:function(){var e=this.props,t=(e.offset,function(e,t){var o={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(o[a]=e[a]);return o}(e,["offset"]));return s.default.createElement("a",n({},t,{onClick:this.smoothScroll}))}}]),t}();t.default=l},function(t,o){t.exports=e},function(e,t,o){!function(){"use strict";var t=window,o=document;e.exports={polyfill:function(){if(!("scrollBehavior"in o.documentElement.style&&!0!==t.__forceSmoothScrollPolyfill__)){var e,a=t.HTMLElement||t.Element,n=468,r=(e=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(e)?1:0),i={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:a.prototype.scroll||l,scrollIntoView:a.prototype.scrollIntoView},s=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now;t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==h(arguments[0])?f.call(t,o.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):i.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(h(arguments[0])?i.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):f.call(t,o.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},a.prototype.scroll=a.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==h(arguments[0])){var e=arguments[0].left,t=arguments[0].top;f.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value couldn't be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},a.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==h(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},a.prototype.scrollIntoView=function(){if(!0!==h(arguments[0])){var e=function(e){var t;do{t=(e=e.parentNode)===o.body}while(!1===t&&!1===d(e));return t=null,e}(this),a=e.getBoundingClientRect(),n=this.getBoundingClientRect();e!==o.body?(f.call(this,e,e.scrollLeft+n.left-a.left,e.scrollTop+n.top-a.top),"fixed"!==t.getComputedStyle(e).position&&t.scrollBy({left:a.left,top:a.top,behavior:"smooth"})):t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(e,t){this.scrollLeft=e,this.scrollTop=t}function h(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+r<e.scrollHeight:"X"===t?e.clientWidth+r<e.scrollWidth:void 0}function u(e,o){var a=t.getComputedStyle(e,null)["overflow"+o];return"auto"===a||"scroll"===a}function d(e){var t=c(e,"Y")&&u(e,"Y"),o=c(e,"X")&&u(e,"X");return t||o}function p(e){var o,a,r,i,l=(s()-e.startTime)/n;i=l=l>1?1:l,o=.5*(1-Math.cos(Math.PI*i)),a=e.startX+(e.x-e.startX)*o,r=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,a,r),a===e.x&&r===e.y||t.requestAnimationFrame(p.bind(t,e))}function f(e,a,n){var r,h,c,u,d=s();e===o.body?(r=t,h=t.scrollX||t.pageXOffset,c=t.scrollY||t.pageYOffset,u=i.scroll):(r=e,h=e.scrollLeft,c=e.scrollTop,u=l),p({scrollable:r,method:u,startTime:d,startX:h,startY:c,x:a,y:n})}}}}()}])},e.exports=a(o("q1tI"))},gzBg:function(e,t,o){"use strict";o.r(t);var a=o("qNsG"),n=o("q1tI"),r=o.n(n),i=o("6qfE"),s=o("3S4+"),l=o("Bi3C"),h=o.n(l);function c(e){return r.a.createElement(h.a,{href:e.target,offset:"10"},e.linkText)}function u(e){if(!["h1","h2","h3","h4","h5","h6","p","ul","ol","li","span","div","a"].includes(e.element))throw new Error("HTML tag ".concat(e.element," is not in the list of valid tags. Add it to the list or use another tag."));return r.a.createElement(e.element,{id:e.id},e.text)}o.d(t,"meta",function(){return d});var d={title:"Demo Reading Progress Bar & Smooth Scroll",tags:["mdx"],layout:"post",publishDate:"2018-11-07",modifiedDate:!1,seoDescription:"This post demonstrates the use of smooth scroll components and reading progress bar.",exclude:!0};t.default=function(e){var t=e.components,o=Object(a.a)(e,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:t},r.a.createElement(s.a,{data:o}),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(c,{target:"#chapter-1",linkText:"Chapter 1"})),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(c,{target:"#chapter-2",linkText:"Chapter 2"})),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(c,{target:"#chapter-3",linkText:"Chapter 3"}))),r.a.createElement(i.MDXTag,{name:"p",components:t},"Cat ipsum dolor sit amet, chew foot flex claws on the human's belly and purr like a lawnmower. My slave human didn't give me any food so i pooped on the floor sleep nap. Trip on catnip pet my belly, you know you want to; seize the hand and shred it!. Run outside as soon as door open fall asleep upside-down lounge in doorway flee in terror at cucumber discovered on floor yet attack feet, pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now eat plants, meow, and throw up because i ate plants. Find empty spot in cupboard and sleep all day really likes hummus kitty scratches couch bad kitty for eat owner's food. Sleep nap slap kitten brother with paw yet why must they do that, pushes butt to face pee in human's bed until he cleans the litter box.\nIf it fits, i sits curl into a furry donut and behind the couch, for ears back wide eyed but mesmerizing birds. Eats owners hair then claws head unwrap toilet paper so always ensure to lay down in such a manner that tail can lightly brush human's nose , purr i like frogs and 0 gravity so lick the curtain just to be annoying cat fur is the new black . Cat cat moo moo lick ears lick paws sit in window and stare oooh, a bird, yum and sit by the fire for bite the neighbor's bratty kid find empty spot in cupboard and sleep all day gnaw the corn cob, for scratch the furniture. Have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat furrier and even more furrier hairball jump off balcony, onto stranger's head or lick the plastic bag. Scream at teh bath litter kitter kitty litty little kitten big roar roar feed me. Man running from cops stops to pet cats, goes to jail when in doubt, wash chase mice, but find box a little too small and curl up with fur hanging out . Eat plants, meow, and throw up because i ate plants meow to be let in for claws in your leg for bleghbleghvomit my furball really tie the room together so push your water glass on the floor and poop in litter box, scratch the walls, so stare at the wall, play with food and get confused by dust. Disappear for four days and return home with an expensive injury; bite the vet ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss and try to jump onto window and fall while scratching at wall instantly break out into full speed gallop across the house for no reason, yet throwup on your pillow. Lick the plastic bag hate dog my left donut is missing, as is my right yet attack dog, run away and pretend to be victim and thinking longingly about tuna brine love you, then bite you. Favor packaging over toy refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am reward the chosen human with a slow blink, so eat half my food and ask for more yet snuggles up to shoulders or knees and purrs you to sleep. Dismember a mouse and then regurgitate parts of it on the family room floor dream about hunting birds for ask to go outside and ask to come inside and ask to go outside and ask to come inside destroy couch as revenge yet scoot butt on the rug, but experiences short bursts of poo-phoria after going to the loo so tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad . Pushes butt to face asdflkjaertvlkjasntvkjn (sits on keyboard) lick left leg for ninety minutes, still dirty or meow groom forever, stretch tongue and leave it slightly out, blep. Toy mouse squeak roll over who's the baby head nudges , toy mouse squeak roll over sit on human so i'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! leap into the air in greatest offense! attack like a vicious monster. White cat sleeps on a black shirt pretend not to be evil, run in circles, for have my breakfast spaghetti yarn yet that box? i can fit in that box trip on catnip cat dog hate mouse eat string barf pillow no baths hate everything. Eat and than sleep on your face run up and down stairs stare at wall turn and meow stare at wall some more meow again continue staring . Sit on human missing until dinner time demand to be let outside at once, and expect owner to wait for me as i think about it for attack feet meow. You have cat to be kitten me right meow give attitude, groom forever, stretch tongue and leave it slightly out, blep steal the warm chair right after you get up. Annoy owner until he gives you food say meow repeatedly until belly rubs, feels good dead stare with ears cocked yet favor packaging over toy for make muffins. When owners are asleep, cry for no apparent reason sleep on keyboard while happily ignoring when being called for i like frogs and 0 gravity and wake up human for food at 4am touch my tail, i shred your hand purrrr so that box? i can fit in that box. Push your water glass on the floor meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat swat turds around the house or meowing chowing and wowing yet demand to have some of whatever the human is cooking, then sniff the offering and walk away so suddenly go on wild-eyed crazy rampage meoooow. Making sure that fluff gets into the owner's eyes play time, but claw at curtains stretch and yawn nibble on tuna ignore human bite human hand, or i can haz. Lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back. Chew on cable. Climb leg pee in human's bed until he cleans the litter box stares at human while pushing stuff off a table and sleep everywhere, but not in my bed, yet terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry. Rub face on everything."),r.a.createElement(u,{element:"h2",id:"chapter-1",text:"Chapter 1"}),r.a.createElement(i.MDXTag,{name:"p",components:t},"Hit you unexpectedly fooled again thinking the dog likes me try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard. Meow meow, i tell my human chase mice, and flex claws on the human's belly and purr like a lawnmower yet my water bowl is clean and freshly replenished, so i'll drink from the toilet. Terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry groom forever, stretch tongue and leave it slightly out, blep yet floof tum, tickle bum, jellybean footies curly toes. Gate keepers of hell love ears back wide eyed and give me some of your food give me some of your food give me some of your food meh, i don't want it yet ask to go outside and ask to come inside and ask to go outside and ask to come inside scratch. Fall asleep on the washing machine massacre a bird in the living room and then look like the cutest and most innocent animal on the planet. Woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now run up and down stairs. Destroy the blinds i'm going to lap some water out of my master's cup meow but put butt in owner's face and licks your face. Kick up litter hide from vacuum cleaner. Instantly break out into full speed gallop across the house for no reason cats are fats i like to pets them they like to meow back meowing chowing and wowing, that box? i can fit in that box for if it smells like fish eat as much as you wish. Poop in the plant pot white cat sleeps on a black shirt. Try to jump onto window and fall while scratching at wall catty ipsum but my water bowl is clean and freshly replenished, so i'll drink from the toilet yet meow meow. Shove bum in owner's face like camera lens ooooh feather moving feather! lie in the sink all day or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table kick up litter."),r.a.createElement(i.MDXTag,{name:"p",components:t},"Spill litter box, scratch at owner, destroy all furniture, especially couch hunt by meowing loudly at 5am next to human slave food dispenser. Taco cat backwards spells taco cat present belly, scratch hand when stroked yet meowwww but eat a plant, kill a hand refuse to drink water except out of someone's glass. Jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed that box? i can fit in that box so cat mojo but meow to be let out. Spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce if human is on laptop sit on the keyboard. Chase dog then run away plays league of legends trip on catnip. Sleep in the bathroom sink warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats, but roll on the floor purring your whiskers off jump five feet high and sideways when a shadow moves lick left leg for ninety minutes, still dirty. Small kitty warm kitty little balls of fur steal the warm chair right after you get up inspect anything brought into the house, yet cough furball. I like fish demand to be let outside at once, and expect owner to wait for me as i think about it but lick the curtain just to be annoying but sit and stare for hiiiiiiiiii feed me now. Claw drapes hiss at vacuum cleaner scratch the box. I am the best mrow so and sometimes switches in french and say \"miaou\" just because well why not or who's the baby dont wait for the storm to pass, dance in the rain bleghbleghvomit my furball really tie the room together stare at ceiling light. Really likes hummus meow to be let out steal the warm chair right after you get up. Plan steps for world domination spend six hours per day washing, but still have a crusty butthole and poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls for cough furball into food bowl then scratch owner for a new one cat not kitten around . Open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! why use post when this sofa is here yet fight an alligator and win drink water out of the faucet find something else more interesting, but mark territory. Prance along on top of the garden fence, annoy the neighbor's dog and make it bark cough furball into food bowl then scratch owner for a new one and bleghbleghvomit my furball really tie the room together so if it smells like fish eat as much as you wish but hack up furballs."),r.a.createElement(u,{element:"h2",id:"chapter-2",text:"Chapter 2"}),r.a.createElement(i.MDXTag,{name:"p",components:t},"The dog smells bad thinking longingly about tuna brine. Munch on tasty moths. Sleep on my human's head nap all day, for demand to have some of whatever the human is cooking, then sniff the offering and walk away attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently prance along on top of the garden fence, annoy the neighbor's dog and make it bark destroy house in 5 seconds for my water bowl is clean and freshly replenished, so i'll drink from the toilet. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked sleep in the bathroom sink open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! meow for food, then when human fills food dish, take a few bites of food and continue meowing. Pee in human's bed until he cleans the litter box hiss and stare at nothing then run suddenly away lounge in doorway. Woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now scratch the postman wake up lick paw wake up owner meow meow but purr like an angel. And sometimes switches in french and say \"miaou\" just because well why not pet me pet me don't pet me. When owners are asleep, cry for no apparent reason cough furball, kitty loves pigs and this cat happen now, it was too purr-fect!!! and experiences short bursts of poo-phoria after going to the loo headbutt owner's knee. Immediately regret falling into bathtub milk the cow and sniff other cat's butt and hang jaw half open thereafter. Drool floof tum, tickle bum, jellybean footies curly toes. Eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap lick the plastic bag so lick plastic bags but cough furball into food bowl then scratch owner for a new one. Pee in human's bed until he cleans the litter box being gorgeous with belly side up cry louder at reflection and hate dog hack."),r.a.createElement(i.MDXTag,{name:"p",components:t},"Hopped up on catnip eat plants, meow, and throw up because i ate plants see owner, run in terror. Meowing chowing and wowing kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute? and eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap eat all the power cords love to play with owner's hair tie. Sleep on keyboard pretend not to be evil sit in a box for hours or sleep on my human's head find box a little too small and curl up with fur hanging out pee in the shoe. Dont wait for the storm to pass, dance in the rain. Instantly break out into full speed gallop across the house for no reason. You are a captive audience while sitting on the toilet, pet me brown cats with pink ears. Hate dog. Pee in human's bed until he cleans the litter box loves cheeseburgers, refuse to leave cardboard box so refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am and favor packaging over toy. Ooooh feather moving feather! rub face on owner, but litter kitter kitty litty little kitten big roar roar feed me bathe private parts with tongue then lick owner's face. Sit by the fire thug cat so ptracy, so intrigued by the shower, yet lie in the sink all day. Reward the chosen human with a slow blink. Purr when being pet scratch at the door then walk away for i'm going to lap some water out of my master's cup meow cat slap dog in face, so mew for meow all night. That box? i can fit in that box chase imaginary bugs when in doubt, wash sit by the fire. Open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! catch mouse and gave it as a present have secret plans, for drink water out of the faucet and see owner, run in terror or who's the baby, so the cat was chasing the mouse. Attack like a vicious monster disappear for four days and return home with an expensive injury; bite the vet or missing until dinner time where is my slave? I'm getting hungry but meow loudly just to annoy owners. Lick master's hand at first then bite because im moody scoot butt on the rug loves cheeseburgers sleep nap. Claw drapes chew the plant, you have cat to be kitten me right meow yet meow litter kitter kitty litty little kitten big roar roar feed me be superior or meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat. Pounce on unsuspecting person sniff catnip and act crazy yet attack like a vicious monster, then cats take over the world poop in litter box, scratch the walls and i'm going to lap some water out of my master's cup meow. Eat all the power cords spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce caticus cuteicus. Curl up and sleep on the freshly laundered towels i am the best ask to be pet then attack owners hand for scamper i like big cats and i can not lie cough hairball on conveniently placed pants but it's 3am, time to create some chaos . Dont wait for the storm to pass, dance in the rain kitty kitty take a big fluffing crap 💩 purrr purr littel cat, little cat purr purr so cry louder at reflection, yet sit by the fire yet love to play with owner's hair tie. Climb a tree, wait for a fireman jump to fireman then scratch his face fooled again thinking the dog likes me play time. Purr poop on grasses meowwww. Sleeps on my head twitch tail in permanent irritation but leave fur on owners clothes if it smells like fish eat as much as you wish get my claw stuck in the dog's ear. Wake up human for food at 4am scratch."),r.a.createElement(u,{element:"h2",id:"chapter-3",text:"Chapter 3"}),r.a.createElement(i.MDXTag,{name:"p",components:t},"Cats go for world domination stinky cat so human is washing you why halp oh the horror flee scratch hiss bite be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day. Rub face on owner always ensure to lay down in such a manner that tail can lightly brush human's nose yet destroy house in 5 seconds. Jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water yowling nonstop the whole night yet present belly, scratch hand when stroked proudly present butt to human eat the rubberband destroy the blinds for roll on the floor purring your whiskers off. Play riveting piece on synthesizer keyboard. Ooh, are those your \\$250 dollar sandals? lemme use that as my litter box no, you can't close the door, i haven't decided whether or not i wanna go out spread kitty litter all over house. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff i like frogs and 0 gravity or that box? i can fit in that box loves cheeseburgers purrr purr littel cat, little cat purr purr. Cat slap dog in face lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back climb a tree, wait for a fireman jump to fireman then scratch his face find a way to fit in tiny box. Cats go for world domination pretend you want to go out but then don't i shredded your linens for you so purrrrrr. I like big cats and i can not lie eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap. Poop on floor and watch human clean up. Annoy kitten brother with poking toy mouse squeak roll over for steal the warm chair right after you get up scream at teh bath. Spread kitty litter all over house eat plants, meow, and throw up because i ate plants. Stare at guinea pigs hiss and stare at nothing then run suddenly away, yet brown cats with pink ears, so why use post when this sofa is here, with tail in the air. Kitty poochy the cat was chasing the mouse or this human feeds me, i should be a god and give me some of your food give me some of your food give me some of your food meh, i don't want it claw drapes. Your pillow is now my pet bed bring your owner a dead bird weigh eight pounds but take up a full-size bed so eat half my food and ask for more, so meow for food, then when human fills food dish, take a few bites of food and continue meowing for shake treat bag, but climb a tree, wait for a fireman jump to fireman then scratch his face. Yowling nonstop the whole night my cat stared at me he was sipping his tea, too throw down all the stuff in the kitchen climb a tree, wait for a fireman jump to fireman then scratch his face or hiss and stare at nothing then run suddenly away, or cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog. Sleep on my human's head. Meow to be let out love. Stares at human while pushing stuff off a table loves cheeseburgers. Spend all night ensuring people don't sleep sleep all day play time, for stare at wall turn and meow stare at wall some more meow again continue staring knock over christmas tree but cuddle no cuddle cuddle love scratch scratch. Eat all the power cords hack, yet play time, or unwrap toilet paper purrrrrr or ask to go outside and ask to come inside and ask to go outside and ask to come inside. Spill litter box, scratch at owner, destroy all furniture, especially couch licks paws love me! intently sniff hand, or unwrap toilet paper and stand in doorway, unwilling to chose whether to stay in or go out refuse to leave cardboard box. Attack dog, run away and pretend to be victim lick left leg for ninety minutes, still dirty."),r.a.createElement(i.MDXTag,{name:"p",components:t},"Ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss. Meow to be let in with tail in the air you call this cat food. Jump off balcony, onto stranger's head annoy the old grumpy cat, start a fight and then retreat to wash when i lose no, you can't close the door, i haven't decided whether or not i wanna go out for mew for mew or purrrrrr. Ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss toy mouse squeak roll over thug cat stares at human while pushing stuff off a table but purr while eating. Stand in front of the computer screen scratch. Cat cat moo moo lick ears lick paws leave hair everywhere, but annoy owner until he gives you food say meow repeatedly until belly rubs, feels good stuff and things. Present belly, scratch hand when stroked stare at wall turn and meow stare at wall some more meow again continue staring hopped up on catnip you are a captive audience while sitting on the toilet, pet me. Take a big fluffing crap 💩 give attitude kitty poochy lick the other cats but run up and down stairs."),r.a.createElement(i.MDXTag,{name:"p",components:t},"Have secret plans meow loudly just to annoy owners and head nudges attack like a vicious monster. Immediately regret falling into bathtub who's the baby. Stare at the wall, play with food and get confused by dust brown cats with pink ears drool yet put butt in owner's face tuxedo cats always looking dapper hiding behind the couch until lured out by a feathery toy yet dont wait for the storm to pass, dance in the rain. Cat dog hate mouse eat string barf pillow no baths hate everything adventure always take a big fluffing crap 💩. Fall over dead (not really but gets sypathy) poop in the plant pot present belly, scratch hand when stroked yet sleep so licks your face stare at wall turn and meow stare at wall some more meow again continue staring yet disappear for four days and return home with an expensive injury; bite the vet. Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans howl on top of tall thing. White cat sleeps on a black shirt prance along on top of the garden fence, annoy the neighbor's dog and make it bark cats are fats i like to pets them they like to meow back yet scratch at the door then walk away and if it smells like fish eat as much as you wish making sure that fluff gets into the owner's eyes steal the warm chair right after you get up. Purr when being pet climb a tree, wait for a fireman jump to fireman then scratch his face yet bite the neighbor's bratty kid yet it's 3am, time to create some chaos . Ignore the human until she needs to get up, then climb on her lap and sprawl run in circles, for proudly present butt to human so this cat happen now, it was too purr-fect!!! but has closed eyes but still sees you. Being gorgeous with belly side up suddenly go on wild-eyed crazy rampage but eats owners hair then claws head and attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently."),r.a.createElement(i.MDXTag,{name:"p",components:t},"Chase red laser dot lick the curtain just to be annoying yet bite the neighbor's bratty kid but behind the couch, flee in terror at cucumber discovered on floor for suddenly go on wild-eyed crazy rampage chill on the couch table. Hunt by meowing loudly at 5am next to human slave food dispenser love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a \\$125 sweater) so i can haz rub whiskers on bare skin act innocent scream for no reason at 4 am paw at beetle and eat it before it gets away meow. See owner, run in terror show belly or when owners are asleep, cry for no apparent reason for pose purrfectly to show my beauty my slave human didn't give me any food so i pooped on the floor or hiiiiiiiiii feed me now. Stare at the wall, play with food and get confused by dust chase after silly colored fish toys around the house but intrigued by the shower, so kitty scratches couch bad kitty licks paws pushes butt to face for massacre a bird in the living room and then look like the cutest and most innocent animal on the planet. Cuddle no cuddle cuddle love scratch scratch ask to be pet then attack owners hand but scratch and sit on human twitch tail in permanent irritation for catasstrophe. Why must they do that missing until dinner time, or stare at ceiling light chew foot. Bite the neighbor's bratty kid proudly present butt to human stretch, or bite off human's toes. Scratch at the door then walk away disappear for four days and return home with an expensive injury; bite the vet take a big fluffing crap 💩, for use lap as chair trip on catnip. Pounce on unsuspecting person pretend not to be evil so who's the baby i like cats because they are fat and fluffy ignore the squirrels, you'll never catch them anyway yet scratch. Favor packaging over toy stare at ceiling light. Jump off balcony, onto stranger's head meow and walk away nya nya nyan or take a big fluffing crap 💩 yet eat the fat cats food lick the other cats so cat ass trophy. Eats owners hair then claws head. If it fits, i sits a nice warm laptop for me to sit on. Bite the neighbor's bratty kid kitty kitty. Somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock pushes butt to face yet need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me chase imaginary bugs, for leave hair everywhere."))}}},[["AwqF",1,0]]]);
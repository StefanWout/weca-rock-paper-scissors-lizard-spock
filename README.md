#  Rock, Paper, Scissors, Lizard, Spock Game

For the Code Institute Bootcamp Hackathon #2, our team decided to complete the Rock, Paper, Scissors, Lizard, Spock game. We used the challenge provided by Frontend Mentor to come up with the general layout and style of the app while customizing elements of it to better suit our own sensibilities.

### References

- __Original Challenge__
(https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH)

- __Tutorial Video__
(https://www.youtube.com/watch?v=lV2BMXdsDmc)

## Features 

### User stories

- __Sitewide__

  - As a user, I want the game to be mobile-responsive, so that I can play on my smartphone or tablet device.
  - As a site owner, I want a game to entertain users.
  - As a user, I want to be able to see a score to know how well I am doing.
  - As a user, I want to be able to read the rules of the game to understand how it works.

### Gamepage

   - This site is a simple online game for rock, paper, scissors, lizard, spock. Based on the game popularised in The Big Bang Theory.
   - When first loaded users are presented with a rules modal, a diagram showing each outcome of the game. This can be closed by either clicking the "X" or the "Rules" button, which is set to toggle the modal.
   - Users can then play the game by selecting any of the 5 options, presented as buttons each with a symbol representing the choice made.
   - Once a selection has been made the outcome is displayed towards the bottom of the screen.
   - Users can then play again by selecting one of the 5 options and the outcome will update to reflect the new result.
   - The score counter will increase by 1 with every victory for the user, and decrease by 1 with every defeat.
   - Users can rest the score counter, and therefore the game, by clicking the "Reset Game" button.

### Issues

  - We had issues with the responsiveness of the page when viewed on a laptop, with the top choice button moving under the header.
  - We struggled to get the choice buttons to be responsive in a pentagon shape and stay relative to the other elements on the page. Resolved through trial and error with the flex properties.
  - The rules modal appears when the page is first loaded, at first this was a bug, however after attempting to fix it with a toggle in JavaScript we decided to leave this as a feature of the game. The toggle works so the user can remove it and bring it back up if needed.

## Wireframes

  - The below wireframe images show our original ideas for the basic layout of the page.

![image](https://github.com/StefanWout/weca-rock-paper-scissors-lizard-spock/assets/165150313/4f59d7ac-4966-48d0-9cd3-04c436989cfb)
![image](https://github.com/StefanWout/weca-rock-paper-scissors-lizard-spock/assets/165150313/9c5809a0-329c-4a47-90bb-655c17013341)
![image](https://github.com/StefanWout/weca-rock-paper-scissors-lizard-spock/assets/165150313/e135424b-a90d-4dbf-a5d7-2e861aa61ade)

## Ongoing Design Layout

  - The below images show the look of the site whilst we were struggling with responsiveness issues.

<img width="443" alt="image" src="https://github.com/StefanWout/weca-rock-paper-scissors-lizard-spock/assets/165150313/1289325a-4a51-4bd4-b6ac-fe787dd81f2c">
<img width="440" alt="image" src="https://github.com/StefanWout/weca-rock-paper-scissors-lizard-spock/assets/165150313/f3836d82-fee5-41e4-87d0-35210ffac584">

## Final Design Layout

  - The below images show the layout of the deployed site in mobile, tablet and desktop form.

<img width="173" alt="image" src="https://github.com/StefanWout/weca-rock-paper-scissors-lizard-spock/assets/165150313/f38c4a95-87bc-4dee-8ad0-0fd60e787913">
<img width="410" alt="image" src="https://github.com/StefanWout/weca-rock-paper-scissors-lizard-spock/assets/165150313/c43de5ac-97c9-4d72-8428-b28457395e30">
<img width="1440" alt="image" src="https://github.com/StefanWout/weca-rock-paper-scissors-lizard-spock/assets/165150313/7b1b3a62-b79a-4d99-81d1-0da717f7b0f2">

## Features We'd implement in the future if we could

  - A final count on the score at, for instance 5/-5, where the user or compueter would win and the game would reset at that point.

## Testing 

### Feature Testing

  - No identifiable issues with JavaScript during testing of the deployed site

### Validator Testing 

- __CSS Validation__

  - 5 errors identified which we addressed

<img width="1310" alt="image" src="https://github.com/StefanWout/weca-rock-paper-scissors-lizard-spock/assets/165150313/a28fedb3-f92e-4185-96e8-27e5381ee487">

- __HTML Validation__

  - 10 errors/warnings identified which we addressed

<img width="1392" alt="image" src="https://github.com/StefanWout/weca-rock-paper-scissors-lizard-spock/assets/165150313/fc1d069c-beba-4756-8806-df53613af74b">

- __JavaScript Validation__

29 warnings identified, 2 missing semicolons corrected

2	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
3	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
11	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
12	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
13	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
14	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
17	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
18	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
19	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
20	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
21	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
22	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
23	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
24	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
25	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
26	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
27	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
31	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
50	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
57	'template literal syntax' is only available in ES6 (use 'esversion: 6').
58	'template literal syntax' is only available in ES6 (use 'esversion: 6').
77	'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
78	'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
79	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
85	'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
97	'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
102	'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
103	Missing semicolon.
104	Missing semicolon.

## Deployment

https://stefanwout.github.io/weca-rock-paper-scissors-lizard-spock/

## Credits

### Team Members

Team Lead: Stefan Woutersen
Team Members: Harrison Greenwood
              James Barlow

### Media

 - Images for the symbols and the rules modal taken from the below site and then edited using CSS

https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH

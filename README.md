#Travel Diary
Setup
Create a new repository on GitHub
Connect the repository with a directory in single-page-apps/exercises
Create a GitHub project and thoroughly plan out the project, breaking it into well-documented tickets.
After pushing your base README.md to master, you should be working off branches
Create an index.html, main.js and main.css and link them all together.
Technical Requirements
1 Single responsibility prinicple: Each function should be responsible for one thing.
2 No frameworks or libraries (Bootstrap/Materialize, jQuery, etc); everything is vanilla
Requirements
1 Create an array of objects that represent places you've been or want to go. These objects should have a title, image and description. You need at least 5 unique objects in the array.
2 Print each of the objects to the DOM in a "card" that also has it's own input box and submit button. There should be 3 "cards" per row.
3 The user should be able to type in the text box for a specific location, click the submit button on that card, and their entry should appear in a "diary" below the cards.
The diary entry should contain the name of the location from the card the user was typing in (and hit the submit button in). It should also contain only the text that was in the text box from that card.
The text box for that card should be cleared upon submission.
4 The diary entries should build up as the user continues to type in cards and submit their entries. Newest entries should appear at the bottom. 
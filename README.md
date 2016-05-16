# myOwnWebsite
Build your own website

In this exercise you need to create your own web page. Use all waht you learnt in codecademy. 

There are some requirement you should fulfill. 

The page should contain at least 3 subpages.
Its html should be W3C valid.
It should contain properly used HTML5 (new) elements
It should contain a navigation menu
It should contain a contact page with a form to send email to the author (you don't need to create server side logic, only the front end) with input validation
Step by step:

Setup repository
Create a new GitHub repository for your site with README.md file
Add .ignore file to it if needed
Clone the repository to your machine
Create your index page
Before you start coding sketch up how your web pages should look like. You can do it on paper or with any wire frame application. This is your choice. The purpose is to visualize that what different sections and parts will be in your page and how should they be arranged.
Create a new html file in your repository root directory named: index.html
Set the doctype to HTML5 form
Add <head> part and setup basic meta data and the <title> of the page
Add <body> part
Add <header> to the body which will contain <nav>igation menu. The first item of this should be a link to this page.
Add a <div> element to the body which has a class named: content. This will contain the part of the pages which differs from each other.
Add an image of you and a small introduction next to it about yourself.
Add some content to it (e.g. the description of the exercise) to see where will it be. You can fill it with arbitrary content. Take care to use the different html tags properly so it can express your intent.
Add <footer> and add some content to it. Take example from other sites.
After you finish commit your changes into your repository with a descriptive comment.
Make it nice 
Create a new folder named css in your repository's root directory
Create a style.css file in that newly created folder. This will contain all your rules about your site's appearance.
Add a reference to it in your index.html file's head part.
Define basic rules for the body element. (Default background, font, alignment...) These rules are inherited in the child elements (every element which located inside the body).
Write css rules to make all the site like your sketch.
Create a contact page
Copy your index.html file and give it the name: contact.html
Add a link to your navigation menu which redirects to this html page
Delete the inner content of div.content element
Create a form inside it
Add two <input> field and a <textarea> field to the form and proper <label>s to them. The first input field is the name which has a placeholder text: Enter your name. The second input field is the email with placeholder text: Give your email. The textarea will contain the message so give some handful instruction in the placeholder text. Do not forget add named all your form element.
Add a submit button wich should has the text SEND on it. It should be disabled by default.
Open your style.css file and at the bottom of it and write some rules which makes it nice. (e.g. horizontally centered and the fields has the same width). You can see an example on the https://codecool.hu/kapcsolat/ (Links to an external site.) web site. Maybe it is familiar to you. ;)
Commit your changes into your repository.  
Add business logic to your contact page
Create new folder in your repository root directory named: js.
In this folder create a new file named main.js
Add a script tag at the bottom of all html pages' body which refers to this file.
Create a funcation named validateContactData(). In this function you need to collect the field of the contact form and do some validation on them.
The name is valid if its length bigger than 3 character (maximum 30) and contains at least one whitespace.
The email address need to be a valid email adress which ending to .hu or .com.
The message is valid if it longer than 20 char (maximum 500).
If every field are valid make the send button enabled anyway highlight the border of the invalid data field.
Attach the validateContactData function as event handler to the form fields (name, email, message) onChange event.
Create a function named sendMessage(). In this function collect all the necessary data (name, email, message) from the form and pop up an alert window which shows these data and a text that: Your message was sent!.
Commit your changes into your repository!
Create your custom pages
Create your new html file(s) based on the index.html
Add the proper link to the navigation menu on every other html files.
Fill it with custom content
Extend your stylesheet if needed
If you make some business logic locate it into the main.js file.
Do not forget to commit and push your changes into your repository!
Validate your pages
Go to https://validator.w3.org/ (Links to an external site.)
Validate your sites
Fix the issues
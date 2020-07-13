Accessibility: Enables people with disabilites to navigate and interact and contribute to the web. 

Blind, color blind, low vision, deaf, hearing difficulties, mobility impairment,
and cognitive disabilities.

Use text and symbols to show errors instead of just colors.

Use contrast for text on background. 4.5 to 1 ratio. Use WebAIM's color contrast checker

Use focus indicators for keyboard only users

Make sure to use borders for input fields on forms and use labels as opposed to just placeholder text

Don't put too many options for autocomplete and menus, it confuses keyboard users. For example, putting a delete and edit option on menu items

Don't hide things with hover

Use one H1 tag per page

use alt tags for images and logos

ARIA == Accessible Rich Internet Applications Suite 


Function with loops and conditionals

function usingLoops(arr){
    arr.forEach(a => {
        if(a.length == 4){
            console.log('yes')
        }else{
            console.log('no)
        }
    })
}

higher order function takes in a function as an argument

Back end authentication, middleware to authenticate the token

proper form validation examples and error handling

CRUD actions https verbs  Create, Read, Update, Delete. Verbs = get, post, put, delete

cookies vs local storage Study up on this 

Middleware 

Knex is not a database!! Sqlite3 is the DB you use

Cookies:  Information stored on the server side, much smaller and only stores strings
Local Storage: Information is stored locally on the users computer. Much larger and stores objects but is less secure.

Routes:
The 3 components you will interact the most when working with React Router are:

BrowserRouter, usually aliased as Router
Link
Route
BrowserRouter wraps all your Route components.

Link components are - as you can imagine - used to generate links to your routes

Route components are responsible for showing - or hiding - the components they contain.
Notice the exact attribute. Without this, path="/" would also match /about, since / is contained in the route.
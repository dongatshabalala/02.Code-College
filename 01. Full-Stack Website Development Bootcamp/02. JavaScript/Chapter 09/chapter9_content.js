"use strict";

/* The Document Object Model (DOM) */

/* It grabs an HTML page and turns it into a logical tree. */

/* The Browser Object Model (DOM) */

/* It holds all the methods and properties for JavaScript
   to interact with the browser.

   This is information related to previous pages visited,
   the size of the window of the browser, and also the DOM.
*/

/* The DOM contains the HTML elements on the web page.

   With JavaScript, we can select and manipulate
   parts of the DOM.

   This leads to interactive web pages instead of static ones.

   Being able to work with the DOM means you are able
   to create interactive web pages.
*/

/* HTML Crash Course */

/* Hyper-Text Markup Language (HTML) is the language
   that shapes the content of web pages.

   Web browsers understand HTML code
   and represent it in the format we are used to seeing,
   which is the format of web pages.
*/

/* <!DOCTYPE html>
    <html>
     <head>
     <title>Tab in the browser</title>
     </head>
     <body>
     <p>Hello web!</p>
     </body>
    </html>
*/

/* HTML code consists of elements.

   These elements contain a tag and attributes.
*/

/* HTML Elements */

/* HTML consists of words between <angle brackets>, or elements.

   Any element that gets opened needs to be closed.

   We open with <elementname> and we close with </elementname>.

   Everything in between that is part of the element.
*/

/* Elements can contain inner elements.

   Elements can only be closed if all inner elements
   have been closed.

   You must always close the inner elements before closing
   the outer element.

   We call inner elements child elements
   and the outer elements parent elements.
*/

/* Here Is An Example of Correct HTML */

/* <body>
     <div>
     <p>
     </p>
     </div>
    </body>
*/

/* The different elements represent different pieces of layout.

   The p represents paragraphs.

   Another common element is h1,
   which represents a big title.

   What is more important is to know
   the three major building elements
   of every HTML page:

   I. The HTML element.
   II. The head element.
   III. The body element.

   In the HTML element, all the HTML takes place.

   You can only have one of these in your HTML page.

   The HTML element is the outer element,
   and all other elements are housed in it.

   It contains the other two top-level elements: head and body.

   In the head element, we arrange a lot of things
   that are meant for the browser
   and not for the user.

   You can think of certain metadata,
   such as which JavaScript scripts and which stylesheets
   need to be included,
   and what the searching engine should use
   as a description on the search result page.

   Most of what developers do with the head element
   is including scripts.
*/

/* An Example of a Basic Head Element */

/* <head>
        <title>This is the title of the browser tab</title>
        <meta name="description" content="This is the preview in google">
            <script src="included.js"></script>
    </head>
*/

/* The body element is mostly the content
   that will appear on the web page.

   There can only be one body element in the HTML element.

   Titles, paragraphs, images, lists, links, buttons,
   and many more are all elements that we can come across
   in the body.

   They have their own tag, so for example,
   img for image and a for a link.
*/

/* A Non-Exhaustive List of Common Tags in the Body of an HTML Page */

/* 1. <p> - </p>
      This is used to create a paragraph.

   2. <h1> - </h1>
      This is used to create a header;
      smaller headers are h2 to h6.

   3. <span> - </span>
      This is a generic inline container for content
      that needs to be separated,
      for example, for layout purposes.

   4. <a> - </a>
      This is used for hyperlinks.

   5. <button> - </button>
      This is used for buttons.
    
   6. <table> - </table>
      This creates a table.

   7. <tr> - </tr>
      This creates a table row.
      This must be used inside a table.

   8. <td> - </td>
      This creates a table data cell inside a row.

   9. <ul> - </ul>
      This creates unordered lists,
      with bullet points, for example.

   10. <ol> - </ol>
       This creates ordered lists with numbers.

   11. <li> - </li>
       This lists items for inside ordered and unordered lists.

   12. <div> - </div>
       This creates a section inside the HTML page.

       It is often used as a container 
       for other styles or sections
       and can easily be used for special layouts.

   13. <form> - </form>
       This creates an HTML form.

   14. <input> - </input>
       This creates an input field
       in which the user can enter information.

       These can be textboxes, checkboxes, buttons,
       passwords, numbers, dropdowns, radio buttons,
       and much more.

   15. <input />
       This is an HTML element used to collect user input,
       such as text, numbers, passwords, checkboxes, etc.

       This is a self-closing tag,
       meaning it does not need a separate closing tag
       like </input>. Instead, it ends with />.

   16. <br>
       This is used to make a line break,
       go to a new line.

       It does not need an end tag
       and is therefore an exception.

       It behaves like pressing Enter or Return on a keyboard.
*/

/* HTML Attributes */

/* Attributes influence the element they are specified on.

   Attributes exist inside the element they are specified on
   and are assigned a value using an equal sign.

   For example, the attribute of a (which indicates a hyperlink)
   is the href.

   a href then specifies where the link is redirecting to.
*/

/* <a href = "https://google.com">Ask Google</a> */

/* The above line of code displays a link
   with the text Ask Google.

   When you click this link, you will be sent to Google,
   which can be told by the value of the href attribute.

   This modifies the a element.

   Attributes modify the element they are specified on.
*/

/* A Non-Exhaustive List of the Most Important Attributes
   to Get Started with HTML and JavaScript.
*/

/* 1. id
      Description: This gives an element a unique ID,
                   such as age.

      Can Be Used on Which Element? All of them.

   2. name
      Description: This is used to give a custom name
                   to an element.
    
      Can Be Used on Which Element? input, button, form, and others.

   3. class
      Description: This is special metadata
                   that can be added to an element.

                   This can result in a certain layout
                   or JavaScript manipulation.

      Can Be Used on Which Element? Almost all of them
                                    inside the page body.

   4. value
      Description: This sets the initial value of the element
                   it is added to.

      Can Be Used on Which Element? button, input, li, and others.

   5. style
      Description: This gives a specified layout
                   to the HTML element it is added to.
    
      Can Be Used on Which Element? All of them.
*/

/* The BOM */

/* This element makes it possible for JavaScript code
   to communicate with the browser.
*/

/* The window object contains all the properties required
   to represent the window of the browser,
   so for example, the size of the window
   and the history of previously visited web pages.

   The window object has global variables and functions,
   and these can all be seen when we explore the window object.

   The exact implementation of the BOM depends on the browser
   and the version of the browser - keep this in mind.
*/

/* Window History Object */

/* The window browser object also contains a history object.

   This object can actually be written without the prefix of window
   because it has been made globally available,
   so we can get the exact same object
   by using the console.dir(window.history)
   or simply the console.dir(history) command in the console.
*/

/* Window Navigator Object */

/* In the window object, there is a navigator property.

   This property is interesting
   because it contains information
   about the browser we are using,
   such as what browser it is and what version we are using,
   and what operating system the browser is running on.
*/

/* We start with accessing the window
   because navigator is an object of the window object.

   So it is a property of the window object,
   which we specify with the dot in between.

   In other words, we access these window objects
   in the same way we do any other object.
*/

/* Window Location Object */

/* The location object contains the URL of the current web page.

   If you override (parts of) that property,
   you force the browser to go to a new page.

   How to do this exactly differs per browser.
*/

/* The DOM */

/* The DOM is a way of displaying the structure
   of an HTML document as a logical tree.
*/

/* Selecting Page Elements */

/* The document object contains many properties and methods.

   In order to work with elements on the page,
   you will first have to find them.

   If you need to change the value of a certain paragraph,
   you will have to grab this paragraph first.

   We call this selecting the paragraph.

   After selecting, we can start changing it.
*/

/* To select page elements to use within your JavaScrip code
   and in order to manipulate elements,
   you can use either the querySelector()
   or querySelectorAll() method.

   Both of these can be used to select page elements
   either by tag name, ID, or class.
*/

/* The document.querySelector() method will return
   the first element within the document
   that matches the specified selectors.

   If no matching page elements are found,
   the result null is returned.

   To return multiple matching elements,
   you can use the method document.querySelectorAll().
*/

/* The querySelectorAll() method will return a static NodeList,
   which represents a list of the document's elements
   that match the specified group of selectors.
*/

/* If you want to select multiple elements,
   you can use querySelectorAll().

   This method is going to return all the elements
   that match the selector in an array.
*/

/* After selecting, you can start using the dynamic features of the DOM;
   you can manipulate the elements using JavaScript.

   Content can be changed in the same way
   a variable's contents can be,
   elements can be removed or added,
   and styles can be adjusted.

   This can be done with JavaScript and the way the user
   interacts with the page can affect this.
*/
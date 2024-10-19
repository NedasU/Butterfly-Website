# Butterfly Website Shop Using REACT, SQL, NodeJs with ExpressJs
![Front Page/Butterfly Page](https://cdn.discordapp.com/attachments/711875973913772063/1297092279785361500/image.png?ex=6714aad2&is=67135952&hm=8294e340643f713edb61b77196d4ecd50551c8015fb2e1ee10995e25d8c906e7&)

The purpose of this project was to create a responsive online shopping website that is specialised to hand made brooch. These brooch items and bracelets were styled in card formats to present them in a professional manner which clearly depicts the
information regarding the items. In regards to the Butterfly page, a title with a background image is presented to indicate the user which page they are on and additionally, the background color changes in the sidebar that is related to the page that the user is on.
These parts of the page were made with React components in order to be reusable and scalable for which not only the butterfly page made use of these components, but other pages such as the bracelet page and the request page.
This is done by not hard coding components and instead through the use of props and contexts to access the necessary context. Additionally, through the use of reusable components, each page follows similar structures and has a header, sidebar, footer, and a content section.

![Bracelet Page](https://cdn.discordapp.com/attachments/711875973913772063/1297093718620377158/image.png?ex=6714ac29&is=67135aa9&hm=aece35de3811c10679c3e6ee5fda83f7814e690ced8ff0c4bb1c0c83ebf00a5a&)

The switching between pages can be seen updated on the sidebar which highlights the active icon. Additionally, you can see the same format of cards which is done by reusing components to maintain the same format throughtout all pages.

![Requests Page](https://cdn.discordapp.com/attachments/711875973913772063/1297100181333868585/image.png?ex=6714b22e&is=671360ae&hm=af5235f4c7e1ae9c5c18f5fa37c97f49650658a6dc2ad65cc0722b4c0a4548ed&)

This is a request page where the user can submit personal requests, which are sent to the backend using a POST request handled by Express.js. The data is then stored in an SQL database using queries for later retrieval or processing.
Several POST and GET requests are utilized in this project to perform CRUD (Create, Read, Update, Delete) operations, ensuring the system remains stateless and responsive. 
By leveraging RESTful principles, the backend efficiently communicates with the database and client-side, promoting scalability and seamless user interactions.

## Project Still in Development!

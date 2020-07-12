/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
/*** 
   I set my two global variables here so that they can be used throughout my functions.

   The first, studentList, selects all of the li's containing student information by targeting their
   specific class names.

   Second, I craete pageItems which is simply the number of items that I want to display on each page.
***/

let studentList = document.querySelectorAll('.student-item.cf');
let pageItems = 10;


/*** 
   This function is used to determine what will show on any given page. It has two parameters, list and 
   page. The list is called using the studentList and page is just the page number. At the end of the function
   I pass in the arguments studentList and 1 for the page number so that it displays the first 10 students upon
   the document loading.

   I created two local variables to help determine what should show on the page. My first, startIndex, set 
   where each page will start displaying from the studentList. It takes the number multiplied by the number of
   pages (ie, page 2, 10 items per page = 20), minus the pageitems(10). The second, endIndex is very similar
   except this is the index number that the page should stop displaying at with a formula of 
   ((page * pageItems) - 1). In the example of page 2, that would be 19.

   Then, I use a for loop to run through the length of the student list. Inside of the loop, I use a conditional
   to determine if the index of the student in studentList is included in the range of the start/end indexes. If
   it is, it will then be displayed. If not then it won't be.
***/

function showPage(list, page) {
  let startIndex = (page * pageItems) - pageItems;
  let endIndex = (page * pageItems) - 1;
  for ( let i = 0; i < studentList.length; i++ ) {
    if ( i >= startIndex && i <= endIndex ) {
      studentList[i].style.display = 'block';
    } else {
      studentList[i].style.display = 'none';
    }
  }
};

showPage(studentList, 1);


/*** 
   In this function, I am creating the elements necessary for the pagination links and appending them to their
   parent element. I start by creating variables. The first is to target the div with the class name of 'page'.
   I then create a new div by using create element and making a div, then appending it to the div that I targeted
   with my first variable. I then create a ul to append to the new div. My final element before my loop is a variable
   that determines the number of pages that I need. I used Math.ceil to round up so that if I have a number divisible
   exactly by 10, there is no rounding up and it will create the exact number of pages that I need and in this case,
   since there are 4 on the last page, the loop will create a new page for this as well. I tested to ensure that it works
   for anywhere from 1-9 items. It accepts the parameter list, which when calling it I pass in the global variable
   studentList as it's argument to run the function with that data.

   Within the for loop, I am creating an li for each new page, which is is appended to the ul. Then an anchor is generated
   for each li and is then appended to the li. I set the text content of each anchor to be it's index + 1 since the index
   starts at 0 and there is no 0 page. I then set the first page to active before my event handler so that the proper link
   is highlighted when the web page is loaded.

   For my event handler, I target the anchor elements and set the events to fire with a click. I put in the parameter 'e' which
   is for the event listener. This way I can use the target method to set the event to fire on whichever anchor element is clicked. 
   I next do a for loop to go through all of the elements and clear out all of the class names, setting a new variable, links, 
   which I use to select all anchor elements on the page so that they can be run through in the loop. Finally, the target of the
   event has it's class name set to 'active' and then the showPage function is called to display the set of students that 
   correspond to that page number.
***/

/***
  This is the start of my search functionality.
 ***/
// function createSearch() {
//   let inputDiv = document.createElement('DIV');
//   inputDiv.className = 'student-search';
//   let pageHeader = document.querySelector('.page-header');
//   pageHeader.appendChild(inputDiv);
//   let input = document.createElement('INPUT');
//   input.placeholder = 'Search for students...'
//   input.textContent = input.value.textContent
//   inputDiv.appendChild(input);
//   let button = document.createElement('BUTTON');
//   button.textContent = 'Search';
//   inputDiv.appendChild(button);


 

//   button.addEventListener('click', () => {
//     for ( let i = 0; i < studentList.length; i++ ) {

//       if ( input.textContent == studentList[i]) {
//         showPage(studentList, 1)
//       // } else {
        
//       }
//     }
//   });

//   // input.addEventListener('keyup' () => {

//   // });

// };



function appendPageLinks(list) {


  let div = document.querySelector('div.page');
  let newDiv = document.createElement('DIV');
  newDiv.className = 'pagination';
  div.appendChild(newDiv);
  let ul = document.createElement('UL');
  newDiv.appendChild(ul);
  let numberOfLinks = Math.ceil(studentList.length/pageItems);

  for ( let i = 0; i < numberOfLinks; i++ ) {
      let li = document.createElement('LI');
      ul.appendChild(li);
      let a = document.createElement('A');
      a.href = '#';
      a.textContent = i + 1;
      li.appendChild(a);
      document.querySelector('a').className = 'active';

      a.addEventListener('click', (e) => {
        let links = document.querySelectorAll('a');
        for ( let j = 0; j < numberOfLinks; j++ ) {
          links[j].className = '';
          if ( e.target ) {
            e.target.className = 'active';
          }
        }
        
        showPage(studentList, a.textContent)
    });
  }
  createSearch();
};

appendPageLinks(studentList);








// Remember to delete the comments that came with this file, and replace them with your own code comments.
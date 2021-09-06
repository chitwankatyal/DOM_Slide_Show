/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";
var count = window.opener.zoomCount;

/* populate img element and create event listener */
function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
   var zoomButton = document.getElementById("zoomButton");
   zoomButton.addEventListener("click", addFav, false);
   createEventListener();
}

/* close window */
function closeWin() {
   window.close();
}
/*Adding images to favorite*/

var fav1, fav2, fav3, fav4, fav5;

function addFav()
{
      count++;
   if(count < 6)
   {
       switch(count)
        {
             case 1:
               fav1 = window.opener.document.getElementById("fav1");
               fav1.innerHTML = '<span onclick="removeFav1()" title="Remove Photo">Remove</span><br><br><img style="width:150px; height:100px;" src="' + figFilename + '">';
               break;
             case 2:
               fav2=window.opener.document.getElementById("fav2");
               fav2.innerHTML = '<span onclick="removeFav2()" title="Remove Photo">Remove</span><br><br><img style="width:150px; height:100px;" src="' + figFilename + '">';
               break;
             case 3:
               fav3=window.opener.document.getElementById("fav3");
               fav3.innerHTML = '<span onclick="removeFav3()" title="Remove Photo">Remove</span><br><br><img style="width:150px; height:100px;" src="' + figFilename + '">';
               break;
             case 4:
               fav4=window.opener.document.getElementById("fav4");
               fav4.innerHTML = '<span onclick="removeFav4()" title="Remove Photo">Remove</span><br><br><img style="width:150px; height:100px;" src="' + figFilename + '">';
               break;
             case 5:
               fav5=window.opener.document.getElementById("fav5");
               fav5.innerHTML = '<span onclick="removeFav5()" title="Remove Photo">Remove</span><br><br><img style="width:150px; height:100px;" src="' + figFilename + '"></a>';
               break;
             default:
              alert("Error!!!");
              break;
         }
  
   }
   else if (count === 6)
   {
      alert("Sorry you can add only 5 pictures to favorites! Please remove any one of the selected pictures to add a new one")
      count = 5;
   }

    window.opener.zoomCount = count;     
}


/* create event listener for close button */
function createEventListener() {
   var closeWindowDiv = document.getElementsByTagName("p")[0];
   if (closeWindowDiv.addEventListener) {
     closeWindowDiv.addEventListener("click", closeWin, false); 
   } else if (closeWindowDiv.attachEvent)  {
     closeWindowDiv.attachEvent("onclick", closeWin);
   }
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;


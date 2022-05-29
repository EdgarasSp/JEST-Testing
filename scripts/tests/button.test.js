/**
 * @jest-environment jsdom
 */

// LESSON 1

//  const buttonClick = require("../button"); //buttonClick is the function name in the buttons.js

//  beforeAll(() => {      
//      document.body.innerHTML = "<p id='par'></p>";
//  });
 
//  describe("DOM tests", () => {
//      test("Expects p content to change", () => {
//          buttonClick(); // call the function
//          expect(document.getElementById("par") // check id
//              .innerHTML).toEqual("You Clicked"); // result should be
//      });
//  });


 const buttonClick = require("../button");

 beforeAll(() => {
     let fs = require("fs");  //fs is file system handling module to open, read and write 
     let fileContents = fs.readFileSync("index.html", "utf-8");
     document.open(); // attaching to the dom all 3 lines
     document.write(fileContents);
     document.close();
 });
 
 describe("DOM tests", () => {
     test("Expects content to change", () => {
         buttonClick();
         expect(document.getElementById("par")
             .innerHTML).toEqual("You Clicked");
     });
     test("h1 should exist", () => {
         expect(document.getElementsByTagName("h1").length).toBe(1); // 1 because once dom is read all h1 will be stored in array,
         //meaning if one h1 then array has 1 value if 2 h1 then value is 2 so fail in this test
     });
 });
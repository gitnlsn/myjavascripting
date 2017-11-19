
# LEARN YOU THE NODE.JS FOR MUCH WIN!

## FILTERED LS (Exercise 5 of 13)


Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "CHANGELOG.md"                      ==    "CHANGELOG.md"                     
   "LICENCE.md"                        ==    "LICENCE.md"                       
   "README.md"                         ==    "README.md"                        
   ""                                  ==    ""                                 

────────────────────────────────────────────────────────────────────────────────

 ✓

 Submission results match expected

 ✓

 Used asynchronous method: fs.readdir()


# PASS

 Your solution to FILTERED LS passed!

 Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

    var fs = require('fs')
    var path = require('path')
    
    var folder = process.argv[2]
    var ext = '.' + process.argv[3]
    
    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })

─────────────────────────────────────────────────────────────────────────────
 You have 8 challenges left.

 Type 'learnyounode' to show the menu.

─────────────────────────────────────────────────────────────────────────────

  » To print these instructions again, run: learnyounode print
  » To execute your program in a test environment, run: learnyounode run
    program.js
  » To verify your program, run: learnyounode verify program.js
  » For help run: learnyounode help


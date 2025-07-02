import fs from "fs";
import qr from "qr-image";
import inquirer from "inquirer";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "Type your url",
      name: "url",
    }
  ])
  .then((answers) => {
    const url = answers.url;
    var qr_svg=qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr.png"));
    console.log("QR code generated successfully!");

    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



const fs= require("fs");
fs.writefile("Message.txt", "Hello, World!", function(err) {
  if (err) {
    return console.error(err);
  }
  console.log("Message written to file successfully!");
});
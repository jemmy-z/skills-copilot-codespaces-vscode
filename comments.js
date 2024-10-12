// Create web server
// Create a web server that listens on port 3000 and serves back the comments array as JSON
// when someone visits the /comments URL in their browser.
// Remember to use the JSON.stringify function to convert your comments array to a string before you send it back to the user.

const http = require("http")

const comments = [
  { username: "Alice", comment: "I love cats!" },
  { username: "Bob", comment: "Good luck on your project!" },
  { username: "Charlie", comment: "That's a really cool idea!" },
]

const server = http.createServer((req, res) => {
  if (req.url === "/comments") {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(comments))
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" })
    res.end("Not Found")
  }
})

server.listen(3000)
console.log("Server listening on port 3000")

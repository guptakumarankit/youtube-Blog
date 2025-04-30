# ✅ What is Payload?
- Payload is just the data sent by the user to the server.

- When someone fills out a form on a website and clicks "Submit", the information they typed (like name, email, etc.) is the payload.


# Example 

- 🛠️ Node.js Code Example (using Express):
```
    const express = require('express');
    const app = express();

    // This lets Node.js understand JSON payloads
    app.use(express.json());

    app.post('/data', (req, res) => {
    console.log(req.body); // This is the payload
    res.send('Got the payload!');
    });

    app.listen(3000, () => {
    console.log('Server running on port 3000');
    });
```


# Types of Payloads

# 📦 1. JSON Payload
- Used for: Sending structured data (most common)
- Content-Type: application/json

- Example data sent:
```
{
  "name": "Ali",
  "age": 25
}
```
# How to handle in Node.js:
- app.use(express.json());



# 📝 2. Form URL Encoded Payload
- Used for: Simple form data (like login forms)
- Content-Type: application/x-www-form-urlencoded

# Example data sent:

```name=Ali&age=25```
- How to handle in Node.js:
```
app.use(express.urlencoded({ extended: true }));
```
```
Payload Type	        Middleware	        Content-Type	        Use Case
JSON	                express.json()	    application/json	    API data
Form URL Encoded	    express.urlencoded() application/x-www-form-urlencoded	Simple forms
Multipart/Form-Data	 multer 	multipart/form-data	File uploads + form fields
Raw	express.raw()	 application/octet-stream	Binary data
```
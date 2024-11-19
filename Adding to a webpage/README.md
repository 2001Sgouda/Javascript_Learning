# Adding JavaScript to the Webpage

This folder contains examples of integrating JavaScript into an HTML document. It demonstrates two approaches:
1. Using an **external JavaScript file**.
2. Writing **inline JavaScript code** within an HTML document.

---

### 1. `addition.js`

A standalone JavaScript file containing code to manipulate and log an array. We can execute in ide by installing nodejs environment or we can directly run the code in console in browser.

```javascript
let items = ["apple", "orange", "banana"];
console.log(items);
console.log(items.length);

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}
```
#### 2. `ExternalJSexample.html`
An HTML file that links to addition.js to demonstrate the use of an external JavaScript file.

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>External JavaScript Example</title>
  <script src="addition.js"></script>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```
### 3. `InternalJSexample.html`
An HTML file that demonstrates writing JavaScript directly within the `<script>` tag.

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Inline JavaScript Example</title>
</head>
<body>
  <h1>Hello World</h1>
  <script>
    let items = ["apple", "orange", "banana"];
    alert(items);
    alert(items.length);
  </script>
</body>
</html>
```


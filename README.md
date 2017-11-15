# miniquery
Pembuatan library dengan menggunakan vannila javascript   


1. Release 0- Selector library  
Melakukan pencarian by element menggunakan metode querySelector
```
document.querySelector(pointer)
``` 


2. Release 1- DOM Manipulation  
Manipulation DOM hide, show, addClass, removeClass
```js
function hide(pointer){
  let docs = document.querySelectorAll(pointer)
  docs.forEach(d=>{
    d.style.display = 'none'
  })
}

function show(pointer){
  let docs = document.querySelectorAll(pointer)
  docs.forEach(d=>{
    d.style.display = 'inline'
  })
}

function addClass(pointer, newAddClass){
  let docs = document.querySelectorAll(pointer)
  docs.forEach(d=>{
    d.className += ` ${newAddClass}`
  })
}

function removeClass(pointer, newRemoveClass){
  let docs = document.querySelectorAll(pointer)
  docs.forEach(d=>{
    d.className -= ` ${newRemoveClass}`
  })
}
```


3. Release 2-Event Dispatcher  
Merubah event yang ditentukan 
```js
function on(pointer, events, cb){
  let docs = document.querySelectorAll(pointer)
  docs.forEach(d=>{
    d.addEventListener(events, cb)
  })
}
```


4. Release 3- Ajax  
Simple call yang merujuk server lain dengan AJAX javascript
note: server tujuan harus support dengan CORS
```js
function request(obj){
  var request = new XMLHttpRequest();
  request.open(obj.type, obj.url, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var resp = request.responseText;
      obj.success(resp)
    } else {
      obj.fail()
    }
  };
  request.onerror = function() {
    obj.fail()
  };
  request.send();
}

```

5. Release 4- MiniQuery  
Adalah sebuah function dengan meng-instance class baru untuk melakukan chaining method hide(), show(), addClass(pointer, newAddClass), removeClass(pointer, newRemoveClass), on(pointer, events, cb), dan request(obj)
```js
hide()
show()
addClass(pointer, newAddClass)
removeClass(pointer, newRemoveClass)
on(pointer, events, cb)
request(obj)
```

reference: http://youmightnotneedjquery.com/  
:rocket:
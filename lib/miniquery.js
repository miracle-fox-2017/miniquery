/*!
* miniquery
*/

/*
* ----------------------------------------------------------------------------
* Element Selector
* ----------------------------------------------------------------------------
*/
let SweetSelector = {
select: function(data) {
  return document.querySelector(data)
}
};

/*
* -----------------------------------------------------------------------------
* DOM Manipulators
* -----------------------------------------------------------------------------
*/
let DOM = {
 hide: function(data) {
   let loop = document.querySelectorAll(data)
   loop.forEach(lop =>{
     lop.style.display = 'none';
   })

 },
 show: function(data) {
   let loop = document.querySelectorAll(data)
   loop.forEach(lop =>{
     lop.style.display = '';
   })
 },
 removeClass: function(data, input) {
   let loop = document.querySelectorAll(data)
   loop.forEach(lop =>{
     lop.classList.remove(input);
   })

 },
 addClass: function(data, input) {
   let loop = document.querySelectorAll(data)
   loop.forEach(lop =>{
     lop.classList.add(input);
   })
 }
//  DOM.hide('.klass')
//  DOM.show('.klass')
//  DOM.removeClass('.klass', 'shaded')
//  DOM.addClass('.klass', 'shaded')
};

/*
* ----------------------------------------------------------------------------
* Event Dispatcher
* ----------------------------------------------------------------------------
*/
let EventDispatcher = {
on: function(data, kondisi,n) {
  let loop = document.querySelectorAll(data)
  loop.forEach(lop =>{
    lop.addEventListener(kondisi,n);
  })
}
}

/*
* ----------------------------------------------------------------------------
* AJAX Wrapper
* ----------------------------------------------------------------------------
*/
let AjaxWrapper = {
 request: function(data) {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.status === 200 && this.readyState === 4 ) {
       if (data.hasOwnProperty('success')) {
         data.success(this.responseText);
       }
     } else {
       if (data.hasOwnProperty('fail')) {
         data.fail();
       }
     }
   };
   xhttp.open(data.type, data.url, true);
   xhttp.send();
 }
}

/*
* ----------------------------------------------------------------------------
* Alias miniquery
* ----------------------------------------------------------------------------
*/

class Miniquery {
  constructor(data) {
    this.loop = document.querySelectorAll(data);
  }

  hide(){
   this.loop.forEach(lop =>{
     lop.style.display = 'none';
   })
   },
  show() {
    this.loop.forEach(lop =>{
      lop.style.display = '';
    })
  },
  removeClass(input) {
    this.loop.forEach(lop =>{
      lop.classList.remove(input);
    })
  },
  addClass(input) {
    this.loop.forEach(lop =>{
      lop.classList.add(input);
    })
  }
  on(kondisi,n) {
    loop.forEach(lop =>{
      lop.addEventListener(kondisi,n);
    })
  }
  request(data) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.status === 200 && this.readyState === 4 ) {
        if (data.hasOwnProperty('success')) {
          data.success(this.responseText);
        }
      } else {
        if (data.hasOwnProperty('fail')) {
          data.fail();
        }
      }
    };
    xhttp.open(data.type, data.url, true);
    xhttp.send();
  }
}

const miniquery = (data) => {
  return new Miniquery(data)
}

const $ = (data) => {
  return new Miniquery(data)
}

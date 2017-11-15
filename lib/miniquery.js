/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

 class SweetSelector {

   static select(param) {
     if(param[0] == '#') {
       var id = param.slice(1, param.length)
       return document.getElementById(id)
     } else if(param[0] == '.') {
       var classname = param.slice(1, param.length)
       return document.getElementsByClassName(classname)
     } else {
       return document.getElementsByTagName(param)
     }
   }
 }


 class DOM {
   static hide(param) {
     var dom = document.querySelectorAll(param)
     for(var i = 0; i < dom.length; i++) {
       dom[i].style.visibility = "hidden"
     }
   }

   static show(param) {
     var dom = document.querySelectorAll(param)
     for(var i = 0; i < dom.length; i++) {
       dom[i].style.visibility = "visible"
     }
   }

   static addClass(param1, param2) {
     var dom = document.querySelectorAll(param1)
     for(var i = 0; i < dom.length; i++) {
       dom[i].classList.add(param2)
     }
   }

   static removeClass(param1, param2) {
     var dom = document.querySelectorAll(param1)
     for(var i = 0; i < dom.length; i++) {
       dom[i].classList.remove(param2)
     }
   }
 }


 class EventDispatcher {

   static on(param1, even, callback) {
     var dom = document.querySelectorAll(param1)

     for(var i = 0; i < dom.length; i++) {
       dom[i].addEventListener(even, callback)
     }
   }
 }

 class AjaxWrapper {
   static request(obj) {

     var request = new XMLHttpRequest();
     request.open(obj.type, obj.url, true);
     request.send();
     request.onreadystatechange = function() {

       if (request.readyState == 4 && request.status == 200) {
         obj.success(this.responseText)
       }
       else {
         obj.fail()
       }

     }
   }
 }

 function miniquery(queryselector) {
   return new Miniquery(queryselector)
 }

 function $(queryselector) {
   return new Miniquery(queryselector)
 }

 class Miniquery {
   constructor(queryselector) {
     this.elemen = document.querySelectorAll(queryselector)
   }

   hide() {
     for(var i = 0; i < this.elemen.length; i++) {
       this.elemen[i].style.visibility = "hidden"
     }
   }

   show() {
     for(var i = 0; i < this.elemen.length; i++) {
       this.elemen[i].style.visibility = "visible"
     }
   }

   addClass(param2) {
     for(var i = 0; i < this.elemen.length; i++) {
       this.elemen[i].classList.add(param2)
     }
   }

   removeClass(param2) {
     for(var i = 0; i < this.elemen.length; i++) {
       this.elemen[i].classList.remove(param2)
     }
   }

   on(even, callback) {
     for(var i = 0; i < this.elemen.length; i++) {
       this.elemen[i].addEventListener(even, callback)
     }
   }

   request(obj) {
     var request = new XMLHttpRequest();
     request.open(obj.type, obj.url, true);
     request.send();
     request.onreadystatechange = function() {

       if (request.readyState == 4 && request.status == 200) {
         obj.success(this.responseText)
       }
       else {
         obj.fail()
       }
     }
   }
 }

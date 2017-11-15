/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector{
  static select(pointer){
    let result = document.querySelector(pointer)
    return result
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM{
  static hide(pointer){
    let docs = document.querySelectorAll(pointer)
    docs.forEach(d=>{
      d.style.display = 'none'
    })
  }
  
  static show(pointer){
    let docs = document.querySelectorAll(pointer)
    docs.forEach(d=>{
      d.style.display = 'inline'
    })
  }
  
  static addClass(pointer, newAddClass){
    let docs = document.querySelectorAll(pointer)
    docs.forEach(d=>{
      d.className += ` ${newAddClass}`
    })
  }
  
  static removeClass(pointer, newRemoveClass){
    let docs = document.querySelectorAll(pointer)
    docs.forEach(d=>{
      d.className -= ` ${newRemoveClass}`
    })
  }
  
}




/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
class EventDispatcher{
  static on(pointer, events, cb){
    let docs = document.querySelectorAll(pointer)
    docs.forEach(d=>{
      d.addEventListener(events, cb)
    })
  }
}



/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
class AjaxWrapper{
  static request(obj){
    var request = new XMLHttpRequest();
    request.open(obj.type, obj.url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var resp = request.responseText;
        obj.success(resp)
      } else {
        // We reached our target server, but it returned an error
        obj.fail()
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      obj.fail()
    };

    request.send();

  }
}




/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
function miniquery(pointer){
  let docs = new Complete(pointer)
  return docs
}

class Complete{
  constructor(pointer){
    this.pointer = pointer
  }
  
  hide(){
    let docs = document.querySelectorAll(this.pointer)
    docs.forEach(d=>{
      d.style.display = 'none'
    })
  }
  
  show(){
    let docs = document.querySelectorAll(this.pointer)
    docs.forEach(d=>{
      d.style.display = 'inline'
    })
  }
  
}

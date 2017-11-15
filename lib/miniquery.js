/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

class SweetSelector {

  static select (params) {
    if (params[0] === '#') {
       return document.getElementById(params.slice(1))
    } else if (params[0] === '.') {
      console.log('masuik .');
      return document.getElementsByClassName(params.slice(1))
    } else if (params[0] !== '.' && params[0] !== '#') {
      return  document.getElementsByTagName(params)
    }
  }

}


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 //
class DOM {


  static querySel(params) {
    return document.querySelector(params)
  }

  static hide (params) {

    let elem = this.querySel(params)
    return elem.style.visibility='hidden'

  }

  static show (params) {
    let elem = this.querySel
    return elem.style.visibility='visible'
  }

  static removeClass (params, params2) {
    let elem = this.querySel(params).classList.remove(params2)
    console.log(elem);

  }


  static addClass (params, params2) {
    let elem = this.querySel(params).classList.add(params2)
    console.log(elem)
  }

}



/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

 class EventDispatcher {
   static on (params, params1, params2){
     let el = document.querySelectorAll(params)
     el.forEach(item => {
       item.addEventListener(params1, params2)
     })
   }
 }



/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

 class AjaxWrapper {


  static request (obj){

    var requestData = new XMLHttpRequest();

    requestData.open(obj.type, obj.url, true);

    requestData.onload = function() {
      if (requestData.status >= 200 && requestData.status < 400) {

        obj.success(requestData.responseText)

      } else {
        obj.fail
      }
    };
    requestData.onerror = function() {
      // There was a connection error of some sort
      obj.fail()
    };

    requestData.send();

   }
}


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

  function miniquery (params) {
    return new Miniquery (params)
  }

  const $ = function(params){
    return new Miniquery (params)
  }

    class Miniquery {
      constructor (params) {
        this.elem = document.querySelectorAll(params)
      }

      hide () {
        this.elem.forEach(item => {
          item.style.visibility='hidden'
        })
      }

      show () {
        this.elem.forEach(item => {
          item.style.visibility='visible'
        })
      }
    }

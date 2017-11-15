/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
let SweetSelector = {
  select : function(param){
    let first = param.split('')
    if(first[0] === '#'){
      let x = document.querySelector('div' + param)
      let y = x.textContent = 'eyed'
      return y
    }else if(first[0] === '.'){
      let x = document.querySelectorAll(param)
      x.forEach(function(loop){
        loop.textContent = 'klass'
      })
    }else if(first[0] === 'a'){
      let x = document.querySelector(param)
      let y = x.textContent = 'click me'
      return y
    }
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
let DOM = {
  hide : function(param){
    let x = document.querySelectorAll(param)
    // return x.style.display = 'none'
    x.forEach(function(loop){
      loop.style.display = 'none'
    })
  },
  show : function(param){
    let x = document.querySelectorAll(param)
    // return x.style.display = ''
    x.forEach(function(loop){
      loop.style.display = ''
    })
  },
  removeClass : function(param1,param2){
    let x = document.querySelectorAll(param1)
    x.forEach(function(loop){
      if(loop.classList){
        loop.classList.remove(param2)
      }
    })
  },
  addClass : function(param1, param2){
    let x = document.querySelectorAll(param1)
    x.forEach(function(loop){
      if(loop.classList){
        loop.classList.add(param2)
      }else{
        loop.className += '' + className
      }
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
let EventDispatcher = {
  on : function(param1,param2,param3){
    let x = document.querySelectorAll(param1)
    x.forEach(function(loop){
      loop.addEventListener(param2,param3)
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
let AjaxWrapper = {
  request : function(param){
    // console.log(param)
    let oReq = new XMLHttpRequest()
    oReq.addEventListener('load', param.success)
    oReq.addEventListener('error', param.fail)
    oReq.open(param.type, param.url)
    oReq.send()
  }
}

/*
 * ----------------------------------------------------------------------------
 * miniquery
 * ----------------------------------------------------------------------------
 */
let miniquery = function(param){
  return {
    hide : function(){
      DOM.hide(param)
    },
    show : function(){
      DOM.show(param)
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
let $ = miniquery

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
      let x = document.querySelector('div' + param)
      let y = x.textContent = 'klass'
      return y
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
    let x = document.querySelector('div' + param)
    return x.style.display = 'none'
  },
  show : function(param){
    let x = document.querySelector('div' + param)
    return x.style.display = ''
  },
  removeClass : function(param1,param2){
    let x = document.querySelector('div' + param1)
    if(x.classList){
      x.classList.remove(param2)
    }
  },
  addClass : function(param1, param2){
    let x = document.querySelector('div' + param1)
    if(x.classList){
      x.classList.add(param2)
    }else{
      x.className += '' + className
    }
  }
}

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

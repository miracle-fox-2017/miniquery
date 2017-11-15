/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

class SweetSelector {
    static select(input) {
        if (input.slice(0, 1) == '#') {
            return document.getElementById(input.slice(1))
        } else if (input.slice(0, 1) == '.') {
            return document.getElementsByClassName(input.slice(1))
        } else {
            return document.getElementsByTagName(input)
        }
    }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
    static hide(input) {
        let getInput = document.querySelectorAll(input)
        for (let i = 0; i < getInput.length; i++) {
            getInput[i].style.visibility = "hidden"
        }
    }

    static show(input) {
        let getInput = document.querySelectorAll(input)
        for (let i = 0; i < getInput.length; i++) {
            getInput[i].style.visibility = "visible"
        }
    }

    static removeClass(input, removeInput) {
        let getInput = document.querySelectorAll(input)
        for (let i = 0; i < getInput.length; i++) {
            getInput[i].classList.remove(removeInput)
        }
    }

    static addClass(input, addInput) {
        let getInput = document.querySelectorAll(input)
        for (let i = 0; i < getInput.length; i++) {
            getInput[i].classList.add(addInput)
        }
    }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
class EventDispatcher {
    
}


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

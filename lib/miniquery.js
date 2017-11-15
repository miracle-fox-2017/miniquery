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
    static on(className, action, cb) {
        let getInput = document.querySelectorAll(className)
        getInput.forEach((input) => {
            input.addEventListener(action, cb)
        })
    }
}


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
class AjaxWrapper {
    static request(obj) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                obj.success(this.responseText)
            } else {
                obj.fail()
            }
        };
        xhttp.open(obj.type, obj.url, true);
        xhttp.send();


    }

}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

class Miniquery {
    constructor(input) {
        this.input = input
    }
    hide() {
        return DOM.hide(this.input)
    }
    show() {
        return DOM.show(this.input)
    }
}

const miniquery = function (input) {
    return new Miniquery(input)
}

const $ = function (input) {
    return new Miniquery(input)
}
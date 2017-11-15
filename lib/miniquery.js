/*!
 * miniquery
 */


class MiniQuery {
	constructor(domString = '') {
	  this.domString = domString;
	}

	hide() {
		DOM.hide(this.domString);
	}

	show() {
		DOM.show(this.domString);
	}

	addClass(className) {
		DOM.addClass(this.domString, className);
	}

	removeClass(className) {
		DOM.removeClass(this.domString, className);
	}

	on(eventName, eventHandler) {
		EventDispatcher.on(this.domString, eventName, eventHandler)
	}

	ajax(params) {
		AjaxWrapper.request(params);
	}
}


function miniquery(domString) {
	return new MiniQuery(domString);
}

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {
	static select(domString) {
		return document.querySelector(domString);
	}
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
	static hide(domString) {
		document.querySelectorAll(domString).forEach( function(element, index) {
			element.style.display = 'none';
		});
		
	}

	static show(domString) {
		document.querySelectorAll(domString).forEach( function(element, index) {
			element.style.display = 'block';
		});
	}

	static removeClass(domString, className) {
		document.querySelectorAll(domString).forEach( function(el, index) {
			if (el.classList){
				el.classList.remove(className);
			}
		});	
	}

	static addClass(domString, className) {
		document.querySelectorAll(domString).forEach( function(el, index) {
			if (el.classList){
				el.classList.add(className);
			}
		});	
	}
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
class EventDispatcher{
	static on(domString, eventName, eventHandler) {
		document.querySelectorAll(domString).forEach( function(el, index) {
			el.addEventListener(eventName, eventHandler);
		});			
	}
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
class AjaxWrapper {
  static request(params) {
    var request = new XMLHttpRequest();
    request.open(params.type, params.url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var resp = request.responseText;
        params.success(JSON.parse(resp))
      } else {
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = params.fail;
    request.send();
  }
}


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
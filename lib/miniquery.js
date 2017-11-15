/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {

	static select (strInput) {
			let tag = strInput.slice(0,1)
			let name = strInput.slice(1)
			
			if(tag === '#'){
				return document.getElementById(name) 
			}

			if(tag === '.'){
				return document.getElementsByClassName(name)
			}

			return document.getElementsByTagName(strInput)
	}
}


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 class DOM {

 	static hide(strInput) {

		var x = document.querySelectorAll(strInput)

		for(let i=0; i<x.length; i++){
			x[i].style.display = "none";
		}

 	}

 	static show(strInput) {
		var x = document.querySelectorAll(strInput)

		for(let i=0; i<x.length; i++){
			x[i].style.display = "block";
		} 		
 	}

 	static addClass(strInput1, strInput2) {
 		var x = document.querySelectorAll(strInput1)

 		for(let i=0; i<x.length; i++){
			x[i].classList.add(strInput2)
		}
 	}

 	static removeClass(strInput1, strInput2) {
 		var x = document.querySelectorAll(strInput1)

 		for(let i=0; i<x.length; i++){
			x[i].classList.remove(strInput2)
		}
 	}

 }


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

 class EventDispatcher {

 	static on(kelas, event, fungsi) {

  	var x = document.querySelectorAll(kelas)

 		for(let i=0; i<x.length; i++){
			x[i].addEventListener(event, fungsi, false);
		}
 	}

 	static trigger(kelas, event) {
 		var x = document.querySelectorAll(kelas)

 		for(let i=0; i<x.length; i++){
			x[i].dispatchEvent(event);
		}	
 	}

 }


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

 class AjaxWrapper {

 	static request(data) {
 		var xhr = new XMLHttpRequest(),
    method = data.type,
    url = data.url;

		xhr.open(method, url, true)
		xhr.onreadystatechange = function () {
  		if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    		data.success(xhr.status)
  		}else{
  			data.fail()
  		}
		}
		xhr.send();
 	}
 }


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
 class miniquery{

 	constructor(strInput) {
 		this.strInput = SweetSelector.select(strInput)
 	}

 	hide() {

		for(let i=0; i<this.strInput.length; i++){
			this.strInput[i].style.display = "none";
		}

		return this
 	}

 	show() {

		for(let i=0; i<this.strInput.length; i++){
			this.strInput[i].style.display = "block";
		}

		return this 		
 	}

 	addClass(strInput2) {

 		for(let i=0; i<this.strInput.length; i++){
			this.strInput[i].classList.add(strInput2)
		}

		return this
 	}

 	removeClass(strInput2) {

 		for(let i=0; i<this.strInput.length; i++){
			this.strInput[i].classList.remove(strInput2)
		}

		return this
 	}

 }

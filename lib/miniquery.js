 class SweetSelector{
 	static select(query){
 		return document.querySelector(query)
 	}
 }

 class DOM{
 	static hide(query){
 		let klasses = document.querySelectorAll(query)
 		klasses.forEach(klass => {
 			klass.style.display = "none";
 		})
 	}	
 	static show(query){
 		let klasses = document.querySelectorAll(query)
 		klasses.forEach(klass => {
 			klass.style.display = "block";
 		})
 	}

 	static addClass(query, addKlass){
 		let klasses = document.querySelectorAll(query)
 		console.log(query)
 		klasses.forEach(klass => {
 			if(klass.classList) {
 				klass.classList.add(addKlass);
 			}
 		})		
 	}

 	static removeClass(query, rmvKlass){
 		let klasses = document.querySelectorAll(query)
 		console.log(query)
 		klasses.forEach(klass => {
 			if (klass.classList)
 				klass.classList.remove(rmvKlass);
 			else
 				klass.rmvKlass = klass.rmvKlass.replace(new RegExp('(^|\\b)' + rmvKlass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
 		})		
 	}	 	 	
 }

 class EventDispatcher{
 	static on(query, eventName, eventHandler){
 		let klasses = document.querySelectorAll(query)
 		klasses.forEach(klass => {
 			klass.addEventListener(eventName, eventHandler());	
 		})
 	}	 	
 }

 class AjaxWrapper{
 	static request(ajax){
	let request = new XMLHttpRequest(); 
	request.open(ajax.type , ajax.url , true);

	request.onload = function() {
	  if (request.status >= 200 && request.status < 400) {
	    // Success!
	    var resp = request.responseText;
	    ajax.success(JSON.parse(resp))
	  } else {
	    // We reached our target server, but it returned an error

	  }
	};	
	request.onerror = function() {
	  // There was a connection error of some sort
	};	
		request.send();			
 	}	 
 } 

 class Miniquery{
 	constructor(select){
 		this.select = select;
 	}

 	hide(){
 		DOM.hide(this.select);
 	}	
 	show(){
 		DOM.show(this.select);
 	}

 	addClass(addKlass){
 		DOM.addClass(this.select,addKlass)
 	}

 	removeClass(rmvKlass){
		DOM.removeClass(this.select, rmvKlass)	
 	}	 	 	

 	on(eventName, eventHandler){
 		EventDispatcher.on(this.select, eventName, eventHandler)
 	}	 	


 	ajax(ajaxObj){
		AjaxWrapper.request(ajaxObj)	
	}	 	
}


function miniquery(select) {
	
	return new Miniquery(select);
}


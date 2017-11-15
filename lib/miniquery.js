/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 class SweetSelector{
     static select(element){
         if(element[0] == "#"){
             return document.getElementById(element.substr(1));
         }else{
             return document.querySelectorAll(element);
         }
     }
 }

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 class DOM{
     static hide(element){
         SweetSelector.select(element).forEach((dom)=>{
             dom.style.display="none";
         });
     }
     static show(element){
         SweetSelector.select(element).forEach((dom)=>{
             dom.style.display="block";
         });
     }
     static removeClass(element,classes){
         SweetSelector.select(element).forEach((dom)=>{
             dom.classList.remove(classes);
         });
     }
     static addClass(element,classes){
         SweetSelector.select(element).forEach((dom)=>{
             dom.classList.add(classes);
         });
     }
 }


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
 class EventDispatcher{
     static on(element,eventTrigger,callback){
         SweetSelector.select(element).forEach((dom)=>{
             dom.addEventListener(eventTrigger,callback);
         });
     }
 }


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
class AjaxWrapper{
    static request(url,type,success,error){
        const xhttp=new XMLHttpRequest();
        xhttp.open(type,url,true);
        xhttp.onload=function(){
            if(request.status >= 200 && request.status < 400){
                success(xhttp.responseText);
            }else{
                error();
            }
        }
        xhttp.send();
    }
}


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
const miniquery=(element)=>{
    return new Transition(SweetSelector.select(element));
}

class Transition{
    constructor(element){
        this.element=element
    }
    show(){
        this.element.style.display="block";
    }
    hide(){
        this.element.style.display="none";
    }
}

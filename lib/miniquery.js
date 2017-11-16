/*!
* miniquery
*/

/*
* ----------------------------------------------------------------------------
* Element Selector
* ----------------------------------------------------------------------------
*/
class SweetSelector {
  static select (param) {
    return document.querySelector(param);
  }
}

/*
* -----------------------------------------------------------------------------
* DOM Manipulators
* -----------------------------------------------------------------------------
*/
class DOM {
  static hide (param) {
    let data = document.querySelectorAll(param);
    data.forEach(row => {
      row.style.visibility = 'hidden';
    });
    // console.log('hide');
  }

  static show (param) {
    let data = document.querySelectorAll(param);
    data.forEach(row => {
      row.style.visibility = 'visible';
    });
    // console.log('show');
  }

  static addClass (param, style) {
    let data = document.querySelectorAll(param);
    data.forEach(row => {
      row.classList.add(style);
    });
    // console.log('addClass');
  }

  static removeClass (param, style) {
    let data = document.querySelectorAll(param);
    data.forEach(row => {
      row.classList.remove(style);
    });
    // console.log('removeClass');
  }
}

/*
* ----------------------------------------------------------------------------
* Event Dispatcher
* ----------------------------------------------------------------------------
*/
class EventDispatcher {
  static on (param, param2, cb) {
    let data = document.querySelectorAll(param);
    data.forEach(row => {
      row.addEventListener(param2, cb);
    });
  }
}

/*
* ----------------------------------------------------------------------------
* AJAX Wrapper
* ----------------------------------------------------------------------------
*/
class AjaxWrapper {
  static request (data) {
    var request = new XMLHttpRequest();
    request.open(data.type, data.url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        return data.success(data.url)
      } else {
        // We reached our target server, but it returned an error
        return data.fail()
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      return data.fail()
    };

    request.send();
  }
}




/*
* ----------------------------------------------------------------------------
* Alias miniquery
* ----------------------------------------------------------------------------
*/

class Miniquery {
  constructor (param) {
    this.data = document.querySelectorAll(param);
  }

  select () {
    return this.data;
  }

  hide () {
    this.data.forEach(row => {
      row.style.visibility = 'hidden';
    });
    // console.log('hide');
  }

  show () {
    this.data.forEach(row => {
      row.style.visibility = 'visible';
    });
    // console.log('show');
  }

  addClass (style) {
    this.data.forEach(row => {
      row.classList.add(style);
    });
    // console.log('addClass');
  }

  removeClass (style) {
    this.data.forEach(row => {
      row.classList.remove(style);
    });
    // console.log('removeClass');
  }

  on (param2, cb) {
    this.data.forEach(row => {
      row.addEventListener(param2, cb);
    });
  }

  request (data) {
    var request = new XMLHttpRequest();
    request.open(data.type, data.url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        return data.success(data.url)
      } else {
        // We reached our target server, but it returned an error
        return data.fail()
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      return data.fail()
    };

    request.send();
  }
}

let miniquery = (param) => {
  return new Miniquery(param);
}

let $ = (param) => {
  return new Miniquery(param);
}

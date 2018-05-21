window.MeowScript = {};

MeowScript.__start = new Date().getTime();
MeowScript.__waitStart = new Date().getTime();
MeowScript.CaretVisible = true;
MeowScript.__scriptarray = [];
MeowScript.__waitMillis = 0;
MeowScript.__inputWait = false;
MeowScript.__inputParameter = "";

MeowScript.__getWaitMillis = function() {
  return new Date().getTime() - __waitStart;
}

// Function from https://stackoverflow.com/questions/10149963/adding-event-listener-cross-browser
// add event cross browser
window.MeowScript.__addEvent = function(elem, event, fn) {
    // avoid memory overhead of new anonymous functions for every event handler that's installed
    // by using local functions
    function listenHandler(e) {
        var ret = fn.apply(this, arguments);
        if (ret === false) {
            e.stopPropagation();
            e.preventDefault();
        }
        return(ret);
    }

    function attachHandler() {
        // set the this pointer same as addEventListener when fn is called
        // and make sure the event is passed to the fn also so that works the same too
        var ret = fn.call(elem, window.event);   
        if (ret === false) {
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
        return(ret);
    }

    if (elem.addEventListener) {
        elem.addEventListener(event, listenHandler, false);
        return {elem: elem, handler: listenHandler, event: event};
    } else {
        elem.attachEvent("on" + event, attachHandler);
        return {elem: elem, handler: attachHandler, event: event};
    }
}

function removeEvent(token) {
    if (token.elem.removeEventListener) {
        token.elem.removeEventListener(token.event, token.handler);
    } else {
        token.elem.detachEvent("on" + token.event, token.handler);
    }
}

MeowScript.__createButton = function(text, id) {
  var button = document.createElement("a");
  button.appendChild(document.createTextNode(text));
  MeowScript.__addEvent(button, "click", function() { MeowScript.__inputParameter = id; MeowScript.__inputWait = false; });
}

class ScriptInstruction {
  constructor(instruction, parameter="") {
    this.instruction = instruction;
    this.parameter = parameter;
  }
  
  execute() {
    if (MeowScript.__waitMillis > 0 && (MeowScript.__getWaitMillis() < MeowScript.__waitMillis)) {
      return;
    }
    
    switch (this.instruction) {
      case 'print':
        document.getElementById("text").innerText += this.parameter;
        break;
      
      case 'wait':
        MeowScript.__waitStart = new Date().getTime();
        MeowScript.__waitMillis = parseInt(this.parameter)
        break;
      
      case 'clear':
        document.getElementById("text").innerText = "";
        break;
        
      case 'input':
        MeowScript.__inputWait = true;
        var buttons = this.parameter.split(",");
        for (var i = 0; i < buttons.length; i++) {
          MeowScript
        }
    }
  }
}

MeowScript.ParseScript(script) {
  
}

MeowScript.__millis = function() {
  return new Date().getTime() - __start;
}

MeowScript.__flash() {
  CaretVisible = !CaretVisible;
  document.getElementById("caret").style.display = CaretVisible ? (document.hasFocus() ? "inline" : "none") : "none";
}

setInterval(flash, 500);

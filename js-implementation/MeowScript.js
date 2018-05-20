var start = new Date().getTime();
var waitStart = new Date().getTime();
var caretVisible = true;
var scriptarray = [];
var waitMillis = 0;
var inputWait = false;

function GetWaitMillis() {
  return new Date().getTime() - waitStart;
}

function createButton(text) {
  var button = document.createElement("a");
  button.appendChild(document.createTextNode(text))
}

class ScriptInstruction {
  constructor(instruction, parameter="") {
    this.instruction = instruction;
    this.parameter = parameter;
  }
  
  execute() {
    if (waitMillis > 0 && (GetWaitMillis() < waitMillis)) {
      return;
    }
    
    switch (this.instruction) {
      case 'print':
        document.getElementById("text").innerText += this.parameter;
        break;
      
      case 'wait':
        waitStart = new Date().getTime();
        waitMillis = parseInt(this.parameter)
        break;
      
      case 'clear':
        document.getElementById("text").innerText = "";
        break;
        
      case 'input':
        inputWait = true;
        var buttons = this.parameter.split(",");
        for (var i = 0; i < buttons.length; i++) {
          
        }
    }
  }
}

function parsescript(script) {
  
}

function millis() {
  return new Date().getTime() - start;
}

function flash() {
  caretVisible = !caretVisible;
  document.getElementById("caret").style.display = caretVisible ? (document.hasFocus() ? "inline" : "none") : "none";
}

setInterval(flash, 500);

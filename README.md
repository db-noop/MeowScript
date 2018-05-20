The Definitive MeowScript reference
  
# How to write a MeowScript program
## Comments
Comments in MeowScript are defined with the c| Pipe Operator (see Pipe Operators below)

## Instructions
The primary MeowScript instructions are:
### 'clear':
Clears the game console. This instruction takes no parameters.

### 'input':
Renders buttons in the game console represented in this format:
*message*,*id*;
This instruction will wait for the user's response, and run the next instruction with a parameter of the ID of the button clicked.

### 'print'
Prints *parameter* in the game console.

### 'wait'
Waits *parameter* milliseconds

## Variables
### 'var' instruction
Variables are declared with the var instruction. It takes the name as a parameter.

### 'assign' instruction
Variables are assigned the empty string by default. 'assign' takes the variable name and the new value as a parameter in the format  
*variable name* *new value*

### Referencing variables
Variables are referenced with the v| pipe operator (see Pipe Operators below)  
example program:
```
var greeting
assign greeting Hellos|World
print v|greeting
```

## Pipe Operators
Pipe Operators are operators used to do special stuff. Their purpose is to never be mistaken as parameters or instructions.  
The Pipe Operators are:  
v|*variable name* - references a variable  
u|*4 hexadecimal digits* - gets a unicode character
c|*comment* - comment

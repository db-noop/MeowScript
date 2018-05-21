# The Definitive MeowScript reference
  
## How to write a MeowScript program
### Style
Double quotes (**"**) and single quotes (**'**) are ignored. If they are needed in text, use the q|single or q|double pipe operators to generate respectively, single and double quotes.

### Comments
Comments in MeowScript are defined with the c| Pipe Operator (see Pipe Operators below)

### Instructions
The primary MeowScript instructions are:
#### 'clear':
Clears the console. This instruction takes no parameters.

#### 'input':
Renders buttons in a popup box represented in this format:
*message*,*id* with semicolons separating buttons.
This instruction will wait for the user's response, and run the next instruction with a parameter of the ID of the button clicked.  
If the distribution of MeowScript does not support GUI, a simple enter character to select method may be used.

#### 'print'
Prints *parameter* in the game console.

#### 'wait'
Waits *parameter* milliseconds

### Variables
#### 'var' instruction
Variables are declared with the var instruction. It takes the name as a parameter.

#### 'assign' instruction
Variables are assigned the empty string by default. 'assign' takes the variable name and the new value as a parameter in the format  
*variable name* *new value*

#### Referencing variables
Variables are referenced with the v| pipe operator (see Pipe Operators below)  
example program:
```
var greeting
assign greeting Hello World
print v|greeting
```

#### Local Variable Storage

### Pipe Operators
Pipe Operators are operators used to do special stuff. Their purpose is to never be mistaken as parameters or instructions.  
The Pipe Operators are:  
v|*variable name* - references a variable  
l|*variable name* - references a locally stored variable
u|*4 hexadecimal digits* - gets a unicode character  
c|*comment* - comment  
q|*__double__ or __single__* - creates literal single or double quotes, since MeowScript ignores quotes.

# technicalTest-INGO
Function that receives as parameter a string with an hour and returns the hour as a text.

## Requirements 
* Node.js
## Execution
This is a Node project, to execute follow this instructions:
* Step 1: Download the project
* Step 2: Open a text editor (e.g Visual Studio Code) with the downloaded project 
* Step 3: Install dependencies with the command:
```bash
npm install
```
* Step 4 : Change the parameter in the file pruebaTecnica-LerySanchezCalderon.js : console.log(clock(parameter)) with the hour that you wish
* Step 5: Execute in terminal:
```bash
npm start
```

## Testing
For more convenient testing a testing file was developed using the jasmine testing framework.
To execute:
```bash
npm test
```
## Implemented function information
 ### Parameters
* One string with the format:  **hour:minutes(am/pm)**
> Example: '2:34pm' 

### Output
* String with the result according to the parameter 
>Example: 'Son las dos y treinta y cuatro de la tarde'

### Restrictions
The parameter must:
* Be string
* Be the format hour:minutesam/pm
* Hour must be an number between one and twelve
* Minutes must be an number between zero and fifty nine
* After minutes only add am or pm

 >*Made with JavaScript*


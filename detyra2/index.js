const readline = require('readline');
const CommandFactory = require('./Factories');
const Matrix = require('./Matrix');

let matrix;

const validate = (val) => {// allow only positive values 
    if(val >= 0) {
        return val;
    }
    throw Error('Not a valid number');
}

var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Set matrix width, height and init object position x,y: ');
rl.prompt();
rl.on('line', (line) => {
    if (!matrix) {
        try {
            const inputParams = line.split(',')
                                        .map(val => parseInt(val))// convert to int
                                        .map(val => validate(val)); // throw if the are negative numbers
            if(inputParams.length === 4) { // if we have valid parameters
                const [ width, height, x, y ] = inputParams;
                // we create Matrix object with the width and height
                matrix = new Matrix(width, height);
                // we set init position of object
                matrix.initObjectPosition(x, y);
                rl.setPrompt('Add simulation commands: ');
            } else { // we dont have right nr of parameters
                rl.setPrompt('Please add valid parameter like 4,4,2,2');
            }
        } catch (error) {
            rl.setPrompt(error.message, 'Please add valid parameter like 4,4,2,2');
        }
    }
    else if (line === "0") { // if we just type 0 then we exit
        rl.close();
    } else {
        line.split(',')
            .map(cmdText => CommandFactory.getCmd(cmdText))
            .forEach(cmd => {
                if(cmd) {
                    matrix.applyCommand(cmd);
                } else {
                    rl.close();
                }
            });
        rl.setPrompt('Add simulation commands: ');
    }
    rl.prompt();
}).on('close',function(){
    console.log('result => ', matrix.objectPosition);
    process.exit(0);
});
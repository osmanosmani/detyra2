
const MC = require('./Commands/MovingCommands');
const OC = require('./Commands/OrientationCommands');

class CommandFactory {
    // base on input we create commands
    static getCmd(cmdText) {
        if (cmdText === '0') {
            return null; // if 0 then we exit application
        }
        if (cmdText === '1') {
            return new MC.MoveForward();
        }        
        if (cmdText === '2') {
            return new MC.MoveBackward();
        }
        if (cmdText === '3') {
            return new OC.RotateClockwise();
        }
        if (cmdText === '4') {
            return new OC.RotateCounterClockwise();
        }
    }
}

module.exports = CommandFactory;
const Position = require('./Position');
const MC = require('./Commands/MovingCommands');
const OC = require('./Commands/OrientationCommands');
const CONSTANTS = require('./Constatns');

class Matrix {

    //Add init width and height of matrix
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.movingOrientation = CONSTANTS.ORIENTATION.NORTH; // default orientation north
    }

    // if this is called for second time we throw exception because
    //we allow only first time set position manually
    initObjectPosition(x, y) {
        if (this.object) {
            throw Error(" Object has already init position set");
        }
        this.object = new Position(x, y);
    }

    //get current object position
    get objectPosition() {
        return [this.object.x, this.object.y];
    }

    // check if you can place object in position in matrix
    canBePlacedInMatrix(x, y) {
        if ((x > this.width || x < 0) || (y > this.height || y < 0)) { // object is not in matrix
            return false;
        }
        return true;
    }

    //apply commands
    applyCommand(cmd) {
        if(cmd instanceof MC.MovingCommand) {
            const position = cmd.getNewPosition(this.object, this.movingOrientation);
            if (this.canBePlacedInMatrix(position.x, position.y)) { //set new position 
                this.object = position;
            } else { // if is outside matrix return negative position
                this.object = new Position(-1, -1);
            }
        } else if (cmd instanceof OC.OrientationCommand) { // change orientation
            this.movingOrientation = cmd.getNewDirection(this.movingOrientation);
        }
    }
}

module.exports = Matrix;
const CONSTANTS = require('../Constatns');
const Position = require('../Position');

//Base class for moving commands
class MovingCommand {
    //this must be override in inherited class
    calculateNewPosition(x, y, orientation) {
        return {x, y}; // if is not implemented then just return same value
    }
}

//this represent command 1
class MoveForward extends MovingCommand {
    constructor() {
        super();
    }

    calculateNewPosition(x, y, orientation) {
        if(orientation === CONSTANTS.ORIENTATION.NORTH) {
            return { x , y: y - 1 };
        }
        if(orientation === CONSTANTS.ORIENTATION.SOUTH) {
            return { x: x + 1 , y };
        }
        if(orientation === CONSTANTS.ORIENTATION.EAST) {
            return { x: x + 1 , y };
        }
        if(orientation === CONSTANTS.ORIENTATION.WEST) {
            return { x: x - 1 , y };
        }
    }

    getNewPosition(position, orientation) {
        const {x, y} = this.calculateNewPosition(position.x, position.y, orientation)
        return new Position(x, y);
    }
}

//this represent command 2
class MoveBackward extends MovingCommand {
    constructor() {
        super();
    }

    calculateNewPosition(x, y, orientation) {
        if(orientation === CONSTANTS.ORIENTATION.NORTH) {
            return { x , y: y + 1 };
        }
        if(orientation === CONSTANTS.ORIENTATION.SOUTH) {
            return { x: x - 1 , y };
        }
        if(orientation === CONSTANTS.ORIENTATION.EAST) {
            return { x: x - 1 , y: y };
        }
        if(orientation === CONSTANTS.ORIENTATION.WEST) {
            return { x: x + 1 , y: y };
        }
    }

    getNewPosition(position, orientation) {
        const {x, y} = this.calculateNewPosition(position.x, position.y, orientation)
        return new Position(x, y);
    }
}

module.exports = {
    MovingCommand,
    MoveForward,
    MoveBackward
}
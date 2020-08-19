const CONSTANTS = require('../Constatns');

//Base class for Orientation commands
class OrientationCommand {}

//this represent command 3
class RotateClockwise extends OrientationCommand {
    getNewDirection(direction) {
        if(direction === CONSTANTS.ORIENTATION.NORTH) {
            return CONSTANTS.ORIENTATION.EAST;
        } else if(direction === CONSTANTS.ORIENTATION.EAST) {
            return CONSTANTS.ORIENTATION.SOUTH;
        } else if(direction === CONSTANTS.ORIENTATION.SOUTH) {
            return CONSTANTS.ORIENTATION.WEST;
        }
        return CONSTANTS.ORIENTATION.NORTH; // default NORTH
    }
}

//this represent command 4
class RotateCounterClockwise extends OrientationCommand {
    getNewDirection(direction) {
        if(direction === CONSTANTS.ORIENTATION.NORTH) {
            return CONSTANTS.ORIENTATION.WEST;
        } else if(direction === CONSTANTS.ORIENTATION.WEST) {
            return CONSTANTS.ORIENTATION.SOUTH;
        } else if(direction === CONSTANTS.ORIENTATION.SOUTH) {
            return CONSTANTS.ORIENTATION.EAST;
        }
        return CONSTANTS.ORIENTATION.NORTH; // default north
    }
}

module.exports = {
    OrientationCommand,
    RotateClockwise,
    RotateCounterClockwise
}
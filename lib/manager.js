const employee = require('./employee');

// per ReadMe add officeNumber/getRole to manager
class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber;
    }

    getRole() { 
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = manager;
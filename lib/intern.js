const employee = require('./employee');

// per ReadMe add school/getSchool/getRole to intern
class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

}


module.exports = intern;
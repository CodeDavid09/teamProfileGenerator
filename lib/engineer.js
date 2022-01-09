const employee = require('./employee');

// per ReadME add github/getRole/getGithub to engineer
class engineer extends employee {
    constructor(name, id, email, github) {
        // if I want to use this within a constructor I first need to call super, 
        // otherwise this will not yet be initialized (throwing a ReferenceError)
        super(name, id, email, github);
        this.github = github;
    }

    getRoles() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }

}

module.exports = engineer;
const axios = require('axios');

class CloseIssueAction {
    constructor (owner, repo, issue, token) {
      this.owner = owner;
      this.repo = repo;
      this.issue = issue;
      this.token = token;
    }

    async execute() {
        let config = {
            headers: {
            'Authorization': `token ${this.token}`,
            }
        }

        let data = {
            'state': 'closed'
        }
        const response = await axios.patch(`https://api.github.com/repos/${this.owner}/${this.repo}/issues/${this.issue}`, data, config);
        console.log(`Got for ${this.issue}: ${response.status}`)
    }
}

module.exports = CloseIssueAction;

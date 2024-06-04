const core = require("@actions/core");
const shelljs = require("shelljs");

async function run() {
  try {
    Object.assign(shelljs.env, process.env);

    console.log(shelljs.env)

    const ghMembers = shelljs.exec(
      `gh api --paginate -X GET /orgs/nba-js/teams/ApproveTeam/members?role=all`
    );

    console.log(ghMembers)

    const members = JSON.parse(ghMembers.stdout).map((item) => item.login);

    console.log("members", members);

    core.setOutput("members", releaseType);
  } catch (error) {
    console.log(error);
    core.setFailed(error.message);
  }
}

if (require.main === module) {
  run();
}

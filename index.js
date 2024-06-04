const core = require("@actions/core");
const github = require('@actions/github')

async function run() {
  try {
    console.log(github.context)

    console.log(core.event)

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

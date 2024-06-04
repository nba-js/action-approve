const core = require("@actions/core");
const github = require('@actions/github')

async function run() {
  try {
    console.log(github.context)

    console.log(github.event)

  } catch (error) {
    console.log(error);
    core.setFailed(error.message);
  }
}

if (require.main === module) {
  run();
}

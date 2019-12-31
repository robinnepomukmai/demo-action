import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const input = core.getInput('who-to-greet')
    core.setOutput('greeting', `hello ${input}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

import * as core from '@actions/core'

async function runAction(): Promise<void> {
  try {
    const input = core.getInput('who-to-greet')
    core.setOutput('greeting', `hello ${input}`)
    // eslint-disable-next-line no-console
    console.log(`hello ${input}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

runAction()

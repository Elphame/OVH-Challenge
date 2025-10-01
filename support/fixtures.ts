import { test as base, createBdd } from 'playwright-bdd'
import { World } from './world'

export const test = base.extend<{ world: World }> ({
  world: async ({ page }, use, testInfo) => {
    
  const world = new World(page)

    await use(world)
  },
})

export const { Given, When, Then, BeforeScenario, AfterScenario, Before } =
  createBdd(test, {
    worldFixture: 'world',
  })

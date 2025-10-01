import { defineParameterType } from 'playwright-bdd'

// this parameter can convert possibility verb in boolean like:
// - should
// - shouldnot
defineParameterType({
  name: 'possibility',
  regexp: /should|shouldnot/,
  transformer(possibility: string) {
    return (
      possibility === 'should'
    )
  },
})
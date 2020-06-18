var array = require('../testAssests/wizardAssets')
var wizard = {}
module.exports = {
    beforeEach: browser => {
        wizard = browser.page.wizardPage()
        wizard
            .navigate()
    },
    after: browser => {
        browser.end()
    },

    'Test Run': browser => {
        array.forEach(test => {
            wizard.search(test)
        })

    }
}
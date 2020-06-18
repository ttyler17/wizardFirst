var wizardCommands = {
    search: function(data){
        this
            .verify.visible('@hdr')
            .click('@nxtBtn')
            .pause(500)
            .click('@drop1')
            .click('@drop2')
            .click('@nxtBtn')
            .setValue('@input', data.city)
            .click('@nxtBtn')
            .click('@propBtn')
            .click('@yesBtn')
            .click('@yesBtn')
            .setValue('@price', data.price)
            .setValue('@down', data.dwn)
            .click('@nxtBtn')
            .click('@excBtn')
            .click('@noBankBtn')
            .setValue('@address1', data.address)
            .setValue('@address3', data.zip)
            .click('@nxtBtn')
            .setValue('@first', data.first)
            .setValue('@last', data.last)
            .click('@nxtBtn')
            .verify.visible('@againBtn')
            .click('@againBtn')
        return this    
    }
}


module.exports = {
    url: 'http://localhost:3000/#/',
    commands: [wizardCommands],
    elements: {
        nxtBtn: 'button[name="nextButton"]', 
        input: 'input', 
        drop1: 'select[id="loanTypes"] option[value="Home Purchase"]',
        drop2: 'select[id="propertyTypes"] option[value="Single Family Home"]',
        propBtn: 'button[value="Primary Home"]',
        yesBtn: 'button[name="yesButton"]',
        noBtn: 'button[name="noButton"]',
        price: 'input[name="price"]',
        down: 'input[name="down"]',
        excBtn: 'button[value="excellent"]',
        noBankBtn: 'button[value="Has never been in bankruptcy"]',
        address1: 'input[id="addressOne"]',
        address3: 'input[id="addressThree"]',
        first: 'input[id="first"]',
        last: 'input[id="last"]',
        againBtn: 'button[name="restartButton"]',
        hdr: 'h1.home-text',

    }
}
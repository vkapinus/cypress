// <reference types='cypress' />
let logo ='div.logotype'
let searchWord = 'Утюг'
let searchFrame = '[id^=j-search]'
let searchButton = 'button[name="sa"]'
let resultHeader = 'div.b-content > h1'
let itemName = 'span.result__name'
let titles = new Array();


describe('SearchTest', () => {
    it('Search word', () => {
        cy.visit("https://www.21vek.by/")
        cy.get(logo).should('be.visible')
        cy.get(searchFrame).type(searchWord)
        cy.get(searchButton).click()
        cy.get(resultHeader).should('be.visible')
        cy.get(itemName).should('contain', searchWord)
    })
})
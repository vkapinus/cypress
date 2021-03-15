let logo ='h1.logotype'
let searchWord = 'Утюг'
let searchFrame = '[id^=j-search]'
let searchButton = 'button[name="sa"]'
let itemName = 'span.result__name'
describe("Search", function() {
    it("Search word", function() {
        cy.visit("https://www.21vek.by/")
        cy.get(searchFrame).type(searchWord)
        cy.get(searchButton).click()
        cy.get(itemName).should('contain', searchWord)
    })
})
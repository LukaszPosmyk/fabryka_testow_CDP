describe('finding elements by text', () => {
    beforeEach(() => {
      cy.visit('https://fabrykatestow.pl/')
    })
  

  it('find Newsletter in menu', () => {
    cy.get('a').contains('Newsletter')
  })

  it('find Webinary in menu', () => {
    cy.get('a').contains('Webinary')
  })

  it('find Koszulki in menu', () => {
    cy.get('a').contains('Koszulki')
  })

  it('find Darmowe dokumenty in menu', () => {
    cy.get('a').contains('Darmowe dokumenty')
  })

  it('find Kontakt in menu', () => {
    cy.get('a').contains('Kontakt')
  })



  
})

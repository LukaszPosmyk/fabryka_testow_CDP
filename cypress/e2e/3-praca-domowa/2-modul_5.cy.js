describe('modul5', () => {
  
    it('should visit element and take screenchot', () => {

      cy.visit('https://fabrykatestow.pl/')
      cy.get('.elementor-button-link').first().click({force:true})
      cy.get('section[data-id="2d7d28f4"]').scrollIntoView().screenshot('screen-modul5')
      
    })

})
  
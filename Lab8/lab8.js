function createHamburger() {
    // Retrieve values from the input fields
    var options = {
      buns: document.getElementById('buns').value || 'Regular buns',
      garnish: document.getElementById('garnish').value || 'Lettuce, tomato, and onion',
      cheese: document.getElementById('cheese').value || 'Cheddar cheese',
      sauce: document.getElementById('sauce').value || 'Ketchup and mayonnaise',
      patty: document.getElementById('patty').value || 'Beef patty',
      patties: parseInt(document.getElementById('patties').value) || 1,
      additionalToppings: document.getElementById('additionalToppings').value.split(',').map(item => item.trim()).filter(Boolean)
    };

    // Create the hamburger object with the chosen options
    var hamburger = {
      buns: options.buns,
      garnish: options.garnish,
      cheese: options.cheese,
      sauce: options.sauce,
      patty: options.patty,
      patties: options.patties,
      additionalToppings: options.additionalToppings
    };

    // Generate the description of the hamburger
    hamburger.getDescription = function() {
      var description = "Here's your delicious hamburger: ";
      description += hamburger.patties > 1 ? hamburger.patties + "-patty " : "";
      description += hamburger.patty + " burger with ";
      description += hamburger.buns + ", topped with ";
      description += hamburger.garnish + ", " + hamburger.cheese + ", and ";
      description += hamburger.sauce;

      if (hamburger.additionalToppings.length > 0) {
        description += ", and additional toppings: " + hamburger.additionalToppings.join(", ");
      }

      description += ".";

      return description;
    };

    // Get the description and display it
    var description = hamburger.getDescription();
    var output = document.getElementById('description');
    output.textContent = description;
  }
const shoppingFormEl = $('#shopping-form');
const shoppingListEl = $('#shopping-list');
<<<<<<< HEAD
const userItem = $('#shopping-input')

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

const handleSubmit = function (event) {
    event.preventDefault()
    
    const item = $('<li>')
    item.text(userItem.val())
    shoppingListEl.append(item)

    $('input[type="text"]').val('')

}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('click', handleSubmit)
=======

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
>>>>>>> c7636dc67ef98ece8fc11f8c979d38ca6b8dcd7d

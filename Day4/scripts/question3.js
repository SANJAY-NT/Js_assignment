var ingredients = [ 
    { name: 'potatoes', quantity: 4 },
    { name: 'butter', quantity: 1 },
    { name: 'milk', quantity: 1, description: '1 cup' },
    { name: 'potatoes', quantity: 3 },
    { name: 'oil', quantity: 1, description: '3 cups' } ];
  
  const shoppingList = [];
  
  for (let i = 0; i < ingredients.length; i ++) {
    for (let j = 0; j < shoppingList.length; j ++){
      let ingredient = ingredients[i];
      let shoppingListItem = shoppingList[j];
      if(ingredient === shoppingListItem){
        break;
      }else if (roughDraftItem.name === shoppingListItem.name){
        shoppingListItem.quantity += roughDraftItem.quantity;
        } else {shoppingList.push(roughDraftItem);
          }
      }
    }
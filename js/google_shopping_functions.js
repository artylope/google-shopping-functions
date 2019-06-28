
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */

// getItems(objectData)


function getItemsCount(itemData) {
  return itemData.items.length;
}


// get items



var getItems = function(objectData){
  var i =0;
  while (i < objectData.items.length){
    console.log(objectData.items[i]);
    i++;
  }
  console.log("done");
}



// get items by brand
// var getItemsByBrand = function(items,brand){
//   var itemsByBrand = [];
//   var i =0;
//   while (i < items.items.length){
//     if (items.items[i].product.brand === brand ){
//       itemsByBrand.push(items.items[i].product.title);
//       // var itemsBy[i] = [];
//       // console.log(itemBy[i]);
//     }
//     i++;
//   }
//   console.log(itemsByBrand);
// }

// get items by brand
var getItemsByBrand = function(items,brand){
  var itemsByBrand = [];
  for (var i = 0; i < items.items.length; i++){
    if (items.items[i].product.brand === brand ){
      itemsByBrand.push(items.items[i].product.title);
      console.log(items.items[i].product.title);
      // var itemsBy[i] = [];
      // console.log(itemBy[i]);
    }
  }
  return itemsByBrand;
}

// var itemsByCanon = getItemsByBrand(products, "Canon");

// get items by brand

// get items by author
// var getItemsByAuthor = function(items,author){
//   var itemsByAuthor = [];
//   for (var i = 0; i < items.items.length; i++){
//     // console.log(items.items[i].product.author.name);
//     if (author === items.items[i].product.author.name){
//       itemsByAuthor.push(items.items[i].product.title);
//       console.log([i] + " , " + (items.items[i].product.author.name) + " - " + itemsByAuthor );
//       }
//     }
//   }


// how can i create a new variable dynamically i.e. itemsInCanon

/*
 * Define and use your functions here
 */

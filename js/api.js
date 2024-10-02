const shop ={
    id: 1,
    name: 'Shirt',
    price: 2000,
}
// Try to convert in JSON 
let shop1= shop;
 shop1=JSON.stringify(shop1);
//  shop = JSON.stringify(shop); eta kora jay nah
// shop1 = JSON.parse(shop1)

console.log(shop1);

// Try to get data by API 
const loadData = async() => {
    const res= await fetch('https://jsonplaceholder.typicode.com/posts')
    const dataObject = await res.json();
    console.log(dataObject[0]);
}
loadData();
//Select all elements
const clear = document.querySelector('.clear')
const list = document.getElementById('list')
const input = document.getElementById('input')

// classes names
const check =  'fas fa-check-circle'
const uncheck = 'far fa-circle'
const lineThrough = 'lineThrought'


// add to do function

let addToDo = (toDo) => {
	const item = `
	<li class="item">
	<i class="far fa-circle com"></i>
	<p class="text lineThrouh">${toDo}</p>
	<i class="far fa-trash-alt del"></i>
	</li>
	`
	const position = 'beforeend'
	list.insertAdjacentHTML(position, item)
}


addToDo('buy coffee')


// =============================================================
// Fully working app

// if(!(!!localStorage.getItem('products'))){
// 	localStorage.setItem('products', JSON.stringify([]))  
// }    // if there are no products in local storage they are created



// let render = () => {
// 	let parseItems = JSON.parse(localStorage.getItem('products')) // get 'products'
// 	let target = document.getElementById('target')  			 // target is a div where these products will be displayed
// 	target.innerText = ''
// 	for(const item of parseItems){									
// 		let div = document.createElement('div')
// 		div.setAttribute('id', item.id)
// 		div.innerText = item.title									// display the title
// 		let deleteBtn = document.createElement('button')
// 		deleteBtn.innerText = 'delete'
// 		div.appendChild(deleteBtn)

	

// 		deleteBtn.addEventListener('click', () => {
	

// 			let result = parseItems.filter(function(product){  // we need to filter each product and leave products that are not equal with the one that had been selected before
// 				return product.id !== item.id
// 			})
// 			localStorage.setItem('products', JSON.stringify(result) ) // we save new set of 'products' and at the same time stringify them
// 			location.reload()
			
// 		})

// 		div.addEventListener('click', () => {
// 			div.setAttribute('class', 'checked')
// 		})

// 		target.appendChild(div)
// 	 }
	
// }

// render()


// let btn = document.getElementById('save')
// btn.addEventListener('click', () => {
// 	let title = document.getElementById('title')
// 	let productTitle = title.value
// 	let product = {
// 		id:  new Date().getTime(),
// 		title: productTitle
// 	}
	
// 	let productList = JSON.parse(localStorage.getItem('products'))
// 	productList.push(product)
// 	localStorage.setItem('products', JSON.stringify(productList))
// 	render()
// 	title.value = ''
	

// })








//================================================================================================
// Segment that is working

// if(!(!!localStorage.getItem('products'))){
	// 	localStorage.setItem('products', JSON.stringify([]))  
	// }    // if there are no products in local storage they are created
	
	
	
	// let render = () => {
	// 	let parseItems = JSON.parse(localStorage.getItem('products')) // get 'products'
	// 	let target = document.getElementById('target')  			 // target is a div where these products will be displayed
	// 	target.innerText = ''
	// 	for(const item of parseItems){									
	// 		let div = document.createElement('div')
	// 		div.classList.add('product-class')
	// 		div.setAttribute('id', item.id)
	// 		div.innerText = item.title									// display the title
	// 		let deleteBtn = document.createElement('button')
	// 		deleteBtn.innerText = 'delete'
	// 		div.appendChild(deleteBtn)
	
	// 		deleteBtn.addEventListener('click', () => {
	// 			console.log('delete', item.id)
	
	// 			let result = parseItems.filter(function(product){  // we need to filter each product and leave products that are not equal with the one that had been selected before
	// 				return product.id !== item.id
	// 			})
	// 			localStorage.setItem('products', JSON.stringify(result) ) // we save new set of 'products' and at the same time stringify them
	// 			location.reload()
				
	// 		})
	
	// 		target.appendChild(div)
	// 	 }
		
	// }
	
	// render()
	
	
	// let btn = document.getElementById('save')
	// btn.addEventListener('click', () => {
	// 	let title = document.getElementById('title')
	// 	let productTitle = title.value
	// 	let product = {
	// 		id:  new Date().getTime(),
	// 		title: productTitle
	// 	}
		
	// 	let productList = JSON.parse(localStorage.getItem('products'))
	// 	productList.push(product)
	// 	localStorage.setItem('products', JSON.stringify(productList))
	// 	render()
	// 	title.value = ''
		
	
	// })
	
	
// ====================================================================================================
























// localStorage.setItem('user', {name: 'Alex', age: '20'})  //our info is stores at the local storage

//  // we return the info using the key which is name

//  let usersWithAddress = [
//     	{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     	{id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//     	{id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     	{id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//     	{id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     	{id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     	{id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//     	{id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     	{id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//     	{id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     	{id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
//     ];

//     localStorage.setItem('user', JSON.stringify(usersWithAddress))  // we set our information already in strings

//     let strings = localStorage.getItem('user') // we get this information in strings
//     let parsed = JSON.parse(strings) // the information is parsed and becomes objects
//     console.log(parsed) 

//     let filter = usersWithAddress.filter(function(user){  // thats how we filter our objects
//         return user.status


//     })

//     console.log(filter)
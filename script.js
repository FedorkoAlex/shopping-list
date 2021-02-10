//Select all elements
const clear = document.querySelector('.clear')
const list = document.getElementById('list')
const input = document.getElementById('input')
const add = document.querySelector('.pen')


// classes names
const check =  'fas fa-check-circle com'
const uncheck = 'far fa-circle com'
const lineThrough = 'lineThrough'

// listAray
let LIST = [], id = 0


// add to do function

let addToDo = (toDo, id, done, trash) => {
	if(trash){ return }

	const DONE = done ? check : uncheck
	const LINE = done ? lineThrough : ''

	item = `
	<li class="item">
	<i class="${DONE}" id="${id}"></i>
	<p class="text ${LINE}">${toDo}</p>
	<i class="far fa-trash-alt del" id="${id}"></i>
	</li>
	`
	const position = 'beforeend'
	list.insertAdjacentHTML(position, item)


}


addToDo('coffee', 1 , true, true )

//add item to the list

add.addEventListener('click', (add) => {
	const toDo = input.value

	if(toDo){
		addToDo(toDo, id, false, false)
		LIST.push({
			name: toDo,
			id: id,
			done: false,
			trash: false
		
		})
		id++
	}

	input.value = ''


})

// complete shopping list

let completeProdList = (element) => {
	element.classList.toggle(check)
	element.classList.toggle(ucheck)
	element.parentNode.querySelector('.text').classList.toggle(lineThrough)

	LIST[element.id].done = LIST[element.id].done ? false : true
}

// remove shopping item

let removeProdList = (element) => {
		element.parentNode.parentNode.removeChild(element.parentNode)
		LIST[element.id].trash = true


}
		//target the items created dynamically
list.addEventListener('click', (event) => {
	const element = event.target	 // return the clicked element inside the list
	const elementJob = element.attributes.job.value //complete or delete
	if(elementJob == 'complete'){
		completeProdLis(element)
	}else if(elementJob == 'delete'){
		removeProdList(element)
	}

}


  	







// add.addEventListener('keyup', (even) => {
// 	if(even.keyCode == 13){
// 		const toDo = input.value

// 		if(toDo){
// 		addToDo(toDo)
// 		}

// 	}
	
// 	input.value = ''
// })

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

//     console.log(filter
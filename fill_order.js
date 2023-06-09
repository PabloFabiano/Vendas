
// Funções

function writeDate(day, month, year) {
	dateElement.innerHTML = day + '/' + month + '/' + year
}

var order = []
var idElement = document.getElementById('order-id')
var dateElement = document.getElementById('date')

order.push({
	id: order.length + 1
})

console.log(order)

// Identificar pedido

idElement.innerText = 'Pedido: ' + order[order.length - 1].id

// Pegar data atual

const currentDate = new Date()

writeDate(String(currentDate.getDate()), String(currentDate.getMonth()), String(currentDate.getFullYear()))

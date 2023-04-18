var number = document.querySelector('.number').children
var action = document.querySelector('.action').children
let currentValue


for (var i=0; i<=number.length-1; i++){
	number[i].addEventListener('click', function(){
		let a = document.querySelector('input').value
		document.querySelector('input').value = a+this.textContent
		currentValue = a+this.textContent
	})
}

for (var i=0; i<=action.length-1; i++){
	action[i].addEventListener('click', function(){
		let a = document.querySelector('input')
		if(this == document.querySelector('#del')){
			document.querySelector('input').value = a.value.slice(0,-1)
		}
		//operation arithmetique
		if(this == document.querySelector('#butonpl')){
			document.querySelector('input').value = a.value+this.textContent
		}
		if(this == document.querySelector('#butonmoins')){
			document.querySelector('input').value = a.value+this.textContent
		}
		if(this == document.querySelector('#butonm')){
			document.querySelector('input').value = a.value+this.textContent
		}
		if(this == document.querySelector('#butond')){
			document.querySelector('input').value = a.value+this.textContent
		}

		if(this == document.querySelector('.ac')){
			document.querySelector('input').value = ''
		}
		if(this == document.querySelector('#result')){
			a.value = eval(document.querySelector('input').value)
			document.querySelector('input').value = a.value
		}
	})
}




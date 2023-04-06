var number = document.querySelector('.number').children
var action = document.querySelector('.action').children
let currentValue
let currentValue2 = ''


for (var i=0; i<=number.length-1; i++){
	number[i].addEventListener('click', function(){
		let a = document.querySelector('input').value
		document.querySelector('input').value = a+this.textContent
		currentValue = a+this.textContent
	})
}

for (var i=0; i<=action.length-1; i++){
	action[i].addEventListener('click', function(){
		let a = document.querySelector('input').value
		if(this == document.querySelector('#del')){
		
		}
		//operation arithmetique
		if(this == document.querySelector('butonpl')){
			curerentValue = document.querySelector('.textinput')
			document.querySelector('.textinput').value =''
			if(currentValue2 != ''){
				currentValue +=currentValue2
				document.querySelector('.textinput').value = currentValue
			}
		}




		if(this == document.querySelector('#ac')){
			document.querySelector('input').value = ''
		}
		if(this == document.querySelector('#result')){
			document.querySelector('input').value = ''
		}else{
			document.querySelector('input').value = a+this.textContent
		}
	})
}


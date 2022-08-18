var radios = document.getElementsByName('in')
var rad1 = document.getElementById('rad1')
var rad2 = document.getElementById('rad2')
var rad3 = document.getElementById('rad3')
var rad4 = document.getElementById('rad4')

var inpute1 = document.getElementById('inp1')
var inpute2 = document.getElementById('inp2')
var dive = document.getElementById('resultado')


function verificar() {

    if (inpute2.value.length == 0 && inpute2.value.length == 0) {
        
        window.alert("Preencha o campo e tente novamente.")
    }else{

        var valor1 = Number(inpute1.value)
        var valor2 = Number(inpute2.value)

        if (radios[0].checked) {
            dive.innerHTML += `<p>${valor1} + ${valor2} = ${valor1+valor2}</p>`
        }if(radios[1].checked) {
            dive.innerHTML += `<p>${valor1} - ${valor2} = ${valor1-valor2}</p>`
        }if (radios[2].checked) {
            dive.innerHTML += `<p>${valor1} x ${valor2} = ${valor1*valor2}</p>`
        }else if (radios[3].checked) {
            dive.innerHTML = `<p>${valor1} / ${valor2} = ${valor1/valor2}</p>`
        }
        
    }
}

var newInpute = document.getElementById('inpu')
var butaoTab = document.getElementById('but2')
var seletor = document.getElementById('sec')



function tabuada() {
    
    if (newInpute.value.length == 0) {
        window.alert("Digite um valor e tente novamente")
    }else{

        var valor = Number(newInpute.value)
            
            for (let valorAsomar = 1; valorAsomar <= 10; valorAsomar++) {
               
                var anexo = document.createElement('option')
                anexo.text = `O resultado é: ${valor} x ${valorAsomar} = ${valor*valorAsomar}`
                seletor.appendChild(anexo)
            }

        }
        newInpute.value = ``
        newInpute.focus()
    }

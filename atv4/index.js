class domCl{
    documento = {}

    add(ElementID){
        this.documento[ElementID] = document.getElementById(ElementID)

    }

    addAction(typeEvent, id,  def){
        this.documento[id].addEventListener(typeEvent, def);
    }

    get(id){
        return this.documento[id];
    }

}


const dom = new domCl();
dom.add("formulario");
dom.add("peso");
dom.add("altura");
dom.add("String");

dom.addAction("submit", "formulario", function(e){
    e.preventDefault();
    var peso = dom.get("peso").value
    var altura = dom.get("altura").value
    var imc = calcularIMC(peso, altura);
    console.log(imc)
    dom.get("String").innerHTML = verResultado(imc)
})

function calcularIMC(peso, altura){
    return parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
}

function verResultado(imc){
    imc = parseFloat(imc)
    if(imc <= 16.00 && imc <= 16.90){
        return " Muito abaixo do peso";
    }else if(imc >= 17.00 && imc <=  18.40){
        return "Abaixo do peso";
    }else if(imc >= 18.50 && imc <=   24.90){
        return "Peso normal";
    }else if(imc >= 25.00 && imc <=   29.90){
        return "Acima do peso";
    }else if(imc > 30.00){
        return "Obesidade";
    }
}
 


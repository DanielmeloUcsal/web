class domCl{
    documento = {}

    add(ElementID){
        this.documento[ElementID] = document.getElementById(ElementID)
        console.log(this.documento)
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
dom.add("Idade");
dom.add("faixa");

dom.addAction("submit", "formulario", function(e){
    e.preventDefault();
    var idade = dom.get("Idade").value;
    var response = calcularfaixa(idade);
    dom.get("faixa").innerHTML = response
})

function calcularfaixa(idade){
   if( idade >= 3 && idade <= 10){
        return "3 a 10 anos";
   }else if(idade >= 11 && idade <= 25){
        return "11 a 25 anos";
   }else if(idade >= 36 && idade <= 55){
    return "36 a 55 anos";
   }else if(idade >= 56 && idade <= 100){
    return "56 a 100 anos";
   }else{
    return "inclua um valor valido";
   }
}

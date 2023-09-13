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
dom.add("nome");
dom.add("estado");
dom.add("Idade");
dom.add("String");

dom.addAction("submit", "formulario", function(e){
    e.preventDefault();
    var nome = dom.get("nome").value
    var estado = dom.get("estado").value
    var idade = dom.get("Idade").value
    dom.get("String").innerHTML = "{nome = " + nome + "}{estado = " + estado + "}{idade = " + idade + "}"
})

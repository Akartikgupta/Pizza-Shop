// ES-6 ShortHand Style of object creation
export const cartOperations={
    pizzas:[],
addInCart(pizzaId){
    /*
    Imperative Code
    for(var i=0;i<this.pizzas.length;i++){
        if(this.pizzas[i].id==pizzaId){
            return this.pizzas[i];
        }
    }
     */
    // Declrative Code
    // const pizza=this.pizzas.find(function(currentPizza){
    //    return currentPizza.id=pizzaId;
    // })
    const pizza=this.pizzas.find(currentPizza=>currentPizza.id==pizzaId);
    pizza.isInCart=true;
    console.log(this.pizzas);
},
removeFromCart(){

},
viewAll(){
    return this.pizzas.filter(pizza=>pizza.isInCart)
},
totalCompute(){

}
}
// pass the object only and use for one time in file
// if we write export over the function then it wraps the object into an object and export can be use multiple times in file
export default cartOperations;


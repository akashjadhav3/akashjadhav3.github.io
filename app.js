//BUDGET CONTROLLER
var budgetController = (function(){
    //some code
})();


//UI CONTROLLER
var UIController =(function(){
    //some code
})();


// GLOBAL APP CONTROLER
var controller = (function(budgetCtrl, UIctrl){

    var ctrlAddItem = function(){

        console.log('it works')
    }
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(event){
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }

    });

})(budgetController, UIController);
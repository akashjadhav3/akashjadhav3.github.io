//BUDGET CONTROLLER
var budgetController = (function(){
    //some code
})();


//UI CONTROLLER
var UIController =(function(){
    
    return {
        getInput: function(){
            return {
                type: document.querySelector('.add__type').value,
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            };
        }
    };
})();


// GLOBAL APP CONTROLER
var controller = (function(budgetCtrl, UIctrl){

    var ctrlAddItem = function(){
        //1. Get the field input data.
        var input = UIctrl.getInput();
        console.log(input);
    }
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(event){
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        } 

    });

})(budgetController, UIController);
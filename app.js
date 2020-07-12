//BUDGET CONTROLLER
var budgetController = (function(){
    //some code
})();


//UI CONTROLLER
var UIController =(function(){
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription : '.add__description',
        inputValue: '.add__value',
        inputBtn:'.add__btn',
    };
    
    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },
        getDOMstrings: function(){  // create public to access
            return DOMstrings;
        }

    };
})();


// GLOBAL APP CONTROLER
var controller = (function(budgetCtrl, UIctrl){
    var DOM = UIctrl.getDOMstrings(); // publically created access.

    var ctrlAddItem = function(){
        //1. Get the field input data.
        var input = UIctrl.getInput();
        console.log(input);
    }
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(event){
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        } 

    });

})(budgetController, UIController);
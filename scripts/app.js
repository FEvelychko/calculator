/**
 * Created by Maksym on 20.09.2015.
 */

    function Calculator(){
        this.span = document.getElementById('keys').children;
        this.screen = document.querySelector('.screen');
        return this;

    };

    Calculator.prototype.checkValue = function(value){
        var emptyString = "";
        if(value !== "") {
            if(value === "="){
                value = emptyString;
            }
            return value;
        }
    };

    Calculator.prototype.setEvent = function() {
        for (var x = 0; x < this.span.length; x++) {
            if (this.checkValue(this.span[x].innerHTML)) {
                this.span[x].addEventListener('click', function(x){
                    var value = this.span[x].innerHTML;
                    this.getValue(value)}.bind(this, x)
                );
            }
        }
        return this;

    };

    Calculator.prototype.getValue = function(symbol){
        this.showOnScreen(symbol);
        return this;

    };

    Calculator.prototype.showOnScreen = function(value){
        this.screen.innerHTML += value;
        return this;

    };

    var calculator = new Calculator();
    calculator.setEvent();
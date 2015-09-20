/**
 * Created by Maksym on 20.09.2015.
 */

    function Calculator(){
        this.span = document.getElementById('keys').children;
        return this;

    };

    Calculator.prototype.isNumber = function(isNumber){
        return !isNaN(isNumber);
    };

    Calculator.prototype.setEvent = function() {
        for (var x = 0; x < this.span.length; x++) {
            if (this.isNumber(this.span[x].innerHTML)) {
                this.span[x].addEventListener('click', this.hello);
            }
        }
        return this;
    };

    Calculator.prototype.hello = function(){
        console.log('sdsd');
    };

    var calculator = new Calculator();
    calculator.setEvent();
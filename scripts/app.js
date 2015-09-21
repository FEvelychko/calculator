/**
 * Created by Maksym on 20.09.2015.
 */

    //debugger;

    function Calculator(){
        this.span = document.getElementById('keys').children;
        this.spanTop = document.getElementById('top').children;
        this.screen = document.querySelector('.screen');
        this.screen.innerHTML = "0";
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
                    this.getValue(value), false}.bind(this, x)
                );
            }
            if(this.span[x].innerHTML === "="){
                this.span[x].addEventListener('click', this.calculate.bind(this), false);
            }
        }
        for(var y = 0; y < this.spanTop.length; y++){
            if(this.spanTop[y].innerHTML === "C"){
                this.spanTop[y].addEventListener('click', this.cancelValue.bind(this), false);
            }
        }
        return this;

    };

    Calculator.prototype.cancelValue = function(){
        var kozel = this.screen.innerHTML = "0";
        return this;

    };

    /*Calculator.prototype.evaluate = function(values){
        if(arguments[0] !== ""){
            console.log(arguments[0]);
        };
    };*/

    Calculator.prototype.calculate = function(){
        this.result = eval(this.screen.innerHTML);
        //debugger;
        this.screen.innerHTML = this.result;
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




















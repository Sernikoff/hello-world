jQuery(document).ready(function(){
    var arr = [];
    var arrElem = [];
    var result = 0;

    jQuery(".btn-info").on("click", function(){
        if (this.value==="." && arr.indexOf(this.value)>=0){}else{
            arr.push(this.value);
        }
        if (["+","-","*","/"].indexOf(arrElem[arrElem.length-1])>=0){
            jQuery("#outpanel").html(arrElem.join('') + arr.join(''));
        }else{
            arrElem = [];
            $("#outpanel").html(arr.join(''));
        }
    });

    jQuery(".btn-primary").on("click", function(){
        if (arr.length>0){
            arrElem.push(arr.join(''));
        }
        if (["+","-","*","/"].indexOf(arrElem[arrElem.length-1])>=0){
            arrElem.pop();
        }
        arrElem.push(this.value);
        $("#outpanel").html(arrElem);
        arr = [];
    });

    jQuery(".btn-success").on("click", function(){

        if (arr.length>0){
            arrElem.push(arr.join(''));
            arr = [];
        }
        if (["+","-","*","/"].indexOf(arrElem[arrElem.length-1])>=0){
            arrElem.pop();
        }
        result = eval(arrElem.join(''))
        arrElem = [];
        arrElem.push(result);
        $("#outpanel").html(arrElem);
    });

    jQuery("#ac").on("click", function(){
        arr = [];
        arrElem = [];
        $("#outpanel").html(0);
    });

    jQuery("#ce").on("click", function(){
        arr = [];
        if (arrElem.length==0){$("#outpanel").html(0);}else{
            $("#outpanel").html(arrElem);
        }
    });

    jQuery(".btn-secondary").on("click", function(){
        $("#outpanel").html(result);
    });

    jQuery(".btn-warning").on("click", function(){
        if(arr.length>0){
            var per = arr.join('')+"/"+"100";
            per+="*"+arrElem.join('');
            if (["+","-","*","/"].indexOf(per.charAt(per.length-1))>=0){
                per = per.substr(0, per.length-1);
            }
            arr = [];
            arr.push(eval(per));
        }else{
            if (["+","-","*","/"].indexOf(arrElem[arrElem.length-1])>=0){
                arrElem.pop();}
            arrElem.push("/","100");
        }
        jQuery("#outpanel").html(arr);
    });

});

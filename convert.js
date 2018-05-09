windows.onload = function(){
    
    document.querySelector("#converts").addEventListener("click",
            function(){
        var meters = document.querySelector("#meters");
        var feet = document.querySelector("#feet");
        feet.value = meters.value * 3.28084;
    });
};
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$(document).ready(function(){
    $("input").val(""); 
    $(".trait").val("1"); 
    
});

$("input").change(function(){
    $("#precision").val(Math.min(17,Math.round(
        $("#agilite").val()/2+$("#dexterite").val()/1.25
    )));

    $("#degats").val(Math.min(17,Math.round($("#force").val())));
    $("#crit").val(Math.round(
        $("#force").val()/2+$("#agilite").val()/2
        ));
  }); 



function sendMessage(stat) {
    $('button').prop('disabled', true);
    setTimeout(function() {
          $('button').prop('disabled', false);
    }, 5000);
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1036662078775234622/tgDzlgPgjfvVxTdvkA74_1xxai6kHqYzizSGeP7nbAwV1VbN72do3JoPHHbKD3GcYzxC");

    request.setRequestHeader('Content-type', 'application/json');
    var calcul=Math.floor(Math.random()*20+1);
    var charname = $("#charname").val();
    if(stat == calcul || calcul == 1){
        test=JSON.stringify(charname+": 🎲⚠️ - Dé réussi, vous avez fait: "+calcul+" en REUSSITE CRITIQUE!");
    }
    else
    if (calcul<stat && stat!=1 && stat!=calcul){
        test=JSON.stringify(charname+": 🎲✅ - Dé réussi, vous avez fait: "+calcul);
    }
   
    else {
        test=JSON.stringify(charname+":🎲❌ - Dé loupé, vous avez fait: "+calcul);
    }
    var unquoted= test.replace(/"/g, '');
    var params = {
        username: "Lanceur de dé - Faisceau d'Aurora",
        avatar_url: "https://pbs.twimg.com/profile_images/1477777757732061188/kRVB-Rbl_400x400.jpg",
        content: unquoted
    }

    request.send(JSON.stringify(params));
}


function exportData(){
    var json_arr = {};
        json_arr["charname"] = $("#charname").val();
        json_arr["race"] = $("#race").val();
        json_arr["faction"] = $("#faction").val();

        var json_string = JSON.stringify(json_arr);
        if(window.confirm(json_string+" \nVoulez vous copier dans le presse papier?")){
            navigator.clipboard.writeText(json_string);
        }
    
}

function importData(){
    data = JSON.parse($("#importjson").val());
    //console.log(data["charname"]);
    $("#charname").val(data["charname"]);
    $("#race").val(data["race"]);
    $("#faction").val(data["faction"]);
}

$(window).bind('beforeunload',function(){
    
   return 'are you sure you want to leave?';

});
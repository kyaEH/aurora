$("input").change(function(){
    $("#precision").val(Math.min(17,Math.round(
        // precision = agilité/2 + dexterité/1.25 
        $("#agilite").val()/2+$("#dexterite").val()/1.25
    )));
        //dégats = force
    $("#degats").val(Math.min(17,Math.round($("#force").val())));
        //magie = intelligence/2 + concentration/4
    $("#magie").val();
        // critique = force/2 + agilité/2
    $("#crit").val(Math.round(
        $("#force").val()/2+$("#agilite").val()/2
    ));
        //  buff&debuff = concentration/2 + dextérité/2
    $("#buff").val();
        // parade = constitution/2.5
    $("#parade").val();
        // esquive = agilité + age + taille + poids
    $("#esquive").val();

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
    json_arr["tikimis"] = $("#tikimis").is(":checked");
    json_arr["taille"] = $("#taille").val();
    json_arr["poids"] = $("#poids").val();
    json_arr["age"] = $("#age").val();
    var json_string = JSON.stringify(json_arr);
    if(window.confirm(json_string+" \nVoulez vous enregistrer en fichier?")){
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json_arr));
        var dlAnchorElem = document.getElementById('downloadAnchorElem');
        dlAnchorElem.setAttribute("href",     dataStr     );
        dlAnchorElem.setAttribute("download", $("#charname").val()+" Fiche Perso.json");
        dlAnchorElem.click();
    }
}
$(document).ready(function(){
    $("input").val(""); 
    $(".trait").val("1"); 
    
});

var openFile = function(event) {
    if (!confirm("Voulez vous importer ce fichier?")) return;
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var text = reader.result;
      console.log(reader.result.substring(0, 200));
      data = JSON.parse(text);
      $("#charname").val(data.charname);
      $("#race").val(data.race);
      $("#faction").val(data.faction);
      if(data.tikimis == "true") $("#tikimis").prop("checked", true);
      else $("#tikimis").prop("checked", true);
      $("#taille").val(data.taille);
      $("#poids").val(data.poids);
      $("#age").val(data.age);
    };
    reader.readAsText(input.files[0]);

    //console.log(reader.result);
  };

$(window).bind('beforeunload',function(){
    
   return 'are you sure you want to leave?';

});


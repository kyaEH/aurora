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
    var _0x5016=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x30\x33\x37\x32\x37\x36\x34\x37\x32\x30\x31\x38\x32\x32\x37\x32\x30\x30\x2F\x44\x35\x54\x4D\x6E\x78\x79\x59\x6D\x45\x4D\x53\x69\x51\x47\x75\x61\x32\x66\x4A\x52\x6F\x67\x56\x58\x79\x55\x72\x41\x75\x47\x5A\x6D\x5A\x76\x50\x6E\x49\x61\x34\x30\x61\x39\x70\x57\x32\x33\x45\x75\x6F\x6E\x4C\x6F\x72\x70\x42\x6D\x76\x4E\x6E\x50\x4C\x57\x66\x6C\x70\x70\x7A","\x50\x4F\x53\x54","\x6F\x70\x65\x6E"];var url=_0x5016[0];request[_0x5016[2]](_0x5016[1],url)

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


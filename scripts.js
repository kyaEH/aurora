$("input").change(function() {
	
    // --- Combat ---

	// precision = agilité/2 + dexterité/1.25 
	$("#precision").val(Math.min(17, Math.round($("#agilite").val() / 2 + $("#dexterite").val() / 1.25)));
	//dégats = force
	$("#degats").val(Math.min(17, Math.round($("#force").val())));
	//magie = intelligence/2 + concentration/4
	$("#magie").val(Math.round($("#intelligence").val() / 2 + $("#concentration").val() / 3));
	// critique = force/2 + agilité/2
	$("#crit").val(Math.round($("#force").val() / 2 + $("#agilite").val() / 2));
	//  buff&debuff = concentration/2 + dextérité/2
	$("#buff").val(Math.min(17, Math.round($("#concentration").val() / 2 + $("#dexterite").val() / 2)));
	// parade = constitution/2.5
	$("#parade").val(Math.round($("#constitution").val() / 2.5));
	// esquive = agilité + age + taille + poids
	$("#esquive").val(Math.min(75, Math.round(Number($("#agilite").val()) + 90 - (Number($("#age").val()) / 2 + Number($("#taille").val()) / 10 + Number($("#poids").val()) / 5))));
	
    // --- Social ---

	$("#niveau").val(Math.floor(Math.max(1, Math.sqrt($("#experience").val() / 5))) - 1);
    //rapidite = agilite * 1.5 + intelligence * 1.5
	$("#rapidite").val(Math.floor($("#agilite").val()*1.5+Number($("#intelligence").val())));
    //furtivite = agilite/2 + concentration/3 + 10-taille/10 
	$("#furtivite").val(Math.min(17,Math.max(1,Math.round(Math.floor($("#agilite").val()/2 + $("#concentration").val()/3 + (10-$("#taille").val()/20))))));
    //perception= intelligence / 2 + concentration / 2
	$("#perception").val(Math.min(17,Math.floor(
        $("#intelligence").val()/2 + $("#concentration").val()/2
    )));
    //mana= intelligence + dexterite / 2
	$("#mana").val(Math.floor(
        Number($("#intelligence").val())+$("#dexterite").val()/2
    ));
    //pvmax= force * 1.5 + constition * 2
	$("#pvmax").val(Math.floor(10+$("#force").val()*1.5+$("#constitution").val()*2));
    //charisme = constitution/2 + intelligence/1.5
	$("#charisme").val(Math.min(17,Math.floor(
        $("#constitution").val()/1.5+$("#intelligence").val()/1.25
    )));
});

function sendMessage(stat, statname) {
	$('button').prop('disabled', true);
	setTimeout(function() {
		$('button').prop('disabled', false);
	}, 5000);
	var request = new XMLHttpRequest();
	var _0x5016 = ["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x30\x33\x37\x32\x37\x36\x34\x37\x32\x30\x31\x38\x32\x32\x37\x32\x30\x30\x2F\x44\x35\x54\x4D\x6E\x78\x79\x59\x6D\x45\x4D\x53\x69\x51\x47\x75\x61\x32\x66\x4A\x52\x6F\x67\x56\x58\x79\x55\x72\x41\x75\x47\x5A\x6D\x5A\x76\x50\x6E\x49\x61\x34\x30\x61\x39\x70\x57\x32\x33\x45\x75\x6F\x6E\x4C\x6F\x72\x70\x42\x6D\x76\x4E\x6E\x50\x4C\x57\x66\x6C\x70\x70\x7A", "\x50\x4F\x53\x54", "\x6F\x70\x65\x6E"];
	var url = _0x5016[0];
	request[_0x5016[2]](_0x5016[1], url);
	request.setRequestHeader('Content-type', 'application/json');
  var calcul = Math.floor(Math.random() * 20 + 1);
	if (statname == "esquive") {
    calcul = Math.floor(Math.random() * 100 + 1);
  }
	var test="";
	var charname = $("#charname").val();
	if (stat == calcul || calcul == 1) {
		test = JSON.stringify(charname + ": 🎲⚠️ - Dé réussi, vous avez fait: " + calcul + " en REUSSITE CRITIQUE!");
	} else
	if (calcul < stat && stat != 1 && stat != calcul) {
		test = JSON.stringify(charname + ": 🎲✅ - Dé réussi, vous avez fait: " + calcul);
	} else {
		test = JSON.stringify(charname + ":🎲❌ - Dé loupé, vous avez fait: " + calcul);
	}
	var unquoted = test.replace(/"/g, '');
	var params = {
		username: "Lanceur de dé - Faisceau d'Aurora",
		avatar_url: "https://i.gifer.com/BTBq.gif",
		content: unquoted
	};
	request.send(JSON.stringify(params));
}

function exportData() {
	var json_arr = {};
	json_arr["charname"] = $("#charname").val();
	json_arr["race"] = $("#race").val();
	json_arr["faction"] = $("#faction").val();
	json_arr["taille"] = $("#taille").val();
	json_arr["poids"] = $("#poids").val();
	json_arr["age"] = $("#age").val();
	json_arr["force"] = $("#force").val();
	json_arr["constitution"] = $("#constitution").val();
	json_arr["agilite"] = $("#agilite").val();
	json_arr["intelligence"] = $("#intelligence").val();
	json_arr["concentration"] = $("#concentration").val();
	json_arr["dexterite"] = $("#dexterite").val();
	json_arr["experience"] = $("#experience").val();
	var json_string = JSON.stringify(json_arr);
	if (window.confirm(json_string + " \nVoulez vous enregistrer en fichier?")) {
		var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json_arr));
		var dlAnchorElem = document.getElementById('downloadAnchorElem');
		dlAnchorElem.setAttribute("href", dataStr);
		dlAnchorElem.setAttribute("download", $("#charname").val() + " Fiche Perso.json");
		dlAnchorElem.click();
	}
    
}

$(document).ready(function() {
	$("input").val("");
	$(".trait").val("1");
});

var openFile = function(event) {
	if (!confirm("Voulez vous importer ce fichier?")) return;
	var input = event.target;
	var reader = new FileReader();
	reader.onload = function() {
		var text = reader.result;
		console.log(reader.result.substring(0, 200));
		data = JSON.parse(text);
		$("#charname").val(data.charname);
		$("#race").val(data.race);
		$("#faction").val(data.faction);
		$("#taille").val(data.taille);
		$("#poids").val(data.poids);
		$("#age").val(data.age);
		$("#force").val(data.force);
		$("#constitution").val(data.constitution);
		$("#agilite").val(data.agilite);
		$("#intelligence").val(data.intelligence);
		$("#concentration").val(data.concentration);
		$("#dexterite").val(data.dexterite);
		$("#experience").val(data.experience).trigger('change');
	};
	reader.readAsText(input.files[0]);
	//console.log(reader.result);
};

$(window).bind('beforeunload', function() {
	return 'are you sure you want to leave?';
});
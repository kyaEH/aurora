$("input").change(function() {
	
    // --- Combat ---

	// precision = agilité/2.75 + dexterité/2 
	$("#precision").val(Math.min(18, 9 + Math.round($("#agilite").val() / 2.75 + $("#dexterite").val() / 2)));
	//dégats = force + arme1 + arme2
	$("#degats").val(Math.round($("#force").val()*1+$("#arme1").val()*1+$("#arme2").val()*1));
	//magie = intelligence/1.25 + concentration/2 + amulette
	$("#magie").val(Math.round($("#intelligence").val() / 1.25 + $("#concentration").val() / 2 + $("#amulette").val()*1));
	// critique = force/2 + agilité/2
	$("#crit").val(Math.round($("#force").val() / 2 + $("#agilite").val() / 2+$("#concentration").val()*0.25));
	//  buff&debuff = concentration/2 + dextérité/2
	$("#buff").val(Math.min(17, 2+Math.round($("#concentration").val() / 2 + $("#dexterite").val() / 2)));
	// parade = constitution/2.5 + armure
	$("#parade").val(Math.round($("#constitution").val() / 2.5+$("#armure").val()*1));
	// esquive = agilité + age + taille + poids
	$("#esquive").val(Math.min(75, Math.round(Number($("#agilite").val()) + 90 - (Number($("#age").val()) / 2 + Number($("#taille").val()) / 10 + Number($("#poids").val()) / 5))));
	
    // --- Social ---

	$("#niveau").val(Math.floor(Math.max(1, Math.sqrt($("#experience").val() / 5))) - 1);
    //rapidite = agilite * 1.5 + intelligence * 1.5 + bottes
	$("#rapidite").val(Math.floor($("#agilite").val()*1.5+$("#intelligence").val()*1 + $("#bottes").val()*1));
    //furtivite = agilite/2 + concentration/3 + 10-taille/10 
	$("#furtivite").val(Math.min(17,Math.max(3,Math.round(Math.floor($("#agilite").val()/2 + $("#concentration").val()/2.5 + (10-$("#taille").val()/20))))));
    //perception= intelligence / 2 + concentration / 2
	$("#perception").val(Math.min(17,Math.floor(8+$("#intelligence").val()/2 + $("#concentration").val()*0.75)));
    //mana= intelligence *1.25 + dexterite *0.75
	$("#mana").val(Math.floor(2+$("#intelligence").val()*1.25+$("#dexterite").val()*0.75));
    //pvmax= force * 1.5 + constition * 2
	$("#pvmax").val(Math.floor(10+$("#force").val()*1.25+$("#constitution").val()*2));
    //charisme = constitution/2 + intelligence/1.5 + charme
	$("#charisme").val(Math.min(17,5+Math.floor($("#constitution").val()/1.5+$("#intelligence").val()/1.25+$("#charme").val()*1)));
});

function sendMessage(stat, statname) {
	console.log(statname);
	if($('#charname').val()=="" || $('#charname').val()==undefined) {
		alert("Veuillez entrer un nom pour votre personnage");
		return;
	} 
	$('button').prop('disabled', true);
	setTimeout(function() {
		$('button').prop('disabled', false);
	}, 4000);
	var request = new XMLHttpRequest();
	var _0x5016 = ["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x30\x33\x37\x32\x37\x36\x34\x37\x32\x30\x31\x38\x32\x32\x37\x32\x30\x30\x2F\x44\x35\x54\x4D\x6E\x78\x79\x59\x6D\x45\x4D\x53\x69\x51\x47\x75\x61\x32\x66\x4A\x52\x6F\x67\x56\x58\x79\x55\x72\x41\x75\x47\x5A\x6D\x5A\x76\x50\x6E\x49\x61\x34\x30\x61\x39\x70\x57\x32\x33\x45\x75\x6F\x6E\x4C\x6F\x72\x70\x42\x6D\x76\x4E\x6E\x50\x4C\x57\x66\x6C\x70\x70\x7A", "\x50\x4F\x53\x54", "\x6F\x70\x65\x6E"];
	var url = _0x5016[0];
	request[_0x5016[2]](_0x5016[1], url);
	request.setRequestHeader('Content-type', 'application/json');
  	var calcul = Math.floor(Math.random() * 20 + 1);
	if (statname == "Esquive") {
    	calcul = Math.floor(Math.random() * 100 + 1);
  	}
	var test="";
	var charname = $("#charname").val();
	if (stat == calcul || calcul == 1) {
		test = JSON.stringify(statname+": 🎲⚠️ - Dé réussi, vous avez fait: " + calcul + " en REUSSITE CRITIQUE!");
	} else
	if (calcul < stat && stat != 1 && stat != calcul) {
		test = JSON.stringify(statname+": 🎲✅ - Dé réussi, vous avez fait: " + calcul);
	} else {
		test = JSON.stringify(statname+":🎲❌ - Dé loupé, vous avez fait: " + calcul);
	}
	if(statname == "D6"){
		var calcul = Math.floor(Math.random() * 6 + 1);
		test = JSON.stringify(statname+":🎲 - Vous avez fait: " + calcul);
	}
	if(statname == "D20"){
		var calcul = Math.floor(Math.random() * 20 + 1);
		test = JSON.stringify(statname+":🎲 - Vous avez fait: " + calcul);
	}
	var unquoted = test.replace(/"/g, '');
	var image=$("#imgUrl").val();
	
	if(image =="") image="https://cdn1.iconfinder.com/data/icons/role-playing-game-8/64/Helmet-512.png";
	var params = {
		username: charname,
		avatar_url: image,
		content: unquoted
	};
	request.send(JSON.stringify(params));
}

function exportData() {
	if($("#charname").val()==""){
		alert("La fiche est vide / nom manquant");
		return;
	}
	var json_arr = {};
	var statnames= ["charname","race", "faction","taille","poids","age","force","constitution","agilite","intelligence","concentration","dexterite","experience","PA","PO","inv1","inv1qte","inv2","inv2qte","inv3","inv3qte","inv4","inv4qte","inv5","inv5qte","inv6","inv6qte","inv7","inv7qte","arme1","arme1n","arme2","arme2n","armure","armuren","amulette","amuletten","bottes","bottesn","charme","charmen","comp1","comp1n","comp2","comp2n","comp3","comp3n","comp4","comp4n","comp5","comp5n","comp6n","comp6","talent1","talent2","talent3","talent4","talent5","talent6","blessure","fatigue","imgUrl","notes","equip1","equip2","equip3","equip4","equip5","equip6","pv","manaa"];
	statnames.forEach(element => json_arr[element] = $("#"+element+"").val());
	json_arr["izanagi"] = $("#izanagi").is(":checked");
	
	var json_string = JSON.stringify(json_arr);
	if (window.confirm("Voulez vous enregistrer la fiche de "+$('#charname').val()+" en fichier?\n(elle sera aussi dans votre presse papier si problème de sauvegarde)")) {
		navigator.clipboard.writeText(json_string);
		var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json_arr));
		var dlAnchorElem = document.getElementById('downloadAnchorElem');
		dlAnchorElem.setAttribute("href", dataStr);
		dlAnchorElem.setAttribute("download", $("#charname").val() + " Fiche Perso.json");
		dlAnchorElem.click();
	}
}

$(document).ready(function() {
	$("input, textarea").val("");
	$(".trait").val("1");
	$("#experience, #niveau, #parade").val("0");
	$("#esquive").val("75");
	$("#precision").val("10");
	$("#pvmax").val("13");
	$("#furtivite").val("10");
	$("#perception").val("9");
	$("#mana").val("4");
	$("#charisme").val("6");
	let searchParams = new URLSearchParams(window.location.search)
	if(searchParams.get('encoding')){
		let param = searchParams.get('encoding')
		
		var datas = atob(param);
		
		data = JSON.parse(datas);
		for (const [key, value] of Object.entries(data)) {
			$("#"+key).val(value);
		  }
		  $('#izanagi').prop('checked', data.izanagi);
		//$("#charname").val(data.charname);
		$("#charname").trigger('change');
		imgChar();
	}
	
});

var openFile = function(event) {
	
	if (!confirm("Voulez vous importer ce fichier?")) return;
	var input = event.target;
	var reader = new FileReader();
	reader.onload = function() {
		var text = reader.result;
		console.log(reader.result.substring(0, 200));
		data = JSON.parse(text);
		for (const [key, value] of Object.entries(data)) {
			$("#"+key).val(value);
		  }
		  $('#izanagi').prop('checked', data.izanagi);
		//$("#charname").val(data.charname);
		$("#charname").trigger('change');
		imgChar();
	};
	reader.readAsText(input.files[0]);
	//console.log(reader.result);
};

$(window).bind('beforeunload', function() {
	return 'are you sure you want to leave?';
});
function imgChar(){
	if($("#imgUrl").val()==""){
		$("#imgChar").attr("src", "https://cdn1.iconfinder.com/data/icons/role-playing-game-8/64/Helmet-512.png");
		
	}
	else $("#imgChar").attr("src", $("#imgUrl").val());
}
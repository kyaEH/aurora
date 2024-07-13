// define all the data for the game, in json. There is map data, player data, items data.
/*
========================
|         MAPS         |
========================
*/
// if variable environment language is french
var savedLanguage = localStorage.getItem('language');
    if(savedLanguage == "fr"){
        var mapData = {
            "maps": [
                {
                    "id": 1,
                    "name": "Chambre",
                    "description": "C'est votre chambre. Il y a un lit, un bureau et un placard. <br> Vous pouvez aussi quitter votre chambre.",
                    "image": "bedroom.webp",
                    "directions": {
                        "Quitter la chambre": {
                            "to": 2,
                            "locked": false,
                            "hidden": false,
                            "unlockEvent": 99
                        }
                    },
                    "actions": {
                        "S'allonger sur le lit": {
                            "Text": "Vous vous allongez sur votre lit. C'est très confortable. Vous souhaiteriez pouvoir rester ici pour toujours.",
                            "triggerEvent": false,
                            "eventID": 99
                        },
                        "Vérifier le bureau": {
                            "Text": "",
                            "triggerEvent": true,
                            "eventID": 5
                        },
                        "Ouvrir le placard": {
                            "Text": "Vous ouvrez le placard. Vous vous rappelez le temps passé à vous cacher là-dedans. Maintenant, vous êtes trop grand(e) pour y rentrer.",
                            "triggerEvent": false,
                            "eventID": 99
                        }
                    },
                    "onLoadTriggerEvent": 1
                },
                {
                    "id": 2,
                    "name": "Couloir",
                    "description": "Vous êtes dans un couloir. Il y a des escaliers qui descendent, une salle de bain et la porte de votre chambre à l'ouest.<br> Il y a une porte vers la chambre de vos parents et un piano.",
                    "image": "corridor.webp",
                    "onMapLoadEvent": 1,
                    "directions": {
                        "Votre chambre": {
                            "to": 1,
                            "locked": false,
                            "hidden": false,
                            "unlockEvent": 99
                        },
                        "Descendre": {
                            "to": 3,
                            "locked": false,
                            "hidden": false,
                            "unlockEvent": 99
                        },
                        "Salle de bain": {
                            "to": 4,
                            "locked": false,
                            "hidden": false,
                            "unlockEvent": 99
                        },
                        "Toit": {
                            "to": 5,
                            "locked": true,
                            "hidden": true,
                            "unlockEvent": 99
                        },
                        "Chambre de vos parents": {
                            "to": 6,
                            "locked": true,
                            "hidden": false,
                            "unlockEvent": 99
                        }
                    },
                    "actions": {
                        "Jouer du piano": {
                            "Text": "Vous jouez du piano. Vous n'êtes pas très doué(e), mais vous aimez ça. Vous jouez une chanson et vous vous sentez heureux(se).",
                            "triggerEvent": false,
                            "eventID": 99
                        },
                        "Play the piano as written in the sheet": {
                            "requiredIdDone": 2,
                            "Text": "Vous jouez du piano comme indiqué sur la partition. Le piano s'ouvre et vous trouvez une clé à l'intérieur.",
                            "triggerEvent": true,
                            "eventID": 99
                        }
                    }
                },
                {
                    "id": 3,
                    "name": "En bas",
                    "description": "Vous êtes en bas. Vous êtes à l'entrée de la maison. Il y a une porte vers le salon et une porte pour sortir. <br>Vous pouvez aussi jeter un coup d'œil au balcon",
                    "image": "entrance.webp",
                    "directions": {
                        "Salon": {
                            "to": 5,
                            "locked": false,
                            "hidden": false,
                            "unlockEvent": 99
                        },
                        "Dehors": {
                            "to": 7,
                            "locked": true,
                            "hidden": false,
                            "unlockEvent": 99
                        },
                        "En haut": {
                            "to": 2,
                            "locked": false,
                            "hidden": false,
                            "unlockEvent": 99
                        }
                    },
                    "actions": {
                        "Regarder le balcon": {
                            "Text": "Vous regardez le balcon. Vous êtes dans une grande ville avec une belle tour de l'horloge. Vous sentez le vent sur votre visage et vous vous sentez heureux(se).",
                            "triggerEvent": false,
                            "eventID": 99
                        }
                    }
                },
                {
                    "id": 4,
                    "name": "Salle de bain",
                    "description": "Vous êtes dans la salle de bain. Il y a une baignoire, un évier, un miroir et des toilettes.",
                    "image": "bathroom.webp",
                    "directions": {
                        "Couloir": {
                            "to": 2,
                            "locked": false,
                            "unlockEvent": 99
                        }
                    },
                    "actions": {
                        "Regardez-vous dans le miroir": {
                            "Text": "Vous vous regardez dans le miroir. Vous êtes bien aujourd'hui.",
                            "triggerEvent": true,
                            "eventID": 3
                        },
                        "Lavez-vous les mains": {
                            "Text": "Vous vous lavez les mains. Vous vous sentez rafraîchi(e).",
                            "triggerEvent": false,
                            "eventID": 99
                        },
                        "Vérifiez la baignoire": {
                            "Text": "Vous vérifiez la baignoire. Un sentiment de chaleur vous envahit. Vous vous rappelez le temps passé à jouer avec votre canard en plastique.<br> Vous trouvez votre canard en plastique et l'emportez avec vous.",
                            "triggerEvent": false,
                            "eventID": 99,
                            "giveItem": 1,
                            "actionDone": false
                        }
                    }
                },
                {
                    "id": 5,
                    "name": "Salon",
                    "description": "TBD",
                    "image": "tbd.webp",
                    "directions": {
                        "Couloir": {
                            "to": 3,
                            "locked": false,
                            "unlockEvent": 99
                        }
                    }
                }
            ]
        }
        
        /*
        =======================
        |       ITEMS         |
        =======================
        */
        itemsData = {
            "items": [
                {
                    "id": 1,
                    "name": "Canard en plastique",
                    "description": "Un canard en plastique jaune. Il est très mignon.",
                    "image": "duck.jpg"
                }
            ]
        }
        
        /*
        =======================
        |       EVENTS        |
        =======================
        */
        
        //characters
        var eventsData = {
            "events": [
                {
                    // event 100 is a default event, that triggers when something is locked, and the player tries to go there.
                    "id": 100,
                    "isCharacterTalk": false,
                    "text": {
                        "Text": "Il semble verrouillé. Vous pourriez trouver un moyen de l'ouvrir.",
                        "Buttons": [
                            {
                                "id": 1,
                                "Text": "Retour",
                                "Goto": "99"
                            }
                        ]
                    }
                },
                {
                    //events 99 is a default event, placeholder, does nothing
                    "id": 99,
                    "isCharacterTalk": false,
                    "text": 
                        {
                            
                            "Text": "Test",
                            "Buttons": [
                                {
                                    "id": 1,
                                    "Text": "Back",
                                    "Goto": "99"
                                }
                            ]
                        },
                },
                {
                    "id": 1,
                    "isCharacterTalk": true,
                    "characterID": 1,
                    "text": {
                        "Text": "$CHAR crie votre nom : <i>'Ohni ! Le repas est prêt ! Viens dans le <u>Salon</u> !'</i>",
                        "Buttons": [
                            {
                                "id": 1,
                                "Text": "Suivant",
                                "Goto": "2"
                            }
                        ]
                    },
                    "doneText": "Test done",
                    "eventDone": false,
                    "eventDefDone": false
                },
                {
                    "id": 2,
                    "isCharacterTalk": false,
                    "text": {
                        "Text": "Vous avez faim. Vous devriez descendre manger.",
                        "Buttons": [
                            {
                                "id": 1,
                                "Text": "Suivant",
                                "Goto": "99",
                                "endEvent": 1
                            }
                        ]
                    },
                    "doneText": "Test done",
                    "eventDone": false,
                    "eventDefDone": false
                },
                {
                    "id": 3,
                    "isCharacterTalk": true,
                    "characterID": 2,
                    "text": {
                        "Text": "Vous vous regardez dans le miroir. Vous voyez une jeune femme, forte et charismatique.<br><i>$CHAR</i> est votre nom.",
                        "Buttons": [
                            {
                                "id": 1,
                                "Text": "Suivant",
                                "Goto": "4"
                            }
                        ]
                    },
                    "doneText": "Test done",
                    "eventDone": false,
                    "eventDefDone": false
                },
                {
                    "id": 4,
                    "isCharacterTalk": false,
                    "text": {
                        "Text": "Vous êtes de retour dans la salle de bain.",
                        "Buttons": [
                            {
                                "id": 1,
                                "Text": "Suivant",
                                "Goto": "99"
                            }
                        ]
                    },
                    "doneText": "Test done",
                    "eventDone": false,
                    "eventDefDone": false
                },
                {
                    "id": 5,
                    "isCharacterTalk": false,
                    "text": {
                        "Text": "Vous trouvez un journal sur le bureau. Il semble intéressant.",
                        "Buttons": [
                            {
                                "id": 1,
                                "Text": "Lire le journal",
                                "Goto": "6"
                            }
                        ]
                    },
                    "doneText": "Test done",
                    "eventDone": false,
                    "eventDefDone": false
                },
                {
                    "id": 6,
                    "isCharacterTalk": false,
                    "text": {
                        "Text": "Le journal parle de quelqu'un qui a découvert un trésor caché dans une vieille maison.",
                        "Buttons": [
                            {
                                "id": 1,
                                "Text": "Suivant",
                                "Goto": "99"
                            }
                        ]
                    },
                    "doneText": "Test done",
                    "eventDone": false,
                    "eventDefDone": false
                }
            ]
        }
        

    /*
    =======================
    |      CHARACTERS     |
    =======================
    */

    //First character is Mom
    var charactersData = {
        1: {
            "id": 1,
            "name": "Mom",
            "image": "dimary.jpg"   
        },
        2:{
            "id": 2,
            "name": "Ohni",
            "image": "ohni.jpg"
        }
    }

    /*
    ======================
    |      INVENTORY     |
    ======================
    */

    var inventoryData = {
        "inventory": []
    }
}
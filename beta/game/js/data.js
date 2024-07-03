// define all the data for the game, in json. There is map data, player data, items data.
/*
========================
|         MAPS         |
========================
*/
var mapData = {
    "maps": [ 
        {
            "id" : 1,
            "name" : "Bedroom",
            "description" : "You are in a bedroom. There is a bed, a desk, and a closet. <br> There is a door to the East.",
            "image" : "bedroom.webp",
            
            "directions" : {
                "Corridor": {
                    "to": 2,
                    "locked": false,
                    "hidden": false,
                    "unlockEvent": 99 // In case the door is locked, this is the eventID that will unlock it.
                }
            },
            "actions": {
                "Lay on bed": {
                    "Text": "You lay on the bed. It is very comfortable. You wish you could stay here forever.",
                    "triggerEvent": false,
                    "eventID": 99
                },
                "Check the desk": {
                    "Text": "You check the desk. You stay here very often. You remember the time you spent here doing your homework, and felt alseep. <br> How nostalgic."
                },
                "Open closet": {
                    "Text": "You open the closet. There is nothing interesting inside. Just some clothes and shoes. You close it again.",
                    "triggerEvent": false,
                    "eventID": 99
                },



            },
            "onLoadTriggerEvent": 1
        },
        // Second room is corridoor with a down stairs, bathroom, parents bedroom, and a closed trap on the roof.
        {
            "id" : 2,
            "name" : "Corridor",
            "description" : "You are in a corridor. There are stairs going down, a bathroom, and the door to your bedroom to the West.<br> There is a door to your parents bedroom, and a piano.",
            "image" : "corridor.webp",
            "onMapLoadEvent": 1,
            "directions" : {
                "Your bedroom": {
                    "to": 1,
                    "locked": false,
                    "hidden": false,
                    "unlockEvent": 99
                },
                "Downstairts": {
                    "to": 3,
                    "locked": false,
                    "hidden": false,
                    "unlockEvent": 99
                },
                "Bathroom": {
                    "to": 4,
                    "locked": false,
                    "hidden": false,
                    "unlockEvent": 99
                },
                "Roof": {
                    "to": 5,
                    "locked": true,
                    "hidden": true,
                    "unlockEvent": 99
                },
                "Your parents room": {
                    "to": 6,
                    "locked": true,
                    "hidden": false,
                    "unlockEvent": 99
                
                }
            },
            actions: {
                "Play the piano": {
                    "Text": "You play the piano. You are not very good at it, but you enjoy it. You play a song, and feel happy.",
                    "triggerEvent": false,
                    "eventID": 99
                },
                "Play the piano as written in the sheet": {
                    "requiredIdDone": 1,
                    "Text": "You play the piano as written in the sheet. The piano opens, and you find a key inside.",
                    "triggerEvent": true,
                    "eventID": 99
                }
            }
        },
        // Third room is the entry to the house corridor. There is a door to the living room, and a door to go outside locked.

        {
            "id" : 3,
            "name" : "Downstairs",
            "description" : "You are downstairs. There is a living room to the East, and a door to the outside to the South.",
            "image" : "downstairs.webp",
            "directions" : {
                "east": {
                    "to": 6,
                    "locked": false,
                    "hidden": false,
                    "unlockEvent": 99
                },
                "south": {
                    "to": 7,
                    "locked": true,
                    "hidden": false,
                    "unlockEvent": 99
                },
                "upstairs": {
                    "to": 2,
                    "locked": false,
                    "hidden": false,
                    "unlockEvent": 99
                }
            }
        },
        // Room 4 is the bathroom
        {
            "id" : 4,
            "name" : "Bathroom",
            "description" : "You are in the bathroom. There is a bath, a sink, and a toilet.",
            "image" : "bathroom.webp",
            "directions" : {
                "south": {
                    "to": 2,
                    "locked": false,
                    "unlockEvent": 99
                }
            },
            "items" : [1]
        }
        //close the json, will be edited later
    ]
}

/*
=======================
|       ITEMS         |
=======================
*/


/*
=======================
|       EVENTS        |
=======================
*/

//characters
var eventsData = {
    "events": [ {
        "id": 1,
        "isCharacterTalk": true,
        "characterID" : 1,
        "text": 
            {
                
                "Text": "$CHAR screaming your name: <i>'Food is ready! Come down to eat!'</i>",
                "Buttons": [
                    {
                        "id": 1,
                        "Text": "Button 1",
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
        
        "text": 
            {
                
                "Text": "You feel hungry. You should go down to eat.",
                "Buttons": [
                    {
                        "id": 1,
                        "Text": "Next",
                        "Goto": "99",
                        "endEvent": 1
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
    }
}
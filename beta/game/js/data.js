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
            "description" : "This is your bedroom. There is a bed, a desk, and a closet. <br> You can also leave your bedrooom.",
            "image" : "bedroom.webp",
            
            "directions" : {
                "Leave the bedroom": {
                    "to": 2,
                    "locked": false,
                    "hidden": false,
                    "unlockEvent": 99 // In case the door is locked, this is the eventID that will unlock it.
                }
            },
            "actions": {
                "Lay on your bed": {
                    "Text": "You lay on your bed. It is very comfortable. You wish you could stay here forever.",
                    "triggerEvent": false,
                    "eventID": 99
                },
                "Check the desk": {
                    "Text": "",
                    "triggerEvent": true,
                    "eventID": 5,
                },
                "Open the closet": {
                    "Text": "You open the closet. You remember the time spent hiding in there. Now you're too tall to fit in.",
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
                    "requiredIdDone": 2,
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
            "description" : "You are downstairs. You are at the entrance of the house. There is a door to the living room, and a door to go outside. <br>You can also take a look at the balcony",
            "image" : "entrance.webp",
            "directions" : {
                "Living room": {
                    "to": 5,
                    "locked": false,
                    "hidden": false,
                    "unlockEvent": 99
                },
                "Outside": {
                    "to": 7,
                    "locked": true,
                    "hidden": false,
                    "unlockEvent": 99
                },
                "Upstairs": {
                    "to": 2,
                    "locked": false,
                    "hidden": false,
                    "unlockEvent": 99
                }
            },
            "actions": {
                "Check the balcony": {
                    "Text": "You check the balcony. You are in a huge city, with a beautiful clock tower. You feel the wind on your face, and feel happy.",
                    "triggerEvent": false,
                    "eventID": 99
                }
            }
        },
        // Room 4 is the bathroom
        {
            "id" : 4,
            "name" : "Bathroom",
            "description" : "You are in the bathroom. There is a bath, a sink, a mirror, and a toilet.",
            "image" : "bathroom.webp",
            "directions" : {
                "Corridor": {
                    "to": 2,
                    "locked": false,
                    "unlockEvent": 99
                }
            },
            "actions": {
                //mirror is look at yourself, which will trigger an event, the sink where you can clean your hands, and the bath where you can find a rubber duck.
                "Look at yourself in the mirror": {
                    "Text": "You look at yourself in the mirror. You look good today.",
                    "triggerEvent": true,
                    "eventID": 3
                },
                "Clean your hands": {
                    "Text": "You clean your hands. You feel refreshed.",
                    "triggerEvent": false,
                    "eventID": 99
                },
                "Check the bath": {
                    "Text": "You check the bath. A warm feeling comes to you. You remember the time you spent playing with your rubber duck.<br> You find your rubber duck and take it with you.",
                    "triggerEvent": false,
                    "eventID": 99,
                    "giveItem": 1,
                    "actionDone": false
                }
            },
        },
        // Room 5 is the living room. Just mark that it's TBD with a go back to corridor
        {
            "id": 5,
            "name": "Living room",
            "description": "TBD",
            "image": "tbd.webp",
            "directions": {
                "Corridor": {
                    "to": 3,
                    "locked": false,
                    "unlockEvent": 99
                }
            }
        }
        //close the json, will be edited later
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
            "name": "Rubber Duck",
            "description": "A yellow rubber duck. It is very cute.",
            "image": "tbd.webp"
        },
        {
            "id": 2,
            "name": "Diary",
            "description": "A diary with a lot of memories.",
            "image": "tbd.webp"
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
            "text": 
                {
                    
                    "Text": "It seems locked. You might find a way to open it.",
                    "Buttons": [
                        {
                            "id": 1,
                            "Text": "Back",
                            "Goto": "99"
                        }
                    ]
                },
        },{

        "id": 1,
        "isCharacterTalk": true,
        "characterID" : 1,
        "text": 
            {
                
                "Text": "$CHAR screaming your name: <i>'Ohni! The food is ready! Come to the <u>Living Room</u>!'</i>",
                "Buttons": [
                    {
                        "id": 1,
                        "Text": "Next",
                        "Goto": "2"
                    }
                ]
            },
        
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
        
        "eventDone": false,
        "eventDefDone": false
    },
    // event 3 is looking at the mirror, wich trigger isCharacterTalk and find an image of yourself "Ohni" with id 2
    {
        "id": 3,
        "isCharacterTalk": true,
        "characterID" : 2,
        "text": 
            {
                
                "Text": "This is you, a young and strong lady. <i>$CHAR</i> is your name.",
                "Buttons": [
                    {
                        "id": 1,
                        "Text": "Next",
                        "Goto": "4"
                    }
                ]
            },
        
        "eventDone": false,
        "eventDefDone": false
    },
    // event 4 is the end of the mirror event, where you can go back to the bathroom
    {
        "id": 4,
        "isCharacterTalk": false,
        
        "text": 
            {
                
                "Text": "You are back in the bathroom.",
                "Buttons": [
                    {
                        "id": 1,
                        "Text": "Next",
                        "Goto": "99",
                        
                    }
                ]
            },
        
        "eventDone": false,
        "eventDefDone": false
    },
    // events 5 is the diary event, where you can read the diary
    {
        "id": 5,
        "isCharacterTalk": false,
        
        "text": 
            {
                
                "Text": "You check your desk. You start to feel nostalgic about the time you spent here during your studies.<br> You find your diary.",
                "Buttons": [
                    {
                        "id": 1,
                        "Text": "Leave",
                        "Goto": "99",

                    },
                    {
                        "id": 2,
                        "Text": "Read the diary",
                        "Goto": "6"
                    }
                ]
            },
        
        "eventDone": false,
        "eventDefDone": false
    },
    // event 6 is reading the diary
    {
        "id": 6,
        "isCharacterTalk": false,
        "text": 
            {
                
                "Text": "You read the diary. It is full of memories, and you feel happy.",
                "Buttons": [
                    {
                        "id": 1,
                        "Text": "Close the diary",
                        "Goto": "99",
                        "endEvent": 6
                    },
                    {
                        "id": 2,
                        "Text": "Take the diary",
                        "Goto": "7",
                        "giveItem": 2,
                        "endEvent": 6
                        
                    }
                ]
            },
        
        "eventDone": false,
        "eventDefDone": false
    },
    {
        //id 7 is close the diary event
        "id": 7,
        "isCharacterTalk": false,
        "text": 
            {
                
                "Text": "You close the diary. You feel happy.",
                "Buttons": [
                    {
                        "id": 1,
                        "Text": "Next",
                        "Goto": "99",
                        "endEvent": 6
                    }
                ]
            },
        
        "eventDone": false,
        "eventDefDone": false
    },
    
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
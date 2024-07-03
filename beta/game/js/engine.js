// this is a game engine. For now, the player is only able to move from room to room.
// The game engine will be able to handle events, items, and other things.
// This is a textual based game, so no drawings or animations are needed.

console.log('Engine is running');
console.log(mapData);

function toggleButton(Bool = true) {
    var buttons = document.getElementsByClassName('gameButton');
    for (var i = 0; i < buttons.length; i++) {
        //if the button have the class locked, skip
        if(buttons[i].classList.contains('locked')){
            continue;
        }
        buttons[i].disabled = Bool;
    }
    
}
function fadeOutAll(gameChat=true, gameNav=true, gameImage=true){
    // remove the roomTextIn class and add the roomTextOut class
    console.log("FADE OUT");
    document.getElementById('gameChat').children[0].classList.remove('roomTextIn');
    document.getElementById('gameNav').classList.remove('roomTextIn');
    document.getElementById('gameImage').classList.remove('roomTextIn');
    if(gameChat) {
        
        document.getElementById('gameChat').children[0].classList.add('roomTextOut');
    }
    if(gameNav){
        
        document.getElementById('gameNav').classList.add('roomTextOut');
    }
    if(gameImage){
        
        document.getElementById('gameImage').classList.add('roomTextOut');
    }
    toggleButton(true);
}
function fadeInAll(gameChat=true, gameNav=true, gameImage=true){
    //remove the roomTextOut class and add the roomTextIn class
    console.log("FADE IN");
    document.getElementById('gameChat').children[0].classList.remove('roomTextOut');
    document.getElementById('gameNav').classList.remove('roomTextOut');
    document.getElementById('gameImage').classList.remove('roomTextOut');
    if(gameChat) {
        
        document.getElementById('gameChat').children[0].classList.add('roomTextIn');
    }
    if(gameNav){
        
        document.getElementById('gameNav').classList.add('roomTextIn');
    }
    if(gameImage){
        
        document.getElementById('gameImage').classList.add('roomTextIn');
    }
    toggleButton(false);
}
// init player in bedroom
var player = {
    "currentRoom": 1,
    "inventory": []
};
// function disable action triggered from a button, where it pass an actionDone attribute to true
function disableAction(actionID){
    var action = mapData.maps[player.currentRoom - 1].actions[actionID];
    action.actionDone = true;
}
// Make a onroomchange event

function onRoomChange(room, animateImage = true, animateAnything = true) {
    // increment the counter (id counter) by 1
    document.getElementById('counter').innerHTML = parseInt(document.getElementById('counter').innerHTML) + 1;
    //check inventoryData.inventory array for each key, then put each item in the html element with id inventory
    // check item id in inventoryData.inventory and find them from itemsData.items. Then put the item name in the inventory div
    //give gameMenu a class roomFadeIn
    var inventoryHtml = '<h3>Inventory</h3>';
    for (var i = 0; i < inventoryData.inventory.length; i++) {
        var item = itemsData.items.find(item => item.id === inventoryData.inventory[i]);
        inventoryHtml += '<p>' + item.name + '</p>';
    }
    document.getElementById('inventory').innerHTML = inventoryHtml;
    // if there is a blur class in the gameImage, remove it
    if(document.getElementById('gameImage').classList.contains('blur') ){
        document.getElementById('gameImage').classList.remove('blur');  
    }
    console.log('Room changed to ' + room);
    // Update the player object
    player.currentRoom = room;
    //Update the div with id gameChat with the room description mapData.maps[room - 1].description;
    // Update after 1 second until the text is gone
    // change rommTextIn by roomTextOut
    
    //if the gameImage has the class roomImgIn, remove it and add roomImgOut
    if(animateImage){
        fadeOutAll();
    }
    else{
        if(animateAnything) fadeOutAll(true,true,true);
        else fadeOutAll(true,true,false);
    }

    toggleButton(true);

    setTimeout(function() {
        document.getElementById('gameChat').innerHTML = "<p class='roomTextIn'>" + mapData.maps[room - 1].description + "</p>";
        document.getElementById('gameNav').classList.add('roomTextIn');
        document.getElementById('gameNav').classList.remove('roomTextOut');
        // Update the gameChat with buttons for the directions
        document.getElementById('gameNav').innerHTML = "";
        var directions = mapData.maps[room - 1].directions;
        var directionsHtml = '';
        for (var key in directions) {
            if (directions.hasOwnProperty(key)) {
                if (directions[key].hidden) {
                    continue;
                }
                if(directions[key].locked) {
                    // button that trigger the event 100
                    directionsHtml += '<button class="gameButton" onclick="triggerEvent(100)">' + key + '</button>';
                }
                else{
                    directionsHtml += '<button class="gameButton" onclick="onDirectionClick(' + directions[key].to + ')">' + key + '</button>';

                }
            }
        }
        document.getElementById('gameNav').innerHTML = directionsHtml;
        // get actions of the map and put it in the gameNav div as directionsHtml, but with a different class which only change the text then change back after a delay
        // Update the gameActions with buttons for the actions
        for (var key in mapData.maps[room - 1].actions) {
            if (mapData.maps[room - 1].actions.hasOwnProperty(key)) {
                var action = mapData.maps[room - 1].actions[key];
                // if the action has a requiredIdDone, check if the event id from eventsData get the attribute eventDone is true
                if (action.requiredIdDone != undefined) {
                    var event = eventsData.events.find(event => event.id === action.requiredIdDone);
                    if (!event.eventDone) {
                        continue;

                    }
                }
                
                // if the action has the giveItem attribute, add the item to the player inventory
                // The give item attribute is the item id
                // the inventory is an array of item id stored in a variable inventoryData as a json and with a key inventory as an array

                if (action.triggerEvent) {
                    // add a button that will trigger the event
                    document.getElementById('gameNav').innerHTML += '<button class="gameButton actions" onclick="triggerEvent(' + action.eventID + ')">' + key + '</button>';
                } else {
                    // add a button that will just display the text
                    // if the actionID has an actionDone attribute, check if it's false and add the button. If it's true, skip
                    console.log(action);
                    console.log(action.actionDone);
                    if(action.actionDone != undefined && action.actionDone){
                        continue;
                    }
                    if(action.actionDone!=undefined){
                        //if the action have giveItem attribute, wich is the item ID, create a button that will give the item to the player
                        if(action.giveItem != undefined){
                            document.getElementById('gameNav').innerHTML += '<button class="gameButton actions" onclick="onActionClick(`' + action.Text + '`); inventoryData.inventory.push(' + action.giveItem + '); disableAction(\'' + key + '\')">' + key + '</button>';
                        }else {
                            document.getElementById('gameNav').innerHTML += '<button class="gameButton actions" onclick="onActionClick(`' + action.Text + '`); disableAction(\'' + key + '\')">' + key + '</button>';
                        }
                    }else {
                        if(action.giveItem != undefined){
                            document.getElementById('gameNav').innerHTML += '<button class="gameButton actions" onclick="onActionClick(`' + action.Text + '`); inventoryData.inventory.push(' + action.giveItem + ')">' + key + '</button>';
                        }else {
                            document.getElementById('gameNav').innerHTML += '<button class="gameButton actions" onclick="onActionClick(`' + action.Text + '`)">' + key + '</button>';
                        }
                    }
                }
            }
        }
        
        // Update the image
        document.getElementById('gameImage').src = '../img/maps/' + mapData.maps[room - 1].image;
        if(animateImage){
            if(document.getElementById('gameImage').classList.contains('roomTextOut'))
            document.getElementById('gameImage').classList.remove('roomTextOut');
        document.getElementById('gameImage').classList.add('roomTextIn');
        }
        toggleButton(false);
        // onload, check if the room has a key called onLoadTriggerEvent, then trigger the event idd
        if(mapData.maps[room - 1].onMapLoadEvent !=undefined){
            toggleButton(true);
            setTimeout(function() {
                triggerEvent(mapData.maps[room - 1].onMapLoadEvent);
                toggleButton(false);
            }, 500);
            
        }

    }, 750);
}



//button on click event
function onDirectionClick(room) {
    // room is the id, we need the name from the id
    //get the locked state of the door
    var key = Object.keys(mapData.maps[player.currentRoom - 1].directions).find(key => mapData.maps[player.currentRoom - 1].directions[key].to === room);
    console.log(key);
    if (mapData.maps[player.currentRoom - 1].directions[key].locked) {
        console.log('The door is locked');
        // append to gameChat
        alert("The door is locked");
        return;
    }
    onRoomChange(room);
}

function onActionClick(text) {
    //fade in text with animate css
    fadeOutAll(true,true,false);
    setTimeout(function() {
        fadeInAll(true,true,false);
        document.getElementById('gameChat').innerHTML = '<p class="actionsText roomTextIn">' + text + '</p>';
        // after a delay, remove the text and put the room description back
        // disable all button if there is an action
        toggleButton(true);

        // set the timeout for the number of letters. Exemple 85 letters is 8500 ms
        var timeout = 2000 + text.length * 40;
        
        setTimeout(function() {
            
            // remove the roomTextIn class and set the roomTextOut class
            //fadeOutAll(true, true, false);
            //set a timeout for the onRoomChange event for the animation to end
            
            setTimeout(function() {
                //give the button the roomTextOut class
                
                onRoomChange(player.currentRoom, false, false);
                
            }, 200);
        }, timeout);
    }, 500);
}
function onEventButtonClick(goto, event){
    //trigger the event from the passed event

}
function triggerEvent(eventID) {
    // disable button function
    console.log("TRIGGER EVENT");
    var event = eventsData.events.find(event => event.id === eventID);
    if(!event.eventDone || !event.eventDefDone) fadeOutAll(true,true,false);
    setTimeout(function() {
        // get the event from the eventID
        document.getElementById('characterPortrait').style.display="none";
        console.log(eventID);
        var event = eventsData.events.find(event => event.id === eventID);
        console.log(event);
        // if "eventDone": false, "eventDefDone": false
        if(!event.eventDone && !event.eventDefDone){
            // show the event text and buttons
            var text = event.text
        
        //if isCharacterTalk is true, then show the character image and the text
        if(event.isCharacterTalk){
            console.log("Character");
            // id="characterPortrait" is actually display none, so we need to remove it
            //document.getElementById('characterPortrait').style.display="block";
            //
            characterID = event.characterID;
            console.log(charactersData[characterID]);
            document.getElementById('characterPortrait').src = '../img/characters/' + charactersData[characterID].image;
            //Once the image is loaded, add the blur class to the gameImage
            document.getElementById('characterPortrait').classList.add('roomTextIn');
            document.getElementById('characterPortrait').onload = function(){
                document.getElementById('gameImage').classList.add('blur');
                //addClass roomtextin
                
                document.getElementById('characterPortrait').style.display="block";
            }
            //add a filter to the background
            var characterName = charactersData[characterID].name;
            text.Text = text.Text.replace('$CHAR', characterName);
        }
            // display text with id 1 with buttons in gameChat for the text and the buttons in gameNav
            // event.texts is an array of objects with id including Text and Buttons array objects
            
            // if text.Text contains $CHAR, replace it with the character name
            
            document.getElementById('gameChat').innerHTML = '<p class="characterText">' + text.Text + '</p>';
            // Update the gameNav with the buttons
            var buttons = text.Buttons;
            //clear the buttons
            document.getElementById('gameNav').innerHTML = "";
            var buttonsHtml = '';
            for (var i = 0; i < buttons.length; i++) {
                console.log("GOTO "+buttons[i].Goto);
                if(buttons[i].Goto == 99){
                    console.log("BBBBBBBBBBBBBBB");
                    //get event from Buttons.endEvent
                    var endEvent = eventsData.events.find(event => event.id === buttons[i].endEvent);
                    console.log(endEvent);
                    // If edvEvent exists, set eventDone to true
                    if(endEvent != undefined){
                        endEvent.eventDone = true;
                        endEvent.eventDefDone = true;
                    }
                    buttonsHtml += '<button class="gameButton" onclick="onRoomChange(' + player.currentRoom +', false, false);">' + buttons[i].Text + '</button>';

                }
                else {
                    buttonsHtml += '<button class="gameButton" onclick="triggerEvent(' + buttons[i].Goto +')">' + buttons[i].Text + '</button>';
            
                }
            }
                document.getElementById('gameNav').innerHTML = buttonsHtml;

        }
        fadeInAll(true,true,false);
    }, 500);
}
// init
onRoomChange(player.currentRoom);

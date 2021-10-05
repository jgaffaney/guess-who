console.log('Here are all the available people:', people);
$(readyNow);

let clickedPlayer = generatePlayer();

//random number generator
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function readyNow() {
    $(`body`).on(`click`, `.picDiv`, checkPlayer);

    $(`header`).append(`<h2 >Click on: ${clickedPlayer}</h2>`);
     
    //render the playingField div
    render();
    console.log('people in readyNow after render', people);
}

function render() {
    //make a clone of people to avoid a memory reference
    let workingArray = [...people];
    
    //empty the playing field
    $('#playingField').empty();

    //loop through a working array randomly, append the playingField, remove that person from the cloned array
    while(workingArray.length > 0) {
        let index = randomNumber(0, workingArray.length-1);
        console.log('current pers', workingArray[index]);
        
        let pic = $(`
            <div class="picDiv" data-person="${workingArray[index]}"><img src="https://github.com/${workingArray[index].githubUsername}.png?size=250" alt="Photo of ${workingArray[index].name}"></div>
        `)
        $('#playingField').append(pic);

        //add .data() info for later use
        pic.data('pers', workingArray[index]);
        workingArray.splice(index, 1)
            }
    console.log('finished');
}

function generatePlayer() {
    console.log('people in generatePlayer', people);
    
    let player = people[randomNumber(0, people.length -1)].name;
    console.log('player', player);
    return player;
    
}

function checkPlayer() { 
    let selection = $(this).closest(`div`).data();
    console.log(selection.pers.name);
    if(selection.pers.name === clickedPlayer){
        alert("Success! You are right!")
        clickedPlayer = generatePlayer();
        $(`h2`).text(`Click on: ${clickedPlayer}`);

    } else {
        alert("Try again!")
    }
    console.log('CLICKED PIC');
    render();
    
}
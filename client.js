console.log('Here are all the available people:', people);
$(readyNow);

let clickedPlayer = generatePlayer();

function readyNow() {
    $(`body`).on(`click`, `.picDiv`, checkPlayer);

    $(`body`).append(`<h2 >Click on: ${clickedPlayer}</h2>`);
   
    for (let person of people) {
        let pic = $(`
        <div class="picDiv" data-person="${person}"><img src="https://github.com/${person.githubUsername}.png?size=250" alt="Photo of ${person.name}"></div>
    
    `)
        $('body').append(pic);

        pic.data(`pers`, person);
        console.log(pic);

    }


    generatePlayer();


}

function generatePlayer() {
    function randomNumber(min, max){
        return Math.floor(Math.random() * (1 + max - min) + min);
    }
    let player = people[randomNumber(0, people.length -1)].name;
    // console.log(player);
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
    
}
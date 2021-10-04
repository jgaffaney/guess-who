console.log('Here are all the available people:', people);
$(readyNow);

function readyNow() {
    $(`body`).on(`click`, `.picDiv`, checkPlayer);

    $(`body`).append(`<h2 >Click on: ${generatePlayer()}</h2>`);
   
    for(let person of people) {
        $('body').append(`
        <div class="picDiv"><img src="https://github.com/${person.githubUsername}.png?size=250" alt="Photo of ${person.name}"></div>
    
    `);
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
    console.log('CLICKED PIC');
    
}
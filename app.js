function playSound($id){
    console.log('Note' + $id + ' jouer');
    const audio = new Audio("audio/"+$id+".mp3");
    audio.play();
}
var i=0;
function kitten() {
    let audio = new Audio("kitten.wav");
    i++;
    if(i%100===0){
        audio.play();
        i=0;
    }
}

$(function() {
    let sentence = []
    document.getElementById("imageGrid").addEventListener("click", function (event) {
        let target = event.target.closest(".letter-button");
        if (target) {
            let letter = target.querySelector("div").textContent;
            let imgElement = target.querySelector("img");
            let img = imgElement ? imgElement.src : "No image found";
            let newImg = document.createElement("img")
            newImg.src = img

            const viewportWidth = document.documentElement.clientWidth;
            console.log("Viewport width (excluding scrollbar):", viewportWidth, "px");

            newImg.height = viewportWidth/10
            newImg.width = viewportWidth/10
            console.log("img: " + img)
            console.log("Letter clicked:", letter);
            sentence.push(letter)
            console.log("Sentence: " + sentence)
            $("#sentence_builder").append(newImg)
        }
    });

    $("#clear").click(function() {
        $("#sentence_builder").html("")
        sentence = []
        console.log("Sentence: " + sentence)
    })
    $("#delete").click(function() {
        sentence.pop()
        $("#sentence_builder *:last-child").remove();
        console.log("Sentence: " + sentence)
    })
    $("#play").click(function() {
        var index = 1;
        let audio = new Audio();
        audio.src=`/content-modules/ASL/audio/${sentence[0]}.mp3`;
        audio.play();

        audio.onended = function() {
            if(index < sentence.length){
                audio.src=`/content-modules/ASL/audio/${sentence[index]}.mp3`
                audio.play();
                index++;
            }
        };
    })
})
$(document).ready(function () {
    // 14개의 문장 목록
    const texts = [
        "The Decisive Moment",
        "By Mark Strand.",
        "There is a moment when the world stands still,",
        "A fleeting second, light bends to will.",
        "The shutter blinks, the frame is cast,",
        "A memory captured forever to last.",
        "Faces frozen in silent speech,",
        "Landscapes hold what words can't reach.",
        "A childs laughter, a tears descent",
        "A past recalled, a future sent.",
        "The lens, an eye that never sleeps,",
        "Stealing time in stolen keeps.",
        "A photograph a life, a trace,",
        "A moment held in lights embrace."
    ];

    let index = 0; 

    $(".line1 img, .line2 img, .line3 img").click(function (event) {
        if (index >= texts.length) {
            index = 0;
        }
        let selectedText = texts[index]; 
        index++; 

        
        let randomX = Math.random() * ($(window).width() - 220); 
        let randomY = Math.random() * ($(window).height() - 50); 

        
        let textBox = $("<div class='text-box'></div>").text(selectedText); 
        textBox.css({ top: randomY + "px", left: randomX + "px" });

        $(".container").append(textBox);

        
        setTimeout(function () {
            textBox.fadeOut(10000, function () {
                $(this).remove();
            });
        }, 10000);
    });
});

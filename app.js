$(function () {

    $("#button").on("click", function(evt) {
        evt.preventDefault();
        let movieTitle = $("#movieTitle").val()
        let rating = $("#rating").val()
        let newButton = $("<button>").css("height", "20px").css("width", "60px").text("delete")


        $('#container').append(movieTitle).append("                   -                        ").append(rating).append("                                            ").append(newButton)
    
    



    })



})
// start with $ is the JQuery based / JavaScript controls for Bootstrap component

// $(document).ready(function(){
//             $("#mycarousel").carousel( { interval: 2000 } );
//             $("#carousel-pause").click(function(){
//                 $("#mycarousel").carousel('pause');
//             });
//             $("#carousel-play").click(function(){
//                 $("#mycarousel").carousel('cycle');
//             });
//         });

$("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    // carousel will be paused
                    $("#mycarousel").carousel('pause');
                    // the icon will be changed to a play icon
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });

$(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
        });
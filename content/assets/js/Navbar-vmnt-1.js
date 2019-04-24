$(document).ready(function(){
	$("#search-field").on("click",function(){
		$("#search-field").animate({
            "width": "400px"
        }); 
        $("#search-field").css({ 
            color: '#000'
        }); 
        $("#form").css({
            backgroundColor: '#fff'
        });
        $("#icon-busca").css({
            color: '#676363'
        }); 
        $("#search-field::-webkit-input-placeholder").css(
            { color: '#000000'
        });
        $("#search-field:-moz-placeholder").css(
            { color: '#676363'
        });
        $("#search-field::-moz-placeholder").css(
            { color: '#676363'
        });
        $("#search-field:-ms-input-placeholder").css(
            { color: '#676363'
        });
    })

    $('#search-field, #botao-limpa').blur(function(){
        setTimeout(function(){
            if(!$('#search-field, #botao-limpa').is(':focus')){
                $("#search-field").animate({
                    "width": "172px"
                }); 
            }
        },10);
        $("#form").css({
            backgroundColor: '#676363' 
        }); 
        $("#search-field").css({
            color: 'rgb(150, 146, 146)'
        });
        $("#icon-busca").css({
            color: '#fff'
        }); 
    });;    
});
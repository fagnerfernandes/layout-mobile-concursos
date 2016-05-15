$(document).ready(function () {

    /* Cabeçalho */
    $("#abre-menu").click(function () {
        if ($("#pesquisa-expand").is(":visible")) {
            $("#pesquisa-expand").slideToggle("slow");
            $("#abre-pesquisa").removeClass("active");
            $("#search").removeClass("active");
        }
        else if ($("#login-expand").is(":visible")) {
            $("#login-expand").slideToggle("slow");
            $("#abre-login").removeClass("active");
        }
        $("#menu-expand").slideToggle("slow");
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });

    $("#abre-pesquisa").click(function () {
        if ($("#menu-expand").is(":visible")) {
            $("#menu-expand").slideToggle("slow");
            $("#abre-menu").removeClass("active");
        }
        else if ($("#login-expand").is(":visible")) {
            $("#login-expand").slideToggle("slow");
            $("#abre-login").removeClass("active");
        }
        $("#pesquisa-expand").slideToggle("slow");
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });

    $("#abre-login").click(function () {
        if ($("#pesquisa-expand").is(":visible")) {
            $("#pesquisa-expand").slideToggle("slow");
            $("#abre-pesquisa").removeClass("active");
        }
        else if ($("#menu-expand").is(":visible")) {
            $("#menu-expand").slideToggle("slow");
            $("#abre-menu").removeClass("active");
        }
        $("#login-expand").slideToggle("slow");
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });

    $(".limpa-pesquisa").click(function () {
        $("#pesquisa-rol").val("");
    });
    /* Cabeçalho */

    /* Cabeçalho Logado */
    $("#search").click(function () {
        if ($("#user-expand").is(":visible")) {
            $("#user-expand").slideToggle("slow");
            $("#bem-vindo").removeClass("active");
        }
        if ($("#acesso-expand").is(":visible")) {
            $("#acesso-expand").slideToggle("slow");
            $("#ultimo-acesso").removeClass("active");
        }
        if ($("#notificacao-expand").is(":visible")) {
            $("#notificacao-expand").slideToggle("slow");
            $("#notificacao").removeClass("active");
        }
        $("#pesquisa-expand").slideToggle("slow");
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });

    $("#bem-vindo").click(function () {
        if ($("#pesquisa-expand").is(":visible")) {
            $("#pesquisa-expand").slideToggle("slow");
            $("#search").removeClass("active");
        }
        if ($("#acesso-expand").is(":visible")) {
            $("#acesso-expand").slideToggle("slow");
            $("#ultimo-acesso").removeClass("active");
        }
        if ($("#notificacao-expand").is(":visible")) {
            $("#notificacao-expand").slideToggle("slow");
            $("#notificacao").removeClass("active");
        }
        $("#user-expand").slideToggle("slow");
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });

    $("#ultimo-acesso").click(function () {
        if ($("#pesquisa-expand").is(":visible")) {
            $("#pesquisa-expand").slideToggle("slow");
            $("#search").removeClass("active");
        }
        if ($("#user-expand").is(":visible")) {
            $("#user-expand").slideToggle("slow");
            $("#bem-vindo").removeClass("active");
        }
        if ($("#notificacao-expand").is(":visible")) {
            $("#notificacao-expand").slideToggle("slow");
            $("#notificacao").removeClass("active");
        }
        $("#acesso-expand").slideToggle("slow");
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });

    $("#notificacao").click(function () {
        if ($("#pesquisa-expand").is(":visible")) {
            $("#pesquisa-expand").slideToggle("slow");
            $("#search").removeClass("active");
        }
        if ($("#user-expand").is(":visible")) {
            $("#user-expand").slideToggle("slow");
            $("#bem-vindo").removeClass("active");
        }
        if ($("#acesso-expand").is(":visible")) {
            $("#acesso-expand").slideToggle("slow");
            $("#ultimo-acesso").removeClass("active");
        }
        $("#notificacao-expand").slideToggle("slow");
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });
    /* Cabeçalho Logado */

    $('.alerta-icone').on('click', function () {
        $(this).fadeOut("slow");
        $(this).parent().fadeOut("slow");
    });

    /* Sub Menu */
    $(".item").click(function () {
        $(this).children("ul.sub-menu").slideToggle();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
        $(".item").not(this).each(function () {
            $(this).removeClass("active");
        });
        $(".item").not(this).children("ul.sub-menu").each(function () {
            if ($(this).is(":visible")) {
                $(this).slideToggle();
            }
        });
    });
    /* Sub Menu */

    /*Formulários*/
//Validação
    if ($('.form-padrao').length) {
        $(".form-padrao").validate({
            submitHandler: function (form) {
                $('.mtlsr-lightbox').fadeIn();
                $('body').append('<img class="img-calcula" style="display:none">');
                $('.mtlsr-lightbox').append('<div class="msg-sucesso"><a href="#" class="close"></a><span>e-mail enviado com sucesso</span><p>Enviamos um link de recuperação para seu e-mail. Abra seu e-mail e acesse o link para redefinir sua senha.</p></div><div class="full-overlay"></div><script>$(".full-overlay").click(function(){$(".mtlsr-lightbox .close").click();});</script>');
                return false;
                form.submit();
            }
        });

        jQuery.extend(jQuery.validator.messages, {
            required: "Por favor, preencha o campo em destaque.",
            email: "E-mail inválido.",
            number: "Please enter a valid number.",
            equalTo: "A confirmação de senha não confere",
        });
    }

//Mask
    if ($('input[name="data"]').length) {
        $('input[name="data"]').mask('99/99/9999');
    }
    /*Formulários*/

    /* Accordion */
    $(document).ready(function () {
        function close_accordion_section() {
            $('.accordion .accordion-section-title').removeClass('active');
            $('.accordion .accordion-section-title').find('.dd-icon').removeClass('active');
            $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
        }

        $('.accordion-section-title').click(function (e) {
            // Grab current anchor value
            var currentAttrValue = $(this).attr('href');

            if ($(e.target).is('.active')) {
                close_accordion_section();
            } else {
                close_accordion_section();

                // Add active class to section title
                $(this).addClass('active');
                $(this).find('.dd-icon').addClass('active');
                // Open up the hidden content panel
                $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
            }

            e.preventDefault();
        });
    });
    /* Accordion */

    /* Selector Cidades */
    $(function () {
        $("#seletor").change(function () {
            if ($("#seletor").val() != "0") {
                $("#alfabeto").slideDown();
            } else {
                $("#alfabeto").slideUp();
            }
        });
    });

//LISTAGEM DE CONCURSOS ABERTOS
    var clicado;

    $('.visivel').click(function () {
        if (clicado !== true) {
            $(this).parent().find('.more-info').slideToggle();
            $(this).parent().find('li.arrow').removeClass('down_arrow');
            $(this).parent().find('li.arrow').addClass('up_arrow');
            clicado = true;
            return clicado;
        }
        else {
            $(this).parent().find('.more-info').slideToggle();
            $(this).parent().find('li.arrow').addClass('down_arrow');
            $(this).parent().find('li.arrow').removeClass('up_arrow');
            clicado = false;
            return clicado;
        }
    });
    
    $('.banco-content').click(function(ev){       
        $(this).children('.video-capa').hide();       
        $('.video-container iframe').show();
        ev.preventDefault();
    });    

});

//YOUTUBE API
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('video', {
    events: {
        // call this function when player is ready to use
        'onReady': onPlayerReady
        }
    });      
}

function onPlayerReady(event) {      
    $('.banco-content').click(function(ev){       
        $(this).children('.video-capa').hide();       
        $('.video-container iframe').show();
        player.playVideo();
        ev.preventDefault();
    }); 
} 
let cabeca = document.getElementsByClassName("container-header")[0]

document.body.onscroll = mudar

function mudar(e) {
    let elemento = e.target.scrollingElement.scrollTop

    if (elemento > 10) {
        cabeca.classList.add("cor")
        return
    }
    cabeca.classList.remove("cor")
}

var ok = true
let pesquisa = $('#pesquisa')
let conta = $('.contas')
let navegacao = $('.nav-queri')

function clicar(e) {
    if (ok) {
        ok = false
        e.show(300)
        return
    }
    e.hide(300)
    ok = true
}

$('.lupa').click(() => {
    clicar(pesquisa)
})

$('#perfil').click(() => {
    clicar(conta)
})

$('.navegar').click(() => {
    clicar(navegacao)
})

// Carrosel ===========================================================

$('.nonloop').owlCarousel({
    items:3,
    loop:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0: {
            items:1,
        },
        600:{
            items:3
        }
    }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:true
        }
    }
})

document.addEventListener(
     //*Garanete que carreta todo o HTML antes de executar o JS*//
    "DOMContentLoaded",
    function(){
        //Seleciona o elemento <menu do HTML pelo nome do elemento>
        const menu = document.querySelector("menu");
        //Obtém a distância em PX entre o topo da página e o meu menu
        const topo = menu.offsetTop;
        window.addEventListener("scroll", function(){
            const posicaoScroll = document.documentElement.scrollTop || document.body.scrollTop;

            //Criando uma condicional
            if(posicaoScroll>=topo){
            menu.classList.add("fixed");
            }else{
                //removo a propriedade de fixar o menu no topo da página
                menu.classList.remove("fixed");
            }
        });
    }
);
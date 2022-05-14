
// Menu Mobile
var menuIcon = document.getElementById('hamburguer-icon')
var divMenuIcon = document.getElementById('sliding-header-menu-outer')
var closeButton = document.getElementById('sliding-header-menu-close-button')

menuIcon.onclick = function () {
  divMenuIcon.style.right = '0px'
}

closeButton.onclick = function(){
  divMenuIcon.style.right = '-320px'
}



// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unselected_color = "#646872";
var selected_color = "#2A2D34";

var tags = document.getElementsByClassName('single-tab')

for(let a = 0; a < tags.length; a++ ){
  tags[a].onclick = function () {

    for(let b = 0; b < tags.length; b++ ){
      tags[b].style['background-color'] = unselected_color;
      tags[b].style['font-weight'] = 'normal';
    }
    this.style['background-color'] = selected_color;
    this.style['font-weight'] = 'bold';

    var selecionado = this.innerHTML

    document.getElementById('box-text').innerHTML = aboutUs[selecionado]
  }


}



// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

//service-previous
//service-next
//service-text
//service-title

var servicosAtual = 0;

var title = document.getElementById('service-title')
var text = document.getElementById('service-text')

document.getElementById('service-previous').onclick = function(){

  if(servicosAtual == 0){
    var servicoAnterior = our_services.length - 1;
  }else{
    servicoAnterior = servicosAtual - 1;
  }

  title.innerHTML = our_services[servicoAnterior].title;
  text.innerHTML = our_services[servicoAnterior].text;

  servicosAtual = servicoAnterior;
}

document.getElementById('service-next').onclick = function(){

  if(servicosAtual == our_services.length - 1){
    var ProxServico = 0;
  }else{
    ProxServico = servicosAtual + 1;
  }

  title.innerHTML = our_services[ProxServico].title;
  text.innerHTML = our_services[ProxServico].text;

  servicosAtual = ProxServico;
}

// Data Footer

var anoAtual = new Date;

anoAtual = anoAtual.getFullYear()
document.getElementById('current_year').innerHTML = anoAtual
  
   


   
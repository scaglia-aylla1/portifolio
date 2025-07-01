/** Retomar as guias de sessão e o conteúdo das guias */

const resumeTabs = document.querySelector(".resume-tabs");
const resumePortifolioTabBtns = resumeTabs.querySelectorAll('.tab-btn');
const resumeTabContents = document.querySelectorAll(".resume-tab-content");

var resumeTabNav = function(resumeTabClick){
    resumeTabContents.forEach((resumeTabContent) => {
        resumeTabContent.style.display = "none";
        resumeTabContent.classList.remove("active");
    });

    resumePortifolioTabBtns.forEach((resumePortifolioTabBtn) => {
        resumePortifolioTabBtn.classList.remove("active");
    });

    resumeTabContents[resumeTabClick].style.display = "flex";

    setTimeout(() => {
        resumeTabContents[resumeTabClick].classList.add("active");
    }, 100);
    
    resumePortifolioTabBtns[resumeTabClick].classList.add("active");

}
resumePortifolioTabBtns.forEach((resumePortifolioTabBtn, i) => {
    resumePortifolioTabBtn.addEventListener("click", () => {
        resumeTabNav(i);
    });
});
/** Serviços função open/close */
const serviceCardWithModals = document.querySelectorAll(".service-container .card-with-modal");

serviceCardWithModals.forEach((serviceCardWithModal) => {
    const serviceCard = serviceCardWithModal.querySelector(".service-card");
    const serviceBackdrop = serviceCardWithModal.querySelector(".service-modal-backdrop");
    const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");
    const serviceModal = serviceCardWithModal.querySelector(".service-modal");

    serviceCard.addEventListener("click", () => {
        serviceBackdrop.style.display = "flex";

        setTimeout(() => {
            serviceBackdrop.classList.add("active");
        }, 100);
        
        setTimeout(() => {
            serviceModal.classList.add("active");
        }, 300);
        
    });

    modalCloseBtn.addEventListener("click", () => {

        setTimeout(() => {
            serviceBackdrop.style.display = "none";
        }, 500);

        setTimeout(() => {
            serviceBackdrop.classList.remove("active");
            serviceModal.classList.remove("active");
        }, 100);
        
    });
});

/**Portifólio */
/**Modais, guias e cartões do Portifólio */
document.addEventListener("DOMContentLoaded", () => {
    const portifolioTabs = document.querySelector(".portifolio-tabs");
    const portifolioTabBtns = portifolioTabs.querySelectorAll(".tab-btn");
    const cardsWithModals = document.querySelectorAll(".portifolio-container .card-with-modal");

    portifolioTabBtns.forEach((tabBtn) => {
        tabBtn.addEventListener("click", () => {
            const filter = tabBtn.getAttribute("data-filter");

            cardsWithModals.forEach((cardWithModal) => {
                if (filter === "all" || cardWithModal.classList.contains(filter)) {
                    
                    cardWithModal.classList.remove("hidden");

                    setTimeout(() => {
                        cardWithModal.style.opacity = "1";
                        cardWithModal.style.transition = ".5s ease";

                    }, 1);
                }
                else{
                    cardWithModal.classList.add("hidden");

                    setTimeout(() => {
                        cardWithModal.style.opacity = "0";
                        cardWithModal.style.transition = ".5s ease";

                    }, 1);
                }
            });
           // add classe ativa ao botão da guia clicado
           portifolioTabBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
           tabBtn.classList.add("active");

        });

    });
});
/**Abrir e fechar modais */
const portifolioCardsWithModals = document.querySelectorAll(".portifolio-container .card-with-modal");
 
portifolioCardsWithModals.forEach((portifolioCardWithModal) => {
    const portifolioCard = portifolioCardWithModal.querySelector(".portifolio-card");
    const portifolioBackdrop = portifolioCardWithModal.querySelector(".portifolio-modal-backdrop");
    const portifolioModal = portifolioCardWithModal.querySelector(".portifolio-modal");
    const modalCloseBtn = portifolioCardWithModal.querySelector(".modal-close-btn");

    portifolioCard.addEventListener("click", () => {
        portifolioBackdrop.style.display = "flex";

        setTimeout(() => {
            portifolioBackdrop.classList.add("active");
        }, 300);

        setTimeout(() => {
            portifolioModal.classList.add("active");
        }, 300);
         
    });

    modalCloseBtn.addEventListener("click", () => {
        setTimeout(() => {
            portifolioBackdrop.style.display = "none";
        }, 300);

        setTimeout(() => {
            portifolioBackdrop.classList.remove("active");
            portifolioModal.classList.remove("active");
        }, 100);
         
    });
});

/** Enviar/receber emails pelo formulário de contato = EmailJS */
(function() {
 // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "dc-RKHXY4-_HuLHbS",
    });
})(); 

 ayContactForm = document.getElementById("ay-contact-form");
 ayContactFormAlert = document.querySelector(".contact-form-alert");

ayContactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_5efm453', 'template_w8xfltw', '#ay-contact-form')
      .then(() => {
        //console.log('Success!');
        ayContactFormAlert.innerHTML =" <span>Mensagem enviada com sucesso!</span><i class='ri-checkbox-circle-fill'></i>"
        ayContactForm.reset();

        setTimeout(() => {
             ayContactFormAlert.innerHTML = ""
        }, 5000)
      }, (error) => {
        //console.log('Failed...', error)
        ayContactFormAlert.innerHTML =" <span>Mensagem não foi enviada.</span><i class='ri-error-warning-fill'></i>"
        ayContactFormAlert.title = error;
      });
});
/** Diminuir a altura do cabeçalho no scrool */
window.addEventListener("scroll", () => {
    const ayHeader = document.querySelector(".ay-header");

    ayHeader.classList.toggle("shrink", window.scrollY > 0);
});
/** Cada item do menu de navegação inferior está ativo na rolagem da página */
window.addEventListener("scroll", () => {
    const navMenuSections = document.querySelectorAll(".nav-menu-section");
    const scrollY = window.pageYOffset;

    navMenuSections.forEach((navMenuSection) =>{
        let sectionHeight = navMenuSection.offsetHeight;
        let sectionTop = navMenuSection.offsetTop;
        let id = navMenuSection.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.add("current");
        }else{
            document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.remove("current");
        }
    });
});
/** Para mostrar o menu de navegação inferior na página inicial (carregamento da página) */
window.addEventListener("DOMContentLoaded", () => {
    const bottomNav = document.querySelector(".bottom-nav");

    bottomNav.classList.toggle("active", window.scrollY < 10);
});
/** Para mostrar/ocultar o menu de navegação inferior na página inicial (rolar) */
const bottomNav = document.querySelector(".bottom-nav");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");
var navTimeout;

window.addEventListener("scroll", () => {
    bottomNav.classList.add("active");
    menuShowBtn.classList.remove("active");

    if (window.scrollY < 10) {
        menuHideBtn.classList.remove("active");

        function scrollStopped() {
           bottomNav.classList.add("active"); 
        }

        clearTimeout(navTimeout);
        navTimeout = setTimeout(scrollStopped, 2500);   
    }

    if (window.scrollY > 10) {
        menuHideBtn.classList.add("active");

        function scrollStopped() {
           bottomNav.classList.remove("active"); 
           menuShowBtn.classList.add("active");
        }

        clearTimeout(navTimeout);
        navTimeout = setTimeout(scrollStopped, 2500);   
    }
});
/** Ocultar o menu de navegação inferior ao clicar */
menuHideBtn.addEventListener("click", () => {
    bottomNav.classList.toggle("active");
    menuHideBtn.classList.toggle("active");
    menuShowBtn.classList.toggle("active");
});
/** Mostrar o menu de navegação inferior ao clicar */
menuShowBtn.addEventListener("click", () => {
    bottomNav.classList.toggle("active");
    menuHideBtn.classList.add("active");
    menuShowBtn.classList.toggle("active");
});
/*======== Botão para cima com barra indicadora de rolagem =======*/
window.addEventListener("scroll", () => {
    const toTopBtn = document.querySelector(".to-top-btn");

    toTopBtn.classList.toggle("active", window.scrollY > 0);

    //Barra indicadora de rolagem
    const scrollIndicadorBar = document.querySelector(".scroll-indicator-bar");

    const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollValue = (pageScroll / height) * 100;

    scrollIndicadorBar.style.height = scrollValue + "%";
});

/** Costumizar cursor no movimento do mouse */
const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");
const cursorCircle = document.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    
    cursorDot.style.top = y + "px";
    cursorDot.style.left = x + "px";
    cursorCircle.style.top = y + "px";
    cursorCircle.style.left = x + "px";
});
/** Efeitos de cursor em elementos suspensos do site */
const cursorHoverlinks = document.querySelectorAll("body a, .theme-btn, .ay-main-btn, .portifolio-card, .service-card, .contact-social-links li, .contact-form, .submit-btn, .menu-show-btn, .menu-hide-btn");

cursorHoverlinks.forEach((cursorHoverlink) => {
    cursorHoverlink.addEventListener("mouseover", () => {
        cursorDot.classList.add("large");
        cursorCircle.style.display = "none";
    });
});
cursorHoverlinks.forEach((cursorHoverlink) => {
    cursorHoverlink.addEventListener("mouseout", () => {
        cursorDot.classList.remove("large");
        cursorCircle.style.display = "block";
    });
});

/** Altere o tema e salve o tema atual clicando no botão do tema */
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    //alterar o ícone do tema e o tema ao clicar no botão do tema
    themeBtn.classList.toggle("active-sun-icon");
    document.body.classList.toggle("light-theme");

    //salve o ícone do tema e o tema ao clicar no botão do tema
    const getCurrentIcon = () => themeBtn.classList.contains("active-sun-icon") ? "sun" : "moon";
    const getCurrentTheme = () => document.body.classList.contains("light-theme") ? "light" : "dark";

    localStorage.setItem("ay-saved-icon", getCurrentIcon());
    localStorage.setItem("ay-saved-theme", getCurrentTheme());
});
//Obter o ícone do tema salvo e o tema no documento carregado
const savedIcon = localStorage.getItem("ay-saved-icon");
const savedTheme = localStorage.getItem("ay-saved-theme");

document.addEventListener("DOMContentLoaded", () => {
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("active-sun-icon");
    document.body.classList[savedTheme === "light" ? "add" : "remove"]("light-theme");
});
/** ScroolReveal JS animações */
ScrollReveal({
    //reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.avatar-img', { delay: 100, origin: 'top' });
ScrollReveal().reveal('.avatar-info, .section-title', { delay: 300, origin: 'top' });
ScrollReveal().reveal('.home-social, .home-scroll-btn, .copy-right', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.about-img', { delay: 700, origin: 'top' });
ScrollReveal().reveal('.about-info, .ay-footer .ay-logo', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.pro-card, .about-buttons, .ay-main-btn, .resume-tabs .tab-btn, .portifolio-tabs .tab-btn', { delay: 500, origin: 'right', interval: 200 });
ScrollReveal().reveal('#resume .section-content', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.service-card, .portifolio-card, .contact-item, .contact-social-links li, .footer-menu .menu-item', { delay: 300, origin: 'bottom', interval: 300 });
ScrollReveal().reveal('.contact-form-body', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.contact-info h3', { delay: 100, origin: 'bottom', interval: 300 });

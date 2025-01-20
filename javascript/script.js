// Código de navegação
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            });
        }
    });
};

// Corrigindo o evento onClick para 'click' no menu
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Lógica de envio do formulário com AJAX para Formspree
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio normal do formulário

    // Dados do formulário
    const formData = new FormData(event.target);

    // Prepara os dados para o envio em JSON
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Envia os dados usando o Fetch API (AJAX)
    fetch('https://formspree.io/f/xlddkvqo', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            const popup = document.getElementById('popup');
            const popupMessage = document.getElementById('popup-message');

            if (response.ok) {
                popupMessage.textContent = "Sua mensagem foi enviada com sucesso!";
                popup.style.backgroundColor = "#28a745"; // Verde para sucesso
            } else {
                popupMessage.textContent = "Ocorreu um erro. Tente novamente mais tarde.";
                popup.style.backgroundColor = "#dc3545"; // Vermelho para erro
            }

            // Exibe o pop-up
            popup.style.display = 'block';

            // Após 3 segundos, o pop-up desaparecerá
            setTimeout(function () {
                popup.style.display = 'none';
            }, 3000);
        })
        .catch(error => {
            const popup = document.getElementById('popup');
            const popupMessage = document.getElementById('popup-message');

            popupMessage.textContent = "Erro na comunicação com o servidor.";
            popup.style.backgroundColor = "#dc3545"; // Vermelho para erro
            popup.style.display = 'block';

            setTimeout(function () {
                popup.style.display = 'none';
            }, 3000);
        });
});

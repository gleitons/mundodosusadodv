const nTelefonew = '3898******* ';
const nTel = "(51) 98***-***8";
const mensagem = "Olá, gostaria de adquirir o domínio "
const url = window.location.href;

document.getElementById('direito').innerHTML = `<img src="/comprar-dominio.png" alt="${url} comprar a venda">`

document.getElementById('btnT').innerHTML = `<a href='https://api.whatsapp.com/send?phone=${nTelefonew}&text=${mensagem}${url} ' target='_blank'><button disabled><i class="bi bi-card-checklist"></i>Entre em Contato</button></a>
<a href='https://api.whatsapp.com/send?phone=${nTelefonew}&text=${mensagem}${url} ' target='_blank'>
    <strong>
        <p>(51) 98***-***8</p> 
    </strong>
</a>        `;

document.getElementById('foter').innerHTML = `<p>Este domínio está disponível para <strong>Venda</strong> ou <strong>Locação</strong>. Interessados tratar pelo WhatsApp: <a href='https://api.whatsapp.com/send?phone=${nTelefonew}&text=${mensagem}${url}'<strong> <p>${nTel}</p></strong></a></p>`;




const mudaIMG = document.querySelector('.direito');
mudaIMG.innerHTML = ` <a href="https://www.instagram.com/mundo_dos_usados_oficial/">
    <div class="animatMDU">
    <div>
        <img src="/mdu-animado-one.jpg" alt="">
    </div>
    <img src="/mdu-animado.png" alt="">
    </div>
</a>`
import {} from 'react'; 
import '/src/css/style.css';

function Footer() {

    const toggleContatoDevs = () => {
        var x = document.getElementById("contato-devs-absolute");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }
      
    const validarEmail =  () => { 
      const emailInput = document.getElementById('mail');
    
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
      if (emailInput.value === null || !regexEmail.test(emailInput.value)) {
        alert("E-mail inválido")    
      } 
    }

    return(
    <>
        <footer id="footer">
            <div id="footer-info-contato">
                <div id="contato-link-info-desenvolvedores">
                    <button id="btn-contato-devs" onClick={toggleContatoDevs}>
                        <h3 id="contato-grande">Contato</h3>
                        <p id="contato-mini">dos desenvolvedores</p>
                    </button>
                </div>

                <div id="direita">
                    <div id="emails">
                        <p>Av. Dr. Enéas de Carvalho Aguiar, 255</p>
                        <p>Cerqueira César</p>
                        <p>05403-000</p>
                        <p>São Paulo - Brasil</p>
                        <p>Tel.: (0xx11) 2661-0000</p>

                    </div>

                    <div id="receber-info-projeto">
                        <p id="p-info-projeto">Deseja receber mais informações sobre o projeto?</p>
                        <form id="verificar-email">
                            <label htmlFor="mail">E-mail:</label>
                            <input type="email" id="mail" />
                            <button onClick={validarEmail} id="botao-comic" type="submit">Confirmar</button>                    
                        </form>
                    </div>
                </div>

            </div>
            <div id="linha"></div>
            <div id="redes-sociais-container">
                <div className="logo-rede-social-box">
                    <a href="https://twitter.com/hospitalHCFMUSP" className="fonte-branca">
                        <i className="bi bi-twitter"></i>
                    </a>
                </div>
                <div className="logo-rede-social-box" >
                    <a href="https://www.facebook.com/hospitaldasclinicasdafmusp/?locale=pt_BR" className="fonte-branca">
                        <i className="bi bi-facebook"></i>
                    </a>
                </div>
                <div className="logo-rede-social-box">
                    <a href="https://www.instagram.com/hospitalhcfmusp/" className="fonte-branca">
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
                <div className="logo-rede-social-box">
                    <a href="https://www.linkedin.com/company/hcfmusp/?originalSubdomain=br" className="fonte-branca">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
        </footer>
        <div id="contato-devs-absolute">
            <div id="contato-desenvolvedor-container">
                <div className="contato-desenvolvedor-box">
                    <div className="imagem-desenvolvedor" id="caio-freitas-img"></div>
                    <p className="fonte-branca">Caio Freitas</p>
                    <p className="fonte-branca">caio.freitascfc@gmail.com</p>
                    <p className="fonte-branca">(11) 9 8310-3503</p>
                    <a href="https://www.linkedin.com/in/caio-freitas-627972284/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="bi bi-linkedin fonte-branca"></i></a>
                </div>            
                <div className="contato-desenvolvedor-box">
                    <div className="imagem-desenvolvedor" id="lana-andrade-img"></div>
                    <p className="fonte-branca">Lana Andrade</p>
                    <p className="fonte-branca">lanaandrade2003@gmail.com</p>
                    <p className="fonte-branca">(11) 9 6875-4044</p>
                    <a href="https://www.linkedin.com/in/lanaoliveiraandrade/"><i className="bi bi-linkedin fonte-branca"></i></a>
                </div>

                <div className="contato-desenvolvedor-box">
                    <div className="imagem-desenvolvedor" id="lucas-garcia-img"></div>
                    <p className="fonte-branca">Lucas Garcia</p>
                    <p className="fonte-branca">lucas.edugarciat@gmail.com</p>
                    <p className="fonte-branca">(11) 9 5966-5055</p>
                    <a href="https://www.linkedin.com/in/lucas-garcia-dsv"><i className="bi bi-linkedin fonte-branca"></i></a>
                </div>
                <div className="contato-desenvolvedor-box">
                    <div className="imagem-desenvolvedor" id="mateus-tibao-img"></div>
                    <p className="fonte-branca">Mateus Tibão</p>
                    <p className="fonte-branca">mateus.tibao@gmail.com</p>
                    <p className="fonte-branca">(11) 9 9841-5322</p>
                    <a href="https://www.linkedin.com/in/mateustibao/"><i className="bi bi-linkedin fonte-branca"></i></a>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer;
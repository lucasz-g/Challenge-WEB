import {} from 'react';
import '/src/css/style.css';


function Home(){
    
    // Função para abrir nova janela com imagem
    function showImage() {
        // Abrir uma nova janela
        var newWindow = window.open('', '_blank', 'width=800,height=800');
        
        // Definir a senha predefinida
        var predefinedPassword = "admin";
      
        // Armazenar a senha predefinida no localStorage
        localStorage.setItem('password', predefinedPassword);
        
        // Armazenar o número de tentativas de login
        var loginAttempts = 0;
        
        // Criar o HTML para exibir a tela de login na nova janela
        var html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Login</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
              text-align: center;
            }
      
            input {
              margin-bottom: 10px;
            }
      
            button {
              padding: 10px 20px;
              background-color: #4CAF50;
              color: white;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              transition: background-color 0.3s;
              font-size: 16px;
            }
      
            button:hover {
              background-color: #45a049;
            }
          </style>
        </head>
        <body>
          <h2>Faça o login</h2>
          <input type="text" placeholder="Usuário" id="username"><br>
          <input type="password" placeholder="Senha" id="password"><br>
          <button onclick="login()">Entrar</button>
      
          <script>
            function login() {
              var username = document.getElementById('username').value;
              var password = document.getElementById('password').value;
      
              // Verificar se a senha digitada corresponde à senha armazenada
              var storedPassword = localStorage.getItem('password');
              if (password === storedPassword) {
                // Se o login for bem-sucedido, gerar uma nova senha aleatória após 3 tentativas de login inválidas
                if (loginAttempts >= 2) {
                  var newPassword = generateRandomPassword();
                  localStorage.setItem('password', newPassword);
                  alert('Senha randomizada após 3 tentativas de login inválidas!');
                }
      
                // Esconder o botão de login
                var loginButton = document.querySelector('button');
                loginButton.style.display = 'none';
      
                // Mostrar a imagem na nova janela
                var imageHtml = '<img src="https://via.placeholder.com/400x200" alt="Imagem">';
                window.document.write(imageHtml);
              } else {
                // Incrementar o número de tentativas de login
                loginAttempts++;
                alert('Usuário/senha inválidos. Tentativa ' + loginAttempts + ' de 3.');
              }
            }
      
            function generateRandomPassword() {
              var newPassword = Math.random().toString(36).slice(-8); // Gerar uma senha de 8 caracteres
              return newPassword;
            }
          </script>
        </body>
        </html>`;
        
        // Escrever o HTML na nova janela
        newWindow.document.write(html);
      }
      
    return(
        <>
        <section id="projeto">
            <div id="projeto-text">
                <h2 id="projeto-text-titulo">Projeto</h2>
                <p className="p-description">Nosso projeto <i><b>Hospital dos Quadrinhos</b></i> visa ajudar o ambiente de saúde ao introduzir novas</p>
                <p className="p-description">tecnologias e estratégias inovadoras para otimizar a organização de seus setores,</p>
                <p className="p-description">respeitando privacidade e melhorando a eficiência dos processos.</p>
            </div>
            <div id="imagem-projeto">
                <img src="src/assets/projeto-img.jpeg" alt="" className="section-img" />
            </div>
        </section> 
        
        <section id="pontos-fortes">
            <div id="div-imagem-nuvem">
                <img id="imagem-nuvem" src="src/assets/Lovepik_com-401339280-children-in-the-clouds.png"/>
            </div>

            <div id="container-texto-imagem-nuvem">
                <h2 id="pontos-fortes-titulo">Pontos Fortes</h2>
                <div id="texto-imagem-nuvem">
                    <p>
                        O diferencial da nossa ideia é maneira com que a criança se relaciona com a informação, uma vez apresentada com personagens desenhados e histórias simples, a criança consegue compreender o que irá acontecer e principalmente não se assustar, ou ter qualquer sentimento ruim.
                        Nosso projeto além de tudo, incentiva a leitura e possui pouco custo, uma vez o maior gasto será com comissões de artistas para as histórias.  O sistema pode ser incluído diretamente no site  já existente do HC e no seu sistemas de e-mail.
                        Será possível também manter acessibilidade colocando posteriormente uma ferramenta de leitura para deficientes visuais, por exemplo.
                    </p>
                </div>
            </div>
        </section>

        <section id="problema">
        
            <div id="problema-text">
                <h2>Problema</h2>
                <p className="p-description">Concientização de crianças,</p>
                <p className="p-description">responsáveis e acompanhamentes</p>
                <p className="p-description">a respeito dos exames e procedimentos</p>
            </div>

            <div id="imagem-problema">
                <img src="src/assets/problema-img.jpeg" alt="" className="section-img"/>
            </div>

        </section>

        <section id="publico-alvo">

            <div id="publico-alvo-img">
                <img src="src/assets/pa-img.jpeg" alt="" className="section-img"/>
            </div>

            <div id="publico-alvo-text">
                <h2>Público Alvo</h2>
                <p className="p-description">Crianças doentes ou feridas, aquelas que precisam de cuidados médicos devido a uma variedade de condições,</p>
                <p className="p-description">desde doenças comuns até problemas médicos complexos. Familiares como pais, irmãos, avós </p>  
                <p className="p-description"> e outros membros da família que estão envolvidos no cuidado e apoio às crianças doentes.</p>
            </div>

        </section>

        <section id="pitch">

            <h2 id="padding-titulo">Pitch</h2>
            <iframe id="iframe-pitch" width="700" height="395" src="https://www.youtube.com/embed/b3wKX77eU0g" title="CHALLENGE 2023/2024 - ESPS 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
        </section>

        <section id="desenvolvedores">

            <h2>Desenvolvedores</h2>

            <div id="desenvolvedores-box">
                <div className="info-desenvolvedor">
                    <div className="img-desenvolvedor" id="caio-freitas">

                    </div>
                    <div className="nome-desenvolvedor">
                        <h3>Caio Freitas</h3>
                    </div>
                    <div className="cargo-desenvedor">
                        <p>Desenvolvedor</p>
                    </div>
                </div>

                <div className="info-desenvolvedor">
                    <div className="img-desenvolvedor" id="mateus-tibao">

                    </div>
                    <div className="nome-desenvolvedor">
                        <h3>Mateus Tibão</h3>
                    </div>
                    <div className="cargo-desenvedor">
                        <p>Desenvolvedor</p>
                    </div>
                </div>

                <div className="info-desenvolvedor">
                    <div className="img-desenvolvedor" id="lana-andrade">

                    </div>
                    <div className="nome-desenvolvedor">
                        <h3>Lana Andrade</h3>
                    </div>
                    <div className="cargo-desenvedor">
                        <p>Desenvolvedora</p>
                    </div>
                </div>

                <div className="info-desenvolvedor">
                    <div className="img-desenvolvedor" id="lucas-garcia">

                    </div>
                    <div className="nome-desenvolvedor">
                        <h3>Lucas Garcia</h3>
                    </div>
                    <div className="cargo-desenvedor">
                        <p>Desenvolvedor</p>
                    </div>
                </div>

            </div>        
        </section>

        <section id="produto">
            <h1 className="h1-produto">Demonstração do produto</h1>
            <div className="container">
                <section className="produto">
                    <div className="info">
                        <h3>História</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <img src="src/assets/HQ-CORONAVIRUS-011-1.jpg" alt="Produto - Capa"/>
                    <div className="div-button">
                        <button className="produto-button" onClick={showImage} >Gerar História</button>
                    </div>
                </section>
              </div>
        </section>

    </>
    )
}

export default Home; 
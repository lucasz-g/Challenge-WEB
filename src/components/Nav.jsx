import {} from 'react';
import '/src/css/style.css';

function Nav() {
    return (
        <>
        <section id="nav">
        <nav id="nav-bar">
            <div id="nav-img">
                <img src="src/assets/Logo.png" alt="Logo" id="nav-logo" />
            </div>
            <ul id="nav-list">
                <li><button className="nav-button" onClick={() => window.location.href='#projeto'}><p className='p-nav'>Projeto</p></button></li>
                <li><button className="nav-button" onClick={() => window.location.href='#pontos-fortes'}><p className='p-nav'>Pontos Fortes</p></button></li>
                <li><button className="nav-button" onClick={() => window.location.href='#problema'}><p className='p-nav'>Problema</p></button></li>
                <li><button className="nav-button" onClick={() => window.location.href='#publico-alvo'}><p className='p-nav'>Público Alvo</p></button></li>
                <li><button className="nav-button" onClick={() => window.location.href='#pitch'}><p className='p-nav'>Pitch</p></button></li>
                <li><button className="nav-button" onClick={() => window.location.href='#desenvolvedores'}><p className='p-nav'>Devs</p></button></li>
                <li><button className="nav-button" onClick={() => window.location.href='#produto'}><p className='p-nav'>Produto</p></button></li>
                <li><button className="nav-button" onClick={() => window.location.href='#footer'}><p className='p-nav'>Contato</p></button></li>
            </ul>
        </nav>
        </section>
        </>
    );
}

export default Nav;
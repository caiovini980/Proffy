import React from 'react';

import './styles.css';

import whatsAppIcon from '../../Assets/images/icons/whatsapp.svg';

function TeacherItem()
{
    return(
        <article className="teacher-item">
            <header>
                <img 
                    src="https://avatars1.githubusercontent.com/u/26447881?s=460&u=76fc566eb5bc5dd564b8ca38a607af0689d752ac&v=4" 
                    alt="Caio Aguiar"
                />
                <div>
                    <strong>Caio Aguiar</strong>
                    <span>Informática</span>
                </div>
            </header>

            <p>
                Apaixonado por tecnologia e todos os seus frutos.
                <br /><br />
                A tecnologia vem sempre avançando e a informática deixou de ser um bonus e passou a ser uma necessidade. Aprenda comigo tudo aquilo que é essencial para subir ao próximo level.
            </p>

            <footer>
                <p>
                    Preço por aula
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="Zap"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
import React from 'react';
import Image from 'next/image';
import './Hero.css';


export default function Hero() {

    /*const scrollPageUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };*/

    return (
        <section className="hero">
            <div className='hero-content'>
                <div className='intro'>
                    <h1 className='titulos'>
                        Serviços Profissionais de Manutenção e Suporte Técnico
                    </h1>

                    <p className='intro-texto'>
                        Nós somos especializados em manutenção e reparo de computadores e dispositivos eletrônicos. Oferecemos soluções rápidas e confiáveis para manter seus sistemas funcionando perfeitamente.
                    </p>
                </div>

                <div className='nossos-servicos'>
                    <h1 className='titulos'>Nossos Serviços</h1>
                    <div className='produtos-grid'>
                        <a href='#manutencao'>
                            <div className='produto'>

                                <Image src="/images/manutencao.svg" width={70} height={70} alt="Manutenção Preventiva" />
                                <h3 className='produtos-style'>Manutenção Preventiva</h3>
                            </div>
                        </a>
                        <a href='#reparo'>
                        <div className='produto'>
                            <Image src="/images/software.svg" width={70} height={70} alt="Reparo de Hardware e Software" />
                            <h3 className='produtos-style'>Reparo de Hardware e Software</h3>
                        </div>
                        </a>
                        <a href='#atualizacao'>
                        <div className='produto'>
                            <Image src="/images/atualizacao.svg" width={70} height={70} alt="Atualização de Componentes" />
                            <h3 className='produtos-style'>Atualização de Componentes</h3>
                        </div>
                        </a>
                        <a href='#virus'>
                        <div className='produto'>
                            <Image src="/images/virus.svg" width={70} height={70} alt="Remoção de Vírus e Malware" />
                            <h3 className='produtos-style'>Remoção de Vírus e Malware</h3>
                        </div>
                        </a>
                        <a href='#suporte'>
                        <div className='produto'>
                            <Image src="/images/remoto.svg" width={70} height={70} alt="Suporte Técnico Remoto" />
                            <h3 className='produtos-style'>Suporte Técnico Remoto</h3>
                        </div>
                        </a>
                    </div>
                </div>

                <div className='nossa-equipe' id='equipe'>
                    <h1 className='titulos'>Nossa Equipe</h1>
                    <div className='equipe-grid'>
                        <div className='funcionario'>
                            <Image src="/images/funcionario2.svg" width={150} height={150} alt="João Silva - Técnico Sênior" />
                            <h3 className='nome-funcionario'>João Silva</h3>
                            <h4 className='funcao-funcionario'>Técnico Sênior</h4>
                        </div>
                        <div className='funcionario'>
                            <Image src="/images/funcionaria.svg" width={150} height={150} alt="Maria Santos - Especialista em Reparo" />
                            <h3 className='nome-funcionario'>Maria Santos</h3>
                            <h4 className='funcao-funcionario'>Especialista em Reparo</h4>
                        </div>
                        <div className='funcionario'>
                            <Image src="/images/funcionario.svg" width={150} height={150} alt="Pedro Oliveira - Engenheiro de Software" />
                            <h3 className='nome-funcionario'>Pedro Oliveira</h3>
                            <h4 className='funcao-funcionario'>Engenheiro de Software</h4>
                        </div>
                    </div>
                </div>

                <div className='sobre-nos' id='sobre_nozes'>
                    <h1 className='titulos'>Sobre Nós</h1>
                    <div className='sobre-nos-conteudo'>
                        <img src="/images/sobre_nos.svg" className='img_hero' alt="Sobre a 1-click" />
                        <div className='sobre-nos-texto'>
                            <p>   Há muitos anos atrás, na ensolarada cidade de Fortaleza, no estado do Ceará, Brasil, três jovens empreendedores, João Silva, Maria Santos e Pedro Oliveira, embarcaram em uma jornada que mudaria suas vidas e o mundo da tecnologia para sempre. Enquanto estudantes de Ciência da Computação na Universidade Federal do Ceará, esses três amigos compartilhavam uma paixão em comum: computadores.A chama da inovação ardia em seus corações enquanto eles exploravam as complexidades dos sistemas, software e hardware. Em um laboratório de informática na universidade, eles se reuniam após as aulas para discutir ideias e vislumbrar um futuro no qual a tecnologia pudesse ser acessível a todos.</p>
                            <br />
                            <p>   Com suas mentes afiadas e determinação incansável, João, Maria e Pedro perceberam que a tecnologia não deveria ser um enigma inacessível para o público em geral. Eles sonhavam em criar uma empresa que simplificasse o mundo da computação, tornando-o mais acessível e compreensível para todos.Assim, em uma pequena sala no ambiente da Universidade Federal do Ceará, nasceu a ONECLICK. Eles começaram oferecendo peças de computadores de alta qualidade, orientando seus clientes a escolher os componentes ideais com o melhor custo-benefício para suas necessidades. Eles acreditavam firmemente que cada cliente era único, e suas soluções também deveriam ser.</p>
                            <br />
                            <p>   A ONECLICK logo se destacou por seu atendimento excepcional ao cliente, fornecendo suporte técnico que desmistificava os problemas tecnológicos mais complexos. Eles se esforçaram para criar um ambiente acolhedor onde todos se sentissem à vontade para buscar ajuda e orientação.João, o Técnico Sênior, era conhecido por sua habilidade incrível em resolver qualquer problema de hardware ou software. Maria, a Especialista em Reparo, tinha um olho aguçado para identificar e corrigir problemas com rapidez e eficiência. Pedro, o Engenheiro de Software, era a mente criativa por trás das soluções personalizadas que atendiam às necessidades específicas de cada cliente.</p>
                            <br />
                            <p>   À medida que a ONECLICK crescia, eles nunca perderam de vista sua missão original: capacitar as pessoas por meio da tecnologia. Hoje, a empresa é reconhecida não apenas em Fortaleza, mas em todo o Brasil, como um farol de conhecimento e inovação em seu campo.A jornada da ONECLICK é um testemunho de como a paixão, a determinação e o compromisso podem transformar sonhos em realidade. João, Maria e Pedro não apenas construíram uma empresa de sucesso, mas também criaram uma comunidade que continua a se beneficiar de sua visão.Hoje, a ONELICK é uma história de sucesso da qual todos os três fundadores se orgulham. Mas eles nunca esquecem suas raízes na sala de aula da universidade, onde sonharam com um futuro mais acessível e compreensível para a tecnologia. Eles esperam que sua história inspire outros a perseguir suas paixões e acreditar que, com um clique, é possível realizar grandes feitos.</p>
                        </div>
                    </div>
                </div>

                <div className='oque-fazemos' id='nossos_servicos'>
                    <h1 className='titulos'>O Que Fazemos</h1>
                    <div className='oque-fazemos-produtos'>
                        <div className='produtos-detalhes1'>
                            <img src="/images/manutencao.svg" className='img_hero' alt="Manutenção Preventiva" />
                            <div className='produtos-detalhes-p1'>
                                <h2 id='manutencao'className='subtitulo-produtos'>Serviço de Manutenção Preventiva</h2>
                                <p className='texto-produtos'>Na ONECLICK, acreditamos que a prevenção é a chave para garantir o desempenho consistente e confiável dos seus sistemas e equipamentos de tecnologia. Nosso serviço de Manutenção Preventiva foi projetado para ajudar a manter seus ativos de TI em excelente estado de funcionamento, reduzindo o risco de falhas inesperadas e interrupções nos negócios.</p>
                                <br />
                                <h2 className='subtitulo-produtos'>O que oferecemos:</h2>
                                <ul className='texto-produtos'>
                                    <li>Inspeção Abrangente: Nossa equipe altamente qualificada conduzirá uma inspeção detalhada de todos os componentes críticos dos seus sistemas de TI. Isso inclui hardware, software, redes e segurança cibernética.</li>
                                    <li>identificação Antecipada de Problemas: Usamos ferramentas de monitoramento avançadas para identificar potenciais problemas antes que eles se tornem sérios. Isso nos permite tomar medidas corretivas antes que os problemas afetem a produtividade da sua empresa.</li>
                                    <li>Atualizações e Patches: Manter todos os sistemas e software atualizados é essencial para garantir a segurança e o desempenho. Implementamos atualizações e patches de segurança conforme necessário.</li>
                                    <li>Backup e Recuperação de Dados: Realizamos verificações regulares nos seus sistemas de backup para garantir que seus dados estejam seguros e prontos para serem recuperados em caso de necessidade.</li>
                                    <li>Otimização de Desempenho: Ajustamos e otimizamos seus sistemas para garantir que eles funcionem com eficiência máxima, economizando tempo e recursos.</li>
                                    <li>Treinamento e Educação: Oferecemos treinamento e orientação aos seus funcionários para que eles possam utilizar os sistemas de forma eficaz e segura.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='produtos-detalhes2'>
                            <div className='produtos-detalhes-p2'>
                                <h2 id='reparo' className='subtitulo-produtos'>Reparo de Hardware e Software</h2>
                                <p className='texto-produtos'>Na ONECLICK, entendemos que problemas de software e hardware podem surgir a qualquer momento e impactar significativamente a eficiência e a produtividade dos nossos clientes. É por isso que oferecemos um abrangente serviço de reparo de software e hardware, projetado para resolver esses problemas de maneira rápida e eficaz.</p>
                                <br />
                                <h2 className='subtitulo-produtos'>O que oferecemos:</h2>
                                <ul className='texto-produtos'>
                                    <li>Solução de Problemas: Nossa equipe de especialistas em software é treinada para diagnosticar e solucionar uma ampla gama de problemas de software, desde travamentos de sistema até erros de aplicativos.</li>
                                    <li>Remoção de Vírus e Malware: Se o seu dispositivo estiver infectado por vírus, trojans ou malware, nossa equipe irá limpar e proteger seu sistema, garantindo que seus dados e informações estejam seguros.</li>
                                    <li>Atualizações e Patches: Manter seu software atualizado é essencial para a segurança e o desempenho. Implementamos atualizações e patches de segurança para manter seu sistema protegido.</li>
                                    <li>Diagnóstico de Hardware: Nossa equipe técnica altamente qualificada realiza diagnósticos precisos de hardware para identificar problemas, como falhas de disco rígido, problemas de memória, ou componentes defeituosos.</li>
                                    <li>Substituição de Peças: Se um componente de hardware estiver danificado ou defeituoso, temos acesso a peças de alta qualidade e faremos a substituição necessária para que seu sistema volte a funcionar perfeitamente.</li>
                                    <li>Limpeza e Manutenção: A manutenção regular do hardware é essencial para prolongar a vida útil do dispositivo. Realizamos limpeza interna, remoção de poeira e otimização de sistemas de refrigeração.</li>
                                </ul>
                            </div>
                            <img src="/images/software.svg" className='img_hero' alt="Reparo de Hardware e Software" />
                        </div>
                        <div className='produtos-detalhes3'>
                            <img src="/images/atualizacao.svg" className='img_hero' alt="Atualização de Componentes" />
                            <div className='produtos-detalhes-p3'>
                                <h2 id='atualizacao' className='subtitulo-produtos'>Serviço de Atualização de Componentes</h2>
                                <p className='texto-produtos'>Na 1-Click, estamos comprometidos em manter seu hardware e software atualizados para garantir o desempenho ideal e a segurança dos seus sistemas. Nosso serviço de atualização de componentes foi projetado para oferecer uma solução completa e eficaz para manter seu ambiente tecnológico sempre competitivo e seguro.</p>
                                <br />
                                <h2 className='subtitulo-produtos'>O que oferecemos:</h2>
                                <ul className='texto-produtos'>
                                    <li>Avaliação de Necessidades: Nossa equipe técnica realizará uma análise detalhada dos seus sistemas de hardware para identificar quais componentes precisam ser atualizados com base nas suas necessidades e objetivos específicos.</li>
                                    <li>Substituição de Peças: Faremos a substituição de peças obsoletas ou defeituosas por componentes de alta qualidade e desempenho. Isso pode incluir upgrades de processadores, placas de vídeo, memória RAM, armazenamento, entre outros.</li>
                                    <li>Otimização de Desempenho: Após a atualização, ajustamos e otimizamos seu hardware para garantir que ele funcione com eficiência máxima, tirando proveito de todas as melhorias implementadas.</li>
                                    <li>Backup e Segurança de Dados: Antes de realizar qualquer atualização de hardware, fazemos backups completos dos seus dados para garantir que nada seja perdido durante o processo. A segurança dos seus dados é nossa prioridade.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='produtos-detalhes4'>
                            <div className='produtos-detalhes-p4'>
                                <h2 id='virus' className='subtitulo-produtos'>Remoção de Virus e Malware</h2>
                                <p className='texto-produtos'>Na 1-Click, compreendemos a gravidade das ameaças de vírus e malware para a segurança e a integridade dos sistemas de nossos clientes. Nossos serviços especializados de remoção de vírus e malware são projetados para detectar, eliminar e prevenir essas ameaças, garantindo a proteção dos seus sistemas e dados.</p>
                                <br />
                                <h2 className='subtitulo-produtos'>O que oferecemos:</h2>
                                <ul className='texto-produtos'>
                                    <li>Detecção Precisa:Nossa equipe de especialistas em segurança cibernética utiliza ferramentas avançadas para realizar uma análise minuciosa do seu sistema, identificando vírus, malware, trojans e outras ameaças.</li>
                                    <li>Remoção Segura:Uma vez identificadas as ameaças, procedemos com a remoção segura e eficaz de todos os componentes maliciosos, garantindo que nenhum arquivo importante seja perdido ou danificado durante o processo.</li>
                                    <li>Proteção Adicional:Além de remover as ameaças existentes, implementamos medidas de proteção adicionais, como a configuração de firewalls, antivírus e programas anti-malware atualizados para prevenir futuros ataques.</li>
                                    <li>Recuperação de Dados:Se algum dos seus dados foi comprometido devido a uma infecção de vírus ou malware, nossa equipe fará o possível para recuperá-los, minimizando a perda de informações críticas.</li>
                                    <li>Educação do Usuário:Fornecemos orientações e treinamento para ajudar a educar você e sua equipe sobre as práticas recomendadas de segurança cibernética, para evitar futuras infecções.</li>
                                    <li>Monitoramento Contínuo:Oferecemos serviços de monitoramento contínuo para identificar e lidar com ameaças em tempo real, garantindo a segurança contínua dos seus sistemas.</li>
                                </ul>
                            </div>
                            <img src="/images/virus.svg" className='img_hero' alt="Remoção de Vírus e Malware" />
                        </div>
                        <div className='produtos-detalhes5'>
                            <img src="/images/remoto.svg" className='img_hero' alt="Suporte Técnico Remoto" />
                            <div className='produtos-detalhes-p5'>
                                <h2 id='suporte' className='subtitulo-produtos'>Suporte Técnico Remoto</h2>
                                <p className='texto-produtos'>Na ONECLICK, compreendemos que problemas técnicos podem surgir a qualquer momento e afetar a produtividade e eficiência dos nossos clientes. Nosso serviço de suporte técnico remoto foi projetado para oferecer assistência imediata e eficaz para resolver questões tecnológicas, independentemente de sua localização.</p>
                                <br />
                                <h2 className='subtitulo-produtos'>O que oferecemos:</h2>
                                <ul className='texto-produtos'>
                                    <li>Assistência Imediata:Nossa equipe de suporte técnico está pronta para fornecer assistência imediata e resolver problemas técnicos em tempo real.</li>
                                    <li>Variedade de Problemas Técnicos:Oferecemos suporte para uma ampla gama de problemas técnicos, incluindo problemas de software, configuração de hardware, redes, segurança cibernética, configuração de dispositivos e muito mais.</li>
                                    <li>Acesso Remoto Seguro:Utilizamos ferramentas seguras de acesso remoto para conectar nossos técnicos aos seus sistemas, permitindo diagnóstico e resolução eficiente de problemas diretamente no seu ambiente de trabalho.</li>
                                    <li>Diagnóstico Especializado:Nossa equipe experiente utiliza suas habilidades e conhecimentos para diagnosticar problemas de forma precisa e eficaz, economizando tempo e minimizando interrupções nos negócios.</li>
                                    <li>Soluções Passo a Passo:Fornecemos instruções claras e orientações passo a passo para ajudar você a resolver problemas técnicos por conta própria, sempre que possível.</li>
                                    <li>Monitoramento Proativo:Além de lidar com problemas existentes, oferecemos monitoramento proativo para identificar e resolver potenciais problemas antes que eles afetem suas operações.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

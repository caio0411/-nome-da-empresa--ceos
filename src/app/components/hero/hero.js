
import React from 'react';
import Image from 'next/image';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="texto-com-contorno">Empresa de Manutenção de Computadores</h1>
        <h2 className="hero-description">Serviços Profissionais de Manutenção e Suporte Técnico</h2>
        <p className="hero-description">Nós somos especializados em manutenção e reparo de computadores e dispositivos eletrônicos. Oferecemos soluções rápidas e confiáveis para manter seus sistemas funcionando perfeitamente.</p>
        <h2>Nossos Serviços</h2>
        <div className="produtos-grid">
          <div className="produtos">
            <Image src= "/images/manutencao.svg" width={150} height={150} alt="Manutenção Preventiva" />
            <h3>Manutenção Preventiva</h3>
          </div>
          <div className="produtos">
            <Image src= "/images/software.svg" width={150} height={150} alt="Reparo de Hardware e Software" />
            <h3>Reparo de Hardware e Software</h3>
          </div>
          <div className="produtos">
            <Image src= "/images/atualizacao.svg" width={150} height={150} alt="Atualização de Componentes" />
            <h3>Atualização de Componentes</h3>
          </div>
          <div className="produtos">
            <Image src= "/images/virus.svg" width={150} height={150} alt="Remoção de Vírus e Malware" />
            <h3>Remoção de Vírus e Malware</h3>
          </div>
          <div className="produtos">
            <Image src= "/images/remoto.svg" width={150} height={150} alt="Suporte Técnico Remoto" />
            <h3>Suporte Técnico Remoto</h3>
          </div>
        </div>

        <h2 id='equipe'>Nossa Equipe</h2>
        <div className="employee-grid">
          <div className="employee">
            <Image src="/images/funcionario2.svg" width={150} height={150} alt="João Silva - Técnico Sênior" />
            <h3>João Silva</h3>
            <h4>Técnico Sênior</h4>
          </div>
          <div className="employee">
            <Image src="/images/funcionaria.svg" width={150} height={150} alt="Maria Santos - Especialista em Reparo" />
            <h3>Maria Santos</h3>
            <h4>Especialista em Reparo</h4>
          </div>
          <div className="employee">
            <Image src="/images/funcionario.svg" width={150} height={150} alt="Pedro Oliveira - Engenheiro de Software" />
            <h3>Pedro Oliveira</h3>
            <h4>Engenheiro de Software</h4>
          </div>
        </div>
        <h2>Sobre Nós</h2>
        <div>
        <p className="hero-description">Somos uma equipe dedicada a fornecer soluções confiáveis e eficientes para a manutenção de computadores. Com anos de experiência no setor, estamos comprometidos em atender às necessidades de nossos clientes e garantir que seus sistemas funcionem perfeitamente.</p>
        </div>
      </div>

     </section>
  );
}

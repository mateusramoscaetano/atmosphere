import { BrandsMosaic } from "./gallery-section/brands-mosaic";
import { HeaderGallery } from "./gallery-section/header-gallery";

interface IBrandsProps {}
export function Brands({}: IBrandsProps) {
  return (
    <>
      <div className="min-h-screen w-full flex-col items-center bg-black font-neue">
        <HeaderGallery
          title="Marcas"
          text={
            <div>
              Somos um hub multissoluções para todas as multi necessidades de
              quem está na <br /> faculdade. Reunimos em um só lugar: clube de
              benefícios, app de pagamentos e <br /> arrecadação, ticketeira,
              produtora audiovisual, market place e festa. Muita festa.
            </div>
          }
        />
        <BrandsMosaic
          hrefInsta="https://www.instagram.com/formobrasil.pr/"
          hrefSite="https://formobrasilpr.com.br/"
          src="/brands-formo.png"
          left={true}
          description={
            <>
              {" "}
              Aqui na Formô estamos prontos para tornar a sua jornada na
              faculdade de Medicina a melhor <br /> época da sua vida, elevando
              suas celebrações a um patamar superior! 
              <br />
              Planejar um baile de formatura não é tarefa fácil, mas nós, da
              Formô, estamos aqui para <br /> tornar tudo mais simples e
              garantir que seu baile seja uma experiência inesquecível! <br />{" "}
              Com mais de 12 anos de experiência, somos reconhecidos pela
              qualidade e excelência das <br /> nossas entregas. Cuidamos de
              cada detalhezinho, desde a criação de uma identidade <br />{" "}
              marcante até a escolha dos artistas para o show, para que sua
              jornada desde o primeiro ano <br /> até o baile seja única e
              encantadora.
            </>
          }
        />
        <BrandsMosaic
          hrefInsta="https://www.instagram.com/yzformaturas/"
          hrefSite="https://yzformaturas.com.br/"
          src="/yz-brands.png"
          left={false}
          description={
            <>
              A Yz Formaturas é feita de festa e energia boa, claro, mas a
              melhor parte é que conseguimos <br /> entregar junto disso com
              praticidade e sem burocracias, pra sua turma ter os melhores pré-
              <br />
              eventos, eventos e celebrações oficiais! Aqui na Yz acreditamos
              que a faculdade é uma <br /> história boa demais para ser contada
              somente no dia da formatura. Façamos valer toda a<br /> jornada!
            </>
          }
        />
        <BrandsMosaic
          hrefInsta="https://www.instagram.com/rvloprod/"
          hrefSite="/site.com"
          description={
            <>
              A Revelô Prod é o núcleo fotográfico do nosso grupo que traduz o
              seu olhar te fazendo <br /> lembrar não somente quem você é, mas
              quem você pode ser! A RVL Prod não é apenas uma <br /> empresa que
              realiza registros de eventos e formaturas, mas sim uma produtora
              audiovisual <br /> que se encontra cada dia mais próxima do cinema
              em sua linguagem, trazendo às nossas <br /> produções mais
              inovação, mais criatividade e mais proximidade na hora de captar
              os <br /> melhores momentos de sua vida.
            </>
          }
          src="/revelo-b.png"
          left={true}
          siteExist={false}
        />
        <BrandsMosaic
          hrefInsta="https://www.instagram.com/loftcomendador/"
          hrefSite="/site.com"
          description={
            <>
              O Loft Comendador é o estúdio de produção fotográfica e
              audiovisual onde a sua ideia tem <br /> lugar. Esse espaço, com
              excelente localização, é um ambiente on-off totalmente flexível e{" "}
              <br /> adaptável às demandas do seu processo criativo, seja ele
              envolvido em design, produções <br /> audiovisuais, casting,
              ensaios de marca. Estamos preparados para receber creators das{" "}
              <br /> áreas da moda, beleza, bem-estar, música. No Loft você pode
              fotografar, editar, comunicar:
              <br /> vamos colocar seu novo projeto no mundo?
            </>
          }
          src="/loft-brands.png"
          left={false}
          siteExist={false}
        />
        <BrandsMosaic
          hrefInsta="/insta.com"
          hrefSite="/site.com"
          siteExist={false}
          instaExist={false}
          description={
            <>
              A TAG é o núcleo tecnológico da nossa Atmosfera! TAG Tech é
              ticketeira, marketplace e <br /> proporciona soluções práticas e
              personalizadas para nosso grupo através de seus serviços <br />
              especializados em softwares de automação, sistema próprio de
              tickets e de bilhetagem, além <br /> de todo suporte técnico
              realizado com transparência, agilidade e segurança.
            </>
          }
          src="/tag-brands.png"
          left={true}
        />
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

interface ISocialProps {}

export function Social({}: ISocialProps) {
  return (
    <>
      <Link href="https://www.instagram.com/atmosfera.grupo/">
        <Image src="/insta.svg" width={25} height={25} alt="logo-insta" />
      </Link>

      <Link href="https://www.youtube.com/@atmosferagrupo">
        <Image src="/youtube.svg" width={27} height={20} alt="logo-youtube" />
      </Link>
      <Link href="https://www.linkedin.com/company/atmgrupo/">
        <Image src="/linkedin.svg" width={29} height={30} alt="logo-insta" />
      </Link>

      <Link href="mailto:contato@grupoatmosfera.com.br">
        <Image src="/mail5.svg" width={30} height={21} alt="logo-insta" />
      </Link>
    </>
  );
}

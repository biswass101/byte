import Image from "next/image";

export default function PartnerLogo({ src, mark }: { src?: string; mark?: string }) {
  return <div className="partner-logo">{src ? <Image className="partner-mark-image" src={src} alt="" width={40} height={40} /> : <span className="partner-mark mark-wave" aria-hidden="true">{mark}</span>}<span>Logoipsum</span></div>;
}

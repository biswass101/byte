import Image from "next/image";

export default function Header() {
  return <header className="site-header"><a className="brand" href="#top" aria-label="ByteSpace home"><Image src="/logo.png" alt="" width={29} height={32} priority /><span>ByteSpace</span></a><nav className="main-nav" aria-label="Main navigation"><a className="nav-link is-active" href="#home">Home</a><a className="nav-link" href="#courses">Courses</a><a className="nav-link" href="#creators">Creators</a></nav><div className="account-nav"><a className="nav-link" href="/login">Sign In</a><a className="nav-link" href="/signup">Join Us</a><a className="bag-link" href="#bag" aria-label="Shopping bag"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5h11l1 12h-13l1-12Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></svg></a></div></header>;
}

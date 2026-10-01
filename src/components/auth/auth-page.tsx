import Image from "next/image";
import AuthCollage from "@/components/auth/auth-collage";
import AuthForm from "@/components/auth/auth-form";

type AuthMode = "signup" | "login";
const intro = { signup: { title: "Sign up and come in", copy: "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost." }, login: { title: "Sign in with ease", copy: "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge." } } satisfies Record<AuthMode, Record<string, string>>;

export default function AuthPage({ mode }: { mode: AuthMode }) { const content = intro[mode]; return <main className={`auth-page auth-page-${mode}`}><div className="auth-brand-mark" aria-hidden="true"><Image src="/logo.png" alt="" width={29} height={32} /></div><section className="auth-intro"><h1>{content.title}</h1><p>{content.copy}</p><AuthCollage /></section><section className="auth-panel" aria-labelledby="auth-title"><div className="auth-panel-inner"><AuthForm mode={mode} /></div></section></main>; }

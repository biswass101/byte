"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

type AuthMode = "signup" | "login";

const authContent = {
  signup: {
    eyebrow: "Create an Account",
    title: "Welcome to ByteSpace",
    introTitle: "Sign up and come in",
    introCopy: "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.",
    submit: "Continue",
    switchText: "Already have an account?",
    switchLabel: "Login",
    switchHref: "/login",
  },
  login: {
    eyebrow: "Sign In",
    title: "Welcome Back",
    introTitle: "Sign in with ease",
    introCopy: "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
    submit: "Sign In",
    switchText: "New user?",
    switchLabel: "Create an account",
    switchHref: "/signup",
  },
} satisfies Record<AuthMode, Record<string, string>>;

export default function AuthPage({ mode }: { mode: AuthMode }) {
  const content = authContent[mode];
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className={`auth-page auth-page-${mode}`}>
      <div className="auth-brand-mark" aria-hidden="true">
        <Image src="/logo.png" alt="" width={29} height={32} />
      </div>

      <section className="auth-intro">
        <h1>{content.introTitle}</h1>
        <p>{content.introCopy}</p>
        <AuthCollage />
      </section>

      <section className="auth-panel" aria-labelledby="auth-title">
        <div className="auth-panel-inner">
          <p className="auth-eyebrow">{content.eyebrow}</p>
          <h2 id="auth-title">{content.title}</h2>

          <form className="auth-form" onSubmit={handleSubmit}>
            {mode === "signup" && (
              <label>
                Full Name
                <input type="text" name="name" placeholder="Jamie Davis" required />
              </label>
            )}
            <label>
              Email
              <input type="email" name="email" placeholder="designer@example.com" required />
            </label>
            <label>
              Password
              <input type="password" name="password" placeholder="********" minLength={6} required />
            </label>
            <button type="submit">{content.submit}</button>
            {submitted && <p className="auth-feedback" role="status">Thanks, you&apos;re all set to continue.</p>}
          </form>

          {mode === "login" && (
            <>
              <div className="auth-divider"><span>or</span></div>
              <div className="social-actions" aria-label="Social sign in options">
                <button type="button" aria-label="Continue with Facebook">f</button>
                <button type="button" aria-label="Continue with Google">G</button>
              </div>
            </>
          )}

          <p className="auth-switch">
            {content.switchText} <a href={content.switchHref}>{content.switchLabel}</a>
          </p>
        </div>
      </section>
    </main>
  );
}

function AuthCollage() {
  return (
    <div className="auth-collage" aria-hidden="true">
      <div className="auth-course-card auth-course-card-back">
        <Image src="/card/Frame (1).png" alt="" width={341} height={196} />
        <strong>Build Digital Asset</strong>
        <span>by puprepat studio</span>
        <b>$25<small>/lifetime</small></b>
      </div>
      <div className="auth-course-card auth-course-card-front">
        <Image src="/card/Frame (2).png" alt="" width={341} height={196} />
        <strong>the Power of Big Data</strong>
        <span>by puprepat studio</span>
        <b>$25<small>/lifetime</small></b>
      </div>
      <Image className="auth-deco auth-deco-donut" src="/donut_left.png" alt="" width={344} height={343} />
      <Image className="auth-deco auth-deco-cone" src="/Cone.png" alt="" width={190} height={189} />
      <Image className="auth-deco auth-deco-spiral" src="/left_spiral_whilte.png" alt="" width={177} height={176} />
      <div className="auth-students-card"><span>Happy Students</span><small>4.5 (240) <b>★</b></small><div><i>AM</i><i>JS</i><i>RK</i><i>PL</i><strong>2K+</strong></div></div>
    </div>
  );
}
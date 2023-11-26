"use client";
import React, { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/_component/Header/Header";
import Footer from "@/app/_component/Footer/Footer";
import styles from "@/app/_component/Reserve/Reserve.module.scss";

export default function Reserve() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  const registerUser: React.FormEventHandler<HTMLFormElement> = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await fetch("/api/sendMail", {
      body: JSON.stringify({
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        message: messageRef.current?.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    router.push("/thanks");
  };

  return (
    <>
      <Header />
      <main className="main subPage">
        <div className="main__inner">
          <div className={`${styles.mv} mv`}>
            <div className="mv__inner">
              <h2>Reserve</h2>
            </div>
          </div>
          <section className="section">
            <div className="section__inner">
              <h3>ご予約</h3>
              <form className={styles.form} onSubmit={registerUser}>
                <label className={styles.label}>
                  名前<span>*</span>
                  <input className={styles.input} type="text" name="name" ref={nameRef} required />
                </label>
                <label className={styles.label}>
                  メールアドレス<span>*</span>
                  <input className={styles.input} type="email" name="email" ref={emailRef} required />
                </label>
                <label className={styles.label}>
                  お問い合わせ内容<span>*</span>
                  <textarea className={styles.textarea} name="message" ref={messageRef} required />
                </label>
                <button className={styles.button} type="submit">
                  送信
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

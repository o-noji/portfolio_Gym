"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/_component/Header/Header";
import Footer from "@/app/_component/Footer/Footer";
import styles from "@/app/_component/Plan/Plan.module.scss";

export default function Thanks() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, [router]);
  return (
    <>
      <Header />
      <main className="main subPage">
        <div className="main__inner">
          <div className={`${styles.mv} mv`}>
            <div className="mv__inner">
              <h2>Thanks</h2>
            </div>
          </div>
          <section className="section">
            <div className="section__inner">
              <h3>料金プラン</h3>
              <p className={styles.p}>
                この度は◯◯にお問い合わせいただき、誠にありがとうございます。
                <br />
                ◯営業日以内にご返信させていただきます。
              </p>

              <p className={styles.p}>しばらく経ってもメールが届かない場合、</p>
              <p className={styles.p}>
                ・迷惑メールフォルダに振り分けられていないか
                <br />
                ・別のメールアドレスでお問い合わせされていないか
              </p>

              <p className={styles.p}>をご確認ください。</p>
              <p className={styles.p}>5秒後に自動的にトップページにリダイレクトします。</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

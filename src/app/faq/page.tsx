import Header from "@/app/_component/Header/Header";
import Footer from "@/app/_component/Footer/Footer";
import styles from "@/app/_component/FAQ/FAQ.module.scss";
import FaqAccordion from "@/app/_component/FAQ/FAQ";

export default function FAQ() {
  return (
    <>
      <Header />
      <main className="main subPage">
        <div className="main__inner">
          <div className={`${styles.mv} mv`}>
            <div className="mv__inner">
              <h2>FAQ</h2>
            </div>
          </div>
          <section className="section">
            <div className="section__inner">
              <h3>よくあるご質問</h3>
              <p>よくいただいているご質問を掲載しております。</p>
              <FaqAccordion />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

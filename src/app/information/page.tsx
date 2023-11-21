import Header from "@/app/_component/Header/Header";
import Footer from "@/app/_component/Footer/Footer";
import styles from "@/app/_component/Information/Information.module.scss";
import Information from "@/app/_component/Information/Information";
import Link from "next/link";

export default function Info() {
  return (
    <>
      <Header />
      <main className="main subPage">
        <div className="main__inner">
          <div className={`${styles.mv} mv`}>
            <div className="mv__inner">
              <h2>Information</h2>
            </div>
          </div>
          <section className="section">
            <div className="section__inner">
              <div className={styles.column3}>
                <div className={styles.column3__inner}>
                  <Information />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

import Header from "@/app/_component/Header/Header";
import Footer from "@/app/_component/Footer/Footer";
import styles from "@/app/_component/Plan/Plan.module.scss";

export default function Plan() {
  return (
    <>
      <Header />
      <main className="main subPage">
        <div className="main__inner">
          <div className={`${styles.mv} mv`}>
            <div className="mv__inner">
              <h2>Plan</h2>
            </div>
          </div>
          <section className="section">
            <div className="section__inner">
              <h3>料金プラン</h3>
              <p>
                「特定の時間しか利用しないから、24時間分の料金を払うのはちょっと…」
                <br />
                このようなお声にお応えし、新たなプランが登場しました！
              </p>
              <p>従来の24時間通い放題のプランに加えて、深夜や早朝のみ、日中のみのプランが新登場。</p>

              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>プラン名</th>
                    <th>利用可能時間</th>
                    <th>金額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>深夜&朝活プラン</td>
                    <td>0:00〜08:00</td>
                    <td>3,980円（税込）／月</td>
                  </tr>
                  <tr>
                    <td>昼活プラン</td>
                    <td>09:00〜18:00</td>
                    <td>5,980円（税込）／月</td>
                  </tr>
                  <tr>
                    <td>レギュラープラン</td>
                    <td>24時間いつでも</td>
                    <td>7,678円（税込）／月</td>
                  </tr>
                </tbody>
              </table>

              <h3>オプション料金</h3>
              <p>
                「特定の時間しか利用しないから、24時間分の料金を払うのはちょっと…」
                <br />
                このようなお声にお応えし、新たなプランが登場しました！
              </p>
              <p>従来の24時間通い放題のプランに加えて、深夜や早朝のみ、日中のみのプランが新登場。</p>

              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>サービス名</th>
                    <th>内容</th>
                    <th>金額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>無料初心者サポート</td>
                    <td>ジム初心者の方やマシンの使い方に不安がある方向けに、マシンの使い方・フォームの指導をさせていただきます</td>
                    <td>無料（予約制）</td>
                  </tr>
                  <tr>
                    <td>水素水サーバー</td>
                    <td>水素水サーバーを制限なしでご利用いただけます</td>
                    <td>1,100円（税込）／月</td>
                  </tr>
                  <tr>
                    <td>ロッカー契約</td>
                    <td>ご契約期間中、ご契約者様専用としてロッカーを専有いただけます</td>

                    <td>1,100円（税込）／月</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

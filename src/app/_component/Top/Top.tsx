import Image from "next/image";
import Link from "next/link";
import Information from "@/app/_component/Information/Information";
import Faq from "@/app/_component/FAQ/FAQ";
import infoStyles from "@/app/_component/Information/Information.module.scss";
import aboutStyles from "@/app/_component/About/About.module.scss";
import planStyles from "@/app/_component/Plan/Plan.module.scss";

export default function Top() {
  return (
    <main className="main top">
      <div className="main__inner">
        <div className="mv">
          <div className="mv__inner">
            <Image src="/img/top/topMv.jpg" width={1440} height={747} alt="mv" priority />
          </div>
        </div>

        <section className="section">
          <div className="section__inner">
            <h2>Information</h2>
            <div className={infoStyles.column3}>
              <div className={infoStyles.column3__inner}>
                <Information show={3} />
              </div>
            </div>
            <button className={infoStyles.button}>
              <Link href="/information/">more</Link>
            </button>
          </div>
        </section>

        <section className="section">
          <div className="section__inner">
            <h2>About</h2>
            <div className={aboutStyles.flex}>
              <div className={aboutStyles.flex__inner}>
                <div>
                  <h3>OKDGYMとは</h3>
                  <p>OKDGYMは初心者からアスリートまで、全ての人々が結果を出せるようあらゆることについて考え抜かれたフィットネスクラブです。</p>{" "}
                  <p>
                    結果を出すためには、定期的にトレーニングを続けることが何より大切。そのためには、通いやすい場所と時間設定、シンプルで使いやすいロッカーやサウナ＆シャワー。さらに、体型や性別、そして経験等を考慮した様々な種類のトレーニングマシン、様々な疑問に答えてくれる経験豊かなトレーナー陣が必要、とゴールドジムは考えます。
                  </p>
                </div>
                <div>
                  <Image src="/img/about/img01.jpg" alt="aboutImg" width={600} height={450} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section__inner">
            <h2>Plan</h2>
            <h3>料金プラン</h3>
            <p>
              「特定の時間しか利用しないから、24時間分の料金を払うのはちょっと…」
              <br />
              このようなお声にお応えし、新たなプランが登場しました！
            </p>
            <p>従来の24時間通い放題のプランに加えて、深夜や早朝のみ、日中のみのプランが新登場。</p>

            <table className={planStyles.table}>
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
          </div>
        </section>

        <section className="section">
          <div className="section__inner">
            <h2>FAQ</h2>
            <h3>よくあるご質問</h3>
            <p>よくいただいているご質問を掲載しております。</p>
            <Faq show={3} />
          </div>
        </section>
      </div>
    </main>
  );
}

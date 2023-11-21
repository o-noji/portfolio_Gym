import Image from "next/image";
import Header from "@/app/_component/Header/Header";
import Footer from "@/app/_component/Footer/Footer";
import styles from "@/app/_component/About/About.module.scss";

export default function About() {
  return (
    <>
      <Header />
      <main className="main subPage">
        <div className="main__inner">
          <div className={`${styles.mv} mv`}>
            <div className="mv__inner">
              <h2>About</h2>
            </div>
          </div>
          <section className="section">
            <div className="section__inner">
              <div className={styles.flex}>
                <div className={styles.flex__inner}>
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
              <h3>オーナー挨拶</h3>
              <p>
                「生まれ変わるなら生きてるうちに」
                <br />
                これは長渕剛さんの作品「人生はラ・ラ・ラ」の一節です。
                <br />
                人は、意志さえあれば誰でも、きっと新しい自分に生まれ変われるはずです。
                <br />
                そして、そのタイミングは「明日」でも「来年」でもなく「生まれ変わろう」と思ったまさにその時、「今」しかないのではないでしょうか。
                <br />
                来世があるのかどうか、わかりませんし今日と同じ明日が繰り返されるとは限らない。
                <br />
                「やろう！」と思った、今その時の気持ちを大切に素直に行動してみてはいかがでしょう。
                <br />
                当然のことながら、自分を変えるということは半端な気持ちでできるものではありません。OKD
                GYMでは、ウェイトトレーニングを通じて少しだけそのお手伝いをしていきます。妥協ないトレーニングで自分と向き合い新たな自分を見つけてみませんか？
                <br />
                ジムからの帰路自分の中で何かが変わったことに気づくはずです。
                <br />
                「太陽は向かってくるもののみを照らす」
                <br />
                OKD GYMでお待ちしております！
                <br />
              </p>
              <p className="tRight">OKD GYM 代表　岡田拓也</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

import styles from "@/app/_component/Footer/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/img/logo.jpg" width={226} height={86} alt="OKD GYM" />
          </Link>
        </div>
        <div className={styles.flex}>
          <div className={styles.flex__inner}>
            <div>
              <p>
                〒331-0078 <br />
                東京都世田谷区用賀1-2-3 <br />
                ※施設内コインパーキング19台あり（2時間無料）
                <br />
                ※スタッフアワー…11時〜14時/15時〜20時（金曜日スタッフ不在）
              </p>
            </div>
            <div>
              <p>
                <Link href="#">プライバシーポリシー</Link>
                <br />
                <Link href="#">ジム利用規約</Link>
                <br />
                <Link href="#">特定商取引法に基づく表記</Link>
                <br />
                お電話でのお問い合わせ <br />
                TEL：0422-00-0000
              </p>
            </div>
          </div>
        </div>
        <div className={styles.copy}>© 2023 OKDGYM</div>
      </div>
    </footer>
  );
}

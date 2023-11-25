"use client";
import styles from "@/app/_component/FAQ/FAQ.module.scss";
import { Accordion } from "@mantine/core";

const FAQData = [
  {
    q: "ダイエット目的なのですが入会しても大丈夫ですか？",
    a: "もちろん大歓迎いたします。鍛える目的だけではなく、「痩せたい」という方にオススメなマシンも、多数導入しています。",
  },
  {
    q: "対象年齢はありますか？",
    a: "高校生（15歳）以上の方の入会が可能です。高校生のジムのご利用は、スタッフ滞在日時のみとさせていただきます。",
  },
  {
    q: "月の途中でも入会できますか？",
    a: "入会可能です。月会費も満額ではなく、日割りとさせていただけます、ご安心ください。",
  },
  {
    q: "夜間の利用において、セキュリティは大丈夫ですか？",
    a: "警備会社と契約を結んでいるため、昼夜問わず安心してご利用いただけます。24時間体制でカメラが稼働しております。",
  },
  {
    q: "タトゥーが入っていますが、入会可能ですか？",
    a: "入会可能です。しかし、タトゥーが見えないような状態でご利用いただくようお願いしております。万が一ルールを守られない場合には、ご利用をお断りさせていただくこともございますので、予めご了承ください。",
  },
  {
    q: "退会するときはどうすればよいですか？",
    a: "Web上から退会する可能です。退会する際には、規約の確認をお願いいたします。詳細はスタッフまでお申し付けください。",
  },
];

export default function FaqAccordion({ show }: { show?: number }) {
  const showFAQData = FAQData.slice(0, show);

  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__inner}>
        <Accordion>
          {showFAQData.map((item) => (
            <Accordion.Item key={item.q} value={item.q}>
              <Accordion.Control>{item.q}</Accordion.Control>
              <Accordion.Panel>{item.a}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

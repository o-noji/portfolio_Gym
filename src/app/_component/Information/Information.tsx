import Link from "next/link";
import Image from "next/image";
import styles from "@/app/_component/Information/Information.module.scss";

const InformationData = [
  {
    day: "2023.7.30",
    title: "水分補給はこまめに",
    description: "運動をする際に大切な水分補給について詳しくまとめてみました。",
    url: "/",
    img: "/img/information/img01.jpg",
  },
  {
    day: "2023.5.20",
    title: "トレーニング機器の扱いについて",
    description: "トレーニング機器の扱いについてまとめました。間違った使い方をすると非常に危険ですので、一度ご確認をいただければと思います。",
    url: "/",
    img: "/img/information/img02.jpg",
  },
  {
    day: "2023.3.20",
    title: "リニューアルオープン！！",
    description: "4月1日にリニューアルオープンします。リニューアルに伴いイベントを開催しますので、是非来ていただければと思います。",
    url: "/",
    img: "/img/information/img03.jpg",
  },
  {
    day: "2023.0.0",
    title: "ダミータイトル",
    description: "ダミーテキスト",
    url: "/",
    img: "/img/information/img01.jpg",
  },
  {
    day: "2023.0.0",
    title: "ダミータイトル",
    description: "ダミーテキスト",
    url: "/",
    img: "/img/information/img01.jpg",
  },
  {
    day: "2023.0.0",
    title: "ダミータイトル",
    description: "ダミーテキスト",
    url: "/",
    img: "/img/information/img01.jpg",
  },
  {
    day: "2023.0.0",
    title: "ダミータイトル",
    description: "ダミーテキスト",
    url: "/",
    img: "/img/information/img01.jpg",
  },
];

export default function Information({ show }: { show?: number }) {
  const showInformationData = InformationData.slice(0, show);
  return (
    <>
      {showInformationData.map((items) => {
        return (
          <Link href={items.url} key={items.title}>
            <Image src={items.img} alt={items.description} width={380} height={247} />
            <div className={styles.day}>{items.day}</div>
            <p>{items.title}</p>
            <p>{items.description}</p>
          </Link>
        );
      })}
    </>
  );
}

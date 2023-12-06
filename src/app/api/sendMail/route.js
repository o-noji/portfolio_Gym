import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API);

export const postSendMail = async (req, res) => {
  let response = null;

  if (req.method === "POST") {
    const msg = {
      to: req.body.email,
      from: process.env.MAIL_FROM,
      subject: "お問合せありがとうございました。",
      html: `
      <p>${req.body.name}様<br>お問合せを受け付けました。回答をお待ちください。</p>
      <p>【お名前】</p>
      <p>${req.body.name}</p>
      <p>【メールアドレス】</p>
      <p>${req.body.email}</p>
      <p>【メッセージ】</p>
      <p>${req.body.message}</p>
    `,
    };

    const notification = {
      to: process.env.MAIL_TO,
      from: process.env.MAIL_FROM,
      subject: "お問合せがありました。",
      html: `
      <p>【お名前】</p>
      <p>${req.body.name}</p>
      <p>【メールアドレス】</p>
      <p>${req.body.email}</p>
      <p>【メッセージ】</p>
      <p>${req.body.message}</p>
    `,
    };

    try {
      const response1 = await sgMail.send(msg);
      const response2 = await sgMail.send(notification);
      response = {
        message: "メールが送信されました。",
        response1,
        response2,
      };
      res.status(200).json(response);
    } catch (error) {
      console.error("メールの送信中にエラーが発生しました:", error);
      res.status(500).json({ error: "内部サーバーエラー" });
    }
  } else {
    res.status(405).json({ error: "許可されていないメソッド" });
  }
};

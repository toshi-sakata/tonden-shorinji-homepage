import { Link } from 'react-router-dom';

export const Info = () => {
  return (
    <main>
      <div className="enbu_dantai">
        <img src="/images/gasshou.jpg" width={1413} height={1017} alt="合掌礼" />
      </div>

      <div className="fbox_center">
        <Link to="/">
          <img className="souen_top" src="/images/souen2.jpg" alt="トップページへ戻る" />
        </Link>
      </div>

      <div className="fbox_center">
        <h1 className="fbox_title">始めるために</h1>
      </div>

      <div className="fbox_center fbox_y">
        <div className="fbox_center info_margin fadeIn fl">
          <div className="about">
            <h2>見学について</h2>
            <p>
              見学される際は直接道場までお越しください。
              <br />
              ※曜日により場所と時間が異なります。ご確認ください。
              <br />
              話だけでも聞いてみたいという事でも構いません。
              <br />
              電話、メールでのお問い合わせもOKです。
            </p>
          </div>
        </div>

        <div className="fbox_center info_margin fadeIn fl">
          <div className="about">
            <h2>体験について</h2>
            <p>
              何度か体験してからの入会をお勧めしています。
              <br />
              体験を通して「これなら続けられそう」と感じてから、
              入会についてご検討頂いても構いません。
              <br />
              （もちろんすぐにご入会が希望であれば、そのように対応します）
            </p>
          </div>
        </div>

        <div className="fbox_center info_margin fadeIn fl">
          <div className="about">
            <h2>転籍・復帰について</h2>
            <p>
              他の道場で少林寺拳法をやっていた、または過去にやっていて、
              またやりたくなったといった場合は、本部に記録が残っています。
              <br />
              当時の記録を本部に確認しますので、お問い合わせください。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

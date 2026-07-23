import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <hr className="footer_line" />

      <footer>
        <div className="footer_title">札幌屯田 丘珠スポーツ少年団</div>

        <div className="fbox_center">
          <div className="footer_image">
            <img
              src="/images/gasshuku2019_191205.jpg"
              alt="合宿風景"
              loading="lazy"
            />
          </div>
        </div>

        <div className="fbox_center">
          <div className="contact">
            <div className="fbox_center">
              <div className="daihyou">代表者</div>
              <div className="daihyou_name">野村 忠晴</div>
            </div>

            <div className="fbox_center">
              <div className="contact_phone">Tel. 090-9756-7645</div>
            </div>

            <div className="fbox_center">
              <img
                className="contact_img_mail"
                src="/images/mail.png"
                alt="メール"
                loading="lazy"
              />
              <img
                className="contact_img_mail_ad"
                src="/images/mail_ad.jpg"
                alt="メールアドレス"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="fbox_center">
          <Link to="/">
            <img
              className="souen_bottom"
              src="/images/souen2.jpg"
              alt="札幌屯田 丘珠スポーツ少年団"
              loading="lazy"
            />
          </Link>
        </div>

        <div className="cp_right">
          Copyright © 2025 札幌屯田 丘珠スポーツ少年団
        </div>
      </footer>
    </>
  );
};

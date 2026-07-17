import { Link } from 'react-router-dom';

type HomeProps = {
  heroVisible: boolean;
};

export const Home = ({ heroVisible }: HomeProps) => {
  return (
    <main>
      <div className={`renshuu ${heroVisible ? 'show' : ''}`}>
        <img src="/images/renshuu.jpg" alt="" />
      </div>

      <div className="fbox_center fadeIn">
        <Link to="/">
          <img className="souen_top" src="/images/souen2.jpg" alt="" />
        </Link>
      </div>

      <div className="fbox_center index_margin index_margin_rev">
        <div className="fbox_center box_1 fadeIn fr">
          <div className="box_1_title">護身術として</div>
          <p>
            少林寺拳法は暴力から身を守るために技を用い、いたずらに自分から人を傷つけることは致しません。
          </p>
          <Link to="/about">
            <div className="rel_button">READ MORE</div>
          </Link>
          <br />
        </div>
        <div className="enbu fadeIn fl">
          <img src="/images/enbu.jpg" alt="" />
        </div>
      </div>

      <div className="fbox_center index_margin">
        <div className="fbox_center box_1 fadeIn fr">
          <div className="box_1_title">人としての成長</div>
          <p>
            団体で行動する事、人の話を聞く、相手の立場に立つ、人を敬う、
            そして挨拶や靴をそろえるといった生活のルールも学んでいきます。
          </p>
          <Link to="/edu">
            <div className="rel_button">READ MORE</div>
          </Link>
          <br />
        </div>
        <div className="enbu fadeIn fd_2 fl">
          <img src="/images/chinkon.jpg" alt="" />
        </div>
      </div>

      <div className="fbox_center index_margin index_margin_rev">
        <div className="fbox_center box_1 fadeIn fr">
          <div className="box_1_title">女性やお子さんでも</div>
          <p>
            少林寺拳法の技術は小さな力で大きな効果を生み出す事ができるため、
            非力な女性や小さなお子さんでも、練習に参加する事ができます。
          </p>
          <br />
        </div>
        <div className="enbu fadeIn fd_2 fl">
          <img src="/images/oyako.jpg" alt="" />
        </div>
      </div>

      <div className="fbox_center index_margin">
        <div className="fbox_center box_1 fadeIn fr">
          <div className="box_1_title">活動内容・イベント</div>
          <p>
            普段の練習は準備運動から始まり、基本練習を行ったあと、二人一組での練習や、防具をつけ実践を想定した練習なども行います。
            <br />
            普段の練習はもちろん、合宿やレクリエーション等を通して、世代を超えた交流も活発に行っています。
            現在は6歳から68歳まで練習に参加しています。
          </p>
          <br />
        </div>
        <div className="enbu fadeIn fd_2 fl">
          <img src="/images/mochi.jpg" alt="" />
        </div>
      </div>

      <div className="fbox_center">
        <div className="kengaku fadeIn">
          <h2>見学・体験</h2>
          <p>
            見学・体験は随時受け付けています。
            <br />
            話だけでも聞いてみたいという事でも構いません。
            <br />
            電話、メールでのお問い合わせもOKです。
            <br />
            何度か体験してからの入会をお勧めしています。
            <br />
          </p>
          <Link to="/info">
            <div className="rel_button">READ MORE</div>
          </Link>
        </div>
      </div>
    </main>
  );
};

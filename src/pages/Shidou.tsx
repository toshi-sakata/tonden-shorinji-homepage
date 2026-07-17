import { Link } from 'react-router-dom';

export const Shidou = () => {
  return (
    <main>
      <div className="enbu_dantai">
        <img src="/images/enbu_dantai.jpg" width={1920} height={1418} alt="" />
      </div>

      <div className="fbox_center">
        <Link to="/">
          <img className="souen_top" src="/images/souen2.jpg" alt="" />
        </Link>
      </div>

      <div className="fbox_center">
        <h1 className="fbox_title">指導員紹介</h1>
      </div>

      <div className="shido_box">
        <div className="shido_comment fadeIn fr">
          <div className="shido_name">野村 忠晴</div>
          <p>
            当道場の代表責任者です。
            <br />
            指導に熱が入り過ぎて、ついつい話が長くなってしまうこともしばしば。
            何より人望が厚く、拳士、父母の皆さんから頼りにされています。
            <br />
            <br />
            お酒が入ると同じ話を繰り返す事がありますが、
            少林寺拳法の技術の話や道場をより良くするための事を常に考えていらっしゃいます。
          </p>
          <ul>
            <li>正範士 七段</li>
            <li>札幌屯田道院 道院長</li>
            <li>丘珠スポーツ少年団 支部長</li>
            <li>北海道少林寺拳法連盟 常任理事</li>
            <li>北海道連盟審判委員会 審判委員長</li>
            <li>札幌少林寺拳法協会 相談役</li>
            <li>札幌市スポーツ少年団登録指導者</li>
          </ul>
        </div>

        <div className="shidou_fig fadeIn fd_2 fl">
          <img src="/images/nomura.jpg" alt="" />
        </div>
      </div>
    </main>
  );
};

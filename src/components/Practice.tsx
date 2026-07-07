

const practices = [
  {
    day: '火曜日',
    time: '18:30～20:00(隔週)',
    name: '東雁来児童会館',
    place: '札幌市東区東雁来14条2丁目1-1',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.9344499940294!2d141.4311726721341!3d43.10589243732897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeb5bbea1f521e82b!2z5pyt5bmM5p2x6ZuB5p2l5YWQ56ul5Lya6aSoIOOBi-OCiuOBn-OBvg!5e0!3m2!1sja!2sjp!4v1584453056590!5m2!1sja!2sjp'
  },
  {
    day: '水曜日',
    time: '18:00～19:30(隔週)',
    name: '東区体育館 2F格技室',
    place: '札幌市東区北27条東14丁目3-1',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.333634171014!2d141.36602457614757!3d43.09750297113389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b28d5ec350db7%3A0xe815f8727d0f19cb!2z5p2x5Yy65L2T6IKy6aSo!5e0!3m2!1sja!2sjp!4v1745233866723!5m2!1sja!2sjp'
  },
  {
    day: '木曜日',
    time: '18:00～19:30',
    name: '北区体育館 1F格技室',
    place: '札幌市北区新琴似8条2丁目1-25',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.6118756910478!2d141.3313689761484!3d43.112670871132835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b28b06d836f3f%3A0xdc68a5a24e6b33e8!2z5pyt5bmM5biCIOWMl-WMuuS9k-iCsumkqA!5e0!3m2!1sja!2sjp!4v1745494042066!5m2!1sja!2sjp'
  },
  {
    day: '金曜日',
    time: '18:30～20:00',
    name: '丘珠たから児童会館',
    place: '札幌市東区北35条東23丁目7-10',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.0294602183144!2d141.38028257596207!3d43.10389577113352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2f28422248ef%3A0xbfc5b60dbad0a4c9!2z5pyt5bmM5biC5LiY54-g44Gf44GL44KJ5YWQ56ul5Lya6aSo!5e0!3m2!1sja!2sjp!4v1745234271815!5m2!1sja!2sjp'
  },
  {
    day: '土曜日',
    time: '18:30～20:00',
    name: '屯田児童会館',
    place: '札幌市北区屯田5条6丁目2-23',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5822.9986849096995!2d141.3254149451648!3d43.1360425845253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b25fca1d4acc3%3A0x1e35e7312a035b2f!2z5pyt5bmM5biC5bGv55Sw5YWQ56ul5Lya6aSo!5e0!3m2!1sja!2sjp!4v1745234207179!5m2!1sja!2sjp'
  }
];

export const Practice = () => (
  <>
    <hr className="map_line" />
    <div className="practice_outer">
      <div className="practice_outer2">
        {practices.map((practice) => (
          <div className="practice" key={practice.day}>
            <div className="practice_title">
              <div className="practice_day">{practice.day}</div>
              <div className="practice_time">{practice.time}</div>
            </div>
            <div className="practice_name">{practice.name}</div>
            <div className="practice_place">{practice.place}</div>
            <div className="practice_map">
              <iframe
                className="map"
                src={practice.map}
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

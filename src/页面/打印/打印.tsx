import React, { useContext, Fragment } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import SettingsContext from "../../utils/SettingsContext";

const 容器 = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media print {
    padding: 0;
  }

  background: white;
  color: black;

  section {
    width: 51em;
    height: 72em;

    margin: 30px auto;
    border: solid 1px black;

    font-size: 24px;

    @media print {
      margin: 0;
      border: none;
      max-width: none;
      min-height: initial;
      page-break-before: always;
      font-size: 22.7px;
    }

    display: flex;
    flex-flow: wrap;
    flex-direction: column;

    > * {
      width: calc(20% + 3px);
      padding-right: 12px;
    }

    h1 {
      font-size: 4rem;
      font-weight: 500;
    }

    h3 {
      font-size: 2.7rem;
      font-weight: 300;
    }

    > div {
      margin-bottom: 0.4rem;
      display: flex;
    }

    h4 {
      display: inline;
      font-size: 1.9rem;
      line-height: 2.2rem;
      font-weight: 200;
      margin: 0 0.2rem 0 0;
    }

    > div > div {
      line-height: 1.5rem;
      font-weight: 200;
    }

    h5 {
      display: inline;
      font-weight: inherit;
      line-height: inherit;
      font-size: 1.4rem;
    }

    span {
      display: inline;
      line-height: inherit;
      font-weight: inherit;
      font-size: 1.3rem;
    }
  }

  section.radicals {
    h1:not(:first-of-type) {
      margin-top: 1.5rem;
    }

    h1:nth-of-type(4),
    h1:nth-of-type(6) {
      margin-top: 0;
    }

    > * {
      margin-bottom: 0.55rem;
    }
  }
`;

const 打印: React.FC<RouteComponentProps> = () => {
  const settings = useContext(SettingsContext);

  return (
    <>
      <容器>
        <section className="radicals">
          {settings.data.slice(0, 4).map((部首, 部首index) => (
            <Fragment key={部首.strokeNumber}>
              <h1>画{部首.strokeNumber}</h1>
              {部首.radicals.map((radical, radIndex) => {
                const charIndex =
                  radIndex +
                  1 +
                  settings.data
                    .slice(0, 部首index)
                    .reduce(
                      (accum, strokeNumber) =>
                        accum + strokeNumber.radicals.length,
                      0
                    );
                return (
                  <h3 key={radical.symbol}>
                    {charIndex}: {radical.symbol}
                  </h3>
                );
              })}
            </Fragment>
          ))}
        </section>
        <section className="radicals">
          {settings.data.slice(4, 15).map((部首, 部首index) => (
            <Fragment key={部首.strokeNumber}>
              <h1>画{部首.strokeNumber}</h1>
              {部首.radicals.map((radical, radIndex) => {
                const charIndex =
                  radIndex +
                  1 +
                  128 +
                  settings.data
                    .slice(0, 部首index)
                    .reduce(
                      (accum, strokeNumber) =>
                        accum + strokeNumber.radicals.length,
                      0
                    );
                return (
                  <h3 key={radical.symbol}>
                    {charIndex}: {radical.symbol}
                  </h3>
                );
              })}
              {部首index === 2 && <br />}
              {部首index === 2 && <br />}
              {部首index === 2 && <br />}
              {部首index === 2 && <br />}
              {部首index === 4 && <br />}
              {部首index === 4 && <br />}
              {部首index === 4 && <br />}
              {部首index === 4 && <br />}
              {部首index === 4 && <br />}
            </Fragment>
          ))}
        </section>
      </容器>
      <容器 dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

const html = `
  <section>
    <h1>1: 一</h1>
    <div>
      <h4>一: </h4><div><h5>yī: </h5><span>one; a, an; alone</span></div>
    </div>
    <h3>画1</h3>
    <div>
      <h4>丁: </h4><div><h5>dīng, zhēng: </h5>
      <span>male adult; robust, vigorous; 4th heavenly stem</span></div>
    </div>
    <div>
      <h4>七: </h4><div><h5>qī: </h5><span>seven</span></div>
    </div>
    <h3>画2</h3>
    <div>
      <h4>万: </h4><div><h5>wàn, mò: </h5><span>ten thousand; innumerable</span></div>
    </div>
    <div>
      <h4>丈: </h4><div><h5>zhàng: </h5>
      <span>unit of length equal 3.3 meters; gentleman, man, husband</span></div>
    </div>
    <div>
      <h4>上: </h4><div><h5>shàng, shǎng: </h5><span>top; superior, highest; go up, send up</span></div>
    </div>
    <div>
      <h4>下: </h4><div><h5>xià: </h5>
      <span>under, underneath, below; down; inferior; bring down</span></div>
    </div>
    <div>
      <h4>丌: </h4><div><h5>qí, jī: </h5><span>table</span></div>
    </div>
    <div>
      <h4>与: </h4><div><h5>yǔ, yù, yú: </h5><span>and; with; to; for; give, grant</span></div>
    </div>
    <h3>画3</h3>
    <div>
      <h4>不: </h4><div><h5>bù, fǒu: </h5><span>no, not; un-; negative prefix</span></div>
    </div>
    <div>
      <h4>丐: </h4><div><h5>gài: </h5><span>beggar; beg; give</span></div>
    </div>
    <div>
      <h4>丑: </h4><div><h5>chǒu: </h5><span>clown, comedian; 2nd terrestrial branch</span></div>
    </div>
    <div>
      <h4>专: </h4><div><h5>zhuān: </h5><span>monopolize, take sole possession</span></div>
    </div>
    <div>
      <h4>无: </h4><div><h5>wú: </h5><span>negative, no, not; KangXi radical 7</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>且: </h4><div><h5>qiě, jū: </h5>
      <span>
        moreover, also (post-subject); about to, will soon (pre-verb)
      </span></div>
    </div>
    <div>
      <h4>丕: </h4><div><h5>pī: </h5><span>great, grand, glorious, distinguished</span></div>
    </div>
    <div>
      <h4>世: </h4><div><h5>shì: </h5><span>generation; world; era</span></div>
    </div>
    <div>
      <h4>丙: </h4><div><h5>bǐng: </h5><span>third; 3rd heavenly stem</span></div>
    </div>
    <div>
      <h4>业: </h4><div><h5>yè: </h5><span>profession, business; GB radical 111</span></div>
    </div>
    <div>
      <h4>丛: </h4><div><h5>cóng: </h5><span>bush, shrub; thicket; collection</span></div>
    </div>
    <div>
      <h4>东: </h4><div><h5>dōng: </h5><span>east, eastern, eastward</span></div>
    </div>
    <div>
      <h4>丝: </h4><div><h5>sī: </h5><span>silk; fine thread; wire; strings</span></div>
    </div>
    <h3>画5-7</h3>
    <div>
      <h4>丞: </h4><div><h5>chéng: </h5><span>assist, aid, rescue</span></div>
    </div>
    <div>
      <h4>两: </h4><div><h5>liǎng: </h5><span>two, both, pair, couple; ounce</span></div>
    </div>
    <div>
      <h4>严: </h4><div><h5>yán: </h5><span>strict, rigorous, rigid; stern</span></div>
    </div>
    <div>
      <h4>丽: </h4><div><h5>lì, lí: </h5><span>beautiful, magnificent, elegant</span></div>
    </div>
    <div>
      <h4>丧: </h4><div><h5>sāng, sàng: </h5><span>mourning; mourn; funeral</span></div>
    </div>
    <h1>2: 丨</h1>
    <div>
      <h4>丫: </h4><div><h5>yā: </h5><span>forked; bifurcation</span></div>
    </div>
    <div>
      <h4>中: </h4><div><h5>zhōng, zhòng: </h5>
      <span>
        central; center, middle; in the midst of; hit (target); attain
      </span></div>
    </div>
    <div>
      <h4>丰: </h4><div><h5>fēng: </h5><span>abundant, lush, bountiful, plenty</span></div>
    </div>
    <div>
      <h4>卡: </h4><div><h5>qiǎ, kǎ: </h5><span>card, punch card; calorie</span></div>
    </div>
    <div>
      <h4>串: </h4><div><h5>chuàn: </h5><span>string; relatives; conspire</span></div>
    </div>
    <div>
      <h4>临: </h4><div><h5>lín: </h5><span>draw near, approach; descend</span></div>
    </div>
    <h1>3: 丶</h1>
    <div>
      <h4>义: </h4><div><h5>yì: </h5><span>right conduct, righteousness</span></div>
    </div>
    <div>
      <h4>之: </h4><div><h5>zhī: </h5>
      <span>
        marks preceding phrase as modifier of following phrase; it, him her,
        them; go to
      </span></div>
    </div>
    <div>
      <h4>为: </h4><div><h5>wéi, wèi: </h5><span>do, handle, govern, act; be</span></div>
    </div>
    <div>
      <h4>主: </h4><div><h5>zhǔ: </h5><span>master, chief owner; host; lord</span></div>
    </div>
    <div>
      <h4>举: </h4><div><h5>jǔ: </h5><span>raise, lift up; recommend</span></div>
    </div>
    <h1>4: 丿</h1>
    <h3>画1-2</h3>
    <div>
      <h4>乃: </h4><div><h5>nǎi: </h5>
      <span>then; really, indeed; as it turned out, after all; namely</span></div>
    </div>
    <div>
      <h4>九: </h4><div><h5>jiǔ: </h5><span>nine</span></div>
    </div>
    <div>
      <h4>丸: </h4><div><h5>wán: </h5><span>small round object; pellet, pill</span></div>
    </div>
    <div>
      <h4>久: </h4><div><h5>jiǔ: </h5><span>long time (ago); time passage, grow late</span></div>
    </div>
    <div>
      <h4>么: </h4><div><h5>me, mó, ma, yāo: </h5>
      <span>interrogative particle; repetition of a tune small; tender</span></div>
    </div>
    <h3>画3</h3>
    <div>
      <h4>丹: </h4><div><h5>dān: </h5>
      <span>
        cinnabar (native HgS); vermilion (artificial HgS used as pigment)
      </span></div>
    </div>
    <div>
      <h4>乌: </h4><div><h5>wū: </h5><span>crow, rook, raven; black, dark</span></div>
    </div>
    <div>
      <h4>乏: </h4><div><h5>fá: </h5><span>lack; poor</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>丘: </h4><div><h5>qiū: </h5><span>hill; elder; empty; a name</span></div>
    </div>
    <div>
      <h4>乍: </h4><div><h5>zhà: </h5><span>first time, for the first time</span></div>
    </div>
    <div>
      <h4>乎: </h4><div><h5>hū: </h5><span>interrogative or exclamatory final particle</span></div>
    </div>
    <div>
      <h4>乐: </h4><div><h5>lè, yuè, yào, lào: </h5><span>happy, glad; enjoyable; music</span></div>
    </div>
    <div>
      <h4>册: </h4><div><h5>cè: </h5><span>book, volume, register, list</span></div>
    </div>
    <h3>画5-9</h3>
    <div>
      <h4>丢: </h4><div><h5>diū: </h5><span>discard</span></div>
    </div>
    <div>
      <h4>乒: </h4><div><h5>pīng: </h5><span>used with pong for ping pong</span></div>
    </div>
    <div>
      <h4>乓: </h4><div><h5>pāng: </h5><span>used with ping for ping pong</span></div>
    </div>
    <div>
      <h4>乔: </h4><div><h5>qiáo: </h5><span>tall, lofty; proud, stately</span></div>
    </div>
    <div>
      <h4>乖: </h4><div><h5>guāi: </h5><span>rebel; crafty, shrewd</span></div>
    </div>
    <div>
      <h4>禹: </h4><div><h5>yǔ: </h5><span>legendary hsia dynasty founder</span></div>
    </div>
    <div>
      <h4>乘: </h4><div><h5>chéng, shèng: </h5>
      <span>
        ride, ascend; avail oneself of; numerary adjunct for vehicles
      </span></div>
    </div>
    <h1>5: 乙</h1>
    <div>
      <h4>乙: </h4><div><h5>yǐ: </h5><span>second; 2nd heavenly stem</span></div>
    </div>
    <h3>画1-3</h3>
    <div>
      <h4>了: </h4><div><h5>liǎo, le: </h5><span>to finish; particle of completed action</span></div>
    </div>
    <div>
      <h4>乞: </h4><div><h5>qǐ: </h5><span>beg; request</span></div>
    </div>
    <div>
      <h4>也: </h4><div><h5>yě: </h5>
      <span>
        also; classical final particle of strong affirmation or identity
      </span></div>
    </div>
    <div>
      <h4>习: </h4><div><h5>xí: </h5><span>practice; flapping wings</span></div>
    </div>
    <div>
      <h4>乡: </h4><div><h5>xiāng: </h5><span>country; rural; village</span></div>
    </div>
    <div>
      <h4>书: </h4><div><h5>shū: </h5><span>book, letter, document; writings</span></div>
    </div>
    <div>
      <h4>予: </h4><div><h5>yú, yǔ: </h5><span>I, me; to give</span></div>
    </div>
    <h3>画5-10</h3>
    <div>
      <h4>乩: </h4><div><h5>jī: </h5><span>to divine</span></div>
    </div>
    <div>
      <h4>买: </h4><div><h5>mǎi: </h5><span>buy, purchase; bribe, persuade</span></div>
    </div>
    <div>
      <h4>乱: </h4><div><h5>luàn: </h5><span>confusion, state of chaos, revolt</span></div>
    </div>
    <div>
      <h4>承: </h4><div><h5>chéng: </h5><span>inherit, receive; succeed</span></div>
    </div>
    <div>
      <h4>乾: </h4><div><h5>qián, gān: </h5>
      <span>
        dry; first hexagram; warming principle of the sun, penetrating and
        fertilizing, heavenly generative principle (male)
      </span></div>
    </div>
    <h1>6: 乚</h1>
    <div>
      <h4>乳: </h4><div><h5>rǔ: </h5><span>breast, nipples; milk, suckle</span></div>
    </div>
    <h1>7: 乛</h1>
    <div>
      <h4>民: </h4><div><h5>mín: </h5><span>people, subjects, citizens</span></div>
    </div>
    <h1>8: 亅</h1>
    <div>
      <h4>事: </h4><div><h5>shì: </h5>
      <span>affair, matter, business; to serve; accident, incident</span></div>
    </div>
    <h1>9: 丷</h1>
    <div>
      <h4>兰: </h4><div><h5>lán: </h5><span>orchid; elegant, graceful</span></div>
    </div>
    <div>
      <h4>关: </h4><div><h5>guān: </h5><span>frontier pass; close; relation</span></div>
    </div>
    <div>
      <h4>兑: </h4><div><h5>duì, ruì, yuè: </h5><span>cash; exchange</span></div>
    </div>
    <div>
      <h4>兹: </h4><div><h5>zī, cí: </h5><span>now, here; this; time, year</span></div>
    </div>
    <div>
      <h4>养: </h4><div><h5>yǎng: </h5><span>raise, rear, bring up; support</span></div>
    </div>
    <div>
      <h4>兼: </h4><div><h5>jiān: </h5><span>unite, combine; connect; and</span></div>
    </div>
    <div>
      <h4>兽: </h4><div><h5>shòu: </h5><span>beast, animal; bestial</span></div>
    </div>
    <h1>10: 二</h1>
    <div>
      <h4>二: </h4><div><h5>èr: </h5><span>two; twice</span></div>
    </div>
    <h3>画1-2</h3>
    <div>
      <h4>于: </h4><div><h5>yú: </h5><span>in, on, at; go to; surname</span></div>
    </div>
    <div>
      <h4>亏: </h4><div><h5>kuī: </h5><span>lose, fail; damage; deficient</span></div>
    </div>
    <div>
      <h4>云: </h4><div><h5>yún: </h5><span>say, speak; clouds</span></div>
    </div>
    <div>
      <h4>互: </h4><div><h5>hù: </h5><span>mutually, reciprocally</span></div>
    </div>
    <div>
      <h4>五: </h4><div><h5>wǔ: </h5><span>five; surname</span></div>
    </div>
    <div>
      <h4>井: </h4><div><h5>jǐng: </h5><span>well, mine shaft, pit</span></div>
    </div>
    <div>
      <h4>元: </h4><div><h5>yuán: </h5><span>first; dollar; origin; head</span></div>
    </div>
    <h3>画4-6</h3>
    <div>
      <h4>亘: </h4><div><h5>gèn: </h5><span>extend across, through; from</span></div>
    </div>
    <div>
      <h4>亚: </h4><div><h5>yà: </h5><span>Asia; second</span></div>
    </div>
    <div>
      <h4>些: </h4><div><h5>xiē, suò: </h5><span>little, few; rather, somewhat</span></div>
    </div>
    <div>
      <h4>亟: </h4><div><h5>jí, qì: </h5><span>urgently, immediately, extremely</span></div>
    </div>
    <h1>11: 亠</h1>
    <h3>画1-4</h3>
    <div>
      <h4>亡: </h4><div><h5>wáng, wú: </h5><span>death, destroyed; lose, perish</span></div>
    </div>
    <div>
      <h4>亢: </h4><div><h5>kàng: </h5><span>high, proud; violent, excessive; skilled; name</span></div>
    </div>
    <div>
      <h4>交: </h4><div><h5>jiāo: </h5><span>mix; intersect; exchange, communicate; deliver</span></div>
    </div>
    <div>
      <h4>亥: </h4><div><h5>hài: </h5><span>12th terrestrial branch</span></div>
    </div>
    <div>
      <h4>亦: </h4><div><h5>yì: </h5><span>also, too; likewise</span></div>
    </div>
    <div>
      <h4>产: </h4><div><h5>chǎn: </h5><span>give birth, bring forth, produce</span></div>
    </div>
    <div>
      <h4>充: </h4><div><h5>chōng: </h5><span>fill, be full, supply</span></div>
    </div>
  </section>
  <section>
    <h3>画5-6</h3>
    <div>
      <h4>亨: </h4><div><h5>hēng, pēng: </h5><span>smoothly, progressing, no trouble</span></div>
    </div>
    <div>
      <h4>亩: </h4><div><h5>mǔ: </h5><span>Chinese land measure; fields</span></div>
    </div>
    <div>
      <h4>享: </h4><div><h5>xiǎng: </h5><span>enjoy</span></div>
    </div>
    <div>
      <h4>京: </h4><div><h5>jīng: </h5><span>capital city</span></div>
    </div>
    <div>
      <h4>氓: </h4><div><h5>méng, máng: </h5><span>people; subjects; vassals</span></div>
    </div>
    <h3>画7-10</h3>
    <div>
      <h4>亭: </h4><div><h5>tíng: </h5><span>pavilion; erect</span></div>
    </div>
    <div>
      <h4>亮: </h4><div><h5>liàng: </h5><span>bright, brilliant, radiant, light</span></div>
    </div>
    <div>
      <h4>亲: </h4><div><h5>qīn, qìng: </h5>
      <span>
        relatives, parents; intimate the hazel nut or filbert tree a thorny
        tree
      </span></div>
    </div>
    <div>
      <h4>亳: </h4><div><h5>bó: </h5><span>name of district in Anhui; capital of Yin</span></div>
    </div>
    <div>
      <h4>离: </h4><div><h5>lí: </h5><span>rare beast; strange; elegant</span></div>
    </div>
    <div>
      <h4>亵: </h4><div><h5>xiè: </h5><span>slight, insult, treat with disrespect</span></div>
    </div>
    <h1>12: 人</h1>
    <div>
      <h4>人: </h4><div><h5>rén: </h5><span>man; people; mankind; someone else</span></div>
    </div>
    <h3>画1-2</h3>
    <div>
      <h4>个: </h4><div><h5>gè, gě: </h5><span>numerary adjunct, piece; single</span></div>
    </div>
    <div>
      <h4>仄: </h4><div><h5>zè: </h5><span>slanting, oblique; oblique tones</span></div>
    </div>
    <div>
      <h4>今: </h4><div><h5>jīn: </h5><span>now, today, modern era</span></div>
    </div>
    <div>
      <h4>介: </h4><div><h5>jiè: </h5>
      <span>
        forerunner, herald, harbinger; to lie between; sea shell; to wear
        armor
      </span></div>
    </div>
    <div>
      <h4>从: </h4><div><h5>cóng, zòng: </h5><span>from, by, since, whence, through</span></div>
    </div>
    <div>
      <h4>仑: </h4><div><h5>lún: </h5><span>logical reasons, logical order</span></div>
    </div>
    <div>
      <h4>仓: </h4><div><h5>cāng: </h5><span>granary; berth; sea</span></div>
    </div>
    <div>
      <h4>以: </h4><div><h5>yǐ: </h5>
      <span>by means of; thereby, therefore; consider as; in order to</span></div>
    </div>
    <h3>画3-5</h3>
    <div>
      <h4>令: </h4><div><h5>líng, lǐng, lìng: </h5>
      <span>command, order; 'commandant', magistrate; allow, cause</span></div>
    </div>
    <div>
      <h4>企: </h4><div><h5>qǐ: </h5><span>plan a project; stand on tiptoe</span></div>
    </div>
    <div>
      <h4>众: </h4><div><h5>zhòng: </h5><span>multitude, crowd; masses, public</span></div>
    </div>
    <div>
      <h4>会: </h4><div><h5>huì, kuài: </h5><span>assemble, meet together; meeting</span></div>
    </div>
    <div>
      <h4>伞: </h4><div><h5>sǎn: </h5><span>umbrella, parasol, parachute</span></div>
    </div>
    <div>
      <h4>余: </h4><div><h5>yú: </h5><span>I, my, me; surname; surplus</span></div>
    </div>
    <h3>画7-10</h3>
    <div>
      <h4>俎: </h4><div><h5>zǔ: </h5><span>chopping board or block; painted</span></div>
    </div>
    <div>
      <h4>俞: </h4><div><h5>yú, yù, shù: </h5><span>surname; consent, approve</span></div>
    </div>
    <div>
      <h4>禽: </h4><div><h5>qín: </h5><span>birds, fowl; surname;; capture</span></div>
    </div>
    <h1>13: 亻</h1>
    <h3>画1</h3>
    <div>
      <h4>亿: </h4><div><h5>yì: </h5><span>hundred million; many</span></div>
    </div>
    <h3>画2</h3>
    <div>
      <h4>什: </h4><div><h5>shí, shén: </h5><span>file of ten soldiers; mixed, miscellaneous</span></div>
    </div>
    <div>
      <h4>仁: </h4><div><h5>rén: </h5><span>humaneness, benevolence, kindness</span></div>
    </div>
    <div>
      <h4>仃: </h4><div><h5>dīng: </h5><span>lonely, solitary</span></div>
    </div>
    <div>
      <h4>仅: </h4><div><h5>jǐn, jìn: </h5><span>only, merely, solely, just</span></div>
    </div>
    <div>
      <h4>仆: </h4><div><h5>pū, pú: </h5><span>fall forward; lie prostrate, prone; servant</span></div>
    </div>
    <div>
      <h4>仇: </h4><div><h5>chóu, qiú: </h5><span>enemy, hate, hatred, enmity</span></div>
    </div>
    <div>
      <h4>仍: </h4><div><h5>réng: </h5><span>yet, still, as ever; again; keep -ing, continuing</span></div>
    </div>
    <div>
      <h4>化: </h4><div><h5>huà, huā: </h5><span>change, convert, reform; -ize</span></div>
    </div>
    <h3>画3</h3>
    <div>
      <h4>仔: </h4><div><h5>zī, zǐ, zǎi: </h5><span>small thing, child; young animal</span></div>
    </div>
    <div>
      <h4>仕: </h4><div><h5>shì: </h5><span>official; serve government</span></div>
    </div>
    <div>
      <h4>他: </h4><div><h5>tā: </h5><span>other, another; he, she, it</span></div>
    </div>
    <div>
      <h4>仗: </h4><div><h5>zhàng: </h5><span>rely upon; protector; fight; war, weaponry</span></div>
    </div>
    <div>
      <h4>付: </h4><div><h5>fù: </h5><span>give, deliver, pay, hand over; entrust</span></div>
    </div>
    <div>
      <h4>仙: </h4><div><h5>xiān: </h5><span>Taoist super-being, transcendent, immortal</span></div>
    </div>
    <div>
      <h4>仞: </h4><div><h5>rèn: </h5><span>ancient unit of measure (8 feet); 'fathom'</span></div>
    </div>
    <div>
      <h4>仟: </h4><div><h5>qiān: </h5><span>one thousand; leader of one thousand men</span></div>
    </div>
    <div>
      <h4>代: </h4><div><h5>dài: </h5>
      <span>
        replace, replacement (of person or generation &gt;); era, generation
      </span></div>
    </div>
    <div>
      <h4>仪: </h4><div><h5>yí: </h5><span>ceremony, rites gifts; admire</span></div>
    </div>
    <div>
      <h4>们: </h4><div><h5>mén: </h5><span>adjunct pronoun indicate plural</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>仰: </h4><div><h5>yǎng, áng: </h5>
      <span>raise the head to look; look up to, rely on, admire</span></div>
    </div>
    <div>
      <h4>仲: </h4><div><h5>zhòng: </h5><span>middle brother; go between, mediator; surname</span></div>
    </div>
    <div>
      <h4>件: </h4><div><h5>jiàn: </h5><span>numerary adjunct for article; matter</span></div>
    </div>
    <div>
      <h4>价: </h4><div><h5>jià, jiè, jie: </h5><span>price, value</span></div>
    </div>
    <div>
      <h4>任: </h4><div><h5>rèn, rén: </h5>
      <span>trust to, rely on, appoint; to bear, duty, office; allow</span></div>
    </div>
    <div>
      <h4>份: </h4><div><h5>fèn, bīn: </h5><span>portion, part; duty</span></div>
    </div>
    <div>
      <h4>仿: </h4><div><h5>fǎng: </h5><span>imitate, copy; as if</span></div>
    </div>
    <div>
      <h4>伊: </h4><div><h5>yī: </h5><span>third person pronoun; he, she, this, that</span></div>
    </div>
    <div>
      <h4>伍: </h4><div><h5>wǔ: </h5><span>five, company of five; troops</span></div>
    </div>
    <div>
      <h4>伎: </h4><div><h5>jì, qí: </h5><span>talent, skill, ability</span></div>
    </div>
    <div>
      <h4>伏: </h4><div><h5>fú: </h5><span>crouch, crawl, lie hidden, conceal</span></div>
    </div>
    <div>
      <h4>伐: </h4><div><h5>fá: </h5><span>cut down, subjugate, attack</span></div>
    </div>
    <div>
      <h4>休: </h4><div><h5>xiū, xǔ: </h5><span>rest, stop; retire; do not!</span></div>
    </div>
    <div>
      <h4>伕: </h4><div><h5>fū: </h5><span>common laborer</span></div>
    </div>
    <div>
      <h4>优: </h4><div><h5>yōu: </h5><span>superior, excellent; actor</span></div>
    </div>
    <div>
      <h4>伙: </h4><div><h5>huǒ: </h5><span>companion, colleague; utensils</span></div>
    </div>
    <div>
      <h4>伝: </h4><div><h5>yún: </h5><span>summon; propagate, transmit</span></div>
    </div>
    <div>
      <h4>伟: </h4><div><h5>wěi: </h5><span>great, robust; extraordinary</span></div>
    </div>
    <div>
      <h4>传: </h4><div><h5>chuán, zhuàn: </h5><span>summon; propagate, transmit</span></div>
    </div>
    <div>
      <h4>伤: </h4><div><h5>shāng: </h5><span>wound, injury; fall ill from</span></div>
    </div>
    <div>
      <h4>伦: </h4><div><h5>lún: </h5><span>normal human relationships</span></div>
    </div>
    <div>
      <h4>伪: </h4><div><h5>wěi: </h5><span>false, counterfeit, bogus</span></div>
    </div>
    <div>
      <h4>伫: </h4><div><h5>zhù: </h5><span>look towards; turn one's back on</span></div>
    </div>
    <div>
      <h4>似: </h4><div><h5>sì, shì: </h5><span>resemble, similar to; as if, seem</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>伯: </h4><div><h5>bó, bǎi, bà: </h5>
      <span>
        older brother; father's elder brother; senior male 'sire'; feudal rank
        'count'
      </span></div>
    </div>
    <div>
      <h4>估: </h4><div><h5>gū, gù: </h5><span>merchant; estimate, guess, presume</span></div>
    </div>
    <div>
      <h4>伴: </h4><div><h5>bàn: </h5><span>companion, comrade, partner; accompany</span></div>
    </div>
    <div>
      <h4>伶: </h4><div><h5>líng: </h5><span>lonely, solitary; actor</span></div>
    </div>
    <div>
      <h4>伸: </h4><div><h5>shēn: </h5><span>extend, stretch out, open up; trust</span></div>
    </div>
    <div>
      <h4>伺: </h4><div><h5>sì, cì: </h5><span>serve, wait upon, attend; examine</span></div>
    </div>
    <div>
      <h4>但: </h4><div><h5>dàn: </h5><span>only; but, however, yet, still</span></div>
    </div>
    <div>
      <h4>位: </h4><div><h5>wèi: </h5><span>throne; position, post; rank, status; seat</span></div>
    </div>
    <div>
      <h4>低: </h4><div><h5>dī: </h5><span>low; to lower, hang, bend, bow</span></div>
    </div>
    <div>
      <h4>住: </h4><div><h5>zhù: </h5><span>reside, live at, dwell, lodge; stop</span></div>
    </div>
    <div>
      <h4>佐: </h4><div><h5>zuǒ: </h5><span>assist, aid, second; subordinate</span></div>
    </div>
    <div>
      <h4>佑: </h4><div><h5>yòu: </h5><span>help, protect, bless</span></div>
    </div>
    <div>
      <h4>体: </h4><div><h5>tǐ, tī: </h5><span>body; group, class, body, unit; inferior</span></div>
    </div>
    <div>
      <h4>何: </h4><div><h5>hé, hē, hè: </h5><span>what, why, where, which, how</span></div>
    </div>
    <div>
      <h4>佗: </h4><div><h5>tuó: </h5><span>other, he; surname; a load</span></div>
    </div>
    <div>
      <h4>佚: </h4><div><h5>yì, dié: </h5><span>indulge in pleasures; flee</span></div>
    </div>
    <div>
      <h4>佛: </h4><div><h5>fó, fú, bì, bó: </h5>
      <span>
        Buddha; of Buddhism; merciful person
      </span></div>
    </div>
    <div>
      <h4>作: </h4><div><h5>zuò: </h5><span>make; work; compose, write; act, perform</span></div>
    </div>
    <div>
      <h4>佞: </h4><div><h5>nìng: </h5><span>flattery; glib</span></div>
    </div>
    <div>
      <h4>你: </h4><div><h5>nǐ: </h5><span>you, second person pronoun</span></div>
    </div>
    <div>
      <h4>佣: </h4><div><h5>yōng, yòng: </h5><span>commission fee</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>佩: </h4><div><h5>pèi: </h5>
      <span>
        belt ornament, pendant; wear at waist, tie to the belt; respect
      </span></div>
    </div>
    <div>
      <h4>佫: </h4><div><h5>gé, hè: </h5><span></span></div>
    </div>
    <div>
      <h4>佯: </h4><div><h5>yáng: </h5><span>pretend, feign; false, deceitful</span></div>
    </div>
    <div>
      <h4>佰: </h4><div><h5>bǎi: </h5><span>hundred</span></div>
    </div>
    <div>
      <h4>佳: </h4><div><h5>jiā: </h5><span>good, auspicious; beautiful; delightful</span></div>
    </div>
    <div>
      <h4>佶: </h4><div><h5>jí: </h5><span>strong, robust; exact, correct</span></div>
    </div>
    <div>
      <h4>佼: </h4><div><h5>jiǎo: </h5><span>beautiful, handsome, good-looking</span></div>
    </div>
    <div>
      <h4>使: </h4><div><h5>shǐ: </h5>
      <span>
        cause, send on a mission, order; envoy, messenger, ambassador
      </span></div>
    </div>
    <div>
      <h4>侃: </h4><div><h5>kǎn: </h5><span>upright and strong; amiable</span></div>
    </div>
    <div>
      <h4>侄: </h4><div><h5>zhí: </h5><span>nephew</span></div>
    </div>
    <div>
      <h4>侈: </h4><div><h5>chǐ: </h5><span>luxurious, extravagant</span></div>
    </div>
    <div>
      <h4>例: </h4><div><h5>lì: </h5><span>precedent, example; regulation</span></div>
    </div>
    <div>
      <h4>侍: </h4><div><h5>shì: </h5><span>serve, attend upon; attendant, servant; samurai</span></div>
    </div>
    <div>
      <h4>侏: </h4><div><h5>zhū: </h5><span>small, little, tiny, dwarf</span></div>
    </div>
    <div>
      <h4>供: </h4><div><h5>gōng, gòng: </h5><span>supply, provide for; offer in worship</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>依: </h4><div><h5>yī: </h5><span>rely on, be set in; consent, obey a wish</span></div>
    </div>
    <div>
      <h4>侠: </h4><div><h5>xiá: </h5><span>chivalrous person; knight-errant</span></div>
    </div>
    <div>
      <h4>侣: </h4><div><h5>lǚ: </h5><span>companion; associate with</span></div>
    </div>
    <div>
      <h4>侥: </h4><div><h5>jiǎo, yáo: </h5><span>be lucky; by chance, by luck</span></div>
    </div>
    <div>
      <h4>侦: </h4><div><h5>zhēn: </h5><span>spy, reconnoiter; detective</span></div>
    </div>
    <div>
      <h4>侧: </h4><div><h5>cè, zè, zhāi: </h5><span>side; incline, slant, lean</span></div>
    </div>
    <div>
      <h4>侨: </h4><div><h5>qiáo: </h5><span>sojourn, lodge</span></div>
    </div>
    <div>
      <h4>侪: </h4><div><h5>chái: </h5><span>a company, companion; together</span></div>
    </div>
    <div>
      <h4>侬: </h4><div><h5>nóng: </h5><span>I; you; family name</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>侮: </h4><div><h5>wǔ: </h5><span>insult, ridicule, disgrace</span></div>
    </div>
    <div>
      <h4>侯: </h4><div><h5>hóu, hòu: </h5><span>marquis, lord; target in archery</span></div>
    </div>
    <div>
      <h4>侵: </h4><div><h5>qīn: </h5><span>invade, encroach upon, raid</span></div>
    </div>
    <div>
      <h4>便: </h4><div><h5>biàn, pián: </h5><span>convenience, ease; expedient</span></div>
    </div>
    <div>
      <h4>促: </h4><div><h5>cù: </h5><span>urge, press, hurry; close</span></div>
    </div>
    <div>
      <h4>俄: </h4><div><h5>é: </h5><span>sudden(ly), soon; Russian</span></div>
    </div>
    <div>
      <h4>俊: </h4><div><h5>jùn: </h5><span>talented, capable; handsome</span></div>
    </div>
    <div>
      <h4>俏: </h4><div><h5>qiào, xiào: </h5><span>like, similar; resemble; pretty</span></div>
    </div>
    <div>
      <h4>俐: </h4><div><h5>lì: </h5><span>smooth; active; clever, sharp</span></div>
    </div>
    <div>
      <h4>俑: </h4><div><h5>yǒng: </h5><span>wooden figure buried with dead</span></div>
    </div>
    <div>
      <h4>俗: </h4><div><h5>sú: </h5><span>social customs; vulgar, unrefined</span></div>
    </div>
    <div>
      <h4>俘: </h4><div><h5>fú: </h5><span>prisoner of war; take as prisoner</span></div>
    </div>
    <div>
      <h4>俚: </h4><div><h5>lǐ: </h5><span>rustic, vulgar, unpolished; mean</span></div>
    </div>
    <div>
      <h4>保: </h4><div><h5>bǎo: </h5><span>protect, safeguard, defend, care</span></div>
    </div>
    <div>
      <h4>俟: </h4><div><h5>sì, qí: </h5><span>wait for, wait until, as soon as</span></div>
    </div>
    <div>
      <h4>信: </h4><div><h5>xìn, shēn: </h5><span>trust, believe; letter</span></div>
    </div>
    <div>
      <h4>俦: </h4><div><h5>chóu: </h5><span>companion, mate, colleague</span></div>
    </div>
    <div>
      <h4>俨: </h4><div><h5>yǎn: </h5><span>grave, respectful, majestic</span></div>
    </div>
    <div>
      <h4>俩: </h4><div><h5>liǎng, liǎ: </h5><span>two, pair</span></div>
    </div>
    <div>
      <h4>俪: </h4><div><h5>lì: </h5><span>spouse, couple, pair</span></div>
    </div>
    <div>
      <h4>俭: </h4><div><h5>jiǎn: </h5><span>temperate, frugal, economical</span></div>
    </div>
    <div>
      <h4>修: </h4><div><h5>xiū: </h5><span>study; repair; cultivate</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>俯: </h4><div><h5>fǔ: </h5><span>bow down, face down, look down</span></div>
    </div>
    <div>
      <h4>俱: </h4><div><h5>jù: </h5><span>all, together; accompany</span></div>
    </div>
    <div>
      <h4>俸: </h4><div><h5>fèng: </h5><span>wages, salary, official emolument</span></div>
    </div>
    <div>
      <h4>俺: </h4><div><h5>ǎn: </h5><span>personal pronoun, I</span></div>
    </div>
    <div>
      <h4>俾: </h4><div><h5>bǐ: </h5><span>so that, in order that; cause</span></div>
    </div>
    <div>
      <h4>倌: </h4><div><h5>guān: </h5><span>assistant in wine shop, groom</span></div>
    </div>
    <div>
      <h4>倍: </h4><div><h5>bèi: </h5><span>times, fold, multiple times</span></div>
    </div>
    <div>
      <h4>倏: </h4><div><h5>shū: </h5><span>hastily, suddenly, abruptly</span></div>
    </div>
    <div>
      <h4>倒: </h4><div><h5>dǎo, dào: </h5><span>fall over; lie down; take turns</span></div>
    </div>
    <div>
      <h4>倔: </h4><div><h5>jué, juè: </h5><span>stubborn, obstinate, intransigent; firm</span></div>
    </div>
    <div>
      <h4>倘: </h4><div><h5>tǎng, cháng: </h5><span>if, supposing, in event of</span></div>
    </div>
    <div>
      <h4>候: </h4><div><h5>hòu: </h5><span>wait; expect; visit; greet</span></div>
    </div>
    <div>
      <h4>倚: </h4><div><h5>yǐ: </h5><span>rely on, depend on; lean heavily</span></div>
    </div>
    <div>
      <h4>倜: </h4><div><h5>tì: </h5><span>raise high; unrestrained</span></div>
    </div>
    <div>
      <h4>借: </h4><div><h5>jiè: </h5><span>borrow; lend; make pretext of</span></div>
    </div>
    <div>
      <h4>倡: </h4><div><h5>chàng, chāng: </h5><span>guide, leader; lead, introduce</span></div>
    </div>
    <div>
      <h4>倦: </h4><div><h5>juàn: </h5><span>be tired of, weary</span></div>
    </div>
    <div>
      <h4>倨: </h4><div><h5>jù: </h5><span>arrogant, haughty, rude</span></div>
    </div>
    <div>
      <h4>倩: </h4><div><h5>qiàn: </h5><span>beautiful, lovely; son-in-law</span></div>
    </div>
    <div>
      <h4>倪: </h4><div><h5>ní: </h5><span>feeble, tiny, young and weak</span></div>
    </div>
    <div>
      <h4>倬: </h4><div><h5>zhuō: </h5><span>noticeable, large; clear, distinct</span></div>
    </div>
    <div>
      <h4>倭: </h4><div><h5>wō, wēi: </h5><span>dwarf; dwarfish, short</span></div>
    </div>
    <div>
      <h4>债: </h4><div><h5>zhài: </h5><span>debt, loan, liabilities</span></div>
    </div>
    <div>
      <h4>值: </h4><div><h5>zhí: </h5><span>price</span></div>
    </div>
    <div>
      <h4>倾: </h4><div><h5>qīng: </h5><span>upset, pour out, overflow</span></div>
    </div>
    <div>
      <h4>偌: </h4><div><h5>ruò: </h5><span>thus, so, like, such</span></div>
    </div>
    <div>
      <h4>健: </h4><div><h5>jiàn: </h5><span>strong, robust, healthy; strength</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>偃: </h4><div><h5>yǎn: </h5><span>cease, lay off, lay down</span></div>
    </div>
    <div>
      <h4>假: </h4><div><h5>jiǎ, jià: </h5><span>falsehood, deception; vacation</span></div>
    </div>
    <div>
      <h4>偈: </h4><div><h5>jì, jié: </h5><span>brave; martial; hasty; scudding</span></div>
    </div>
    <div>
      <h4>偎: </h4><div><h5>wēi: </h5><span>cling to, cuddle, embrace, fondle</span></div>
    </div>
    <div>
      <h4>偏: </h4><div><h5>piān: </h5><span>inclined one side; slanting</span></div>
    </div>
    <div>
      <h4>偕: </h4><div><h5>xié: </h5><span>together; be in order</span></div>
    </div>
    <div>
      <h4>做: </h4><div><h5>zuò: </h5><span>work, make; act</span></div>
    </div>
    <div>
      <h4>停: </h4><div><h5>tíng: </h5><span>stop, suspend, delay; suitable</span></div>
    </div>
    <div>
      <h4>偬: </h4><div><h5>zǒng: </h5><span>urgent</span></div>
    </div>
    <div>
      <h4>偶: </h4><div><h5>ǒu: </h5><span>accidentally, coincidently; an idol</span></div>
    </div>
    <div>
      <h4>偷: </h4><div><h5>tōu: </h5><span>to steal, burglar, thief</span></div>
    </div>
    <div>
      <h4>偿: </h4><div><h5>cháng: </h5><span>repay, recompense; restitution</span></div>
    </div>
    <div>
      <h4>傀: </h4><div><h5>kuǐ, guī: </h5><span>great, gigantic; puppet</span></div>
    </div>
    <h3>画10</h3>
    <div>
      <h4>傅: </h4><div><h5>fù: </h5><span>tutor, teacher; assist; surname</span></div>
    </div>
    <div>
      <h4>傍: </h4><div><h5>bàng: </h5><span>by side of, beside, near, close</span></div>
    </div>
    <div>
      <h4>傜: </h4><div><h5>yáo: </h5><span>a minority tribe</span></div>
    </div>
    <div>
      <h4>傥: </h4><div><h5>tǎng: </h5><span>if</span></div>
    </div>
    <div>
      <h4>傧: </h4><div><h5>bīn: </h5><span>entertain guests</span></div>
    </div>
    <div>
      <h4>储: </h4><div><h5>chǔ: </h5><span>save money, store, reserve; heir</span></div>
    </div>
    <div>
      <h4>傩: </h4><div><h5>nuó: </h5><span>rich</span></div>
    </div>
    <div>
      <h4>傲: </h4><div><h5>ào: </h5><span>proud, haughty, overbearing</span></div>
    </div>
    <h3>画11</h3>
    <div>
      <h4>催: </h4><div><h5>cuī: </h5><span>press, urge</span></div>
    </div>
    <div>
      <h4>傻: </h4><div><h5>shǎ: </h5><span>foolish, silly, stupid; an imbecile</span></div>
    </div>
    <div>
      <h4>像: </h4><div><h5>xiàng: </h5><span>a picture, image, figure; to resemble</span></div>
    </div>
    <h3>画12-15</h3>
    <div>
      <h4>僚: </h4><div><h5>liáo: </h5>
      <span>companion, colleague; officials; bureaucracy; a pretty face</span></div>
    </div>
    <div>
      <h4>僧: </h4><div><h5>sēng: </h5><span>Buddhist priest, monk; san of Sanskrit sangha</span></div>
    </div>
    <div>
      <h4>僮: </h4><div><h5>tóng, zhuàng: </h5><span>page, boy servant</span></div>
    </div>
    <div>
      <h4>儆: </h4><div><h5>jǐng: </h5><span>warn; warning</span></div>
    </div>
    <div>
      <h4>僵: </h4><div><h5>jiāng: </h5><span>stiff and motionless, stock still</span></div>
    </div>
    <div>
      <h4>僻: </h4><div><h5>pì: </h5><span>out-of-the-way, remote; unorthodox</span></div>
    </div>
    <div>
      <h4>儒: </h4><div><h5>rú: </h5><span>Confucian scholar</span></div>
    </div>
    <div>
      <h4>儡: </h4><div><h5>léi, lěi: </h5><span>puppet, dummy</span></div>
    </div>
    <h1>14: 儿</h1>
    <div>
      <h4>儿: </h4><div><h5>ér: </h5><span>son, child; KangXi radical 10</span></div>
    </div>
    <h3>画1-9</h3>
    <div>
      <h4>兀: </h4><div><h5>wù: </h5><span>to cut off the feet</span></div>
    </div>
    <div>
      <h4>允: </h4><div><h5>yǔn: </h5><span>to grant, to allow, to consent</span></div>
    </div>
    <div>
      <h4>兄: </h4><div><h5>xiōng: </h5><span>elder brother</span></div>
    </div>
    <div>
      <h4>兆: </h4><div><h5>zhào: </h5>
      <span>
        omen; million; mega; also trillion. China = million; Japan and Taiwan
        = trillion
      </span></div>
    </div>
    <div>
      <h4>先: </h4><div><h5>xiān: </h5><span>first, former, previous</span></div>
    </div>
    <div>
      <h4>光: </h4><div><h5>guāng: </h5><span>light, brilliant, shine; only</span></div>
    </div>
    <div>
      <h4>党: </h4><div><h5>dǎng: </h5><span>political party, gang, faction</span></div>
    </div>
    <div>
      <h4>兜: </h4><div><h5>dōu: </h5><span>pouch</span></div>
    </div>
    <h3>画12</h3>
    <div>
      <h4>兢: </h4><div><h5>jīng: </h5><span>fearful, cautious, wary</span></div>
    </div>
    <h1>15: 入</h1>
    <div>
      <h4>入: </h4><div><h5>rù: </h5><span>enter, come in(to), join</span></div>
    </div>
    <div>
      <h4>全: </h4><div><h5>quán: </h5><span>maintain, keep whole or intact</span></div>
    </div>
    <h1>16: 八</h1>
    <div>
      <h4>八: </h4><div><h5>bā: </h5><span>eight; all around, all sides</span></div>
    </div>
    <h3>画2-5</h3>
    <div>
      <h4>公: </h4><div><h5>gōng: </h5><span>fair, equitable; public; duke</span></div>
    </div>
    <div>
      <h4>六: </h4><div><h5>liù, lù: </h5><span>number six</span></div>
    </div>
    <div>
      <h4>兮: </h4><div><h5>xī: </h5><span>exclamatory particle</span></div>
    </div>
    <div>
      <h4>共: </h4><div><h5>gòng, gōng: </h5><span>together with, all, total; to share</span></div>
    </div>
    <div>
      <h4>兴: </h4><div><h5>xīng, xìng: </h5><span>thrive, prosper, flourish</span></div>
    </div>
    <div>
      <h4>兵: </h4><div><h5>bīng: </h5><span>soldier, troops</span></div>
    </div>
    <div>
      <h4>羌: </h4><div><h5>qiāng: </h5><span>Qiang nationality; surname</span></div>
    </div>
    <h3>画6-14</h3>
    <div>
      <h4>其: </h4><div><h5>qí, jī: </h5><span>his, her, its, their; that</span></div>
    </div>
    <div>
      <h4>具: </h4><div><h5>jù: </h5><span>tool, implement; draw up, write</span></div>
    </div>
    <div>
      <h4>典: </h4><div><h5>diǎn: </h5><span>law, canon; documentation; classic, scripture</span></div>
    </div>
    <div>
      <h4>美: </h4><div><h5>měi: </h5><span>beautiful, pretty; pleasing</span></div>
    </div>
    <div>
      <h4>羡: </h4><div><h5>xiàn: </h5><span>envy, admire; praise; covet</span></div>
    </div>
    <div>
      <h4>冀: </h4><div><h5>jì: </h5><span>hope for; wish; Hebei province</span></div>
    </div>
    <h1>17: 冂</h1>
    <div>
      <h4>内: </h4><div><h5>nèi, nà: </h5><span>inside</span></div>
    </div>
    <div>
      <h4>冈: </h4><div><h5>gāng: </h5><span>ridge or crest of hill</span></div>
    </div>
    <div>
      <h4>冉: </h4><div><h5>rǎn: </h5><span>tender; weak; proceed gradually</span></div>
    </div>
    <div>
      <h4>再: </h4><div><h5>zài: </h5><span>again, twice, re-</span></div>
    </div>
    <div>
      <h4>网: </h4><div><h5>wǎng: </h5><span>net; network; KangXi radical 122</span></div>
    </div>
    <div>
      <h4>罔: </h4><div><h5>wǎng: </h5><span>net; deceive; libel; negative</span></div>
    </div>
    <div>
      <h4>冒: </h4><div><h5>mào, mò: </h5><span>risk, brave, dare</span></div>
    </div>
    <div>
      <h4>冕: </h4><div><h5>miǎn: </h5><span>crown; ceremonial cap</span></div>
    </div>
    <h1>18: 冖</h1>
    <div>
      <h4>冗: </h4><div><h5>rǒng: </h5><span>excessive; superfluous</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>写: </h4><div><h5>xiě: </h5><span>write; draw, sketch; compose</span></div>
    </div>
    <div>
      <h4>军: </h4><div><h5>jūn: </h5><span>army, military; soldiers, troops</span></div>
    </div>
    <div>
      <h4>农: </h4><div><h5>nóng: </h5><span>agriculture, farming; farmer</span></div>
    </div>
    <div>
      <h4>罕: </h4><div><h5>hǎn: </h5><span>rare, scarce; surname</span></div>
    </div>
    <div>
      <h4>冠: </h4><div><h5>guān, guàn: </h5><span>cap, crown, headgear</span></div>
    </div>
    <div>
      <h4>冢: </h4><div><h5>zhǒng: </h5><span>burial mound, mausoleum; grand</span></div>
    </div>
    <div>
      <h4>冤: </h4><div><h5>yuān: </h5><span>grievance, injustice, wrong</span></div>
    </div>
    <div>
      <h4>冥: </h4><div><h5>míng: </h5><span>dark, gloomy, night; deep</span></div>
    </div>
    <h1>19: 冫</h1>
    <h3>画3-4</h3>
    <div>
      <h4>冯: </h4><div><h5>féng, píng: </h5><span>surname; gallop; by dint of</span></div>
    </div>
    <div>
      <h4>冰: </h4><div><h5>bīng: </h5><span>ice; ice-cold</span></div>
    </div>
    <div>
      <h4>冲: </h4><div><h5>chōng, chòng: </h5><span>soar; pour boiling water over</span></div>
    </div>
    <div>
      <h4>决: </h4><div><h5>jué: </h5><span>decide, determine, judge</span></div>
    </div>
    <h3>画5-6</h3>
    <div>
      <h4>况: </h4><div><h5>kuàng: </h5><span>condition, situation; furthermore</span></div>
    </div>
    <div>
      <h4>冶: </h4><div><h5>yě: </h5><span>smelt, fuse metals; cast, found</span></div>
    </div>
    <div>
      <h4>冷: </h4><div><h5>lěng: </h5><span>cold, cool; lonely</span></div>
    </div>
    <div>
      <h4>冻: </h4><div><h5>dòng: </h5><span>freeze; cold, congeal; jelly</span></div>
    </div>
    <div>
      <h4>冽: </h4><div><h5>liè: </h5><span>cold and raw; pure, clear</span></div>
    </div>
    <div>
      <h4>净: </h4><div><h5>jìng, chēng: </h5><span>clean, pure; cleanse</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>凄: </h4><div><h5>qī: </h5><span>bitter cold, miserable, dreary</span></div>
    </div>
    <div>
      <h4>准: </h4><div><h5>zhǔn: </h5><span>approve, allow, permit; in accord</span></div>
    </div>
    <div>
      <h4>凉: </h4><div><h5>liáng, liàng: </h5><span>cool, cold; disheartened</span></div>
    </div>
    <div>
      <h4>凊: </h4><div><h5>qìng: </h5><span>surname</span></div>
    </div>
    <div>
      <h4>凋: </h4><div><h5>diāo: </h5><span>be withered, fallen; exhausted</span></div>
    </div>
    <div>
      <h4>凌: </h4><div><h5>líng: </h5><span>pure; virtuous; insult; maltreat</span></div>
    </div>
    <h3>画9-14</h3>
    <div>
      <h4>减: </h4><div><h5>jiǎn: </h5><span>decrease, subtract, diminish</span></div>
    </div>
    <div>
      <h4>凑: </h4><div><h5>còu: </h5><span>piece together, assemble</span></div>
    </div>
    <div>
      <h4>凛: </h4><div><h5>lǐn: </h5><span>to shiver with cold or fear</span></div>
    </div>
    <div>
      <h4>凝: </h4><div><h5>níng: </h5><span>coagulate; congeal; freeze</span></div>
    </div>
    <h1>20: 几</h1>
    <div>
      <h4>几: </h4><div><h5>jī, jǐ: </h5><span>small table</span></div>
    </div>
    <div>
      <h4>凡: </h4><div><h5>fán: </h5><span>all, any, every; ordinary, common</span></div>
    </div>
    <div>
      <h4>凤: </h4><div><h5>fèng: </h5><span>male phoenix; symbol of joy</span></div>
    </div>
    <div>
      <h4>凭: </h4><div><h5>píng: </h5><span>lean on, depend on, rely on</span></div>
    </div>
    <div>
      <h4>凯: </h4><div><h5>kǎi: </h5><span>triumphant; triumph, victory</span></div>
    </div>
    <div>
      <h4>凰: </h4><div><h5>huáng: </h5><span>female phoenix</span></div>
    </div>
    <div>
      <h4>凳: </h4><div><h5>dèng: </h5><span>bench; stool</span></div>
    </div>
    <h1>21: 凵</h1>
    <div>
      <h4>凶: </h4><div><h5>xiōng: </h5><span>culprit; murder; bad, sad</span></div>
    </div>
    <div>
      <h4>凸: </h4><div><h5>tū: </h5><span>protrude, bulge out, convex</span></div>
    </div>
    <div>
      <h4>凹: </h4><div><h5>āo, wā: </h5><span>concave, hollow, depressed; a pass, valley</span></div>
    </div>
    <div>
      <h4>出: </h4><div><h5>chū: </h5><span>go out, send out; stand; produce</span></div>
    </div>
    <div>
      <h4>击: </h4><div><h5>jī: </h5><span>strike, hit, beat; attack, fight</span></div>
    </div>
    <div>
      <h4>函: </h4><div><h5>hán: </h5><span>correspondence; a case; a box</span></div>
    </div>
    <div>
      <h4>凿: </h4><div><h5>záo: </h5><span>chisel; bore, pierce</span></div>
    </div>
    <h1>22: 刀</h1>
    <div>
      <h4>刀: </h4><div><h5>dāo: </h5><span>knife; old coin; measure</span></div>
    </div>
    <div>
      <h4>刁: </h4><div><h5>diāo: </h5><span>tricky, sly, crafty, cunning</span></div>
    </div>
    <h3>画1-4</h3>
    <div>
      <h4>刃: </h4><div><h5>rèn: </h5><span>edged tool, cutlery, knife edge</span></div>
    </div>
    <div>
      <h4>分: </h4><div><h5>fēn, fèn: </h5><span>divide; small unit of time etc.</span></div>
    </div>
    <div>
      <h4>切: </h4><div><h5>qiē, qiè: </h5><span>cut, mince, slice, carve</span></div>
    </div>
    <div>
      <h4>刍: </h4><div><h5>chú: </h5><span>mow, cut grass; hay, fodder</span></div>
    </div>
    <div>
      <h4>争: </h4><div><h5>zhēng: </h5><span>dispute, fight, contend, strive</span></div>
    </div>
    <h3>画5-13</h3>
    <div>
      <h4>免: </h4><div><h5>miǎn: </h5><span>spare; excuse from; evade</span></div>
    </div>
    <div>
      <h4>初: </h4><div><h5>chū: </h5><span>beginning, initial, primary</span></div>
    </div>
    <div>
      <h4>龟: </h4><div><h5>guī, jūn, qiū: </h5><span>turtle or tortoise; cuckold</span></div>
    </div>
    <div>
      <h4>兔: </h4><div><h5>tù: </h5><span>rabbit, hare</span></div>
    </div>
    <div>
      <h4>券: </h4><div><h5>quàn, xuàn, quàn: </h5><span>certificate, ticket; title deeds</span></div>
    </div>
    <div>
      <h4>剪: </h4><div><h5>jiǎn: </h5><span>scissors; cut, divide, separate</span></div>
    </div>
    <div>
      <h4>劈: </h4><div><h5>pī, pǐ: </h5><span>cut apart, split, chop</span></div>
    </div>
    <h1>23: 刂</h1>
    <h3>画2-3</h3>
    <div>
      <h4>刈: </h4><div><h5>yì: </h5><span>cut off, reap, mow; sickle</span></div>
    </div>
    <div>
      <h4>刊: </h4><div><h5>kān: </h5><span>publication, periodical; publish</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>刎: </h4><div><h5>wěn: </h5><span>behead, cut throat</span></div>
    </div>
    <div>
      <h4>刑: </h4><div><h5>xíng: </h5><span>punishment, penalty; law</span></div>
    </div>
    <div>
      <h4>划: </h4><div><h5>huá, huà: </h5><span>to row or paddle boat; to scratch</span></div>
    </div>
    <div>
      <h4>列: </h4><div><h5>liè: </h5><span>a line; to arrange in order, classify</span></div>
    </div>
    <div>
      <h4>刘: </h4><div><h5>liú: </h5>
      <span>
        surname Liu, (classical); a type of battle-ax, to kill, to
        slaughter
      </span></div>
    </div>
    <div>
      <h4>则: </h4><div><h5>zé: </h5><span>rule, law, regulation; grades</span></div>
    </div>
    <div>
      <h4>刚: </h4><div><h5>gāng: </h5><span>hard, tough, rigid, strong</span></div>
    </div>
    <div>
      <h4>创: </h4><div><h5>chuàng, chuāng: </h5><span>establish, create; knife cut</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>删: </h4><div><h5>shān: </h5><span>to cut; delete</span></div>
    </div>
    <div>
      <h4>判: </h4><div><h5>pàn: </h5><span>judge; discriminate; conclude</span></div>
    </div>
    <div>
      <h4>刨: </h4><div><h5>páo, bào: </h5><span>carpenter's plane; plane, level</span></div>
    </div>
    <div>
      <h4>利: </h4><div><h5>lì: </h5><span>gains, advantage, profit, merit</span></div>
    </div>
    <div>
      <h4>别: </h4><div><h5>bié, biè: </h5><span>separate, other; do not</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>刮: </h4><div><h5>guā: </h5><span>shave, pare off, scrape</span></div>
    </div>
    <div>
      <h4>到: </h4><div><h5>dào: </h5><span>go to, arrive, been to</span></div>
    </div>
    <div>
      <h4>制: </h4><div><h5>zhì: </h5><span>system; establish; overpower</span></div>
    </div>
    <div>
      <h4>刷: </h4><div><h5>shuā, shuà: </h5><span>brush; clean with brush, scrub</span></div>
    </div>
    <div>
      <h4>刹: </h4><div><h5>chà, shā: </h5><span>temple, shrine, monastary</span></div>
    </div>
    <div>
      <h4>刺: </h4><div><h5>cì, cī: </h5><span>stab; prick, irritate; prod</span></div>
    </div>
    <div>
      <h4>刻: </h4><div><h5>kè: </h5><span>carve, engrave; quarter hour</span></div>
    </div>
    <div>
      <h4>刽: </h4><div><h5>guì: </h5><span>amputate, cut off</span></div>
    </div>
    <div>
      <h4>剁: </h4><div><h5>duò: </h5><span>chop by pounding, mince, hash</span></div>
    </div>
    <div>
      <h4>剂: </h4><div><h5>jì: </h5><span>medicinal preparation</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>剃: </h4><div><h5>tì: </h5><span>shave</span></div>
    </div>
    <div>
      <h4>削: </h4><div><h5>xiāo, xuē: </h5><span>scrape off, pare, trim</span></div>
    </div>
    <div>
      <h4>剌: </h4><div><h5>là, lá: </h5><span>slash, cut in two; contradict</span></div>
    </div>
    <div>
      <h4>前: </h4><div><h5>qián: </h5><span>in front, forward; preceding</span></div>
    </div>
    <div>
      <h4>剑: </h4><div><h5>jiàn: </h5><span>sword, dagger, saber</span></div>
    </div>
    <h3>画8-10</h3>
    <div>
      <h4>剔: </h4><div><h5>tī: </h5><span>pick out; scrape off; scrape meat</span></div>
    </div>
    <div>
      <h4>剖: </h4><div><h5>pōu: </h5><span>split in two, slice; dissect</span></div>
    </div>
    <div>
      <h4>剥: </h4><div><h5>bāo, bō: </h5><span>peel</span></div>
    </div>
    <div>
      <h4>剧: </h4><div><h5>jù: </h5><span>theatrical plays, opera, drama</span></div>
    </div>
    <div>
      <h4>副: </h4><div><h5>fù, pì: </h5><span>assist; supplement; assistant</span></div>
    </div>
    <div>
      <h4>剩: </h4><div><h5>shèng: </h5><span>leftovers, residue, remains</span></div>
    </div>
    <div>
      <h4>割: </h4><div><h5>gē: </h5><span>cut, divide, partition; cede</span></div>
    </div>
    <h3>画11</h3>
    <div>
      <h4>剽: </h4><div><h5>piāo: </h5><span>rob, plunder; slice off; fast</span></div>
    </div>
    <div>
      <h4>剿: </h4><div><h5>jiǎo, chāo: </h5><span>destroy, exterminate, annihilate</span></div>
    </div>
    <h1>24: 力</h1>
    <div>
      <h4>力: </h4><div><h5>lì: </h5><span>power, capability, influence</span></div>
    </div>
    <h3>画2-4</h3>
    <div>
      <h4>劝: </h4><div><h5>quàn: </h5><span>recommend, advise, urge</span></div>
    </div>
    <div>
      <h4>办: </h4><div><h5>bàn: </h5><span>manage, do, handle; deal with</span></div>
    </div>
    <div>
      <h4>功: </h4><div><h5>gōng: </h5><span>achievement, merit, good result</span></div>
    </div>
    <div>
      <h4>加: </h4><div><h5>jiā: </h5><span>add to, increase, augment</span></div>
    </div>
    <div>
      <h4>务: </h4><div><h5>wù: </h5><span>affairs, business; must, should</span></div>
    </div>
    <div>
      <h4>劣: </h4><div><h5>liè: </h5><span>bad, inferior; slightly</span></div>
    </div>
    <div>
      <h4>动: </h4><div><h5>dòng: </h5><span>move, happen; movement, action</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>助: </h4><div><h5>zhù, chú: </h5><span>help, aid, assist</span></div>
    </div>
    <div>
      <h4>努: </h4><div><h5>nǔ: </h5><span>to exert, strive, make an effort; to pout</span></div>
    </div>
    <div>
      <h4>劫: </h4><div><h5>jié: </h5><span>take by force, coerce; disaster</span></div>
    </div>
    <div>
      <h4>劭: </h4><div><h5>shào: </h5><span>encourage; to excel; excellent</span></div>
    </div>
    <div>
      <h4>励: </h4><div><h5>lì: </h5><span>strive; encourage</span></div>
    </div>
    <div>
      <h4>劲: </h4><div><h5>jìn, jìng: </h5><span>strong, unyielding, tough, power</span></div>
    </div>
    <div>
      <h4>劳: </h4><div><h5>láo: </h5><span>labor, toil, do manual work</span></div>
    </div>
    <h3>画6-7</h3>
    <div>
      <h4>劾: </h4><div><h5>hé: </h5><span>examine into, impeach, charge</span></div>
    </div>
    <div>
      <h4>势: </h4><div><h5>shì: </h5><span>power, force; tendency</span></div>
    </div>
    <div>
      <h4>勃: </h4><div><h5>bó, bèi: </h5><span>suddenly, sudden, quick</span></div>
    </div>
    <div>
      <h4>勇: </h4><div><h5>yǒng: </h5><span>brave, courageous, fierce</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>勉: </h4><div><h5>miǎn: </h5><span>endeavor, make effort; urge</span></div>
    </div>
    <div>
      <h4>勋: </h4><div><h5>xūn: </h5><span>meritorious deed; merits; rank</span></div>
    </div>
    <h3>画9-11</h3>
    <div>
      <h4>勒: </h4><div><h5>lè, lēi: </h5><span>strangle, tighten</span></div>
    </div>
    <div>
      <h4>勘: </h4><div><h5>kān: </h5><span>investigate; compare; collate</span></div>
    </div>
    <div>
      <h4>募: </h4><div><h5>mù: </h5><span>levy, raise; summon; recruit</span></div>
    </div>
    <div>
      <h4>勤: </h4><div><h5>qín: </h5><span>industrious, diligent, attentive</span></div>
    </div>
    <h1>25: 勹</h1>
    <div>
      <h4>勺: </h4><div><h5>sháo: </h5><span>spoon, ladle; unit of volume</span></div>
    </div>
    <div>
      <h4>勾: </h4><div><h5>gōu, gòu: </h5><span>hook, join, connect; entice</span></div>
    </div>
    <div>
      <h4>勿: </h4><div><h5>wù: </h5><span>must not, do not; without, never</span></div>
    </div>
    <div>
      <h4>匀: </h4><div><h5>yún: </h5><span>equal</span></div>
    </div>
    <div>
      <h4>包: </h4><div><h5>bāo: </h5><span>wrap, pack, bundle; package</span></div>
    </div>
    <div>
      <h4>匆: </h4><div><h5>cōng: </h5><span>hastily, in haste, hurriedly</span></div>
    </div>
    <div>
      <h4>匈: </h4><div><h5>xiōng: </h5>
      <span>breast, chest, thorax; clamor; the Hsiung Nu 'Huns'</span></div>
    </div>
    <h1>26: 匕</h1>
    <div>
      <h4>匕: </h4><div><h5>bǐ: </h5><span>spoon, ladle; knife, dirk</span></div>
    </div>
    <div>
      <h4>北: </h4><div><h5>běi, bèi: </h5><span>north; northern; northward</span></div>
    </div>
    <div>
      <h4>匙: </h4><div><h5>chí, shi: </h5><span>spoon; surname</span></div>
    </div>
    <h1>27: 匚</h1>
    <h3>画2-5</h3>
    <div>
      <h4>匹: </h4><div><h5>pǐ: </h5><span>bolt of cloth; counter for horses</span></div>
    </div>
    <div>
      <h4>区: </h4><div><h5>qū, ōu: </h5><span>area, district, region, ward</span></div>
    </div>
    <div>
      <h4>匝: </h4><div><h5>zā: </h5><span>full circle; encircle</span></div>
    </div>
    <div>
      <h4>匠: </h4><div><h5>jiàng: </h5><span>craftsman, artisan; workman</span></div>
    </div>
    <div>
      <h4>匡: </h4><div><h5>kuāng: </h5><span>correct, restore, revise</span></div>
    </div>
    <div>
      <h4>匣: </h4><div><h5>xiá: </h5><span>small box, case, coffer</span></div>
    </div>
    <div>
      <h4>医: </h4><div><h5>yī: </h5><span>cure, heal; doctor, medical</span></div>
    </div>
    <h3>画8-9</h3>
    <div>
      <h4>匪: </h4><div><h5>fěi: </h5><span>bandits, robbers, gangsters</span></div>
    </div>
    <div>
      <h4>匿: </h4><div><h5>nì: </h5><span>hide; go into hiding</span></div>
    </div>
    <div>
      <h4>匮: </h4><div><h5>kuì, guì: </h5><span>to lack</span></div>
    </div>
    <div>
      <h4>匾: </h4><div><h5>biǎn: </h5><span>flat, round split-bamboo contain</span></div>
    </div>
    <h1>28: 十</h1>
    <div>
      <h4>十: </h4><div><h5>shí: </h5><span>ten, tenth; complete; perfect</span></div>
    </div>
    <h3>画1-3</h3>
    <div>
      <h4>千: </h4><div><h5>qiān: </h5>
      <span>thousand; many, numerous; very</span></div>
    </div>
    <div>
      <h4>卅: </h4><div><h5>sà: </h5><span>thirty, thirtieth</span></div>
    </div>
    <div>
      <h4>升: </h4><div><h5>shēng: </h5><span>arise, go up; hoist; advance</span></div>
    </div>
    <div>
      <h4>午: </h4><div><h5>wǔ: </h5><span>noon; 7th terrestrial branch</span></div>
    </div>
    <div>
      <h4>卉: </h4><div><h5>huì: </h5><span>general term for plants; myriads</span></div>
    </div>
    <div>
      <h4>半: </h4><div><h5>bàn: </h5><span>half</span></div>
    </div>
    <h3>画4-5</h3>
    <div>
      <h4>华: </h4><div><h5>huá, huà, huā: </h5><span>flowery; illustrious; Chinese</span></div>
    </div>
    <div>
      <h4>协: </h4><div><h5>xié: </h5><span>be united; cooperate</span></div>
    </div>
    <div>
      <h4>克: </h4><div><h5>kè: </h5><span>gram; overcome; transliteration</span></div>
    </div>
    <h3>画6-10</h3>
    <div>
      <h4>卑: </h4><div><h5>bēi: </h5><span>humble, low, inferior; despise</span></div>
    </div>
    <div>
      <h4>卒: </h4><div><h5>zú, cù: </h5><span>soldier; servant; at last, finally</span></div>
    </div>
    <div>
      <h4>卓: </h4><div><h5>zhuó: </h5><span>profound, brilliant, lofty</span></div>
    </div>
    <div>
      <h4>单: </h4><div><h5>dān, shàn, chán: </h5><span>single, individual, only; lone</span></div>
    </div>
    <div>
      <h4>卖: </h4><div><h5>mài: </h5><span>sell; betray; show off</span></div>
    </div>
    <div>
      <h4>南: </h4><div><h5>nán, nā: </h5><span>south; southern part; southward</span></div>
    </div>
    <div>
      <h4>博: </h4><div><h5>bó: </h5><span>gamble, play games; wide, broad</span></div>
    </div>
    <h1>29: 卜</h1>
    <div>
      <h4>卜: </h4><div><h5>bǔ, bo: </h5><span>fortune telling; prophesy</span></div>
    </div>
    <div>
      <h4>卞: </h4><div><h5>biàn: </h5><span>to be impatient, in a hurry; excitable</span></div>
    </div>
    <div>
      <h4>占: </h4><div><h5>zhān, zhàn: </h5><span>divine; observe; versify</span></div>
    </div>
    <div>
      <h4>卢: </h4><div><h5>lú: </h5><span>cottage, hut; surname; black</span></div>
    </div>
    <div>
      <h4>卤: </h4><div><h5>lǔ: </h5><span>saline soil; natural salt, rock</span></div>
    </div>
    <div>
      <h4>卦: </h4><div><h5>guà: </h5><span>fortune telling; tell fortunes</span></div>
    </div>
    <div>
      <h4>卧: </h4><div><h5>wò: </h5><span>lie down; crouch</span></div>
    </div>
    <h1>30: 卩</h1>
    <div>
      <h4>卫: </h4><div><h5>wèi: </h5><span>guard, protect, defend</span></div>
    </div>
    <div>
      <h4>卯: </h4><div><h5>mǎo: </h5><span>4th terrestrial branch; period from 5-7 a.m.</span></div>
    </div>
    <div>
      <h4>印: </h4><div><h5>yìn: </h5><span>print, seal, stamp, chop, mark</span></div>
    </div>
    <div>
      <h4>即: </h4><div><h5>jí: </h5><span>promptly, quickly, immediately</span></div>
    </div>
    <div>
      <h4>却: </h4><div><h5>què: </h5><span>still, but; decline; retreat</span></div>
    </div>
    <div>
      <h4>卵: </h4><div><h5>luǎn: </h5><span>egg; ovum; roe; spawn</span></div>
    </div>
    <div>
      <h4>卸: </h4><div><h5>xiè: </h5><span>lay down; retire from office</span></div>
    </div>
    <div>
      <h4>卿: </h4><div><h5>qīng: </h5><span>noble, high officer</span></div>
    </div>
    <h1>31: 㔾</h1>
    <div>
      <h4>危: </h4><div><h5>wēi: </h5><span>dangerous, precarious; high</span></div>
    </div>
    <div>
      <h4>卷: </h4><div><h5>juàn, juǎn: </h5><span>scroll; curl; make a comeback</span></div>
    </div>
    <h1>32: 厂</h1>
    <div>
      <h4>厂: </h4><div><h5>chǎng, ān, hàn: </h5><span>factory, workshop; radical 27</span></div>
    </div>
    <h3>画2-6</h3>
    <div>
      <h4>厄: </h4><div><h5>è: </h5><span>adversity, difficulty, distress</span></div>
    </div>
    <div>
      <h4>厅: </h4><div><h5>tīng: </h5><span>hall, central room</span></div>
    </div>
    <div>
      <h4>历: </h4><div><h5>lì: </h5><span>history; calendar</span></div>
    </div>
    <div>
      <h4>厉: </h4><div><h5>lì: </h5><span>whetstone; grind, sharpen; whet</span></div>
    </div>
    <div>
      <h4>压: </h4><div><h5>yā, yà: </h5><span>press; oppress; crush; pressure</span></div>
    </div>
    <div>
      <h4>厌: </h4><div><h5>yàn: </h5><span>dislike, detest, reject; satiate</span></div>
    </div>
    <div>
      <h4>厕: </h4><div><h5>cè: </h5><span>mingle with; toilet, lavatory</span></div>
    </div>
    <h3>画7-9</h3>
    <div>
      <h4>厘: </h4><div><h5>lí: </h5><span>thousandth part of tael</span></div>
    </div>
    <div>
      <h4>厚: </h4><div><h5>hòu: </h5><span>thick; substantial; greatly</span></div>
    </div>
    <div>
      <h4>厝: </h4><div><h5>cuò: </h5><span>cut or engrave; a grave or tombstone</span></div>
    </div>
    <div>
      <h4>原: </h4><div><h5>yuán: </h5><span>source, origin, beginning</span></div>
    </div>
    <div>
      <h4>厢: </h4><div><h5>xiāng: </h5><span>side-room, wing; theatre box</span></div>
    </div>
    <h3>画10-12</h3>
    <div>
      <h4>厥: </h4><div><h5>jué: </h5><span>personal pronoun he, she, it</span></div>
    </div>
    <div>
      <h4>厦: </h4><div><h5>shà, xià: </h5><span>big building, mansion</span></div>
    </div>
    <div>
      <h4>厨: </h4><div><h5>chú: </h5><span>kitchen; closet; cupboard</span></div>
    </div>
    <div>
      <h4>厮: </h4><div><h5>sī: </h5><span>servant; to make a disturbance</span></div>
    </div>
    <h1>33: 厶</h1>
    <div>
      <h4>去: </h4><div><h5>qù: </h5><span>go away, leave, depart</span></div>
    </div>
    <div>
      <h4>县: </h4><div><h5>xiàn, xuán: </h5><span>county, district, subdivision</span></div>
    </div>
    <div>
      <h4>叁: </h4><div><h5>sān: </h5><span>bank form of numeral 'three'</span></div>
    </div>
    <div>
      <h4>参: </h4><div><h5>cān, shēn, cēn, sān: </h5><span>take part in, intervene; ginseng</span></div>
    </div>
    <h1>34: 又</h1>
    <div>
      <h4>又: </h4><div><h5>yòu: </h5><span>and, also, again, in addition</span></div>
    </div>
    <h3>画1-3</h3>
    <div>
      <h4>叉: </h4><div><h5>chā, chá, chǎ: </h5><span>crotch; fork, prong</span></div>
    </div>
    <div>
      <h4>及: </h4><div><h5>jí: </h5><span>extend; reach; come up to; and</span></div>
    </div>
    <div>
      <h4>友: </h4><div><h5>yǒu: </h5><span>friend, companion; fraternity</span></div>
    </div>
    <div>
      <h4>双: </h4><div><h5>shuāng: </h5><span>set of two, pair, couple; both</span></div>
    </div>
    <div>
      <h4>反: </h4><div><h5>fǎn: </h5><span>reverse, opposite, contrary, anti</span></div>
    </div>
    <div>
      <h4>发: </h4><div><h5>fā, fà: </h5><span>issue, dispatch, send out; hair</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>叔: </h4><div><h5>shū: </h5><span>father's younger brother</span></div>
    </div>
    <div>
      <h4>取: </h4><div><h5>qǔ: </h5><span>take, receive, obtain; select</span></div>
    </div>
    <div>
      <h4>受: </h4><div><h5>shòu: </h5><span>receive, accept, get; bear, stand</span></div>
    </div>
    <div>
      <h4>变: </h4><div><h5>biàn: </h5><span>change, transform, alter; rebel</span></div>
    </div>
    <h3>画7-11</h3>
    <div>
      <h4>叙: </h4><div><h5>xù: </h5><span>express, state, relate, narrate</span></div>
    </div>
    <div>
      <h4>叛: </h4><div><h5>pàn: </h5><span>rebel; rebellion; rebellious</span></div>
    </div>
    <div>
      <h4>叟: </h4><div><h5>sǒu: </h5><span>old man; elder</span></div>
    </div>
    <div>
      <h4>叠: </h4><div><h5>dié: </h5><span>pile; be piled up; fold up</span></div>
    </div>
    <h1>35: 廴</h1>
    <div>
      <h4>延: </h4><div><h5>yán: </h5><span>delay, postpone, defer</span></div>
    </div>
    <div>
      <h4>廷: </h4><div><h5>tíng: </h5><span>court</span></div>
    </div>
    <div>
      <h4>建: </h4><div><h5>jiàn: </h5><span>build, establish, erect, found</span></div>
    </div>
    <h1>36: 讠</h1>
    <h3>画2</h3>
    <div>
      <h4>计: </h4><div><h5>jì: </h5><span>plan, plot; strategem; scheme</span></div>
    </div>
    <div>
      <h4>订: </h4><div><h5>dìng: </h5><span>draw up agreement; arrange</span></div>
    </div>
    <div>
      <h4>认: </h4><div><h5>rèn: </h5><span>recognize, know, understand</span></div>
    </div>
    <div>
      <h4>讥: </h4><div><h5>jī: </h5><span>ridicule, jeer, mock; inspect</span></div>
    </div>
    <h3>画3</h3>
    <div>
      <h4>讦: </h4><div><h5>jié: </h5><span>expose other's secrets, pry</span></div>
    </div>
    <div>
      <h4>讨: </h4><div><h5>tǎo: </h5><span>to discuss; ask for, beg; demand; dun; marry</span></div>
    </div>
    <div>
      <h4>让: </h4><div><h5>ràng: </h5><span>allow, permit, yield, concede</span></div>
    </div>
    <div>
      <h4>讪: </h4><div><h5>shàn: </h5><span>abuse, slander; vilify; ridicule</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>讫: </h4><div><h5>qì: </h5><span>finish; conclude, stop; exhaust</span></div>
    </div>
    <div>
      <h4>训: </h4><div><h5>xùn: </h5><span>teach, instruct; exegesis</span></div>
    </div>
    <div>
      <h4>议: </h4><div><h5>yì: </h5><span>consult, talk over, discuss</span></div>
    </div>
    <div>
      <h4>讯: </h4><div><h5>xùn: </h5><span>inquire; ask; examine; reproach</span></div>
    </div>
    <div>
      <h4>记: </h4><div><h5>jì: </h5><span>record; keep in mind, remember</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>讲: </h4><div><h5>jiǎng: </h5><span>explain; discuss; talk</span></div>
    </div>
    <div>
      <h4>讳: </h4><div><h5>huì: </h5><span>conceal; shun; regard as taboo</span></div>
    </div>
    <div>
      <h4>讴: </h4><div><h5>ōu: </h5><span>sing; songs</span></div>
    </div>
    <div>
      <h4>讶: </h4><div><h5>yà: </h5><span>express surprise, be surprised</span></div>
    </div>
    <div>
      <h4>讷: </h4><div><h5>nè: </h5><span>slow of speech; mumble; stammer</span></div>
    </div>
    <div>
      <h4>许: </h4><div><h5>xǔ, hǔ: </h5><span>allow, permit; promise; betroth</span></div>
    </div>
    <div>
      <h4>讹: </h4><div><h5>é: </h5><span>swindle, cheat; erroneous, wrong</span></div>
    </div>
    <div>
      <h4>论: </h4><div><h5>lùn, lún: </h5><span>debate; discuss; discourse</span></div>
    </div>
    <div>
      <h4>讼: </h4><div><h5>sòng: </h5><span>accuse; argue, dispute; litigate</span></div>
    </div>
    <div>
      <h4>讽: </h4><div><h5>fěng: </h5><span>recite, incant; satirize</span></div>
    </div>
    <div>
      <h4>设: </h4><div><h5>shè: </h5><span>build; establish; display</span></div>
    </div>
    <div>
      <h4>访: </h4><div><h5>fǎng: </h5><span>visit; ask, inquire</span></div>
    </div>
    <div>
      <h4>诀: </h4><div><h5>jué: </h5><span>take leave of, bid farewell</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>证: </h4><div><h5>zhèng: </h5><span>prove, confirm, verify; proof</span></div>
    </div>
    <div>
      <h4>诃: </h4><div><h5>hē: </h5><span>scold loudly, curse, abuse</span></div>
    </div>
    <div>
      <h4>评: </h4><div><h5>píng: </h5><span>appraise, criticize, evaluate</span></div>
    </div>
    <div>
      <h4>诅: </h4><div><h5>zǔ: </h5><span>curse; swear, pledge</span></div>
    </div>
    <div>
      <h4>识: </h4><div><h5>shí, zhì: </h5><span>recognize, understand, know</span></div>
    </div>
    <div>
      <h4>诈: </h4><div><h5>zhà: </h5><span>cheat, defraud, swindle; trick</span></div>
    </div>
    <div>
      <h4>诉: </h4><div><h5>sù: </h5><span>accuse; sue; inform; narrate</span></div>
    </div>
    <div>
      <h4>诊: </h4><div><h5>zhěn: </h5><span>examine patient, diagnose</span></div>
    </div>
    <div>
      <h4>诋: </h4><div><h5>dǐ: </h5><span>slander, comdemn, reproach</span></div>
    </div>
    <div>
      <h4>诌: </h4><div><h5>zhōu: </h5><span>play with words, quip; talk nonse</span></div>
    </div>
    <div>
      <h4>词: </h4><div><h5>cí: </h5><span>words; phrase, expression</span></div>
    </div>
    <div>
      <h4>诏: </h4><div><h5>zhào: </h5><span>decree, proclaim; imperial decree</span></div>
    </div>
    <div>
      <h4>译: </h4><div><h5>yì: </h5><span>translate; decode; encode</span></div>
    </div>
    <div>
      <h4>诒: </h4><div><h5>yí, dài: </h5><span>bequeath, pass on to future generations</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>试: </h4><div><h5>shì: </h5><span>test, try, experiment</span></div>
    </div>
    <div>
      <h4>诗: </h4><div><h5>shī: </h5><span>poetry; poem, verse, ode</span></div>
    </div>
    <div>
      <h4>诘: </h4><div><h5>jié, jí: </h5><span>question, interrogate</span></div>
    </div>
    <div>
      <h4>诙: </h4><div><h5>huī: </h5><span>tease, joke with; ridicule, mock</span></div>
    </div>
    <div>
      <h4>诚: </h4><div><h5>chéng: </h5><span>sincere, honest; true, real</span></div>
    </div>
    <div>
      <h4>诛: </h4><div><h5>zhū: </h5><span>execute, kill, put to death; punish</span></div>
    </div>
    <div>
      <h4>话: </h4><div><h5>huà: </h5><span>speech, talk, language; dialect</span></div>
    </div>
    <div>
      <h4>诞: </h4><div><h5>dàn: </h5><span>bear children, give birth; birth</span></div>
    </div>
    <div>
      <h4>诟: </h4><div><h5>gòu: </h5><span>abuse, scold, berate, insult</span></div>
    </div>
    <div>
      <h4>诠: </h4><div><h5>quán: </h5><span>explain, expound, comment on</span></div>
    </div>
    <div>
      <h4>诡: </h4><div><h5>guǐ: </h5><span>deceive, cheat, defraud; sly</span></div>
    </div>
    <div>
      <h4>询: </h4><div><h5>xún: </h5><span>inquire into, ask about; consult</span></div>
    </div>
    <div>
      <h4>诣: </h4><div><h5>yì: </h5><span>reach; achievement, accomplishment</span></div>
    </div>
    <div>
      <h4>诤: </h4><div><h5>zhèng: </h5><span>to expostulate; to remonstrate</span></div>
    </div>
    <div>
      <h4>该: </h4><div><h5>gāi: </h5><span>should, ought to, need to</span></div>
    </div>
    <div>
      <h4>详: </h4><div><h5>xiáng, yáng: </h5><span>detailed, complete, thorough</span></div>
    </div>
    <div>
      <h4>诧: </h4><div><h5>chà: </h5><span>be surprised, be shocked</span></div>
    </div>
    <div>
      <h4>诩: </h4><div><h5>xǔ: </h5><span>boast, brag; popular, well-known</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>诫: </h4><div><h5>jiè: </h5><span>warn, admonish; warning</span></div>
    </div>
    <div>
      <h4>诬: </h4><div><h5>wū: </h5><span>make false accusation; defame</span></div>
    </div>
    <div>
      <h4>语: </h4><div><h5>yǔ, yù: </h5><span>language, words; saying, expression</span></div>
    </div>
    <div>
      <h4>误: </h4><div><h5>wù: </h5><span>err, make mistake; interfere</span></div>
    </div>
    <div>
      <h4>诱: </h4><div><h5>yòu: </h5><span>persuade, entice, induce; guide</span></div>
    </div>
    <div>
      <h4>诲: </h4><div><h5>huì: </h5><span>teach, instruct; encourage, urge</span></div>
    </div>
    <div>
      <h4>诳: </h4><div><h5>kuáng: </h5><span>deceive, lie, delude, cheat</span></div>
    </div>
    <div>
      <h4>说: </h4><div><h5>shuō, shuì, yuè: </h5><span>speak, say, talk; scold, upbraid</span></div>
    </div>
    <div>
      <h4>诵: </h4><div><h5>sòng: </h5><span>recite, chant, repeat</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>请: </h4><div><h5>qǐng: </h5><span>ask, request; invite; please</span></div>
    </div>
    <div>
      <h4>诸: </h4><div><h5>zhū: </h5><span>various, all, these; surname</span></div>
    </div>
    <div>
      <h4>诺: </h4><div><h5>nuò: </h5><span>promise; assent, approve</span></div>
    </div>
    <div>
      <h4>读: </h4><div><h5>dú, dòu: </h5><span>read, study; pronounce</span></div>
    </div>
    <div>
      <h4>诽: </h4><div><h5>fěi: </h5><span>slander, vilify, condemn</span></div>
    </div>
    <div>
      <h4>课: </h4><div><h5>kè: </h5><span>lesson; course; classwork</span></div>
    </div>
    <div>
      <h4>诿: </h4><div><h5>wěi: </h5><span>pass buck, lay blame on others</span></div>
    </div>
    <div>
      <h4>谀: </h4><div><h5>yú: </h5><span>flatter, truckle</span></div>
    </div>
    <div>
      <h4>谁: </h4><div><h5>shuí, shéi: </h5><span>who? whom? whose? anyone?</span></div>
    </div>
    <div>
      <h4>调: </h4><div><h5>tiáo, diào, zhōu: </h5><span>transfer, move, change; tune</span></div>
    </div>
    <div>
      <h4>谄: </h4><div><h5>chǎn: </h5><span>flatter, truckle, toady</span></div>
    </div>
    <div>
      <h4>谅: </h4><div><h5>liàng: </h5><span>excuse, forgive; guess, presume</span></div>
    </div>
    <div>
      <h4>谆: </h4><div><h5>zhūn: </h5><span>patient, earnest; earnestly</span></div>
    </div>
    <div>
      <h4>谈: </h4><div><h5>tán: </h5><span>talk; conversation; surname</span></div>
    </div>
    <div>
      <h4>谊: </h4><div><h5>yì: </h5><span>friendship; appropriate, suitable</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>谋: </h4><div><h5>móu: </h5><span>plan, scheme; strategem</span></div>
    </div>
    <div>
      <h4>谍: </h4><div><h5>dié: </h5><span>an intelligence report; to spy; spying</span></div>
    </div>
    <div>
      <h4>谎: </h4><div><h5>huǎng: </h5><span>lie</span></div>
    </div>
    <div>
      <h4>谏: </h4><div><h5>jiàn: </h5><span>remonstrate, admonish</span></div>
    </div>
    <div>
      <h4>谐: </h4><div><h5>xié: </h5><span>harmonize, agree; joke, jest</span></div>
    </div>
    <div>
      <h4>谑: </h4><div><h5>xuè: </h5><span>jeer</span></div>
    </div>
    <div>
      <h4>谒: </h4><div><h5>yè: </h5><span>visit, pay respects</span></div>
    </div>
    <div>
      <h4>谓: </h4><div><h5>wèi: </h5><span>say, tell; call, name; be called</span></div>
    </div>
    <div>
      <h4>谕: </h4><div><h5>yù: </h5><span>proclaim, instruct; edict</span></div>
    </div>
    <div>
      <h4>谖: </h4><div><h5>xuān: </h5><span>forget; lie, cheat, deceive</span></div>
    </div>
    <div>
      <h4>谗: </h4><div><h5>chán: </h5><span>slander, defame, misrepresent</span></div>
    </div>
    <div>
      <h4>谘: </h4><div><h5>zī: </h5><span>consult, confer; communicate in</span></div>
    </div>
    <div>
      <h4>谙: </h4><div><h5>ān: </h5><span>versed in, fully acquainted with</span></div>
    </div>
    <div>
      <h4>谚: </h4><div><h5>yàn: </h5><span>proverb, maxim</span></div>
    </div>
    <div>
      <h4>谛: </h4><div><h5>dì: </h5><span>careful, attentive</span></div>
    </div>
    <div>
      <h4>谜: </h4><div><h5>mí: </h5><span>riddle, conundrum; puzzle</span></div>
    </div>
    <h3>画10</h3>
    <div>
      <h4>谟: </h4><div><h5>mó: </h5><span>scheme, plan; plan; be without</span></div>
    </div>
    <div>
      <h4>谢: </h4><div><h5>xiè: </h5><span>thank; decline</span></div>
    </div>
    <div>
      <h4>谣: </h4><div><h5>yáo: </h5><span>sing; folksong, ballad; rumor</span></div>
    </div>
    <div>
      <h4>谤: </h4><div><h5>bàng: </h5><span>slander, libel</span></div>
    </div>
    <div>
      <h4>谦: </h4><div><h5>qiān: </h5><span>humble, modest</span></div>
    </div>
    <div>
      <h4>谧: </h4><div><h5>mì: </h5><span>calm, quiet, still; cautious</span></div>
    </div>
    <h3>画11</h3>
    <div>
      <h4>谨: </h4><div><h5>jǐn: </h5><span>prudent, cautious; attentive</span></div>
    </div>
    <div>
      <h4>谩: </h4><div><h5>mán: </h5><span>deceive, insult</span></div>
    </div>
    <div>
      <h4>谪: </h4><div><h5>zhé: </h5><span>charge, blame; disgrace; demote</span></div>
    </div>
    <div>
      <h4>谬: </h4><div><h5>miù: </h5><span>error, exaggeration; erroneous</span></div>
    </div>
    <h3>画12-13</h3>
    <div>
      <h4>谭: </h4><div><h5>tán: </h5><span>surname</span></div>
    </div>
    <div>
      <h4>谯: </h4><div><h5>qiáo: </h5><span>tower; surname</span></div>
    </div>
    <div>
      <h4>谱: </h4><div><h5>pǔ: </h5><span>list, table; musical score</span></div>
    </div>
    <div>
      <h4>谲: </h4><div><h5>jué: </h5><span>cunning, crafty, sly, wily</span></div>
    </div>
    <div>
      <h4>谴: </h4><div><h5>qiǎn: </h5><span>reprimand, scold, abuse</span></div>
    </div>
    <h1>37: 阝</h1>
    <h3>画2-3</h3>
    <div>
      <h4>邓: </h4><div><h5>dèng: </h5><span>surname</span></div>
    </div>
    <div>
      <h4>队: </h4><div><h5>duì: </h5><span>team, group; army unit</span></div>
    </div>
    <div>
      <h4>邝: </h4><div><h5>kuàng: </h5><span>surname</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>邢: </h4><div><h5>xíng: </h5><span>surname; state in today's Hebei</span></div>
    </div>
    <div>
      <h4>那: </h4><div><h5>nà, nǎ, nèi, nā: </h5><span>that, that one, those</span></div>
    </div>
    <div>
      <h4>邦: </h4><div><h5>bāng: </h5><span>nation, country, state</span></div>
    </div>
    <div>
      <h4>邪: </h4><div><h5>xié, yá, yé, yú, xú: </h5>
      <span>wrong, evil, depraved, vicious, perverse, heterodox</span></div>
    </div>
    <div>
      <h4>邬: </h4><div><h5>wū: </h5><span>various place names; surname</span></div>
    </div>
    <div>
      <h4>阪: </h4><div><h5>bǎn: </h5><span>hillside farmland; slope</span></div>
    </div>
    <div>
      <h4>阮: </h4><div><h5>ruǎn: </h5><span>ancient musical instrument: surname</span></div>
    </div>
    <div>
      <h4>阱: </h4><div><h5>jǐng: </h5><span>pitfall, trap, snare</span></div>
    </div>
    <div>
      <h4>防: </h4><div><h5>fáng: </h5><span>defend; prevent; embankment</span></div>
    </div>
    <div>
      <h4>阳: </h4><div><h5>yáng: </h5><span>'male' principle; light; sun</span></div>
    </div>
    <div>
      <h4>阴: </h4><div><h5>yīn: </h5><span>'female' principle; dark; secret</span></div>
    </div>
    <div>
      <h4>阵: </h4><div><h5>zhèn: </h5><span>column, row or file of troops</span></div>
    </div>
    <div>
      <h4>阶: </h4><div><h5>jiē: </h5><span>stairs, steps; rank, degree</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>邮: </h4><div><h5>yóu: </h5><span>postal, mail; post office</span></div>
    </div>
    <div>
      <h4>邰: </h4><div><h5>tái: </h5><span>surname; state in modern Shanxi</span></div>
    </div>
    <div>
      <h4>邱: </h4><div><h5>qiū: </h5><span>surname; hill; mound; grave</span></div>
    </div>
    <div>
      <h4>邵: </h4><div><h5>shào: </h5><span>surname; various place names</span></div>
    </div>
    <div>
      <h4>邸: </h4><div><h5>dǐ: </h5><span>official residence, residence of</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>邹: </h4><div><h5>zōu: </h5><span>name of an ancient state; surname</span></div>
    </div>
    <div>
      <h4>邻: </h4><div><h5>lín: </h5><span>neighbor; neighborhood</span></div>
    </div>
    <div>
      <h4>阻: </h4><div><h5>zǔ: </h5><span>impede, hinder, obstruct; oppose</span></div>
    </div>
    <div>
      <h4>阿: </h4><div><h5>ā, ē: </h5>
      <span>prefix for people's names; used in transliteration</span></div>
    </div>
    <div>
      <h4>陀: </h4><div><h5>tuó: </h5><span>steep bank, rough terrain</span></div>
    </div>
    <div>
      <h4>附: </h4><div><h5>fù: </h5><span>adhere to, append; rely on near to</span></div>
    </div>
    <div>
      <h4>际: </h4><div><h5>jì: </h5><span>border, boundary, juncture</span></div>
    </div>
    <div>
      <h4>陆: </h4><div><h5>lù: </h5><span>land, continental; army</span></div>
    </div>
    <div>
      <h4>陇: </h4><div><h5>lǒng: </h5><span>mountain located between Shanxi</span></div>
    </div>
    <div>
      <h4>陈: </h4><div><h5>chén: </h5><span>exhibit, display; plead; a surname</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>郁: </h4><div><h5>yù: </h5><span>sweet smelling, rich in aroma</span></div>
    </div>
    <div>
      <h4>郊: </h4><div><h5>jiāo: </h5><span>suburbs; waste land, open spaces</span></div>
    </div>
    <div>
      <h4>郎: </h4><div><h5>láng, làng: </h5><span>gentleman, young man; husband</span></div>
    </div>
    <div>
      <h4>郑: </h4><div><h5>zhèng: </h5><span>state in today's Henan; surname</span></div>
    </div>
    <div>
      <h4>陋: </h4><div><h5>lòu: </h5><span>narrow; crude, coarse; ugly</span></div>
    </div>
    <div>
      <h4>陌: </h4><div><h5>mò: </h5><span>foot path between rice fields</span></div>
    </div>
    <div>
      <h4>降: </h4><div><h5>jiàng, xiáng: </h5><span>descend, fall, drop; lower, down</span></div>
    </div>
    <div>
      <h4>限: </h4><div><h5>xiàn: </h5><span>boundary, limit, line</span></div>
    </div>
    <div>
      <h4>陕: </h4><div><h5>shǎn: </h5><span>mountain pass; Shanxi province</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>郝: </h4><div><h5>hǎo: </h5><span>surname; place in modern Shanxi</span></div>
    </div>
    <div>
      <h4>郡: </h4><div><h5>jùn: </h5><span>administrative division</span></div>
    </div>
    <div>
      <h4>郢: </h4><div><h5>yǐng: </h5><span>state in today's Hubei province</span></div>
    </div>
    <div>
      <h4>郤: </h4><div><h5>xì: </h5><span>crack, opening; surname</span></div>
    </div>
    <div>
      <h4>陛: </h4><div><h5>bì: </h5><span>steps leading throne; throne</span></div>
    </div>
    <div>
      <h4>陡: </h4><div><h5>dǒu: </h5><span>steep, sloping; abruptly, sudden</span></div>
    </div>
    <div>
      <h4>院: </h4><div><h5>yuàn: </h5><span>courtyard, yard, court; school</span></div>
    </div>
    <div>
      <h4>除: </h4><div><h5>chú: </h5><span>eliminate, remove, except</span></div>
    </div>
    <div>
      <h4>陨: </h4><div><h5>yǔn: </h5><span>fall, slip; let fall; die</span></div>
    </div>
    <div>
      <h4>险: </h4><div><h5>xiǎn: </h5><span>narrow pass, strategic point</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>部: </h4><div><h5>bù: </h5><span>part, division, section</span></div>
    </div>
    <div>
      <h4>郭: </h4><div><h5>guō: </h5><span>outer part (of a city); surname</span></div>
    </div>
    <div>
      <h4>都: </h4><div><h5>dū, dōu: </h5>
      <span>metropolis, capital; all, the whole; elegant, refined</span></div>
    </div>
    <div>
      <h4>陪: </h4><div><h5>péi: </h5><span>accompany, be with, keep company</span></div>
    </div>
    <div>
      <h4>陲: </h4><div><h5>chuí: </h5><span>frontier, border</span></div>
    </div>
    <div>
      <h4>陵: </h4><div><h5>líng: </h5><span>hill, mound; mausoleum</span></div>
    </div>
    <div>
      <h4>陶: </h4><div><h5>táo: </h5><span>pottery, ceramics</span></div>
    </div>
    <div>
      <h4>陷: </h4><div><h5>xiàn: </h5><span>submerge, sink, plunge; trap</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>隅: </h4><div><h5>yú: </h5><span>corner, nook, remote place</span></div>
    </div>
    <div>
      <h4>隆: </h4><div><h5>lóng: </h5><span>prosperous, plentiful, abundant</span></div>
    </div>
    <div>
      <h4>隋: </h4><div><h5>suí, duò: </h5><span>Sui dynasty; surname</span></div>
    </div>
    <div>
      <h4>隍: </h4><div><h5>huáng: </h5><span>dry ditch, dry moat</span></div>
    </div>
    <div>
      <h4>随: </h4><div><h5>suí: </h5><span>follow, listen to, submit to</span></div>
    </div>
    <div>
      <h4>隐: </h4><div><h5>yǐn, yìn: </h5><span>hide, conceal; hidden, secret</span></div>
    </div>
    <h3>画10-12</h3>
    <div>
      <h4>隔: </h4><div><h5>gé: </h5><span>separate, partition</span></div>
    </div>
    <div>
      <h4>隘: </h4><div><h5>ài: </h5><span>narrow, confined; a strategic pass</span></div>
    </div>
    <div>
      <h4>隙: </h4><div><h5>xì: </h5><span>crack, split, fissure; grudge</span></div>
    </div>
    <div>
      <h4>鄙: </h4><div><h5>bǐ: </h5><span>mean; low</span></div>
    </div>
    <div>
      <h4>障: </h4><div><h5>zhàng: </h5><span>separate; shield; barricade</span></div>
    </div>
    <div>
      <h4>隧: </h4><div><h5>suì: </h5><span>tunnel, underground passageway, path to a tomb</span></div>
    </div>
    <h1>38: 兀</h1>
    <div>
      <h4>尧: </h4><div><h5>yáo: </h5><span>a legendary ancient emperor-sage</span></div>
    </div>
    <h1>39: 口</h1>
    <div>
      <h4>口: </h4><div><h5>kǒu: </h5><span>mouth; open end; entrance, gate</span></div>
    </div>
    <h3>画2</h3>
    <div>
      <h4>古: </h4><div><h5>gǔ: </h5><span>old, classic, ancient</span></div>
    </div>
    <div>
      <h4>句: </h4><div><h5>jù, gōu: </h5><span>sentence</span></div>
    </div>
    <div>
      <h4>另: </h4><div><h5>lìng: </h5><span>another, separate, other</span></div>
    </div>
    <div>
      <h4>叨: </h4><div><h5>tāo, dāo: </h5><span>talkative; quarrelous</span></div>
    </div>
    <div>
      <h4>叩: </h4><div><h5>kòu: </h5><span>knock, ask; kowtow, bow</span></div>
    </div>
    <div>
      <h4>只: </h4><div><h5>zhī, zhǐ: </h5><span>only, just, simply</span></div>
    </div>
    <div>
      <h4>叫: </h4><div><h5>jiào: </h5><span>cry, shout; hail, greet, call</span></div>
    </div>
    <div>
      <h4>召: </h4><div><h5>zhào, shào: </h5><span>imperial decree; summon</span></div>
    </div>
    <div>
      <h4>叭: </h4><div><h5>bā: </h5><span>trumpet</span></div>
    </div>
    <div>
      <h4>叮: </h4><div><h5>dīng: </h5><span>exhort or enjoin repeatedly</span></div>
    </div>
    <div>
      <h4>可: </h4><div><h5>kě, kè: </h5><span>may, can, -able; possibly</span></div>
    </div>
    <div>
      <h4>台: </h4><div><h5>tái, tāi: </h5><span>platform; unit; term of address</span></div>
    </div>
    <div>
      <h4>叱: </h4><div><h5>chì: </h5><span>scold, shout at, bawl out</span></div>
    </div>
    <div>
      <h4>史: </h4><div><h5>shǐ: </h5><span>history, chronicle, annals</span></div>
    </div>
    <div>
      <h4>右: </h4><div><h5>yòu: </h5><span>right; west; right-wing</span></div>
    </div>
    <div>
      <h4>叶: </h4><div><h5>yè, xié: </h5>
      <span>to harmonize, to rhyme; to unite; (borrowed for) leaf</span></div>
    </div>
    <div>
      <h4>号: </h4><div><h5>hào, háo: </h5><span>mark, sign; symbol; number</span></div>
    </div>
    <div>
      <h4>司: </h4><div><h5>sī: </h5><span>take charge of, control, manage; officer</span></div>
    </div>
    <div>
      <h4>叹: </h4><div><h5>tàn: </h5><span>sigh, admire</span></div>
    </div>
    <div>
      <h4>叼: </h4><div><h5>diāo: </h5><span>holding in mouth</span></div>
    </div>
    <div>
      <h4>叽: </h4><div><h5>jī: </h5><span>sigh in disapproval; take small</span></div>
    </div>
    <h3>画3</h3>
    <div>
      <h4>吁: </h4><div><h5>xū, yù: </h5><span>interjection 'Alas!'; to sigh</span></div>
    </div>
    <div>
      <h4>吃: </h4><div><h5>chī: </h5><span>eat; drink; suffer, endure, bear</span></div>
    </div>
    <div>
      <h4>各: </h4><div><h5>gè, gě: </h5><span>each, individually, every, all</span></div>
    </div>
    <div>
      <h4>吆: </h4><div><h5>yāo: </h5><span>bawl, yell, shout, cry out</span></div>
    </div>
    <div>
      <h4>合: </h4><div><h5>hé, gě: </h5><span>combine, unite, join; gather</span></div>
    </div>
    <div>
      <h4>吉: </h4><div><h5>jí: </h5><span>lucky, propitious, good</span></div>
    </div>
    <div>
      <h4>吊: </h4><div><h5>diào: </h5><span>condole, mourn, pity; hang</span></div>
    </div>
    <div>
      <h4>吋: </h4><div><h5>dòu, cùn: </h5>
      <span>
        English inch (unlike U+5BF8 寸, which can be either the English or the
        Chinese inch)
      </span></div>
    </div>
    <div>
      <h4>同: </h4><div><h5>tóng, tòng: </h5><span>same, similar; together with</span></div>
    </div>
    <div>
      <h4>名: </h4><div><h5>míng: </h5><span>name, rank, title, position</span></div>
    </div>
    <div>
      <h4>后: </h4><div><h5>hòu: </h5><span>queen, empress, sovereign</span></div>
    </div>
    <div>
      <h4>吏: </h4><div><h5>lì: </h5><span>government official, magistrate</span></div>
    </div>
    <div>
      <h4>吐: </h4><div><h5>tǔ, tù: </h5><span>vomit, spew out, cough up</span></div>
    </div>
    <div>
      <h4>向: </h4><div><h5>xiàng: </h5><span>toward, direction, trend</span></div>
    </div>
    <div>
      <h4>吒: </h4><div><h5>zhà, zhā: </h5><span>shout, roar, bellow; scold</span></div>
    </div>
    <div>
      <h4>吓: </h4><div><h5>xià, hè: </h5><span>scare, frighten; intimidate</span></div>
    </div>
    <div>
      <h4>吕: </h4><div><h5>lǚ: </h5><span>surname; a musical note</span></div>
    </div>
    <div>
      <h4>吗: </h4><div><h5>má, mǎ, ma: </h5><span>final interrogative particle</span></div>
    </div>
    <div>
      <h4>吸: </h4><div><h5>xī: </h5><span>inhale, suck in; absorb; attract</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>君: </h4><div><h5>jūn: </h5><span>sovereign, monarch, ruler, chief, prince</span></div>
    </div>
    <div>
      <h4>吝: </h4><div><h5>lìn: </h5><span>stingy, miserly, parsimonious</span></div>
    </div>
    <div>
      <h4>吞: </h4><div><h5>tūn: </h5><span>swallow; absorb, annex, engulf</span></div>
    </div>
    <div>
      <h4>吟: </h4><div><h5>yín: </h5><span>sing, hum; recite; type of poetry</span></div>
    </div>
    <div>
      <h4>吠: </h4><div><h5>fèi: </h5><span>bark</span></div>
    </div>
    <div>
      <h4>否: </h4><div><h5>fǒu, pǐ: </h5><span>not, no, negative; final particle</span></div>
    </div>
    <div>
      <h4>吧: </h4><div><h5>bā, ba: </h5><span>emphatic final particle</span></div>
    </div>
    <div>
      <h4>吨: </h4><div><h5>dūn: </h5><span>metric ton</span></div>
    </div>
    <div>
      <h4>吩: </h4><div><h5>fēn: </h5><span>order, command, instruct</span></div>
    </div>
    <div>
      <h4>含: </h4><div><h5>hán: </h5><span>hold in mouth; cherish; contain</span></div>
    </div>
    <div>
      <h4>听: </h4><div><h5>tīng: </h5><span>hear; understand; obey, comply</span></div>
    </div>
    <div>
      <h4>吭: </h4><div><h5>háng, kēng: </h5><span>throat</span></div>
    </div>
    <div>
      <h4>吮: </h4><div><h5>shǔn: </h5><span>suck with mouth, sip, lick</span></div>
    </div>
    <div>
      <h4>启: </h4><div><h5>qǐ: </h5><span>open; begin, commence; explain</span></div>
    </div>
    <div>
      <h4>吱: </h4><div><h5>zhī, zī: </h5><span>chirping, squeaking, hissing</span></div>
    </div>
    <div>
      <h4>吴: </h4><div><h5>wú: </h5><span>name of warring state; surname</span></div>
    </div>
    <div>
      <h4>吵: </h4><div><h5>chǎo, chāo: </h5><span>argue, dispute; disturb, annoy</span></div>
    </div>
    <div>
      <h4>吹: </h4><div><h5>chuī: </h5><span>blow; puff; brag, boast</span></div>
    </div>
    <div>
      <h4>吻: </h4><div><h5>wěn: </h5><span>kiss; the lips; coinciding</span></div>
    </div>
    <div>
      <h4>吼: </h4><div><h5>hǒu: </h5><span>roar, shout; bark, howl</span></div>
    </div>
    <div>
      <h4>吽: </h4><div><h5>hǒu, hōng, ōu: </h5><span>'OM'; bellow</span></div>
    </div>
    <div>
      <h4>吾: </h4><div><h5>wú, yù: </h5><span>i, my, our; resist, impede</span></div>
    </div>
    <div>
      <h4>呀: </h4><div><h5>yā, ya: </h5>
      <span>
        particle used to express surprise or mild emphasis
      </span></div>
    </div>
    <div>
      <h4>呃: </h4><div><h5>è: </h5><span>belch; hiccup</span></div>
    </div>
    <div>
      <h4>呆: </h4><div><h5>dāi: </h5><span>dull; dull-minded, simple, stupid</span></div>
    </div>
    <div>
      <h4>呈: </h4><div><h5>chéng: </h5><span>submit, show; appear; petition</span></div>
    </div>
    <div>
      <h4>告: </h4><div><h5>gào: </h5><span>tell, announce, inform; accuse</span></div>
    </div>
    <div>
      <h4>呎: </h4><div><h5>chǐ, yīngchǐ: </h5><span>foot</span></div>
    </div>
    <div>
      <h4>呐: </h4><div><h5>nà, nè: </h5><span>raise voice, yell out loud, shout; stammer</span></div>
    </div>
    <div>
      <h4>呒: </h4><div><h5>fǔ, ḿ: </h5><span>unclear; an expletive</span></div>
    </div>
    <div>
      <h4>呓: </h4><div><h5>yì: </h5><span>talk in one's sleep, somniloquy</span></div>
    </div>
    <div>
      <h4>呕: </h4><div><h5>ǒu, ōu, òu: </h5><span>vomit; annoy, enrage</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>呗: </h4><div><h5>bei, bài: </h5><span>final particle of assertion</span></div>
    </div>
    <div>
      <h4>员: </h4><div><h5>yuán, yún, yùn: </h5><span>member; personnel, staff member</span></div>
    </div>
    <div>
      <h4>呛: </h4><div><h5>qiāng, qiàng: </h5><span>choke by smoke; irritates nose</span></div>
    </div>
    <div>
      <h4>呜: </h4><div><h5>wū: </h5><span>sound of crying, sobbing</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>呢: </h4><div><h5>ní, ne: </h5><span>interrogative or emphatic final</span></div>
    </div>
    <div>
      <h4>呣: </h4><div><h5>ḿ, m̀, móu: </h5><span></span></div>
    </div>
    <div>
      <h4>呦: </h4><div><h5>yōu: </h5><span>the bleating of the deer</span></div>
    </div>
    <div>
      <h4>周: </h4><div><h5>zhōu: </h5><span>Zhou dynasty; circumference</span></div>
    </div>
    <div>
      <h4>呱: </h4><div><h5>guā, gū, guǎ: </h5><span>wail, crying of child; swear at</span></div>
    </div>
    <div>
      <h4>味: </h4><div><h5>wèi: </h5><span>taste, smell, odor; delicacy</span></div>
    </div>
    <div>
      <h4>呵: </h4><div><h5>hē, a, kē: </h5><span>scold; laughing sound; yawn</span></div>
    </div>
    <div>
      <h4>呷: </h4><div><h5>xiā: </h5><span>suck, swallow, drink</span></div>
    </div>
    <div>
      <h4>呸: </h4><div><h5>pēi: </h5><span>expression of reprimand</span></div>
    </div>
    <div>
      <h4>呻: </h4><div><h5>shēn: </h5><span>groan, moan; recite with intonation</span></div>
    </div>
    <div>
      <h4>呼: </h4><div><h5>hū: </h5><span>breathe sigh, exhale; call, shout</span></div>
    </div>
    <div>
      <h4>命: </h4><div><h5>mìng: </h5><span>life; destiny, fate, luck; an order, instruction</span></div>
    </div>
    <div>
      <h4>咀: </h4><div><h5>jǔ, zuǐ: </h5><span>suck; chew, masticate</span></div>
    </div>
    <div>
      <h4>咁: </h4><div><h5>xián, gān: </h5><span>so</span></div>
    </div>
    <div>
      <h4>咄: </h4><div><h5>duō: </h5><span>noise of rage, cry out in anger</span></div>
    </div>
    <div>
      <h4>咆: </h4><div><h5>páo: </h5><span>roar</span></div>
    </div>
    <div>
      <h4>咋: </h4><div><h5>zǎ, zé, zhā: </h5>
      <span>question-forming particle, why? how? what?; to bite; loud</span></div>
    </div>
    <div>
      <h4>和: </h4><div><h5>hé, hè, huó, huò, hú: </h5><span>harmony, peace; peaceful, calm</span></div>
    </div>
    <div>
      <h4>咎: </h4><div><h5>jiù: </h5><span>fault, defect; error, mistake</span></div>
    </div>
    <div>
      <h4>咏: </h4><div><h5>yǒng: </h5><span>sing song or poem, hum, chant</span></div>
    </div>
    <div>
      <h4>咐: </h4><div><h5>fù: </h5><span>instruct, order</span></div>
    </div>
    <div>
      <h4>咒: </h4><div><h5>zhòu: </h5><span>curse, damn, incantation</span></div>
    </div>
    <div>
      <h4>咕: </h4><div><h5>gū: </h5><span>mumble, mutter, murmur; rumble</span></div>
    </div>
    <div>
      <h4>咖: </h4><div><h5>kā, gā: </h5><span>coffee; a phonetic</span></div>
    </div>
    <div>
      <h4>咙: </h4><div><h5>lóng: </h5><span>throat</span></div>
    </div>
    <div>
      <h4>咚: </h4><div><h5>dōng: </h5><span>onomatopoetic, a thumping sound</span></div>
    </div>
    <div>
      <h4>咛: </h4><div><h5>níng: </h5><span>enjoin, instruct; charge</span></div>
    </div>
    <div>
      <h4>哎: </h4><div><h5>āi: </h5><span>interjection of surprise</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>咦: </h4><div><h5>yí: </h5><span>exclamation of surprise</span></div>
    </div>
    <div>
      <h4>咧: </h4><div><h5>liě, liē, lié, lie: </h5><span>stretch mouth, grimace, grin</span></div>
    </div>
    <div>
      <h4>咨: </h4><div><h5>zī: </h5><span>inquire, consult, discuss; plan</span></div>
    </div>
    <div>
      <h4>咩: </h4><div><h5>miē: </h5>
      <span>the bleating of sheep</span></div>
    </div>
    <div>
      <h4>咪: </h4><div><h5>mī: </h5><span>sound of cat, cat's meow; meter</span></div>
    </div>
    <div>
      <h4>咫: </h4><div><h5>zhǐ: </h5><span>foot measure of Zhou dynasty</span></div>
    </div>
    <div>
      <h4>咬: </h4><div><h5>yǎo: </h5><span>bite, gnaw</span></div>
    </div>
    <div>
      <h4>咯: </h4><div><h5>kǎ, luò, lo, gē: </h5><span>final particle</span></div>
    </div>
    <div>
      <h4>咱: </h4><div><h5>zán, zá, zBn ㄗㄢ: </h5><span>us</span></div>
    </div>
    <div>
      <h4>咳: </h4><div><h5>ké, hāi: </h5><span>cough</span></div>
    </div>
    <div>
      <h4>咸: </h4><div><h5>xián: </h5><span>together; all, completely; united</span></div>
    </div>
    <div>
      <h4>咻: </h4><div><h5>xiū: </h5><span>shout</span></div>
    </div>
    <div>
      <h4>咽: </h4><div><h5>yān, yàn, yè: </h5><span>throat; pharynx</span></div>
    </div>
    <div>
      <h4>咿: </h4><div><h5>yī: </h5><span>descriptive of creaking; laugh</span></div>
    </div>
    <div>
      <h4>哀: </h4><div><h5>āi: </h5><span>sad, mournful, pitiful; pity</span></div>
    </div>
    <div>
      <h4>品: </h4><div><h5>pǐn: </h5><span>article, product, commodity</span></div>
    </div>
    <div>
      <h4>哄: </h4><div><h5>hōng, hǒng, hòng: </h5><span>coax; beguile, cheat, deceive</span></div>
    </div>
    <div>
      <h4>哆: </h4><div><h5>duō: </h5><span>tremble, shiver, shudder, quiver</span></div>
    </div>
    <div>
      <h4>哇: </h4><div><h5>wā, wa: </h5><span>vomit; cry of an infant</span></div>
    </div>
    <div>
      <h4>哈: </h4><div><h5>hā, hǎ, hà: </h5><span>sound of laughter</span></div>
    </div>
    <div>
      <h4>哉: </h4><div><h5>zāi: </h5><span>final exclamatory particle</span></div>
    </div>
    <div>
      <h4>响: </h4><div><h5>xiǎng: </h5><span>make sound, make noise; sound</span></div>
    </div>
    <div>
      <h4>哑: </h4><div><h5>yǎ, yā: </h5><span>dumb, mute; become hoarse</span></div>
    </div>
    <div>
      <h4>哒: </h4><div><h5>dā: </h5><span>a sound made to get a horse to move forward</span></div>
    </div>
    <div>
      <h4>哔: </h4><div><h5>bì: </h5><span>used in transliterations</span></div>
    </div>
    <div>
      <h4>哗: </h4><div><h5>huá, huā: </h5><span>rushing sound; gush forward</span></div>
    </div>
    <div>
      <h4>哞: </h4><div><h5>mōu: </h5><span></span></div>
    </div>
    <div>
      <h4>哟: </h4><div><h5>yō, yo: </h5><span>ah, final particle</span></div>
    </div>
    <div>
      <h4>哪: </h4><div><h5>nǎ, něi, na, né: </h5><span>which? where? how?</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>哥: </h4><div><h5>gē: </h5><span>elder brother</span></div>
    </div>
    <div>
      <h4>哦: </h4><div><h5>ó, ò, é: </h5><span>oh? really? is that so?</span></div>
    </div>
    <div>
      <h4>哨: </h4><div><h5>shào: </h5><span>whistle, blow whistle; chirp</span></div>
    </div>
    <div>
      <h4>哩: </h4><div><h5>li, lǐ, lī: </h5><span>mile</span></div>
    </div>
    <div>
      <h4>哭: </h4><div><h5>kū: </h5><span>weep, cry, wail</span></div>
    </div>
    <div>
      <h4>哮: </h4><div><h5>xiào: </h5><span>cough; pant; roar</span></div>
    </div>
    <div>
      <h4>哲: </h4><div><h5>zhé: </h5><span>wise, sagacious; wise man, sage</span></div>
    </div>
    <div>
      <h4>哺: </h4><div><h5>bǔ: </h5><span>chew food; feed</span></div>
    </div>
    <div>
      <h4>哼: </h4><div><h5>hēng, hng: </h5>
      <span>
        hum; sing softly; groan, moan
      </span></div>
    </div>
    <div>
      <h4>哽: </h4><div><h5>gěng: </h5><span>choke (with grief)</span></div>
    </div>
    <div>
      <h4>唅: </h4><div><h5>hán, hàn: </h5>
      <span>a sound; to put in the mouth</span></div>
    </div>
    <div>
      <h4>唆: </h4><div><h5>suō: </h5><span>make mischief, incite, instigate</span></div>
    </div>
    <div>
      <h4>唇: </h4><div><h5>chún: </h5><span>lips</span></div>
    </div>
    <div>
      <h4>唉: </h4><div><h5>āi, ài: </h5><span>alas, exclamation of surprise or pain</span></div>
    </div>
    <div>
      <h4>唏: </h4><div><h5>xī: </h5><span>weep or sob; grieve</span></div>
    </div>
    <div>
      <h4>唐: </h4><div><h5>táng: </h5><span>Tang dynasty; Chinese</span></div>
    </div>
    <div>
      <h4>唔: </h4><div><h5>wú, ńg, ń: </h5><span>hold in mouth; bite</span></div>
    </div>
    <div>
      <h4>唠: </h4><div><h5>lào, láo: </h5><span>chat, jaw, gossip, talk</span></div>
    </div>
    <div>
      <h4>唢: </h4><div><h5>suǒ: </h5><span>flute-like musical instrument</span></div>
    </div>
    <div>
      <h4>唤: </h4><div><h5>huàn: </h5><span>call</span></div>
    </div>
    <div>
      <h4>唧: </h4><div><h5>jī: </h5><span>chirping of insects; pump</span></div>
    </div>
    <div>
      <h4>啊: </h4><div><h5>ā, á, ǎ, à, a: </h5><span>exclamatory particle</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>唬: </h4><div><h5>hǔ, xià: </h5><span>to intimidate; to scare</span></div>
    </div>
    <div>
      <h4>售: </h4><div><h5>shòu: </h5><span>sell</span></div>
    </div>
    <div>
      <h4>唯: </h4><div><h5>wéi: </h5><span>only; yes</span></div>
    </div>
    <div>
      <h4>唰: </h4><div><h5>shuā: </h5><span></span></div>
    </div>
    <div>
      <h4>唱: </h4><div><h5>chàng: </h5><span>sing, chant, call; ditty, song</span></div>
    </div>
    <div>
      <h4>唷: </h4><div><h5>yō: </h5><span>final particle</span></div>
    </div>
    <div>
      <h4>唾: </h4><div><h5>tuò: </h5><span>spit, spit on; saliva</span></div>
    </div>
    <div>
      <h4>啃: </h4><div><h5>kěn: </h5><span>gnaw, chew, bite</span></div>
    </div>
    <div>
      <h4>啄: </h4><div><h5>zhuó: </h5><span>to peck</span></div>
    </div>
    <div>
      <h4>商: </h4><div><h5>shāng: </h5><span>commerce, business, trade</span></div>
    </div>
    <div>
      <h4>啐: </h4><div><h5>cuì, qi: </h5>
      <span>
        to taste, to sip; to spit; the sound of sipping; to surprise
      </span></div>
    </div>
    <div>
      <h4>啜: </h4><div><h5>chuò, chuài: </h5><span>sip, suck up; sob, weep</span></div>
    </div>
    <div>
      <h4>啡: </h4><div><h5>fēi: </h5><span>morphine; coffee</span></div>
    </div>
    <div>
      <h4>啤: </h4><div><h5>pí: </h5><span>beer</span></div>
    </div>
    <div>
      <h4>啥: </h4><div><h5>shá: </h5><span>what?</span></div>
    </div>
    <div>
      <h4>啦: </h4><div><h5>lá: </h5><span>final particle of assertion</span></div>
    </div>
    <div>
      <h4>啧: </h4><div><h5>zé: </h5><span>interjection of approval or admiration</span></div>
    </div>
    <div>
      <h4>啪: </h4><div><h5>pā: </h5><span>syllable</span></div>
    </div>
    <div>
      <h4>啬: </h4><div><h5>sè: </h5><span>miserly, thrifty; stingy</span></div>
    </div>
    <div>
      <h4>啵: </h4><div><h5>bo, bō ㄅㄛ: </h5><span>blubbern (V)</span></div>
    </div>
    <div>
      <h4>啷: </h4><div><h5>lāng: </h5><span></span></div>
    </div>
    <div>
      <h4>啸: </h4><div><h5>xiào: </h5><span>roar, howl, scream; whistle</span></div>
    </div>
    <div>
      <h4>喵: </h4><div><h5>miāo: </h5><span>the mew of the cat</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>啻: </h4><div><h5>chì, dì: </h5><span>only, merely; just like; stop at</span></div>
    </div>
    <div>
      <h4>啼: </h4><div><h5>tí: </h5><span>weep, whimper; howl, twitter</span></div>
    </div>
    <div>
      <h4>啾: </h4><div><h5>jiū: </h5><span>wailing of child; chirp</span></div>
    </div>
    <div>
      <h4>喀: </h4><div><h5>kā: </h5><span>vomit; used in transliterations</span></div>
    </div>
    <div>
      <h4>喂: </h4><div><h5>wèi: </h5><span>interjection to call attention</span></div>
    </div>
    <div>
      <h4>喃: </h4><div><h5>nán: </h5><span>keep talking, chattering; mumble</span></div>
    </div>
    <div>
      <h4>善: </h4><div><h5>shàn: </h5><span>good, virtuous, charitable, kind</span></div>
    </div>
    <div>
      <h4>喇: </h4><div><h5>lǎ: </h5><span>horn, bugle; lama; final particle</span></div>
    </div>
    <div>
      <h4>喈: </h4><div><h5>jiē: </h5><span>music; melody</span></div>
    </div>
    <div>
      <h4>喉: </h4><div><h5>hóu: </h5><span>throat, gullet, larynx; guttural</span></div>
    </div>
    <div>
      <h4>喊: </h4><div><h5>hǎn: </h5><span>shout, call out, yell; howl; cry</span></div>
    </div>
    <div>
      <h4>喋: </h4><div><h5>dié, zhá: </h5><span>nag; chatter, babble, twitter</span></div>
    </div>
    <div>
      <h4>喔: </h4><div><h5>ō, wō: </h5><span>descriptive of crying or of crowing</span></div>
    </div>
    <div>
      <h4>喘: </h4><div><h5>chuǎn: </h5><span>pant, gasp, breathe heavily</span></div>
    </div>
    <div>
      <h4>喙: </h4><div><h5>huì: </h5><span>beak, bill, snout; pant</span></div>
    </div>
    <div>
      <h4>喜: </h4><div><h5>xǐ: </h5><span>like, love, enjoy; joyful thing</span></div>
    </div>
    <div>
      <h4>喝: </h4><div><h5>hē, hè, yè: </h5><span>drink; shout, call out</span></div>
    </div>
    <div>
      <h4>喟: </h4><div><h5>kuì: </h5><span>heave sigh, sigh</span></div>
    </div>
    <div>
      <h4>喧: </h4><div><h5>xuān: </h5><span>lively, noisy; clamor, talk loudly</span></div>
    </div>
    <div>
      <h4>喳: </h4><div><h5>zhā, chā: </h5><span>whispering</span></div>
    </div>
    <div>
      <h4>喷: </h4><div><h5>pēn, pèn: </h5><span>spurt, blow out, puff out</span></div>
    </div>
    <div>
      <h4>喻: </h4><div><h5>yù: </h5><span>metaphor, analogy; example; like</span></div>
    </div>
    <div>
      <h4>喽: </h4><div><h5>lóu, lou: </h5><span>used in onomatopoetic expressions</span></div>
    </div>
    <div>
      <h4>嗖: </h4><div><h5>sōu: </h5><span>(onom.) sifflement</span></div>
    </div>
    <div>
      <h4>嗟: </h4><div><h5>jiē: </h5><span>sigh, alas</span></div>
    </div>
    <h3>画10</h3>
    <div>
      <h4>嗄: </h4><div><h5>shà, á: </h5><span>hoarse of voice</span></div>
    </div>
    <div>
      <h4>嗅: </h4><div><h5>xiù: </h5><span>smell, scent, sniff; olfactive</span></div>
    </div>
    <div>
      <h4>嗈: </h4><div><h5>yōng: </h5><span>oh</span></div>
    </div>
    <div>
      <h4>嗓: </h4><div><h5>sǎng: </h5><span>voice; throat</span></div>
    </div>
    <div>
      <h4>嗔: </h4><div><h5>chēn: </h5><span>be angry at, scold, rebuke</span></div>
    </div>
    <div>
      <h4>嗙: </h4><div><h5>bēng, pǎng: </h5><span>boast</span></div>
    </div>
    <div>
      <h4>嗜: </h4><div><h5>shì: </h5><span>be fond of, have weakness for</span></div>
    </div>
    <div>
      <h4>嗝: </h4><div><h5>gé: </h5><span>cackling of fowls to gag, to vomit</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>嗡: </h4><div><h5>wēng: </h5><span>sound of flying bees, airplanes</span></div>
    </div>
    <div>
      <h4>嗣: </h4><div><h5>sì: </h5><span>to connect, inherit; descendants, heirs</span></div>
    </div>
    <div>
      <h4>嗤: </h4><div><h5>chī: </h5><span>laugh at, ridicule, sneer; snort</span></div>
    </div>
    <div>
      <h4>嗦: </h4><div><h5>suō: </h5><span>suck</span></div>
    </div>
    <div>
      <h4>嗨: </h4><div><h5>hāi, hēi: </h5><span>hi</span></div>
    </div>
    <div>
      <h4>嗯: </h4><div><h5>ǹg, ǹ, ńg, ń, ňg, ň: </h5><span>final particle</span></div>
    </div>
    <div>
      <h4>嗲: </h4><div><h5>diǎ: </h5>
      <span>
        intensifying particle; inviting, coquettish; 嗲哋.
        'daddy'
      </span></div>
    </div>
    <div>
      <h4>嗳: </h4><div><h5>ǎi, ài, āi: </h5><span>interjection; exclamation</span></div>
    </div>
    <div>
      <h4>嗷: </h4><div><h5>áo: </h5><span>loud clamor; sound of wailing</span></div>
    </div>
    <div>
      <h4>嘟: </h4><div><h5>dū: </h5><span>sound of horn tooting</span></div>
    </div>
    <h3>画11</h3>
    <div>
      <h4>嗽: </h4><div><h5>sòu: </h5><span>cough, gargle, clear throat</span></div>
    </div>
    <div>
      <h4>嘀: </h4><div><h5>dí: </h5><span>backbite</span></div>
    </div>
    <div>
      <h4>嘈: </h4><div><h5>cáo: </h5><span>noisy</span></div>
    </div>
    <div>
      <h4>嘉: </h4><div><h5>jiā: </h5><span>excellent; joyful; auspicious</span></div>
    </div>
    <div>
      <h4>嘎: </h4><div><h5>gā, gá, gǎ: </h5><span>sound of laughter; bad, malevolent</span></div>
    </div>
    <div>
      <h4>嘘: </h4><div><h5>xū, shī: </h5><span>exhale; blow out; deep sigh; hiss; praise</span></div>
    </div>
    <div>
      <h4>嘛: </h4><div><h5>ma: </h5><span>final exclamatory particle</span></div>
    </div>
    <div>
      <h4>嘤: </h4><div><h5>yīng: </h5>
      <span>seek friends; also used in onomatopoetic expressions</span></div>
    </div>
    <h3>画12</h3>
    <div>
      <h4>嘱: </h4><div><h5>zhǔ: </h5><span>order, tell, instruct, leave word</span></div>
    </div>
    <div>
      <h4>嘲: </h4><div><h5>cháo, zhāo: </h5><span>ridicule, deride, scorn, jeer at</span></div>
    </div>
    <div>
      <h4>嘶: </h4><div><h5>sī: </h5>
      <span>
        neighing of a horse; gravel voiced, husky throated
      </span></div>
    </div>
    <div>
      <h4>嘹: </h4><div><h5>liáo: </h5><span>used describe clarity of voice; resonant</span></div>
    </div>
    <div>
      <h4>嘻: </h4><div><h5>xī: </h5><span>mirthful, happy; interjection</span></div>
    </div>
    <div>
      <h4>嘿: </h4><div><h5>hēi, mò: </h5><span>be silent, be quiet</span></div>
    </div>
    <div>
      <h4>噎: </h4><div><h5>yē: </h5><span>choke; hiccup</span></div>
    </div>
    <div>
      <h4>噗: </h4><div><h5>pū: </h5><span>burst</span></div>
    </div>
    <div>
      <h4>噜: </h4><div><h5>lū: </h5><span>verbose, talkative; mumbling</span></div>
    </div>
    <div>
      <h4>噢: </h4><div><h5>ō: </h5><span>moan; interjection for pain, sad</span></div>
    </div>
    <div>
      <h4>噶: </h4><div><h5>gá: </h5><span>used in transliterations</span></div>
    </div>
    <h3>画13</h3>
    <div>
      <h4>嘴: </h4><div><h5>zuǐ: </h5><span>mouth, lips</span></div>
    </div>
    <div>
      <h4>噤: </h4><div><h5>jìn: </h5><span>close; be silent, be unable speak</span></div>
    </div>
    <div>
      <h4>器: </h4><div><h5>qì: </h5><span>receptacle, vessel; instrument</span></div>
    </div>
    <div>
      <h4>噩: </h4><div><h5>è: </h5><span>bad, ill-omened, unlucky</span></div>
    </div>
    <div>
      <h4>噪: </h4><div><h5>zào: </h5><span>be noisy; chirp loudly</span></div>
    </div>
    <div>
      <h4>噫: </h4><div><h5>yī: </h5><span>belch; alas</span></div>
    </div>
    <div>
      <h4>噬: </h4><div><h5>shì: </h5><span>bite; gnaw; snap at</span></div>
    </div>
    <div>
      <h4>噱: </h4><div><h5>jué, xué: </h5><span>laugh heartily, laugh aloud</span></div>
    </div>
    <h3>画14-21</h3>
    <div>
      <h4>嚎: </h4><div><h5>háo: </h5><span>cry loudly, yell, scream</span></div>
    </div>
    <div>
      <h4>嚏: </h4><div><h5>tì: </h5><span>sneeze</span></div>
    </div>
    <div>
      <h4>嚣: </h4><div><h5>xiāo: </h5><span>be noisy; treat with contempt</span></div>
    </div>
    <div>
      <h4>嚷: </h4><div><h5>rǎng, rāng: </h5><span>shout, brawl, make uproar, cry</span></div>
    </div>
    <div>
      <h4>嚼: </h4><div><h5>jiáo, jué, jiào: </h5><span>prattle, be glib</span></div>
    </div>
    <div>
      <h4>囊: </h4><div><h5>náng, nāng: </h5><span>bag, purse, sack; put in bag</span></div>
    </div>
    <div>
      <h4>囍: </h4><div><h5>xǐ: </h5><span>double happiness</span></div>
    </div>
    <h1>40: 囗</h1>
    <h3>画2-3</h3>
    <div>
      <h4>囚: </h4><div><h5>qiú: </h5><span>prisoner, convict; confine</span></div>
    </div>
    <div>
      <h4>四: </h4><div><h5>sì: </h5><span>four</span></div>
    </div>
    <div>
      <h4>囝: </h4><div><h5>jiǎn, nān: </h5><span>baby, infant</span></div>
    </div>
    <div>
      <h4>回: </h4><div><h5>huí: </h5><span>return, turn around; a time</span></div>
    </div>
    <div>
      <h4>因: </h4><div><h5>yīn: </h5><span>cause, reason; by; because (of)</span></div>
    </div>
    <div>
      <h4>囡: </h4><div><h5>nān: </h5><span>one's daughter; to filch; to secrete</span></div>
    </div>
    <div>
      <h4>团: </h4><div><h5>tuán: </h5><span>sphere, ball, circle; mass, lump</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>囤: </h4><div><h5>dùn, tún: </h5><span>grain basket, bin for grain</span></div>
    </div>
    <div>
      <h4>囥: </h4><div><h5>kàng: </h5><span>hide</span></div>
    </div>
    <div>
      <h4>园: </h4><div><h5>yuán: </h5><span>garden; park, orchard</span></div>
    </div>
    <div>
      <h4>困: </h4><div><h5>kùn: </h5><span>to surround, beseige; to be surrounded; difficult</span></div>
    </div>
    <div>
      <h4>囱: </h4><div><h5>cōng: </h5><span>chimney</span></div>
    </div>
    <div>
      <h4>围: </h4><div><h5>wéi: </h5><span>surround, encircle, corral</span></div>
    </div>
    <h3>画5-13</h3>
    <div>
      <h4>固: </h4><div><h5>gù: </h5><span>to become solid, solidify; strength</span></div>
    </div>
    <div>
      <h4>国: </h4><div><h5>guó: </h5><span>nation, country, nation-state</span></div>
    </div>
    <div>
      <h4>图: </h4><div><h5>tú: </h5><span>diagram; chart, map, picture</span></div>
    </div>
    <div>
      <h4>囿: </h4><div><h5>yòu: </h5><span>pen up; limit, constrain</span></div>
    </div>
    <div>
      <h4>圃: </h4><div><h5>pǔ: </h5><span>garden, cultivated field</span></div>
    </div>
    <div>
      <h4>圆: </h4><div><h5>yuán: </h5><span>circle; round, circular; complete</span></div>
    </div>
    <div>
      <h4>圈: </h4><div><h5>quān, juàn, juān: </h5><span>to circle; a circle; corral</span></div>
    </div>
    <div>
      <h4>圜: </h4><div><h5>huán, yuán: </h5><span>circle, surround; encircle</span></div>
    </div>
    <h1>41: 土</h1>
    <div>
      <h4>土: </h4><div><h5>tǔ: </h5><span>soil, earth; items made of earth</span></div>
    </div>
    <h3>画2-3</h3>
    <div>
      <h4>圣: </h4><div><h5>shèng: </h5><span>holy, sacred</span></div>
    </div>
    <div>
      <h4>在: </h4><div><h5>zài: </h5><span>be at, in, on; consist in, rest</span></div>
    </div>
    <div>
      <h4>圭: </h4><div><h5>guī: </h5><span>jade pointed at top</span></div>
    </div>
    <div>
      <h4>地: </h4><div><h5>dì, de: </h5><span>earth; soil, ground; region</span></div>
    </div>
    <div>
      <h4>圳: </h4><div><h5>zhèn: </h5><span>furrow in field, small drainage</span></div>
    </div>
    <div>
      <h4>场: </h4><div><h5>cháng, chǎng: </h5><span>open space, field, market</span></div>
    </div>
    <div>
      <h4>圾: </h4><div><h5>jī: </h5><span>garbage, rubbish; shaking; danger</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>址: </h4><div><h5>zhǐ: </h5><span>site, location, land for house</span></div>
    </div>
    <div>
      <h4>均: </h4><div><h5>jūn: </h5><span>equal, even, fair; all, also</span></div>
    </div>
    <div>
      <h4>坊: </h4><div><h5>fāng, fáng: </h5>
      <span>
        neighborhood, urban subdivision; (J) priest's residence; (Buddhist)
        priest; boy
      </span></div>
    </div>
    <div>
      <h4>坍: </h4><div><h5>tān: </h5><span>collapse; landslide</span></div>
    </div>
    <div>
      <h4>坎: </h4><div><h5>kǎn: </h5><span>pit, hole; snare, trap; crisis</span></div>
    </div>
    <div>
      <h4>坏: </h4><div><h5>huài: </h5><span>rotten, spoilt, bad, broken down</span></div>
    </div>
    <div>
      <h4>坐: </h4><div><h5>zuò: </h5><span>sit; seat; ride, travel by</span></div>
    </div>
    <div>
      <h4>坑: </h4><div><h5>kēng: </h5><span>pit, hole; bury, trap; harry</span></div>
    </div>
    <div>
      <h4>块: </h4><div><h5>kuài: </h5><span>piece, lump; dollar</span></div>
    </div>
    <div>
      <h4>坚: </h4><div><h5>jiān: </h5><span>hard, strong, firm; resolute</span></div>
    </div>
    <div>
      <h4>坛: </h4><div><h5>tán: </h5><span>altar; arena, examination hall</span></div>
    </div>
    <div>
      <h4>坜: </h4><div><h5>lì: </h5><span>trou,fosse</span></div>
    </div>
    <div>
      <h4>坝: </h4><div><h5>bà: </h5><span>embankment; dam</span></div>
    </div>
    <div>
      <h4>坞: </h4><div><h5>wù: </h5><span>entrenchment, bank, low wall</span></div>
    </div>
    <div>
      <h4>坟: </h4><div><h5>fén: </h5><span>grave, mound; bulge; bulging</span></div>
    </div>
    <div>
      <h4>坠: </h4><div><h5>zhuì: </h5><span>fall down, drop, sink, go to ruin</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>坡: </h4><div><h5>pō: </h5><span>slope, bank, hillside</span></div>
    </div>
    <div>
      <h4>坤: </h4><div><h5>kūn: </h5><span>earth; feminine, female</span></div>
    </div>
    <div>
      <h4>坦: </h4><div><h5>tǎn: </h5><span>flat, smooth; self-possessed</span></div>
    </div>
    <div>
      <h4>坪: </h4><div><h5>píng: </h5><span>level ground; Japanese measure</span></div>
    </div>
    <div>
      <h4>坳: </h4><div><h5>ào: </h5>
      <span>
        a hollow in the ground, a cavity, depression; undulating, depressed
      </span></div>
    </div>
    <div>
      <h4>坷: </h4><div><h5>kē, kě: </h5><span>clod of earth, lump of soil</span></div>
    </div>
    <div>
      <h4>坻: </h4><div><h5>dǐ, chí: </h5>
      <span>an islet, a rock in a river; an embankment; to stop</span></div>
    </div>
    <div>
      <h4>垂: </h4><div><h5>chuí: </h5><span>let down; suspend, hand; down</span></div>
    </div>
    <div>
      <h4>垃: </h4><div><h5>lā: </h5><span>garbage, refuse, waste</span></div>
    </div>
    <div>
      <h4>垄: </h4><div><h5>lǒng: </h5><span>grave, mound; ridge in field</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>型: </h4><div><h5>xíng: </h5><span>pattern, model, type; law; mold</span></div>
    </div>
    <div>
      <h4>垒: </h4><div><h5>lěi: </h5><span>rampart, military wall</span></div>
    </div>
    <div>
      <h4>垓: </h4><div><h5>gāi: </h5><span>border, boundary, frontier</span></div>
    </div>
    <div>
      <h4>垚: </h4><div><h5>yáo: </h5><span>mound, roundish mass</span></div>
    </div>
    <div>
      <h4>垛: </h4><div><h5>duǒ, duò: </h5><span>heap, pile; pile up, heap up</span></div>
    </div>
    <div>
      <h4>垠: </h4><div><h5>yín: </h5><span>boundary, bank of stream or river</span></div>
    </div>
    <div>
      <h4>垢: </h4><div><h5>gòu: </h5><span>dirt, filth, stains; dirty</span></div>
    </div>
    <div>
      <h4>垣: </h4><div><h5>yuán: </h5><span>low wall</span></div>
    </div>
    <div>
      <h4>垦: </h4><div><h5>kěn: </h5><span>cultivate, reclaim, to farm land</span></div>
    </div>
    <div>
      <h4>垫: </h4><div><h5>diàn: </h5><span>advance money, pay for another</span></div>
    </div>
    <div>
      <h4>垮: </h4><div><h5>kuǎ: </h5><span>be defeated, fail, collapse</span></div>
    </div>
    <div>
      <h4>城: </h4><div><h5>chéng: </h5><span>castle; city, town; municipality</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>埂: </h4><div><h5>gěng: </h5><span>ditches for irrigation; hole</span></div>
    </div>
    <div>
      <h4>埃: </h4><div><h5>āi: </h5><span>fine dust, dirt</span></div>
    </div>
    <div>
      <h4>埋: </h4><div><h5>mái, mán: </h5><span>bury, secrete, conceal</span></div>
    </div>
    <div>
      <h4>埔: </h4><div><h5>pǔ, bù: </h5><span>plain, arena; port, market</span></div>
    </div>
    <div>
      <h4>埕: </h4><div><h5>chéng: </h5><span>a large, pear-shaped earthenware jar</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>域: </h4><div><h5>yù: </h5><span>district, region, boundary; land</span></div>
    </div>
    <div>
      <h4>埠: </h4><div><h5>bù: </h5><span>port city</span></div>
    </div>
    <div>
      <h4>埤: </h4><div><h5>pí, pì: </h5><span>add, increase, attach; low fence</span></div>
    </div>
    <div>
      <h4>埵: </h4><div><h5>duǒ: </h5><span>hardened dirt or clay; cluster</span></div>
    </div>
    <div>
      <h4>埸: </h4><div><h5>yì: </h5><span>a border; a limit; a dike; a frontier; a boundary</span></div>
    </div>
    <div>
      <h4>培: </h4><div><h5>péi: </h5><span>bank up with dirt; cultivate</span></div>
    </div>
    <div>
      <h4>基: </h4><div><h5>jī: </h5><span>foundation, base</span></div>
    </div>
    <div>
      <h4>埼: </h4><div><h5>qí: </h5><span>headland</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>堀: </h4><div><h5>kū: </h5><span>cave, hole</span></div>
    </div>
    <div>
      <h4>堂: </h4><div><h5>táng: </h5><span>hall; government office</span></div>
    </div>
    <div>
      <h4>堆: </h4><div><h5>duī: </h5><span>heap, pile, crowd; pile up</span></div>
    </div>
    <div>
      <h4>堇: </h4><div><h5>jǐn: </h5><span>yellow loam; clay; season; few</span></div>
    </div>
    <div>
      <h4>堉: </h4><div><h5>yù: </h5><span>ground, fertile land</span></div>
    </div>
    <div>
      <h4>堑: </h4><div><h5>qiàn: </h5><span>moat, trench, pit, cavity</span></div>
    </div>
    <div>
      <h4>堕: </h4><div><h5>duò, huī: </h5><span>fall, sink, let fall; degenerate</span></div>
    </div>
    <div>
      <h4>堵: </h4><div><h5>dǔ: </h5><span>wall; stop, prevent; stop up</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>堡: </h4><div><h5>bǎo, bǔ, pù: </h5><span>fort, fortress; town, village</span></div>
    </div>
    <div>
      <h4>堤: </h4><div><h5>dī: </h5><span>dike</span></div>
    </div>
    <div>
      <h4>堪: </h4><div><h5>kān: </h5><span>adequately capable of, worthy of</span></div>
    </div>
    <div>
      <h4>塔: </h4><div><h5>tǎ: </h5><span>tower, spire, tall building</span></div>
    </div>
    <h3>画10</h3>
    <div>
      <h4>塌: </h4><div><h5>tā: </h5><span>fall in ruins, collapse</span></div>
    </div>
    <div>
      <h4>塑: </h4><div><h5>sù: </h5><span>model in clay, sculpt; plastics</span></div>
    </div>
    <div>
      <h4>塘: </h4><div><h5>táng: </h5><span>pond; tank; dike, embankment</span></div>
    </div>
    <div>
      <h4>塞: </h4><div><h5>sāi, sài, sè: </h5>
      <span>stop up, block, seal, cork; pass, frontier; fortress</span></div>
    </div>
    <div>
      <h4>填: </h4><div><h5>tián, zhèn: </h5><span>fill in, fill up; make good</span></div>
    </div>
    <div>
      <h4>墓: </h4><div><h5>mù: </h5><span>grave, tomb</span></div>
    </div>
    <h3>画11</h3>
    <div>
      <h4>塾: </h4><div><h5>shú: </h5><span>village school; private tutorage</span></div>
    </div>
    <div>
      <h4>境: </h4><div><h5>jìng: </h5><span>boundary, frontier; area, region</span></div>
    </div>
    <div>
      <h4>墅: </h4><div><h5>shù: </h5><span>villa, country house</span></div>
    </div>
    <div>
      <h4>墉: </h4><div><h5>yōng: </h5><span>wall; fortified wall; small wall</span></div>
    </div>
    <div>
      <h4>墙: </h4><div><h5>qiáng: </h5><span>wall</span></div>
    </div>
    <div>
      <h4>墟: </h4><div><h5>xū: </h5><span>high mound; hilly countryside; wasteland</span></div>
    </div>
    <div>
      <h4>墬: </h4><div><h5>dì: </h5><span></span></div>
    </div>
    <h3>画12-17</h3>
    <div>
      <h4>增: </h4><div><h5>zēng: </h5><span>increase, add to, augment</span></div>
    </div>
    <div>
      <h4>墨: </h4><div><h5>mò: </h5><span>ink; writing</span></div>
    </div>
    <div>
      <h4>墩: </h4><div><h5>dūn: </h5><span>heap, mound, block of stone</span></div>
    </div>
    <div>
      <h4>壁: </h4><div><h5>bì: </h5><span>partition wall; walls of a house</span></div>
    </div>
    <div>
      <h4>壅: </h4><div><h5>yōng: </h5><span>to obstruct</span></div>
    </div>
    <div>
      <h4>壑: </h4><div><h5>hè: </h5><span>bed of torrent, narrow ravine</span></div>
    </div>
    <div>
      <h4>壕: </h4><div><h5>háo: </h5><span>trench, ditch, channel, moat</span></div>
    </div>
    <div>
      <h4>壤: </h4><div><h5>rǎng: </h5><span>soil, loam, earth; rich</span></div>
    </div>
    <h1>42: 士</h1>
    <div>
      <h4>士: </h4><div><h5>shì: </h5><span>scholar, gentleman; soldier</span></div>
    </div>
    <div>
      <h4>壬: </h4><div><h5>rén: </h5><span>9th heavenly stem</span></div>
    </div>
    <div>
      <h4>壮: </h4><div><h5>zhuàng: </h5><span>big, large; robust; name of tribe</span></div>
    </div>
    <div>
      <h4>声: </h4><div><h5>shēng: </h5><span>sound, voice, noise; tone; music</span></div>
    </div>
    <div>
      <h4>壳: </h4><div><h5>ké, qiào: </h5><span>casing, shell, husk</span></div>
    </div>
    <div>
      <h4>壶: </h4><div><h5>hú: </h5><span>jar, pot, jug, vase; surname</span></div>
    </div>
    <div>
      <h4>壹: </h4><div><h5>yī: </h5><span>number one</span></div>
    </div>
    <h1>43: 夂</h1>
    <div>
      <h4>冬: </h4><div><h5>dōng: </h5><span>winter, 11th lunar month</span></div>
    </div>
    <div>
      <h4>处: </h4><div><h5>chǔ, chù: </h5><span>place, locale; department</span></div>
    </div>
    <div>
      <h4>夆: </h4><div><h5>féng, fēng, páng: </h5><span>resist</span></div>
    </div>
    <div>
      <h4>备: </h4><div><h5>bèi: </h5><span>prepare, ready, perfect</span></div>
    </div>
    <div>
      <h4>复: </h4><div><h5>fù: </h5><span>return; repeat; repeatedly</span></div>
    </div>
    <div>
      <h4>夏: </h4><div><h5>xià: </h5><span>summer; great, grand, big</span></div>
    </div>
    <h1>44: 夕</h1>
    <div>
      <h4>夕: </h4><div><h5>xī: </h5><span>evening, night, dusk; slanted</span></div>
    </div>
    <h3>画2-9</h3>
    <div>
      <h4>外: </h4><div><h5>wài: </h5><span>out, outside, external; foreign</span></div>
    </div>
    <div>
      <h4>夙: </h4><div><h5>sù: </h5><span>early in morning, dawn; previous</span></div>
    </div>
    <div>
      <h4>多: </h4><div><h5>duō: </h5><span>much, many; more than, over</span></div>
    </div>
    <div>
      <h4>夜: </h4><div><h5>yè: </h5><span>night, dark; in night; by night</span></div>
    </div>
    <div>
      <h4>够: </h4><div><h5>gòu: </h5><span>enough, adequate</span></div>
    </div>
    <div>
      <h4>舜: </h4><div><h5>shùn: </h5><span>legendary ruler</span></div>
    </div>
    <h3>画11</h3>
    <div>
      <h4>夤: </h4><div><h5>yín: </h5><span>distant place; remote; deep</span></div>
    </div>
    <div>
      <h4>夥: </h4><div><h5>huǒ: </h5><span>companion; partner; assistant</span></div>
    </div>
    <div>
      <h4>舞: </h4><div><h5>wǔ: </h5><span>dance, posture, prance; brandish</span></div>
    </div>
    <h1>45: 大</h1>
    <div>
      <h4>大: </h4><div><h5>dà, dài, tài: </h5><span>big, great, vast, large, high</span></div>
    </div>
    <h3>画1</h3>
    <div>
      <h4>天: </h4><div><h5>tiān: </h5><span>sky, heaven; god, celestial</span></div>
    </div>
    <div>
      <h4>太: </h4><div><h5>tài: </h5><span>very, too, much; big; extreme</span></div>
    </div>
    <div>
      <h4>夫: </h4><div><h5>fū, fú: </h5><span>man, male adult, husband; those</span></div>
    </div>
    <div>
      <h4>夭: </h4><div><h5>yāo: </h5><span>young, fresh-looking; die young</span></div>
    </div>
    <h3>画2</h3>
    <div>
      <h4>央: </h4><div><h5>yāng: </h5><span>center, conclude, run out; beg</span></div>
    </div>
    <div>
      <h4>夯: </h4><div><h5>hāng, bèn: </h5><span>heavy load, burden; lift up</span></div>
    </div>
    <div>
      <h4>失: </h4><div><h5>shī: </h5><span>lose; make mistake, neglect</span></div>
    </div>
    <div>
      <h4>头: </h4><div><h5>tóu: </h5><span>head; top; chief, first; boss</span></div>
    </div>
    <h3>画3</h3>
    <div>
      <h4>夷: </h4><div><h5>yí: </h5><span>ancient barbarian tribes</span></div>
    </div>
    <div>
      <h4>夸: </h4><div><h5>kuā, kuà: </h5><span>extravagant, luxurious; handsome</span></div>
    </div>
    <div>
      <h4>夹: </h4><div><h5>jiā, jiá, gā: </h5><span>be wedged or inserted between</span></div>
    </div>
    <div>
      <h4>夺: </h4><div><h5>duó: </h5><span>take by force, rob, snatch</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>奄: </h4><div><h5>yǎn, yān: </h5><span>ere long; remain, tarry; feeble</span></div>
    </div>
    <div>
      <h4>奇: </h4><div><h5>qí, jī: </h5><span>strange, unusual, uncanny, occult</span></div>
    </div>
    <div>
      <h4>奈: </h4><div><h5>nài: </h5><span>but, how; bear, stand, endure</span></div>
    </div>
    <div>
      <h4>奉: </h4><div><h5>fèng: </h5><span>offer; receive; serve; respect</span></div>
    </div>
    <div>
      <h4>奋: </h4><div><h5>fèn: </h5><span>strive, exert effort; arouse</span></div>
    </div>
    <div>
      <h4>奔: </h4><div><h5>bēn, bèn: </h5><span>run fast, flee; rush about; run</span></div>
    </div>
    <h3>画6-8</h3>
    <div>
      <h4>奎: </h4><div><h5>kuí: </h5>
      <span>stride of man; one of the twenty-eight lunar mansions</span></div>
    </div>
    <div>
      <h4>奏: </h4><div><h5>zòu: </h5><span>memorialize emperor; report</span></div>
    </div>
    <div>
      <h4>契: </h4><div><h5>qì, qiè, xiè: </h5><span>deed, contract, bond; engrave</span></div>
    </div>
    <div>
      <h4>奕: </h4><div><h5>yì: </h5><span>in sequence, orderly; abundant</span></div>
    </div>
    <div>
      <h4>奖: </h4><div><h5>jiǎng: </h5><span>prize, reward; give award to</span></div>
    </div>
    <div>
      <h4>套: </h4><div><h5>tào: </h5><span>case, cover, wrapper, envelope</span></div>
    </div>
    <div>
      <h4>奚: </h4><div><h5>xī: </h5><span>where? what? how? why?; servant</span></div>
    </div>
    <div>
      <h4>奢: </h4><div><h5>shē: </h5><span>extravagant, wasteful; exaggerate</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>奠: </h4><div><h5>diàn: </h5><span>pay respect; settle</span></div>
    </div>
    <div>
      <h4>奥: </h4><div><h5>ào, yù: </h5><span>mysterious, obscure, profound</span></div>
    </div>
    <h1>46: 女</h1>
    <div>
      <h4>女: </h4><div><h5>nǚ, rǔ: </h5><span>woman, girl; feminine; rad. 38</span></div>
    </div>
    <h3>画2</h3>
    <div>
      <h4>奴: </h4><div><h5>nú: </h5><span>slave, servant</span></div>
    </div>
    <div>
      <h4>奶: </h4><div><h5>nǎi: </h5><span>milk; woman's breasts; nurse</span></div>
    </div>
    <h3>画3</h3>
    <div>
      <h4>奸: </h4><div><h5>jiān: </h5><span>crafty, villainous, false</span></div>
    </div>
    <div>
      <h4>她: </h4><div><h5>tā, jiě: </h5><span>she, her</span></div>
    </div>
    <div>
      <h4>好: </h4><div><h5>hǎo, hào: </h5><span>good, excellent, fine; well</span></div>
    </div>
    <div>
      <h4>如: </h4><div><h5>rú: </h5><span>if, supposing; as if; like, as</span></div>
    </div>
    <div>
      <h4>妃: </h4><div><h5>fēi, pèi: </h5><span>wife, spouse; imperial concubine</span></div>
    </div>
    <div>
      <h4>妄: </h4><div><h5>wàng: </h5><span>absurd, foolish, reckless; false</span></div>
    </div>
    <div>
      <h4>妆: </h4><div><h5>zhuāng: </h5><span>to adorn oneself, dress up, use make-up</span></div>
    </div>
    <div>
      <h4>妇: </h4><div><h5>fù: </h5><span>married women; woman; wife</span></div>
    </div>
    <div>
      <h4>妈: </h4><div><h5>mā: </h5><span>mother, mama</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>妍: </h4><div><h5>yán: </h5><span>beautiful, handsome; seductive</span></div>
    </div>
    <div>
      <h4>妒: </h4><div><h5>dù: </h5><span>jealous, envious</span></div>
    </div>
    <div>
      <h4>妓: </h4><div><h5>jì: </h5><span>prostitute</span></div>
    </div>
    <div>
      <h4>妖: </h4><div><h5>yāo: </h5><span>strange, weird, supernatural</span></div>
    </div>
    <div>
      <h4>妙: </h4><div><h5>miào: </h5><span>mysterious, subtle; exquisite</span></div>
    </div>
    <div>
      <h4>妞: </h4><div><h5>niū: </h5><span>girl</span></div>
    </div>
    <div>
      <h4>妤: </h4><div><h5>yú: </h5><span>beautiful, fair, handsome</span></div>
    </div>
    <div>
      <h4>妥: </h4><div><h5>tuǒ: </h5><span>satisfactory, appropriate</span></div>
    </div>
    <div>
      <h4>妨: </h4><div><h5>fáng: </h5><span>interfere with, impede, obstruct</span></div>
    </div>
    <div>
      <h4>妩: </h4><div><h5>wǔ: </h5><span>charming, enchanting</span></div>
    </div>
    <div>
      <h4>姊: </h4><div><h5>zǐ: </h5><span>elder sister</span></div>
    </div>
    <div>
      <h4>姒: </h4><div><h5>sì: </h5><span>wife of elder brother</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>妮: </h4><div><h5>nī: </h5><span>maid, servant girl; cute girl</span></div>
    </div>
    <div>
      <h4>妲: </h4><div><h5>dá: </h5><span>concubine of last ruler of the Shang dynasty</span></div>
    </div>
    <div>
      <h4>妳: </h4><div><h5>nǐ, nǎi: </h5><span>you (f.)</span></div>
    </div>
    <div>
      <h4>妹: </h4><div><h5>mèi: </h5><span>younger sister</span></div>
    </div>
    <div>
      <h4>妻: </h4><div><h5>qī, qì: </h5><span>wife</span></div>
    </div>
    <div>
      <h4>妾: </h4><div><h5>qiè: </h5><span>concubine</span></div>
    </div>
    <div>
      <h4>姆: </h4><div><h5>mǔ: </h5><span>child's governess; matron</span></div>
    </div>
    <div>
      <h4>始: </h4><div><h5>shǐ: </h5><span>begin, start; then, only then</span></div>
    </div>
    <div>
      <h4>姐: </h4><div><h5>jiě: </h5><span>elder sister, young lady</span></div>
    </div>
    <div>
      <h4>姑: </h4><div><h5>gū: </h5><span>father's sister; husband's mother</span></div>
    </div>
    <div>
      <h4>姓: </h4><div><h5>xìng: </h5><span>one's family name; clan, people</span></div>
    </div>
    <div>
      <h4>委: </h4><div><h5>wěi, wēi: </h5><span>appoint, send, commission</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>姗: </h4><div><h5>shān, shàn: </h5><span>slander; ridicule; proceed slowly</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>姚: </h4><div><h5>yáo: </h5><span>handsome, elegant; surname</span></div>
    </div>
    <div>
      <h4>姜: </h4><div><h5>jiāng: </h5><span>surname; ginger</span></div>
    </div>
    <div>
      <h4>姝: </h4><div><h5>shū: </h5><span>a beautiful girl</span></div>
    </div>
    <div>
      <h4>姣: </h4><div><h5>jiāo, xiáo: </h5><span>beautiful, handsome, pretty</span></div>
    </div>
    <div>
      <h4>姥: </h4><div><h5>mǔ, lǎo: </h5><span>maternal grandmother; midwife</span></div>
    </div>
    <div>
      <h4>姨: </h4><div><h5>yí: </h5><span>mother/wife's sister; concubine</span></div>
    </div>
    <div>
      <h4>姻: </h4><div><h5>yīn: </h5><span>relatives by marriage</span></div>
    </div>
    <div>
      <h4>姿: </h4><div><h5>zī: </h5><span>one's manner, carriage, bearing</span></div>
    </div>
    <div>
      <h4>威: </h4><div><h5>wēi: </h5><span>pomp, power; powerful; dominate</span></div>
    </div>
    <div>
      <h4>娃: </h4><div><h5>wá: </h5><span>baby; doll; pretty girl</span></div>
    </div>
    <div>
      <h4>娄: </h4><div><h5>lóu: </h5><span>surname; a constellation; to wear</span></div>
    </div>
    <div>
      <h4>娇: </h4><div><h5>jiāo: </h5><span>seductive and loveable; tender</span></div>
    </div>
    <div>
      <h4>娜: </h4><div><h5>nà, nuó: </h5><span>elegant, graceful, delicate</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>姬: </h4><div><h5>jī: </h5><span>beauty; imperial concubine</span></div>
    </div>
    <div>
      <h4>娉: </h4><div><h5>pīng: </h5><span>beautiful, attractive, charming, graceful</span></div>
    </div>
    <div>
      <h4>娑: </h4><div><h5>suō: </h5><span>dance, frolic; lounge; saunter</span></div>
    </div>
    <div>
      <h4>娓: </h4><div><h5>wěi: </h5><span>comply; complying, agreeable</span></div>
    </div>
    <div>
      <h4>娘: </h4><div><h5>niáng: </h5><span>mother; young girl; woman; wife</span></div>
    </div>
    <div>
      <h4>娟: </h4><div><h5>juān: </h5><span>beautiful, graceful</span></div>
    </div>
    <div>
      <h4>娣: </h4><div><h5>dì: </h5><span>younger sister, sister-in-law</span></div>
    </div>
    <div>
      <h4>娥: </h4><div><h5>é: </h5><span>be beautiful; good; surname</span></div>
    </div>
    <div>
      <h4>娩: </h4><div><h5>miǎn: </h5><span>give birth child; complaisant</span></div>
    </div>
    <div>
      <h4>娱: </h4><div><h5>yú: </h5><span>pleasure, enjoyment, amusement</span></div>
    </div>
    <div>
      <h4>娴: </h4><div><h5>xián: </h5><span>elegant, refined; skillful</span></div>
    </div>
    <div>
      <h4>婀: </h4><div><h5>ē: </h5><span>be beautiful, be graceful</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>娶: </h4><div><h5>qǔ: </h5><span>marry, take wife</span></div>
    </div>
    <div>
      <h4>娼: </h4><div><h5>chāng: </h5><span>prostitute, harlot</span></div>
    </div>
    <div>
      <h4>婆: </h4><div><h5>pó: </h5><span>old woman; grandmother</span></div>
    </div>
    <div>
      <h4>婉: </h4><div><h5>wǎn: </h5><span>amiable, congenial; restrained</span></div>
    </div>
    <div>
      <h4>婊: </h4><div><h5>biǎo: </h5><span>whore, prostitute</span></div>
    </div>
    <div>
      <h4>婚: </h4><div><h5>hūn: </h5><span>get married; marriage, wedding</span></div>
    </div>
    <div>
      <h4>婢: </h4><div><h5>bì: </h5><span>servant girl; your servant</span></div>
    </div>
    <div>
      <h4>婪: </h4><div><h5>lán: </h5><span>covet; covetous, avaricious</span></div>
    </div>
    <div>
      <h4>婬: </h4><div><h5>yín: </h5><span>obscene, licentious, lewd</span></div>
    </div>
    <div>
      <h4>婴: </h4><div><h5>yīng: </h5><span>baby, infant; bother</span></div>
    </div>
    <div>
      <h4>婵: </h4><div><h5>chán: </h5><span>beautiful, lovely, pretty, graceful</span></div>
    </div>
    <div>
      <h4>婶: </h4><div><h5>shěn: </h5><span>wife of father's younger brother</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>婷: </h4><div><h5>tíng: </h5><span>pretty; attractive; graceful</span></div>
    </div>
    <div>
      <h4>婿: </h4><div><h5>xù: </h5><span>son-in-law; husband</span></div>
    </div>
    <div>
      <h4>媄: </h4><div><h5>měi: </h5><span></span></div>
    </div>
    <div>
      <h4>媒: </h4><div><h5>méi: </h5><span>go-between, matchmaker; medium</span></div>
    </div>
    <div>
      <h4>媚: </h4><div><h5>mèi: </h5><span>charming, attractive; flatter</span></div>
    </div>
    <div>
      <h4>媛: </h4><div><h5>yuàn, yuán: </h5><span>beauty, beautiful woman</span></div>
    </div>
    <div>
      <h4>嫂: </h4><div><h5>sǎo: </h5><span>sister-in-law, elder brother's wife</span></div>
    </div>
    <h3>画10</h3>
    <div>
      <h4>媲: </h4><div><h5>pì: </h5><span>marry off, pair, match; compare</span></div>
    </div>
    <div>
      <h4>媳: </h4><div><h5>xí: </h5><span>daughter-in-law</span></div>
    </div>
    <div>
      <h4>嫁: </h4><div><h5>jià: </h5><span>to marry, give a daughter in marriage</span></div>
    </div>
    <div>
      <h4>嫉: </h4><div><h5>jí: </h5><span>jealousy; be jealous of</span></div>
    </div>
    <div>
      <h4>嫌: </h4><div><h5>xián: </h5><span>hate, detest; suspect; criticize</span></div>
    </div>
    <h3>画11-14</h3>
    <div>
      <h4>嫖: </h4><div><h5>piáo, piāo: </h5><span>patronize prostitutes, frequent</span></div>
    </div>
    <div>
      <h4>嫡: </h4><div><h5>dí: </h5><span>legal wife, child of legal wife</span></div>
    </div>
    <div>
      <h4>嫣: </h4><div><h5>yān: </h5><span>charming, fascinating; gay</span></div>
    </div>
    <div>
      <h4>嫦: </h4><div><h5>cháng: </h5><span>name of a moon goddess</span></div>
    </div>
    <div>
      <h4>嫩: </h4><div><h5>nèn: </h5><span>soft, tender, delicate; young</span></div>
    </div>
    <div>
      <h4>嬉: </h4><div><h5>xī: </h5><span>enjoy; play, amuse oneself</span></div>
    </div>
    <div>
      <h4>嬴: </h4><div><h5>yíng: </h5><span>to win; to have a surplus; surname</span></div>
    </div>
    <div>
      <h4>嬷: </h4><div><h5>mó: </h5><span>mother</span></div>
    </div>
    <h3>画16</h3>
    <div>
      <h4>嬿: </h4><div><h5>yàn: </h5><span>lovely</span></div>
    </div>
    <h1>47: 子</h1>
    <div>
      <h4>子: </h4><div><h5>zǐ: </h5>
      <span>offspring, child; fruit, seed of; 1st terrestrial branch</span></div>
    </div>
    <div>
      <h4>孑: </h4><div><h5>jié: </h5><span>remaining, left-over; lonely</span></div>
    </div>
    <h3>画1-3</h3>
    <div>
      <h4>孔: </h4><div><h5>kǒng: </h5><span>opening, hole, orifice; great</span></div>
    </div>
    <div>
      <h4>孕: </h4><div><h5>yùn: </h5><span>be pregnant, pregnancy</span></div>
    </div>
    <div>
      <h4>字: </h4><div><h5>zì: </h5><span>letter, character, word</span></div>
    </div>
    <div>
      <h4>存: </h4><div><h5>cún: </h5><span>exist, live, be; survive; remain</span></div>
    </div>
    <div>
      <h4>孙: </h4><div><h5>sūn, xùn: </h5><span>grandchild, descendent; surname</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>孚: </h4><div><h5>fú: </h5><span>brood over eggs; have confidence</span></div>
    </div>
    <div>
      <h4>孜: </h4><div><h5>zī: </h5><span>be as diligent as possible</span></div>
    </div>
    <div>
      <h4>孝: </h4><div><h5>xiào: </h5><span>filial piety, obedience; mourning</span></div>
    </div>
    <h3>画5-14</h3>
    <div>
      <h4>孟: </h4><div><h5>mèng: </h5><span>first in series; great, eminent</span></div>
    </div>
    <div>
      <h4>季: </h4><div><h5>jì: </h5><span>quarter of year; season; surname</span></div>
    </div>
    <div>
      <h4>孤: </h4><div><h5>gū: </h5><span>orphan, fatherless; solitary</span></div>
    </div>
    <div>
      <h4>学: </h4><div><h5>xué: </h5><span>learning, knowledge; school</span></div>
    </div>
    <div>
      <h4>孩: </h4><div><h5>hái: </h5><span>baby, child; children</span></div>
    </div>
    <div>
      <h4>孰: </h4><div><h5>shú: </h5><span>who? which? what? which one?</span></div>
    </div>
    <div>
      <h4>孵: </h4><div><h5>fū: </h5><span>sit on eggs, hatch</span></div>
    </div>
    <div>
      <h4>孺: </h4><div><h5>rú: </h5><span>child; blood relation; affection</span></div>
    </div>
    <h3>画16</h3>
    <div>
      <h4>孽: </h4><div><h5>niè: </h5><span>evil; son of concubine; ghost</span></div>
    </div>
    <h1>48: 宀</h1>
    <h3>画2-3</h3>
    <div>
      <h4>宁: </h4><div><h5>níng, nìng: </h5><span>calm, peaceful, serene; healthy</span></div>
    </div>
    <div>
      <h4>它: </h4><div><h5>tā: </h5><span>it; other</span></div>
    </div>
    <div>
      <h4>宅: </h4><div><h5>zhái: </h5><span>residence, dwelling, home; grave</span></div>
    </div>
    <div>
      <h4>宇: </h4><div><h5>yǔ: </h5><span>house; building, structure; eaves</span></div>
    </div>
    <div>
      <h4>守: </h4><div><h5>shǒu: </h5><span>defend, protect, guard, conserve</span></div>
    </div>
    <div>
      <h4>安: </h4><div><h5>ān: </h5><span>peaceful, tranquil, quiet</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>宋: </h4><div><h5>sòng: </h5><span>Song dynasty; surname</span></div>
    </div>
    <div>
      <h4>完: </h4><div><h5>wán: </h5><span>complete, finish, settle; whole</span></div>
    </div>
    <div>
      <h4>宏: </h4><div><h5>hóng: </h5><span>wide, spacious, great, vast</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>宓: </h4><div><h5>mì, fú: </h5><span>quiet, silent; in good health</span></div>
    </div>
    <div>
      <h4>宕: </h4><div><h5>dàng: </h5><span>stone quarry; cave dwelling</span></div>
    </div>
    <div>
      <h4>宗: </h4><div><h5>zōng: </h5><span>lineage, ancestry; ancestor, clan</span></div>
    </div>
    <div>
      <h4>官: </h4><div><h5>guān: </h5><span>official, public servant</span></div>
    </div>
    <div>
      <h4>宙: </h4><div><h5>zhòu: </h5><span>time as concept; infinite time</span></div>
    </div>
    <div>
      <h4>定: </h4><div><h5>dìng: </h5><span>decide, settle, fix</span></div>
    </div>
    <div>
      <h4>宛: </h4><div><h5>wǎn, yuān: </h5><span>seem, as if, crooked</span></div>
    </div>
    <div>
      <h4>宜: </h4><div><h5>yí: </h5><span>suitable, right, fitting, proper</span></div>
    </div>
    <div>
      <h4>宝: </h4><div><h5>bǎo: </h5><span>treasure, jewel; precious, rare</span></div>
    </div>
    <div>
      <h4>实: </h4><div><h5>shí: </h5><span>real, true; honest, sincere</span></div>
    </div>
    <div>
      <h4>宠: </h4><div><h5>chǒng: </h5><span>favorite, concubine; favor</span></div>
    </div>
    <div>
      <h4>审: </h4><div><h5>shěn: </h5><span>examine, investigate; judge</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>客: </h4><div><h5>kè: </h5><span>guest, traveller; customer</span></div>
    </div>
    <div>
      <h4>宣: </h4><div><h5>xuān: </h5><span>declare, announce, proclaim</span></div>
    </div>
    <div>
      <h4>室: </h4><div><h5>shì: </h5><span>room, home, house, chamber</span></div>
    </div>
    <div>
      <h4>宥: </h4><div><h5>yòu: </h5><span>forgive, pardon, indulge</span></div>
    </div>
    <div>
      <h4>宦: </h4><div><h5>huàn: </h5><span>officialdom, government official</span></div>
    </div>
    <div>
      <h4>宪: </h4><div><h5>xiàn: </h5><span>constitution, statute, law</span></div>
    </div>
    <div>
      <h4>宫: </h4><div><h5>gōng: </h5><span>palace</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>宰: </h4><div><h5>zǎi: </h5><span>to slaughter; to rule</span></div>
    </div>
    <div>
      <h4>害: </h4><div><h5>hài: </h5><span>injure, harm; destroy, kill</span></div>
    </div>
    <div>
      <h4>宴: </h4><div><h5>yàn: </h5><span>to entertain, feast; a feast, banquet</span></div>
    </div>
    <div>
      <h4>宵: </h4><div><h5>xiāo: </h5><span>night, evening, dark</span></div>
    </div>
    <div>
      <h4>家: </h4><div><h5>jiā, jia, jie: </h5><span>house, home, residence; family</span></div>
    </div>
    <div>
      <h4>宸: </h4><div><h5>chén: </h5><span>imperial; imperial palace</span></div>
    </div>
    <div>
      <h4>容: </h4><div><h5>róng: </h5><span>looks, appearance; figure, form</span></div>
    </div>
    <div>
      <h4>宽: </h4><div><h5>kuān: </h5><span>broad, wide; spacious, vast</span></div>
    </div>
    <div>
      <h4>宾: </h4><div><h5>bīn: </h5><span>guest, visitor; surname; submit</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>宿: </h4><div><h5>sù, xiǔ, xiù: </h5>
      <span>stop, rest, lodge, stay overnight; constellation</span></div>
    </div>
    <div>
      <h4>寂: </h4><div><h5>jì: </h5><span>still, silent, quiet, desolate</span></div>
    </div>
    <div>
      <h4>寄: </h4><div><h5>jì: </h5><span>send, transmit, mail; rely on</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>寅: </h4><div><h5>yín: </h5>
      <span>to respect, reverence; respectfully; 3rd terrestrial branch</span></div>
    </div>
    <div>
      <h4>密: </h4><div><h5>mì: </h5><span>dense, thick, close; intimate</span></div>
    </div>
    <div>
      <h4>寇: </h4><div><h5>kòu: </h5><span>bandits, thieves; enemy; invade</span></div>
    </div>
    <h3>画9-10</h3>
    <div>
      <h4>富: </h4><div><h5>fù: </h5><span>abundant, ample; rich, wealthy</span></div>
    </div>
    <div>
      <h4>寐: </h4><div><h5>mèi: </h5><span>sleep; be asleep</span></div>
    </div>
    <div>
      <h4>寒: </h4><div><h5>hán: </h5><span>cold, wintry, chilly</span></div>
    </div>
    <div>
      <h4>寓: </h4><div><h5>yù: </h5><span>residence; lodge; dwell</span></div>
    </div>
    <div>
      <h4>寝: </h4><div><h5>qǐn: </h5><span>sleep, rest; bed chamber</span></div>
    </div>
    <div>
      <h4>寞: </h4><div><h5>mò: </h5><span>silent, still, lonely, solitary</span></div>
    </div>
    <h3>画11-13</h3>
    <div>
      <h4>察: </h4><div><h5>chá: </h5><span>examine, investigate; notice</span></div>
    </div>
    <div>
      <h4>寡: </h4><div><h5>guǎ: </h5><span>widowed; alone, friendless</span></div>
    </div>
    <div>
      <h4>寤: </h4><div><h5>wù: </h5><span>few, scarce; empty, deserted</span></div>
    </div>
    <div>
      <h4>寥: </h4><div><h5>liáo: </h5><span>few, scarce; empty, deserted</span></div>
    </div>
    <div>
      <h4>寨: </h4><div><h5>zhài: </h5><span>stockade, stronghold, outpost; brothel</span></div>
    </div>
    <div>
      <h4>寮: </h4><div><h5>liáo: </h5><span>shanty, hut, shack</span></div>
    </div>
    <div>
      <h4>寰: </h4><div><h5>huán: </h5><span>great domain, country, world</span></div>
    </div>
    <h1>49: 寸</h1>
    <div>
      <h4>寸: </h4><div><h5>cùn: </h5><span>inch; small, tiny; KangXi radical 41</span></div>
    </div>
    <h3>画2-7</h3>
    <div>
      <h4>对: </h4><div><h5>duì: </h5><span>correct, right; facing, opposed</span></div>
    </div>
    <div>
      <h4>寺: </h4><div><h5>sì: </h5><span>court, office; temple, monastery</span></div>
    </div>
    <div>
      <h4>寻: </h4><div><h5>xún: </h5><span>seek, search, look for; ancient</span></div>
    </div>
    <div>
      <h4>导: </h4><div><h5>dǎo: </h5><span>direct, guide, lead, conduct</span></div>
    </div>
    <div>
      <h4>寿: </h4><div><h5>shòu: </h5><span>old age, long life; lifespan</span></div>
    </div>
    <div>
      <h4>封: </h4><div><h5>fēng: </h5><span>letter, envelope; feudal</span></div>
    </div>
    <div>
      <h4>将: </h4><div><h5>jiāng, jiàng: </h5><span>will, going to, future; general</span></div>
    </div>
    <div>
      <h4>射: </h4><div><h5>shè, yè, yì: </h5><span>shoot, eject, issue forth, emit</span></div>
    </div>
    <h3>画8-9</h3>
    <div>
      <h4>尉: </h4><div><h5>wèi, yù: </h5><span>officer, military rank</span></div>
    </div>
    <div>
      <h4>尊: </h4><div><h5>zūn: </h5><span>respect, revere, venerate; honor</span></div>
    </div>
    <h1>50: 小</h1>
    <div>
      <h4>小: </h4><div><h5>xiǎo: </h5><span>small, tiny, insignificant</span></div>
    </div>
    <h3>画1-7</h3>
    <div>
      <h4>少: </h4><div><h5>shǎo, shào: </h5><span>few, less, inadequate</span></div>
    </div>
    <div>
      <h4>尔: </h4><div><h5>ěr: </h5><span>you; that, those; final particle</span></div>
    </div>
    <div>
      <h4>尖: </h4><div><h5>jiān: </h5><span>sharp, pointed, acute, keen</span></div>
    </div>
    <div>
      <h4>尘: </h4><div><h5>chén: </h5><span>dust, dirt, ashes, cinders</span></div>
    </div>
    <div>
      <h4>尚: </h4><div><h5>shàng: </h5><span>still, yet; even; fairly, rather</span></div>
    </div>
    <div>
      <h4>忝: </h4><div><h5>tiǎn: </h5><span>disgraced; ashamed; self-deprecating</span></div>
    </div>
    <div>
      <h4>尝: </h4><div><h5>cháng: </h5><span>taste; experience, experiment</span></div>
    </div>
    <div>
      <h4>恭: </h4><div><h5>gōng: </h5><span>respectful, polite, reverent</span></div>
    </div>
    <h3>画11</h3>
    <div>
      <h4>慕: </h4><div><h5>mù: </h5><span>long for, desire; admire</span></div>
    </div>
    <h1>51: 尢</h1>
    <div>
      <h4>尤: </h4><div><h5>yóu: </h5><span>especially, particularly</span></div>
    </div>
    <div>
      <h4>尪: </h4><div><h5>wāng: </h5><span>lame</span></div>
    </div>
    <div>
      <h4>尬: </h4><div><h5>gà: </h5><span>limp, staggering gait; embarrass</span></div>
    </div>
    <div>
      <h4>就: </h4><div><h5>jiù: </h5><span>just, simply; to come, go to; to approach, near</span></div>
    </div>
    <div>
      <h4>尴: </h4><div><h5>gān: </h5><span>embarrassed; ill at ease</span></div>
    </div>
    <h1>52: 尸</h1>
    <div>
      <h4>尸: </h4><div><h5>shī: </h5>
      <span>
        corpse; to impersonate the dead; to preside; KangXi radical 44
      </span></div>
    </div>
    <h3>画1-3</h3>
    <div>
      <h4>尹: </h4><div><h5>yǐn: </h5><span>govern; oversee; director</span></div>
    </div>
    <div>
      <h4>尺: </h4><div><h5>chǐ, chě: </h5><span>Chinese measure approx. 'foot'</span></div>
    </div>
    <div>
      <h4>尻: </h4><div><h5>kāo: </h5><span>end of spine; buttocks, sacrum</span></div>
    </div>
    <div>
      <h4>尼: </h4><div><h5>ní: </h5><span>Buddhist nun; transliteration</span></div>
    </div>
    <div>
      <h4>尽: </h4><div><h5>jìn, jǐn: </h5><span>exhaust, use up; deplete</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>尾: </h4><div><h5>wěi, yǐ: </h5><span>tail, extremity; end, stern</span></div>
    </div>
    <div>
      <h4>尿: </h4><div><h5>niào, suī: </h5><span>urine; urinate</span></div>
    </div>
    <div>
      <h4>局: </h4><div><h5>jú: </h5><span>bureau, office; circumstance</span></div>
    </div>
    <div>
      <h4>屁: </h4><div><h5>pì: </h5><span>break wind; fart; buttocks</span></div>
    </div>
    <div>
      <h4>层: </h4><div><h5>céng: </h5><span>storey, layer, floor, stratum</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>屄: </h4><div><h5>bī: </h5><span>the vagina</span></div>
    </div>
    <div>
      <h4>居: </h4><div><h5>jū: </h5><span>live, dwell, reside, sit</span></div>
    </div>
    <div>
      <h4>屈: </h4><div><h5>qū: </h5><span>bend, flex; bent, crooked; crouch</span></div>
    </div>
    <div>
      <h4>屉: </h4><div><h5>tì: </h5><span>drawer; tray; pad; screen</span></div>
    </div>
    <div>
      <h4>届: </h4><div><h5>jiè: </h5><span>numerary adjunct for time, term</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>屋: </h4><div><h5>wū: </h5><span>house; room; building, shelter</span></div>
    </div>
    <div>
      <h4>屎: </h4><div><h5>shǐ: </h5><span>excrement, dung</span></div>
    </div>
    <div>
      <h4>屏: </h4><div><h5>píng, bǐng: </h5><span>folding screen, shield</span></div>
    </div>
    <h3>画7-12</h3>
    <div>
      <h4>屐: </h4><div><h5>jī: </h5><span>wooden shoes, clogs</span></div>
    </div>
    <div>
      <h4>屑: </h4><div><h5>xiè: </h5><span>bits, scraps, crumbs, fragments</span></div>
    </div>
    <div>
      <h4>展: </h4><div><h5>zhǎn: </h5><span>open, unfold; stretch, extend</span></div>
    </div>
    <div>
      <h4>屠: </h4><div><h5>tú: </h5><span>butcher, slaughter, massacre</span></div>
    </div>
    <div>
      <h4>属: </h4><div><h5>shǔ, zhǔ: </h5><span>class, category, type; belong to</span></div>
    </div>
    <div>
      <h4>屡: </h4><div><h5>lǚ: </h5><span>frequently, often, again and again</span></div>
    </div>
    <div>
      <h4>履: </h4><div><h5>lǚ: </h5><span>footwear, shoes; walk on, tread</span></div>
    </div>
    <h1>53: 屮</h1>
    <div>
      <h4>屯: </h4><div><h5>tún, zhūn: </h5><span>village, hamlet; camp; station</span></div>
    </div>
    <h1>54: 山</h1>
    <div>
      <h4>山: </h4><div><h5>shān: </h5><span>mountain, hill, peak</span></div>
    </div>
    <h3>画3</h3>
    <div>
      <h4>屹: </h4><div><h5>yì: </h5><span>to rise high; to stand erect</span></div>
    </div>
    <div>
      <h4>屿: </h4><div><h5>yǔ: </h5><span>island</span></div>
    </div>
    <div>
      <h4>岁: </h4><div><h5>suì: </h5><span>year; age; harvest</span></div>
    </div>
    <div>
      <h4>岂: </h4><div><h5>qǐ, kǎi: </h5><span>how? what?</span></div>
    </div>
    <div>
      <h4>岌: </h4><div><h5>jí: </h5><span>perilous, hazardous; high, steep</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>岐: </h4><div><h5>qí: </h5><span>high; majestic; fork in road</span></div>
    </div>
    <div>
      <h4>岑: </h4><div><h5>cén: </h5><span>steep, precipitous; peak</span></div>
    </div>
    <div>
      <h4>岔: </h4><div><h5>chà: </h5><span>diverge, branch off; fork in road</span></div>
    </div>
    <div>
      <h4>岖: </h4><div><h5>qū: </h5><span>steep, sheer; rugged, rough</span></div>
    </div>
    <div>
      <h4>岗: </h4><div><h5>gǎng: </h5><span>post; position</span></div>
    </div>
    <div>
      <h4>岚: </h4><div><h5>lán: </h5><span>mountain mist, mountain haze</span></div>
    </div>
    <div>
      <h4>岛: </h4><div><h5>dǎo: </h5><span>island</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>岩: </h4><div><h5>yán: </h5><span>cliff; rocks; mountain</span></div>
    </div>
    <div>
      <h4>岫: </h4><div><h5>xiù: </h5><span>mountain peak; cave, cavern</span></div>
    </div>
    <div>
      <h4>岭: </h4><div><h5>lǐng, líng: </h5><span>mountain ridge, mountain peak</span></div>
    </div>
    <div>
      <h4>岱: </h4><div><h5>dài: </h5><span>Daishan, one of the Five Sacred Mountains in China</span></div>
    </div>
    <div>
      <h4>岳: </h4><div><h5>yuè: </h5><span>mountain peak; surname</span></div>
    </div>
    <div>
      <h4>岸: </h4><div><h5>àn: </h5><span>bank, shore; beach, coast</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>峋: </h4><div><h5>xún: </h5>
      <span>
        ranges of hills stretching on beyond another irregular peaks
      </span></div>
    </div>
    <div>
      <h4>峙: </h4><div><h5>zhì, shì: </h5><span>stand erect, stand up; pile up</span></div>
    </div>
    <div>
      <h4>峡: </h4><div><h5>xiá: </h5><span>gorge, strait, ravine; isthmus</span></div>
    </div>
    <div>
      <h4>峥: </h4><div><h5>zhēng: </h5><span>high, lofty, noble; steep, perilous</span></div>
    </div>
    <div>
      <h4>峦: </h4><div><h5>luán: </h5><span>mountain range; pointed mountain</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>峨: </h4><div><h5>é: </h5><span>lofty</span></div>
    </div>
    <div>
      <h4>峭: </h4><div><h5>qiào: </h5><span>steep, precipitous, rugged</span></div>
    </div>
    <div>
      <h4>峰: </h4><div><h5>fēng: </h5><span>peak, summit; hump of camel</span></div>
    </div>
    <div>
      <h4>峻: </h4><div><h5>jùn: </h5><span>high, steep, towering; stern</span></div>
    </div>
    <div>
      <h4>崁: </h4><div><h5>kàn: </h5><span>a place in Taiwan Tainan</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>崇: </h4><div><h5>chóng: </h5><span>esteem, honor, revere, venerate</span></div>
    </div>
    <div>
      <h4>崎: </h4><div><h5>qí: </h5><span>rough, uneven, jagged, rugged</span></div>
    </div>
    <div>
      <h4>崔: </h4><div><h5>cuī: </h5><span>high, lofty, towering; surname</span></div>
    </div>
    <div>
      <h4>崖: </h4><div><h5>yá: </h5><span>cliff, precipice; precipitous</span></div>
    </div>
    <div>
      <h4>崚: </h4><div><h5>líng, lénɡ: </h5><span>hilly, steep, rugged</span></div>
    </div>
    <div>
      <h4>崛: </h4><div><h5>jué: </h5><span>towering, eminent; rise abruptly</span></div>
    </div>
    <div>
      <h4>崧: </h4><div><h5>sōng: </h5><span>high mountain; lofty, eminent</span></div>
    </div>
    <div>
      <h4>崩: </h4><div><h5>bēng: </h5><span>rupture, split apart, collapse</span></div>
    </div>
    <div>
      <h4>崭: </h4><div><h5>zhǎn, chán: </h5><span>high, steep, precipitous; new</span></div>
    </div>
    <h3>画9-16</h3>
    <div>
      <h4>崴: </h4><div><h5>wǎi, wēi: </h5><span>high, lofty; precipitous</span></div>
    </div>
    <div>
      <h4>崽: </h4><div><h5>zǎi: </h5><span>a child, a servant; a diminutive</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>嵋: </h4><div><h5>méi: </h5><span>Omei mountain in Sichuan</span></div>
    </div>
    <div>
      <h4>嵌: </h4><div><h5>qiàn, kàn: </h5><span>inlay, set in; fall into; rugged</span></div>
    </div>
    <div>
      <h4>嵘: </h4><div><h5>róng: </h5><span>high, steep; lofty, towering</span></div>
    </div>
    <div>
      <h4>嵩: </h4><div><h5>sōng: </h5>
      <span>high, lofty; one of the 5 peaks, situated in Hunan</span></div>
    </div>
    <div>
      <h4>嶙: </h4><div><h5>lín: </h5><span>precipitous</span></div>
    </div>
    <div>
      <h4>巅: </h4><div><h5>diān: </h5><span>summit of mountain, mountain top</span></div>
    </div>
    <h3>画17</h3>
    <div>
      <h4>巍: </h4><div><h5>wēi: </h5><span>high, lofty, majestic, eminent</span></div>
    </div>
    <h1>55: 巛</h1>
    <div>
      <h4>巡: </h4><div><h5>xún: </h5><span>patrol, go on circuit, cruise</span></div>
    </div>
    <div>
      <h4>巢: </h4><div><h5>cháo: </h5><span>nest, living quarter in tree</span></div>
    </div>
    <h1>56: 川</h1>
    <div>
      <h4>川: </h4><div><h5>chuān: </h5><span>stream, river; flow; boil</span></div>
    </div>
    <div>
      <h4>州: </h4><div><h5>zhōu: </h5><span>administrative division, state</span></div>
    </div>
    <h1>57: 工</h1>
    <div>
      <h4>工: </h4><div><h5>gōng: </h5><span>labor, work; worker, laborer</span></div>
    </div>
    <div>
      <h4>巨: </h4><div><h5>jù: </h5><span>large, great, enormous; chief</span></div>
    </div>
    <div>
      <h4>左: </h4><div><h5>zuǒ: </h5><span>left; east; unorthodox, improper</span></div>
    </div>
    <div>
      <h4>巧: </h4><div><h5>qiǎo: </h5><span>skillful, ingenious, clever</span></div>
    </div>
    <div>
      <h4>巩: </h4><div><h5>gǒng: </h5><span>bind; firm, secure, strong</span></div>
    </div>
    <div>
      <h4>巫: </h4><div><h5>wū: </h5><span>wizard, sorcerer, witch, shaman</span></div>
    </div>
    <div>
      <h4>差: </h4><div><h5>chà, chā, chāi, cī: </h5>
      <span>to differ; different, wrong; nearly, almost; an officer</span></div>
    </div>
    <h1>58: 己</h1>
    <div>
      <h4>己: </h4><div><h5>jǐ: </h5><span>self, oneself; personal, private; 6th heavenly stem</span></div>
    </div>
    <div>
      <h4>已: </h4><div><h5>yǐ: </h5><span>already; finished; stop</span></div>
    </div>
    <h1>59: 巳</h1>
    <div>
      <h4>巳: </h4><div><h5>sì: </h5><span>the hours from 9 to 11; 6th terrestrial branch</span></div>
    </div>
    <div>
      <h4>巴: </h4><div><h5>bā: </h5><span>greatly desire, anxiously hope</span></div>
    </div>
    <div>
      <h4>巷: </h4><div><h5>xiàng, hàng: </h5><span>alley, lane</span></div>
    </div>
    <h1>60: 巾</h1>
    <div>
      <h4>巾: </h4><div><h5>jīn: </h5><span>kerchief; towel; turban; KangXi radical number 50</span></div>
    </div>
    <h3>画1-3</h3>
    <div>
      <h4>巿: </h4><div><h5>fú: </h5><span>revolve, make circuit, turn</span></div>
    </div>
    <div>
      <h4>币: </h4><div><h5>bì: </h5><span>currency, coins, legal tender</span></div>
    </div>
    <div>
      <h4>市: </h4><div><h5>shì: </h5><span>market, fair; city, town; trade</span></div>
    </div>
    <div>
      <h4>布: </h4><div><h5>bù: </h5><span>cotton cloth, textiles, linen</span></div>
    </div>
    <div>
      <h4>帅: </h4><div><h5>shuài: </h5><span>commander, commander-in-chief</span></div>
    </div>
    <div>
      <h4>帆: </h4><div><h5>fān: </h5><span>sail; boat</span></div>
    </div>
    <div>
      <h4>师: </h4><div><h5>shī: </h5><span>teacher, master, specialist</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>希: </h4><div><h5>xī: </h5><span>rare; hope, expect, strive for</span></div>
    </div>
    <div>
      <h4>帐: </h4><div><h5>zhàng: </h5><span>tent; screen, mosquito net</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>帑: </h4><div><h5>tǎng, nú: </h5><span>a treasury; public funds</span></div>
    </div>
    <div>
      <h4>帕: </h4><div><h5>pà: </h5><span>turban, kerchief, veil; wrap</span></div>
    </div>
    <div>
      <h4>帖: </h4><div><h5>tiè, tiě, tiē: </h5><span>invitation card; notice</span></div>
    </div>
    <div>
      <h4>帘: </h4><div><h5>lián: </h5><span>flag-sign of a tavern</span></div>
    </div>
    <div>
      <h4>帚: </h4><div><h5>zhǒu: </h5><span>broom, broomstick</span></div>
    </div>
    <div>
      <h4>帛: </h4><div><h5>bó: </h5><span>silks, fabrics; wealth, property</span></div>
    </div>
    <div>
      <h4>帜: </h4><div><h5>zhì: </h5><span>flag, pennant; sign; fasten</span></div>
    </div>
    <h3>画6-7</h3>
    <div>
      <h4>帝: </h4><div><h5>dì: </h5><span>supreme ruler, emperor; god</span></div>
    </div>
    <div>
      <h4>带: </h4><div><h5>dài: </h5><span>belt, girdle, band, strap, zone</span></div>
    </div>
    <div>
      <h4>帮: </h4><div><h5>bāng: </h5><span>help, assist; defend; shoe upper</span></div>
    </div>
    <div>
      <h4>席: </h4><div><h5>xí: </h5><span>seat; mat; take seat; banquet</span></div>
    </div>
    <h3>画8-9</h3>
    <div>
      <h4>帷: </h4><div><h5>wéi: </h5><span>tent; curtain, screen</span></div>
    </div>
    <div>
      <h4>常: </h4><div><h5>cháng: </h5><span>common, normal, frequent, regular</span></div>
    </div>
    <div>
      <h4>帼: </h4><div><h5>guó: </h5><span>women's headgear; mourning cap</span></div>
    </div>
    <div>
      <h4>帽: </h4><div><h5>mào: </h5><span>hat, cap; cap-like tops</span></div>
    </div>
    <div>
      <h4>幄: </h4><div><h5>wò: </h5><span>tent; mosquito net</span></div>
    </div>
    <div>
      <h4>幅: </h4><div><h5>fú: </h5><span>piece, strip, breadth of, hem</span></div>
    </div>
    <h3>画10-12</h3>
    <div>
      <h4>幌: </h4><div><h5>huǎng: </h5><span>curtain, cloth screen</span></div>
    </div>
    <div>
      <h4>幕: </h4><div><h5>mù: </h5><span>curtain, screen, tent</span></div>
    </div>
    <div>
      <h4>幔: </h4><div><h5>màn: </h5><span>curtain, screen, tent</span></div>
    </div>
    <div>
      <h4>幡: </h4><div><h5>fān: </h5><span>pennant, banner, streamer, flag</span></div>
    </div>
    <div>
      <h4>幢: </h4><div><h5>chuáng, zhuàng: </h5><span>carriage curtain; sun screen</span></div>
    </div>
    <h1>61: 干</h1>
    <div>
      <h4>干: </h4><div><h5>gān, gàn: </h5><span>oppose, offend; invade; dried</span></div>
    </div>
    <div>
      <h4>平: </h4><div><h5>píng: </h5><span>flat, level, even; peaceful</span></div>
    </div>
    <div>
      <h4>年: </h4><div><h5>nián: </h5><span>year; new-years; person's age</span></div>
    </div>
    <div>
      <h4>并: </h4><div><h5>bìng, bīng: </h5><span>combine, annex; also, what's more</span></div>
    </div>
    <div>
      <h4>幸: </h4><div><h5>xìng: </h5><span>luck(ily), favor, fortunately</span></div>
    </div>
    <h1>62: 幺</h1>
    <div>
      <h4>幻: </h4><div><h5>huàn: </h5><span>illusion, fantasy, mirage</span></div>
    </div>
    <div>
      <h4>幼: </h4><div><h5>yòu: </h5><span>infant, young child; immature</span></div>
    </div>
    <div>
      <h4>幽: </h4><div><h5>yōu: </h5><span>quiet, secluded, tranquil; dark</span></div>
    </div>
    <h1>63: 广</h1>
    <div>
      <h4>广: </h4><div><h5>guǎng, ān: </h5><span>wide, extensive, broad; rad. 53</span></div>
    </div>
    <h3>画3</h3>
    <div>
      <h4>庄: </h4><div><h5>zhuāng: </h5><span>village, hamlet; villa, manor</span></div>
    </div>
    <div>
      <h4>庆: </h4><div><h5>qìng: </h5><span>congratulate, celebrate</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>庇: </h4><div><h5>bì: </h5><span>cover, shield, shelter, protect</span></div>
    </div>
    <div>
      <h4>床: </h4><div><h5>chuáng: </h5><span>bed, couch; framework, chassis</span></div>
    </div>
    <div>
      <h4>序: </h4><div><h5>xù: </h5><span>series, serial order, sequence</span></div>
    </div>
    <div>
      <h4>庐: </h4><div><h5>lú: </h5><span>hut, cottage; name of a mountain</span></div>
    </div>
    <div>
      <h4>库: </h4><div><h5>kù: </h5><span>armory, treasury, storehouse</span></div>
    </div>
    <div>
      <h4>应: </h4><div><h5>yīng, yìng: </h5><span>should, ought to, must</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>底: </h4><div><h5>dǐ, de: </h5><span>bottom, underneath, underside</span></div>
    </div>
    <div>
      <h4>庖: </h4><div><h5>páo: </h5><span>kitchen; cooking, cuisine</span></div>
    </div>
    <div>
      <h4>店: </h4><div><h5>diàn: </h5><span>shop, store; inn, hotel</span></div>
    </div>
    <div>
      <h4>庙: </h4><div><h5>miào: </h5><span>temple, shrine; imperial court</span></div>
    </div>
    <div>
      <h4>庚: </h4><div><h5>gēng: </h5><span>7th heavenly stem</span></div>
    </div>
    <div>
      <h4>府: </h4><div><h5>fǔ: </h5><span>prefecture; prefect; government</span></div>
    </div>
    <div>
      <h4>庞: </h4><div><h5>páng: </h5><span>disorderly, messy; huge, big</span></div>
    </div>
    <div>
      <h4>废: </h4><div><h5>fèi: </h5><span>abrogate, terminate, discard</span></div>
    </div>
    <h3>画6-7</h3>
    <div>
      <h4>庠: </h4><div><h5>xiáng: </h5><span>village school; teach</span></div>
    </div>
    <div>
      <h4>度: </h4><div><h5>dù, duó: </h5><span>degree, system; manner; to consider</span></div>
    </div>
    <div>
      <h4>庭: </h4><div><h5>tíng: </h5><span>courtyard; spacious hall or yard</span></div>
    </div>
    <div>
      <h4>座: </h4><div><h5>zuò: </h5><span>seat; stand, base</span></div>
    </div>
    <h3>画8-11</h3>
    <div>
      <h4>庵: </h4><div><h5>ān: </h5><span>Buddhist monastery or nunnery</span></div>
    </div>
    <div>
      <h4>庶: </h4><div><h5>shù: </h5><span>numerous, various; multitude</span></div>
    </div>
    <div>
      <h4>康: </h4><div><h5>kāng: </h5><span>peaceful, quiet; happy, healthy</span></div>
    </div>
    <div>
      <h4>庸: </h4><div><h5>yōng: </h5><span>usual, common, ordinary, mediocre</span></div>
    </div>
    <div>
      <h4>廊: </h4><div><h5>láng: </h5><span>corridor, porch, veranda</span></div>
    </div>
    <div>
      <h4>廉: </h4><div><h5>lián: </h5><span>upright, honorable, honest</span></div>
    </div>
    <div>
      <h4>廓: </h4><div><h5>kuò: </h5><span>broad, wide, open, empty; to expand</span></div>
    </div>
    <div>
      <h4>廖: </h4><div><h5>liào: </h5><span>surname; name of an ancient state</span></div>
    </div>
    <h1>64: 廾</h1>
    <div>
      <h4>廿: </h4><div><h5>niàn: </h5><span>twenty, twentieth</span></div>
    </div>
    <div>
      <h4>开: </h4><div><h5>kāi: </h5><span>open; initiate, begin, start</span></div>
    </div>
    <div>
      <h4>弁: </h4><div><h5>biàn: </h5><span>conical cap worn during Zhou dynasty</span></div>
    </div>
    <div>
      <h4>异: </h4><div><h5>yì: </h5><span>different, unusual, strange</span></div>
    </div>
    <div>
      <h4>弃: </h4><div><h5>qì: </h5><span>reject, abandon, discard</span></div>
    </div>
    <div>
      <h4>弄: </h4><div><h5>nòng, lòng: </h5><span>do, play or fiddle with; alley</span></div>
    </div>
    <div>
      <h4>弊: </h4><div><h5>bì: </h5><span>evil, wrong, bad; criminal</span></div>
    </div>
    <h1>65: 弋</h1>
    <div>
      <h4>弋: </h4><div><h5>yì: </h5><span>catch, arrest; shoot with bow</span></div>
    </div>
    <div>
      <h4>式: </h4><div><h5>shì: </h5><span>style, system, formula, rule</span></div>
    </div>
    <h1>66: 弓</h1>
    <div>
      <h4>弓: </h4><div><h5>gōng: </h5><span>bow; curved, arched; KangXi radical number 57</span></div>
    </div>
    <h3>画1-4</h3>
    <div>
      <h4>引: </h4><div><h5>yǐn: </h5><span>to pull, draw out, attract; to stretch</span></div>
    </div>
    <div>
      <h4>弗: </h4><div><h5>fú: </h5><span>not, negative</span></div>
    </div>
    <div>
      <h4>弘: </h4><div><h5>hóng: </h5><span>enlarge, expand; liberal, great</span></div>
    </div>
    <div>
      <h4>弛: </h4><div><h5>chí: </h5><span>loosen, relax, unstring a bow</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>弟: </h4><div><h5>dì, tì, tuí: </h5><span>young brother; junior; i, me</span></div>
    </div>
    <div>
      <h4>张: </h4><div><h5>zhāng: </h5><span>stretch, extend, expand; sheet</span></div>
    </div>
    <h3>画5-8</h3>
    <div>
      <h4>弥: </h4><div><h5>mí, mǐ: </h5><span>extensive, full; fill; complete</span></div>
    </div>
    <div>
      <h4>弦: </h4><div><h5>xián: </h5><span>string; hypotenuse, crescent</span></div>
    </div>
    <div>
      <h4>弧: </h4><div><h5>hú: </h5><span>wooden bow; arc, crescent</span></div>
    </div>
    <div>
      <h4>弩: </h4><div><h5>nǔ: </h5><span>cross-bow, bow; downward stroke</span></div>
    </div>
    <div>
      <h4>弭: </h4><div><h5>mǐ: </h5><span>stop, desist, end, quell</span></div>
    </div>
    <div>
      <h4>弯: </h4><div><h5>wān: </h5><span>bend, curve</span></div>
    </div>
    <div>
      <h4>弱: </h4><div><h5>ruò: </h5><span>weak; fragile, delicate</span></div>
    </div>
    <div>
      <h4>弹: </h4><div><h5>dàn, tán: </h5><span>pellet, bullet, shot, shell</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>强: </h4><div><h5>qiáng, qiǎng, jiàng: </h5><span>strong, powerful, energetic</span></div>
    </div>
    <div>
      <h4>弼: </h4><div><h5>bì: </h5><span>aid, assist, help; correct</span></div>
    </div>
    <h1>67: 彐</h1>
    <div>
      <h4>归: </h4><div><h5>guī: </h5><span>return; return to, revert to</span></div>
    </div>
    <div>
      <h4>当: </h4><div><h5>dāng, dàng, dang •ㄉㄤ: </h5><span>bear, accept, undertake; just</span></div>
    </div>
    <div>
      <h4>录: </h4><div><h5>lù: </h5><span>copy, write down, record</span></div>
    </div>
    <div>
      <h4>彗: </h4><div><h5>huì: </h5><span>broomstick; comet</span></div>
    </div>
    <h1>68: 彡</h1>
    <h3>画4-7</h3>
    <div>
      <h4>形: </h4><div><h5>xíng: </h5><span>form, shape, appearance</span></div>
    </div>
    <div>
      <h4>彤: </h4><div><h5>tóng: </h5><span>red, vermilion; name of ancient</span></div>
    </div>
    <div>
      <h4>彦: </h4><div><h5>yàn: </h5><span>elegant</span></div>
    </div>
    <div>
      <h4>彧: </h4><div><h5>yù: </h5><span>refined, cultured, polished</span></div>
    </div>
    <h3>画8-12</h3>
    <div>
      <h4>彩: </h4><div><h5>cǎi: </h5><span>hue, color; variegated colors</span></div>
    </div>
    <div>
      <h4>彪: </h4><div><h5>biāo: </h5><span>tiger; tiger stripes; tiger-like</span></div>
    </div>
    <div>
      <h4>彬: </h4><div><h5>bīn: </h5><span>cultivated, well-bred</span></div>
    </div>
    <div>
      <h4>彭: </h4><div><h5>péng, bāng: </h5><span>name of ancient country; surname</span></div>
    </div>
    <div>
      <h4>彰: </h4><div><h5>zhāng: </h5><span>clear, manifest, obvious</span></div>
    </div>
    <div>
      <h4>影: </h4><div><h5>yǐng: </h5><span>shadow; image, reflection; photograph</span></div>
    </div>
    <h1>69: 彳</h1>
    <h3>画4</h3>
    <div>
      <h4>彷: </h4><div><h5>páng, fǎng: </h5><span>like, resembling; resemble</span></div>
    </div>
    <div>
      <h4>役: </h4><div><h5>yì: </h5><span>service; a servant, laborer; to serve</span></div>
    </div>
    <div>
      <h4>彻: </h4><div><h5>chè: </h5><span>penetrate, pervade; penetrating</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>彼: </h4><div><h5>bǐ: </h5><span>that, there, those</span></div>
    </div>
    <div>
      <h4>往: </h4><div><h5>wǎng: </h5><span>go, depart; past, formerly</span></div>
    </div>
    <div>
      <h4>征: </h4><div><h5>zhēng: </h5><span>invade, attack, conquer</span></div>
    </div>
    <div>
      <h4>径: </h4><div><h5>jìng: </h5><span>narrow path; diameter; direct</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>待: </h4><div><h5>dài, dāi: </h5><span>treat, entertain, receive; wait</span></div>
    </div>
    <div>
      <h4>很: </h4><div><h5>hěn: </h5><span>very, quite, much</span></div>
    </div>
    <div>
      <h4>徉: </h4><div><h5>yáng: </h5><span>wonder, rove, stray; hesitating</span></div>
    </div>
    <div>
      <h4>徊: </h4><div><h5>huái: </h5><span>linger, walk to and fro, hesitain</span></div>
    </div>
    <div>
      <h4>律: </h4><div><h5>lǜ: </h5><span>statute, principle, regulation</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>徐: </h4><div><h5>xú: </h5><span>slowly, quietly, calmly; composed, dignified</span></div>
    </div>
    <div>
      <h4>徒: </h4><div><h5>tú: </h5><span>disciple, follower; go on foot</span></div>
    </div>
    <div>
      <h4>徕: </h4><div><h5>lài, lái: </h5><span>induce, encourage to come</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>得: </h4><div><h5>dé, děi, de: </h5><span>obtain, get, gain, acquire</span></div>
    </div>
    <div>
      <h4>徘: </h4><div><h5>pái: </h5><span>walk back and forth, hesitate</span></div>
    </div>
    <div>
      <h4>徙: </h4><div><h5>xǐ: </h5><span>move one's abode, shift, migrate</span></div>
    </div>
    <div>
      <h4>徜: </h4><div><h5>cháng: </h5><span>walking and fro; lingering</span></div>
    </div>
    <h3>画9-14</h3>
    <div>
      <h4>御: </h4><div><h5>yù: </h5><span>drive, ride; chariot; manage</span></div>
    </div>
    <div>
      <h4>徨: </h4><div><h5>huáng: </h5><span>doubtful, irresolute, vacillating</span></div>
    </div>
    <div>
      <h4>循: </h4><div><h5>xún: </h5><span>obey, comply with, follow</span></div>
    </div>
    <div>
      <h4>徬: </h4><div><h5>páng: </h5>
      <span>to wander about, walk along side of; to be next to</span></div>
    </div>
    <div>
      <h4>微: </h4><div><h5>wēi: </h5><span>small, prefix micro-, trifling</span></div>
    </div>
    <div>
      <h4>徵: </h4><div><h5>zhēng, zhǐ, chéng: </h5><span>summon, recruit; musical note</span></div>
    </div>
    <div>
      <h4>德: </h4><div><h5>dé: </h5><span>ethics, morality, virtue</span></div>
    </div>
    <div>
      <h4>徽: </h4><div><h5>huī: </h5><span>a badge, insignia</span></div>
    </div>
    <h1>70: 忄</h1>
    <h3>画1-3</h3>
    <div>
      <h4>忆: </h4><div><h5>yì: </h5><span>remember, reflect upon; memory</span></div>
    </div>
    <div>
      <h4>忉: </h4><div><h5>dāo: </h5><span>grieved; distressed in mind</span></div>
    </div>
    <div>
      <h4>忏: </h4><div><h5>chàn: </h5><span>regret, repent; confess sins</span></div>
    </div>
    <div>
      <h4>忖: </h4><div><h5>cǔn: </h5><span>guess, suppose, conjecture</span></div>
    </div>
    <div>
      <h4>忙: </h4><div><h5>máng: </h5><span>busy, pressed for time; hustling</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>忡: </h4><div><h5>chōng: </h5><span>a sad, uneasy countenance</span></div>
    </div>
    <div>
      <h4>忧: </h4><div><h5>yōu: </h5><span>sad, grieved; grief, melancholy</span></div>
    </div>
    <div>
      <h4>忪: </h4><div><h5>sōng, zhōng: </h5><span>quiet, calm, tranquil, peaceful</span></div>
    </div>
    <div>
      <h4>快: </h4><div><h5>kuài: </h5><span>rapid, quick, speedy, fast; soon</span></div>
    </div>
    <div>
      <h4>忱: </h4><div><h5>chén: </h5><span>truth, sincerity; sincere</span></div>
    </div>
    <div>
      <h4>忸: </h4><div><h5>niǔ: </h5><span>blush, be bashful, be ashamed</span></div>
    </div>
    <div>
      <h4>忻: </h4><div><h5>xīn: </h5><span>delightful, joyful, pleasant</span></div>
    </div>
    <div>
      <h4>忾: </h4><div><h5>kài, xì: </h5><span>anger, wrath, hatred, enmity</span></div>
    </div>
    <div>
      <h4>怀: </h4><div><h5>huái: </h5><span>bosom, breast; carry in bosom</span></div>
    </div>
    <div>
      <h4>怅: </h4><div><h5>chàng: </h5><span>disappointed, dissatisfied</span></div>
    </div>
    <div>
      <h4>怆: </h4><div><h5>chuàng: </h5><span>sad, broken-hearted, disconsolate</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>怔: </h4><div><h5>zhēng: </h5><span>a disease resembling neurosis</span></div>
    </div>
    <div>
      <h4>怕: </h4><div><h5>pà: </h5><span>to fear, be afraid of; apprehensive</span></div>
    </div>
    <div>
      <h4>怖: </h4><div><h5>bù: </h5><span>terror, fear; frighten; terrified</span></div>
    </div>
    <div>
      <h4>怜: </h4><div><h5>lián: </h5><span>pity, sympathize</span></div>
    </div>
    <div>
      <h4>怡: </h4><div><h5>yí: </h5><span>harmony; pleasure, joy; be glad</span></div>
    </div>
    <div>
      <h4>怦: </h4><div><h5>pēng: </h5><span>eager, ardent, impulsive; anxious</span></div>
    </div>
    <div>
      <h4>性: </h4><div><h5>xìng: </h5><span>nature, character, sex</span></div>
    </div>
    <div>
      <h4>怪: </h4><div><h5>guài: </h5><span>strange, unusual, peculiar</span></div>
    </div>
    <div>
      <h4>怯: </h4><div><h5>qiè: </h5><span>lacking in courage, afraid</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>恃: </h4><div><h5>shì: </h5><span>rely on, presume on, trust to</span></div>
    </div>
    <div>
      <h4>恍: </h4><div><h5>huǎng: </h5><span>seemingly; absent-minded</span></div>
    </div>
    <div>
      <h4>恒: </h4><div><h5>héng: </h5><span>constant, regular, persistent</span></div>
    </div>
    <div>
      <h4>恢: </h4><div><h5>huī: </h5><span>restore; big, great, immense, vast</span></div>
    </div>
    <div>
      <h4>恤: </h4><div><h5>xù: </h5><span>show pity; relieve, help</span></div>
    </div>
    <div>
      <h4>恨: </h4><div><h5>hèn: </h5><span>hatred, dislike; resent, hate</span></div>
    </div>
    <div>
      <h4>恪: </h4><div><h5>kè: </h5><span>respectful, reverent</span></div>
    </div>
    <div>
      <h4>恫: </h4><div><h5>dòng: </h5><span>in pain, sorrowful</span></div>
    </div>
    <div>
      <h4>恬: </h4><div><h5>tián: </h5><span>quiet, calm, tranquil, peaceful</span></div>
    </div>
    <div>
      <h4>恰: </h4><div><h5>qià: </h5><span>just, exactly, precisely; proper</span></div>
    </div>
    <div>
      <h4>恸: </h4><div><h5>tòng: </h5><span>sadness, grief; mourn; be moved</span></div>
    </div>
    <div>
      <h4>恺: </h4><div><h5>kǎi: </h5><span>enjoy, be contented, joyful</span></div>
    </div>
    <div>
      <h4>恻: </h4><div><h5>cè: </h5><span>feel anguish, feel compassion</span></div>
    </div>
    <div>
      <h4>恼: </h4><div><h5>nǎo: </h5><span>angered, filled with hate</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>悄: </h4><div><h5>qiǎo, qiāo: </h5><span>silent, quiet, still; anxious</span></div>
    </div>
    <div>
      <h4>悌: </h4><div><h5>tì: </h5><span>brotherly, respectful</span></div>
    </div>
    <div>
      <h4>悍: </h4><div><h5>hàn: </h5><span>courageous, brave; violent</span></div>
    </div>
    <div>
      <h4>悔: </h4><div><h5>huǐ: </h5><span>repent, show remorse, regret</span></div>
    </div>
    <div>
      <h4>悖: </h4><div><h5>bèi: </h5><span>be contradictory to, go counter</span></div>
    </div>
    <div>
      <h4>悚: </h4><div><h5>sǒng: </h5><span>afraid, scared, frightened</span></div>
    </div>
    <div>
      <h4>悟: </h4><div><h5>wù: </h5><span>to apprehend, realize, become aware</span></div>
    </div>
    <div>
      <h4>悦: </h4><div><h5>yuè: </h5><span>pleased, contented, gratified</span></div>
    </div>
    <div>
      <h4>悯: </h4><div><h5>mǐn: </h5><span>pity, sympathize with, grieve for</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>悱: </h4><div><h5>fěi: </h5><span>to be desirous of speaking</span></div>
    </div>
    <div>
      <h4>悴: </h4><div><h5>cuì: </h5><span>suffer, become emaciated, haggard</span></div>
    </div>
    <div>
      <h4>悸: </h4><div><h5>jì: </h5><span>fearful, apprehensive, perturbed</span></div>
    </div>
    <div>
      <h4>悻: </h4><div><h5>xìng: </h5><span>anger, vexation; angry, indignant</span></div>
    </div>
    <div>
      <h4>悼: </h4><div><h5>dào: </h5><span>grieve, mourn, lament; grieved</span></div>
    </div>
    <div>
      <h4>情: </h4><div><h5>qíng: </h5><span>feeling, sentiment, emotion</span></div>
    </div>
    <div>
      <h4>惆: </h4><div><h5>chóu: </h5><span>distressed, regretful, sad</span></div>
    </div>
    <div>
      <h4>惊: </h4><div><h5>jīng: </h5><span>frighten, surprise, startle</span></div>
    </div>
    <div>
      <h4>惋: </h4><div><h5>wǎn: </h5><span>regret, be sorry; alarmed</span></div>
    </div>
    <div>
      <h4>惕: </h4><div><h5>tì: </h5><span>be cautious, careful, alert</span></div>
    </div>
    <div>
      <h4>惘: </h4><div><h5>wǎng: </h5><span>disconcerted, dejected, discouraged</span></div>
    </div>
    <div>
      <h4>惚: </h4><div><h5>hū: </h5><span>absent-minded, confused</span></div>
    </div>
    <div>
      <h4>惜: </h4><div><h5>xī: </h5><span>pity, regret, rue, begrudge</span></div>
    </div>
    <div>
      <h4>惟: </h4><div><h5>wéi: </h5><span>but, however, nevertheless; only</span></div>
    </div>
    <div>
      <h4>惦: </h4><div><h5>diàn: </h5><span>think of, remember, miss</span></div>
    </div>
    <div>
      <h4>惧: </h4><div><h5>jù: </h5><span>fear, be afraid of, dread</span></div>
    </div>
    <div>
      <h4>惨: </h4><div><h5>cǎn: </h5><span>sad, pitiful, wretched; cruel</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>惬: </h4><div><h5>qiè: </h5><span>be satisfied, be comfortable</span></div>
    </div>
    <div>
      <h4>惭: </h4><div><h5>cán: </h5><span>ashamed, humiliated; shameful</span></div>
    </div>
    <div>
      <h4>惮: </h4><div><h5>dàn, dá: </h5><span>dread, shrink from, shirk, fear</span></div>
    </div>
    <div>
      <h4>惯: </h4><div><h5>guàn: </h5><span>habit, custom; habitually, usual</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>惰: </h4><div><h5>duò: </h5><span>indolent, careless, lazy, idle</span></div>
    </div>
    <div>
      <h4>惶: </h4><div><h5>huáng: </h5><span>fearful, afraid, anxious, nervous</span></div>
    </div>
    <div>
      <h4>惺: </h4><div><h5>xīng: </h5><span>intelligent, clever, astute</span></div>
    </div>
    <div>
      <h4>愉: </h4><div><h5>yú, tōu: </h5><span>pleasant, delightful; please</span></div>
    </div>
    <div>
      <h4>愎: </h4><div><h5>bì: </h5><span>obstinate, stubborn, headstrong</span></div>
    </div>
    <div>
      <h4>愔: </h4><div><h5>yīn: </h5><span>comfortable, contented, peaceful</span></div>
    </div>
    <div>
      <h4>愕: </h4><div><h5>è: </h5><span>startled, alarmed, astonished</span></div>
    </div>
    <div>
      <h4>愠: </h4><div><h5>yùn: </h5><span>angry</span></div>
    </div>
    <div>
      <h4>愣: </h4><div><h5>lèng: </h5><span>be in a daze</span></div>
    </div>
    <div>
      <h4>愤: </h4><div><h5>fèn: </h5><span>resent, hate; indignant</span></div>
    </div>
    <div>
      <h4>愧: </h4><div><h5>kuì: </h5><span>ashamed, conscience-stricken</span></div>
    </div>
    <div>
      <h4>慌: </h4><div><h5>huāng: </h5><span>nervous, panicky, frantic</span></div>
    </div>
    <div>
      <h4>慨: </h4><div><h5>kǎi: </h5><span>sigh, regret; generous</span></div>
    </div>
    <h3>画10-11</h3>
    <div>
      <h4>愫: </h4><div><h5>sù: </h5><span>guileless, sincere, honest</span></div>
    </div>
    <div>
      <h4>慎: </h4><div><h5>shèn: </h5><span>act with care, be cautious</span></div>
    </div>
    <div>
      <h4>慑: </h4><div><h5>shè: </h5><span>afraid, scared, fearful</span></div>
    </div>
    <div>
      <h4>慢: </h4><div><h5>màn: </h5><span>slow(ly), leisurely, sluggish</span></div>
    </div>
    <div>
      <h4>慵: </h4><div><h5>yōng: </h5><span>indolent, easy-going, lazy</span></div>
    </div>
    <div>
      <h4>慷: </h4><div><h5>kāng: </h5><span>ardent; generous, magnanimous</span></div>
    </div>
    <h3>画12</h3>
    <div>
      <h4>憎: </h4><div><h5>zēng: </h5><span>hate, detest, abhor; hatred</span></div>
    </div>
    <div>
      <h4>憔: </h4><div><h5>qiáo: </h5><span>be worn-out, emaciated, haggard</span></div>
    </div>
    <div>
      <h4>憧: </h4><div><h5>chōng: </h5><span>irresolute, indecisive; yearn for</span></div>
    </div>
    <div>
      <h4>憬: </h4><div><h5>jǐng: </h5><span>rouse, awaken; become conscious</span></div>
    </div>
    <div>
      <h4>懂: </h4><div><h5>dǒng: </h5><span>understand, comprehend</span></div>
    </div>
    <div>
      <h4>懊: </h4><div><h5>ào: </h5><span>vexed, worried, nervous; regret</span></div>
    </div>
    <h3>画13-15</h3>
    <div>
      <h4>憾: </h4><div><h5>hàn: </h5><span>to regret, remorse; dissatisfied</span></div>
    </div>
    <div>
      <h4>懈: </h4><div><h5>xiè: </h5><span>idle, relaxed, remiss</span></div>
    </div>
    <div>
      <h4>懒: </h4><div><h5>lǎn: </h5><span>lazy, languid, listless</span></div>
    </div>
    <div>
      <h4>懦: </h4><div><h5>nuò: </h5><span>weak, timid, cowardly</span></div>
    </div>
    <div>
      <h4>懵: </h4><div><h5>měng: </h5><span>stupid, ignorant, dull</span></div>
    </div>
    <h1>71: 扌</h1>
    <div>
      <h4>才: </h4><div><h5>cái: </h5><span>talent, ability; just, only</span></div>
    </div>
    <h3>画1-2</h3>
    <div>
      <h4>扎: </h4><div><h5>zā, zhā, zhá: </h5><span>pull up; pierce; struggle free</span></div>
    </div>
    <div>
      <h4>扑: </h4><div><h5>pū: </h5><span>pound, beat, strike; attack</span></div>
    </div>
    <div>
      <h4>扒: </h4><div><h5>bā, pá: </h5><span>scratch; dig up; crawl; crouch</span></div>
    </div>
    <div>
      <h4>打: </h4><div><h5>dǎ, dá: </h5><span>strike, hit, beat; fight; attack</span></div>
    </div>
    <div>
      <h4>扔: </h4><div><h5>rēng: </h5><span>throw, hurl; throw away, cast</span></div>
    </div>
    <h3>画3</h3>
    <div>
      <h4>托: </h4><div><h5>tuō: </h5><span>to hold up with palm; to support, rely on</span></div>
    </div>
    <div>
      <h4>扛: </h4><div><h5>káng, gāng: </h5><span>carry on shoulders; lift</span></div>
    </div>
    <div>
      <h4>扣: </h4><div><h5>kòu: </h5><span>knock, strike, rap, tap; button</span></div>
    </div>
    <div>
      <h4>执: </h4><div><h5>zhí: </h5><span>hold in hand; keep; carry out</span></div>
    </div>
    <div>
      <h4>扩: </h4><div><h5>kuò: </h5><span>expand, enlarge, stretch</span></div>
    </div>
    <div>
      <h4>扪: </h4><div><h5>mén: </h5><span>stoke, pat, feel by hand, grope</span></div>
    </div>
    <div>
      <h4>扫: </h4><div><h5>sǎo, sào: </h5><span>sweep, clear away; exterminate</span></div>
    </div>
    <div>
      <h4>扬: </h4><div><h5>yáng: </h5><span>scatter, spread; praise</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>扭: </h4><div><h5>niǔ: </h5><span>turn, twist, wrench; seize, grasp</span></div>
    </div>
    <div>
      <h4>扮: </h4><div><h5>bàn: </h5><span>dress up; dress up as</span></div>
    </div>
    <div>
      <h4>扯: </h4><div><h5>chě: </h5><span>rip up, tear down; raise; haul</span></div>
    </div>
    <div>
      <h4>扰: </h4><div><h5>rǎo: </h5><span>disturb, annoy, agitate</span></div>
    </div>
    <div>
      <h4>扳: </h4><div><h5>bān: </h5><span>pull; drag; right itself</span></div>
    </div>
    <div>
      <h4>扶: </h4><div><h5>fú: </h5><span>support, help; protect; hold on</span></div>
    </div>
    <div>
      <h4>批: </h4><div><h5>pī: </h5><span>comment, criticize; wholesale</span></div>
    </div>
    <div>
      <h4>扼: </h4><div><h5>è: </h5><span>grasp, clutch; choke, strangle</span></div>
    </div>
    <div>
      <h4>找: </h4><div><h5>zhǎo: </h5><span>search, seek, look for; find</span></div>
    </div>
    <div>
      <h4>技: </h4><div><h5>jì: </h5><span>skill, ability, talent, ingenuity</span></div>
    </div>
    <div>
      <h4>抄: </h4><div><h5>chāo: </h5><span>copy, confiscate, seize</span></div>
    </div>
    <div>
      <h4>抉: </h4><div><h5>jué: </h5><span>choose, select; gouge, pluck out</span></div>
    </div>
    <div>
      <h4>把: </h4><div><h5>bǎ, bà: </h5><span>hold, take; guard; regard as</span></div>
    </div>
    <div>
      <h4>抑: </h4><div><h5>yì: </h5><span>press down, repress; curb, hinder</span></div>
    </div>
    <div>
      <h4>抒: </h4><div><h5>shū: </h5><span>express; eliminate; relieve</span></div>
    </div>
    <div>
      <h4>抓: </h4><div><h5>zhuā: </h5><span>scratch; clutch, seize, grab</span></div>
    </div>
    <div>
      <h4>投: </h4><div><h5>tóu: </h5><span>throw, cast, fling, pitch; jump</span></div>
    </div>
    <div>
      <h4>抖: </h4><div><h5>dǒu: </h5><span>tremble, shake, rouse; give shake</span></div>
    </div>
    <div>
      <h4>抗: </h4><div><h5>kàng: </h5><span>resist, oppose, defy, reject</span></div>
    </div>
    <div>
      <h4>折: </h4><div><h5>zhē, zhé, shé: </h5><span>break off, snap; bend</span></div>
    </div>
    <div>
      <h4>抚: </h4><div><h5>fǔ: </h5><span>pat, console, comfort; pacify</span></div>
    </div>
    <div>
      <h4>抛: </h4><div><h5>pāo: </h5><span>throw (away)</span></div>
    </div>
    <div>
      <h4>抠: </h4><div><h5>kōu: </h5><span>raise, lift up; tight-fisted</span></div>
    </div>
    <div>
      <h4>抢: </h4><div><h5>qiǎng, qiāng, chēng: </h5><span>plunder, rob, take by force</span></div>
    </div>
    <div>
      <h4>护: </h4><div><h5>hù: </h5><span>protect, guard, defend, shelter</span></div>
    </div>
    <div>
      <h4>报: </h4><div><h5>bào: </h5><span>report, tell, announce</span></div>
    </div>
    <div>
      <h4>拒: </h4><div><h5>jù: </h5><span>ward off with hand, defend</span></div>
    </div>
    <div>
      <h4>拟: </h4><div><h5>nǐ: </h5><span>draft; intend, plan, propose</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>抨: </h4><div><h5>pēng: </h5><span>impeach, censure; attack</span></div>
    </div>
    <div>
      <h4>披: </h4><div><h5>pī: </h5><span>wear; split; crack</span></div>
    </div>
    <div>
      <h4>抬: </h4><div><h5>tái: </h5><span>lift, carry</span></div>
    </div>
    <div>
      <h4>抱: </h4><div><h5>bào: </h5><span>embrace, hold in arms, enfold</span></div>
    </div>
    <div>
      <h4>抴: </h4><div><h5>yè: </h5><span></span></div>
    </div>
    <div>
      <h4>抵: </h4><div><h5>dǐ: </h5><span>resist, oppose; deny; off-set</span></div>
    </div>
    <div>
      <h4>抹: </h4><div><h5>mǒ, mò, mā: </h5><span>smear, apply, wipe off, erase</span></div>
    </div>
    <div>
      <h4>押: </h4><div><h5>yā: </h5>
      <span>
        mortgage, pledge; deposit; to pawn; to arrest, detain, guard
      </span></div>
    </div>
    <div>
      <h4>抽: </h4><div><h5>chōu: </h5><span>draw out, pull out; sprout</span></div>
    </div>
    <div>
      <h4>拂: </h4><div><h5>fú, bì: </h5><span>shake off, brush away; dust</span></div>
    </div>
    <div>
      <h4>拄: </h4><div><h5>zhǔ: </h5><span>lean on; post; prod; ridicule</span></div>
    </div>
    <div>
      <h4>担: </h4><div><h5>dān, dàn, dǎn: </h5><span>carry, bear, undertake</span></div>
    </div>
    <div>
      <h4>拆: </h4><div><h5>chāi, cā: </h5>
      <span>to break up, split apart, rip open; to destroy</span></div>
    </div>
    <div>
      <h4>拇: </h4><div><h5>mǔ: </h5><span>thumb; big toe</span></div>
    </div>
    <div>
      <h4>拈: </h4><div><h5>niān: </h5><span>pick up with fingers; draw lots</span></div>
    </div>
    <div>
      <h4>拉: </h4><div><h5>lā, lá: </h5><span>pull, drag; seize, hold; lengthen</span></div>
    </div>
    <div>
      <h4>拌: </h4><div><h5>bàn, pàn: </h5><span>mix</span></div>
    </div>
    <div>
      <h4>拍: </h4><div><h5>pāi: </h5><span>clap, tap, beat; beat or rhythm</span></div>
    </div>
    <div>
      <h4>拎: </h4><div><h5>līn: </h5><span>to haul; to lift; to take</span></div>
    </div>
    <div>
      <h4>拐: </h4><div><h5>guǎi: </h5><span>kidnap, abduct; turn</span></div>
    </div>
    <div>
      <h4>拓: </h4><div><h5>tuò, tà, zhí: </h5><span>expand; open up; support or push</span></div>
    </div>
    <div>
      <h4>拔: </h4><div><h5>bá: </h5><span>uproot, pull out</span></div>
    </div>
    <div>
      <h4>拖: </h4><div><h5>tuō: </h5><span>drag, tow, haul; delay, prolong</span></div>
    </div>
    <div>
      <h4>拗: </h4><div><h5>ǎo, ào, niù: </h5>
      <span>
        to pull, drag, break off, to pluck (a flower); bent, warped; perverse,
        obstinate
      </span></div>
    </div>
    <div>
      <h4>拘: </h4><div><h5>jū, gōu: </h5><span>restrain, seize, detain</span></div>
    </div>
    <div>
      <h4>拙: </h4><div><h5>zhuō: </h5><span>stupid, clumsy, crude; convention</span></div>
    </div>
    <div>
      <h4>拚: </h4><div><h5>pàn, pīn, fān: </h5><span>risk, disregard; go all out for</span></div>
    </div>
    <div>
      <h4>招: </h4><div><h5>zhāo: </h5><span>beckon, summon; recruit, levy</span></div>
    </div>
    <div>
      <h4>拢: </h4><div><h5>lǒng: </h5><span>collect, bring together</span></div>
    </div>
    <div>
      <h4>拣: </h4><div><h5>jiǎn: </h5><span>choose; select; pick up; gather</span></div>
    </div>
    <div>
      <h4>拥: </h4><div><h5>yōng: </h5><span>embrace, hug, squeeze; crowd</span></div>
    </div>
    <div>
      <h4>拦: </h4><div><h5>lán: </h5><span>obstruct, impede, bar, hinder</span></div>
    </div>
    <div>
      <h4>拧: </h4><div><h5>níng, nǐng, nìng: </h5><span>pinch; twist, wring; determined</span></div>
    </div>
    <div>
      <h4>拨: </h4><div><h5>bō: </h5><span>move; dispel; distribute</span></div>
    </div>
    <div>
      <h4>择: </h4><div><h5>zé, zhái: </h5><span>select, choose, pick out</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>括: </h4><div><h5>kuò, guā: </h5><span>include, embrace, enclose</span></div>
    </div>
    <div>
      <h4>拭: </h4><div><h5>shì: </h5><span>wipe away stains with cloth</span></div>
    </div>
    <div>
      <h4>拮: </h4><div><h5>jié, jiá: </h5><span>laboring hard, occupied; pursue</span></div>
    </div>
    <div>
      <h4>拯: </h4><div><h5>zhěng: </h5><span>help, save, aid; lift, raise</span></div>
    </div>
    <div>
      <h4>拱: </h4><div><h5>gǒng: </h5><span>fold hands on breast; bow, salute</span></div>
    </div>
    <div>
      <h4>拴: </h4><div><h5>shuān: </h5><span>bind with rope, fasten</span></div>
    </div>
    <div>
      <h4>拷: </h4><div><h5>kǎo: </h5><span>torture and interrogate; hit</span></div>
    </div>
    <div>
      <h4>拼: </h4><div><h5>pīn: </h5><span>join together, link, incorporate</span></div>
    </div>
    <div>
      <h4>拽: </h4><div><h5>zhuài, zhuāi, yè: </h5><span>drag, tow; throw; twist</span></div>
    </div>
    <div>
      <h4>拾: </h4><div><h5>shí, shè: </h5>
      <span>
        pick up, collect, tidy up;
      </span></div>
    </div>
    <div>
      <h4>持: </h4><div><h5>chí: </h5><span>sustain, support; hold, grasp</span></div>
    </div>
    <div>
      <h4>挂: </h4><div><h5>guà: </h5><span>hang, suspend; suspense</span></div>
    </div>
    <div>
      <h4>指: </h4><div><h5>zhǐ: </h5><span>finger, toe; point, indicate</span></div>
    </div>
    <div>
      <h4>按: </h4><div><h5>àn: </h5><span>put hand on, press down with hand</span></div>
    </div>
    <div>
      <h4>挑: </h4><div><h5>tiāo, tiǎo: </h5><span>a load carried on the shoulders; to carry</span></div>
    </div>
    <div>
      <h4>挓: </h4><div><h5>zhā: </h5><span>to open out; to expand</span></div>
    </div>
    <div>
      <h4>挖: </h4><div><h5>wā: </h5><span>dig, dig out, gouge out, scoop</span></div>
    </div>
    <div>
      <h4>挟: </h4><div><h5>xié, jiā: </h5><span>clasp under arm; hold to bosom</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>挠: </h4><div><h5>náo: </h5><span>scratch; disturb, bother; submit</span></div>
    </div>
    <div>
      <h4>挡: </h4><div><h5>dǎng, dàng: </h5><span>obstruct, impede; stop; resist</span></div>
    </div>
    <div>
      <h4>挣: </h4><div><h5>zhèng, zhēng: </h5><span>strive, endeavor, struggle</span></div>
    </div>
    <div>
      <h4>挤: </h4><div><h5>jǐ: </h5><span>crowd, squeeze, push against</span></div>
    </div>
    <div>
      <h4>挥: </h4><div><h5>huī: </h5><span>direct; wipe away; squander</span></div>
    </div>
    <div>
      <h4>挪: </h4><div><h5>nuó: </h5><span>move, shift on one side</span></div>
    </div>
    <div>
      <h4>挺: </h4><div><h5>tǐng: </h5><span>to stand upright, straighten; rigid</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>挨: </h4><div><h5>āi, ái: </h5>
      <span>
        near, close by, next to, towards, against; to wait; to lean on
      </span></div>
    </div>
    <div>
      <h4>挫: </h4><div><h5>cuò: </h5><span>push down; chop down; grind</span></div>
    </div>
    <div>
      <h4>振: </h4><div><h5>zhèn: </h5><span>raise, excite, arouse action</span></div>
    </div>
    <div>
      <h4>挹: </h4><div><h5>yì: </h5><span>to bale out; to decant liquids</span></div>
    </div>
    <div>
      <h4>挽: </h4><div><h5>wǎn: </h5><span>pull; pull back, draw back</span></div>
    </div>
    <div>
      <h4>捂: </h4><div><h5>wǔ: </h5><span>resist</span></div>
    </div>
    <div>
      <h4>捅: </h4><div><h5>tǒng: </h5><span>jab</span></div>
    </div>
    <div>
      <h4>捆: </h4><div><h5>kǔn: </h5><span>tie up; bind, truss up; bundle</span></div>
    </div>
    <div>
      <h4>捉: </h4><div><h5>zhuō: </h5><span>grasp, clutch; catch, seize</span></div>
    </div>
    <div>
      <h4>捌: </h4><div><h5>bā: </h5>
      <span>
        break open, split open; an accounting version of the numeral eight
      </span></div>
    </div>
    <div>
      <h4>捍: </h4><div><h5>hàn: </h5><span>ward off, guard against, defend</span></div>
    </div>
    <div>
      <h4>捎: </h4><div><h5>shāo, shào: </h5><span>to select; to take; to carry</span></div>
    </div>
    <div>
      <h4>捏: </h4><div><h5>niē: </h5><span>pick with fingers; knead; mold</span></div>
    </div>
    <div>
      <h4>捐: </h4><div><h5>juān: </h5><span>contribute; give up, renounce</span></div>
    </div>
    <div>
      <h4>捕: </h4><div><h5>bǔ: </h5><span>arrest, catch, seize</span></div>
    </div>
    <div>
      <h4>捞: </h4><div><h5>lāo: </h5><span>scoop out of water; dredge, fish</span></div>
    </div>
    <div>
      <h4>损: </h4><div><h5>sǔn: </h5><span>diminish; impair; injure</span></div>
    </div>
    <div>
      <h4>捡: </h4><div><h5>jiǎn: </h5><span>to pick up</span></div>
    </div>
    <div>
      <h4>换: </h4><div><h5>huàn: </h5><span>change</span></div>
    </div>
    <div>
      <h4>捣: </h4><div><h5>dǎo: </h5><span>hull; thresh; beat, attack</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>捧: </h4><div><h5>pěng: </h5><span>hold up in two hands</span></div>
    </div>
    <div>
      <h4>捩: </h4><div><h5>liè: </h5><span>twist with hands; snap, tear</span></div>
    </div>
    <div>
      <h4>据: </h4><div><h5>jù, jū: </h5><span>to occupy, take possession of; a base, position</span></div>
    </div>
    <div>
      <h4>捱: </h4><div><h5>ái: </h5><span>put off, procrastinate; endure</span></div>
    </div>
    <div>
      <h4>捶: </h4><div><h5>chuí: </h5><span>strike with stick, lash, beat</span></div>
    </div>
    <div>
      <h4>捷: </h4><div><h5>jié: </h5><span>win, victory, triumph</span></div>
    </div>
    <div>
      <h4>捺: </h4><div><h5>nà: </h5><span>to press down heavily with the fingers</span></div>
    </div>
    <div>
      <h4>捻: </h4><div><h5>niǎn, niē: </h5><span>to twist or nip with the fingers</span></div>
    </div>
    <div>
      <h4>掀: </h4><div><h5>xiān: </h5><span>lift, raise; stir</span></div>
    </div>
    <div>
      <h4>授: </h4><div><h5>shòu: </h5><span>give to, transmit; confer</span></div>
    </div>
    <div>
      <h4>掉: </h4><div><h5>diào: </h5><span>turn, move; shake, wag; drop down</span></div>
    </div>
    <div>
      <h4>掏: </h4><div><h5>tāo: </h5><span>take out; pull out; clean out</span></div>
    </div>
    <div>
      <h4>掐: </h4><div><h5>qiā: </h5><span>hold; gather with hand; choke</span></div>
    </div>
    <div>
      <h4>排: </h4><div><h5>pái, pǎi: </h5><span>row, rank, line</span></div>
    </div>
    <div>
      <h4>掘: </h4><div><h5>jué: </h5><span>dig, excavate; excavate cave</span></div>
    </div>
    <div>
      <h4>掠: </h4><div><h5>lüè: </h5><span>rob, ransack, plunder; pass by</span></div>
    </div>
    <div>
      <h4>探: </h4><div><h5>tàn: </h5><span>find, locate; search, grope for</span></div>
    </div>
    <div>
      <h4>接: </h4><div><h5>jiē: </h5><span>receive; continue; catch; connect</span></div>
    </div>
    <div>
      <h4>控: </h4><div><h5>kòng: </h5><span>accuse, charge; control</span></div>
    </div>
    <div>
      <h4>推: </h4><div><h5>tuī: </h5><span>push, expel; push forward</span></div>
    </div>
    <div>
      <h4>掩: </h4><div><h5>yǎn: </h5><span>to cover; shut, conceal; ambush</span></div>
    </div>
    <div>
      <h4>措: </h4><div><h5>cuò: </h5><span>place; collect, arrange; employ</span></div>
    </div>
    <div>
      <h4>掬: </h4><div><h5>jū: </h5><span>to grasp or hold with both hands</span></div>
    </div>
    <div>
      <h4>掳: </h4><div><h5>lǔ: </h5><span>capture, seize</span></div>
    </div>
    <div>
      <h4>掴: </h4><div><h5>guāi: </h5><span>box one's ears, slap</span></div>
    </div>
    <div>
      <h4>掷: </h4><div><h5>zhì: </h5><span>throw, hurl, cast, fling</span></div>
    </div>
    <div>
      <h4>掺: </h4><div><h5>chān, xiān, càn, shǎn: </h5><span>mix, blend, adulterate</span></div>
    </div>
    <div>
      <h4>描: </h4><div><h5>miáo: </h5><span>copy, trace, sketch; depict</span></div>
    </div>
    <div>
      <h4>揶: </h4><div><h5>yé: </h5><span>make fun of, ridicule</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>揄: </h4><div><h5>yú: </h5><span>lift, raise; praise; hang; flap</span></div>
    </div>
    <div>
      <h4>揆: </h4><div><h5>kuí: </h5><span>prime minister; to guess, estimate</span></div>
    </div>
    <div>
      <h4>揉: </h4><div><h5>róu: </h5><span>rub, massage; crush by hand</span></div>
    </div>
    <div>
      <h4>揍: </h4><div><h5>zòu: </h5><span>hit, beat; smash, break</span></div>
    </div>
    <div>
      <h4>提: </h4><div><h5>tí, dī, dǐ: </h5><span>hold in hand; lift in hand</span></div>
    </div>
    <div>
      <h4>插: </h4><div><h5>chā: </h5><span>insert, stick into; plant</span></div>
    </div>
    <div>
      <h4>揖: </h4><div><h5>yī: </h5><span>salute, bow; defer to, yield</span></div>
    </div>
    <div>
      <h4>握: </h4><div><h5>wò: </h5><span>grasp, hold fast, take by hand</span></div>
    </div>
    <div>
      <h4>揣: </h4><div><h5>chuǎi, chuài, chuāi, tuán, zhuī: </h5>
      <span>put things under clothes</span></div>
    </div>
    <div>
      <h4>揩: </h4><div><h5>kāi: </h5><span>rub and wipe, dust, clean</span></div>
    </div>
    <div>
      <h4>揪: </h4><div><h5>jiū: </h5><span>grasp with hand, pinch</span></div>
    </div>
    <div>
      <h4>揭: </h4><div><h5>jiē, qì: </h5><span>raise, lift up; surname</span></div>
    </div>
    <div>
      <h4>援: </h4><div><h5>yuán: </h5><span>aid, assist; lead; cite</span></div>
    </div>
    <div>
      <h4>揽: </h4><div><h5>lǎn: </h5><span>grasp, take hold of; monopolize</span></div>
    </div>
    <div>
      <h4>搀: </h4><div><h5>chān: </h5><span>give helping hand</span></div>
    </div>
    <div>
      <h4>搁: </h4><div><h5>gē, gé: </h5><span>place, put, lay down; delay</span></div>
    </div>
    <div>
      <h4>搂: </h4><div><h5>lǒu, lōu: </h5><span>hug, embrace; drag, pull</span></div>
    </div>
    <div>
      <h4>搅: </h4><div><h5>jiǎo: </h5><span>disturb, agitate, stir up</span></div>
    </div>
    <div>
      <h4>搓: </h4><div><h5>cuō: </h5><span>to rub or roll between the hands</span></div>
    </div>
    <div>
      <h4>搔: </h4><div><h5>sāo: </h5><span>to scratch</span></div>
    </div>
    <div>
      <h4>搜: </h4><div><h5>sōu: </h5><span>search, seek; investigate</span></div>
    </div>
    <div>
      <h4>搭: </h4><div><h5>dā: </h5><span>join together, attach to; add to</span></div>
    </div>
    <div>
      <h4>摒: </h4><div><h5>bìng: </h5><span>expel, cast off; arrange</span></div>
    </div>
    <h3>画10</h3>
    <div>
      <h4>搏: </h4><div><h5>bó: </h5><span>seize; spring upon; strike</span></div>
    </div>
    <div>
      <h4>搞: </h4><div><h5>gǎo: </h5><span>to clear, clarify</span></div>
    </div>
    <div>
      <h4>搧: </h4><div><h5>shān: </h5><span>fan; strike on face; stir up</span></div>
    </div>
    <div>
      <h4>搪: </h4><div><h5>táng: </h5><span>ward off, evade; parry; block</span></div>
    </div>
    <div>
      <h4>搬: </h4><div><h5>bān: </h5><span>transfer, move, remove, shift</span></div>
    </div>
    <div>
      <h4>携: </h4><div><h5>xié: </h5><span>lead by hand, take with; carry</span></div>
    </div>
    <div>
      <h4>摄: </h4><div><h5>shè, niè: </h5><span>take in, absorb; act as deputy</span></div>
    </div>
    <div>
      <h4>摆: </h4><div><h5>bǎi: </h5><span>put, place; display; swing, sway</span></div>
    </div>
    <div>
      <h4>摇: </h4><div><h5>yáo: </h5><span>wag, swing, wave; shake; scull</span></div>
    </div>
    <div>
      <h4>摊: </h4><div><h5>tān: </h5><span>spread out, open; apportion</span></div>
    </div>
    <div>
      <h4>摸: </h4><div><h5>mō: </h5><span>gently touch with hand; caress</span></div>
    </div>
    <h3>画11</h3>
    <div>
      <h4>摔: </h4><div><h5>shuāi: </h5><span>fall ground, stumble, trip</span></div>
    </div>
    <div>
      <h4>摘: </h4><div><h5>zhāi: </h5><span>pluck, pick; select; specify</span></div>
    </div>
    <div>
      <h4>摧: </h4><div><h5>cuī: </h5><span>destroy, break, injure</span></div>
    </div>
    <div>
      <h4>摺: </h4><div><h5>zhé: </h5><span>fold, bend; twisted, curved</span></div>
    </div>
    <div>
      <h4>撂: </h4><div><h5>liào: </h5><span>put down, put aside; drop</span></div>
    </div>
    <div>
      <h4>撇: </h4><div><h5>piē, piě: </h5><span>discard, abandon, throw away</span></div>
    </div>
    <h3>画12</h3>
    <div>
      <h4>撑: </h4><div><h5>chēng: </h5><span>prop up, support; brace</span></div>
    </div>
    <div>
      <h4>撒: </h4><div><h5>sā, sǎ: </h5><span>release, cast away, let go; disperse; relax</span></div>
    </div>
    <div>
      <h4>撕: </h4><div><h5>sī: </h5><span>rip, tear; buy cloth</span></div>
    </div>
    <div>
      <h4>撞: </h4><div><h5>zhuàng: </h5><span>knock against, bump into, collide</span></div>
    </div>
    <div>
      <h4>撤: </h4><div><h5>chè: </h5><span>omit; remove; withdraw</span></div>
    </div>
    <div>
      <h4>撩: </h4><div><h5>liāo, liáo: </h5><span>lift up, raise; leave, depart</span></div>
    </div>
    <div>
      <h4>撬: </h4><div><h5>qiào: </h5><span>lift, raise; pry open</span></div>
    </div>
    <div>
      <h4>播: </h4><div><h5>bō: </h5><span>sow, spread; broadcast; case away, reject</span></div>
    </div>
    <div>
      <h4>撮: </h4><div><h5>cuō, zuǒ: </h5><span>little bit, small amount, pinch</span></div>
    </div>
    <div>
      <h4>撰: </h4><div><h5>zhuàn: </h5><span>compose, write, compile</span></div>
    </div>
    <div>
      <h4>撷: </h4><div><h5>xié: </h5><span>pick up, gather up; hold in lap</span></div>
    </div>
    <div>
      <h4>擒: </h4><div><h5>qín: </h5><span>catch, capture, seize, arrest</span></div>
    </div>
    <h3>画13</h3>
    <div>
      <h4>撼: </h4><div><h5>hàn: </h5><span>move, shake</span></div>
    </div>
    <div>
      <h4>擂: </h4><div><h5>léi, lèi: </h5>
      <span>rub, grind; grind with a mortar and pestle; triturate</span></div>
    </div>
    <div>
      <h4>擅: </h4><div><h5>shàn: </h5><span>monopolize; claim; arbitrarily; to dare</span></div>
    </div>
    <div>
      <h4>操: </h4><div><h5>cāo: </h5><span>conduct, run, control, manage</span></div>
    </div>
    <div>
      <h4>擞: </h4><div><h5>sòu, sǒu: </h5><span>shake, tremble, quake; flutter</span></div>
    </div>
    <h3>画14-20</h3>
    <div>
      <h4>擢: </h4><div><h5>zhuó: </h5><span>pull up, draw up; select</span></div>
    </div>
    <div>
      <h4>擤: </h4><div><h5>xǐng: </h5><span>to blow the nose with fingers</span></div>
    </div>
    <div>
      <h4>擦: </h4><div><h5>cā: </h5><span>wipe, scrub, rub, scour; brush</span></div>
    </div>
    <div>
      <h4>攒: </h4><div><h5>zǎn, cuán: </h5><span>save, hoard</span></div>
    </div>
    <div>
      <h4>攘: </h4><div><h5>rǎng: </h5><span>seize, take by force; repel</span></div>
    </div>
    <div>
      <h4>攫: </h4><div><h5>jué: </h5><span>snatch away, seize; catch with</span></div>
    </div>
    <h1>72: 氵</h1>
    <h3>画2</h3>
    <div>
      <h4>汀: </h4><div><h5>tīng: </h5><span>sandbar, beach, bank, shore</span></div>
    </div>
    <div>
      <h4>汁: </h4><div><h5>zhī: </h5><span>juice, liquor, fluid, sap, gravy, sauce</span></div>
    </div>
    <div>
      <h4>汇: </h4><div><h5>huì: </h5><span>concourse; flow together, gather</span></div>
    </div>
    <div>
      <h4>汉: </h4><div><h5>hàn: </h5><span>Chinese people; Chinese language</span></div>
    </div>
    <h3>画3</h3>
    <div>
      <h4>汐: </h4><div><h5>xī: </h5><span>night tides, evening ebb tide</span></div>
    </div>
    <div>
      <h4>汗: </h4><div><h5>hàn, hán: </h5><span>perspiration, sweat</span></div>
    </div>
    <div>
      <h4>汝: </h4><div><h5>rǔ: </h5><span>you</span></div>
    </div>
    <div>
      <h4>江: </h4><div><h5>jiāng: </h5><span>large river; yangzi; surname</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>池: </h4><div><h5>chí: </h5><span>pool, pond; moat; cistern</span></div>
    </div>
    <div>
      <h4>污: </h4><div><h5>wū: </h5><span>filthy, dirty, impure, polluted</span></div>
    </div>
    <div>
      <h4>汤: </h4><div><h5>tāng, shāng: </h5><span>hot water; soup, gravy, broth</span></div>
    </div>
    <div>
      <h4>汲: </h4><div><h5>jí: </h5><span>draw water from well; imbibe</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>汨: </h4><div><h5>mì: </h5>
      <span>
        Mi(luo) river in Hunan province where Qu Yuan drowned himself; to
        sink; used (erroneously) for U+6C69 汩
      </span></div>
    </div>
    <div>
      <h4>汪: </h4><div><h5>wāng: </h5><span>vast, extensive, deep; surname</span></div>
    </div>
    <div>
      <h4>汰: </h4><div><h5>tài: </h5><span>excessive; scour, wash out</span></div>
    </div>
    <div>
      <h4>汶: </h4><div><h5>wèn, mén: </h5><span>a river in Shandong province</span></div>
    </div>
    <div>
      <h4>汹: </h4><div><h5>xiōng: </h5><span>turbulent; noisy, restless</span></div>
    </div>
    <div>
      <h4>汽: </h4><div><h5>qì: </h5><span>steam, vapor, gas</span></div>
    </div>
    <div>
      <h4>沁: </h4><div><h5>qìn: </h5><span>soak into, seep in, percolate</span></div>
    </div>
    <div>
      <h4>沂: </h4><div><h5>yí: </h5><span>river in southeast Shandong</span></div>
    </div>
    <div>
      <h4>沃: </h4><div><h5>wò: </h5><span>water, irrigate; fertile, rich</span></div>
    </div>
    <div>
      <h4>沅: </h4><div><h5>yuán: </h5>
      <span>
        name of a river in western Hunan that flows into Dongting lake
      </span></div>
    </div>
    <div>
      <h4>沈: </h4><div><h5>shěn, chén: </h5><span>sink, submerge; addicted to; surname</span></div>
    </div>
    <div>
      <h4>沉: </h4><div><h5>chén: </h5><span>sink, submerge; addicted to</span></div>
    </div>
    <div>
      <h4>沌: </h4><div><h5>dùn: </h5><span>chaotic, confused; turbid, murky</span></div>
    </div>
    <div>
      <h4>沐: </h4><div><h5>mù: </h5><span>bathe, cleanse, wash, shampoo</span></div>
    </div>
    <div>
      <h4>沙: </h4><div><h5>shā, shà: </h5><span>sand, gravel, pebbles; granulated</span></div>
    </div>
    <div>
      <h4>沚: </h4><div><h5>zhǐ: </h5><span>islet in stream; small sandbar</span></div>
    </div>
    <div>
      <h4>沛: </h4><div><h5>pèi: </h5><span>abundant, full, copious; sudden</span></div>
    </div>
    <div>
      <h4>沟: </h4><div><h5>gōu: </h5><span>ditch, drain, narrow waterway</span></div>
    </div>
    <div>
      <h4>没: </h4><div><h5>méi, mò: </h5><span>not, have not, none; drown, sink</span></div>
    </div>
    <div>
      <h4>沥: </h4><div><h5>lì: </h5><span>trickle, drip; strain; dregs</span></div>
    </div>
    <div>
      <h4>沦: </h4><div><h5>lún: </h5><span>be lost; sink, be submerged</span></div>
    </div>
    <div>
      <h4>沧: </h4><div><h5>cāng: </h5><span>blue, dark green; cold</span></div>
    </div>
    <div>
      <h4>沪: </h4><div><h5>hù: </h5><span>Shanghai; river near Shanghai</span></div>
    </div>
    <div>
      <h4>泛: </h4><div><h5>fàn: </h5><span>to drift, float; careless, reckless</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>沫: </h4><div><h5>mò: </h5><span>froth, foam, bubbles, suds</span></div>
    </div>
    <div>
      <h4>沬: </h4><div><h5>mèi: </h5>
      <span>
        dusk; Mei river; Zhou dynasty place-name
      </span></div>
    </div>
    <div>
      <h4>沮: </h4><div><h5>jǔ, jù: </h5><span>stop, prevent; defeated, dejected</span></div>
    </div>
    <div>
      <h4>沱: </h4><div><h5>tuó: </h5><span>rivers, streams, waterways; flow</span></div>
    </div>
    <div>
      <h4>河: </h4><div><h5>hé: </h5><span>river; stream; yellow river</span></div>
    </div>
    <div>
      <h4>沸: </h4><div><h5>fèi: </h5><span>boil, bubble up, gush</span></div>
    </div>
    <div>
      <h4>油: </h4><div><h5>yóu: </h5><span>oil, fat, grease, lard; paints</span></div>
    </div>
    <div>
      <h4>治: </h4><div><h5>zhì: </h5><span>govern, regulate, administer</span></div>
    </div>
    <div>
      <h4>沼: </h4><div><h5>zhǎo: </h5><span>lake, fishpond, swamps</span></div>
    </div>
    <div>
      <h4>沽: </h4><div><h5>gū: </h5><span>buy and sell; inferior in quality</span></div>
    </div>
    <div>
      <h4>沾: </h4><div><h5>zhān: </h5><span>moisten, wet, soak; touch</span></div>
    </div>
    <div>
      <h4>沿: </h4><div><h5>yán: </h5><span>follow a course, go along</span></div>
    </div>
    <div>
      <h4>泄: </h4><div><h5>xiè, yì: </h5><span>leak; vent; flow; reveal</span></div>
    </div>
    <div>
      <h4>泊: </h4><div><h5>bó, pō: </h5><span>anchor vessel; lie at anchor</span></div>
    </div>
    <div>
      <h4>泌: </h4><div><h5>mì, bì: </h5><span>to seep out, excrete</span></div>
    </div>
    <div>
      <h4>泓: </h4><div><h5>hóng: </h5><span>clear, deep pool of water</span></div>
    </div>
    <div>
      <h4>法: </h4><div><h5>fǎ: </h5><span>law, rule, regulation, statute; France, French</span></div>
    </div>
    <div>
      <h4>泞: </h4><div><h5>nìng: </h5><span>mud; miry, muddy, stagnant</span></div>
    </div>
    <div>
      <h4>泠: </h4><div><h5>líng: </h5><span>nice and cool, mild and comfortable</span></div>
    </div>
    <div>
      <h4>泡: </h4><div><h5>pào, pāo: </h5><span>bubbles, suds; blister; soak</span></div>
    </div>
    <div>
      <h4>波: </h4><div><h5>bō: </h5><span>waves, breakers; undulations</span></div>
    </div>
    <div>
      <h4>泣: </h4><div><h5>qì: </h5><span>cry, sob, weep</span></div>
    </div>
    <div>
      <h4>泥: </h4><div><h5>ní, nì: </h5><span>mud, mire; earth, clay; plaster</span></div>
    </div>
    <div>
      <h4>注: </h4><div><h5>zhù: </h5><span>concentrate, focus, direct</span></div>
    </div>
    <div>
      <h4>泪: </h4><div><h5>lèi: </h5><span>tears; weep, cry</span></div>
    </div>
    <div>
      <h4>泯: </h4><div><h5>mǐn: </h5><span>destroy, eliminate; perish</span></div>
    </div>
    <div>
      <h4>泱: </h4><div><h5>yāng: </h5><span>great, expansive; agitated</span></div>
    </div>
    <div>
      <h4>泳: </h4><div><h5>yǒng: </h5><span>dive; swim</span></div>
    </div>
    <div>
      <h4>泷: </h4><div><h5>lóng, shuāng: </h5>
      <span>raining; wet; soaked; a river in Guangdong</span></div>
    </div>
    <div>
      <h4>泻: </h4><div><h5>xiè: </h5><span>drain off, leak; flow, pour down</span></div>
    </div>
    <div>
      <h4>泼: </h4><div><h5>pō: </h5><span>pour, splash, water, sprinkle</span></div>
    </div>
    <div>
      <h4>泽: </h4><div><h5>zé, shì: </h5><span>marsh, swamp; grace, brilliance</span></div>
    </div>
    <div>
      <h4>浅: </h4><div><h5>qiǎn, jiān: </h5><span>shallow, not deep; superficial</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>洁: </h4><div><h5>jié: </h5><span>clean, purify, pure</span></div>
    </div>
    <div>
      <h4>洄: </h4><div><h5>huí: </h5><span>a back-water; an eddy a whirlpool</span></div>
    </div>
    <div>
      <h4>洋: </h4><div><h5>yáng: </h5><span>ocean, sea; foreign; western</span></div>
    </div>
    <div>
      <h4>洒: </h4><div><h5>sǎ, xǐ: </h5>
      <span>sprinkle; scatter; pour; to wipe away; to shiver</span></div>
    </div>
    <div>
      <h4>洗: </h4><div><h5>xǐ, xiǎn: </h5><span>wash, rinse; clean, purify</span></div>
    </div>
    <div>
      <h4>洛: </h4><div><h5>luò: </h5><span>river in Shanxi province; city</span></div>
    </div>
    <div>
      <h4>洞: </h4><div><h5>dòng: </h5><span>cave, grotto; ravine; hole</span></div>
    </div>
    <div>
      <h4>津: </h4><div><h5>jīn: </h5><span>ferry; saliva; ford</span></div>
    </div>
    <div>
      <h4>洪: </h4><div><h5>hóng: </h5><span>vast, immense; flood, deluge</span></div>
    </div>
    <div>
      <h4>洱: </h4><div><h5>ěr: </h5><span>a lake in Yunnan</span></div>
    </div>
    <div>
      <h4>洲: </h4><div><h5>zhōu: </h5><span>continent; island; islet</span></div>
    </div>
    <div>
      <h4>洵: </h4><div><h5>xún: </h5><span>true, real, truly, really</span></div>
    </div>
    <div>
      <h4>洸: </h4><div><h5>guāng: </h5><span>sparkle, glitter</span></div>
    </div>
    <div>
      <h4>洹: </h4><div><h5>huán: </h5><span>river in Henan province</span></div>
    </div>
    <div>
      <h4>活: </h4><div><h5>huó: </h5><span>live, exist, survive; lively</span></div>
    </div>
    <div>
      <h4>洼: </h4><div><h5>wā: </h5><span>hollow; pit; depression; swamp</span></div>
    </div>
    <div>
      <h4>洽: </h4><div><h5>qià: </h5>
      <span>
        to blend with, be in harmony; to penetrate; to cover; a river in
        Shenxi
      </span></div>
    </div>
    <div>
      <h4>派: </h4><div><h5>pài: </h5><span>school of thought, sect, branch</span></div>
    </div>
    <div>
      <h4>浇: </h4><div><h5>jiāo: </h5><span>spray, water, sprinkle</span></div>
    </div>
    <div>
      <h4>浊: </h4><div><h5>zhuó: </h5><span>muddy, turbid, dirty, filthy</span></div>
    </div>
    <div>
      <h4>测: </h4><div><h5>cè: </h5><span>measure, estimate, conjecture</span></div>
    </div>
    <div>
      <h4>济: </h4><div><h5>jì, jǐ: </h5><span>help, aid, relieve; ferry, cross</span></div>
    </div>
    <div>
      <h4>浏: </h4><div><h5>liú: </h5><span>clear; bright; whistling</span></div>
    </div>
    <div>
      <h4>浑: </h4><div><h5>hún: </h5><span>muddy, turbid; blend, merge, mix</span></div>
    </div>
    <div>
      <h4>浒: </h4><div><h5>hǔ, xǔ: </h5><span>riverbank, shore</span></div>
    </div>
    <div>
      <h4>浓: </h4><div><h5>nóng: </h5><span>thick, strong, concentrated</span></div>
    </div>
    <div>
      <h4>涎: </h4><div><h5>xián: </h5><span>saliva</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>流: </h4><div><h5>liú: </h5><span>flow, circulate, drift; class</span></div>
    </div>
    <div>
      <h4>浙: </h4><div><h5>zhè: </h5><span>Zhejiang province; river</span></div>
    </div>
    <div>
      <h4>浚: </h4><div><h5>jùn, xùn: </h5><span>dredge</span></div>
    </div>
    <div>
      <h4>浣: </h4><div><h5>huàn: </h5><span>to wash, to rinse</span></div>
    </div>
    <div>
      <h4>浦: </h4><div><h5>pǔ: </h5><span>bank of river, shore; surname</span></div>
    </div>
    <div>
      <h4>浩: </h4><div><h5>hào: </h5><span>great, numerous, vast, abundant</span></div>
    </div>
    <div>
      <h4>浪: </h4><div><h5>làng: </h5><span>wave; wasteful, reckless</span></div>
    </div>
    <div>
      <h4>浬: </h4><div><h5>lǐ, hǎilǐ: </h5><span>nautical mile</span></div>
    </div>
    <div>
      <h4>浮: </h4><div><h5>fú: </h5><span>to float, drift, waft; to exceed; superfluous</span></div>
    </div>
    <div>
      <h4>浯: </h4><div><h5>wú: </h5><span></span></div>
    </div>
    <div>
      <h4>浴: </h4><div><h5>yù: </h5><span>bathe, wash; bath</span></div>
    </div>
    <div>
      <h4>海: </h4><div><h5>hǎi: </h5><span>sea, ocean; maritime</span></div>
    </div>
    <div>
      <h4>浸: </h4><div><h5>jìn: </h5><span>soak, immerse, dip, percolate</span></div>
    </div>
    <div>
      <h4>涂: </h4><div><h5>tú: </h5><span>surname; name of certain rivers</span></div>
    </div>
    <div>
      <h4>涅: </h4><div><h5>niè: </h5><span>blacken; black mud, slime; tatto</span></div>
    </div>
    <div>
      <h4>消: </h4><div><h5>xiāo: </h5><span>vanish, die out; melt away</span></div>
    </div>
    <div>
      <h4>涉: </h4><div><h5>shè: </h5><span>ford stream, wade across</span></div>
    </div>
    <div>
      <h4>涌: </h4><div><h5>yǒng, chōng: </h5><span>surge up, bubble up, gush forth</span></div>
    </div>
    <div>
      <h4>涓: </h4><div><h5>juān: </h5><span>brook, stream; select; pure</span></div>
    </div>
    <div>
      <h4>涔: </h4><div><h5>cén: </h5><span>river in Shaanxi; murky torrent</span></div>
    </div>
    <div>
      <h4>涕: </h4><div><h5>tì: </h5><span>tear; snivel, nasal mucus</span></div>
    </div>
    <div>
      <h4>涘: </h4><div><h5>sì: </h5><span>river bank; water's edge</span></div>
    </div>
    <div>
      <h4>涛: </h4><div><h5>tāo: </h5><span>large waves</span></div>
    </div>
    <div>
      <h4>涟: </h4><div><h5>lián: </h5><span>flowing water; ripples; weeping</span></div>
    </div>
    <div>
      <h4>涡: </h4><div><h5>wō, guō: </h5><span>swirl, whirlpool, eddy</span></div>
    </div>
    <div>
      <h4>涣: </h4><div><h5>huàn: </h5><span>scatter; scattered</span></div>
    </div>
    <div>
      <h4>涤: </h4><div><h5>dí: </h5><span>wash, cleanse, purify; sweep</span></div>
    </div>
    <div>
      <h4>润: </h4><div><h5>rùn: </h5><span>soft, moist; sleek; freshen</span></div>
    </div>
    <div>
      <h4>涧: </h4><div><h5>jiàn: </h5><span>brook, mountain stream</span></div>
    </div>
    <div>
      <h4>涨: </h4><div><h5>zhǎng, zhàng: </h5><span>rise in price</span></div>
    </div>
    <div>
      <h4>涩: </h4><div><h5>sè: </h5><span>astringent; harsh; uneven, rough</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>涪: </h4><div><h5>fú: </h5><span>river in Sichuan province</span></div>
    </div>
    <div>
      <h4>涯: </h4><div><h5>yá: </h5><span>shore, bank, water's edge</span></div>
    </div>
    <div>
      <h4>液: </h4><div><h5>yè: </h5><span>sap, juice, liquid, fluid</span></div>
    </div>
    <div>
      <h4>涵: </h4><div><h5>hán: </h5><span>soak, wet; tolerate, be lenient</span></div>
    </div>
    <div>
      <h4>涸: </h4><div><h5>hé: </h5><span>dried up; exhausted, tired; dry</span></div>
    </div>
    <div>
      <h4>淀: </h4><div><h5>diàn: </h5><span>shallow water, swamp; swampy</span></div>
    </div>
    <div>
      <h4>淂: </h4><div><h5>dé: </h5><span></span></div>
    </div>
    <div>
      <h4>淅: </h4><div><h5>xī: </h5><span>water used wash rice; to wash ric</span></div>
    </div>
    <div>
      <h4>淆: </h4><div><h5>xiáo: </h5><span>confused, in disarray, mixed up</span></div>
    </div>
    <div>
      <h4>淇: </h4><div><h5>qí: </h5><span>river in Henan province</span></div>
    </div>
    <div>
      <h4>淋: </h4><div><h5>lín, lìn: </h5><span>drip, soak, drench; perfectly</span></div>
    </div>
    <div>
      <h4>淌: </h4><div><h5>tǎng, chǎng: </h5><span>trickle; flow down; drip</span></div>
    </div>
    <div>
      <h4>淑: </h4><div><h5>shū: </h5><span>good, pure, virtuous, charming</span></div>
    </div>
    <div>
      <h4>淘: </h4><div><h5>táo: </h5><span>wash in sieve; weed out</span></div>
    </div>
    <div>
      <h4>淙: </h4><div><h5>cóng: </h5><span>gurgling sound of water</span></div>
    </div>
    <div>
      <h4>淡: </h4><div><h5>dàn: </h5><span>weak, watery; insipid, tasteless</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>淤: </h4><div><h5>yū: </h5><span>mud, sediment; clog up, silt up</span></div>
    </div>
    <div>
      <h4>淦: </h4><div><h5>gàn: </h5>
      <span>river in Jiangxi province; water leaking into a boat</span></div>
    </div>
    <div>
      <h4>淩: </h4><div><h5>líng: </h5><span>pass over, cross, traverse</span></div>
    </div>
    <div>
      <h4>淫: </h4><div><h5>yín: </h5><span>obscene, licentious, lewd</span></div>
    </div>
    <div>
      <h4>淬: </h4><div><h5>cuì: </h5><span>quench; dye; soak; change, alter</span></div>
    </div>
    <div>
      <h4>淮: </h4><div><h5>huái: </h5><span>river in Anhui province</span></div>
    </div>
    <div>
      <h4>深: </h4><div><h5>shēn: </h5><span>deep; depth; far; very, extreme</span></div>
    </div>
    <div>
      <h4>淳: </h4><div><h5>chún, zhūn: </h5>
      <span>honest, simple, unsophisticated; cyanogen; ethane dinitrile</span></div>
    </div>
    <div>
      <h4>混: </h4><div><h5>hùn, hún: </h5><span>to mix, blend, mingle; to bumble along</span></div>
    </div>
    <div>
      <h4>淹: </h4><div><h5>yān: </h5><span>drown; cover with liquid, steep</span></div>
    </div>
    <div>
      <h4>添: </h4><div><h5>tiān: </h5><span>append, add to; increase</span></div>
    </div>
    <div>
      <h4>清: </h4><div><h5>qīng: </h5><span>clear, pure, clean; peaceful</span></div>
    </div>
    <div>
      <h4>渊: </h4><div><h5>yuān: </h5><span>surge up, bubble up, gush forth</span></div>
    </div>
    <div>
      <h4>渍: </h4><div><h5>zì: </h5><span>soak, steep; dye; stains; sodden</span></div>
    </div>
    <div>
      <h4>渎: </h4><div><h5>dú, dòu: </h5><span>ditch, sluice, gutter, drain</span></div>
    </div>
    <div>
      <h4>渐: </h4><div><h5>jiàn, jiān: </h5><span>gradually</span></div>
    </div>
    <div>
      <h4>渔: </h4><div><h5>yú: </h5><span>to fish; seize; pursue; surname</span></div>
    </div>
    <div>
      <h4>渗: </h4><div><h5>shèn: </h5><span>soak through, infiltrate</span></div>
    </div>
    <div>
      <h4>渚: </h4><div><h5>zhǔ: </h5><span>small sand bank, islet</span></div>
    </div>
    <div>
      <h4>渠: </h4><div><h5>qú, jù: </h5><span>ditch, canal, channel, gutter</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>渝: </h4><div><h5>yú: </h5><span>change; chongqing</span></div>
    </div>
    <div>
      <h4>渡: </h4><div><h5>dù: </h5><span>cross, ferry over; ferry</span></div>
    </div>
    <div>
      <h4>渣: </h4><div><h5>zhā: </h5><span>refuse, dregs, lees, sediment</span></div>
    </div>
    <div>
      <h4>渤: </h4><div><h5>bó: </h5><span>swelling; the Gulf of Hopei (Hebei)</span></div>
    </div>
    <div>
      <h4>渥: </h4><div><h5>wò: </h5><span>moisten, soak; great, deep; dye; to enrich</span></div>
    </div>
    <div>
      <h4>温: </h4><div><h5>wēn: </h5><span>lukewarm</span></div>
    </div>
    <div>
      <h4>渭: </h4><div><h5>wèi: </h5><span>name of a river in Shanxi</span></div>
    </div>
    <div>
      <h4>港: </h4><div><h5>gǎng, jiǎng: </h5><span>port, harbor; small stream; bay</span></div>
    </div>
    <div>
      <h4>渲: </h4><div><h5>xuàn: </h5><span>add repeated washes of color</span></div>
    </div>
    <div>
      <h4>渴: </h4><div><h5>kě: </h5><span>thirsty, parched; yearn, pine</span></div>
    </div>
    <div>
      <h4>游: </h4><div><h5>yóu: </h5><span>to swim; float, drift; wander, roam</span></div>
    </div>
    <div>
      <h4>渺: </h4><div><h5>miǎo: </h5><span>endlessly long, boundless, vast</span></div>
    </div>
    <div>
      <h4>湃: </h4><div><h5>pài: </h5><span>sound of waves; turbulent</span></div>
    </div>
    <div>
      <h4>湄: </h4><div><h5>méi: </h5><span>water's edge, shore, bank</span></div>
    </div>
    <div>
      <h4>湍: </h4><div><h5>tuān: </h5><span>rapid water current, rapids</span></div>
    </div>
    <div>
      <h4>湖: </h4><div><h5>hú: </h5><span>a lake; Hubei, Hunan; bluish-green</span></div>
    </div>
    <div>
      <h4>湘: </h4><div><h5>xiāng: </h5><span>Hunan province</span></div>
    </div>
    <div>
      <h4>湛: </h4><div><h5>zhàn: </h5><span>deep; profound; clear; tranquil, placid</span></div>
    </div>
    <div>
      <h4>湮: </h4><div><h5>yān, yīn: </h5><span>bury, sink, block up; stain</span></div>
    </div>
    <div>
      <h4>湾: </h4><div><h5>wān: </h5><span>bay, cove, inlet, bend of stream</span></div>
    </div>
    <div>
      <h4>湿: </h4><div><h5>shī: </h5><span>wet, moist, humid, damp; illness</span></div>
    </div>
    <div>
      <h4>溃: </h4><div><h5>kuì, huì: </h5><span>flooding river; militarily defeat</span></div>
    </div>
    <div>
      <h4>溅: </h4><div><h5>jiàn, jiān: </h5><span>sprinkle, spray; spill, splash</span></div>
    </div>
    <div>
      <h4>溉: </h4><div><h5>gài: </h5><span>water, irrigate, flood; wash</span></div>
    </div>
    <div>
      <h4>滋: </h4><div><h5>zī: </h5><span>grow, multiply, increase; thrive</span></div>
    </div>
    <div>
      <h4>滑: </h4><div><h5>huá: </h5><span>slip, slide; slippery, polished</span></div>
    </div>
    <div>
      <h4>滞: </h4><div><h5>zhì: </h5><span>block up, obstruct; stagnant</span></div>
    </div>
    <h3>画10</h3>
    <div>
      <h4>源: </h4><div><h5>yuán: </h5><span>spring; source, head; surname</span></div>
    </div>
    <div>
      <h4>溜: </h4><div><h5>liū, liù: </h5><span>slide, glide, slip; slippery</span></div>
    </div>
    <div>
      <h4>溢: </h4><div><h5>yì: </h5><span>overflow, brim over; full</span></div>
    </div>
    <div>
      <h4>溪: </h4><div><h5>xī: </h5><span>mountain stream, creek</span></div>
    </div>
    <div>
      <h4>溯: </h4><div><h5>sù: </h5><span>go upstream, go against current; formerly</span></div>
    </div>
    <div>
      <h4>溶: </h4><div><h5>róng: </h5><span>to melt, dissolve; overflowing with</span></div>
    </div>
    <div>
      <h4>溺: </h4><div><h5>nì, niào: </h5><span>drown; submerge in water; indulge</span></div>
    </div>
    <div>
      <h4>滂: </h4><div><h5>pāng: </h5><span>torrential; voluminous</span></div>
    </div>
    <div>
      <h4>滔: </h4><div><h5>tāo: </h5><span>overflow; rushing water, a torrent</span></div>
    </div>
    <div>
      <h4>滚: </h4><div><h5>gǔn: </h5><span>turn</span></div>
    </div>
    <div>
      <h4>满: </h4><div><h5>mǎn: </h5><span>fill; full, satisfied</span></div>
    </div>
    <div>
      <h4>滢: </h4><div><h5>yíng: </h5><span>clear, pure water; lucid; glossy</span></div>
    </div>
    <div>
      <h4>滤: </h4><div><h5>lǜ: </h5><span>strain out, filter</span></div>
    </div>
    <div>
      <h4>滥: </h4><div><h5>làn: </h5><span>flood, overflow; excessive</span></div>
    </div>
    <div>
      <h4>滨: </h4><div><h5>bīn: </h5><span>beach, sea coast; river bank</span></div>
    </div>
    <div>
      <h4>滩: </h4><div><h5>tān: </h5><span>bank, a sandbar, shoal; rapids</span></div>
    </div>
    <div>
      <h4>漓: </h4><div><h5>lí: </h5><span>river in Guangxi province; water dripping</span></div>
    </div>
    <div>
      <h4>漠: </h4><div><h5>mò: </h5><span>desert; aloof, indifferent, cool</span></div>
    </div>
    <h3>画11</h3>
    <div>
      <h4>滮: </h4><div><h5>biāo: </h5><span>flow</span></div>
    </div>
    <div>
      <h4>滴: </h4><div><h5>dī: </h5><span>drip; drop of water</span></div>
    </div>
    <div>
      <h4>漂: </h4><div><h5>piāo, piǎo, piào: </h5><span>float, drift; tossed about</span></div>
    </div>
    <div>
      <h4>漆: </h4><div><h5>qī: </h5><span>varnish, lacquer, paint</span></div>
    </div>
    <div>
      <h4>漏: </h4><div><h5>lòu: </h5><span>leak, drip; funnel; hour glass</span></div>
    </div>
    <div>
      <h4>演: </h4><div><h5>yǎn: </h5><span>perform, put on; exercise</span></div>
    </div>
    <div>
      <h4>漩: </h4><div><h5>xuán: </h5><span>eddy, whirlpool</span></div>
    </div>
    <div>
      <h4>漪: </h4><div><h5>yī: </h5><span>ripples on water; swirling</span></div>
    </div>
    <div>
      <h4>漫: </h4><div><h5>màn: </h5><span>overflow of water; spreading</span></div>
    </div>
    <div>
      <h4>漱: </h4><div><h5>shù: </h5><span>gargle, rinse; wash, scour</span></div>
    </div>
    <div>
      <h4>漳: </h4><div><h5>zhāng: </h5><span>name of a river in Henan</span></div>
    </div>
    <div>
      <h4>漾: </h4><div><h5>yàng: </h5><span>overflow; swirl, ripple; to be tosssed by waves</span></div>
    </div>
    <div>
      <h4>潇: </h4><div><h5>xiāo: </h5><span>sound of beating wind and rain</span></div>
    </div>
    <div>
      <h4>潢: </h4><div><h5>huáng, guāng: </h5><span>expanse of water, lake, pond</span></div>
    </div>
    <h3>画12</h3>
    <div>
      <h4>潘: </h4><div><h5>pān: </h5>
      <span>
        surname; water in which rice has been rinsed; a river that flows into
        the Han
      </span></div>
    </div>
    <div>
      <h4>潜: </h4><div><h5>qián: </h5><span>hide; hidden, secret, latent</span></div>
    </div>
    <div>
      <h4>潦: </h4><div><h5>lǎo, lào, liáo: </h5><span>to flood; a puddle; without care</span></div>
    </div>
    <div>
      <h4>潭: </h4><div><h5>tán: </h5><span>deep pool, lake; deep, profound</span></div>
    </div>
    <div>
      <h4>潮: </h4><div><h5>cháo: </h5><span>tide; moist, wet, damp; flow</span></div>
    </div>
    <div>
      <h4>潸: </h4><div><h5>shān: </h5><span>weep; tears flowing</span></div>
    </div>
    <div>
      <h4>潺: </h4><div><h5>chán: </h5><span>sound of flowing water</span></div>
    </div>
    <div>
      <h4>澄: </h4><div><h5>chéng, dèng: </h5>
      <span>purify water by allowing sediment to settle; clear, pure</span></div>
    </div>
    <div>
      <h4>澈: </h4><div><h5>chè: </h5><span>thoroughly, completely</span></div>
    </div>
    <div>
      <h4>澍: </h4><div><h5>shù, zhù: </h5><span>timely rain, life-giving rain</span></div>
    </div>
    <div>
      <h4>澎: </h4><div><h5>péng: </h5><span>splatter</span></div>
    </div>
    <div>
      <h4>澜: </h4><div><h5>lán: </h5><span>overflowing; waves, ripples</span></div>
    </div>
    <div>
      <h4>澳: </h4><div><h5>ào: </h5><span>inlet, bay; dock, bank</span></div>
    </div>
    <h3>画13</h3>
    <div>
      <h4>潞: </h4><div><h5>lù: </h5><span>river in northern china</span></div>
    </div>
    <div>
      <h4>澡: </h4><div><h5>zǎo: </h5><span>wash, bathe</span></div>
    </div>
    <div>
      <h4>澹: </h4><div><h5>dàn, tán: </h5><span>calm, quiet, tranquil</span></div>
    </div>
    <div>
      <h4>激: </h4><div><h5>jī: </h5><span>arouse, excite, incite; quickly</span></div>
    </div>
    <div>
      <h4>濂: </h4><div><h5>lián: </h5><span>a waterfall; a river in Hunan</span></div>
    </div>
    <div>
      <h4>濑: </h4><div><h5>lài: </h5><span>swift current; rapids</span></div>
    </div>
    <div>
      <h4>濒: </h4><div><h5>bīn: </h5><span>approach, be on verge of; near</span></div>
    </div>
    <h3>画14-17</h3>
    <div>
      <h4>濠: </h4><div><h5>háo: </h5><span>moat, trench, ditch</span></div>
    </div>
    <div>
      <h4>濡: </h4><div><h5>rú: </h5><span>immerse, moisten; wet, damp</span></div>
    </div>
    <div>
      <h4>濯: </h4><div><h5>zhuó, zhào: </h5><span>wash out, rinse; cleanse</span></div>
    </div>
    <div>
      <h4>瀑: </h4><div><h5>pù, bào: </h5><span>waterfall, cascade; heavy rain</span></div>
    </div>
    <div>
      <h4>瀚: </h4><div><h5>hàn: </h5><span>vast, wide, extensive</span></div>
    </div>
    <div>
      <h4>瀛: </h4><div><h5>yíng: </h5><span>sea, ocean</span></div>
    </div>
    <div>
      <h4>灌: </h4><div><h5>guàn: </h5><span>pour; water; irrigate, flood</span></div>
    </div>
    <h1>73: 犭</h1>
    <h3>画2-4</h3>
    <div>
      <h4>犯: </h4><div><h5>fàn: </h5><span>commit crime, violate; criminal</span></div>
    </div>
    <div>
      <h4>犷: </h4><div><h5>guǎng: </h5><span>fierce, rude, uncivilized</span></div>
    </div>
    <div>
      <h4>犹: </h4><div><h5>yóu: </h5><span>like, similar to, just like, as</span></div>
    </div>
    <div>
      <h4>狂: </h4><div><h5>kuáng: </h5><span>insane, mad; violent; wild</span></div>
    </div>
    <div>
      <h4>狄: </h4><div><h5>dí: </h5><span>tribe from northern china; surnam</span></div>
    </div>
    <div>
      <h4>狈: </h4><div><h5>bèi: </h5>
      <span>a legendary animal with short forelegs which rode a wolf</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>狐: </h4><div><h5>hú: </h5><span>species of fox</span></div>
    </div>
    <div>
      <h4>狒: </h4><div><h5>fèi: </h5><span>baboon</span></div>
    </div>
    <div>
      <h4>狗: </h4><div><h5>gǒu: </h5><span>dog, canis familiaris</span></div>
    </div>
    <div>
      <h4>狙: </h4><div><h5>jū: </h5><span>an ape, monkey; to spy, watch for; to lie</span></div>
    </div>
    <div>
      <h4>狞: </h4><div><h5>níng: </h5><span>ferocious appearance; hideous</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>狠: </h4><div><h5>hěn: </h5><span>vicious, cruel; severely, extreme</span></div>
    </div>
    <div>
      <h4>狡: </h4><div><h5>jiǎo: </h5><span>cunning, deceitful, treacherous</span></div>
    </div>
    <div>
      <h4>狩: </h4><div><h5>shòu: </h5><span>winter hunting; imperial tour</span></div>
    </div>
    <div>
      <h4>独: </h4><div><h5>dú: </h5><span>alone, single, solitary, only</span></div>
    </div>
    <div>
      <h4>狭: </h4><div><h5>xiá: </h5><span>narrow, limited; narrow-minded</span></div>
    </div>
    <div>
      <h4>狮: </h4><div><h5>shī: </h5><span>lion</span></div>
    </div>
    <div>
      <h4>狰: </h4><div><h5>zhēng: </h5><span>fierce-looking, ferocious</span></div>
    </div>
    <div>
      <h4>狱: </h4><div><h5>yù: </h5><span>prison, jail; case; lawsuit</span></div>
    </div>
    </section>
    <section>
    <h3>画7</h3>
    <div>
      <h4>狷: </h4><div><h5>juàn: </h5><span>rash, impetuous, impulsive</span></div>
    </div>
    <div>
      <h4>狸: </h4><div><h5>lí: </h5><span>fox</span></div>
    </div>
    <div>
      <h4>狼: </h4><div><h5>láng: </h5><span>wolf</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>猎: </h4><div><h5>liè: </h5><span>hunt; field sports</span></div>
    </div>
    <div>
      <h4>猕: </h4><div><h5>mí: </h5><span>macacus monkey</span></div>
    </div>
    <div>
      <h4>猖: </h4><div><h5>chāng: </h5><span>mad, wild, reckless, unruly</span></div>
    </div>
    <div>
      <h4>猛: </h4><div><h5>měng: </h5><span>violent, savage, cruel; bold</span></div>
    </div>
    <div>
      <h4>猜: </h4><div><h5>cāi: </h5><span>guess, conjecture, suppose; feel</span></div>
    </div>
    <div>
      <h4>猝: </h4><div><h5>cù: </h5><span>abruptly, suddenly; abrupt</span></div>
    </div>
    <div>
      <h4>猪: </h4><div><h5>zhū: </h5><span>pig, hog, wild boar</span></div>
    </div>
    <div>
      <h4>猫: </h4><div><h5>māo, máo: </h5><span>cat</span></div>
    </div>
    <h3>画9-10</h3>
    <div>
      <h4>猥: </h4><div><h5>wěi: </h5><span>vulgar, low, cheap; wanton; obscene</span></div>
    </div>
    <div>
      <h4>猩: </h4><div><h5>xīng: </h5><span>species of orangutan</span></div>
    </div>
    <div>
      <h4>猬: </h4><div><h5>wèi: </h5>
      <span>vulgar; wanton; low; many; varied; a hedgehog, porcupine</span></div>
    </div>
    <div>
      <h4>猴: </h4><div><h5>hóu: </h5><span>monkey, ape; monkey-like</span></div>
    </div>
    <div>
      <h4>猾: </h4><div><h5>huá: </h5><span>crafty, cunning, shrewd; deceitful</span></div>
    </div>
    <div>
      <h4>猿: </h4><div><h5>yuán: </h5><span>ape</span></div>
    </div>
    <h3>画12-13</h3>
    <div>
      <h4>獗: </h4><div><h5>jué: </h5><span>unruly, wild, violent, lawless</span></div>
    </div>
    <div>
      <h4>獠: </h4><div><h5>liáo: </h5><span>to hunt at night by torches</span></div>
    </div>
    <div>
      <h4>獭: </h4><div><h5>tǎ: </h5><span>otter</span></div>
    </div>
    <h1>74: 纟</h1>
    <h3>画2-3</h3>
    <div>
      <h4>纠: </h4><div><h5>jiū: </h5><span>investigate, inspect</span></div>
    </div>
    <div>
      <h4>红: </h4><div><h5>hóng, gōng: </h5><span>red, vermillion; blush, flush</span></div>
    </div>
    <div>
      <h4>纣: </h4><div><h5>zhòu: </h5><span>name of an emperor; saddle part</span></div>
    </div>
    <div>
      <h4>纤: </h4><div><h5>xiān, qiàn: </h5><span>fine, delicate; minute; graceful</span></div>
    </div>
    <div>
      <h4>约: </h4><div><h5>yuē, yāo: </h5><span>treaty, agreement, covenant</span></div>
    </div>
    <div>
      <h4>级: </h4><div><h5>jí: </h5><span>level, rank, class; grade</span></div>
    </div>
    <div>
      <h4>纨: </h4><div><h5>wán: </h5><span>white silk, fine silk; gauze</span></div>
    </div>
    <div>
      <h4>纪: </h4><div><h5>jì, jǐ: </h5><span>record, annal, historical account</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>纬: </h4><div><h5>wěi: </h5><span>woof; parallels of latitude</span></div>
    </div>
    <div>
      <h4>纭: </h4><div><h5>yún: </h5><span>confused, in disorder; numerous</span></div>
    </div>
    <div>
      <h4>纯: </h4><div><h5>chún: </h5><span>pure, clean, simple</span></div>
    </div>
    <div>
      <h4>纰: </h4><div><h5>pī, pí, bǐ: </h5><span>spoiled silk; hem of dress; mista</span></div>
    </div>
    <div>
      <h4>纱: </h4><div><h5>shā: </h5><span>gauze, thin silk; yarn, thread</span></div>
    </div>
    <div>
      <h4>纲: </h4><div><h5>gāng: </h5><span>heavy rope, hawser; main points</span></div>
    </div>
    <div>
      <h4>纳: </h4><div><h5>nà: </h5><span>admit, take, receive, accept</span></div>
    </div>
    <div>
      <h4>纵: </h4><div><h5>zòng, zǒng: </h5><span>indulge in, give free reign to</span></div>
    </div>
    <div>
      <h4>纶: </h4><div><h5>lún, guān: </h5><span>green silk thread or tassel</span></div>
    </div>
    <div>
      <h4>纷: </h4><div><h5>fēn: </h5><span>in disorder, scattered, tangled</span></div>
    </div>
    <div>
      <h4>纸: </h4><div><h5>zhǐ: </h5><span>paper</span></div>
    </div>
    <div>
      <h4>纹: </h4><div><h5>wén, wèn: </h5><span>line, streak, stripe; wrinkle</span></div>
    </div>
    <div>
      <h4>纺: </h4><div><h5>fǎng: </h5><span>spin, reel, weave; reeled pongee</span></div>
    </div>
    <div>
      <h4>纽: </h4><div><h5>niǔ: </h5><span>knot; button; handle, knob; tie</span></div>
    </div>
    <div>
      <h4>纾: </h4><div><h5>shū: </h5><span>loosen, relax, relieve; extricate</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>线: </h4><div><h5>xiàn: </h5><span>line, thread, wire; clue</span></div>
    </div>
    <div>
      <h4>绁: </h4><div><h5>xiè: </h5><span>to contract, draw in, reduce, shorten</span></div>
    </div>
    <div>
      <h4>练: </h4><div><h5>liàn: </h5><span>to practice, drill, exercise, train</span></div>
    </div>
    <div>
      <h4>组: </h4><div><h5>zǔ: </h5><span>class; section, department</span></div>
    </div>
    <div>
      <h4>绅: </h4><div><h5>shēn: </h5><span>girdle; tie, bind; gentry</span></div>
    </div>
    <div>
      <h4>细: </h4><div><h5>xì: </h5><span>fine, tiny; slender, thin</span></div>
    </div>
    <div>
      <h4>织: </h4><div><h5>zhī, zhì: </h5><span>weave, knit; organize, unite</span></div>
    </div>
    <div>
      <h4>终: </h4><div><h5>zhōng: </h5><span>end; finally, in the end</span></div>
    </div>
    <div>
      <h4>绊: </h4><div><h5>bàn: </h5><span>loop, catch; fetter, shackle</span></div>
    </div>
    <div>
      <h4>绍: </h4><div><h5>shào: </h5><span>continue, carry on; join</span></div>
    </div>
    <div>
      <h4>绎: </h4><div><h5>yì: </h5><span>to unravel or unreel silk; to interpret</span></div>
    </div>
    <div>
      <h4>经: </h4><div><h5>jīng: </h5><span>classic works; pass through</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>绑: </h4><div><h5>bǎng: </h5><span>bind, tie, fasten</span></div>
    </div>
    <div>
      <h4>绒: </h4><div><h5>róng: </h5><span>silk, cotton, or woolen fabric</span></div>
    </div>
    <div>
      <h4>结: </h4><div><h5>jié, jiē: </h5><span>knot, tie; join, connect</span></div>
    </div>
    <div>
      <h4>绕: </h4><div><h5>rào: </h5><span>entwine; wind around; surround</span></div>
    </div>
    <div>
      <h4>绘: </h4><div><h5>huì: </h5><span>draw, sketch, paint</span></div>
    </div>
    <div>
      <h4>给: </h4><div><h5>gěi, jǐ: </h5><span>give; by, for</span></div>
    </div>
    <div>
      <h4>绚: </h4><div><h5>xuàn: </h5><span>variegated, adorned; brilliant</span></div>
    </div>
    <div>
      <h4>绛: </h4><div><h5>jiàng: </h5><span>deep red; river in Shanxi provinc</span></div>
    </div>
    <div>
      <h4>络: </h4><div><h5>luò, lào: </h5><span>enmesh, wrap around; web, net</span></div>
    </div>
    <div>
      <h4>绝: </h4><div><h5>jué: </h5><span>to cut, sever, break off, terminate</span></div>
    </div>
    <div>
      <h4>绞: </h4><div><h5>jiǎo: </h5><span>twist, wring; intertwine; winch</span></div>
    </div>
    <div>
      <h4>统: </h4><div><h5>tǒng: </h5><span>govern, command, control; unite</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>绢: </h4><div><h5>juàn: </h5><span>kind of thick stiff silk</span></div>
    </div>
    <div>
      <h4>绣: </h4><div><h5>xiù: </h5><span>embroider; embroidery; ornament</span></div>
    </div>
    <div>
      <h4>绥: </h4><div><h5>suí: </h5><span>soothe, appease, pacify</span></div>
    </div>
    <div>
      <h4>继: </h4><div><h5>jì: </h5><span>continue, maintain, carry on</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>绩: </h4><div><h5>jì: </h5><span>spin; achievements</span></div>
    </div>
    <div>
      <h4>绪: </h4><div><h5>xù: </h5><span>end of thread; thread, clue</span></div>
    </div>
    <div>
      <h4>绫: </h4><div><h5>líng: </h5><span>thin silk, damask silk</span></div>
    </div>
    <div>
      <h4>续: </h4><div><h5>xù: </h5><span>continue, carry on; succeed</span></div>
    </div>
    <div>
      <h4>绮: </h4><div><h5>qǐ: </h5><span>fine thin silk; elegant, beautifu</span></div>
    </div>
    <div>
      <h4>绯: </h4><div><h5>fēi: </h5><span>scarlet, dark red, crimson; purpl</span></div>
    </div>
    <div>
      <h4>绰: </h4><div><h5>chuò, chāo: </h5><span>graceful, delicate; spacious</span></div>
    </div>
    <div>
      <h4>绳: </h4><div><h5>shéng: </h5><span>rope, string, cord; control</span></div>
    </div>
    <div>
      <h4>维: </h4><div><h5>wéi: </h5><span>maintain, preserve, safeguard</span></div>
    </div>
    <div>
      <h4>绵: </h4><div><h5>mián: </h5><span>cotton wad; wool; soft, downy</span></div>
    </div>
    <div>
      <h4>绷: </h4><div><h5>bēng, běng, bèng: </h5><span>bind, draw firmly, strap</span></div>
    </div>
    <div>
      <h4>绸: </h4><div><h5>chóu: </h5><span>silk cloth, satin damask</span></div>
    </div>
    <div>
      <h4>绻: </h4><div><h5>quǎn: </h5><span>affectionate, solicitous</span></div>
    </div>
    <div>
      <h4>综: </h4><div><h5>zōng, zèng: </h5><span>arrange threads for weaving</span></div>
    </div>
    <div>
      <h4>绽: </h4><div><h5>zhàn: </h5><span>ripped seam, rend, crack</span></div>
    </div>
    <div>
      <h4>绿: </h4><div><h5>lǜ, lù: </h5><span>green; chlorine</span></div>
    </div>
    <div>
      <h4>缀: </h4><div><h5>zhuì: </h5><span>patch together, link, connect</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>缄: </h4><div><h5>jiān: </h5><span>seal, close; bind; letter</span></div>
    </div>
    <div>
      <h4>缅: </h4><div><h5>miǎn: </h5><span>distant, remote; think of</span></div>
    </div>
    <div>
      <h4>缆: </h4><div><h5>lǎn: </h5><span>hawser, heavy-duty rope, cable</span></div>
    </div>
    <div>
      <h4>缇: </h4><div><h5>tí: </h5><span>reddish color, red, brown</span></div>
    </div>
    <div>
      <h4>缈: </h4><div><h5>miǎo: </h5><span>indistinct, dim; minute; distant</span></div>
    </div>
    <div>
      <h4>缉: </h4><div><h5>jī, qī: </h5><span>to sew in close stitches</span></div>
    </div>
    <div>
      <h4>缎: </h4><div><h5>duàn: </h5><span>satin</span></div>
    </div>
    <div>
      <h4>缓: </h4><div><h5>huǎn: </h5><span>slow, leisurely; to postpone, delay</span></div>
    </div>
    <div>
      <h4>缔: </h4><div><h5>dì: </h5><span>tie, join, connect; connection</span></div>
    </div>
    <div>
      <h4>缕: </h4><div><h5>lǚ: </h5><span>thread; detailed, precise</span></div>
    </div>
    <div>
      <h4>编: </h4><div><h5>biān: </h5><span>knit, weave; arrange; compile</span></div>
    </div>
    <div>
      <h4>缘: </h4><div><h5>yuán: </h5><span>hem, margin; reason, cause; fate</span></div>
    </div>
    <h3>画10</h3>
    <div>
      <h4>缚: </h4><div><h5>fù: </h5><span>to tie</span></div>
    </div>
    <div>
      <h4>缝: </h4><div><h5>féng, fèng: </h5><span>sew, mend</span></div>
    </div>
    <div>
      <h4>缠: </h4><div><h5>chán: </h5><span>wrap, wind around; tie, bind</span></div>
    </div>
    <div>
      <h4>缤: </h4><div><h5>bīn: </h5><span>flourishing, thriving, abundant</span></div>
    </div>
    <h3>画11-12</h3>
    <div>
      <h4>缥: </h4><div><h5>piǎo, piāo: </h5><span>light blue silk; dim; misty</span></div>
    </div>
    <div>
      <h4>缨: </h4><div><h5>yīng: </h5><span>a chin strap; tassel; to annoy, bother</span></div>
    </div>
    <div>
      <h4>缩: </h4><div><h5>suō, sù: </h5><span>contract, draw in, reduce</span></div>
    </div>
    <div>
      <h4>缪: </h4><div><h5>móu, miù, miào, mù, liáo: </h5><span>wind around, bind; prepare</span></div>
    </div>
    <div>
      <h4>缭: </h4><div><h5>liáo: </h5><span>wind round, rap around, bind</span></div>
    </div>
    <div>
      <h4>缮: </h4><div><h5>shàn: </h5><span>repair, mend; rewrite, transcribe</span></div>
    </div>
    <h3>画13</h3>
    <div>
      <h4>缰: </h4><div><h5>jiāng: </h5><span>reins, bridle</span></div>
    </div>
    <div>
      <h4>缱: </h4><div><h5>qiǎn: </h5><span>attached to, inseparable; entangl</span></div>
    </div>
    <div>
      <h4>缴: </h4><div><h5>jiǎo, zhuó: </h5><span>deliver, submit; hand over</span></div>
    </div>
    <h1>75: 艹</h1>
    <h3>画1-2</h3>
    <div>
      <h4>艺: </h4><div><h5>yì: </h5><span>art; talent, ability; craft</span></div>
    </div>
    <div>
      <h4>艾: </h4><div><h5>ài, yì: </h5><span>artemisia, mugwort; translit.</span></div>
    </div>
    <div>
      <h4>节: </h4><div><h5>jié, jiē: </h5><span>knot, node, joint; section</span></div>
    </div>
    <h3>画3</h3>
    <div>
      <h4>芊: </h4><div><h5>qiān: </h5><span>exuberant and vigorous foliage</span></div>
    </div>
    <div>
      <h4>芋: </h4><div><h5>yù: </h5><span>taro</span></div>
    </div>
    <div>
      <h4>芍: </h4><div><h5>sháo: </h5><span>peony; water chestnuts</span></div>
    </div>
    <div>
      <h4>芎: </h4><div><h5>xiōng: </h5><span>a kind of herb</span></div>
    </div>
    <div>
      <h4>芒: </h4><div><h5>máng: </h5><span>Miscanthus sinensis</span></div>
    </div>
    <div>
      <h4>芝: </h4><div><h5>zhī: </h5>
      <span>
        sesame; a purplish or brown mushroom thought to have miraculous
        powers
      </span></div>
    </div>
    </section>
    <section>
    <h3>画4</h3>
    <div>
      <h4>芙: </h4><div><h5>fú: </h5><span>hibiscus</span></div>
    </div>
    <div>
      <h4>芜: </h4><div><h5>wú: </h5><span>luxurious growth of weeds</span></div>
    </div>
    <div>
      <h4>芥: </h4><div><h5>jiè, gài: </h5><span>mustard plant; mustard; tiny</span></div>
    </div>
    <div>
      <h4>芦: </h4><div><h5>lú: </h5><span>rushes, reeds</span></div>
    </div>
    <div>
      <h4>芩: </h4><div><h5>qín: </h5><span>salt marsh plant</span></div>
    </div>
    <div>
      <h4>芬: </h4><div><h5>fēn: </h5><span>fragrance, aroma; perfume</span></div>
    </div>
    <div>
      <h4>芭: </h4><div><h5>bā: </h5><span>plantain or banana palm; fragrant</span></div>
    </div>
    <div>
      <h4>芮: </h4><div><h5>ruì: </h5><span>tiny, small; water's edge</span></div>
    </div>
    <div>
      <h4>芯: </h4><div><h5>xīn, xìn: </h5><span>pith from rush (juncus effusus)</span></div>
    </div>
    <div>
      <h4>花: </h4><div><h5>huā: </h5><span>flower; blossoms</span></div>
    </div>
    <div>
      <h4>芳: </h4><div><h5>fāng: </h5><span>fragrant; virtuous; beautiful</span></div>
    </div>
    <div>
      <h4>芷: </h4><div><h5>zhǐ: </h5><span>angelica, type of iris</span></div>
    </div>
    <div>
      <h4>芸: </h4><div><h5>yún: </h5>
      <span>
        rue, herb used to keep insects away; to cut grass or weeds; art,
        talent, ability, craft, technique, performance, acting, trick, stunt
      </span></div>
    </div>
    <div>
      <h4>芹: </h4><div><h5>qín: </h5><span>celery</span></div>
    </div>
    <div>
      <h4>芽: </h4><div><h5>yá: </h5><span>bud, sprout, shoot</span></div>
    </div>
    <div>
      <h4>苇: </h4><div><h5>wěi: </h5><span>reed</span></div>
    </div>
    <div>
      <h4>苍: </h4><div><h5>cāng: </h5><span>blue; green</span></div>
    </div>
    <div>
      <h4>苏: </h4><div><h5>sū, sù: </h5>
      <span>
        revive, resurrect; a species of thyme; transliteration of 'Soviet'
      </span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>苑: </h4><div><h5>yuàn: </h5><span>pasture, park, garden; mansion</span></div>
    </div>
    <div>
      <h4>苓: </h4><div><h5>líng: </h5><span>fungus, tuber; licorice</span></div>
    </div>
    <div>
      <h4>苔: </h4><div><h5>tái, tāi: </h5><span>moss, lichen</span></div>
    </div>
    <div>
      <h4>苗: </h4><div><h5>miáo: </h5><span>sprouts;Miao ethnic group</span></div>
    </div>
    <div>
      <h4>苛: </h4><div><h5>kē, hē: </h5><span>small, petty; harsh, rigorous</span></div>
    </div>
    <div>
      <h4>苞: </h4><div><h5>bāo: </h5><span>a variety of rush; firm, enduring; to burst forth</span></div>
    </div>
    <div>
      <h4>苟: </h4><div><h5>gǒu: </h5>
      <span>
        careless, frivolous; illicit; grammatical particle: if, but, if only;
        surname; grass name; distinguish DKW 30853 (ji4)
      </span></div>
    </div>
    <div>
      <h4>若: </h4><div><h5>ruò, rě: </h5><span>if, supposing, assuming; similar</span></div>
    </div>
    <div>
      <h4>苦: </h4><div><h5>kǔ: </h5><span>bitter; hardship, suffering</span></div>
    </div>
    <div>
      <h4>苯: </h4><div><h5>běn: </h5><span>benzene; luxuriant</span></div>
    </div>
    <div>
      <h4>英: </h4><div><h5>yīng: </h5>
      <span>petal, flower, leaf; brave, a hero; England, English</span></div>
    </div>
    <div>
      <h4>苹: </h4><div><h5>píng, pēng: </h5><span>artemisia; duckweed; apple</span></div>
    </div>
    <div>
      <h4>茁: </h4><div><h5>zhuó: </h5>
      <span>
        to sprout, flourish; sprouts appearing above-ground; vigorous
      </span></div>
    </div>
    <div>
      <h4>茂: </h4><div><h5>mào: </h5><span>thick, lush, dense; talented</span></div>
    </div>
    <div>
      <h4>范: </h4><div><h5>fàn: </h5><span>surname; bee-like insect</span></div>
    </div>
    <div>
      <h4>茄: </h4><div><h5>qié: </h5><span>eggplant</span></div>
    </div>
    <div>
      <h4>茅: </h4><div><h5>máo: </h5><span>reeds, rushes, grass; surname</span></div>
    </div>
    <div>
      <h4>茉: </h4><div><h5>mò: </h5><span>white jasmine</span></div>
    </div>
    <div>
      <h4>茎: </h4><div><h5>jīng: </h5><span>stem, stalk</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>茍: </h4><div><h5>jì: </h5>
      <span>
        to be circumspect, cautious in ones behaviour (distinguish DKW 30790
        gou3)
      </span></div>
    </div>
    <div>
      <h4>茗: </h4><div><h5>míng: </h5><span>tea; tea plant</span></div>
    </div>
    <div>
      <h4>茜: </h4><div><h5>qiàn: </h5><span>madder, rubia cordifolia; reeds</span></div>
    </div>
    <div>
      <h4>茧: </h4><div><h5>jiǎn: </h5><span>cocoon; callus, blister</span></div>
    </div>
    <div>
      <h4>茫: </h4><div><h5>máng: </h5><span>vast, boundless, widespread</span></div>
    </div>
    <div>
      <h4>茱: </h4><div><h5>zhū: </h5><span>dogwood</span></div>
    </div>
    <div>
      <h4>茵: </h4><div><h5>yīn: </h5><span>a cushion, mattress; wormwood; Skimmia japon</span></div>
    </div>
    <div>
      <h4>茶: </h4><div><h5>chá: </h5><span>tea</span></div>
    </div>
    <div>
      <h4>茸: </h4><div><h5>róng: </h5><span>soft, downy; buds, sprouts</span></div>
    </div>
    <div>
      <h4>茹: </h4><div><h5>rú: </h5><span>roots; vegetables; eat; bear</span></div>
    </div>
    <div>
      <h4>荀: </h4><div><h5>xún: </h5><span>surname; ancient state; plant</span></div>
    </div>
    <div>
      <h4>荃: </h4><div><h5>quán: </h5><span>aromatic herb; fine cloth</span></div>
    </div>
    <div>
      <h4>荆: </h4><div><h5>jīng: </h5><span>thorns; brambles; my wife; cane</span></div>
    </div>
    <div>
      <h4>草: </h4><div><h5>cǎo: </h5><span>grass, straw, thatch, herbs</span></div>
    </div>
    <div>
      <h4>荏: </h4><div><h5>rěn: </h5><span>beans; soft, pliable; herb</span></div>
    </div>
    <div>
      <h4>荐: </h4><div><h5>jiàn: </h5><span>repeat, reoccur; recommend</span></div>
    </div>
    <div>
      <h4>荒: </h4><div><h5>huāng: </h5><span>wasteland, desert; uncultivated</span></div>
    </div>
    <div>
      <h4>荔: </h4><div><h5>lì: </h5><span>lichee</span></div>
    </div>
    <div>
      <h4>荞: </h4><div><h5>qiáo: </h5><span>buckwheat</span></div>
    </div>
    <div>
      <h4>荟: </h4><div><h5>huì: </h5><span>luxuriant, flourishing, abundant</span></div>
    </div>
    <div>
      <h4>荡: </h4><div><h5>dàng: </h5><span>pond, pool; wash away, cleanse</span></div>
    </div>
    <div>
      <h4>荣: </h4><div><h5>róng: </h5><span>glory, honor; flourish, prosper</span></div>
    </div>
    <div>
      <h4>荤: </h4><div><h5>hūn: </h5><span>meat diet; strong smelling</span></div>
    </div>
    <div>
      <h4>荧: </h4><div><h5>yíng: </h5><span>shine, shimmer; shining, dazzling</span></div>
    </div>
    <div>
      <h4>荪: </h4><div><h5>sūn: </h5><span>aromatic grass; iris, flower</span></div>
    </div>
    <div>
      <h4>荫: </h4><div><h5>yīn, yìn: </h5><span>shade, shelter; protect</span></div>
    </div>
    <div>
      <h4>药: </h4><div><h5>yào: </h5><span>leaf of Dahurian angelica plant; medicine</span></div>
    </div>
    <div>
      <h4>莒: </h4><div><h5>jǔ: </h5><span>hemp-like plant; taro; herb</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>荷: </h4><div><h5>hé: </h5><span>lotus, water lily, holland</span></div>
    </div>
    <div>
      <h4>荻: </h4><div><h5>dí: </h5><span>reed, Miscanthus saccariflorus</span></div>
    </div>
    <div>
      <h4>荼: </h4><div><h5>tú: </h5><span>bitter vegetable</span></div>
    </div>
    <div>
      <h4>莅: </h4><div><h5>lì: </h5><span>attend, be present; arrive at</span></div>
    </div>
    <div>
      <h4>莉: </h4><div><h5>lì: </h5><span>white jasmine</span></div>
    </div>
    <div>
      <h4>莎: </h4><div><h5>suō, shā: </h5>
      <span>kind of sedge grass, used anciently for raincoats</span></div>
    </div>
    <div>
      <h4>莓: </h4><div><h5>méi: </h5><span>moss; edible berries</span></div>
    </div>
    <div>
      <h4>莘: </h4><div><h5>shēn, xīn: </h5>
      <span>
        long; numerous; a marsh plant whose root is used for medicine
      </span></div>
    </div>
    <div>
      <h4>莞: </h4><div><h5>guān, guǎn, wǎn: </h5>
      <span>
        smiling; a kind of aquatic herb, clubrush, Scirpus lacustris
      </span></div>
    </div>
    <div>
      <h4>莠: </h4><div><h5>yǒu: </h5><span>weeds, tares; undesirable, evil</span></div>
    </div>
    <div>
      <h4>莫: </h4><div><h5>mò, mù: </h5><span>do not, is not, can not; negative</span></div>
    </div>
    <div>
      <h4>莱: </h4><div><h5>lái: </h5><span>goosefoot, weed; fallow field</span></div>
    </div>
    <div>
      <h4>莲: </h4><div><h5>lián: </h5><span>lotus, water lily; paradise</span></div>
    </div>
    <div>
      <h4>获: </h4><div><h5>huò: </h5><span>obtain, get, receive; seize</span></div>
    </div>
    <div>
      <h4>莹: </h4><div><h5>yíng: </h5><span>luster of gems; bright, lustrous</span></div>
    </div>
    <div>
      <h4>莺: </h4><div><h5>yīng: </h5><span>oriole, green finch; Sylvia species (various)</span></div>
    </div>
    <div>
      <h4>莽: </h4><div><h5>mǎng: </h5><span>thicket, underbrush; poisonous</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>菀: </h4><div><h5>wǎn, yùn: </h5><span>luxuriance of growth</span></div>
    </div>
    <div>
      <h4>菁: </h4><div><h5>jīng: </h5><span>flower of leek family; turnip</span></div>
    </div>
    <div>
      <h4>菅: </h4><div><h5>jiān: </h5><span>coarse grass, themedia forskali</span></div>
    </div>
    <div>
      <h4>菇: </h4><div><h5>gū: </h5><span>mushrooms</span></div>
    </div>
    <div>
      <h4>菊: </h4><div><h5>jú: </h5><span>chrysanthemum</span></div>
    </div>
    <div>
      <h4>菌: </h4><div><h5>jūn, jùn: </h5><span>mushroom; germ, microbe</span></div>
    </div>
    <div>
      <h4>菜: </h4><div><h5>cài: </h5><span>vegetables; dish, order; food</span></div>
    </div>
    <div>
      <h4>菠: </h4><div><h5>bō: </h5><span>spinach and similar greens</span></div>
    </div>
    <div>
      <h4>菡: </h4><div><h5>hàn: </h5><span>buds, lotus buds</span></div>
    </div>
    <div>
      <h4>菩: </h4><div><h5>pú: </h5><span>herb, aromatic plant</span></div>
    </div>
    <div>
      <h4>菫: </h4><div><h5>jǐn: </h5><span>celery, aconite</span></div>
    </div>
    <div>
      <h4>菱: </h4><div><h5>líng: </h5><span>water-chestnut, water caltrop</span></div>
    </div>
    <div>
      <h4>菲: </h4><div><h5>fēi, fěi: </h5><span>fragrant, luxuriant; the Philippines</span></div>
    </div>
    <div>
      <h4>菸: </h4><div><h5>yān: </h5>
      <span>
        to fade; withered or dried leaves; tobacco (used for U+70DF 烟 and
        U+7159 煙)
      </span></div>
    </div>
    <div>
      <h4>萃: </h4><div><h5>cuì: </h5><span>dense, thick, close-set; to collect together</span></div>
    </div>
    <div>
      <h4>萄: </h4><div><h5>táo: </h5><span>grapes</span></div>
    </div>
    <div>
      <h4>萌: </h4><div><h5>méng: </h5><span>bud, sprout</span></div>
    </div>
    <div>
      <h4>萍: </h4><div><h5>píng: </h5><span>duckweed; wandering, traveling</span></div>
    </div>
    <div>
      <h4>萎: </h4><div><h5>wěi: </h5><span>wither, wilt</span></div>
    </div>
    <div>
      <h4>萏: </h4><div><h5>dàn: </h5><span>lotus</span></div>
    </div>
    <div>
      <h4>萝: </h4><div><h5>luó: </h5><span>type of creeping plant; turnip</span></div>
    </div>
    <div>
      <h4>萤: </h4><div><h5>yíng: </h5><span>glow-worm, luminous insect</span></div>
    </div>
    <div>
      <h4>营: </h4><div><h5>yíng: </h5><span>encampment, barracks; manage</span></div>
    </div>
    <div>
      <h4>萦: </h4><div><h5>yíng: </h5><span>entangle, entwine, coil</span></div>
    </div>
    <div>
      <h4>萧: </h4><div><h5>xiāo: </h5><span>common artemisia; dejected</span></div>
    </div>
    <div>
      <h4>萨: </h4><div><h5>sà: </h5><span>Buddhist gods or immortals</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>萱: </h4><div><h5>xuān: </h5><span>day-lily, hemerocallisflava</span></div>
    </div>
    <div>
      <h4>萼: </h4><div><h5>è: </h5><span>the stem and calyx of a flower; a younger brother</span></div>
    </div>
    <div>
      <h4>落: </h4><div><h5>là, luò, lào: </h5><span>fall, drop; net income, surplus</span></div>
    </div>
    <div>
      <h4>葄: </h4><div><h5>zuò: </h5><span>mat</span></div>
    </div>
    <div>
      <h4>葆: </h4><div><h5>bǎo: </h5><span>reserve, preserve; conceal</span></div>
    </div>
    <div>
      <h4>葛: </h4><div><h5>gé, ɡě: </h5><span>edible bean; surname</span></div>
    </div>
    <div>
      <h4>葡: </h4><div><h5>pú: </h5><span>grapes</span></div>
    </div>
    <div>
      <h4>董: </h4><div><h5>dǒng: </h5><span>direct, supervise; surname</span></div>
    </div>
    <div>
      <h4>葩: </h4><div><h5>pā: </h5><span>flowers</span></div>
    </div>
    <div>
      <h4>葫: </h4><div><h5>hú: </h5><span>bottle-gourd</span></div>
    </div>
    <div>
      <h4>葬: </h4><div><h5>zàng: </h5><span>bury, inter</span></div>
    </div>
    <div>
      <h4>葭: </h4><div><h5>jiā: </h5><span>bulrush, reed; flute, whistle</span></div>
    </div>
    <div>
      <h4>葱: </h4><div><h5>cōng: </h5><span>scallions, leeks, green onions</span></div>
    </div>
    <div>
      <h4>葳: </h4><div><h5>wēi: </h5><span>luxuriant, flourishing; used for various plants</span></div>
    </div>
    <div>
      <h4>葵: </h4><div><h5>kuí: </h5><span>sunflower; measure</span></div>
    </div>
    <div>
      <h4>蒂: </h4><div><h5>dì: </h5><span>peduncle or stem of plants</span></div>
    </div>
    <div>
      <h4>蒋: </h4><div><h5>jiǎng: </h5><span>surname; hydropyrum latifalium</span></div>
    </div>
    <div>
      <h4>蒐: </h4><div><h5>sōu: </h5>
      <span>
        collect, gather, assemble; seek; spring hunt; assemble for war
      </span></div>
    </div>
    </section>
    <section>
    <h3>画10</h3>
    <div>
      <h4>蒙: </h4><div><h5>mēng, méng, měng: </h5><span>cover; ignorant; suffer; mongolia</span></div>
    </div>
    <div>
      <h4>蒜: </h4><div><h5>suàn: </h5><span>garlic</span></div>
    </div>
    <div>
      <h4>蒨: </h4><div><h5>qiàn: </h5><span>lush vegetation, luxuriant growth</span></div>
    </div>
    <div>
      <h4>蒲: </h4><div><h5>pú: </h5><span>type of rush; vine</span></div>
    </div>
    <div>
      <h4>蒸: </h4><div><h5>zhēng: </h5><span>steam; evaporate</span></div>
    </div>
    <div>
      <h4>蒹: </h4><div><h5>jiān: </h5><span>reed, phragmites communis</span></div>
    </div>
    <div>
      <h4>蓁: </h4><div><h5>zhēn: </h5><span>abundant, luxuriant vegetation</span></div>
    </div>
    <div>
      <h4>蓄: </h4><div><h5>xù: </h5><span>store, save, hoard, gather</span></div>
    </div>
    <div>
      <h4>蓉: </h4><div><h5>róng: </h5><span>hibiscus; Chengdu, Sichuan</span></div>
    </div>
    <div>
      <h4>蓊: </h4><div><h5>wěng: </h5><span>luxuriant vegetation; lush</span></div>
    </div>
    <div>
      <h4>蓑: </h4><div><h5>suō: </h5><span>rain coat made of straw, coir, etc.</span></div>
    </div>
    <div>
      <h4>蓓: </h4><div><h5>bèi: </h5><span>bud</span></div>
    </div>
    <div>
      <h4>蓝: </h4><div><h5>lán: </h5><span>blue; indigo plant; surname</span></div>
    </div>
    <div>
      <h4>蓦: </h4><div><h5>mò: </h5><span>suddenly, quickly, abruptly</span></div>
    </div>
    <div>
      <h4>蓬: </h4><div><h5>péng: </h5><span>type of raspberry; fairyland</span></div>
    </div>
    <h3>画11</h3>
    <div>
      <h4>蓼: </h4><div><h5>liǎo, lù: </h5><span>smartweed, polygonum</span></div>
    </div>
    <div>
      <h4>蔑: </h4><div><h5>miè: </h5><span>disdain, disregard; slight</span></div>
    </div>
    <div>
      <h4>蔓: </h4><div><h5>màn, wàn: </h5><span>creeping plants, tendrils, vines</span></div>
    </div>
    <div>
      <h4>蔗: </h4><div><h5>zhè: </h5><span>sugar cane</span></div>
    </div>
    <div>
      <h4>蔘: </h4><div><h5>shēn: </h5><span>ginseng; huge</span></div>
    </div>
    <div>
      <h4>蔚: </h4><div><h5>wèi: </h5><span>luxuriant, thick; ornamental</span></div>
    </div>
    <div>
      <h4>蔡: </h4><div><h5>cài: </h5><span>surname; species of tortoise</span></div>
    </div>
    <div>
      <h4>蔫: </h4><div><h5>niān: </h5><span>withered, faded, decayed; calm</span></div>
    </div>
    <div>
      <h4>蔷: </h4><div><h5>qiáng: </h5><span>rose</span></div>
    </div>
    <div>
      <h4>蔺: </h4><div><h5>lìn: </h5><span>rush used for making mats; surnam</span></div>
    </div>
    <div>
      <h4>蔻: </h4><div><h5>kòu: </h5><span></span></div>
    </div>
    <div>
      <h4>蔼: </h4><div><h5>ǎi: </h5><span>lush; affable, friendly</span></div>
    </div>
    <div>
      <h4>蔽: </h4><div><h5>bì: </h5><span>cover, hide, conceal; shelter</span></div>
    </div>
    <h3>画12</h3>
    <div>
      <h4>蔬: </h4><div><h5>shū: </h5><span>vegetables, greens</span></div>
    </div>
    <div>
      <h4>蕃: </h4><div><h5>fán: </h5><span>foreign things</span></div>
    </div>
    <div>
      <h4>蕉: </h4><div><h5>jiāo: </h5><span>banana; plantain</span></div>
    </div>
    <div>
      <h4>蕊: </h4><div><h5>ruǐ: </h5><span>unopened flowers, flower buds</span></div>
    </div>
    <div>
      <h4>蕙: </h4><div><h5>huì: </h5><span>species of fragrant orchid</span></div>
    </div>
    <div>
      <h4>蕤: </h4><div><h5>ruí: </h5><span>drooping leaves; fringe soft, delicate</span></div>
    </div>
    <div>
      <h4>蕨: </h4><div><h5>jué: </h5><span>pteris aquilina, common bracken</span></div>
    </div>
    <div>
      <h4>蕴: </h4><div><h5>yùn: </h5><span>to collect, gather, store; profound</span></div>
    </div>
    <h3>画13</h3>
    <div>
      <h4>蕾: </h4><div><h5>lěi: </h5><span>buds, unopened flowers</span></div>
    </div>
    <div>
      <h4>薄: </h4><div><h5>báo, bó, bò: </h5><span>thin, slight, weak; poor, stingy</span></div>
    </div>
    <div>
      <h4>薇: </h4><div><h5>wēi: </h5><span>Osmunda regalis, a species of fern</span></div>
    </div>
    <div>
      <h4>薏: </h4><div><h5>yì: </h5><span>seed of job's tears; lotus seed</span></div>
    </div>
    <div>
      <h4>薛: </h4><div><h5>xuē: </h5><span>kind of marsh grass; feudal state</span></div>
    </div>
    <div>
      <h4>薪: </h4><div><h5>xīn: </h5><span>fuel, firewood; salary</span></div>
    </div>
    <div>
      <h4>薮: </h4><div><h5>sǒu: </h5><span>marsh, swamp; wild country</span></div>
    </div>
    <div>
      <h4>薯: </h4><div><h5>shǔ: </h5><span>yam, tuber, potato</span></div>
    </div>
    <h3>画14</h3>
    <div>
      <h4>薰: </h4><div><h5>xūn: </h5><span>a medicinal herb; to cauterize</span></div>
    </div>
    <div>
      <h4>藉: </h4><div><h5>jiè, jí: </h5><span>mat, pad; rely on; pretext</span></div>
    </div>
    <div>
      <h4>藏: </h4><div><h5>cáng, zàng: </h5><span>hide, conceal; hoard, store up</span></div>
    </div>
    <div>
      <h4>藐: </h4><div><h5>miǎo: </h5><span>disregard, slight, disdain</span></div>
    </div>
    <h3>画15-16</h3>
    <div>
      <h4>藕: </h4><div><h5>ǒu: </h5><span>lotus root</span></div>
    </div>
    <div>
      <h4>藤: </h4><div><h5>téng: </h5><span>rattan, cane; creeper plant</span></div>
    </div>
    <div>
      <h4>藩: </h4><div><h5>fān: </h5><span>fence; boundary; outlying border</span></div>
    </div>
    <div>
      <h4>藻: </h4><div><h5>zǎo: </h5><span>splendid, magnificent; algae</span></div>
    </div>
    <h1>76: 辶</h1>
    <h3>画2</h3>
    <div>
      <h4>边: </h4><div><h5>biān: </h5><span>edge, margin, side, border</span></div>
    </div>
    <div>
      <h4>辽: </h4><div><h5>liáo: </h5><span>distant, far</span></div>
    </div>
    <h3>画3</h3>
    <div>
      <h4>达: </h4><div><h5>dá: </h5><span>arrive at, reach; intelligent; smooth, slippery</span></div>
    </div>
    <div>
      <h4>迁: </h4><div><h5>qiān: </h5>
      <span>move, shift, change; transfer; relocate a capital city</span></div>
    </div>
    <div>
      <h4>迂: </h4><div><h5>yū: </h5><span>doctrinaire, abstruse, unrealistic</span></div>
    </div>
    <div>
      <h4>迄: </h4><div><h5>qì: </h5><span>extend, reach; until; till</span></div>
    </div>
    <div>
      <h4>迅: </h4><div><h5>xùn: </h5><span>quick, hasty, rapid, sudden</span></div>
    </div>
    <div>
      <h4>过: </h4><div><h5>guò, guo, guō: </h5><span>pass, pass through, go across</span></div>
    </div>
    <div>
      <h4>迈: </h4><div><h5>mài: </h5><span>take a big stride; pass by</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>迋: </h4><div><h5>wàng, kuāng: </h5><span>travel, go to; deceive; scare</span></div>
    </div>
    <div>
      <h4>迎: </h4><div><h5>yíng: </h5><span>receive, welcome, greet</span></div>
    </div>
    <div>
      <h4>运: </h4><div><h5>yùn: </h5>
      <span>run; simplified form of 運 luck, fortune; ship, transport</span></div>
    </div>
    <div>
      <h4>近: </h4><div><h5>jìn: </h5><span>near, close; approach; intimate</span></div>
    </div>
    <div>
      <h4>返: </h4><div><h5>fǎn: </h5><span>return, revert to, restore</span></div>
    </div>
    <div>
      <h4>还: </h4><div><h5>huán, hái: </h5><span>still, yet, also, besides</span></div>
    </div>
    <div>
      <h4>这: </h4><div><h5>zhè, zhèi: </h5><span>this, the, here</span></div>
    </div>
    <div>
      <h4>进: </h4><div><h5>jìn: </h5><span>advance, make progress, enter</span></div>
    </div>
    <div>
      <h4>远: </h4><div><h5>yuǎn, yuàn: </h5><span>distant, remote, far; profound</span></div>
    </div>
    <div>
      <h4>违: </h4><div><h5>wéi: </h5><span>disobey, violate, defy; be apart from</span></div>
    </div>
    <div>
      <h4>连: </h4><div><h5>lián: </h5><span>join, connect; continuous; even</span></div>
    </div>
    <div>
      <h4>迟: </h4><div><h5>chí: </h5><span>late, tardy; slow; delay</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>迢: </h4><div><h5>tiáo: </h5><span>far; distant</span></div>
    </div>
    <div>
      <h4>迤: </h4><div><h5>yǐ, yí: </h5><span>wind; walk out of straight path</span></div>
    </div>
    <div>
      <h4>迥: </h4><div><h5>jiǒng: </h5><span>distant, far; separated; different</span></div>
    </div>
    <div>
      <h4>迦: </h4><div><h5>jiā: </h5><span>character for transliteration</span></div>
    </div>
    <div>
      <h4>迩: </h4><div><h5>ěr: </h5><span>be near, be close; recently</span></div>
    </div>
    <div>
      <h4>迪: </h4><div><h5>dí: </h5><span>enlighten, advance; progress</span></div>
    </div>
    <div>
      <h4>迫: </h4><div><h5>pò, pǎi: </h5><span>coerce, force, compel; urgent</span></div>
    </div>
    <div>
      <h4>迭: </h4><div><h5>dié: </h5><span>repeatedly, frequently</span></div>
    </div>
    <div>
      <h4>述: </h4><div><h5>shù: </h5><span>narrate, state, express</span></div>
    </div>
    <div>
      <h4>迳: </h4><div><h5>jìng: </h5><span>pass by, approach; direct</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>迷: </h4><div><h5>mí: </h5><span>bewitch, charm, infatuate</span></div>
    </div>
    <div>
      <h4>迸: </h4><div><h5>bèng: </h5><span>gush out; burst forth; split</span></div>
    </div>
    <div>
      <h4>迹: </h4><div><h5>jì: </h5><span>traces, impressions, footprints</span></div>
    </div>
    <div>
      <h4>迺: </h4><div><h5>nǎi: </h5><span>then, thereupon, only then</span></div>
    </div>
    <div>
      <h4>追: </h4><div><h5>zhuī, duī: </h5><span>pursue, chase after; expel</span></div>
    </div>
    <div>
      <h4>退: </h4><div><h5>tuì: </h5><span>step back, retreat, withdraw</span></div>
    </div>
    <div>
      <h4>送: </h4><div><h5>sòng: </h5><span>see off, send off; dispatch, give</span></div>
    </div>
    <div>
      <h4>适: </h4><div><h5>shì, kuò: </h5><span>go, reach; appropriate, suitable</span></div>
    </div>
    <div>
      <h4>逃: </h4><div><h5>táo: </h5><span>escape, flee; abscond, dodge</span></div>
    </div>
    <div>
      <h4>逄: </h4><div><h5>páng: </h5><span>a surname</span></div>
    </div>
    <div>
      <h4>逅: </h4><div><h5>hòu: </h5><span>meet unexpectedly</span></div>
    </div>
    <div>
      <h4>逆: </h4><div><h5>nì: </h5><span>disobey, rebel; rebel, traitor</span></div>
    </div>
    <div>
      <h4>选: </h4><div><h5>xuǎn: </h5><span>choose, select; elect; election</span></div>
    </div>
    <div>
      <h4>逊: </h4><div><h5>xùn: </h5><span>humble, modest; yield</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>逍: </h4><div><h5>xiāo: </h5><span>ramble, stroll, jaunt, loiter</span></div>
    </div>
    <div>
      <h4>透: </h4><div><h5>tòu: </h5><span>penetrate, pass through</span></div>
    </div>
    <div>
      <h4>逐: </h4><div><h5>zhú: </h5><span>chase, expel; one by one</span></div>
    </div>
    <div>
      <h4>逑: </h4><div><h5>qiú: </h5><span>collect, unite; match, pair</span></div>
    </div>
    <div>
      <h4>递: </h4><div><h5>dì: </h5><span>hand over, deliver; substitute</span></div>
    </div>
    <div>
      <h4>途: </h4><div><h5>tú: </h5><span>way, road, path, journey; course</span></div>
    </div>
    <div>
      <h4>逖: </h4><div><h5>tì: </h5><span>far, distant; keep at distance</span></div>
    </div>
    <div>
      <h4>逗: </h4><div><h5>dòu: </h5><span>tempt, allure, arouse, stir</span></div>
    </div>
    <div>
      <h4>通: </h4><div><h5>tōng: </h5><span>pass through, common, communicate</span></div>
    </div>
    <div>
      <h4>逛: </h4><div><h5>guàng: </h5><span>ramble, stroll, roam, wander</span></div>
    </div>
    <div>
      <h4>逝: </h4><div><h5>shì: </h5><span>pass away; die</span></div>
    </div>
    <div>
      <h4>逞: </h4><div><h5>chěng: </h5><span>indulge oneself; brag, show off</span></div>
    </div>
    <div>
      <h4>速: </h4><div><h5>sù: </h5><span>quick, prompt, speedy</span></div>
    </div>
    <div>
      <h4>造: </h4><div><h5>zào: </h5><span>construct, build, make, begin; prepare</span></div>
    </div>
    <div>
      <h4>逢: </h4><div><h5>féng: </h5><span>come upon, happen meet; flatter</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>逮: </h4><div><h5>dài, dǎi: </h5><span>seize, catch; reach, arrive</span></div>
    </div>
    <div>
      <h4>逵: </h4><div><h5>kuí: </h5><span>thoroughfare, crossroads</span></div>
    </div>
    <div>
      <h4>逸: </h4><div><h5>yì: </h5><span>flee, escape, break loose</span></div>
    </div>
    <div>
      <h4>逻: </h4><div><h5>luó: </h5><span>patrol; inspect; watch; patrol</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>逼: </h4><div><h5>bī: </h5><span>compel, pressure, force; bother</span></div>
    </div>
    <div>
      <h4>逾: </h4><div><h5>yú: </h5><span>go over, pass over, exceed</span></div>
    </div>
    <div>
      <h4>遁: </h4><div><h5>dùn: </h5><span>hide, conceal oneself; escape</span></div>
    </div>
    <div>
      <h4>遂: </h4><div><h5>suì: </h5><span>comply with, follow along; thereupon</span></div>
    </div>
    <div>
      <h4>遇: </h4><div><h5>yù: </h5><span>meet, come across, encounter</span></div>
    </div>
    <div>
      <h4>遍: </h4><div><h5>biàn: </h5><span>everywhere, all over, throughout</span></div>
    </div>
    <div>
      <h4>遏: </h4><div><h5>è: </h5><span>stop, suppress, curb, check; a bar</span></div>
    </div>
    <div>
      <h4>遐: </h4><div><h5>xiá: </h5><span>afar, distant; old, advanced in</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>遑: </h4><div><h5>huáng: </h5><span>leisure, leisurely; hurry about</span></div>
    </div>
    <div>
      <h4>道: </h4><div><h5>dào: </h5><span>path, road, street; method, way</span></div>
    </div>
    <div>
      <h4>遗: </h4><div><h5>yí: </h5><span>lose; articles lost; omit</span></div>
    </div>
    <h3>画10-11</h3>
    <div>
      <h4>遢: </h4><div><h5>tà: </h5><span>careless, negligent, slipshod</span></div>
    </div>
    <div>
      <h4>遣: </h4><div><h5>qiǎn: </h5><span>send, dispatch; send off, exile</span></div>
    </div>
    <div>
      <h4>遥: </h4><div><h5>yáo: </h5><span>far away, distant, remote</span></div>
    </div>
    <div>
      <h4>遨: </h4><div><h5>áo: </h5><span>ramble, roam; travel for pleasure</span></div>
    </div>
    <div>
      <h4>遭: </h4><div><h5>zāo: </h5><span>come across, meet with, encounter</span></div>
    </div>
    <div>
      <h4>遮: </h4><div><h5>zhē: </h5><span>cover, shield, protect</span></div>
    </div>
    <h3>画12-13</h3>
    <div>
      <h4>遴: </h4><div><h5>lín: </h5><span>select, choose; surname</span></div>
    </div>
    <div>
      <h4>遵: </h4><div><h5>zūn: </h5><span>obey, comply with, follow; honor</span></div>
    </div>
    <div>
      <h4>遽: </h4><div><h5>jù: </h5><span>suddenly, unexpectedly; at once</span></div>
    </div>
    <div>
      <h4>避: </h4><div><h5>bì: </h5><span>avoid; turn aside; escape; hide</span></div>
    </div>
    <div>
      <h4>邀: </h4><div><h5>yāo: </h5><span>invite, welcome; meet, intercept</span></div>
    </div>
    <div>
      <h4>邂: </h4><div><h5>xiè: </h5><span>unexpected meeting; encounter by</span></div>
    </div>
    <h3>画14-15</h3>
    <div>
      <h4>邃: </h4><div><h5>suì: </h5><span>profound, detailed; deep</span></div>
    </div>
    <div>
      <h4>邈: </h4><div><h5>miǎo: </h5><span>far, distant, remote; slight</span></div>
    </div>
    <div>
      <h4>邋: </h4><div><h5>lā: </h5><span>rags</span></div>
    </div>
    <h1>77: 门</h1>
    <div>
      <h4>门: </h4><div><h5>mén: </h5><span>gate, door, entrance, opening</span></div>
    </div>
    <h3>画2-3</h3>
    <div>
      <h4>闪: </h4><div><h5>shǎn: </h5><span>flash; avoid, dodge, evade</span></div>
    </div>
    <div>
      <h4>闭: </h4><div><h5>bì: </h5><span>shut, close; obstruct, block up</span></div>
    </div>
    <div>
      <h4>问: </h4><div><h5>wèn: </h5><span>ask about, inquire after</span></div>
    </div>
    <div>
      <h4>闯: </h4><div><h5>chuǎng: </h5><span>rush in, burst in, charge in</span></div>
    </div>
    <h3>画4-5</h3>
    <div>
      <h4>闰: </h4><div><h5>rùn: </h5><span>intercalary; extra, surplus</span></div>
    </div>
    <div>
      <h4>闲: </h4><div><h5>xián: </h5><span>fence, guard; defend; idle time</span></div>
    </div>
    <div>
      <h4>间: </h4><div><h5>jiān, jiàn: </h5><span>midpoint, space; place, locality</span></div>
    </div>
    <div>
      <h4>闵: </h4><div><h5>mǐn: </h5><span>mourn, grieve; urge on, incite</span></div>
    </div>
    <div>
      <h4>闷: </h4><div><h5>mèn, mēn: </h5><span>gloomy, depressed, melancholy</span></div>
    </div>
    <div>
      <h4>闸: </h4><div><h5>zhá: </h5><span>sluice; flood gate, canal lock</span></div>
    </div>
    <div>
      <h4>闹: </h4><div><h5>nào: </h5><span>quarrel; dispute hotly</span></div>
    </div>
    <h3>画6-7</h3>
    <div>
      <h4>闺: </h4><div><h5>guī: </h5><span>small entrance; women's quarters</span></div>
    </div>
    <div>
      <h4>闻: </h4><div><h5>wén: </h5><span>hear; smell; make known; news</span></div>
    </div>
    <div>
      <h4>闽: </h4><div><h5>mǐn: </h5><span>fujian province; a river; a tribe</span></div>
    </div>
    <div>
      <h4>闾: </h4><div><h5>lǘ: </h5><span>village of twenty-five families</span></div>
    </div>
    <div>
      <h4>阀: </h4><div><h5>fá: </h5><span>powerful and influential group</span></div>
    </div>
    <div>
      <h4>阁: </h4><div><h5>gé: </h5><span>chamber, pavilion; cabinet</span></div>
    </div>
    <div>
      <h4>阂: </h4><div><h5>hé: </h5><span>blocked or separated; to prevent</span></div>
    </div>
    <div>
      <h4>阅: </h4><div><h5>yuè: </h5><span>examine, inspect, review, read</span></div>
    </div>
    <h3>画8-9</h3>
    <div>
      <h4>阉: </h4><div><h5>yān: </h5><span>castrate; eunuch</span></div>
    </div>
    <div>
      <h4>阎: </h4><div><h5>yán: </h5><span>village gate; surname</span></div>
    </div>
    <div>
      <h4>阐: </h4><div><h5>chǎn: </h5><span>explain, clarify, elucidate</span></div>
    </div>
    <div>
      <h4>阑: </h4><div><h5>lán: </h5><span>door screen; railing fence</span></div>
    </div>
    <div>
      <h4>阔: </h4><div><h5>kuò: </h5><span>broad, ample, wide; be apart</span></div>
    </div>
    <div>
      <h4>阕: </h4><div><h5>què: </h5><span>close, shut; watch tower</span></div>
    </div>
    <h3>画10</h3>
    <div>
      <h4>阖: </h4><div><h5>hé: </h5><span>close; whole, entire; all; leaf</span></div>
    </div>
    <div>
      <h4>阙: </h4><div><h5>quē, què: </h5><span>watch tower; palace</span></div>
    </div>
    <h1>78: 飞</h1>
    <div>
      <h4>飞: </h4><div><h5>fēi: </h5><span>fly; go quickly; dart; high</span></div>
    </div>
    <h1>79: 饣</h1>
    <h3>画2-4</h3>
    <div>
      <h4>饥: </h4><div><h5>jī: </h5><span>hunger, starving; hungry; a famine</span></div>
    </div>
    <div>
      <h4>饨: </h4><div><h5>tún: </h5><span>stuffed dumplings</span></div>
    </div>
    <div>
      <h4>饪: </h4><div><h5>rèn: </h5><span>cooked food; cook until well done</span></div>
    </div>
    <div>
      <h4>饭: </h4><div><h5>fàn: </h5><span>cooked rice; food, meal</span></div>
    </div>
    <div>
      <h4>饮: </h4><div><h5>yǐn: </h5><span>drink; swallow; kind of drink</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>饯: </h4><div><h5>jiàn: </h5><span>farewell party; see off, send off</span></div>
    </div>
    <div>
      <h4>饰: </h4><div><h5>shì: </h5><span>decorate, ornament, adorn</span></div>
    </div>
    <div>
      <h4>饱: </h4><div><h5>bǎo: </h5><span>eat heartily; eat one's fill</span></div>
    </div>
    <div>
      <h4>饲: </h4><div><h5>sì: </h5><span>raise animals; feed; nourish</span></div>
    </div>
    <div>
      <h4>饴: </h4><div><h5>yí, sì: </h5><span>sweet-meats; sweet-cakes; syrup</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>饵: </h4><div><h5>ěr: </h5><span>bait; bait, entice; dumplings</span></div>
    </div>
    <div>
      <h4>饶: </h4><div><h5>ráo: </h5><span>bountiful, abundant, plentiful</span></div>
    </div>
    <div>
      <h4>饷: </h4><div><h5>xiǎng: </h5><span>rations and pay for soldiers</span></div>
    </div>
    <div>
      <h4>饺: </h4><div><h5>jiǎo: </h5><span>stuffed dumplings</span></div>
    </div>
    <div>
      <h4>饼: </h4><div><h5>bǐng: </h5><span>rice-cakes, biscuits</span></div>
    </div>
    <h3>画7-8</h3>
    <div>
      <h4>饿: </h4><div><h5>è: </h5><span>hungry; greedy for; hunger</span></div>
    </div>
    <div>
      <h4>馀: </h4><div><h5>yú: </h5><span>surplus, excess, remainder</span></div>
    </div>
    <div>
      <h4>馁: </h4><div><h5>něi: </h5><span>hungry, starving, famished</span></div>
    </div>
    <div>
      <h4>馄: </h4><div><h5>hún: </h5><span>dumpling soup, wonton</span></div>
    </div>
    <div>
      <h4>馅: </h4><div><h5>xiàn: </h5><span>filling, stuffing; secret</span></div>
    </div>
    <div>
      <h4>馆: </h4><div><h5>guǎn: </h5><span>public building</span></div>
    </div>
    <h3>画9-11</h3>
    <div>
      <h4>馈: </h4><div><h5>kuì: </h5><span>offer food superior; send gift</span></div>
    </div>
    <div>
      <h4>馊: </h4><div><h5>sōu: </h5><span>spoiled, rotten, stale, rancid</span></div>
    </div>
    <div>
      <h4>馋: </h4><div><h5>chán: </h5><span>gluttonous, greedy; lewd, lecherous</span></div>
    </div>
    <div>
      <h4>馏: </h4><div><h5>liù, liú: </h5><span>distill, distillation</span></div>
    </div>
    <div>
      <h4>馒: </h4><div><h5>mán: </h5><span>steamed bread; steamed dumplings</span></div>
    </div>
    <h1>80: 马</h1>
    <div>
      <h4>马: </h4><div><h5>mǎ: </h5><span>horse; surname; KangXi radical 187</span></div>
    </div>
    <h3>画2-3</h3>
    <div>
      <h4>驭: </h4><div><h5>yù: </h5><span>drive, ride; manage, control</span></div>
    </div>
    <div>
      <h4>驮: </h4><div><h5>tuó: </h5><span>carry on back</span></div>
    </div>
    <div>
      <h4>驯: </h4><div><h5>xùn: </h5><span>tame, docile, obedient</span></div>
    </div>
    <div>
      <h4>驰: </h4><div><h5>chí: </h5><span>go quickly or swiftly; hurry</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>驱: </h4><div><h5>qū: </h5><span>spur a horse on; expel, drive away</span></div>
    </div>
    <div>
      <h4>驳: </h4><div><h5>bó: </h5><span>varicolored, variegated; mixed</span></div>
    </div>
    <div>
      <h4>驴: </h4><div><h5>lǘ: </h5><span>donkey, ass</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>驶: </h4><div><h5>shǐ: </h5><span>sail, drive, pilot; fast, quick</span></div>
    </div>
    <div>
      <h4>驷: </h4><div><h5>sì: </h5><span>team of four horses; horses</span></div>
    </div>
    <div>
      <h4>驹: </h4><div><h5>jū: </h5><span>colt; fleet, swift; sun; surname</span></div>
    </div>
    <div>
      <h4>驻: </h4><div><h5>zhù: </h5><span>to be stationed at, reside at; to stop</span></div>
    </div>
    <div>
      <h4>驼: </h4><div><h5>tuó: </h5><span>a camel; humpbacked; to carry on the back</span></div>
    </div>
    <div>
      <h4>驽: </h4><div><h5>nú: </h5><span>tired, old horse; old, weak</span></div>
    </div>
    <div>
      <h4>驾: </h4><div><h5>jià: </h5><span>to drive, sail, fly; a cart, carriage</span></div>
    </div>
    <div>
      <h4>驿: </h4><div><h5>yì: </h5><span>relay station</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>骁: </h4><div><h5>xiāo: </h5><span>excellent horse; brave, valiant</span></div>
    </div>
    <div>
      <h4>骂: </h4><div><h5>mà: </h5><span>accuse, blame, curse, scold</span></div>
    </div>
    <div>
      <h4>骄: </h4><div><h5>jiāo: </h5><span>spirited horse; haughty</span></div>
    </div>
    <div>
      <h4>骅: </h4><div><h5>huá: </h5><span>an excellent horse</span></div>
    </div>
    <div>
      <h4>骆: </h4><div><h5>luò: </h5><span>a white horse with black mane; a camel</span></div>
    </div>
    <div>
      <h4>骇: </h4><div><h5>hài: </h5><span>terrify, frighten, scare; shock</span></div>
    </div>
    <div>
      <h4>骈: </h4><div><h5>pián: </h5><span>team of horses; associate, join</span></div>
    </div>
    <h3>画7-8</h3>
    <div>
      <h4>骋: </h4><div><h5>chěng: </h5><span>gallop horse; hasten, hurry</span></div>
    </div>
    <div>
      <h4>验: </h4><div><h5>yàn: </h5><span>test, examine, inspect; verify</span></div>
    </div>
    <div>
      <h4>骏: </h4><div><h5>jùn: </h5><span>excellent horse, noble steed</span></div>
    </div>
    <div>
      <h4>骐: </h4><div><h5>qí: </h5><span>piebald horse; excellent horse</span></div>
    </div>
    <div>
      <h4>骑: </h4><div><h5>qí: </h5><span>ride horseback; mount; cavalry</span></div>
    </div>
    <div>
      <h4>骖: </h4><div><h5>cān: </h5><span>two outside ones in three horse</span></div>
    </div>
    <h3>画9-17</h3>
    <div>
      <h4>骗: </h4><div><h5>piàn: </h5><span>swindle, cheat out of, defraud</span></div>
    </div>
    <div>
      <h4>骚: </h4><div><h5>sāo, sǎo: </h5><span>harass, bother, annoy, disturb</span></div>
    </div>
    <div>
      <h4>骛: </h4><div><h5>wù: </h5><span>gallop; rush about; pursue, run</span></div>
    </div>
    <div>
      <h4>骤: </h4><div><h5>zhòu: </h5><span>procedure; gallop; sudden(ly)</span></div>
    </div>
    <div>
      <h4>骥: </h4><div><h5>jì: </h5><span>thoroughbred horse; refined and</span></div>
    </div>
    <div>
      <h4>骧: </h4><div><h5>xiāng: </h5><span>gallop about with head uplifted</span></div>
    </div>
    <h1>81: 心</h1>
    <div>
      <h4>心: </h4><div><h5>xīn: </h5><span>heart; mind, intelligence; soul</span></div>
    </div>
    <h3>画1-3</h3>
    <div>
      <h4>必: </h4><div><h5>bì: </h5><span>surely, most certainly; must</span></div>
    </div>
    <div>
      <h4>忌: </h4><div><h5>jì: </h5><span>jealous, envious; fear</span></div>
    </div>
    <div>
      <h4>忍: </h4><div><h5>rěn: </h5><span>endure, bear, suffer; forbear</span></div>
    </div>
    <div>
      <h4>忐: </h4><div><h5>tǎn: </h5><span>timorous; nervous</span></div>
    </div>
    <div>
      <h4>忑: </h4><div><h5>tè: </h5><span>fearful; nervous; timid</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>忒: </h4><div><h5>tè, tuī: </h5>
      <span>
        excessive; too; very-usually of objectionable things; to err; to
        mistake; changeable
      </span></div>
    </div>
    <div>
      <h4>志: </h4><div><h5>zhì: </h5><span>purpose, will, determination; annals</span></div>
    </div>
    <div>
      <h4>忘: </h4><div><h5>wàng: </h5><span>forget; neglect; miss, omit</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>忠: </h4><div><h5>zhōng: </h5><span>loyalty, devotion, fidelity</span></div>
    </div>
    <div>
      <h4>念: </h4><div><h5>niàn: </h5><span>think of, recall, study</span></div>
    </div>
    <div>
      <h4>忽: </h4><div><h5>hū: </h5><span>suddenly, abruptly; neglect</span></div>
    </div>
    <div>
      <h4>忿: </h4><div><h5>fèn: </h5><span>get angry; fury, exasperation</span></div>
    </div>
    <div>
      <h4>态: </h4><div><h5>tài: </h5><span>manner, bearing, attitude</span></div>
    </div>
    <div>
      <h4>怂: </h4><div><h5>sǒng: </h5><span>instigate, arouse, incite</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>怎: </h4><div><h5>zěn: </h5><span>what? why? how?</span></div>
    </div>
    <div>
      <h4>怒: </h4><div><h5>nù: </h5><span>anger, rage, passion; angry</span></div>
    </div>
    <div>
      <h4>思: </h4><div><h5>sī, sāi: </h5><span>think, consider, ponder; final particle</span></div>
    </div>
    <div>
      <h4>怠: </h4><div><h5>dài: </h5><span>idle, remiss, negligent; neglect</span></div>
    </div>
    <div>
      <h4>急: </h4><div><h5>jí: </h5><span>quick, quickly; urgent, pressing</span></div>
    </div>
    <div>
      <h4>怨: </h4><div><h5>yuàn: </h5><span>hatred, enmity, resentment</span></div>
    </div>
    <div>
      <h4>总: </h4><div><h5>zǒng: </h5><span>collect; overall, altogether</span></div>
    </div>
    <div>
      <h4>怼: </h4><div><h5>duì: </h5><span>hate, abhor; hatred, resentment</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>恁: </h4><div><h5>nèn, nín: </h5><span>that, like this, thus, so, such</span></div>
    </div>
    <div>
      <h4>恋: </h4><div><h5>liàn: </h5><span>love; long for, yearn for; love</span></div>
    </div>
    <div>
      <h4>恐: </h4><div><h5>kǒng: </h5><span>fear; fearful, apprehensive</span></div>
    </div>
    <div>
      <h4>恕: </h4><div><h5>shù: </h5><span>forgive, excuse, show mercy</span></div>
    </div>
    <div>
      <h4>恙: </h4><div><h5>yàng: </h5><span>illness, sickness; indisposition</span></div>
    </div>
    <div>
      <h4>恚: </h4><div><h5>huì: </h5><span>anger, rage</span></div>
    </div>
    <div>
      <h4>恣: </h4><div><h5>zì: </h5><span>indulge oneself, unrestrained</span></div>
    </div>
    <div>
      <h4>恩: </h4><div><h5>ēn: </h5><span>kindness, mercy, charity</span></div>
    </div>
    <div>
      <h4>息: </h4><div><h5>xī: </h5><span>rest, put stop to, end, cease</span></div>
    </div>
    <div>
      <h4>恳: </h4><div><h5>kěn: </h5><span>sincere, earnest, cordial</span></div>
    </div>
    <div>
      <h4>恶: </h4><div><h5>è, wù, ě, wū: </h5><span>evil, wicked, bad, foul</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>恿: </h4><div><h5>yǒng: </h5><span>instigate, incite; to alarm</span></div>
    </div>
    <div>
      <h4>悉: </h4><div><h5>xī: </h5><span>know, learn about, comprehend</span></div>
    </div>
    <div>
      <h4>悠: </h4><div><h5>yōu: </h5><span>long, far, remote, distant; liesurely</span></div>
    </div>
    <div>
      <h4>患: </h4><div><h5>huàn: </h5><span>suffer, worry about; suffering</span></div>
    </div>
    <div>
      <h4>您: </h4><div><h5>nín: </h5><span>honorific for 'you'</span></div>
    </div>
    <div>
      <h4>悬: </h4><div><h5>xuán: </h5><span>hang, suspend, hoist; be hung</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>悲: </h4><div><h5>bēi: </h5><span>sorrow, grief; sorry, sad</span></div>
    </div>
    <div>
      <h4>惑: </h4><div><h5>huò: </h5><span>confuse, mislead, baffle; doubt</span></div>
    </div>
    <div>
      <h4>惠: </h4><div><h5>huì: </h5><span>favor, benefit, confer kindness</span></div>
    </div>
    <div>
      <h4>惩: </h4><div><h5>chéng: </h5><span>punish, reprimand; warn</span></div>
    </div>
    <div>
      <h4>惫: </h4><div><h5>bèi: </h5><span>tired, weary, fatigued</span></div>
    </div>
    <div>
      <h4>惹: </h4><div><h5>rě: </h5><span>irritate, vex, offend, incite</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>想: </h4><div><h5>xiǎng: </h5><span>think, speculate, plan, consider</span></div>
    </div>
    <div>
      <h4>愁: </h4><div><h5>chóu: </h5><span>anxiety; to worry about, be anxious</span></div>
    </div>
    <div>
      <h4>愈: </h4><div><h5>yù: </h5><span>more and more, even more</span></div>
    </div>
    <div>
      <h4>愍: </h4><div><h5>mǐn: </h5><span>pity, sympathize with</span></div>
    </div>
    <div>
      <h4>意: </h4><div><h5>yì: </h5><span>thought, idea, opinion; think</span></div>
    </div>
    <div>
      <h4>愚: </h4><div><h5>yú: </h5><span>stupid, doltish, foolish</span></div>
    </div>
    <div>
      <h4>感: </h4><div><h5>gǎn: </h5><span>feel, perceive, emotion</span></div>
    </div>
    <div>
      <h4>慈: </h4><div><h5>cí: </h5><span>kind, charitable, benevolent</span></div>
    </div>
    <h3>画10-18</h3>
    <div>
      <h4>愿: </h4><div><h5>yuàn: </h5><span>sincere, honest, virtuous</span></div>
    </div>
    <div>
      <h4>慧: </h4><div><h5>huì: </h5><span>bright, intelligent; intelligence</span></div>
    </div>
    <div>
      <h4>慰: </h4><div><h5>wèi: </h5><span>comfort, console, calm</span></div>
    </div>
    <div>
      <h4>憋: </h4><div><h5>biē: </h5><span>to suppress inner feelings; hasty</span></div>
    </div>
    <div>
      <h4>憨: </h4><div><h5>hān: </h5><span>foolish, silly, coquettish</span></div>
    </div>
    <div>
      <h4>憩: </h4><div><h5>qì: </h5><span>rest, take rest</span></div>
    </div>
    <div>
      <h4>懋: </h4><div><h5>mào: </h5><span>splendid, grand, majestic</span></div>
    </div>
    <div>
      <h4>懿: </h4><div><h5>yì: </h5><span>virtuous, admirable, esteemed</span></div>
    </div>
    <h1>82: 戈</h1>
    <div>
      <h4>戈: </h4><div><h5>gē: </h5><span>halberd, spear, lance; rad. 62</span></div>
    </div>
    <h3>画1-2</h3>
    <div>
      <h4>戊: </h4><div><h5>wù: </h5><span>5th heavenly stem</span></div>
    </div>
    <div>
      <h4>戌: </h4><div><h5>xū: </h5><span>11th terrestrial branch</span></div>
    </div>
    <div>
      <h4>戍: </h4><div><h5>shù: </h5><span>defend borders, guard frontiers</span></div>
    </div>
    <div>
      <h4>戎: </h4><div><h5>róng: </h5><span>arms, armaments; military affair</span></div>
    </div>
    <div>
      <h4>戏: </h4><div><h5>xì, hū, wū: </h5><span>theatrical play, show</span></div>
    </div>
    <div>
      <h4>成: </h4><div><h5>chéng: </h5><span>completed, finished, fixed</span></div>
    </div>
    <h3>画3-9</h3>
    <div>
      <h4>我: </h4><div><h5>wǒ: </h5><span>our, us, i, me, my, we</span></div>
    </div>
    <div>
      <h4>戒: </h4><div><h5>jiè: </h5><span>warn, caution, admonish</span></div>
    </div>
    <div>
      <h4>戕: </h4><div><h5>qiāng: </h5><span>kill, slay; wound, injure, hurt</span></div>
    </div>
    <div>
      <h4>或: </h4><div><h5>huò: </h5><span>or, either, else; perhaps, maybe</span></div>
    </div>
    <div>
      <h4>战: </h4><div><h5>zhàn: </h5><span>war, fighting, battle</span></div>
    </div>
    <div>
      <h4>戚: </h4><div><h5>qī: </h5><span>relative; be related to; sad</span></div>
    </div>
    <div>
      <h4>戟: </h4><div><h5>jǐ: </h5><span>halberd with crescent blade</span></div>
    </div>
    <div>
      <h4>戡: </h4><div><h5>kān: </h5><span>subjugate, subdue, quell; kill</span></div>
    </div>
    <h3>画10-14</h3>
    <div>
      <h4>截: </h4><div><h5>jié: </h5><span>cut off, stop, obstruct, intersect</span></div>
    </div>
    <div>
      <h4>戮: </h4><div><h5>lù: </h5><span>kill, massacre; oppress</span></div>
    </div>
    <div>
      <h4>戴: </h4><div><h5>dài: </h5><span>wear on top; support</span></div>
    </div>
    <div>
      <h4>戳: </h4><div><h5>chuō: </h5><span>prick, stab; stamp, seal, chop</span></div>
    </div>
    <h1>83: 户</h1>
    <div>
      <h4>户: </h4><div><h5>hù: </h5><span>door; family</span></div>
    </div>
    <div>
      <h4>戾: </h4><div><h5>lì: </h5><span>perverse, recalcitrant, rebellious</span></div>
    </div>
    <div>
      <h4>房: </h4><div><h5>fáng: </h5><span>house, building; room</span></div>
    </div>
    <div>
      <h4>所: </h4><div><h5>suǒ: </h5><span>place, location; numerary adjunct</span></div>
    </div>
    <div>
      <h4>扁: </h4><div><h5>biǎn, piān: </h5><span>flat; tablet, signboard</span></div>
    </div>
    <div>
      <h4>扇: </h4><div><h5>shàn, shān: </h5><span>fan; door panel</span></div>
    </div>
    <div>
      <h4>扈: </h4><div><h5>hù: </h5><span>escort, retinue; insolent</span></div>
    </div>
    <div>
      <h4>扉: </h4><div><h5>fēi: </h5><span>door panel</span></div>
    </div>
    <h1>84: 手</h1>
    <div>
      <h4>手: </h4><div><h5>shǒu: </h5><span>hand</span></div>
    </div>
    <h3>画5-6</h3>
    <div>
      <h4>拜: </h4><div><h5>bài: </h5><span>do obeisance, bow, kowtow</span></div>
    </div>
    <div>
      <h4>拳: </h4><div><h5>quán: </h5><span>fist; various forms of boxing</span></div>
    </div>
    <div>
      <h4>拿: </h4><div><h5>ná: </h5><span>take, hold, grasp; bring; with</span></div>
    </div>
    <div>
      <h4>挚: </h4><div><h5>zhì: </h5><span>sincere, warm, cordial; surname</span></div>
    </div>
    <div>
      <h4>挛: </h4><div><h5>luán: </h5><span>tangled; entwined; crooked</span></div>
    </div>
    <h3>画8-13</h3>
    <div>
      <h4>掌: </h4><div><h5>zhǎng: </h5><span>palm of hand, sole of foot, paw</span></div>
    </div>
    <div>
      <h4>掔: </h4><div><h5>qiān, wàn: </h5><span>sturdy</span></div>
    </div>
    <div>
      <h4>掣: </h4><div><h5>chè: </h5><span>drag, pull; hinder by pulling back</span></div>
    </div>
    <div>
      <h4>摹: </h4><div><h5>mó: </h5><span>trace, copy, duplicate; pattern</span></div>
    </div>
    <div>
      <h4>摩: </h4><div><h5>mó, mā: </h5><span>rub, scour, grind; friction</span></div>
    </div>
    <div>
      <h4>擎: </h4><div><h5>qíng: </h5><span>lift up, hold up, support</span></div>
    </div>
    <div>
      <h4>擘: </h4><div><h5>bò, bāi: </h5><span>thumb; break, tear open, rip</span></div>
    </div>
    <h3>画15</h3>
    <div>
      <h4>攀: </h4><div><h5>pān: </h5><span>climb; pull; hang on to</span></div>
    </div>
    <h1>85: 支</h1>
    <div>
      <h4>支: </h4><div><h5>zhī: </h5><span>disperse, pay; support; branch</span></div>
    </div>
    <h1>86: 攴</h1>
    <div>
      <h4>敲: </h4><div><h5>qiāo: </h5><span>strike, beat, pound, hammer; rap</span></div>
    </div>
    <h1>87: 攵</h1>
    <h3>画2-4</h3>
    <div>
      <h4>收: </h4><div><h5>shōu: </h5><span>gather together, collect; harvest</span></div>
    </div>
    <div>
      <h4>攸: </h4><div><h5>yōu: </h5><span>distant, far; adverbial prefix</span></div>
    </div>
    <div>
      <h4>改: </h4><div><h5>gǎi: </h5><span>change, alter; improve, remodel</span></div>
    </div>
    <div>
      <h4>攻: </h4><div><h5>gōng: </h5><span>attack, assault; criticize</span></div>
    </div>
    <div>
      <h4>放: </h4><div><h5>fàng: </h5><span>put, release, free, liberate</span></div>
    </div>
    <div>
      <h4>玫: </h4><div><h5>méi: </h5><span>rose</span></div>
    </div>
    <h3>画5-6</h3>
    <div>
      <h4>政: </h4><div><h5>zhèng: </h5><span>government, political affairs</span></div>
    </div>
    <div>
      <h4>故: </h4><div><h5>gù: </h5><span>ancient, old; reason, because</span></div>
    </div>
    <div>
      <h4>效: </h4><div><h5>xiào: </h5><span>result, effect; effectiveness</span></div>
    </div>
    <div>
      <h4>敌: </h4><div><h5>dí: </h5><span>enemy, foe, rival; resist</span></div>
    </div>
    <div>
      <h4>敖: </h4><div><h5>áo: </h5><span>ramble, play about; leisurely; surname</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>敏: </h4><div><h5>mǐn: </h5><span>fast, quick, clever, smart</span></div>
    </div>
    <div>
      <h4>救: </h4><div><h5>jiù: </h5><span>save, rescue, relieve; help, aid</span></div>
    </div>
    <div>
      <h4>敕: </h4><div><h5>chì: </h5><span>an imperial order or decree</span></div>
    </div>
    <div>
      <h4>教: </h4><div><h5>jiào, jiāo: </h5><span>teach, class</span></div>
    </div>
    <div>
      <h4>敛: </h4><div><h5>liǎn: </h5><span>draw back, fold back; collect</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>敝: </h4><div><h5>bì: </h5><span>break, destroy; broken, tattered</span></div>
    </div>
    <div>
      <h4>敢: </h4><div><h5>gǎn: </h5><span>to dare, venture; bold, brave</span></div>
    </div>
    <h3>画8-12</h3>
    <div>
      <h4>敞: </h4><div><h5>chǎng: </h5><span>roomy, spacious, open, broad</span></div>
    </div>
    <div>
      <h4>散: </h4><div><h5>sàn, sǎn: </h5><span>scatter, disperse, break up</span></div>
    </div>
    <div>
      <h4>敦: </h4><div><h5>dūn, duì: </h5><span>esteem; honest, candid, sincere</span></div>
    </div>
    <div>
      <h4>敬: </h4><div><h5>jìng: </h5><span>respect, honor; respectfully</span></div>
    </div>
    <div>
      <h4>数: </h4><div><h5>shù, shǔ, shuò: </h5><span>number; several, count; fate</span></div>
    </div>
    <div>
      <h4>敷: </h4><div><h5>fū: </h5><span>spread, diffuse; apply, paint</span></div>
    </div>
    <div>
      <h4>整: </h4><div><h5>zhěng: </h5><span>orderly, neat, tidy; whole</span></div>
    </div>
    <h1>88: 文</h1>
    <div>
      <h4>文: </h4><div><h5>wén: </h5><span>literature, culture, writing</span></div>
    </div>
    <div>
      <h4>斋: </h4><div><h5>zhāi: </h5><span>vegetarian diet; study</span></div>
    </div>
    <div>
      <h4>斌: </h4><div><h5>bīn: </h5><span>refined, having both appearance</span></div>
    </div>
    <div>
      <h4>斐: </h4><div><h5>fěi, fēi: </h5><span>graceful, elegant, beautiful</span></div>
    </div>
    <div>
      <h4>斑: </h4><div><h5>bān: </h5><span>mottled, striped, freckle</span></div>
    </div>
    <h1>89: 斗</h1>
    <div>
      <h4>斗: </h4><div><h5>dǒu, dòu: </h5><span>Chinese peck; liquid measure</span></div>
    </div>
    <div>
      <h4>料: </h4><div><h5>liào: </h5><span>consider, conjecture; materials, ingredients</span></div>
    </div>
    <div>
      <h4>斜: </h4><div><h5>xié: </h5><span>slanting, sloping, inclined</span></div>
    </div>
    <div>
      <h4>斟: </h4><div><h5>zhēn: </h5><span>to pour wine or tea into a cup; to gauge</span></div>
    </div>
    <div>
      <h4>斡: </h4><div><h5>wò, guǎn: </h5><span>revolve, rotate, turn</span></div>
    </div>
    <h1>90: 斤</h1>
    <div>
      <h4>斤: </h4><div><h5>jīn: </h5>
      <span>
        a catty (approximately 500 g); an axe; keen, shrewd; KangXi radical
        number 69
      </span></div>
    </div>
    <div>
      <h4>斥: </h4><div><h5>chì: </h5><span>to scold, upbraid, accuse, reproach</span></div>
    </div>
    <div>
      <h4>斧: </h4><div><h5>fǔ: </h5><span>axe, hatchet; chop, hew</span></div>
    </div>
    <div>
      <h4>斩: </h4><div><h5>zhǎn: </h5><span>cut, chop, sever; behead</span></div>
    </div>
    <div>
      <h4>断: </h4><div><h5>duàn: </h5><span>sever, cut off; interrupt</span></div>
    </div>
    <div>
      <h4>斯: </h4><div><h5>sī: </h5><span>this, thus, such; to lop off; emphatic particle</span></div>
    </div>
    <div>
      <h4>新: </h4><div><h5>xīn: </h5><span>new, recent, fresh, modern</span></div>
    </div>
    <h1>91: 方</h1>
    <div>
      <h4>方: </h4><div><h5>fāng: </h5><span>a square, rectangle; a region; local</span></div>
    </div>
    <h3>画4-6</h3>
    <div>
      <h4>於: </h4><div><h5>yú, wū: </h5><span>in, at, on; interjection alas!</span></div>
    </div>
    <div>
      <h4>施: </h4><div><h5>shī: </h5><span>grant, bestow; give; act; name</span></div>
    </div>
    <div>
      <h4>旁: </h4><div><h5>páng, bàng: </h5><span>side; by side, close by, near</span></div>
    </div>
    <div>
      <h4>旄: </h4><div><h5>máo, mào: </h5><span>a kind of ancient flag; old</span></div>
    </div>
    <div>
      <h4>旅: </h4><div><h5>lǚ: </h5><span>trip, journey; travel; traveler</span></div>
    </div>
    <h3>画7-10</h3>
    <div>
      <h4>旋: </h4><div><h5>xuán, xuàn: </h5><span>revolve, move in orbit; return</span></div>
    </div>
    <div>
      <h4>旌: </h4><div><h5>jīng: </h5><span>banner or flag adorned with feathers; to signal</span></div>
    </div>
    <div>
      <h4>族: </h4><div><h5>zú: </h5><span>a family clan, ethnic group, tribe</span></div>
    </div>
    <div>
      <h4>旗: </h4><div><h5>qí: </h5><span>banner, flag, streamer</span></div>
    </div>
    <h1>92: 旡</h1>
    <div>
      <h4>既: </h4><div><h5>jì: </h5><span>already; de facto; since; then</span></div>
    </div>
    <h1>93: 日</h1>
    <div>
      <h4>日: </h4><div><h5>rì: </h5><span>sun; day; daytime</span></div>
    </div>
    <h3>画1-2</h3>
    <div>
      <h4>旦: </h4><div><h5>dàn: </h5><span>dawn; morning; day</span></div>
    </div>
    <div>
      <h4>旧: </h4><div><h5>jiù: </h5><span>old, ancient; former, past</span></div>
    </div>
    <div>
      <h4>旨: </h4><div><h5>zhǐ: </h5><span>purpose, aim; excellent</span></div>
    </div>
    <div>
      <h4>早: </h4><div><h5>zǎo: </h5><span>early; soon; morning</span></div>
    </div>
    <div>
      <h4>旬: </h4><div><h5>xún: </h5><span>ten-day period; period of time</span></div>
    </div>
    <div>
      <h4>旭: </h4><div><h5>xù: </h5><span>rising sun; brilliance; radiant</span></div>
    </div>
    <h3>画3</h3>
    <div>
      <h4>旱: </h4><div><h5>hàn: </h5><span>drought; dry; dry land</span></div>
    </div>
    <div>
      <h4>时: </h4><div><h5>shí: </h5><span>time, season; era, age, period</span></div>
    </div>
    <div>
      <h4>旷: </h4><div><h5>kuàng: </h5><span>extensive, wide, broad; empty</span></div>
    </div>
    <div>
      <h4>旸: </h4><div><h5>yáng: </h5><span>rising sun; sunshine</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>旺: </h4><div><h5>wàng: </h5><span>prosper; prosperous; increase</span></div>
    </div>
    <div>
      <h4>旻: </h4><div><h5>mín: </h5><span>heaven</span></div>
    </div>
    <div>
      <h4>昀: </h4><div><h5>yún: </h5><span>sun light; used in personal names</span></div>
    </div>
    <div>
      <h4>昂: </h4><div><h5>áng: </h5><span>rise, raise; proud, bold; upright</span></div>
    </div>
    <div>
      <h4>昃: </h4><div><h5>zè: </h5><span>afternoon; the sun in the afternoon sky; to decline</span></div>
    </div>
    <div>
      <h4>昆: </h4><div><h5>kūn: </h5><span>elder brother; descendants</span></div>
    </div>
    <div>
      <h4>昊: </h4><div><h5>hào: </h5><span>summer time; sky; heaven</span></div>
    </div>
    <div>
      <h4>昌: </h4><div><h5>chāng: </h5><span>light of sun; good, proper</span></div>
    </div>
    <div>
      <h4>明: </h4><div><h5>míng: </h5><span>bright, light, brilliant; clear</span></div>
    </div>
    <div>
      <h4>昏: </h4><div><h5>hūn: </h5><span>dusk, nightfall, twilight, dark</span></div>
    </div>
    <div>
      <h4>易: </h4><div><h5>yì: </h5><span>change; easy</span></div>
    </div>
    <div>
      <h4>昔: </h4><div><h5>xī: </h5><span>formerly; ancient; in beginning</span></div>
    </div>
    <div>
      <h4>昕: </h4><div><h5>xīn: </h5><span>dawn; early morning; day</span></div>
    </div>
    <div>
      <h4>昙: </h4><div><h5>tán: </h5><span>become cloudy, overcast</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>昝: </h4><div><h5>zǎn: </h5><span>a dual pronoun, I, you and me, we two</span></div>
    </div>
    <div>
      <h4>星: </h4><div><h5>xīng: </h5><span>a star, planet; any point of light</span></div>
    </div>
    <div>
      <h4>映: </h4><div><h5>yìng: </h5><span>project; reflect light</span></div>
    </div>
    <div>
      <h4>春: </h4><div><h5>chūn: </h5><span>spring; wanton</span></div>
    </div>
    <div>
      <h4>昧: </h4><div><h5>mèi: </h5><span>obscure, dark; darken</span></div>
    </div>
    <div>
      <h4>昨: </h4><div><h5>zuó: </h5><span>yesterday; in former times, past</span></div>
    </div>
    <div>
      <h4>昭: </h4><div><h5>zhāo: </h5><span>bright, luminous; illustrious</span></div>
    </div>
    <div>
      <h4>是: </h4><div><h5>shì: </h5>
      <span>
        indeed, yes, right; to be; demonstrative pronoun, this, that
      </span></div>
    </div>
    <div>
      <h4>昱: </h4><div><h5>yù: </h5><span>bright light, sunlight; dazzling</span></div>
    </div>
    <div>
      <h4>昴: </h4><div><h5>mǎo: </h5><span>one of the 28 constellations</span></div>
    </div>
    <div>
      <h4>昶: </h4><div><h5>chǎng: </h5><span>a long day. bright. extended. clear</span></div>
    </div>
    <div>
      <h4>昼: </h4><div><h5>zhòu: </h5><span>daytime, daylight</span></div>
    </div>
    <div>
      <h4>显: </h4><div><h5>xiǎn: </h5><span>manifest, display; evident, clear</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>晃: </h4><div><h5>huǎng, huàng: </h5><span>bright, dazzling; to sway, shake</span></div>
    </div>
    <div>
      <h4>晋: </h4><div><h5>jìn: </h5><span>advance, increase; promote</span></div>
    </div>
    <div>
      <h4>晌: </h4><div><h5>shǎng: </h5>
      <span>
        noon, midday; moment; unit land measurement equal to seven mou (U+755D
        畝), or the area that can be sown in one day
      </span></div>
    </div>
    <div>
      <h4>晏: </h4><div><h5>yàn: </h5><span>peaceful, quiet; clear; late in the day</span></div>
    </div>
    <div>
      <h4>晒: </h4><div><h5>shài: </h5><span>dry in sun, expose to sun</span></div>
    </div>
    <div>
      <h4>晓: </h4><div><h5>xiǎo: </h5><span>dawn, daybreak; clear, explicit</span></div>
    </div>
    <div>
      <h4>晔: </h4><div><h5>yè: </h5><span>bright; radiant; thriving</span></div>
    </div>
    <div>
      <h4>晕: </h4><div><h5>yùn, yūn: </h5><span>halo in sky; fog; dizzy, faint</span></div>
    </div>
    <div>
      <h4>晖: </h4><div><h5>huī: </h5><span>sunshine; light, bright, radiant</span></div>
    </div>
    <div>
      <h4>晟: </h4><div><h5>shèng, chéng: </h5><span>clear, bright; splendor, brightness</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>晚: </h4><div><h5>wǎn: </h5><span>night, evening; late</span></div>
    </div>
    <div>
      <h4>晞: </h4><div><h5>xī: </h5><span>dry, expose sun; dawn</span></div>
    </div>
    <div>
      <h4>晡: </h4><div><h5>bū: </h5><span>late afternoon</span></div>
    </div>
    <div>
      <h4>晤: </h4><div><h5>wù: </h5><span>have interview with; meet</span></div>
    </div>
    <div>
      <h4>晦: </h4><div><h5>huì: </h5><span>dark, unclear, obscure; night</span></div>
    </div>
    <div>
      <h4>晨: </h4><div><h5>chén: </h5><span>early morning, daybreak</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>普: </h4><div><h5>pǔ: </h5><span>universal, general, widespread</span></div>
    </div>
    <div>
      <h4>景: </h4><div><h5>jǐng, yǐng: </h5><span>scenery, view; conditions</span></div>
    </div>
    <div>
      <h4>晰: </h4><div><h5>xī: </h5><span>clear, evident; clearly</span></div>
    </div>
    <div>
      <h4>晴: </h4><div><h5>qíng: </h5><span>clear weather, fine weather</span></div>
    </div>
    <div>
      <h4>晶: </h4><div><h5>jīng: </h5><span>crystal; clear, bright; radiant</span></div>
    </div>
    <div>
      <h4>智: </h4><div><h5>zhì: </h5><span>wisdom, knowledge, intelligence</span></div>
    </div>
    <div>
      <h4>晾: </h4><div><h5>liàng: </h5><span>air-dry; sun-dry</span></div>
    </div>
    <div>
      <h4>暂: </h4><div><h5>zàn: </h5><span>temporary</span></div>
    </div>
    <div>
      <h4>暑: </h4><div><h5>shǔ: </h5><span>hot</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>暄: </h4><div><h5>xuān: </h5><span>warm, comfortable; warm, genial</span></div>
    </div>
    <div>
      <h4>暇: </h4><div><h5>xiá: </h5><span>leisure, relaxation, spare time</span></div>
    </div>
    <div>
      <h4>暖: </h4><div><h5>nuǎn: </h5><span>warm, genial</span></div>
    </div>
    <div>
      <h4>暗: </h4><div><h5>àn: </h5><span>dark; obscure; in secret, covert</span></div>
    </div>
    <h3>画10-13</h3>
    <div>
      <h4>暝: </h4><div><h5>míng: </h5><span>dark, obscure</span></div>
    </div>
    <div>
      <h4>暧: </h4><div><h5>ài: </h5><span>obscure, dim, ambiguous, vague</span></div>
    </div>
    <div>
      <h4>暨: </h4><div><h5>jì: </h5><span>and; attain, reach; confines</span></div>
    </div>
    <div>
      <h4>暮: </h4><div><h5>mù: </h5><span>evening, dusk, sunset; ending</span></div>
    </div>
    <div>
      <h4>暴: </h4><div><h5>bào, pù: </h5><span>violent, brutal, tyrannical</span></div>
    </div>
    <div>
      <h4>暸: </h4><div><h5>liáo: </h5><span>bright, clear</span></div>
    </div>
    <div>
      <h4>暾: </h4><div><h5>tūn: </h5><span>morning sun, sunrise</span></div>
    </div>
    <div>
      <h4>曙: </h4><div><h5>shǔ: </h5><span>bright, light of rising sun</span></div>
    </div>
    <h3>画14-16</h3>
    <div>
      <h4>曜: </h4><div><h5>yào: </h5>
      <span>
        glorious, as sun; daylight, sunlight
      </span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>曝: </h4><div><h5>pù, bào: </h5><span>sun, air in sun, expose or dry in the sun</span></div>
    </div>
    <div>
      <h4>曦: </h4><div><h5>xī: </h5><span>sunlight, sunshine, early dawn</span></div>
    </div>
    <h1>94: 曰</h1>
    <div>
      <h4>曰: </h4><div><h5>yuē: </h5><span>say; KangXi radical 73</span></div>
    </div>
    <div>
      <h4>曲: </h4><div><h5>qū, qǔ: </h5><span>crooked, bent; wrong, false</span></div>
    </div>
    <div>
      <h4>曳: </h4><div><h5>yè: </h5><span>trail, tow, drag, pull</span></div>
    </div>
    <div>
      <h4>更: </h4><div><h5>gēng, gèng: </h5><span>more, still further, much more</span></div>
    </div>
    <div>
      <h4>曹: </h4><div><h5>cáo: </h5><span>ministry officials; surname</span></div>
    </div>
    <div>
      <h4>曼: </h4><div><h5>màn: </h5><span>long, extended, vast; beautiful</span></div>
    </div>
    <div>
      <h4>曾: </h4><div><h5>zēng, céng: </h5><span>already; sign of past</span></div>
    </div>
    <div>
      <h4>替: </h4><div><h5>tì: </h5><span>change, replace, substitute for</span></div>
    </div>
    <div>
      <h4>最: </h4><div><h5>zuì: </h5><span>most, extremely, exceedingly</span></div>
    </div>
    <h1>95: 月</h1>
    <div>
      <h4>月: </h4><div><h5>yuè: </h5><span>moon; month; KangXi radical 74</span></div>
    </div>
    <h3>画2</h3>
    <div>
      <h4>有: </h4><div><h5>yǒu, yòu: </h5><span>have, own, possess; exist</span></div>
    </div>
    <div>
      <h4>肋: </h4><div><h5>lèi, lē: </h5><span>ribs; chest</span></div>
    </div>
    <div>
      <h4>肌: </h4><div><h5>jī: </h5><span>muscle tissue; meat on bones</span></div>
    </div>
    <h3>画3</h3>
    <div>
      <h4>肓: </h4><div><h5>huāng: </h5><span>region between heart and diaphragm</span></div>
    </div>
    <div>
      <h4>肖: </h4><div><h5>xiāo, xiào: </h5><span>look like, resemble, be like</span></div>
    </div>
    <div>
      <h4>肘: </h4><div><h5>zhǒu: </h5><span>the elbow; help a person shoulder a load</span></div>
    </div>
    <div>
      <h4>肚: </h4><div><h5>dù, dǔ: </h5><span>belly; abdomen; bowels</span></div>
    </div>
    <div>
      <h4>肛: </h4><div><h5>gāng: </h5><span>anus</span></div>
    </div>
    <div>
      <h4>肝: </h4><div><h5>gān: </h5><span>liver</span></div>
    </div>
    <div>
      <h4>肠: </h4><div><h5>cháng: </h5><span>intestines; emotions; sausage</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>朋: </h4><div><h5>péng: </h5><span>friend, pal, acquaintance</span></div>
    </div>
    <div>
      <h4>服: </h4><div><h5>fú, fù: </h5><span>clothes; wear, dress</span></div>
    </div>
    <div>
      <h4>股: </h4><div><h5>gǔ: </h5><span>thighs, haunches, rump; share</span></div>
    </div>
    <div>
      <h4>肢: </h4><div><h5>zhī: </h5><span>human limbs; animal feet</span></div>
    </div>
    <div>
      <h4>肤: </h4><div><h5>fū: </h5><span>skin; superficial, shallow</span></div>
    </div>
    <div>
      <h4>肥: </h4><div><h5>féi: </h5><span>fat, plump, obese; fertile</span></div>
    </div>
    <div>
      <h4>肩: </h4><div><h5>jiān: </h5><span>shoulders; to shoulder; bear</span></div>
    </div>
    <div>
      <h4>肪: </h4><div><h5>fáng: </h5><span>animal fat</span></div>
    </div>
    <div>
      <h4>肮: </h4><div><h5>āng: </h5><span>dirty</span></div>
    </div>
    <div>
      <h4>肯: </h4><div><h5>kěn: </h5><span>willing; consent to, permit</span></div>
    </div>
    <div>
      <h4>育: </h4><div><h5>yù: </h5><span>produce, give birth to; educate</span></div>
    </div>
    <div>
      <h4>肴: </h4><div><h5>yáo: </h5><span>cooked or prepared meat</span></div>
    </div>
    <div>
      <h4>肺: </h4><div><h5>fèi: </h5><span>lungs</span></div>
    </div>
    <div>
      <h4>肾: </h4><div><h5>shèn: </h5><span>kidneys; testes, gizzard</span></div>
    </div>
    <div>
      <h4>肿: </h4><div><h5>zhǒng: </h5><span>swell; swollen; swelling</span></div>
    </div>
    <div>
      <h4>胀: </h4><div><h5>zhàng: </h5><span>swell, inflate, expand</span></div>
    </div>
    <div>
      <h4>胁: </h4><div><h5>xié: </h5><span>ribs, armpits; flank; threaten</span></div>
    </div>
    <div>
      <h4>胏: </h4><div><h5>zǐ, fèi: </h5><span>meat</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>胃: </h4><div><h5>wèi: </h5><span>stomach; gizzard of fowl</span></div>
    </div>
    <div>
      <h4>胆: </h4><div><h5>dǎn: </h5><span>gall bladder; bravery, courage</span></div>
    </div>
    <div>
      <h4>背: </h4><div><h5>bèi, bēi: </h5><span>back; back side; behind; betray</span></div>
    </div>
    <div>
      <h4>胎: </h4><div><h5>tāi: </h5><span>unborn child, embryo, fetus</span></div>
    </div>
    <div>
      <h4>胖: </h4><div><h5>pàng, pán, pàn: </h5><span>fat, obese; fatty</span></div>
    </div>
    <div>
      <h4>胚: </h4><div><h5>pēi: </h5><span>embryo; unfinished things</span></div>
    </div>
    <div>
      <h4>胛: </h4><div><h5>jiǎ: </h5><span>the shoulder, shoulder blade</span></div>
    </div>
    <div>
      <h4>胜: </h4><div><h5>shèng: </h5><span>victory; excel, be better than</span></div>
    </div>
    <div>
      <h4>胝: </h4><div><h5>zhī: </h5><span>callous, corn</span></div>
    </div>
    <div>
      <h4>胞: </h4><div><h5>bāo: </h5><span>womb, placenta, fetal membrane</span></div>
    </div>
    <div>
      <h4>胡: </h4><div><h5>hú: </h5><span>recklessly, foolishly; wildly</span></div>
    </div>
    <div>
      <h4>胤: </h4><div><h5>yìn: </h5><span>heir, successor; progeny, posterity</span></div>
    </div>
    <div>
      <h4>胥: </h4><div><h5>xū: </h5><span>all, together, mutually</span></div>
    </div>
    <div>
      <h4>胧: </h4><div><h5>lóng: </h5><span>condition or appearance of moon</span></div>
    </div>
    <div>
      <h4>胫: </h4><div><h5>jìng: </h5><span>shinbone; calf of leg</span></div>
    </div>
    <div>
      <h4>脉: </h4><div><h5>mài, mò: </h5><span>blood vessels, veins, arteries</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>朔: </h4><div><h5>shuò: </h5><span>first day of lunar month; the north</span></div>
    </div>
    <div>
      <h4>朕: </h4><div><h5>zhèn: </h5><span>pronoun 'I'</span></div>
    </div>
    <div>
      <h4>朗: </h4><div><h5>lǎng: </h5><span>clear, bright; distinct</span></div>
    </div>
    <div>
      <h4>胭: </h4><div><h5>yān: </h5><span>rouge, cosmetics</span></div>
    </div>
    <div>
      <h4>胯: </h4><div><h5>kuà: </h5><span>pelvis; groin; thighs</span></div>
    </div>
    <div>
      <h4>胱: </h4><div><h5>guāng: </h5><span>bladder</span></div>
    </div>
    <div>
      <h4>胳: </h4><div><h5>gē, gé: </h5><span>armpit, arms</span></div>
    </div>
    <div>
      <h4>胶: </h4><div><h5>jiāo: </h5><span>glue, gum, resin, rubber; sound; shin bone</span></div>
    </div>
    <div>
      <h4>胸: </h4><div><h5>xiōng: </h5><span>breast, bosom, chest; thorax</span></div>
    </div>
    <div>
      <h4>胺: </h4><div><h5>àn: </h5><span>amine</span></div>
    </div>
    <div>
      <h4>胼: </h4><div><h5>pián: </h5><span>callus, calluses</span></div>
    </div>
    <div>
      <h4>能: </h4><div><h5>néng, nài: </h5><span>to be able; can, permitted to; ability</span></div>
    </div>
    <div>
      <h4>脂: </h4><div><h5>zhī: </h5><span>fat, grease, lard; grease</span></div>
    </div>
    <div>
      <h4>脆: </h4><div><h5>cuì: </h5><span>crisp; fragile, frail; brittle</span></div>
    </div>
    <div>
      <h4>脊: </h4><div><h5>jǐ: </h5><span>spine, backbone; ridge</span></div>
    </div>
    <div>
      <h4>脍: </h4><div><h5>kuài: </h5><span>minced meat or fish</span></div>
    </div>
    <div>
      <h4>脏: </h4><div><h5>zàng: </h5><span>internal organs, viscera; dirty</span></div>
    </div>
    <div>
      <h4>脐: </h4><div><h5>qí: </h5><span>abdominal area of crab; navel</span></div>
    </div>
    <div>
      <h4>脑: </h4><div><h5>nǎo: </h5><span>brain</span></div>
    </div>
    <div>
      <h4>脓: </h4><div><h5>nóng: </h5><span>pus</span></div>
    </div>
    <div>
      <h4>脩: </h4><div><h5>xiū: </h5>
      <span>dried meat (used as teachers payment in ancient times)</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>望: </h4><div><h5>wàng: </h5><span>to look at, look forward; to hope, expect</span></div>
    </div>
    <div>
      <h4>脖: </h4><div><h5>bó: </h5><span>neck</span></div>
    </div>
    <div>
      <h4>脚: </h4><div><h5>jiǎo: </h5><span>leg, foot; base, leg, foundation</span></div>
    </div>
    <div>
      <h4>脯: </h4><div><h5>fǔ: </h5><span>dried meat; preserved fruits</span></div>
    </div>
    <div>
      <h4>脱: </h4><div><h5>tuō: </h5><span>take off</span></div>
    </div>
    <div>
      <h4>脸: </h4><div><h5>liǎn: </h5><span>face; cheek; reputation</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>朝: </h4><div><h5>zhāo, cháo: </h5><span>dynasty; morning</span></div>
    </div>
    <div>
      <h4>期: </h4><div><h5>qī, jī: </h5><span>period of time; date; time limit</span></div>
    </div>
    <div>
      <h4>脾: </h4><div><h5>pí: </h5><span>spleen, pancreas; disposition</span></div>
    </div>
    <div>
      <h4>腆: </h4><div><h5>tiǎn: </h5><span>prosperous; good; protruding</span></div>
    </div>
    <div>
      <h4>腊: </h4><div><h5>là, xī: </h5><span>year end sacrifice; dried meat</span></div>
    </div>
    <div>
      <h4>腋: </h4><div><h5>yè: </h5><span>armpit</span></div>
    </div>
    <div>
      <h4>腑: </h4><div><h5>fǔ: </h5><span>bowels, entrails, internal organs</span></div>
    </div>
    <div>
      <h4>腓: </h4><div><h5>féi: </h5><span>calf; avoid; be ill; wither</span></div>
    </div>
    <div>
      <h4>腔: </h4><div><h5>qiāng: </h5><span>chest cavity; hollow in body</span></div>
    </div>
    <div>
      <h4>腕: </h4><div><h5>wàn: </h5><span>wrist</span></div>
    </div>
    <div>
      <h4>腱: </h4><div><h5>jiàn: </h5><span>tendons</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>腥: </h4><div><h5>xīng: </h5><span>raw meat; rank, strong-smelling</span></div>
    </div>
    <div>
      <h4>腮: </h4><div><h5>sāi: </h5><span>lower part of face; jaw; gills of a fish</span></div>
    </div>
    <div>
      <h4>腰: </h4><div><h5>yāo: </h5><span>waist; kidney</span></div>
    </div>
    <div>
      <h4>腹: </h4><div><h5>fù: </h5><span>stomach, belly, abdomen; inside</span></div>
    </div>
    <div>
      <h4>腺: </h4><div><h5>xiàn: </h5><span>gland</span></div>
    </div>
    <div>
      <h4>腻: </h4><div><h5>nì: </h5><span>greasy, oily, dirty; smooth</span></div>
    </div>
    <div>
      <h4>腾: </h4><div><h5>téng: </h5><span>fly; gallop; run; prance; rise</span></div>
    </div>
    <div>
      <h4>腿: </h4><div><h5>tuǐ: </h5><span>legs, thighs</span></div>
    </div>
    <h3>画10-11</h3>
    <div>
      <h4>膀: </h4><div><h5>bǎng, páng: </h5><span>upper arm; shoulder; wing</span></div>
    </div>
    <div>
      <h4>膊: </h4><div><h5>bó: </h5><span>shoulders, upper arms</span></div>
    </div>
    <div>
      <h4>膏: </h4><div><h5>gāo, gào: </h5><span>grease, fat; paste, ointment</span></div>
    </div>
    <div>
      <h4>膑: </h4><div><h5>bìn: </h5><span>the kneecap</span></div>
    </div>
    <div>
      <h4>膜: </h4><div><h5>mó: </h5><span>membrane; to kneel and worship</span></div>
    </div>
    <div>
      <h4>膛: </h4><div><h5>táng: </h5><span>chest; hollow space, cavity</span></div>
    </div>
    <div>
      <h4>膝: </h4><div><h5>xī: </h5><span>knee</span></div>
    </div>
    <h3>画12</h3>
    <div>
      <h4>膨: </h4><div><h5>péng: </h5><span>to swell; swollen, bloated, inflated</span></div>
    </div>
    <div>
      <h4>膫: </h4><div><h5>liáo: </h5><span>the fat covering the intestines; the omentum</span></div>
    </div>
    <div>
      <h4>膳: </h4><div><h5>shàn: </h5><span>meals, provisions, board</span></div>
    </div>
    <h3>画13</h3>
    <div>
      <h4>朦: </h4><div><h5>méng: </h5><span>condition or appearance of moon</span></div>
    </div>
    <div>
      <h4>膺: </h4><div><h5>yīng: </h5><span>breast, chest; undertake, bear</span></div>
    </div>
    <div>
      <h4>臀: </h4><div><h5>tún: </h5><span>buttocks</span></div>
    </div>
    <div>
      <h4>臂: </h4><div><h5>bì, bei: </h5><span>arm</span></div>
    </div>
    <div>
      <h4>臆: </h4><div><h5>yì: </h5><span>chest, breast, bosom; thought</span></div>
    </div>
    <div>
      <h4>臊: </h4><div><h5>sāo, sào: </h5><span>rank; rancid; frowzy, fetid; bashful</span></div>
    </div>
    <h1>96: 木</h1>
    <div>
      <h4>木: </h4><div><h5>mù: </h5><span>tree; wood, lumber; wooden</span></div>
    </div>
    <h3>画1</h3>
    <div>
      <h4>未: </h4><div><h5>wèi: </h5><span>not yet; 8th terrestrial branch</span></div>
    </div>
    <div>
      <h4>末: </h4><div><h5>mò: </h5><span>final, last, end; insignificant</span></div>
    </div>
    <div>
      <h4>本: </h4><div><h5>běn: </h5><span>root, origin, source; basis</span></div>
    </div>
    <div>
      <h4>札: </h4><div><h5>zhá: </h5><span>letter, note; correspondence</span></div>
    </div>
    <div>
      <h4>术: </h4><div><h5>shù, shú, zhú: </h5>
      <span>art, skill, special feat; method, technique</span></div>
    </div>
    <h3>画2</h3>
    <div>
      <h4>朱: </h4><div><h5>zhū, shú: </h5><span>cinnabar, vermilion; surname</span></div>
    </div>
    <div>
      <h4>朴: </h4><div><h5>pǔ, pò, pō, piáo: </h5>
      <span>simple, unadorned; sincere; surname; a tree</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>朵: </h4><div><h5>duǒ: </h5><span>cluster of flowers; earlobe</span></div>
    </div>
    <div>
      <h4>机: </h4><div><h5>jī: </h5><span>desk; machine; moment</span></div>
    </div>
    <div>
      <h4>朽: </h4><div><h5>xiǔ: </h5><span>decayed, rotten; rot, decay</span></div>
    </div>
    <div>
      <h4>杀: </h4><div><h5>shā: </h5><span>kill, slaughter, murder; hurt</span></div>
    </div>
    <div>
      <h4>杂: </h4><div><h5>zá: </h5><span>mixed, blended; mix, mingle</span></div>
    </div>
    <div>
      <h4>权: </h4><div><h5>quán: </h5><span>power, right, authority</span></div>
    </div>
    <h3>画3</h3>
    <div>
      <h4>杆: </h4><div><h5>gān, gǎn: </h5><span>pole; shaft of spear</span></div>
    </div>
    <div>
      <h4>杉: </h4><div><h5>shān, shā: </h5><span>various species of pine and fir</span></div>
    </div>
    <div>
      <h4>李: </h4><div><h5>lǐ: </h5><span>plum; judge; surname</span></div>
    </div>
    <div>
      <h4>杏: </h4><div><h5>xìng: </h5><span>apricot; almond</span></div>
    </div>
    <div>
      <h4>材: </h4><div><h5>cái: </h5><span>material, stuff; timber; talent</span></div>
    </div>
    <div>
      <h4>村: </h4><div><h5>cūn: </h5><span>village, hamlet; uncouth, vulgar</span></div>
    </div>
    <div>
      <h4>杖: </h4><div><h5>zhàng: </h5><span>cane, walking stick</span></div>
    </div>
    <div>
      <h4>杜: </h4><div><h5>dù: </h5><span>stop, prevent; restrict; surname</span></div>
    </div>
    <div>
      <h4>杞: </h4><div><h5>qǐ: </h5><span>willow; medlar tree; a small feudal state (Qi)</span></div>
    </div>
    <div>
      <h4>束: </h4><div><h5>shù: </h5><span>bind, control, restrain; bale</span></div>
    </div>
    <div>
      <h4>杠: </h4><div><h5>gàng, gāng: </h5><span>lever, pole, crowbar; sharpen</span></div>
    </div>
    <div>
      <h4>条: </h4><div><h5>tiáo, tiāo: </h5><span>clause, condition; string, stripe</span></div>
    </div>
    <div>
      <h4>来: </h4><div><h5>lái: </h5><span>come, coming; return, returning</span></div>
    </div>
    <div>
      <h4>杨: </h4><div><h5>yáng: </h5><span>willow, poplar, aspen; surname</span></div>
    </div>
    <div>
      <h4>极: </h4><div><h5>jí: </h5><span>extreme, utmost, furthest, final</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>杭: </h4><div><h5>háng: </h5><span>cross stream; navigate</span></div>
    </div>
    <div>
      <h4>杯: </h4><div><h5>bēi: </h5><span>cup, glass</span></div>
    </div>
    <div>
      <h4>杰: </h4><div><h5>jié: </h5><span>hero; heroic, outstanding</span></div>
    </div>
    <div>
      <h4>杳: </h4><div><h5>yǎo: </h5><span>obscure, dark, mysterious, deep</span></div>
    </div>
    <div>
      <h4>杵: </h4><div><h5>chǔ: </h5><span>pestle; baton used beat clothes</span></div>
    </div>
    <div>
      <h4>松: </h4><div><h5>sōng: </h5><span>pine tree; fir tree</span></div>
    </div>
    <div>
      <h4>板: </h4><div><h5>bǎn: </h5><span>plank, board; iron or tin plate</span></div>
    </div>
    <div>
      <h4>构: </h4><div><h5>gòu: </h5><span>frame, building, structure</span></div>
    </div>
    <div>
      <h4>枉: </h4><div><h5>wǎng: </h5><span>useless, in vain; bent, crooked</span></div>
    </div>
    <div>
      <h4>枋: </h4><div><h5>fāng, bìng: </h5><span>sandalwood; tree used as timber</span></div>
    </div>
    <div>
      <h4>析: </h4><div><h5>xī: </h5><span>split wood; break apart; divide</span></div>
    </div>
    <div>
      <h4>枕: </h4><div><h5>zhěn: </h5><span>pillow</span></div>
    </div>
    <div>
      <h4>林: </h4><div><h5>lín: </h5><span>forest, grove; surname</span></div>
    </div>
    <div>
      <h4>枚: </h4><div><h5>méi: </h5><span>stalk of shrub, trunk of tree</span></div>
    </div>
    <div>
      <h4>果: </h4><div><h5>guǒ: </h5><span>fruit; result</span></div>
    </div>
    <div>
      <h4>枝: </h4><div><h5>zhī, qí: </h5><span>branches, limbs; branch off</span></div>
    </div>
    <div>
      <h4>枢: </h4><div><h5>shū: </h5><span>door hinge; pivot; center of power</span></div>
    </div>
    <div>
      <h4>枣: </h4><div><h5>zǎo: </h5><span>date tree; dates, jujubes; surname</span></div>
    </div>
    <div>
      <h4>枪: </h4><div><h5>qiāng: </h5><span>spear, lance; gun, rifle</span></div>
    </div>
    <div>
      <h4>枫: </h4><div><h5>fēng: </h5><span>maple tree</span></div>
    </div>
    <div>
      <h4>枭: </h4><div><h5>xiāo: </h5><span>owl thus, something evil</span></div>
    </div>
    <div>
      <h4>柜: </h4><div><h5>guì, jǔ: </h5><span>cabinet, cupboard; shop counter</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>枯: </h4><div><h5>kū: </h5><span>dried out, withered, decayed</span></div>
    </div>
    <div>
      <h4>枰: </h4><div><h5>píng: </h5><span>smooth board; chessboard; chess</span></div>
    </div>
    <div>
      <h4>架: </h4><div><h5>jià: </h5><span>rack, stand, prop; prop up</span></div>
    </div>
    <div>
      <h4>枷: </h4><div><h5>jiā: </h5><span>cangue scaffold</span></div>
    </div>
    <div>
      <h4>柄: </h4><div><h5>bǐng: </h5><span>handle, lever, knob; authority</span></div>
    </div>
    <div>
      <h4>柏: </h4><div><h5>bǎi, bó, bò: </h5><span>cypress, cedar</span></div>
    </div>
    <div>
      <h4>某: </h4><div><h5>mǒu: </h5><span>certain thing or person</span></div>
    </div>
    <div>
      <h4>柑: </h4><div><h5>gān: </h5><span>tangerine, loose-skinned orange</span></div>
    </div>
    <div>
      <h4>柒: </h4><div><h5>qī: </h5><span>number seven</span></div>
    </div>
    <div>
      <h4>染: </h4><div><h5>rǎn: </h5><span>dye; be contagious; infect</span></div>
    </div>
    <div>
      <h4>柔: </h4><div><h5>róu: </h5><span>soft; gentle, pliant</span></div>
    </div>
    <div>
      <h4>柚: </h4><div><h5>yòu, yóu: </h5><span>pomelo, grapefruit</span></div>
    </div>
    <div>
      <h4>柠: </h4><div><h5>níng: </h5><span>lemon</span></div>
    </div>
    <div>
      <h4>查: </h4><div><h5>chá, zhā: </h5><span>investigate, examine, seek into</span></div>
    </div>
    <div>
      <h4>柯: </h4><div><h5>kē: </h5><span>axe-handle; stalk, bough; surname</span></div>
    </div>
    <div>
      <h4>柰: </h4><div><h5>nài: </h5><span>crab-apple tree; endure, bear</span></div>
    </div>
    <div>
      <h4>柱: </h4><div><h5>zhù: </h5><span>pillar, post; support; lean on</span></div>
    </div>
    <div>
      <h4>柳: </h4><div><h5>liǔ: </h5><span>surname Liu,willow</span></div>
    </div>
    <div>
      <h4>柿: </h4><div><h5>shì: </h5><span>persimmon</span></div>
    </div>
    <div>
      <h4>栅: </h4><div><h5>zhà, shān, shi, cè: </h5><span>fence; palisade; grid</span></div>
    </div>
    <div>
      <h4>标: </h4><div><h5>biāo: </h5>
      <span>mark, symbol, label, sign; stand the bole of a tree</span></div>
    </div>
    <div>
      <h4>栈: </h4><div><h5>zhàn: </h5><span>warehouse; tavern, inn</span></div>
    </div>
    <div>
      <h4>栋: </h4><div><h5>dòng: </h5><span>main beams supporting house</span></div>
    </div>
    <div>
      <h4>栏: </h4><div><h5>lán: </h5><span>railing, balustrade; animal pan</span></div>
    </div>
    <div>
      <h4>树: </h4><div><h5>shù: </h5><span>tree; plant; set up, establish</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>柴: </h4><div><h5>chái: </h5><span>firewood, faggots, fuel</span></div>
    </div>
    <div>
      <h4>栓: </h4><div><h5>shuān: </h5><span>wooden peg, post or stick</span></div>
    </div>
    <div>
      <h4>栖: </h4><div><h5>qī, xī: </h5><span>perch; roost; stay</span></div>
    </div>
    <div>
      <h4>栗: </h4><div><h5>lì: </h5><span>chestnut tree, chestnuts; surname</span></div>
    </div>
    <div>
      <h4>校: </h4><div><h5>xiào, jiào: </h5><span>school; military field officer</span></div>
    </div>
    <div>
      <h4>栩: </h4><div><h5>xǔ: </h5><span>species of oak; be glad, be pleased</span></div>
    </div>
    <div>
      <h4>株: </h4><div><h5>zhū: </h5><span>numerary adjunct for trees; root</span></div>
    </div>
    <div>
      <h4>栱: </h4><div><h5>gǒng: </h5><span>large peg, stake; post, pillar</span></div>
    </div>
    <div>
      <h4>栲: </h4><div><h5>kǎo: </h5><span>mangrove</span></div>
    </div>
    <div>
      <h4>样: </h4><div><h5>yàng: </h5><span>shape, form, pattern, style</span></div>
    </div>
    <div>
      <h4>核: </h4><div><h5>hé, hú: </h5><span>seed, kernel, core, nut; atom</span></div>
    </div>
    <div>
      <h4>根: </h4><div><h5>gēn: </h5><span>root, base(d on); foundation</span></div>
    </div>
    <div>
      <h4>格: </h4><div><h5>gé: </h5><span>pattern, standard, form; style</span></div>
    </div>
    <div>
      <h4>栽: </h4><div><h5>zāi: </h5><span>to cultivate, plant; to care for plants</span></div>
    </div>
    <div>
      <h4>栾: </h4><div><h5>luán: </h5><span>name of tree; a part of cornice</span></div>
    </div>
    <div>
      <h4>桀: </h4><div><h5>jié: </h5><span>chicken roost; ancient emperor</span></div>
    </div>
    <div>
      <h4>桂: </h4><div><h5>guì: </h5><span>cassia or cinnamon</span></div>
    </div>
    <div>
      <h4>桃: </h4><div><h5>táo: </h5><span>peach; marriage; surname</span></div>
    </div>
    <div>
      <h4>框: </h4><div><h5>kuàng: </h5><span>frame; framework; door frame</span></div>
    </div>
    <div>
      <h4>案: </h4><div><h5>àn: </h5><span>table, bench; legal case</span></div>
    </div>
    <div>
      <h4>桌: </h4><div><h5>zhuō: </h5><span>table, desk, stand</span></div>
    </div>
    <div>
      <h4>桎: </h4><div><h5>zhì: </h5><span>fetters, shackles, handcuffs</span></div>
    </div>
    <div>
      <h4>桐: </h4><div><h5>tóng: </h5><span>name applied various trees</span></div>
    </div>
    <div>
      <h4>桑: </h4><div><h5>sāng: </h5><span>mulberry tree; surname</span></div>
    </div>
    <div>
      <h4>桓: </h4><div><h5>huán: </h5><span>variety of tree; surname</span></div>
    </div>
    <div>
      <h4>桔: </h4><div><h5>jié, jú: </h5>
      <span>
        Chinese bellflower; well-swept; the inner fibers of corn-stalks
      </span></div>
    </div>
    <div>
      <h4>桠: </h4><div><h5>yā: </h5><span>the forking branch of a tree</span></div>
    </div>
    <div>
      <h4>桢: </h4><div><h5>zhēn: </h5><span>hardwood; supports, posts</span></div>
    </div>
    <div>
      <h4>档: </h4><div><h5>dàng: </h5><span>shelf; frame, crosspiece</span></div>
    </div>
    <div>
      <h4>桥: </h4><div><h5>qiáo: </h5><span>bridge; beam, crosspiece</span></div>
    </div>
    <div>
      <h4>桦: </h4><div><h5>huà: </h5><span>type of birch</span></div>
    </div>
    <div>
      <h4>桧: </h4><div><h5>guì, huì: </h5><span>Chinese cypress, Chinese juniper</span></div>
    </div>
    <div>
      <h4>桨: </h4><div><h5>jiǎng: </h5><span>oar, paddle</span></div>
    </div>
    <div>
      <h4>桩: </h4><div><h5>zhuāng: </h5><span>stake, post; affair, matter</span></div>
    </div>
    <div>
      <h4>梆: </h4><div><h5>bāng: </h5><span>watchman's rattle</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>桶: </h4><div><h5>tǒng: </h5><span>pail, bucket, tub; cask, keg</span></div>
    </div>
    <div>
      <h4>桹: </h4><div><h5>láng: </h5><span>palm</span></div>
    </div>
    <div>
      <h4>梁: </h4><div><h5>liáng: </h5><span>bridge; beam; rafters; surname</span></div>
    </div>
    <div>
      <h4>梅: </h4><div><h5>méi: </h5><span>plums; prunes; surname</span></div>
    </div>
    <div>
      <h4>梏: </h4><div><h5>gù: </h5><span>handcuffs, manacles, fetters</span></div>
    </div>
    <div>
      <h4>梓: </h4><div><h5>zǐ: </h5><span>catalpa ovata</span></div>
    </div>
    <div>
      <h4>梗: </h4><div><h5>gěng: </h5><span>stem of flower, branch of plant</span></div>
    </div>
    <div>
      <h4>梢: </h4><div><h5>shāo, sào: </h5>
      <span>pointed tip of something long like a branch; rudder</span></div>
    </div>
    <div>
      <h4>梦: </h4><div><h5>mèng: </h5><span>dream; visionary; wishful</span></div>
    </div>
    <div>
      <h4>梧: </h4><div><h5>wú: </h5><span>Chinese parasoltree, Sterculia platanifolia</span></div>
    </div>
    <div>
      <h4>梨: </h4><div><h5>lí: </h5><span>pear; opera; cut, slash</span></div>
    </div>
    <div>
      <h4>梭: </h4><div><h5>suō: </h5><span>weaver's shuttle; go to and fro</span></div>
    </div>
    <div>
      <h4>梯: </h4><div><h5>tī: </h5><span>ladder, steps, stairs; lean</span></div>
    </div>
    <div>
      <h4>械: </h4><div><h5>xiè: </h5><span>weapons; implements, instruments</span></div>
    </div>
    <div>
      <h4>梳: </h4><div><h5>shū: </h5><span>comb; brush</span></div>
    </div>
    <div>
      <h4>梵: </h4><div><h5>fàn: </h5><span>Buddhist, Sanskrit</span></div>
    </div>
    <div>
      <h4>检: </h4><div><h5>jiǎn: </h5><span>check; examine</span></div>
    </div>
    <div>
      <h4>棻: </h4><div><h5>fēn: </h5><span>kind of wood from which perfume</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>棉: </h4><div><h5>mián: </h5><span>cotton; cotton padded</span></div>
    </div>
    <div>
      <h4>棋: </h4><div><h5>qí: </h5><span>chess; any game similar to chess</span></div>
    </div>
    <div>
      <h4>棍: </h4><div><h5>gùn, hùn: </h5><span>stick, cudgel; scoundrel</span></div>
    </div>
    <div>
      <h4>棒: </h4><div><h5>bàng: </h5><span>stick, club, truncheon; hit</span></div>
    </div>
    <div>
      <h4>棕: </h4><div><h5>zōng: </h5><span>hemp palm; palm tree</span></div>
    </div>
    <div>
      <h4>棘: </h4><div><h5>jí: </h5><span>jujube tree; thorns, brambles</span></div>
    </div>
    <div>
      <h4>棚: </h4><div><h5>péng: </h5><span>tent, awning; booth; shed</span></div>
    </div>
    <div>
      <h4>棠: </h4><div><h5>táng: </h5><span>crab apple tree; wild plums</span></div>
    </div>
    <div>
      <h4>棣: </h4><div><h5>dì, dài, tì: </h5><span>kerria japonica plant, cherry</span></div>
    </div>
    <div>
      <h4>森: </h4><div><h5>sēn: </h5><span>forest; luxuriant vegetation</span></div>
    </div>
    <div>
      <h4>棱: </h4><div><h5>léng, lēng, líng: </h5><span>squared timber; angle, edge</span></div>
    </div>
    <div>
      <h4>棵: </h4><div><h5>kē: </h5><span>numerary adjunct for trees</span></div>
    </div>
    <div>
      <h4>棹: </h4><div><h5>zhào, zhuō: </h5><span>oar; boat</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>棺: </h4><div><h5>guān: </h5><span>coffin</span></div>
    </div>
    <div>
      <h4>椅: </h4><div><h5>yǐ, yī: </h5><span>chair, seat</span></div>
    </div>
    <div>
      <h4>椆: </h4><div><h5>chóu, zhòu, diāo: </h5><span></span></div>
    </div>
    <div>
      <h4>植: </h4><div><h5>zhí: </h5><span>plant, trees, plants; grow</span></div>
    </div>
    <div>
      <h4>椎: </h4><div><h5>zhuī, chuí: </h5><span>hammer, mallet; vertebra</span></div>
    </div>
    <div>
      <h4>椒: </h4><div><h5>jiāo: </h5><span>pepper, spices</span></div>
    </div>
    <div>
      <h4>椭: </h4><div><h5>tuǒ: </h5><span>oval-shaped, elliptical, tubular</span></div>
    </div>
    <div>
      <h4>椰: </h4><div><h5>yē: </h5><span>palm tree, coconut palm</span></div>
    </div>
    <div>
      <h4>榔: </h4><div><h5>láng: </h5><span>betel-nut tree</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>椿: </h4><div><h5>chūn: </h5><span>father; a plant with white flowers</span></div>
    </div>
    <div>
      <h4>楔: </h4><div><h5>xiē: </h5><span>wedge; gatepost; foreword</span></div>
    </div>
    <div>
      <h4>楚: </h4><div><h5>chǔ: </h5><span>name of feudal state; clear</span></div>
    </div>
    <div>
      <h4>楞: </h4><div><h5>léng: </h5><span>used for Ceylon in Buddhist texts</span></div>
    </div>
    <div>
      <h4>楠: </h4><div><h5>nán: </h5><span>name of tree, machilus nanmu</span></div>
    </div>
    <div>
      <h4>楣: </h4><div><h5>méi: </h5><span>crossbeam above or under gate</span></div>
    </div>
    <div>
      <h4>楷: </h4><div><h5>kǎi, jiē: </h5><span>model style of Chinese writing</span></div>
    </div>
    <div>
      <h4>楹: </h4><div><h5>yíng: </h5><span>column, pillar; numerary adjunct</span></div>
    </div>
    <div>
      <h4>楼: </h4><div><h5>lóu: </h5><span>building of two or more stories</span></div>
    </div>
    <div>
      <h4>概: </h4><div><h5>gài: </h5><span>generally, approximately</span></div>
    </div>
    <div>
      <h4>榄: </h4><div><h5>lǎn: </h5><span>olive</span></div>
    </div>
    <div>
      <h4>榆: </h4><div><h5>yú: </h5><span>elm tree</span></div>
    </div>
    <div>
      <h4>槌: </h4><div><h5>chuí: </h5><span>hammer, mallet; strike, beat</span></div>
    </div>
    <div>
      <h4>槐: </h4><div><h5>huái: </h5><span>locust tree</span></div>
    </div>
    <h3>画10</h3>
    <div>
      <h4>榕: </h4><div><h5>róng: </h5><span>banyan tree</span></div>
    </div>
    <div>
      <h4>榛: </h4><div><h5>zhēn: </h5><span>hazelnut; thicket, underbrush</span></div>
    </div>
    <div>
      <h4>榜: </h4><div><h5>bǎng, bàng: </h5><span>placard; list of successful exam candidates</span></div>
    </div>
    <div>
      <h4>榨: </h4><div><h5>zhà: </h5>
      <span>
        to press or extract juices; a press to extract juices; a vegetable
      </span></div>
    </div>
    <div>
      <h4>榭: </h4><div><h5>xiè: </h5><span>kiosk, pavilion</span></div>
    </div>
    <div>
      <h4>榴: </h4><div><h5>liú: </h5><span>pomegranate</span></div>
    </div>
    <div>
      <h4>榷: </h4><div><h5>què: </h5><span>footbridge; toll, levy; monopoly</span></div>
    </div>
    <div>
      <h4>榻: </h4><div><h5>tà: </h5><span>cot, couch, bed</span></div>
    </div>
    <div>
      <h4>槁: </h4><div><h5>gǎo: </h5><span>wither; withered, rotten, dead</span></div>
    </div>
    <div>
      <h4>槛: </h4><div><h5>jiàn, kǎn: </h5><span>threshold, door-sill</span></div>
    </div>
    <div>
      <h4>槟: </h4><div><h5>bīn, bīng: </h5><span>betel-nut, areca nut</span></div>
    </div>
    <div>
      <h4>模: </h4><div><h5>mó, mú: </h5><span>model, standard, pattern; copy</span></div>
    </div>
    <h3>画11</h3>
    <div>
      <h4>槭: </h4><div><h5>qì, sè: </h5><span>maple</span></div>
    </div>
    <div>
      <h4>槽: </h4><div><h5>cáo: </h5><span>trough; manger; vat, tank; groove; a distillery</span></div>
    </div>
    <div>
      <h4>樊: </h4><div><h5>fán: </h5><span>a railing; a fence an enclosed place</span></div>
    </div>
    <div>
      <h4>樕: </h4><div><h5>sù: </h5><span>shrub</span></div>
    </div>
    <div>
      <h4>樟: </h4><div><h5>zhāng: </h5><span>camphor tree</span></div>
    </div>
    <div>
      <h4>横: </h4><div><h5>héng, hèng: </h5><span>across</span></div>
    </div>
    <div>
      <h4>樱: </h4><div><h5>yīng: </h5><span>cherry, cherry blossom</span></div>
    </div>
    <div>
      <h4>橄: </h4><div><h5>gǎn: </h5><span>olive</span></div>
    </div>
    <div>
      <h4>橡: </h4><div><h5>xiàng: </h5><span>chestnut oak; rubber tree; rubber</span></div>
    </div>
    <h3>画12-13</h3>
    <div>
      <h4>樵: </h4><div><h5>qiáo: </h5><span>woodcutter; firewood; gather wood</span></div>
    </div>
    <div>
      <h4>樽: </h4><div><h5>zūn: </h5><span>goblet; jar, jug; lush</span></div>
    </div>
    <div>
      <h4>橘: </h4><div><h5>jú: </h5><span>orange, tangerine</span></div>
    </div>
    <div>
      <h4>橙: </h4><div><h5>chéng: </h5><span>orange</span></div>
    </div>
    <div>
      <h4>橱: </h4><div><h5>chú: </h5><span>cabinet, wardrobe, cupboard</span></div>
    </div>
    <div>
      <h4>檀: </h4><div><h5>tán: </h5><span>sandalwood, hardwood; surname</span></div>
    </div>
    <div>
      <h4>檬: </h4><div><h5>méng: </h5><span>type of locust oracacia</span></div>
    </div>
    <h1>97: 欠</h1>
    <div>
      <h4>欠: </h4><div><h5>qiàn: </h5><span>owe, lack, be deficient; KangXi radical number 76</span></div>
    </div>
    <h3>画2-7</h3>
    <div>
      <h4>次: </h4><div><h5>cì: </h5><span>order, sequence; next</span></div>
    </div>
    <div>
      <h4>欢: </h4><div><h5>huān: </h5><span>happy, pleased, glad; joy; enjoy</span></div>
    </div>
    <div>
      <h4>欣: </h4><div><h5>xīn: </h5><span>happy, joyous, delighted</span></div>
    </div>
    <div>
      <h4>欧: </h4><div><h5>ōu: </h5><span>translit.: Europe; ohm; surname</span></div>
    </div>
    <div>
      <h4>欲: </h4><div><h5>yù: </h5><span>desire, want, long for; intend</span></div>
    </div>
    <div>
      <h4>欸: </h4><div><h5>ǎi, ēi, éi, ěi, èi: </h5><span>sigh; an exclamatory sound</span></div>
    </div>
    <h3>画8-13</h3>
    <div>
      <h4>欺: </h4><div><h5>qī: </h5><span>cheat, double-cross, deceive</span></div>
    </div>
    <div>
      <h4>款: </h4><div><h5>kuǎn: </h5><span>item, article; clause; fund</span></div>
    </div>
    <div>
      <h4>歇: </h4><div><h5>xiē: </h5><span>rest, stop, lodge</span></div>
    </div>
    <div>
      <h4>歉: </h4><div><h5>qiàn: </h5><span>deficient, lacking, insufficient</span></div>
    </div>
    <div>
      <h4>歌: </h4><div><h5>gē: </h5><span>song, lyrics; sing, chant; praise</span></div>
    </div>
    <div>
      <h4>歛: </h4><div><h5>liǎn, hān: </h5><span>draw back, fold back; collect</span></div>
    </div>
    <h1>98: 止</h1>
    <div>
      <h4>止: </h4><div><h5>zhǐ: </h5><span>stop, halt, desist; detain</span></div>
    </div>
    <div>
      <h4>正: </h4><div><h5>zhèng, zhēng: </h5><span>right, proper, correct</span></div>
    </div>
    <div>
      <h4>此: </h4><div><h5>cǐ: </h5><span>this, these; in this case, then</span></div>
    </div>
    <div>
      <h4>步: </h4><div><h5>bù: </h5><span>step, pace; walk, stroll</span></div>
    </div>
    <div>
      <h4>武: </h4><div><h5>wǔ: </h5><span>military; martial, warlike</span></div>
    </div>
    <div>
      <h4>歧: </h4><div><h5>qí: </h5><span>fork of road; branching off</span></div>
    </div>
    <div>
      <h4>歪: </h4><div><h5>wāi: </h5><span>slant; inclined; askewd, awry</span></div>
    </div>
    <h1>99: 歹</h1>
    <div>
      <h4>歹: </h4><div><h5>dǎi: </h5><span>bad, vicious, depraved, wicked</span></div>
    </div>
    <h3>画2-4</h3>
    <div>
      <h4>死: </h4><div><h5>sǐ: </h5><span>die; dead; death</span></div>
    </div>
    <div>
      <h4>歼: </h4><div><h5>jiān: </h5><span>annihilate, wipe out, kill off</span></div>
    </div>
    <div>
      <h4>殁: </h4><div><h5>mò: </h5><span>die; death; dead</span></div>
    </div>
    <h3>画5-10</h3>
    <div>
      <h4>殃: </h4><div><h5>yāng: </h5><span>misfortune, disaster, calamity</span></div>
    </div>
    <div>
      <h4>殆: </h4><div><h5>dài: </h5><span>dangerous, perilous; endanger</span></div>
    </div>
    <div>
      <h4>殇: </h4><div><h5>shāng: </h5><span>die young; national mourning</span></div>
    </div>
    <div>
      <h4>残: </h4><div><h5>cán: </h5><span>injure, spoil; oppress; broken</span></div>
    </div>
    <div>
      <h4>殉: </h4><div><h5>xùn: </h5><span>die for cause, be martyr for</span></div>
    </div>
    <div>
      <h4>殊: </h4><div><h5>shū: </h5><span>different, special, unusual</span></div>
    </div>
    <div>
      <h4>殖: </h4><div><h5>zhí, shi: </h5><span>breed, spawn; increase; prosper</span></div>
    </div>
    <div>
      <h4>殡: </h4><div><h5>bìn: </h5><span>encoffin; embalm; funeral</span></div>
    </div>
    <h1>100: 殳</h1>
    <div>
      <h4>殴: </h4><div><h5>ōu: </h5><span>beat, fight with fists, hit</span></div>
    </div>
    <div>
      <h4>段: </h4><div><h5>duàn: </h5><span>section, piece, division</span></div>
    </div>
    <div>
      <h4>殷: </h4><div><h5>yīn, yān, yǐn: </h5><span>many, great; abundant, flourishing</span></div>
    </div>
    <div>
      <h4>殿: </h4><div><h5>diàn: </h5><span>hall; palace; temple</span></div>
    </div>
    <div>
      <h4>毁: </h4><div><h5>huǐ: </h5><span>destroy</span></div>
    </div>
    <div>
      <h4>毅: </h4><div><h5>yì: </h5><span>resolute, decisive, firm, persist</span></div>
    </div>
    <h1>101: 毋</h1>
    <div>
      <h4>毋: </h4><div><h5>wú: </h5><span>do not; not; surname; rad. 80</span></div>
    </div>
    <div>
      <h4>毐: </h4><div><h5>ǎi: </h5><span>nicht charakterfest (Adj)</span></div>
    </div>
    <h1>102: 比</h1>
    <div>
      <h4>比: </h4><div><h5>bǐ: </h5><span>to compare, liken; comparison; than</span></div>
    </div>
    <div>
      <h4>毕: </h4><div><h5>bì: </h5><span>end, finish, conclude; completed</span></div>
    </div>
    <div>
      <h4>毗: </h4><div><h5>pí: </h5><span>help, assist; connect, adjoin</span></div>
    </div>
    <div>
      <h4>毙: </h4><div><h5>bì: </h5><span>kill; die violent death</span></div>
    </div>
    <div>
      <h4>琵: </h4><div><h5>pí: </h5><span>guitar-like instrument</span></div>
    </div>
    <h1>103: 毛</h1>
    <div>
      <h4>毛: </h4><div><h5>máo: </h5><span>hair, fur, feathers; coarse</span></div>
    </div>
    <div>
      <h4>笔: </h4><div><h5>bǐ: </h5><span>writing brush; write; stroke</span></div>
    </div>
    <div>
      <h4>毫: </h4><div><h5>háo: </h5><span>fine hair; measure of length</span></div>
    </div>
    <div>
      <h4>毯: </h4><div><h5>tǎn: </h5><span>rug, carpet, blanket</span></div>
    </div>
    <h1>104: 氏</h1>
    <div>
      <h4>氏: </h4><div><h5>shì, zhī: </h5><span>clan, family; mister</span></div>
    </div>
    <div>
      <h4>氐: </h4><div><h5>dī, dǐ: </h5><span>name of an ancient tribe</span></div>
    </div>
    <h1>105: 气</h1>
    <div>
      <h4>气: </h4><div><h5>qì: </h5><span>steam, vapor; KangXi radical 84</span></div>
    </div>
    <h3>画4-6</h3>
    <div>
      <h4>氛: </h4><div><h5>fēn: </h5><span>gas, vapor, air</span></div>
    </div>
    <div>
      <h4>氟: </h4><div><h5>fú: </h5><span>fluorine</span></div>
    </div>
    <div>
      <h4>氢: </h4><div><h5>qīng: </h5><span>ammonia; hydrogen nitride</span></div>
    </div>
    <div>
      <h4>氦: </h4><div><h5>hài: </h5><span>fluorine</span></div>
    </div>
    <div>
      <h4>氧: </h4><div><h5>yǎng: </h5><span>oxygen</span></div>
    </div>
    <div>
      <h4>氨: </h4><div><h5>ān: </h5><span>ammonia; hydrogen nitride</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>氮: </h4><div><h5>dàn: </h5><span>xenon</span></div>
    </div>
    <div>
      <h4>氯: </h4><div><h5>lǜ: </h5><span>chlorine</span></div>
    </div>
    <div>
      <h4>氰: </h4><div><h5>qíng: </h5><span>cyanogen; ethane dinitrile</span></div>
    </div>
    <h1>106: 水</h1>
    <div>
      <h4>水: </h4><div><h5>shuǐ: </h5><span>water, liquid, lot5on, juice</span></div>
    </div>
    <h3>画1-5</h3>
    <div>
      <h4>永: </h4><div><h5>yǒng: </h5><span>long, perpetual, eternal, forever</span></div>
    </div>
    <div>
      <h4>求: </h4><div><h5>qiú: </h5><span>seek; demand, request; beseech</span></div>
    </div>
    <div>
      <h4>汞: </h4><div><h5>gǒng: </h5><span>element mercury</span></div>
    </div>
    <div>
      <h4>沓: </h4><div><h5>tà, dá: </h5><span>connected, joined; repeated</span></div>
    </div>
    <div>
      <h4>泉: </h4><div><h5>quán: </h5><span>spring, fountain; wealth, money</span></div>
    </div>
    <div>
      <h4>泵: </h4><div><h5>bèng: </h5><span>pump</span></div>
    </div>
    <h3>画6-11</h3>
    </section>
    <section>
    <div>
      <h4>泰: </h4><div><h5>tài: </h5><span>great, exalted, superior; big</span></div>
    </div>
    <div>
      <h4>浆: </h4><div><h5>jiāng, jiàng: </h5><span>any thick fluid; starch; broth</span></div>
    </div>
    <div>
      <h4>淼: </h4><div><h5>miǎo: </h5><span>a wide expanse of water</span></div>
    </div>
    <div>
      <h4>滕: </h4><div><h5>téng: </h5>
      <span>an ancient state in Shandong province; water bursting forth</span></div>
    </div>
    <h1>107: 火</h1>
    <div>
      <h4>火: </h4><div><h5>huǒ: </h5><span>fire, flame; burn; anger, rage</span></div>
    </div>
    <h3>画1-2</h3>
    <div>
      <h4>灭: </h4><div><h5>miè: </h5><span>extinguish; wipe out, exterminate</span></div>
    </div>
    <div>
      <h4>灯: </h4><div><h5>dēng: </h5><span>lantern, lamp</span></div>
    </div>
    <div>
      <h4>灰: </h4><div><h5>huī: </h5><span>ashes; dust; lime, mortar</span></div>
    </div>
    <h3>画3</h3>
    <div>
      <h4>灵: </h4><div><h5>líng: </h5><span>spirit, soul; spiritual world</span></div>
    </div>
    <div>
      <h4>灶: </h4><div><h5>zào: </h5><span>kitchen stove, cooking stove</span></div>
    </div>
    <div>
      <h4>灸: </h4><div><h5>jiǔ: </h5><span>cauterize with moxa; moxibustion</span></div>
    </div>
    <div>
      <h4>灼: </h4><div><h5>zhuó: </h5><span>burn; broil; cauterize; bright</span></div>
    </div>
    <div>
      <h4>灾: </h4><div><h5>zāi: </h5><span>calamity, disaster, catastrophe</span></div>
    </div>
    <div>
      <h4>灿: </h4><div><h5>càn: </h5><span>vivid, illuminating; bright</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>炉: </h4><div><h5>lú: </h5><span>fireplace, stove, oven, furnace</span></div>
    </div>
    <div>
      <h4>炊: </h4><div><h5>chuī: </h5><span>cook; meal</span></div>
    </div>
    <div>
      <h4>炎: </h4><div><h5>yán: </h5><span>flame, blaze; hot</span></div>
    </div>
    <div>
      <h4>炒: </h4><div><h5>chǎo: </h5><span>fry, saute, roast, boil, cook</span></div>
    </div>
    <div>
      <h4>炖: </h4><div><h5>dùn: </h5><span>heat with fire; stew</span></div>
    </div>
    <div>
      <h4>炘: </h4><div><h5>xìn: </h5><span>brilliant, shining, bright</span></div>
    </div>
    <div>
      <h4>炙: </h4><div><h5>zhì: </h5><span>roast, broil; toast; cauterize</span></div>
    </div>
    <div>
      <h4>炜: </h4><div><h5>wěi: </h5><span>brilliant red; glowing</span></div>
    </div>
    <div>
      <h4>炬: </h4><div><h5>jù: </h5><span>torch</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>炤: </h4><div><h5>zhào, zhāo: </h5><span>illumine, light up; reflect</span></div>
    </div>
    <div>
      <h4>炫: </h4><div><h5>xuàn: </h5><span>shine, glitter; show off, flaunt</span></div>
    </div>
    <div>
      <h4>炭: </h4><div><h5>tàn: </h5><span>charcoal; coal; carbon</span></div>
    </div>
    <div>
      <h4>炮: </h4><div><h5>páo, bāo, pào: </h5><span>large gun, cannon; artillery</span></div>
    </div>
    <div>
      <h4>炯: </h4><div><h5>jiǒng: </h5><span>bright, brilliant, clear; hot</span></div>
    </div>
    <div>
      <h4>炳: </h4><div><h5>bǐng: </h5><span>bright, luminous; glorious</span></div>
    </div>
    <div>
      <h4>炸: </h4><div><h5>zhà, zhá: </h5><span>to fry in oil; to scald; to explode</span></div>
    </div>
    <div>
      <h4>炼: </h4><div><h5>liàn: </h5><span>smelt, refine; distill, condense</span></div>
    </div>
    <div>
      <h4>炽: </h4><div><h5>chì: </h5>
      <span>burning-hot, intense; to burn, blaze; splendid, illustrious</span></div>
    </div>
    <div>
      <h4>烁: </h4><div><h5>shuò: </h5><span>shine, glitter, sparkle</span></div>
    </div>
    <div>
      <h4>烂: </h4><div><h5>làn: </h5><span>rotten, spoiled, decayed</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>烊: </h4><div><h5>yáng, yàng: </h5><span>to smelt; to melt</span></div>
    </div>
    <div>
      <h4>烘: </h4><div><h5>hōng: </h5><span>bake, roast; dry by fire</span></div>
    </div>
    <div>
      <h4>烙: </h4><div><h5>lào, luò: </h5><span>brand, burn; branding iron</span></div>
    </div>
    <div>
      <h4>烛: </h4><div><h5>zhú: </h5><span>candle, taper; shine, illuminate</span></div>
    </div>
    <div>
      <h4>烜: </h4><div><h5>xuǎn: </h5><span>light of the sun; to dry in the sun</span></div>
    </div>
    <div>
      <h4>烟: </h4><div><h5>yān: </h5><span>smoke, soot; opium; tobacco, cigarettes</span></div>
    </div>
    <div>
      <h4>烤: </h4><div><h5>kǎo: </h5><span>bake, roast, toast, cook</span></div>
    </div>
    <div>
      <h4>烦: </h4><div><h5>fán: </h5><span>bother, vex, trouble; troublesome</span></div>
    </div>
    <div>
      <h4>烧: </h4><div><h5>shāo: </h5><span>burn; bake; heat; roast</span></div>
    </div>
    <div>
      <h4>烨: </h4><div><h5>yè: </h5><span>bright, glorious, splendid, flame</span></div>
    </div>
    <div>
      <h4>烩: </h4><div><h5>huì: </h5><span>ragout, cook, braise</span></div>
    </div>
    <div>
      <h4>烫: </h4><div><h5>tàng: </h5><span>scald, heat; wash; iron clothes</span></div>
    </div>
    <div>
      <h4>烬: </h4><div><h5>jìn: </h5><span>cinders, ashes, embers; remnants</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>烯: </h4><div><h5>xī: </h5><span>alkene</span></div>
    </div>
    <div>
      <h4>烷: </h4><div><h5>wán: </h5><span>alkane</span></div>
    </div>
    <div>
      <h4>烽: </h4><div><h5>fēng: </h5><span>signal fire; tower where signal</span></div>
    </div>
    <div>
      <h4>焊: </h4><div><h5>hàn: </h5><span>weld, solder</span></div>
    </div>
    <div>
      <h4>焕: </h4><div><h5>huàn: </h5><span>shining</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>焚: </h4><div><h5>fén: </h5><span>burn</span></div>
    </div>
    <div>
      <h4>焜: </h4><div><h5>kūn: </h5><span>fire, flames; bright, shining</span></div>
    </div>
    <div>
      <h4>焢: </h4><div><h5>hōng: </h5><span></span></div>
    </div>
    <div>
      <h4>焰: </h4><div><h5>yàn: </h5><span>flame, blaze; glowing, blazing</span></div>
    </div>
    <div>
      <h4>煚: </h4><div><h5>jiǒng: </h5><span></span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>煇: </h4><div><h5>huī, yùn, xūn: </h5><span>weld, solder</span></div>
    </div>
    <div>
      <h4>煌: </h4><div><h5>huáng: </h5><span>bright, shining, luminous</span></div>
    </div>
    <div>
      <h4>煜: </h4><div><h5>yù: </h5><span>bright, shining, brilliant</span></div>
    </div>
    <div>
      <h4>煤: </h4><div><h5>méi: </h5><span>coal, coke, charcoal, carbon</span></div>
    </div>
    <h3>画10-13</h3>
    <div>
      <h4>煽: </h4><div><h5>shān: </h5><span>stir up, incite, agitate, provoke</span></div>
    </div>
    <div>
      <h4>熄: </h4><div><h5>xī: </h5><span>put out, extinguish, quash</span></div>
    </div>
    <div>
      <h4>熇: </h4><div><h5>hè, xiāo: </h5><span>bake</span></div>
    </div>
    <div>
      <h4>熔: </h4><div><h5>róng: </h5><span>melt, smelt, fuse; mold</span></div>
    </div>
    <div>
      <h4>熨: </h4><div><h5>yùn, yù: </h5><span>iron, press</span></div>
    </div>
    <div>
      <h4>燃: </h4><div><h5>rán: </h5><span>burn; light fire, ignite</span></div>
    </div>
    <div>
      <h4>燊: </h4><div><h5>shēn: </h5><span>luxuriant</span></div>
    </div>
    <div>
      <h4>燥: </h4><div><h5>zào: </h5><span>dry, parched, arid; quick-tempered</span></div>
    </div>
    <h3>画14-15</h3>
    <div>
      <h4>燿: </h4><div><h5>yào: </h5><span>shine, dazzle; brilliant, radiant</span></div>
    </div>
    <div>
      <h4>爆: </h4><div><h5>bào: </h5><span>crackle, pop, burst, explode</span></div>
    </div>
    <h1>108: 灬</h1>
    <h3>画5-7</h3>
    <div>
      <h4>点: </h4><div><h5>diǎn: </h5><span>dot, speck, spot; point, degree</span></div>
    </div>
    <div>
      <h4>烈: </h4><div><h5>liè: </h5><span>fiery, violent, vehement, ardent</span></div>
    </div>
    <div>
      <h4>热: </h4><div><h5>rè: </h5><span>hot; heat; fever; restless; zeal</span></div>
    </div>
    <div>
      <h4>羔: </h4><div><h5>gāo: </h5><span>lamb, kid</span></div>
    </div>
    <div>
      <h4>烹: </h4><div><h5>pēng: </h5><span>boil, cook; quick fry, stir fry</span></div>
    </div>
    <div>
      <h4>焉: </h4><div><h5>yān: </h5><span>thereupon, then; how? why? where?</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>焦: </h4><div><h5>jiāo: </h5><span>burned, scorched; anxious, vexed</span></div>
    </div>
    <div>
      <h4>然: </h4><div><h5>rán: </h5><span>yes, certainly; pledge, promise</span></div>
    </div>
    <div>
      <h4>煮: </h4><div><h5>zhǔ: </h5><span>cook</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>煎: </h4><div><h5>jiān: </h5><span>fry in fat or oil; boil in water</span></div>
    </div>
    <div>
      <h4>煞: </h4><div><h5>shā, shà: </h5>
      <span>malignant deity; baleful, noxious; strike dead</span></div>
    </div>
    <div>
      <h4>煦: </h4><div><h5>xù: </h5><span>kind, gentle, gracious, genial</span></div>
    </div>
    <div>
      <h4>照: </h4><div><h5>zhào: </h5><span>shine, illumine, reflect</span></div>
    </div>
    <h3>画10-12</h3>
    <div>
      <h4>熊: </h4><div><h5>xióng: </h5><span>a bear; brilliant; bright; surname</span></div>
    </div>
    <div>
      <h4>熏: </h4><div><h5>xūn, xùn: </h5><span>smoke, fog, vapor; smoke, cure</span></div>
    </div>
    <div>
      <h4>熙: </h4><div><h5>xī: </h5><span>bright, splendid, glorious</span></div>
    </div>
    <div>
      <h4>熬: </h4><div><h5>āo, áo: </h5><span>cook down, to boil; endure</span></div>
    </div>
    <div>
      <h4>熟: </h4><div><h5>shú, shóu: </h5><span>well-cooked; ripe; familiar with</span></div>
    </div>
    <div>
      <h4>熹: </h4><div><h5>xī: </h5><span>dim light, glimmer; warm, bright</span></div>
    </div>
    <div>
      <h4>燕: </h4><div><h5>yàn, yān: </h5><span>swallow (bird); comfort, enjoy</span></div>
    </div>
    <h1>109: 爪</h1>
    <div>
      <h4>爪: </h4><div><h5>zhǎo, zhuǎ: </h5><span>claw, nail, talon; animal feet</span></div>
    </div>
    <div>
      <h4>爬: </h4><div><h5>pá: </h5><span>crawl, creep; climb; scramble</span></div>
    </div>
    <h1>110: 爫</h1>
    <div>
      <h4>爰: </h4><div><h5>yuán: </h5><span>lead on to; therefore, then</span></div>
    </div>
    <div>
      <h4>爱: </h4><div><h5>ài: </h5><span>love, be fond of, like</span></div>
    </div>
    <div>
      <h4>爵: </h4><div><h5>jué: </h5><span>feudal title or rank</span></div>
    </div>
    <h1>111: 父</h1>
    <div>
      <h4>父: </h4><div><h5>fù, fǔ: </h5><span>father; KangXi radical 88</span></div>
    </div>
    <div>
      <h4>爷: </h4><div><h5>yé: </h5><span>father, grandfather</span></div>
    </div>
    <div>
      <h4>爸: </h4><div><h5>bà: </h5><span>father, papa</span></div>
    </div>
    <div>
      <h4>爹: </h4><div><h5>diē: </h5><span>father, daddy</span></div>
    </div>
    <h1>112: 爻</h1>
    <div>
      <h4>爻: </h4><div><h5>yáo: </h5><span>diagrams for divination</span></div>
    </div>
    <div>
      <h4>爽: </h4><div><h5>shuǎng: </h5><span>happy, cheerful; refreshing</span></div>
    </div>
    <h1>113: 爿</h1>
    <div>
      <h4>爿: </h4><div><h5>pán: </h5><span>half of tree trunk; KangXi radical 90</span></div>
    </div>
    <h1>114: 片</h1>
    <div>
      <h4>片: </h4><div><h5>piàn, piān: </h5><span>slice, splinter, strip; rad. 91</span></div>
    </div>
    <div>
      <h4>版: </h4><div><h5>bǎn: </h5><span>printing blocks; edition</span></div>
    </div>
    <div>
      <h4>牌: </h4><div><h5>pái: </h5><span>signboard, placard</span></div>
    </div>
    <div>
      <h4>牒: </h4><div><h5>dié: </h5><span>documents, records; dispatch</span></div>
    </div>
    <h1>115: 牙</h1>
    <div>
      <h4>牙: </h4><div><h5>yá: </h5><span>tooth, molars, teeth; serrated</span></div>
    </div>
    <h1>116: 牛</h1>
    <div>
      <h4>牛: </h4><div><h5>niú: </h5><span>cow, ox, bull; KangXi radical93</span></div>
    </div>
    <div>
      <h4>牟: </h4><div><h5>móu, mù: </h5><span>make; seek, get; barley; low</span></div>
    </div>
    <div>
      <h4>牢: </h4><div><h5>láo: </h5><span>prison; stable, pen; secure</span></div>
    </div>
    <div>
      <h4>牵: </h4><div><h5>qiān: </h5><span>drag, pull, lead by hand</span></div>
    </div>
    <div>
      <h4>犁: </h4><div><h5>lí: </h5><span>plow</span></div>
    </div>
    <div>
      <h4>犀: </h4><div><h5>xī: </h5><span>rhinoceros; sharp, well-tempered</span></div>
    </div>
    <div>
      <h4>犛: </h4><div><h5>máo, lí: </h5><span>a black ox, a yak</span></div>
    </div>
    </section>
    <section>
    <h1>117: 牜</h1>
    <h3>画3-4</h3>
    <div>
      <h4>牠: </h4><div><h5>tā: </h5><span>it; polled cattle</span></div>
    </div>
    <div>
      <h4>牡: </h4><div><h5>mǔ: </h5><span>male of animals; bolt of door</span></div>
    </div>
    <div>
      <h4>牧: </h4><div><h5>mù: </h5><span>tend cattle, shepherd</span></div>
    </div>
    <div>
      <h4>物: </h4><div><h5>wù: </h5><span>thing, substance, creature</span></div>
    </div>
    <h3>画5-8</h3>
    <div>
      <h4>牯: </h4><div><h5>gǔ: </h5><span>cow; bull; ox</span></div>
    </div>
    <div>
      <h4>牲: </h4><div><h5>shēng: </h5><span>sacrificial animal; animal</span></div>
    </div>
    <div>
      <h4>牴: </h4><div><h5>dǐ: </h5><span>gore, butt; resist</span></div>
    </div>
    <div>
      <h4>特: </h4><div><h5>tè: </h5><span>special, unique, distinguished</span></div>
    </div>
    <div>
      <h4>牺: </h4><div><h5>xī: </h5><span>sacrifice, give up; sacrificial</span></div>
    </div>
    <div>
      <h4>犊: </h4><div><h5>dú: </h5><span>calf; victim of sacrifice</span></div>
    </div>
    <h1>118: 犬</h1>
    <div>
      <h4>犬: </h4><div><h5>quǎn: </h5><span>dog; radical number 94</span></div>
    </div>
    <div>
      <h4>状: </h4><div><h5>zhuàng: </h5><span>form; appearance; shape; official</span></div>
    </div>
    <div>
      <h4>献: </h4><div><h5>xiàn: </h5><span>offer, present; show, display</span></div>
    </div>
    <div>
      <h4>猷: </h4><div><h5>yóu: </h5><span>plan, scheme; plan, plot; way</span></div>
    </div>
    <h1>119: 王</h1>
    <div>
      <h4>王: </h4><div><h5>wáng, wàng: </h5><span>king, ruler; royal; surname</span></div>
    </div>
    <h3>画2-3</h3>
    <div>
      <h4>玎: </h4><div><h5>dīng: </h5><span>jingling, tinkling</span></div>
    </div>
    <div>
      <h4>玑: </h4><div><h5>jī: </h5><span>pearl that is not quite round</span></div>
    </div>
    <div>
      <h4>玖: </h4><div><h5>jiǔ: </h5><span>black-colored jade</span></div>
    </div>
    <div>
      <h4>玛: </h4><div><h5>mǎ: </h5><span>agate; cornelian</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>玟: </h4><div><h5>mín, wén: </h5><span>streaks in jade; gem</span></div>
    </div>
    <div>
      <h4>玠: </h4><div><h5>jiè: </h5>
      <span>
        large jade tablet used by officials at court to indicate their ranks
      </span></div>
    </div>
    <div>
      <h4>玩: </h4><div><h5>wán: </h5><span>play with, joke, enjoy</span></div>
    </div>
    <div>
      <h4>玮: </h4><div><h5>wěi: </h5><span>type of jade; rare, valuable</span></div>
    </div>
    <div>
      <h4>环: </h4><div><h5>huán: </h5><span>jade ring or bracelet; ring</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>玲: </h4><div><h5>líng: </h5><span>tinkling of jade</span></div>
    </div>
    <div>
      <h4>玷: </h4><div><h5>diàn: </h5><span>flaw in gem; flaw in character</span></div>
    </div>
    <div>
      <h4>玹: </h4><div><h5>xuán, xián: </h5><span></span></div>
    </div>
    <div>
      <h4>玻: </h4><div><h5>bō: </h5><span>glass</span></div>
    </div>
    <div>
      <h4>珀: </h4><div><h5>pò: </h5><span>amber</span></div>
    </div>
    <div>
      <h4>珂: </h4><div><h5>kē: </h5><span>inferior kind of jade</span></div>
    </div>
    <div>
      <h4>珈: </h4><div><h5>jiā: </h5><span>an ornament attached to a woman's hairpin</span></div>
    </div>
    <div>
      <h4>珊: </h4><div><h5>shān: </h5><span>coral</span></div>
    </div>
    <div>
      <h4>珍: </h4><div><h5>zhēn: </h5><span>precious, valuable, rare</span></div>
    </div>
    <div>
      <h4>珑: </h4><div><h5>lóng: </h5><span>a gem cut like dragon</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>珞: </h4><div><h5>luò: </h5><span>kind of necklace</span></div>
    </div>
    <div>
      <h4>珠: </h4><div><h5>zhū: </h5><span>precious stone, gem, jewel, pearl</span></div>
    </div>
    <div>
      <h4>珣: </h4><div><h5>xún: </h5><span>name of a kind of jade</span></div>
    </div>
    <div>
      <h4>珪: </h4><div><h5>guī: </h5>
      <span>
        a jade table conferred upon feudal princes by the emperor as a symbol
        of dignity and authority
      </span></div>
    </div>
    <div>
      <h4>班: </h4><div><h5>bān: </h5><span>class, group, grade; squad; job</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>球: </h4><div><h5>qiú: </h5><span>ball, sphere, globe; round</span></div>
    </div>
    <div>
      <h4>琅: </h4><div><h5>láng: </h5><span>a variety of white carnelian; pure</span></div>
    </div>
    <div>
      <h4>理: </h4><div><h5>lǐ: </h5><span>reason, logic; manage</span></div>
    </div>
    <div>
      <h4>琇: </h4><div><h5>xiù: </h5><span>coarse variety of jasper or jade</span></div>
    </div>
    <div>
      <h4>琉: </h4><div><h5>liú: </h5><span>sparkling stone; glazed, opaque</span></div>
    </div>
    <div>
      <h4>琏: </h4><div><h5>liǎn: </h5><span>vessel used to hold grain offerings</span></div>
    </div>
    <div>
      <h4>琐: </h4><div><h5>suǒ: </h5><span>trifling, petty; troublesome</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>琛: </h4><div><h5>chēn: </h5><span>treasure, valuables</span></div>
    </div>
    <div>
      <h4>琢: </h4><div><h5>zhuó, zuó: </h5><span>polish jade; cut jade</span></div>
    </div>
    <div>
      <h4>琥: </h4><div><h5>hǔ: </h5><span>jewel in shape of tiger; amber</span></div>
    </div>
    <div>
      <h4>琦: </h4><div><h5>qí: </h5><span>gem, precious stone, jade</span></div>
    </div>
    <div>
      <h4>琨: </h4><div><h5>kūn: </h5><span>beautiful jade, precious stones</span></div>
    </div>
    <div>
      <h4>琪: </h4><div><h5>qí: </h5><span>type of jade</span></div>
    </div>
    <div>
      <h4>琬: </h4><div><h5>wǎn: </h5><span>the virtue of a gentleman; jade</span></div>
    </div>
    <div>
      <h4>琮: </h4><div><h5>cóng: </h5><span>octagonal piece of jade with hole in middle</span></div>
    </div>
    <div>
      <h4>琱: </h4><div><h5>diāo: </h5><span>engrave, inlay, carve; exhaust</span></div>
    </div>
    <div>
      <h4>琳: </h4><div><h5>lín: </h5><span>beautiful jade, gem</span></div>
    </div>
    <div>
      <h4>琴: </h4><div><h5>qín: </h5><span>Chinese lute or guitar</span></div>
    </div>
    <div>
      <h4>琶: </h4><div><h5>pá: </h5><span>guitar-like instrument</span></div>
    </div>
    <div>
      <h4>琼: </h4><div><h5>qióng: </h5>
      <span>jade; rare, precious; elegant</span></div>
    </div>
    <div>
      <h4>瑛: </h4><div><h5>yīng: </h5><span>luster of gem; crystal</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>瑄: </h4><div><h5>xuān: </h5>
      <span>
        a ornamental piece of jade several inches across with a hole in the
        center
      </span></div>
    </div>
    <div>
      <h4>瑕: </h4><div><h5>xiá: </h5><span>flaw in gem; fault, defect</span></div>
    </div>
    <div>
      <h4>瑙: </h4><div><h5>nǎo: </h5><span>agate; cornelian</span></div>
    </div>
    <div>
      <h4>瑚: </h4><div><h5>hú: </h5><span>coral; person of virtue</span></div>
    </div>
    <div>
      <h4>瑜: </h4><div><h5>yú: </h5><span>flawless gem or jewel</span></div>
    </div>
    <div>
      <h4>瑞: </h4><div><h5>ruì: </h5><span>felicitous omen; auspicious</span></div>
    </div>
    <div>
      <h4>瑟: </h4><div><h5>sè: </h5>
      <span>
        large stringed musical instrument; dignified, massive; sound of wind
      </span></div>
    </div>
    <div>
      <h4>瑰: </h4><div><h5>guī: </h5><span>extraordinary, fabulous; rose</span></div>
    </div>
    <h3>画10</h3>
    <div>
      <h4>瑶: </h4><div><h5>yáo: </h5><span>precious jade</span></div>
    </div>
    <div>
      <h4>璃: </h4><div><h5>lí: </h5><span>glass</span></div>
    </div>
    <h3>画11</h3>
    <div>
      <h4>瑾: </h4><div><h5>jǐn: </h5><span>brilliance of gems; fine jade</span></div>
    </div>
    <div>
      <h4>璀: </h4><div><h5>cuǐ: </h5><span>lustre of gems; glitter; shine</span></div>
    </div>
    <div>
      <h4>璁: </h4><div><h5>cōng: </h5><span>(pierre similaire au jade)</span></div>
    </div>
    <div>
      <h4>璇: </h4><div><h5>xuán: </h5><span>beautiful jade; star</span></div>
    </div>
    <div>
      <h4>璋: </h4><div><h5>zhāng: </h5><span>jade plaything; jade ornament</span></div>
    </div>
    <div>
      <h4>璜: </h4><div><h5>huáng: </h5><span>a semicircular jade ornament used as a pendant</span></div>
    </div>
    <h3>画12-16</h3>
    <div>
      <h4>璞: </h4><div><h5>pú: </h5><span>unpolished gem, uncarved gem</span></div>
    </div>
    <div>
      <h4>璟: </h4><div><h5>jǐng: </h5><span>luster of gem</span></div>
    </div>
    <div>
      <h4>璐: </h4><div><h5>lù: </h5><span>beautiful variety of jade</span></div>
    </div>
    <div>
      <h4>璨: </h4><div><h5>càn: </h5><span>gems; luster of gems; lustrous</span></div>
    </div>
    <div>
      <h4>瓒: </h4><div><h5>zàn: </h5><span>ceremonial libation cup</span></div>
    </div>
    <h1>120: 瓦</h1>
    <div>
      <h4>瓦: </h4><div><h5>wǎ, wà: </h5><span>tile; earthenware pottery; girl</span></div>
    </div>
    <div>
      <h4>瓯: </h4><div><h5>ōu: </h5><span>bowl, cup; small tray</span></div>
    </div>
    <div>
      <h4>瓶: </h4><div><h5>píng: </h5><span>jug, pitcher, vase, jar, bottle</span></div>
    </div>
    <div>
      <h4>瓷: </h4><div><h5>cí: </h5><span>crockery, porcelain, chinaware</span></div>
    </div>
    <div>
      <h4>甄: </h4><div><h5>zhēn: </h5><span>to examine, discern; to grade; a surname</span></div>
    </div>
    <h1>121: 礻</h1>
    <h3>画1-4</h3>
    <div>
      <h4>礼: </h4><div><h5>lǐ: </h5><span>social custom; manners; courtesy</span></div>
    </div>
    <div>
      <h4>祁: </h4><div><h5>qí: </h5><span>pray; numerous, ample, abundant</span></div>
    </div>
    <div>
      <h4>社: </h4><div><h5>shè: </h5>
      <span>
        god of the soil and altars to him; group of families; company, society
      </span></div>
    </div>
    <div>
      <h4>祀: </h4><div><h5>sì: </h5><span>to sacrifice, worship</span></div>
    </div>
    <div>
      <h4>祂: </h4><div><h5>tā: </h5><span>he</span></div>
    </div>
    <div>
      <h4>祈: </h4><div><h5>qí: </h5><span>pray; entreat, beseech</span></div>
    </div>
    <div>
      <h4>祉: </h4><div><h5>zhǐ: </h5><span>happiness, blessings, good luck</span></div>
    </div>
    <h3>画5-6</h3>
    <div>
      <h4>祖: </h4><div><h5>zǔ: </h5><span>ancestor, forefather; grandfather</span></div>
    </div>
    <div>
      <h4>祚: </h4><div><h5>zuò: </h5><span>throne; bless; blessing, happiness</span></div>
    </div>
    <div>
      <h4>祝: </h4><div><h5>zhù: </h5><span>pray for happiness or blessings</span></div>
    </div>
    <div>
      <h4>神: </h4><div><h5>shén: </h5><span>spirit, god, supernatural being</span></div>
    </div>
    <div>
      <h4>祠: </h4><div><h5>cí: </h5><span>ancestral temple; offer sacrifice</span></div>
    </div>
    <div>
      <h4>祥: </h4><div><h5>xiáng: </h5><span>good luck, good omen; happiness</span></div>
    </div>
    <div>
      <h4>祯: </h4><div><h5>zhēn: </h5><span>lucky, auspicious, good omen</span></div>
    </div>
    <h3>画7-12</h3>
    <div>
      <h4>祷: </h4><div><h5>dǎo: </h5><span>pray; entreat, beg, plead; prayer</span></div>
    </div>
    <div>
      <h4>祸: </h4><div><h5>huò: </h5><span>misfortune, calamity, disaster</span></div>
    </div>
    <div>
      <h4>祺: </h4><div><h5>qí: </h5><span>good luck, good fortune</span></div>
    </div>
    <div>
      <h4>禄: </h4><div><h5>lù: </h5><span>blessing, happiness, prosperity</span></div>
    </div>
    <div>
      <h4>禅: </h4><div><h5>chán, shàn: </h5><span>meditation, contemplation (DKW: 24787')</span></div>
    </div>
    <div>
      <h4>福: </h4><div><h5>fú: </h5><span>happiness, good fortune, blessing</span></div>
    </div>
    <div>
      <h4>禧: </h4><div><h5>xǐ: </h5><span>happiness; congratulations</span></div>
    </div>
    <h1>122: 耂</h1>
    <div>
      <h4>老: </h4><div><h5>lǎo: </h5><span>old, aged; experienced</span></div>
    </div>
    <div>
      <h4>考: </h4><div><h5>kǎo: </h5><span>examine, test; investigate</span></div>
    </div>
    <div>
      <h4>者: </h4><div><h5>zhě: </h5><span>that which; he who; those who</span></div>
    </div>
    <div>
      <h4>耆: </h4><div><h5>qí, shì: </h5><span>man of sixty; aged, old</span></div>
    </div>
    <h1>123: 见</h1>
    <div>
      <h4>见: </h4><div><h5>jiàn, xiàn: </h5><span>see, observe, behold; perceive</span></div>
    </div>
    </section>
    <section>
    <h3>画2-6</h3>
    <div>
      <h4>观: </h4><div><h5>guān, guàn: </h5><span>see, observe, view; appearance</span></div>
    </div>
    <div>
      <h4>现: </h4><div><h5>xiàn: </h5><span>appear, manifest, become visible</span></div>
    </div>
    <div>
      <h4>规: </h4><div><h5>guī: </h5><span>rules, regulations, customs, law</span></div>
    </div>
    <div>
      <h4>觅: </h4><div><h5>mì: </h5><span>seek; search</span></div>
    </div>
    <div>
      <h4>视: </h4><div><h5>shì: </h5><span>look at, inspect, observe, see</span></div>
    </div>
    <div>
      <h4>览: </h4><div><h5>lǎn: </h5><span>look at, inspect; perceive</span></div>
    </div>
    <div>
      <h4>觉: </h4><div><h5>jué, jiào: </h5><span>to wake up from sleep; conscious</span></div>
    </div>
    <div>
      <h4>觊: </h4><div><h5>jì: </h5><span>covet, long for, desire</span></div>
    </div>
    <h3>画9-11</h3>
    <div>
      <h4>觎: </h4><div><h5>yú: </h5><span>desire strongly, covet, long for</span></div>
    </div>
    <div>
      <h4>觑: </h4><div><h5>qù, qū: </h5><span>peep at; watch, spy on</span></div>
    </div>
    <h1>124: 贝</h1>
    <div>
      <h4>贝: </h4><div><h5>bèi: </h5><span>sea shell; money, currency</span></div>
    </div>
    <h3>画2-3</h3>
    <div>
      <h4>贞: </h4><div><h5>zhēn: </h5><span>virtuous, chaste, pure; loyal</span></div>
    </div>
    <div>
      <h4>负: </h4><div><h5>fù: </h5><span>load, burden; carry, bear</span></div>
    </div>
    <div>
      <h4>贡: </h4><div><h5>gòng: </h5><span>offer tribute; tribute, gifts</span></div>
    </div>
    <div>
      <h4>财: </h4><div><h5>cái: </h5><span>wealth, valuables, riches</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>责: </h4><div><h5>zé, zhài: </h5><span>one's responsibility, duty</span></div>
    </div>
    <div>
      <h4>贤: </h4><div><h5>xián: </h5><span>virtuous, worthy, good; able</span></div>
    </div>
    <div>
      <h4>败: </h4><div><h5>bài: </h5><span>be defeated, decline, fail</span></div>
    </div>
    <div>
      <h4>账: </h4><div><h5>zhàng: </h5><span>accounts; bill, debt; credit</span></div>
    </div>
    <div>
      <h4>货: </h4><div><h5>huò: </h5><span>goods, commodities, products</span></div>
    </div>
    <div>
      <h4>质: </h4><div><h5>zhì: </h5><span>matter, material, substance</span></div>
    </div>
    <div>
      <h4>贩: </h4><div><h5>fàn: </h5><span>peddler, hawker, street merchant</span></div>
    </div>
    <div>
      <h4>贪: </h4><div><h5>tān: </h5><span>be greedy, covet; covetous</span></div>
    </div>
    <div>
      <h4>贫: </h4><div><h5>pín: </h5><span>poor, impoverished, needy</span></div>
    </div>
    <div>
      <h4>贬: </h4><div><h5>biǎn: </h5><span>decrease, lower; censure, criticize</span></div>
    </div>
    <div>
      <h4>购: </h4><div><h5>gòu: </h5><span>buy, purchase; hire</span></div>
    </div>
    <div>
      <h4>贮: </h4><div><h5>zhù: </h5><span>store, stockpile, hoard</span></div>
    </div>
    <div>
      <h4>贯: </h4><div><h5>guàn: </h5><span>a string of 1000 coins; to go through</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>贰: </h4><div><h5>èr: </h5><span>number two</span></div>
    </div>
    <div>
      <h4>贱: </h4><div><h5>jiàn: </h5><span>mean, low; cheap, worthless</span></div>
    </div>
    <div>
      <h4>贲: </h4><div><h5>bì, bēn: </h5><span>forge ahead; energetic; surname</span></div>
    </div>
    <div>
      <h4>贴: </h4><div><h5>tiē: </h5><span>paste to, stick on; attached to</span></div>
    </div>
    <div>
      <h4>贵: </h4><div><h5>guì: </h5><span>expensive, costly, valuable</span></div>
    </div>
    <div>
      <h4>贷: </h4><div><h5>dài: </h5><span>lend; borrow; pardon</span></div>
    </div>
    <div>
      <h4>贸: </h4><div><h5>mào: </h5><span>trade, barter; mixed; rashly</span></div>
    </div>
    <div>
      <h4>费: </h4><div><h5>fèi: </h5><span>expenses, expenditures, fee</span></div>
    </div>
    <div>
      <h4>贺: </h4><div><h5>hè: </h5><span>congratulate; send present</span></div>
    </div>
    <div>
      <h4>贻: </h4><div><h5>yí: </h5><span>give to, hand down, bequeath</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>贼: </h4><div><h5>zéi: </h5><span>thief, traitor; kill</span></div>
    </div>
    <div>
      <h4>贾: </h4><div><h5>gǔ, jiǎ: </h5><span>surname; merchant; buy, trade</span></div>
    </div>
    <div>
      <h4>贿: </h4><div><h5>huì: </h5><span>bribe; bribes; riches, wealth</span></div>
    </div>
    <div>
      <h4>赀: </h4><div><h5>zī: </h5><span>property; wealth; to count</span></div>
    </div>
    <div>
      <h4>赁: </h4><div><h5>lìn: </h5><span>rent, hire; hired person</span></div>
    </div>
    <div>
      <h4>赂: </h4><div><h5>lù: </h5><span>bribe; give present</span></div>
    </div>
    <div>
      <h4>赃: </h4><div><h5>zāng: </h5><span>booty, loot, stolen goods; bribe</span></div>
    </div>
    <div>
      <h4>资: </h4><div><h5>zī: </h5><span>property; wealth; capital</span></div>
    </div>
    <h3>画7-9</h3>
    <div>
      <h4>赈: </h4><div><h5>zhèn: </h5><span>relieve, aid distressed; rich</span></div>
    </div>
    <div>
      <h4>赋: </h4><div><h5>fù: </h5><span>tax; give; endow; army; diffuse</span></div>
    </div>
    <div>
      <h4>赌: </h4><div><h5>dǔ: </h5><span>bet, gamble, wager; compete</span></div>
    </div>
    <div>
      <h4>赎: </h4><div><h5>shú: </h5><span>buy, redeem; ransome; atone for</span></div>
    </div>
    <div>
      <h4>赏: </h4><div><h5>shǎng: </h5><span>reward, grant, bestow; appreciate</span></div>
    </div>
    <div>
      <h4>赐: </h4><div><h5>cì: </h5><span>give, bestow favors; appoint</span></div>
    </div>
    <div>
      <h4>赔: </h4><div><h5>péi: </h5><span>indemnify, suffer loss</span></div>
    </div>
    <div>
      <h4>赖: </h4><div><h5>lài: </h5><span>rely, depend on; accuse falsely</span></div>
    </div>
    <h3>画10-17</h3>
    <div>
      <h4>赘: </h4><div><h5>zhuì: </h5><span>unnecessary, superfluous</span></div>
    </div>
    <div>
      <h4>赚: </h4><div><h5>zhuàn: </h5><span>make money, earn; gain, profit</span></div>
    </div>
    <div>
      <h4>赛: </h4><div><h5>sài: </h5><span>compete, contend; contest, race</span></div>
    </div>
    <div>
      <h4>赞: </h4><div><h5>zàn: </h5><span>help, support, assist, aid</span></div>
    </div>
    <div>
      <h4>赠: </h4><div><h5>zèng: </h5><span>give present; bestow, confer</span></div>
    </div>
    <div>
      <h4>赢: </h4><div><h5>yíng: </h5><span>win; surplus, gain, profit</span></div>
    </div>
    <div>
      <h4>赣: </h4><div><h5>gàn: </h5><span>Jiangxi province; places therein</span></div>
    </div>
    <h1>125: 车</h1>
    <div>
      <h4>车: </h4><div><h5>chē, jū: </h5><span>cart, vehicle; carry in cart</span></div>
    </div>
    <h3>画1-3</h3>
    <div>
      <h4>轧: </h4><div><h5>yà, zhá, gá: </h5><span>crush by weight; grind</span></div>
    </div>
    <div>
      <h4>轨: </h4><div><h5>guǐ: </h5><span>track, rut, path</span></div>
    </div>
    <div>
      <h4>轩: </h4><div><h5>xuān: </h5><span>carriage; high; wide; balcony</span></div>
    </div>
    <div>
      <h4>轫: </h4><div><h5>rèn: </h5><span>a block that keeps a wheel from moving</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>转: </h4><div><h5>zhuǎn, zhuàn, zhuǎi: </h5><span>shift, move, turn</span></div>
    </div>
    <div>
      <h4>轭: </h4><div><h5>è: </h5><span>yoke, collar</span></div>
    </div>
    <div>
      <h4>轮: </h4><div><h5>lún: </h5><span>wheel; revolve, turn; recur</span></div>
    </div>
    <div>
      <h4>软: </h4><div><h5>ruǎn: </h5><span>soft, flexible, pliable; weak</span></div>
    </div>
    <div>
      <h4>轰: </h4><div><h5>hōng: </h5><span>rumble, explosion, blast</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>轴: </h4><div><h5>zhóu, zhòu: </h5><span>axle, axletree; pivot; axis</span></div>
    </div>
    <div>
      <h4>轶: </h4><div><h5>yì: </h5><span>rush forth; surpass, excel</span></div>
    </div>
    <div>
      <h4>轻: </h4><div><h5>qīng: </h5><span>light; easy, simple; gentle</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>轼: </h4><div><h5>shì: </h5><span>horizontal wooden bar in front</span></div>
    </div>
    <div>
      <h4>载: </h4><div><h5>zǎi, zài: </h5><span>load; carry; transport, convey</span></div>
    </div>
    <div>
      <h4>轾: </h4><div><h5>zhì: </h5><span>low rear portion of cart</span></div>
    </div>
    <div>
      <h4>轿: </h4><div><h5>jiào: </h5><span>sedan-chair, palanquin</span></div>
    </div>
    <div>
      <h4>较: </h4><div><h5>jiào: </h5><span>compare; comparatively, more</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>辄: </h4><div><h5>zhé: </h5><span>sides of chariot where weapons</span></div>
    </div>
    <div>
      <h4>辅: </h4><div><h5>fǔ: </h5><span>cheek bone; protective; assist</span></div>
    </div>
    <div>
      <h4>辆: </h4><div><h5>liàng: </h5><span>numerary adjunct for vehicles</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>辇: </h4><div><h5>niǎn: </h5><span>hand-cart; transport by carriage</span></div>
    </div>
    <div>
      <h4>辈: </h4><div><h5>bèi: </h5><span>generation, lifetime; class</span></div>
    </div>
    <div>
      <h4>辉: </h4><div><h5>huī: </h5><span>brightness, luster, brilliance</span></div>
    </div>
    <div>
      <h4>辍: </h4><div><h5>chuò: </h5><span>stop, suspend, halt</span></div>
    </div>
    <h3>画9-12</h3>
    <div>
      <h4>辐: </h4><div><h5>fú: </h5><span>spokes of wheel</span></div>
    </div>
    <div>
      <h4>辑: </h4><div><h5>jí: </h5><span>gather up, collect; edit, compile</span></div>
    </div>
    <div>
      <h4>输: </h4><div><h5>shū: </h5><span>transport, carry, haul</span></div>
    </div>
    <div>
      <h4>辕: </h4><div><h5>yuán: </h5><span>axle; magistrate's office; surname</span></div>
    </div>
    <div>
      <h4>辖: </h4><div><h5>xiá: </h5><span>linchpin of wheel; control</span></div>
    </div>
    <div>
      <h4>辗: </h4><div><h5>zhǎn, niǎn: </h5><span>turn over, roll</span></div>
    </div>
    <div>
      <h4>辘: </h4><div><h5>lù: </h5><span>windlass, pulley, capstan; wheel</span></div>
    </div>
    <div>
      <h4>辙: </h4><div><h5>zhé: </h5><span>wagon ruts, wheel tracks</span></div>
    </div>
    <h1>126: 长</h1>
    <div>
      <h4>长: </h4><div><h5>cháng, zhǎng: </h5><span>long; length; excel in; leader</span></div>
    </div>
    <h1>127: 韦</h1>
    <div>
      <h4>韦: </h4><div><h5>wéi: </h5>
      <span>
        tanned leather; surname; simplified form of KangXi radical number 178
      </span></div>
    </div>
    <div>
      <h4>韧: </h4><div><h5>rèn: </h5><span>strong and pliable, resilient</span></div>
    </div>
    <div>
      <h4>韩: </h4><div><h5>hán: </h5><span>fence; surname; Korea</span></div>
    </div>
    <div>
      <h4>韬: </h4><div><h5>tāo: </h5><span>sheath, scabbard, bow case</span></div>
    </div>
    <h1>128: 风</h1>
    <div>
      <h4>风: </h4><div><h5>fēng, fěng: </h5><span>wind; air; manners, atmosphere</span></div>
    </div>
    <div>
      <h4>飒: </h4><div><h5>sà: </h5><span>the sound of the wind; bleak; melancholy</span></div>
    </div>
    <div>
      <h4>飘: </h4><div><h5>piāo: </h5><span>whirlwind, cyclone; floating</span></div>
    </div>
    <div>
      <h4>飙: </h4><div><h5>biāo: </h5><span>whirlwind, stormy gale</span></div>
    </div>
    <h1>129: 母</h1>
    <div>
      <h4>母: </h4><div><h5>mǔ: </h5><span>mother; female elders; female</span></div>
    </div>
    <div>
      <h4>每: </h4><div><h5>měi: </h5><span>every, each</span></div>
    </div>
    <div>
      <h4>毒: </h4><div><h5>dú, dài: </h5><span>poison, venom; poisonous</span></div>
    </div>
    <div>
      <h4>毓: </h4><div><h5>yù: </h5><span>give birth to; bring up, educate</span></div>
    </div>
    <h1>130: 玄</h1>
    <div>
      <h4>玄: </h4><div><h5>xuán: </h5><span>deep, profound, abstruse; KangXi radical 95</span></div>
    </div>
    <div>
      <h4>玆: </h4><div><h5>zī, xuán: </h5><span>now, here; this; time, year</span></div>
    </div>
    <div>
      <h4>率: </h4><div><h5>shuài, lǜ: </h5><span>to lead; ratio; rate; limit</span></div>
    </div>
    <h1>131: 玉</h1>
    <div>
      <h4>玉: </h4><div><h5>yù: </h5><span>jade, precious stone, gem</span></div>
    </div>
    <div>
      <h4>玺: </h4><div><h5>xǐ: </h5><span>imperial signet, royal signet</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>璧: </h4><div><h5>bì: </h5><span>piece of jade with hole in it</span></div>
    </div>
    <h1>132: 瓜</h1>
    <div>
      <h4>瓜: </h4><div><h5>guā: </h5><span>melon, gourd, cucumber; rad. 97</span></div>
    </div>
    <div>
      <h4>瓢: </h4><div><h5>piáo: </h5><span>ladle made from dried gourd</span></div>
    </div>
    <div>
      <h4>瓣: </h4><div><h5>bàn: </h5><span>petal; segment; valves</span></div>
    </div>
    <h1>133: 甘</h1>
    <div>
      <h4>甘: </h4><div><h5>gān: </h5><span>sweetness; sweet, tasty</span></div>
    </div>
    <div>
      <h4>甚: </h4><div><h5>shèn, shén: </h5><span>great extent; considerably</span></div>
    </div>
    <div>
      <h4>甜: </h4><div><h5>tián: </h5><span>sweet, sweetness</span></div>
    </div>
    <h1>134: 生</h1>
    <div>
      <h4>生: </h4><div><h5>shēng: </h5><span>life, living, lifetime; birth</span></div>
    </div>
    <div>
      <h4>甡: </h4><div><h5>shēn: </h5><span>abundant, numerous; crowd</span></div>
    </div>
    <div>
      <h4>甥: </h4><div><h5>shēng: </h5><span>sister's child</span></div>
    </div>
    <h1>135: 用</h1>
    <div>
      <h4>用: </h4><div><h5>yòng: </h5><span>use, employ, apply, operate; use</span></div>
    </div>
    <div>
      <h4>甩: </h4><div><h5>shuǎi: </h5><span>throw away, discard</span></div>
    </div>
    <div>
      <h4>甫: </h4><div><h5>fǔ: </h5><span>begin; man, father; great; a distance of ten li</span></div>
    </div>
    <div>
      <h4>甬: </h4><div><h5>yǒng: </h5><span>path; river in Ningbo; Ningbo</span></div>
    </div>
    <div>
      <h4>甭: </h4><div><h5>béng: </h5><span>there is no need</span></div>
    </div>
    <h1>136: 田</h1>
    <div>
      <h4>田: </h4><div><h5>tián: </h5><span>field, arable land, cultivated</span></div>
    </div>
    <div>
      <h4>由: </h4><div><h5>yóu: </h5><span>cause, reason; from</span></div>
    </div>
    <div>
      <h4>甲: </h4><div><h5>jiǎ: </h5><span>armor, shell; fingernails; 1st heavenly stem</span></div>
    </div>
    <div>
      <h4>申: </h4><div><h5>shēn: </h5>
      <span>
        to state to a superior, report; extend; 9th terrestrial branch
      </span></div>
    </div>
    <div>
      <h4>电: </h4><div><h5>diàn: </h5><span>electricity; electric; lightning</span></div>
    </div>
    <h3>画2-3</h3>
    <div>
      <h4>男: </h4><div><h5>nán: </h5><span>male, man; son; baron; surname</span></div>
    </div>
    <div>
      <h4>甸: </h4><div><h5>diàn, tián, shèng: </h5><span>suburbs of capital; govern; crops</span></div>
    </div>
    <div>
      <h4>町: </h4><div><h5>tǐng, dīng: </h5><span>raised path between fields</span></div>
    </div>
    <div>
      <h4>画: </h4><div><h5>huà: </h5><span>a painting, picture, drawing; to draw</span></div>
    </div>
    <div>
      <h4>畀: </h4><div><h5>bì: </h5><span>to give</span></div>
    </div>
    <div>
      <h4>畅: </h4><div><h5>chàng: </h5><span>smoothly, freely, unrestrained</span></div>
    </div>
    <h3>画4-6</h3>
    <div>
      <h4>界: </h4><div><h5>jiè: </h5><span>boundary, limit; domain; society; the world</span></div>
    </div>
    <div>
      <h4>畏: </h4><div><h5>wèi: </h5><span>fear, dread, awe, reverence</span></div>
    </div>
    <div>
      <h4>畔: </h4><div><h5>pàn: </h5><span>boundary path dividing fields</span></div>
    </div>
    <div>
      <h4>留: </h4><div><h5>liú: </h5><span>stop, halt; stay, detain, keep</span></div>
    </div>
    <div>
      <h4>畜: </h4><div><h5>xù, chù: </h5><span>livestock, domestic animals</span></div>
    </div>
    <div>
      <h4>略: </h4><div><h5>luè: </h5><span>approximately, roughly; outline</span></div>
    </div>
    <div>
      <h4>畦: </h4><div><h5>qí: </h5><span>sections in vegetable farm</span></div>
    </div>
    <h3>画7-14</h3>
    <div>
      <h4>番: </h4><div><h5>fān, pān: </h5><span>to take turns; a turn, a time; to repeat</span></div>
    </div>
    <div>
      <h4>畴: </h4><div><h5>chóu: </h5><span>farmland, arable land; category</span></div>
    </div>
    <div>
      <h4>畸: </h4><div><h5>jī: </h5><span>odd, fractional, remainder, odds</span></div>
    </div>
    <div>
      <h4>疆: </h4><div><h5>jiāng, qiáng: </h5><span>boundary, border, frontier</span></div>
    </div>
    <h1>137: 疋</h1>
    <div>
      <h4>疋: </h4><div><h5>pǐ, yǎ, shū: </h5><span>roll, bolt of cloth; foot</span></div>
    </div>
    <div>
      <h4>疏: </h4><div><h5>shū: </h5><span>neglect; careless, lax</span></div>
    </div>
    <div>
      <h4>疑: </h4><div><h5>yí, nǐ: </h5><span>doubt, question, suspect</span></div>
    </div>
    <h1>138: 疒</h1>
    <h3>画2-3</h3>
    <div>
      <h4>疗: </h4><div><h5>liáo: </h5><span>be healed, cured, recover</span></div>
    </div>
    <div>
      <h4>疙: </h4><div><h5>gē, yì: </h5><span>pimple, sore, boil, wart, pustule</span></div>
    </div>
    <div>
      <h4>疚: </h4><div><h5>jiù: </h5><span>chronic disease, chronic illness; sorrow</span></div>
    </div>
    <div>
      <h4>疝: </h4><div><h5>shàn: </h5><span>hernia, rupture</span></div>
    </div>
    <div>
      <h4>疡: </h4><div><h5>yáng: </h5><span>ulcers, sores; infection</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>疤: </h4><div><h5>bā: </h5><span>scar, cicatrix; birthmark</span></div>
    </div>
    <div>
      <h4>疫: </h4><div><h5>yì: </h5><span>epidemic, plague, pestilence</span></div>
    </div>
    <div>
      <h4>疮: </h4><div><h5>chuāng: </h5><span>tumor, boil, sore, wound</span></div>
    </div>
    <div>
      <h4>疯: </h4><div><h5>fēng: </h5><span>crazy, insane, mentally ill</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>疲: </h4><div><h5>pí: </h5><span>feel tired, be exhausted; weak</span></div>
    </div>
    <div>
      <h4>疹: </h4><div><h5>zhěn: </h5><span>measles; rash; fever</span></div>
    </div>
    <div>
      <h4>疼: </h4><div><h5>téng: </h5><span>aches, pains; be fond of; love</span></div>
    </div>
    <div>
      <h4>疾: </h4><div><h5>jí: </h5><span>illness, disease, sickness; to hate</span></div>
    </div>
    <div>
      <h4>病: </h4><div><h5>bìng: </h5><span>illness, sickness, disease</span></div>
    </div>
    <div>
      <h4>症: </h4><div><h5>zhèng, zhēng: </h5><span>disease, illness, ailment</span></div>
    </div>
    <div>
      <h4>痉: </h4><div><h5>jìng: </h5><span>convulsions, fits</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>疵: </h4><div><h5>cī: </h5><span>flaw, fault, defect; disease</span></div>
    </div>
    <div>
      <h4>痊: </h4><div><h5>quán: </h5><span>be healed, be cured; recover</span></div>
    </div>
    <div>
      <h4>痍: </h4><div><h5>yí: </h5><span>wound, bruise, sore</span></div>
    </div>
    <div>
      <h4>痔: </h4><div><h5>zhì: </h5><span>hemorrhoids, piles</span></div>
    </div>
    <div>
      <h4>痕: </h4><div><h5>hén: </h5><span>scar; mark; trace</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>痘: </h4><div><h5>dòu: </h5><span>smallpox</span></div>
    </div>
    <div>
      <h4>痛: </h4><div><h5>tòng: </h5><span>pain, ache; sorry, sad; bitter</span></div>
    </div>
    <div>
      <h4>痞: </h4><div><h5>pǐ: </h5><span>dyspepsia, spleen infection</span></div>
    </div>
    <div>
      <h4>痠: </h4><div><h5>suān: </h5><span>aching of limbs, muscular pains</span></div>
    </div>
    <div>
      <h4>痢: </h4><div><h5>lì: </h5><span>dysentery</span></div>
    </div>
    <div>
      <h4>痣: </h4><div><h5>zhì: </h5><span>spots, moles; birthmark</span></div>
    </div>
    <div>
      <h4>痧: </h4><div><h5>shā: </h5><span>cholera; colic</span></div>
    </div>
    <div>
      <h4>痪: </h4><div><h5>huàn: </h5><span>paralysis, numbness of limbs</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>痰: </h4><div><h5>tán: </h5><span>phlegm, mucus, spittle</span></div>
    </div>
    <div>
      <h4>痲: </h4><div><h5>má: </h5><span>pock-marked; leprosy; measles</span></div>
    </div>
    <div>
      <h4>痴: </h4><div><h5>chī: </h5><span>foolish, stupid, dumb, silly</span></div>
    </div>
    <div>
      <h4>痹: </h4><div><h5>bì: </h5><span>paralysis, numbness</span></div>
    </div>
    <div>
      <h4>瘀: </h4><div><h5>yū: </h5><span>a hematoma, contusion; extravasted blood</span></div>
    </div>
    <div>
      <h4>瘁: </h4><div><h5>cuì: </h5><span>feel tired, be weary, be worn out</span></div>
    </div>
    <div>
      <h4>瘐: </h4><div><h5>yǔ: </h5>
      <span>
        to die in prison from cold and hunger; to treat with cruelty
      </span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>瘖: </h4><div><h5>yīn: </h5><span>dumb, mute, unable speak</span></div>
    </div>
    <div>
      <h4>瘟: </h4><div><h5>wēn: </h5><span>epidemic, plague, pestilence</span></div>
    </div>
    <div>
      <h4>瘦: </h4><div><h5>shòu: </h5><span>thin, emaciated, lean; meager</span></div>
    </div>
    <div>
      <h4>瘩: </h4><div><h5>dá, da: </h5><span>pimples</span></div>
    </div>
    <h3>画10-12</h3>
    <div>
      <h4>瘤: </h4><div><h5>liú: </h5><span>tumor, lump, goiter</span></div>
    </div>
    <div>
      <h4>瘪: </h4><div><h5>biē, biě: </h5><span>shrivelled up, dried up; vexed</span></div>
    </div>
    <div>
      <h4>瘫: </h4><div><h5>tān: </h5><span>paralysis, palsy, numbness</span></div>
    </div>
    <div>
      <h4>瘴: </h4><div><h5>zhàng: </h5><span>malaria pestilential vapors</span></div>
    </div>
    <div>
      <h4>瘾: </h4><div><h5>yǐn: </h5><span>rash; addiction, craving, habit</span></div>
    </div>
    <div>
      <h4>癌: </h4><div><h5>ái: </h5><span>cancer; marmoset</span></div>
    </div>
    <h3>画13-16</h3>
    <div>
      <h4>癖: </h4><div><h5>pǐ: </h5><span>craving, weakness for; indigestion</span></div>
    </div>
    <div>
      <h4>癞: </h4><div><h5>lài: </h5><span>leprosy, scabies, mange; shoddy</span></div>
    </div>
    <div>
      <h4>癫: </h4><div><h5>diān: </h5><span>crazy, mad; madness, mania, insan</span></div>
    </div>
    <h1>139: 癶</h1>
    <div>
      <h4>癸: </h4><div><h5>guǐ: </h5><span>10th heavenly stem</span></div>
    </div>
    <div>
      <h4>登: </h4><div><h5>dēng: </h5><span>rise, mount, board, climb</span></div>
    </div>
    <h1>140: 白</h1>
    <div>
      <h4>白: </h4><div><h5>bái: </h5><span>white; pure, unblemished; bright</span></div>
    </div>
    <h3>画1-6</h3>
    <div>
      <h4>百: </h4><div><h5>bǎi: </h5><span>one hundred; numerous, many</span></div>
    </div>
    <div>
      <h4>皂: </h4><div><h5>zào: </h5><span>soap; black; menial servant</span></div>
    </div>
    <div>
      <h4>的: </h4><div><h5>dí, dàng, dì, zhòng, de: </h5><span>possessive, adjectival suffix</span></div>
    </div>
    <div>
      <h4>皆: </h4><div><h5>jiē: </h5><span>all, every, everybody</span></div>
    </div>
    <div>
      <h4>皇: </h4><div><h5>huáng: </h5><span>royal, imperial; ruler, superior</span></div>
    </div>
    <div>
      <h4>皈: </h4><div><h5>guī: </h5><span>follow, comply with</span></div>
    </div>
    <div>
      <h4>皎: </h4><div><h5>jiǎo: </h5><span>white; bright, brilliant; clear</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>皓: </h4><div><h5>hào: </h5><span>bright, luminous; clear; hoary</span></div>
    </div>
    <div>
      <h4>皕: </h4><div><h5>bì: </h5><span>zweihundert (200)</span></div>
    </div>
    <h1>141: 皮</h1>
    <div>
      <h4>皮: </h4><div><h5>pí: </h5><span>skin, hide, fur, feather; outer</span></div>
    </div>
    <div>
      <h4>皱: </h4><div><h5>zhòu: </h5><span>wrinkles, creases, folds</span></div>
    </div>
    <h1>142: 皿</h1>
    <div>
      <h4>皿: </h4><div><h5>mǐn: </h5><span>shallow container; rad. no. 108</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>盅: </h4><div><h5>zhōng: </h5><span>small cup or bowl</span></div>
    </div>
    <div>
      <h4>盆: </h4><div><h5>pén: </h5><span>basin, tub, pot, bowl</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>盈: </h4><div><h5>yíng: </h5><span>fill; full, overflowing; surplus</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>益: </h4><div><h5>yì: </h5><span>profit, benefit; advantage</span></div>
    </div>
    <div>
      <h4>盎: </h4><div><h5>àng: </h5><span>cup; pot; bowl; abundant</span></div>
    </div>
    <div>
      <h4>盏: </h4><div><h5>zhǎn: </h5><span>small cup or container</span></div>
    </div>
    <div>
      <h4>盐: </h4><div><h5>yán: </h5><span>salt</span></div>
    </div>
    <div>
      <h4>监: </h4><div><h5>jiān, jiàn: </h5><span>supervise, control, direct</span></div>
    </div>
    <h3>画6-11</h3>
    <div>
      <h4>盒: </h4><div><h5>hé: </h5><span>small box or case; casket</span></div>
    </div>
    <div>
      <h4>盔: </h4><div><h5>kuī: </h5><span>helmet; bowl; basin</span></div>
    </div>
    <div>
      <h4>盖: </h4><div><h5>gài, gě, hé: </h5><span>cover, hide, protect</span></div>
    </div>
    <div>
      <h4>盗: </h4><div><h5>dào: </h5><span>rob, steal; thief, bandit</span></div>
    </div>
    <div>
      <h4>盘: </h4><div><h5>pán: </h5><span>tray, plate, dish; examine</span></div>
    </div>
    <div>
      <h4>盛: </h4><div><h5>shèng, chéng: </h5><span>abundant, flourishing; contain; fill</span></div>
    </div>
    <div>
      <h4>盟: </h4><div><h5>méng: </h5><span>swear; oath, covenant, alliance</span></div>
    </div>
    <div>
      <h4>盥: </h4><div><h5>guàn: </h5><span>wash</span></div>
    </div>
    <h1>143: 目</h1>
    <div>
      <h4>目: </h4><div><h5>mù: </h5><span>eye; look, see; division, topic</span></div>
    </div>
    <h3>画2-3</h3>
    <div>
      <h4>盯: </h4><div><h5>dīng: </h5><span>rivet gaze upon, keep eyes on</span></div>
    </div>
    <div>
      <h4>盲: </h4><div><h5>máng: </h5><span>blind; unperceptive, shortsighted</span></div>
    </div>
    <div>
      <h4>直: </h4><div><h5>zhí: </h5><span>straight, erect, vertical</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>相: </h4><div><h5>xiāng, xiàng: </h5><span>mutual, reciprocal, each other</span></div>
    </div>
    <div>
      <h4>盹: </h4><div><h5>dǔn: </h5><span>to doze; to nap; to nod</span></div>
    </div>
    <div>
      <h4>盼: </h4><div><h5>pàn: </h5><span>look, gaze; expect, hope for</span></div>
    </div>
    <div>
      <h4>盾: </h4><div><h5>dùn: </h5><span>shield; dutch guilder; Indonesia</span></div>
    </div>
    <div>
      <h4>省: </h4><div><h5>shěng, xǐng: </h5><span>province; save, economize</span></div>
    </div>
    <div>
      <h4>眈: </h4><div><h5>dān: </h5><span>gloat, stare at; to delay, to loiter, to hinder</span></div>
    </div>
    <div>
      <h4>眉: </h4><div><h5>méi: </h5><span>eyebrows; upper margin of book</span></div>
    </div>
    <div>
      <h4>看: </h4><div><h5>kàn, kān: </h5><span>look, see; examine, scrutinize</span></div>
    </div>
    <div>
      <h4>眨: </h4><div><h5>zhǎ: </h5><span>wink</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>眛: </h4><div><h5>mèi: </h5><span>dim, dark, obscure; blind</span></div>
    </div>
    <div>
      <h4>真: </h4><div><h5>zhēn: </h5><span>real, actual, true, genuine</span></div>
    </div>
    <div>
      <h4>眠: </h4><div><h5>mián: </h5><span>close eyes, sleep; hibernate</span></div>
    </div>
    <div>
      <h4>眩: </h4><div><h5>xuàn: </h5><span>to confuse; dizzy, dazed, disoriented</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>眯: </h4><div><h5>mī, mí: </h5><span>be blinded</span></div>
    </div>
    <div>
      <h4>眶: </h4><div><h5>kuàng: </h5><span>eye socket; rim of eye</span></div>
    </div>
    <div>
      <h4>眷: </h4><div><h5>juàn: </h5><span>take interest in, care for</span></div>
    </div>
    <div>
      <h4>眸: </h4><div><h5>móu: </h5><span>pupil of eye; eye</span></div>
    </div>
    <div>
      <h4>眺: </h4><div><h5>tiào: </h5><span>look at, gaze at, scan, survey</span></div>
    </div>
    <div>
      <h4>眼: </h4><div><h5>yǎn: </h5><span>eye; eyelet, hole, opening</span></div>
    </div>
    <div>
      <h4>着: </h4><div><h5>zhuó, zháo, zhāo, zhe: </h5><span>make move, take action</span></div>
    </div>
    <div>
      <h4>睁: </h4><div><h5>zhēng: </h5><span>open eyes; stare</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>睇: </h4><div><h5>dì: </h5><span>look at, glance at; stare at</span></div>
    </div>
    <div>
      <h4>睐: </h4><div><h5>lài: </h5><span>squint at; sidelong glance</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>睛: </h4><div><h5>jīng: </h5><span>eyeball; pupil of eye</span></div>
    </div>
    <div>
      <h4>睡: </h4><div><h5>shuì: </h5><span>sleep, doze</span></div>
    </div>
    <div>
      <h4>督: </h4><div><h5>dū: </h5><span>supervise, oversee, direct</span></div>
    </div>
    <div>
      <h4>睦: </h4><div><h5>mù: </h5><span>friendly, amiable, peaceful</span></div>
    </div>
    <div>
      <h4>睨: </h4><div><h5>nì: </h5><span>look askance at, glare at; squint</span></div>
    </div>
    <div>
      <h4>睫: </h4><div><h5>jié: </h5><span>eyelashes</span></div>
    </div>
    <div>
      <h4>睬: </h4><div><h5>cǎi: </h5><span>notice; pay attention to</span></div>
    </div>
    <div>
      <h4>睹: </h4><div><h5>dǔ: </h5><span>look at, gaze at; observe</span></div>
    </div>
    <div>
      <h4>瞄: </h4><div><h5>miáo: </h5><span>take aim at; look at</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>睽: </h4><div><h5>kuí: </h5><span>staring</span></div>
    </div>
    <div>
      <h4>睾: </h4><div><h5>gāo: </h5><span>testicle</span></div>
    </div>
    <div>
      <h4>睿: </h4><div><h5>ruì: </h5><span>shrewd, astute, clever, keen</span></div>
    </div>
    <h3>画10</h3>
    <div>
      <h4>瞋: </h4><div><h5>chēn: </h5><span>glare with anger</span></div>
    </div>
    <div>
      <h4>瞌: </h4><div><h5>kē: </h5><span>doze off; sleepy</span></div>
    </div>
    <div>
      <h4>瞎: </h4><div><h5>xiā: </h5><span>blind, reckless; rash</span></div>
    </div>
    <div>
      <h4>瞑: </h4><div><h5>míng: </h5><span>close eyes</span></div>
    </div>
    <div>
      <h4>瞒: </h4><div><h5>mán, mén: </h5><span>deceive, lie; eyes half-closed</span></div>
    </div>
    <h3>画11</h3>
    <div>
      <h4>瞠: </h4><div><h5>chēng: </h5><span>look at, stare at, gaze at</span></div>
    </div>
    <div>
      <h4>瞥: </h4><div><h5>piē: </h5><span>take fleeting glance at</span></div>
    </div>
    <div>
      <h4>瞰: </h4><div><h5>kàn: </h5><span>watch, spy; overlook; look down</span></div>
    </div>
    <h3>画12-19</h3>
    <div>
      <h4>瞧: </h4><div><h5>qiáo: </h5><span>glance at, look at, see</span></div>
    </div>
    <div>
      <h4>瞩: </h4><div><h5>zhǔ: </h5><span>watch carefully, stare at, focus on</span></div>
    </div>
    <div>
      <h4>瞪: </h4><div><h5>dèng: </h5><span>stare at</span></div>
    </div>
    <div>
      <h4>瞬: </h4><div><h5>shùn: </h5><span>wink, blink; in a wink, a flash</span></div>
    </div>
    <div>
      <h4>瞳: </h4><div><h5>tóng: </h5><span>pupil of eye</span></div>
    </div>
    <div>
      <h4>瞻: </h4><div><h5>zhān: </h5><span>look; look out for; respect</span></div>
    </div>
    <div>
      <h4>瞿: </h4><div><h5>qú, jù: </h5><span>surname</span></div>
    </div>
    <div>
      <h4>矗: </h4><div><h5>chù: </h5><span>straight, upright, erect, lofty</span></div>
    </div>
    <h1>144: 矛</h1>
    <div>
      <h4>矛: </h4><div><h5>máo: </h5><span>spear, lance; KangXi radical 110</span></div>
    </div>
    <div>
      <h4>矜: </h4><div><h5>jīn, qín, guān: </h5><span>pity, feel sorry for, show sympat</span></div>
    </div>
    <h1>145: 矢</h1>
    <div>
      <h4>矢: </h4><div><h5>shǐ: </h5><span>arrow, dart; vow, swear</span></div>
    </div>
    <div>
      <h4>矣: </h4><div><h5>yǐ: </h5><span>particle of completed action</span></div>
    </div>
    <div>
      <h4>知: </h4><div><h5>zhī, zhì: </h5><span>know, perceive, comprehend</span></div>
    </div>
    <div>
      <h4>矩: </h4><div><h5>jǔ: </h5><span>carpenter's square, ruler, rule</span></div>
    </div>
    <div>
      <h4>矫: </h4><div><h5>jiǎo, jiáo: </h5><span>correct, rectify, straighten out</span></div>
    </div>
    <div>
      <h4>矬: </h4><div><h5>cuó: </h5><span>a dwarf</span></div>
    </div>
    <div>
      <h4>短: </h4><div><h5>duǎn: </h5><span>short; brief; deficient, lacking</span></div>
    </div>
    <div>
      <h4>矮: </h4><div><h5>ǎi: </h5><span>short, dwarf; low</span></div>
    </div>
    <h1>146: 石</h1>
    <div>
      <h4>石: </h4><div><h5>shí, dàn: </h5><span>stone, rock, mineral; rad. 112</span></div>
    </div>
    <h3>画2-3</h3>
    <div>
      <h4>矶: </h4><div><h5>jī: </h5><span>jetty; submerged rock; eddy</span></div>
    </div>
    <div>
      <h4>矽: </h4><div><h5>xī: </h5><span>silicon</span></div>
    </div>
    <div>
      <h4>矿: </h4><div><h5>kuàng: </h5><span>mine; mineral, ore</span></div>
    </div>
    <div>
      <h4>码: </h4><div><h5>mǎ: </h5><span>number, numerals; yard; symbol</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>砂: </h4><div><h5>shā: </h5><span>sand; pebbles, gravel; gritty</span></div>
    </div>
    <div>
      <h4>砌: </h4><div><h5>qì, qiè: </h5><span>to build, pile up; stone steps, brick walk</span></div>
    </div>
    <div>
      <h4>砍: </h4><div><h5>kǎn: </h5><span>hack, chop, cut, fell</span></div>
    </div>
    <div>
      <h4>研: </h4><div><h5>yán, yàn: </h5><span>grind, rub; study, research</span></div>
    </div>
    <div>
      <h4>砖: </h4><div><h5>zhuān: </h5><span>tile, brick</span></div>
    </div>
    <div>
      <h4>砗: </h4><div><h5>chē: </h5><span>giant clam, tridacna gigas</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>砝: </h4><div><h5>fǎ: </h5><span>balance weights</span></div>
    </div>
    <div>
      <h4>砥: </h4><div><h5>dǐ: </h5><span>a whetstone; to polish</span></div>
    </div>
    <div>
      <h4>砰: </h4><div><h5>pēng: </h5><span>sound of crashing stones, bang!</span></div>
    </div>
    <div>
      <h4>破: </h4><div><h5>pò: </h5><span>break, ruin, destroy; rout</span></div>
    </div>
    <div>
      <h4>砷: </h4><div><h5>shēn: </h5><span>arsenic</span></div>
    </div>
    <div>
      <h4>砸: </h4><div><h5>zá: </h5><span>smash, crush, break; pound, mash</span></div>
    </div>
    <div>
      <h4>砺: </h4><div><h5>lì: </h5><span>whetstone; sharpen</span></div>
    </div>
    <div>
      <h4>砾: </h4><div><h5>lì: </h5><span>gravel, pebbles</span></div>
    </div>
    <div>
      <h4>础: </h4><div><h5>chǔ: </h5><span>foundation stone, plinth</span></div>
    </div>
    <h3>画6-7</h3>
    <div>
      <h4>硐: </h4><div><h5>dòng: </h5><span></span></div>
    </div>
    <div>
      <h4>硕: </h4><div><h5>shuò, shí: </h5><span>great, eminent; large, big</span></div>
    </div>
    <div>
      <h4>硝: </h4><div><h5>xiāo: </h5><span>saltpeter, niter; &gt; to tan</span></div>
    </div>
    <div>
      <h4>硫: </h4><div><h5>liú: </h5><span>sulfur</span></div>
    </div>
    <div>
      <h4>硬: </h4><div><h5>yìng: </h5><span>hard, firm, strong; obstinate</span></div>
    </div>
    <div>
      <h4>确: </h4><div><h5>què: </h5><span>sure, certain; real, true</span></div>
    </div>
    <div>
      <h4>硷: </h4><div><h5>jiǎn: </h5><span>alkaline, alkali, lye, salt</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>碇: </h4><div><h5>dìng: </h5><span>anchor</span></div>
    </div>
    <div>
      <h4>碉: </h4><div><h5>diāo: </h5><span>room made of stone; watchtower</span></div>
    </div>
    <div>
      <h4>碌: </h4><div><h5>lù, liù: </h5><span>rough, uneven, rocky; mediocre</span></div>
    </div>
    <div>
      <h4>碍: </h4><div><h5>ài: </h5><span>obstruct, hinder, block, deter</span></div>
    </div>
    <div>
      <h4>碎: </h4><div><h5>suì: </h5><span>break, smash; broken, busted</span></div>
    </div>
    <div>
      <h4>碑: </h4><div><h5>bēi: </h5><span>stone tablet; gravestone</span></div>
    </div>
    <div>
      <h4>碗: </h4><div><h5>wǎn: </h5><span>bowl, small dish</span></div>
    </div>
    <div>
      <h4>碘: </h4><div><h5>diǎn: </h5><span>iodine</span></div>
    </div>
    <div>
      <h4>碰: </h4><div><h5>pèng: </h5><span>collide, bump into</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>碟: </h4><div><h5>dié: </h5><span>small dish, plate</span></div>
    </div>
    <div>
      <h4>碧: </h4><div><h5>bì: </h5><span>jade; green, blue</span></div>
    </div>
    <div>
      <h4>碳: </h4><div><h5>tàn: </h5><span>carbon</span></div>
    </div>
    <div>
      <h4>碴: </h4><div><h5>chá, chā: </h5><span>chipped edge of a container</span></div>
    </div>
    <div>
      <h4>磁: </h4><div><h5>cí: </h5><span>magnetic; magnetism; porcelain</span></div>
    </div>
    <div>
      <h4>磋: </h4><div><h5>cuō: </h5><span>polish, buff; scrutinize</span></div>
    </div>
    </section>
    <section>
    <h3>画10-11</h3>
    <div>
      <h4>碾: </h4><div><h5>niǎn: </h5><span>roller, crush; roll</span></div>
    </div>
    <div>
      <h4>磅: </h4><div><h5>bàng, páng: </h5><span>pound; weigh</span></div>
    </div>
    <div>
      <h4>磊: </h4><div><h5>lěi: </h5><span>pile of rocks or stones; great</span></div>
    </div>
    <div>
      <h4>磐: </h4><div><h5>pán: </h5><span>large rock, boulder; firm</span></div>
    </div>
    <div>
      <h4>磕: </h4><div><h5>kē: </h5><span>hit; collide, knock into; sound</span></div>
    </div>
    <div>
      <h4>磨: </h4><div><h5>mó, mò: </h5><span>grind; polish; rub; wear out; a millstone</span></div>
    </div>
    <div>
      <h4>磺: </h4><div><h5>huáng: </h5><span>sulphur; brimstone</span></div>
    </div>
    <h3>画12-16</h3>
    <div>
      <h4>磷: </h4><div><h5>lín: </h5><span>phosphorus; water rushing between</span></div>
    </div>
    <div>
      <h4>礁: </h4><div><h5>jiāo: </h5><span>reef; jetty; submerged rocks</span></div>
    </div>
    <div>
      <h4>礴: </h4><div><h5>bó: </h5><span>fill, extend</span></div>
    </div>
    <h1>147: 示</h1>
    <div>
      <h4>示: </h4><div><h5>shì: </h5><span>show, manifest; demonstrate</span></div>
    </div>
    <div>
      <h4>祟: </h4><div><h5>suì: </h5><span>evil spirit; evil influence</span></div>
    </div>
    <div>
      <h4>票: </h4><div><h5>piào, piāo: </h5><span>slip of paper or bamboo; ticket</span></div>
    </div>
    <div>
      <h4>祭: </h4><div><h5>jì, zhài: </h5><span>sacrifice to, worship</span></div>
    </div>
    <div>
      <h4>禀: </h4><div><h5>bǐng: </h5><span>report to, petition</span></div>
    </div>
    <div>
      <h4>禁: </h4><div><h5>jīn, jìn: </h5><span>restrict, prohibit, forbid</span></div>
    </div>
    <h1>148: 禾</h1>
    <div>
      <h4>禾: </h4><div><h5>hé: </h5><span>grain still on stalk; rice plant</span></div>
    </div>
    <h3>画2-3</h3>
    <div>
      <h4>秀: </h4><div><h5>xiù: </h5>
      <span>
        ear of grain; flowering, luxuriant; refined, elegant, graceful
      </span></div>
    </div>
    <div>
      <h4>私: </h4><div><h5>sī: </h5><span>private, personal; secret</span></div>
    </div>
    <div>
      <h4>秃: </h4><div><h5>tū: </h5><span>bald</span></div>
    </div>
    <div>
      <h4>秉: </h4><div><h5>bǐng: </h5><span>grasp, hold; bundle; authority</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>秋: </h4><div><h5>qiū: </h5><span>autumn, fall; year</span></div>
    </div>
    <div>
      <h4>种: </h4><div><h5>zhǒng, zhòng, chóng: </h5><span>seed; race, breed; to plant</span></div>
    </div>
    <div>
      <h4>科: </h4><div><h5>kē: </h5><span>section, department, science</span></div>
    </div>
    <div>
      <h4>秒: </h4><div><h5>miǎo: </h5><span>beard of grain or corn; a second</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>秘: </h4><div><h5>mì, bì: </h5><span>secret, mysterious, abstruse</span></div>
    </div>
    <div>
      <h4>租: </h4><div><h5>zū: </h5><span>rent, lease; rental; tax</span></div>
    </div>
    <div>
      <h4>秤: </h4><div><h5>chèng: </h5><span>balance, scale, steelyard</span></div>
    </div>
    <div>
      <h4>秦: </h4><div><h5>qín: </h5>
      <span>
        feudal state of Qin; the Qin dynasty (from which the name 'China'
        comes)
      </span></div>
    </div>
    <div>
      <h4>秧: </h4><div><h5>yāng: </h5><span>rice seedlings, young rice plants</span></div>
    </div>
    <div>
      <h4>秩: </h4><div><h5>zhì: </h5><span>order; orderly; salary; decade</span></div>
    </div>
    <div>
      <h4>积: </h4><div><h5>jī: </h5><span>accumulate, store up, amass</span></div>
    </div>
    <div>
      <h4>称: </h4><div><h5>chēng, chèn, chèng: </h5><span>call; name, brand; address; say</span></div>
    </div>
    <h3>画6-7</h3>
    <div>
      <h4>移: </h4><div><h5>yí: </h5><span>change place, shift; move about</span></div>
    </div>
    <div>
      <h4>秽: </h4><div><h5>huì: </h5><span>dirty, unclean; immoral, obscene</span></div>
    </div>
    <div>
      <h4>稀: </h4><div><h5>xī: </h5><span>rare, unusual, scarce; sparse</span></div>
    </div>
    <div>
      <h4>程: </h4><div><h5>chéng: </h5><span>journey, trip; schedule, agenda</span></div>
    </div>
    <div>
      <h4>稍: </h4><div><h5>shāo, shào: </h5><span>little, slightly; rather</span></div>
    </div>
    <div>
      <h4>税: </h4><div><h5>shuì: </h5><span>taxes</span></div>
    </div>
    <h3>画8-9</h3>
    <div>
      <h4>稔: </h4><div><h5>rěn: </h5><span>ripe grain; harvest; to know, be familiar with</span></div>
    </div>
    <div>
      <h4>稚: </h4><div><h5>zhì: </h5><span>young, immature; childhood</span></div>
    </div>
    <div>
      <h4>稠: </h4><div><h5>chóu: </h5><span>dense, crowded, packed; soupy</span></div>
    </div>
    <div>
      <h4>稣: </h4><div><h5>sū: </h5><span>revive, to rise again; collect</span></div>
    </div>
    <div>
      <h4>稳: </h4><div><h5>wěn: </h5><span>stable, firm, solid, steady</span></div>
    </div>
    <h3>画10-12</h3>
    <div>
      <h4>稷: </h4><div><h5>jì: </h5><span>god of cereals; minister of agriculture</span></div>
    </div>
    <div>
      <h4>稹: </h4><div><h5>zhěn: </h5><span>anhäufen, ansammeln</span></div>
    </div>
    <div>
      <h4>稻: </h4><div><h5>dào: </h5><span>rice growing in field, rice plant</span></div>
    </div>
    <div>
      <h4>稼: </h4><div><h5>jià: </h5><span>sow grain; sheaves of grain</span></div>
    </div>
    <div>
      <h4>稽: </h4><div><h5>jī, qǐ: </h5><span>examine, investigate; delay</span></div>
    </div>
    <div>
      <h4>稿: </h4><div><h5>gǎo: </h5><span>draft, manuscript, rough copy</span></div>
    </div>
    <div>
      <h4>穆: </h4><div><h5>mù: </h5><span>majestic, solemn, reverent; calm</span></div>
    </div>
    <div>
      <h4>穗: </h4><div><h5>suì: </h5><span>ear of grain; tassel; Guangzhou</span></div>
    </div>
    <h1>149: 穴</h1>
    <div>
      <h4>穴: </h4><div><h5>xué: </h5><span>cave, den, hole; KangXi radical 116</span></div>
    </div>
    <h3>画2-3</h3>
    <div>
      <h4>究: </h4><div><h5>jiū: </h5><span>examine, investigate</span></div>
    </div>
    <div>
      <h4>穷: </h4><div><h5>qióng: </h5><span>poor, destitute, impoverished</span></div>
    </div>
    <div>
      <h4>穹: </h4><div><h5>qióng: </h5><span>high and vast; elevated; arched</span></div>
    </div>
    <div>
      <h4>空: </h4><div><h5>kōng, kòng, kǒng: </h5><span>empty, hollow, bare, deserted</span></div>
    </div>
    <h3>画4-5</h3>
    <div>
      <h4>穿: </h4><div><h5>chuān: </h5><span>penetrate, pierce, drill; wear</span></div>
    </div>
    <div>
      <h4>突: </h4><div><h5>tū: </h5><span>suddenly, abruptly, unexpectedly</span></div>
    </div>
    <div>
      <h4>窃: </h4><div><h5>qiè: </h5><span>secretly, stealthily; steal; thief</span></div>
    </div>
    <div>
      <h4>窄: </h4><div><h5>zhǎi: </h5><span>narrow, tight; narrow-minded</span></div>
    </div>
    <div>
      <h4>窈: </h4><div><h5>yǎo: </h5><span>obscure, secluded; refined</span></div>
    </div>
    <div>
      <h4>窍: </h4><div><h5>qiào: </h5><span>hole, opening, aperture</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>窑: </h4><div><h5>yáo: </h5><span>kiln; coal mine pit</span></div>
    </div>
    <div>
      <h4>窒: </h4><div><h5>zhì: </h5><span>stop up, obstruct</span></div>
    </div>
    <div>
      <h4>窕: </h4><div><h5>tiǎo, yáo: </h5><span>slender; quiet and modest, charming</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>窖: </h4><div><h5>jiào: </h5><span>pit, cellar</span></div>
    </div>
    <div>
      <h4>窗: </h4><div><h5>chuāng: </h5><span>window</span></div>
    </div>
    <div>
      <h4>窘: </h4><div><h5>jiǒng: </h5><span>embarrassed; hard-pressed</span></div>
    </div>
    <div>
      <h4>窜: </h4><div><h5>cuàn: </h5><span>run away; revise, edit; expel</span></div>
    </div>
    <div>
      <h4>窝: </h4><div><h5>wō: </h5><span>nest; cave, den; hiding place</span></div>
    </div>
    <h3>画8-11</h3>
    <div>
      <h4>窟: </h4><div><h5>kū: </h5><span>hole, cave; cellar; underground</span></div>
    </div>
    <div>
      <h4>窠: </h4><div><h5>kē: </h5><span>nest; hole, indention; den</span></div>
    </div>
    <div>
      <h4>窥: </h4><div><h5>kuī: </h5><span>peep, watch, spy on, pry</span></div>
    </div>
    <div>
      <h4>窦: </h4><div><h5>dòu: </h5><span>surname; hole, burrow; corrupt</span></div>
    </div>
    <div>
      <h4>窿: </h4><div><h5>lóng: </h5><span>mine shaft; cavity, hole</span></div>
    </div>
    <h1>150: 立</h1>
    <div>
      <h4>立: </h4><div><h5>lì: </h5><span>stand; let stand; establish, set</span></div>
    </div>
    <h3>画4-6</h3>
    <div>
      <h4>竑: </h4><div><h5>hóng: </h5><span>be vast and endless; broad</span></div>
    </div>
    <div>
      <h4>竖: </h4><div><h5>shù: </h5><span>perpendicular, vertical; erect</span></div>
    </div>
    <div>
      <h4>站: </h4><div><h5>zhàn: </h5><span>stand up; a stand, station</span></div>
    </div>
    <div>
      <h4>竞: </h4><div><h5>jìng: </h5><span>contend, vie, compete</span></div>
    </div>
    <div>
      <h4>竟: </h4><div><h5>jìng: </h5><span>finally, after all, at last</span></div>
    </div>
    <div>
      <h4>章: </h4><div><h5>zhāng: </h5><span>composition; chapter, section</span></div>
    </div>
    <h3>画7-9</h3>
    <div>
      <h4>竣: </h4><div><h5>jùn: </h5><span>terminate, end, finish; quit</span></div>
    </div>
    <div>
      <h4>童: </h4><div><h5>tóng: </h5><span>child, boy, servant boy; virgin</span></div>
    </div>
    <div>
      <h4>竭: </h4><div><h5>jié: </h5><span>put forth great effort; exhaust</span></div>
    </div>
    <div>
      <h4>端: </h4><div><h5>duān: </h5><span>end, extreme; head; beginning</span></div>
    </div>
    <h1>151: 罒</h1>
    <h3>画3-6</h3>
    <div>
      <h4>罗: </h4><div><h5>luó: </h5><span>net for catching birds; gauze</span></div>
    </div>
    <div>
      <h4>罚: </h4><div><h5>fá: </h5><span>penalty, fine; punish, penalize</span></div>
    </div>
    <div>
      <h4>罡: </h4><div><h5>gāng: </h5>
      <span>
        the name of a certain stars; the god who is supposed to live in them
      </span></div>
    </div>
    <div>
      <h4>罢: </h4><div><h5>bà, ba, pí: </h5><span>cease, finish, stop; give up</span></div>
    </div>
    <div>
      <h4>罣: </h4><div><h5>guà: </h5><span>hinder, disturb, obstruct</span></div>
    </div>
    <h3>画8-12</h3>
    <div>
      <h4>罩: </h4><div><h5>zhào: </h5><span>basket for catching fish; cover</span></div>
    </div>
    <div>
      <h4>罪: </h4><div><h5>zuì: </h5><span>crime, sin, vice; evil; hardship</span></div>
    </div>
    <div>
      <h4>置: </h4><div><h5>zhì: </h5><span>place, lay out; set aside</span></div>
    </div>
    <div>
      <h4>署: </h4><div><h5>shǔ: </h5><span>public office</span></div>
    </div>
    <div>
      <h4>罹: </h4><div><h5>lí: </h5><span>sorrow, grief; incur, meet with</span></div>
    </div>
    <div>
      <h4>羁: </h4><div><h5>jī: </h5><span>halter; restrain, hold, control</span></div>
    </div>
    <h1>152: 衤</h1>
    <h3>画2-3</h3>
    <div>
      <h4>补: </h4><div><h5>bǔ: </h5><span>mend, patch, fix, repair, restore</span></div>
    </div>
    <div>
      <h4>衫: </h4><div><h5>shān: </h5><span>shirt; robe; gown; jacket</span></div>
    </div>
    <div>
      <h4>衬: </h4><div><h5>chèn: </h5><span>underwear; inner garments</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>衲: </h4><div><h5>nà: </h5><span>mend, sew, patch; line; quilt</span></div>
    </div>
    <div>
      <h4>衹: </h4><div><h5>zhǐ: </h5><span>only, merely, but</span></div>
    </div>
    <div>
      <h4>衿: </h4><div><h5>jīn: </h5><span>collar or lapel of garment</span></div>
    </div>
    <div>
      <h4>袂: </h4><div><h5>mèi: </h5><span>sleeves</span></div>
    </div>
    <h3>画5-6</h3>
    <div>
      <h4>袍: </h4><div><h5>páo: </h5><span>long gown, robe, cloak</span></div>
    </div>
    <div>
      <h4>袒: </h4><div><h5>tǎn: </h5><span>strip; lay bare; bared; naked</span></div>
    </div>
    <div>
      <h4>袖: </h4><div><h5>xiù: </h5><span>sleeve; put something in sleeve</span></div>
    </div>
    <div>
      <h4>袜: </h4><div><h5>wà: </h5><span>socks, stockings</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>被: </h4><div><h5>bèi, pī: </h5><span>passive indicator 'by'; bedding</span></div>
    </div>
    <div>
      <h4>袱: </h4><div><h5>fú: </h5><span>a piece of cloth used wrap bundles</span></div>
    </div>
    <div>
      <h4>裆: </h4><div><h5>dāng: </h5><span>crotch or seat of pants; pants</span></div>
    </div>
    <h3>画7-8</h3>
    <div>
      <h4>裕: </h4><div><h5>yù: </h5><span>abundant, rich, plentiful</span></div>
    </div>
    <div>
      <h4>裙: </h4><div><h5>qún: </h5><span>skirt, apron, petticoat</span></div>
    </div>
    <div>
      <h4>裤: </h4><div><h5>kù: </h5><span>trousers, pants</span></div>
    </div>
    <div>
      <h4>裱: </h4><div><h5>biǎo: </h5><span>to mount maps or scrolls to paste</span></div>
    </div>
    <div>
      <h4>裸: </h4><div><h5>luǒ: </h5><span>bare, nude; undress, strip</span></div>
    </div>
    <div>
      <h4>褚: </h4><div><h5>zhǔ, chǔ: </h5><span>bag, valise; stuff, pad; surname</span></div>
    </div>
    <h3>画9-10</h3>
    <div>
      <h4>褉: </h4><div><h5>xiè: </h5><span>short garments</span></div>
    </div>
    <div>
      <h4>褊: </h4><div><h5>biǎn: </h5><span>cramped, narrow, crowded; mean</span></div>
    </div>
    <div>
      <h4>褐: </h4><div><h5>hè: </h5><span>coarse woolen cloth; dull, dark</span></div>
    </div>
    <div>
      <h4>褓: </h4><div><h5>bǎo: </h5><span>swaddling cloth; infancy</span></div>
    </div>
    <div>
      <h4>褔: </h4><div><h5>fù, fú: </h5><span>complexe,double</span></div>
    </div>
    <div>
      <h4>褛: </h4><div><h5>lǚ: </h5><span>lapel, collar; tattered, threadbare</span></div>
    </div>
    <div>
      <h4>褪: </h4><div><h5>tuì, tùn: </h5><span>strip, undress; fall off; fade</span></div>
    </div>
    <div>
      <h4>褟: </h4><div><h5>tā: </h5><span>inner shirt or singlet</span></div>
    </div>
    <h3>画13</h3>
    <div>
      <h4>襟: </h4><div><h5>jīn: </h5><span>lapel, collar</span></div>
    </div>
    <h1>153: 钅</h1>
    <h3>画2</h3>
    <div>
      <h4>针: </h4><div><h5>zhēn: </h5><span>needle; pin; tack; acupuncture</span></div>
    </div>
    <div>
      <h4>钉: </h4><div><h5>dīng, dìng: </h5><span>nail, spike; pursue closely</span></div>
    </div>
    <div>
      <h4>钊: </h4><div><h5>zhāo: </h5><span>endeavor, strive; encourage; cut</span></div>
    </div>
    <h3>画3</h3>
    <div>
      <h4>钍: </h4><div><h5>tǔ: </h5><span>thorium</span></div>
    </div>
    <div>
      <h4>钏: </h4><div><h5>chuàn: </h5><span>bracelet, armlet</span></div>
    </div>
    <div>
      <h4>钓: </h4><div><h5>diào: </h5><span>fish; fishhook; tempt, lure</span></div>
    </div>
    <div>
      <h4>钗: </h4><div><h5>chāi: </h5><span>ornamental hairpin</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>钙: </h4><div><h5>gài: </h5><span>calcium</span></div>
    </div>
    <div>
      <h4>钛: </h4><div><h5>tài: </h5><span>titanium</span></div>
    </div>
    <div>
      <h4>钜: </h4><div><h5>jù: </h5><span>steel, iron; great</span></div>
    </div>
    <div>
      <h4>钝: </h4><div><h5>dùn: </h5><span>blunt, obtuse; dull; flat; dull-witted</span></div>
    </div>
    <div>
      <h4>钞: </h4><div><h5>chāo: </h5><span>paper money, bank notes; copy</span></div>
    </div>
    <div>
      <h4>钟: </h4><div><h5>zhōng: </h5><span>clock; bell</span></div>
    </div>
    <div>
      <h4>钠: </h4><div><h5>nà: </h5><span>sodium, natrium; sharpen wood</span></div>
    </div>
    <div>
      <h4>钡: </h4><div><h5>bèi: </h5><span>barium</span></div>
    </div>
    <div>
      <h4>钢: </h4><div><h5>gāng, gàng: </h5><span>steel; hard, strong, tough</span></div>
    </div>
    <div>
      <h4>钣: </h4><div><h5>bǎn: </h5><span>plate</span></div>
    </div>
    <div>
      <h4>钥: </h4><div><h5>yuè, yào: </h5><span>key; lock</span></div>
    </div>
    <div>
      <h4>钦: </h4><div><h5>qīn: </h5><span>respect, admire; respectful</span></div>
    </div>
    <div>
      <h4>钧: </h4><div><h5>jūn: </h5><span>unit of measure equivalent to thirty catties</span></div>
    </div>
    <div>
      <h4>钨: </h4><div><h5>wū: </h5><span>tungsten, wolfram</span></div>
    </div>
    <div>
      <h4>钩: </h4><div><h5>gōu: </h5><span>hook, barb; sickle; stroke with</span></div>
    </div>
    <div>
      <h4>钮: </h4><div><h5>niǔ: </h5><span>button, knob; surname</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>钰: </h4><div><h5>yù: </h5><span>rare treasure</span></div>
    </div>
    <div>
      <h4>钱: </h4><div><h5>qián: </h5><span>money, currency, coins</span></div>
    </div>
    <div>
      <h4>钲: </h4><div><h5>zhēng, zhèng: </h5>
      <span>kind of gong used in ancient times by troops on the march</span></div>
    </div>
    <div>
      <h4>钳: </h4><div><h5>qián: </h5><span>pincers, pliers, tongs; to compress</span></div>
    </div>
    <div>
      <h4>钵: </h4><div><h5>bō: </h5><span>earthenware basin; alms bowl</span></div>
    </div>
    <div>
      <h4>钻: </h4><div><h5>zuān, zuàn: </h5><span>drill, bore; pierce; diamond</span></div>
    </div>
    <div>
      <h4>钾: </h4><div><h5>jiǎ: </h5><span>potassium</span></div>
    </div>
    <div>
      <h4>钿: </h4><div><h5>diàn, tián: </h5><span>hairpin; gold inlaid work, filigree</span></div>
    </div>
    <div>
      <h4>铀: </h4><div><h5>yóu: </h5><span>uranium</span></div>
    </div>
    <div>
      <h4>铁: </h4><div><h5>tiě: </h5><span>iron; strong, solid, firm</span></div>
    </div>
    <div>
      <h4>铃: </h4><div><h5>líng: </h5><span>bell</span></div>
    </div>
    <div>
      <h4>铄: </h4><div><h5>shuò: </h5><span>melt, smelt; shine</span></div>
    </div>
    <div>
      <h4>铅: </h4><div><h5>qiān, yán: </h5><span>lead</span></div>
    </div>
    <div>
      <h4>铎: </h4><div><h5>duó: </h5><span>bell; surname</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>铐: </h4><div><h5>kào: </h5><span>shackles, manacles</span></div>
    </div>
    <div>
      <h4>铛: </h4><div><h5>dāng, chēng: </h5><span>frying pan; warming vessel</span></div>
    </div>
    <div>
      <h4>铜: </h4><div><h5>tóng: </h5><span>copper, brass, bronze</span></div>
    </div>
    <div>
      <h4>铝: </h4><div><h5>lǚ: </h5><span>aluminum</span></div>
    </div>
    <div>
      <h4>铠: </h4><div><h5>kǎi: </h5><span>armor, chain mail</span></div>
    </div>
    <div>
      <h4>铨: </h4><div><h5>quán: </h5><span>weigh, measure; select officials</span></div>
    </div>
    <div>
      <h4>铬: </h4><div><h5>gè: </h5><span>chromium</span></div>
    </div>
    <div>
      <h4>铭: </h4><div><h5>míng: </h5><span>inscribe, engrave</span></div>
    </div>
    <div>
      <h4>铮: </h4><div><h5>zhēng: </h5><span>clanging sound; small gong</span></div>
    </div>
    <div>
      <h4>铲: </h4><div><h5>chǎn: </h5><span>spade, shovel, trowel, scoop</span></div>
    </div>
    <div>
      <h4>铳: </h4><div><h5>chòng: </h5><span>ancient weapon, blunderbuss</span></div>
    </div>
    <div>
      <h4>银: </h4><div><h5>yín: </h5><span>silver; cash, money, wealth</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>铸: </h4><div><h5>zhù: </h5><span>melt, cast; coin, mint</span></div>
    </div>
    <div>
      <h4>铺: </h4><div><h5>pū, pù: </h5><span>shop, store; place sleep, bed</span></div>
    </div>
    <div>
      <h4>链: </h4><div><h5>liàn: </h5><span>chain, wire, cable; chain, shack</span></div>
    </div>
    <div>
      <h4>铿: </h4><div><h5>kēng: </h5><span>strike, beat, stroke; jingling</span></div>
    </div>
    <div>
      <h4>销: </h4><div><h5>xiāo: </h5><span>melt, fuse; market, sell</span></div>
    </div>
    <div>
      <h4>锁: </h4><div><h5>suǒ: </h5><span>lock, padlock; shackles, chains</span></div>
    </div>
    <div>
      <h4>锂: </h4><div><h5>lǐ: </h5><span>lithium</span></div>
    </div>
    <div>
      <h4>锄: </h4><div><h5>chú: </h5><span>hoe; eradicate</span></div>
    </div>
    <div>
      <h4>锅: </h4><div><h5>guō: </h5><span>cooking-pot, saucepan</span></div>
    </div>
    <div>
      <h4>锈: </h4><div><h5>xiù: </h5><span>rust, corrode</span></div>
    </div>
    <div>
      <h4>锉: </h4><div><h5>cuò: </h5><span>carpenter's file, file smooth</span></div>
    </div>
    <div>
      <h4>锋: </h4><div><h5>fēng: </h5><span>point of spear, sharp point</span></div>
    </div>
    <div>
      <h4>锌: </h4><div><h5>xīn: </h5><span>zinc</span></div>
    </div>
    <div>
      <h4>锐: </h4><div><h5>ruì: </h5><span>sharp, keen, acute, pointed</span></div>
    </div>
    <div>
      <h4>锒: </h4><div><h5>láng: </h5><span>lock</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>错: </h4><div><h5>cuò: </h5><span>error, blunder, mistake; wrong</span></div>
    </div>
    <div>
      <h4>锚: </h4><div><h5>máo: </h5><span>anchor</span></div>
    </div>
    <div>
      <h4>锟: </h4><div><h5>kūn: </h5><span>ancient treasured sword</span></div>
    </div>
    <div>
      <h4>锡: </h4><div><h5>xī: </h5><span>tin, stannum; bestow, confer</span></div>
    </div>
    <div>
      <h4>锢: </h4><div><h5>gù: </h5><span>run metal into cracks; confine</span></div>
    </div>
    <div>
      <h4>锣: </h4><div><h5>luó: </h5><span>gong</span></div>
    </div>
    <div>
      <h4>锤: </h4><div><h5>chuí: </h5><span>balance weight on scale; hammer</span></div>
    </div>
    <div>
      <h4>锥: </h4><div><h5>zhuī: </h5><span>gimlet, awl, drill, auger; bore</span></div>
    </div>
    <div>
      <h4>锦: </h4><div><h5>jǐn: </h5><span>brocade, tapestry; embroidered</span></div>
    </div>
    <div>
      <h4>锭: </h4><div><h5>dìng: </h5><span>spindle, slab, cake, tablet</span></div>
    </div>
    <div>
      <h4>键: </h4><div><h5>jiàn: </h5><span>door bolt, lock bolt; key</span></div>
    </div>
    <div>
      <h4>锯: </h4><div><h5>jù: </h5><span>a saw; to saw; amputate</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>锵: </h4><div><h5>qiāng: </h5><span>tinkle, clang, jingle</span></div>
    </div>
    <div>
      <h4>锺: </h4><div><h5>zhōng: </h5><span>cup, glass, goblet; surname</span></div>
    </div>
    <div>
      <h4>锻: </h4><div><h5>duàn: </h5><span>forge metal; temper, refine</span></div>
    </div>
    <div>
      <h4>锾: </h4><div><h5>huán: </h5><span>measure; money, coins</span></div>
    </div>
    <div>
      <h4>镀: </h4><div><h5>dù: </h5><span>plate, coat, gild</span></div>
    </div>
    <div>
      <h4>镁: </h4><div><h5>měi: </h5><span>magnesium</span></div>
    </div>
    <div>
      <h4>镂: </h4><div><h5>lòu: </h5><span>carve, inlay, engrave, tattoo</span></div>
    </div>
    <h3>画10</h3>
    <div>
      <h4>镇: </h4><div><h5>zhèn: </h5><span>town, market place; suppress</span></div>
    </div>
    <div>
      <h4>镉: </h4><div><h5>gé, lì: </h5><span>cadmium</span></div>
    </div>
    <div>
      <h4>镍: </h4><div><h5>niè: </h5><span>nickel</span></div>
    </div>
    <div>
      <h4>镑: </h4><div><h5>bàng: </h5><span>pound sterling</span></div>
    </div>
    <div>
      <h4>镕: </h4><div><h5>róng: </h5><span>fuse, melt, smelt; mold</span></div>
    </div>
    <h3>画11-17</h3>
    <div>
      <h4>镖: </h4><div><h5>biāo: </h5><span>dart, spear, harpoon; escort</span></div>
    </div>
    <div>
      <h4>镛: </h4><div><h5>yōng: </h5><span>large bell used as musical instrument</span></div>
    </div>
    <div>
      <h4>镜: </h4><div><h5>jìng: </h5><span>mirror; lens; glass; glasses</span></div>
    </div>
    <div>
      <h4>镰: </h4><div><h5>lián: </h5><span>sickle</span></div>
    </div>
    <div>
      <h4>镳: </h4><div><h5>biāo: </h5><span>bit, bridle; ride</span></div>
    </div>
    <div>
      <h4>镶: </h4><div><h5>xiāng: </h5><span>insert, inlay, set, mount; fill</span></div>
    </div>
    <h1>154: 鸟</h1>
    <div>
      <h4>鸟: </h4><div><h5>niǎo: </h5><span>bird; KangXi radical 196</span></div>
    </div>
    <h3>画2-4</h3>
    <div>
      <h4>鸠: </h4><div><h5>jiū: </h5><span>pigeon; collect, assemble</span></div>
    </div>
    <div>
      <h4>鸡: </h4><div><h5>jī: </h5><span>chicken</span></div>
    </div>
    <div>
      <h4>鸢: </h4><div><h5>yuān: </h5><span>kite; Milvus species (various)</span></div>
    </div>
    <div>
      <h4>鸣: </h4><div><h5>míng: </h5><span>cry of bird or animal; make sound</span></div>
    </div>
    <div>
      <h4>鸥: </h4><div><h5>ōu: </h5><span>seagull, tern; Larus species (various)</span></div>
    </div>
    <div>
      <h4>鸦: </h4><div><h5>yā: </h5><span>crow; Corvus species (various)</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>鸪: </h4><div><h5>gū: </h5><span>species of Taiwan pigeon</span></div>
    </div>
    <div>
      <h4>鸭: </h4><div><h5>yā: </h5><span>duck; Anas species (various)</span></div>
    </div>
    <div>
      <h4>鸯: </h4><div><h5>yāng: </h5><span>female mandarin duck (Aix galericulata)</span></div>
    </div>
    <div>
      <h4>鸲: </h4><div><h5>qú: </h5><span>mynah; Erithacus species (various)</span></div>
    </div>
    <div>
      <h4>鸳: </h4><div><h5>yuān: </h5><span>male mandarin duck (Aix galericulata)</span></div>
    </div>
    <div>
      <h4>鸵: </h4><div><h5>tuó: </h5><span>ostrich</span></div>
    </div>
    <div>
      <h4>鸶: </h4><div><h5>sī: </h5><span>the eastern egret</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>鸽: </h4><div><h5>gē: </h5><span>pigeon, dove; Columba species (various)</span></div>
    </div>
    <div>
      <h4>鸾: </h4><div><h5>luán: </h5><span>fabulous bird</span></div>
    </div>
    <div>
      <h4>鸿: </h4><div><h5>hóng: </h5><span>species of wild swan; vast</span></div>
    </div>
    </section>
    <section>
    <h3>画7</h3>
    <div>
      <h4>鹂: </h4><div><h5>lí: </h5><span>Chinese oriole; Oriolus oriolus</span></div>
    </div>
    <div>
      <h4>鹃: </h4><div><h5>juān: </h5><span>cuckoo</span></div>
    </div>
    <div>
      <h4>鹄: </h4><div><h5>hú: </h5><span>target</span></div>
    </div>
    <div>
      <h4>鹅: </h4><div><h5>é: </h5><span>goose</span></div>
    </div>
    <h3>画8-11</h3>
    <div>
      <h4>鹉: </h4><div><h5>wǔ: </h5><span>species of parrot</span></div>
    </div>
    <div>
      <h4>鹊: </h4><div><h5>què: </h5><span>magpie; Pica species (various)</span></div>
    </div>
    <div>
      <h4>鹏: </h4><div><h5>péng: </h5><span>fabulous bird of enormous size</span></div>
    </div>
    <div>
      <h4>鹤: </h4><div><h5>hè: </h5><span>crane; Grus species (various)</span></div>
    </div>
    <div>
      <h4>鹦: </h4><div><h5>yīng: </h5><span>parrot</span></div>
    </div>
    <div>
      <h4>鹧: </h4><div><h5>zhè: </h5><span>partridge</span></div>
    </div>
    <h3>画12-13</h3>
    <div>
      <h4>鹫: </h4><div><h5>jiù: </h5><span>condor, vulture</span></div>
    </div>
    <div>
      <h4>鹬: </h4><div><h5>yù: </h5><span>snipe, kingfisher</span></div>
    </div>
    <div>
      <h4>鹭: </h4><div><h5>lù: </h5><span>heron, egret; Ardea species (various)</span></div>
    </div>
    <div>
      <h4>鹰: </h4><div><h5>yīng: </h5><span>falcon; Accipiter species (various)</span></div>
    </div>
    <h1>155: 龙</h1>
    <div>
      <h4>龙: </h4><div><h5>lóng: </h5><span>dragon; symbolic of emperor</span></div>
    </div>
    <div>
      <h4>笼: </h4><div><h5>lóng, lǒng: </h5><span>cage; cage-like basket</span></div>
    </div>
    <div>
      <h4>龚: </h4><div><h5>gōng: </h5><span>give, present; reverential</span></div>
    </div>
    <h1>156: 竹</h1>
    <div>
      <h4>竹: </h4><div><h5>zhú: </h5><span>bamboo; flute; KangXi radical 118</span></div>
    </div>
    <h3>画2-3</h3>
    <div>
      <h4>竺: </h4><div><h5>zhú, dǔ: </h5><span>India; bamboo; surname</span></div>
    </div>
    <div>
      <h4>竽: </h4><div><h5>yú: </h5><span>ancient woodwind instrument</span></div>
    </div>
    <div>
      <h4>竿: </h4><div><h5>gān: </h5><span>bamboo pole; penis</span></div>
    </div>
    <div>
      <h4>笃: </h4><div><h5>dǔ: </h5><span>deep, true, sincere, genuine</span></div>
    </div>
    <div>
      <h4>笈: </h4><div><h5>jí: </h5><span>bamboo box used carry books</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>笆: </h4><div><h5>bā: </h5><span>bamboo fence</span></div>
    </div>
    <div>
      <h4>笋: </h4><div><h5>sǔn: </h5><span>bamboo shoots</span></div>
    </div>
    <div>
      <h4>笑: </h4><div><h5>xiào: </h5><span>smile, laugh, giggle; snicker</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>笙: </h4><div><h5>shēng: </h5><span>small gourd-shaped musical instrument</span></div>
    </div>
    <div>
      <h4>笛: </h4><div><h5>dí: </h5><span>bamboo flute; whistle</span></div>
    </div>
    <div>
      <h4>笠: </h4><div><h5>lì: </h5><span>bamboo hat; bamboo covering</span></div>
    </div>
    <div>
      <h4>符: </h4><div><h5>fú: </h5><span>i.d. tag, tally, symbol, charm</span></div>
    </div>
    <div>
      <h4>笨: </h4><div><h5>bèn: </h5><span>foolish, stupid, dull; awkward</span></div>
    </div>
    <div>
      <h4>第: </h4><div><h5>dì: </h5><span>sequence, number; grade, degree</span></div>
    </div>
    <div>
      <h4>笺: </h4><div><h5>jiān: </h5><span>note, memo; stationery; comments</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>等: </h4><div><h5>děng: </h5><span>rank, grade; wait; equal; 'etc.'</span></div>
    </div>
    <div>
      <h4>筊: </h4><div><h5>jiǎo, jiào: </h5><span>bamboo rope; bamboo object used</span></div>
    </div>
    <div>
      <h4>筋: </h4><div><h5>jīn: </h5><span>muscles; tendons</span></div>
    </div>
    <div>
      <h4>筌: </h4><div><h5>quán: </h5><span>bamboo fish trap</span></div>
    </div>
    <div>
      <h4>筏: </h4><div><h5>fá: </h5><span>raft</span></div>
    </div>
    <div>
      <h4>筐: </h4><div><h5>kuāng: </h5><span>bamboo basket or chest</span></div>
    </div>
    <div>
      <h4>筑: </h4><div><h5>zhù, zhú: </h5><span>ancient lute; build</span></div>
    </div>
    <div>
      <h4>筒: </h4><div><h5>tǒng: </h5><span>thick piece of bamboo; pipe</span></div>
    </div>
    <div>
      <h4>答: </h4><div><h5>dá, dā: </h5><span>answer, reply; return; assent to</span></div>
    </div>
    <div>
      <h4>策: </h4><div><h5>cè: </h5><span>scheme, plan; to whip; urge</span></div>
    </div>
    <div>
      <h4>筛: </h4><div><h5>shāi: </h5><span>sieve, filter, screen; sift</span></div>
    </div>
    <div>
      <h4>筝: </h4><div><h5>zhēng: </h5><span>stringed musical instrument; kite</span></div>
    </div>
    <div>
      <h4>筵: </h4><div><h5>yán: </h5><span>bamboo mat; feast, banquet</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>筠: </h4><div><h5>yún, jūn: </h5><span>bamboo skin; bamboo</span></div>
    </div>
    <div>
      <h4>筱: </h4><div><h5>xiǎo: </h5><span>dwarf bamboo; diminutive in person's name</span></div>
    </div>
    <div>
      <h4>筷: </h4><div><h5>kuài: </h5><span>chopsticks</span></div>
    </div>
    <div>
      <h4>筹: </h4><div><h5>chóu: </h5><span>chip, tally, token; raise money</span></div>
    </div>
    <div>
      <h4>签: </h4><div><h5>qiān: </h5><span>sign, endorse; slip of paper</span></div>
    </div>
    <div>
      <h4>简: </h4><div><h5>jiǎn: </h5><span>simple, terse, succinct, a letter</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>箍: </h4><div><h5>gū: </h5><span>hoop; bind, surround</span></div>
    </div>
    <div>
      <h4>箔: </h4><div><h5>bó: </h5><span>reed screen; frame for growing silkworms</span></div>
    </div>
    <div>
      <h4>箕: </h4><div><h5>jī: </h5><span>sieve; dust pan, garbage bag</span></div>
    </div>
    <div>
      <h4>算: </h4><div><h5>suàn: </h5><span>count, calculate, figure; plan</span></div>
    </div>
    <div>
      <h4>箝: </h4><div><h5>qián: </h5><span>tweezers, pliers, tongs, pincers</span></div>
    </div>
    <div>
      <h4>管: </h4><div><h5>guǎn: </h5><span>pipe, tube, duct; woodwind music</span></div>
    </div>
    <div>
      <h4>箩: </h4><div><h5>luó: </h5><span>bamboo basket</span></div>
    </div>
    <div>
      <h4>箫: </h4><div><h5>xiāo: </h5><span>bamboo flute</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>箭: </h4><div><h5>jiàn: </h5><span>arrow; type of bamboo</span></div>
    </div>
    <div>
      <h4>箱: </h4><div><h5>xiāng: </h5><span>case, box, chest, trunk</span></div>
    </div>
    <div>
      <h4>箴: </h4><div><h5>zhēn: </h5><span>needle, probe; admon</span></div>
    </div>
    <div>
      <h4>篆: </h4><div><h5>zhuàn: </h5><span>seal script; seal, official stamp</span></div>
    </div>
    <div>
      <h4>篇: </h4><div><h5>piān: </h5><span>chapter, section, essay, article</span></div>
    </div>
    <div>
      <h4>篑: </h4><div><h5>kuì: </h5><span>a bamboo basket for carrying earth</span></div>
    </div>
    <div>
      <h4>篓: </h4><div><h5>lǒu: </h5><span>bamboo basket</span></div>
    </div>
    <h3>画10-11</h3>
    <div>
      <h4>篠: </h4><div><h5>xiǎo: </h5><span>dwarf bamboo; diminutive in person's name</span></div>
    </div>
    <div>
      <h4>篡: </h4><div><h5>cuàn: </h5><span>usurp</span></div>
    </div>
    <div>
      <h4>篮: </h4><div><h5>lán: </h5><span>basket</span></div>
    </div>
    <div>
      <h4>篱: </h4><div><h5>lí: </h5><span>bamboo or wooden fence; hedge</span></div>
    </div>
    <div>
      <h4>篷: </h4><div><h5>péng: </h5><span>awning, covering; sail; boat</span></div>
    </div>
    <div>
      <h4>簇: </h4><div><h5>cù: </h5><span>swarm, crowd together, cluster</span></div>
    </div>
    <div>
      <h4>簧: </h4><div><h5>huáng: </h5><span>reed of woodwind instrument</span></div>
    </div>
    <h3>画13-14</h3>
    <div>
      <h4>簿: </h4><div><h5>bù, bó: </h5><span>register, account book, notebook</span></div>
    </div>
    <div>
      <h4>籁: </h4><div><h5>lài: </h5><span>bamboo flute; pipe; various sound</span></div>
    </div>
    <div>
      <h4>籍: </h4><div><h5>jí: </h5><span>record, register, list; census</span></div>
    </div>
    <h1>157: 米</h1>
    <div>
      <h4>米: </h4><div><h5>mǐ: </h5><span>hulled or husked uncooked rice</span></div>
    </div>
    <h3>画3-5</h3>
    <div>
      <h4>类: </h4><div><h5>lèi: </h5><span>class, group, kind, category</span></div>
    </div>
    <div>
      <h4>籽: </h4><div><h5>zǐ: </h5><span>seed, pip, pit, stone</span></div>
    </div>
    <div>
      <h4>粉: </h4><div><h5>fěn: </h5><span>powder, face powder; plaster</span></div>
    </div>
    <div>
      <h4>粒: </h4><div><h5>lì: </h5><span>grain; small particle</span></div>
    </div>
    <div>
      <h4>粗: </h4><div><h5>cū: </h5><span>rough, thick, course; rude</span></div>
    </div>
    <div>
      <h4>粘: </h4><div><h5>nián, zhān: </h5><span>viscous, mucous; glutinous</span></div>
    </div>
    <h3>画6-7</h3>
    <div>
      <h4>粟: </h4><div><h5>sù: </h5><span>unhusked millet; grain</span></div>
    </div>
    <div>
      <h4>粤: </h4><div><h5>yuè: </h5><span>Guangdong and Guangxi provinces; initial particle</span></div>
    </div>
    <div>
      <h4>粥: </h4><div><h5>zhōu, yù: </h5><span>rice gruel, congee</span></div>
    </div>
    <div>
      <h4>粪: </h4><div><h5>fèn: </h5><span>manure, dung, night soil</span></div>
    </div>
    <div>
      <h4>粮: </h4><div><h5>liáng: </h5><span>food, grain, provisions</span></div>
    </div>
    <div>
      <h4>粱: </h4><div><h5>liáng: </h5><span>better varieties of millet</span></div>
    </div>
    <h3>画8-9</h3>
    <div>
      <h4>粹: </h4><div><h5>cuì: </h5><span>pure; unadulterated; select</span></div>
    </div>
    <div>
      <h4>粼: </h4><div><h5>lín: </h5><span>propre (comme de l'eau)</span></div>
    </div>
    <div>
      <h4>粽: </h4><div><h5>zòng: </h5><span>dumpling made of glutinous rice</span></div>
    </div>
    <div>
      <h4>精: </h4><div><h5>jīng: </h5><span>essence; semen; spirit</span></div>
    </div>
    <div>
      <h4>糊: </h4><div><h5>hū, hú, hù: </h5><span>paste, stick on with paste</span></div>
    </div>
    <h3>画10</h3>
    <div>
      <h4>糕: </h4><div><h5>gāo: </h5><span>cakes, pastry</span></div>
    </div>
    <div>
      <h4>糖: </h4><div><h5>táng: </h5><span>sugar; candy; sweets</span></div>
    </div>
    <div>
      <h4>糗: </h4><div><h5>qiǔ: </h5><span>parched wheat or rice; broken grain</span></div>
    </div>
    <div>
      <h4>糙: </h4><div><h5>cāo: </h5><span>coarse, harsh, rough, unpolished rice</span></div>
    </div>
    <h3>画11-14</h3>
    <div>
      <h4>糜: </h4><div><h5>mí, méi: </h5><span>rice gruel, congee; mashed</span></div>
    </div>
    <div>
      <h4>糟: </h4><div><h5>zāo: </h5><span>sediment, dregs; pickle</span></div>
    </div>
    <div>
      <h4>糠: </h4><div><h5>kāng: </h5><span>chaff, bran, husks; poor</span></div>
    </div>
    <div>
      <h4>糯: </h4><div><h5>nuò: </h5><span>glutinous rice; glutinous, sticky</span></div>
    </div>
    <h1>158: 糸</h1>
    <div>
      <h4>糸: </h4><div><h5>mì, sī: </h5><span>silk; KangXi radical 120</span></div>
    </div>
    <h3>画1-5</h3>
    <div>
      <h4>系: </h4><div><h5>xì, jì: </h5><span>system; line, link, connection</span></div>
    </div>
    <div>
      <h4>紊: </h4><div><h5>wěn: </h5><span>confused, disorder</span></div>
    </div>
    <div>
      <h4>素: </h4><div><h5>sù: </h5><span>white (silk); plain; vegetarian; formerly; normally</span></div>
    </div>
    <div>
      <h4>索: </h4><div><h5>suǒ: </h5>
      <span>
        large rope, cable; rules, laws; to demand, to exact; to search,
        inquire; isolated
      </span></div>
    </div>
    <div>
      <h4>紧: </h4><div><h5>jǐn: </h5><span>tense, tight, taut; firm, secure</span></div>
    </div>
    <div>
      <h4>累: </h4><div><h5>léi, lěi, lèi: </h5><span>tired; implicate, involve; bother</span></div>
    </div>
    <h3>画6-14</h3>
    <div>
      <h4>紫: </h4><div><h5>zǐ: </h5><span>purple, violet; amethyst; surname</span></div>
    </div>
    <div>
      <h4>絮: </h4><div><h5>xù: </h5><span>waste cotton, raw silk or cotton</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>繁: </h4><div><h5>fán, pó: </h5><span>complicated, complex, difficult</span></div>
    </div>
    <div>
      <h4>纂: </h4><div><h5>zuǎn: </h5><span>edit, compile; topknot, chignon</span></div>
    </div>
    <h1>159: 缶</h1>
    <div>
      <h4>缸: </h4><div><h5>gāng: </h5><span>earthen jug, crock, cistern</span></div>
    </div>
    <div>
      <h4>缺: </h4><div><h5>quē: </h5><span>be short of, lack; gap, deficit</span></div>
    </div>
    <div>
      <h4>罄: </h4><div><h5>qìng: </h5><span>exhaust, run out, use up; empty</span></div>
    </div>
    <div>
      <h4>罐: </h4><div><h5>guàn: </h5><span>jar, jug, pitcher, pot</span></div>
    </div>
    <h1>160: 羊</h1>
    <div>
      <h4>羊: </h4><div><h5>yáng, xiáng: </h5><span>sheep, goat; KangXi radical 123</span></div>
    </div>
    <div>
      <h4>羞: </h4><div><h5>xiū: </h5><span>disgrace, shame; ashamed; shy</span></div>
    </div>
    <div>
      <h4>羚: </h4><div><h5>líng: </h5><span>species of antelope</span></div>
    </div>
    <div>
      <h4>群: </h4><div><h5>qún: </h5><span>(same as U+7FA3 羣) group, crowd, multitude, mob</span></div>
    </div>
    <div>
      <h4>羯: </h4><div><h5>jié: </h5><span>wether, castrated ram; deer skin</span></div>
    </div>
    <div>
      <h4>羲: </h4><div><h5>xī: </h5><span>ancient emperor; breath, vapor</span></div>
    </div>
    <div>
      <h4>羹: </h4><div><h5>gēng: </h5><span>soup, broth</span></div>
    </div>
    <h1>161: 羽</h1>
    <div>
      <h4>羽: </h4><div><h5>yǔ: </h5><span>feather, plume; wings; rad. 124</span></div>
    </div>
    <h3>画3-5</h3>
    <div>
      <h4>羿: </h4><div><h5>yì: </h5><span>legendary archer</span></div>
    </div>
    <div>
      <h4>翁: </h4><div><h5>wēng: </h5><span>old man; father, father-in-law</span></div>
    </div>
    <div>
      <h4>翅: </h4><div><h5>chì: </h5><span>wings; fin</span></div>
    </div>
    <div>
      <h4>翊: </h4><div><h5>yì: </h5><span>flying; assist, help; respect</span></div>
    </div>
    <div>
      <h4>翌: </h4><div><h5>yì: </h5><span>bright; daybreak, dawn; the next day</span></div>
    </div>
    <div>
      <h4>翎: </h4><div><h5>líng: </h5><span>feather; plume; wing</span></div>
    </div>
    <h3>画6-9</h3>
    <div>
      <h4>翔: </h4><div><h5>xiáng: </h5><span>soar, glide, hover; detailed</span></div>
    </div>
    <div>
      <h4>翘: </h4><div><h5>qiáo, qiào: </h5><span>turn up, lift, elevate, raise</span></div>
    </div>
    <div>
      <h4>翟: </h4><div><h5>dí, zhái: </h5><span>surname; a kind of pheasant; plumes</span></div>
    </div>
    <div>
      <h4>翠: </h4><div><h5>cuì: </h5><span>color green; kingfisher</span></div>
    </div>
    <div>
      <h4>翡: </h4><div><h5>fěi: </h5><span>kingfisher; emerald, jade</span></div>
    </div>
    <div>
      <h4>翩: </h4><div><h5>piān: </h5><span>fly, flutter</span></div>
    </div>
    <h3>画10-14</h3>
    <div>
      <h4>翰: </h4><div><h5>hàn: </h5><span>feather, writing brush, pen, pencil</span></div>
    </div>
    <div>
      <h4>翱: </h4><div><h5>áo: </h5><span>soar, roam</span></div>
    </div>
    <div>
      <h4>翳: </h4><div><h5>yì: </h5><span>shade, screen; to hide, screen</span></div>
    </div>
    <div>
      <h4>翼: </h4><div><h5>yì: </h5><span>wings; fins on fish; shelter</span></div>
    </div>
    <div>
      <h4>翻: </h4><div><h5>fān: </h5><span>flip over, upset, capsize</span></div>
    </div>
    <div>
      <h4>耀: </h4><div><h5>yào: </h5><span>shine, sparkle, dazzle; glory</span></div>
    </div>
    <h1>162: 而</h1>
    <div>
      <h4>而: </h4><div><h5>ér: </h5><span>and; and then; and yet; but</span></div>
    </div>
    <div>
      <h4>耍: </h4><div><h5>shuǎ: </h5><span>frolic, play, amuse, play with</span></div>
    </div>
    <div>
      <h4>耐: </h4><div><h5>nài: </h5><span>endure, bear; resist; patient</span></div>
    </div>
    <h1>163: 耒</h1>
    <div>
      <h4>耕: </h4><div><h5>gēng: </h5><span>plow, cultivate</span></div>
    </div>
    <div>
      <h4>耗: </h4><div><h5>hào: </h5><span>consume, use up; waste, squander</span></div>
    </div>
    <div>
      <h4>耘: </h4><div><h5>yún: </h5><span>weed</span></div>
    </div>
    <div>
      <h4>耙: </h4><div><h5>bà, pá: </h5><span>rake</span></div>
    </div>
    <div>
      <h4>耨: </h4><div><h5>nòu: </h5><span>hoe, rake; weed</span></div>
    </div>
    <h1>164: 耳</h1>
    <div>
      <h4>耳: </h4><div><h5>ěr: </h5><span>ear; merely, only; handle</span></div>
    </div>
    <h3>画2-4</h3>
    <div>
      <h4>耶: </h4><div><h5>yé, yē: </h5><span>used in transliteration</span></div>
    </div>
    <div>
      <h4>耸: </h4><div><h5>sǒng: </h5><span>urge on; rise up; stir, excite</span></div>
    </div>
    <div>
      <h4>耻: </h4><div><h5>chǐ: </h5><span>shame, humiliation; ashamed</span></div>
    </div>
    <div>
      <h4>耽: </h4><div><h5>dān: </h5><span>indulge in; be negligent</span></div>
    </div>
    <div>
      <h4>耿: </h4><div><h5>gěng: </h5><span>bright, shining; have guts</span></div>
    </div>
    <div>
      <h4>聂: </h4><div><h5>niè: </h5><span>whisper; surname</span></div>
    </div>
    <h3>画5-8</h3>
    <div>
      <h4>聆: </h4><div><h5>líng: </h5><span>listen, hear</span></div>
    </div>
    <div>
      <h4>聊: </h4><div><h5>liáo: </h5><span>somewhat, slightly, at least</span></div>
    </div>
    <div>
      <h4>聋: </h4><div><h5>lóng: </h5><span>deaf</span></div>
    </div>
    <div>
      <h4>职: </h4><div><h5>zhí: </h5><span>duty, profession; office, post</span></div>
    </div>
    <div>
      <h4>聒: </h4><div><h5>guō: </h5><span>clamor, din, hubbub</span></div>
    </div>
    <div>
      <h4>联: </h4><div><h5>lián: </h5><span>connect, join; associate, ally</span></div>
    </div>
    <div>
      <h4>聘: </h4><div><h5>pìn: </h5><span>engage, employ; betroth</span></div>
    </div>
    <div>
      <h4>聚: </h4><div><h5>jù: </h5><span>assemble, meet together, collect</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>聪: </h4><div><h5>cōng: </h5><span>intelligent, clever, bright</span></div>
    </div>
    <h1>165: 聿</h1>
    <div>
      <h4>聿: </h4><div><h5>yù: </h5><span>writing brush, pencil; thereupon</span></div>
    </div>
    <div>
      <h4>肃: </h4><div><h5>sù: </h5><span>pay respects; reverently</span></div>
    </div>
    <div>
      <h4>肄: </h4><div><h5>yì: </h5><span>learn, practice, study; toil</span></div>
    </div>
    <div>
      <h4>肆: </h4><div><h5>sì: </h5>
      <span>
        indulge; excess; numeral four; particle meaning now, therefore; shop
      </span></div>
    </div>
    <div>
      <h4>肇: </h4><div><h5>zhào: </h5><span>begin, commence, originate</span></div>
    </div>
    <h1>166: 肉</h1>
    <div>
      <h4>肉: </h4><div><h5>ròu: </h5><span>flesh; meat; KangXi radical 130</span></div>
    </div>
    <div>
      <h4>腐: </h4><div><h5>fǔ: </h5><span>rot, decay, spoil; rotten</span></div>
    </div>
    <h1>167: 臣</h1>
    <div>
      <h4>臣: </h4><div><h5>chén: </h5><span>minister, statesman, official</span></div>
    </div>
    <div>
      <h4>臧: </h4><div><h5>zāng, zàng, cáng: </h5><span>good, right, generous; command</span></div>
    </div>
    <h1>168: 自</h1>
    <div>
      <h4>自: </h4><div><h5>zì: </h5><span>self, private, personal; from</span></div>
    </div>
    <div>
      <h4>臬: </h4><div><h5>niè: </h5><span>law, rule; door post</span></div>
    </div>
    <div>
      <h4>臭: </h4><div><h5>chòu, xiù: </h5><span>smell, stink, emit foul odor</span></div>
    </div>
    <h1>169: 至</h1>
    <div>
      <h4>至: </h4><div><h5>zhì: </h5><span>reach, arrive; extremely, very</span></div>
    </div>
    <div>
      <h4>致: </h4><div><h5>zhì: </h5><span>send, deliver, present; cause</span></div>
    </div>
    <div>
      <h4>臻: </h4><div><h5>zhēn: </h5><span>reach, arrive; utmost, superior</span></div>
    </div>
    <h1>170: 臼</h1>
    <div>
      <h4>臼: </h4><div><h5>jiù: </h5><span>mortar; bone joint socket</span></div>
    </div>
    <div>
      <h4>臾: </h4><div><h5>yú: </h5><span>moment, instant, short while</span></div>
    </div>
    <div>
      <h4>舀: </h4><div><h5>yǎo: </h5><span>dip, ladle; ladle</span></div>
    </div>
    <div>
      <h4>舅: </h4><div><h5>jiù: </h5><span>mother's brother, uncle</span></div>
    </div>
    <div>
      <h4>舆: </h4><div><h5>yú: </h5><span>cart, palanquin, sedan chair</span></div>
    </div>
    <h1>171: 舌</h1>
    <div>
      <h4>舌: </h4><div><h5>shé: </h5><span>tongue; clapper of bell; KangXi radical 135</span></div>
    </div>
    <div>
      <h4>舍: </h4><div><h5>shě, shè: </h5><span>house, dwelling; dwell, reside</span></div>
    </div>
    <div>
      <h4>舒: </h4><div><h5>shū: </h5><span>open up, unfold, stretch out; comfortable, easy</span></div>
    </div>
    <div>
      <h4>舔: </h4><div><h5>tiǎn: </h5><span>lick with tongue; taste</span></div>
    </div>
    <h1>172: 舟</h1>
    <div>
      <h4>舟: </h4><div><h5>zhōu: </h5><span>boat, ship; KangXi radical 137</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>航: </h4><div><h5>háng: </h5><span>sail; navigate; ship, boat</span></div>
    </div>
    <div>
      <h4>舫: </h4><div><h5>fǎng: </h5><span>fancy boat, yacht</span></div>
    </div>
    <div>
      <h4>般: </h4><div><h5>bān: </h5><span>sort, manner, kind, category</span></div>
    </div>
    <div>
      <h4>舰: </h4><div><h5>jiàn: </h5><span>warship</span></div>
    </div>
    <div>
      <h4>舱: </h4><div><h5>cāng: </h5><span>hold of ship; cabin</span></div>
    </div>
    <h3>画5-9</h3>
    <div>
      <h4>舵: </h4><div><h5>duò: </h5><span>rudder, helm</span></div>
    </div>
    <div>
      <h4>舶: </h4><div><h5>bó: </h5><span>large, ocean-going vessel</span></div>
    </div>
    <div>
      <h4>船: </h4><div><h5>chuán: </h5><span>ship, boat, vessel</span></div>
    </div>
    <div>
      <h4>艇: </h4><div><h5>tǐng: </h5><span>small boat, dugout, punt</span></div>
    </div>
    <div>
      <h4>艋: </h4><div><h5>měng: </h5><span>small boat</span></div>
    </div>
    <div>
      <h4>艘: </h4><div><h5>sōu: </h5><span>counter for ships, vessels</span></div>
    </div>
    <h1>173: 艮</h1>
    <div>
      <h4>良: </h4><div><h5>liáng: </h5><span>good, virtuous, respectable</span></div>
    </div>
    <div>
      <h4>艰: </h4><div><h5>jiān: </h5><span>difficult, hard; distressing</span></div>
    </div>
    <h1>174: 色</h1>
    <div>
      <h4>色: </h4><div><h5>sè: </h5>
      <span>
        color, tint, hue, shade; form, body; beauty, desire for beauty
      </span></div>
    </div>
    <div>
      <h4>艳: </h4><div><h5>yàn: </h5><span>beautiful, sexy, voluptuous</span></div>
    </div>
    <h1>175: 虍</h1>
    <div>
      <h4>虎: </h4><div><h5>hǔ: </h5><span>tiger; brave, fierce; surname</span></div>
    </div>
    <div>
      <h4>虏: </h4><div><h5>lǔ: </h5><span>to capture, imprison, seize; a prison</span></div>
    </div>
    <div>
      <h4>虐: </h4><div><h5>nüè: </h5><span>cruel, harsh, oppressive</span></div>
    </div>
    <div>
      <h4>虑: </h4><div><h5>lǜ: </h5><span>be concerned, worry about</span></div>
    </div>
    <div>
      <h4>虔: </h4><div><h5>qián: </h5><span>act with reverence; reverent</span></div>
    </div>
    <div>
      <h4>虚: </h4><div><h5>xū: </h5><span>false</span></div>
    </div>
    <div>
      <h4>虞: </h4><div><h5>yú: </h5><span>concerned about, anxious, worried</span></div>
    </div>
    <h1>176: 虫</h1>
    <div>
      <h4>虫: </h4><div><h5>chóng: </h5><span>insects, worms; KangXi radical 142</span></div>
    </div>
    <h3>画2-3</h3>
    <div>
      <h4>虱: </h4><div><h5>shī: </h5><span>louse; bug; parasite</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>虹: </h4><div><h5>hóng: </h5><span>rainbow</span></div>
    </div>
    <div>
      <h4>虽: </h4><div><h5>suī: </h5><span>although, even if</span></div>
    </div>
    <div>
      <h4>虾: </h4><div><h5>xiā, hā: </h5><span>shrimp, prawn</span></div>
    </div>
    <div>
      <h4>蚀: </h4><div><h5>shí: </h5><span>nibble away; erode; eclipse</span></div>
    </div>
    <div>
      <h4>蚁: </h4><div><h5>yǐ: </h5><span>ants</span></div>
    </div>
    <div>
      <h4>蚂: </h4><div><h5>mǎ, mā, mà: </h5><span>ant; leech</span></div>
    </div>
    <div>
      <h4>蚤: </h4><div><h5>zǎo: </h5><span>flea; louse</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>蚊: </h4><div><h5>wén: </h5><span>mosquito; gnat</span></div>
    </div>
    <div>
      <h4>蚌: </h4><div><h5>bàng, bèng: </h5><span>oysters, mussels; mother-of-pearl</span></div>
    </div>
    <div>
      <h4>蚓: </h4><div><h5>yǐn: </h5><span>earthworm</span></div>
    </div>
    <div>
      <h4>蚕: </h4><div><h5>cán: </h5><span>silkworms</span></div>
    </div>
    <div>
      <h4>蚜: </h4><div><h5>yá: </h5><span>plant louse, aphids</span></div>
    </div>
    <div>
      <h4>蚣: </h4><div><h5>gōng, zhōng: </h5><span>centipede</span></div>
    </div>
    <div>
      <h4>蚪: </h4><div><h5>dǒu: </h5><span>tadpole</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>蚯: </h4><div><h5>qiū: </h5><span>earthworm</span></div>
    </div>
    <div>
      <h4>蚱: </h4><div><h5>zhà: </h5><span>grasshopper; (edible) locust; cicada</span></div>
    </div>
    <div>
      <h4>蚵: </h4><div><h5>kē: </h5><span>oyster</span></div>
    </div>
    <div>
      <h4>蛀: </h4><div><h5>zhù: </h5><span>insects that eat books, clothes</span></div>
    </div>
    <div>
      <h4>蛆: </h4><div><h5>qū: </h5><span>maggots</span></div>
    </div>
    <div>
      <h4>蛇: </h4><div><h5>shé, yí: </h5><span>snake</span></div>
    </div>
    <div>
      <h4>蛊: </h4><div><h5>gǔ: </h5><span>poison; venom; harm; bewitch</span></div>
    </div>
    <div>
      <h4>蛋: </h4><div><h5>dàn: </h5><span>eggs; term of abuse</span></div>
    </div>
    <div>
      <h4>蛎: </h4><div><h5>lì: </h5><span>oyster</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>蛔: </h4><div><h5>huí: </h5><span>tapeworm</span></div>
    </div>
    <div>
      <h4>蛙: </h4><div><h5>wā: </h5><span>frog</span></div>
    </div>
    <div>
      <h4>蛛: </h4><div><h5>zhū: </h5><span>spider</span></div>
    </div>
    <div>
      <h4>蛟: </h4><div><h5>jiāo: </h5><span>scaly dragon with four legs</span></div>
    </div>
    <div>
      <h4>蛤: </h4><div><h5>gé, há: </h5><span>clam</span></div>
    </div>
    <div>
      <h4>蛭: </h4><div><h5>zhì: </h5><span>leech</span></div>
    </div>
    <div>
      <h4>蛮: </h4><div><h5>mán: </h5><span>barbarians; barbarous, savage</span></div>
    </div>
    <div>
      <h4>蛰: </h4><div><h5>zhé: </h5><span>to hibernate</span></div>
    </div>
    <div>
      <h4>蜒: </h4><div><h5>yán: </h5><span>millipede</span></div>
    </div>
    <div>
      <h4>蜓: </h4><div><h5>tíng: </h5><span>dragonfly</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>蛹: </h4><div><h5>yǒng: </h5><span>chrysalis, larva</span></div>
    </div>
    <div>
      <h4>蛾: </h4><div><h5>é, yǐ: </h5><span>moth</span></div>
    </div>
    <div>
      <h4>蜀: </h4><div><h5>shǔ: </h5><span>name of an ancient state</span></div>
    </div>
    <div>
      <h4>蜂: </h4><div><h5>fēng: </h5><span>bee, wasp, hornet</span></div>
    </div>
    <div>
      <h4>蜃: </h4><div><h5>shèn: </h5>
      <span>
        marine monster which can change its shape; water spouts; clams
      </span></div>
    </div>
    <div>
      <h4>蜈: </h4><div><h5>wú: </h5><span>centipede</span></div>
    </div>
    <div>
      <h4>蜉: </h4><div><h5>fú: </h5><span>mayfly; kind of large insect</span></div>
    </div>
    <div>
      <h4>蜍: </h4><div><h5>chú: </h5><span>toad</span></div>
    </div>
    <div>
      <h4>蜕: </h4><div><h5>tuì: </h5><span>molt</span></div>
    </div>
    <div>
      <h4>蜗: </h4><div><h5>wō: </h5><span>a snail, Eulota callizoma</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>蜘: </h4><div><h5>zhī: </h5><span>spider</span></div>
    </div>
    <div>
      <h4>蜜: </h4><div><h5>mì: </h5><span>honey; sweet; nectar</span></div>
    </div>
    <div>
      <h4>蜡: </h4><div><h5>là: </h5>
      <span>
        wax; candle; waxy, glazed; maggot; as a non-simplified form sometimes
        used as an equivalent to U+410D (?), meaning imperial harvest
      </span></div>
    </div>
    <div>
      <h4>蜢: </h4><div><h5>měng: </h5><span>grasshopper</span></div>
    </div>
    <div>
      <h4>蜥: </h4><div><h5>xī: </h5><span>lizard</span></div>
    </div>
    <div>
      <h4>蜴: </h4><div><h5>yì: </h5><span>lizard</span></div>
    </div>
    <div>
      <h4>蜻: </h4><div><h5>qīng: </h5><span>dragonfly</span></div>
    </div>
    <div>
      <h4>蜿: </h4><div><h5>wān: </h5><span>creep, crawl</span></div>
    </div>
    <div>
      <h4>蝇: </h4><div><h5>yíng: </h5><span>flies</span></div>
    </div>
    <div>
      <h4>蝉: </h4><div><h5>chán: </h5><span>cicada; continuous</span></div>
    </div>
    <div>
      <h4>螂: </h4><div><h5>láng: </h5><span>mantis, dung beetle</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>蝌: </h4><div><h5>kē: </h5><span>tadpole</span></div>
    </div>
    <div>
      <h4>蝎: </h4><div><h5>xiē: </h5><span>scorpion</span></div>
    </div>
    <div>
      <h4>蝗: </h4><div><h5>huáng: </h5><span>kind of locust</span></div>
    </div>
    <div>
      <h4>蝙: </h4><div><h5>biān: </h5><span>bat</span></div>
    </div>
    <div>
      <h4>蝠: </h4><div><h5>fú: </h5><span>kind of bat</span></div>
    </div>
    <div>
      <h4>蝣: </h4><div><h5>yóu: </h5><span>mayfly, emphemera strigata</span></div>
    </div>
    <div>
      <h4>蝴: </h4><div><h5>hú: </h5><span>butterfly</span></div>
    </div>
    <div>
      <h4>蝶: </h4><div><h5>dié: </h5><span>butterfly</span></div>
    </div>
    <h3>画10</h3>
    <div>
      <h4>螃: </h4><div><h5>páng: </h5><span>crab</span></div>
    </div>
    <div>
      <h4>融: </h4><div><h5>róng: </h5><span>melt, fuse; blend, harmonize</span></div>
    </div>
    <div>
      <h4>蟆: </h4><div><h5>má, há: </h5><span>frog, toad</span></div>
    </div>
    <div>
      <h4>蟒: </h4><div><h5>mǎng, měng: </h5><span>python, boa constrictor</span></div>
    </div>
    <h3>画11</h3>
    <div>
      <h4>螫: </h4><div><h5>shì, zhē: </h5><span>poison; sting; poisonous insect</span></div>
    </div>
    <div>
      <h4>螳: </h4><div><h5>táng: </h5><span>mantis</span></div>
    </div>
    <div>
      <h4>螺: </h4><div><h5>luó: </h5><span>spiral shell; conch; spiral</span></div>
    </div>
    <div>
      <h4>蟀: </h4><div><h5>shuài: </h5><span>cricket</span></div>
    </div>
    <div>
      <h4>蟋: </h4><div><h5>xī: </h5><span>cricket</span></div>
    </div>
    <div>
      <h4>蟑: </h4><div><h5>zhāng: </h5><span>cockroach</span></div>
    </div>
    <h3>画13-18</h3>
    <div>
      <h4>蟹: </h4><div><h5>xiè: </h5><span>crab, brachyura</span></div>
    </div>
    <div>
      <h4>蟾: </h4><div><h5>chán: </h5><span>toad</span></div>
    </div>
    <div>
      <h4>蠋: </h4><div><h5>zhú: </h5><span>caterpillar</span></div>
    </div>
    <div>
      <h4>蠕: </h4><div><h5>rú: </h5><span>eumenes polifomis, kind of wasp</span></div>
    </div>
    <div>
      <h4>蠢: </h4><div><h5>chǔn: </h5><span>wriggle; stupid; silly; fat</span></div>
    </div>
    <div>
      <h4>蠹: </h4><div><h5>dù: </h5><span>moth; insects which eat into clot</span></div>
    </div>
    <h1>177: 血</h1>
    <div>
      <h4>血: </h4><div><h5>xuè, xiě: </h5><span>blood; radical number 143</span></div>
    </div>
    <div>
      <h4>衅: </h4><div><h5>xìn: </h5>
      <span>consecrate sacrificial vessels by smearing blood; rift</span></div>
    </div>
    <h1>178: 行</h1>
    <div>
      <h4>行: </h4><div><h5>háng, xíng: </h5><span>go; walk; move, travel; circulate</span></div>
    </div>
    <div>
      <h4>衍: </h4><div><h5>yǎn: </h5><span>overflow, spill over, spread out</span></div>
    </div>
    <div>
      <h4>衔: </h4><div><h5>xián: </h5><span>bit; hold in mouth, bite; gag</span></div>
    </div>
    <div>
      <h4>街: </h4><div><h5>jiē: </h5><span>street, road, thoroughfare</span></div>
    </div>
    <div>
      <h4>衙: </h4><div><h5>yá: </h5><span>public office; official residence</span></div>
    </div>
    <div>
      <h4>衡: </h4><div><h5>héng: </h5><span>measure, weigh, judge, consider</span></div>
    </div>
    <h1>179: 衣</h1>
    <div>
      <h4>衣: </h4><div><h5>yī: </h5><span>clothes, clothing; cover, skin</span></div>
    </div>
    <h3>画2-4</h3>
    <div>
      <h4>表: </h4><div><h5>biǎo: </h5><span>show, express, manifest, display</span></div>
    </div>
    <div>
      <h4>衮: </h4><div><h5>gǔn: </h5><span>ceremonial dress worn by the emperor</span></div>
    </div>
    <div>
      <h4>衰: </h4><div><h5>shuāi, cuī: </h5><span>decline, falter, decrease; weaken</span></div>
    </div>
    <div>
      <h4>衷: </h4><div><h5>zhōng: </h5><span>heart, from bottom of one's heart</span></div>
    </div>
    <div>
      <h4>袁: </h4><div><h5>yuán: </h5><span>robe; surname</span></div>
    </div>
    <div>
      <h4>袅: </h4><div><h5>niǎo: </h5><span>curling upwards; wavering gently</span></div>
    </div>
    <h3>画5-7</h3>
    <div>
      <h4>袋: </h4><div><h5>dài: </h5><span>pocket, bag, sack, pouch</span></div>
    </div>
    <div>
      <h4>袭: </h4><div><h5>xí: </h5><span>raid, attack; inherit</span></div>
    </div>
    <div>
      <h4>裁: </h4><div><h5>cái: </h5><span>cut out; decrease</span></div>
    </div>
    <div>
      <h4>裂: </h4><div><h5>liè, liě: </h5><span>split, crack, break open; rend</span></div>
    </div>
    <div>
      <h4>装: </h4><div><h5>zhuāng: </h5><span>dress, clothes, attire; fill</span></div>
    </div>
    <div>
      <h4>裔: </h4><div><h5>yì: </h5><span>progeny, descendants, posterity</span></div>
    </div>
    <div>
      <h4>裘: </h4><div><h5>qiú: </h5><span>fur garments; surname</span></div>
    </div>
    <h3>画8-11</h3>
    <div>
      <h4>裳: </h4><div><h5>cháng, shang: </h5><span>clothes; skirt; beautiful</span></div>
    </div>
    <div>
      <h4>裴: </h4><div><h5>péi: </h5><span>surname; look of a flowing gown</span></div>
    </div>
    <div>
      <h4>裹: </h4><div><h5>guǒ: </h5><span>wrap, bind; encircle, confine</span></div>
    </div>
    <div>
      <h4>褒: </h4><div><h5>bāo: </h5><span>praise, commend, honor, cite</span></div>
    </div>
    <div>
      <h4>襄: </h4><div><h5>xiāng: </h5><span>aid, help, assist; undress</span></div>
    </div>
    <h1>180: 覀</h1>
    <div>
      <h4>西: </h4><div><h5>xī: </h5><span>west(ern); westward, occident</span></div>
    </div>
    <div>
      <h4>要: </h4><div><h5>yào, yāo: </h5><span>necessary, essential; necessity</span></div>
    </div>
    <div>
      <h4>覆: </h4><div><h5>fù: </h5><span>cover; tip over; return; reply</span></div>
    </div>
    <h1>181: 页</h1>
    <div>
      <h4>页: </h4><div><h5>yè: </h5><span>page, sheet, leaf; rad. no. 181</span></div>
    </div>
    <h3>画2-3</h3>
    <div>
      <h4>顶: </h4><div><h5>dǐng: </h5><span>top, summit, peak; to carry on the head</span></div>
    </div>
    <div>
      <h4>顷: </h4><div><h5>qǐng: </h5>
      <span>
        a moment; a measure of area equal to 100 mu or 6.7 hectares; to lean
      </span></div>
    </div>
    <div>
      <h4>顸: </h4><div><h5>hān: </h5><span>large face, flat face; stupid</span></div>
    </div>
    <div>
      <h4>项: </h4><div><h5>xiàng: </h5><span>neck, nape of neck; sum; funds</span></div>
    </div>
    <div>
      <h4>顺: </h4><div><h5>shùn: </h5><span>obey, submit to, go along with</span></div>
    </div>
    <div>
      <h4>须: </h4><div><h5>xū: </h5><span>must, have to, necessary</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>顽: </h4><div><h5>wán: </h5><span>obstinate, stubborn; recalcitrant</span></div>
    </div>
    <div>
      <h4>顾: </h4><div><h5>gù: </h5><span>look back; look at; look after</span></div>
    </div>
    <div>
      <h4>顿: </h4><div><h5>dùn: </h5><span>pause, stop; bow, kowtow; arrange</span></div>
    </div>
    <div>
      <h4>颁: </h4><div><h5>bān: </h5><span>confer, bestow; publish, promulgate</span></div>
    </div>
    <div>
      <h4>颂: </h4><div><h5>sòng: </h5><span>laud, acclaim; hymn; ode</span></div>
    </div>
    <div>
      <h4>预: </h4><div><h5>yù: </h5><span>prepare, arrange; in advance</span></div>
    </div>
    <h3>画5-6</h3>
    <div>
      <h4>颅: </h4><div><h5>lú: </h5><span>skull</span></div>
    </div>
    <div>
      <h4>领: </h4><div><h5>lǐng: </h5><span>neck; collar; lead, guide</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>颇: </h4><div><h5>pō: </h5><span>lean one side; very, rather</span></div>
    </div>
    <div>
      <h4>颈: </h4><div><h5>jǐng, gěng: </h5><span>neck, throat</span></div>
    </div>
    <div>
      <h4>颉: </h4><div><h5>jié, xié, jiá: </h5><span>fly upward, soar; contest</span></div>
    </div>
    <div>
      <h4>颊: </h4><div><h5>jiá: </h5><span>cheeks, jaw</span></div>
    </div>
    <h3>画7-8</h3>
    <div>
      <h4>颐: </h4><div><h5>yí: </h5><span>cheeks; jaw; chin; rear; to nourish</span></div>
    </div>
    <div>
      <h4>频: </h4><div><h5>pín, bīn: </h5><span>frequently, again and again</span></div>
    </div>
    <div>
      <h4>颓: </h4><div><h5>tuí: </h5><span>ruined, decayed; disintegrate</span></div>
    </div>
    <div>
      <h4>颔: </h4><div><h5>hàn: </h5><span>chin, jowl; give nod</span></div>
    </div>
    <div>
      <h4>颖: </h4><div><h5>yǐng: </h5><span>rice tassel; sharp point; clever</span></div>
    </div>
    <div>
      <h4>颗: </h4><div><h5>kē: </h5><span>grain, kernel</span></div>
    </div>
    <h3>画9-15</h3>
    <div>
      <h4>题: </h4><div><h5>tí: </h5><span>forehead; title, headline; theme</span></div>
    </div>
    <div>
      <h4>颚: </h4><div><h5>è: </h5><span>jaw</span></div>
    </div>
    <div>
      <h4>颜: </h4><div><h5>yán: </h5><span>face, facial appearance</span></div>
    </div>
    <div>
      <h4>额: </h4><div><h5>é: </h5><span>forehead; tablet, plaque; fixed</span></div>
    </div>
    <div>
      <h4>颠: </h4><div><h5>diān: </h5><span>top, peak, summit; upset</span></div>
    </div>
    <div>
      <h4>颢: </h4><div><h5>hào: </h5><span>luminous; white, hoary</span></div>
    </div>
    <div>
      <h4>颤: </h4><div><h5>chàn, zhàn: </h5><span>shiver, tremble; trembling</span></div>
    </div>
    <div>
      <h4>颦: </h4><div><h5>pín: </h5><span>frown, knit brows; with knitted</span></div>
    </div>
    <h1>182: 齐</h1>
    <div>
      <h4>齐: </h4><div><h5>qí, jì, zī, zhāi: </h5><span>even, uniform, of equal length</span></div>
    </div>
    <h1>183: 角</h1>
    <div>
      <h4>角: </h4><div><h5>jiǎo, jué: </h5><span>horn; angle, corner; point</span></div>
    </div>
    <div>
      <h4>觔: </h4><div><h5>jīn: </h5><span>catty</span></div>
    </div>
    <div>
      <h4>觞: </h4><div><h5>shāng: </h5><span>wine vessel; propose toast; feast</span></div>
    </div>
    <div>
      <h4>解: </h4><div><h5>jiě, jiè, xiè: </h5><span>loosen, unfasten, untie; explain</span></div>
    </div>
    <div>
      <h4>触: </h4><div><h5>chù: </h5><span>butt, ram, gore; touch</span></div>
    </div>
    <h1>184: 言</h1>
    <div>
      <h4>言: </h4><div><h5>yán: </h5><span>words, speech; speak, say</span></div>
    </div>
    <div>
      <h4>詹: </h4><div><h5>zhān: </h5><span>surname; talk too much, verbose</span></div>
    </div>
    <div>
      <h4>誉: </h4><div><h5>yù: </h5><span>fame, reputation; praise</span></div>
    </div>
    <div>
      <h4>誓: </h4><div><h5>shì: </h5><span>swear, pledge; oath</span></div>
    </div>
    <div>
      <h4>警: </h4><div><h5>jǐng: </h5><span>guard, watch; alert, alarm</span></div>
    </div>
    <div>
      <h4>譬: </h4><div><h5>pì: </h5><span>metaphor, simile, example</span></div>
    </div>
    <h1>185: 谷</h1>
    <div>
      <h4>谷: </h4><div><h5>gǔ: </h5><span>valley, gorge, ravine</span></div>
    </div>
    <div>
      <h4>豁: </h4><div><h5>huō, huò, huá: </h5><span>open up, clear; exempt</span></div>
    </div>
    <h1>186: 豆</h1>
    <div>
      <h4>豆: </h4><div><h5>dòu: </h5><span>beans, peas; bean-shaped</span></div>
    </div>
    <div>
      <h4>豊: </h4><div><h5>lǐ: </h5><span>abundant, lush, bountiful, plenty</span></div>
    </div>
    <div>
      <h4>豋: </h4><div><h5>dēng: </h5><span>ceremonial vessel</span></div>
    </div>
    <h1>187: 豕</h1>
    <div>
      <h4>豚: </h4><div><h5>tún: </h5><span>small pig, suckling pig; suffle</span></div>
    </div>
    <div>
      <h4>象: </h4><div><h5>xiàng: </h5><span>elephant; ivory; figure, image</span></div>
    </div>
    <div>
      <h4>豨: </h4><div><h5>xī: </h5><span>pig, hog</span></div>
    </div>
    <div>
      <h4>豪: </h4><div><h5>háo: </h5><span>brave, heroic, chivalrous</span></div>
    </div>
    <div>
      <h4>豫: </h4><div><h5>yù: </h5><span>relaxed, comfortable, at ease</span></div>
    </div>
    <h1>188: 豸</h1>
    <div>
      <h4>豹: </h4><div><h5>bào: </h5><span>leopard, panther; surname</span></div>
    </div>
    <div>
      <h4>豺: </h4><div><h5>chái: </h5><span>wolf; cruel, wicked, mean</span></div>
    </div>
    <div>
      <h4>貂: </h4><div><h5>diāo: </h5><span>marten, sable, mink</span></div>
    </div>
    <div>
      <h4>貌: </h4><div><h5>mào: </h5><span>countenance, appearance</span></div>
    </div>
    <h1>189: 貝</h1>
    <div>
      <h4>賏: </h4><div><h5>yīng: </h5><span>pearls or shells strung together</span></div>
    </div>
    <div>
      <h4>賸: </h4><div><h5>shèng: </h5><span>leftovers, residue, remains</span></div>
    </div>
    <h1>190: 赤</h1>
    <div>
      <h4>赤: </h4><div><h5>chì: </h5><span>red; communist, 'red'; bare</span></div>
    </div>
    <div>
      <h4>赦: </h4><div><h5>shè: </h5><span>forgive, remit, pardon</span></div>
    </div>
    <div>
      <h4>赫: </h4><div><h5>hè: </h5><span>bright, radiant, glowing</span></div>
    </div>
    <h1>191: 走</h1>
    <div>
      <h4>走: </h4><div><h5>zǒu: </h5><span>walk, go on foot; run; leave</span></div>
    </div>
    <h3>画2-3</h3>
    <div>
      <h4>赴: </h4><div><h5>fù: </h5><span>go to; attend, be present</span></div>
    </div>
    <div>
      <h4>赵: </h4><div><h5>zhào: </h5><span>surname; ancient state</span></div>
    </div>
    <div>
      <h4>赶: </h4><div><h5>gǎn: </h5><span>pursue, follow; expel, drive away</span></div>
    </div>
    <div>
      <h4>起: </h4><div><h5>qǐ: </h5><span>rise, stand up; go up; begin</span></div>
    </div>
    <h3>画5-8</h3>
    <div>
      <h4>趁: </h4><div><h5>chèn: </h5><span>take advantage of, avail oneself</span></div>
    </div>
    <div>
      <h4>超: </h4><div><h5>chāo: </h5><span>jump over, leap over; surpass</span></div>
    </div>
    <div>
      <h4>越: </h4><div><h5>yuè: </h5><span>exceed, go beyond; the more ...</span></div>
    </div>
    <div>
      <h4>趋: </h4><div><h5>qū, cù: </h5><span>hasten, hurry; be attracted to</span></div>
    </div>
    <div>
      <h4>趐: </h4><div><h5>xuè: </h5><span></span></div>
    </div>
    <div>
      <h4>趟: </h4><div><h5>tàng, tāng: </h5><span>time, occasion; take journey</span></div>
    </div>
    <div>
      <h4>趣: </h4><div><h5>qù, cù: </h5><span>what attracts one's attention</span></div>
    </div>
    <h1>192: 足</h1>
    <div>
      <h4>足: </h4><div><h5>zú: </h5><span>foot; attain, satisfy, enough</span></div>
    </div>
    <h3>画2-4</h3>
    <div>
      <h4>趴: </h4><div><h5>pā: </h5><span>lying prone, leaning over</span></div>
    </div>
    <div>
      <h4>趺: </h4><div><h5>fū: </h5><span>sit cross-legged; back of the foo</span></div>
    </div>
    <div>
      <h4>趾: </h4><div><h5>zhǐ: </h5><span>toe; tracks, footprints</span></div>
    </div>
    <div>
      <h4>跃: </h4><div><h5>yuè: </h5><span>skip, jump, frolic</span></div>
    </div>
    <div>
      <h4>距: </h4><div><h5>jù: </h5><span>distance; bird's spur</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>跆: </h4><div><h5>tái: </h5><span>trample</span></div>
    </div>
    <div>
      <h4>跋: </h4><div><h5>bá: </h5><span>go by foot; epilogue, colophon</span></div>
    </div>
    <div>
      <h4>跌: </h4><div><h5>diē: </h5><span>stumble, slip, fall down; stamp</span></div>
    </div>
    <div>
      <h4>跎: </h4><div><h5>tuó: </h5><span>slip, stumble, falter; vacillate</span></div>
    </div>
    <div>
      <h4>跑: </h4><div><h5>pǎo, páo: </h5><span>run, flee, leave in hurry</span></div>
    </div>
    <div>
      <h4>跚: </h4><div><h5>shān: </h5><span>stagger, limp</span></div>
    </div>
    <div>
      <h4>跛: </h4><div><h5>bǒ: </h5><span>lame</span></div>
    </div>
    <div>
      <h4>践: </h4><div><h5>jiàn: </h5><span>trample, tread upon, walk on</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>跟: </h4><div><h5>gēn: </h5><span>heel; to follow, accompany; with</span></div>
    </div>
    <div>
      <h4>跤: </h4><div><h5>jiāo: </h5><span>stumble, fall down; wrestle</span></div>
    </div>
    <div>
      <h4>跨: </h4><div><h5>kuà: </h5><span>straddle, bestride, ride; carry</span></div>
    </div>
    <div>
      <h4>跩: </h4><div><h5>zhuǎi: </h5><span>to waddle, to limp</span></div>
    </div>
    <div>
      <h4>跪: </h4><div><h5>guì: </h5><span>kneel</span></div>
    </div>
    <div>
      <h4>路: </h4><div><h5>lù: </h5><span>road, path, street; journey</span></div>
    </div>
    <div>
      <h4>跳: </h4><div><h5>tiào, táo: </h5><span>jump, leap, vault, bounce; dance</span></div>
    </div>
    <div>
      <h4>跷: </h4><div><h5>qiāo: </h5><span>raise one's foot</span></div>
    </div>
    <div>
      <h4>跺: </h4><div><h5>duò: </h5><span>stamp feet, step</span></div>
    </div>
    <div>
      <h4>跻: </h4><div><h5>jī: </h5><span>ascend, go up, rise</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>踅: </h4><div><h5>xué: </h5>
      <span>sauter,aller et venir,aller de long en large,retourner</span></div>
    </div>
    <div>
      <h4>踊: </h4><div><h5>yǒng: </h5><span>leap, jump</span></div>
    </div>
    <div>
      <h4>踌: </h4><div><h5>chóu: </h5><span>hesitate, falter; smug, self-satisfied</span></div>
    </div>
    <h3>画8</h3>
    <div>
      <h4>踏: </h4><div><h5>tà: </h5><span>step on, trample, tread on, walk</span></div>
    </div>
    <div>
      <h4>踝: </h4><div><h5>huái: </h5><span>ankle</span></div>
    </div>
    <div>
      <h4>踞: </h4><div><h5>jù: </h5><span>crouch, squat; sit, occupy</span></div>
    </div>
    <div>
      <h4>踢: </h4><div><h5>tī: </h5><span>kick</span></div>
    </div>
    <div>
      <h4>踩: </h4><div><h5>cǎi: </h5><span>step on</span></div>
    </div>
    <div>
      <h4>踪: </h4><div><h5>zōng: </h5><span>footprints, traces, tracks</span></div>
    </div>
    <div>
      <h4>踮: </h4><div><h5>diǎn: </h5><span>tip toe</span></div>
    </div>
    <div>
      <h4>踯: </h4><div><h5>zhí: </h5><span>waver, hesitate, be irresolute</span></div>
    </div>
    <h3>画9</h3>
    <div>
      <h4>踱: </h4><div><h5>duó: </h5><span>stroll, pace, walk slowly</span></div>
    </div>
    <div>
      <h4>踵: </h4><div><h5>zhǒng: </h5><span>heel; follow; visit, call on</span></div>
    </div>
    <div>
      <h4>踹: </h4><div><h5>chuài: </h5><span>trample, tread on, kick; to crush</span></div>
    </div>
    <div>
      <h4>踼: </h4><div><h5>táng: </h5><span>to fall flat; to fall on the face</span></div>
    </div>
    <div>
      <h4>踽: </h4><div><h5>jǔ: </h5><span>to walk alone; self-reliant</span></div>
    </div>
    <div>
      <h4>蹂: </h4><div><h5>róu: </h5><span>trample under foot, tread on</span></div>
    </div>
    <div>
      <h4>蹄: </h4><div><h5>tí: </h5><span>hoof; leg of pork; little witch</span></div>
    </div>
    <div>
      <h4>蹉: </h4><div><h5>cuō: </h5><span>error, mistake, slip; failure</span></div>
    </div>
    <h3>画10</h3>
    <div>
      <h4>蹈: </h4><div><h5>dǎo: </h5><span>stamp feet; dance</span></div>
    </div>
    <div>
      <h4>蹊: </h4><div><h5>qī, xī: </h5><span>footpath, trail; track</span></div>
    </div>
    <div>
      <h4>蹋: </h4><div><h5>tà: </h5><span>step on, tread on; stumble, slip</span></div>
    </div>
    <div>
      <h4>蹑: </h4><div><h5>niè: </h5><span>tread, step on; follow, track</span></div>
    </div>
    <div>
      <h4>蹒: </h4><div><h5>pán: </h5><span>to jump over; to limp</span></div>
    </div>
    <h3>画11</h3>
    <div>
      <h4>蹙: </h4><div><h5>cù: </h5><span>urgent, suddenly; grieve, lament</span></div>
    </div>
    <div>
      <h4>蹦: </h4><div><h5>bèng: </h5><span>hop, leap, jump; bright</span></div>
    </div>
    <div>
      <h4>躇: </h4><div><h5>chú: </h5><span>hesitate, falter, be undecided</span></div>
    </div>
    <h3>画12</h3>
    <div>
      <h4>蹬: </h4><div><h5>dēng: </h5><span>step on, tread on; lose energy</span></div>
    </div>
    <div>
      <h4>蹲: </h4><div><h5>dūn: </h5><span>squat, crouch; idle about</span></div>
    </div>
    <div>
      <h4>蹴: </h4><div><h5>cù: </h5><span>kick; tread on; leap; solemn</span></div>
    </div>
    <div>
      <h4>蹶: </h4><div><h5>jué, juě: </h5><span>stumble, fall down; trample</span></div>
    </div>
    <div>
      <h4>蹼: </h4><div><h5>pǔ: </h5><span>webbed feet of waterfowl</span></div>
    </div>
    <h3>画13-14</h3>
    </section>
    <section>
    <div>
      <h4>躁: </h4><div><h5>zào: </h5><span>tense, excited, irritable</span></div>
    </div>
    <div>
      <h4>躄: </h4><div><h5>bì: </h5><span>cripple, lame</span></div>
    </div>
    <div>
      <h4>躅: </h4><div><h5>zhú: </h5><span>walk carefully; hesitate, falter</span></div>
    </div>
    <div>
      <h4>躏: </h4><div><h5>lìn: </h5><span>trample down, oppress, overrun</span></div>
    </div>
    <h1>193: 身</h1>
    <div>
      <h4>身: </h4><div><h5>shēn: </h5><span>body; trunk, hull; rad. no. 158</span></div>
    </div>
    <div>
      <h4>躬: </h4><div><h5>gōng: </h5><span>body; personally, in person</span></div>
    </div>
    <div>
      <h4>躯: </h4><div><h5>qū: </h5><span>body</span></div>
    </div>
    <div>
      <h4>躲: </h4><div><h5>duǒ: </h5><span>hide, secrete; avoid, escape</span></div>
    </div>
    <div>
      <h4>躺: </h4><div><h5>tǎng: </h5><span>lie down, recline</span></div>
    </div>
    <h1>194: 辛</h1>
    <div>
      <h4>辛: </h4><div><h5>xīn: </h5><span>bitter; toilsome, laborious; 8th heavenly stem</span></div>
    </div>
    <div>
      <h4>辜: </h4><div><h5>gū: </h5><span>crime, criminal offense</span></div>
    </div>
    <div>
      <h4>辞: </h4><div><h5>cí: </h5><span>words, speech, expression, phrase</span></div>
    </div>
    <div>
      <h4>辟: </h4><div><h5>bì, pì: </h5><span>law, rule; open up, develop</span></div>
    </div>
    <div>
      <h4>辣: </h4><div><h5>là: </h5><span>peppery, pungent, hot; cruel</span></div>
    </div>
    <div>
      <h4>辨: </h4><div><h5>biàn: </h5><span>distinguish, discriminate</span></div>
    </div>
    <div>
      <h4>辩: </h4><div><h5>biàn: </h5><span>dispute, argue, debate, discuss</span></div>
    </div>
    <div>
      <h4>辫: </h4><div><h5>biàn: </h5><span>braid; pigtail, plait, queue</span></div>
    </div>
    <h1>195: 辰</h1>
    <div>
      <h4>辰: </h4><div><h5>chén: </h5><span>early morning; 5th terrestrial branch</span></div>
    </div>
    <div>
      <h4>辱: </h4><div><h5>rǔ: </h5><span>humiliate, insult, abuse</span></div>
    </div>
    <h1>196: 邑</h1>
    <div>
      <h4>邑: </h4><div><h5>yì: </h5><span>area, district, city, state</span></div>
    </div>
    <h1>197: 酉</h1>
    <div>
      <h4>酉: </h4><div><h5>yǒu: </h5><span>10th terrestrial branch; a wine vessel</span></div>
    </div>
    <h3>画2-4</h3>
    <div>
      <h4>酋: </h4><div><h5>qiú: </h5><span>chief of tribe, chieftain</span></div>
    </div>
    <div>
      <h4>酌: </h4><div><h5>zhuó: </h5><span>serve wine; feast; deliberate</span></div>
    </div>
    <div>
      <h4>配: </h4><div><h5>pèi: </h5><span>match, pair; equal; blend</span></div>
    </div>
    <div>
      <h4>酒: </h4><div><h5>jiǔ: </h5><span>wine, spirits, liquor, alcoholic beverage</span></div>
    </div>
    <div>
      <h4>酗: </h4><div><h5>xù: </h5>
      <span>drunk, to become violent under the influence of alcohol</span></div>
    </div>
    <div>
      <h4>酝: </h4><div><h5>yùn: </h5><span>liquor, spirits, wine; ferment</span></div>
    </div>
    <h3>画5-6</h3>
    <div>
      <h4>酣: </h4><div><h5>hān: </h5><span>enjoy intoxicants</span></div>
    </div>
    <div>
      <h4>酥: </h4><div><h5>sū: </h5><span>butter; flaky, crispy, light, fluffy</span></div>
    </div>
    <div>
      <h4>酪: </h4><div><h5>lào: </h5><span>cream, cheese; koumiss</span></div>
    </div>
    <div>
      <h4>酬: </h4><div><h5>chóu: </h5><span>toast; reward, recompense</span></div>
    </div>
    <div>
      <h4>酮: </h4><div><h5>tóng: </h5><span>ketones</span></div>
    </div>
    <div>
      <h4>酯: </h4><div><h5>zhǐ: </h5><span>Ester</span></div>
    </div>
    <div>
      <h4>酱: </h4><div><h5>jiàng: </h5><span>any jam-like or paste-like food</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>酵: </h4><div><h5>jiào: </h5><span>yeast, leaven</span></div>
    </div>
    <div>
      <h4>酷: </h4><div><h5>kù: </h5><span>strong, stimulating; very</span></div>
    </div>
    <div>
      <h4>酸: </h4><div><h5>suān: </h5><span>tart, sour; acid; stiff; spoiled</span></div>
    </div>
    <div>
      <h4>酹: </h4><div><h5>lèi: </h5><span>to pour out a libation; to sprinkle</span></div>
    </div>
    <div>
      <h4>酿: </h4><div><h5>niàng: </h5><span>brew, ferment</span></div>
    </div>
    <h3>画8-14</h3>
    <div>
      <h4>醇: </h4><div><h5>chún: </h5><span>rich, good as wine; pure, unmixed</span></div>
    </div>
    <div>
      <h4>醉: </h4><div><h5>zuì: </h5><span>intoxicated, drunk; addicted to</span></div>
    </div>
    <div>
      <h4>醋: </h4><div><h5>cù: </h5><span>vinegar; jealousy, envy</span></div>
    </div>
    <div>
      <h4>醒: </h4><div><h5>xǐng: </h5><span>wake up; sober up; startle</span></div>
    </div>
    <div>
      <h4>醺: </h4><div><h5>xūn: </h5><span>get drunk, be intoxicated</span></div>
    </div>
    <h1>198: 采</h1>
    <div>
      <h4>釆: </h4><div><h5>biàn: </h5><span>distinguish; KangXi radical 165</span></div>
    </div>
    <div>
      <h4>采: </h4><div><h5>cǎi, cài: </h5><span>collect, gather; pick, pluck</span></div>
    </div>
    <div>
      <h4>释: </h4><div><h5>shì: </h5><span>interprete, elucidate; release</span></div>
    </div>
    <h1>199: 里</h1>
    <div>
      <h4>里: </h4><div><h5>lǐ: </h5><span>unit of distance; village; lane</span></div>
    </div>
    <div>
      <h4>重: </h4><div><h5>zhòng, chóng: </h5><span>heavy, weighty; double</span></div>
    </div>
    <div>
      <h4>野: </h4><div><h5>yě: </h5><span>open country, field; wilderness</span></div>
    </div>
    <div>
      <h4>量: </h4><div><h5>liáng, liàng: </h5><span>measure, quantity, capacity</span></div>
    </div>
    <h1>200: 麦</h1>
    <div>
      <h4>麦: </h4><div><h5>mài: </h5>
      <span>
        wheat, barley, oats; simplified form of KangXi radical number 199
      </span></div>
    </div>
    <h1>201: 金</h1>
    <div>
      <h4>金: </h4><div><h5>jīn: </h5><span>gold; metals in general; money</span></div>
    </div>
    <div>
      <h4>釜: </h4><div><h5>fǔ: </h5><span>cauldron, pot, kettle</span></div>
    </div>
    <div>
      <h4>鉴: </h4><div><h5>jiàn: </h5><span>mirror, looking glass; reflect</span></div>
    </div>
    <div>
      <h4>銮: </h4><div><h5>luán: </h5><span>bells hung on horse; bells hung</span></div>
    </div>
    <div>
      <h4>鏖: </h4><div><h5>áo: </h5><span>to fight to the end, engage in a fierce battle</span></div>
    </div>
    <div>
      <h4>鑫: </h4><div><h5>xīn: </h5><span>used in names</span></div>
    </div>
    <h1>202: 門</h1>
    <div>
      <h4>閒: </h4><div><h5>xián, jiān, jiàn: </h5>
      <span>liesure; idle; peaceful, tranquil, calm</span></div>
    </div>
    <div>
      <h4>閤: </h4><div><h5>hé, gé: </h5><span>small side door; chamber</span></div>
    </div>
    <h1>203: 阜</h1>
    <div>
      <h4>阜: </h4><div><h5>fù: </h5><span>mound; abundant, ample, numerous</span></div>
    </div>
    <h1>204: 隶</h1>
    <div>
      <h4>隶: </h4><div><h5>lì: </h5><span>subservient; servant; KangXi radical 171</span></div>
    </div>
    <h1>205: 隹</h1>
    <div>
      <h4>隹: </h4><div><h5>zhuī, cuī, wéi: </h5><span>bird; KangXi radical 172</span></div>
    </div>
    <h3>画2-3</h3>
    <div>
      <h4>隼: </h4><div><h5>sǔn: </h5><span>aquiline (nose); a falcon</span></div>
    </div>
    <div>
      <h4>隽: </h4><div><h5>jùn, juàn: </h5><span>superior, outstanding, talented</span></div>
    </div>
    <div>
      <h4>难: </h4><div><h5>nán, nàn, nuó: </h5><span>difficult, arduous, hard; unable</span></div>
    </div>
    <div>
      <h4>雀: </h4><div><h5>què, qiāo, qiǎo: </h5><span>sparrow</span></div>
    </div>
    <h3>画4</h3>
    <div>
      <h4>雁: </h4><div><h5>yàn: </h5><span>wild goose</span></div>
    </div>
    <div>
      <h4>雄: </h4><div><h5>xióng: </h5><span>male of species; hero; manly</span></div>
    </div>
    <div>
      <h4>雅: </h4><div><h5>yǎ: </h5><span>elegant, graceful, refined</span></div>
    </div>
    <div>
      <h4>集: </h4><div><h5>jí: </h5><span>assemble, collect together</span></div>
    </div>
    <div>
      <h4>雇: </h4><div><h5>gù: </h5><span>employ, to hire</span></div>
    </div>
    <h3>画5-8</h3>
    <div>
      <h4>雉: </h4><div><h5>zhì: </h5><span>pheasant; crenellated wall</span></div>
    </div>
    <div>
      <h4>雍: </h4><div><h5>yōng: </h5><span>harmony, union; harmonious</span></div>
    </div>
    <div>
      <h4>雎: </h4><div><h5>jū: </h5><span>osprey, fishhawk; hold back</span></div>
    </div>
    <div>
      <h4>雏: </h4><div><h5>chú: </h5><span>chick, fledging; infant, toddler</span></div>
    </div>
    <div>
      <h4>雌: </h4><div><h5>cí: </h5><span>female; feminine; gentle, soft</span></div>
    </div>
    <div>
      <h4>雕: </h4><div><h5>diāo: </h5>
      <span>
        engrave, inlay, carve; exhaust; used for U+9D70 鵰 an eagle, vulture
      </span></div>
    </div>
    <h1>206: 雨</h1>
    <div>
      <h4>雨: </h4><div><h5>yǔ, yù: </h5><span>rain; rainy; KangXi radical 173</span></div>
    </div>
    <h3>画3-4</h3>
    <div>
      <h4>雩: </h4><div><h5>yú: </h5><span>offer sacrifice for rain</span></div>
    </div>
    <div>
      <h4>雪: </h4><div><h5>xuě: </h5><span>snow; wipe away shame, avenge</span></div>
    </div>
    <div>
      <h4>雯: </h4><div><h5>wén: </h5><span>cloud patterns, coloring of cloud</span></div>
    </div>
    <div>
      <h4>雱: </h4><div><h5>pāng: </h5><span>snowing heavily</span></div>
    </div>
    <div>
      <h4>雳: </h4><div><h5>lì: </h5><span>thunderclap, crashing thunder</span></div>
    </div>
    <h3>画5</h3>
    <div>
      <h4>零: </h4><div><h5>líng: </h5><span>zero; fragment, fraction</span></div>
    </div>
    <div>
      <h4>雷: </h4><div><h5>léi: </h5><span>thunder</span></div>
    </div>
    <div>
      <h4>雹: </h4><div><h5>báo: </h5><span>hail</span></div>
    </div>
    <div>
      <h4>雾: </h4><div><h5>wù: </h5><span>fog, mist, vapor, fine spray</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>需: </h4><div><h5>xū: </h5><span>need, require, must</span></div>
    </div>
    <div>
      <h4>霁: </h4><div><h5>jì: </h5><span>to clear up after rain; to cease be angry</span></div>
    </div>
    <div>
      <h4>霆: </h4><div><h5>tíng: </h5><span>a sudden peal of thunder</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>霄: </h4><div><h5>xiāo: </h5><span>sky; clouds, mist; night</span></div>
    </div>
    <div>
      <h4>震: </h4><div><h5>zhèn: </h5><span>shake, quake, tremor; excite</span></div>
    </div>
    <div>
      <h4>霈: </h4><div><h5>pèi: </h5><span>torrential rains, flow of water</span></div>
    </div>
    <div>
      <h4>霉: </h4><div><h5>méi: </h5><span>mildew, mold; moldy, mildewed</span></div>
    </div>
    <h3>画8-11</h3>
    <div>
      <h4>霍: </h4><div><h5>huò: </h5><span>quickly, suddenly; surname</span></div>
    </div>
    <div>
      <h4>霎: </h4><div><h5>shà: </h5><span>light rain, drizzle; an instant; passing</span></div>
    </div>
    <div>
      <h4>霏: </h4><div><h5>fēi: </h5><span>falling of snow and rain</span></div>
    </div>
    <div>
      <h4>霓: </h4><div><h5>ní: </h5><span>rainbow; variegated, colored</span></div>
    </div>
    <div>
      <h4>霖: </h4><div><h5>lín: </h5><span>long spell of rain, copious rain</span></div>
    </div>
    <div>
      <h4>霜: </h4><div><h5>shuāng: </h5><span>frost; crystallized; candied</span></div>
    </div>
    <div>
      <h4>霞: </h4><div><h5>xiá: </h5><span>rosy clouds</span></div>
    </div>
    <div>
      <h4>霭: </h4><div><h5>ǎi: </h5><span>cloudy sky, haze; calm, peaceful</span></div>
    </div>
    <h3>画13-14</h3>
    <div>
      <h4>露: </h4><div><h5>lù, lòu: </h5><span>dew; bare, open, exposed</span></div>
    </div>
    <div>
      <h4>霸: </h4><div><h5>bà: </h5><span>rule by might rather than right</span></div>
    </div>
    <div>
      <h4>霹: </h4><div><h5>pī: </h5><span>thunder, crashing thunder</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>霾: </h4><div><h5>mái: </h5><span>misty, foggy; dust storm</span></div>
    </div>
    <h1>207: 青</h1>
    <div>
      <h4>青: </h4><div><h5>qīng: </h5><span>blue, green, black; young</span></div>
    </div>
    <div>
      <h4>靓: </h4><div><h5>jìng, liàng: </h5><span>make up face; ornament; quiet</span></div>
    </div>
    <div>
      <h4>靖: </h4><div><h5>jìng: </h5><span>pacify; appease; calm, peaceful</span></div>
    </div>
    <div>
      <h4>静: </h4><div><h5>jìng: </h5><span>quiet, still, motionless; gentle</span></div>
    </div>
    <div>
      <h4>靛: </h4><div><h5>diàn: </h5><span>indigo; any blue dye</span></div>
    </div>
    <h1>208: 非</h1>
    <div>
      <h4>非: </h4><div><h5>fēi: </h5><span>not, negative, non-; oppose</span></div>
    </div>
    <div>
      <h4>靠: </h4><div><h5>kào: </h5><span>lean on, trust, depend on; near</span></div>
    </div>
    <div>
      <h4>靡: </h4><div><h5>mí: </h5><span>divide, disperse, scatter</span></div>
    </div>
    <h1>209: 飠</h1>
    <div>
      <h4>食: </h4><div><h5>shí, sì, yì: </h5><span>eat; meal; food; KangXi radical number 184</span></div>
    </div>
    <div>
      <h4>饕: </h4><div><h5>tāo: </h5><span>gluttonous, greedy, covetous</span></div>
    </div>
    <h1>210: 鱼</h1>
    <div>
      <h4>鱼: </h4><div><h5>yú: </h5><span>fish; surname; KangXi radical 195</span></div>
    </div>
    <h3>画4-5</h3>
    <div>
      <h4>鱿: </h4><div><h5>yóu: </h5><span>cuttlefish</span></div>
    </div>
    <div>
      <h4>鲁: </h4><div><h5>lǔ: </h5><span>foolish, stupid, rash; vulgar</span></div>
    </div>
    <div>
      <h4>鲈: </h4><div><h5>lú: </h5><span>sea perch, sea bass</span></div>
    </div>
    <div>
      <h4>鲍: </h4><div><h5>bào: </h5><span>abalone; dried fish; surname</span></div>
    </div>
    <h3>画6</h3>
    <div>
      <h4>鲔: </h4><div><h5>wěi: </h5><span>kind of sturgeon, tuna</span></div>
    </div>
    <div>
      <h4>鲛: </h4><div><h5>jiāo: </h5><span>shark</span></div>
    </div>
    <div>
      <h4>鲜: </h4><div><h5>xiān, xiǎn: </h5><span>fresh; delicious; attractive</span></div>
    </div>
    <h3>画7</h3>
    <div>
      <h4>鲢: </h4><div><h5>lián: </h5><span>silver carp, hypophthalmiathys</span></div>
    </div>
    <div>
      <h4>鲤: </h4><div><h5>lǐ: </h5><span>carp</span></div>
    </div>
    <div>
      <h4>鲥: </h4><div><h5>shí: </h5><span>reeves' shad; hilsa herring</span></div>
    </div>
    <div>
      <h4>鲨: </h4><div><h5>shā: </h5><span>shark</span></div>
    </div>
    <div>
      <h4>鲫: </h4><div><h5>jì: </h5><span>Carassius auratus, crucian carp</span></div>
    </div>
    <h3>画8-9</h3>
    <div>
      <h4>鲲: </h4><div><h5>kūn: </h5><span>spawn; roe; fy</span></div>
    </div>
    <div>
      <h4>鲶: </h4><div><h5>nián: </h5><span>sheat</span></div>
    </div>
    <div>
      <h4>鲷: </h4><div><h5>diāo: </h5><span>pagrosomus major, porgy</span></div>
    </div>
    <div>
      <h4>鲸: </h4><div><h5>jīng: </h5><span>whale</span></div>
    </div>
    <div>
      <h4>鳄: </h4><div><h5>è: </h5><span>alligator</span></div>
    </div>
    <div>
      <h4>鳅: </h4><div><h5>qiū: </h5><span>loach</span></div>
    </div>
    <h3>画10-12</h3>
    <div>
      <h4>鳌: </h4><div><h5>áo: </h5><span>huge sea turtle</span></div>
    </div>
    <div>
      <h4>鳍: </h4><div><h5>qí: </h5><span>fin</span></div>
    </div>
    <div>
      <h4>鳕: </h4><div><h5>xuě: </h5><span>codfish</span></div>
    </div>
    <div>
      <h4>鳖: </h4><div><h5>biē: </h5><span>turtle</span></div>
    </div>
    <div>
      <h4>鳗: </h4><div><h5>mán: </h5><span>eel</span></div>
    </div>
    <div>
      <h4>鳞: </h4><div><h5>lín: </h5><span>fish scales</span></div>
    </div>
    <h1>211: 齿</h1>
    <div>
      <h4>齿: </h4><div><h5>chǐ: </h5>
      <span>
        teeth; gears, cogs; age; simplified form of the KangXi radical number
        211
      </span></div>
    </div>
    <div>
      <h4>龄: </h4><div><h5>líng: </h5><span>age; years</span></div>
    </div>
    <div>
      <h4>龈: </h4><div><h5>yín, kěn: </h5><span>gums</span></div>
    </div>
    <div>
      <h4>龊: </h4><div><h5>chuò: </h5><span>narrow, small; dirty</span></div>
    </div>
    <div>
      <h4>龌: </h4><div><h5>wò: </h5><span>narrow, small; dirty</span></div>
    </div>
    <h1>212: 面</h1>
    <div>
      <h4>面: </h4><div><h5>miàn: </h5><span>face; surface; plane; side, dimension</span></div>
    </div>
    <div>
      <h4>靥: </h4><div><h5>yè: </h5><span>dimples</span></div>
    </div>
    <h1>213: 革</h1>
    <div>
      <h4>革: </h4><div><h5>gé: </h5><span>leather, animal hides; rad. 177</span></div>
    </div>
    <h3>画4-5</h3>
    <div>
      <h4>靳: </h4><div><h5>jìn: </h5><span>strap on a horse's breast</span></div>
    </div>
    <div>
      <h4>靴: </h4><div><h5>xuē: </h5><span>boots</span></div>
    </div>
    <div>
      <h4>靶: </h4><div><h5>bǎ: </h5><span>target; splashboard on chariot</span></div>
    </div>
    <div>
      <h4>靼: </h4><div><h5>dá: </h5><span>tartars</span></div>
    </div>
    <h3>画6-9</h3>
    <div>
      <h4>鞋: </h4><div><h5>xié: </h5><span>shoes, footwear in general</span></div>
    </div>
    <div>
      <h4>鞍: </h4><div><h5>ān: </h5><span>saddle; any saddle-shaped object</span></div>
    </div>
    <div>
      <h4>鞑: </h4><div><h5>dá: </h5><span>tatars</span></div>
    </div>
    <div>
      <h4>鞘: </h4><div><h5>qiào, shāo: </h5><span>scabbard, sheath</span></div>
    </div>
    <div>
      <h4>鞠: </h4><div><h5>jū: </h5><span>bow, bend; rear, raise, nourish</span></div>
    </div>
    <div>
      <h4>鞭: </h4><div><h5>biān: </h5><span>whip; whip; string of firecrackers</span></div>
    </div>
    <h1>214: 韭</h1>
    <div>
      <h4>韭: </h4><div><h5>jiǔ: </h5><span>scallion, leek; radical 179</span></div>
    </div>
    <h1>215: 音</h1>
    <div>
      <h4>音: </h4><div><h5>yīn: </h5><span>sound, tone, pitch, pronunciation</span></div>
    </div>
    <div>
      <h4>韵: </h4><div><h5>yùn: </h5><span>rhyme; vowel</span></div>
    </div>
    <div>
      <h4>韶: </h4><div><h5>sháo: </h5><span>music of the emperor Shun; beautiful</span></div>
    </div>
    <h1>216: 食</h1>
    <div>
      <h4>飨: </h4><div><h5>xiǎng: </h5><span>host banquet; banquet</span></div>
    </div>
    <div>
      <h4>餐: </h4><div><h5>cān: </h5><span>eat, dine; meal; food</span></div>
    </div>
    <h1>217: 首</h1>
    <div>
      <h4>首: </h4><div><h5>shǒu: </h5><span>head; first; leader, chief; a poem</span></div>
    </div>
    <h1>218: 香</h1>
    <div>
      <h4>香: </h4><div><h5>xiāng: </h5><span>fragrant, sweet smelling, incense</span></div>
    </div>
    <div>
      <h4>馥: </h4><div><h5>fù: </h5><span>fragrance, scent, aroma</span></div>
    </div>
    <div>
      <h4>馨: </h4><div><h5>xīn: </h5><span>fragrant, aromatic; distant fragrance</span></div>
    </div>
    <h1>219: 骨</h1>
    <div>
      <h4>骨: </h4><div><h5>gǔ, gū: </h5><span>bone; skeleton; frame, framework</span></div>
    </div>
    <div>
      <h4>骰: </h4><div><h5>tóu: </h5><span>die, dice</span></div>
    </div>
    <div>
      <h4>骷: </h4><div><h5>kū: </h5><span>skeleton</span></div>
    </div>
    <div>
      <h4>骸: </h4><div><h5>hái: </h5><span>skeleton, body; leg bone</span></div>
    </div>
    <div>
      <h4>骼: </h4><div><h5>gé: </h5><span>bone; skeleton; corpse</span></div>
    </div>
    <div>
      <h4>髅: </h4><div><h5>lóu: </h5><span>skull; skeleton</span></div>
    </div>
    <div>
      <h4>髓: </h4><div><h5>suǐ: </h5><span>bone marrow; essences, substances</span></div>
    </div>
    <h1>220: 鬼</h1>
    <div>
      <h4>鬼: </h4><div><h5>guǐ: </h5><span>ghost; spirit of dead; devil</span></div>
    </div>
    <div>
      <h4>魁: </h4><div><h5>kuí: </h5><span>chief; leader; best; monstrous</span></div>
    </div>
    <div>
      <h4>魂: </h4><div><h5>hún: </h5><span>soul, spirit</span></div>
    </div>
    <div>
      <h4>魄: </h4><div><h5>pò: </h5><span>vigor; body; dark part of moon</span></div>
    </div>
    <div>
      <h4>魅: </h4><div><h5>mèi: </h5><span>kind of forest demon, elf</span></div>
    </div>
    <div>
      <h4>魇: </h4><div><h5>yǎn: </h5><span>nightmare, bad dreams</span></div>
    </div>
    <div>
      <h4>魉: </h4><div><h5>liǎng: </h5><span>a kind of monster</span></div>
    </div>
    <div>
      <h4>魏: </h4><div><h5>wèi: </h5><span>kingdom of Wei; surname</span></div>
    </div>
    <div>
      <h4>魔: </h4><div><h5>mó: </h5><span>demon, evil spirits; magic power</span></div>
    </div>
    <h1>221: 高</h1>
    <div>
      <h4>高: </h4><div><h5>gāo: </h5><span>high, tall; lofty, elevated</span></div>
    </div>
    <h1>222: 髟</h1>
    <div>
      <h4>髦: </h4><div><h5>máo: </h5><span>flowing hair of young child</span></div>
    </div>
    <div>
      <h4>髻: </h4><div><h5>jì: </h5><span>hair rolled up in a bun, topknot</span></div>
    </div>
    <div>
      <h4>鬓: </h4><div><h5>bìn: </h5><span>hair on temples</span></div>
    </div>
    <div>
      <h4>鬟: </h4><div><h5>huán: </h5><span>dress hair in coiled knot; maid</span></div>
    </div>
    <h1>223: 鹿</h1>
    <div>
      <h4>鹿: </h4><div><h5>lù: </h5><span>deer; surname; KangXi radical 198</span></div>
    </div>
    <div>
      <h4>麒: </h4><div><h5>qí: </h5><span>legendary auspicious animal</span></div>
    </div>
    <div>
      <h4>麓: </h4><div><h5>lù: </h5><span>foot of hill; foothill</span></div>
    </div>
    <div>
      <h4>麟: </h4><div><h5>lín: </h5><span>female of Chinese unicorn</span></div>
    </div>
    <h1>224: 麥</h1>
    <div>
      <h4>麴: </h4><div><h5>qū: </h5><span>yeast, leaven; surname</span></div>
    </div>
    <h1>225: 麻</h1>
    <div>
      <h4>麻: </h4><div><h5>má: </h5><span>hemp, jute, flax; sesame</span></div>
    </div>
    <div>
      <h4>麽: </h4><div><h5>mó, me, ma: </h5>
      <span>interrogative final particle; insignificant, small, tiny</span></div>
    </div>
    <div>
      <h4>麾: </h4><div><h5>huī: </h5><span>a pennant, flag, banner; to signal to</span></div>
    </div>
    <h1>226: 黄</h1>
    <div>
      <h4>黄: </h4><div><h5>huáng: </h5><span>yellow; surname</span></div>
    </div>
    <div>
      <h4>黉: </h4><div><h5>hóng: </h5><span>school</span></div>
    </div>
    <h1>227: 黍</h1>
    <div>
      <h4>黎: </h4><div><h5>lí: </h5><span>surname; numerous, many; black</span></div>
    </div>
    <div>
      <h4>黏: </h4><div><h5>nián: </h5><span>stick to; glutinous, sticky; glue</span></div>
    </div>
    <h1>228: 黑</h1>
    <div>
      <h4>黑: </h4><div><h5>hēi: </h5><span>black; dark; evil, sinister</span></div>
    </div>
    <div>
      <h4>黔: </h4><div><h5>qián: </h5><span>black; Guizhou</span></div>
    </div>
    <div>
      <h4>默: </h4><div><h5>mò: </h5><span>silent; quiet, still; dark</span></div>
    </div>
    <div>
      <h4>黛: </h4><div><h5>dài: </h5><span>blacken eyebrows; black</span></div>
    </div>
    <div>
      <h4>黝: </h4><div><h5>yǒu: </h5><span>black</span></div>
    </div>
    <div>
      <h4>黯: </h4><div><h5>àn: </h5><span>dark, black; sullen, dreary</span></div>
    </div>
    <h1>229: 鼎</h1>
    <div>
      <h4>鼎: </h4><div><h5>dǐng: </h5><span>large, three-legged bronze caldron</span></div>
    </div>
    </section>
    <section>
    <div>
      <h4>鼐: </h4><div><h5>nài: </h5><span>incense tripod</span></div>
    </div>
    <h1>230: 鼓</h1>
    <div>
      <h4>鼓: </h4><div><h5>gǔ: </h5><span>drum; beat, top, strike</span></div>
    </div>
    <h1>231: 鼠</h1>
    <div>
      <h4>鼠: </h4><div><h5>shǔ: </h5><span>rat, mouse; KangXi radical 208</span></div>
    </div>
    <div>
      <h4>鼬: </h4><div><h5>yòu: </h5><span>weasel, mustela itatis</span></div>
    </div>
    <div>
      <h4>鼹: </h4><div><h5>yǎn: </h5><span>a kind of insectivorous rodent</span></div>
    </div>
    <h1>232: 鼻</h1>
    <div>
      <h4>鼻: </h4><div><h5>bí: </h5><span>nose; first; KangXi radical 209</span></div>
    </div>
    <div>
      <h4>鼾: </h4><div><h5>hān: </h5><span>snore loudly</span></div>
    </div>
    <div>
      <h4>齁: </h4><div><h5>hōu: </h5><span>snore loudly; very, extremely</span></div>
    </div>
    <h1>233: 齒</h1>
    <div>
      <h4>齰: </h4><div><h5>zé: </h5><span>to bite</span></div>
    </div>
  </section>
  <section>
  </section>
`;

export default 打印;

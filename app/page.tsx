import ProcessCarousel from "./components/ProcessCarousel";

export default function Home() {
  return (
    <>
<header className="nav">
    <a className="brand" href="#top" aria-label="毛孩子宠物洗护首页">
      <span className="brand-mark">爪</span>
      <span>毛孩子宠物洗护</span>
    </a>
    <nav className="nav-links" aria-label="页面导航">
      <a href="#services">服务</a>
      <a href="#process">流程</a>
      <a href="#pricing">价格</a>
      <a href="#contact">联系</a>
    </nav>
    <a className="button" href="#booking">预约洗护</a>
  </header>

  <main id="top">
    <section className="hero" aria-label="宠物洗护介绍">
      <div className="hero-copy">
        <span className="eyebrow">温和洗护 · 独立烘干 · 可视化护理</span>
        <h1>让毛孩子干净、舒服、被好好照顾</h1>
        <p>从基础洗澡到精修造型，我们按宠物体型、毛量和皮肤状态制定护理方案。全程使用低刺激洗护用品，减少应激，洗完香香软软。</p>
        <div className="hero-actions">
          <a className="button" href="#booking">立即预约</a>
          <a className="button secondary" href="#pricing">查看套餐</a>
        </div>
      </div>
      <div className="hero-media">
        <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=82" alt="两只干净可爱的宠物犬" />
        <div className="hours">
          <strong>可预约时间</strong>
          <div className="hours-list">
            <span>工作日 10:00 - 20:00</span>
            <span>节假日 09:30 - 21:00</span>
          </div>
          <p>建议提前 2 小时预约，猫咪护理提供安静时段。</p>
        </div>
      </div>
    </section>

    <section id="services">
      <div className="section-title">
        <h2>常用洗护服务</h2>
        <p>覆盖日常清洁、换季护理和造型修剪，适合猫咪、小型犬、中大型犬等不同需求。</p>
      </div>
      <div className="service-grid">
        <article className="card">
          <div className="icon" aria-hidden="true">浴</div>
          <h3>基础洁净洗</h3>
          <p>温水冲洗、专用沐浴、护毛素、吹干梳理，适合每月日常清洁。</p>
        </article>
        <article className="card">
          <div className="icon" aria-hidden="true">剪</div>
          <h3>精致造型修剪</h3>
          <p>面部、脚底、肚底和整体造型修剪，兼顾可爱外观与行动舒适。</p>
        </article>
        <article className="card">
          <div className="icon" aria-hidden="true">护</div>
          <h3>皮毛深层护理</h3>
          <p>针对打结、掉毛、干燥和敏感皮肤，提供开结、SPA 和护肤方案。</p>
        </article>
      </div>
    </section>

    <section className="process" id="process">
        <ProcessCarousel />
<div>
        <div className="section-title">
          <h2>洗护流程清楚放心</h2>
          <p>洗护前会先了解宠物年龄、性格、皮肤状态、毛结程度和既往敏感史，再选择对应的洗护用品与水温。护理过程覆盖耳眼清洁、指甲修剪、脚底毛修整、肛门腺检查、深层冲洗和分区吹干，尽量减少应激，让宠物干净、蓬松、舒适地回家。</p>
        </div>
        <div className="care-detail" aria-label="洗护详情">
          <div className="care-detail-item">
            <strong>洗前检查</strong>
            <span>确认皮肤红痒、毛结、耳道和指甲情况，敏感宠物单独标记护理注意点。</span>
          </div>
          <div className="care-detail-item">
            <strong>温和清洗</strong>
            <span>按犬猫肤质选用低刺激产品，重点清洁腹部、脚掌、尾根和容易藏污区域。</span>
          </div>
          <div className="care-detail-item">
            <strong>细节护理</strong>
            <span>包含耳眼清洁、脚底毛、腹底毛、指甲和基础梳理，长毛宠物会分层开结。</span>
          </div>
          <div className="care-detail-item">
            <strong>吹干反馈</strong>
            <span>独立烘干与人工吹梳结合，结束后反馈皮肤、掉毛、毛结和日常护理建议。</span>
          </div>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-number">01</div>
            <div>
              <h3>到店评估</h3>
              <p>检查毛结、皮肤、耳朵和指甲状态，确认护理方案。</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">02</div>
            <div>
              <h3>清洁护理</h3>
              <p>温和清洗、耳眼护理、指甲修剪、脚底毛清理。</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">03</div>
            <div>
              <h3>吹干造型</h3>
              <p>独立烘干和手工梳理，完成后发送护理反馈。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="pricing">
      <div className="section-title">
        <h2>透明套餐价格</h2>
        <p>最终价格会根据体型、毛量、打结情况微调，到店评估后再开始护理。</p>
      </div>
      <div className="price-grid">
        <article className="card price">
          <h3>小型犬基础洗</h3>
          <div className="price-tag">¥88 <small>起</small></div>
          <ul>
            <li>适合 10kg 以下犬只</li>
            <li>洗澡、吹干、基础梳理</li>
            <li>耳眼清洁、指甲修剪</li>
          </ul>
        </article>
        <article className="card price featured">
          <h3>猫咪安静洗护</h3>
          <div className="price-tag">¥168 <small>起</small></div>
          <ul>
            <li>预约制安静时段</li>
            <li>低刺激猫咪专用洗护</li>
            <li>独立烘干箱与人工安抚</li>
          </ul>
        </article>
        <article className="card price">
          <h3>全身造型套餐</h3>
          <div className="price-tag">¥238 <small>起</small></div>
          <ul>
            <li>基础洗护全项目</li>
            <li>全身修剪或品种造型</li>
            <li>毛结处理另行评估</li>
          </ul>
        </article>
      </div>
    </section>

    <section className="contact" id="contact">
      <div>
        <div className="section-title">
          <h2>预约到店</h2>
          <p>填写信息后我们会尽快确认时间。也可以直接电话咨询当天空档。</p>
        </div>
        <div className="contact-info">
          <div className="info-item">
            <strong>门店地址</strong>
            <p>上海市宜川路街道陕西北路1620号</p>
          </div>
          <div className="info-item">
            <strong>联系电话</strong>
            <p>138-0000-2026</p>
          </div>
          <div className="info-item">
            <strong>营业时间</strong>
            <p>周一至周日 10:00 - 20:00</p>
          </div>
          <div className="info-item">
            <strong>适用宠物</strong>
            <p>猫咪、小型犬、中大型犬</p>
          </div>
        </div>
        <div className="store-map" aria-label="门店位置示意地图">
          <img className="store-map-image" src="/assets/cute-pet-shop-map.png" alt="可爱宠物风格地图，标记毛孩子宠物洗护位于上海市宜川路街道陕西北路1620号" />
        </div>
      </div>
      <form className="booking" id="booking">
        <h3>快速预约</h3>
        <div className="form-row">
          <label htmlFor="name">您的称呼</label>
          <input id="name" name="name" placeholder="例如：王女士" required />
        </div>
        <div className="form-row">
          <label htmlFor="phone">联系电话</label>
          <input id="phone" name="phone" type="tel" placeholder="请输入手机号" required />
        </div>
        <div className="form-row">
          <label htmlFor="visitDate">期望到店日期</label>
          <input id="visitDate" name="visitDate" type="date" required />
        </div>
        <div className="form-row">
          <label htmlFor="pet">宠物类型</label>
          <select id="pet" name="pet">
            <option>小型犬</option>
            <option>中大型犬</option>
            <option>猫咪</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="message">护理需求</label>
          <textarea id="message" name="message" placeholder="例如：洗澡、修毛、毛结比较多"></textarea>
        </div>
        <button className="button" type="submit">提交预约</button>
      </form>
    </section>
  </main>

  <footer>
    © 2026 毛孩子宠物洗护 · 温柔清洁，安心护理
  </footer>
    </>
  );
}

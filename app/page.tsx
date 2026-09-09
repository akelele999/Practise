const services = [
  {
    no: "01",
    title: "Horizontal Directional Drilling",
    text: "งานติดตั้งระบบใต้ดินด้วยวิธี HDD สำหรับแนวข้ามถนน แนวสาธารณูปโภค และพื้นที่ที่ต้องลดผลกระทบต่อผิวจราจร",
  },
  {
    no: "02",
    title: "Underground Utility Installation",
    text: "งานติดตั้งท่อและโครงสร้างพื้นฐานใต้ดินสำหรับระบบไฟฟ้าและสาธารณูปโภค พร้อมการวางแผนแนวงานอย่างเป็นระบบ",
  },
  {
    no: "03",
    title: "Civil & Supporting Works",
    text: "งานโยธา งานเปิดบ่อ งานสนับสนุนเครื่องจักร และการเตรียมหน้างานเพื่อให้การดำเนินงานต่อเนื่องและควบคุมได้",
  },
];

const equipment = [
  ["HDD 36 TON", "Heavy-duty directional drilling"],
  ["HDD 15 TON", "Medium-scale utility installation"],
  ["HDD 12 TON", "Compact HDD operations"],
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="UNC Network home">
          <span className="brandMark">UNC</span>
          <span className="brandText">NETWORK</span>
        </a>
        <nav className="menu" aria-label="Primary navigation">
          <a href="#services">บริการ</a>
          <a href="#equipment">เครื่องจักร</a>
          <a href="#projects">ผลงาน</a>
          <a href="#safety">Safety & Quality</a>
        </nav>
        <a className="navCta" href="#contact">ขอใบเสนอราคา</a>
      </header>

      <section className="hero" id="top">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">UNDERGROUND INFRASTRUCTURE / THAILAND</p>
            <h1>
              งานระบบใต้ดิน
              <span>ที่ขับเคลื่อนด้วยความแม่นยำ</span>
            </h1>
            <p className="heroLead">
              UNC Network ให้บริการ Horizontal Directional Drilling (HDD) และงานโครงสร้างพื้นฐานใต้ดิน
              สำหรับโครงการที่ต้องการความพร้อมของเครื่องจักร การวางแผน และการควบคุมหน้างานอย่างมืออาชีพ
            </p>
            <div className="actions">
              <a className="button buttonPrimary" href="#contact">ขอใบเสนอราคา <span>↗</span></a>
              <a className="button buttonGhost" href="#projects">ดูผลงาน</a>
            </div>
          </div>

          <div className="heroVisual" aria-label="พื้นที่สำหรับภาพหน้างานจริงของ UNC Network">
            <div className="technicalGrid" />
            <div className="visualLabel">
              <span>PROJECT PHOTOGRAPHY</span>
              <strong>HDD / UNDERGROUND UTILITY</strong>
              <small>Replace with verified UNC Network field photography</small>
            </div>
            <div className="specTag">ENGINEERING • EQUIPMENT • EXECUTION</div>
          </div>
        </div>
      </section>

      <section className="capabilityBar">
        <div className="shell capabilityGrid">
          <p>REAL EQUIPMENT</p>
          <p>FIELD CAPABILITY</p>
          <p>STRUCTURED EXECUTION</p>
          <p>SAFETY & QUALITY</p>
        </div>
      </section>

      <section className="section shell" id="services">
        <div className="sectionHeading">
          <p className="eyebrow">CORE SERVICES</p>
          <h2>ความสามารถหลักของเรา</h2>
          <p>เน้นงาน Infrastructure ที่ต้องใช้ความพร้อมของทีม เครื่องจักร และการประสานงานหน้างานจริง</p>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.no}>
              <span className="serviceNo">{service.no}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="linkHint">รายละเอียดบริการ ↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="darkSection" id="equipment">
        <div className="shell equipmentLayout">
          <div>
            <p className="eyebrow eyebrowLight">EQUIPMENT CAPABILITY</p>
            <h2>เครื่องจักรที่พร้อมสำหรับงานจริง</h2>
            <p className="mutedLight">
              แสดงเครื่องจักรของบริษัทพร้อม Capacity และ Application เพื่อให้ลูกค้าเห็น Operational Capability ได้ทันที
            </p>
          </div>
          <div className="equipmentList">
            {equipment.map(([name, desc]) => (
              <div className="equipmentRow" key={name}>
                <strong>{name}</strong>
                <span>{desc}</span>
                <span className="arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="projects">
        <div className="sectionHeading splitHeading">
          <div>
            <p className="eyebrow">PROJECT EVIDENCE</p>
            <h2>ผลงานคือหลักฐานของความสามารถ</h2>
          </div>
          <p>โครงสร้างหน้า Project จะรองรับข้อมูล Scope, ระยะ HDD, ขนาดท่อ, เครื่องจักร, Site Condition และภาพหน้างานจริง</p>
        </div>
        <div className="projectPlaceholder">
          <span>FEATURED PROJECT</span>
          <h3>[ชื่อโครงการจริง]</h3>
          <p>[Location] · [HDD Length] · [Pipe Size] · [Machine]</p>
          <a href="#contact">ดู Case Study ↗</a>
        </div>
      </section>

      <section className="qualitySection" id="safety">
        <div className="shell qualityGrid">
          <div>
            <p className="eyebrow">SAFETY & QUALITY</p>
            <h2>การทำงานที่มีระบบ ไม่ใช่แค่มีเครื่องจักร</h2>
          </div>
          <div className="qualityPoints">
            <span>01 / Risk Assessment</span>
            <span>02 / Utility Verification</span>
            <span>03 / Equipment Inspection</span>
            <span>04 / Quality Control Documentation</span>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="shell footerGrid">
          <div>
            <p className="eyebrow eyebrowLight">START A PROJECT</p>
            <h2>กำลังวางแผนงานระบบใต้ดิน?</h2>
            <p>พูดคุย Scope งาน, Site Condition, HDD Feasibility และขอใบเสนอราคากับ UNC Network</p>
          </div>
          <div className="footerActions">
            <a className="button buttonLight" href="mailto:info@example.com">ติดต่อ UNC Network ↗</a>
            <small>ข้อมูลติดต่อจริงจะถูกแทนที่เมื่อได้รับการยืนยัน</small>
          </div>
        </div>
        <div className="shell footerBottom">
          <span>UNC NETWORK</span>
          <span>UNDERGROUND INFRASTRUCTURE & HDD CONTRACTOR</span>
        </div>
      </footer>
    </main>
  );
}

# การจัดเก็บรูปและไฟล์เว็บไซต์ UNC

## หลักการสำคัญ

ไฟล์ต้นฉบับคุณภาพสูงไม่ควรเก็บทั้งหมดใน GitHub เพราะ repository จะใหญ่และช้าลง

แนะนำให้แยกเป็น 2 ชั้น:

1. **ไฟล์ต้นฉบับ** — เก็บในพื้นที่เก็บไฟล์ของบริษัท เช่น Google Drive / OneDrive / NAS
2. **ไฟล์สำหรับเว็บ** — เลือกเฉพาะรูปที่ใช้งานจริง ปรับขนาดแล้วเก็บใน `public/images/`

## โครงสร้างรูปบนเว็บ

```text
public/images/
  brand/
    unc-logo.svg
    unc-logo-white.svg
  home/
    hero-hdd.webp
  projects/
    orange-line-ivs03/
      cover.webp
      01-site.webp
      02-drilling.webp
      03-pipe-pullback.webp
    orange-line-or10/
      cover.webp
  equipment/
    goodeng-gs360-ls.webp
    xcmg-xz360e.webp
  team/
    field-team.webp
```

## การตั้งชื่อไฟล์

ใช้ภาษาอังกฤษตัวเล็กและ `-` คั่นคำ

ดี:

- `orange-line-ivs03-cover.webp`
- `goodeng-gs360-ls-side.webp`
- `field-team-survey.webp`

ไม่แนะนำ:

- `IMG_4728.JPG`
- `รูปใหม่สุดจริงๆ2.jpg`
- `งานอิตาเลียนไทย final FINAL.jpg`

## ขนาดแนะนำ

ไม่ต้องอัปโหลดภาพกล้อง 8–20 MB ขึ้นเว็บโดยตรง

- Hero: กว้างประมาณ 1920–2400 px
- Project cover: 1600–2000 px
- Gallery: 1400–1800 px
- Card/thumbnail: ใช้ต้นทางอย่างน้อย 1000–1400 px

ใช้ WebP หรือ AVIF สำหรับภาพถ่ายบนเว็บเมื่อทำได้ ส่วน Logo ใช้ SVG หรือ PNG โปร่งใส

## ก่อนนำรูปขึ้นเว็บ

ตรวจ 5 เรื่อง:

- รูปเป็นผลงาน UNC จริง
- สามารถเผยแพร่ได้
- ไม่มีข้อมูลลูกค้าหรือเอกสารลับติดในภาพ
- ไม่มีทะเบียนรถ/ใบอนุญาต/ข้อมูลส่วนบุคคลที่ไม่ควรเผยแพร่โดยไม่จำเป็น
- รูปไม่เบลอและสื่อสารงานได้จริง

## การเพิ่มรูปโครงการแบบปลอดภัย

ตัวอย่างเพิ่มรูป IVS03:

1. สร้าง branch `content/add-ivs03-images`
2. ใส่รูปใน `public/images/projects/orange-line-ivs03/`
3. แก้ path รูปใน `content/projects.ts`
4. เปิด Preview ดู Desktop + Mobile
5. ผ่านแล้ว merge

อย่าเปลี่ยนชื่อไฟล์รูปที่ถูกใช้งานอยู่โดยไม่แก้ path ใน content เพราะรูปจะหายจากหน้าเว็บ

## Company Profile

เก็บไฟล์ที่ใช้บนเว็บไซต์ไว้ใน:

```text
public/documents/company-profile-th.pdf
public/documents/company-profile-en.pdf
```

ไฟล์ต้นฉบับ PowerPoint/Illustrator/Word ควรเก็บในพื้นที่เอกสารบริษัท ไม่จำเป็นต้องอยู่ใน GitHub

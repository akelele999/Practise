# ขั้นตอนทำงานเว็บไซต์ UNC

เอกสารนี้เป็นกติกาหลักเพื่อให้แก้เว็บได้โดยไม่พังของจริง

## หลักสำคัญ

- `main` = เวอร์ชันที่พร้อมใช้งานจริง ห้ามแก้ตรง ๆ
- งานใหม่ทุกครั้งสร้าง branch แยก เช่น `feature/projects-page` หรือ `content/add-airport-project`
- ทุก branch ต้องมี Vercel Preview ให้เปิดดูจริงก่อน merge
- ผ่านการตรวจแล้วค่อย merge เข้า `main`
- ทุกครั้งที่ขึ้น Production เวอร์ชันสำคัญให้ติด tag เช่น `v0.1.0`, `v0.2.0`, `v1.0.0`

## ขั้นตอนแก้เว็บที่ปลอดภัย

1. อัปเดต `main` ให้ล่าสุด
2. สร้าง branch ใหม่
3. แก้เฉพาะเรื่องเดียวให้จบใน branch นั้น
4. รัน `npm run build` และตรวจหน้าเว็บ
5. Push ขึ้น GitHub
6. เปิด Vercel Preview และตรวจบน Desktop + Mobile
7. เปิด Pull Request เพื่อดูว่าไฟล์ไหนเปลี่ยน
8. ผ่านแล้วจึง merge เข้า `main`
9. Vercel deploy Production จาก `main`

## รูปแบบชื่อ branch

- `feature/...` เพิ่มฟังก์ชันหรือหน้าใหม่
- `content/...` แก้ข้อความ รูป หรือข้อมูลโครงการ
- `fix/...` แก้บั๊ก
- `design/...` ปรับดีไซน์
- `security/...` ปรับความปลอดภัย

ตัวอย่าง:

- `feature/bilingual-routing`
- `content/add-ivs03-gallery`
- `design/home-project-showcase`
- `fix/mobile-menu`

## Commit ที่ดี

หนึ่ง commit ควรอธิบายการเปลี่ยนแปลงหนึ่งเรื่อง เช่น

- `feat: add Thai and English routes`
- `content: add Orange Line IVS03 project`
- `design: refine home section spacing`
- `fix: improve mobile project cards`
- `security: add response security headers`

หลีกเลี่ยงข้อความเช่น `update`, `แก้`, `test123` เพราะย้อนดูภายหลังยาก

## เวอร์ชัน

ใช้แนวคิด Semantic Versioning แบบง่าย:

- `v0.1.0` โครงสร้างเว็บชุดแรก
- `v0.2.0` เพิ่มหน้า/ฟังก์ชันสำคัญ
- `v0.2.1` แก้บั๊กหรือข้อความเล็กน้อย
- `v1.0.0` เวอร์ชันพร้อมเปิดใช้งานจริง

## กฎก่อน Merge

ต้องตอบว่า “ผ่าน” ทุกข้อ:

- Build ผ่าน
- ไม่มีข้อมูลทดสอบหรือ placeholder หลุดขึ้น Production
- ไทยและอังกฤษไม่ปนกัน
- รูปมีขนาดเหมาะสม
- Mobile ไม่ล้น
- ลิงก์และปุ่มใช้งานได้
- ไม่มีรหัสผ่าน กุญแจ API หรือข้อมูลลับอยู่ในโค้ด
- Preview ได้รับการตรวจแล้ว

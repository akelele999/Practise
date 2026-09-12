# โครงสร้างเว็บไซต์ UNC

เป้าหมายคือให้เว็บแก้ง่าย โหลดไว แยกข้อมูลออกจากหน้าตา และรองรับไทย/อังกฤษตั้งแต่ต้น

## โครงสร้างที่ใช้

```text
app/
  page.tsx                 # ส่งผู้ใช้ไป /th
  [locale]/
    layout.tsx             # layout ตามภาษา
    page.tsx               # หน้าแรก
    about-us/page.tsx
    services/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    equipment/page.tsx
    contact/page.tsx

components/
  layout/                  # Header, Footer, Language switcher
  sections/                # Hero, Services, Projects, Equipment ฯลฯ
  ui/                      # Button, SectionHeading, ProjectCard ฯลฯ

content/
  site.ts                  # ข้อมูลบริษัทและช่องทางติดต่อ
  services.ts              # รายการบริการ TH/EN
  projects.ts              # ข้อมูลโครงการ TH/EN
  equipment.ts             # เครื่องจักรและอุปกรณ์ TH/EN

lib/
  locale.ts                # ระบบภาษา
  metadata.ts              # SEO helper
  utils.ts                 # utility เล็ก ๆ

types/
  content.ts               # รูปแบบข้อมูล TypeScript

public/
  images/
    brand/
    home/
    projects/<project-slug>/
    equipment/
    team/
  documents/
    company-profile-th.pdf
    company-profile-en.pdf

docs/
  ARCHITECTURE.md
  WORKFLOW.md
  ASSETS.md
```

## หลักการออกแบบโค้ด

### 1. เนื้อหาไม่ฝังในหน้าเว็บ

ชื่อโครงการ ตัวเลข เครื่องจักร คำอธิบาย และช่องทางติดต่อเก็บใน `content/` แล้วหน้าเว็บดึงไปแสดง

ผลคือเวลาแก้ข้อความหรือเพิ่มโครงการ ไม่ต้องเข้าไปแก้ JSX ซับซ้อน

### 2. ไทยกับอังกฤษใช้ข้อมูลชุดเดียวกัน แต่ข้อความแยก field

ตัวอย่างแนวคิด:

```ts
{
  slug: "orange-line-ivs03",
  title: {
    th: "รถไฟฟ้าสายสีส้ม — IVS03",
    en: "Orange Line — IVS03"
  }
}
```

หน้า `/th/...` อ่านเฉพาะ `th` และหน้า `/en/...` อ่านเฉพาะ `en`

### 3. รูปใช้ Next Image

รูปบนหน้าเว็บใช้ `next/image` เพื่อสร้างขนาดที่เหมาะกับหน้าจอ ลดไฟล์ และช่วยโหลดแบบ lazy loading อัตโนมัติ

### 4. Server Component เป็นค่าเริ่มต้น

หน้าและ section ที่ไม่จำเป็นต้อง interactive จะเป็น Server Component เพื่อลด JavaScript ที่ส่งไป browser

เฉพาะ animation, mobile menu, project showcase หรือ form ที่ต้องโต้ตอบจึงใช้ Client Component

### 5. Animation ต้องไม่ทำให้เว็บหนัก

ใช้ CSS animation และ IntersectionObserver ก่อน หากไม่พอจึงค่อยเพิ่ม library ด้าน motion เฉพาะจุด

### 6. URL ภาษาแยกชัดเจน

- `/th`
- `/en`
- `/th/projects`
- `/en/projects`
- `/th/projects/orange-line-ivs03`
- `/en/projects/orange-line-ivs03`

### 7. ไม่มีฐานข้อมูลในระยะแรก

เว็บไซต์บริษัทชุดแรกใช้ static/local content เพื่อให้เร็ว ปลอดภัย และดูแลง่าย

หากจำนวนโครงการเพิ่มมากหรือมีหลายคนแก้เนื้อหา ค่อยย้าย `content/` ไป CMS ภายหลังโดยไม่ต้องรื้อหน้าตาเว็บ

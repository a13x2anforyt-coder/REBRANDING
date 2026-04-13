import React, { useState } from 'react';
import { Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';

function App() {
  const [modalData, setModalData] = useState<{
    image: string;
    tag: string;
    title: string;
    subtitle: string;
    description: React.ReactNode;
  } | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans text-[#4A3525] bg-[#F9F6F0] min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#F9F6F0] py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-2">
          <img src="Logo.png" alt="ลุงดำ โลโก้" className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold">ลุงดำ</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#" className="hover:text-[#8B5A2B] transition-colors">หน้าแรก</a>
          <a href="#promotion" className="hover:text-[#8B5A2B] transition-colors">โปรโมชั่น</a>
          <a href="#menu" className="hover:text-[#8B5A2B] transition-colors">เมนู</a>
          <a href="#about" className="hover:text-[#8B5A2B] transition-colors">เกี่ยวกับ</a>
          <a href="#contact" className="hover:text-[#8B5A2B] transition-colors">ติดต่อ</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F9F6F0] absolute top-[68px] left-0 w-full flex flex-col items-center py-4 gap-4 shadow-md z-40">
          <a href="#" className="font-medium" onClick={() => setIsMobileMenuOpen(false)}>หน้าแรก</a>
          <a href="#promotion" className="font-medium" onClick={() => setIsMobileMenuOpen(false)}>โปรโมชั่น</a>
          <a href="#menu" className="font-medium" onClick={() => setIsMobileMenuOpen(false)}>เมนู</a>
          <a href="#about" className="font-medium" onClick={() => setIsMobileMenuOpen(false)}>เกี่ยวกับ</a>
          <a href="#contact" className="font-medium" onClick={() => setIsMobileMenuOpen(false)}>ติดต่อ</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="view3.png"
            alt="Cafe Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white flex flex-col items-center">
          <div className="border border-white/50 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="tracking-widest text-sm font-light">REBRANDING</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 drop-shadow-lg">ลุงดำ</h1>
          <p className="text-xl md:text-2xl font-light tracking-wide">"เพื่อนบ้านที่จริงใจและใส่ใจคุณภาพ"</p>
        </div>
      </section>

      {/* Promotion Section */}
      <section id="promotion" className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src="Promo.png" 
              alt="Promotion Food" 
              className="w-full h-auto rounded-lg shadow-lg object-cover aspect-square md:aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-[#6B4E31]">โปรโมชั่น</h2>
            <h3 className="text-xl tracking-widest mb-6 font-medium">THE TASTE OF HOME</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              "จากรสชาติที่คุ้นเคยในครัวหลังบ้าน สู่มาตรฐานความใส่ใจระดับคาเฟ่
ร้านลุงดำมุ่งมั่นส่งต่อความอร่อยที่จริงใจ ผ่านวัตถุดิบคุณภาพและการบริการที่อบอุ่นเหมือนเพื่อนบ้าน" <br/>
              
            </p>
            <button 
              onClick={() => setModalData({
                image: 'Promo.png',
                tag: 'SPECIAL PROMO',
                title: 'เซ็ตปิ่นโตแห่งความสุข',
                subtitle: 'ราคาพิเศษเพียง 299.- (จากปกติ 350.-)',
                description: (
                  <>
                    <p>อิ่มอร่อยกับเซ็ตปิ่นโตที่จัดเตรียมด้วยความใส่ใจ ในเซ็ตประกอบด้วย:</p>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li>ข้าวสวยหอมมะลิร้อนๆ 2 ที่</li>
                      <li>กับข้าวเลือกได้ 3 อย่าง (จากเมนูแนะนำ)</li>
                      <li>ขนมหวานประจำวัน 2 ที่</li>
                      <li>ฟรี! เครื่องดื่มสมุนไพร 2 แก้ว</li>
                    </ul>
                    <p className="text-sm text-gray-500 italic mt-4">* โปรโมชั่นนี้เฉพาะสั่งกลับบ้านหรือเดลิเวอรี่เท่านั้น หมดเขตสิ้นเดือนนี้</p>
                  </>
                )
              })}
              className="bg-[#4A3525] text-white px-8 py-3 rounded-full hover:bg-[#6B4E31] transition-colors font-medium tracking-wide"
            >
              VIEW MORE
            </button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="bg-[#6B4E31] text-[#F9F6F0] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">เมนูแนะนำ (Menu)</h2>
            <p className="font-light text-[#E8DCC4]">คัดสรรวัตถุดิบคุณภาพ รสชาติอร่อยถูกปาก</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            {/* Category 1 */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 border-b border-[#E8DCC4]/30 pb-2">อาหารจานเดียว</h3>
              <div className="space-y-4">
                <MenuItem name="ข้าวกะเพราหมูสับ" price="60.-" />
                <MenuItem name="ข้าวผัดกุ้ง" price="70.-" />
                <MenuItem name="ข้าวหมูทอดกระเทียม" price="60.-" />
                <MenuItem name="ผัดไทยกุ้งสด" price="75.-" />
                <MenuItem name="สุกี้น้ำ/แห้ง" price="65.-" />
              </div>
            </div>

            {/* Category 2 */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 border-b border-[#E8DCC4]/30 pb-2">เครื่องดื่ม</h3>
              <div className="space-y-4">
                <MenuItem name="ชาเย็น" price="40.-" />
                <MenuItem name="กาแฟเย็น" price="45.-" />
                <MenuItem name="น้ำมะนาว" price="35.-" />
                <MenuItem name="โอเลี้ยง" price="30.-" />
                <MenuItem name="น้ำเก๊กฮวย" price="30.-" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#FAF6F0] relative overflow-hidden">
        {/* Decorative background pattern placeholder */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4A3525 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#6B4E31] tracking-wider">SET CATERING</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Set 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center flex flex-col items-center">
              <img 
                src="Promo.png" 
                alt="Set Catering A" 
                className="w-full h-64 object-cover rounded-xl mb-6"
                referrerPolicy="no-referrer"
              />
              <h3 className="text-2xl font-bold mb-2">PINTO SERVICE</h3>
              <p className="text-gray-600 mb-6">เหมาะสำหรับนักเรียน</p>
              <button 
                onClick={() => setModalData({
                  image: 'Promo.png', // รูปของ Set A
                  tag: 'CATERING SET',
                  title: 'PINTO SERVICE',
                  subtitle: 'เหมาะสำหรับนักเรียน',
                  description: (
                    <>
                      <p>เซ็ตอาหารจัดเลี้ยงขนาดเล็กสุดคุ้ม ประกอบด้วย:</p>
                      <ul className="list-disc list-inside space-y-2 ml-2">
                        <li>ข้าวสวยหอมมะลิ</li>
                        <li>กับข้าว 5 อย่าง (เลือกได้)</li>
                        <li>ขนมหวาน 1 อย่าง</li>
                        <li>น้ำสมุนไพร</li>
                      </ul>
                    </>
                  )
                })}
                className="bg-[#4A3525] text-white px-8 py-2 rounded-full hover:bg-[#6B4E31] transition-colors"
              >
                VIEW MORE
              </button>
            </div>

            {/* Set 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center flex flex-col items-center">
              <img 
                src="SetB.png"
                alt="SET BREAK" 
                className="w-full h-64 object-cover rounded-xl mb-6"
                referrerPolicy="no-referrer"
              />
              <h3 className="text-2xl font-bold mb-2">SET BRAKE</h3>
              <p className="text-gray-600 mb-6">เหมาะสำหรับงานประชุม</p>
              <button 
                onClick={() => setModalData({
                  image: 'SetB.png', // รูปของ Set B
                  tag: 'CATERING SET',
                  title: 'SET B',
                  subtitle: 'เหมาะสำหรับงานประชุม',
                  description: (
                    <>
                      <p>เซ็ตอาหารจัดเลี้ยงขนาดกลาง จัดเต็มความอร่อย ประกอบด้วย:</p>
                      <ul className="list-disc list-inside space-y-2 ml-2">
                        <li>ข้าวสวยหอมมะลิ</li>
                        <li>กับข้าว 7 อย่าง (เลือกได้)</li>
                        <li>ขนมหวาน 2 อย่าง</li>
                        <li>น้ำสมุนไพร</li>
                      </ul>
                    </>
                  )
                })}
                className="bg-[#4A3525] text-white px-8 py-2 rounded-full hover:bg-[#6B4E31] transition-colors"
              >
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-5/12">
            <img 
              src="ABOUT-2.png" 
              alt="ลุงดำ" 
              className="w-full h-auto rounded-3xl shadow-lg object-cover aspect-[3/4]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-7/12 flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-[#6B4E31]">ABOUT</h2>
            <h3 className="text-2xl mb-8 font-medium">ปรัชญาการออกแบบ</h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                "เพื่อนบ้านที่จริงใจและใส่ใจคุณภาพ" คือบุคลิกภาพหลักของแบรนด์ร้านลุงดำ เราเน้นความอบอุ่น เป็นมิตร (Friendly) และเข้าถึงง่าย (Approachable) สำหรับทุกคนไม่ว่าจะเป็นนักเรียน นักศึกษา หรือคนทำงานในพื้นที่
              </p>
              <p>
                โลโก้ของเราเลือกใช้ลายเส้นตัวการ์ตูนคุณลุง เพื่อสื่อถึง 'สูตรอาหารดั้งเดิมที่ทำด้วยความใส่ใจ' โดยนำเสนอผ่านรูปลักษณ์ที่ทันสมัยในรูปแบบ Minimal Line Art
              </p>
              <p>
                เราใช้โทนสีที่ดูสะอาดตา ทันสมัย และอบอุ่น ผสมผสานกับสีน้ำตาลที่สื่อถึงความเป็นคาเฟ่และความพิถีพิถันในการปรุงอาหารทุกจาน
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#4A3525] text-[#F9F6F0] py-12 px-6 md:px-12 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
              <img src="Logo.png" alt="ลุงดำ โลโก้" className="w-12 h-12 object-contain" />
              <span className="text-2xl font-bold">ลุงดำ</span>
            </div>
            <p className="text-sm text-[#E8DCC4]">เพื่อนบ้านที่จริงใจและใส่ใจคุณภาพ</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <p className="text-sm text-[#E8DCC4] mb-2">39/3 Thanon Bang Phrom,</p>
            <p className="text-sm text-[#E8DCC4] mb-2">Khwaeng Bang Phrom, Khet Taling Chan,</p>
            <p className="text-sm text-[#E8DCC4]">Krung Thep Maha Nakhon 10170</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Opening Hours</h4>
            <p className="text-sm text-[#E8DCC4] mb-2">จันทร์ - ศุกร์: 06:00 - 16:00</p>
            <p className="text-sm text-[#E8DCC4]">เสาร์ - อาทิตย์: 06:00 - 16:00</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#6B4E31] flex items-center justify-center hover:bg-[#8B5A2B] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#6B4E31] flex items-center justify-center hover:bg-[#8B5A2B] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#6B4E31] flex items-center justify-center hover:bg-[#8B5A2B] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#6B4E31] text-center text-sm text-[#E8DCC4]">
          &copy; {new Date().getFullYear()} ลุงดำ. All rights reserved.
        </div>
      </footer>

      {/* Modal Overlay */}
      {modalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div 
            className="bg-[#F9F6F0] rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-200"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative h-64 md:h-80">
              <img 
                src={modalData.image} 
                alt={modalData.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setModalData(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#4A3525] hover:bg-white transition-colors shadow-sm"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8 md:p-10">
              <div className="inline-block bg-[#6B4E31] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider">
                {modalData.tag}
              </div>
              <h2 className="text-3xl font-bold text-[#4A3525] mb-2">{modalData.title}</h2>
              <p className="text-xl text-[#8B5A2B] mb-6 font-medium">{modalData.subtitle}</p>
              
              <div className="space-y-4 text-gray-700 mb-8">
                {modalData.description}
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-[#4A3525] text-white py-3 rounded-xl font-medium hover:bg-[#6B4E31] transition-colors">
                  สั่งเลยตอนนี้
                </button>
                <button 
                  onClick={() => setModalData(null)}
                  className="flex-1 border-2 border-[#4A3525] text-[#4A3525] py-3 rounded-xl font-medium hover:bg-[#4A3525]/5 transition-colors"
                >
                  ปิด
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MenuItem({ name, price }: { name: string, price: string }) {
  return (
    <div className="flex items-end justify-between group">
      <span className="text-lg font-medium group-hover:text-[#E8DCC4] transition-colors">{name}</span>
      <div className="flex-grow border-b-2 border-dotted border-[#E8DCC4]/30 mx-4 mb-2 relative top-[-4px]"></div>
      <span className="text-lg font-semibold">{price}</span>
    </div>
  );
}

export default App;

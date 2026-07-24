/* ==========================================================================
   NTX DYNAMICS - JAVASCRIPT LOGIC
   ========================================================================== */

const translations = {
  en: {
    nav_home: "HOME",
    nav_about: "ABOUT US",
    nav_solutions: "SOLUTIONS",
    nav_projects: "PROJECTS",
    nav_contacts: "CONTACTS",
    nav_careers: "CAREERS",
    nav_profile: "PROFILE",
    
    hero_title: 'Pioneering High-Performance <span class="accent-text">Dynamics & Technology</span>',
    hero_subtitle: 'NTX Dynamics delivers state-of-the-art engineering solutions, industrial automation, industrial calibration & supply, and custom robotics built for high reliability and scale.',
    btn_explore: 'Explore Solutions',
    btn_contact: 'Contact Us',
    
    metric_projects: 'Accumulated Projects',
    metric_reliability: '% System Reliability',
    metric_engineers: 'Core Engineers (8-10 Yrs Exp)',
    metric_monitoring: 'Real-time Monitoring',
    
    tag_about: 'ABOUT US',
    title_about: 'NTX DYNAMICS ENGINEERING &amp; TECHNOLOGIES CO., LTD.',
    desc_about: 'Pioneering high-performance engineering solutions and smart industrial automation.',
    
    about_card1_title: 'Core Expertise',
    about_card1_desc: 'A team of 5 core engineers with 8-10 years of R&D and field experience, delivering designs with outstanding technical depth.',
    about_card2_title: '150+ Accumulated Projects',
    about_card2_desc: 'Rich experience accumulated over 150+ high-tech projects for international partners and FDI enterprises.',
    about_card3_title: 'International Recognition',
    about_card3_desc: 'Global-standard solutions, featuring prominent projects that have been covered by major international news networks like <strong>ABC News</strong> and <strong>Fox News</strong>.',
    
    tag_solutions: 'OUR SOLUTIONS',
    title_solutions: 'Areas of Expertise',
    desc_solutions: 'Providing comprehensive software, hardware, and smart infrastructure solutions.',
    
    sol1_title: 'Calibration &amp; Measurement',
    sol1_desc: 'Providing complete laboratory measurement instruments, environmental pollution analysis equipment, and high-precision industrial calibration services.',
    sol1_li1: 'Pollution monitoring instruments (noise, light, PM2.5...)',
    sol1_li2: 'Lab &amp; electrical testing equipment (oscilloscopes, power meters...)',
    sol1_li3: 'Industrial sensor &amp; instrument calibration services',
    
    sol2_title: 'Automation &amp; Robotics',
    sol2_desc: 'Integrating and programming diverse industrial robots (Cobots, heavy-duty robots, Delta...) alongside advanced PLC/DCS control panel solutions.',
    sol2_li1: 'Industrial robot programming (ABB, KUKA, Universal Robots, JAKA...)',
    sol2_li2: 'Integration of Mini Cobots, heavy-duty &amp; high-speed Delta robots',
    sol2_li3: 'Control panel design &amp; expert PLC/DCS programming',
    
    sol3_title: 'AI &amp; Computer Vision',
    sol3_desc: 'Applying advanced AI image processing for visual inspection, surface defect detection, and automated KCS/QC quality control processes.',
    sol3_li1: 'Automated Visual Inspection (AVI) system development',
    sol3_li2: 'Surface defect detection &amp; product classification',
    sol3_li3: 'Real-time AI camera integration into production lines',
    
    sol4_title: 'Custom Hardware Development',
    sol4_desc: 'R&amp;D and manufacturing of custom embedded boards, optimized firmware, and industrial protective enclosures rating up to IP68.',
    sol4_li1: 'High-speed PCB design &amp; Embedded Firmware development',
    sol4_li2: 'Structural &amp; fluid dynamics simulations (CAD/CAE)',
    sol4_li3: 'Environmental durability &amp; stress testing',
    
    sol5_title: 'Global Sourcing &amp; Procurement',
    sol5_desc: 'Expertise in negotiating, sourcing, and directly importing electronic, hardware, and mechanical components from global OEMs at optimized costs.',
    sol5_li1: 'Sourcing hard-to-find, obsolete, and specialized parts',
    sol5_li2: 'Official import brokerage &amp; BOM cost optimization',
    sol5_li3: 'Reliable supplier network in the US, Europe, Japan, and China',
    
    tag_projects: 'FEATURED PROJECTS',
    title_projects: 'Real-world Achievements',
    desc_projects: 'Actual experience accumulated through prominent projects directly undertaken by our founding engineer team.',
    
    filter_all: 'All',
    filter_calibration: 'Calibration &amp; Measurement',
    filter_automation: 'Automation',
    filter_machinery: 'Machinery',
    
    proj1_title: 'Lab Equipment Calibration for FDI Factory',
    proj1_desc: 'Comprehensive supply and periodic calibration of oscilloscopes, multimeters, power meters, and industrial pollution measurement instruments.',
    proj2_title: 'Multi-brand Industrial Robot Integration',
    proj2_desc: 'Programming and integrating Mini Cobots, heavy-duty robots, and Delta robots from ABB, KUKA, Universal Robots, JAKA, etc., to optimize factory production lines.',
    proj3_title: 'Custom Automated Machinery for US Market',
    proj3_desc: 'Mechanical design and custom manufacturing successfully delivered to a client in the US. Operating stably for years and covered by ABC News and Fox News.',
    
    tag_careers: 'CAREERS',
    title_careers: 'Join NTX Dynamics',
    desc_careers: 'Shape the future of technology and build an outstanding career with us.',
    
    job1_title: 'Senior Embedded Hardware &amp; Firmware Engineer',
    job1_city: '📍 Ho Chi Minh City',
    job1_type: '⏱ Full-time',
    job1_salary: '💰 Competitive Salary',
    
    job2_title: 'PLC / SCADA Automation Engineer',
    job2_city: '📍 Ho Chi Minh City',
    job2_type: '⏱ Full-time',
    job2_salary: '💰 Competitive Salary',
    
    job3_title: 'Sales Engineer - Measurement &amp; Calibration Equipment',
    job3_city: '📍 Ho Chi Minh City',
    job3_type: '⏱ Full-time',
    job3_salary: '💰 Base Salary + Attractive Commission',
    
    btn_apply: 'Apply Now',
    
    tag_contacts: 'CONTACT US',
    title_contacts: 'Get in Touch with NTX Dynamics',
    desc_contacts: 'Submit your inquiry to receive expert consultation and detailed quotes.',
    
    contacts_hq: 'Headquarters',
    contacts_sub: 'We are always ready to listen and collaborate with our clients.',
    contacts_address_label: 'Address:',
    contacts_address: '105 La Xuan Oai, Quarter 2, Tang Nhon Phu Ward, Ho Chi Minh City, Vietnam',
    contacts_email_label: 'Email:',
    contacts_hotline_label: 'Hotline:',
    contacts_hours_label: 'Office Hours:',
    contacts_hours: 'Monday - Friday: 08:00 - 17:30',
    
    form_name: 'Full Name *',
    form_name_ph: 'John Doe',
    form_email: 'Email Address *',
    form_subject: 'Subject *',
    form_subject_ph: 'Measurement &amp; calibration equipment / Automation inquiry',
    form_message: 'Message *',
    form_message_ph: 'Describe your project requirements or questions...',
    btn_send: 'Send Message',
    
    footer_copy: '&copy; 2026 NTX DYNAMICS ENGINEERING &amp; TECHNOLOGIES CO., LTD. All rights reserved.',
    
    modal_title: 'Apply for <span id="modal-job-title" class="accent-text"></span>',
    modal_sub: 'Please fill out the form below to submit your application directly to NTX Dynamics HR.',
    modal_name: 'Full Name *',
    modal_name_ph: 'Enter your full name',
    modal_phone: 'Phone Number *',
    modal_email: 'Email Address *',
    modal_cv: 'CV / LinkedIn Link (optional)',
    btn_submit_app: 'Submit Application'
  },
  vi: {
    nav_home: "TRANG CHỦ",
    nav_about: "GIỚI THIỆU",
    nav_solutions: "GIẢI PHÁP",
    nav_projects: "DỰ ÁN",
    nav_contacts: "LIÊN HỆ",
    nav_careers: "TUYỂN DỤNG",
    nav_profile: "NĂNG LỰC",
    
    hero_title: 'Tiên phong Giải pháp <span class="accent-text">Kỹ thuật &amp; Công nghệ</span> Hiệu năng cao',
    hero_subtitle: 'NTX Dynamics cung cấp giải pháp kỹ thuật cơ điện tử tiên tiến, tự động hóa công nghiệp, cung ứng & hiệu chuẩn thiết bị công nghiệp, và robot tùy chỉnh độ tin cậy cao.',
    btn_explore: 'Khám phá Giải pháp',
    btn_contact: 'Liên hệ Hợp tác',
    
    metric_projects: 'Dự án Tích lũy',
    metric_reliability: '% Độ tin cậy hệ thống',
    metric_engineers: 'Kỹ sư Cốt lõi (8-10 năm KN)',
    metric_monitoring: 'Giám sát thời gian thực',
    
    tag_about: 'VỀ CHÚNG TÔI',
    title_about: 'CÔNG TY TNHH CÔNG NGHỆ KỸ THUẬT NTX DYNAMICS',
    desc_about: 'Đơn vị tiên phong trong giải pháp kỹ thuật công nghệ cao và tự động hóa thông minh.',
    
    about_card1_title: 'Chuyên gia Cốt lõi',
    about_card1_desc: 'Đội ngũ gồm 5 kỹ sư cốt lõi với 8-10 năm kinh nghiệm nghiên cứu & thực chiến, mang lại các thiết kế có chiều sâu kỹ thuật vượt trội.',
    about_card2_title: '150+ Dự án Tích lũy',
    about_card2_desc: 'Bề dày kinh nghiệm phong phú tích lũy qua hơn 150+ dự án công nghệ cao cho đối tác quốc tế và các doanh nghiệp FDI.',
    about_card3_title: 'Tầm vóc Quốc tế',
    about_card3_desc: 'Hệ thống giải pháp đạt chuẩn toàn cầu, sở hữu những dự án tiêu biểu từng được đưa tin trên các báo lớn <strong>ABC News</strong> và <strong>Fox News</strong>.',
    
    tag_solutions: 'GIẢI PHÁP',
    title_solutions: 'Lĩnh vực Chuyên môn',
    desc_solutions: 'Cung cấp toàn diện các giải pháp phần cứng, phần mềm và hạ tầng thông minh.',
    
    sol1_title: 'Hiệu chuẩn &amp; Thiết bị Đo lường',
    sol1_desc: 'Cung cấp trọn gói các thiết bị đo lường phòng Lab, thiết bị phân tích kiểm soát ô nhiễm và dịch vụ hiệu chuẩn công nghiệp chuẩn xác.',
    sol1_li1: 'Thiết bị đo lường ô nhiễm (tiếng ồn, ánh sáng, bụi mịn...)',
    sol1_li2: 'Thiết bị phòng Lab &amp; đo lường điện (Oscilloscope, đồng hồ điện...)',
    sol1_li3: 'Dịch vụ hiệu chuẩn thiết bị đo lường công nghiệp',
    
    sol2_title: 'Tự động hóa &amp; Robotics',
    sol2_desc: 'Tích hợp, lập trình hệ thống robot công nghiệp đa dạng (Mini Cobot, robot hạng nặng, Delta...) từ các thương hiệu hàng đầu cùng giải pháp điều khiển PLC/DCS nâng cao.',
    sol2_li1: 'Lập trình Robot công nghiệp (ABB, KUKA, Universal Robots, JAKA...)',
    sol2_li2: 'Tích hợp Mini Cobot, Robot tải nặng &amp; Delta Robot tốc độ cao',
    sol2_li3: 'Thiết kế tủ điện &amp; Lập trình điều khiển PLC/DCS chuyên sâu',
    
    sol3_title: 'AI &amp; Thị giác Máy tính',
    sol3_desc: 'Ứng dụng AI xử lý ảnh chất lượng cao để kiểm thử ngoại quan, phát hiện lỗi bề mặt sản phẩm và tự động hóa quy trình kiểm soát chất lượng KCS/QC.',
    sol3_li1: 'Kiểm thử ngoại quan tự động (Automated Visual Inspection)',
    sol3_li2: 'Phát hiện lỗi bề mặt &amp; Phân loại sản phẩm (Defect Detection)',
    sol3_li3: 'Tích hợp Camera AI thời gian thực vào dây chuyền sản xuất',
    
    sol4_title: 'Phát triển Phần cứng Chuyên dụng',
    sol4_desc: 'Nghiên cứu, chế tạo bo mạch nhúng (Embedded Board), Firmware và lớp vỏ bảo vệ chuẩn kháng bụi/nước IP68.',
    sol4_li1: 'Thiết kế PCB &amp; Embedded Firmware chuyên dụng',
    sol4_li2: 'Mô phỏng động lực học cơ kết cấu &amp; dòng chảy (CAD/CAE)',
    sol4_li3: 'Thử nghiệm độ bền môi trường &amp; ứng suất dòng điện',
    
    sol5_title: 'Cung ứng Thiết bị &amp; Mua sắm Quốc tế',
    sol5_desc: 'Khả năng đàm phán, tìm kiếm nguồn hàng và nhập khẩu trực tiếp các loại thiết bị, linh kiện điện tử, cơ khí chuyên nghiệp từ đối tác sản xuất gốc toàn cầu với chi phí tối ưu.',
    sol5_li1: 'Tìm kiếm &amp; Mua sắm linh kiện hiếm, khó tiếp cận',
    sol5_li2: 'Nhập khẩu ủy thác chính ngạch &amp; Tối ưu hóa chi phí BOM',
    sol5_li3: 'Mạng lưới nhà cung cấp uy tín tại Mỹ, Châu Âu, Nhật Bản, Trung Quốc',
    
    tag_projects: 'DỰ ÁN TIÊU BIỂU',
    title_projects: 'Thành tựu Thực tế',
    desc_projects: 'Kinh nghiệm tích lũy thực tế qua các dự án tiêu biểu do đội ngũ kỹ sư sáng lập của chúng tôi trực tiếp đảm nhiệm.',
    
    filter_all: 'Tất cả',
    filter_calibration: 'Hiệu chuẩn &amp; Đo lường',
    filter_automation: 'Tự động hóa',
    filter_machinery: 'Chế tạo Máy',
    
    proj1_title: 'Hiệu chuẩn Thiết bị Phòng Thí nghiệm Nhà máy FDI',
    proj1_desc: 'Cung cấp, hiệu chuẩn toàn diện các thiết bị Oscilloscope, đồng hồ đo điện và máy đo mức ô nhiễm công nghiệp.',
    proj2_title: 'Tích hợp Robot Công nghiệp Đa nhãn hiệu',
    proj2_desc: 'Lập trình tích hợp Mini Cobot, Robot tải nặng và Delta Robot từ các hãng ABB, KUKA, Universal Robots, JAKA... tối ưu hóa dây chuyền sản xuất nhà máy.',
    proj3_title: 'Hệ thống Máy Tự động chuyên dụng xuất khẩu Mỹ',
    proj3_desc: 'Thiết kế cơ khí và chế tạo bàn giao thành công cho khách hàng tại Mỹ. Hệ thống vận hành ổn định nhiều năm và được báo ABC News, Fox News đưa tin.',
    
    tag_careers: 'TUYỂN DỤNG',
    title_careers: 'Gia nhập NTX Dynamics',
    desc_careers: 'Cùng chúng tôi kiến tạo công nghệ tương lai và phát triển sự nghiệp đỉnh cao.',
    
    job1_title: 'Kỹ sư Nhúng &amp; Firmware Senior (Embedded Hardware/Firmware)',
    job1_city: '📍 TP. Hồ Chí Minh',
    job1_type: '⏱ Full-time',
    job1_salary: '💰 Lương thỏa thuận hấp dẫn',
    
    job2_title: 'Kỹ sư Tự động hóa PLC / SCADA',
    job2_city: '📍 TP. Hồ Chí Minh',
    job2_type: '⏱ Full-time',
    job2_salary: '💰 Lương thỏa thuận hấp dẫn',
    
    job3_title: 'Kỹ sư Kinh doanh Thiết bị Đo lường &amp; Hiệu chuẩn',
    job3_city: '📍 TP. Hồ Chí Minh',
    job3_type: '⏱ Full-time',
    job3_salary: '💰 Lương &amp; Hoa hồng hấp dẫn',
    
    btn_apply: 'Ứng tuyển ngay',
    
    tag_contacts: 'LIÊN HỆ',
    title_contacts: 'Kết nối với NTX Dynamics',
    desc_contacts: 'Gửi thông tin cho chúng tôi để được tư vấn và nhận báo giá chi tiết.',
    
    contacts_hq: 'Thông tin Trụ sở',
    contacts_sub: 'Chúng tôi luôn sẵn sàng lắng nghe và hợp tác cùng quý khách hàng.',
    contacts_address_label: 'Địa chỉ:',
    contacts_address: '105 Lã Xuân Oai, Khu phố 2, Phường Tăng Nhơn Phú, Thành Phố Hồ Chí Minh, Việt Nam',
    contacts_email_label: 'Email:',
    contacts_hotline_label: 'Hotline:',
    contacts_hours_label: 'Giờ làm việc:',
    contacts_hours: 'Thứ 2 - Thứ 6: 08:00 - 17:30',
    
    form_name: 'Họ và tên *',
    form_name_ph: 'Nguyễn Văn A',
    form_email: 'Email liên hệ *',
    form_subject: 'Chủ đề *',
    form_subject_ph: 'Tư vấn thiết bị đo lường &amp; hiệu chuẩn / Tự động hóa',
    form_message: 'Nội dung chi tiết *',
    form_message_ph: 'Mô tả nhu cầu dự án hoặc câu hỏi của bạn...',
    btn_send: 'Gửi thông điệp',
    
    footer_copy: '&copy; 2026 CÔNG TY TNHH CÔNG NGHỆ KỸ THUẬT NTX DYNAMICS. All rights reserved.',
    
    modal_title: 'Ứng tuyển vị trí <span id="modal-job-title" class="accent-text"></span>',
    modal_sub: 'Điền thông tin bên dưới để gửi hồ sơ trực tiếp tới phòng Nhân sự NTX Dynamics.',
    modal_name: 'Họ và tên *',
    modal_name_ph: 'Nhập họ tên đầy đủ',
    modal_phone: 'Số điện thoại *',
    modal_email: 'Email *',
    modal_cv: 'Link CV / LinkedIn (tùy chọn)',
    btn_submit_app: 'Nộp hồ sơ ứng tuyển'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const header = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
  const sections = document.querySelectorAll('section');
  
  const themeToggleBtn = document.getElementById('theme-toggle');
  const langToggleBtn = document.getElementById('lang-toggle');
  const headerLogo = document.getElementById('header-logo');
  const mobileLogo = document.getElementById('mobile-logo');
  const footerLogo = document.getElementById('footer-logo');
  
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  const applyBtns = document.querySelectorAll('.apply-btn');
  const jobModal = document.getElementById('job-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalJobTitle = document.getElementById('modal-job-title');
  const jobForm = document.getElementById('job-form');
  
  const contactForm = document.getElementById('contact-form');
  const formResponse = document.getElementById('form-response');

  /* ------------------------------------------------------------------------
     1. MULTI-LANGUAGE TRANSLATOR (EN / VI)
     ------------------------------------------------------------------------ */
  const savedLang = localStorage.getItem('ntx_lang') || 'en';
  setLanguage(savedLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const currentLang = localStorage.getItem('ntx_lang') || 'en';
      const newLang = currentLang === 'en' ? 'vi' : 'en';
      setLanguage(newLang);
      localStorage.setItem('ntx_lang', newLang);
    });
  }

  function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });

    // Update active visual status in stack switcher
    const enText = document.querySelector('.lang-en');
    const viText = document.querySelector('.lang-vi');
    if (lang === 'en') {
      if (enText) enText.classList.add('active');
      if (viText) viText.classList.remove('active');
    } else {
      if (enText) enText.classList.remove('active');
      if (viText) viText.classList.add('active');
    }
  }

  /* ------------------------------------------------------------------------
     2. THEME SWITCHER (LIGHT / DARK MODE)
     ------------------------------------------------------------------------ */
  const savedTheme = localStorage.getItem('ntx_theme') || 'light';
  applyTheme(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('ntx_theme', newTheme);
  });

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      updateLogos('logo-dark.svg');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      updateLogos('logo-light.svg');
    }
  }

  function updateLogos(logoSrc) {
    if (headerLogo) headerLogo.src = logoSrc;
    if (mobileLogo) mobileLogo.src = logoSrc;
    if (footerLogo) footerLogo.src = logoSrc;
  }

  /* ------------------------------------------------------------------------
     2. MOBILE NAV DRAWER TOGGLE
     ------------------------------------------------------------------------ */
  function openMobileMenu() {
    mobileNavDrawer.classList.add('open');
    mobileNavOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileNavDrawer.classList.remove('open');
    mobileNavOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileMenu);
  if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', closeMobileMenu);

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  /* ------------------------------------------------------------------------
     3. SCROLL SPY & ACTIVE NAV HIGHLIGHT
     ------------------------------------------------------------------------ */
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  /* ------------------------------------------------------------------------
     4. METRICS COUNTER ANIMATION
     ------------------------------------------------------------------------ */
  const metricNumbers = document.querySelectorAll('.metric-number');
  let animated = false;

  function animateCounters() {
    metricNumbers.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const suffix = counter.getAttribute('data-suffix') || '';
      const isDecimal = target % 1 !== 0;
      const duration = 1500;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = (isDecimal ? target.toFixed(1) : Math.floor(target)) + suffix;
          clearInterval(timer);
        } else {
          counter.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
        }
      }, stepTime);
    });
  }

  const heroSection = document.getElementById('home');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animateCounters();
        animated = true;
      }
    });
  }, { threshold: 0.3 });

  if (heroSection) counterObserver.observe(heroSection);

  /* ------------------------------------------------------------------------
     5. PROJECT CATEGORY FILTERING
     ------------------------------------------------------------------------ */
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            if (btn.getAttribute('data-filter') !== 'all' && category !== btn.getAttribute('data-filter')) {
              card.style.display = 'none';
            }
          }, 200);
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     6. JOB APPLICATION MODAL
     ------------------------------------------------------------------------ */
  applyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const jobTitle = btn.getAttribute('data-job');
      if (modalJobTitle) modalJobTitle.textContent = jobTitle;
      if (jobModal) {
        jobModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      jobModal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  if (jobModal) {
    jobModal.addEventListener('click', (e) => {
      if (e.target === jobModal) {
        jobModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  if (jobForm) {
    jobForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your application! NTX Dynamics HR will contact you shortly.');
      jobForm.reset();
      jobModal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  /* ------------------------------------------------------------------------
     7. CONTACT FORM SUBMISSION
     ------------------------------------------------------------------------ */
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById('form-submit-btn');
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
        
        formResponse.classList.add('success');
        formResponse.textContent = 'Thank you for reaching out! Your message has been received successfully. We will respond within 24 hours.';
        contactForm.reset();

        setTimeout(() => {
          formResponse.style.display = 'none';
          formResponse.classList.remove('success');
        }, 6000);
      }, 1000);
    });
  }
});

(function () {
  "use strict";

  var i18n = {
    en: {
      "nav.method": "Method",
      "nav.deliverables": "Deliverables",
      "nav.why": "Why 90 days",
      "nav.contact": "Contact",
      "nav.cta": "Book a call",
      "hero.h1": "AI transformation, in ninety days.",
      "hero.sub": "We install visibility, capability and governance across your organization in 90 days. Then we hand you the evidence.",
      "hero.cta1": "Start the sprint",
      "hero.cta2": "See the method",
      "hero.leg1": "Map reality",
      "hero.leg2": "Build capability",
      "hero.leg3": "Prove value",
      "reality.h2": "Most enterprise AI programs stall. The numbers say why.",
      "reality.s1": "of executives admit they lack full visibility into which AI tools their teams actually use. (IBM)",
      "reality.s2": "Leaders underestimate real employee AI usage by roughly three times. (McKinsey)",
      "reality.s3": "of enterprise AI pilots show no measurable P&L impact. (MIT)",
      "reality.s4": "of organizations reach high performance, 5%+ EBIT impact from AI. That is the honest bar. (McKinsey)",
      "method.h2": "One sprint. Three phases. Twelve artifacts.",
      "method.intro": "Ninety AI runs a single disciplined 90-day operating sprint inside your organization, built on published enterprise frameworks, not vendor decks.",
      "method.p1days": "DAYS 1–30",
      "method.p1h": "Map",
      "method.p1p": "Real usage inventory including shadow AI. Leadership perception vs reality test. Value area selection capped at three, with a written not-to-do list. Every executive commits to one visible AI routine.",
      "method.p2days": "DAYS 31–60",
      "method.p2h": "Build",
      "method.p2p": "Role-based training embedded in real workflows. A champions network modeled on documented best practice. A decision-rights charter with a five-level autonomy ladder, and your first AI agent registry.",
      "method.p3days": "DAYS 61–90",
      "method.p3h": "Prove",
      "method.p3p": "A live three-metric dashboard: payback time, revenue and cost delta, cycle time. A productivity-to-revenue reinvestment report. Results calibrated against independent benchmarks, then a scale or stop decision with a 12-month roadmap.",
      "del.h2": "What you hold in your hands on day 90",
      "del.i1": "Company-wide AI usage map, shadow AI included",
      "del.i2": "Leadership perception gap report",
      "del.i3": "Focus decision: three value areas, signed not-to-do list",
      "del.i4": "Executive AI routine commitments",
      "del.i5": "Role-based training program with competency measurement",
      "del.i6": "Active champions network",
      "del.i7": "Decision-rights charter with L1 to L5 autonomy ladder",
      "del.i8": "AI agent registry v0",
      "del.i9": "Live three-metric value dashboard",
      "del.i10": "Value reinvestment report",
      "del.i11": "Independently calibrated results report",
      "del.i12": "Phase-2 board deck and 12-month roadmap",
      "why.h2": "Why 90 days, and what we refuse to promise",
      "why.p1": "Expecting financial transformation in 90 days is a measurement error. The output of 90 days is learning and infrastructure. Financial results compound over one to two years.",
      "why.p2": "So we do not sell you a 3.7x ROI slide. We close three gaps you can verify yourself: a maturity gap, a leadership gap and a governance gap. Visibility established. Capability levers running. Charter and agent registry in force.",
      "why.q": "“Execution beats strategy. The winner is not the company with the brightest deck, it is the one that runs an ordinary plan with unusual discipline.”",
      "contact.h2": "Tell us where your organization stands",
      "contact.p": "Two working days, a straight answer: what we would map first, and whether a 90-day sprint fits you at all.",
      "form.name": "Full name",
      "form.email": "Work email",
      "form.company": "Company",
      "form.message": "Where does AI stand in your organization today?",
      "form.submit": "Send",
      "form.ok": "Thank you. We will get back to you within two working days.",
      "form.err": "Something went wrong. Please try again.",
      "form.missing": "Please fill in your name, email and message.",
      "footer.tag": "A global AI transformation studio.",
      "footer.privacy": "Privacy",
      "footer.project": "This site is a Micro MBA in AI course project.",
      "contact.project": "Ninety AI is a Micro MBA in AI course project."
    },
    tr: {
      "nav.method": "Metot",
      "nav.deliverables": "Teslimatlar",
      "nav.why": "Neden 90 gün",
      "nav.contact": "İletişim",
      "nav.cta": "Görüşme planla",
      "hero.h1": "AI dönüşümü, doksan günde.",
      "hero.sub": "90 günde kurumunuza görünürlük, yetkinlik ve yönetişim kuruyoruz. Sonra kanıtı elinize teslim ediyoruz.",
      "hero.cta1": "Sprinti başlat",
      "hero.cta2": "Metodu incele",
      "hero.leg1": "Gerçeği haritala",
      "hero.leg2": "Yetkinliği kur",
      "hero.leg3": "Değeri kanıtla",
      "reality.h2": "Kurumsal AI programlarının çoğu tıkanıyor. Rakamlar nedenini söylüyor.",
      "reality.s1": "yönetici, ekiplerinin hangi AI araçlarını kullandığına dair tam görünürlüğü olmadığını kabul ediyor. (IBM)",
      "reality.s2": "Liderler gerçek çalışan AI kullanımını yaklaşık üç kat az tahmin ediyor. (McKinsey)",
      "reality.s3": "kurumsal AI pilotu ölçülebilir K&Z etkisi gösteremiyor. (MIT)",
      "reality.s4": "kurum yüksek performansa ulaşıyor: AI'dan %5+ EBIT etkisi. Dürüst çıta budur. (McKinsey)",
      "method.h2": "Tek sprint. Üç faz. On iki teslimat.",
      "method.intro": "Ninety AI, kurumunuzun içinde tek ve disiplinli bir 90 günlük operasyon sprinti yürütür. Tedarikçi sunumlarına değil, yayımlanmış kurumsal çerçevelere dayanır.",
      "method.p1days": "GÜN 1–30",
      "method.p1h": "Haritala",
      "method.p1p": "Gölge AI dahil gerçek kullanım envanteri. Liderlik algı-gerçeklik testi. En fazla üç değer alanı seçimi ve yazılı yapılmayacaklar listesi. Her yönetici görünür bir AI rutini taahhüt eder.",
      "method.p2days": "GÜN 31–60",
      "method.p2h": "Kur",
      "method.p2p": "Gerçek iş akışlarına gömülü rol bazlı eğitim. Belgelenmiş en iyi örneklere dayalı şampiyonlar ağı. Beş seviyeli otonomi merdivenli karar hakları tüzüğü ve ilk AI ajan siciliniz.",
      "method.p3days": "GÜN 61–90",
      "method.p3h": "Kanıtla",
      "method.p3p": "Canlı üç metrikli pano: geri ödeme süresi, gelir ve maliyet deltası, döngü süresi. Verimlilik-gelir yeniden yatırım raporu. Bağımsız kıyaslarla kalibre edilmiş sonuçlar, ardından 12 aylık yol haritasıyla büyüt ya da durdur kararı.",
      "del.h2": "90. günde elinizde ne var",
      "del.i1": "Gölge AI dahil kurum geneli kullanım haritası",
      "del.i2": "Liderlik algı açığı raporu",
      "del.i3": "Odak kararı: üç değer alanı, imzalı yapılmayacaklar listesi",
      "del.i4": "Yönetici AI rutini taahhütleri",
      "del.i5": "Yetkinlik ölçümlü rol bazlı eğitim programı",
      "del.i6": "Aktif şampiyonlar ağı",
      "del.i7": "L1'den L5'e otonomi merdivenli karar hakları tüzüğü",
      "del.i8": "AI ajan sicili v0",
      "del.i9": "Canlı üç metrikli değer panosu",
      "del.i10": "Değer yeniden yatırım raporu",
      "del.i11": "Bağımsız kalibre edilmiş sonuç raporu",
      "del.i12": "Faz-2 yönetim kurulu sunumu ve 12 aylık yol haritası",
      "why.h2": "Neden 90 gün, ve neyi vaat etmeyi reddediyoruz",
      "why.p1": "90 günde finansal dönüşüm beklemek bir ölçüm hatasıdır. 90 günün çıktısı öğrenme ve altyapıdır. Finansal sonuçlar bir ila iki yılda birikir.",
      "why.p2": "Bu yüzden size 3,7x ROI slaydı satmıyoruz. Kendinizin doğrulayabileceği üç açığı kapatıyoruz: olgunluk açığı, liderlik açığı ve yönetişim açığı. Görünürlük kuruldu. Yetkinlik kaldıraçları çalışıyor. Tüzük ve ajan sicili yürürlükte.",
      "why.q": "“Yürütme stratejiyi yener. Kazanan en parlak sunuma sahip şirket değil, sıradan bir planı olağanüstü disiplinle işletendir.”",
      "contact.h2": "Kurumunuzun nerede durduğunu anlatın",
      "contact.p": "İki iş günü içinde net cevap: önce neyi haritalardık ve 90 günlük sprint size uyar mı.",
      "form.name": "Ad soyad",
      "form.email": "İş e-postası",
      "form.company": "Şirket",
      "form.message": "AI bugün kurumunuzda nerede duruyor?",
      "form.submit": "Gönder",
      "form.ok": "Teşekkürler. İki iş günü içinde dönüş yapacağız.",
      "form.err": "Bir şeyler ters gitti. Lütfen tekrar deneyin.",
      "form.missing": "Lütfen ad, e-posta ve mesaj alanlarını doldurun.",
      "footer.tag": "Global bir AI dönüşüm stüdyosu.",
      "footer.privacy": "Gizlilik",
      "footer.project": "Bu site bir Micro MBA in AI eğitimi projesidir.",
      "contact.project": "Ninety AI, bir Micro MBA in AI eğitimi projesidir."
    }
  };

  var lang = "en";
  try {
    lang = localStorage.getItem("ninety-lang") ||
      ((navigator.language || "").toLowerCase().indexOf("tr") === 0 ? "tr" : "en");
  } catch (e) {}

  function applyLang(l) {
    lang = l;
    try { localStorage.setItem("ninety-lang", l); } catch (e) {}
    document.documentElement.lang = l;
    var dict = i18n[l];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k]) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-lang-opt]").forEach(function (el) {
      el.classList.toggle("on", el.getAttribute("data-lang-opt") === l);
    });
    document.title = l === "tr"
      ? "Ninety AI. 90 günde AI dönüşümü."
      : "Ninety AI. AI transformation in 90 days.";
  }

  document.getElementById("langToggle").addEventListener("click", function () {
    applyLang(lang === "en" ? "tr" : "en");
  });
  applyLang(lang);

  // Scroll reveal (screenshot-safe: starts almost visible, forced in without IO support)
  var sections = document.querySelectorAll("section > *:not(script)");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.08 });
    sections.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
    // safety: everything visible after 2.5s regardless
    setTimeout(function () {
      sections.forEach(function (el) { el.classList.add("in"); });
    }, 2500);
  }

  // Contact form
  var form = document.getElementById("contactForm");
  var note = document.getElementById("formNote");
  var btn = document.getElementById("submitBtn");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var dict = i18n[lang];
    var data = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value,
      message: form.message.value,
      website: form.website.value,
      lang: lang
    };
    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
      note.className = "form-note err";
      note.textContent = dict["form.missing"];
      return;
    }
    btn.disabled = true;
    btn.style.opacity = "0.6";
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(function (r) { return r.json(); })
      .then(function (r) {
        if (r.ok) {
          note.className = "form-note ok";
          note.textContent = dict["form.ok"];
          form.reset();
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "contact_form_submit" });
        } else {
          note.className = "form-note err";
          note.textContent = dict["form.err"];
        }
      })
      .catch(function () {
        note.className = "form-note err";
        note.textContent = dict["form.err"];
      })
      .finally(function () {
        btn.disabled = false;
        btn.style.opacity = "";
      });
  });
})();

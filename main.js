(() => {
  const root = document.documentElement;
  root.classList.add("js");
  const body = document.body;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

  const size = (url, w, h) => url.replace(/\/\d+x\d+bb\.(jpg|png|jpeg)$/i, `/${w}x${h}bb.$1`);

  const APPS = {
    qfa: {
      name: "Qur'an for All",
      blurb: "Built from scratch. About 14K daily and 90K monthly users, 97.8% Android and 98.5% iOS crash-free. Audio engine, offline-first data, and push notifications that deep-link into the app.",
      ios: "https://apps.apple.com/us/app/quran-for-all/id840190258",
      and: "https://play.google.com/store/apps/details?id=com.theappcentral.quranforall",
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5d/2c/83/5d2c838f-2e2f-effa-571e-d8ed9aa95da1/QuranForAllLogo-0-0-1x_U007epad-0-1-sRGB-85-220.png/512x512bb.jpg",
      shots: [
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ef/7f/94/ef7f9497-e008-ace5-693a-e3afbc291a4c/1._Iphone_6.5.jpeg/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/1d/c9/a4/1dc9a483-a75b-479f-b3bd-5db09dc4993b/2._Iphone_6.5.jpeg/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ae/22/da/ae22da55-8c10-22b6-d2ad-dd1d428d8445/3._Iphone_6.5.jpeg/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/04/fa/3c/04fa3c17-4115-d96f-1e0e-27e7cf7b10bd/4._Iphone_6.5-revised.jpeg/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/29/f5/e4/29f5e472-a4f2-1751-53a9-b90baeb213be/5._Iphone_6.5.jpeg/320x480bb.jpg"
      ],
      floats: [["14K", "daily active users"], ["97.8%", "Android crash-free"], ["98.5%", "iOS crash-free"]]
    },
    lq: {
      name: "Learn Quran",
      blurb: "About 10K daily active users and 4.6 stars on the US App Store. Flutter on iOS and Android, with release automation and crash monitoring I run end to end.",
      ios: "https://apps.apple.com/us/app/learn-quran/id1483311132",
      and: "https://play.google.com/store/apps/details?id=com.alhuda.learnquran",
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/32/9b/1e/329b1e61-c066-4c1b-f93b-c6a1f5b1c03d/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
      shots: [
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/67/76/5a/67765a66-0918-0a9f-9e83-f783813b84c0/e24e24b0-7b30-44ad-8995-123cc87558a7_1._Iphone_5.5.png/392x696bb.png",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/71/87/de/7187de3d-ed00-4f3c-2a5a-b6b7c78c45f1/8080875f-4c9a-428f-ae8f-ecc317b33a14_3._Iphone_5.5.png/392x696bb.png",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/07/9c/7a/079c7a57-c193-82ff-c480-6f5e5e5a475a/7d0c4039-3953-41a2-9e8c-aed3c6df32c6_2._Iphone_5.5.png/392x696bb.png",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/43/da/40/43da4031-79b8-47ad-f2d3-fa1d755e1212/d2f58b45-a80d-495d-9914-15dfd31e0f65_4._Iphone_5.5.png/392x696bb.png",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d2/36/aa/d236aaaa-0032-0624-c0e7-a7a3053d3edf/982d7b57-78c6-4871-8cf3-0dbef33031e5_6._Iphone_5.5.png/392x696bb.png"
      ],
      floats: [["10K", "daily active users"], ["26.9%", "Android day-1 retention"], ["4.6★", "US App Store"]]
    },
    du: {
      name: "Duaein",
      blurb: "About 7K daily active users and 4.8 stars on the US App Store. A 2020-era app I keep stable at scale, with Firebase messaging, offline storage, and background audio.",
      ios: "https://apps.apple.com/us/app/id1473634448",
      and: "https://play.google.com/store/apps/details?id=com.alhuda.apps.duas.aldua",
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e6/a2/fd/e6a2fdc6-b3d7-d0ea-13df-f640ec89a0d1/LiquidGlassLogo-0-0-1x_U007epad-0-1-sRGB-85-220.png/512x512bb.jpg",
      shots: [
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/07/55/a7/0755a70f-c23b-ad10-fa60-818169bb480b/8194da80-a544-4b20-bcd0-329efef3f8d4_Simulator_Screenshot_-_iPhone_15_Pro_Max_-_2024-04-06_at_16.33.20.png/392x696bb.png",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/99/54/83/9954831f-5c03-5bb8-6414-f0f0a6c5c027/dda01e9d-373b-459a-948d-87361eb57463_Simulator_Screenshot_-_iPhone_15_Pro_Max_-_2024-04-06_at_16.33.31__U00281_U0029.png/392x696bb.png",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/a6/3d/e8/a63de88f-39ca-8f36-4efe-94d76ac48911/f41dfbf4-753a-496c-9164-508d979e2070_Simulator_Screenshot_-_iPhone_15_Pro_Max_-_2024-04-06_at_16.39.49.png/392x696bb.png",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/5e/a6/f8/5ea6f8a2-7066-9c2d-07c6-86f5832658cd/a3e31ead-571c-47a9-b344-7274710483fc_Simulator_Screenshot_-_iPhone_15_Pro_Max_-_2024-04-06_at_16.40.34.png/392x696bb.png"
      ],
      floats: [["7K", "daily active users"], ["27.8%", "iOS day-1 retention"], ["4.8★", "US App Store"]]
    },
    wi: {
      name: "Wa Iyyaka Nastaeen",
      blurb: "500K+ installs on the Play Store and 200K+ on the App Store, built in 2024 with a cached audio player, offline-first storage, deep-linked sharing, and custom themes. Still used worldwide.",
      ios: "https://apps.apple.com/us/app/wa-iyyaka-nastaeen/id972441057",
      and: "https://play.google.com/store/apps/details?id=com.alhuda.duas.iyykanastaeen",
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b6/a6/44/b6a644de-78a5-1ec6-f6fd-ed16a9302ec8/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
      shots: [
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/37/ee/07/37ee0753-8052-d05d-7b44-126b2c63d0ff/1._Iphone_6.7.jpg/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/6a/6b/f8/6a6bf840-0406-851d-6e05-e7da90b2fa10/2._Iphone_6.7.jpg/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/21/f4/ca/21f4caf1-d90e-3470-d233-f4ebb930077a/3._Iphone_6.7.jpg/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/bb/ba/2e/bbba2e2b-dc3a-779f-b10b-82afa1bc5ba4/4._Iphone_6.7.jpg/320x480bb.jpg"
      ],
      floats: [["500K+", "Play Store installs"], ["200K+", "App Store installs"], ["4.6★", "US App Store"]]
    },
    rn: {
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a0/b0/bb/a0b0bbe0-285c-f912-b45e-c4d3846a33c9/AppIcon-0-0-1x_U007epad-0-1-sRGB-85-220.png/512x512bb.jpg",
      shots: [
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/16/fe/6f/16fe6fe1-ecaa-03ab-2c38-6b37ee998d32/01-Home-Digest-1284x2778.jpg/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/3f/f9/10/3ff91030-8a09-88f2-bb53-caee3d4a473f/02-Document-Scan-1284x2778.jpg/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4d/48/48/4d4848a8-0e48-1d35-f677-0eea9a0a38d2/03-Item-Detail-1284x2778.jpg/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/49/e6/b9/49e6b978-95e6-8a23-08b1-a5f80e073cae/04-Widgets-1284x2778.jpg/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/31/2b/88/312b8842-df1a-6451-9071-6faa3cd575d0/05-Siri-1284x2778.jpg/320x480bb.jpg"
      ]
    }
  };

  const CLIENT = {
    dei: {
      name: "DEI Toolkits",
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/4c/e1/02/4ce102c2-2954-34d1-63ae-61136f4e5b45/AppIcon-0-0-1x_U007emarketing-0-8-0-0-85-220.png/512x512bb.jpg",
      blurb: "Built in Flutter with Provider and JSON-driven content, with bookmarks, embedded PDFs, and adjustable fonts. Based on three years of research at FAST NUCES: 47 tools, 30 challenge solutions, and 40+ training resources. Used by HR departments in Pakistan. Responsive on iPad and Mac.",
      href: "https://apps.apple.com/us/app/dei-toolkits/id6736838967",
      shots: [
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ce/6f/75/ce6f75bd-6d24-b8bc-832b-39f4f446442e/1.png/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/e0/42/34e0427b-1d44-9557-ba18-b53702b7194c/2.png/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/23/aa/03/23aa035a-3b05-116b-acf4-5d6c775e88b6/3.png/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/86/81/68/8681683a-43d5-aa93-6e97-967e8acaa511/4.png/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/c1/d7/50/c1d750a7-70a4-f689-44d9-0485b070ca1a/5.png/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/3c/8e/b1/3c8eb1ea-c1ec-5a58-2534-6383d905ee85/6.png/320x480bb.jpg"
      ],
      floats: [["47", "DEI tools"], ["30", "challenges solved"], ["40+", "training resources"]]
    },
    mm: {
      name: "My Memories",
      blurb: "An augmented reality photo app built with Swift and Flutter: scan or import a photo and project it onto real surfaces. Launched with in-app purchases and local storage, and delivered to an international client in early 2024.",
      href: "",
      shots: ["assets/memories/shot1.png", "assets/memories/shot2.png", "assets/memories/shot3.png", "assets/memories/shot4.png"],
      floats: [["AR", "photos in the real world"], ["IAP", "in-app purchases"], ["Swift + Flutter", "built with both"]]
    }
  };

  document.querySelectorAll("img[data-icon]").forEach((img) => {
    const a = APPS[img.dataset.icon] || CLIENT[img.dataset.icon];
    if (!a) return;
    img.src = size(a.icon, 160, 160);
    img.width = 160;
    img.height = 160;
    img.decoding = "async";
    img.addEventListener("error", () => { img.style.visibility = "hidden"; });
  });

  const lkDate = document.getElementById("lkDate");
  if (lkDate) lkDate.textContent = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

  function makeDeck(el, urls, { auto = true, start = 0 } = {}) {
    let idx = 0;
    let timer = null;
    const create = (list) => list.map((u, i) => {
      const img = new Image();
      img.src = size(u, 414, 896);
      img.alt = "";
      img.decoding = "async";
      img.loading = i < 2 ? "eager" : "lazy";
      img.addEventListener("error", () => img.remove());
      return img;
    });
    const mount = (imgs) => {
      el.replaceChildren(...imgs);
      idx = Math.max(0, Math.min(start, imgs.length - 1));
      if (imgs[idx]) imgs[idx].classList.add("on");
    };
    const build = (list) => mount(create(list));
    const next = () => {
      const kids = el.children;
      if (kids.length < 2) return;
      kids[idx % kids.length].classList.remove("on");
      idx = (idx + 1) % kids.length;
      kids[idx].classList.add("on");
    };
    build(urls);
    return {
      set(list) {
        const imgs = create(list);
        const first = imgs[Math.max(0, Math.min(start, imgs.length - 1))];
        const done = () => mount(imgs);
        (first && first.decode ? first.decode() : Promise.resolve()).then(done, done);
      },
      play() { if (!auto || reduce || timer) return; timer = setInterval(next, 2600); },
      stop() { clearInterval(timer); timer = null; }
    };
  }

  const decks = {
    apps: makeDeck(document.getElementById("deckApps"), APPS.qfa.shots),
    ux: makeDeck(document.getElementById("deckUx"), APPS.qfa.shots, { auto: false, start: 2 }),
    native: makeDeck(document.getElementById("deckNative"), APPS.rn.shots),
    client: makeDeck(document.getElementById("deckClient"), CLIENT.dei.shots)
  };

  const panel = document.querySelector(".panel");
  const tabs = document.querySelectorAll(".tab[data-app]");
  const setText = (id, v) => { const n = document.getElementById(id); if (n) n.textContent = v; };
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const a = APPS[tab.dataset.app];
      if (!a) return;
      tabs.forEach((t) => t.setAttribute("aria-pressed", String(t === tab)));
      panel.classList.add("swap");
      setTimeout(() => {
        setText("apName", a.name);
        setText("apBlurb", a.blurb);
        document.getElementById("apIos").href = a.ios;
        document.getElementById("apAnd").href = a.and;
        a.floats.forEach(([v, l], i) => { setText(`f${i}v`, v); setText(`f${i}l`, l); });
        panel.classList.remove("swap");
      }, 220);
      decks.apps.set(a.shots);
    });
  });

  const cTabs = document.querySelectorAll(".tab[data-client]");
  const cPanel = document.getElementById("cPanel");
  cTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const a = CLIENT[tab.dataset.client];
      if (!a) return;
      cTabs.forEach((t) => t.setAttribute("aria-pressed", String(t === tab)));
      cPanel.classList.add("swap");
      setTimeout(() => {
        setText("cName", a.name);
        setText("cBlurb", a.blurb);
        const link = document.getElementById("cLink");
        link.hidden = !a.href;
        if (a.href) link.href = a.href;
        a.floats.forEach(([v, l], i) => { setText(`c${i}v`, v); setText(`c${i}l`, l); });
        cPanel.classList.remove("swap");
      }, 220);
      decks.client.set(a.shots);
    });
  });

  const rings = document.querySelectorAll("[data-count]");
  let countRaf = 0;
  function countUp() {
    cancelAnimationFrame(countRaf);
    const t0 = performance.now();
    const run = (now) => {
      const k = reduce ? 1 : Math.min(1, (now - t0 - 300) / 1500);
      const e = k <= 0 ? 0 : 1 - Math.pow(1 - k, 3);
      rings.forEach((n) => { n.textContent = (parseFloat(n.dataset.count) * e).toFixed(1); });
      if (k < 1) countRaf = requestAnimationFrame(run);
    };
    countRaf = requestAnimationFrame(run);
  }

  const YAW = { client: -8, lock: -12, home: 7, apps: -9, ux: 9, native: -7, stable: 8, ship: -8, hello: 0 };
  const beats = [...document.querySelectorAll(".beat")];
  beats.forEach((b) => [...b.children].forEach((c, i) => c.style.setProperty("--i", i)));

  let current = "";
  function setScene(beat) {
    const scene = beat.dataset.scene;
    beats.forEach((b) => b.classList.toggle("is-active", b === beat));
    if (scene === current) return;
    current = scene;
    body.dataset.scene = scene;
    Object.entries(decks).forEach(([k, d]) => (k === scene ? d.play() : d.stop()));
    if (scene === "stable") countUp();
    pointer.yaw = YAW[scene] || 0;
    kick();
  }

  const narrow = matchMedia("(max-width: 900px)");
  let io;
  function observeBeats() {
    if (io) io.disconnect();
    io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setScene(e.target); });
    }, { rootMargin: narrow.matches ? "-62% 0px -30% 0px" : "-45% 0px -45% 0px" });
    beats.forEach((b) => io.observe(b));
  }
  observeBeats();
  narrow.addEventListener("change", observeBeats);

  const device = document.getElementById("device");
  const pointer = { x: 0, y: 0, yaw: -12 };
  const tilt = { rx: 0, ry: pointer.yaw };
  let running = false;
  function tick() {
    const targetRy = pointer.yaw + pointer.x * 10;
    const targetRx = -pointer.y * 8;
    tilt.ry += (targetRy - tilt.ry) * 0.09;
    tilt.rx += (targetRx - tilt.rx) * 0.09;
    device.style.setProperty("--ry", `${tilt.ry.toFixed(2)}deg`);
    device.style.setProperty("--rx", `${tilt.rx.toFixed(2)}deg`);
    if (Math.abs(targetRy - tilt.ry) > 0.02 || Math.abs(targetRx - tilt.rx) > 0.02) requestAnimationFrame(tick);
    else running = false;
  }
  function kick() { if (!reduce && !running) { running = true; requestAnimationFrame(tick); } }

  if (reduce) {
    device.style.setProperty("--ry", "-6deg");
  } else {
    kick();
    if (finePointer) {
      addEventListener("pointermove", (e) => {
        pointer.x = e.clientX / innerWidth - 0.5;
        pointer.y = e.clientY / innerHeight - 0.5;
        kick();
      }, { passive: true });
    }
  }

  let scrollRaf = 0;
  function onScroll() {
    if (scrollRaf) return;
    scrollRaf = requestAnimationFrame(() => {
      scrollRaf = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      root.style.setProperty("--p", max > 0 ? (scrollY / max).toFixed(4) : "0");
    });
  }
  if (!reduce) addEventListener("scroll", onScroll, { passive: true });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) Object.values(decks).forEach((d) => d.stop());
    else if (decks[current]) decks[current].play();
  });

  setScene(beats[0]);
})();

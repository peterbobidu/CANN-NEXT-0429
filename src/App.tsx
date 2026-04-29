const assets = {
  background:
    "https://www.figma.com/api/mcp/asset/7c6c261e-42d7-4dd0-af1a-132084e3c15c",
  heroRibbon:
    "https://www.figma.com/api/mcp/asset/fea1fba3-134f-401a-856b-3223b8f51a16",
  heroScene:
    "https://www.figma.com/api/mcp/asset/48507004-e14c-459f-b481-87149be1c00d",
  cardBlue:
    "https://www.figma.com/api/mcp/asset/4b4ca9c8-da84-467d-b0b8-ea321fd51a68",
  cardMiddle:
    "https://www.figma.com/api/mcp/asset/62ff5200-a2ce-4ad5-9216-416de1522fcc",
  cardCube:
    "https://www.figma.com/api/mcp/asset/f2579a70-44a1-4167-ab65-6a5e7fcbd948",
  cardCluster:
    "https://www.figma.com/api/mcp/asset/3a513a71-033c-4075-8ef6-019f2cda98bb",
  cardOptimize:
    "https://www.figma.com/api/mcp/asset/47f01051-1686-4201-b3e8-8ea545d0f96b",
  cardPerformance:
    "https://www.figma.com/api/mcp/asset/9fc515ae-c78c-42a1-8cb4-d0f97a635e23",
  docsIllustration:
    "https://www.figma.com/api/mcp/asset/97a1dd16-1d2f-4e14-b5ba-98d5f097fc62",
  police:
    "https://www.figma.com/api/mcp/asset/2da382e3-ccbd-45fb-af49-0630ed1e8200",
  cannWord:
    "https://www.figma.com/api/mcp/asset/dcda28e2-9c76-430b-a849-adf80e51f19e",
  iconApi:
    "https://www.figma.com/api/mcp/asset/1dabe652-c4b8-4afd-a668-64fd448fe06f",
  iconDev:
    "https://www.figma.com/api/mcp/asset/f75b0467-8f8a-4fff-b4ef-8fa684caf49f",
  iconMind:
    "https://www.figma.com/api/mcp/asset/a7d277f1-b337-4ab2-9e42-11f66cee9de0",
  iconFilter:
    "https://www.figma.com/api/mcp/asset/53d2b9ec-5661-4b65-a776-2710b73a5e76",
  iconConfig:
    "https://www.figma.com/api/mcp/asset/a6b6a0d5-3648-4886-85bc-a107ce252488",
  iconMetric:
    "https://www.figma.com/api/mcp/asset/70583e55-7693-44c8-acab-0a67f25aa72f",
  assistantIcon:
    "https://www.figma.com/api/mcp/asset/1a205462-69ae-4420-9211-401eca85957e",
  socialOne:
    "https://www.figma.com/api/mcp/asset/79a3c75a-bd9e-4225-83e8-9298cbe3e543",
  socialTwo:
    "https://www.figma.com/api/mcp/asset/eb4589e7-00a9-471b-b6bb-358af215574a",
  socialThree:
    "https://www.figma.com/api/mcp/asset/d7494c43-2d24-46b0-bc94-686ca3f4053e",
  socialFour:
    "https://www.figma.com/api/mcp/asset/85f69554-7d5f-4e65-a5b9-7989a84ea621",
  entryProblem:
    "https://www.figma.com/api/mcp/asset/d2610f5b-e295-4c67-80e6-c3f0d8aaa1c1",
  entryStudy:
    "https://www.figma.com/api/mcp/asset/b7a3cf65-4272-4458-b197-c75aa4eef185",
  entryResource:
    "https://www.figma.com/api/mcp/asset/39267251-cf35-472d-b5d4-9d1a1f39a6b7",
  ascendLogo:
    "https://www.figma.com/api/mcp/asset/dccc3bf8-05d9-4f3a-9be5-42d624ee1554",
  logoMark:
    "https://www.figma.com/api/mcp/asset/37f5864a-b9b2-44c8-a408-ec48cb7de44b",
  logoShape:
    "https://www.figma.com/api/mcp/asset/65646657-1900-4a6a-8f6e-754430081844",
  searchBase:
    "https://www.figma.com/api/mcp/asset/9ca0cbce-4a2c-438e-8ab2-a1a2620ea3c2",
  searchShape:
    "https://www.figma.com/api/mcp/asset/d313212e-19d0-4528-8f01-878f8786c539",
};

const navItems = ["主页", "下载", "开发", "文档", "学习", "社区", "动态"];

const featureCards = [
  {
    title: "AscendCL 编程接口",
    text: "统一的 C/C++ 编程接口，直接调用昇腾 NPU 的计算资源，实现极致性能。",
    image: assets.cardBlue,
    icon: assets.iconApi,
    imageClass: "w-[973px] h-[729px] -left-[143px] -top-[268px]",
  },
  {
    title: "TBE 算子开发",
    text: "Tensor Boost Engine 提供 DSL 和 TIK 两种算子开发方式，轻松实现自定义算子。",
    image: assets.cardMiddle,
    icon: assets.iconDev,
    imageClass: "w-[775px] h-[516px] -right-[257px] -top-[141px] rotate-180 scale-y-[-1]",
  },
  {
    title: "MindSpore 深度集成",
    text: "与 MindSpore 框架深度融合，同时支持 PyTorch / TensorFlow 等主流框架。",
    image: assets.cardCube,
    icon: assets.iconMind,
    imageClass: "w-[747px] h-[498px] left-[-229px] top-[-250px]",
  },
  {
    title: "模型转换与优化",
    text: "ATC 工具将训练模型转换为昇腾离线模型（.om），自动进行算子融合与优化。",
    image: assets.cardOptimize,
    icon: assets.iconFilter,
    imageClass: "w-[719px] h-[539px] left-1/2 top-1/2 -translate-x-[calc(50%-79.5px)] -translate-y-[calc(50%+23.5px)]",
    iconTop: "top-8",
  },
  {
    title: "性能调优工具",
    text: "Profiling 工具链提供细粒度的 NPU 性能分析，快速定位性能瓶颈。",
    image: assets.cardPerformance,
    icon: assets.iconMetric,
    imageClass: "w-[633px] h-[475px] left-0 top-1/2 -translate-y-[calc(50%+46.5px)]",
  },
  {
    title: "分布式训练支持",
    text: "HCCL 通信库支持昇腾集群训练，助力千亿参数大模型分布式训练。",
    image: assets.cardCluster,
    icon: assets.iconConfig,
    imageClass: "w-[560px] h-[315px] -left-[22px] -top-[74px]",
  },
];

const footerGroups = [
  ["关于昇腾", "昇腾计算产业概述"],
  ["新闻与活动", "新闻资讯", "昇腾活动"],
  ["交流与资讯", "昇腾论坛", "技术干货"],
  ["支持与服务", "文档", "技术工单", "举报中心"],
  ["开源社区", "昇思社区", "昇腾开放资源"],
];

function Header() {
  return (
    <header className="h-16 w-full bg-white">
      <div className="mx-auto flex h-16 w-[1786px] items-center">
        <div className="relative ml-16 h-8 w-[88px]">
          <img className="absolute inset-0 h-full w-full object-contain" src={assets.ascendLogo} alt="Ascend" />
          <img className="absolute left-[29px] top-[10px] h-[12px] w-[53px]" src={assets.logoMark} alt="" />
          <img className="absolute left-px top-0 h-[26px] w-[22px]" src={assets.logoShape} alt="" />
        </div>
        <img className="ml-12 h-5 w-[56.5px] object-cover" src={assets.cannWord} alt="CANN" />
        <nav className="ml-4 flex h-16 items-center">
          {navItems.map((item, index) => (
            <a
              className={`relative flex h-16 w-[64.64px] items-center justify-center text-base leading-[26px] ${
                index === 0 ? "font-bold text-[#c7000b]" : "font-normal text-black"
              }`}
              href="#"
              key={item}
            >
              {item}
              {index === 0 && <span className="absolute bottom-0 left-4 h-px w-[32.64px] bg-[#c7000b]" />}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-5 pr-[84px]">
          <div className="flex h-8 w-[220px] items-center gap-2 rounded-[40px] border border-black/25 bg-white px-4">
            <span className="relative h-4 w-4 shrink-0">
              <img className="absolute inset-0 h-full w-full" src={assets.searchBase} alt="" />
              <img className="absolute inset-[1px] h-[14px] w-[14px]" src={assets.searchShape} alt="" />
            </span>
            <span className="text-sm text-black/40">mindie</span>
          </div>
          <a className="text-sm leading-[22px] text-black/80" href="#">
            支持
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[528px] overflow-hidden bg-white">
      <img className="absolute -left-20 -top-[155px] h-[1456px] w-[2000px] object-cover" src={assets.background} alt="" />
      <img className="absolute left-0 -top-[47px] h-[1081px] w-[1920px] rotate-180 scale-y-[-1] object-cover" src={assets.heroRibbon} alt="" />
      <img className="absolute left-0 top-0 h-[529px] w-[1920px] object-cover" src={assets.heroScene} alt="" />
      <div className="absolute left-0 top-0 h-[400px] w-[930px] bg-gradient-to-r from-white/35 via-white/15 to-white/0 backdrop-blur-[12px] [mask-image:linear-gradient(to_right,black_0%,black_42%,rgba(0,0,0,0.55)_68%,transparent_100%)]" />
      <div className="absolute left-40 top-[70px] flex h-[29px] w-[170px] items-center rounded-full border border-[#6b8eff]/25 bg-white/70">
        <span className="ml-3.5 h-1.5 w-1.5 rounded-[3px] bg-gradient-to-br from-[#6b8eff] to-[#9b6fff]" />
        <span className="ml-[9px] text-[13px] leading-none text-[#3d3d3d]"> CANN 8.0 正式发布 </span>
      </div>
      <h1 className="absolute left-40 top-[111px] text-[64px] font-bold leading-[76px] text-[#0d0d0d]">
        昇腾 AI 异构
        <br />
        计算{" "}
        <span className="bg-gradient-to-r from-[#0f92f8] via-[#c4a0c7] to-[#ffb05c] bg-clip-text text-transparent">
          开发平台
        </span>
      </h1>
      <p className="absolute left-40 top-[295px] h-[72px] w-[691px] text-base leading-6 text-[#555]">
        CANN（Compute Architecture for Neural Networks）是华为针对 AI 场景推出的异构计算架构，全面支持昇腾
        NPU，为 AI 应用开发者提供从算子开发到网络部署的完整工具链。
      </p>
      <div className="absolute left-0 top-[400px] flex h-32 w-full items-center bg-white/40 backdrop-blur-[11.2px]">
        <div className="mx-auto grid w-[1294px] grid-cols-3">
          {[
            ["解决问题", "报错 · 调试 · 排障", assets.entryProblem],
            ["系统学习", "生成个性化学习路径", assets.entryStudy],
            ["获取资源", "下载 · 文档 · 示例", assets.entryResource],
          ].map(([title, text, icon]) => (
            <div className="flex h-[60px] items-center justify-center gap-4" key={title}>
              <img className="h-14 w-14" src={icon} alt="" />
              <div className="flex flex-col gap-2 whitespace-nowrap">
                <strong className="text-xl leading-7 text-[#191919]">{title}</strong>
                <span className="text-base leading-6 text-[#777]">{text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ label, title, text }: { label: string; title: string; text: string }) {
  return (
    <div className="mx-auto flex w-[1100px] flex-col items-center gap-2 text-center">
      <span className="flex h-7 items-center rounded-full bg-[#eee] px-[25px] text-xs leading-5 tracking-[0.26px] text-[#777]">
        {label}
      </span>
      <h2 className="text-[40px] font-bold leading-[56px] text-[#0d0d0d]">{title}</h2>
      <p className="text-base leading-6 text-[#3d3d3d]">{text}</p>
    </div>
  );
}

function FeatureCard({ card }: { card: (typeof featureCards)[number] }) {
  return (
    <article className="relative h-80 w-[520px] overflow-hidden rounded-[20px] bg-white">
      <div className="absolute left-0 top-0 h-[196px] w-full bg-[#edf2ff]" />
      <div className="absolute left-0 top-[194px] h-[126px] w-full bg-gradient-to-b from-[#f0f2fe]/0 to-[#f0f2fe] to-[69%]" />
      <div className="absolute left-0 top-0 h-[196px] w-full overflow-hidden rounded-t-[20px]">
        <img className={`absolute max-w-none object-cover ${card.imageClass}`} src={card.image} alt="" />
      </div>
      <div
        className={`absolute left-6 ${card.iconTop ?? "top-6"} flex h-12 w-12 items-center justify-center rounded-xl border-2 border-white/80 bg-white/30 shadow-[0_4px_2px_rgba(0,0,0,0.06)] backdrop-blur-[3.65px]`}
      >
        <img className="h-6 w-6" src={card.icon} alt="" />
      </div>
      <div className="absolute left-6 top-52 flex w-[472px] flex-col gap-2">
        <h3 className="text-2xl font-medium leading-8 text-[#0d0d0d]">{card.title}</h3>
        <p className="text-base leading-6 text-[#3d3d3d]">{card.text}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-white" />
    </article>
  );
}

function Features() {
  return (
    <section className="bg-[#f5f5f5] px-40 py-[86px]">
      <SectionTitle
        label="核心功能"
        title="为 AI 开发者精心设计的工具链"
        text="从算子开发到大模型推理，CANN 提供完整的异构计算编程框架，让开发者专注于业务创新。"
      />
      <div className="mx-auto mt-10 grid w-[1600px] grid-cols-3 gap-5">
        {featureCards.map((card) => (
          <FeatureCard card={card} key={card.title} />
        ))}
      </div>
    </section>
  );
}

function AssistantSection() {
  return (
    <section className="relative h-[670px] overflow-hidden bg-gradient-to-br from-[#fff1ca] via-[#f2f8ee] to-[#ccf0f3] px-40 py-[86px]">
      <SectionTitle
        label="智能文档助手"
        title="用自然语言探索 CANN 文档"
        text="内置 AI 助手，直接提问即可获得精准的 API 说明、代码示例和最佳实践。"
      />
      <div className="mx-auto mt-10 flex w-[1600px] gap-5">
        <div className="relative h-[334px] w-[620px] overflow-hidden rounded-lg bg-white">
          <img
            className="absolute left-1/2 top-full h-[334px] w-[620px] -translate-x-1/2 -translate-y-full object-cover"
            src={assets.docsIllustration}
            alt=""
          />
        </div>
        <div className="h-[334px] w-[960px] rounded-lg">
          <div className="flex h-16 items-center rounded-lg bg-white px-6">
            <span className="grid h-7 w-7 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-[#6b8eff] to-[#ffb05c]">
              <img className="h-5 w-5" src={assets.assistantIcon} alt="" />
            </span>
            <span className="ml-4 text-base text-[#555]">如何使用 AscendCL 初始化设备？</span>
            <button className="ml-auto h-8 w-[120px] rounded-full border border-black bg-white text-base leading-6 text-[#0d0d0d]">
              提问
            </button>
          </div>
          <div className="mt-3 h-[260px] rounded-lg bg-[#f4fbf9]">
            <div className="flex h-16 items-center rounded-t-lg border-b border-[#e8f1ee] bg-white px-6">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[#6b8eff] to-[#ffb05c] text-sm text-white">
                Q
              </span>
              <strong className="ml-4 text-base leading-6 text-[#3d3d3d]">初始化 AscendCL 设备的步骤：</strong>
              <span className="ml-auto grid h-8 w-8 place-items-center rounded-full text-xl text-[#555]">⌃</span>
            </div>
            <div className="px-16 py-3 text-base leading-[26px] text-[#555]">
              <p>
                1. 调用 <code>acl.init()</code> 完成运行时初始化
              </p>
              <p>
                2. 调用 <code>acl.rt.set_device(device_id)</code> 指定设备
              </p>
              <p>3. 创建 Context 上下文以隔离执行环境</p>
              <p>4. 创建 Stream 流以管理异步任务队列</p>
              <p className="mt-5 font-bold text-[#191919]">查看完整初始化指南 →</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="h-[304px] bg-[#111416] text-[#d1d6db]">
      <div className="mx-auto h-[232px] w-[1515px] pt-8">
        <div className="grid w-[1020px] grid-cols-5 gap-20">
          {footerGroups.map(([title, ...links]) => (
            <div className="w-[140px]" key={title}>
              <h4 className="mb-4 text-base leading-6 text-white">{title}</h4>
              <div className="flex flex-col gap-3 text-xs leading-[18px] text-[#a9b0b8]">
                {links.map((link) => (
                  <a href="#" key={link}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[37px] flex h-8 items-center justify-between border-b border-white/10 pb-8 text-xs leading-[18px] text-[#8f969d]">
          <div className="flex gap-10">
            {["友情链接", "华为官网", "华为计算", "鲲鹏社区", "华为云", "启智社区", "华为开发者"].map((item) => (
              <a href="#" key={item}>
                {item}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            {[assets.socialOne, assets.socialTwo, assets.socialThree, assets.socialFour].map((icon) => (
              <span className="grid h-8 w-8 place-items-center" key={icon}>
                <img className="h-8 w-8 object-contain" src={icon} alt="" />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-[56px] w-[1515px] items-start justify-between pt-3 text-xs leading-[18px] text-[#6e6e6e]">
        <div>
          <p>版权所有 © 2021-2026华为技术有限公司 保留一切权利　粤A2-20044005号</p>
          <p className="mt-2 flex items-center gap-2">
            <img className="h-4 w-4" src={assets.police} alt="" />
            粤公网安备 44030702005057号
          </p>
        </div>
        <div className="flex gap-6 text-[#d1d6db]">
          {["法律声明", "隐私政策", "Cookie协议", "用户协议", "联系我们"].map((item) => (
            <a href="#" key={item}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] font-harmony">
      <div className="origin-top-left scale-[var(--page-scale)]">
        <div className="h-[2562px] w-[1920px] overflow-hidden bg-[#f5f5f5]">
          <Header />
          <Hero />
          <Features />
          <AssistantSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}

import { useState } from "react";

const assets = {
  hero:
    "https://www.figma.com/api/mcp/asset/10aafdcb-008e-4050-95b9-72d1cfde9177",
  cardApi:
    "https://www.figma.com/api/mcp/asset/31b3bce7-989c-4b07-9924-495642c51b7f",
  cardTbe:
    "https://www.figma.com/api/mcp/asset/636029a3-a727-4b65-97be-76a4c116e208",
  cardMind:
    "https://www.figma.com/api/mcp/asset/11992054-44da-4f3d-8583-799742b5900e",
  cardOptimize:
    "https://www.figma.com/api/mcp/asset/12eca883-6e40-4845-979e-e3e25eb6c4cd",
  cardDistributed:
    "https://www.figma.com/api/mcp/asset/c8bcee10-6f11-4d6d-b2eb-c4e73b472b6d",
  cardPerformance:
    "https://www.figma.com/api/mcp/asset/42059e93-71f7-48e2-b2e7-06434a657a2b",
  docsIllustration:
    "https://www.figma.com/api/mcp/asset/ad961aea-ff2b-49ff-a465-ed109013199d",
  police:
    "https://www.figma.com/api/mcp/asset/02156717-0f02-463a-ad8f-9d248ba2802a",
  cannWord:
    "https://www.figma.com/api/mcp/asset/3f775bea-a2a6-4aa9-a942-d2743c41c5c3",
  logoAll:
    "https://www.figma.com/api/mcp/asset/85d99d41-49c9-4a93-927d-39d6443b4e78",
  logoWord:
    "https://www.figma.com/api/mcp/asset/af399fa3-f942-4ee3-aa81-0551a8b64bc8",
  logoMark:
    "https://www.figma.com/api/mcp/asset/c8a5a89d-e3b9-45ec-adba-9177a95773a0",
  iconApi:
    "https://www.figma.com/api/mcp/asset/79245e45-8345-4b6c-9610-e83a209e3432",
  iconDev:
    "https://www.figma.com/api/mcp/asset/e95fdb84-cd69-4450-8ff6-340fda954d5c",
  iconMind:
    "https://www.figma.com/api/mcp/asset/bcaf579b-5167-4719-b57a-6120b4aa0e2e",
  iconFilter:
    "https://www.figma.com/api/mcp/asset/9caac2c7-3b70-4422-958a-2249b33c7966",
  iconConfig:
    "https://www.figma.com/api/mcp/asset/58bdf5ce-7a7d-4c52-9b36-d1f87f076b6d",
  iconMetric:
    "https://www.figma.com/api/mcp/asset/cf02d1d6-d2ea-4e84-9b17-868ee3563bef",
  assistantIcon:
    "https://www.figma.com/api/mcp/asset/707f7fde-4199-40d4-8b1a-6220bd1d1031",
  socialOne:
    "https://www.figma.com/api/mcp/asset/7ab82fe7-e16d-4f35-b603-39dcf29e2f81",
  socialTwo:
    "https://www.figma.com/api/mcp/asset/29a220d5-b60c-4ec5-b9fd-b6486a1eec95",
  socialThree:
    "https://www.figma.com/api/mcp/asset/54e4b5fe-00d4-475b-99ce-8ecfb9bf97ee",
  socialFour:
    "https://www.figma.com/api/mcp/asset/ccaca294-95e7-4170-9c18-19b770aea8c0",
  entryProblem:
    "https://www.figma.com/api/mcp/asset/183763f7-5da3-4d72-98ce-e9b819ce0b52",
  entryStudy:
    "https://www.figma.com/api/mcp/asset/e5cdb8d3-2668-44b6-8066-65826a7fccac",
  entryResource:
    "https://www.figma.com/api/mcp/asset/40f4dd67-3c07-4615-9de9-4367a2212cb3",
  searchBase:
    "https://www.figma.com/api/mcp/asset/eb30066b-d152-4e0e-9d27-aa95353ad6b2",
  searchShape:
    "https://www.figma.com/api/mcp/asset/c9299eb5-2c63-4cb6-bf3d-6698e60884fc",
};

const navItems = ["主页", "下载", "开发", "文档", "学习", "社区", "动态"];

const quickEntries = [
  ["解决问题", "报错 · 调试 · 排障", assets.entryProblem],
  ["系统学习", "生成个性化学习路径", assets.entryStudy],
  ["获取资源", "下载 · 文档 · 示例", assets.entryResource],
] as const;

type FeatureCardItem = {
  title: string;
  text: string;
  image: string;
  icon: string;
  imageWidth: number;
  imageHeight: number;
  frameHeight: number;
  imageOffsetY: number;
  imageFlipClass?: string;
  bodyWidth: string;
  bodyTop: string;
  overlayTop: string;
  iconTop?: string;
};

const featureCards: FeatureCardItem[] = [
  {
    title: "AscendCL 编程接口",
    text: "统一的 C/C++ 编程接口，直接调用昇腾 NPU 的计算资源，实现极致性能。",
    image: assets.cardApi,
    icon: assets.iconApi,
    imageWidth: 973,
    imageHeight: 729,
    frameHeight: 194,
    imageOffsetY: 0,
    bodyWidth: "w-[472px]",
    bodyTop: "top-[208px]",
    overlayTop: "top-[196px]",
  },
  {
    title: "TBE 算子开发",
    text: "Tensor Boost Engine 提供 DSL 和 TIK 两种算子开发方式，轻松实现自定义算子。",
    image: assets.cardTbe,
    icon: assets.iconDev,
    imageWidth: 775,
    imageHeight: 516,
    frameHeight: 194,
    imageOffsetY: 20,
    imageFlipClass: "rotate-180 -scale-y-100",
    bodyWidth: "w-[472px]",
    bodyTop: "top-[208px]",
    overlayTop: "top-[196px]",
  },
  {
    title: "MindSpore 深度集成",
    text: "与 MindSpore 框架深度融合，同时支持 PyTorch / TensorFlow 等主流框架。",
    image: assets.cardMind,
    icon: assets.iconMind,
    imageWidth: 747,
    imageHeight: 498,
    frameHeight: 192,
    imageOffsetY: -97,
    bodyWidth: "w-[454px]",
    bodyTop: "top-[206px]",
    overlayTop: "top-[194px]",
  },
  {
    title: "模型转换与优化",
    text: "ATC 工具将训练模型转换为昇腾离线模型（.om），自动进行算子融合与优化。",
    image: assets.cardOptimize,
    icon: assets.iconFilter,
    imageWidth: 719,
    imageHeight: 539,
    frameHeight: 194,
    imageOffsetY: -24,
    bodyWidth: "w-[454px]",
    bodyTop: "top-[208px]",
    overlayTop: "top-[196px]",
    iconTop: "top-8",
  },
  {
    title: "性能调优工具",
    text: "Profiling 工具链提供细粒度的 NPU 性能分析，快速定位性能瓶颈。",
    image: assets.cardPerformance,
    icon: assets.iconMetric,
    imageWidth: 633,
    imageHeight: 475,
    frameHeight: 192,
    imageOffsetY: -47,
    bodyWidth: "w-[472px]",
    bodyTop: "top-[208px]",
    overlayTop: "top-[194px]",
  },
  {
    title: "分布式训练支持",
    text: "HCCL 通信库支持昇腾集群训练，助力千亿参数大模型分布式训练。",
    image: assets.cardDistributed,
    icon: assets.iconConfig,
    imageWidth: 560,
    imageHeight: 315,
    frameHeight: 192,
    imageOffsetY: -24,
    bodyWidth: "w-[472px]",
    bodyTop: "top-[208px]",
    overlayTop: "top-[194px]",
  },
] as const;

const footerGroups = [
  ["关于昇腾", "昇腾计算产业概述"],
  ["新闻与活动", "新闻资讯", "昇腾活动"],
  ["交流与资讯", "昇腾论坛", "技术干货"],
  ["支持与服务", "文档", "技术工单", "举报中心"],
  ["开源社区", "昇思社区", "昇腾开放资源"],
] as const;

const friendLinks = ["友情链接", "华为官网", "华为计算", "鲲鹏社区", "华为云", "启智社区", "华为开发者"];

const legalLinks = ["法律声明", "隐私政策", "Cookie协议", "用户协议", "联系我们"];

function Header() {
  return (
    <header className="h-16 w-full bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-[1786px] items-center">
        <a
          className="group relative ml-16 flex h-16 items-center"
          href="#"
          aria-label="Ascend 首页"
        >
          <img className="h-8 w-[84px] object-contain transition-transform duration-300 group-hover:scale-[1.02]" src={assets.logoAll} alt="" />
          <img className="pointer-events-none absolute left-[29px] top-[26px] h-3 w-[53px] object-contain" src={assets.logoWord} alt="" />
          <img className="pointer-events-none absolute left-px top-[19px] h-[26px] w-[22px] object-contain" src={assets.logoMark} alt="" />
        </a>
        <img className="ml-12 h-5 w-[56.56px] object-contain" src={assets.cannWord} alt="CANN" />
        <nav className="ml-4 flex h-16 items-center">
          {navItems.map((item, index) => {
            const active = index === 0;
            return (
              <a
                className={`group relative flex h-16 w-[64.64px] items-center justify-center text-base leading-[26px] transition-colors duration-200 ${
                  active ? "font-bold text-[#c7000b]" : "text-black hover:text-[#5d6ea8]"
                }`}
                href="#"
                key={item}
              >
                {item}
                <span
                  className={`absolute bottom-0 h-px bg-[#c7000b] transition-all duration-300 ${
                    active ? "left-4 w-[32.64px]" : "left-1/2 w-0 -translate-x-1/2 group-hover:w-8"
                  }`}
                />
              </a>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-5 pr-[84px]">
          <button className="group flex h-8 w-[220px] items-center gap-2 rounded-[40px] border border-black/20 bg-white px-4 transition-all duration-300 hover:border-[#7b8fcf] hover:shadow-[0_8px_24px_rgba(84,110,255,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7b8fcf]/40">
            <span className="relative h-4 w-4 shrink-0">
              <img className="absolute inset-0 h-full w-full" src={assets.searchBase} alt="" />
              <img className="absolute inset-[1px] h-[14px] w-[14px] transition-transform duration-300 group-hover:scale-110" src={assets.searchShape} alt="" />
            </span>
            <span className="text-sm text-black/40 transition-colors duration-200 group-hover:text-black/55">mindie</span>
          </button>
          <a className="text-sm leading-[22px] text-black/80 transition-colors duration-200 hover:text-[#5d6ea8]" href="#">
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
      <img className="absolute inset-0 h-full w-full object-cover" src={assets.hero} alt="" />
      <div className="absolute left-0 top-0 h-[400px] w-[930px] bg-gradient-to-r from-white/25 via-white/12 to-white/0 backdrop-blur-[12px] [mask-image:linear-gradient(to_right,black_0%,black_42%,rgba(0,0,0,0.46)_70%,transparent_100%)]" />
      <div className="absolute left-40 top-[70px] flex h-[29px] w-[170px] items-center rounded-full border border-[#6b8eff]/25 bg-white/70 px-[14px] shadow-[0_8px_24px_rgba(78,114,255,0.08)]">
        <span className="h-1.5 w-1.5 rounded-[3px] bg-gradient-to-br from-[#6b8eff] to-[#9b6fff]" />
        <span className="ml-[9px] text-[13px] leading-none text-[#3d3d3d]"> CANN 8.0 正式发布 </span>
      </div>
      <h1 className="absolute left-40 top-[111px] text-[64px] font-bold leading-[76px] text-[#0d0d0d]">
        昇腾 AI 异构
        <br />
        计算
        <span className="ml-2 bg-gradient-to-r from-[#0f92f8] via-[#c4a0c7] to-[#ffb05c] bg-clip-text text-transparent">
          开发平台
        </span>
      </h1>
      <p className="absolute left-40 top-[295px] w-[691px] text-base leading-6 text-[#555]">
        CANN（Compute Architecture for Neural Networks）是华为针对 AI 场景推出的异构计算架构，全面支持昇腾
        NPU，为 AI 应用开发者提供从算子开发到网络部署的完整工具链。
      </p>
      <div className="absolute left-0 top-[400px] h-32 w-full bg-white/40 backdrop-blur-[11.2px]">
        <div className="mx-auto grid h-full w-[1294px] grid-cols-3">
          {quickEntries.map(([title, text, icon]) => (
            <button
              className="group flex h-full items-center justify-center gap-4 rounded-[20px] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              key={title}
              type="button"
            >
              <img className="h-14 w-14 transition-transform duration-300 group-hover:scale-105" src={icon} alt="" />
              <span className="flex flex-col items-start gap-2 text-left">
                <strong className="text-xl leading-7 text-[#191919] transition-colors duration-200 group-hover:text-[#101c38]">{title}</strong>
                <span className="text-base leading-6 text-[#777] transition-colors duration-200 group-hover:text-[#5d6478]">{text}</span>
              </span>
            </button>
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

function FeatureCard({ card }: { card: FeatureCardItem }) {
  return (
    <article className="group relative h-80 w-[520px] overflow-hidden rounded-[20px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(68,92,180,0.16)]">
      <div
        className="absolute left-px top-px w-[516px] overflow-hidden rounded-t-[18px]"
        style={{ height: `${card.frameHeight}px` }}
      >
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            width: `${card.imageWidth}px`,
            height: `${card.imageHeight}px`,
            transform: `translate(-50%, calc(-50% + ${card.imageOffsetY}px))`,
          }}
        >
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.025]">
            <img
              className={`h-full w-full max-w-none object-cover ${card.imageFlipClass ?? ""}`}
              src={card.image}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={`absolute left-0 h-[126px] w-full bg-gradient-to-b from-[#f0f2fe]/0 to-[#f0f2fe] to-[69.27%] ${card.overlayTop}`} />
      <div
        className={`absolute left-6 ${card.iconTop ?? "top-6"} flex h-12 w-12 items-center justify-center rounded-xl border-2 border-white/80 bg-white/30 shadow-[0_4px_2px_rgba(0,0,0,0.06)] backdrop-blur-[3.65px] transition-all duration-300 group-hover:border-white group-hover:bg-white/45 group-hover:shadow-[0_10px_24px_rgba(84,104,205,0.16)]`}
      >
        <img className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" src={card.icon} alt="" />
      </div>
      <div className={`absolute left-6 ${card.bodyTop} flex ${card.bodyWidth} flex-col gap-2`}>
        <h3 className="text-2xl font-medium leading-8 text-[#0d0d0d] transition-colors duration-200 group-hover:text-[#1f376d]">
          {card.title}
        </h3>
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
  const [expanded, setExpanded] = useState(true);

  return (
    <section className="relative h-[670px] overflow-hidden bg-gradient-to-br from-[#fff1ca] via-[#f2f8ee] to-[#ccf0f3] px-40 py-[86px]">
      <div className="absolute bottom-0 left-0 h-[423px] w-full bg-[radial-gradient(circle_at_18%_12%,rgba(255,189,81,0.22),transparent_28%),radial-gradient(circle_at_50%_16%,rgba(171,112,255,0.12),transparent_22%),radial-gradient(circle_at_84%_10%,rgba(118,216,255,0.15),transparent_26%)]" />
      <SectionTitle
        label="智能文档助手"
        title="用自然语言探索 CANN 文档"
        text="内置 AI 助手，直接提问即可获得精准的 API 说明、代码示例和最佳实践。"
      />
      <div className="mx-auto mt-10 flex w-[1600px] gap-5">
        <div className="relative h-[336px] w-[620px] overflow-hidden rounded-[20px] bg-white/55 shadow-[0_12px_28px_rgba(61,88,161,0.08)]">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={assets.docsIllustration}
            alt=""
          />
        </div>
        <div className="h-[336px] w-[960px] rounded-[20px]">
          <div className="flex h-16 items-center rounded-[20px] bg-white px-6 shadow-[0_8px_20px_rgba(61,88,161,0.06)]">
            <span className="grid h-7 w-7 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-[#6b8eff] to-[#ffb05c]">
              <img className="h-5 w-5" src={assets.assistantIcon} alt="" />
            </span>
            <span className="ml-4 text-base text-[#555]">如何使用 AscendCL 初始化设备？</span>
            <button className="ml-auto h-8 w-[120px] rounded-full border border-black bg-white text-base leading-6 text-[#0d0d0d] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0d0d0d] hover:text-white hover:shadow-[0_10px_24px_rgba(13,13,13,0.16)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/15">
              提问
            </button>
          </div>
          <div className="mt-3 overflow-hidden rounded-[20px] bg-[#f4fbf9] shadow-[0_8px_20px_rgba(61,88,161,0.06)]">
            <button
              className="flex h-16 w-full items-center border-b border-[#e8f1ee] bg-white px-6 text-left transition-colors duration-200 hover:bg-[#fbfcff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7b8fcf]/30"
              onClick={() => setExpanded((value) => !value)}
              type="button"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[#6b8eff] to-[#ffb05c] text-sm text-white">
                Q
              </span>
              <strong className="ml-4 text-base leading-6 text-[#3d3d3d]">初始化 AscendCL 设备的步骤：</strong>
              <span className={`ml-auto grid h-8 w-8 place-items-center rounded-full text-xl text-[#777] transition-transform duration-300 ${expanded ? "rotate-0" : "-rotate-180"}`}>
                ⌃
              </span>
            </button>
            <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ${expanded ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="px-16 py-3 text-base leading-[26px] text-[#555]">
                <p>
                  1. 调用 <code>acl.init()</code> 完成运行时初始化
                </p>
                <p>
                  2. 调用 <code>acl.rt.set_device(device_id)</code> 指定设备
                </p>
                <p>3. 创建 Context 上下文以隔离执行环境</p>
                <p>4. 创建 Stream 流以管理异步任务队列</p>
                <button className="mt-5 font-bold text-[#191919] transition-colors duration-200 hover:text-[#2752b1]" type="button">
                  查看完整初始化指南 →
                </button>
              </div>
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
                  <a className="transition-colors duration-200 hover:text-white" href="#" key={link}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[37px] flex h-8 items-center justify-between border-b border-white/10 pb-8 text-xs leading-[18px] text-[#8f969d]">
          <div className="flex gap-10">
            {friendLinks.map((item) => (
              <a className="transition-colors duration-200 hover:text-[#d8dde4]" href="#" key={item}>
                {item}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            {[assets.socialOne, assets.socialTwo, assets.socialThree, assets.socialFour].map((icon) => (
              <a
                className="grid h-8 w-8 place-items-center rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/6"
                href="#"
                key={icon}
              >
                <img className="h-8 w-8 object-contain transition-transform duration-200 hover:scale-105" src={icon} alt="" />
              </a>
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
          {legalLinks.map((item) => (
            <a className="transition-colors duration-200 hover:text-white" href="#" key={item}>
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

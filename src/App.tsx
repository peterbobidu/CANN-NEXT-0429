import { useState } from "react";

const assets = {
  hero:
    "https://www.figma.com/api/mcp/asset/e4012213-ce11-4ec0-b2fb-2df2e694cca5",
  cardApi:
    "https://www.figma.com/api/mcp/asset/a5818f0b-94ca-4124-91d7-e53c025b0b13",
  cardTbe:
    "https://www.figma.com/api/mcp/asset/161e6c59-a0c9-48a6-a446-95b23ed97e40",
  cardMind:
    "https://www.figma.com/api/mcp/asset/dd72720f-c68b-44ee-9579-9b65daa038b4",
  cardOptimize:
    "https://www.figma.com/api/mcp/asset/9b620519-dfb9-4554-9562-579f1d27b00f",
  cardDistributed:
    "https://www.figma.com/api/mcp/asset/f2e0f97c-2c1c-4160-8c3b-a4e045518fc4",
  cardPerformance:
    "https://www.figma.com/api/mcp/asset/3af1cce4-3ee4-43cf-8d08-98d354f0550a",
  docsIllustration:
    "https://www.figma.com/api/mcp/asset/368a410e-2b50-4a11-b620-e4b9439d7a38",
  police:
    "https://www.figma.com/api/mcp/asset/03d96a4b-6a31-40c5-b7a3-76af024e3a33",
  cannWord:
    "https://www.figma.com/api/mcp/asset/d5080a01-e8ab-4b6a-a0cd-066f536b13e5",
  logoAll:
    "https://www.figma.com/api/mcp/asset/ba4e137b-2f4b-48d7-b79b-3a7c5c685b8f",
  logoWord:
    "https://www.figma.com/api/mcp/asset/eb7d2d1a-ed6a-464d-b57f-c6dc54f34ae9",
  logoMark:
    "https://www.figma.com/api/mcp/asset/3df92804-b3d3-49ec-a87f-6d34ee8095ce",
  iconApi:
    "https://www.figma.com/api/mcp/asset/1b854a0b-b4bc-460f-af2a-af6692b7f6d3",
  iconDev:
    "https://www.figma.com/api/mcp/asset/75bd68e1-8188-4fca-b4c4-81c3165d2b14",
  iconMind:
    "https://www.figma.com/api/mcp/asset/b76b5bd6-7a64-4c6e-ad00-a97e201f8a19",
  iconFilter:
    "https://www.figma.com/api/mcp/asset/67934826-5315-47ad-9b16-5bf006a1015a",
  iconConfig:
    "https://www.figma.com/api/mcp/asset/c5c512f3-2aab-4cc7-8353-13a6f7ea452a",
  iconMetric:
    "https://www.figma.com/api/mcp/asset/d4785597-55aa-4f0e-a610-1dabe0547be8",
  assistantIcon:
    "https://www.figma.com/api/mcp/asset/84499326-99c4-4f1b-a0e2-b2873cbe56f0",
  socialOne:
    "https://www.figma.com/api/mcp/asset/4bafbb53-daa0-4baa-8fb9-4f1a5494e1f3",
  socialTwo:
    "https://www.figma.com/api/mcp/asset/4334f6ce-1b17-46a6-98ea-2b2b6e454e09",
  socialThree:
    "https://www.figma.com/api/mcp/asset/beeb3de7-1924-4a8a-9883-1712ea60aa5f",
  socialFour:
    "https://www.figma.com/api/mcp/asset/113dab85-3daa-4e17-af56-83574e7dcd5f",
  entryProblem:
    "https://www.figma.com/api/mcp/asset/5338ea2d-3cdc-46c4-b73c-f1fd69037d6d",
  entryStudy:
    "https://www.figma.com/api/mcp/asset/09ad0fef-dca5-473c-a99b-eee00d3a2db2",
  entryResource:
    "https://www.figma.com/api/mcp/asset/10d7754d-97ad-4c22-bd53-6ec3c578eba9",
  searchBase:
    "https://www.figma.com/api/mcp/asset/75022598-14d2-470c-a6b5-defb47f3c4ef",
  searchShape:
    "https://www.figma.com/api/mcp/asset/0bda8350-f64a-4a17-a308-cb3ef8f78842",
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
  imageClass: string;
  bodyWidth: string;
  iconTop?: string;
};

const featureCards: FeatureCardItem[] = [
  {
    title: "AscendCL 编程接口",
    text: "统一的 C/C++ 编程接口，直接调用昇腾 NPU 的计算资源，实现极致性能。",
    image: assets.cardApi,
    icon: assets.iconApi,
    imageClass: "h-[729px] w-[973px] left-[-143px] top-[-268px]",
    bodyWidth: "w-[472px]",
  },
  {
    title: "TBE 算子开发",
    text: "Tensor Boost Engine 提供 DSL 和 TIK 两种算子开发方式，轻松实现自定义算子。",
    image: assets.cardTbe,
    icon: assets.iconDev,
    imageClass: "h-[516px] w-[775px] left-[-257px] top-[-141px] rotate-180 scale-y-[-1]",
    bodyWidth: "w-[472px]",
  },
  {
    title: "MindSpore 深度集成",
    text: "与 MindSpore 框架深度融合，同时支持 PyTorch / TensorFlow 等主流框架。",
    image: assets.cardMind,
    icon: assets.iconMind,
    imageClass: "h-[498px] w-[747px] left-[-229px] top-[-250px]",
    bodyWidth: "w-[454px]",
  },
  {
    title: "模型转换与优化",
    text: "ATC 工具将训练模型转换为昇腾离线模型（.om），自动进行算子融合与优化。",
    image: assets.cardOptimize,
    icon: assets.iconFilter,
    imageClass: "h-[539px] w-[719px] left-[-22px] top-[-196px]",
    bodyWidth: "w-[454px]",
    iconTop: "top-8",
  },
  {
    title: "性能调优工具",
    text: "Profiling 工具链提供细粒度的 NPU 性能分析，快速定位性能瓶颈。",
    image: assets.cardPerformance,
    icon: assets.iconMetric,
    imageClass: "h-[475px] w-[633px] left-0 top-[-188px]",
    bodyWidth: "w-[472px]",
  },
  {
    title: "分布式训练支持",
    text: "HCCL 通信库支持昇腾集群训练，助力千亿参数大模型分布式训练。",
    image: assets.cardDistributed,
    icon: assets.iconConfig,
    imageClass: "h-[315px] w-[560px] left-[-22px] top-[-85px]",
    bodyWidth: "w-[472px]",
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
      <div className="absolute left-px top-px h-[194px] w-[516px] overflow-hidden rounded-t-[18px]">
        <img
          className={`absolute max-w-none object-cover transition-transform duration-500 group-hover:scale-[1.025] ${card.imageClass}`}
          src={card.image}
          alt=""
        />
      </div>
      <div className="absolute bottom-0 left-0 h-[126px] w-full bg-gradient-to-b from-[#f0f2fe]/0 to-[#f0f2fe] to-[69.27%]" />
      <div
        className={`absolute left-6 ${card.iconTop ?? "top-6"} flex h-12 w-12 items-center justify-center rounded-xl border-2 border-white/80 bg-white/30 shadow-[0_4px_2px_rgba(0,0,0,0.06)] backdrop-blur-[3.65px] transition-all duration-300 group-hover:border-white group-hover:bg-white/45 group-hover:shadow-[0_10px_24px_rgba(84,104,205,0.16)]`}
      >
        <img className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" src={card.icon} alt="" />
      </div>
      <div className={`absolute left-6 top-[208px] flex ${card.bodyWidth} flex-col gap-2`}>
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
        <div className="relative h-[334px] w-[620px] overflow-hidden rounded-lg bg-white/55 shadow-[0_12px_28px_rgba(61,88,161,0.08)]">
          <img
            className="absolute bottom-0 left-1/2 h-[334px] w-[620px] -translate-x-1/2 object-cover transition-transform duration-500 hover:scale-[1.015]"
            src={assets.docsIllustration}
            alt=""
          />
        </div>
        <div className="h-[334px] w-[960px] rounded-lg">
          <div className="flex h-16 items-center rounded-lg bg-white px-6 shadow-[0_8px_20px_rgba(61,88,161,0.06)]">
            <span className="grid h-7 w-7 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-[#6b8eff] to-[#ffb05c]">
              <img className="h-5 w-5" src={assets.assistantIcon} alt="" />
            </span>
            <span className="ml-4 text-base text-[#555]">如何使用 AscendCL 初始化设备？</span>
            <button className="ml-auto h-8 w-[120px] rounded-full border border-black bg-white text-base leading-6 text-[#0d0d0d] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0d0d0d] hover:text-white hover:shadow-[0_10px_24px_rgba(13,13,13,0.16)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/15">
              提问
            </button>
          </div>
          <div className="mt-3 overflow-hidden rounded-lg bg-[#f4fbf9] shadow-[0_8px_20px_rgba(61,88,161,0.06)]">
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

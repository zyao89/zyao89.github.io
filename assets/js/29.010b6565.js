(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{634:function(v,s,t){v.exports=t.p+"assets/img/2021-02-25-10-52-18.45527d19.png"},635:function(v,s,t){v.exports=t.p+"assets/img/2021-02-25-10-52-58.e01560d8.png"},770:function(v,s,t){"use strict";t.r(s);var _=t(10),a=Object(_.a)({},(function(){var v=this,s=v.$createElement,_=v._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("用过构建工具的同学都知道，grunt, webpack, gulp 都支持插件开发。后端框架比如 egg koa 都支持插件机制拓展，前端页面也有许多可拓展性的要求。插件化无处不在，所有的框架都希望自身拥有最强大的可拓展能力，可维护性，而且都选择了插件化的方式达到目标。")]),v._v(" "),_("h2",{attrs:{id:"背景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[v._v("#")]),v._v(" 背景")]),v._v(" "),_("p",[v._v("用过构建工具的同学都知道，grunt, webpack, gulp 都支持插件开发。后端框架比如 egg koa 都支持插件机制拓展，前端页面也有许多可拓展性的要求。插件化无处不在，所有的框架都希望自身拥有最强大的可拓展能力，可维护性，而且都选择了插件化的方式达到目标。")]),v._v(" "),_("p",[v._v("我认为插件化思维是一种通过拆分来达到工程拆分治理的方案，可以解决工程膨胀、开发维护困难等问题。")]),v._v(" "),_("p",[v._v("没有插件化，核心库的代码会变得冗余，功能耦合越来越严重，最后导致维护困难。")]),v._v(" "),_("p",[v._v("轻舟前端项目原始工程目录如下；")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("div",{staticClass:"custom-style-wrapper window-controls"},[_("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"54",height:"14",viewBox:"0 0 54 14"}},[_("g",{attrs:{fill:"none","fill-rule":"evenodd",transform:"translate(1 1)"}},[_("circle",{attrs:{cx:"6",cy:"6",r:"6",fill:"#FF5F56",stroke:"#E0443E","stroke-width":".5"}}),_("circle",{attrs:{cx:"26",cy:"6",r:"6",fill:"#FFBD2E",stroke:"#DEA123","stroke-width":".5"}}),_("circle",{attrs:{cx:"46",cy:"6",r:"6",fill:"#27C93F",stroke:"#1AAB29","stroke-width":".5"}})])])]),_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("- src\n   |- client\n   |    |- base # 通用\n   |    |- components # 公共组件\n   |    |- utils # 通用工具\n   |    |- views # 各个子业务模块\n   |        ｜- apm\n   |        ｜- cicd\n   |        ｜- gtxs\n   |        ｜- login\n   |        ｜- ncs\n   |        ｜- nsf\n   |        ｜- platform\n   |- server # nodejs 服务相关\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br"),_("span",{staticClass:"line-number"},[v._v("6")]),_("br"),_("span",{staticClass:"line-number"},[v._v("7")]),_("br"),_("span",{staticClass:"line-number"},[v._v("8")]),_("br"),_("span",{staticClass:"line-number"},[v._v("9")]),_("br"),_("span",{staticClass:"line-number"},[v._v("10")]),_("br"),_("span",{staticClass:"line-number"},[v._v("11")]),_("br"),_("span",{staticClass:"line-number"},[v._v("12")]),_("br"),_("span",{staticClass:"line-number"},[v._v("13")]),_("br"),_("span",{staticClass:"line-number"},[v._v("14")]),_("br")]),_("CodeResult",{attrs:{lang:"",code:"-%20src%0A%20%20%20%7C-%20client%0A%20%20%20%7C%20%20%20%20%7C-%20base%20%23%20%E9%80%9A%E7%94%A8%0A%20%20%20%7C%20%20%20%20%7C-%20components%20%23%20%E5%85%AC%E5%85%B1%E7%BB%84%E4%BB%B6%0A%20%20%20%7C%20%20%20%20%7C-%20utils%20%23%20%E9%80%9A%E7%94%A8%E5%B7%A5%E5%85%B7%0A%20%20%20%7C%20%20%20%20%7C-%20views%20%23%20%E5%90%84%E4%B8%AA%E5%AD%90%E4%B8%9A%E5%8A%A1%E6%A8%A1%E5%9D%97%0A%20%20%20%7C%20%20%20%20%20%20%20%20%EF%BD%9C-%20apm%0A%20%20%20%7C%20%20%20%20%20%20%20%20%EF%BD%9C-%20cicd%0A%20%20%20%7C%20%20%20%20%20%20%20%20%EF%BD%9C-%20gtxs%0A%20%20%20%7C%20%20%20%20%20%20%20%20%EF%BD%9C-%20login%0A%20%20%20%7C%20%20%20%20%20%20%20%20%EF%BD%9C-%20ncs%0A%20%20%20%7C%20%20%20%20%20%20%20%20%EF%BD%9C-%20nsf%0A%20%20%20%7C%20%20%20%20%20%20%20%20%EF%BD%9C-%20platform%0A%20%20%20%7C-%20server%20%23%20nodejs%20%E6%9C%8D%E5%8A%A1%E7%9B%B8%E5%85%B3"}})],1),_("p",[v._v("虽然结构清晰，但是所有的子业务模块都用堆积在一个项目仓库中，面临着版本维护成本高，且多人开发时的代码各模块耦合严重，合并代码时冲突情况的发生也会愈发频繁等很多问题。")]),v._v(" "),_("h2",{attrs:{id:"分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[v._v("#")]),v._v(" 分析")]),v._v(" "),_("p",[v._v("诚然，任何技术的实现都要依托业务场景才会变得有意义，所以在阐述轻舟前端团队的插件化实践之前，我们先来简单展示一下轻舟前端各个子业务的基本形态。")]),v._v(" "),_("p",[_("img",{attrs:{src:t(634),alt:""}})]),v._v(" "),_("p",[v._v("从图中我们很容易发现各个子业务都是相互独立的，而平台则是为了横向服务于各个子业务，提供各个子业务入口等公共而诞生的。")]),v._v(" "),_("p",[v._v("而且随着业务产品线的不断扩张，工程管理成本也在迅速增长。具体来说，包括如下五个方面：")]),v._v(" "),_("ul",[_("li",[v._v("新业务线产品急速增加，同时为了保证快速接入且复用率的最大化，把文件放入同一仓库管理，导致文件数量增长极快，管理及协同开发难度也在不断加大。")]),v._v(" "),_("li",[v._v("文件越来越多，文件结构越不受控制，业务开发寻址变得越来越困难。")]),v._v(" "),_("li",[v._v("文件越来越多，开发、构建、部署速度变得越来越慢，开发体验在持续下降。")]),v._v(" "),_("li",[v._v("不同业务线间没有物理隔离，出现了跨业务线互相引用混乱，例如 A 业务线出现了 B 业务线名字的组件。")]),v._v(" "),_("li",[v._v("不同客户所需要的功能不同，子业务的版本也会不同，一个仓库无法管理多个子业务的不同版本组合。")])]),v._v(" "),_("h2",{attrs:{id:"方案选择"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方案选择"}},[v._v("#")]),v._v(" 方案选择")]),v._v(" "),_("p",[v._v("为了要解决这些问题，我们意识到需要拆分这些子业务，即进行工程优化的常规手段进行“分治”。")]),v._v(" "),_("p",[v._v("那么要怎么拆呢？我们考虑了很多方案，其中也包括现阶段业界流行的微前端方案。也从这个概念出发，我们也深度结合了轻舟前端的实际业务的开发情况，对现有工程进行了调研。")]),v._v(" "),_("p",[v._v("为什么不采用微前端方案？这个问题我们考虑很久，其中很大一部分原因是“中心化”的依赖。由于轻舟的大部分客户都是私有网络，定制化需求大，且轻舟前端应用属于中后台管理系统，出于安全问题，很大程度上不便于提供一个公共的存储服务作为版本控制中心。")]),v._v(" "),_("p",[v._v("其次就是整改周期中要不影响现有业务工程，做到平滑迁移，对现有工程中的代码基本做到不修改等。最主要的是要考虑兼容原有的客户代码（这点很难）。")]),v._v(" "),_("p",[v._v("最终我们另辟蹊径，采用了一种"),_("code",[v._v("插件化")]),v._v("的方案，“一切模块业务皆是插件”。")]),v._v(" "),_("h2",{attrs:{id:"方案落地"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方案落地"}},[v._v("#")]),v._v(" 方案落地")]),v._v(" "),_("p",[v._v("插件化就是将不断扩张的功能分散在插件中，内部集中维护逻辑，这就有点像数据库横向扩容，结构不变，拆分数据。")]),v._v(" "),_("p",[v._v("理想情况下，我们都希望一个库，或者一个框架具有足够的可拓展性。这个可拓展性体现在这三个方面：")]),v._v(" "),_("ul",[_("li",[v._v("支持产品形态业务等自由组合转换，针对不同客户需求提供不同时期的业务版本组合，以实现功能。")]),v._v(" "),_("li",[v._v("支持二次开发，满足不同业务场景的特定需求。")]),v._v(" "),_("li",[v._v("让代码以业务功能为纬度聚合起来，而不是某个片面的逻辑结构，在代码数量庞大的场景尤为重要。")])]),v._v(" "),_("p",[v._v("我们最终的方案依赖于 NPM 中的 git 依赖的功能机制。")]),v._v(" "),_("p",[v._v("所有业务都是独立的 git 仓库子工程，可以独立打包，也可以由一个统一的容器工程管理，打包时集成。")]),v._v(" "),_("p",[v._v("大致的方案图如下：")]),v._v(" "),_("p",[_("img",{attrs:{src:t(635),alt:""}})]),v._v(" "),_("ul",[_("li",[v._v("公共层：属于通用公共逻辑，存放整个平台通用的组件及后端业务逻辑。")]),v._v(" "),_("li",[v._v("业务层：针对不同业务拆分成不同等价的业务仓库，各个业务向上依赖，每个业务都可以当做独立插件。")]),v._v(" "),_("li",[v._v("统一容器：可选，不包含实际的业务逻辑，可以对所有业务层进行组合，并对外输出一个完整的项目产品。")])]),v._v(" "),_("p",[v._v("其中每一个块都是相互独立的仓库和业务，且都可以独立运行。通过 “git分支” 与 “npm依赖管理” 相结合, 使业务模块之间成为依赖库，相互解耦, 利于开发.")]),v._v(" "),_("p",[v._v("现在来试着解决最初的五个问题：")]),v._v(" "),_("ol",[_("li",[v._v("通过拆分仓库，使各个业务文件分散管理，并且提取了公共的common仓库，作为业务统一依赖。")]),v._v(" "),_("li",[v._v("通过拆分仓库，减少各个仓库中具体业务的代码量，开发时只需要关注自身业务和通用组件等部分。")]),v._v(" "),_("li",[v._v("通过拆分仓库，减少开发时的构建成本，减少开发文件依赖，使构建速度提升。")]),v._v(" "),_("li",[v._v("通过拆分仓库，不同业务线建立物理隔离。")]),v._v(" "),_("li",[v._v("通过各个子业务独立分支的方式，做到不同客户子业务级别的功能版本不同的自由组合。")])]),v._v(" "),_("h3",{attrs:{id:"举例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[v._v("#")]),v._v(" 举例")]),v._v(" "),_("p",[v._v("通过拆分，现在我们可以把"),_("code",[v._v("common")]),v._v("、"),_("code",[v._v("server")]),v._v("、"),_("code",[v._v("NSF")]),v._v("、"),_("code",[v._v("网关")]),v._v("、"),_("code",[v._v("平台")]),v._v("等多个业务模块当成独立的插件。"),_("br"),v._v("\n以下会简单的通过两个例子描述下具体的使用场景。")]),v._v(" "),_("h4",{attrs:{id:"业务组合"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#业务组合"}},[v._v("#")]),v._v(" 业务组合")]),v._v(" "),_("p",[v._v("我们可以通过"),_("code",[v._v("统一容器")]),v._v("增加不同的业务依赖，也就是在"),_("code",[v._v("统一容器")]),v._v("中，增加各个业务插件，让这个容器拥有相应的业务功能。如：在配置文件中增加了"),_("code",[v._v("login")]),v._v("登录业务，此时容器就会拥有一个登陆界面，同时后端node层也会拥有登录鉴权的相关逻辑。")]),v._v(" "),_("h4",{attrs:{id:"新增子业务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新增子业务"}},[v._v("#")]),v._v(" 新增子业务")]),v._v(" "),_("p",[v._v("当我们新增一个子业务时（如：cicd 业务），我们只需要创建一个 cicd 的新仓库，并且该仓库结构依然完全按照独立项目开发。只需要依赖公共层的"),_("code",[v._v("common")]),v._v("和"),_("code",[v._v("server")]),v._v("，并且在根目录增加一个基本配置文件"),_("code",[v._v("config.js")]),v._v("，就可以完全接入了。")]),v._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),_("p",[v._v("由于轻舟前端方案采用的是插件化的架构，所以组件库升级、优化打包方案等一系列工程都可以在插件方式下完成，而无需改变源码本身。")]),v._v(" "),_("p",[v._v("配置插件化，可参考 "),_("code",[v._v("vue-cli")]),v._v(" 插件原理。")]),v._v(" "),_("h3",{attrs:{id:"优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[v._v("#")]),v._v(" 优点")]),v._v(" "),_("ol",[_("li",[v._v("分支合并时的冲突可控 (不再采取分支合并进行最终输出).")]),v._v(" "),_("li",[v._v("业务模块之间相互解耦, 降低业务之间强耦合度.")]),v._v(" "),_("li",[v._v("代码结构规范化 (分治思想, 业务独立维护).")]),v._v(" "),_("li",[v._v("提高代码复用性 (通过规范化, 明确了可暴露的模块).")]),v._v(" "),_("li",[v._v("业务中, 优化了多个模块自由组合需求. (通过不同的分支引用, 进行自由组合)")])]),v._v(" "),_("h3",{attrs:{id:"不足"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#不足"}},[v._v("#")]),v._v(" 不足")]),v._v(" "),_("ol",[_("li",[v._v("线上部署更新都是以全量的前端资源进行打包，耗时较长。(可进行优化成单个业务独立打包)")]),v._v(" "),_("li",[v._v("由于插件化的机制，导致"),_("code",[v._v("webpack")]),v._v("配置等存在部分黑盒情况，不方便维护。(以通过打印输出最终配置)")])])])}),[],!1,null,null,null);s.default=a.exports}}]);
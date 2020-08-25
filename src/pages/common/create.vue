<template>
  <div class="create">
     <el-dialog :close-on-click-modal="false" :close-on-press-escape="false" width="80%" height="80%" title="开户协议" :visible.sync="dialogCreateFormVisible">
       <h4 class="modalTitle">开户协议</h4>
        <div class="contentWarp"><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">资管子账户注册协议书</span></span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">甲方（出资方）：</span>____________ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">乙方（融资方）：</span>____________</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">甲乙双方在自愿、平等、互利、双方相互信任的基础上，经过平等协商，特签订本合作协议，以便相互遵守。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;<span style="font-family:宋体">第一条：风险告知</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">进行期货交易存在风险，可能产生预期盈利，也可能发生巨额损失，损失总额可能超过乙方缴纳的风险保证金以及追加的风险保证金。资管账户是通过资管系统子母账户分仓系统进行交易，交易原理：由乙方使用的资管子账户通过资管系统发出交易指令，甲方的主账户按照指令发送到期货公司，最终在交易所进行成交；交易所再依次反馈成交信息。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">在交易过程中切勿相信服务商或他人的盈利保证，切勿盲目相信分析师的指导建议，做单要有自己的判断。为保证市场的健康发展，如发现个别服务商有诱骗及代投资者开户及交易、恶意刷单、为投资者代客操盘、欺诈损害投资者利益、向投资者做任何利益共享、风险共担及投资获利保证或保底保证、干涉投资者正常交易（包括但不限于建议或指导投资者建仓、平仓点位等变相代客交易行为）、与投资者签订委托投资协议或以其他任何形式接受投资者的全权委托、对投资者交易账户全权代理操作、采用变相支付等违规违法行为，如发现上述行为，请第一时间联系我方，金途金服将严肃处理。乙方必须认真考虑自己的经济能力是否适合进行期货交易，同时乙方应当明确以下几点：</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">1<span style="font-family:宋体">、乙方在期货市场进行交易，假如市场走势对乙方不利导致交易账户保证金不足时，期货公司</span><span style="font-family:Calibri">/</span><span style="font-family:宋体">委托方会根据期货经纪合同约定的方式通知乙方追加风险保证金，以使乙方能继续持有未平仓合约。如乙方未于规定时间内存入所需风险保证金，乙方持有的未平仓合约将可能在亏损的情况下被强行平仓，乙方必须承担由此导致的一切损失。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;&nbsp;2<span style="font-family:宋体">、乙方必须认真阅读并遵守期货交易所和委托方的业务规则，如果乙方无法满足业务规则要求，乙方所持有的未平仓合约将可能根据有关规则被强行平仓，乙方须承担产生的后果。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;&nbsp;3<span style="font-family:宋体">、在某些市场情况下，乙方可能会难以或无法将持有的未平仓合约平仓。例如：市场达到涨跌停板时出现。出现这类情况，乙方的所有风险保证金有可能无法弥补全部损失，乙方必须承担由此导致的全部损失。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;&nbsp;4<span style="font-family:宋体">、由于国家法律、法规、政策的变化、期货交易所交易规则的修改、紧急措施的出台等原因，乙方持有的未平仓合约可能无法继续持有，乙方必须承担由此导致的损失。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">5<span style="font-family:宋体">、由于非期货交易所或者期货公司所能控制的原因，例如：地震、水灾、火灾等不可抗力因素或者计算机系统、通讯系统故障等，可能造成乙方的指令无法成交或者无法全部成交，乙方必须承担由此导致的损失。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">6<span style="font-family:宋体">、在国内期货交易中，所有的交易结果须以当日交易所或结算机构的结算数据为依据。如果乙方利用盘中即时回报的交易结果作进一步的交易，乙方可能会承担额外的风险。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;&nbsp;7<span style="font-family:宋体">、期货交易是采用较少的保证金以期获取较高的利润的杠杆操作，此交易会使乙方的获利机会与乙方亏损的机会一样大。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;&nbsp;8<span style="font-family:宋体">、由于国内期货交易所大多采用计算机撮合系统交易，由于系统本身的问题，可能会造成乙方的市价指令无法成交或者全部成交，或者由于不能操作键盘来切换屏幕的不同版面以至于乙方的取消指令或者取代指令无法及时执行。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;&nbsp;9<span style="font-family:宋体">、期货过夜保证金不够强平制度：是针对乙方持仓过夜，但保证金不够要求标准时会被强平的规则，强平是期货公司及委托人的权利而不是义务。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">第二条：电子化期货交易风险说明</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;&nbsp;<span style="font-family:宋体">电子化期货交易是指通过计算机网络、通信网络、国际互联网等进行期货交易的交易方式。其主要形式为：</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">1<span style="font-family:宋体">、计算机自助委托交易，即乙方通过局域网进行的电子化期货交易。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">2<span style="font-family:宋体">、网上自助委托交易，即乙方通过国际互联网进行的电子化期货交易。为了保障期货交易的安全，电子化期货交易系统往往采取了积极的安全措施，但仍要特别提醒乙方，电子化期货交易存在风险。考虑是否采用电子化期货交易方式时，乙方应当明确以下几点：</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;<span style="font-family:宋体">（一）系统与交易所的远程数据通讯线路发生故障，而交易所还在正常进行交易；</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;<span style="font-family:宋体">（二）计算机交易系统本身出现故障，而交易所还在正常进行交易；</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;<span style="font-family:宋体">（三）乙方交易终端与系统通讯线路发生故障，而交易所还在正常交易；</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;<span style="font-family:宋体">（四）突然停电而导致计算机系统中断；</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;<span style="font-family:宋体">（五）乙方因缺乏网上交易经验，在交易过程中因自身原因进行的错误操作造成交易失败或交易失误；</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;<span style="font-family:宋体">（六）乙方交易密码的使用是电子化交易的致命环节，乙方对密码要严格保密，确保安全，以防被他人盗用、仿冒。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;<span style="font-family:宋体">（七）除上述风险外，使用网上委托交易的乙方还存在如下风险：</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;&nbsp;1<span style="font-family:宋体">．由于无法控制和不可预测的系统故障、设备故障、通讯故障、电力故障、网络故障及其它因素，可能导致交易系统非正常运行甚至瘫痪，使乙方的交易指令出现延迟、中断、数据错误等情况；</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;&nbsp;2<span style="font-family:宋体">．由于通讯线路繁忙或服务器负载过重，乙方可能不能及时进入网上委托系统完成交易；由于网络传输延迟，在乙方的查询结果中显示委托还未成功，乙方如果再次发出委托，可能会使委托服务器收到乙方的重复委托，导致乙方的重复买卖；同时由于网络延迟，可能在指定的委托价位不能成交，让乙方遭受损失；由于网络故障，在乙方通过期货电子化交易时，可能乙方的电脑界面已提示成功发送委托，但委托服务器并没有接受到委托指令，从而存在乙方不能及时完成交易，这里需要乙方及时查证核实乙方的成交情况，及时使用期货公司及委托人提供的其它交易手段。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;&nbsp;3<span style="font-family:宋体">．互联网是全球公共网络，并不由任何一个机构所控制，数据在互联网上传输的途径不是完全确定的，互联网本身并不是绝对安全可靠的环境。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;&nbsp;4<span style="font-family:宋体">．互联网上传输的数据有可能被某些个人、机构通过某种非法渠道获取，并有可能恶意破坏数据的原始性。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;&nbsp;5<span style="font-family:宋体">．互联网上的数据传输可能因通信繁忙等原因出现中断、停顿、延迟、数据错误或不完全，从而使网上交易出现延迟、停顿、中断。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;&nbsp;6<span style="font-family:宋体">．互联网上发布的行情信息及其它期货信息，有可能出现错误或被误导，希望乙方及时对比行情信息。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;&nbsp;7<span style="font-family:宋体">．由于网上黑客、网络病毒的破坏，电子化委托交易系统可能会出现故障，乙方可能不能及时进入该系统进行正常交易，或接到错误信息等给乙方带来风险。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;&nbsp;8<span style="font-family:宋体">．乙方自备的计算机可能存在的性能、质量、病毒等其他原因，影响到交易指令的及时执行、交易时间的准确或者交易数据的完整准确从而给乙方自身造成的损失。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">第三条：交易须知</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">1.<span style="font-family:宋体">资管账户是通过子母账户分仓系统进行交易，交易原理：由乙方使用的资管子账户通过资管系统发出交易指令，甲方的主账户按照指令发送到期货公司，最终在交易所进行成交。交易所再依次反馈成交信息。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">2.<span style="font-family:宋体">资管子账户只能交易各大交易所或交易中心的主力合约和次主力，国债期货暂不支持交易，股指期货只支持主力合约。</span></span></p><p><span style=";font-family:宋体;font-size:14px">3.<span style="font-family:宋体">乙方通过第三方支付系统或者通过线下转账形式向甲方支付操盘所需的风险保证金，甲方将乙方支付的风险保证金和甲方提供的融资资金一并注入期货资管子账号供乙方参与市场交易，乙方在交易时需对交易结果承担全部责任。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">4.<span style="font-family:宋体">在交易过程中，乙方的交易必须符合或遵守出资方的交易规则，若超出交易规则，导致的不良后果，全部由乙方承担。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">5.<span style="font-family:宋体">甲方会对乙方进行信息核对，若乙方提供的信息存在虚假或不匹配，一系列后果皆有乙方承担。</span></span></p><p><span style=";font-family:宋体;font-size:14px">6. <span style="font-family:宋体">乙方向甲方支付的风险保证金实行实时清算制，即在交易时间段内甲方实时对乙方支付的风险保证金进行清算，盈利部分实时转化为风险保证金。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">7.<span style="font-family:宋体">乙方投资收益和风险实行浮动制，即该账户所产生的资金盈亏及手续费全部由乙方承担，亏损部分由甲方从乙方支付的风险保证金里扣除，若亏损超过乙方向甲方支付的风险保证金，乙方须向甲方补齐差额，否则视为乙方对甲方的负债，甲方有向乙方追偿的权利。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">8. <span style="font-family:宋体">在交易过程中，若出现不可抗力的因素，如网络中断、系统故障，电力中断等，导致交易亏损或者无可挽回的损失，皆由乙方承担。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">9.<span style="font-family:宋体">乙方在交易过程中，出现关于交易的问题，最迟于</span><span style="font-family:Calibri">24</span><span style="font-family:宋体">小时之向甲方反馈，若超过该时间，甲方没有义务对乙方做出解释或解决措施。当乙方要求将盈利资金或者初始出资金额转出时，甲方需在乙方提出请求后的一个交易日之内将资金转入乙方指定的银行账号。</span></span></p><p><span style=";font-family:宋体;font-size:14px">10.<span style="font-family:宋体">手续费由甲乙双方确定的手续费执行。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;<span style="font-family:宋体">第四条：风险控制</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">1<span style="font-family:宋体">、持仓制度</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">合作期间，周一至周五，乙方所有品种做隔夜交易的仓位资金不能超过乙方向甲方支付的风险保证金当时金额的</span> 3<span style="font-family:宋体">倍 ，包括对冲的仓位资金，所有品种停盘前</span><span style="font-family:Calibri">10</span><span style="font-family:宋体">分钟甲方或者甲方指定人员开始检测，若超过</span><span style="font-family:Calibri">300%</span><span style="font-family:宋体">，停盘前</span><span style="font-family:Calibri">5</span><span style="font-family:宋体">分钟开始强平减仓。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">2<span style="font-family:宋体">、平仓线：</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">（</span>1<span style="font-family:宋体">）合作期间，当期货交易账户动态权益达到融资金额的 </span><span style="font-family:Calibri">102% &nbsp;</span><span style="font-family:宋体">时，即视为该期货资管账户的平仓线，达到强平线甲方有权强平所有持仓并禁止乙方开仓。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">（</span>2<span style="font-family:宋体">）合作期间，当期货交易账户亏动态权益达到融资金额的 </span><span style="font-family:Calibri">103% &nbsp;</span><span style="font-family:宋体">时，即视为该期货资管账户的追保线，达到追保线乙方只能持仓不能新开仓。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">（</span>3<span style="font-family:宋体">）当期货操作账户动态资金权益在平仓线以下时，甲方或甲方指定人员有权利按情况将所有仓位进行平仓处理。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">（</span>4<span style="font-family:宋体">）如果账户达到强平线，甲方有权进行资金清算，若乙方愿意继续和甲方合作，乙方应追加风险保证金，至该账户资金超过追保线。在未追加资金前，乙方无权继续进行交易。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">（</span>5<span style="font-family:宋体">）乙方在交易过程中，若交易产生盈利或追加风险保证金，使实时风险保证金超过初始乙方向甲方支付的风险保证金，乙方可以向甲方提出申请：要求甲方增加出资额度并调整相应的追保线和强平线，甲方需在一个交易日之内做出相应的调整。否则甲方有权不对交易账户做出任何调整。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">（</span>6<span style="font-family:宋体">）如果账户触发甲方强行平仓规则或者乙方将风险保证金全部转出的 </span><span style="font-family:Calibri">10</span><span style="font-family:宋体">日 后，若乙方一直未追加风险保证金，甲方有权单方面终止本协议并注销此期货资管账户。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">（</span>7<span style="font-family:宋体">）当期货合约涨跌幅距离涨停板、跌停板 </span><span style="font-family:Calibri">10% </span><span style="font-family:宋体">时，乙方不得建立与涨停板、跌停板方向相反的仓位，已经持有的仓位也必须立即平仓，否则视为违约。若乙方没有及时平仓，因涨跌停造成的资金损失（包括超过风险保证金的损失部分）全部由乙方承担，甲方有权向乙方追偿。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">第五条：相关责任</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">1<span style="font-family:宋体">、操作期间，乙方发生违约行为，甲方或其指定人员有权强平持仓，平仓产生的利润归甲方所有，亏损由乙方承担，同时取消乙方交易权限，乙方所剩权益作为违约金赔偿甲方。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">2<span style="font-family:宋体">、乙方进行网上交易所需的计算机软硬件及网络环境由乙方自行解决（或由乙方要求甲方提供计算机软硬件及网络环境）。但如果由于通讯系统繁忙、中断，计算机交易故障，网络及信息系统故障</span><span style="font-family:Calibri">(</span><span style="font-family:宋体">包括期货公司的故障），电力中断或者不可预测因素造成交易受阻致使乙方无法进行开（平）仓，其亏损甲方不承担任何责任。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">3<span style="font-family:宋体">、若乙方对交易有疑问，比如：乙方否认是乙方本人下单、无法顺利建仓平仓，乙方应保留无法建仓平仓的截图和非本人操作的凭证，并于</span><span style="font-family:Calibri">24</span><span style="font-family:宋体">小时内向甲方提出申诉，</span><span style="font-family:Calibri">24</span><span style="font-family:宋体">小时后甲方有权视为乙方对所有交易无疑义。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">4<span style="font-family:宋体">、在交易过程中，乙方不要相信任何人包括甲方工作人员在内的任何关于保证收益的承诺。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">5<span style="font-family:宋体">、在交易过程中请乙方拒绝接受任何第三方人员关于代客操盘的请求，如在交易过程中乙方擅自与第三方人员就代客操盘达成协议，此行为与甲方无关，因此造成的任何交易资金损失亦与甲方无关。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">第六条：合作的开始及终止</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">在合作的有效期内，如发生下述情形，合作自动终止，各方可依约办理清算：</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">1<span style="font-family:宋体">、甲乙双方达成协议，共同要求提前终止合作；</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">2<span style="font-family:宋体">、因不可抗力因素造成本协议无法正常执行，包括自然灾害、如台风、地震、洪水、冰雹；社会异常事件，如罢工、骚乱等方面。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">3<span style="font-family:宋体">、乙方违反本协议的约定，或者其资金不能满足继续操作，甲方有权提前终止合作。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">4<span style="font-family:宋体">、合作期满后，在两个交易日内，甲方取得原始资金，剩余资金归乙方所有，甲方需在协议终止后两个交易日内转入乙方指定账号。不足甲方原始资金部分，乙方予以补齐，否则视为乙方对甲方的负债，甲方有向乙方追偿的权利。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">5<span style="font-family:宋体">、如交易过程中，出现穿仓（亏损超过乙方向甲方支付的风险保证金）时，双方合作自动终结，甲方有向乙方追偿穿仓金额的权利；如乙方想继续合作，乙方需补齐穿仓的金额并继续支付风险保证金至甲方收款账户，直至交易账户超过追保线。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">6<span style="font-family:宋体">、甲方可根据乙方的交易具体情况（比如：交易量偏小，风险控制能力差，亏损度大，交易风格不适合配资操作等原因）决定是否与乙方继续合作，可随时解除与乙方合作关系； </span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">第七条：其他情况</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">1<span style="font-family:宋体">、签订协议前请双方仔细阅读协议内容，签订即视为双方已经明确知晓各自所享有的权益及义务。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">2<span style="font-family:宋体">、签定协议时，乙方到甲方所在地当面签定或者双方视频确认身份后传真协议或者电子邮件确认。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">3<span style="font-family:宋体">、如本协议的甲乙双方对协议发生争执或其中一方发生违约，应首先协商解决，协商不成，向甲方所在地的人民法院起诉解决。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">4<span style="font-family:宋体">、本协议一式两份，甲乙双方各执一份，经双方全部签字或盖章且乙方向甲方支付风险保证金完成后即可生效。协议未尽事宜，双方共同协商补充。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">5<span style="font-family:宋体">、协议到期后，如甲乙双方同意续约，则此协议继续有效。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">乙方</span>__________<span style="font-family:宋体">已全部仔细阅读资管子账户开户协议书，完全理解并自愿接受以上所有条款，因本人开设期货账户通道不顺畅，特此申请贵公司母账户下属子账户进行交易，本人自愿承担由此可能产生的交易亏损，与贵司无关。</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;<span style="font-family:宋体">乙方签名：</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;<span style="font-family:宋体">签署日期：</span></span></p><p><span style=";font-family:宋体;font-size:14px">&nbsp;</span></p><p><span style=";font-family:Calibri;font-size:14px">&nbsp;</span></p><p><br></p></div>
       <div slot="footer" class="dialog-footer">
        <el-button type="primary" class="submitButton" :disabled="!!count" @click="dialogCreateFormVisible = false">{{`${count ? count : ''} 已阅读并同意`}}</el-button>
      </div>
     </el-dialog>
      <el-form
          :model="ruleForm"
          :rules="rules"
          label-width="80px"
          ref="ruleForm"
        >
          <el-form-item label="真实姓名" prop="username">
            <el-input placeholder="身份证一致的姓名" v-model.trim="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="证件类型" prop="cardType">
            <el-select
              v-model.trim="ruleForm.cardType"
              placeholder="选择证件类型"
            >
              <el-option
                key="大陆身份证"
                label="大陆身份证"
                value="大陆身份证"
              ></el-option>
              <el-option
                key="护照"
                label="护照"
                value="护照"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="证件号码" prop="cardnum">
            <el-input placeholder="身份证号、护照" v-model.trim="ruleForm.cardnum"></el-input>
          </el-form-item>
          <el-form-item label="机构代码" prop="agencynum">
            <el-input placeholder="请填写机构代码" v-model.trim="ruleForm.agencynum"></el-input>
          </el-form-item>
          <el-form-item label="银行卡号" prop="bankcount">
            <el-input placeholder="请填写开户银行卡号" v-model.trim="ruleForm.bankcount"></el-input>
          </el-form-item>
          <el-form-item label="开户支行" prop="bankinfo">
            <el-input placeholder="请填写开户支行" v-model.trim="ruleForm.bankinfo"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="phonenum">
            <el-input placeholder="请填写手机号" v-model.trim="ruleForm.phonenum"></el-input>
          </el-form-item>
          <div style="margin: .2rem 0 .4rem 0"> 开户时间: <span style="color: red;"> 周一到周日 24小时</span> 	</div>
          <el-form-item label="认证照片" prop="imageUrl">
            <el-upload
              class="avatar-uploader"
              action="api/image"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="ruleForm.imageUrl" :src="`/api/static/uploads/${ruleForm.imageUrl}`" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <span>身份证正面</span>
          </el-form-item>
          <el-form-item prop="imageUrlBack">
            <el-upload
              class="avatar-uploader"
              action="api/image"
              :show-file-list="false"
              :on-success="handleAvatarSuccessBack"
              :before-upload="beforeAvatarUpload">
              <img v-if="ruleForm.imageUrlBack" :src="`/api/static/uploads/${ruleForm.imageUrlBack}`" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <span>身份证反面</span>
          </el-form-item>
          <el-form-item label="认证照片" prop="imageUrlBank">
            <el-upload
              class="avatar-uploader"
              action="api/image"
              :show-file-list="false"
              :on-success="handleAvatarSuccessBank"
              :before-upload="beforeAvatarUpload">
              <img v-if="ruleForm.imageUrlBank" :src="`/api/static/uploads/${ruleForm.imageUrlBank}`" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <span>银行卡正面</span>
          </el-form-item>
          <el-form-item prop="imageUrlBankBack">
            <el-upload
              class="avatar-uploader"
              action="api/image"
              :show-file-list="false"
              :on-success="handleAvatarSuccessBankBack"
              :before-upload="beforeAvatarUpload">
              <img v-if="ruleForm.imageUrlBankBack" :src="`/api/static/uploads/${ruleForm.imageUrlBankBack}`" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <span>银行卡反面</span>
          </el-form-item>
          <el-button style="margin: .32rem 0" type="primary" class="submitButton" @click="submitForm">确认开户</el-button>
        </el-form>
  </div>
</template>

<script>
import PHONE_NUMBER_REG from "@/utils/phoneReg.js";
// import idCardNoUtil from "@/utils/checkCardCode";
export default {
  mounted() {
    this.handle = setInterval(() => {
      if (this.count === 0) {
        clearInterval(this.handle)
      } else {
        this.count = this.count - 1
      }
    }, 1000)
  },
  data() {
    // const checkCardCode = (rule, value, callback) => {
    //   if (!value) {
    //     callback(new Error('身份证号码不能为空'));
    //   } else if(!idCardNoUtil.checkIdCardNo(value)) {
    //     callback(new Error('请输入正确的身份证号码'));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      // checkCardCode,
      dialogCreateFormVisible: false,
      count: 5,
      ruleForm: {
        username:'',
        cardnum:'',
        agencynum: '',
        phonenum: '',
        cardType: '大陆身份证',
        imageUrl: '',
        imageUrlBack:'',
        imageUrlBank:'',
        imageUrlBankBack:'',
        bankcount: '',
        bankinfo: '',
      },
      rules: {
        cardnum: [
          { required: true, message: "请输入证件号码", trigger: "blur" },
        ],
        username: [
          { required: true, message: "请输入用户姓名", trigger: "blur" },
        ],
        cardType: [
          { required: true, message: "请选择证件类型", trigger: "blur" },
        ],
        agencynum: [
          { required: true, message: "请输入机构代码", trigger: "blur" },
        ],
        bankcount: [
          { required: true, message: "请输入开户银行卡号", trigger: "blur" },
        ],
        bankinfo: [
          { required: true, message: "请输入开户支行", trigger: "blur" },
        ],
        phonenum: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          {
            pattern: PHONE_NUMBER_REG,
            message: "请输入正确电话",
            trigger: "blur"
          }
        ],
        imageUrl: [
          { required: true, message: "请输入身份证正面照片", trigger: "blur" },
        ],
        imageUrlBack: [
          { required: true, message: "请输入身份证反面照片", trigger: "blur" },
        ],
        imageUrlBank: [
          { required: true, message: "请输入银行卡正面照片", trigger: "blur" },
        ],
        imageUrlBankBack: [
          { required: true, message: "请输入银行卡反面照片", trigger: "blur" },
        ],
      },
    }
  },
  methods: {
    async submitRequest() {
      try {
        const result = await this.$api().poverty.sendUser(this.ruleForm);
        if (result.fields.status) {
           this.$message.error(result.fields.statusText);
        } else {
          this.$message({
            message: '提交开户成功',
            type: 'success'
          });
          this.ruleForm = {
            username:'',
            cardnum:'',
            agencynum: '',
            phonenum: '',
            cardType: '大陆身份证',
            imageUrl: '',
            imageUrlBack:'',
            imageUrlBank:'',
            imageUrlBankBack:'',
            bankcount: '',
            bankinfo: '',
          }
        }

      } catch (error) {
        this.$message.error('服务器出错了');
      }
    },
    submitForm() {
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          this.submitRequest();
        } else {
          console.log("error submit!!");
        }
      });
    },
    handleAvatarSuccess(res, file) {
        this.ruleForm.imageUrl = `${res.data.fileName}`;
        this.$refs['ruleForm'].validateField('imageUrl')
      },
    handleAvatarSuccessBack(res, file) {
        this.ruleForm.imageUrlBack = `${res.data.fileName}`;
        this.$refs['ruleForm'].validateField('imageUrlBack')
      },
    handleAvatarSuccessBank(res, file) {
        this.ruleForm.imageUrlBank = `${res.data.fileName}`;
        this.$refs['ruleForm'].validateField('imageUrlBank')
      },
      handleAvatarSuccessBankBack(res, file) {
        this.ruleForm.imageUrlBankBack = `${res.data.fileName}`;
        this.$refs['ruleForm'].validateField('imageUrlBankBack')
      },
      beforeAvatarUpload(file) {
        // const isLt2M = file.size / 1024 / 1024 < 2;

        // if (!isLt2M) {
        //   this.$message.error('上传头像图片大小不能超过 2MB!');
        // }
        // return isLt2M;
        return true
      }
  }

}
</script>

<style lang="scss">
.create {
  padding: 0 20px;
  .modalTitle {
    text-align: center;
  }
  .submitButton {
    width: 100%;
    background-color: #057AFF;
    height: 1rem;
    font-family: PingFang SC;
    font-style: normal;
    font-weight: 600;
    font-size: .32rem;
    line-height: .44rem;
    text-align: center;
    text-transform: capitalize;

    color: #FFFFFF;
  }
  .el-dialog {
    height: 70%;
    overflow: auto;
    display: flex;
    flex-direction: column;

    .el-dialog__body {
      // height: 60%;
      padding: 0.3rem;
      overflow: auto;
    }
  }
  .el-select {
    width: 100%;
  }
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}

</style>
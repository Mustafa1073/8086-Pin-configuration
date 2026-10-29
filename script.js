const pa=(...a)=>a.map(d=>'<path d="'+d+'"/>').join('');
const IC={
menu:pa('M4 6h16','M4 12h16','M4 18h16'),x:pa('M18 6 6 18','M6 6l12 12'),chev:pa('m9 18 6-6-6-6'),
plus:pa('M5 12h14','M12 5v14'),minus:pa('M5 12h14'),
cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>'+pa('M15 2v2','M15 20v2','M2 15h2','M2 9h2','M20 15h2','M20 9h2','M9 2v2','M9 20v2'),
network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/>'+pa('M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3','M12 12V8'),
shuffle:pa('M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22','m18 2 4 4-4 4','M2 6h1.9c1.5 0 2.9.9 3.6 2.2','M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8','m18 14 4 4-4 4'),
pin:pa('M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z')+'<circle cx="12" cy="10" r="3"/>',
sliders:pa('M3 6h9','M16 6h5','M3 12h3','M10 12h11','M3 18h11','M18 18h3')+'<circle cx="14" cy="6" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="16" cy="18" r="2"/>',
zap:pa('M13 2 3 14h9l-1 8 10-12h-9z'),
battery:'<rect x="2" y="7" width="16" height="10" rx="2"/>'+pa('M22 11v2','M6 11v2','M10 11v2'),
clock:'<circle cx="12" cy="12" r="10"/>'+pa('M12 6v6l4 2'),
table:'<rect x="3" y="3" width="18" height="18" rx="2"/>'+pa('M3 9h18','M3 15h18','M9 3v18'),
book:pa('M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z','M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'),
printer:pa('M6 9V2h12v7','M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2')+'<rect x="6" y="14" width="12" height="8"/>',
zoom:'<circle cx="11" cy="11" r="8"/>'+pa('m21 21-4.3-4.3'),
globe:'<circle cx="12" cy="12" r="10"/>'+pa('M2 12h20','M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'),
columns:'<rect x="3" y="3" width="18" height="18" rx="2"/>'+pa('M12 3v18'),
filter:pa('M22 3H2l8 9.46V19l4 2v-8.54z'),
pointer:pa('M4.04 4.69a.5.5 0 0 1 .65-.65l16 6.5a.5.5 0 0 1-.06.95l-6.12 1.58a2 2 0 0 0-1.44 1.43l-1.58 6.13a.5.5 0 0 1-.95.06z'),
info:'<circle cx="12" cy="12" r="10"/>'+pa('M12 16v-4','M12 8h.01'),
list:pa('M8 6h13','M8 12h13','M8 18h13','M3 6h.01','M3 12h.01','M3 18h.01'),
link:pa('M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71','M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'),
swap:pa('M8 3 4 7l4 4','M4 7h16','m16 21 4-4-4-4','M20 17H4'),
login:pa('M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4','m10 17 5-5-5-5','M15 12H3'),
logout:pa('M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4','m16 17 5-5-5-5','M21 12H9'),
plug:pa('M12 22v-5','M9 8V2','M15 8V2','M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z'),
eye:pa('M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z')+'<circle cx="12" cy="12" r="3"/>',
eyeoff:pa('M9.88 9.88a3 3 0 1 0 4.24 4.24','M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68','M6.61 6.61A13.53 13.53 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61','m2 2 20 20'),
sparkles:pa('M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0L14.06 8.5a2 2 0 0 0 1.44 1.44l6.14 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z','M20 3v4','M22 5h-4'),
terminal:pa('m4 17 6-6-6-6','M12 19h8'),
layers:pa('M12 2 2 7l10 5 10-5z','m2 17 10 5 10-5','m2 12 10 5 10-5'),
calc:'<rect x="4" y="2" width="16" height="20" rx="2"/>'+pa('M8 6h8','M8 10h.01','M12 10h.01','M16 10h.01','M8 14h.01','M12 14h.01','M16 14h.01','M8 18h.01','M12 18h.01','M16 18h.01'),
db:'<ellipse cx="12" cy="5" rx="9" ry="3"/>'+pa('M3 5v14a9 3 0 0 0 18 0V5','M3 12a9 3 0 0 0 18 0'),
plusminus:pa('M12 3v8','M8 7h8','M8 18h8'),
and:pa('M5 4h7a8 8 0 0 1 0 16H5z','M1 9h4','M1 15h4','M20 12h3'),
rotate:pa('M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8','M21 3v5h-5'),
hourglass:pa('M5 22h14','M5 2h14','M17 22v-4.17a2 2 0 0 0-.59-1.41L12 12l-4.41 4.41A2 2 0 0 0 7 17.83V22','M7 2v4.17a2 2 0 0 0 .59 1.41L12 12l4.41-4.41A2 2 0 0 0 17 6.17V2'),
code:pa('m16 18 6-6-6-6','m8 6-6 6 6 6'),
rows:'<rect x="3" y="3" width="18" height="18" rx="2"/>'+pa('M3 9h18','M3 15h18'),
sigma:pa('M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2'),
grid:'<rect x="3" y="3" width="18" height="18" rx="2"/>'+pa('M3 12h18','M12 3v18'),
cols3:'<rect x="3" y="3" width="18" height="18" rx="2"/>'+pa('M9 3v18','M15 3v18'),
hash:pa('M4 9h16','M4 15h16','M10 3 8 21','M16 3l-2 18'),
play:pa('M6 3l14 9-14 9z'),
flag:pa('M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z','M4 22v-7'),
activity:pa('M22 12h-4l-3 9L9 3l-3 9H2'),
up:pa('M12 19V5','m5 12 7-7 7 7'),
corner:pa('m10 9 5-5 5 5','M4 20h7a4 4 0 0 0 4-4V4'),
oval:'<ellipse cx="12" cy="12" rx="6" ry="9"/>',
equal:pa('M5 9h14','M5 15h14'),
warn:pa('m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3','M12 9v4','M12 17h.01'),
skip:pa('m5 4 10 8-10 8V4z','M19 5v14'),
upr:pa('M7 17 17 7','M7 7h10v10'),dnr:pa('M7 7l10 10','M17 7v10H7'),
plusbox:'<rect x="3" y="3" width="18" height="18" rx="2"/>'+pa('M8 12h8','M12 8v8'),
cup:pa('m17 11-5-5-5 5','m17 18-5-5-5 5'),cdn:pa('m7 6 5 5 5-5','m7 13 5 5 5-5'),
square:'<rect x="4" y="4" width="16" height="16" rx="2"/>'};
const ico=(n,c)=>'<svg class="ico'+(c?' '+c:'')+'" viewBox="0 0 24 24" aria-hidden="true">'+IC[n]+'</svg>';
const NI={r:'cpu',alu:'calc',add:'plusminus',lgc:'and',shf:'rotate',tmp:'hourglass',cu:'sliders',dec:'code',tim:'clock',biu:'plug',que:'rows',sum:'sigma',bus:'swap',reg:'db',gen:'grid',ax:'calc',bx:'pin',cx:'hash',dx:'db',ptr:'pointer',sp:'layers',bp:'pointer',si:'upr',di:'dnr',seg:'cols3',cs:'code',ds:'db',ss:'layers',es:'plusbox',ip:'play',flg:'flag',stf:'activity',ctf:'sliders',cf:'up',pf:'equal',af:'corner',zf:'oval',sf:'plusminus',of:'warn',tf:'skip',if:'zap',df:'swap',ah:'cup',bh:'cup',ch:'cup',dh:'cup',al:'cdn',bl:'cdn',cl:'cdn',dl:'cdn',q1:'square',q2:'square',q3:'square',q4:'square',q5:'square',q6:'square'};
const ioi=s=>/^(ثنائي|Bidirectional)/.test(s)?'swap':/^(دخل|Input)/.test(s)?'login':/^(خرج|Output)/.test(s)?'logout':'plug';
const CAT={ad:['عنوان / بيانات (مُضاعَفة)','--ad','shuffle'],addr:['عنوان / حالة','--addr','pin'],ctl:['تحكم بالناقل','--ctl','sliders'],int:['مقاطعات','--int','zap'],arb:['إدارة الناقل','--arb','network'],pwr:['طاقة','--pwr','battery'],clk:['ساعة / إعادة ضبط','--clk','clock']};
const P={};
const ad=(i)=>({c:'ad',n:'AD'+i,io:'ثنائي الاتجاه (Tri-state)',
f:'طرف مُضاعَف: يحمل البت '+i+' من العنوان ثم البت '+i+' من البيانات.',
x:'في الدورة T1 يخرج العنوان (A'+i+') ويُحفظ في المثبّتات عبر إشارة ALE، ثم في T2&ndash;T4 يصبح خط بيانات D'+i+'. هذه الحيلة تخفض عدد الأطراف من 40+ إلى 40. '+(i<8?'هذا الطرف ضمن البايت المنخفض D0&ndash;D7 ويتصل بالنصف المنخفض من الذاكرة.':'هذا الطرف ضمن البايت المرتفع D8&ndash;D15 ويتصل بالنصف المرتفع من الذاكرة ويُفعَّل مع BHE.')+(i==0?' الطرف AD0 يعمل أيضاً كـ A0: إذا كان 0 في T1 يُختار البايت المنخفض.':''),
w:[25,32,29,34,'74LS373','74LS245']});
for(let i=0;i<=15;i++)P[i<15?16-i:39]=ad(i);
P[1]={c:'pwr',n:'GND',f:'الأرضي (0V) المرجعي للمعالج.',x:'يوجد طرفا أرضي (1 و 20) ويجب توصيلهما معاً. تعدد الأطراف يقلل الضجيج ويوفر مسار عودة للتيار الكبير أثناء التبديل السريع.',w:[20]};
P[20]={...P[1]};P[20].w=[1];
P[40]={c:'pwr',n:'VCC',f:'تغذية +5V للمعالج.',x:'يستهلك المعالج تقريباً 340 mA. يُنصح بمكثف تنعيم 0.1µF قريب جداً من الطرف لامتصاص تيارات التبديل.'};
P[17]={c:'int',n:'NMI',io:'دخل (يعمل بحافة صاعدة)',f:'مقاطعة غير قابلة للقناع (Non-Maskable Interrupt).',x:'تُفعَّل بحافة صاعدة ولا يمكن تعطيلها بالأمر CLI. تُستخدم للأحداث الحرجة مثل انقطاع التيار أو خطأ الذاكرة. تقفز مباشرة إلى المتجه رقم 2 (العنوان 00008H).',w:[18]};
P[18]={c:'int',n:'INTR',io:'دخل (مستوى عالٍ)',f:'طلب مقاطعة قابلة للقناع (Interrupt Request).',x:'يُفحص عند نهاية كل أمر. تُقبل فقط إذا كان العلم IF = 1 (بالأمر STI). يرد المعالج بنبضتين INTA، وخلال الثانية تضع الدائرة الخارجية (مثل 8259 PIC) رقم المقاطعة على ناقل البيانات.',w:[24,'8259 PIC']};
P[19]={c:'clk',n:'CLK',io:'دخل',f:'دخل الساعة الذي يحدد سرعة تنفيذ المعالج.',x:'يجب أن تكون نسبة الدورة (Duty Cycle) نحو 33% . تُولَّد عادةً من الشريحة 8284A التي تعطي أيضاً إشارتي RESET وREADY مُزامَنتين. الدورة الواحدة للناقل (Bus Cycle) تساوي 4 نبضات ساعة T1&ndash;T4.',w:[21,22,'8284A']};
P[21]={c:'clk',n:'RESET',io:'دخل',f:'إعادة ضبط المعالج.',x:'عند إبقائه عالياً 4 نبضات ساعة على الأقل يتوقف المعالج ويصفّر CS وIP وDS وSS وES والأعلام، ويضع CS=FFFFH وIP=0000H، فيبدأ التنفيذ من العنوان FFFF0H (آخر 16 بايت في الذاكرة، وهناك أمر JMP للبرنامج الرئيسي).',w:[19,'8284A']};
P[22]={c:'clk',n:'READY',io:'دخل',f:'إشارة جاهزية الذاكرة أو المنفذ.',x:'إذا كانت الذاكرة أو الـ I/O أبطأ من المعالج تُخفض هذه الإشارة فيُدخل المعالج حالات انتظار (Wait States) بين T3 وT4 إلى أن تعود عالية. تمرّ غالباً عبر 8284A للمزامنة.',w:[19,32,29]};
P[23]={c:'ctl',n:'~TEST',io:'دخل (Active Low)',f:'إشارة اختبار تُفحص بالأمر WAIT.',x:'عند تنفيذ WAIT ينتظر المعالج حتى يصبح TEST منخفضاً، وهي تُستخدم لمزامنة المعالج مع معالج مساعد مثل 8087 الرياضي، الذي يُنزّل الإشارة عند انتهاء عمليته.',w:['8087']};
P[32]={c:'ctl',n:'~RD',io:'خرج (Tri-state، Active Low)',f:'إشارة قراءة: المعالج يريد قراءة من الذاكرة أو منفذ I/O.',x:'تُنزَّل خلال T2&ndash;T3. يحدد الطرف M/IO إن كانت القراءة من الذاكرة أو من منفذ. تتصل بطرف OE أو RD في الذاكرة والأجهزة. في نمط Maximum تُولَّد إشارات القراءة والكتابة بواسطة المتحكم 8288.',w:[28,29,26,27]};
P[33]={c:'ctl',n:'MN/~MX',io:'دخل',f:'يختار نمط التشغيل: Minimum أو Maximum.',x:'عند توصيله بـ VCC (1) يعمل المعالج بنمط Minimum: نظام وحيد المعالج ويولّد إشارات التحكم بنفسه. عند توصيله بالأرضي (0) يعمل بنمط Maximum: أنظمة متعددة المعالجات، وتصبح إشارات التحكم الأطراف 24&ndash;31 مختلفة وتُترجَم عبر 8288.',w:[24,25,26,27,28,29,30,31]};
P[34]={c:'addr',n:'~BHE/S7',io:'خرج (Tri-state)',f:'تمكين البايت المرتفع (Bus High Enable).',x:'في T1 يعمل BHE: إذا كان 0 فالبايت المرتفع D8&ndash;D15 مفعّل. مع A0 يحددان النوع: BHE=0,A0=0 كلمة 16-بت؛ BHE=1,A0=0 بايت منخفض؛ BHE=0,A0=1 بايت مرتفع. في T2&ndash;T4 يعمل كحالة S7 (غير مستخدم).',w:[16,39]};
[[35,19,6],[36,18,5],[37,17,4],[38,16,3]].forEach(([p,a,s])=>P[p]={c:'addr',n:'A'+a+'/S'+s,io:'خرج (Tri-state)',
f:'طرف مُضاعَف: البت '+a+' من العنوان ثم حالة S'+s+'.',
x:'في T1 يخرج A'+a+' (أعلى 4 أبواب من العنوان 20-بت، فيعطي المعالج مساحة 1 ميغابايت). في T2&ndash;T4 يخرج إشارات حالة: '+({6:'S6 دائماً 0.',5:'S5 يمثل حالة العلم IF.',4:'S4 وS3 معاً يحددان قطعة الذاكرة المستخدمة (ES/SS/CS/DS).',3:'S4 وS3 معاً يحددان قطعة الذاكرة المستخدمة (00=ES، 01=SS، 10=CS أو بلا قطعة، 11=DS).'}[s]),
w:[25,'74LS373']});
const D=(a,b)=>({d:[a,b]});
P[24]=D({c:'ctl',n:'~INTA',io:'خرج (Active Low)',f:'إقرار المقاطعة (Interrupt Acknowledge).',x:'يرسل المعالج نبضتين: الأولى تُنبّه المتحكم 8259 بأن المقاطعة قُبلت، وفي الثانية يضع 8259 رقم المقاطعة على ناقل البيانات فيقرؤه المعالج ويقفز إلى المتجه الموافق.',w:[18,'8259 PIC']},
{c:'ctl',n:'QS1',io:'خرج',f:'حالة طابور الأوامر (Queue Status) البت 1.',x:'مع QS0 يخبران المعالج المساعد (مثل 8087) بما يجري في طابور الأوامر: 00 لا عملية، 01 قراءة أول بايت من الأمر، 10 الطابور فارغ، 11 قراءة بايت تالٍ.',w:[25,'8087']});
P[25]=D({c:'ctl',n:'ALE',io:'خرج',f:'تمكين المثبّت (Address Latch Enable).',x:'نبضة عالية في T1 تخبر مثبّتات العنوان (74LS373) بحفظ العنوان القادم على AD0&ndash;AD15 وA16&ndash;A19 قبل أن يتحول الناقل إلى بيانات. هذه الإشارة هي مفتاح فك التضاعف.',w:[16,15,39,35,'74LS373']},
{c:'ctl',n:'QS0',io:'خرج',f:'حالة طابور الأوامر البت 0.',x:'يعمل مع QS1 لإبلاغ المعالجات المساعدة بحالة الطابور المؤلف من 6 بايت.',w:[24]});
P[26]=D({c:'ctl',n:'~DEN',io:'خرج (Tri-state، Active Low)',f:'تمكين بيانات الناقل (Data Enable).',x:'تُفعّل الدارات العازلة ثنائية الاتجاه 74LS245 (Transceiver) عندما يكون هناك بيانات على الناقل. تتفعّل من T2 حتى T4 تقريباً.',w:[27,'74LS245']},
{c:'ctl',n:'~S0',io:'خرج (Tri-state)',f:'إشارة الحالة S0.',x:'مع S1 وS2 تشكّل شيفرة 3-بت تُرسل إلى المتحكم 8288 ليفكّها إلى إشارات تحكم: 000 INTA، 001 قراءة I/O، 010 كتابة I/O، 011 توقف، 100 جلب أمر، 101 قراءة ذاكرة، 110 كتابة ذاكرة، 111 خامل.',w:[27,28,'8288']});
P[27]=D({c:'ctl',n:'DT/~R',io:'خرج (Tri-state)',f:'اتجاه نقل البيانات (Data Transmit/Receive).',x:'مستوى عالٍ = المعالج يرسل (كتابة). مستوى منخفض = المعالج يستقبل (قراءة). يتصل بطرف DIR في 74LS245 لتحديد اتجاه الدارة العازلة.',w:[26,'74LS245']},
{c:'ctl',n:'~S1',io:'خرج (Tri-state)',f:'إشارة الحالة S1.',x:'جزء من شيفرة الحالة S2 S1 S0 المُرسلة للمتحكم 8288 لتوليد إشارات التحكم.',w:[26,28,'8288']});
P[28]=D({c:'ctl',n:'M/~IO',io:'خرج (Tri-state)',f:'يحدد إن كانت العملية على الذاكرة أم على منفذ إدخال/إخراج.',x:'M/IO = 1 تعني عملية على الذاكرة (Memory)، وM/IO = 0 تعني عملية على منفذ I/O. يُستخدم في فك العنوان لاختيار شرائح الذاكرة أو الأجهزة الطرفية. (في 8088 تكون الإشارة معكوسة IO/M).',w:[32,29]},
{c:'ctl',n:'~S2',io:'خرج (Tri-state)',f:'إشارة الحالة S2.',x:'ثالث بت من الشيفرة S2 S1 S0 التي يفكّها 8288. S2=1 يعني عادةً عملية على الذاكرة أو جلب.',w:[26,27,'8288']});
P[29]=D({c:'ctl',n:'~WR',io:'خرج (Tri-state، Active Low)',f:'إشارة كتابة: المعالج يكتب إلى الذاكرة أو المنفذ.',x:'تُنزَّل خلال T2&ndash;T4 والبيانات صحيحة على الناقل. مع M/IO تحدد وجهة الكتابة. تتصل بطرف WE في الذاكرة.',w:[28,32,27]},
{c:'ctl',n:'~LOCK',io:'خرج (Tri-state، Active Low)',f:'قفل الناقل أثناء أوامر معينة.',x:'يُفعَّل بالبادئة LOCK قبل أمر، فيمنع المعالجات الأخرى من أخذ الناقل أثناء تنفيذه. يُستخدم لتنفيذ عمليات غير قابلة للتجزئة (Atomic) مثل XCHG على موارد مشتركة.',w:[30,31]});
P[30]=D({c:'arb',n:'HOLD',io:'دخل',f:'طلب الناقل من جهاز آخر (مثل DMA).',x:'يرفع المتحكم DMA هذه الإشارة ليطلب التحكم بالنواقل. يُنهي المعالج دورته الحالية ثم يعزل نفسه عن الناقل ويرد بإشارة HLDA.',w:[31,'8237 DMA']},
{c:'arb',n:'~RQ/~GT0',io:'ثنائي الاتجاه',f:'طلب ومنح الناقل (Request/Grant) بأولوية أعلى.',x:'يستعمل نبضات على طرف واحد: نبضة طلب من المعالج المساعد، ثم نبضة منح من 8086، ثم نبضة تحرير. أولوية هذا الطرف أعلى من RQ/GT1. تُستخدم مع 8087 أو 8089.',w:[31,'8087']});
P[31]=D({c:'arb',n:'HLDA',io:'خرج',f:'إقرار الإمساك (Hold Acknowledge).',x:'يرفعه المعالج ليخبر الجهاز الطالب أن النواقل (العنوان والبيانات والتحكم) أصبحت في حالة معاوقة عالية وأن الجهاز يستطيع أخذ الناقل. ينخفض عند انتهاء HOLD.',w:[30]},
{c:'arb',n:'~RQ/~GT1',io:'ثنائي الاتجاه',f:'طلب ومنح الناقل بأولوية أقل.',x:'نفس آلية RQ/GT0 لكن بأولوية أدنى، لإضافة معالج مساعد ثانٍ إلى النظام.',w:[30]});
let mode=0,sel=null,filt=null,lang='ar';
const nm=s=>s.split('/').map(x=>x[0]=='~'?'<span class=ob>'+x.slice(1)+'</span>':x).join('/');
const E={};
const eAd=i=>({io:'Bidirectional (tri-state)',f:'Multiplexed pin: carries address bit '+i+' first, then data bit '+i+'.',x:'In T1 it outputs A'+i+', which ALE latches into 74LS373 chips; in T2-T4 it becomes data line D'+i+'. '+(i<8?'Part of the low data byte D0-D7 (even-address memory bank).':'Part of the high data byte D8-D15 (odd-address memory bank), enabled with BHE.')+(i==0?' AD0 also acts as A0: low in T1 selects the low byte.':'')});
for(let i=0;i<=15;i++)E[i<15?16-i:39]=eAd(i);
E[1]={f:'Ground (0 V) reference.',x:'Pins 1 and 20 must both be grounded. Two pins reduce noise and give the large switching currents a return path.'};E[20]=E[1];
E[40]={f:'+5 V supply.',x:'Draws about 340 mA. Place a 0.1 uF decoupling capacitor right next to the pin.'};
E[17]={io:'Input (rising edge)',f:'Non-maskable interrupt.',x:'Edge-triggered and cannot be disabled by CLI. Used for critical events such as power failure or memory error. Jumps to vector 2 (address 00008H).'};
E[18]={io:'Input (active high)',f:'Maskable interrupt request.',x:'Sampled at the end of each instruction and accepted only if IF = 1 (STI). The CPU answers with two INTA pulses; during the second one the 8259 PIC places the interrupt type number on the data bus.'};
E[19]={io:'Input',f:'Clock input that sets execution speed.',x:'Needs about 33% duty cycle, normally supplied by the 8284A clock generator, which also synchronizes RESET and READY. One bus cycle takes 4 clocks (T1-T4).'};
E[21]={io:'Input',f:'Resets the processor.',x:'Held high for at least 4 clocks it clears flags, DS, SS, ES and IP and sets CS = FFFFH, so execution starts at FFFF0H (the last 16 bytes of memory), where a JMP to the main program is placed.'};
E[22]={io:'Input',f:'Memory / I-O ready signal.',x:'If memory or I/O is slower than the CPU, READY is held low and the CPU inserts wait states between T3 and T4 until it returns high. Normally passes through the 8284A.'};
E[23]={io:'Input (active low)',f:'Test input examined by the WAIT instruction.',x:'WAIT makes the CPU idle until TEST goes low. Used to synchronize with a coprocessor such as the 8087, which pulls it low when its operation finishes.'};
E[32]={io:'Output (tri-state, active low)',f:'Read strobe: the CPU reads from memory or an I/O port.',x:'Low during T2-T3. M/IO says whether the target is memory or a port. Connects to OE/RD of memories and devices.'};
E[33]={io:'Input',f:'Selects Minimum or Maximum mode.',x:'Tied to VCC (1): Minimum mode, single processor, the CPU generates control signals itself. Tied to ground (0): Maximum mode, multiprocessor systems; pins 24-31 change and the 8288 generates the control signals.'};
E[34]={io:'Output (tri-state)',f:'Bus High Enable.',x:'In T1, BHE = 0 enables the high byte D8-D15. With A0: BHE=0,A0=0 full 16-bit word; BHE=1,A0=0 low byte; BHE=0,A0=1 high byte. In T2-T4 it carries status S7 (unused).'};
[[35,19,6],[36,18,5],[37,17,4],[38,16,3]].forEach(([p,a,s])=>E[p]={io:'Output (tri-state)',f:'Multiplexed pin: address bit '+a+', then status S'+s+'.',x:'In T1 outputs A'+a+' (top bits of the 20-bit address, giving 1 MB). In T2-T4 outputs status: '+({6:'S6 is always 0.',5:'S5 reflects the interrupt flag IF.',4:'S4 and S3 together show the segment register in use.',3:'S4 S3: 00=ES, 01=SS, 10=CS or none, 11=DS.'}[s])});
E[24]=[{io:'Output (active low)',f:'Interrupt acknowledge.',x:'The CPU sends two pulses: the first tells the 8259 the interrupt was accepted; during the second the 8259 puts the interrupt type number on the data bus and the CPU jumps to that vector.'},{io:'Output',f:'Queue status bit 1.',x:'With QS0 tells a coprocessor (e.g. 8087) what happens in the instruction queue: 00 no operation, 01 first byte taken, 10 queue empty, 11 subsequent byte taken.'}];
E[25]=[{io:'Output',f:'Address Latch Enable.',x:'A high pulse in T1 tells the 74LS373 latches to store the address on AD0-AD15 and A16-A19 before the bus turns into data. The key signal for demultiplexing.'},{io:'Output',f:'Queue status bit 0.',x:'Works with QS1 to report the state of the 6-byte instruction queue to coprocessors.'}];
E[26]=[{io:'Output (tri-state, active low)',f:'Data Enable.',x:'Enables the 74LS245 bidirectional buffers when data is on the bus, active roughly from T2 to T4.'},{io:'Output (tri-state)',f:'Status signal S0.',x:'With S1 and S2 forms a 3-bit code decoded by the 8288: 000 INTA, 001 read I/O, 010 write I/O, 011 halt, 100 fetch, 101 read memory, 110 write memory, 111 idle.'}];
E[27]=[{io:'Output (tri-state)',f:'Data Transmit/Receive direction.',x:'High: CPU sends (write). Low: CPU receives (read). Connects to the DIR pin of the 74LS245.'},{io:'Output (tri-state)',f:'Status signal S1.',x:'Middle bit of the S2 S1 S0 code sent to the 8288.'}];
E[28]=[{io:'Output (tri-state)',f:'Selects memory or I/O port operation.',x:'M/IO = 1: memory access. M/IO = 0: I/O port access. Used in address decoding to pick memory chips or peripherals. (The 8088 has the inverted IO/M.)'},{io:'Output (tri-state)',f:'Status signal S2.',x:'Top bit of the S2 S1 S0 code decoded by the 8288. S2 = 1 usually means a memory or fetch operation.'}];
E[29]=[{io:'Output (tri-state, active low)',f:'Write strobe: the CPU writes to memory or a port.',x:'Low during T2-T4 while data is valid. With M/IO it selects the destination. Connects to WE of memory.'},{io:'Output (tri-state, active low)',f:'Bus lock.',x:'Activated by the LOCK instruction prefix: other processors cannot take the bus while the next instruction runs. Used for atomic operations such as XCHG on shared resources.'}];
E[30]=[{io:'Input',f:'Bus request from another device (e.g. DMA).',x:'A DMA controller raises it to request the buses. The CPU finishes the current cycle, floats its buses and answers with HLDA.'},{io:'Bidirectional',f:'Bus request/grant, higher priority.',x:'One pin carries three pulses: request from the coprocessor, grant from the 8086, then release. Higher priority than RQ/GT1. Used with the 8087 or 8089.'}];
E[31]=[{io:'Output',f:'Hold Acknowledge.',x:'The CPU raises it to say its buses are floating and the requester may use them. It drops when HOLD ends.'},{io:'Bidirectional',f:'Bus request/grant, lower priority.',x:'Same protocol as RQ/GT0 with lower priority, for a second coprocessor.'}];
const CATE={ad:'Address / Data (multiplexed)',addr:'Address / Status',ctl:'Bus control',int:'Interrupts',arb:'Bus arbitration',pwr:'Power',clk:'Clock / Reset'};
const T={ar:{hint:'اختر طرفاً من الشريحة لعرض تفاصيله.<br>الأطراف المرتبطة به ستُضاء تلقائياً.',what:'ماذا يفعل؟',why:'لماذا؟',det:'التفاصيل',wi:'مع من يعمل؟',alt:'في النمط الآخر',btn:'English',zl:'التكبير',flt:'تصفية الأطراف حسب الفئة',exp:'شرح Min/Max',ih:'اضغط لعرض البنية الداخلية',sp:'إظهار الأطراف',hp:'إخفاء الأطراف',au:'تلقائي',np:'هذه الكتلة داخلية ولا ترتبط بأطراف خارجية.',home:'الشريحة',pins:'الأطراف المرتبطة',desc:'مختبر تفاعلي لفهم أطراف المعالج 8086 ذي الـ 40 طرفاً. اضغط على أي طرف لتعرف وظيفته وما يعمل معه، وبدّل بين النمطين Minimum وMaximum لترى كيف تتغير الأطراف 24\u201331.',note:'ملاحظة: الخط فوق الاسم (مثل RD) يعني أن الإشارة فعّالة عند المستوى المنخفض (Active Low). الطرف 1 في أعلى اليسار، وترقيم الأطراف يدور عكس عقارب الساعة.'},
en:{hint:'Select a pin on the chip to see its details.<br>Related pins light up automatically.',what:'What does it do?',why:'Why?',det:'Details',wi:'Works with',alt:'In the other mode',btn:'العربية',zl:'Zoom',flt:'Filter pins by category',exp:'Min/Max explanation',ih:'Click for internal structure',sp:'Show pins',hp:'Hide pins',au:'Auto',np:'This block is internal and has no external pins.',home:'Chip',pins:'Related pins',desc:'Interactive lab for the 40-pin Intel 8086. Click any pin to see its function and what it works with, and switch between Minimum and Maximum mode to see how pins 24-31 change.',note:'Note: an overline (like RD) means the signal is active low. Pin 1 is at the top left and numbering runs counter-clockwise.'}};
const t=k=>T[lang][k];
const MODES={ar:{h:'ما هو Minimum Mode وMaximum Mode؟',p:'الطرف 33 (MN/MX) يحدد وظيفة الأطراف 24\u201331 ونوع النظام الذي يُبنى حول المعالج.',mn:'Minimum Mode (MN/MX = VCC)',mx:'Maximum Mode (MN/MX = GND)',
a:['نظام بمعالج واحد: المعالج يولّد بنفسه إشارات التحكم (ALE وDEN وDT/R وM/IO وWR وINTA).','دارات إضافية قليلة: مولّد الساعة 8284A ومثبّتات 74LS373 ومرسلات 74LS245 عند الحاجة.','مشاركة الناقل مع متحكم DMA تتم عبر HOLD/HLDA.','مناسب للأنظمة الصغيرة وأجهزة التدريب.'],
b:['أنظمة متعددة المعالجات أو بمعالج مساعد: 8087 للأعداد الحقيقية و8089 للإدخال/الإخراج.','يخرج المعالج الشيفرة S2 S1 S0 فيفكّها المتحكم 8288 إلى إشارات MRDC وMWTC وIORC وIOWC وINTA مع ALE وDEN وDT/R.','التحكم بالناقل بين المعالجات عبر RQ/GT0 وRQ/GT1 والمحكّم 8289، وإشارة LOCK تمنع سحب الناقل.','QS1 وQS0 تُعلمان المعالج المساعد بحالة طابور الأوامر.'],
t:['وجه المقارنة','Minimum','Maximum'],r:[['الطرف 33','VCC (1)','GND (0)'],['مصدر إشارات التحكم','المعالج نفسه','المتحكم 8288'],['عدد المعالجات','واحد','عدة معالجات أو مساعد'],['الأطراف 24\u201331','INTA, ALE, DEN, DT/R, M/IO, WR, HOLD, HLDA','QS1, QS0, S0, S1, S2, LOCK, RQ/GT0, RQ/GT1'],['مشاركة الناقل','HOLD / HLDA','RQ/GT + المحكّم 8289'],['التعقيد والتكلفة','أقل','أعلى']]},
en:{h:'What are Minimum and Maximum mode?',p:'Pin 33 (MN/MX) decides the role of pins 24-31 and the kind of system built around the CPU.',mn:'Minimum Mode (MN/MX = VCC)',mx:'Maximum Mode (MN/MX = GND)',
a:['Single-processor system: the CPU generates the control signals itself (ALE, DEN, DT/R, M/IO, WR, INTA).','Few extra chips: 8284A clock generator, 74LS373 latches and optional 74LS245 transceivers.','Bus sharing with a DMA controller uses HOLD/HLDA.','Suited to small systems and trainer kits.'],
b:['Multiprocessor or coprocessor systems: 8087 for floating point, 8089 for I/O processing.','The CPU outputs the S2 S1 S0 code and the 8288 bus controller decodes it into MRDC, MWTC, IORC, IOWC, INTA plus ALE, DEN and DT/R.','Bus control between processors uses RQ/GT0, RQ/GT1 and the 8289 arbiter; LOCK stops others from taking the bus.','QS1 and QS0 tell a coprocessor the state of the instruction queue.'],
t:['Feature','Minimum','Maximum'],r:[['Pin 33','VCC (1)','GND (0)'],['Source of control signals','The CPU itself','8288 bus controller'],['Processors','One','Several or coprocessor'],['Pins 24-31','INTA, ALE, DEN, DT/R, M/IO, WR, HOLD, HLDA','QS1, QS0, S0, S1, S2, LOCK, RQ/GT0, RQ/GT1'],['Bus sharing','HOLD / HLDA','RQ/GT + 8289 arbiter'],['Complexity and cost','Lower','Higher']]}};
MODES.ar.y=['لأن الشريحة محدودة بـ 40 طرفاً: النظام البسيط يحتاج إشارات قليلة، والنظام متعدد المعالجات يحتاج إشارات تحكيم وحالة إضافية. بدل تصنيع شريحتين تُعاد تسمية الأطراف 24–31 بحسب الطرف 33.','في Minimum يولّد المعالج إشارات التحكم بنفسه لأنه المعالج الوحيد على الناقل، فلا حاجة إلى شريحة وسيطة وتقل التكلفة.','في Maximum يخرج المعالج الشيفرة S2 S1 S0 (3 أطراف تمثل 8 حالات) بدل إشارات جاهزة، فتتحرر أطراف لـ LOCK وRQ/GT وQS، ويفكّها 8288 إلى إشارات أقوى تناسب نظاماً كبيراً.','تُستبدل HOLD/HLDA بـ RQ/GT لأن الأولى تخدم جهازاً واحداً (مثل DMA) بخطين، أما الثانية فتنقل الطلب والمنح والتحرير بنبضات على خط واحد ولها أولويتان لمعالجين مساعدين.','LOCK وQS يوجدان في Maximum فقط لأنهما لا يلزمان إلا مع معالج آخر: LOCK يمنعه من أخذ الناقل أثناء عملية غير قابلة للتجزئة، وQS يتيح له تتبع طابور الأوامر.'];
MODES.en.y=['The chip is limited to 40 pins: a simple system needs few signals, while a multiprocessor system needs extra arbitration and status signals. Instead of making two chips, pins 24-31 are renamed according to pin 33.','In Minimum mode the CPU generates the control signals itself because it is the only processor on the bus, so no intermediate chip is needed and cost is lower.','In Maximum mode the CPU outputs the S2 S1 S0 code (3 pins carrying 8 states) instead of ready-made signals, freeing pins for LOCK, RQ/GT and QS; the 8288 decodes it into stronger signals suited to a larger system.','HOLD/HLDA is replaced by RQ/GT because the first serves one device (such as DMA) using two lines, while the second carries request, grant and release as pulses on one line and has two priority levels for two coprocessors.','LOCK and QS exist only in Maximum mode because they matter only with another processor: LOCK stops it taking the bus during an indivisible operation, and QS lets it follow the instruction queue.'];
const getm=(n,m)=>{const p=P[n],e=(lang=='en'&&E[n])||null;return p.d?{...p.d[m],...(e?e[m]:{})}:{...p,...(e||{})}};
const get=n=>getm(n,mode);
const catn=c=>lang=='en'?CATE[c]:CAT[c][0];
function build(){
 const L=[],R=[];for(let i=1;i<=20;i++)L.push(i);for(let i=40;i>=21;i--)R.push(i);
 const mk=n=>{const p=get(n);return '<button class="pin'+(sel==n&&!iv?' sel':'')+'" data-n="'+n+'" style="--c:var('+CAT[p.c][1]+')" aria-label="طرف '+n+'"><span class="tab">'+n+'</span><span class="nm">'+nm(p.n)+'</span></button>'};
 cl.innerHTML=L.map(mk).join('');cr.innerHTML=R.map(mk).join('');
 const rel=iv?pinsOf(path[path.length-1]):sel?(get(sel).w||[]).filter(x=>typeof x=='number'):[];
 document.querySelectorAll('.pin').forEach(b=>{const n=+b.dataset.n,p=get(n);
  if(rel.includes(n))b.classList.add('rel');
  if(filt&&p.c!=filt)b.classList.add('dim');if(iv&&rel.length&&!rel.includes(n))b.classList.add('dim');});
}
const Y={ar:{},en:{}};
{const ar=Y.ar,en=Y.en;
const ADa='لأن الشريحة محدودة بـ 40 طرفاً: العنوان 20 بت والبيانات 16 بت يحتاجان أكثر من 36 طرفاً لو خُصص لكل منهما خطوط مستقلة. ولأن العنوان لا يلزم إلا في T1 والبيانات لا تلزم إلا بعده، تتشارك الخطوط نفسها بالتناوب، ويحفظ المثبّت العنوان عبر ALE.';
const ADe='The chip is limited to 40 pins: a 20-bit address plus 16-bit data would need over 36 dedicated lines. The address is only needed in T1 and the data afterwards, so the same lines are shared in turn, with ALE telling the latch to keep the address.';
for(let i=0;i<=15;i++){const n=i<15?16-i:39;ar[n]=ADa;en[n]=ADe}
const Aa='لأن العنوان لا يلزم إلا في T1. بعدها تُعاد هذه الأطراف لإخراج حالة المعالج، فتخرج معلومات إضافية دون زيادة عدد الأطراف.';
const Ae='The address is only needed in T1. Afterwards the same pins are reused to output processor status, adding information without adding pins.';
[35,36,37,38].forEach(n=>{ar[n]=Aa;en[n]=Ae});
ar[34]='لأن الذاكرة 16 بت مقسومة إلى نصفين (زوجي وفردي)، ويلزم اختيار النصف العالي مستقلاً عن A0. بذلك يستطيع المعالج التعامل مع بايت واحد أو كلمة كاملة بحسب الحاجة.';
en[34]='Memory is 16 bits wide, split into two banks (even and odd), so the high bank must be selected independently of A0. That lets the CPU access either a single byte or a full word.';
ar[1]=ar[20]='لأن كل جهد في الدائرة يُقاس نسبةً إليه. بدون مرجع ثابت 0V لا يمكن تمييز المستوى المنطقي 0 من 1.';
en[1]=en[20]='Every voltage in the circuit is measured relative to it. Without a fixed 0 V reference, logic 0 and logic 1 cannot be told apart.';
ar[40]='لأن 5V هو مستوى TTL الذي صُمم عليه المعالج، فيتصل مباشرة بالشرائح المحيطة مثل 74LS373 وذاكرات ذلك الزمن دون محوّلات جهد.';
en[40]='5 V is the TTL level the CPU was designed for, so it connects directly to companion chips such as the 74LS373 and period memories with no level shifters.';
ar[17]='لأن الأحداث الحرجة مثل انقطاع الطاقة لا يجوز تجاهلها، فلا يمكن حجبها بـ CLI. وتعمل بحافة صاعدة كي تُحتسب النبضة القصيرة مرة واحدة فقط.';
en[17]='Critical events such as power failure must never be ignored, so CLI cannot block it. It is edge-triggered so that even a short pulse is counted exactly once.';
ar[18]='لأنها تعمل بالمستوى لا بالحافة: يبقى الطلب قائماً حتى يخدمه المعالج، فلا يضيع طلب وصل أثناء حجب المقاطعات (IF = 0). وهي قابلة للقناع ليحمي البرنامج مقاطعه الحرجة.';
en[18]='It is level-sensitive: the request stays asserted until the CPU serves it, so a request arriving while interrupts are masked (IF = 0) is not lost. It is maskable so a program can protect its critical sections.';
ar[19]='لأن المنطق الداخلي للمعالج مصمم ليأخذ توقيته من حافات الساعة ويحتاج مدة منخفضة أطول من العالية لتستقر دارته. لذلك يُولَّد عادةً بشريحة 8284A المخصصة لذلك.';
en[19]='The CPU internal logic derives its timing from clock edges and needs a longer low period than high period to settle. That is why a dedicated 8284A generates it.';
ar[21]='لأن الذاكرة عند التشغيل تكون بلا برنامج، ويجب أن يبدأ المعالج من عنوان ثابت معروف. اختير آخر الذاكرة (FFFF0H) لتوضع هناك ذاكرة ROM تحوي أمر JMP إلى البرنامج الفعلي، فالـ 16 بايت لا تكفي لبرنامج كامل.';
en[21]='At power-up memory holds no program, so the CPU must start at a fixed, known address. The top of memory (FFFF0H) was chosen so a ROM can sit there holding a JMP to the real program, since 16 bytes cannot hold a whole program.';
ar[22]='لأن الذاكرات الأبطأ لا تستجيب خلال 4 نبضات. بدل إبطاء النظام كله يتوقف المعالج فقط عند الحاجة ويضيف حالات انتظار.';
en[22]='Slower memories cannot answer within 4 clocks. Instead of slowing the whole system, the CPU waits only when needed by adding wait states.';
ar[23]='لأن المعالج المساعد (مثل 8087) أبطأ منه، ويحتاج المعالج وسيلة بسيطة لينتظر انتهاءه. الأمر WAIT يفحص هذا الطرف دون حاجة لمقاطعة.';
en[23]='A coprocessor (such as the 8087) is slower than the CPU, so the CPU needs a simple way to wait for it. The WAIT instruction just samples this pin, with no interrupt needed.';
ar[32]='لأن الإشارات الفعّالة عند الصفر أكثر موثوقية عملياً: مخارج TTL تسحب الخط إلى الأرضي بقوة أكبر مما ترفعه، فلا تُفعَّل القراءة خطأً إذا انفصل الخط. وهي منفصلة عن WR كي تعرف الذاكرة اتجاه العملية.';
en[32]='Active-low signals are more dependable in practice: TTL outputs pull to ground harder than they pull up, so a floating line is less likely to trigger a read by accident. It is separate from WR so memory knows the direction of the operation.';
ar[33]='ليخدم نفس الشريحة نظاماً بسيطاً رخيصاً ونظاماً متعدد المعالجات دون تصنيع شريحتين مختلفتين. بتغيير هذا الطرف تُعاد تسمية الأطراف 24–31.';
en[33]='So one chip can serve both a simple low-cost system and a multiprocessor system without making two different chips. Changing this pin renames pins 24-31.';
ar[24]=['لأنها نبضتان: الأولى تُنبّه المتحكم 8259 أن المقاطعة قُبلت وتجمّد ترتيب الأولويات، والثانية يضع فيها رقم المقاطعة على الناقل فيقرؤه المعالج.','لأن المعالج المساعد يراقب الناقل ليلتقط أوامره، ويحتاج أن يعرف أي بايت يبدأ أمراً وأيها تابع له أو أُلغي من الطابور.'];
en[24]=['Two pulses are needed: the first tells the 8259 the interrupt was accepted and freezes priorities, the second lets it put the vector number on the bus for the CPU to read.','A coprocessor watches the bus to catch its instructions, so it must know which byte starts an instruction and which one follows or was discarded from the queue.'];
ar[25]=['لأن العنوان لا يبقى على AD0–AD15 إلا خلال T1، ثم يتحول الناقل إلى بيانات. تأتي النبضة في هذه اللحظة بالذات ليلتقط المثبّت العنوان قبل أن يضيع.','لأن حالات الطابور أربع فقط (لا شيء، أول بايت، فارغ، بايت تالٍ)، وبتّان يكفيان لتمثيلها دون إضافة أطراف.'];
en[25]=['The address stays on AD0-AD15 only during T1, then the bus turns into data. The pulse comes at exactly that moment so the latch captures the address before it is gone.','The queue has only four states (none, first byte, empty, subsequent byte), and two bits are enough to encode them without extra pins.'];
ar[26]=['لأن الدارة العازلة ثنائية الاتجاه يجب أن تبقى معزولة عن الناقل عندما لا توجد بيانات، وإلا تصادمت مع العنوان المضاعف الموجود على الخطوط نفسها في T1.','لأن ثلاث إشارات حالة تعطي 8 شيفرات تكفي لتمييز كل أنواع دورات الناقل. هكذا يخصص المعالج 3 أطراف فقط، ويفكّها 8288 إلى إشارات التحكم.'];
en[26]=['The bidirectional buffer must stay isolated from the bus when no data is present, otherwise it would clash with the multiplexed address that occupies the same lines in T1.','Three status lines give 8 codes, enough to tell every bus-cycle type apart. The CPU spends only 3 pins and the 8288 decodes them into control signals.'];
ar[27]=['لأن الدارة العازلة ثنائية الاتجاه لا تعرف بنفسها هل تمرّر البيانات للداخل أم للخارج، فتحتاج إشارة تحدد الاتجاه في كل دورة.','لأن معنى S1 لا يظهر وحده، بل مع S0 وS2 ككلمة من 3 بتات. تغيّر أي بت يعني نوع دورة مختلفاً.'];
en[27]=['The bidirectional buffer cannot tell by itself whether to pass data in or out, so it needs a direction signal each cycle.','The meaning of S1 appears only together with S0 and S2 as a 3-bit word. Changing any bit means a different cycle type.'];
ar[28]=['لأن للمعالج فضاءين: ذاكرة بحجم 1MB ومنافذ بحجم 64K، وقد يتطابق العنوان في الفضاءين. هذه الإشارة تحدد أي الفضاءين المقصود.','لأن S2 هي البت الأعلى في الشيفرة، وتفرّق مثلاً بين دورات الذاكرة والجلب (1) ودورات المنافذ والمقاطعة (0).'];
en[28]=['The CPU has two spaces: 1 MB of memory and 64 K of I/O ports, and the same address can exist in both. This signal says which one is meant.','S2 is the top bit of the code and separates, for example, memory and fetch cycles (1) from I/O and interrupt cycles (0).'];
ar[29]=['لأنها تنخفض بعد أن تستقر البيانات على الناقل (في T2)، فتتأكد الذاكرة أن ما تكتبه صحيح وليس قيمة عابرة.','لأن عملية مثل XCHG تقرأ ثم تكتب، وإن تدخل معالج آخر بين الخطوتين غيّر القيمة وضاع الاتساق. القفل يجعل العملية غير قابلة للتجزئة.'];
en[29]=['It drops once data has settled on the bus (in T2), so memory knows what it stores is valid and not a transient value.','An operation such as XCHG reads then writes; if another processor slipped in between, the value could change and consistency would be lost. LOCK makes the operation indivisible.'];
ar[30]=['لأن متحكم DMA ينقل البيانات إلى الذاكرة أسرع مما يستطيع المعالج، لكنه لا يستطيع ذلك قبل أن يتخلى المعالج عن الناقل.','لتوفير الأطراف: بدل خطين (طلب ومنح) يُستعمل خط واحد بنبضات متتالية. وللمعالج الأهم أولوية أعلى هنا لتُخدم حاجته قبل الآخر.'];
en[30]=['A DMA controller moves data to memory faster than the CPU can, but it cannot do so until the CPU gives up the bus.','To save pins: instead of two lines (request and grant) one line carries successive pulses. The more important coprocessor gets higher priority here so it is served first.'];
ar[31]=['لأنه لا يجوز للجهاز استخدام الناقل قبل أن يخلي المعالج الخطوط فعلاً. HLDA يؤكد أن الخطوط أصبحت في حالة معاوقة عالية وآمنة للاستخدام.','لدعم معالجين مساعدين في النظام نفسه: طرف لكل منهما بأولوية مختلفة، فيُحسم أيهما يأخذ الناقل عند التنازع.'];
en[31]=['The device must not use the bus until the CPU has truly released the lines. HLDA confirms the lines are in high impedance and safe to use.','To support two coprocessors in one system: one pin each with different priority, so a conflict over the bus is resolved.'];
}
function show(){
 if(iv)return showNode();
 if(!sel){panel.innerHTML='<div class="hint">'+ico('pointer','hico')+t('hint')+'</div>';return}
 const p=get(sel),yv=(Y[lang]||{})[sel],y=Array.isArray(yv)?yv[mode]:yv,c='var('+CAT[p.c][1]+')',d=P[sel].d,o=d?getm(sel,1-mode):0;
 const alt=d?'<h3>'+ico('swap')+t('alt')+'</h3><p>'+nm(o.n)+' &mdash; '+o.f+'</p>'+(Array.isArray(yv)&&yv[1-mode]?'<p style="margin-top:6px"><b>'+t('why')+'</b> '+yv[1-mode]+'</p>':''):'';
 panel.style.setProperty('--c',c);
 panel.innerHTML='<div class="big"><span class="n">'+sel+'</span><span class="t">'+nm(p.n)+'</span></div><div style="margin-top:6px"><span class="tag">'+ico(CAT[p.c][2])+catn(p.c)+'</span>'+(p.io?'<span class="tag">'+ico(ioi(p.io))+p.io+'</span>':'')+(d?'<span class="tag">'+ico(mode?'network':'cpu')+(mode?'Maximum':'Minimum')+'</span>':'')+'</div>'+
 '<h3>'+ico('info')+t('what')+'</h3><p>'+p.f+'</p><h3>'+ico('list')+t('det')+'</h3><p>'+p.x+'</p>'+(y?'<h3>'+ico('sparkles')+t('why')+'</h3><p>'+y+'</p>':'')+
 ((p.w||[]).length?'<h3>'+ico('link')+t('wi')+'</h3><div class="w">'+(p.w||[]).map(w=>typeof w=='number'?'<button data-go="'+w+'">'+w+' &middot; '+nm(get(w).n)+'</button>':'<button disabled style="opacity:.8">'+w+'</button>').join('')+'</div>':'')+alt;
}
function upd(){build();show()}
function setMode(m){mode=m;bMin.setAttribute('aria-pressed',m==0);bMax.setAttribute('aria-pressed',m==1);upd()}
bMin.onclick=()=>setMode(0);bMax.onclick=()=>setMode(1);
const rl=()=>{bFlt.innerHTML=ico('filter')+t('flt')+(filt?' &middot; '+catn(filt):'');legend.innerHTML=Object.entries(CAT).map(([k,v])=>'<button class="chip" data-f="'+k+'" aria-pressed="'+(filt==k)+'" style="--c:var('+v[1]+')"">'+ico(CAT[k][2])+catn(k)+'</button>').join('')};rl();
legend.addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;
 filt=filt==b.dataset.f?null:b.dataset.f;
 rl();upd()});
bFlt.onclick=()=>{legend.hidden=!legend.hidden;bFlt.setAttribute('aria-expanded',!legend.hidden)};
let z=.8;let zmin=.5,zmax=1.6,zb=.8;const zRange=()=>{const f=(innerWidth-32)/470;zb=iv?dz(1):dz(0);zmin=.5;zmax=innerWidth>=860?1.6:Math.round(Math.max(1.1,Math.min(1.6,f*1.4))*20)/20;zr.min=Math.ceil(zmin/zb*20)*5;zr.max=Math.floor(zmax/zb*20)*5};
const setZ=v=>{zRange();z=Math.min(zmax,Math.max(zmin,v));ic.style.zoom=iv?.65:z;ivw.style.zoom=z;ivw.style.width=Math.min(560,(innerWidth-40)/z)+'px';const pc=Math.round(z/zb*100);zv.textContent=pc+'%';zr.value=pc};
zr.oninput=()=>setZ(zr.value/100*zb);
function applyLang(){const h=document.documentElement;h.lang=lang;h.dir=lang=='en'?'ltr':'rtl';
 desc.textContent=t('desc');note.textContent=t('note');bLang.innerHTML=ico('globe')+t('btn');
 const M=MODES[lang];mdl.innerHTML='<h2>'+M.h+'</h2><p>'+M.p+'</p><div class="mc"><div class="card"><h3>'+M.mn+'</h3><ul>'+M.a.map(x=>'<li>'+x+'</li>').join('')+'</ul></div><div class="card"><h3>'+M.mx+'</h3><ul>'+M.b.map(x=>'<li>'+x+'</li>').join('')+'</ul></div></div><div class="card" style="margin-top:16px"><h3>'+ico('sparkles')+t('why')+'</h3><ul>'+M.y.map(x=>'<li>'+x+'</li>').join('')+'</ul></div><div class="tbl"><table class="cmp"><tr><th>'+M.t.join('</th><th>')+'</th></tr>'+M.r.map(r=>'<tr><td>'+r.join('</td><td>')+'</td></tr>').join('')+'</table></div>';
 lzoom.innerHTML=ico('zoom')+t('zl');bExp.innerHTML=ico('columns')+t('exp');bRef.innerHTML=ico('table')+RT[lang].mb;bGls.innerHTML=ico('book')+RT[lang].mg;renderRef();renderGls();renderExtra();bh.innerHTML=ico('zoom')+t('ih');rl();upd();if(iv)renderInt()}
bLang.onclick=()=>{lang=lang=='ar'?'en':'ar';applyLang()};
const N={};[
['r','8086 CPU','المعالج مقسّم داخلياً إلى ثلاث كتل رئيسية: وحدة الحساب والمنطق ALU، ووحدة التحكم CU، والمسجّلات Registers (انتل تجمعها أيضاً في EU وBIU). اضغط على أي كتلة للتعمق.','The CPU is divided into three main blocks: the ALU, the control unit (CU) and the registers (Intel also groups them as EU and BIU). Click a block to go deeper.',['alu','cu','reg']],
['alu','ALU','تنفذ العمليات الحسابية والمنطقية بعرض 16 بت، وتحدّث الأعلام بنتيجة كل عملية.','Performs 16-bit arithmetic and logic and updates the flags with every result.',['add','lgc','shf','tmp']],
['add','Arithmetic unit','جمع وطرح وزيادة ونقصان وضرب وقسمة (ADD, SUB, INC, DEC, MUL, DIV) مع حمل أو استلاف.','Addition, subtraction, increment, decrement, multiply and divide (ADD, SUB, INC, DEC, MUL, DIV) with carry or borrow.'],
['lgc','Logic unit','عمليات AND وOR وXOR وNOT وTEST وCMP على مستوى البت.','Bitwise AND, OR, XOR, NOT, TEST and CMP.'],
['shf','Shifter / Rotator','إزاحة ودوران البتات (SHL, SHR, SAR, ROL, ROR, RCL, RCR).','Shifts and rotates bits (SHL, SHR, SAR, ROL, ROR, RCL, RCR).'],
['tmp','Temp registers','مسجّلات مؤقتة غير ظاهرة للمبرمج تحمل المعاملات أثناء العملية.','Hidden registers (not visible to the programmer) that hold operands during an operation.'],
['cu','Control Unit','تجلب الأوامر وتفك شيفرتها وتولّد إشارات التوقيت والتحكم لباقي الأجزاء وللناقل الخارجي.','Fetches and decodes instructions and generates timing and control signals for the other parts and the external bus.',['dec','tim','biu']],
['dec','Instruction decoder','يفك شيفرة الأمر (opcode) القادم من الطابور ويحدد الخطوات اللازمة لتنفيذه.','Decodes the opcode coming from the queue and determines the steps needed to execute it.'],
['tim','Timing & control','يولّد إشارات التحكم الداخلية بتزامن مع CLK، وينفذ RESET، ويستجيب للانتظار عبر READY.','Generates internal control signals in step with CLK, handles RESET and responds to READY.',[],[19,21,22]],
['biu','BIU','وحدة واجهة الناقل: تجلب الأوامر مسبقاً وتتعامل مع الناقل الخارجي بينما تنفّذ بقية الوحدات.','Bus Interface Unit: prefetches instructions and handles the external bus while the other units execute.',['que','sum','bus']],
['que','Instruction queue (6 B)','طابور FIFO بحجم 6 بايت يخزن الأوامر المجلوبة مسبقاً (Pipelining) فيتداخل الجلب مع التنفيذ.','A 6-byte FIFO holding prefetched instructions (pipelining), so fetch overlaps execution.'],
['sum','Address adder (Σ)','يحسب العنوان الفيزيائي 20 بت: القطعة × 16 + الإزاحة. مثال: CS=1000H وIP=0100H يعطي 10100H.','Computes the 20-bit physical address: segment x 16 + offset. Example: CS=1000H, IP=0100H gives 10100H.',[],[35,36,37,38]],
['bus','Bus control logic','يولّد إشارات الناقل ALE وRD وWR وM/IO وBHE ويضع العنوان والبيانات على AD0–AD15.','Drives the bus signals ALE, RD, WR, M/IO and BHE and puts address and data on AD0-AD15.',[],[25,32,29,28,34,16]],
['reg','Registers','أربعة عشر مسجّلاً بعرض 16 بت: عامة، ومؤشرات وفهارس، وقطع، ومؤشر الأوامر، والأعلام.','Fourteen 16-bit registers: general, pointer and index, segment, the instruction pointer and flags.',['gen','ptr','seg','ip','flg']],
['gen','General registers','AX وBX وCX وDX، ويمكن تقسيم كل منها إلى بايتين عالٍ ومنخفض (AH/AL وغيرها).','AX, BX, CX and DX; each splits into a high and a low byte (AH/AL and so on).',['ax','bx','cx','dx']],
['ax','AX','المجمّع (Accumulator): الأساس في معظم العمليات الحسابية، وتستخدمه MUL وDIV وIN وOUT. يتكون من AH وAL.','Accumulator: default target of most arithmetic; used by MUL, DIV, IN and OUT. Made of AH and AL.'],
['bx','BX','مسجل القاعدة (Base): يحمل عنواناً أساسياً في الذاكرة مثل [BX]. يتكون من BH وBL.','Base register: holds a memory base address, as in [BX]. Made of BH and BL.'],
['cx','CX','العدّاد (Count): يعدّ تكرارات LOOP وREP، وعدد الإزاحات (CL). يتكون من CH وCL.','Counter: counts LOOP and REP iterations and shift counts (CL). Made of CH and CL.'],
['dx','DX','مسجل البيانات (Data): يحمل رقم المنفذ في IN/OUT غير المباشر والجزء العالي من نتائج MUL وDIV الكبيرة. DH وDL.','Data register: holds the port number for indirect IN/OUT and the upper part of large MUL/DIV results. DH and DL.'],
['ptr','Pointer & index','SP وBP وSI وDI: تحمل إزاحات (Offsets) للوصول إلى الذاكرة والمكدس.','SP, BP, SI and DI: hold offsets used to address memory and the stack.',['sp','bp','si','di']],
['sp','SP','مؤشر المكدس: يشير إلى قمة المكدس مع SS، ويتغير مع PUSH وPOP وCALL وRET.','Stack Pointer: points to the top of the stack with SS; changed by PUSH, POP, CALL and RET.'],
['bp','BP','مؤشر القاعدة: يصل إلى معاملات الدوال والمتغيرات المحلية داخل المكدس (مع SS).','Base Pointer: reaches function parameters and locals inside the stack (with SS).'],
['si','SI','فهرس المصدر: عنوان المصدر في أوامر السلاسل (MOVS, LODS) مع DS.','Source Index: source address in string instructions (MOVS, LODS), with DS.'],
['di','DI','فهرس الوجهة: عنوان الوجهة في أوامر السلاسل (MOVS, STOS) مع ES.','Destination Index: destination address in string instructions (MOVS, STOS), with ES.'],
['seg','Segment registers','أربعة مسجلات تحدد بداية قطع الذاكرة (64KB لكل قطعة) ومنها يتكوّن العنوان الفيزيائي.','Four registers marking the start of 64 KB memory segments, used to form the physical address.',['cs','ds','ss','es']],
['cs','CS','قطعة الشيفرة: قطعة البرنامج، وتعمل مع IP لجلب الأوامر. تساوي FFFFH بعد RESET.','Code Segment: the program segment, used with IP to fetch instructions. FFFFH after RESET.'],
['ds','DS','قطعة البيانات: القطعة الافتراضية للمتغيرات والبيانات.','Data Segment: default segment for variables and data.'],
['ss','SS','قطعة المكدس: قطعة المكدس مع SP وBP.','Stack Segment: the stack segment, used with SP and BP.'],
['es','ES','القطعة الإضافية: غالباً وجهة أوامر السلاسل مع DI.','Extra Segment: usually the destination of string instructions, with DI.'],
['ip','IP','مؤشر الأوامر: إزاحة الأمر التالي داخل CS. لا يُكتب مباشرة بل يتغير مع JMP وCALL وRET.','Instruction Pointer: offset of the next instruction inside CS. Not written directly; changed by JMP, CALL and RET.'],
['flg','FLAGS','مسجل 16 بت يُستخدم منه 9 أعلام: 6 أعلام حالة (CF, PF, AF, ZF, SF, OF) و3 أعلام تحكم (TF, IF, DF).','A 16-bit register using 9 flags: 6 status flags (CF, PF, AF, ZF, SF, OF) and 3 control flags (TF, IF, DF).',['cf','pf','af','zf','sf','of','tf','if','df']],
['cf','CF','علم الحمل (Carry): 1 عند حمل أو استلاف من أعلى بت. تستخدمه JC وJNC وADC.','Carry Flag: set on carry out or borrow from the top bit. Used by JC, JNC and ADC.'],
['pf','PF','علم الزوجية (Parity): 1 إذا كان عدد الآحاد في البايت المنخفض من النتيجة زوجياً.','Parity Flag: 1 if the low byte of the result has an even number of ones.'],
['af','AF','علم الحمل المساعد: حمل من البت 3 إلى 4، ويُستخدم في تصحيح BCD مثل DAA.','Auxiliary Carry: carry from bit 3 to bit 4, used by BCD adjust instructions like DAA.'],
['zf','ZF','علم الصفر: 1 إذا كانت النتيجة صفراً. تعتمد عليه JZ وJNZ.','Zero Flag: 1 if the result is zero. Used by JZ and JNZ.'],
['sf','SF','علم الإشارة: نسخة من أعلى بت في النتيجة (1 = سالبة).','Sign Flag: copy of the top bit of the result (1 = negative).'],
['of','OF','علم الفيض: 1 عندما تتجاوز نتيجة العملية المؤشرة المدى المسموح.','Overflow Flag: 1 when a signed result is out of range.'],
['tf','TF','علم الفخ (Trap): عند 1 ينفذ المعالج أمراً واحداً ثم يأخذ مقاطعة الخطوة الواحدة INT 1 للتنقيح.','Trap Flag: when 1, the CPU runs one instruction then takes the single-step interrupt (INT 1) for debugging.'],
['if','IF','علم المقاطعة: 1 يسمح بالمقاطعات القابلة للقناع على INTR، وتتحكم به STI وCLI.','Interrupt Flag: 1 allows maskable interrupts on INTR; set by STI, cleared by CLI.',[],[18]],
['df','DF','علم الاتجاه: يحدد اتجاه أوامر السلاسل: 0 تصاعدي (CLD) و1 تنازلي (STD).','Direction Flag: sets string direction: 0 up (CLD), 1 down (STD).']
].forEach(a=>N[a[0]]={id:a[0],n:a[1],a:a[2],e:a[3],k:a[4]||[],p:a[5]||[]});
[['a','AX'],['b','BX'],['c','CX'],['d','DX']].forEach(([l,X])=>{N[l+'x'].k=[l+'h',l+'l'];
 N[l+'h']={id:l+'h',n:l.toUpperCase()+'H',a:'البايت العالي (البتات 8–15) من '+X+'، ويُستخدم كمسجل 8 بت مستقل.',e:'High byte (bits 8-15) of '+X+', usable as an independent 8-bit register.',k:[],p:[]};
 N[l+'l']={id:l+'l',n:l.toUpperCase()+'L',a:'البايت المنخفض (البتات 0–7) من '+X+'، ويُستخدم كمسجل 8 بت مستقل.',e:'Low byte (bits 0-7) of '+X+', usable as an independent 8-bit register.',k:[],p:[]}});
N.flg.k=['stf','ctf'];
N.stf={id:'stf',n:'Status flags',a:'ستة أعلام تتحدّث تلقائياً بنتيجة العمليات الحسابية والمنطقية.',e:'Six flags updated automatically by arithmetic and logic results.',k:['cf','pf','af','zf','sf','of'],p:[]};
N.ctf={id:'ctf',n:'Control flags',a:'ثلاثة أعلام يضبطها المبرمج للتحكم بسلوك المعالج.',e:'Three flags set by the programmer to control CPU behaviour.',k:['tf','if','df'],p:[]};
N.que.k=[1,2,3,4,5,6].map(i=>'q'+i);
[1,2,3,4,5,6].forEach(i=>N['q'+i]={id:'q'+i,n:'Byte '+i,a:'الخانة رقم '+i+' في طابور الأوامر؛ تدخل البايتات من جهة وتخرج من الجهة الأخرى (FIFO).',e:'Slot '+i+' of the instruction queue; bytes enter at one end and leave at the other (FIFO).',k:[],p:[]});
const AD=[...Array(16).keys()].map(i=>i<15?16-i:39);
N.bus.p=[...new Set([...N.bus.p,...AD,35,36,37,38])];N.tim.p=[19,21,22,23,33];N.cu.p=[17,18,24,30,31];
const NY={ar:{alu:'لأن تجميع العمليات الحسابية والمنطقية في وحدة واحدة يوفر عتاداً مشتركاً بدل تكراره لكل أمر، ويُحدَّث العلم من نقطة واحدة.',cu:'لأن شيفرة الأمر مجرد أرقام، ولا بد من وحدة تترجمها إلى خطوات وإشارات توقيت تحرك بقية الأجزاء بالترتيب الصحيح.',biu:'لأن الذاكرة أبطأ من التنفيذ؛ فصل BIU عن وحدة التنفيذ يسمح بجلب الأمر التالي أثناء تنفيذ الحالي فلا ينتظر المعالج.',que:'ليتداخل الجلب مع التنفيذ (Pipelining): يخزّن الطابور أوامر جاهزة فيستفيد المعالج من أوقات خمول الناقل.',sum:'لأن المسجلات 16 بت لا تكفي لعنوان 20 بت (1MB)، فتُزاح القطعة 4 بتات وتُجمع مع الإزاحة.',seg:'لتجاوز حد 64KB لعنوان 16 بت دون توسيع كل المسجلات: القطعة تحدد المنطقة والإزاحة تحدد الموضع، وتُفصل الشيفرة عن البيانات والمكدس.',flg:'لأن البرنامج يقرر (قفز شرطي) بناءً على نتيجة العملية السابقة دون إعادة حسابها، فتُحفظ النتيجة كبتات حالة.',tmp:'لأن ALU تأخذ معاملين معاً، فيُحتفظ بأحدهما مؤقتاً كي لا تتلف قيمة المسجل الأصلي أثناء العملية.',bus:'لأن الناقل الخارجي مشترك ومضاعف، فلا بد من منطق يرتب متى يخرج العنوان ومتى البيانات ويولّد إشارات التحكم.',ptr:'لأن الذاكرة تُعنون بإزاحات، فتلزم مسجلات مخصصة تحملها وتُحدَّث بأوامر خاصة (المكدس والسلاسل) دون استهلاك المسجلات العامة.'},
en:{alu:'Gathering arithmetic and logic in one unit shares hardware instead of duplicating it per instruction, and the flags are updated from a single place.',cu:'An opcode is just a number, so a unit must translate it into steps and timing signals that drive the other parts in the right order.',biu:'Memory is slower than execution; separating the BIU from the execution unit lets the next instruction be fetched while the current one runs, so the CPU does not wait.',que:'So fetch overlaps execution (pipelining): the queue holds ready instructions and uses the bus while it would otherwise sit idle.',sum:'16-bit registers cannot address 20 bits (1 MB), so the segment is shifted left 4 bits and added to the offset.',seg:'To get past the 64 KB limit of a 16-bit address without widening every register: the segment picks the region, the offset picks the position, and code, data and stack are kept apart.',flg:'A program decides (conditional jump) from the previous result without recomputing it, so the result is kept as status bits.',tmp:'The ALU takes two operands at once, so one is held temporarily so the original register is not corrupted during the operation.',bus:'The external bus is shared and multiplexed, so logic must decide when the address and when the data appear and generate the control signals.',ptr:'Memory is addressed with offsets, so dedicated registers hold them and are updated by special instructions (stack, strings) without using up the general registers.'}};
const pinsOf=id=>{if(id=='r')return[];const n=N[id];const r=n.p.filter(x=>typeof x=='number');n.k.forEach(c=>r.push(...pinsOf(c)));return[...new Set(r)]};
const PAR={};Object.values(N).forEach(n=>n.k.forEach(c=>PAR[c]=n.id));
const pathTo=id=>{const r=[];for(let x=id;x;x=PAR[x])r.unshift(x);return r};
const I=[
{n:'ADD AX,BX',s:[['que','تُقرأ بايتات الأمر من طابور الأوامر الذي ملأته BIU مسبقاً.','The opcode bytes are taken from the instruction queue the BIU prefilled.'],['dec','المفكك يعرف أنها عملية جمع بين مسجلين.','The decoder recognizes a register-to-register addition.'],['tim','وحدة التوقيت تولّد إشارات التحكم لكل خطوة.','Timing and control generates the control signals for each step.'],['ax','قراءة المعامل الأول من AX.','The first operand is read from AX.'],['bx','قراءة المعامل الثاني من BX.','The second operand is read from BX.'],['tmp','يُوضع المعاملان في المسجلات المؤقتة داخل ALU.','Both operands are latched into the ALU temporary registers.'],['add','وحدة الحساب تجمع القيمتين.','The arithmetic unit adds the two values.'],['ax','تُكتب النتيجة في AX.','The result is written back to AX.'],['stf','تتحدث أعلام الحالة (CF وZF وSF وOF...) بحسب النتيجة.','The status flags (CF, ZF, SF, OF...) are updated from the result.']]},
{n:'MOV AX,[BX]',s:[['que','يُجلب الأمر من الطابور.','The instruction comes out of the queue.'],['dec','المفكك يعرف أنها قراءة من الذاكرة.','The decoder recognizes a memory read.'],['bx','BX يعطي الإزاحة داخل القطعة.','BX supplies the offset inside the segment.'],['ds','DS هي القطعة الافتراضية للبيانات.','DS is the default data segment.'],['sum','المجمّع Σ يحسب العنوان الفيزيائي DS×16+BX.','The adder computes the physical address DS x 16 + BX.'],['bus','وحدة الناقل تُخرج العنوان مع ALE ثم تفعّل RD.','The bus logic outputs the address with ALE, then asserts RD.'],['ax','تصل البيانات وتُكتب في AX.','The data arrives and is written into AX.']]},
{n:'PUSH AX',s:[['que','يُجلب الأمر من الطابور.','The instruction comes out of the queue.'],['dec','المفكك يعرف أنها دفع إلى المكدس.','The decoder recognizes a stack push.'],['sp','يُنقَص SP بمقدار 2.','SP is decremented by 2.'],['ss','SS هي قطعة المكدس.','SS is the stack segment.'],['sum','Σ يحسب العنوان SS×16+SP.','The adder computes SS x 16 + SP.'],['ax','تُقرأ قيمة AX.','The value of AX is read.'],['bus','وحدة الناقل تكتب الكلمة في الذاكرة بإشارة WR.','The bus logic writes the word to memory with WR.']]},
{n:'JMP label',s:[['que','يُجلب الأمر من الطابور.','The instruction comes out of the queue.'],['dec','المفكك يعرف أنها قفز.','The decoder recognizes a jump.'],['ip','يُحمَّل IP بعنوان الهدف.','IP is loaded with the target offset.'],['sum','Σ يحسب العنوان الجديد CS×16+IP.','The adder computes the new address CS x 16 + IP.'],['que','يُفرَّغ الطابور لأن ما فيه لم يعد صالحاً.','The queue is flushed because its contents are no longer valid.'],['bus','تبدأ BIU الجلب من العنوان الجديد.','The BIU starts fetching from the new address.']]},
{n:'LOOP label',s:[['que','يُجلب الأمر من الطابور.','The instruction comes out of the queue.'],['dec','المفكك يعرف أنها حلقة تكرار.','The decoder recognizes a loop instruction.'],['cx','يُنقَص CX بمقدار 1.','CX is decremented by 1.'],['ip','إذا لم يصبح CX صفراً يُعدَّل IP للقفز إلى بداية الحلقة.','If CX is not zero, IP is changed to jump back to the loop start.'],['que','ويُفرَّغ الطابور عند القفز.','The queue is flushed when the jump is taken.']]}];
const stepBox=()=>{if(ins==null)return'';const x=I[ins].s[stp];return'<div class="stp"><b>'+I[ins].n+' &middot; '+(stp+1)+'/'+I[ins].s.length+'</b><p>'+(lang=='en'?x[2]:x[1])+'</p></div>'};
const nodeOn=(id,S)=>S.has(id)||N[id].k.some(c=>nodeOn(c,S));
function goStep(k){stp=k;const np=pathTo(I[ins].s[k][0]);dir=np.length>path.length?'in':np.length<path.length?'out':'';path=np}
let iv=0,path=['r'],dir='in',ins=null,stp=0,pvAuto=true,pvMan=false,pvOv=null,pvLast=null;
const pvHas=()=>pinsOf(path[path.length-1]).length>0;
const pinVis=()=>pvAuto?(pvOv!=null?pvOv:pvHas()):pvMan;const cs=['--ad','--ctl','--addr','--arb','--int'];
const dz=v=>v?(innerWidth<520?1:1.3):(innerWidth>=860?.8:Math.min(1,Math.max(.5,(innerWidth-32)/470)));
function renderInt(){
 const cn=path[path.length-1];if(cn!=pvLast){pvOv=null;pvLast=cn}
 const cur=N[path[path.length-1]],leaf=(!cur.k.length||ins!=null)&&path.length>1,d=leaf?path.length-2:path.length-1,par=N[path[d]];
 const bc='<button class="chip" data-home="1">'+ico('cpu')+t('home')+'</button>'+path.map((id,i)=>'<button class="chip" data-bc="'+i+'">'+ico(NI[id])+N[id].n+'</button>').join(ico('chev','fl-next'));
 let h='<div class="ibk" style="--c:var('+cs[d%5]+')">'+par.k.map(id=>'<button class="blk'+(id==cur.id?' on':'')+(ins!=null&&nodeOn(id,new Set(I[ins].s.map(x=>x[0])))?' pth':'')+'" data-nd="'+id+'">'+ico(NI[id],'bi')+'<b>'+N[id].n+'</b><small>'+(N[id].k.length?ico('layers')+N[id].k.length:'&nbsp;')+'</small></button>').join('')+'</div>';
 for(let i=d;i>=0;i--)h='<div class="fr" style="--c:var('+cs[i%5]+')"><span class="fl">'+ico(NI[path[i]])+N[path[i]].n+'</span>'+h+'</div>';
 const IA=['جمع مسجلين','قراءة من الذاكرة','دفع إلى المكدس','قفز','حلقة تكرار'];
 const ib='<div class="bcr ibr" style="--c:var(--gold)"><b>'+ico('terminal')+(lang=='en'?'Instruction:':'أمر:')+'</b><select id="isel" aria-label="'+(lang=='en'?'Instruction':'أمر')+'"><option value="">'+(lang=='en'?'Choose...':'اختر أمراً...')+'</option>'+I.map((x,i)=>'<option value="'+i+'"'+(ins==i?' selected':'')+'>'+(lang=='en'?x.n:IA[i]+' · '+x.n)+'</option>').join('')+'</select>'+(ins!=null?'<button class="chip" data-stp="-1" aria-label="'+(lang=='en'?'Previous':'السابق')+'">'+ico('chev','fl-prev')+'</button><span>'+(stp+1)+'/'+I[ins].s.length+'</span><button class="chip" data-stp="1" aria-label="'+(lang=='en'?'Next':'التالي')+'">'+ico('chev','fl-next')+'</button><button class="chip" data-insx="1" aria-label="'+(lang=='en'?'Close':'إغلاق')+'">'+ico('x')+'</button>':'')+'</div>';
 const pv=pinVis(),pb='<div class="bcr pbar" style="--c:var(--gold)"><button class="chip" data-pv="1" aria-pressed="'+pv+'">'+ico(pv?'eyeoff':'eye')+(pv?t('hp'):t('sp'))+'</button><button class="chip" data-pa="1" aria-pressed="'+pvAuto+'">'+ico('sparkles')+t('au')+'</button>'+(!pv&&pvAuto&&!pvHas()?'<span>'+t('np')+'</span>':'')+'</div>';
 ivw.innerHTML='<div class="bcr">'+bc+'</div>'+ib+pb+'<div class="zw '+dir+'">'+h+'</div>';
 const was=ic.hidden;ic.hidden=!pv;if(pv&&was){ic.classList.remove('pv');void ic.offsetWidth;ic.classList.add('pv')}
 build();
}
function showNode(){const n=N[path[path.length-1]],en=lang=='en',PL=pinsOf(n.id);panel.style.setProperty('--c','var(--gold)');
 panel.innerHTML='<div class="big"><span class="t">'+ico(NI[n.id])+n.n+'</span></div><div style="margin-top:6px"><span class="tag">'+(n.k.length?(en?'Contains '+n.k.length+' parts':'يتكوّن من '+n.k.length+' أجزاء'):(en?'Lowest level':'أدنى مستوى'))+'</span></div>'+stepBox()+'<h3>'+ico('info')+t('what')+'</h3><p>'+(en?n.e:n.a)+'</p>'+(NY[lang][n.id]?'<h3>'+ico('sparkles')+t('why')+'</h3><p>'+NY[lang][n.id]+'</p>':'')+(PL.length?'<h3>'+ico('cpu')+t('pins')+'</h3><div class="w">'+PL.map(x=>'<button data-pp="'+x+'">'+x+' &middot; '+nm(get(x).n)+'</button>').join('')+'</div>':'')}
function openInt(){ins=null;pvOv=null;pvLast=null;iv=1;dir='in';document.querySelectorAll('.bar').forEach(b=>b.hidden=true);path=['r'];ivw.hidden=false;ic.parentNode.classList.add('iv');setZ(dz(1));renderInt();show()}
function closeInt(){iv=0;ins=null;ic.parentNode.classList.remove('iv');document.querySelectorAll('.bar').forEach(b=>b.hidden=false);ivw.hidden=true;ic.hidden=false;setZ(dz(0));upd()}
bd.onclick=()=>{if(!iv)openInt()};bd.onkeydown=e=>{if(e.key=='Enter'||e.key==' '){e.preventDefault();if(!iv)openInt()}};
document.addEventListener('click',e=>{
 const q=k=>e.target.closest('['+k+']');let x;
 if(!menu.hidden&&!e.target.closest('#menu,#bMenu')){menu.hidden=true;bMenu.setAttribute('aria-expanded',false)}
 if(x=e.target.closest('.pin')){if(iv)closeInt();sel=+x.dataset.n;return upd()}
 else if(x=q('data-go')){sel=+x.dataset.go;return upd()}
 else if(x=q('data-nd')){const id=x.dataset.nd,last=N[path[path.length-1]];if(id==last.id)return;if((!last.k.length||ins!=null)&&path.length>1){path.pop();dir=''}else dir='in';path.push(id)}
 else if(x=q('data-stp')){if(ins==null)return;goStep(Math.max(0,Math.min(I[ins].s.length-1,stp+ +x.dataset.stp)))}
 else if(q('data-insx')){ins=null;dir=''}
 else if(x=q('data-bc')){const i=+x.dataset.bc;if(i==path.length-1)return;path=path.slice(0,i+1);dir='out'}
 else if(q('data-home')){return closeInt()}
 else if(q('data-pv')){const v=pinVis();if(pvAuto)pvOv=!v;else pvMan=!v}
 else if(q('data-pa')){pvAuto=!pvAuto;pvOv=null}
 else if(x=q('data-pp')){const n=+x.dataset.pp;closeInt();sel=n;return upd()}
 else return;
 renderInt();show()});
ivw.addEventListener('change',e=>{if(e.target.id!='isel')return;const v=e.target.value;if(v==''){ins=null;dir=''}else{ins=+v;goStep(0)}renderInt();show()});
bMenu.onclick=()=>{menu.hidden=!menu.hidden;bMenu.setAttribute('aria-expanded',!menu.hidden)};
bExp.onclick=()=>{mdl.hidden=!mdl.hidden;bExp.setAttribute('aria-pressed',!mdl.hidden);if(!mdl.hidden){menu.hidden=true;mdl.scrollIntoView({behavior:'smooth'})}};
document.addEventListener('keydown',e=>{if(e.key=='Escape')menu.hidden=true});

const RT={ar:{mb:'جدول الأطراف',mg:'المسرد',rh:'جدول الأطراف الكامل',rp:'الأطراف الأربعون بالترتيب. الأطراف 24–31 لها اسمان بحسب النمط (Min / Max). يمكن طباعة الجدول والمسرد كورقة مراجعة.',pr:'طباعة',
 cols:['الطرف','الاسم','الفئة','الاتجاه','الوظيفة','لماذا؟'],gh:'مسرد المصطلحات',gp:'مصطلحات تتكرر في شرح الأطراف.'},
en:{mb:'Pin table',mg:'Glossary',rh:'Full pin table',rp:'All 40 pins in order. Pins 24-31 have two names depending on the mode (Min / Max). The table and glossary can be printed as a revision sheet.',pr:'Print',
 cols:['Pin','Name','Category','Direction','Function','Why?'],gh:'Glossary',gp:'Terms that keep appearing in the pin explanations.'}};
const G={ar:[
['Tri-state','ثلاثي الحالة: خرج يكون 0 أو 1 أو ينفصل عن الناقل (معاوقة عالية Hi-Z) ليستخدمه جهاز آخر.'],
['Active Low','فعّال عند الصفر: إشارة تعمل عندما يكون مستواها منخفضاً (0)، وتُرسم بخط فوق اسمها مثل RD.'],
['Multiplexed','مُضاعَف: طرف واحد يؤدي وظيفتين في وقتين مختلفين، مثل AD0–AD15 عنواناً ثم بيانات.'],
['Latch','مثبّت (مثل 74LS373): دارة تحفظ العنوان عند وصول نبضة ALE ليبقى ثابتاً بينما يتحول الناقل إلى بيانات.'],
['Transceiver','مرسل/مستقبل (مثل 74LS245): دارة عازلة ثنائية الاتجاه تقوّي إشارات البيانات ويحدد اتجاهها DEN وDT/R.'],
['Bus Cycle','دورة الناقل: عملية قراءة أو كتابة واحدة، وتستغرق 4 نبضات ساعة T1–T4.'],
['Wait State','حالة انتظار: نبضة ساعة إضافية بين T3 وT4 يُدخلها المعالج عندما تكون الذاكرة بطيئة وإشارة READY منخفضة.'],
['DMA','وصول مباشر للذاكرة: متحكم خارجي يأخذ الناقل عبر HOLD/HLDA وينقل البيانات دون تدخل المعالج.'],
['Coprocessor','معالج مساعد: شريحة تساعد المعالج في مهام خاصة، مثل 8087 للأعداد الحقيقية.'],
['Interrupt Vector','متجه المقاطعة: عنوان في بداية الذاكرة يحفظ موقع برنامج خدمة المقاطعة، ولكل رقم مقاطعة متجه من 4 بايت.'],
['Physical Address','العنوان الفيزيائي: عنوان 20 بت يحسبه المعالج = القطعة × 16 + الإزاحة.']],
en:[
['Tri-state','Output that is 0, 1 or disconnected from the bus (high impedance, Hi-Z) so another device can use it.'],
['Active Low','A signal that acts when its level is low (0); drawn with an overline, e.g. RD.'],
['Multiplexed','One pin doing two jobs at different times, e.g. AD0-AD15 as address then data.'],
['Latch','A circuit (e.g. 74LS373) that stores the address when ALE pulses, so it stays fixed while the bus turns into data.'],
['Transceiver','Bidirectional buffer (e.g. 74LS245) that strengthens data signals; direction set by DEN and DT/R.'],
['Bus Cycle','One read or write operation, taking 4 clocks T1-T4.'],
['Wait State','An extra clock the CPU inserts between T3 and T4 when memory is slow and READY is low.'],
['DMA','Direct Memory Access: an external controller takes the bus through HOLD/HLDA and moves data without the CPU.'],
['Coprocessor','A chip that helps the CPU with special jobs, such as the 8087 for floating point.'],
['Interrupt Vector','A 4-byte entry at the bottom of memory holding the address of an interrupt service routine; one per interrupt number.'],
['Physical Address','The 20-bit address the CPU computes = segment x 16 + offset.']]};
G.ar.push(
['ALU','وحدة الحساب والمنطق (Arithmetic Logic Unit): تنفذ الجمع والطرح وعمليات AND وOR وتحدّث الأعلام.'],
['CU','وحدة التحكم (Control Unit): تفك شيفرة الأمر وتولّد إشارات التوقيت والتحكم.'],
['EU','وحدة التنفيذ (Execution Unit): تنفّذ الأوامر، وتضم ALU والمسجلات ووحدة التحكم.'],
['BIU','وحدة واجهة الناقل (Bus Interface Unit): تجلب الأوامر وتتعامل مع الناقل الخارجي.'],
['IP','مؤشر الأوامر (Instruction Pointer): إزاحة الأمر التالي داخل قطعة الشيفرة CS.'],
['ALE','تمكين المثبّت (Address Latch Enable): نبضة تحفظ العنوان في 74LS373.'],
['DEN','تمكين البيانات (Data Enable): تفعّل الدارة العازلة 74LS245.'],
['DT/R','اتجاه البيانات (Data Transmit/Receive): عالٍ = إرسال، منخفض = استقبال.'],
['INTA','إقرار المقاطعة (Interrupt Acknowledge): نبضتان يرسلهما المعالج بعد قبول المقاطعة.'],
['NMI','المقاطعة غير القابلة للقناع (Non-Maskable Interrupt): لا يحجبها الأمر CLI.'],
['PIC','متحكم المقاطعات القابل للبرمجة (Programmable Interrupt Controller) مثل 8259.'],
['TTL','منطق الترانزستور (Transistor-Transistor Logic): عائلة شرائح تعمل بجهد 5V.'],
['DIP','غلاف ثنائي الصف (Dual In-line Package): الشكل ذو الأطراف في جانبين، وهو شكل 8086 بـ 40 طرفاً.'],
['ROM / RAM','ROM ذاكرة للقراءة فقط تحفظ البرنامج الابتدائي، وRAM ذاكرة قراءة وكتابة للبيانات.'],
['FIFO','الداخل أولاً يخرج أولاً (First In First Out): طريقة عمل طابور الأوامر.'],
['BCD','عشري مرمّز ثنائياً (Binary Coded Decimal): كل رقم عشري في 4 بتات.'],
['Opcode','شيفرة العملية: الجزء من الأمر الذي يحدد ما يجب تنفيذه.'],
['Segment / Offset','القطعة والإزاحة: زوج يكوّن العنوان الفيزيائي (القطعة × 16 + الإزاحة).'],
['Pipelining','تداخل الجلب مع التنفيذ: يجلب المعالج الأمر التالي بينما ينفّذ الحالي.'],
['Maskable','قابل للقناع: يمكن حجبه بالبرنامج، مثل INTR عبر العلم IF.']);
G.en.push(
['ALU','Arithmetic Logic Unit: does addition, subtraction, AND, OR and updates the flags.'],
['CU','Control Unit: decodes instructions and generates timing and control signals.'],
['EU','Execution Unit: executes instructions; contains the ALU, registers and control unit.'],
['BIU','Bus Interface Unit: fetches instructions and handles the external bus.'],
['IP','Instruction Pointer: offset of the next instruction inside the code segment CS.'],
['ALE','Address Latch Enable: pulse that stores the address in the 74LS373.'],
['DEN','Data Enable: enables the 74LS245 buffer.'],
['DT/R','Data Transmit/Receive: high = send, low = receive.'],
['INTA','Interrupt Acknowledge: two pulses sent after an interrupt is accepted.'],
['NMI','Non-Maskable Interrupt: cannot be blocked by CLI.'],
['PIC','Programmable Interrupt Controller, such as the 8259.'],
['TTL','Transistor-Transistor Logic: a chip family working at 5 V.'],
['DIP','Dual In-line Package: the two-sided pin layout of the 40-pin 8086.'],
['ROM / RAM','ROM is read-only memory holding the startup program; RAM is read/write memory for data.'],
['FIFO','First In First Out: how the instruction queue works.'],
['BCD','Binary Coded Decimal: each decimal digit stored in 4 bits.'],
['Opcode','Operation code: the part of an instruction that says what to do.'],
['Segment / Offset','A pair that forms the physical address (segment x 16 + offset).'],
['Pipelining','Overlapping fetch with execution: the CPU fetches the next instruction while running the current one.'],
['Maskable','Can be blocked by software, such as INTR through the IF flag.']);
const XT={ar:{mt:'مخطط التوقيت',mc:'مخطط التوصيل',th:'مخطط توقيت دورة القراءة (Minimum Mode)',tp:'دورة الناقل الواحدة تستغرق 4 نبضات ساعة T1–T4. الخطوط المنخفضة فعّالة للإشارات التي عليها خط فوق اسمها.',
tn:['T1: يخرج العنوان على AD0–AD15 وA16–A19 وBHE، وتنبض ALE لتحفظه المثبّتات قبل أن يتحول الناقل إلى بيانات.','T2: تنخفض RD وتتفعّل DEN، ويصبح AD0–AD15 عائماً (Hi-Z) ليترك المجال للذاكرة كي ترسل بياناتها، بينما تعرض A16–A19 حالة S3–S6.','T3: تصل البيانات من الذاكرة؛ إن كانت بطيئة تُخفض READY فتُضاف حالات انتظار Tw بين T3 وT4.','T4: يلتقط المعالج البيانات وترتفع RD وDEN وينتهي الدورة. في دورة الكتابة تُستبدل RD بـ WR ويصبح DT/R عالياً، وتخرج البيانات من المعالج بدءاً من T2.'],
ch:'مخطط التوصيل النموذجي (Minimum Mode)',cp:'الشرائح المساعدة التي يحتاجها 8086 ليعمل كنظام: مولّد ساعة، ومثبّتات لفك تضاعف العنوان، وعوازل للبيانات.',
cn:['8284A: يولّد CLK ويزامن RESET وREADY، لذلك لا يُوصل المعالج بساعة مباشرة.','74LS373 (ثلاث شرائح): تحفظ A0–A19 وBHE عند نبضة ALE، فيبقى العنوان ثابتاً بعد أن يتحول AD0–AD15 إلى بيانات.','74LS245 (شريحتان): عازلان ثنائيا الاتجاه للبيانات، يتحكم بهما DEN (التفعيل) وDT/R (الاتجاه).','RD وWR وM/IO تذهب مباشرة إلى الذاكرة والأجهزة، وINTR تأتي من 8259 الذي يقرّ المعالج مقاطعته بـ INTA.']},
en:{mt:'Timing diagram',mc:'Connection diagram',th:'Read cycle timing (Minimum Mode)',tp:'One bus cycle takes 4 clocks, T1-T4. Signals with an overline are active low.',
tn:['T1: the address is output on AD0-AD15, A16-A19 and BHE, and ALE pulses so the latches store it before the bus turns into data.','T2: RD goes low and DEN is enabled; AD0-AD15 floats (Hi-Z) to let the memory drive its data, while A16-A19 show status S3-S6.','T3: data arrives from memory; if it is slow, READY is pulled low and wait states Tw are inserted between T3 and T4.','T4: the CPU samples the data, RD and DEN go high and the cycle ends. In a write cycle RD is replaced by WR, DT/R is high and the CPU drives the data from T2.'],
ch:'Typical connection (Minimum Mode)',cp:'The support chips an 8086 needs to become a system: a clock generator, latches to demultiplex the address, and data buffers.',
cn:['8284A: generates CLK and synchronizes RESET and READY, so the CPU is never wired to a plain oscillator.','74LS373 (three chips): store A0-A19 and BHE on the ALE pulse so the address stays fixed after AD0-AD15 turns into data.','74LS245 (two chips): bidirectional data buffers, controlled by DEN (enable) and DT/R (direction).','RD, WR and M/IO go straight to memory and devices; INTR comes from the 8259, which the CPU answers with INTA.']}};
Object.assign(XT.ar,{rd:'قراءة (Read)',wr:'كتابة (Write)',tw:'إضافة حالة انتظار Tw',thw:'مخطط توقيت دورة الكتابة (Minimum Mode)',
wn:['T1: يخرج العنوان على AD0–AD15 وA16–A19 وBHE وتنبض ALE لتحفظه المثبّتات، ويصبح DT/R عالياً لأن المعالج سيرسل.','T2: تنخفض WR وتتفعّل DEN، وتخرج البيانات من المعالج على AD0–AD15 مباشرة دون حالة Hi-Z.','T3: تبقى البيانات ثابتة لتكتبها الذاكرة، ويفحص المعالج READY في نهاية هذه الحالة.','T4: ترتفع WR وDEN وتنتهي الدورة؛ وتلتقط الذاكرة البيانات عند الحافة الصاعدة لـ WR.'],
wt:'Tw: حالة انتظار تعيد T3 دون تغيير في الإشارات، لأن READY كانت منخفضة عند نهاية T3، وتتكرر إلى أن ترتفع READY.',
hint:'اضغط اسم أي إشارة لعرض تفاصيل طرفها، واضغط أي بند من الشرح لتظليل حالته على المخطط.'});
Object.assign(XT.en,{rd:'Read',wr:'Write',tw:'Add wait state Tw',thw:'Write cycle timing (Minimum Mode)',
wn:['T1: the address goes out on AD0-AD15, A16-A19 and BHE, ALE pulses so the latches store it, and DT/R goes high because the CPU will transmit.','T2: WR goes low and DEN is enabled; the CPU drives the data onto AD0-AD15 right away, with no Hi-Z state.','T3: the data stays stable for the memory to store, and the CPU checks READY at the end of this state.','T4: WR and DEN go high and the cycle ends; the memory latches the data on the rising edge of WR.'],
wt:'Tw: a wait state that repeats T3 with no signal change, because READY was low at the end of T3; it repeats until READY goes high.',
hint:'Tap any signal name to see its pin details, and tap any note to highlight its state on the diagram.'});
let tmM='r',tmW=0,CW=160;
const WV=(y,pts)=>'<path class="ln" d="'+pts.map(([t,l],i)=>{const x=120+t*CW,yy=y+(l?0:20);return i?'H'+x+'V'+yy:'M'+x+' '+yy}).join('')+'H760"/>';
const BD=(y,a,b,tx)=>{const x0=120+a*CW,x1=120+b*CW;return '<path class="ln" d="M'+x0+' '+(y+10)+'L'+(x0+6)+' '+y+'H'+(x1-6)+'L'+x1+' '+(y+10)+'L'+(x1-6)+' '+(y+20)+'H'+(x0+6)+'Z"/><text x="'+(x0+x1)/2+'" y="'+(y+15)+'" text-anchor="middle">'+tx+'</text>'};
const HZ=(y,a,b)=>'<path class="ln" style="stroke-dasharray:4 3" d="M'+(120+a*CW)+' '+(y+10)+'H'+(120+b*CW)+'"/><text x="'+(120+(a+b)*CW/2)+'" y="'+(y+7)+'" text-anchor="middle">Hi-Z</text>';
const BX=(x,y,w,h,a,b)=>'<rect class="bx" x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="6"/><text class="bt" x="'+(x+w/2)+'" y="'+(y+h/2-(b?2:-4))+'" text-anchor="middle">'+a+'</text>'+(b?'<text x="'+(x+w/2)+'" y="'+(y+h/2+14)+'" text-anchor="middle">'+b+'</text>':'');
const LA=(x1,y1,x2,y2,tx,pin,o)=>{o=o||{};const m=(x1+x2)/2,L=tx.split('|');return '<g'+(pin?' data-go="'+pin+'"':'')+'><path class="'+(o.bus?'ln bus':'ar')+'" d="M'+x1+' '+y1+'L'+x2+' '+y2+'" marker-end="url(#ah)"'+(o.both?' marker-start="url(#ah)"':'')+'/>'+L.map((s,i)=>'<text x="'+m+'" y="'+(y1-6-12*(L.length-1-i))+'" text-anchor="middle">'+s+'</text>').join('')+'</g>'};
const ob=x=>'<tspan style="text-decoration:overline">'+x+'</tspan>';
function renderExtra(){const x=XT[lang],w=tmM=='w',n=4+tmW;CW=640/n;bTim.innerHTML=ico('activity')+x.mt;bCon.innerHTML=ico('network')+x.mc;
 const rows=[['CLK',19],['ALE',25],['AD0-AD15',16],['A16-A19/S3-S6',35],['BHE/S7',34],['M/'+ob('IO'),28],[ob('RD'),32],[ob('WR'),29],['DT/'+ob('R'),27],[ob('DEN'),26],['READY',22]],Y=i=>40+i*38;
 let g='';for(let i=0;i<=n;i++)g+='<path class="gd" d="M'+(120+i*CW)+' 28V'+(Y(10)+30)+'"/>';
 ['T1','T2','T3'].concat(tmW?['Tw']:[],['T4']).forEach((s,i)=>g+='<rect class="hl" x="'+(120+i*CW)+'" y="26" width="'+CW+'" height="'+(Y(10)+8)+'"/><text class="bt" x="'+(120+(i+.5)*CW)+'" y="18" text-anchor="middle">'+s+'</text>');
 rows.forEach((r,i)=>g+='<g'+(r[1]?' data-go="'+r[1]+'"':'')+'><text x="6" y="'+(Y(i)+15)+'">'+r[0]+'</text></g>');
 const ck=[];for(let k=0;k<n;k++)ck.push([k,1],[k+1/3,0]);
 g+=WV(Y(0),ck)+WV(Y(1),[[0,0],[.1,1],[.9,0]])+BD(Y(2),0,1,'Address')+(w?BD(Y(2),1,n,'Data out D0-D15'):HZ(Y(2),1,n-2)+BD(Y(2),n-2,n,'Data in D0-D15'))
 +BD(Y(3),0,1,'A16-A19')+BD(Y(3),1,n,'S3-S6 status')+BD(Y(4),0,1,'BHE')+BD(Y(4),1,n,'S7')+WV(Y(5),[[0,1]])
 +WV(Y(6),w?[[0,1]]:[[0,1],[1.1,0],[n-.9,1]])+WV(Y(7),w?[[0,1],[1.1,0],[n-.9,1]]:[[0,1]])+WV(Y(8),[[0,w?1:0]])+WV(Y(9),[[0,1],[1.1,0],[n-.4,1]])
 +WV(Y(10),tmW?[[0,1],[1.7,0],[3.5,1]]:[[0,1]])
 +'<path class="gd" style="stroke:var(--gold)" d="M'+(120+3*CW)+' 28V'+(Y(10)+30)+'"/><text class="sm" x="'+(120+3*CW)+'" y="'+(Y(10)+44)+'" text-anchor="middle">READY sampled</text>';
 const T=w?x.wn:x.tn,L=[T[0],T[1],T[2]].concat(tmW?[x.wt]:[],[T[3]]);
 const ctl='<div style="display:flex;gap:8px;flex-wrap:wrap;margin:10px 0"><button class="chip" data-tm="r" aria-pressed="'+!w+'">'+x.rd+'</button><button class="chip" data-tm="w" aria-pressed="'+w+'">'+x.wr+'</button><button class="chip" data-tw="1" aria-pressed="'+!!tmW+'">'+x.tw+'</button></div>';
 sTim.innerHTML='<h2>'+(w?x.thw:x.th)+'</h2><p>'+x.tp+'</p>'+ctl+'<svg class="sv" viewBox="0 0 770 470" role="img" aria-label="'+(w?x.thw:x.th)+'">'+g+'</svg><p style="color:var(--mut);font-size:.85rem;margin:8px 0">'+x.hint+'</p><div class="card"><ul>'+L.map((a,i)=>'<li data-ts="'+i+'" style="cursor:pointer">'+a+'</li>').join('')+'</ul></div>';
 sTim.querySelectorAll('[data-tm]').forEach(b=>b.onclick=()=>{tmM=b.dataset.tm;renderExtra()});
 sTim.querySelector('[data-tw]').onclick=()=>{tmW^=1;renderExtra()};
 const hl=i=>sTim.querySelectorAll('.hl').forEach((r,j)=>r.style.opacity=j==i?.18:0);
 sTim.querySelectorAll('li[data-ts]').forEach(li=>{li.onclick=()=>hl(+li.dataset.ts);li.onmouseenter=()=>hl(+li.dataset.ts);li.onmouseleave=()=>hl(-1)});
 let c='<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z"/></marker></defs>'
 +BX(20,40,130,100,'8284A','Clock Generator')+'<text class="sm" x="85" y="130" text-anchor="middle">XTAL</text>'+BX(20,300,130,80,'8259','PIC')+BX(250,40,130,380,'8086','MN/MX = VCC')
 +BX(500,40,130,100,'74LS373 x3','Latches')+'<text class="sm" x="565" y="130" text-anchor="middle">OE = GND</text>'+BX(500,200,130,110,'74LS245 x2','Transceivers')+BX(670,40,100,380,'Memory','& I/O')
 +LA(150,64,250,64,'CLK (19)',19)+LA(150,92,250,92,'RESET (21)',21)+LA(150,120,250,120,'READY (22)',22)+LA(150,330,250,330,'INTR (18)',18)+LA(250,365,150,365,'INTA (24)',24)
 +LA(380,70,500,70,'AD0–AD15|A16–19, BHE',16,{bus:1})+LA(380,118,500,118,'ALE (25) → G',25)
 +LA(380,225,500,225,'AD0–AD15',16,{bus:1,both:1})+LA(380,258,500,258,'DEN (26) → G',26)+LA(380,291,500,291,'DT/R (27) → DIR',27)
 +LA(630,90,670,90,'Addr',0,{bus:1})+LA(630,255,670,255,'Data',0,{bus:1,both:1})
 +LA(380,350,670,350,'RD (32)',32)+LA(380,378,670,378,'WR (29)',29)+LA(380,406,670,406,'M/IO (28)',28);
 sCon.innerHTML='<h2>'+x.ch+'</h2><p>'+x.cp+'</p><svg class="sv" viewBox="0 0 780 440" role="img" aria-label="'+x.ch+'">'+c+'</svg><p style="color:var(--mut);font-size:.85rem;margin:8px 0">'+x.hint+'</p><div class="card"><ul>'+x.cn.map(a=>'<li>'+a+'</li>').join('')+'</ul></div>';
 sTim.onclick=sCon.onclick=e=>{if(e.target.closest('[data-go]'))setTimeout(()=>window.scrollTo({top:0,behavior:'smooth'}),0)}}
IC.dn=pa('m6 9 6 6 6-6');
Object.assign(RT.ar,{rp:'الأطراف الأربعون مجمّعة حسب وظيفتها. الأطراف المتطابقة (AD0–AD15 وA16–A19 وGND) في صف واحد، والأطراف 24–31 لها اسمان بحسب النمط (Min / Max). اضغط أي صف لتعرف لماذا صُمّم هكذا.',
cols:['الطرف','الاسم','الاتجاه','الوظيفة',''],bc:'حسب الفئة',bn:'حسب رقم الطرف',ea:'إظهار «لماذا؟» للجميع',ca:'إخفاء «لماذا؟»',go:'عرض على الشريحة',mp:'أي طرف لأي بت؟',hint:'اضغط رقم الطرف للانتقال إليه على الشريحة، أو اضغط الصف لعرض «لماذا؟».'});
Object.assign(RT.en,{rp:'All 40 pins grouped by function. Identical pins (AD0-AD15, A16-A19 and GND) share one row, and pins 24-31 have two names depending on the mode (Min / Max). Tap a row to see why it is designed that way.',
cols:['Pin','Name','Direction','Function',''],bc:'By category',bn:'By pin number',ea:'Show "Why?" for all',ca:'Hide "Why?"',go:'Show on chip',mp:'Which pin carries which bit?',hint:'Tap a pin number to jump to it on the chip, or tap a row to see "Why?".'});
let refSort='c',refOpen=false;
function refEntries(){
 const yy=n=>(Y[lang]||{})[n],ar=lang=='ar',ent=[],used=new Set();
 const merge=(pins,rep,name,fn,c,mp)=>{pins.forEach(p=>used.add(p));const g=getm(rep,0);
  ent.push({pins:pins.slice().sort((a,b)=>a-b),rep,c,names:[name],ios:[g.io||'—'],fns:[fn],whys:[yy(rep)],tags:null,mp})};
 const AD=[];for(let i=0;i<=15;i++)AD.push(i<15?16-i:39);
 merge(AD,16,'AD0–AD15',ar?'طرف مُضاعَف: يحمل العنوان A0–A15 في T1 ثم البيانات D0–D15 في بقية الدورة. AD0–AD7 البايت المنخفض وAD8–AD15 البايت المرتفع.':'Multiplexed: carries address A0-A15 in T1, then data D0-D15 for the rest of the cycle. AD0-AD7 is the low byte and AD8-AD15 the high byte.','ad',AD.map((p,i)=>['AD'+i,p]));
 merge([35,36,37,38],35,'A19/S6 … A16/S3',ar?'طرف مُضاعَف: العنوان A16–A19 في T1 (أعلى 4 بتات من العنوان 20-بت) ثم حالة المعالج S3–S6.':'Multiplexed: address A16-A19 in T1 (the top 4 bits of the 20-bit address), then processor status S3-S6.','addr',[[ 'A19/S6',35],['A18/S5',36],['A17/S4',37],['A16/S3',38]]);
 merge([1,20],1,'GND',get(1).f+(ar?' يجب توصيل الطرفين 1 و20 معاً.':' Pins 1 and 20 must both be connected.'),'pwr',null);
 for(let n=1;n<=40;n++){if(used.has(n))continue;const p=P[n];
  if(p.d){const a=getm(n,0),b=getm(n,1),y=yy(n);
   ent.push({pins:[n],rep:n,c:a.c,names:[a.n,b.n],ios:[a.io,b.io],fns:[a.f,b.f],whys:Array.isArray(y)?y:[y],tags:['Min','Max'],mp:null})}
  else{const a=get(n);ent.push({pins:[n],rep:n,c:a.c,names:[a.n],ios:[a.io||'—'],fns:[a.f],whys:[yy(n)],tags:null,mp:null})}}
 return ent}
function renderRef(){const r=RT[lang],ent=refEntries(),first=e=>e.pins[0];
 const rng=a=>{const o=[];for(let i=0;i<a.length;){let j=i;while(j+1<a.length&&a[j+1]==a[j]+1)j++;o.push(j>i?a[i]+'–'+a[j]:''+a[i]);i=j+1}return o.join(', ')};
 const row=e=>{const c='var('+CAT[e.c][1]+')',T=e.tags;
  const ln=(arr,f)=>T?arr.map((v,k)=>'<div><small class="tgm">'+T[k]+'</small>'+f(v)+'</div>').join(''):f(arr[0]);
  const sameIo=T&&e.ios[0]==e.ios[1];
  const io=v=>(v&&v!='—'?ico(ioi(v)):'')+v;
  const ioH=sameIo?io(e.ios[0]):ln(e.ios,io);
  const ys=e.whys.filter(Boolean),why=ys.length?'<p>'+ico('sparkles')+'<b>'+t("why")+'</b> '+(T&&ys.length>1?ys.map((v,k)=>'<br><small class="tgm">'+T[k]+'</small>'+v).join(''):ys[0])+'</p>':'';
  const mp=e.mp?'<div><p><b>'+ico('pin')+r.mp+'</b></p><div class="mps">'+e.mp.map(([l,p])=>'<button class="mp" data-go="'+p+'"><b>'+l+'</b> '+p+'</button>').join('')+'</div></div>':'';
  return '<tr class="rw" style="--c:'+c+'"><td class="pc"><button class="pn" data-go="'+e.rep+'" aria-label="'+r.go+' '+rng(e.pins)+'">'+rng(e.pins)+'</button></td>'
  +'<td class="nmc">'+(T?e.names.map((v,k)=>'<div>'+nm(v)+' <small>'+T[k]+'</small></div>').join(''):nm(e.names[0]))+(refSort=='n'?'<div class="ct">'+ico(CAT[e.c][2])+catn(e.c)+'</div>':'')+'</td>'
  +'<td class="ioc">'+ioH+'</td><td class="fnc">'+ln(e.fns,v=>v)+'</td>'
  +'<td class="tg"><button class="tgb" aria-expanded="'+refOpen+'" aria-label="'+t("why")+'">'+ico('dn')+'</button></td></tr>'
  +'<tr class="dt"'+(refOpen?'':' hidden')+'><td colspan="5"><div class="dd">'+why+mp+'</div></td></tr>'};
 let body='';
 if(refSort=='c'){Object.keys(CAT).forEach(k=>{const g=ent.filter(e=>e.c==k).sort((a,b)=>first(a)-first(b));if(!g.length)return;
   const cnt=g.reduce((s,e)=>s+e.pins.length,0);
   body+='<tr class="gh" style="--c:var('+CAT[k][1]+')"><td colspan="5">'+ico(CAT[k][2])+catn(k)+'<span class="cn">'+cnt+'</span></td></tr>'+g.map(row).join('')})}
 else body=ent.sort((a,b)=>first(a)-first(b)).map(row).join('');
 sRef.innerHTML='<h2>'+r.rh+'</h2><p>'+r.rp+'</p>'
 +'<div class="rctl"><span class="seg" role="group"><button data-rs="c" aria-pressed="'+(refSort=='c')+'">'+ico('layers')+r.bc+'</button><button data-rs="n" aria-pressed="'+(refSort=='n')+'">'+ico('hash')+r.bn+'</button></span>'
 +'<button class="chip" data-ra aria-pressed="'+refOpen+'">'+ico('sparkles')+(refOpen?r.ca:r.ea)+'</button>'
 +'<button class="chip" onclick="window.print()">'+ico('printer')+r.pr+'</button></div>'
 +'<p class="rhint">'+r.hint+'</p>'
 +'<div class="tbl"><table class="cmp rt"><thead><tr>'+r.cols.map(c=>'<th>'+c+'</th>').join('')+'</tr></thead><tbody>'+body+'</tbody></table></div>';
 sRef.querySelectorAll('[data-rs]').forEach(b=>b.onclick=ev=>{ev.stopPropagation();refSort=b.dataset.rs;renderRef()});
 sRef.querySelector('[data-ra]').onclick=ev=>{ev.stopPropagation();refOpen=!refOpen;renderRef()};
 sRef.onclick=ev=>{
  if(ev.target.closest('[data-go]')){setTimeout(()=>window.scrollTo({top:0,behavior:'smooth'}),0);return}
  const rw=ev.target.closest('tr.rw');if(!rw||ev.target.closest('.rctl'))return;
  const d=rw.nextElementSibling;d.hidden=!d.hidden;rw.querySelector('.tgb').setAttribute('aria-expanded',!d.hidden)}}
function renderGls(){const r=RT[lang];
 sGls.innerHTML='<h2>'+r.gh+'</h2><p>'+r.gp+'</p><div class="gl">'+G[lang].map(x=>'<div class="card"><h3>'+x[0]+'</h3><p>'+x[1]+'</p></div>').join('')+'</div>'}
[[bRef,sRef],[bGls,sGls],[bTim,sTim],[bCon,sCon]].forEach(([b,sec])=>b.onclick=()=>{sec.hidden=!sec.hidden;b.setAttribute('aria-pressed',!sec.hidden);if(!sec.hidden){menu.hidden=true;sec.scrollIntoView({behavior:'smooth'})}});
bMenu.innerHTML=ico('menu');
bMin.innerHTML=ico('cpu')+bMin.textContent;bMax.innerHTML=ico('network')+bMax.textContent;
IC.sun=pa('M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0','M12 2v2','M12 20v2','M2 12h2','M20 12h2','M5 5l1.4 1.4','M17.6 17.6 19 19','M19 5l-1.4 1.4','M6.4 17.6 5 19');
IC.moon=pa('M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z');
const mq=matchMedia('(prefers-color-scheme:dark)'),curTh=()=>document.documentElement.dataset.theme||(mq.matches?'dark':'light');
function thLabel(){const d=curTh()=='dark',en=lang=='en',tx=d?(en?'Light mode':'الوضع الفاتح'):(en?'Dark mode':'الوضع الداكن');
 bTheme.innerHTML=ico(d?'sun':'moon')+tx;bTheme.setAttribute('aria-label',tx)}
bTheme.onclick=()=>{const n=curTh()=='dark'?'light':'dark';document.documentElement.dataset.theme=n;try{localStorage.setItem('th',n)}catch(e){}thLabel()};
mq.addEventListener&&mq.addEventListener('change',()=>{let s=null;try{s=localStorage.getItem('th')}catch(e){}if(!s){delete document.documentElement.dataset.theme;thLabel()}});
bZoom.innerHTML=ico('zoom');bZoom.onclick=()=>{const o=zc.classList.toggle('open');bZoom.setAttribute('aria-expanded',o)};
const _al=applyLang;applyLang=function(){_al();thLabel();const e=lang=='en';bZoom.setAttribute('aria-label',lzoom.textContent);mh1.textContent=e?'View & settings':'العرض والإعدادات';mh2.textContent=e?'Tools & references':'الأدوات والمراجع'};
let lw=innerWidth;addEventListener('resize',()=>{if(innerWidth!=lw){lw=innerWidth;setZ(dz(iv?1:0))}});
zRange();setZ(dz(0));applyLang();

/* ---- Offline support + "update available" prompt ---- */
(function(){
 if(!('serviceWorker' in navigator)||!/^https?:$/.test(location.protocol))return;
 const TX={ar:{a:'تحديث جديد متاح — اسحب للأسفل للتحديث',r:'أفلت للتحديث',u:'جارٍ التحديث…'},
           en:{a:'Update available — pull down to update',r:'Release to update',u:'Updating…'}};
 let box=null,worker=null,state='a',reloading=false;
 const paint=()=>{if(!box)return;const t=TX[lang][state];box.querySelector('span').textContent=t;box.setAttribute('aria-label',t)};
 function apply(){if(state==='u')return;state='u';paint();box.classList.remove('ready');box.classList.add('busy');worker&&worker.postMessage('SKIP_WAITING')}
 function show(w){
  worker=w;if(box)return;
  box=document.createElement('button');box.id='upd';box.type='button';
  box.innerHTML='<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14"/><path d="m6 13 6 6 6-6"/></svg><span></span>';
  document.body.appendChild(box);paint();
  requestAnimationFrame(()=>requestAnimationFrame(()=>box.classList.add('in')));
  let y0=null,dy=0;const T=64;
  const reset=()=>{y0=null;box.classList.remove('drag');box.style.removeProperty('--dy')};
  box.addEventListener('pointerdown',e=>{if(state==='u')return;y0=e.clientY;dy=0;box.setPointerCapture(e.pointerId);box.classList.add('drag')});
  box.addEventListener('pointermove',e=>{if(y0===null)return;
   dy=Math.max(0,e.clientY-y0);box.style.setProperty('--dy',Math.min(dy<T?dy:T+(dy-T)*.25,110)+'px');
   const r=dy>=T;if(r!==(state==='r')){state=r?'r':'a';box.classList.toggle('ready',r);paint()}});
  box.addEventListener('pointerup',()=>{if(y0===null)return;const go=state==='r';reset();if(go)apply()});
  box.addEventListener('pointercancel',()=>{reset();if(state==='r'){state='a';box.classList.remove('ready');paint()}});
  box.addEventListener('click',e=>{if(e.detail===0)apply()}); /* keyboard: Enter / Space */
 }
 const _al=applyLang;applyLang=function(){_al();paint()};
 addEventListener('load',()=>navigator.serviceWorker.register('sw.js').then(reg=>{
  const watch=w=>w.addEventListener('statechange',()=>{if(w.state==='installed'&&navigator.serviceWorker.controller)show(w)});
  if(reg.waiting&&navigator.serviceWorker.controller)show(reg.waiting);
  reg.addEventListener('updatefound',()=>reg.installing&&watch(reg.installing));
  const chk=()=>reg.update().catch(()=>{});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)chk()});
  setInterval(chk,60*60*1000);
 }).catch(()=>{}));
 navigator.serviceWorker.addEventListener('controllerchange',()=>{if(state!=='u'||reloading)return;reloading=true;location.reload()});
})();

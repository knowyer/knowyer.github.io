/* ============================================
   KNOWYER 数字孪生空间 - 应用逻辑
   ============================================ */

// ============ Data Store ============
const DataStore = {
    defaultData: {
        profile: {
            name: 'KNOWYER',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
            tagline: '数字孪生，虚拟映照真实',
            bio: '热爱技术，享受生活的一名普通开发者。'
        },
        maxims: [
            { text: '人生如逆旅，我亦是行人', author: '苏轼' },
            { text: '知之者不如好之者，好之者不如乐之者', author: '孔子' },
            { text: '保持热爱，奔赴山海', author: '未知' },
            { text: '认真生活，就能找到被藏起来的糖果', author: '未知' },
        ],
        skills: [
            { name: 'JavaScript', level: 90 },
            { name: 'Python', level: 80 },
            { name: 'UI设计', level: 75 },
            { name: '英语', level: 85 },
            { name: '写作', level: 70 },
            { name: '摄影', level: 65 },
        ],
        works: [
            {
                id: 'w1',
                title: '高级软件工程师',
                company: '某科技公司',
                period: '2022 - 至今',
                description: '负责企业级应用架构设计与开发，带领团队完成多个重要项目。'
            },
            {
                id: 'w2',
                title: '全栈开发工程师',
                company: '互联网创业公司',
                period: '2019 - 2022',
                description: '从零构建产品，负责前端架构与后端服务开发。'
            },
            {
                id: 'w3',
                title: '前端开发工程师',
                company: '某软件外包公司',
                period: '2016 - 2019',
                description: '参与多个政企项目开发，积累了丰富的实战经验。'
            }
        ],
        books: [
            { id: 'b1', title: '百年孤独', author: '加西亚·马尔克斯', status: 'finished' },
            { id: 'b2', title: '人类简史', author: '尤瓦尔·赫拉利', status: 'reading' },
            { id: 'b3', title: '设计心理学', author: '唐·诺曼', status: 'want' },
            { id: 'b4', title: '红楼梦', author: '曹雪芹', status: 'reading' },
            { id: 'b5', title: '活着', author: '余华', status: 'finished' },
            { id: 'b6', title: '三体', author: '刘慈欣', status: 'finished' },
        ],
        notes: [
            { id: 'n1', title: '学习方法论', excerpt: '学习的本质是建立联系，构建知识网络比记忆碎片更重要。' },
            { id: 'n2', title: '英语精读技巧', excerpt: '选择高于自己水平的材料，反复朗读直到能够背诵。' },
        ],
        photos: [
            { id: 'p7', url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600', caption: '云海山峦' },
            { id: 'p0', url: 'https://images.unsplash.com/photo-1428908728789-d2de25dbdba2?w=600', caption: '春雨池塘' },
            { id: 'p1', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600', caption: '山间云雾' },
            { id: 'p2', url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600', caption: '林间光影' },
            { id: 'p3', url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600', caption: '湖光山色' },
            { id: 'p4', url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600', caption: '草原天路' },
            { id: 'p5', url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600', caption: '瀑布溪流' },
            { id: 'p6', url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600', caption: '田园风光' },
        ],
        interests: [
            '摄影', '阅读', '写作', '徒步', '咖啡', '电影', '古典音乐', '书法'
        ],
        lifeItems: [
            {
                id: 'l1',
                title: '清晨的咖啡时光',
                date: '2024-03-15',
                excerpt: '新入手的咖啡豆，今天尝试了手冲。',
                image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400'
            },
            {
                id: 'l2',
                title: '周末徒步计划',
                date: '2024-03-10',
                excerpt: '去山里走了一圈，发现了一片野花盛开的草地。',
                image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400'
            },
            {
                id: 'l3',
                title: '新入手的相机镜头',
                date: '2024-03-05',
                excerpt: '终于入手了85mm人像头，准备开始人像摄影练习。',
                image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400'
            },
        ],
        posts: [
            {
                id: 'ps-today',
                title: '诗与远方：诗词赋能文旅新图景',
                content: '四月二十日，2026中华经典诗词论坛在郑州举行，主题为「用诗词润色文旅的画卷」。各方嘉宾围绕「诗词+文旅」议题深入交流，甘肃边塞诗赋能文旅的实践经验引人注目——千年之前的边塞诗篇，如今成为地方文旅发展的文化资本。\n\n这让人思考：诗词究竟能为现代生活带来什么？\n\n古人行旅，诗随步起。王维走过大漠，写下「大漠孤烟直，长河落日圆」；李白出蜀入楚，留下「两岸猿声啼不住，轻舟已过万重山」。诗不是旅游的点缀，而是旅游本身的灵魂。如今各地争相打造「诗意城市」，从杭州的西湖到西安的城墙，从成都的草堂到郑州的嵩山，诗词正在成为城市文旅的新名片。\n\n程序员的工作，本质上也是「写诗」。每一行代码，都是在千头万绪中寻找那个最精准的表达；每一个架构决策，都是在限制与自由之间寻找平衡。好的代码如同好诗，不在于堆砌技巧，而在于恰到好处。正如王国维所言「词以境界为最上」，代码亦以「境界」为上——可读、可维护、可扩展，这才是程序员追求的「诗与远方」。\n\n诗词不远，就在日常。在通勤的地铁里读一首短诗，在午休的阳光下抄几句古文，在周末的郊外寻找诗中的意境——生活本就藏着诗意，只待我们驻足发现。',
                date: '2026-04-26',
                tags: ['诗词', '文旅', '生活美学', '随想']
            },
            {
                id: 'ps-yesterday',
                title: '诗词中的气氛美学：反差的力量',
                content: '德国美学家格诺特·波默提出「气氛美学」，认为真正吸引读者进入诗词境界的，不是意象、不是韵律，而是作品所营造的审美气氛。这一视角，用来重新观照中国古典诗词，恰如打开了一扇新的窗口。\n\n有趣的是，诗词中最动人的气氛，往往并非单一色调，而是在反差中显现。「昔我往矣，杨柳依依；今我来思，雨雪霏霏」——离家时春光明媚，归来时雨雪纷飞，王夫之评此「以乐景写哀，以哀景写乐，一倍增其哀乐」。反差并非矛盾，相异之音相济，反而成就更高层次的和谐。\n\n这与写代码何其相似。代码的最高境界，往往不是某一行特别精妙，而是整体结构中动静结合、繁简相宜——注释与逻辑交替，错误处理与正常流程并存，模块之间既独立又呼应。最优秀的系统架构，在复杂与简洁之间保持着恰到好处的张力。\n\n《采薇》的作者早已懂得：真正深邃的美，不在回避对立，而在容纳反差。春与冬、乐与哀、自然与人事——在反差中，气氛获得了力量，作品拥有了呼吸的空间。或许，这就是中国诗词最朴素也最深邃的美学智慧：不和盘托出，留下空白，反而予人更强烈的感受。',
                date: '2026-04-25',
                tags: ['诗词', '美学', '生活美学', '随想']
            },
            {
                id: 'ps-yesterday',
                title: '暮春的诗与远方',
                content: '四月过半，春天已近尾声。古人说"暮春者，春服既成，冠者五六人，童子六七人，浴乎沂，风乎舞雩，咏而归"——这是孔子向往的洒脱，也是中国人骨子里的季节仪式感。\n\n暮春的美，在于它不执著于永恒。樱花开了又落，柳絮随风飘散，牡丹雍容登场，芍药含苞待放。每一种花都在用自己的方式完成生命的故事，不早不晚，恰逢其时。这像极了写代码的过程：一个功能从构想到实现，从反复调试到最终上线，其中的甘苦本身就是意义，而非那个版本号。\n\n王安石有诗云："把酒祝东风，且共从容。" 对生活的从容，或许就藏在这一杯暮春的清茶里，藏在那次说走就走的山间漫步里，藏在那行反复推敲终于满意的几行代码里。\n\n春天要走了，但诗还在，你我也还在。愿这个暮春，有人陪你立黄昏，有人问你粥可温。',
                date: '2026-04-20',
                tags: ['随想', '暮春', '诗词', '生活美学']
            },

            {
                id: 'ps-1',
                title: '雨生百谷，春深似海',
                content: '《月令七十二候集解》有言："谷雨，谷得雨而生也。" 每年四月二十日前后，太阳到达黄经30度，雨水增多，润泽大地，谷物生长进入关键期。这是春季最后一个节气，也是农耕文明最浪漫的注脚——天时与人事，在这一刻达成了古老的默契。\n\n古人将谷雨分为三候：萍始生、鸣鸠拂其羽、戴胜降于桑。浮萍开始在水面上铺展，布谷鸟梳理羽毛提醒农时，戴胜鸟落在桑树上——这些细微的物候变化，在钢筋水泥的城市里已难觅踪迹。但或许我们仍可以从一杯明前茶、一把新上市的香椿芽里，读懂这个节气的温柔提醒：慢下来，倾听土地的声音。\n\n程序员的世界里也有"谷雨"——那些长期困扰的bug，往往在你不刻意去想的时候突然有了思路；那些深夜苦思而不得的架构方案，常在一次跑步、一杯咖啡的间隙中豁然开朗。技术灵感也需要"雨水"的滋养，它来自跨界阅读、来自自然观察、来自那些看似无用的闲适时光。\n\n谷雨之后，便是立夏。愿你在春末的这场雨里，种下一些什么——无论是代码、文字，还是对生活本身的感知。',
                date: '2026-04-15',
                tags: ['节气', '生活', '谷雨', '随想']
            },
            {
                id: 'ps0',
                title: '人间四月天',
                content: '「人间四月天」是林徽因写给新生的诗，也是我最喜欢的季节描写。四月的风不寒不燥，吹绿了柳叶，吹开了花朵，吹醒了蛰伏一冬的心绪。\n\n古人云："春读书，兴味长。磨其砚，笔花香。" 读书如此，写代码亦然。漫长的键盘敲击之后，最有价值的代码灵感，往往诞生于一次户外散步的间隙——看远山如黛，听溪水潺潺，心绪沉淀，思路反而清明。\n\n这或许就是生活美学的真谛：在忙碌与闲适之间找到平衡，在技术与自然之间寻求共鸣。四月，愿你也能走出屏幕，去感受这一年中最好的时光。',
                date: '2026-04-14',
                tags: ['随想', '生活', '春天']
            },
            {
                id: 'ps1',
                title: '数字孪生空间上线了',
                content: '经过一段时间的打磨，我的数字孪生空间终于上线了。这个网站以徽派建筑为设计灵感，希望能成为一个既有文化底蕴又具现代感的个人空间。',
                date: '2024-03-20',
                tags: ['网站', '开发', '记录']
            },
            {
                id: 'ps2',
                title: '关于终身学习的一些思考',
                content: '在这个快速变化的时代，终身学习已经从可选项变成了必选项。但学习不是为了焦虑，而是为了更好地理解这个世界。',
                date: '2024-03-18',
                tags: ['随想', '学习', '成长']
            },
        ],
        contacts: {
            email: 'know@knowyer.com',
            github: 'github.com/knowyer',
        }
    },

    get(key) {
        const stored = localStorage.getItem('knowyer_data');
        const data = stored ? JSON.parse(stored) : this.defaultData;
        if (key) {
            const keys = key.split('.');
            let result = data;
            for (const k of keys) {
                result = result?.[k];
            }
            return result !== undefined ? result : this.getDefault(key);
        }
        return data;
    },

    getDefault(key) {
        const keys = key.split('.');
        let result = this.defaultData;
        for (const k of keys) {
            result = result?.[k];
        }
        return result;
    },

    set(key, value) {
        const stored = localStorage.getItem('knowyer_data');
        const data = stored ? JSON.parse(stored) : { ...this.defaultData };
        const keys = key.split('.');
        let obj = data;
        for (let i = 0; i < keys.length - 1; i++) {
            if (!obj[keys[i]]) obj[keys[i]] = {};
            obj = obj[keys[i]];
        }
        obj[keys[keys.length - 1]] = value;
        localStorage.setItem('knowyer_data', JSON.stringify(data));
    },

    getAll() {
        const stored = localStorage.getItem('knowyer_data');
        return stored ? JSON.parse(stored) : { ...this.defaultData };
    },

    export() {
        const data = this.getAll();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'knowyer_data.json';
        a.click();
        URL.revokeObjectURL(url);
    },

    import(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            localStorage.setItem('knowyer_data', JSON.stringify(data));
            return true;
        } catch (e) {
            console.error('Import failed:', e);
            return false;
        }
    },

    reset() {
        localStorage.removeItem('knowyer_data');
    }
};

// ============ Time & Weather ============
const TimeWeather = {
    weatherIcons: {
        'Clear': '☀️', 'Sunny': '☀️', 'Partly cloudy': '⛅', 'Cloudy': '☁️',
        'Overcast': '☁️', 'Mist': '🌫️', 'Fog': '🌫️', 'Rain': '🌧️',
        'Light rain': '🌦️', 'Heavy rain': '🌧️', 'Snow': '❄️', 'Thunderstorm': '⛈️',
        'default': '🌤️'
    },

    init() {
        this.updateTime();
        this.updateWeather();
        setInterval(() => this.updateTime(), 1000);
        setInterval(() => this.updateWeather(), 10 * 60 * 1000);
    },

    updateTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeStr = `${hours}:${minutes}`;
        const dateStr = `${now.getFullYear()}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}`;
        const dayNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        const dayStr = dayNames[now.getDay()];
        
        const timeEl = document.getElementById('current-time');
        const dateEl = document.getElementById('current-date');
        const yearEl = document.getElementById('current-year');
        
        if (timeEl) timeEl.textContent = timeStr;
        if (dateEl) dateEl.textContent = `${dateStr} ${dayStr}`;
        if (yearEl) yearEl.textContent = now.getFullYear();
    },

    updateWeather() {
        fetch('https://wttr.in/Ya%27an?format=j1')
            .then(res => res.json())
            .then(data => {
                const current = data.current_condition[0];
                const temp = current.temp_C + '°';
                const weather = current.weatherDesc[0].value;
                const icon = this.weatherIcons[weather] || this.weatherIcons['default'];
                
                const tempEl = document.getElementById('weather-temp');
                const iconEl = document.getElementById('weather-icon');
                
                if (tempEl) tempEl.textContent = temp;
                if (iconEl) iconEl.textContent = icon;
            })
            .catch(() => {
                const tempEl = document.getElementById('weather-temp');
                if (tempEl) tempEl.textContent = '--°';
            });
    },

    getRandomMaxim() {
        const maxims = DataStore.get('maxims') || DataStore.defaultData.maxims;
        return maxims[Math.floor(Math.random() * maxims.length)];
    }
};

// ============ Initialize ============
document.addEventListener('DOMContentLoaded', () => {
    TimeWeather.init();
    
    // Render maxim
    const maxim = TimeWeather.getRandomMaxim();
    const maximEl = document.getElementById('daily-maxim');
    const authorEl = document.getElementById('maxim-author');
    if (maximEl) maximEl.textContent = maxim.text;
    if (authorEl) authorEl.textContent = '—— ' + maxim.author;
});

// ============ Expose DataStore globally for admin ============
window.DataStore = DataStore;

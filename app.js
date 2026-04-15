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

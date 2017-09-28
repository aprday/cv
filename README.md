# cv

简易简历生成器，由json简单配置

### 预览

<http://www.songxuemeng.com/cv/>

<http://www.songxuemeng.com/cv/sider>

### 启动方式

```
    npm i
    npm run build
```

### config.json

```
    {
        "name": "孙晓旭",
        "education": "吉林大学 · 软件工程",
        "email": "sunxiaoxujlu@163.com",
        "mobile": "18844195530",
        "website": "http://www.yusha.com",
        "sider": {
            "education": {
                "date": "Sep 2012 - Jul 2016",
                "university": "吉林大学",
                "major": "软件工程"
            },
            "links": {
                "github": {
                    "name": "aprday",
                    "link": "https://github.com/aprday"
                },
                "linkedIn": {
                    "name": "sunxiaoxu",
                    "link": "https://github.com/aprday"
                },
                "weixin": {
                    "name": "tingjiantashuo",
                    "link": "https://github.com/aprday"
                },
                "QQ": {
                    "name": "2819677885",
                    "link": "https://github.com/aprday"
                }
            },
            "programings": [
                "java",
                "shell",
                "JavaScript",
                "C",
                "C++",
                "CSS",
                "PHP",
                "iOS",
                "Android",
                "MySQL"
            ]
        },
        "experiences": [{
            "title": "百度",
            "descript": "金融数据智能部 + FE",
            "date": "Jul 2016 – Present",
            "location": "中国, 北京",
            "content": [
                "承担前端项目的构建，抽取项目中公共部分，基于Vue或React构建公用组件使得搭建页面时间减少了60%",
                "基于webpack提出了一套前端构建工具lucii，构建时间由原来的2分钟减少到1分钟以下",
                "结合fis3的编译特性编写了Vue文件的解析工具fis3-parser-vue-loader，使得Vue单 文件组件可以在组内顺利的推广"
            ]
        }],
        "internships": [{
            "title": "百度",
            "descript": "糯米B端研发部 + FE 实习生",
            "date": "Oct 2015 – Jun 2015",
            "location": "中国, 北京",
            "content": [
                "负责百度糯米B端 PC/移动端 部分功能开发",
                "学习和 RD/PM/QA 沟通完成界面/接口设计，BUG跟踪与修复",
                "学习使用 fis3/Jello 等前端构建工具完成开发工作"
            ]
        }, {
            "title": "SAP LABS OF CHINA",
            "descript": "SAP Anywhere Guideline + FE Intern",
            "date": "Aug 2015 – Oct 2015",
            "location": "中国, 上海",
            "content": [
                "参与组内 OCC-Frontend-Guideline 框架的设计研发",
                "使用Jquery构建 SAP Anywhere 项目部分模块"
            ]
        }],
        "projects": [{
            "title": "LUCII",
            "descript": "https://github.com/lucii",
            "content": "一套对Webpack2打包过程的轻封装,集成了调试,打包,代理,mock数据和发布代码功能，由JSON的形式配置Api,可以简单快捷的使用lucii构建项目"
        },{
            "title": "REACT-EDITOR",
            "descript": "http://www.yusha.com/react-editor",
            "content": "基于DraftJs打造的编辑器"
        },{
            "title": "MY DIARY",
            "descript": " http://www.yusha.com/diary",
            "content": "一个在线日记生成系统,修改自github上的一个开源项目,改变了原有的Hexo模式的Markdown预编译,动态加载Markdown并翻译成html文本,使用者只需编写上传Markdown文件就可以在线查看"
        }],
        "skills": [
            "熟悉已标准化的HTML5/CSS3新特性，熟悉ECMAScript（JavaScript）面向对象，能完成桌面 / 移动端前端组件与 AJAX 数据交互的开发",
            "熟悉jQuery/AngularJs/VueJs的使用,阅读过部分源代码,了解过React的简单使用,使用过 Less 等预处理工具",
            "了解后端编程,熟悉J2EE/PHP,有使用Servelet/Struts/Thinkphp的后台框架进行开发的经验",
            "熟练使用 MySQL/Oracle数据库，掌握基本Sql语句，了解Nosql数 据库, Linux使用经验，熟悉常用命令与配置，编写简单的 Shell 脚本"
        ]
    }
```

### config 路径配置

在package.json加入

```
    "configPath": "./config.json",
    "htmlTitle": "简历"
```

在dist目录下查阅生成文件

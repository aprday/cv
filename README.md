# cv

简易简历生成器，由json简单配置

### 预览

### 启动方式

```
    npm i
    npm run build
```

### config.json

```
    {
        "name": "xxxxx",
        "education": "xxxxx · xxxxx",
        "email": "sunxiaoxujlu@163.com",
        "mobile": "18844195530",
        "website": "http://www.yusha.com",
        "sider": {
            "education": {
                "date": "Sep 2012 - Jul 2016",
                "university": "xxxxx",
                "major": "xxxxx"
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
            "title": "xxxxx",
            "descript": "xxxxx部 + FE",
            "date": "Jul 2016 – Present",
            "location": "中国, 北京",
            "content": [
                "承担xxxxx",
                "基于xxxxx",
                "结合xxxxx"
            ]
        }],
        "internships": [{
            "title": "xxxxx",
            "descript": "xxxxx部 + FE 实习生",
            "date": "Oct 2015 – Jun 2015",
            "location": "中国, 北京",
            "content": [
                "负责xxxxx开发",
                "学习xxxxx",
                "学习xxxxx"
            ]
        }, {
            "title": "SAP LABS OF CHINA",
            "descript": "SAP Anywhere Guideline + FE Intern",
            "date": "Aug 2015 – Oct 2015",
            "location": "中国, 上海",
            "content": [
                "参与组内 xxxxx",
                "使用xxxxx"
            ]
        }],
        "projects": [{
            "title": "xxxxx",
            "descript": "xxxxx",
            "content": "xxxxx"
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

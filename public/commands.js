const commands = [
  {
      "command": "@白面鸮 菜单",
      "description": "展示此菜单",
      "subCommands": []
  },
  {
      "command": "签到",
      "description": "每日签到，同时自动抽取塔罗牌&运势牌",
      "subCommands": [
          {
              "command": "查看原图/获取原图",
              "description": "返回当天签到的底图；第二次调用开始返回旋转90°的图片（获取原图无反应的可以多试一次）"
          },
          {
              "command": "查看/获取[YYYY.MM.DD]原图（开发中）",
              "description": "查看某日的原图，YYYY为年份，MM为月份，DD为日期。如：查看2024.12.31原图"
          },
          {
              "command": "签到主题/查看签到主题",
              "description": "查看拥有的签到主题模板"
          },
          {
              "command": "设置签到主题",
              "description": "指定签到主题的id或者名称。比如：设置签到主题 孤星 → 设置为孤星主题；设置签到主题 → 设置为默认主题"
          },
          {
              "command": "月历/年历（开发中）",
              "description": "查看月为维度的年历"
          }
      ]
  },
  {
      "command": "塔罗牌",
      "description": "抽取一张塔罗牌。当日首次抽取会被记录为今日塔罗牌。",
      "subCommands": [
          {
              "command": "今日塔罗/今日塔罗牌",
              "description": "查看当日的塔罗牌（当日固定）"
          }
      ]
  },
  {
      "command": "抽签/运势/[主题]运势",
      "description": "抽取运势。每天只能抽取一次。",
      "subCommands": [
          {
              "command": "抽签主题（开发中）",
              "description": "展示所有可用的主题&主题别名"
          }
      ]
  },
  {
      "command": "干员xxx",
      "description": "查看截止2024年7月9日的干员信息（升级材料、模组），后续废弃。",
      "subCommands": []
  },
  {
      "command": "今日干员",
      "description": "查看今天生日的干员（数据截止2024年7月9日）",
      "subCommands": []
  },
  {
      "command": "随机系列",
      "description": "随机挑选一些图片",
      "subCommands": [
          {
              "command": "随机狐狐",
              "description": ""
          },
          {
              "command": "随机猫猫",
              "description": ""
          },
          {
              "command": "随机二哈",
              "description": ""
          },
          {
              "command": "随机干员",
              "description": ""
          }
      ]
  },
  {
      "command": "漂流瓶",
      "description": "跨群meme通信",
      "subCommands": [
          {
              "command": "捡漂流瓶",
              "description": ""
          },
          {
              "command": "扔漂流瓶 [文字|图片]",
              "description": "支持图片和文字"
          },
          {
              "command": "评论漂流瓶 id [文字]",
              "description": ""
          },
          {
              "command": "点赞漂流瓶 id",
              "description": "点赞指定漂流瓶；如果上一条消息是捡漂流瓶，可简化为“+”来点赞漂流瓶"
          },
          {
              "command": "查看漂流瓶 id",
              "description": "可查看自己扔出的漂流瓶"
          },
          {
              "command": "我的漂流瓶",
              "description": "查看扔过的漂流瓶"
          },
          {
              "command": "删除漂流瓶 id",
              "description": "删除自己的漂流瓶"
          },
          {
              "command": "举报漂流瓶 id",
              "description": "超过 5 次举报漂流瓶将被下架"
          }
      ]
  },
  {
      "command": "[地点]天气",
      "description": "如：禅城天气、上海天气",
      "subCommands": []
  },
  {
      "command": "早上/中午/晚上/宵夜吃什么",
      "description": "解决你的选择困难症",
      "subCommands": []
  },
  {
      "command": "去哪吃",
      "description": "大学城非法测绘工程师用餐指南",
      "subCommands": []
  },
  {
      "command": "ottohzys",
      "description": "召唤大电老师的法术。如：ottohzys 啊米浴说的道理",
      "subCommands": []
  },
  {
      "command": "词云",
      "description": "查看词云帮助",
      "subCommands": [
          {
              "command": "今日/昨日/本周/本月/年度词云",
              "description": ""
          },
          {
              "command": "设置词云形状",
              "description": "建议使用白底图片，分辨率越高，边缘越清晰，但速度越慢。"
          }
      ]
  },
  {
      "command": "摸鱼",
      "description": "查询摸鱼日报",
      "subCommands": []
  },
  {
      "command": "邀请加群",
      "description": "提供了 ①命令加群②邮件加群 两种方式",
      "subCommands": [
        {
            "command": "@白面鸮 邀请加群 群id [开启视频解析=1] [方舟订阅=0] [每日干员=0]",
            "description": "发起审核邀请白咕咕加群。默认参数：视频解析 开，方舟订阅 关，每日干员推送 关。如：@白咕咕 邀请加群 114514 false true true → 群号114514，关闭视频解析，打开方舟订阅和每日干员推送。",        },
        {
            "command": "@白面鸮 邮件",
            "description": "返回邮件，需手动发邮件到 ptilopsis.rhineng@gmail.com（以此命令返回的邮箱为准），标题为“咕咕加群”，内容格式可参考 [开启视频解析=1] [方舟订阅=0] [每日干员=0]。(有其他需求可自行添加)"
        }
    ]  },
  {
      "command": "@白面鸮 查看公告",
      "description": "查看公告和更新日志",
      "subCommands": []
  },
  {
      "command": "@白面鸮 霜叶读报 [文字]（测试中）",
      "description": "将文字转为语音，目前模型为霜叶，默认中文。",
      "subCommands": []
  },
  {
      "command": "@白面鸮 咕咕反馈 [文字]（开发中）",
      "description": "反馈与白咕咕相关的内容，将作为后续开发迭代意见参考。",
      "subCommands": []
  }
];

const cautions = [
  {
      "caution": "白咕咕（白面鸮）旨在丰富群聊形式，属于公益资源，且用且珍惜。",
      "children": []
  },
  {
      "caution": "漂流瓶旨在分享美图与沙雕图。请不要往漂流瓶内投放政治、宗教、恐吓、R18/R18G等敏感内容，违规投送将会黑名单处理（视情况按个人/群组等级处理）。如发现不适内容，请善用“举报漂流瓶+id”并通知 @白面鸮 或 @二月霜 处理。",
      "children": []
  },
  {
      "caution": "邀请功能",
      "children": [
          "邀请功能仅会发送审核邀请，请耐心等待一定时间。考虑性能和运营人手，限制每月加新群的额度为 6 个，每双周放出 3 个，视排队情况扩容。",
          "邀请人需要是群主或管理员，旨在邀请人需要有对 BOT 的控制权。",
          "邀请时群聊人数超过 100 人将另立方案。",
          "以下群聊优先处理：明日方舟、高校、20<人数<100。",
          "如果需要将 BOT 移出群组，或者群组状态异常（包括冻结、解散等），请留言原因。无理由清退是浪费公益资源的行为，违规将不再接受相关人员/群组的邀请。 "
      ]
  },
  {
      "caution": "动态订阅",
      "children": [
          "动态订阅属于高消耗资源，默认关闭，如需开启，邀请时第二参数请携带“true”。如有其他订阅需求，请在邀请群聊留言。",
          "默认推送源：明日方舟、终末地、来自星辰的 B 站动态、明日方舟游戏内公告和资源更新。",
          "动态推送仅为方便讨论，不能保证准时推送，也不能 100% 保证推送。参考：2024 年度推送成功率 98%（3881/3960）。"
      ]
  },
  {
      "caution": "功能调用请适度，避免刷屏干扰正常对话。同时，邀请人需保证群聊氛围良好，避免功能调用造成的严重刷屏。",
      "children": []
  },
  {
      "caution": "抽签、塔罗牌等结果和解释仅供娱乐，相信科学，切忌迷信。",
      "children": []
  }
];

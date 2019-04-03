import '@babel/polyfill';
import { prisma } from '../generated/prisma-client'

async function addActivityTypes() {
    try {
      const activityTypes = [
        {
          "first": "文化",
          "second": "读书会"
        },
        {
          "first": "文化",
          "second": "技术沙龙"
        },
        {
          "first": "文化",
          "second": "演讲"
        },
        {
          "first": "文化",
          "second": "其他文化活动"
        },
        {
          "first": "体育",
          "second": "篮球"
        },
        {
          "first": "体育",
          "second": "足球"
        },
        {
          "first": "体育",
          "second": "武术"
        },
        {
          "first": "体育",
          "second": "自行车"
        },
        {
          "first": "体育",
          "second": "游泳"
        },
        {
          "first": "体育",
          "second": "登山"
        },
        {
          "first": "体育",
          "second": "跳舞"
        },
        {
          "first": "体育",
          "second": "其他体育活动"
        },
        {
          "first": "休闲",
          "second": "旅游"
        },
        {
          "first": "休闲",
          "second": "音乐"
        },
        {
          "first": "休闲",
          "second": "书法"
        },
        {
          "first": "休闲",
          "second": "美术"
        },
        {
          "first": "休闲",
          "second": "散步"
        },
        {
          "first": "休闲",
          "second": "钓鱼"
        },
        {
          "first": "休闲",
          "second": "其他休闲活动"
        },
        {
          "first": "公益",
          "second": "助学"
        },
        {
          "first": "公益",
          "second": "养老"
        },
        {
          "first": "公益",
          "second": "环境"
        },
        {
          "first": "公益",
          "second": "义诊"
        },
        {
          "first": "公益",
          "second": "其他公益活动"
        },
        {
          "first": "体育",
          "second": "排球"
        },
        {
          "first": "体育",
          "second": "高尔夫球"
        },
        {
          "first": "体育",
          "second": "乒乓球"
        }
      ]
      for (const activityType of activityTypes) {
        try {
          const newActivityType = await prisma
            .createActivityType({
              first: activityType.first,
              second: activityType.second,
            })
          console.log(newActivityType);
        } catch (err) {
          console.log(err)
          continue
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  addActivityTypes()
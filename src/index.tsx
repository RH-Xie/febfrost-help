import { Context, h, Schema } from 'koishi'
import { resolve } from 'path';
import { } from "koishi-plugin-puppeteer"

export const name = 'menu'

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  async function getHelpMenu() {
    const page = await ctx.puppeteer.page();
    await page.setViewport({ width: 1600, height: 600, deviceScaleFactor: 1.25 });
    await page.goto(`file:///${resolve(__dirname, `../public/help.html`)}`);
    await page.waitForSelector("html");
    const element = await page.$("html");
    return {
      element: <>
        {
          h.image(await element.screenshot({
            encoding: "binary"
          }), "image/png")
        }
      </>, page
    }
  }

  async function getNoticeBoard() {
    const page = await ctx.puppeteer.page();
    await page.setViewport({ width: 500, height: 1000, deviceScaleFactor: 1.25 });
    await page.goto(`file:///${resolve(__dirname, `../public/notice.html`)}`);
    await page.waitForSelector("html");
    const element = await page.$("html");
    return {
      element: <>
        {
          h.image(await element.screenshot({
            encoding: "binary"
          }), "image/png")
        }
      </>, page
    }
  }


  ctx.command("菜单").action(async ({ session }) => {
    const { element, page } = await getHelpMenu()
    const resp = await session.send(element)
    await page.close() // Puppeteer 不会主动结束渲染进程，需要手动关闭
  })

  ctx.command("公告").action(async ({ session }) => {
    const { element, page } = await getNoticeBoard()
    const resp = await session.send(element)
    await page.close() // Puppeteer 不会主动结束渲染进程，需要手动关闭
  })


  ctx.command("发送公告 <groups:text>")
    .usage("发送公告 群号1 群号2...")
    .example("发送公告 123456 654321")
    .action(async ({ session }, groupsString) => {

      const broadcasters = ["Alice", "1299089125", "1748421646", "2862145720"]
      if (!broadcasters.includes(session.userId)) return
      const groups = groupsString.split(" ")
      // 参数校验
      if (!groups || groups.length === 0) {
        return "请至少提供一个群号参数，多个群号用空格分隔"
      }

      // 清理可能存在的空白字符
      const targetGroups = groups.map(g => g.toString().trim())

      try {
        const { element: noticeEl, page: noticePage } = await getNoticeBoard()
        const { element: helpEl, page: helpPage } = await getHelpMenu()

        // 遍历所有机器人实例
        // for (const bot of ctx.bots) {
        // 遍历目标群组
        for (const groupId of targetGroups) {
          try {
            console.log("groupId", groupId)
            console.log("targetGroups", targetGroups)
            // 验证群号格式
            if (!/^\d+$/.test(groupId)) {
              session.send(`[格式错误] ${groupId} 不是有效的群号`)
              continue
            }

            // 发送消息
            await session.bot.sendMessage(groupId, helpEl)
            await session.bot.sendMessage(groupId, noticeEl)
            session.send(`已向群 ${groupId} 发送测试消息`)
          } catch (error) {
            session.send(`[错误] 群 ${groupId} 消息发送失败: ${error.message}`)
          }
        }
        await helpPage.close()
        await noticePage.close()

        return '所有消息已尝试发送'
      } catch (error) {
        return `命令执行失败: ${error.message}`
      }
    })
}

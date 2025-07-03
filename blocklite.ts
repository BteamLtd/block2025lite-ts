/**
 * 基岩科技测试
 */
//% weight=90 color=#2196F3 icon="\uf544"
namespace 基岩科技第五层第一房间 {

    function scoreboard_init() {
        // 先尝试创建一个叫f5r1_ans的计分板
        player.execute(`scoreboard objectives add f5r1_ans dummy "答案提交板"`)
    }


    //% block="提交 香蕉 的数量为 %value"
    //% group="世界控制"
    //% weight=96
    export function subAnsOnF5R1_banana(value: number): void {
        scoreboard_init()
        // 在聊天栏显示
        player.say(`提交的信息: 香蕉 = ${value}`)

        // 先尝试创建一个叫f5r1_ans的计分板
        player.execute(`scoreboard objectives add f5r1_ans dummy "答案提交板"`)

        // 然后将vName作为虚拟玩家的名字，设置分数value
        player.execute(`scoreboard players set "香蕉" f5r1_ans ${value}`)

        // 结束时将这个计分板的__status__名字的虚拟玩家分数设为0作为标志位
        player.execute(`scoreboard players set __status__ f5r1_ans 0`)

        // 添加视觉效果
        mobs.spawnParticle(VILLAGER_HAPPY, pos(0, 1, 0))
    }


    //% block="提交 苹果 的数量为 %value"
    //% group="世界控制"
    //% weight=96
    export function subAnsOnF5R1_apple(value: number): void {
        scoreboard_init()
        // 在聊天栏显示
        player.say(`提交的信息: 苹果 = ${value}`)

        // 先尝试创建一个叫f5r1_ans的计分板
        player.execute(`scoreboard objectives add f5r1_ans dummy "答案提交板"`)

        // 然后将vName作为虚拟玩家的名字，设置分数value
        player.execute(`scoreboard players set "苹果" f5r1_ans ${value}`)

        // 结束时将这个计分板的__status__名字的虚拟玩家分数设为0作为标志位
        player.execute(`scoreboard players set __status__ f5r1_ans 0`)

        // 添加视觉效果
        mobs.spawnParticle(VILLAGER_HAPPY, pos(0, 1, 0))
    }


}
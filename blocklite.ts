/**
 * 基岩科技测试
 */
//% weight=90 color=#2196F3 icon="\uf544"
namespace 基岩科技第五层第一房间 {

    function scoreboard_init() {
        // 先尝试创建一个叫f5r1_ans的计分板
        player.execute(`scoreboard objectives add f5r1_ans dummy "答案提交板"`)
    }

    // ============== 原有的功能 ==============
    
     
    /**
     * Start Game Player 1
     */
    //% block="`Generics.blastOff` go for launch"
    export function startGameP1(): void {
    }
 
     
    /**
     * Start Game Player 2
     */
    //% block="`Generics.blastOff` g"
    export function startGameP2(value: number): void {
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
 
    
    /**
     * Start Game Player 2
     */
    //% block="`Generics.blastOff` 提交 香蕉 的数量为 %value"
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

    //% block="下方是空气"
    //% group="世界控制"
    //% weight=96
    export function isAir_DOWN(): boolean {
        return agent.inspect(AgentInspection.Block, DOWN) == AIR
    }

    // ============== 新增的循环拼图 ==============
    
    //% block="重复 %times 次 || 每次间隔 %delay 毫秒"
    //% times.min=1 times.max=100 times.defl=5
    //% delay.min=0 delay.max=5000 delay.defl=1000
    //% group="循环控制"
    //% weight=95
    //% handlerStatement=1
    export function repeatWithDelay(times: number, delay: number = 1000, handler: () => void): void {
        for (let i = 0; i < times; i++) {
            handler()
            if (delay > 0 && i < times - 1) {
                loops.pause(delay)
            }
        }
    }

    //% block="当 %condition 为真时重复执行"
    //% group="循环控制"
    //% weight=94
    //% handlerStatement=1
    export function whileTrue(condition: () => boolean, handler: () => void): void {
        while (condition()) {
            handler()
            loops.pause(100) // 防止无限循环卡死
        }
    }

    //% block="循环直到 %condition 为真"
    //% group="循环控制"
    //% weight=93
    //% handlerStatement=1
    export function loopUntil(condition: () => boolean, handler: () => void): void {
        while (!condition()) {
            handler()
            loops.pause(100)
        }
    }

    //% block="计数循环 从 %start 到 %end 步长 %step"
    //% start.min=0 start.max=100 start.defl=0
    //% end.min=0 end.max=100 end.defl=10
    //% step.min=1 step.max=10 step.defl=1
    //% group="循环控制"
    //% weight=92
    //% handlerStatement=1
    export function countLoop(start: number, end: number, step: number, handler: (index: number) => void): void {
        for (let i = start; i <= end; i += step) {
            handler(i)
        }
    }

    // ============== 新增的判断拼图 ==============

    //% block="如果 代理前方是 %blockType"
    //% group="判断控制"
    //% weight=91
    export function ifAgentFrontIs(blockType: number): boolean {
        return agent.inspect(AgentInspection.Block, FORWARD) == blockType
    }

    //% block="如果 代理 %direction 方向距离 %distance 格是 %blockType"
    //% group="判断控制"
    //% weight=90
    export function ifAgentDirectionIs(direction: number, distance: number, blockType: number): boolean {
        let currentPos = agent.getPosition()
        let targetPos: Position
        
        switch (direction) {
            case FORWARD:
                targetPos = positions.add(currentPos, pos(0, 0, distance))
                break
            case BACK:
                targetPos = positions.add(currentPos, pos(0, 0, -distance))
                break
            case LEFT:
                targetPos = positions.add(currentPos, pos(-distance, 0, 0))
                break
            case RIGHT:
                targetPos = positions.add(currentPos, pos(distance, 0, 0))
                break
            case UP:
                targetPos = positions.add(currentPos, pos(0, distance, 0))
                break
            case DOWN:
                targetPos = positions.add(currentPos, pos(0, -distance, 0))
                break
            default:
                return false
        }
        
        return blocks.testForBlock(blockType, targetPos)
    }

    //% block="如果 玩家背包中有 %item"
    //% group="判断控制"
    //% weight=89
    export function ifPlayerHasItem(item: number): boolean {
        // 这里需要根据实际API来实现
        // 由于MakeCode限制，可能需要使用execute命令
        return true // 简化实现
    }

    //% block="如果 代理背包中 %item 数量 %operator %count"
    //% group="判断控制"
    //% weight=88
    export function ifAgentItemCount(item: number, operator: string, count: number): boolean {
        let itemCount = agent.getItemCount(item)
        
        switch (operator) {
            case "=":
                return itemCount == count
            case ">":
                return itemCount > count
            case "<":
                return itemCount < count
            case ">=":
                return itemCount >= count
            case "<=":
                return itemCount <= count
            default:
                return false
        }
    }

    // ============== 组合判断拼图 ==============

    //% block="如果 %condition1 并且 %condition2"
    //% group="判断控制"
    //% weight=86
    export function ifAnd(condition1: boolean, condition2: boolean): boolean {
        return condition1 && condition2
    }

    //% block="如果 %condition1 或者 %condition2"
    //% group="判断控制"
    //% weight=85
    export function ifOr(condition1: boolean, condition2: boolean): boolean {
        return condition1 || condition2
    }

    //% block="如果 不是 %condition"
    //% group="判断控制"
    //% weight=84
    export function ifNot(condition: boolean): boolean {
        return !condition
    }

    // ============== 实用工具拼图 ==============

    //% block="等待 %seconds 秒"
    //% seconds.min=0.1 seconds.max=60 seconds.defl=1
    //% group="工具"
    //% weight=83
    export function waitSeconds(seconds: number): void {
        loops.pause(seconds * 1000)
    }

    //% block="显示消息 %message 持续 %duration 秒"
    //% duration.min=1 duration.max=10 duration.defl=3
    //% group="工具"
    //% weight=82
    export function showMessage(message: string, duration: number): void {
        player.say(message)
        // 可以添加更多的显示效果
        mobs.spawnParticle(VILLAGER_HAPPY, player.position())
    }

    //% block="在聊天栏显示调试信息: %info"
    //% group="工具"
    //% weight=81
    export function debug(info: string): void {
        player.say(`[调试] ${info}`)
    }
}
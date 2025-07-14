/**
 * 基岩科技基本拼图
 */
//% block="基岩科技基本拼图" weight=90 color=#2196F3  icon=""
namespace bteam {
    /**
     * 向变量增加
     * @param variable 要更改的变量，会直接修改这个变量的值
     * @param amount 更改的幅度，正数为增加，负数为减少
     */
    //% block="将 %amount 增加到变量 $variable"
    //% amount.defl=1
    //% variable.defl="空缺方块的计数"
    //% variable.shadow="variables_get"
    //% group="变量操作"
    //% weight=95
    export function changeVariableBy(variable: any, amount: number): void {
        // 这个函数会直接修改传入的变量引用
        // 在 MakeCode 中，这个功能实际上是通过编译器处理的
        // 用户界面会显示为变量引用的形式
    }

    /**
     * 向变量赋值
     * @param variable 要更改的变量，会直接修改这个变量的值
     * @param amount 赋值的值
     */
    //% block="将 %amount 赋值给变量 $variable"
    //% amount.defl=1
    //% variable.defl="空缺方块的计数"
    //% variable.shadow="variables_get"
    //% group="变量操作"
    //% weight=95
    export function changeVariableBy_set(variable: any, amount: number): void {

    }


    //% block="等待 %seconds 秒"
    //% seconds.min=0.1 seconds.max=60 seconds.defl=1
    //% group="工具"
    //% weight=83
    export function waitSeconds(seconds: number): void {
        loops.pause(seconds * 1000)
    }

}

/**
 * 基岩科技数学基本拼图
 */
//% block="基岩科技数学基本拼图" weight=90 color=#2196F3  icon=""
namespace bteam_math {

    /**
     * 相加
     * @param a 要相加的变量
     * @param b 要相加的变量
     * 可以处理两个数字
     */
    //% block="将 %a 和 %b 相加"
    //% a.defl=1
    //% b.defl=1
    //% group="数学"
    //% weight=95
    export function add(a: number, b: number): number {
        return a + b
    }

    /**
     * 相减
     * @param a 要相减的变量
     * @param b 要相减的变量
     * 可以处理多个数字
     */
    //% block="将 %a 和 %b 相减"
    //% a.defl=1
    //% b.defl=1
    //% group="数学"
    //% weight=95
    export function sub(a: number, b: number): number {
        return a - b
    }

    /**
     * 相乘
     * @param a 要相乘的变量
     * @param b 要相乘的变量
     * 可以处理两个数字
     */
    //% block="将 %a 和 %b 相乘"
    //% a.defl=1
    //% b.defl=1
    //% group="数学"
    //% weight=95
    export function mul(a: number, b: number): number {
        return a * b
    }
    

    /**
     * 相除
     * @param a 要相除的变量
     * @param b 要相除的变量
     * 可以处理多个数字
     */
    //% block="将 %a 和 %b 相除"    
    //% a.defl=1
    //% b.defl=1
    //% group="数学"
    //% weight=95
    export function div(a: number, b: number): number {
        if (b == 0) {
            player.say("除数不能为0")
            return 0
        }
        return a / b
    }

    
    /**
     * 相加
     * @param a 要相加的变量
     * @param b 要相加的变量
     * 可以处理多个数字
     */
    //% block="将 %args 内的数字相加"
    //% args.defl=1
    //% group="数学"
    //% weight=95
    export function add_many(...args: number[]): number {
        return args.reduce((a, b) => a + b, 0)
    }

    
    /**
     * 相乘
     * @param a 要相乘的变量
     * @param b 要相乘的变量
     * 可以处理多个数字
     */
    //% block="将 %args 内的数字相乘"
    //% args.defl=1
    //% group="数学"
    //% weight=95
    export function mul_many(...args: number[]): number {
        return args.reduce((a, b) => a * b, 1)
    }


}


/**
 * 基岩科技测试
 */
//% block="基岩科技-第五层第六房间" weight=90 color=#2196F3  icon=""
namespace 基岩科技第五层第六房间 {
    //% block="提交 计算结果为 %value"
    //% group="世界控制"
    //% weight=96
    export function subAnsOnF5R6(value: number): void {
        player.say(`加入总和的数字为: ${value}`)
        player.execute(`scoreboard players set acc f5r6_ans ${value}`)
    }
}


/**
 * 基岩科技测试
 */
//% block="基岩科技-第五层第五房间" weight=90 color=#2196F3  icon=""
namespace 基岩科技第五层第五房间 {
    //% block="提交 计算结果为 %value"
    //% group="世界控制"
    //% weight=96
    export function subAnsOnF5R5(value: number): void {
        player.say(`提交的数字: ${value}`)
        player.execute(`scoreboard players set acc f5r5_ans ${value}`)
    }
}




/**
 * 基岩科技测试
 */
//% block="基岩科技-第五层第四房间" weight=90 color=#2196F3  icon=""
namespace 基岩科技第五层第四房间 {
    //% block="提交 钻石的价格为 %value"
    //% group="世界控制"
    //% weight=96
    export function subAnsOnF5R4(value: number): void {
        player.say(`提交的钻石价格: ${value}`)
        player.execute(`scoreboard players set diamond_price f5r4_ans ${value}`)
    }
}



/**
 * 基岩科技测试
 */
//% block="基岩科技-第五层第三房间" weight=90 color=#2196F3  icon=""
namespace 基岩科技第五层第三房间 {
    //% block="提交 加法 的答案为 %value"
    //% group="世界控制"
    //% weight=96
    export function subAnsOnF5R3_add(value: number): void {
        player.say(`提交的加法题目答案: ${value}`)
        player.execute(`scoreboard players set add f5r3_ans ${value}`)
    }

    
    //% block="提交 减法 的答案为 %value"
    //% group="世界控制"
    //% weight=96
    export function subAnsOnF5R3_sub(value: number): void {
        player.say(`提交的减法题目答案: ${value}`)
        player.execute(`scoreboard players set sub f5r3_ans ${value}`)
    }

    
    //% block="提交 乘法 的答案为 %value"
    //% group="世界控制"
    //% weight=96
    export function subAnsOnF5R3_mul(value: number): void {
        player.say(`提交的乘法题目答案: ${value}`)
        player.execute(`scoreboard players set mul f5r3_ans ${value}`)
    }

    
    //% block="提交 除法 的答案为 %value"
    //% group="世界控制"
    //% weight=96
    export function subAnsOnF5R3_div(value: number): void {
        player.say(`提交的除法题目答案: ${value}`)
        player.execute(`scoreboard players set div f5r3_ans ${value}`)
    }
}


/**
 * 基岩科技测试
 */
//% block="基岩科技-第五层第二房间" weight=90 color=#2196F3  icon=""
namespace 基岩科技第五层第二房间 {
    //% block="提交 第一季度射出箭数 的最终计数为 %value"
    //% group="世界控制"
    //% weight=96
    export function subAnsOnF5R2_arrow_1(value: number): void {
        player.say(`最终计数: 第一季度射出箭数 = ${value}`)

        player.execute(`scoreboard players set ArrowCount_1 f5r2_ans ${value}`)
    }


    //% block="提交 第二季度射出箭数 的最终计数为 %value"
    //% group="世界控制"
    //% weight=96
    export function subAnsOnF5R2_arrow_2(value: number): void {
        player.say(`最终计数: 第二季度射出箭数 = ${value}`)

        player.execute(`scoreboard players set ArrowCount_2 f5r2_ans ${value}`)
    }


    //% block="提交 第三季度射出箭数 的最终计数为 %value"
    //% group="世界控制"
    //% weight=96
    export function subAnsOnF5R2_arrow_3(value: number): void {
        player.say(`最终计数: 第三季度射出箭数 = ${value}`)

        player.execute(`scoreboard players set ArrowCount_3 f5r2_ans ${value}`)
    }


    //% block="提交 三个季度射出总箭数 的最终计数为 %value"
    //% group="世界控制"
    //% weight=96
    export function subAnsOnF5R2_arrow_sum(value: number): void {
        player.say(`最终计数: 第三季度射出箭数 = ${value}`)

        player.execute(`scoreboard players set ArrowSum f5r2_ans ${value}`)
    }


}


/**
 * 基岩科技测试
 */
//% block="基岩科技-第五层第一房间" weight=90 color=#2196F3  icon=""
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
    //% block="`Generics.mini` 提交 香蕉 的数量为 %value"
    //% group="世界控制"
    //% weight=106
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


    //% block="提交 黑色方块 的最终计数为 %value"
    //% group="世界控制"
    //% weight=96
    export function subAnsOnF5R1_black_wool(value: number): void {
        scoreboard_init()
        // 在聊天栏显示
        player.say(`最终计数: 黑色方块 = ${value}`)

        player.execute(`scoreboard players set black_wool f5r1_ans ${value}`)
    }


    //% block="提交 空缺方块 的最终计数为 %value"
    //% group="世界控制"
    //% weight=96
    export function subAnsOnF5R1_air_wool(value: number): void {
        scoreboard_init()
        // 在聊天栏显示
        player.say(`最终计数: 空缺方块 = ${value}`)

        player.execute(`scoreboard players set air_wool f5r1_ans ${value}`)
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


    //% block="下方是空气方块"
    //% group="世界控制"
    //% weight=96
    export function isAirDOWN(): boolean {
        return agent.inspect(AgentInspection.Block, DOWN) == AIR
    }


    //% block="如果条件 %condition 为真，则执行"
    //% group="判断控制"
    //% weight=94
    //% handlerStatement=1
    export function newIf(condition: (() => boolean) | boolean, handler: () => void): void {
        if (typeof condition === 'boolean' ? condition : condition()) {
            handler()
        }
    }


    /**
     * 向变量增加
     * @param variable 要更改的变量，会直接修改这个变量的值
     * @param amount 更改的幅度，正数为增加，负数为减少
     */
    //% block="将 %amount 增加到变量 $variable"
    //% amount.defl=1
    //% variable.defl="空缺方块的计数"
    //% variable.shadow="variables_get"
    //% group="变量操作"
    //% weight=95
    export function changeVariableBy(variable: any, amount: number): void {
        // 这个函数会直接修改传入的变量引用
        // 在 MakeCode 中，这个功能实际上是通过编译器处理的
        // 用户界面会显示为变量引用的形式
        variable += amount
    }



    //% block="如果 代理前方是 %blockType"
    //% group="判断控制"
    //% weight=91
    export function ifAgentFrontIs(blockType: number): boolean {
        return agent.inspect(AgentInspection.Block, FORWARD) == blockType
    }


    //% block="在聊天栏显示调试信息: %info"
    //% group="工具"
    //% weight=81
    export function debug(info: string): void {
        player.say(`[调试] ${info}`)
    }
}
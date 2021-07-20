"use strict";
var variables = {};

var lunr = require("lunr")
require("lunr-languages/lunr.stemmer.support")(lunr)
require('lunr-languages/lunr.multi')(lunr)
require("lunr-languages/lunr.zh")(lunr)


var gameName = function () {
    return '【Demo】'
}

var gameType = function () {
    return 'Dice:5e'
}
var prefixs = function () {
    //[mainMSG[0]的prefixs,mainMSG[1]的prefixs,   <---這裡是一對  
    //mainMSG[0]的prefixs,mainMSG[1]的prefixs  ]  <---這裡是一對
    //如前面是 /^1$/ig, 後面是/^1D100$/ig, 即 prefixs 變成 1 1D100 
    ///^(?=.*he)(?!.*da).*$/ig
    return [{
        first: /^.5e$/i,
        second: null
    }]
}
var getHelpMessage = async function () {
    return `【示範】
只是一個Demo的第一行
只是一個Demo末行`
}
var initialize = function () {
    return variables;
}

//https://character-service.dndbeyond.com/character/v3/character/{characterId}
//https://github.com/hazmole/TheGiddyLimit.github.io
//http://www.dnd5eapi.co/
//http://5etools.wayneh.tw/optionalfeatures.html#%e6%b8%85%e6%b5%81%e9%9e%ad_phb
var rollDiceCommand = async function ({
    inputStr,
    mainMsg,

}) {
    let rply = {
        default: 'on',
        type: 'text',
        text: ''
    };
    switch (true) {
        case /^help$/i.test(mainMsg[1]) || !mainMsg[1]:
            rply.text = await this.getHelpMessage();
            rply.quotes = true;
            return rply;
        case /^\S+$/i.test(mainMsg[1]): {

            let results = [];
            idx.search(`*${inputStr.replace(/^\s*.5e\s*/, '')}*`).forEach(function (result) {
                results.push(result.ref)
            })
            //
            switch (true) {
                case value:

                    break;

                default:
                    break;
            }
            console.log(results)
            rply.text = results;
            return rply;
        }
        default:
            break;
    }
}


module.exports = {
    rollDiceCommand: rollDiceCommand,
    initialize: initialize,
    getHelpMessage: getHelpMessage,
    prefixs: prefixs,
    gameType: gameType,
    gameName: gameName
};


const spell = [
    {
        "name": "酸液濺爆",
        "ENG_name": "Acid Splash",
        "level": 0,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你投出一團酸液泡泡。選擇射程內你所能看見的一個生物，或選擇射程內兩個你能看見且彼此相距5呎以內的生物。目標必須成功通過一次敏捷豁免，否則受到{@dice 1d6}酸蝕傷害。",
            "此法術的傷害將在你的等級升至5級時增加至{@dice 2d6}，11級時{@dice 3d6}，17級時{@dice 4d6}。"
        ],
        "page": 211,
        "damageInflict": [
            "acid"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "scalingEffects": true,
        "areaTags": [
            "ST",
            "MT"
        ],
        "backgrounds": [
            {
                "name": "Simic Scientist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "援助術",
        "ENG_name": "Aid",
        "level": 2,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一小條白布"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 8
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Protection (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Solidarity (PSA)",
                        "source": "PSA"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你的法術增強了你隊友的堅強和決意。選擇射程內最多三個生物。在法術持續期間，每個目標的最大和當前生命值都各增加5點。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，目標的生命值就可以額外再增加5點。"
                ]
            }
        ],
        "page": 211,
        "areaTags": [
            "MT"
        ],
        "backgrounds": [
            {
                "name": "Boros Legionnaire",
                "source": "GGR"
            },
            {
                "name": "Selesnya Initiate",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "警報術",
        "ENG_name": "Alarm",
        "level": 1,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一個小鈴鐺和一小段銀線"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 8
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Ranger",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "你設置一個警報以對付不速之客。選擇射程內的一扇門、一扇窗、或是不超過20呎邊長立方體的區域。直到法術結束之前，每當體型為微型或更大的生物碰觸或進入被守護的區域，警報都會警告你。當你施放此法術時，你可以決定哪些生物不會觸發警報。你也決定該警報是精神警報的還是聲音警報。",
            "若你距離守護區域1哩內，精神警報會透過在你的意識中發出的尖銳聲響來警告你。若你正在沉睡，這個聲響將會把你叫醒。",
            "聲音警報會在60呎範圍內製造出搖鈴的聲響，持續10秒鐘。"
        ],
        "page": 211,
        "areaTags": [
            "C"
        ]
    },
    {
        "name": "變造自身",
        "ENG_name": "Alter Self",
        "level": 2,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Horizon Walker (UA)",
                        "source": "UARangerAndRogue"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Horizon Walker (UA)",
                        "source": "UARangerAndRogue"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你變換成一個不同的型態。當你施放此法術時，選擇以下其中一個選項，該效果將在法術持續期間持續存在。在此法術持續期間內，你可以使用一個動作結束該選項的效果，並得到另一個選項的好處。",
            {
                "type": "entries",
                "name": "水中適應",
                "entries": [
                    "你使你的身體適應水中環境，長出鰓以及手指間的蹼。你可以在水下呼吸，且獲得等同於你步行速度的游泳速度。"
                ]
            },
            {
                "type": "entries",
                "name": "改變外貌",
                "entries": [
                    "你改變了自己的外貌。你決定自己的外觀，包括你的身高、體重、面容細節、聲音、髮長、膚色、以及（可能有的）顯著特徵。你可以讓自己看起來像是其他種族的一員，但你的角色數值並不會因此改變。你也不能變成與你有著不同體型大小讀生物，且你的基本身體輪廓保持原樣；舉例來說，如果你是兩足生物，則你不能使用此法術變為四足生物。在法術持續期間內的任何時候，你可以使用一個動作以這個方法再次改變外貌。"
                ]
            },
            {
                "type": "entries",
                "name": "天生武器",
                "entries": [
                    "你長出利爪、獠牙、棘刺、角、或其他你所選擇的一種天生武器。你的徒手打擊將根據你所選的天生武器造成{@dice 1d6}鈍擊、穿刺、或劈砍傷害，且你熟練於你的徒手打擊。最後，該天生武器為魔法武器，且你在使用它進行攻擊時的攻擊檢定和傷害骰上具有+1加值。"
                ]
            }
        ],
        "page": 211,
        "damageInflict": [
            "bludgeoning",
            "piercing",
            "slashing"
        ],
        "races": [
            {
                "name": "Tiefling (Abyssal)",
                "source": "UAThatOldBlackMagic",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "backgrounds": [
            {
                "name": "Simic Scientist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "化獸為友",
        "ENG_name": "Animal Friendship",
        "level": 1,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "少量食物"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 24
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Nature",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術讓你使一頭野獸相信你無意傷害它。選擇射程內你所能看見的一頭野獸。它必須要能看見和聽見你。如果該野獸的智力為4或更高，則此法術失敗。除此之外，該野獸必須成功通過一次睿知豁免，否則在法術持續時間內被你{@condition 魅惑}。如果你或你的其中一個同伴傷害該目標，則此法術結束。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以再額外影響一頭野獸作為目標。"
                ]
            }
        ],
        "page": 212,
        "savingThrow": [
            "wisdom"
        ],
        "races": [
            {
                "name": "Yuan-ti Pureblood",
                "source": "VGM"
            }
        ],
        "conditionInflict": [
            "charmed"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Selesnya Initiate",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "動物信使",
        "ENG_name": "Animal Messenger",
        "level": 2,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "少量食物"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 24
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "透過此法術，你用一隻動物來為你傳遞訊息。選擇一個射程內你所能看見的微型野獸，像是松鼠、藍松鴉、或蝙蝠。你指定一個曾造訪過的地點以及一個符合籠統描述的接收者，像是「一個穿著城鎮守衛制服的男人或女人」或「一個帶著斑點帽的紅髮矮人」。你同時說出一句最多二十五個字的訊息。目標野獸將在法術持續期間前往指定的地點，會飛的信使將以每24小時50哩的速度前進、其他動物則為25哩。",
            "當信使抵達目的地，它將模仿你的聲音，把訊息傳遞給你所描述的生物。該信使只會對符合你所給描述的生物開口。若該信使在法術結束之前尚未抵達牠的目的地，則訊息將會遺失，且該野獸會回到你施放此法術的位置。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，法術的持續時間就再增加48小時。"
                ]
            }
        ],
        "page": 212,
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Selesnya Initiate",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "動物化形",
        "ENG_name": "Animal Shapes",
        "level": 8,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 24
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你的魔法將其它生物轉變成野獸。選擇射程內任意個你所能看見的自願生物。你將每個目標轉變成挑戰等級為4或更低，體型為大型或更小的野獸。在後續的回合中，你可以使用你的動作以將受影響的生物變回它們原本的型態。",
            "每個目標的轉變都將在法術持續期間內持續生效，或直到目標的生命值歸零或死亡。你可以為每個目標各自選擇不同的型態。目標的遊戲數據將被所選野獸的數據資料給取代，但目標保留它的陣營、智力、睿知、和魅力值。目標取用它新型態的生命值，且當它回復它原本的型態時，該生物將取回它轉變之前的生命值。若它是因為生命值歸零而回復，則任何溢出傷害都將被帶到它原本的型態，扣減它原本的生命值。只要這個溢出傷害沒有讓該生物原本型態的生命值歸零，它就不會被擊倒{@condition 昏迷}。該生物被限制只能進行它新型態天生所能進行的動作，且它無法說話、施放法術、或採取任何其他需要雙手或語言的動作。",
            "目標的裝備將被融入新形態之中。目標無法啟動、使用、揮舞、或透過其他方式來從它的裝備獲得好處。"
        ],
        "page": 212,
        "areaTags": [
            "MT"
        ]
    },
    {
        "name": "活化死屍",
        "ENG_name": "Animate Dead",
        "level": 3,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 10
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一滴血、一塊肉、以及一撮骨灰"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Death",
                        "source": "DMG"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Oathbreaker",
                        "source": "DMG"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術創造出一個不死生物僕從。選擇射程內一個中型或小型類人生物的骨骸或屍體。你的法術將汙穢的仿製生命能量注入目標，使它做為不死生物復活。若你選擇骨骸，則目標變成一個{@creature 骷髏}；若你選擇屍體，則目標變成一個{@creature 殭屍}（DM掌控這些生物的遊戲數據）。",
            "在你的每個回合，你可以使用一個附贈動作以心靈命令任何你透過此法術創造，且距離你60呎內的生物（如果你控制了複數生物，你可以同時命令他們部分或全部，對它們下達相同的命令）。你決定該生物在它的下個回合間將採取的動作以及移動的位置，或者你可以下達一個籠統的命令，例如守衛一個特定的房間或走廊。若你沒有下達命令，則該生物只會在面對敵對生物時採取自我防衛。一旦接獲指令，該生物將會持續遵從該指令直到它的任務被完成。",
            "該生物處於你的控制長達24小時，在這之後它將停止服從任何你給予的命令。若要再延續24小時對該生物的控制，則你必須在當前24小時的時段結束前再次對該生施放此法術。以這個用法使用此法術將會延續你對已經透過此法術喚起的最多四個生物的控制，而不會喚起新的生物。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用4環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以再額外喚起或延續控制二個不死生物。每個生物都必須來自不同的屍體或骨骸。"
                ]
            }
        ],
        "page": 212,
        "permanentEffects": true,
        "isSummon": true,
        "backgrounds": [
            {
                "name": "Golgari Agent",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "活化物體",
        "ENG_name": "Animate Objects",
        "level": 5,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "物體在你的命令之下活了過來。選擇射程內最多十個未被穿戴或攜帶的非魔法物體。中型的目標視作二個物體，大型的目標視作四個物體，巨型的目標視作八個物體。你不能活化任何體型超過巨型的物體。每個目標將活化並變成一個由你控制的生物，直到此法術結束或該生物的生命值歸零。",
            "以一個附贈動作，若該生物距離你500呎內，則你可以用心靈命令它（如果你使用此法術控制了複數生物，你可以同時命令他們部分或全部，對它們下達相同的命令）。你決定該生物在它的下個回合間將採取的動作以及移動的位置，或者你可以下達一個籠統的命令，像是守衛一個特定的房間或走廊。若你沒有下達命令，則該生物只會在面對敵對生物時採取自我防衛，除此之外不採取其他動作。一旦接獲指令，該生物將會持續遵從該指令直到它的任務被完成。",
            {
                "type": "table",
                "caption": "活化物體遊戲數據",
                "colLabels": [
                    "體型",
                    "生命值",
                    "AC",
                    "攻擊",
                    "力量",
                    "敏捷"
                ],
                "colStyles": [
                    "col-2",
                    "col-1 text-align-center",
                    "col-1 text-align-center",
                    "col-6",
                    "col-1 text-align-center",
                    "col-1 text-align-center"
                ],
                "rows": [
                    [
                        "{@creature 活化物體(微型)|phb|微型}",
                        "20",
                        "18",
                        "命中{@hit +8}，{@damage 1d4 + 4}傷害",
                        "{@dice 1d20-3|4}",
                        "{@dice 1d20+4|18}"
                    ],
                    [
                        "{@creature 活化物體(小型)|phb|小型}",
                        "25",
                        "16",
                        "命中{@hit +6}，{@damage 1d8 + 2}傷害",
                        "{@dice 1d20-2|6}",
                        "{@dice 1d20+2|14}"
                    ],
                    [
                        "{@creature 活化物體(中型)|phb|中型}",
                        "40",
                        "13",
                        "命中{@hit +5}，{@damage 2d6 + 1}傷害",
                        "{@dice 1d20|10}",
                        "{@dice 1d20+1|12}"
                    ],
                    [
                        "{@creature 活化物體(大型)|phb|大型}",
                        "50",
                        "10",
                        "命中{@hit +6}，{@damage 2d10 + 2}傷害",
                        "{@dice 1d20+2|14}",
                        "{@dice 1d20|10}"
                    ],
                    [
                        "{@creature 活化物體(巨型)|phb|巨型}",
                        "80",
                        "10",
                        "命中{@hit +8}，{@damage 2d12 + 4}傷害",
                        "{@dice 1d20+4|18}",
                        "{@dice 1d20-3|6}"
                    ]
                ]
            },
            "一個活化物體是一個構裝體，且它的AC、生命值、攻擊、力量、和防禦根據它的體型決定。它的體質為10，智力和睿知為3，魅力為1。它的移動速度為30呎；若這個物體沒有腳或其他可用來移動的構造，則它將改為具有30呎的飛行速度並且可以浮空。若這個物體被牢牢固定再某個表面或更大的物體上，例如一條被栓在牆上的鎖鏈，則它的移動速度為0呎。它具有30呎半徑的盲視，且對超過這個範圍的情況視作目盲。當這個活化物體的生命值歸零，它將回復它原本的物體型態，且剩餘的傷害將被帶到它原本的型態。",
            "若你命令活化物體進行攻擊，則它將對一個距離它5呎內的生物進行一次近戰攻擊。它將進行一次猛擊攻擊，根據它的體型決定它的攻擊加值和鈍擊傷害。根據物體的型態，DM可能會裁定某個特定物體的猛擊攻擊將造成劈砍或穿刺傷害。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用6環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以再額外活化二個物體。"
                ]
            }
        ],
        "page": 213,
        "damageInflict": [
            "bludgeoning",
            "piercing",
            "slashing"
        ],
        "areaTags": [
            "MT"
        ],
        "isSummon": true,
        "backgrounds": [
            {
                "name": "Izzet Engineer",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "反活物護罩",
        "ENG_name": "Antilife Shell",
        "level": 5,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "radius",
            "distance": {
                "type": "feet",
                "amount": 10
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Death",
                        "source": "DMG"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Protection (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道閃爍的屏障延展環繞在你10呎半徑的區域，跟隨你移動並以你為中心，阻絕任何不死生物和構裝體以外的生物。這道屏障在法術持續期間持續存在。",
            "這道屏障會防止受影響的生物穿越或通過。然而一個受影響的生物所施展的法術、或以遠程或觸及武器進行的攻擊將穿過這道屏障。",
            "若你因為移動而導致一個受影響生物被強迫穿越這道屏障，則此法術結束。"
        ],
        "page": 213
    },
    {
        "name": "反魔法結界",
        "ENG_name": "Antimagic Field",
        "level": 8,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "sphere",
            "distance": {
                "type": "feet",
                "amount": 10
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一撮鐵粉或鐵屑"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一個10呎半徑的隱形反魔法球體環繞著你。這個區域將被從遍布魔法能量的多元宇宙中分離。在這個球體內，法術無法被施展、被召喚的生物將會消失、甚至連魔法物品也會變成凡物。直到此法術結束，這個球體會隨著你移動，以你為中心。",
            "法術和其他魔法效果，除了那些由神器或神祇創造的之外，在球體內都將被壓制，無法進入球體。一個用以施放被壓制法術的法術位仍會被消耗。當一個效果被壓制時，它不會發揮作用，但它在被壓制的期間仍會被算在它的持續時間內。",
            {
                "type": "entries",
                "name": "目標效果",
                "entries": [
                    "以球體內一個生物或物體為目標的法術和其他魔法效果，像是{@spell 魔法飛彈}和{@spell 魅惑人類}，將不會對該目標產生任何效果。"
                ]
            },
            {
                "type": "entries",
                "name": "範圍魔法",
                "entries": [
                    "其他法術或魔法效果的效果範圍，像是{@spell 火球術}，無法延伸進球體的範圍內。若這個球體與另一個魔法的範圍重疊，則被球體範圍覆蓋的一部分區域將被壓制。舉例來說，{@spell 火牆術}創造出來的火焰將在球體內被壓制，若重疊範圍夠大的話，甚至會在這面火牆上產生一道缺口。"
                ]
            },
            {
                "type": "entries",
                "name": "法術",
                "entries": [
                    "當一個生物或物體處於球體內，任何作用於該生物或物體的法術或其他魔法效果將被壓制。"
                ]
            },
            {
                "type": "entries",
                "name": "魔法物品",
                "entries": [
                    "在球體內，魔法物品的屬性和力量將被壓制。舉例來說，一把在球體內的{@item 長劍+1}將被做為一把非魔法{@item 長劍|phb}作用。",
                    "若一把魔法武器被用於對付球體內的一個目標、或被球體內的一個攻擊者所持用，則它的屬性和力量都將被壓制。若一把魔法武器或一發魔法彈藥完全脫離球體（舉例來說，若你像球體外的一個目標發射一發魔法箭矢或投擲一把魔法矛），則該物體上的魔法將在離開球體的瞬間不再被壓制。"
                ]
            },
            {
                "type": "entries",
                "name": "魔法旅行",
                "entries": [
                    "在球體內，傳送和位面旅行將無法發揮作用，無論這個球體是這類魔法旅行的終點還是起點。一個通往另一個場所、世界、或存在位面的傳送門、以及像是藉由{@spell 通天繩}法術創造的通往異次元空間的入口，將在處於球體內時被暫時關閉。"
                ]
            },
            {
                "type": "entries",
                "name": "生物和物體",
                "entries": [
                    "一個被魔法召喚或創造的生物或物體將在處於球體內時暫時地消失不見。該生物會在它所佔據的空間不再處於球體內時立即重新出現。"
                ]
            },
            {
                "type": "entries",
                "name": "解除魔法",
                "entries": [
                    "能造成{@spell 解除魔法}效應的法術和其他魔法效果對該球體無效。同樣的，由另一個{@spell 反魔法結界}法術創造出的球體不會彼此抵消。"
                ]
            }
        ],
        "page": 213,
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "嫌惡/共感術",
        "ENG_name": "Antipathy/Sympathy",
        "level": 8,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "hour"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "嫌惡效果則為一團浸醋的明礬，共感效果則為一滴蜂蜜"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "day",
                    "amount": 10
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術將吸引或驅趕你所選擇的生物。你選擇射程內一個巨型或更小的物體或生物、或一片不超過200呎邊長立方體的區域做為目標。接著指定一種智慧生物，像是紅龍、哥布林、或吸血鬼。你為目標注入能夠在法術持續期間吸引或驅散指定生物的靈光。選擇厭惡或共感做為這道靈光的效果。",
            {
                "type": "entries",
                "name": "嫌惡",
                "entries": [
                    "這個魔法將使你指定的生物種類感受到一陣強烈的衝動以離開這個區域並避開目標。當這類生物能夠看見目標、或來到距離它60呎內的位置時，該生物必須成功通過一次睿知豁免，否則陷入{@condition 恐懼}。該生物將在它可以看見目標或距離目標60呎內時維持{@condition 恐懼}狀態。當{@condition 恐懼}於目標時，該生物必須使用它的移動以移動到最近一處它無法看見目標的位置。若該生物移動超過目標60呎距離且它無法看見目標時，該生物將不再{@condition 恐懼}，但若它再次看見目標或移動到目標60呎內，則該生物將再次陷入{@condition 恐懼}狀態。"
                ]
            },
            {
                "type": "entries",
                "name": "共感",
                "entries": [
                    "這個魔法將使指定的生物在能夠看見目標、或來到距離它60呎內的位置時感受到一陣強烈的衝動以接近目標。當這類生物能夠看見目標、或來到距離它60呎內的位置時，該生物必須成功通過一次睿知豁免，否則必須在它的每個回合使用它的移動以進入該區域或移動到可以觸及目標的範圍內。當該生物這麼做後，它將無法自願移動遠離目標。",
                    "若目標傷害或以其他方式危害一個受影響的生物，受影響的生物可以進行一次睿知豁免以結束此效果，見下文。"
                ]
            },
            {
                "type": "entries",
                "name": "終止效果",
                "entries": [
                    "若一個受影響的生物在無法看見目標、或不在其60呎內的位置結束它的回合，該生物可以進行一次睿知豁免。若豁免成功，該生物將不再受到目標的影響，並意識到這陣厭惡感或吸引力是因為魔法而產生的。此外，在法術持續期間，一個受此法術影響的生物可以每24小時再進行一次睿知豁免。"
                ]
            },
            "一個成功通過對抗此效果的豁免檢定的生物將免疫於此效果長達1分鐘，在這段時間後，它可以再次被此效果影響。"
        ],
        "page": 214,
        "savingThrow": [
            "wisdom"
        ],
        "conditionInflict": [
            "frightened"
        ],
        "areaTags": [
            "C"
        ]
    },
    {
        "name": "祕法眼",
        "ENG_name": "Arcane Eye",
        "level": 4,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "少許蝙蝠皮毛"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Arcana",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Seeker (UA)",
                        "source": "UATheFaithful"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內創造出一個隱形的魔法眼睛，在法術持續期間飄浮於空中。",
            "你透過心靈接收來自這個眼睛的視覺情報，它具有正常視覺和30呎的黑暗視覺。這個眼睛可以看向任何方向。",
            "以一個動作，你可以使這個眼睛向任何方向移動最多30呎距離。眼睛與你之間的距離沒有限制，但它不能進入另一個存在位面。一道固體屏障可以阻擋眼睛的移動，但這個眼睛可以穿過直徑最少1吋的開口。"
        ],
        "page": 214,
        "backgrounds": [
            {
                "name": "Dimir Operative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "祕法之門",
        "ENG_name": "Arcane Gate",
        "level": 6,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 500
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你創造一對互相連結的傳送門，並在法術持續期間內持續開啟。在你所能看見的地面上選擇兩個點，一點距離你10呎內，另一點則需距離你500呎內。一個10呎半徑的圓形傳送門將在各點位置出現並開啟。若該傳送門會在一個已經被某個生物佔據的空間開啟，則此法術將失敗，且該次施法被浪費。",
            "這對傳送門呈現一個二維的發光圓環，內部充滿迷霧，並垂直懸浮於你所選地面位置數吋上空。這個圓環只能從其中一側被看見（由你選擇），且只有該側具有傳送門的功能。",
            "任何進入傳送門的生物或物體都將從另一個傳送門離開，就如同它們兩道傳送門彼此相鄰；穿過圓環非傳送門的那一側不會有任何效果。傳送門內充斥的迷霧不透光，且將阻擋視線穿透它。在你的回合，你能夠以一個附贈動作旋轉圓環，好讓其有效的那一側面向一個不同的方向。"
        ],
        "page": 214
    },
    {
        "name": "祕法鎖",
        "ENG_name": "Arcane Lock",
        "level": 2,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "價值至少25金幣的金粉，在施法時消耗",
                "cost": 25,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "permanent",
                "ends": [
                    "dispel"
                ]
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個關上的門、窗戶、閘門、箱子，或其他通道，它將在法術持續期間被鎖住。你和你在施放此法術時所選的生物可以如常地開啟它。你也可以設定一個密碼，當在距離該物體5呎內說出密碼，法術就會被壓制1 分鐘。除此之外，直到該物體被破壞、或者此法術被解消或壓制之前，它都無法被打開。對該物體施放{@spell 敲擊術}將會壓制祕法鎖長達10分鐘。",
            "當受到此法術影響，該物體將會比原本更難以被破壞或強開；破壞它或撬開它上面的鎖的DC增加10。"
        ],
        "page": 215,
        "races": [
            {
                "name": "Tiefling (Mammon)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Mammon)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "backgrounds": [
            {
                "name": "Azorius Functionary",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "艾嘉西斯之鎧",
        "ENG_name": "Armor of Agathys",
        "level": 1,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一杯水"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Warlock",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest (UA)",
                        "source": "UAPaladin"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest v2 (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Giant Soul (UA)",
                        "source": "UAGiantSoulSorcerer",
                        "subSubclass": "Frost"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一個防護性的魔法立場環繞著你，呈現如鬼魅似的寒霜覆蓋著你和你的裝備。你在法術持續時間內獲得5點臨時生命值。如果一個生物在你擁有這些生命值時以近戰攻擊命中了你，該生物將受到5點寒冰傷害。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，臨時生命值和寒冰傷害都會增加5點。"
                ]
            }
        ],
        "page": 215,
        "damageInflict": [
            "cold"
        ],
        "races": [
            {
                "name": "Tiefling (Levistus)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Levistus)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ]
    },
    {
        "name": "哈達之臂",
        "ENG_name": "Arms of Hadar",
        "level": 1,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "radius",
            "distance": {
                "type": "feet",
                "amount": 10
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Warlock",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Darkness (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你呼喚出黑暗飢渴者哈達的力量。黑暗能量形成的觸手從你身上湧出，並打擊距離你10呎內的所有生物。在該區域內的每個生物都必須進行一次力量豁免。 若豁免失敗，目標將受到{@dice 2d6}死靈傷害。且直到它的下個回合之前都無法採取反應。若豁免成功，該生物受到一半的傷害，但不受其它效果影響。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 2d6|1-9|1d6}。"
                ]
            }
        ],
        "page": 215,
        "damageInflict": [
            "necrotic"
        ],
        "savingThrow": [
            "strength"
        ],
        "areaTags": [
            "R"
        ]
    },
    {
        "name": "星界投影",
        "ENG_name": "Astral Projection",
        "level": 9,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "hour"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 10
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "你必須為每個你使用此法術影響的生物各自提供一個價值至少1,000金幣的紅鋯石，以及一個價值至少100金幣的精雕銀條，皆會在施法時消耗",
                "cost": 1000,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "special"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你和最多八個射程內的自願生物把你們的星界靈體投影至星界（若你已經位於星界，則此法術將失敗且施法將被浪費）。你們遺留下來的物質軀體將陷入{@condition 昏迷}並進入假死狀態，它不再需要食物或空氣，也不會衰老。",
            "你的星界靈體和你的物質軀體在幾乎各方面都極為相似，複製你的遊戲數據和所有物。其最主要的差異在於一條從你肩胛骨間延伸的銀色繫線，在向後約莫1呎處漸淡隱形。這條繫線是你與你物質軀體之間的栓繩。只要這條繫線保持連結，你就能找到你回程的去路。若這條繫線被切斷（只會特別註明可以辦到這件事的效果能將它切斷），則你的靈魂與身體將被分離，立即將你殺死。",
            "你的星界靈體可以自由穿梭星界，並可以穿過通往任何其他位面的傳送門。若你進入一個新的位面、或返回你施放此法術時所在的位面，你的身體和所有物將跟著銀色繫線被傳送，讓你得以在進入新的位面時重新進入你的身軀。你的星界靈體是一個與你物質軀體獨立的化身，任何施加於它的傷害和效果都不會影響到你的物質軀體，也不會在你返回軀體時存留。",
            "此法術對你和你同伴們的效果會在你使用你的動作解消它時結束。當此法術結束時，受影響的生物將會返回它的物質軀體並甦醒。",
            "此法術對你或你其中一個同伴的效果也可能會提前結束。一個成功施放於星界靈體或物質軀體的{@spell 解除魔法}法術將會結束此法術對該生物的效果。若此法術結束且銀質繫線仍完好無缺，則繫線將把該生物的星界靈體拉回它的物質身軀，結束它的假死狀態。",
            "若你提早返回你的物質身軀，你的同伴們將維持星界靈體的型態，且必須自己找尋返回它們物質身軀的途徑（通常是透過把生命值歸零）。"
        ],
        "page": 215,
        "conditionInflict": [
            "unconscious"
        ],
        "areaTags": [
            "MT"
        ]
    },
    {
        "name": "卜筮",
        "ENG_name": "Augury",
        "level": 2,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "價值至少25金幣，有著特殊記號的細棍、骨頭、或類似的標記物",
                "cost": 25
            }
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Kraken (Stream)",
                        "source": "Stream"
                    }
                },
                {
                    "class": {
                        "name": "Barbarian",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ancestral Guardian",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "藉由倒出嵌有寶石的細棍、晃搖龍骨、鋪開華麗的卡牌、或利用其他占卜工具，你從另一個世界的存在接受到一個預兆，揭露關於你在接下來30分鐘內預計去做的一件具體行動的結果。DM將從以下可能的預兆中選擇：",
            {
                "type": "list",
                "items": [
                    "福，代表好結果",
                    "禍，代表壞結果",
                    "禍福相依，代表有好有壞的結果",
                    "什麼也沒有，代表不特別好或壞的結果"
                ]
            },
            "此法術並不會將任何可能改變結果的潛在環境因素納入考量，像是施展額外的法術或者同伴的加入或離去。",
            "若你在完成下一次長休之前施放此法術兩次或以上，則第一次之後的每次施放都會有累積25%的機率導致隨機的結果。DM將暗自擲骰決定。"
        ],
        "page": 215
    },
    {
        "name": "生命靈光",
        "ENG_name": "Aura of Life",
        "level": 4,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "radius",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Undying",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Solidarity (PSA)",
                        "source": "PSA"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "維持生命的能量從你身上散發形成一個30呎半徑的靈光。直到此法術結束前，該靈光將會跟隨你移動，並以你為中心。每一個區域內的非敵對生物（包括你）具有對死靈傷害的抗性，且生命值最大值不會被減少。此外，一個生命值為0但仍活著的非敵對生物，會在該靈光內開始它的回合時回復1點生命值。"
        ],
        "page": 216,
        "damageResist": [
            "necrotic"
        ],
        "isHeal": true,
        "areaTags": [
            "R"
        ],
        "backgrounds": [
            {
                "name": "Selesnya Initiate",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "淨化靈光",
        "ENG_name": "Aura of Purity",
        "level": 4,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "radius",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "淨化能量從你身上散發形成一個30呎半徑的靈光。直到此法術結束前，該靈光將會跟隨你移動，並以你為中心。每一個靈光內的非敵對生物（包括你）將不會感染疾病，具有對毒素傷害的抗性，且在對抗會導致以下狀態的效果的豁免檢定中具有優勢：{@condition 目盲}、{@condition 魅惑}、{@condition 耳聾}、{@condition 恐懼}、{@condition 麻痺}、{@condition 中毒}、和{@condition 震懾}。."
        ],
        "page": 216,
        "damageResist": [
            "poison"
        ],
        "areaTags": [
            "R"
        ]
    },
    {
        "name": "活力靈光",
        "ENG_name": "Aura of Vitality",
        "level": 3,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "radius",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Crown",
                        "source": "SCAG"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "治癒能量從你身上散發形成一個30呎半徑的靈光。直到此法術結束前，該靈光將會跟隨你移動，並以你為中心。你可以使用一個附贈動作以使靈光內的一個生物（包括你）回復{@dice 2d6}點生命值。"
        ],
        "page": 216,
        "isHeal": true,
        "areaTags": [
            "R"
        ]
    },
    {
        "name": "啟蒙術",
        "ENG_name": "Awaken",
        "level": 5,
        "school": "T",
        "time": [
            {
                "number": 8,
                "unit": "hour"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一個價值至少1,000金幣的瑪瑙，在施法時消耗",
                "cost": 1000,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在施法過程中花費時間描摹昂貴寶石內部的魔法脈絡之後，你觸碰一個體型為巨型或更小的野獸或植物。目標必須沒有智力屬性，或智力值為3或更低。目標的智力值將變為10。目標也學會說一種你所知曉語言的能力。若目標為一株植物，則它將獲得移動它枝體、根、藤、蔓等部位的能力，並獲得類似於人類的感官。你的DM將為這株啟蒙植物選擇適合的遊戲數據，像是做為{@creature 啟蒙灌木}或{@creature 啟蒙樹木}。",
            "這個啟蒙野獸或植物將被你{@condition 魅惑}長達30天，或直到你或你的同伴做出任何危害它的行動。當{@condition 魅惑}狀態結束，這個啟蒙生物會根據你在它被{@condition 魅惑}時對待它的方式，決定是否對你保持友善。"
        ],
        "page": 216,
        "permanentEffects": true,
        "conditionInflict": [
            "charmed"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Selesnya Initiate",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "災禍術",
        "ENG_name": "Bane",
        "level": 1,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一滴血"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Vengeance",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ambition (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Divine Soul",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "最多三個你所選擇的射程內你所能看見的生物，必須進行一次魅力豁免。在此法術結束前，每當於該豁免檢定中失敗的目標要進行一次攻擊檢定或豁免檢定，目標必須擲一顆{@dice d4}，並將骰出來的數字減掉該攻擊檢定或豁免檢定的結果。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以再額外選擇一個生物作為目標。"
                ]
            }
        ],
        "page": 216,
        "savingThrow": [
            "charisma"
        ],
        "areaTags": [
            "MT"
        ]
    },
    {
        "name": "放逐斬",
        "ENG_name": "Banishing Smite",
        "level": 5,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在此法術結束前，下一次你以武器攻擊命中一個生物時，你的武器將爆發出強大力場，且該攻擊對目標造成額外{@dice 5d10}力場傷害。此外，若這次攻擊將目標的生命值減少至50或以下，則你將它從位面放逐。若目標原生於與你們所處位面不同的另一個存在位面，則目標將消失，並回到它的原生位面。若目標原生於你們所處的存在位面，則該生物將會消失至一個無害的位面。當處於該位面，目標陷入{@condition 無力}狀態。它將維持在該處直到此法術結束。在此法術結束時，目標將重新出現在它離開時所在的空間，或若該空間已被佔據則出現在最近一處未被占據空間。"
        ],
        "page": 216,
        "damageInflict": [
            "force"
        ],
        "conditionInflict": [
            "incapacitated"
        ]
    },
    {
        "name": "放逐術",
        "ENG_name": "Banishment",
        "level": 4,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一個令目標厭惡的物品"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Crown",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Vengeance",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Horizon Walker (UA)",
                        "source": "UARangerAndRogue"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Horizon Walker",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Horizon Walker (UA)",
                        "source": "UARangerAndRogue"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Horizon Walker",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Monster Slayer (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Monster Slayer",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Monster Slayer (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Monster Slayer",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你嘗試將射程內你所能看見的一個生物送到另一個存在位面。目標必須成功通過一次魅力豁免，否則將被放逐。",
            "若目標原生於你們所處的存在位面，則你將目標放逐到一個無害的半位面。當處於該位面時，目標陷入{@condition 無力}狀態。目標將維持在該處直到此法術結束。在此法術結束時，目標將重新出現在它離開時所在的空間，或若該空間已被佔據則出現在最近一處未被占據空間。",
            "若目標原生於與你們所處位面不同的另一個存在位面，則目標伴隨著一陣微弱的爆破聲被放逐，回到它的原生位面。若此法術在1分鐘過去之前結束，則目標將重新出現在它離開時所在的空間，或若該空間已被佔據則出現在最近一處未被占據空間。反之，目標不會回到原處。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用5環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以再額外選擇一個生物作為目標。"
                ]
            }
        ],
        "page": 217,
        "savingThrow": [
            "charisma"
        ],
        "conditionInflict": [
            "incapacitated"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "樹膚術",
        "ENG_name": "Barkskin",
        "level": 2,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一把橡樹樹皮"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Nature",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Forest"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你碰觸一個自願生物。直到法術結束前，目標的肌膚將呈現粗糙、樹皮狀的外表，且無論目標穿著什麼樣的護甲，它的AC都不會低於16。"
        ],
        "page": 217,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "希望信標",
        "ENG_name": "Beacon of Hope",
        "level": 3,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Life",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Devotion",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Solidarity (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Beauty (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術將賦予希望和活力。選擇射程內任意數量的生物。在法術持續期間，每個目標在睿知豁免和死亡豁免中具有優勢，且在受到任何治療時會回復最大可能數值的生命值。"
        ],
        "page": 217,
        "isHeal": true,
        "areaTags": [
            "MT"
        ],
        "backgrounds": [
            {
                "name": "Boros Legionnaire",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "野獸知覺",
        "ENG_name": "Beast Sense",
        "level": 2,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Barbarian",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Totem Warrior",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "你觸碰一個自願野獸。在此法術的持續期間，你可以使用你的動作以透過該野獸的眼睛視物並聽到它所聽見的聲音，且持續直到你使用你的動作以返回你原本的知覺。當透過野獸的知覺感知時，你獲得任何該生物所擁有的特殊感知的好處，儘管你對你自己的感官而言視作{@condition 耳聾}和{@condition 目盲}。"
        ],
        "page": 217,
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Gruul Anarch",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "降咒",
        "ENG_name": "Bestow Curse",
        "level": 3,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Oathbreaker",
                        "source": "DMG"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ambition (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest (UA)",
                        "source": "UAPaladin"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest v2 (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個生物，且該生物必須成功通過一次睿知豁免，否則在此法術持續期間受到詛咒。當你施放此法術時，從以下選項中選擇一個詛咒的性質：",
            {
                "type": "list",
                "items": [
                    "選擇一個屬性。當受到詛咒時，目標在以該屬性進行的屬性檢定和豁免檢定中具有劣勢。",
                    "當受到詛咒時，目標在對你進行的攻擊檢定中具有劣勢。",
                    "當受到詛咒時，目標必須在每次它的回合開始時進行一次睿知豁免。若豁免失敗，則它將浪費它這回合的動作什麼事都不做。",
                    "當目標受到詛咒時，你對該目標進行攻擊和法術將造成額外的{@dice 1d8}死靈傷害。"
                ]
            },
            "一個{@spell 移除詛咒}將會結束這個效果。根據DM的決定，你可能可以選擇一個其他的詛咒效果，但它不能比上述的效果更強大。DM擁有這類詛咒效果的最終決定權。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用4環或更高的法術位施放此法術時，你可以維持你在此法術的專注最多10分鐘。當你使用5環或更高的法術位施放此法術時，持續時間為8小時。當你使用7環或更高的法術位施放此法術時，持續時間為24小時。當你使用9環法術位施放此法術時，此法術將持續直到被解消。使用5環或更高的法術位施放此法術將會讓它的持續時間不再需要專注。"
                ]
            }
        ],
        "page": 218,
        "damageInflict": [
            "necrotic"
        ],
        "savingThrow": [
            "wisdom"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Orzhov Representative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "畢格比之掌",
        "ENG_name": "Bigby's Hand",
        "level": 5,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一個蛋殼和一隻蛇皮手套"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內你所能看見的一處未被佔據空間創造出一個大型，閃爍半透明的力場手掌。這隻手掌將在法術持續期間內持續存在，且會依據你的命令移動，模仿你手掌的動作。.",
            "這隻手掌是一個具有AC 20，且生命值等同於你生命值最大值的物體。若它的生命值歸零，則此法術結束。它的力量屬性為26 (+8)且敏捷屬性為10 (+0)。這隻手並不會佔據它的所在空間。",
            "當你施放此法術時，或在你後續的回合以一個附贈動作，你可以移動這隻手掌最多60呎距離，並讓它製造出以下其中一種效果。",
            {
                "type": "entries",
                "name": "金剛拳",
                "entries": [
                    "這隻手掌襲向距離它5呎內的一個生物或物體。使用你的遊戲數據進行一次近戰法術攻擊。若命中，目標將受到{@dice 4d8}力場傷害。"
                ]
            },
            {
                "type": "entries",
                "name": "飛擊掌",
                "entries": [
                    "這隻手掌嘗試推撞距離它5呎內的一個生物到你所選擇的一個方向。使用這隻手掌的力量值進行一次檢定以對抗目標的力量（@{skill 運動}）檢定。若目標的體型為中型或更小，則你在該檢定中具有優勢。若你成功，則這隻手掌將把目標推動最多5呎加上等同你施法屬性調整值五倍呎的距離。這隻手掌會跟隨目標移動以維持與它距離5呎內。"
                ]
            },
            {
                "type": "entries",
                "name": "擒拿掌",
                "entries": [
                    "這隻手掌嘗試擒抱距離它5呎內的一個體型為巨型或更小的生物。你使用這隻手掌的力量值以處理擒抱。若目標的體型為中型或更小，則你在該檢定中具有優勢。當這隻手掌擒抱住目標時，你可以使用一個附贈動作以讓手掌擠壓它。當你這麼做時，目標將受到等同於{@dice 2d6} + 你的施法屬性調整值的鈍擊傷害。"
                ]
            },
            {
                "type": "entries",
                "name": "護身掌",
                "entries": [
                    "這隻手掌阻擋在你和一個你所選擇的生物之間，直到你給這隻手一個不同的命令。這隻手將移動以維持在你和目標之間，使你對目標具有半掩護。若目標的力量值低於或等於這隻手掌的力量值，則它將無法移動穿過這隻手掌所在的空間。若目標的力量值超過這隻手的力量值，則目標可以向著你移動穿過這隻手掌所在的空間，但該空間對目標視作困難地形。"
                ]
            }
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用6環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，金剛拳選項造成的傷害便會再增加{@scaledice 4d8|5-9|2d8}，且擒拿掌所造成的傷害也會再增加{@scaledice 2d6|5-9|2d6}。"
                ]
            }
        ],
        "page": 218,
        "damageInflict": [
            "bludgeoning",
            "force"
        ],
        "opposedCheck": [
            "strength"
        ],
        "spellAttack": [
            "M"
        ]
    },
    {
        "name": "劍刃障壁",
        "ENG_name": "Blade Barrier",
        "level": 6,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 90
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你創造出一道由魔法能量構成，垂直的飛舞、鋒利劍刃之牆。這道牆將出現在射程內，且持續直到法術持續時間結束。你可以創造出一道最多100呎長、20呎高、以及5呎厚的筆直牆壁，或一道有著直徑最多60呎長、20呎高、以及5呎厚的環型牆。這道牆會為它後面的生物提供四分之三掩護，且它所在的空間為困難地形。",
            "當一個生物在一個回合中第一次進入這道牆的區域，或在該處開始它回合，則該生物必須進行一次敏捷豁免。若豁免失敗，該生物將受到{@dice 6d10}劈砍傷害。若豁免成功，則只受到一半的傷害。"
        ],
        "page": 218,
        "damageInflict": [
            "slashing"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "W"
        ]
    },
    {
        "name": "劍刃防護",
        "ENG_name": "Blade Ward",
        "level": 0,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "round",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你伸出手並循著空中防護的印記而行動。直到你的下個回合結束前，你獲得對武器攻擊所造成的鈍擊、穿刺、和劈砍傷害的抗力。"
        ],
        "page": 218,
        "damageResist": [
            "bludgeoning",
            "piercing",
            "slashing"
        ]
    },
    {
        "name": "祝福術",
        "ENG_name": "Bless",
        "level": 1,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一點聖水"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Life",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Solidarity (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Divine Soul",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你祝福最多三個射程內你所選擇的的生物。在此法術結束前，每當目標要進行一次攻擊檢定或豁免檢定，目標可以擲一顆{@dice d4}，並將骰出來的數字加到該攻擊檢定或豁免檢定中。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以再額外選擇一個生物作為目標。"
                ]
            }
        ],
        "page": 219,
        "areaTags": [
            "MT"
        ]
    },
    {
        "name": "枯萎術",
        "ENG_name": "Blight",
        "level": 4,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Death",
                        "source": "DMG"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Desert"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Oathbreaker",
                        "source": "DMG"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest (UA)",
                        "source": "UAPaladin"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Darkness (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "死靈能量沖向射程內你所選且你能看見的一個生物，吸乾它體內的水分和生命力。目標必須進行一次體質豁免。若豁免失敗，目標將受到{@dice 8d8}的死靈傷害，豁免成功則只受到一半的傷害。此法術對不死生物和構裝體沒有任何效果。",
            "若你以一個植物生物或魔法植物為目標，則它在進行此豁免檢定時具有劣勢，且此法術會對它造成最大傷害。",
            "若你選擇一個不是生物的非魔法植物為目標，例如樹木和灌木，將它不進行豁免檢定，而直接凋零並死亡。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用5環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 8d8|4-9|1d8}。"
                ]
            }
        ],
        "page": 219,
        "damageInflict": [
            "necrotic"
        ],
        "savingThrow": [
            "constitution"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Orzhov Representative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "致盲斬",
        "ENG_name": "Blinding Smite",
        "level": 3,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Stone",
                        "source": "UASorcerer"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在法術持續期間，下一次你以近戰武器攻擊命中一個生物時，你的武器將會閃耀出明亮的光芒，且該攻擊將對目標造成額外{@dice 3d8}光耀傷害。此外，目標必須成功通過一次體質豁免，否則直到法術結束前陷入{@condition 目盲}。",
            "一個被此法術{@condition 目盲}的生物可以在它的每個回合結束時進行一次體質豁免。若豁免成功，則它將不再{@condition 目盲}。"
        ],
        "page": 219,
        "damageInflict": [
            "radiant"
        ],
        "savingThrow": [
            "constitution"
        ],
        "conditionInflict": [
            "blinded"
        ],
        "backgrounds": [
            {
                "name": "Boros Legionnaire",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "目盲/耳聾術",
        "ENG_name": "Blindness/Deafness",
        "level": 2,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Death",
                        "source": "DMG"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Fiend",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Undying",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Darkness (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你可以使一個敵人目盲或耳聾。選擇射程內你所能看見的一個生物以讓它進行一次體質豁免。若它失敗，則目標將在法術持續期間{@condition 目盲}或{@condition 耳聾}（由你選擇）。在它的每個回合結束時，目標可以進行一次體質豁免，若豁免成功，則此法術結束。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以再額外選擇一個生物作為目標。"
                ]
            }
        ],
        "page": 219,
        "savingThrow": [
            "constitution"
        ],
        "conditionInflict": [
            "blinded",
            "deafened"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "閃現術",
        "ENG_name": "Blink",
        "level": 3,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Trickery",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Archfey",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade (UA)",
                        "source": "UAWarlockAndWizard"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在法術持續期間，每次你的回合結束時骰{@dice d20}。若骰出來的數字為11或更高，則你從你當下所在的位面消失，並在乙太位面出現（若你已經在該位面，則此法術失敗且本次施放被浪費）。在你的下個回合開始時，以及當此法術在你位於乙太位面時結束的時候，你回到距離你消失處10呎以內一處未被佔據，你所選擇的可見空間。若範圍內沒有任何未被佔據的可用空間，則你出現在最近一處未被佔據的空間（若有多於一個一樣近的空間，則隨機選擇）。你能夠以一個動作解消此法術。",
            "當處於乙太位面時，你可以看見並聽見你原本所在的位面，但你不能看見任何距離60呎外的事物，且該位面呈現灰階。你只能影響或被其他處於乙太位面的生物影響。不處於該處的生物無法察覺你或與你互動，除非他們具備這麼做的能力。"
        ],
        "page": 219
    },
    {
        "name": "朦朧術",
        "ENG_name": "Blur",
        "level": 2,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Desert"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你的身體輪廓對所有能看見你的人來說變得模糊、變幻、搖曳在法術持續期間，任何生物在對你進行攻擊檢定中具有劣勢。一個不依賴視覺的攻擊者（例如透過盲視）、或者能看透幻象的攻擊者（例如透過真實視覺），將免疫此效果。"
        ],
        "page": 219
    },
    {
        "name": "烙印斬",
        "ENG_name": "Branding Smite",
        "level": 2,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade (UA)",
                        "source": "UAWarlockAndWizard"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Stone",
                        "source": "UASorcerer"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在此法術結束前，下一次你以武器攻擊命中一個生物時，武器將會在你擊中時閃爍著星輝光芒。該攻擊對目標造成額外{@dice 2d6}光耀傷害，使{@condition 隱形}的目標變得可見，且直到法術結束前，目標將散發5呎半徑的微光光照並因此無法{@condition 隱形}。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，額外傷害便會再增加{@scaledice 2d6|2-9|1d6}。"
                ]
            }
        ],
        "page": 219,
        "damageInflict": [
            "radiant"
        ],
        "races": [
            {
                "name": "Tiefling (Zariel)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Zariel)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ]
    },
    {
        "name": "燃燒之手",
        "ENG_name": "Burning Hands",
        "level": 1,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "cone",
            "distance": {
                "type": "feet",
                "amount": 15
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Light",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Fiend",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Undying Light (UA)",
                        "source": "UALightDarkUnderdark"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Giant Soul (UA)",
                        "source": "UAGiantSoulSorcerer",
                        "subSubclass": "Fire"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "隨著你雙手拇指交觸，手指張開，一片稀薄的火焰將從你伸展的指尖向前射出。每個處於15呎錐形內的生物都必須進行一次敏捷豁免。豁免失敗的生物將受到{@dice 3d6}火焰傷害，豁免成功則只受到一半的傷害。",
            "這片火焰將會點燃範圍內所有未被穿戴或攜帶的可燃物體。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 3d6|1-9|1d6}。"
                ]
            }
        ],
        "page": 220,
        "damageInflict": [
            "fire"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "races": [
            {
                "name": "Genasi (Fire)",
                "source": "EEPC",
                "baseName": "Genasi",
                "baseSource": "EEPC"
            },
            {
                "name": "Tiefling (Variant)",
                "source": "SCAG",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Abyssal)",
                "source": "UAThatOldBlackMagic",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Mephistopheles)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "areaTags": [
            "N"
        ],
        "backgrounds": [
            {
                "name": "Rakdos Cultist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "召雷術",
        "ENG_name": "Call Lightning",
        "level": 3,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Tempest",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Forest"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Kraken (Stream)",
                        "source": "Stream"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一團暴風雷雲以10呎高、60呎半徑圓柱體的形狀出現，並以你射程內正上方你所能看見的一點為中心。若你無法看見空中一處可以讓暴風雷雲成形的位置，則此法術失敗（例如當你處於無法容納雷雲成形的房間內）。",
            "當你施放此法術時，選擇位於雷雲之下你所能看見的一點。一道閃電將從雷雲疾馳擊在該點上。每個距離該點5呎內的生物都必須進行一次敏捷豁免。一個豁免失敗的目標將受到{@dice 3d10}閃電傷害，豁免成功則只受到一半的傷害。直到此法術結束前，在每個你的回合，你都可以使用你的動作再次透過這個方式喚來閃電，擊向與之前相同或其他的位置。",
            "若你在處於暴風雨天候的室外施放此法術，則此法術將讓你控制既存的暴風雷雲，而非創造一個新的。在這樣的情況下，此法術的傷害將增加{@dice 1d10}。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用4環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 3d10|3-9|1d10}。"
                ]
            }
        ],
        "page": 220,
        "damageInflict": [
            "lightning"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "S"
        ],
        "backgrounds": [
            {
                "name": "Izzet Engineer",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "安定心神",
        "ENG_name": "Calm Emotions",
        "level": 2,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Archfey",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你嘗試壓抑一群人的強烈情緒。處於射程內以你所選一點為圓心20呎半徑球體內的每個類人生物都必須進行一次魅力豁免；一個生物可以自願選擇失敗於該豁免檢定。若一個生物豁免失敗，從以下兩個效果中選擇一個。",
            "你可以壓抑任何導致目標被{@condition 魅惑}或{@condition 恐懼}的效果。當此法術結束時，只要被壓抑效果的持續時間尚未到期，則它將會繼續發揮效果。",
            "或者，你可以使一個目標對你所選擇，且它原本敵對的生物變得不感興趣。若目標被攻擊、被法術傷害、或目擊它的任何朋友被傷害，則這個不感興趣的態度將會結束。當此法術結束，除非DM另行裁決，否則該生物的態度將變回敵對。"
        ],
        "page": 221,
        "savingThrow": [
            "charisma"
        ],
        "areaTags": [
            "S"
        ],
        "backgrounds": [
            {
                "name": "Azorius Functionary",
                "source": "GGR"
            },
            {
                "name": "Selesnya Initiate",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "連環閃電",
        "ENG_name": "Chain Lightning",
        "level": 6,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 150
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一小塊皮毛；一塊琥珀、玻璃、或水晶權杖；以及三根銀針"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你創造出一道閃電束向著射程內你所能看見的一個目標弧射而去。三道閃電束接著從該目標身上躍向最多三個其他目標，各目標都必須在第一個目標30呎距離內。目標可以是一個生物或一個物體，且每個目標只能成為其中一道閃電束的目標。",
            "目標必須進行一次敏捷豁免。目標若豁免失敗將受到{@dice 10d8}閃電傷害，豁免成功則只受到一半的傷害。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用7環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，從第一個目標躍向另一個目標的閃電束便會再額外增加一條。"
                ]
            }
        ],
        "page": 221,
        "damageInflict": [
            "lightning"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "ST",
            "MT"
        ]
    },
    {
        "name": "魅惑人類",
        "ENG_name": "Charm Person",
        "level": 1,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Trickery",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Treachery (UA)",
                        "source": "UAPaladin"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Beauty (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你嘗試魅惑一個射程內你所能看見的類人生物。它必須進行一次睿知豁免，且若你或你的同伴正在與它戰鬥，則它在該豁免檢定中具有優勢。若它豁免失敗，它將被你{@condition 魅惑}直到法術結束或直到你或你的同伴做出任何危害它的行動。被魅惑的生物將把你視作一名親近的熟人。當此法術結束，該生物將會知道它曾被你{@condition 魅惑}。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以再額外選擇一個生物作為目標。當你選擇這些生物時，它們彼此之間的距離必須在30呎內。"
                ]
            }
        ],
        "page": 221,
        "savingThrow": [
            "wisdom"
        ],
        "races": [
            {
                "name": "Tiefling (Variant)",
                "source": "SCAG",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Abyssal)",
                "source": "UAThatOldBlackMagic",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Fierna)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Fierna)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "conditionInflict": [
            "charmed"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Selesnya Initiate",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "寒顫之觸",
        "ENG_name": "Chill Touch",
        "level": 0,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "round",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內一個生物所佔據的空間中創造出一隻幽魂般的骸骨手掌。對該生物進行一次遠程法術攻擊以墓穴的刺骨寒氣襲擊目標。若命中，目標受到{@dice 1d8}死靈傷害，且直到你的下個回合開始前，它都無法再回復生命值。在那之前，這隻鬼手都將緊抓著目標不放。",
            "如果你命中一個不死生物目標，直到你的下個回合結束前，它在對你進行攻擊檢定時也將承受劣勢。",
            "此法術的傷害將在你的等級升至5級時增加至{@dice 2d8}，11級時{@dice 3d8}，17級時{@dice 4d8}。"
        ],
        "page": 221,
        "damageInflict": [
            "necrotic"
        ],
        "spellAttack": [
            "R"
        ],
        "scalingEffects": true,
        "races": [
            {
                "name": "Elf (Eladrin)",
                "source": "UAEladrinAndGith",
                "baseName": "Elf",
                "baseSource": "PHB"
            },
            {
                "name": "Elf (Shadar-kai)",
                "source": "UAElfSubraces",
                "baseName": "Elf",
                "baseSource": "PHB"
            },
            {
                "name": "Elf (Zendikar) (Mul Daya Nation)",
                "source": "PSZ",
                "baseName": "Elf (Zendikar)",
                "baseSource": "PSZ"
            }
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "幻色法球",
        "ENG_name": "Chromatic Orb",
        "level": 1,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 90
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一顆價值至少50金幣的鑽石",
                "cost": 50
            }
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你向射程內你所能看見的一個生物投出一顆4吋直徑的能量球體。你為你所創造的法球從酸蝕、寒冰、火焰、閃電、毒素、或雷鳴中選擇一種類型，並對目標進行一次遠程法術攻擊。若該攻擊命中，目標受到{@dice 3d8}你所選類型的傷害。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 3d8|1-9|1d8}。"
                ]
            }
        ],
        "page": 221,
        "damageInflict": [
            "acid",
            "cold",
            "fire",
            "lightning",
            "poison",
            "thunder"
        ],
        "spellAttack": [
            "R"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "死亡之環",
        "ENG_name": "Circle of Death",
        "level": 6,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 150
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一顆價值至少500金幣的黑珍珠碾碎而成的粉末",
                "cost": 500
            }
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一個負能量球體從射程內一點向外擴散，波及至60呎半徑球體範圍。每個在範圍內的生物都必須進行一次體質豁免。一個豁免失敗的目標將受到{@dice 8d6}死靈傷害，豁免成功則只受到一半的傷害。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用7環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 8d6|6-9|2d6}。"
                ]
            }
        ],
        "page": 221,
        "damageInflict": [
            "necrotic"
        ],
        "savingThrow": [
            "constitution"
        ],
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "威能法環",
        "ENG_name": "Circle of Power",
        "level": 5,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "radius",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Crown",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Solidarity (PSA)",
                        "source": "PSA"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "神性能量自你身上散發而出，扭曲並發散距離你30呎內的魔法能量。直到此法術結束前，這個球體範圍將跟隨你移動，並以你為中心。在法術持續期間，每個範圍內的友善生物（包括你）在對抗法術或其他魔法效果的豁免檢定中具有優勢。此外，當一個受影響生物成功通過一次對抗法術或魔法效果以讓它在豁免成功時減半傷害的豁免檢定時，則當它改為在豁免成功時不受到任何傷害。"
        ],
        "page": 221,
        "areaTags": [
            "S",
            "R"
        ]
    },
    {
        "name": "銳眼術",
        "ENG_name": "Clairvoyance",
        "level": 3,
        "school": "D",
        "time": [
            {
                "number": 10,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "miles",
                "amount": 1
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一個價值至少100金幣的法器，聆聽則為一個鑲珠寶的號角、視覺用則為一個玻璃眼珠",
                "cost": 100
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Great Old One",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Seeker (UA)",
                        "source": "UATheFaithful"
                    }
                },
                {
                    "class": {
                        "name": "Barbarian",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ancestral Guardian",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內一處你所熟悉的地點（一個你曾經去過或見過的地方）或你不熟悉但明確的地點（像是一扇門後、轉角處、或樹叢中）創造一個隱形的感應器。這個感應器會在法術持續期間維持在該處，且它無法被攻擊或用其他方式互動。",
            "當你施放此法術時，你選擇視覺或是聽覺。你可以透過該感應器使用所選的感官，就如同你位於該空間。以一個動作，你可以在視覺和聽覺間切換。",
            "一個可以看見感應器的生物（例如得益於{@spell 識破隱形}法術或真實視覺的生物）會看見一個約為你拳頭大小，發著光的無形球體。"
        ],
        "page": 222,
        "backgrounds": [
            {
                "name": "Azorius Functionary",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "克隆術",
        "ENG_name": "Clone",
        "level": 8,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "hour"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一個價值至少1,000金幣的鑽石和一塊來自被克隆生物至少1立方吋的血肉，在施法時消耗；一個價值至少2,000金幣的容器，具有密封蓋和足以容納一個中型生物的容量，例如巨型缸甕、棺材、埋在地底的泥封囊艙、或裝滿鹽水的水晶容器。",
                "cost": 1000,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術將培養一個活著，且體型為中型的生物的無活性複製體做為對抗死亡的防護措施。這個克隆體將在密封容器內成形，並在120天後長成完整體型並生長成熟；你也可以選擇讓這個克隆體成為該生物的年輕版本。只要它的容器保持不受擾動，克隆體將維持無活性的狀態並永久存在。",
            "在克隆體成熟後的任何時候，若原本的生物死亡，只要它的靈魂不受束縛且自願返回，則它的靈魂將轉移到克隆體身上。這個克隆體在生理上與原本的生物相同，且具有相同的個性、記憶、以及能力，但並沒有它原本的裝備。原本生物的身體殘骸若仍然存在，將因此失去活性，且因為該生物的靈魂已經在別處而無法被復活。"
        ],
        "page": 222,
        "permanentEffects": true
    },
    {
        "name": "匕首之雲",
        "ENG_name": "Cloud of Daggers",
        "level": 2,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一塊玻璃裂片"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你讓射程中你所選擇的一點為中心的5呎邊長立方體的空間內充滿著旋轉飛舞的匕首。一個在此法術區域中開始它的回合、或在一個回合中第一次進入該區域的生物將會受到{@dice 4d4}劈砍傷害。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 4d4|2-9|2d4}。"
                ]
            }
        ],
        "page": 222,
        "damageInflict": [
            "slashing"
        ],
        "areaTags": [
            "C"
        ]
    },
    {
        "name": "死雲術",
        "ENG_name": "Cloudkill",
        "level": 5,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Death",
                        "source": "DMG"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Underdark"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest v2 (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Lolth (Twitter)",
                        "source": "Twitter"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Destruction (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你以射程內一點為中心創造出一團20呎半徑球形，黃綠色的劇毒氣體。這團毒霧會繞過轉角散佈。它會在法術持續期間持續存在，或直到一陣強風將它吹散，使此法術結束。它所在的區域被重度遮蔽。",
            "當一個生物在一個回合中第一次進入此法術的區域，或在該處開始它的回合，則該生物必須進行一次體質豁免。豁免失敗的生物將受到{@dice 5d8}毒素傷害，豁免成功則只受到一半的傷害。生物即使屏住呼吸，或不需要呼吸，也會受到影響。",
            "這團毒物會在你的每個回合開始時移離你10呎距離，沿著地表表面翻湧飄動。這團毒霧比空氣重，並會向著地面的最低處下沉，甚至會流入孔洞之中。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用6環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 5d8|5-9|1d8}。"
                ]
            }
        ],
        "page": 222,
        "damageInflict": [
            "poison"
        ],
        "savingThrow": [
            "constitution"
        ],
        "areaTags": [
            "S"
        ],
        "backgrounds": [
            {
                "name": "Golgari Agent",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "七彩噴射",
        "ENG_name": "Color Spray",
        "level": 1,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "cone",
            "distance": {
                "type": "feet",
                "amount": 15
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一撮染成紅色、黃色和藍色的粉末或沙子"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "round",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "大量耀眼的七彩閃光從你的手中噴湧而出。骰{@dice 6d10}；其總和決定了此法術所能影響生物的總生命值。在以你為源點的15呎錐形內的所有生物將按其當前生命值由小到大受到影響（忽略{@condition 昏迷}和無法看見的生物）。",
            "從有著最低當前生命值的生物開始，每個受到此法術影響的生物將{@condition 目盲}直到你的下個回合結束。在處理下一個有著最低生命值的生物之前，從擲骰總和中減去前一個生物的生命值。生物的生命值必須少於或等於剩餘總和才會受到影響。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，就可以再額外骰{@scaledice 6d10|1-9|2d10}。"
                ]
            }
        ],
        "page": 222,
        "conditionInflict": [
            "blinded"
        ],
        "areaTags": [
            "N"
        ]
    },
    {
        "name": "命令術",
        "ENG_name": "Command",
        "level": 1,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "round",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Crown",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Fiend",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest (UA)",
                        "source": "UAPaladin"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest v2 (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order (UA)",
                        "source": "UAOrderDomain"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order",
                        "source": "GGR"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你對射程內你所能看見的一個生物說出一個單詞命令。目標必須成功通過一次睿知豁免，否則將在它的下個回合遵循該命令。若目標為不死生物、目標無法理解你的語言、或你的命令對它有直接危害，則此法術不會有任何效果。",
            "以下是一些典型的命令和他們的效果。你也可以提出以外的其他命令。若你這麼做，則由DM決定目標將會如何行動。如果目標無法遵循你的命令，則此法術結束。",
            {
                "type": "entries",
                "name": "靠近",
                "entries": [
                    "目標以最短最直接的路徑向著你移動，且若移動到你5呎距離內時將會結束它的回合。"
                ]
            },
            {
                "type": "entries",
                "name": "丟下",
                "entries": [
                    "目標丟下任何它所持握的東西，然後結束它的回合。"
                ]
            },
            {
                "type": "entries",
                "name": "逃走",
                "entries": [
                    "目標花費它的回合以最快的速度遠離你。"
                ]
            },
            {
                "type": "entries",
                "name": "趴下",
                "entries": [
                    "目標陷入{@condition 伏地}狀態，然後結束它的回合。"
                ]
            },
            {
                "type": "entries",
                "name": "暫停",
                "entries": [
                    "目標不移動且不採取任何動作。若飛行生物能夠維持浮空，則它將會這麼做。如果它必須要移動才能維持在空中，則它會飛行最短所需距離以維持於空中。"
                ]
            }
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以再額外影響一個生物。當你選擇這些生物時，它們彼此之間的距離必須在30呎內。"
                ]
            }
        ],
        "page": 223,
        "savingThrow": [
            "wisdom"
        ],
        "conditionInflict": [
            "prone"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Azorius Functionary",
                "source": "GGR"
            },
            {
                "name": "Orzhov Representative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "通神術",
        "ENG_name": "Commune",
        "level": 5,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "焚香和一小瓶聖水或邪水"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Devotion",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Raven Queen (UA)",
                        "source": "UAWarlockAndWizard"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order (UA)",
                        "source": "UAOrderDomain"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order",
                        "source": "GGR"
                    }
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "你聯絡你的神祇或一個神性代理人以詢問最多三個能藉由是或否回答的問題。你必須在此法術結束前提出你的問題。你將會收到每個問題的正確回答。",
            "神性生物並不一定是全知的，因此你當一個問題涉及到超出神祇知識的範圍，則你可能會收到「不清楚」做為問題的答案。在某些情況下，用一個單字回答可能會違背或誤導該神祇的神意，這時DM可以改為提供一個短語做為回答。",
            "若你在完成下一次長休之前施放此法術兩次或以上，則第一次之後的每次施放都會有累積25%的機率導致你得不到任何回答。DM將暗自擲骰決定。"
        ],
        "page": 223
    },
    {
        "name": "問道自然",
        "ENG_name": "Commune with Nature",
        "level": 5,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Arctic"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Forest"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ancients",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Kraken (Stream)",
                        "source": "Stream"
                    }
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "你短暫地與大自然融為一體，並獲得周圍地域的情報。在野外，此法術將讓你知曉距離你3哩範圍內的土地知識。在洞穴和其他自然地下結構中，範圍半徑被限制在300呎內。此法術在像是地城或城鎮等大自然被建造物給取代的環境中沒有任何作用。",
            "你將立即獲得關於該區域內從以下主題中選擇的最多三個事實情報：",
            {
                "type": "list",
                "items": [
                    "地形與水體",
                    "主要植株、礦物、動物、或人種",
                    "強大的天界生物、精類、邪魔、元素、或不死生物",
                    "來自其他存在位面的影響",
                    "建築物"
                ]
            },
            "舉例來說，你可以判斷出該區域內強大不死生物的位置、可安全飲用的主水源的位置、以及任何附近城鎮的位置。"
        ],
        "page": 224,
        "backgrounds": [
            {
                "name": "Selesnya Initiate",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "強迫決鬥",
        "ENG_name": "Compelled Duel",
        "level": 1,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Crown",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Protection (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Stone",
                        "source": "UASorcerer"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你嘗試強迫一個生物與你決鬥。一個射程內你所能看見的生物必須進行一次睿知豁免，若豁免失敗，該生物將被拖向你，被你神聖的要求給強迫。在持續時間內，它在對你以外的其他生物進行的攻擊檢定中具有劣勢，且每次它嘗試離開你30呎距離外時都必須進行一次睿知豁免；若成功通過該豁免檢定，則此法術在該回合將不會再限制目標的移動。",
            "若你攻擊任何其他生物、你以其他敵對生物做為目標施放一個法術、對你友好的生物傷害了目標或對其施放危害性的法術、或你在距離目標30呎以外的位置結束你的回合，則此法術結束。"
        ],
        "page": 224,
        "savingThrow": [
            "wisdom"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Gruul Anarch",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "通曉語言",
        "ENG_name": "Comprehend Languages",
        "level": 1,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一撮煤灰和鹽"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "City (PSA)",
                        "source": "UAModernMagic"
                    }
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "在法術持續期間，你能理解任何你所聽到的口說語言的字面意義。你同時理解任何你看到的書寫語言，但你必須要觸碰到寫有文字的表面。閱讀一整頁的文字需要耗費大約1分鐘。",
            "此法術無法解碼隱藏在文字或符號中的秘密訊息，例如魔法符文。這些密碼並不屬於書寫語言的一部分。"
        ],
        "page": 224
    },
    {
        "name": "強迫術",
        "ENG_name": "Compulsion",
        "level": 4,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order (UA)",
                        "source": "UAOrderDomain"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Beauty (Stream)",
                        "source": "Twitter"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order",
                        "source": "GGR"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "射程內你所選，你能看見，且能聽見你的生物必須進行一次睿知豁免。不會被{@condition 魅惑}的目標將自動成功通過此豁免檢定。若豁免失敗，目標將受到此法術的影響。直到此法術結束前，你可以在每個你的回合使用一個附贈動作以指定一個與你位置平行的方向（亦即不可指定上下垂直的方向）。每個受影響的目標在它的下個回合必須盡可能的使用它的移動速度向該方向移動。它可以在移動前採取它的動作。在透過這個方式移動之後，它可以再進行一次睿知豁免以結束這個效果。",
            "一個目標不會被強迫移入一個明顯致命的危險中，像是火焰或坑洞，但它會在向著指定方向移動時引發藉機攻擊。"
        ],
        "page": 224,
        "savingThrow": [
            "wisdom"
        ],
        "areaTags": [
            "MT"
        ],
        "backgrounds": [
            {
                "name": "Azorius Functionary",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "寒冰錐",
        "ENG_name": "Cone of Cold",
        "level": 5,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "cone",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一小塊水晶或玻璃錐"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Arctic"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade (UA)",
                        "source": "UAWarlockAndWizard"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Kraken (Stream)",
                        "source": "Stream"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道寒冷的氣浪從你的雙手中迸發而出。每個處於60呎錐形內的生物都必須進行一次體質豁免。豁免失敗的生物將受到{@dice 8d8}寒冰傷害，豁免成功則只受到一半的傷害。",
            "被此法術殺死的生物會被變成一尊冰凍雕像直到它溶解。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用6環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 8d8|5-9|1d8}。"
                ]
            }
        ],
        "page": 224,
        "damageInflict": [
            "cold"
        ],
        "savingThrow": [
            "constitution"
        ],
        "areaTags": [
            "N"
        ]
    },
    {
        "name": "困惑術",
        "ENG_name": "Confusion",
        "level": 4,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 90
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "三個堅果殼"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Oathbreaker",
                        "source": "DMG"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Treachery (UA)",
                        "source": "UAP"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術將侵襲並扭曲生物的心靈，產生出錯覺，並引發不受控制的動作。在你施放此法術時，每個處於以射程內你所選擇一點為中心的10呎半徑球體範圍內的生物都必須成功通過一次睿知豁免，否則受到法術影響。",
            "一個受影響的目標不能採取反應，且必須在每次它的回合開始時骰{@dice d10}以決定它這回合的行為。",
            {
                "type": "table",
                "caption": "困惑術行為",
                "colLabels": [
                    "{@dice d10}",
                    "行為"
                ],
                "colStyles": [
                    "col-1 text-align-center",
                    "col-11"
                ],
                "rows": [
                    [
                        {
                            "type": "cell",
                            "roll": {
                                "exact": 1
                            }
                        },
                        "該生物使用它所有的移動速度向著一個隨機方向移動。要決定方向，為{@dice d8}的每一個骰面分配一個方向並擲骰決定。該生物在這回合不會採取動作。"
                    ],
                    [
                        {
                            "type": "cell",
                            "roll": {
                                "min": 2,
                                "max": 6
                            }
                        },
                        "該生物在這回合不會移動，也不會採取動作。"
                    ],
                    [
                        {
                            "type": "cell",
                            "roll": {
                                "min": 7,
                                "max": 8
                            }
                        },
                        "該生物使用它的動作以對它觸及範圍內一個隨機決定的生物進行一次近戰攻擊。若在它的觸及範圍內沒有任何生物，則該生物在這回合不會做任何事情。"
                    ],
                    [
                        {
                            "type": "cell",
                            "roll": {
                                "min": 9,
                                "max": 10
                            }
                        },
                        "該生物可以正常地行動和移動。"
                    ]
                ]
            },
            "在它的每個回合結束時，受影響的目標可以進行一次睿知豁免。若豁免成功，則結束此法術對該目標的效果。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用5環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，該球體範圍的半徑就會再增加5呎。"
                ]
            }
        ],
        "page": 224,
        "savingThrow": [
            "wisdom"
        ],
        "areaTags": [
            "S"
        ],
        "backgrounds": [
            {
                "name": "Rakdos Cultist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "召喚動物",
        "ENG_name": "Conjure Animals",
        "level": 3,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Primeval Guardian (UA)",
                        "source": "UARangerAndRogue"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Primeval Guardian (UA)",
                        "source": "UARangerAndRogue"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你召喚出呈現野獸外型的精類精魂，並使其出現在射程內未被占據的可見空間。選擇以下其中一個選項以決定出現什麼：",
            {
                "type": "list",
                "items": [
                    "一隻{@filter 挑戰等級2或以下的野獸|bestiary|challenge rating=2|type=beast|miscellaneous=!swarm}",
                    "二隻{@filter 挑戰等級1或以下的野獸|bestiary|challenge rating=1|type=beast|miscellaneous=!swarm}",
                    "四隻{@filter 挑戰等級1/2或以下的野獸|bestiary|challenge rating=1/2|type=beast|miscellaneous=!swarm}",
                    "八隻{@filter 挑戰等級1/4或以下的野獸|bestiary|challenge rating=0;1/8;1/4|type=beast|miscellaneous=!swarm}"
                ]
            },
            "每隻野獸同時也被視作精類生物，且它會在它生命值歸零或此法術結束時消失。",
            "被召喚的生物對你和你的同伴友善。這些召喚生物在骰先攻時作為一組擲骰，但有著各自的回合。它們服從任何你交代他們的口頭指令（你不需要花費動作）。若你不對它們交代任何指令，則它們將在面對敵對生物時自我防衛，除此之外不採取其他動作。",
            "這些生物的數據資料由DM掌控。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用特定更高環階的法術位施放此法術時，你從上述召喚選項中選擇一項，並讓更多生物出現：使用5環法術位時出現兩倍、7環法術位時出現三倍、使用9環法術位時出現四倍。"
                ]
            }
        ],
        "page": 225,
        "isSummon": true,
        "backgrounds": [
            {
                "name": "Gruul Anarch",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "召喚箭幕",
        "ENG_name": "Conjure Barrage",
        "level": 3,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "cone",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一發彈藥或一把投擲武器"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你向空中投擲一把非魔法武器或射出一發非魔法彈藥以創造出無數同樣的武器，以錐形向著前方散射並接著消失無蹤。每個在60呎錐形範圍內的生物必須進行一次敏捷豁免。一個豁免失敗的目標將受到{@dice 3d8}傷害，豁免成功則只受到一半的傷害。傷害類型與做為構材的武器或彈藥相同。"
        ],
        "page": 225,
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "N"
        ],
        "backgrounds": [
            {
                "name": "Gruul Anarch",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "召喚天界生物",
        "ENG_name": "Conjure Celestial",
        "level": 7,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 90
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你召喚出一個{@filter 挑戰等級4或以下的天界生物|bestiary|challenge rating=0;1/8;1/4;1/2;1;2;3;4|type=celestial|miscellaneous=!swarm}，且它將出現在射程內一處你所能看見的未被佔據空間。該天界生物會在它生命值歸零或此法術結束時消失。",
            "該天界生物在法術持續期間對你和你的同伴友善。為該天界生物骰先攻，且它擁有自己的回合。它會服從任何你交代它的口頭指令（你不需要花費動作），只要這不會因此違反它的陣營。若你不對該生物交代任何指令，則它將在面對敵對生物時自我防衛，除此之外不採取其他動作。",
            "這個天界生物的數據資料由DM掌控。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用9環法術位施放此法術時，你可以改為召喚一個{@filter 挑戰等級5或以下的天界生物|bestiary|challenge rating=0;1/8;1/4;1/2;1;2;3;4;5|type=celestial|miscellaneous=!swarm}."
                ]
            }
        ],
        "isSummon": true,
        "page": 225
    },
    {
        "name": "召喚元素生物",
        "ENG_name": "Conjure Elemental",
        "level": 5,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 90
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "點燃的薰香對應氣元素、軟質黏土對應土元素、硫磺和磷對應火元素、水和沙對應水元素"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Coast"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你呼喚出一個元素僕役。選擇射程內一處在10呎邊長立方體內充滿氣、土、火、或水的區域。一個對應你所選區域的{@filter 挑戰等級5或以下的元素生物|bestiary|challenge rating=0;1/8;1/4;1/2;1;2;3;4;5|type=elemental|miscellaneous=!swarm}將會出現在距離該處10呎內的一處未被佔據空間。舉例來說，一個{@creature 火元素}會從一團篝火中浮現，而一個{@creature 土元素}會從大地中升起。該元素生物會在它生命值歸零或此法術結束時消失。",
            "該元素生物對你和你的同伴友善。為該元素生物骰先攻，且它擁有自己的回合。它會服從任何你交代它的口頭指令（你不需要花費動作）。若你不對該生物交代任何指令，則它將在面對敵對生物時自我防衛，除此之外不採取其他動作。",
            "若你的專注被中斷，該元素生物並不會消失。取而代之，你將失去對該元素生物的控制，它將會對你和你的同伴具有敵意，且可能會展開攻擊。一個失去控制的元素生物無法被你解消，且它會在你召喚它之後1小時後消失。",
            "這個元素生物的數據資料由DM掌控。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用6環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你所能召喚生物的挑戰等級便會再增加1。"
                ]
            }
        ],
        "isSummon": true,
        "page": 225,
        "backgrounds": [
            {
                "name": "Izzet Engineer",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "召喚精類生物",
        "ENG_name": "Conjure Fey",
        "level": 6,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 90
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你召喚出一個{@filter 挑戰等級6或以下的精類生物|bestiary|challenge rating=0;1/8;1/4;1/2;1;2;3;4;5;6|type=fey|miscellaneous=!swarm}、或一個呈現{@filter 挑戰等級6或以下的野獸|bestiary|challenge rating=0;1/8;1/4;1/2;1;2;3;4;5;6|type=beast|miscellaneous=!swarm}型態的精類精魂。它將出現在射程內一處你所能看見的未被佔據空間。該精類生物會在它生命值歸零或此法術結束時消失。",
            "該精類生物在法術持續期間對你和你的同伴友善。為該精類生物骰先攻，且它擁有自己的回合。它會服從任何你交代它的口頭指令（你不需要花費動作），只要這不會因此違反它的陣營。若你不對該生物交代任何指令，則它將在面對敵對生物時自我防衛，除此之外不採取其他動作。",
            "若你的專注被中斷，該精類生物並不會消失。取而代之，你將失去對該精類生物的控制，它將會對你和你的同伴具有敵意，且可能會展開攻擊。一個失去控制的精類生物無法被你解消，且它會在你召喚它之後1小時後消失。",
            "這個精類生物的數據資料由DM掌控。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用7環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你所能召喚生物的挑戰等級便會再增加1。"
                ]
            }
        ],
        "isSummon": true,
        "page": 226
    },
    {
        "name": "召喚次級元素生物",
        "ENG_name": "Conjure Minor Elementals",
        "level": 4,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 90
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你召喚出元素生物並使其出現在射程內未被占據的可見空間。選擇以下其中一個選項以決定出現什麼：",
            {
                "type": "list",
                "items": [
                    "一個{@filter 挑戰等級2或以下的元素生物|bestiary|challenge rating=2|type=elemental|miscellaneous=!swarm}",
                    "二個{@filter 挑戰等級1或以下的元素生物|bestiary|challenge rating=1|type=elemental|miscellaneous=!swarm}",
                    "四個{@filter 挑戰等級1/2或以下的元素生物|bestiary|challenge rating=1/2|type=elemental|miscellaneous=!swarm}",
                    "八個{@filter 挑戰等級1/4或以下的元素生物|bestiary|challenge rating=0;1/8;1/4|type=elemental|miscellaneous=!swarm}."
                ]
            },
            "一個被此法術召喚的元素生物會在它生命值歸零或此法術結束時消失。",
            "被召喚的生物對你和你的同伴友善。這些召喚生物在骰先攻時作為一組擲骰，但有著各自的回合。它們服從任何你交代他們的口頭指令（你不需要花費動作）。若你不對它們交代任何指令，則它們將在面對敵對生物時自我防衛，除此之外不採取其他動作。",
            "這些生物的數據資料由DM掌控。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用特定更高環階的法術位施放此法術時，你從上述召喚選項中選擇一項，並讓更多生物出現：使用6環法術位時出現兩倍、8環法術位時出現三倍。"
                ]
            }
        ],
        "isSummon": true,
        "page": 226,
        "backgrounds": [
            {
                "name": "Izzet Engineer",
                "source": "GGR"
            },
            {
                "name": "Selesnya Initiate",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "召喚箭雨",
        "ENG_name": "Conjure Volley",
        "level": 5,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 150
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一發彈藥或一把投擲武器"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你向空中投擲一把非魔法武器或從一把遠程武器射出一發非魔法彈藥，並選擇射程內的一點。數百個彈藥或武器的複製品將從上空齊射而下並接著消失無蹤。每個處於以該點為中心40呎半徑，20呎高的圓柱範圍內的生物都必須進行一次敏捷豁免。一個豁免失敗的目標將受到{@dice 8d8}傷害，豁免成功則只受到一半的傷害。傷害類型與做為構材的武器或彈藥相同。"
        ],
        "page": 226,
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "Y"
        ]
    },
    {
        "name": "召喚林地之精",
        "ENG_name": "Conjure Woodland Beings",
        "level": 4,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "每召喚一個生物需要一顆冬青漿果"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你召喚出精類生物，並使其出現在射程內未被占據的可見空間。選擇以下其中一個選項以決定出現什麼：",
            {
                "type": "list",
                "items": [
                    "一個{@filter 挑戰等級2或以下的精類生物|bestiary|challenge rating=2|type=fey|miscellaneous=!swarm}",
                    "二個{@filter 挑戰等級1或以下的精類生物|bestiary|challenge rating=1|type=fey|miscellaneous=!swarm}",
                    "四個{@filter 挑戰等級1/2或以下的精類生物|bestiary|challenge rating=1/2|type=fey|miscellaneous=!swarm}",
                    "八個{@filter 挑戰等級1/4或以下的精類生物|bestiary|challenge rating=0;1/8;1/4|type=fey|miscellaneous=!swarm}"
                ]
            },
            "一個被召喚的生物會在它生命值歸零或此法術結束時消失。",
            "被召喚的生物對你和你的同伴友善。這些召喚生物在骰先攻時作為一組擲骰，但有著各自的回合。它們服從任何你交代他們的口頭指令（你不需要花費動作）。若你不對它們交代任何指令，則它們將在面對敵對生物時自我防衛，除此之外不採取其他動作。",
            "這些生物的數據資料由DM掌控。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用特定更高環階的法術位施放此法術時，你從上述召喚選項中選擇一項，並讓更多生物出現：使用6環法術位時出現兩倍、8環法術位時出現三倍。"
                ]
            }
        ],
        "isSummon": true,
        "page": 226
    },
    {
        "name": "異界探知",
        "ENG_name": "Contact Other Plane",
        "level": 5,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "你透過心靈接觸一個半神、過世已久賢者的靈魂、或其他來自另一個位面的神秘存在。接觸這個跨位面的智能可能會扭曲甚至破壞你的心靈。當你施放此法術時，進行一次DC 15的智力豁免。若豁免失敗，你將受到{@dice 6d6}精神傷害，且陷入瘋狂直到你完成一次長休。當陷入瘋狂時，你無法採取動作，無法理解其他生物在說什麼，無法閱讀，且只能說出無意義的胡言亂語。一個施放在你身上的{@spell 高等復原術}可以結束這個效果。",
            "若豁免成功，你可以詢問這個存在最多五個問題。你必須在此法術結束前提出你的問題。DM將會用一個字回答每個問題，例如「是」、「否」、「可能」、「永不」、「無關」、或「不清楚」（若該存在不知道這個問題的答案）。若一個單字回答可能會產生誤導，則DMDM可以改為提供一個短語做為回答。"
        ],
        "page": 226,
        "damageInflict": [
            "psychic"
        ],
        "savingThrow": [
            "intelligence"
        ]
    },
    {
        "name": "疫病術",
        "ENG_name": "Contagion",
        "level": 5,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "day",
                    "amount": 7
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Oathbreaker",
                        "source": "DMG"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Undying",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Darkness (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你的觸碰將帶來疾病。對你觸及範圍內的一個生物進行一次近戰法術攻擊。若命中，則目標陷入{@condition 中毒}狀態。",
            "在該{@condition 中毒}目標的每個回合結束時，目標必須進行一次體質豁免。若目標在這些豁免檢定中成功三次，則它將不再處於{@condition 中毒}狀態，且此法術結束。若目標在這些豁免檢定中失敗三次，則目標將不再處於{@condition 中毒}狀態，而是選擇以下其中一個疾病。目標將在此法術的持續期間受到所選疾病的影響。",
            "由於此法術是在目標體內引發一項自然疾病，任何可以移除疾病或改善疾病效果的效果都可以應用於該疾病。",
            {
                "type": "entries",
                "name": "失明症",
                "entries": [
                    "痛苦控制著生物的心靈，使它的雙眼變成乳白色。該生物在睿知檢定和睿知豁免中具有劣勢，且陷入{@condition 目盲}狀態。"
                ]
            },
            {
                "type": "entries",
                "name": "穢熱病",
                "entries": [
                    "一陣狂暴高燒橫掃生物的身體。該生物在力量檢定、力量豁免、和使用力量的攻擊檢定中具有劣勢。"
                ]
            },
            {
                "type": "entries",
                "name": "血肉潰爛",
                "entries": [
                    "該生物的血肉開始潰爛。該生物在體質檢定中具有劣勢，且對所有傷害易傷。"
                ]
            },
            {
                "type": "entries",
                "name": "腦熱症",
                "entries": [
                    "該生物的大腦發燒狂躁。該生物在智力檢定和智力豁免中具有劣勢，且該生物在戰鬥期間的行為就如同它處於{@spell 困惑術}的效果下。"
                ]
            },
            {
                "type": "entries",
                "name": "癲癇",
                "entries": [
                    "該生物無法控制地顫抖。該生物在敏捷檢定、敏捷豁免、和使用敏捷的攻擊檢定中具有劣勢。"
                ]
            },
            {
                "type": "entries",
                "name": "黏濘惡疾",
                "entries": [
                    "該生物開始無法控制地流血。該生物在體質檢定和體質豁免中具有劣勢。此外，每當該生物受到傷害，它將被{@condition 震懾}直到它的下個回合結束。"
                ]
            }
        ],
        "page": 227,
        "savingThrow": [
            "constitution"
        ],
        "spellAttack": [
            "M"
        ],
        "conditionInflict": [
            "blinded",
            "stunned",
            "poisoned"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "觸發術",
        "ENG_name": "Contingency",
        "level": 6,
        "school": "V",
        "time": [
            {
                "number": 10,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一個你自己的小雕像，由象牙雕製而成，並裝飾以價值至少1,500金幣的珠寶",
                "cost": 1500
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "day",
                    "amount": 10
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "選擇一個你所能施放，環階為5環或更低，施法時間為1個動作，且能以你自己為目標的法術。作為施放觸發術的一部份，你施放該法術\u2014以下稱其為併發法術\u2014，為這兩個法術消耗各自的法術位，但併發法術並不會馬上產生效果，而是在特定狀況發生時發揮效果。你在施放這兩個法術時描述一個狀況。舉例來說，一個和{@spell 水下呼吸}法術一同被施放的觸發術可能會設定在你被水或類似液體吞沒時讓{@spell 水下呼吸}發揮效果。",
            "併發法術會緊接在第一次遭遇該狀況時立刻發揮效果，無論你是否希望如此，且觸發術結束。",
            "併發法術只會對你發揮效果，即使它原本可以指定其他目標也一樣。你同時只能使用一個觸發術。若你再次施放此法術，則另一個作用在你身上的觸發術將被中止。觸發術也會在你不再擁有它的材料構材時結束。"
        ],
        "page": 227
    },
    {
        "name": "不滅明焰",
        "ENG_name": "Continual Flame",
        "level": 2,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "價值50金幣的紅寶石塵，在施法時消耗",
                "cost": 50,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "permanent",
                "ends": [
                    "dispel"
                ]
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一朵有著等同於{@item 火炬}亮度的火焰，從你所觸碰的一個物體湧出。這個效果看起來就如同尋常火焰，但它並不會創造熱能，也不會消耗氧氣。不滅明焰可以被掩蓋或隱藏，但不會被悶熄或撲滅。"
        ],
        "page": 227
    },
    {
        "name": "操控水體",
        "ENG_name": "Control Water",
        "level": 4,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 300
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一滴水和一撮粉塵"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Tempest",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Coast"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Kraken (Stream)",
                        "source": "Stream"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "直到此法術結束前，你控制任何在你所選擇的一處各邊長最多100呎的立方體空間內的獨立水體。你在施放此法術時可以從下列效果中選擇任意一個效果。在你的回合以一個動作，你可以重複該效果或選擇另一個不同的效果。",
            {
                "type": "entries",
                "name": "淹漲",
                "entries": [
                    "你使區域內所有不流動水體的水位提升最多20呎。若該區域內包含了沿岸，則氾濫的水將溢流到旱地上。",
                    "若你選擇了一個有著龐大水體的區域，則你改為創造出一波20呎高的波浪，從區域內一側行進至另一側然後撞下。任何在波浪行進路線上的巨型或更小的載具將會被帶到另一側。任何被波浪撞上的巨型或更小的載具將有25%的機率翻覆。",
                    "水位高度將維持直到此法術結束或你選擇了另一個效果。若這個效果製造了一波波浪，則在淹漲的效果持續期間，該波浪將在你的下個回合開始時重現。"
                ]
            },
            {
                "type": "entries",
                "name": "分海",
                "entries": [
                    "你使區域內的水體分開，並創造出一條壕溝。這條壕溝將橫穿此法術的區域，且被分開的水體將會在兩側形成水牆。這條壕溝將維持直到此法術結束或你選擇了另一個效果，而水體將接著在下一輪進行的過程中緩緩填補壕溝，直到回復平常的水位。"
                ]
            },
            {
                "type": "entries",
                "name": "轉向",
                "entries": [
                    "你使區域內的流水向你所選擇的一個方向移動，即使這會使水流越障礙物、爬上牆面、或其他不可能的方向。區域內的水會按照你的指示移動，然而一旦它移出此法術的區域，它將繼續依照當下的地形狀況正常流動。水體會持續按照你所選的方向移動，直到此法術結束或你選擇了另一個效果。"
                ]
            },
            {
                "type": "entries",
                "name": "漩渦",
                "entries": [
                    "這個效果需要至少為50平方呎寬和25呎深的水體。你使一道漩渦在該區域的中心成行。這個漩渦將產生一道底部5呎寬，而頂部最多50呎寬的渦流。任何在水中且距離渦流25呎內的生物或物體都將被拉向它10呎距離。一個生物可以藉由進行一次對抗你法術豁免DC的力量（{@skill 運動}）檢定以嘗試游泳遠離渦流。",
                    "當一個生物在一個回合中第一次進入該渦流、或在其中開始它的回合，則它必須進行一次力量豁免。若豁免失敗，該生物將受到{@dice 2d8}鈍擊傷害並被渦流捲入直到此法術結束。若豁免成功，該生物只受到一半的傷害，且不會被渦流捲入。一個被渦流捲入的生物可以使用它的動作以上述的方式嘗試游泳遠離渦流，但它在這麼做的時候將在力量（{@skill 運動}）檢定中承受劣勢。",
                    "當一個物體在每個回合中第一次進入該渦流時，該物體將受到{@dice 2d8}鈍擊傷害；這個傷害也會在它留在渦流中的每一輪發生。"
                ]
            }
        ],
        "page": 227,
        "damageInflict": [
            "bludgeoning"
        ],
        "savingThrow": [
            "strength"
        ],
        "opposedCheck": [
            "strength"
        ],
        "areaTags": [
            "N"
        ]
    },
    {
        "name": "操控天氣",
        "ENG_name": "Control Weather",
        "level": 8,
        "school": "T",
        "time": [
            {
                "number": 10,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "radius",
            "distance": {
                "type": "miles",
                "amount": 5
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "點燃的熏香和少許混合在水中的泥土和木頭"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 8
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在法術持續期間掌控距離你5哩內的天氣。你必須在戶外以施放此法術。移動到一處你無法直接看到天空的地方將會使此法術提早結束。",
            "當你施放此法術時，你改變原本由DM基於氣候和季節決定的當下天氣狀況。你可以改變它的降雨量、溫度、和風速。新的天氣狀況需要花費{@dice 1d4 × 10}分鐘以發揮效果。一旦天氣完成改變，你將可以再次改變天氣狀況。當此法術結束，天氣將逐漸回復原狀。",
            "當你改變天氣狀況時，從以下列表中尋找當下的狀況，並向上或向下改變它的階段一級。當改變風速時，你也可以改變其風向。",
            {
                "type": "table",
                "caption": "降雨量",
                "colLabels": [
                    "階段",
                    "狀況"
                ],
                "colStyles": [
                    "col-1 text-align-center",
                    "col-11"
                ],
                "rows": [
                    [
                        "1",
                        "晴天"
                    ],
                    [
                        "2",
                        "薄雲"
                    ],
                    [
                        "3",
                        "多雲、或低霧"
                    ],
                    [
                        "4",
                        "降雨、冰雹、或降雪"
                    ],
                    [
                        "5",
                        "豪雨、劇烈冰雹、或暴雪"
                    ]
                ]
            },
            {
                "type": "table",
                "caption": "溫度",
                "colLabels": [
                    "階段",
                    "狀況"
                ],
                "colStyles": [
                    "col-1 text-align-center",
                    "col-11"
                ],
                "rows": [
                    [
                        "1",
                        "酷熱"
                    ],
                    [
                        "2",
                        "炎熱"
                    ],
                    [
                        "3",
                        "溫暖"
                    ],
                    [
                        "4",
                        "涼爽"
                    ],
                    [
                        "5",
                        "寒冷"
                    ],
                    [
                        "6",
                        "極寒"
                    ]
                ]
            },
            {
                "type": "table",
                "caption": "風速",
                "colLabels": [
                    "階段",
                    "狀況"
                ],
                "colStyles": [
                    "col-1 text-align-center",
                    "col-11"
                ],
                "rows": [
                    [
                        "1",
                        "微風"
                    ],
                    [
                        "2",
                        "和風"
                    ],
                    [
                        "3",
                        "強風"
                    ],
                    [
                        "4",
                        "狂風"
                    ],
                    [
                        "5",
                        "暴風"
                    ]
                ]
            }
        ],
        "page": 228
    },
    {
        "name": "警戒箭陣",
        "ENG_name": "Cordon of Arrows",
        "level": 2,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 5
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "四枝或更多的箭或弩矢"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 8
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內的地表上插下四枝非魔法彈藥\u2014{@item 箭|phb}或{@item 弩矢|phb}\u2014並在其上施加魔法以保護這個區域。直到法術結束前，每當一個你以外的生物在一個回合中第一次進入距離彈藥30呎內的範圍，或在該處結束它的回合，其中一枝彈藥將會飛起並擊向它。該生物必須成功通過一次敏捷豁免，否則受到{@dice 1d6}穿刺傷害。該枝彈藥將會損毀。當沒有剩餘的彈藥時，此法術結束。",
            "當你施放此法術時，你可以指定任何你所選擇的生物，此法術將無視它們。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，可以被影響的彈藥數量就會再增加2枝。"
                ]
            }
        ],
        "page": 228,
        "damageInflict": [
            "piercing"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "反制法術",
        "ENG_name": "Counterspell",
        "level": 3,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "reaction",
                "condition": "在你看見一個距離你60呎以內的生物施放法術時進行"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你嘗試中斷一個生物施展法術的過程。若該生物所施放的法術的環階為3環或以下，則該法術將失敗且不會產生任何效果。若它施放的法術的環階為4環或更高，則使用你的施法屬性進行一次屬性檢定。DC等同於10+該法術的環階。若檢定成功，該生物的法術失敗且不會產生任何效果。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用4環或更高的法術位施放此法術時，如果被中斷法術的環階等於或低於你所使用的法術位，則該法術不會產生任何效果。"
                ]
            }
        ],
        "page": 228,
        "backgrounds": [
            {
                "name": "Azorius Functionary",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "創造飲食",
        "ENG_name": "Create Food and Water",
        "level": 3,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Desert"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內的地面或容器內創造出45磅的食物和30加侖的水，足以供養最多15個類人生物或5匹坐騎長達24小時。這些食物淡而無味但營養充足，且若24小時後仍未食用則會腐壞。這些水則是乾淨的且不會變質。"
        ],
        "page": 229
    },
    {
        "name": "創造不死生物",
        "ENG_name": "Create Undead",
        "level": 6,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 10
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "每具屍體各一個裝滿墓土的陶罐、一個裝滿苦鹹水的陶罐、跟一個價值150金幣的黑瑪瑙石",
                "cost": 150
            }
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你只能在夜晚施放此法術。選擇射程內最多三具中型或小型類人生物的屍體。每具屍體將各自變成一個處於你控制之下的{@creature 食屍鬼}。（這些生物的數據資料由DM掌控。）",
            "在你的每個回合以一個附贈動作，你可以以心靈命令任何你透過此法術活化，且距離你120呎內的生物（如果你控制了複數生物，你可以同時命令他們部分或全部，對它們下達相同的命令）。你決定該生物在它的下個回合間將採取的動作以及移動的位置，或者你可以下達一個籠統的命令，例如守衛一個特定的房間或走廊。若你沒有下達命令，則該生物只會在面對敵對生物時採取自我防衛。一旦接獲指令，該生物將會持續遵從該指令直到它的任務被完成。",
            "該生物處於你的控制長達24小時，在這之後它將停止服從任何你給予的命令。若要再延續24小時對該生物的控制，則你必須在當前24小時的時段結束前再次對該生施放此法術。以這個用法使用此法術將會延續你對已經透過此法術喚起的最多三個生物的控制，而不會喚起新的生物。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用7環法術位施放此法術時，你可以活化或延續控制四個{@creature 食屍鬼}。當你使用8環法術位施放此法術時，你可以活化或延續控制五個{@creature 食屍鬼}、或二個{@creature 妖鬼}或{@creature 屍妖}。當你使用9環法術位施放此法術時，你可以活化或延續控制六個{@creature 食屍鬼}、或三個{@creature 妖鬼}或{@creature 屍妖}、或二個{@creature 木乃伊}。"
                ]
            }
        ],
        "page": 229,
        "isSummon": true,
        "permanentEffects": true
    },
    {
        "name": "造水/枯水術",
        "ENG_name": "Create or Destroy Water",
        "level": 1,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "若要造水則一滴水，若要枯水則幾粒沙子"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Kraken (Stream)",
                        "source": "Stream"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你可以創造水或使水枯竭。",
            {
                "type": "entries",
                "name": "造水",
                "entries": [
                    "你在射程內一處敞開容器中創造出最多10加侖乾淨的水。或者，水將在射程內一處30呎邊長立方體空間內如雨般降下，熄滅該區域中暴露的火焰。"
                ]
            },
            {
                "type": "entries",
                "name": "枯水",
                "entries": [
                    "你使射程內一處敞開容器中最多10加侖的水枯竭消失。或者，你消滅射程內一處30呎邊長立方體空間內的霧水。"
                ]
            }
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以再多創造或消滅10加侖的水，或者增加立方體空間的邊長5呎。"
                ]
            }
        ],
        "page": 229,
        "permanentEffects": true,
        "races": [
            {
                "name": "Genasi (Water)",
                "source": "EEPC",
                "baseName": "Genasi",
                "baseSource": "EEPC"
            }
        ],
        "areaTags": [
            "C"
        ],
        "backgrounds": [
            {
                "name": "Izzet Engineer",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "造物術",
        "ENG_name": "Creation",
        "level": 5,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一小片與你打算創造物體相同種類的材料"
        },
        "duration": [
            {
                "type": "special"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你從墮影冥界中抽出一縷陰影以在射程內創造出一個植物材料製成的非活物物體：紡織品、繩索、木頭、或其他類似的東西。你也可以使用此法術以創造出礦物物體，像是石頭、水晶、或金屬。被創造出的物體的大小不能超過一個5呎邊長立方體，且該物體的外型和材料必須要是你過去曾經看過的。",
            "法術的持續時間取決於物體的材料。若該物體是以複數材料所構成，則使用最短的持續時間。",
            {
                "type": "table",
                "caption": "造物表格",
                "colLabels": [
                    "材料",
                    "持續時間"
                ],
                "colStyles": [
                    "col-8",
                    "col-4"
                ],
                "rows": [
                    [
                        "植物材料",
                        "1 日"
                    ],
                    [
                        "石頭或水晶",
                        "12 小時"
                    ],
                    [
                        "貴金屬",
                        "1 小時"
                    ],
                    [
                        "寶石",
                        "10 分鐘"
                    ],
                    [
                        "精金或秘銀",
                        "1 分鐘"
                    ]
                ]
            },
            "使用此法術所創造出的材料以做為其他法術的材料構材，會使該法術失敗。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用6環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你所能創造物體的立方體邊長便會再增加5呎。"
                ]
            }
        ],
        "page": 229,
        "backgrounds": [
            {
                "name": "Simic Scientist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "瘋狂冠冕",
        "ENG_name": "Crown of Madness",
        "level": 2,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Oathbreaker",
                        "source": "DMG"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一個射程內你所選擇且你能看見的類人生物必須成功通過一次睿知檢定，否則在法術持續期間被你{@condition 魅惑}。當目標因為這個方式被{@condition 魅惑}，一個扭曲的鋸齒冠冕出現在它的頭上，且它的眼神閃爍著瘋狂。",
            "被{@condition 魅惑}的目標每次在它的回合移動之前，必須使用它的動作對它自己以外，你用心靈指定的一個生物進行一次近戰攻擊。如果你沒有選擇任何生物、或者他們都不在它的觸及範圍內，則目標可以在它的回合如常行動。",
            "在你的後續回合，你必須使用你的動作以維持對目標的控制，否則此法術結束。此外，目標可以在它每個回合結束時進行一次睿知豁免。若豁免成功，則此法術結束。"
        ],
        "page": 229,
        "savingThrow": [
            "wisdom"
        ],
        "races": [
            {
                "name": "Tiefling (Baalzebul)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Baalzebul)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "conditionInflict": [
            "charmed"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Rakdos Cultist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "十字軍斗篷",
        "ENG_name": "Crusader's Mantle",
        "level": 3,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "radius",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "War",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Solidarity (PSA)",
                        "source": "PSA"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "神聖力量從你身上散發而出並充斥在30呎半徑的區域中，喚醒友善生物體內的勇氣。直到此法術結束前，該區域將會跟隨你移動，並以你為中心。當處於區域內，每一個區域內的非敵對生物（包括你）在它以一次武器攻擊命中時，將造成額外的{@dice 1d4}光耀傷害。"
        ],
        "page": 230,
        "damageInflict": [
            "radiant"
        ],
        "areaTags": [
            "R"
        ]
    },
    {
        "name": "治療傷勢",
        "ENG_name": "Cure Wounds",
        "level": 1,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Life",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Divine Soul",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你碰觸的一個生物回復等同於{@dice 1d8}+你的施法屬性調整值的生命值。此法術對不死生物或構裝體沒有任何效果。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，治療量便會再增加{@scaledice 1d8|1-9|1d8}。"
                ]
            }
        ],
        "page": 230,
        "races": [
            {
                "name": "Tiefling (Abyssal)",
                "source": "UAThatOldBlackMagic",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "isHeal": true,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "舞光術",
        "ENG_name": "Dancing Lights",
        "level": 0,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一小塊磷或光榆木、或一隻螢光蚋"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內創造出最多4團火炬大小的光源，賦與如同它們火炬，提燈，或光球的外觀，並在持續時間內漂浮於空中。你也可以將這4團光源合併成一個發著光、模糊中型人型型態。無論你選擇那個型態，每團光源都會散發出10呎半徑的微光光照。",
            "在你的回合以一個附贈動作，你可以將光源移動最多60呎到射程內的另一處。一團光源必須與其他由此法術創造的光源彼此相距20呎以內，且光源將在超出法術範圍時熄滅。"
        ],
        "page": 230,
        "races": [
            {
                "name": "Elf (Drow)",
                "source": "PHB",
                "baseName": "Elf",
                "baseSource": "PHB"
            },
            {
                "name": "Half-Elf (Drow Descent)",
                "source": "SCAG",
                "baseName": "Half-Elf",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Abyssal)",
                "source": "UAThatOldBlackMagic",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "backgrounds": [
            {
                "name": "Golgari Agent",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "黑暗術",
        "ENG_name": "Darkness",
        "level": 2,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "m": "蝙蝠毛皮和一滴瀝青或一塊煤炭"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Swamp"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Oathbreaker",
                        "source": "DMG"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Lolth (Twitter)",
                        "source": "Twitter"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Darkness (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "魔法性的黑暗將從射程內你所選擇的一處擴散，在法術持續時間內佔據15呎半徑球體的空間。這片黑暗會繞過轉角。擁有黑暗視覺的生物無法看透這片黑暗，且非魔法光源也無法照亮它。",
            "如果你所選擇的一處是一個你正持握、或一個未被穿戴或攜帶的物品，則黑暗將從該物體散發而出並會隨之移動。用不透光的東西完全覆蓋該黑暗的源頭，像是碗或頭盔，將會擋住黑暗。",
            "若此法術有任何一個區域與其他2環或更低的法術所創造的光照重疊，則創造該光照的法術將被解消。"
        ],
        "page": 230,
        "races": [
            {
                "name": "Elf (Drow)",
                "source": "PHB",
                "baseName": "Elf",
                "baseSource": "PHB"
            },
            {
                "name": "Elf (Zendikar) (Mul Daya Nation)",
                "source": "PSZ",
                "baseName": "Elf (Zendikar)",
                "baseSource": "PSZ"
            },
            {
                "name": "Half-Elf (Drow Descent)",
                "source": "SCAG",
                "baseName": "Half-Elf",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling",
                "source": "PHB",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Variant)",
                "source": "SCAG",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Levistus)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Abyssal)",
                "source": "UAThatOldBlackMagic",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Asmodeus)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Levistus)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Asmodeus)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Variant)",
                "source": "SCAG",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "黑暗視覺",
        "ENG_name": "Darkvision",
        "level": 2,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一撮胡蘿蔔乾或一個瑪瑙"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 8
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個自願生物以賦予它能在黑暗中視物的能力。在法術持續期間，該生物獲得60呎黑暗視覺。"
        ],
        "page": 230,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "晝明術",
        "ENG_name": "Daylight",
        "level": 3,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Light",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Grassland"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Undying Light (UA)",
                        "source": "UALightDarkUnderdark"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道60呎半徑的球狀光源從射程內你所選擇的一處擴散。在這個球體空間內為明亮光照，且會再散發出延伸60呎的微光光照。",
            "如果你所選擇的一處是一個你正持握、或一個未被穿戴或攜帶的物品，則光線將從該物體散發而出並會隨之移動。用不透光的東西完全覆蓋被影響的物體，像是碗或頭盔，將會擋住光線。",
            "若此法術有任何一個區域與其他3環或更低的法術所創造的黑暗重疊，則創造該黑暗的法術將被解消。"
        ],
        "page": 230,
        "races": [
            {
                "name": "Aasimar",
                "source": "DMG"
            }
        ],
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "防死護咒",
        "ENG_name": "Death Ward",
        "level": 4,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 8
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Death",
                        "source": "DMG"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Life",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Undying",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ambition (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個生物並賦予它一種防止死亡的手段。",
            "當目標第一次因為受到傷害而導致生命值歸零時，目標改為使生命值減少至1，且此法術結束。",
            "若此法術在目標受到不造成傷害而導致它立刻死亡的效果時仍然作用著，則其對目標的即死效果將被抵銷，且此法術結束。"
        ],
        "page": 230,
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Boros Legionnaire",
                "source": "GGR"
            },
            {
                "name": "Orzhov Representative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "延遲爆裂火球",
        "ENG_name": "Delayed Blast Fireball",
        "level": 7,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 150
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一小球的蝙蝠糞便和硫磺"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道黃色光束從你的指尖閃現，接著在射程內你所選的一點凝聚成一個閃爍的光珠，在法術持續期間內持續存在。當此法術結束時、你的專注被中斷、或你決定結束它時，這個小珠將伴隨著轟隆低鳴聲炸開成一陣會繞過轉角的爆炸烈焰。每個在以該點為中心20呎半徑球體範圍內的生物都必須進行一次敏捷豁免。一個豁免失敗的目標將受到等同於積累傷害總和的火焰傷害，豁免成功則只受到一半的傷害。",
            "此法術的基礎傷害為{@dice 12d6}。若這個光珠在你的回合結束時尚未被引爆，則傷害將再增加{@dice 1d6}。",
            "若這個光珠在引爆之前被碰觸，則碰觸的生物必須進行一次敏捷豁免。若豁免失敗，則此法術立即結束，並使光珠因而引爆。若豁免成功，則該生物可以將光珠投擲最多40呎距離。當它擊中一個生物或一個固體物體，則此法術將結束，且光珠將被引爆。",
            "這團火焰會傷害範圍內的物體，並點燃範圍內所有未被穿戴或攜帶的可燃物體。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用8環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，基礎傷害便會再增加{@scaledice 12d6|7-9|1d6}。"
                ]
            }
        ],
        "page": 230,
        "damageInflict": [
            "fire"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "創造半位面",
        "ENG_name": "Demiplane",
        "level": 8,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內你所能看見的一面平坦固體表面上創造一扇幽暗朦朧的門。這扇門的大小足以讓體型為中型的生物不受阻礙的穿過。當這扇門被開啟，它將通向一個半位面，呈現出一個由木頭或石質製造，各邊30呎寬的空房間。當此法術結束時，這扇門將消失，且隨著另一側的門一起消失，任何仍在半位面內的生物和物體將繼續被困在該處。",
            "每次你施放此法術時，你可以創造一個新的半位面，或讓這道幽影之門連接上你過去施放此法術時創造的半位面。此外，若你知曉一個由其他生物透過施放此法術所創造的半位面的性質和內容，則你也可以讓這扇幽影之門改為連接上它的半位面。"
        ],
        "page": 231,
        "permanentEffects": true
    },
    {
        "name": "湮滅波",
        "ENG_name": "Destructive Wave",
        "level": 5,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "radius",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Tempest",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade (UA)",
                        "source": "UAWarlockAndWizard"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Strength (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Zeal (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Destruction (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你重擊地面，創造出一波從你身上向外迸發的神性能量。每個距離你30呎內你所選擇的生物都必須成功通過一次體質豁免，否則受到{@dice 5d6}雷鳴傷害，以及{@dice 5d6}光耀或死靈傷害（由你選擇），且被擊倒{@condition 伏地}。豁免成功的生物只受到一半的傷害，且不會被擊倒{@condition 伏地}。"
        ],
        "page": 231,
        "damageInflict": [
            "necrotic",
            "radiant",
            "thunder"
        ],
        "savingThrow": [
            "constitution"
        ],
        "conditionInflict": [
            "prone"
        ],
        "areaTags": [
            "MT",
            "R"
        ],
        "backgrounds": [
            {
                "name": "Gruul Anarch",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "偵測善惡",
        "ENG_name": "Detect Evil and Good",
        "level": 1,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在法術持續期間，你得知距離你30呎範圍內是否有異怪、天界生物、元素、精類、邪魔或不死生物存在，你也能得知該生物的位置。同樣的，你得知距離你30呎範圍內是否有聖潔或被褻瀆的地方或物體存在。",
            "此法術可以穿透大部分的障礙物，但會被1呎厚的石頭、1吋厚的尋常金屬、一層薄薄的鉛、或3呎的木頭或泥土給阻擋。"
        ],
        "page": 231
    },
    {
        "name": "偵測魔法",
        "ENG_name": "Detect Magic",
        "level": 1,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Arcana",
                        "source": "SCAG"
                    }
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "在法術持續期間，你能察覺距離你30呎範圍內所有魔法的存在。如果你以這個方式偵查魔法，你可以使用你的動作去查看該區域內，任何環繞在含有魔法的可見生物或物體周遭的淡淡魔法靈氣，且你將得知該魔法的學派。",
            "此法術可以穿透大部分的障礙物，但會被1呎厚的石頭、1吋厚的尋常金屬、一層薄薄的鉛、或3呎的木頭或泥土給阻擋。"
        ],
        "page": 231,
        "races": [
            {
                "name": "Firbolg",
                "source": "VGM"
            }
        ]
    },
    {
        "name": "偵測毒素或疾病",
        "ENG_name": "Detect Poison and Disease",
        "level": 1,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一片紫杉葉"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "在法術持續期間，你可以察覺距離你30呎範圍內任何毒素、有毒生物、疾病的存在和位置。你同時能夠辨識出各毒素、有毒生物、或疾病的種類。",
            "此法術可以穿透大部分的障礙物，但會被1呎厚的石頭、1吋厚的尋常金屬、一層薄薄的鉛、或3呎的木頭或泥土給阻擋。"
        ],
        "page": 231,
        "backgrounds": [
            {
                "name": "Simic Scientist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "偵測思想",
        "ENG_name": "Detect Thoughts",
        "level": 2,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一塊銅片"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Great Old One",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在法術持續期間，你可以閱讀某些生物的思想。當你施放此法術時、以及在法術結束前以一個動作，你可以集中心神於任何一個距離你30呎內且你能看見的生物。如果你所選擇的生物的智力為3或更低，或者該生物不懂任何一種語言，則該生物不受影響。",
            "你一開始會得知該生物的表層想法\u2014它腦中當下最主要的思想。以一個動作，你可以轉移你的注意力到另一個生物的思想上，或者嘗試更加深入同一個生物的想法。如果你選擇深入，則目標必須進行一次睿知豁免。若它失敗，你將理解它的推論理據（若有）、它的情緒狀態、以及其他在它腦海中揮之不去的事物（像是它擔憂、愛、或恨著的東西）。若它成功，則此法術結束。無論成功與否，目標都會知道你正嘗試深入它的思想，且除非你將你的注意力轉移到另一個生物的思想，否則該生物將可以在它的回合使用它的動作進行一次智力檢定以對抗你的智力檢定；若它成功，則此法術結束。",
            "直接針對目標生物的口頭提問可以自然地影響它的思想方向，因此這個法術在審訊中特別有用。",
            "你也可以使用此法術以偵測你無法看見的，擁有思維生物的存在。當你施放此法術或在持續期間以一個動作，你可以搜尋距離你30呎內的思想。此法術可以穿透障礙物，但會被2呎厚的石頭、2吋厚的鉛以外的任何金屬、或一層薄薄的鉛給阻擋。你無法偵測一個智力為3或更低，或者不懂任何一種語言的生物。",
            "一旦你以這個方式偵測到一個生物的存在，你將可以在法術持續期間以上述方式閱讀它的思想。你甚至不需要看見它，但它仍必須處於範圍內。"
        ],
        "page": 231,
        "savingThrow": [
            "wisdom"
        ],
        "opposedCheck": [
            "intelligence"
        ],
        "races": [
            {
                "name": "Gith (Githzerai)",
                "source": "UAEladrinAndGith",
                "baseName": "Gith",
                "baseSource": "UAEladrinAndGith"
            },
            {
                "name": "Gith (Githzerai)",
                "source": "MTF",
                "baseName": "Gith",
                "baseSource": "MTF"
            },
            {
                "name": "Tiefling (Dispater)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "backgrounds": [
            {
                "name": "Dimir Operative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "次元門",
        "ENG_name": "Dimension Door",
        "level": 4,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 500
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Trickery",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Vengeance",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ambition (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Lolth (Twitter)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你將自己從目前的位置傳送到射程內任何其他位置。你精確地抵達你所想要去的位置。這個位置可以是你所能看見的地方、一個你可以想像到的地方、或一個藉由陳述距離和方位來指定的位置，像是「200呎直線向下」或「向上往西北方偏45度角，300呎」。",
            "你可以帶著物體傳送，只要它們的重量不會超過你所能攜帶的上限。你也可以帶著一個體型和你相同或更小的自願生物傳送，且它所攜帶的裝備不能超過它的負載上限。該生物必須在你施放此法術時距離你5呎內。",
            "若你將被傳送到一處已被一個物體或生物佔據的空間，則你和任何與你一起被傳送的生物都將各自受到{@dice 4d6}力場傷害，且此法術傳送失敗。"
        ],
        "page": 233,
        "damageInflict": [
            "force"
        ]
    },
    {
        "name": "易容術",
        "ENG_name": "Disguise Self",
        "level": 1,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Trickery",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ambition (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Deep Stalker (UA)",
                        "source": "UALightDarkUnderdark"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Gloom Stalker",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Deep Stalker (UA)",
                        "source": "UATheRangerRevised"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Gloom Stalker",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你使你自己\u2014包括你的服裝、護甲、武器、以及其他屬於你個人的物品\u2014看起來不一樣，直到法術結束或你使用你的動作解消它。你可以讓自己看起來比原本更矮或更高1呎，或表現得更瘦、更胖、或在兩者之間。你無法改變你的身體型態，因此你必須採用有著相同基本肢體架構的外型。除此之外，該幻術的表現程度由你決定。",
            "此法術帶來的改變經不起物理的檢驗。舉例來說，若你使用此法術為自己添了一頂帽子，其他物體會穿過這頂帽子，且任何碰觸帽子的人會什麼都摸不到或直接摸到你的頭和頭髮。若你使用此法術讓自己看起來比原本更瘦，則某人向著你伸出的手將在途中撞到你，儘管它看起來像是還在半空中。",
            "要辨別出你的偽裝，一個生物必須使用它的動作去檢驗你的外表，並必須成功通過一次智力（{@skill 調查}）檢定，難度等同於你的法術豁免DC。"
        ],
        "page": 233,
        "opposedCheck": [
            "intelligence"
        ],
        "races": [
            {
                "name": "Firbolg",
                "source": "VGM"
            },
            {
                "name": "Tiefling (Dispater)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Glasya)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Dispater)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Glasya)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "backgrounds": [
            {
                "name": "Dimir Operative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "解離術",
        "ENG_name": "Disintegrate",
        "level": 6,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一塊天然磁石和一撮塵土"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道細瘦的綠色光束從你的指間射向一個射程內你所能看見的目標。目標可以是一個生物、一個物體、或一個魔法力量的造物，像是{@spell 力牆術}所創造的牆壁。",
            "一個被做為此法術目標的生物必須進行一次敏捷豁免。若豁免失敗，目標將受到{@dice 10d6 + 40}力場傷害。若這個傷害使目標的生命值歸零，則目標將被解離。",
            "一個被解離的生物，以及除了魔法物品以外的所有它所穿戴或攜帶的物品，都將被化作一堆細緻的灰色粉塵。該生物只能透過{@spell 完全復活術}或{@spell 祈願術}法術復活。",
            "此法術將自動解離一個大型或更小的非魔法物體或魔法力量造物。若目標為一個巨型或更大的物體或魔法造物，則此法術將解離它一塊10呎邊長立方體大小的部份。一個魔法物品不會受到此法術的影響。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用7環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 10d6 + 40|6-9|3d6}。"
                ]
            }
        ],
        "page": 233,
        "damageInflict": [
            "force"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "反制善惡",
        "ENG_name": "Dispel Evil and Good",
        "level": 5,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "聖水或鐵和銀粉"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "閃爍的能量環繞並保護你不受精類、不死生物、和源自物質位面以外的生物。在法術持續期間，天界生物、元素、精類、邪魔、和不死生物在對你的攻擊檢定中具有劣勢。",
            "你可以藉由以下的特殊方式以提早結束此法術。",
            {
                "type": "entries",
                "name": "破除惑控",
                "entries": [
                    "以你的一個動作，你碰觸一個觸及範圍內被{@condition 魅惑}、{@condition 恐懼}、或被天界生物、元素、精類、邪魔、或不死生物附身的生物。你觸碰的該生物將不再被{@condition 魅惑}、{@condition 恐懼}、或被這類生物附身。"
                ]
            },
            {
                "type": "entries",
                "name": "驅逐",
                "entries": [
                    "以你的一個動作，對一個觸及範圍內的天界生物、元素、精類、邪魔、或不死生物進行一次近戰法術攻擊。若命中，則你嘗試驅使該生物回到它的原生位面。目標必須成功通過一次魅力豁免，否則被送回它的原生位面（若它已經在該位面則無效）。若它們不在它們的原生位面，則不死生物將被送回墮影冥界，而精類則被送回妖精荒野。"
                ]
            }
        ],
        "page": 233,
        "savingThrow": [
            "charisma"
        ],
        "spellAttack": [
            "M"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "解除魔法",
        "ENG_name": "Dispel Magic",
        "level": 3,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Arcana",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Trickery",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Devotion",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "選擇射程內的一個生物、物體、或魔法效果。任何目標上3環或以下的法術將立刻結束。至於每個目標上4環或更高的法術，則使用你的施法屬性進行一次屬性檢定。DC等同於10+該法術的環階。若檢定成功，則結束該法術。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用4環或更高的法術位施放此法術時，如果作用於目標上的法術的環階等於或低於你所使用的法術位，則你將自動結束該法術的效果。"
                ]
            }
        ],
        "page": 234,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "噪音暗語",
        "ENG_name": "Dissonant Whispers",
        "level": 1,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Great Old One",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你向射程內你所選且能聽見你的一個生物低語一段只有它聽得到的不協調旋律，以可怕的痛苦折磨它。目標必須進行一次睿知豁免。若豁免失敗，則它受到{@dice 3d6}精神傷害，且可以的話必須立刻使用它的反應，向著遠離你的方向移動等同它移動速度的距離。該生物不會移動到有著明顯危險的地方，像是火焰或坑洞。若豁免成功，則目標只受到一半的傷害，且不需要遠離。一個{@condition 耳聾}的生物自動成功於該豁免。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 3d6|1-9|1d6}。"
                ]
            }
        ],
        "page": 234,
        "damageInflict": [
            "psychic"
        ],
        "savingThrow": [
            "wisdom"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Rakdos Cultist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "預言術",
        "ENG_name": "Divination",
        "level": 4,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "合計價值至少25金幣焚香和一個與你信仰相稱的祭物，在施法時消耗",
                "cost": 25,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Forest"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Grassland"
                    }
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "你的魔法和祭品讓你得以和一位神明或一個神的使者接觸。你可以詢問一個關於會在7天內發生的特定目標、事件、或活動。DM將會如實回答。這個回答可能是一個短詞、一段詩謎、或一個預兆。",
            "此法術並不會將任何可能改變結果的潛在環境因素納入考量，像是施展額外的法術或者同伴的加入或離去。",
            "若你在完成下一次長休之前施放此法術兩次或以上，則第一次之後的每次施放都會有累積25%的機率導致隨機的結果。DM將暗自擲骰決定。"
        ],
        "page": 234,
        "backgrounds": [
            {
                "name": "Azorius Functionary",
                "source": "GGR"
            },
            {
                "name": "Izzet Engineer",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "神恩術",
        "ENG_name": "Divine Favor",
        "level": 1,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "War",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Strength (PSA)",
                        "source": "PSA"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你的祈禱使你充滿神聖的光芒。直到法術結束前，你的武器攻擊將在命中時造成額外{@dice 1d4}光耀傷害。"
        ],
        "page": 234,
        "damageInflict": [
            "radiant"
        ]
    },
    {
        "name": "聖言術",
        "ENG_name": "Divine Word",
        "level": 7,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你念誦一句神聖之語，充滿著在創世黎明期時形塑世界的力量。選擇射程內你所能看見的任意數量個生物。每個可以聽見你的生物都必須進行一次魅力豁免。若豁免失敗，則生物將根據它的當下生命值而承受效果：",
            {
                "type": "list",
                "items": [
                    "50點生命值或更少：長達1分鐘的{@condition 耳聾}狀態",
                    "40點生命值或更少：長達10分鐘的{@condition 耳聾}和{@condition 目盲}狀態",
                    "30點生命值或更少：長達1小時的{@condition 耳聾}、{@condition 目盲}、和{@condition 震懾}狀態",
                    "20點生命值或更少：立刻死亡"
                ]
            },
            "無論它當下的生命值為何，一個在該豁免檢定中失敗的天界生物、元素、精類、或邪魔都將被迫返回它的原生位面（若它不在該位面），且在24小時內無法再透過任何除了{@spell 祈願術}以外的方式回到你當下所在的位面。"
        ],
        "page": 234,
        "savingThrow": [
            "charisma"
        ],
        "conditionInflict": [
            "blinded",
            "deafened",
            "stunned"
        ],
        "areaTags": [
            "MT"
        ]
    },
    {
        "name": "支配野獸",
        "ENG_name": "Dominate Beast",
        "level": 4,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Nature",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Archfey",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Great Old One",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest (UA)",
                        "source": "UAPaladin"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest v2 (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Strength (PSA)",
                        "source": "PSA"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你試圖迷惑一個射程內你所能看見的野獸。它必須成功通過一次睿知豁免，否則在法術持續期間被你{@condition 魅惑}。若你或對你友善的生物正在與它戰鬥，則它在該豁免檢定中具有優勢。",
            "當該野獸被{@condition 魅惑}，只要你們兩個還在同一個存在位面，則你與它之間將建立起一道心靈連結。你可以在你保有意識的時候使用這道心靈連結以對該生物下達命令（不需要花費動作），而它將盡它的全力服從。你可以指定一個簡單且籠統的行動，像是「攻擊那個生物」、「跑來這裡」、或「拿回那個物體」。若該生物完成了命令且沒有收到來自你進一步的指示，則它將盡它的全力防衛並保護它自己。",
            "你可以使用你的動作以完全而精準地控制目標。直到你的下個回合結束前，該生物只會採取你所選擇的動作，且不會作出任何你不允許的事。在這段期間，你也可以讓該生物採取一個反應，但這也將需要你使用你自己的反應。",
            "每次目標受到傷害時，它必須再進行一次新的睿知豁免以對抗此法術。若豁免成功，則此法術結束。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用5環法術位施放此法術時，持續時間變為專注,至多10分鐘。當你使用6環法術位施放此法術時，持續時間變為專注,至多1小時。當你使用7環或更高的法術位施放此法術時，持續時間變為專注,至多8小時。"
                ]
            }
        ],
        "page": 234,
        "savingThrow": [
            "wisdom"
        ],
        "conditionInflict": [
            "charmed"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Gruul Anarch",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "支配怪物",
        "ENG_name": "Dominate Monster",
        "level": 8,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你試圖迷惑一個射程內你所能看見的生物。它必須成功通過一次睿知豁免，否則在法術持續期間被你{@condition 魅惑}。若你或對你友善的生物正在與它戰鬥，則它在該豁免檢定中具有優勢。",
            "當該生物被{@condition 魅惑}，只要你們兩個還在同一個存在位面，則你與它之間將建立起一道心靈連結。你可以在你保有意識的時候使用這道心靈連結以對該生物下達命令（不需要花費動作），而它將盡它的全力服從。你可以指定一個簡單且籠統的行動，像是「攻擊那個生物」、「跑來這裡」、或「拿回那個物體」。若該生物完成了命令且沒有收到來自你進一步的指示，則它將盡它的全力防衛並保護它自己。",
            "你可以使用你的動作以完全而精準地控制目標。直到你的下個回合結束前，該生物只會採取你所選擇的動作，且不會作出任何你不允許的事。在這段期間，你也可以讓該生物採取一個反應，但這也將需要你使用你自己的反應。",
            "每次目標受到傷害時，它必須再進行一次新的睿知豁免以對抗此法術。若豁免成功，則此法術結束。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用9環法術位施放此法術時，持續時間變為專注,至多8小時。"
                ]
            }
        ],
        "page": 235,
        "savingThrow": [
            "wisdom"
        ],
        "conditionInflict": [
            "charmed"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "支配人類",
        "ENG_name": "Dominate Person",
        "level": 5,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Trickery",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Oathbreaker",
                        "source": "DMG"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Archfey",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Great Old One",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest (UA)",
                        "source": "UAPaladin"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest v2 (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Treachery (UA)",
                        "source": "UAPaladin"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ambition (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order (UA)",
                        "source": "UAOrderDomain"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Beauty (Stream)",
                        "source": "Twitter"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order",
                        "source": "GGR"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你試圖迷惑一個射程內你所能看見的類人生物。它必須成功通過一次睿知豁免，否則在法術持續期間被你{@condition 魅惑}。若你或對你友善的生物正在與它戰鬥，則它在該豁免檢定中具有優勢。",
            "當目標被{@condition 魅惑}，只要你們兩個還在同一個存在位面，則你與它之間將建立起一道心靈連結。你可以在你保有意識的時候使用這道心靈連結以對該生物下達命令（不需要花費動作），而它將盡它的全力服從。你可以指定一個簡單且籠統的行動，像是「攻擊那個生物」、「跑來這裡」、或「拿回那個物體」。若該生物完成了命令且沒有收到來自你進一步的指示，則它將盡它的全力防衛並保護它自己。",
            "你可以使用你的動作以完全而精準地控制目標。直到你的下個回合結束前，該生物只會採取你所選擇的動作，且不會作出任何你不允許的事。在這段期間，你也可以讓該生物採取一個反應，但這也將需要你使用你自己的反應。",
            "每次目標受到傷害時，它必須再進行一次新的睿知豁免以對抗此法術。若豁免成功，則此法術結束。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用6環法術位施放此法術時，持續時間變為專注,至多10分鐘。當你使用7環法術位施放此法術時，持續時間變為專注,至多1小時。當你使用8環或更高的法術位施放此法術時，持續時間變為專注,至多8小時。"
                ]
            }
        ],
        "page": 235,
        "savingThrow": [
            "wisdom"
        ],
        "conditionInflict": [
            "charmed"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Azorius Functionary",
                "source": "GGR"
            },
            {
                "name": "Rakdos Cultist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "卓姆吉瞬間召喚",
        "ENG_name": "Drawmij's Instant Summons",
        "level": 6,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一個價值1,000金幣的藍寶石",
                "cost": 1000
            }
        },
        "duration": [
            {
                "type": "permanent",
                "ends": [
                    "dispel"
                ]
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "你觸碰一個重量為10磅或以下、且最大邊長為6呎或以下的物體。此法術將在它的表面留下一個隱形的印記，並在你用來做為材料構材的藍寶石上留下一道寫著該物體名稱的隱形銘印。每次你施放此法術時，你都必須使用一顆不同的藍寶石。",
            "在這之後的任何時候，你可以使用你的動作以說出該物體的名字，並粉碎該藍寶石。無論該物體與你之間的物理和位面距離有多遠，它都將瞬間出現在你的手中，且此法術結束。",
            "若另一個生物正持有或攜帶該物品，則粉碎藍寶石並不會將該物體傳送到你手中，取而代之，你將知道正擁有該物體的生物是誰，且能知道該生物在那個時間點所在的大致位置。",
            "一個成功作用於該藍寶石的{@spell 解除魔法}法術或類似的效果將會結束這個法術的效果。"
        ],
        "page": 235
    },
    {
        "name": "託夢術",
        "ENG_name": "Dream",
        "level": 5,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "special"
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一把沙、少許墨水、以及一根從睡著鳥兒身上拔下的羽毛筆"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 8
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Forest"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術能塑造一個生物的夢境。選擇一個你所知道的生物做為此法術的目標。目標必須與你處在相同的存在位面。不會睡著的生物，例如精靈，無法透過此法術接觸。你或一個你所觸碰的自願生物將進入傳思狀態，並擔當信使的角色。當處於傳思的狀態時，信使仍能意識到他或她周遭的環境，但無法採取動作或移動。",
            "若該生物在睡眠中，則信使將出現在目標的夢境，且只要目標仍在睡眠中，信使就可以在法術的持續期間與它交談。信使也可以塑造夢境中的環境，創造地貌、物體、和其他影像。信使可以在任何時候從傳思狀態中脫離，提早結束此法術的效果。目標可以在醒來後完美地回憶起夢境的內容。若目標在你施放此法術時是清醒的，信使將會知道這件事，且可以選擇結束傳思狀態（以及此法術），或等待目標睡著，並在那時出現在目標的夢境中。",
            "你可以讓信使對目標呈現怪物般恐怖的樣貌。若你這麼做，則信使只能傳遞一段不超過十個字的信息，且目標必須進行一次睿知豁免。若豁免失敗，這頭幻影怪物的迴響將在目標的睡眠期間生成一場惡夢，防止它得益於任何休息的好處。此外，當目標甦醒，它將受到{@dice 3d6}精神傷害。",
            "若你擁有目標的一塊身體部位、一縷頭髮、一片指甲、或其他類似的身體部位，則目標在進行此豁免檢定時具有劣勢。"
        ],
        "page": 236,
        "damageInflict": [
            "psychic"
        ],
        "savingThrow": [
            "wisdom"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "德魯伊伎倆",
        "ENG_name": "Druidcraft",
        "level": 0,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Fighter",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Arcane Archer",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "對大自然的精魂低語，你在射程內創造出下列其中一種效果：",
            {
                "type": "list",
                "items": [
                    "你創造出一個小而無害的感官效果，用以預測你所在地方接下來24小時的天氣狀況。這個效果可能會以一個金色球體代表晴空、雲朵代表下雨、飄落雪花代表雪日等等。這個效果將持續一輪。",
                    "你立刻使一朵花綻放、種莢破殼、或葉芽生長。",
                    "你創造出一個即效、無害的感官效果，像是落葉、微風吹拂、小動物的聲音、或是臭鼬微弱的臭氣。這個效果的作用範圍必須要在5呎立方空間中。",
                    "你立刻點亮或熄滅一根蠟燭、火炬、或一處小型篝火。"
                ]
            }
        ],
        "page": 236,
        "backgrounds": [
            {
                "name": "Selesnya Initiate",
                "source": "GGR"
            },
            {
                "name": "Simic Scientist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "地震術",
        "ENG_name": "Earthquake",
        "level": 8,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 500
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一撮泥土、一塊岩石、和一團黏土"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內你所能看見地面上的一點創造出一陣地震擾動。在法術持續期間，一陣劇烈的震動將撕扯著以該點為中心100呎半徑範圍內的地面，並撼動所有與該區域地面相接的生物和建築物。",
            "區域內的地面將變為困難地形。每個地面上正專注於法術的生物都必須進行一次體質豁免。若豁免失敗，則該生物的專注將被中斷。",
            "當你施放此法術，以及當你在你的每個回合結束仍專注於此法術時，每個在該區域內地面上的生物都必須進行一次敏捷豁免。若豁免失敗，則該生物將被擊倒{@condition 伏地}。",
            "根據該區域的地形，此法術可以具有額外的效果，由DM決定。",
            {
                "type": "entries",
                "name": "裂縫",
                "entries": [
                    "在你施放此法術後的下個回合開始時，此法術範圍內的地面將被撕扯出數個裂縫。總共{@dice 1d6}個這樣的裂縫出現在DM所選的位置。每個裂縫具有{@dice 1d10 × 10}呎深度、10呎寬，且從此法術範圍的一側延伸至另一惻。一個站在裂縫出現位置的生物必須成功通過一次敏捷豁免，否則將墜入其中。一個成功通過此豁免的生物則在裂縫出現時移動到它的邊緣。",
                    "一個在建築物下方出現的裂縫將使該建築物自動崩塌（見下文）。"
                ]
            },
            {
                "type": "entries",
                "name": "建築物",
                "entries": [
                    "當你施放此法術，以及直到此法術結束前的每個你的回合開始時，這陣震動將對任何與區域內地面相接的建築物造成50點鈍擊傷害。若一棟建築物的生命值歸零，它將崩塌且可能因此傷害附近的生物。一個與該建築物之間的距離在建築物高度一半之內的生物必須進行一次敏捷豁免。若豁免失敗，該生物將受到{@dice 5d6}鈍擊傷害，被擊倒{@condition 伏地}，且被瓦礫堆給掩埋，需要以一個動作進行一次DC 20的力量（{@skill 運動}）檢定才有辦法逃脫。根據瓦礫堆的性質，DM可以調整這個檢定的DC。若豁免成功，則該生物將只受到一半的傷害，且不會{@condition 伏地}或被掩埋。"
                ]
            }
        ],
        "page": 236,
        "damageInflict": [
            "bludgeoning"
        ],
        "savingThrow": [
            "constitution",
            "dexterity"
        ],
        "opposedCheck": [
            "strength"
        ],
        "conditionInflict": [
            "prone"
        ],
        "areaTags": [
            "R"
        ]
    },
    {
        "name": "魔能爆",
        "ENG_name": "Eldritch Blast",
        "level": 0,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Warlock",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道劈哩啪啦的能量束向著射程內的一個生物疾馳而去。對目標進行一次遠程法術攻擊。若命中，目標將受到{@dice 1d10}力場傷害。",
            "此法術將在你升至更高等級時創造出一條以上的光束：5級時兩道光束、11級時三道光束、17級時四道光束。你可以指揮這些光束擊向相同或不同的目標。為每一道光束進行各自的攻擊檢定。"
        ],
        "page": 237,
        "damageInflict": [
            "force"
        ],
        "spellAttack": [
            "R"
        ],
        "scalingEffects": true,
        "areaTags": [
            "ST",
            "MT"
        ]
    },
    {
        "name": "元素武器",
        "ENG_name": "Elemental Weapon",
        "level": 3,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade (UA)",
                        "source": "UAWarlockAndWizard"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Stone",
                        "source": "UASorcerer"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Stone",
                        "source": "UASorcerer"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一把你觸碰的非魔法武器變為魔法武器。選擇以下其中一種傷害類型：酸蝕、寒冰、火焰、閃電、或雷鳴。在法術持續期間，武器在攻擊檢定上具有+1加值，且在它命中時造成額外{@dice 1d4}所選類型的傷害。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用5環或6環法術位施放此法術時，加值增加至+2且額外傷害增加至{@scaledice 1d4|3-9|2d4}。當你使用7環或更高的法術位施放此法術時，加值增加至+3且額外傷害增加至{@scaledice 1d4|3-9|3d4}。"
                ]
            }
        ],
        "page": 237,
        "damageInflict": [
            "acid",
            "cold",
            "fire",
            "lightning",
            "thunder"
        ],
        "backgrounds": [
            {
                "name": "Izzet Engineer",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "強化屬性",
        "ENG_name": "Enhance Ability",
        "level": 2,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "野獸的毛皮或羽毛"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Strength (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Primeval Guardian (UA)",
                        "source": "UARangerAndRogue"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Primeval Guardian (UA)",
                        "source": "UARangerAndRogue"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order (UA)",
                        "source": "UAOrderDomain"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個生物並贈予它一個魔法強化。選擇以下其中一個效果；該目標在法術結束前獲得該效果。",
            {
                "type": "entries",
                "name": "熊之堅韌",
                "entries": [
                    "目標在體質檢定上具有優勢。它同時獲得{@dice 2d6}點臨時生命值，在法術結束時失去。"
                ]
            },
            {
                "type": "entries",
                "name": "牛之力量",
                "entries": [
                    "目標在力量檢定上具有優勢，且他或她的負重加倍。"
                ]
            },
            {
                "type": "entries",
                "name": "貓之優雅",
                "entries": [
                    "目標在敏捷檢定上具有優勢。且若它並未陷入{@condition 無力}，則它在從20呎以內高度墜落時不會受到傷害。"
                ]
            },
            {
                "type": "entries",
                "name": "鷹之威儀",
                "entries": [
                    "目標在魅力檢定上具有優勢。"
                ]
            },
            {
                "type": "entries",
                "name": "狐之狡黠",
                "entries": [
                    "目標在智力檢定上具有優勢。"
                ]
            },
            {
                "type": "entries",
                "name": "梟之睿智",
                "entries": [
                    "目標在睿知檢定上具有優勢。"
                ]
            }
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以再額外選擇一個生物作為目標。"
                ]
            }
        ],
        "page": 237,
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Simic Scientist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "變巨/縮小術",
        "ENG_name": "Enlarge/Reduce",
        "level": 2,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一撮鐵粉"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Giant Soul (UA)",
                        "source": "UAGiantSoulSorcerer",
                        "subSubclass": "Hill"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Destruction (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你使射程內你所能看見的一個生物或物體在法術持續期間變大或變小。選擇一個生物或一個未被穿戴或攜帶的物體。若目標非自願，則它可以進行一次體質豁免。若豁免成功，則此法術無效。",
            "若目標是一個生物，則所有它所穿戴或攜帶的東西都會跟著它一起改變大小。任何道具一旦從受影響生物身上掉落，就會恢復成原本的大小。",
            {
                "name": "變巨",
                "type": "entries",
                "entries": [
                    "目標的各邊尺寸變為兩倍，且它的重量變為八倍。這個變化會讓它的體型增長一級\u2014例如從中型變大型。若空間不足以讓目標尺寸增長到兩倍，則該生物或物體將會長到該空間可容納的最大尺寸。直到法術結束前，目標在力量檢定和力量豁免上具有優勢。目標的武器也會成長到符合它的新體型。當這些武器被變巨時，目標使用他們進行的攻擊將造成{@dice 1d4}的額外傷害。"
                ]
            },
            {
                "name": "縮小",
                "type": "entries",
                "entries": [
                    "目標的各邊尺寸變為一半，且它的重量變為原本的八分之一。這個變化會讓它的體型縮減一級\u2014例如從中型變小型。直到法術結束前，目標在力量檢定和力量豁免上具有劣勢。目標的武器也會縮小到符合它的新體型。當這些武器被縮小時，目標使用他們進行的攻擊將減少{@dice 1d4}的傷害（這不會使傷害減至低於1）。"
                ]
            }
        ],
        "page": 237,
        "savingThrow": [
            "constitution",
            "strength"
        ],
        "races": [
            {
                "name": "Dwarf (Duergar)",
                "source": "SCAG",
                "baseName": "Dwarf",
                "baseSource": "PHB"
            },
            {
                "name": "Dwarf (Duergar)",
                "source": "MTF",
                "baseName": "Dwarf",
                "baseSource": "PHB"
            }
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Simic Scientist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "誘捕打擊",
        "ENG_name": "Ensnaring Strike",
        "level": 1,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ancients",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在法術結束前，下一次你以武器攻擊命中一個生物時，一大團扭曲的荊棘藤蔓將從攻擊點蔓延而出，且目標必須成功通過一次力量豁免，否則將被魔法藤蔓給{@condition 束縛}直到法術結束。體型為大型或更大的生物在此豁免上具有優勢。若該目標豁免成功，藤蔓將枯萎而去。",
            "當被此法術{@condition 束縛}時，目標將在每次它回合開始的時候受到{@dice 1d6}穿刺傷害。一個被藤蔓{@condition 束縛}的生物、或任何可以碰觸到該生物的角色都可以使用它的動作進行一次對抗你法術豁免DC的力量檢定。若檢定成功，則該目標被釋放。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 1d6|1-9|1d6}。"
                ]
            }
        ],
        "page": 237,
        "damageInflict": [
            "piercing"
        ],
        "savingThrow": [
            "strength"
        ],
        "opposedCheck": [
            "strength"
        ],
        "conditionInflict": [
            "restrained"
        ],
        "backgrounds": [
            {
                "name": "Azorius Functionary",
                "source": "GGR"
            },
            {
                "name": "Azorius Functionary",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "糾纏術",
        "ENG_name": "Entangle",
        "level": 1,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 90
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Primeval Guardian (UA)",
                        "source": "UARangerAndRogue"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Primeval Guardian (UA)",
                        "source": "UARangerAndRogue"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Giant Soul (UA)",
                        "source": "UAGiantSoulSorcerer",
                        "subSubclass": "Stone"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "糾纏緊繞的野草和藤蔓從射程內一點周遭20呎邊長立方體空間的地表蔓生而出。在法術持續期間，這些植物將使這片區域的地面變成困難地形。",
            "當你施放此法術時，處於該區域內的生物必須成功通過一次力量豁免，否則直到法術結束前都將被緊緊纏繞的植物給{@condition 束縛}。一個被這些植物給{@condition 束縛}的生物可以使用它的動作進行一次對抗你法術豁免DC的力量檢定。若檢定成功，則它成功使自己被釋放。",
            "當此法術結束，這些被喚出的植物將枯萎而去。"
        ],
        "page": 238,
        "savingThrow": [
            "strength"
        ],
        "opposedCheck": [
            "strength"
        ],
        "conditionInflict": [
            "restrained"
        ],
        "areaTags": [
            "Q"
        ],
        "backgrounds": [
            {
                "name": "Golgari Agent",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "注目術",
        "ENG_name": "Enthrall",
        "level": 2,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Beauty (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你編織一段令人分神的文字，使射程內你所選，你能看見，且能聽見你的所有生物進行一次睿知豁免。任何不會被{@condition 魅惑}的生物將自動成功通過此豁免檢定，且若你或你的同伴正在與該生物戰鬥，則它在此豁免檢定中具有優勢。若豁免失敗，則目標將在用以察覺任何除了你以外的生物的睿知（觀察）檢定中具有劣勢，直到此法術結束或直到目標不再能聽見你為止。此法術將在你陷入{@condition 無力}或不再能說話時結束。"
        ],
        "page": 238,
        "savingThrow": [
            "wisdom"
        ],
        "races": [
            {
                "name": "Tiefling (Variant)",
                "source": "SCAG",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "areaTags": [
            "MT"
        ],
        "backgrounds": [
            {
                "name": "Orzhov Representative",
                "source": "GGR"
            },
            {
                "name": "Rakdos Cultist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "跨入乙太界",
        "ENG_name": "Etherealness",
        "level": 7,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 8,
                    "upTo": true
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你踏入乙太位面與你當下所在位面重疊的邊界區域。你在法術持續期間維持在乙太邊界，或直到你使用你的動作以解消此法術。在這段期間，你可以向任意方向移動。若你向上或向下移動，則你每移動一呎都會再額外消耗一呎的移動速度。你可以看見並聽見你原本所在的位面，但該位面的景象將呈現灰階，且你不能看見任何距離60呎外的事物。",
            "當處於乙太位面時，你只能影響或被其他處於該位面的生物影響。除非特殊能力或魔法讓它們這麼做，否則不在乙太位面的生物無法察覺你，也無法與你產生互動。",
            "你忽略所有不在乙太位面的物體或效果，這讓你能夠移動穿過任何你在原本所在位面所能察覺到的物體。",
            "當此法術結束時，你立刻返回你原本所在位面中你當下所佔據的位置。若你在這時與一個固態物體或生物佔據著相同的位置，則你將立刻被排至最近的一處未被佔據空間，且受到等同於你被移動距離呎數兩倍的力場傷害。",
            "當你在處於乙太位面、或處於非接壤於乙太位面的位面，像是外層位面，時施放此法術，則此法術不會有任何效果。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用8環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以再額外選擇最多三個自願生物作為目標。這些生物在你施放此法術時必須距離你10呎內。"
                ]
            }
        ],
        "page": 238,
        "damageInflict": [
            "force"
        ]
    },
    {
        "name": "艾伐黑觸手",
        "ENG_name": "Evard's Black Tentacles",
        "level": 4,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 90
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一根來自巨章魚或巨魷魚的觸手"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Great Old One",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Kraken (Stream)",
                        "source": "Stream"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Darkness (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "烏黑蠕動的觸手將充斥在射程內你所能看見的一處20呎邊長的方形地面。在法術持續期間，這些觸手將使區域內的地面變成困難地形。",
            "當一個生物在一個回合中第一次進入該區域，或在該處開始它的回合，則該生物必須成功通過一次敏捷豁免，否則受到{@dice 3d6}鈍擊傷害並被這些觸手{@condition 束縛}直到此法術結束。一個已經被這些觸手{@condition 束縛}的生物會在該區域開始它回合的時候受到{@dice 3d6}鈍擊傷害。",
            "一個被這些觸手{@condition 束縛}的生物可以使用它的動作以進行一次對抗你法術豁免DC的力量或敏捷檢定（由它決定）。若檢定成功，則它從觸手中被釋放。"
        ],
        "page": 238,
        "damageInflict": [
            "bludgeoning"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "opposedCheck": [
            "strength",
            "dexterity"
        ],
        "conditionInflict": [
            "restrained"
        ],
        "areaTags": [
            "Q"
        ]
    },
    {
        "name": "腳底抹油",
        "ENG_name": "Expeditious Retreat",
        "level": 1,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Treachery (UA)",
                        "source": "UAPaladin"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術讓你能以驚人的速度移動。當你施放此法術時，你接著直到法術結束前的每個回合都能夠以一個附贈動作採取{@action 疾走}動作。"
        ],
        "page": 238,
        "backgrounds": [
            {
                "name": "Simic Scientist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "攝心目光",
        "ENG_name": "Eyebite",
        "level": 6,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在法術持續期間，你的雙眼因注入了恐懼能量而變得漆黑空洞。一個距離你60呎內，你所選且你能看見的生物必須成功通過一次睿知豁免，否則將在法術持續期間受到以下其中一個你所選擇的效果影響。直到此法術結束前在你的每個回合，你可以使用你的動作以選擇另一個生物作為目標，但不能再選擇那些已經成功通過對抗此攝心目光豁免檢定的生物。",
            {
                "type": "entries",
                "name": "沉睡",
                "entries": [
                    "目標陷入{@condition 昏迷}。若它受到任何傷害、或有人使用它的動作把它搖醒，則它將醒轉。"
                ]
            },
            {
                "type": "entries",
                "name": "驚慌",
                "entries": [
                    "目標被你{@condition 恐懼}。在它的每個回合，除非它已經無路可逃，否則被{@condition 恐懼}的生物必須採取{@action 疾走}動作並以最安全且最短的路徑遠離你。若該目標移動到離你至少60呎遠，且無法再看到你的位置，則此法術結束。"
                ]
            },
            {
                "type": "entries",
                "name": "致病",
                "entries": [
                    "目標在攻擊檢定和屬性檢定具有劣勢。在它的每個回合結束時，它可以再進行一次睿知豁免。若它豁免成功，則此效果結束。"
                ]
            }
        ],
        "page": 238,
        "savingThrow": [
            "wisdom"
        ],
        "conditionInflict": [
            "frightened",
            "unconscious"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "鬼斧神工",
        "ENG_name": "Fabricate",
        "level": 4,
        "school": "T",
        "time": [
            {
                "number": 10,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你將未加工材料轉變成以相同材料製成的成品。例如，你可以將一叢樹木製造成一座木橋、將一把大麻變為繩子、或使亞麻或羊毛變為衣服。",
            "選擇射程內你所能看見的未加工材料。只要有足夠數量的未加工材料，你就可以製造一個尺寸為大型或更小的物體（可被容納於10呎邊長的立方體，或八個相互連接的5呎邊長立方體空間）。然而，如果你加工的對象是金屬、石頭、或其他礦物材質，則你製造物體的尺寸將不能超過中型（可被容納於一個5呎邊長的立方體空間）。此法術製造出來物體的品質將與未加工材料的品質相稱。",
            "生物或魔法物品不能被此法術創造或轉變。你也無法使用此法術創造一個通常需要高度技藝以製造的物品，像是珠寶、武器、玻璃、或護甲，除非你熟練於用來製造這些物品的工匠工具。"
        ],
        "page": 239,
        "permanentEffects": true
    },
    {
        "name": "妖火術",
        "ENG_name": "Faerie Fire",
        "level": 1,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Light",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Archfey",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Lolth (Twitter)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "射程內一處20呎邊長立方體內所有物體的輪廓被藍色、綠色、或紫羅蘭色的光芒（由你選擇）勾勒而出。任何在法術施放時處於該區域內的生物若失敗於一次敏捷豁免，則同樣會被光芒所環繞。在法術持續期間，被影響的物體和生物將散發出10呎半徑的微光光照。",
            "若攻擊者可以看見受影響生物或物體，則任何對目標所進行的攻擊檢定具有優勢，且受影響的生物或物體將無法受益於{@condition 隱形}狀態。"
        ],
        "page": 239,
        "savingThrow": [
            "dexterity"
        ],
        "races": [
            {
                "name": "Elf (Drow)",
                "source": "PHB",
                "baseName": "Elf",
                "baseSource": "PHB"
            },
            {
                "name": "Half-Elf (Drow Descent)",
                "source": "SCAG",
                "baseName": "Half-Elf",
                "baseSource": "PHB"
            }
        ],
        "areaTags": [
            "C"
        ]
    },
    {
        "name": "摹造生命",
        "ENG_name": "False Life",
        "level": 1,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "少量酒或蒸餾酒精"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Death",
                        "source": "DMG"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Undying",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Raven Queen (UA)",
                        "source": "UAWarlockAndWizard"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "以死靈術炮製的生命支撐自己，你在法術持續期間獲得{@dice 1d4 + 4}臨時生命值。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以額外再獲得5點臨時生命值。"
                ]
            }
        ],
        "page": 239
    },
    {
        "name": "恐懼術",
        "ENG_name": "Fear",
        "level": 3,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "cone",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一根白羽毛或母雞的心臟"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest (UA)",
                        "source": "UAPaladin"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest v2 (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Gloom Stalker",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Gloom Stalker",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Lolth (Twitter)",
                        "source": "Twitter"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Darkness (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你投射出生物心中最大恐懼的幻象魅影。每個30呎圓錐範圍內的生物必須成功通過一次睿知豁免，否則將丟下任何它所持握的東西，並在法術持續期間內陷入{@condition 恐懼}。",
            "當因此法術而陷入{@condition 恐懼}時，除非它無路可逃，否則該生物必須在每個它的回合採取{@action 疾行}動作並以最安全的途徑遠離你。若該生物在無法看見你的地方結束它的回合，則它可以進行一次睿知豁免。若豁免成功，則結束此法術對該生物的效果。"
        ],
        "page": 239,
        "savingThrow": [
            "wisdom"
        ],
        "conditionInflict": [
            "frightened"
        ],
        "areaTags": [
            "N"
        ],
        "backgrounds": [
            {
                "name": "Rakdos Cultist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "羽落術",
        "ENG_name": "Feather Fall",
        "level": 1,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "reaction",
                "condition": "在你或一個距離你60呎內的生物墜落時進行。"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "m": "一小根羽毛或羽絨"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Seeker (UA)",
                        "source": "UATheFaithful"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "選擇最多五個射程內的生物。直到法術結束前，墜落中生物的下降速率降至每輪60呎。若該生物在法術結束之前落地，則它不會承受任何墜落傷害且能用它的腳著地，接著結束這個法術對該生物的效果。"
        ],
        "page": 239,
        "areaTags": [
            "MT"
        ]
    },
    {
        "name": "弱智術",
        "ENG_name": "Feeblemind",
        "level": 8,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 150
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一把黏土、水晶、玻璃、或礦物球"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你爆破射程內你所能看見的一個生物的心靈，嘗試粉碎它的智力和人格。目標受到{@dice 4d6}精神傷害，且必須進行一次智力豁免。",
            "若豁免失敗，該生物的智力和魅力數值變為1。該生物無法施放法術、啟動魔法物品、理解語言、或以任何智能方式溝通。然而，該生物可以辨識出它的朋友、跟隨它們、或甚至保護它們。",
            "在每30天結束時，該生物可以重複它對抗此法術的豁免檢定。若它成功通過此豁免，則此法術結束。",
            "此法術也可以被{@spell 高等復原術}、{@spell 治癒術}、或{@spell 祈願術}給結束。"
        ],
        "page": 239,
        "damageInflict": [
            "psychic"
        ],
        "savingThrow": [
            "intelligence"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "假死術",
        "ENG_name": "Feign Death",
        "level": 3,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一撮墓地泥土"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Undying",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Raven Queen (UA)",
                        "source": "UAWarlockAndWizard"
                    }
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "你觸碰一個自願生物，並讓它進入一種難以跟死亡區別的僵硬狀態。",
            "在此法術持續期間，或直到你使用一個動作觸碰該目標並解消此法術，目標在對所有對其身體的檢驗、以及使用法術確認其狀態的結果上都會呈現已經死亡。目標將陷入{@condition 目盲}和{@condition 無力}狀態，且它的移動速度歸零。目標對除了精神傷害以外的所有傷害具有抗性。若目標在你施放此法術時已經感染疾病或{@condition 中毒}，或在此法術的效果作用時感染疾病或{@condition 中毒}，則該疾病和毒素在此法術結束前都不會有任何效果。"
        ],
        "page": 240,
        "damageResist": [
            "acid",
            "bludgeoning",
            "cold",
            "fire",
            "force",
            "lightning",
            "necrotic",
            "piercing",
            "poison",
            "radiant",
            "slashing",
            "thunder"
        ],
        "conditionInflict": [
            "blinded",
            "incapacitated"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "尋獲魔寵",
        "ENG_name": "Find Familiar",
        "level": 1,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "hour"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 10
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "價值10金幣的木炭、焚香、和香草，必須在黃銅盆中用火消耗",
                "cost": 10,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "你獲得一只為你效勞的魔寵，一只有著你從下列選項中選擇動物外型的精魂：{@creature 蝙蝠}、{@creature 貓}、{@creature 蟹}、{@creature 青蛙}(蟾蜍)、{@creature 獵鷹}、{@creature 蜥蜴}、{@creature 章魚}、{@creature 貓頭鷹}、{@creature 毒蛇}、魚({@creature 食人魚})、{@creature 老鼠}、{@creature 渡鴉}、{@creature 海馬}、{@creature 蜘蛛}、或{@creature 鼬鼠}。它將出現在射程內一處未被占據的空間。魔寵使用所選型態的數據資料，然而它的類型為天界生物、精類、或邪魔（由你選擇），而非野獸。",
            "你的魔寵與你獨立行動，但它永遠會服從你的命令。在戰鬥中，它會骰自己的先攻，並在它自己的回合中行動。魔寵不能攻擊，但它可以如常採取其他動作。",
            "當魔寵的生命值歸零，它將憑空消失，不會留下它的物質型態。它會在你再次施放此法術時重新出現。",
            "當你的魔寵位於你100呎範圍內，你就可以與它藉由心靈感應溝通。此外，以一個動作，直到你的下個回合開始，你可以透過你魔寵的眼睛視物並聽到它所聽見的聲音，獲得該魔寵所具有的任何特殊感知的好處。在這段期間，對你自己的感官而言，你視作{@condition 耳聾}和{@condition 目盲}。",
            "以一個動作，你可以暫時地解消你的魔寵。它將消失並進入一個小型位面以等待你的召喚。或者，你也可以永久的解消它。當它被暫時的解消，你能夠以一個動作讓它重新出現在距離你30呎內一處未被占據的空間。",
            "你不能同時擁有超過一隻的魔寵。如果你在已經有魔寵的情況下施放這個法術，你使它過繼成新的形態。從上述列表中選擇一個型態，你的魔寵將轉變成所選的生物。",
            "最後，當你施放一個射程為觸碰的法術時，你的魔寵可以傳遞該法術就彷彿它施放了該法術一樣。你的魔寵必須位於你100呎範圍內，且它必須在你施放時使用它的反應以傳遞法術。如果該法術要求一次攻擊檢定，則你在該檢定中使用你的攻擊調整值。"
        ],
        "page": 240,
        "isSummon": true,
        "permanentEffects": true
    },
    {
        "name": "尋獲坐騎",
        "ENG_name": "Find Steed",
        "level": 2,
        "school": "C",
        "time": [
            {
                "number": 10,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你召喚出一只呈現異常聰明、強壯、且忠實坐騎型態的精魂，並與它建立一道長久持續的連結。坐騎將出現在射程內一處未被占據的空間，並呈現你所選擇的外型：一匹{@creature 戰馬}、{@creature 矮種馬}、{@creature 駱駝}、{@creature 麋鹿}、或{@creature 獒犬}（你的DM可能會允許其他動物被做為坐騎召喚）。坐騎使用所選型態的數據資料，然而它的類型為天界生物、精類、或邪魔（由你選擇），而非原本的類型。此外，若你坐騎的智力為5或更低，則它的智力將變為6，且獲得理解一種你所說語言的能力。",
            "你的坐騎將以騎乘物的身分在戰鬥內外協助你，且你與它之間的本能連結讓你們得以做為一個單位戰鬥。當騎乘於你的坐騎時，你可以讓你施放的任何只以你為目標的法術同時也以你的坐騎為目標。",
            "當坐騎的生命值歸零，它將憑空消失，不會留下它的物質型態。你也可以在任何時候以一個動作解消你的坐騎，使它消失。無論是哪個情況，重新施放此法術都會召喚出同一只坐騎，將它的生命值回復到最大值。",
            "當你的坐騎距離你1哩內，你可以與它藉由心靈感應溝通。",
            "你不能同時擁有超過一隻透過此法術連結的坐騎。以一個動作，你可以在任何時候將該坐騎從它與你的連結中釋放，使它憑空消失。"
        ],
        "isSummon": true,
        "page": 240
    },
    {
        "name": "尋找陷阱",
        "ENG_name": "Find Traps",
        "level": 2,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你察覺到位於射程內處於視線之中任何陷阱的存在。對此法術而言，陷阱包含了任何會造成突發或出乎預期效果的東西，且這個效果是其創造者有意造成，且對你來說有害或不受歡迎。因此，這個法術會偵測到一片被{@spell 警報術}影響的區域、{@spell 守衛銘文}、或是機械式落穴陷阱，但它無法揭露出地板的天然薄弱處、搖搖欲墜的天花板、或是隱藏的排水坑。",
            "這個法術只會揭露陷阱的存在。你不會得知每個陷阱的位置，但你仍會得知你所察覺的陷阱所呈現的大致性質。"
        ],
        "page": 241
    },
    {
        "name": "尋找捷徑",
        "ENG_name": "Find the Path",
        "level": 6,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一套價值至少100金幣的占卜工具\u2014像是骨頭、象牙棍、卡片、牙齒、或雕刻符文\u2014以及來自你想尋訪地點的一個物體",
                "cost": 100
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "day",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術讓你能夠找出一條最短、且最直接的物理途徑，通往一個與你處於相同存在位面，且你所熟悉的固定場所。若你指定一個位於另一個存在位面的目的地、該目的地正在移動（例如機動要塞）、或者該目的地不夠精確（例如「一隻綠龍的巢穴」），則此法術失敗。",
            "在法術持續期間，只要你與目的地仍處於相同的存在位面，你就能知曉你與他之間的距離以及它所在的方位。在你正前往該處的途中，每當你需要選擇走哪一條路徑時，你將能自動判斷出哪一條路徑是通往目的地最短且最直接的路徑（但不一定是最安全的路徑）。"
        ],
        "page": 240
    },
    {
        "name": "死亡一指",
        "ENG_name": "Finger of Death",
        "level": 7,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你送出負面能量馳向著射程內你所能看見的一個生物，使它遭受劇烈的痛苦。目標必須進行一次體質豁免。若豁免失敗則它受到{@dice 7d8 + 30}死靈傷害，豁免成功則只受到一半的傷害。",
            "一個被此法術殺死的類人生物將在你的下個回合開始時活化成一個永久聽命於你的{@creature 殭屍}，並會盡它的全力去服從你的口頭指令。"
        ],
        "page": 241,
        "damageInflict": [
            "necrotic"
        ],
        "savingThrow": [
            "constitution"
        ],
        "permanentEffects": true,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "火焰箭",
        "ENG_name": "Fire Bolt",
        "level": 0,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Giant Soul (UA)",
                        "source": "UAGiantSoulSorcerer",
                        "subSubclass": "Fire"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你向著射程內的一個生物或物體投出一團火焰。對目標進行一次遠程法術攻擊。若命中，目標將受到{@dice 1d10}火焰傷害。被此法術命中的可燃物體若未被穿戴或攜帶將被點燃。",
            "此法術的傷害將在你的等級升至5級時增加至{@dice 2d10}，11級時{@dice 3d10}，17級時{@dice 4d10}。"
        ],
        "page": 242,
        "damageInflict": [
            "fire"
        ],
        "spellAttack": [
            "R"
        ],
        "scalingEffects": true,
        "races": [
            {
                "name": "Elf (Eladrin)",
                "source": "UAEladrinAndGith",
                "baseName": "Elf",
                "baseSource": "PHB"
            }
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Boros Legionnaire",
                "source": "GGR"
            },
            {
                "name": "Gruul Anarch",
                "source": "GGR"
            },
            {
                "name": "Rakdos Cultist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "火焰護盾",
        "ENG_name": "Fire Shield",
        "level": 4,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "少許磷或一隻螢火蟲"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Fiend",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Undying Light (UA)",
                        "source": "UALightDarkUnderdark"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Zeal (PSA)",
                        "source": "PSA"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "輕薄縹緲的火焰在法術持續期間環繞著你的身體，散發出10呎半徑的明亮光照和再延伸10呎的微光光照。你可以藉由使用一個動作解消它以提早結束此法術。",
            "這層火焰可以提供你溫暖的護盾或寒冷的護盾，由你選擇。溫暖的護盾將賦予你對寒冰傷害的抗性，而寒冷的護盾則會賦予你對火焰傷害的抗性。",
            "此外，每當一個距離你5呎內的生物以一次近戰攻擊命中你，這個護盾將迸發出火焰。攻擊者將受到來自溫暖護盾的{@dice 2d8}火焰傷害，或來自寒冷護盾的{@dice 2d8}寒冰傷害。"
        ],
        "page": 242,
        "damageInflict": [
            "cold",
            "fire"
        ],
        "damageResist": [
            "cold",
            "fire"
        ]
    },
    {
        "name": "火焰風暴",
        "ENG_name": "Fire Storm",
        "level": 7,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 150
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一團由重重轟隆烈焰構成的風暴出現在射程內你所選擇的一處。這個風暴區域是由最多十個10呎邊長立方體組成的，且你可以按你希望的方式排列。每個立方體的其中一面都必須鄰近另一個立方體的其中一面。任何在這個區域內的生物都必須進行一次敏捷豁免。若豁免失敗則它將受到{@dice 7d10}火焰傷害，豁免成功則只受到一半的傷害。",
            "這團火焰會傷害範圍內的物體，並點燃未被穿戴或攜帶的可燃物體。若你希望，範圍內的植物生命將不會受到此法術的影響。"
        ],
        "page": 242,
        "damageInflict": [
            "fire"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "C"
        ]
    },
    {
        "name": "火球術",
        "ENG_name": "Fireball",
        "level": 3,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 150
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一小球的蝙蝠糞便和硫磺"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Light",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Fiend",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Zeal (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Destruction (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道耀眼的閃光從你伸出的手指掠至射程內你所選的一點，並接著炸開成一陣伴隨著轟隆低鳴聲的爆炸烈焰。位於以該點為中心20呎半徑球體內的每個生物都必須進行一次敏捷豁免。一個豁免失敗的目標將受到{@dice 8d6}火焰傷害，豁免成功則只受到一半的傷害。",
            "這團火焰會繞過轉角。且會點燃範圍內所有未被穿戴或攜帶的可燃物體。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用4環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 8d6|3-9|1d6}。"
                ]
            }
        ],
        "page": 241,
        "damageInflict": [
            "fire"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "火焰刀",
        "ENG_name": "Flame Blade",
        "level": 2,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "漆樹的樹葉"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在你空著的手中喚出一把火焰刀。這把刀有著與{@item 彎刀}相似的尺寸和形狀，且它在法術持續期間持續存在。如果你放開這把刀，它將憑空消失，但你可以使用一個附贈動作將它重新喚出。",
            "你可以使用你的動作以這把火焰刀進行一次近戰法術攻擊。若命中，則目標受到{@dice 3d6}火焰傷害。",
            "這把火焰刀散發著10呎半徑的明亮光照和再延伸10呎的微光光照。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或更高的法術位施放此法術時，你使用的法術位每比原本高二環，傷害便會再增加{@scaledice 3d6|2,4,6,8|1d6}。"
                ]
            }
        ],
        "page": 242,
        "damageInflict": [
            "fire"
        ],
        "spellAttack": [
            "M"
        ],
        "races": [
            {
                "name": "Tiefling (Mephistopheles)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "焰擊術",
        "ENG_name": "Flame Strike",
        "level": 5,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一撮硫磺"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Light",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "War",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Devotion",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Fiend",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Undying Light (UA)",
                        "source": "UALightDarkUnderdark"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Zeal (PSA)",
                        "source": "PSA"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道垂直柱狀的神性火焰從天堂呼嘯落至一處你所指定的地點。每個在射程內一點為中心的10呎半徑，40呎高的柱狀範圍內的生物都必須進行一次敏捷豁免。一個豁免失敗的目標將受到{@dice 4d6}火焰傷害和{@dice 4d6}光耀傷害，豁免成功則只受到一半的傷害。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用6環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，火焰傷害或光耀傷害（由你選擇）便會再增加{@scaledice 4d6|5-9|1d6}。"
                ]
            }
        ],
        "page": 242,
        "damageInflict": [
            "fire",
            "radiant"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "Y"
        ],
        "backgrounds": [
            {
                "name": "Boros Legionnaire",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "熾焰法球",
        "ENG_name": "Flaming Sphere",
        "level": 2,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一點獸脂、一撮硫磺、和一塵鐵粉"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Light",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Undying Light (UA)",
                        "source": "UALightDarkUnderdark"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Giant Soul (UA)",
                        "source": "UAGiantSoulSorcerer",
                        "subSubclass": "Fire"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一團5呎直徑的火球出現在射程內你所選擇一處未被占據的空間，並在法術持續期間內持續存在。任何在距離球體5呎內結束它回合的生物都必須進行一次敏捷豁免。豁免失敗的生物將受到{@dice 2d6}火焰傷害，豁免成功則只受到一半的傷害。",
            "以一個附贈動作，你可以移動該球體最多30呎。如果你讓球體撞上一個生物，則該生物必須進行對球體傷害的豁免檢定，且球體在該回合將停止移動。",
            "當你移動該球體，你可以控制它翻過最多5呎高的障礙物、或讓它跳過最多10呎寬的坑。這個球體會點燃未被穿戴或攜帶的可燃物體，且散發出20呎半徑的明亮光照和再延伸20呎的微光光照。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 2d6|2-9|1d6}。"
                ]
            }
        ],
        "page": 242,
        "damageInflict": [
            "fire"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "S"
        ],
        "backgrounds": [
            {
                "name": "Rakdos Cultist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "石化術",
        "ENG_name": "Flesh to Stone",
        "level": 6,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "a pinch of lime, water, and earth"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你嘗試將射程內你所能看見的一個生物變成石頭。若目標的身體是由血肉構成，則該生物必須進行一次體質豁免。若豁免失敗，它將因為血肉開始硬化而被{@condition 束縛}。若豁免成功，則該生物不受影響。",
            "一個被此法術{@condition 束縛}的生物必須在每次它的回合結束時再進行一次體質豁免。若它成功通過三次對抗此法術的豁免檢定，則此法術結束。若它在這些豁免檢定中失敗三次，則它將被變成石頭，並在法術持續期間陷入{@condition 石化}狀態。這些豁免檢定的成功和失敗並不需要是連續的；請記錄這兩者的次數直到目標集齊其中一邊三次。",
            "若該生物在處於{@condition 石化}狀態時受到物理性損壞，則它將在回復它原本狀態時承受相同的殘缺。",
            "若你在此法術的完整持續時間內都維持著專注，則該生物將被永遠變成石頭直到此效果被移除。"
        ],
        "page": 243,
        "savingThrow": [
            "constitution"
        ],
        "conditionInflict": [
            "petrified",
            "restrained"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "飛行術",
        "ENG_name": "Fly",
        "level": 3,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一根來自任何鳥類的翼羽"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個自願生物。在法術持續期間，目標獲得60呎的飛行速度。當此法術結束，若目標仍在半空中，除非它能夠防止自己墜落，否則它將墜落。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用4環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以再額外選擇一個生物作為目標。"
                ]
            }
        ],
        "page": 243,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "雲霧術",
        "ENG_name": "Fog Cloud",
        "level": 1,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Tempest",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Giant Soul (UA)",
                        "source": "UAGiantSoulSorcerer",
                        "subSubclass": "Cloud"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你以射程內一點為中心創造出一個20呎半徑的霧氣球體。這片霧球會繞過轉角，且它籠罩的範圍為重度遮蔽。它在法術持續時間內維持存在、或直到一陣有著中等或更強速度的風（至少時速10哩）將它吹散。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，霧氣的半徑就再增加20呎。"
                ]
            }
        ],
        "page": 243,
        "races": [
            {
                "name": "Triton",
                "source": "VGM"
            }
        ],
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "禁制術",
        "ENG_name": "Forbiddance",
        "level": 6,
        "school": "A",
        "time": [
            {
                "number": 10,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一點聖水、稀有焚香、和價值至少1,000金幣的紅寶石塵",
                "cost": 1000
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "day",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "你創造出一道能阻擋魔法旅行、覆蓋最大40,000平方呎面積、30呎高空間範圍的防護屏障。在法術持續期間，生物無法透過傳送進入這個區域，或使用傳送門（像是藉由{@spell 異界之門}創造的傳送門）進入這個區域。此法術將阻擋在這片區域內發生的位面旅行，並因此能阻止其他生物經由星界、乙太位面、妖精荒野、墮影冥界、或透過{@spell 異界傳送}法術進入該區域。",
            "此外，此法術會傷害你在施放它時所選擇類型的生物。從以下選擇一種或更多：天界生物、元素、精類、邪魔、和不死生物。當一個所選類型的生物在一個回合中第一次進入此法術的區域，或在該處開始它回合，則該生物將受到{@dice 5d10}光耀傷害或{@dice 5d10}死靈傷害（由你在施放此法術時決定）。",
            "當你施放此法術時，你可以設定一句密語。一個說出這句密語的生物可以進入這個區域而不至於受到此法術的傷害。",
            "此法術的區域不能和另一個禁制術法術的區域重疊。若你每天在相同地點施展此法術長達30天，則此法術將持續直到它被解消，且材料構材將在最後一次施法時被消耗。"
        ],
        "page": 243,
        "damageInflict": [
            "necrotic",
            "radiant"
        ],
        "permanentEffects": true
    },
    {
        "name": "力場監牢",
        "ENG_name": "Forcecage",
        "level": 7,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 100
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "價值1,500金幣的紅寶石塵",
                "cost": 1500
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一座不可移動，立方體形狀，由魔法力場構成的的隱形監獄將突然出現在射程內你所選擇的區域周圍。你可以選擇這座監獄呈現牢籠或是固體箱盒的外型。",
            "一座牢籠形狀的監牢可以為各邊最大20呎長，且由厚度直徑1/2吋的隔條構成，以1/2吋的間距彼此相隔。",
            "一座箱盒形狀的監牢可以為各邊最大10呎長，創造出防止任何物質通過的固體屏障，並阻擋任何法術進入或穿出這個區域。",
            "當你施放此法術時，任何完全處於監牢範圍內的生物將被困住。只有一部份處於範圍內的生物、或那些太過龐大而無法容納於範圍內的生物，將被從範圍中心推離，直到它們被完全推離範圍之外。",
            "一個監牢內的生物無法透過任何非魔法手段離開這個區域。若生物嘗試使用傳送或跨位面旅行以離開監牢，則它必須先進行一次魅力豁免。若豁免成功，則該生物可以使用該魔法以離開監牢。若豁免失敗，則該生物無法離開監牢，且該次法術或效果的使用將被浪費。這道監牢同時延伸至乙太位面，並阻擋乙太旅行。",
            "此法術無法被{@spell 解除魔法}給解消。"
        ],
        "page": 243,
        "savingThrow": [
            "charisma"
        ],
        "areaTags": [
            "C"
        ]
    },
    {
        "name": "預視術",
        "ENG_name": "Foresight",
        "level": 9,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一根蜂鳥的羽毛"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 8
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個自願生物並賜予它能夠看見當前未來的有限能力。在法術持續期間，目標不會被突襲，且在所有攻擊檢定、屬性檢定、豁免檢定中具有優勢。此外，在法術持續期間，其他生物對目標進行的攻擊檢定將具有劣勢。",
            "若你在持續時間結束前再次施放此它，則此法術立刻結束。"
        ],
        "page": 244,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "行動自如術",
        "ENG_name": "Freedom of Movement",
        "level": 4,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一條皮帶，纏繞在手臂或類似的附肢上"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "War",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Arctic"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Coast"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Forest"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Grassland"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Swamp"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Devotion",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Zeal (PSA)",
                        "source": "PSA"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個自願生物。在法術持續期間，目標的移動不會受到困難地形的影響，且法術和其他魔法效果無法降低目標的移動速度、也無法使它被{@condition 麻痺}或{@condition 束縛}。",
            "目標也可以花費5呎移動速度以自動從非魔法束縛中逃脫，像是{@item 鐐銬|phb}或一個使它{@condition 被擒}的生物。最後，處於水下並不會對目標的移動和攻擊產生任何懲罰。"
        ],
        "page": 244,
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Dimir Operative",
                "source": "GGR"
            },
            {
                "name": "Simic Scientist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "交友術",
        "ENG_name": "Friends",
        "level": 0,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "s": true,
            "m": "當此法術被施放時將少量化妝品擦在臉上"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在持續時間內,你對你所選的一個對你沒有敵意的生物所直接進行的所有魅力檢定都有優勢。當法術結束時，該生物將會意識到你使用了魔法去影響它的情緒，並因此對你產生敵意。有暴力傾向的生物可能會因此攻擊你，而根據你與它互動的性質，其他生物可能會以其他方式來報復（由DM決定）。"
        ],
        "page": 244,
        "races": [
            {
                "name": "Elf (Eladrin)",
                "source": "UAEladrinAndGith",
                "baseName": "Elf",
                "baseSource": "PHB"
            },
            {
                "name": "Siren",
                "source": "PSX"
            },
            {
                "name": "Tiefling (Fierna)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Fierna)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Azorius Functionary",
                "source": "GGR"
            },
            {
                "name": "Orzhov Representative",
                "source": "GGR"
            },
            {
                "name": "Selesnya Initiate",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "氣化形體",
        "ENG_name": "Gaseous Form",
        "level": 3,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一塊薄紗和一縷清煙"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Underdark"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Treachery (UA)",
                        "source": "UAPaladin"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你使一個你觸碰的自願生物連同它所穿戴和攜帶的所有東西，在法術持續期間轉化成一團朦朧雲霧。此法術將在該生物的生命值歸零時結束。沒有實體的生物不會被此法術影響。",
            "當處於這個形態時，目標唯一的移動手段為10呎的飛行速度。目標可以可以進入並佔據其他生物所在的空間。目標具有對非魔法傷害的抗性，且它在力量、敏捷、和體質豁免中具有優勢。目標可以穿過小孔洞、狹窄的開口、甚至裂縫，但它將視液體如同其為固體表面。目標即使在陷入{@condition 震懾}或{@condition 無力}狀態時也不會墜落，且會懸浮在空中。",
            "當處於這個朦朧雲霧的形態時，目標無法說話或操縱物體，且任何它所攜帶或持握的物體不會掉落、被使用或互動。目標無法攻擊或施放法術。"
        ],
        "page": 244,
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Dimir Operative",
                "source": "GGR"
            },
            {
                "name": "Simic Scientist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "異界之門",
        "ENG_name": "Gate",
        "level": 9,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一顆價值至少5,000金幣的鑽石",
                "cost": 5000
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內你所能看見的一個位被佔據空間喚出一個傳送門，連結著處於不同存在位面的一個確切的地點。這個傳送門是一個圓型的開口，你可以使它的直徑長度為5呎到20呎。你可以讓這個傳送門朝向任何你所選擇的方向。傳送門將在法術持續期間內持續存在。",
            "在各位面出現的這對傳送門都具有前後兩側。只有透過從傳送門的前端進入才能夠通過這個傳送門。任何穿過這個傳送門的事物都將被瞬間傳送到另一個位面，出現於距離傳送門最近的未被佔據空間。",
            "神祇和其他位面統治者可以阻止此法術所創造出的傳送門開啟於祂們所在或掌管領域內的任何場所。",
            "當你施放此法術時，你可以說出一個特定生物的名字（假名、稱號、或暱稱不會生效）。若該生物位於跟你不同的存在位面，則傳送門將瞬間出現在被指名生物的附近，並將該生物拉入傳送門出現在距離你這一側傳送門最近的一處未被佔據空間。這樣做並不會讓你獲得掌控該生物的特殊力量，且它能自由做出DM認為合適的行動。它可能會離開、攻擊你、或協助你。"
        ],
        "page": 244
    },
    {
        "name": "指使術",
        "ENG_name": "Geas",
        "level": 5,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "day",
                    "amount": 30
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Crown",
                        "source": "SCAG"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你對一個射程內你所能看見的生物下達一個魔法命令，依照你的決定強迫它實行某種服務、或是抑制某種動作或行動。若該生物可以理解你，則它必須成功通過一次睿知豁免，否則在法術持續期間被你{@condition 魅惑}，每當它以直接違背你指令的方式行動時，它將受到{@dice 5d10}精神傷害，但一天不會超過一次。無法理解你的生物不會受到此法術的影響。",
            "你可以下達任何你選擇的命令，除了無疑會導致死亡的指令。一旦你下達了自殺命令，此法術結束。",
            "你可以藉由使用一個動作去解消它以提早結束此法術。一個{@spell 移除詛咒}、{@spell 高等復原術}、或{@spell 祈願術}也可以結束此法術。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用7環或8環法術位施放此法術時，此法術的持續時間為1年。當你使用9環法術位施放此法術時，此法術將持續直到它被上面提及的法術給結束。"
                ]
            }
        ],
        "page": 244,
        "damageInflict": [
            "psychic"
        ],
        "savingThrow": [
            "wisdom"
        ],
        "conditionInflict": [
            "charmed"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Orzhov Representative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "遺體防腐",
        "ENG_name": "Gentle Repose",
        "level": 2,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一撮鹽和在屍體每個眼睛上各放置一枚的銅幣，在法術持續期間必須維持在位置上"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "day",
                    "amount": 10
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "你觸碰一具屍體或其他遺骸。在法術持續期間，目標將免於腐爛且不能被變成不死生物。",
            "此法術也能有效的延長將復活目標的時間限制，因為在此法術影響下度過的時間將不會計入如{@spell 喚醒死者}等法術的時間限制中。"
        ],
        "page": 245
    },
    {
        "name": "巨蟲術",
        "ENG_name": "Giant Insect",
        "level": 4,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Primeval Guardian (UA)",
                        "source": "UARangerAndRogue"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Primeval Guardian (UA)",
                        "source": "UARangerAndRogue"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Lolth (Twitter)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在法術持續期間將射程內最多十隻蜈蚣、三隻蜘蛛、五隻黃蜂、或一隻蠍子轉變成牠們天生型態的巨大版本。蜈蚣將變成{@creature 巨蜈蚣}、蜘蛛將變成{@creature 巨蜘蛛}、黃蜂將變成{@creature 巨黃蜂}、而蠍子將變成{@creature 巨蠍}。",
            "這些生物都會服從你的口頭指令，且在戰鬥中，牠們會在每一輪你的回合時行動。DM掌控這些生物的數據資料，並處理牠們的動作與移動。",
            "一個生物會在法術持續期間維持它的巨大體型，直到它生命值歸零，或你使用一個動作解消它身上的效果。",
            "DM可能會允許你選擇不同的目標。舉例來說，若你轉變一隻蜜蜂，則牠的巨大版本可能會擁有與{@creature 巨黃蜂}相同的數據資料。"
        ],
        "isSummon": true,
        "page": 245,
        "areaTags": [
            "MT"
        ],
        "backgrounds": [
            {
                "name": "Golgari Agent",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "花言巧語",
        "ENG_name": "Glibness",
        "level": 8,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "直到此法術結束前，當你進行魅力檢定時，你可以將你骰出的數值替換成15。此外，無論你說什麼，判斷你是否誠實的魔法將會認為你說的話都是實話。"
        ],
        "page": 245
    },
    {
        "name": "法術無效結界",
        "ENG_name": "Globe of Invulnerability",
        "level": 6,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "radius",
            "distance": {
                "type": "feet",
                "amount": 10
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一顆玻璃或水晶珠，在法術結束時碎裂"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一個固定、朦朧閃爍的10呎半徑屏障突然出現並環繞在你周圍，並在法術持續期間持續存在。",
            "任何從屏障外施放的5環或以下的法術無法影響內部的生物或物體，即使該法術是使用更高的法術位來施放也一樣。這些法術能夠以屏障內的生物和物體做為目標，但該法術對它們不會有任何影響。同樣的，屏障內部的區域也會被從這些法術的影響範圍中排除。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用7環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，屏障所能阻擋的法術環階便會再提升一環。"
                ]
            }
        ],
        "page": 245,
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "守衛銘文",
        "ENG_name": "Glyph of Warding",
        "level": 3,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "hour"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "薰香以及價值至少200金幣的鑽石粉，在施法時消耗",
                "cost": 200,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "permanent",
                "ends": [
                    "dispel",
                    "trigger"
                ]
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Deep Stalker (UA)",
                        "source": "UALightDarkUnderdark"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Deep Stalker (UA)",
                        "source": "UATheRangerRevised"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "當你施放此法術時，你刻寫一個會在稍後釋放魔法效果的銘文。你可以刻寫在一個表面（像是桌面、一區地面或牆面）或者一個能被關上以隱蔽銘文的物體中（像是一本書、一張卷軸、或一個寶箱）。這個銘文可以覆蓋一片不超過10呎直徑的區域。若該表面或物體被移離你施放此法術的位置超過10呎，該銘文將被破壞，且此法術在不被觸發的情況下結束。",
            "銘文幾乎是隱形的，且需要成功通過一次對抗你法術豁免DC的智力({@skill 調查})檢定才能被發現。",
            "當施放此法術時，你決定什麼東西將會觸發銘文。對於刻寫於表面的銘文而言，最典型的觸發方式包括觸碰或站在銘文上、移開蓋住銘文的其他物體、接近到符文的一定範圍內、或是操作刻有銘文的物體等等。對於刻寫在物體內部的銘文而言，最常見的觸發方式包括打開該物體、接近到該物體的一定範圍內、或看見或閱讀符文。一旦符文被觸發，則此法術結束。",
            "你可以進一步定義觸發條件，好讓此法術只會在特定情況、或根據物理特徵（像是高度或重量）、生物類型（例如可以被設置成只對異怪或卓爾產生影響）、或陣營而被啟動。你也可以設定讓生物不會觸發銘文的條件，例如說出特定的密語。",
            "當你刻寫銘文時，選擇爆炸符文或一個法術銘文。",
            {
                "type": "entries",
                "name": "爆炸符文",
                "entries": [
                    "當被觸發時，這道銘文將會迸發出以該銘文為中心20呎半徑球體的魔法能量。這個球體會繞過轉角。每個在該區域內的生物都必須進行一次敏捷豁免。豁免失敗的生物將受到{@dice 5d8}酸蝕、寒冰、火焰、閃電、或雷鳴傷害（由你在創造銘文時決定），豁免成功則只受到一半的傷害。"
                ]
            },
            {
                "type": "entries",
                "name": "法術銘文",
                "entries": [
                    "作為創造銘文的一部份，你可以藉由施放一個已準備的3環或更低的法術以將其儲存到該銘文中。這個法術必須以單一生物或一個區域為目標。這個被儲存的法術在以這個方式被施放時不會有任何立即性的效果。當此銘文被觸發時，儲存的法術將被施放。若該法術需要一個目標，則它會以觸發此銘文的生物作為目標。若該法術影響一個區域，則該區域將以該生物做為中心。若該法術會召喚出敵對生物或創造出有害物體或陷阱，則它們會盡可能地出現在靠近入侵者的位置並攻擊它。若此法術需要專注，則它將持續直到它的完整持續時間結束。"
                ]
            }
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用4環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，爆炸符文的傷害便會再增加{@scaledice 5d8|3-9|1d8}。如果你選擇創造法術銘文，你可以儲存任何環階最高等同於你用於施放守衛銘文的法術位的法術。"
                ]
            }
        ],
        "page": 245,
        "damageInflict": [
            "acid",
            "cold",
            "fire",
            "lightning",
            "thunder"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "opposedCheck": [
            "intelligence"
        ],
        "areaTags": [
            "S"
        ],
        "backgrounds": [
            {
                "name": "Izzet Engineer",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "神莓術",
        "ENG_name": "Goodberry",
        "level": 1,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一枝槲寄生"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "最多十顆漿果出現在你手中，並在法術持續期間被魔法充盈。一個生物可以使用它的動作以食用一顆漿果。食用一顆漿果會回復1點生命值，且漿果將提供足夠一個生物維持一天所需的營養。",
            "這些漿果若在施放此法術後24小時內沒有被消耗，則會失去它們的效力。"
        ],
        "page": 246,
        "isHeal": true
    },
    {
        "name": "抓攫藤蔓",
        "ENG_name": "Grasping Vine",
        "level": 4,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Nature",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你召喚出一株藤蔓，讓它從射程內一處你所選擇且你能看見的未被佔據空間內的地面蔓生而出。當你施放此法術時，你可以指示該藤蔓襲向距離它30呎內一個你所能看見的生物。該生物必須成功通過一次敏捷豁免，否則被拉向藤蔓20呎距離。",
            "直到此法術結束前，你可以在每個你的回合以一個附贈動作指示該藤蔓襲向同個生物或另一個目標。"
        ],
        "page": 246,
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Golgari Agent",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "油膩術",
        "ENG_name": "Grease",
        "level": 1,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一小塊豬油或奶油"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "滑溜溜的油脂覆蓋在以射程內一點為中心10呎半徑的地表，並使它在法術持續期間變為困難地形。",
            "當油脂出現時，每個站在該區域內的生物都必須成功通過一次敏捷豁免，否則將摔倒{@condition 伏地}。一個進入該區域或在該區域內結束它回合的生物也必須成功通過一次敏捷豁免，否則同樣會摔倒{@condition 伏地}。"
        ],
        "page": 246,
        "savingThrow": [
            "dexterity"
        ],
        "conditionInflict": [
            "prone"
        ],
        "areaTags": [
            "Q"
        ]
    },
    {
        "name": "高等隱形術",
        "ENG_name": "Greater Invisibility",
        "level": 4,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Underdark"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Archfey",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Treachery (UA)",
                        "source": "UAPaladin"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Deep Stalker (UA)",
                        "source": "UALightDarkUnderdark"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Gloom Stalker",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Deep Stalker (UA)",
                        "source": "UATheRangerRevised"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Gloom Stalker",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你或一個你所觸碰的生物變得{@condition 隱形}直到法術結束。只要目標所穿戴或攜帶的東西還在目標身上，它們也都將保持{@condition 隱形}。"
        ],
        "page": 246,
        "conditionInflict": [
            "invisible"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "高等復原術",
        "ENG_name": "Greater Restoration",
        "level": 5,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "價值至少100金幣的鑽石粉，在施法時消耗",
                "cost": 100,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你將正面能量注入一個你所觸碰的生物以消除一個使它衰弱的效果。你可以降低目標的一級{@condition 力竭}，或結束下列其中一個目標身上的效果：",
            {
                "type": "list",
                "items": [
                    "一個{@condition 魅惑}或{@condition 石化}目標的效果",
                    "一個詛咒，包括目標和一個詛咒魔法物品的同調",
                    "任何一個目標屬性值的減損",
                    "一個減少目標生命值最大值的效果"
                ]
            }
        ],
        "page": 246,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "虔誠守衛",
        "ENG_name": "Guardian of Faith",
        "level": 4,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 8
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Life",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Light",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Crown",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Devotion",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Protection (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Solidarity (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一個體型為大型的靈體守衛出現，並在法術持續期間漂浮於射程內一處你所選擇，且你所能看見的未被佔據空間。這個守衛佔據於該空間，身形模糊不清，持握著一把散發光芒的寶劍和一個飾有你神祇徽印的盾牌。",
            "任何對你有敵意的生物在一個回合中第一次移進距離這個守衛10呎內的空間時，都必須成功通過一次敏捷豁免。若豁免失敗，則該生物將受到20點光耀傷害，豁免成功則只受到一半的傷害。這個守衛將在造成總共60點傷害時消失。"
        ],
        "page": 246,
        "damageInflict": [
            "radiant"
        ],
        "savingThrow": [
            "dexterity"
        ]
    },
    {
        "name": "銅牆鐵壁",
        "ENG_name": "Guards and Wards",
        "level": 6,
        "school": "A",
        "time": [
            {
                "number": 10,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "燃燒的焚香、少量的硫磺和油、一根打結的線、少量土巨怪的鮮血、以及一根價值至少10金幣的銀製小棍",
                "cost": 10
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 24
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你創造出一道保護著最多2,500平方呎面積區域的防護屏障（一個50呎邊長的方形區域、一百個的5呎邊方形組成的區域、或二十五個10呎邊長方形組成的區域）。被守護的區域最高可以為20呎高，且呈現你所希望的形狀。你可以藉由分割這些區域以守護要塞中的數個樓層，只要你在施放此法術時可以走進每個連續的樓層。",
            "當你施放此法術時，你可以指定特定個體不受到任意或所有你選擇的效果影響。你也可以設定一句密語，當大聲的說出密語時，述說者將免疫於這些效果。",
            "銅牆鐵壁將在被守護的區域內創造出以下效果。",
            {
                "type": "entries",
                "name": "走廊",
                "entries": [
                    "濃霧將充斥在所有受保護的走廊，使它們處於重度遮蔽。此外，在每個會提供不同方向選擇的交界處或叉路口，除了你以外的生物將會有50％的機率相信它們正在向著它們所選路徑相反的方向前進。"
                ]
            },
            {
                "type": "entries",
                "name": "門扉",
                "entries": [
                    "所有在受保護區域內的門扉都將被魔法鎖住，就如同其被{@spell 祕法鎖}法術給封住。此外，你可以在最多十扇門上覆蓋一層幻象（效果等同於{@spell 次級幻象}法術創造的幻象物體）以使它們看起來像是牆壁的一部份。"
                ]
            },
            {
                "type": "entries",
                "name": "階梯",
                "entries": [
                    "所有在受保護區域內的階梯從下到上都充斥著蛛網，就如同{@spell 蛛網術}法術的效果。在銅牆鐵壁的持續時間內，這些蛛絲將會在被焚燒或扯掉後10分鐘內重新長回。"
                ]
            },
            {
                "type": "entries",
                "name": "其他法術效果",
                "entries": [
                    "你可以從以下魔法效果中選擇一項以設置在要塞內受保護的區域內。"
                ]
            },
            {
                "type": "list",
                "items": [
                    "在四個走廊上設置{@spell 舞光術}。你可以設定一個簡單的程序以讓光源在銅牆鐵壁的持續時間內重複執行。",
                    "在二個地點設置{@spell 魔嘴術}。",
                    "在二個地點設置{@spell 臭雲術}。這團毒氣將在你指定的地點出現；在銅牆鐵壁的持續時間內，若這團毒氣被風吹散，則它們會在10分鐘內重新出現。",
                    "在一個走廊或房間設置一個常駐的{@spell 造風術}。",
                    "在一個地點設置{@spell 暗示術}。你選擇一個最多5呎平方的區域，且任何進入或經過該區域的生物都將接收到這個心靈暗示。"
                ]
            },
            "整個受保護的區域散發著魔法。一個施放於特定效果的{@spell 解除魔法}法術，若施放成功，只會移除該效果。",
            "你可以透過每天施展此法術一整年，來創造出受到銅牆鐵壁效果永久保護的建築物。"
        ],
        "page": 248,
        "permanentEffects": true,
        "areaTags": [
            "Q"
        ]
    },
    {
        "name": "指導術",
        "ENG_name": "Guidance",
        "level": 0,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個自願生物。在法術結束前一次，目標可以擲一顆{@dice d4}，並將骰出的數字加到它所選的一次屬性檢定中。它可以在進行該屬性檢定之前或之後擲這顆骰。然後法術將會結束。"
        ],
        "page": 248,
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Orzhov Representative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "光導箭",
        "ENG_name": "Guiding Bolt",
        "level": 1,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "round",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Solidarity (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道閃耀光束擊向射程內你所選擇的一個生物。對該目標進行一次遠程法術攻擊。若命中，目標將受到{@dice 4d6}光耀傷害，且直到你的下個回合結束前，多虧於目標身上閃爍的微光，下一次對該目標進行的攻擊檢定具有優勢。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 4d6|1-9|1d6}。"
                ]
            }
        ],
        "page": 248,
        "damageInflict": [
            "radiant"
        ],
        "spellAttack": [
            "R"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Boros Legionnaire",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "造風術",
        "ENG_name": "Gust of Wind",
        "level": 2,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "line",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一粒豆科植物的種子"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Tempest",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Kraken (Stream)",
                        "source": "Stream"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Giant Soul (UA)",
                        "source": "UAGiantSoulSorcerer",
                        "subSubclass": "Storm"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在法術持續期間，一陣60呎長、10呎寬的直線強風從你向著你所選擇的任一個方向吹出。每個在這個直線內開始他們回合的生物都必須成功通過一次力量豁免，否則將沿著風向被推離你15呎距離。",
            "任何在直線內的生物在移向你的時候，都必須花費2呎的移動力才能夠移動1呎的距離。",
            "這陣強風會吹散氣體和水氣，且它會熄滅蠟燭、火炬、和區域內其他類似的未受保護的火焰。它會使受保護的火焰，例如提燈，劇烈地搖晃，並有著50%的機率將它們熄滅。",
            "在法術結束前，你可以在你的每個回合以一個附贈動作改變從你身上吹出的風向。"
        ],
        "page": 248,
        "savingThrow": [
            "strength"
        ],
        "races": [
            {
                "name": "Triton",
                "source": "VGM"
            }
        ],
        "areaTags": [
            "L"
        ]
    },
    {
        "name": "棘刺雹",
        "ENG_name": "Hail of Thorns",
        "level": 1,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在法術結束之前，下一次你以遠程武器攻擊命中一個生物時，此法術將創造一陣從你遠程武器或彈藥蔓生而出的棘刺之雨。除了該攻擊原本的效果之外，攻擊目標以及距離它5呎以內的每個生物都必須進行一次敏捷豁免。一個豁免失敗的生物將受到{@dice 1d10}穿刺傷害，豁免成功則只受到一半的傷害。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 1d10|1-9|1d10}（傷害最高為{@scaledice 1d10|1-9|6d10}）。"
                ]
            }
        ],
        "page": 249,
        "damageInflict": [
            "piercing"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "聖居",
        "ENG_name": "Hallow",
        "level": 5,
        "school": "V",
        "time": [
            {
                "number": 24,
                "unit": "hour"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "價值至少1,000金幣的香草、油膏、和焚香，在施法時消耗",
                "cost": 1000,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "permanent",
                "ends": [
                    "dispel"
                ]
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Fiend",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一點，並在周遭區域注入神聖（或邪惡）能量。這個區域可以有最多60呎半徑，且若此半徑範圍會涵蓋已經受到另一個聖居法術影響的區域，則此法術失敗。被影響的區域將會獲得以下效果。",
            "首先，天界生物、元素、精類、邪魔、和不死生物無法進入此區域，這類生物也無法魅惑、恐懼、或附身位於區域內的生物。任何已經被這類生物{@condition 魅惑}、{@condition 恐懼}、或附身的生物，在進入此區域後便不再被{@condition 魅惑}、{@condition 恐懼}、或附身。你可以指定其中一種或多種生物類型不受此效果影響。",
            "其次，你可以結合一個額外效果於在此區域。從以下列表中選擇其中一個效果，或從DM提供的效果中選擇一個。這些效果中有些會影響區域內的生物；你可以指定這些效果會影響所有生物、追隨特定神祇或領導的生物、或特定種類的生物，像是獸人或巨魔。當一個會受到影響的生物在一個回合中第一次進入該區域，或在該處開始它的回合，則它可以進行一次魅力豁免。若豁免成功，則該生物無視此額外效果直到它離開此區域。",
            {
                "type": "entries",
                "name": "勇氣",
                "entries": [
                    "當處於此區域時，受影響的生物不會被{@condition 恐懼}。"
                ]
            },
            {
                "type": "entries",
                "name": "黑暗",
                "entries": [
                    "黑暗充斥著這片區域。尋常光源，以及透過環階比你施放此法術所用法術位更低的法術所創造的魔法光源，無法照亮這個區域。"
                ]
            },
            {
                "type": "entries",
                "name": "晝明",
                "entries": [
                    "明亮光罩充斥著這片區域。透過環階比你施放此法術所用法術位更低的法術所創造的魔法黑暗，無法熄滅這片光照。"
                ]
            },
            {
                "type": "entries",
                "name": "能量防護",
                "entries": [
                    "區域內受影響的生物對你所選擇的一種除了鈍擊、劈砍、穿刺以外的傷害類型具有抗性。"
                ]
            },
            {
                "type": "entries",
                "name": "能量弱點",
                "entries": [
                    "區域內受影響的生物對你所選擇的一種除了鈍擊、劈砍、穿刺以外的傷害類型具有易傷。"
                ]
            },
            {
                "type": "entries",
                "name": "永恆安息",
                "entries": [
                    "埋葬在此區域內的屍體不會被轉化成不死生物。"
                ]
            },
            {
                "type": "entries",
                "name": "跨次元干涉",
                "entries": [
                    "受影響的生物無法使用傳送、異次元或跨位面途徑進行移動或旅行。"
                ]
            },
            {
                "type": "entries",
                "name": "恐懼",
                "entries": [
                    "當處於此區域時，受影響的生物陷入{@condition 恐懼}。"
                ]
            },
            {
                "type": "entries",
                "name": "沉默",
                "entries": [
                    "任何聲音都無法在此區域內被製造或傳入其中。"
                ]
            },
            {
                "type": "entries",
                "name": "巧言",
                "entries": [
                    "受影響的生物可以跟區域內的任何其他生物溝通，即使它們之間沒有共通語言也一樣。"
                ]
            }
        ],
        "page": 249,
        "damageResist": [
            "acid",
            "cold",
            "fire",
            "force",
            "lightning",
            "necrotic",
            "poison",
            "psychic",
            "radiant",
            "thunder"
        ],
        "damageVulnerable": [
            "acid",
            "cold",
            "fire",
            "force",
            "lightning",
            "necrotic",
            "poison",
            "psychic",
            "radiant",
            "thunder"
        ],
        "savingThrow": [
            "charisma"
        ]
    },
    {
        "name": "幻景",
        "ENG_name": "Hallucinatory Terrain",
        "level": 4,
        "school": "I",
        "time": [
            {
                "number": 10,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 300
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一顆石頭、一根細樹枝、和少許綠色植物"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 24
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Desert"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你使射程內一個150呎邊長的立方體範圍的自然地形在視覺、聽覺、和嗅覺上都像是另一種自然地形。因此，一片開闊的平原或道路可以被變得像是一片沼澤、丘陵、裂谷或其他難以通過或者無法通過的地形。一個池塘可以被變得看起來像是一片草原，一段懸崖像是一個緩坡，或者讓一條亂石溪谷變得像是一條寬闊平坦的道路。該區域內的人造建築、裝備、和生物的外觀都不會被改變。",
            "地形的觸覺特徵並不會被改變，因此進入該區域的生物很可能會直接看穿幻象。若觸覺的差異並不明顯，則一個謹慎檢查幻象的生物可以藉由一次對抗你法術豁免DC的智力（{@skill 調查}）檢定來懷疑它的真偽。一個辨識出幻象真偽的生物，會看見一片模糊的影像疊映在原本的地形上。"
        ],
        "page": 249,
        "opposedCheck": [
            "intelligence"
        ],
        "areaTags": [
            "C"
        ]
    },
    {
        "name": "傷害術",
        "ENG_name": "Harm",
        "level": 6,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你向射程內一個你所能看見的生物釋放一道致命疾病。目標必須進行一次體質豁免。若豁免失敗，它將受到{@dice 14d6}死靈傷害，豁免成功則只受到一半的傷害。這個傷害無法將目標的生命值降到1以下。若目標在此豁免檢定中失敗，則它的生命值最大值將被減少等同於它所受到死靈傷害的數值長達1小時。任何可以移除疾病的效果都能讓該生物的生命值最大值在時間經過之前回復它原本的數值。"
        ],
        "page": 249,
        "damageInflict": [
            "necrotic"
        ],
        "savingThrow": [
            "constitution"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "加速術",
        "ENG_name": "Haste",
        "level": 3,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一片削下的甘草根"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Grassland"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Vengeance",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Treachery (UA)",
                        "source": "UAPaladin"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Strength (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Zeal (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Horizon Walker",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Horizon Walker",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "選擇一個射程內你所能看見的自願生物。直到此法術結束前，目標的移動速度變為兩倍，它的AC獲得+2加值，在敏捷豁免中具有優勢，且在它的每個回合中獲得一個額外的動作。這個動作只能被用來採取{@action 攻擊}（僅有一次武器攻擊）、{@action 疾走}、{@action 撤離}、{@action 躲藏}、或{@action 使用物件}動作。",
            "當此法術結束時，一陣無力感襲向目標，直到它的下個回合結束前，它都無法移動或採取動作。"
        ],
        "page": 250,
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Rakdos Cultist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "治癒術",
        "ENG_name": "Heal",
        "level": 6,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "選擇一個射程內你所能看見的生物。一波正向能量沖洗該生物，使它回復70點生命值。此法術同時會終止{@condition 目盲}、{@condition 耳聾}、和任何影響目標的疾病。此法術對不死生物或構裝體沒有任何效果。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用7環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，治療量便會再增加10。"
                ]
            }
        ],
        "page": 250,
        "isHeal": true,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "治癒真言",
        "ENG_name": "Healing Word",
        "level": 1,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "射程內你所選且你能看見的生物回復等同於{@dice 1d4}+你的施法屬性調整值的生命值。此法術對不死生物或構裝體沒有任何效果。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，治療量便會再增加{@scaledice 1d4|1-9|1d4}。"
                ]
            }
        ],
        "page": 250,
        "isHeal": true,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "灼熱金屬",
        "ENG_name": "Heat Metal",
        "level": 2,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一塊鐵和一團火焰"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "City (PSA)",
                        "source": "UAModernMagic"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "選擇射程內你所能看見的一個加工過的金屬物體，像是金屬武器或一件中或重型金屬護甲。你使該物體變得通紅熾熱。當你施放此法術時，任何與該物體有著物理性接觸的生物將受到{@dice 2d8}火焰傷害。直到法術結束前，你可以在你後續的每個回合中使用一個附贈動作以再造成這個傷害。",
            "如果一個生物正持握或穿戴該物體並因此受到傷害，則該生物必須成功通過一次體質豁免，否則只要它能夠丟下該物體，它就會這麼做。若它沒有丟下該物體，則直到你的下個回合開始前，它的攻擊檢定和屬性檢定都具有劣勢。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 2d8|2-9|1d8}。"
                ]
            }
        ],
        "page": 250,
        "damageInflict": [
            "fire"
        ],
        "savingThrow": [
            "constitution"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Izzet Engineer",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "煉獄叱喝",
        "ENG_name": "Hellish Rebuke",
        "level": 1,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "reaction",
                "condition": "在你被一個距離你60呎內你所能看見的生物傷害時進行。"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Warlock",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Oathbreaker",
                        "source": "DMG"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你伸指一點，傷害你的生物立刻被一團地獄烈火環繞。該生物必須進行一次敏捷豁免。豁免失敗將受到{@dice 2d10}火焰傷害，豁免成功則只受到一半的傷害。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 2d10|1-9|1d10}。"
                ]
            }
        ],
        "page": 250,
        "damageInflict": [
            "fire"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "races": [
            {
                "name": "Tiefling",
                "source": "PHB",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Variant)",
                "source": "SCAG",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Asmodeus)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Asmodeus)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Rakdos Cultist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "英雄宴",
        "ENG_name": "Heroes' Feast",
        "level": 6,
        "school": "C",
        "time": [
            {
                "number": 10,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一個價值至少1,000金幣的寶石碗，在施法時消耗",
                "cost": 1000,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你呼喚出一場盛宴，包括著豪華的食物和飲品。這道盛宴需要花費1小時的時間才能吃完，且食物會在這段時間結束時消失，且直到這1小時結束之前，此法術的效益都不會生效。最多12個生物可以參與享用這道盛宴。",
            "一個參與這場盛宴將獲得數個效益。該生物身上的所有疾病和毒素將被治癒，免疫於任何毒素和{@condition 恐懼}狀態，且在進行所有睿知豁免中具有優勢。它的生命值最大值同時會增加{@dice 2d10}，且或相同數量的生命值。這些效益會持續存在長達24個小時。"
        ],
        "page": 250,
        "damageImmune": [
            "poison"
        ],
        "areaTags": [
            "MT"
        ]
    },
    {
        "name": "英雄氣概",
        "ENG_name": "Heroism",
        "level": 1,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order (UA)",
                        "source": "UAOrderDomain"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Giant Soul (UA)",
                        "source": "UAGiantSoulSorcerer",
                        "subSubclass": "Hill"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Beauty (Stream)",
                        "source": "Twitter"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order",
                        "source": "GGR"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一個你觸碰的自願生物被勇氣充滿。直到法術結束前，該生物免疫於{@condition 恐懼}且在它的每個回合開始時獲得等同於你施法屬性調整值的臨時生命值。當此法術結束，目標失去所有來自此法術的臨時生命值。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以再額外選擇一個生物作為目標。"
                ]
            }
        ],
        "page": 250,
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Boros Legionnaire",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "脆弱詛咒",
        "ENG_name": "Hex",
        "level": 1,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 90
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "蠑螈被石化的眼珠"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Warlock",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Darkness (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你對射程內你所能看見的一個生物降下一個詛咒。直到法術結束前，每當你以一次攻擊命中目標時，你對他造成額外{@dice 1d6}死靈傷害。同時，在你施放此法術時選擇一項屬性。目標使用所選屬性進行的屬性檢定具有劣勢。",
            "若目標的生命值在法術結束前歸零，則你可以在你後續的回合以一個附贈動作去詛咒一個新的生物。",
            "對目標施放{@spell 移除詛咒}將會提早結束此法術。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或4環法術位施放此法術時，你可以維持你在此法術的專注最多8小時。當你使用5環或更高的法術位施放此法術時，你可以維持你在此法術的專注最多24小時。"
                ]
            }
        ],
        "page": 251,
        "damageInflict": [
            "necrotic"
        ],
        "races": [
            {
                "name": "Elf (Zendikar) (Mul Daya Nation)",
                "source": "PSZ",
                "baseName": "Elf (Zendikar)",
                "baseSource": "PSZ"
            }
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "怪物定身術",
        "ENG_name": "Hold Monster",
        "level": 5,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 90
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一小塊筆直的鐵條"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "War",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Vengeance",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Lolth (Twitter)",
                        "source": "Twitter"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Beauty (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "選擇射程內你所能看見的一個生物。目標必須成功通過一次睿知豁免，否則將在法術持續時間內被{@condition 麻痺}。此法術對不死生物沒有任何效果。在它的每個回合結束時，目標可以再進行一次睿知豁免。若豁免成功，則結束這個法術對目標的效果。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用6環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以再額外選擇一個生物作為目標。當你選擇這些生物時，它們彼此之間的距離必須在30呎內。"
                ]
            }
        ],
        "page": 251,
        "savingThrow": [
            "wisdom"
        ],
        "conditionInflict": [
            "paralyzed"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "人類定身術",
        "ENG_name": "Hold Person",
        "level": 2,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一小塊筆直的鐵條"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Arctic"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Vengeance",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest (UA)",
                        "source": "UAPaladin"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest v2 (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order (UA)",
                        "source": "UAOrderDomain"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Giant Soul (UA)",
                        "source": "UAGiantSoulSorcerer",
                        "subSubclass": "Frost"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order",
                        "source": "GGR"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "選擇射程內你所能看見的一個類人生物。目標必須成功通過一次睿知豁免，否則將在法術持續時間內被{@condition 麻痺}。在它的每個回合結束時，目標可以再進行一次睿知豁免。若豁免成功，則結束這個法術對目標的效果。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以再額外選擇一個類人生物作為目標。當你選擇這些類人生物時，它們彼此之間的距離必須在30呎內。"
                ]
            }
        ],
        "page": 251,
        "savingThrow": [
            "wisdom"
        ],
        "conditionInflict": [
            "paralyzed"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Azorius Functionary",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "神聖靈光",
        "ENG_name": "Holy Aura",
        "level": 8,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一個價值至少1,000金幣，裝有聖物的聖物匣，例如聖人衣袍的一片布、或取自聖典的一張羊皮紙",
                "cost": 1000
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "神性光芒從你身上流出並形成一團環繞著你30呎半徑的柔和光輝。直到此法術結束前，在你施放此法術時位於半徑內你所選擇的的生物將散發著5呎半徑的微光光照，在所有豁免檢定中具有優勢，且其它生物在對它們進行的攻擊檢定中具有劣勢。此外，當一個邪魔或不死生物以近戰攻擊命中一個受影響的生物，這道靈光將閃耀出燦爛的光芒，且攻擊者必須成功通過一次體質豁免，否則被{@condition 目盲}直到此法術結束。"
        ],
        "page": 251,
        "savingThrow": [
            "constitution"
        ],
        "conditionInflict": [
            "blinded"
        ],
        "areaTags": [
            "R"
        ]
    },
    {
        "name": "哈達之欲",
        "ENG_name": "Hunger of Hadar",
        "level": 3,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 150
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一根醃漬過的章魚觸手"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Warlock",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你打開一道大門通往群星間、一處孕育著未知恐懼的黑暗地帶。一個黑暗與刺骨寒冷的20呎半徑球體以射程內一點為中心憑空出現，並在法術持續期間持續存在。這片虛空孔洞內充斥著距離30呎內都能被聽見的不和諧低語和啜食噪音。任何光源，無論是魔法或其他，都無法照亮這片區域，且完全處於這片區域的生物陷入{@condition 目盲}狀態。",
            "這片虛空會使空間的維度扭曲，且該區域視作困難地形。任何在該區域開始它回合的生物會受到{@dice 2d6}寒冰傷害。任何在該區域結束它回合的生物則必須成功通過一次敏捷豁免，否則將因為遭到乳狀、異界觸手擦撞而受到{@dice 2d6}酸蝕傷害。"
        ],
        "page": 251,
        "damageInflict": [
            "acid",
            "cold"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "conditionInflict": [
            "blinded"
        ],
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "獵人印記",
        "ENG_name": "Hunter's Mark",
        "level": 1,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 90
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Vengeance",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你選擇射程內你所能看見的一個生物，並神秘地標記它為你的獵物。直到法術結束前，每當你使用一次武器攻擊命中該目標，你造成額外{@dice 1d6}傷害。且你在任何為了找到它而進行的睿知（{@skill 感知}）檢定中具有優勢。若目標的生命值在法術結束前歸零，則你可以在你後續的回合以一個附贈動作去標記一個新的生物。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或4環法術位施放此法術時，你可以維持你在此法術的專注最多8小時。當你使用5環或更高的法術位施放此法術時，你可以維持你在此法術的專注最多24小時。"
                ]
            }
        ],
        "page": 251,
        "opposedCheck": [
            "wisdom"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "催眠圖紋",
        "ENG_name": "Hypnotic Pattern",
        "level": 3,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "s": true,
            "m": "一根點燃的薰香或裝有磷光材料的水晶小瓶"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Beauty (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你創造出一個七彩的歪曲圖紋，在射程內一個30呎邊長立方體範圍內迂迴穿梭。這個圖紋出現片刻後就會消失。每個在範圍內看見該圖紋的生物必須進行一次睿知豁免。若豁免失敗，則該生物在法術持續期間被{@condition 魅惑}。當被此法術{@condition 魅惑}，該生物處於{@condition 無力}狀態且移動速度歸零。",
            "如果一個受影響的生物受到任何傷害、或其他人使用一個動作將該生物從恍惚中搖醒，則結束這個法術對該生物的效果。"
        ],
        "page": 252,
        "savingThrow": [
            "wisdom"
        ],
        "conditionInflict": [
            "charmed",
            "incapacitated"
        ],
        "areaTags": [
            "C"
        ]
    },
    {
        "name": "冰風暴",
        "ENG_name": "Ice Storm",
        "level": 4,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 300
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一撮灰塵和幾滴水"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Tempest",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Arctic"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ancients",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Raven Queen (UA)",
                        "source": "UAWarlockAndWizard"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Destruction (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一陣冰雹降下許多石般堅硬的冰塊，在以射程內一點為中心的20呎半徑、40呎高的圓柱體範圍內重擊地表。每個在圓柱體範圍內的生物都必須進行一次敏捷豁免。一個豁免失敗的目標將受到{@dice 2d8}鈍擊傷害以及{@dice 4d6}寒冰傷害，豁免成功則只受到一半的傷害。",
            "這些冰雹將使風暴效果內的區域變為困難地形，直到你的下個回合結束。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用5環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，鈍擊傷害便會再增加{@scaledice 2d8|4-9|1d8}。"
                ]
            }
        ],
        "page": 252,
        "damageInflict": [
            "bludgeoning",
            "cold"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "Y"
        ]
    },
    {
        "name": "鑑定術",
        "ENG_name": "Identify",
        "level": 1,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一顆價值至少100金幣的珍珠和一根貓頭鷹的羽毛",
                "cost": 100
            }
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "你選擇一個你必須在施放此法術時始終觸碰著的物體。如果它是一件魔法物品或含有魔法的物品，你將得知它的特性、該如何使用它們、它是否需要同調才能使用、以及它還剩下幾次充能（若有）。你得知是否有任何法術正在作用這個物品，若有則你也以知道那是什麼法術。如果該物品是被某個法術所創造的，你也得知是什麼法術創造了它。",
            "如果你在施法時觸碰的是一個生物而非物體，則你得知現在有什麼法術正在影響它（若有）。"
        ],
        "page": 252,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "迷幻手稿",
        "ENG_name": "Illusory Script",
        "level": 1,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "s": true,
            "m": {
                "text": "一份價值至少10金幣的含鉛墨水，在施法時消耗",
                "cost": 10,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "day",
                    "amount": 10
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "你在羊皮紙、紙、或其他適合的書寫材料上書寫文字，並對其注入一個強力的幻象，持續直到法術結束。",
            "對於你和任何你在施放此法術時指定的生物而言，這份文件看起來完全正常，有你的筆跡，且忠實呈現任何你在書寫文字時想傳達的意義。但對其他所有人而言，這份文件看起來就如同它是以無法理解的未知或魔法字母書寫而成。或者，你也可以讓這份文件呈現完全不同的訊息、或以不同的筆跡和語言書寫，但該語言必須是你知曉的語言。",
            "一旦此法術被解除，原始手稿和幻象將一起消失。",
            "一個擁有真實視覺的生物可以讀出被隱藏的訊息。"
        ],
        "page": 252,
        "backgrounds": [
            {
                "name": "Orzhov Representative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "禁錮術",
        "ENG_name": "Imprisonment",
        "level": 9,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一張描繪著目標的羊皮紙或刻成目標外貌的小雕像，和一種根據你所選擇法術版本而有所不同的特殊構材，價值至少為目標的每顆生命骰500金幣",
                "cost": 500
            }
        },
        "duration": [
            {
                "type": "permanent",
                "ends": [
                    "dispel"
                ]
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你創造出一道魔法束縛以禁錮一個射程內你所能看見的生物。目標必須成功通過一次睿知豁免，否則將被此法術給禁錮；若它豁免成功，則它將免疫於由你施放的此法術。當受到此法術影響時，該生物不需要呼吸、進食、或飲水，且它不會衰老。預言系法術無法定位或察覺該目標。",
            "當你施放此法術時，你選擇以下其中一個禁錮的形式。",
            {
                "type": "entries",
                "name": "埋葬",
                "entries": [
                    "目標被封入一個剛好足以容納它的魔法球體力場，並被深埋於大地之下。沒有任何事物能穿透此球體，也沒有任何生物可以透過傳送或位面旅行進入或離開它。"
                ]
            },
            "這個法術版本的特殊構材是一顆秘銀小球。",
            {
                "type": "entries",
                "name": "鎖鏈",
                "entries": [
                    "牢牢地根植於地面的沉重鎖鏈將目標固定在原地。目標被{@condition 束縛}直到此法術結束，且它在那之前無法透過任何方式移動或被移動。"
                ]
            },
            "這個法術版本的特殊構材是一條由貴重金屬打造的上好鎖鏈。",
            {
                "type": "entries",
                "name": "遁世監獄",
                "entries": [
                    "此法術將目標傳送到一個阻擋傳送或位面旅行的小型半位面。這個半位面可以是一座迷宮、牢籠、高塔、或任何你所選擇類似的密閉建築或區域。"
                ]
            },
            "這個法術版本的特殊構材是一個玉製監獄的微縮模型。",
            {
                "type": "entries",
                "name": "微縮收容",
                "entries": [
                    "目標縮小至1吋高度，且被囚禁在在一顆寶石或類似的物體中。光線可以如常地穿透該寶石（讓目標可以看到外部，且讓其他生物可以看到內部），但任何其他事物都無法穿透它，就算透過傳送或位面旅行也不行。當此法術維持其效果時，該寶石無法被切割或破壞。"
                ]
            },
            "這個法術版本的特殊構材一個透明的大型寶石，像是剛玉、鑽石、或紅寶石。",
            {
                "type": "entries",
                "name": "休眠",
                "entries": [
                    "目標陷入沉睡，且無法被叫醒。"
                ]
            },
            "這個法術版本的特殊構材是由稀有的致眠草藥構成。",
            {
                "type": "entries",
                "name": "結束此法術",
                "entries": [
                    "在你施放此法術的期間，無論法術版本為何，你可以指定一個會使此法術結束並釋放目標的條件。這個條件可以很籠統也可以很具體，由你決定，但DM必須同意這個條件是合理的，且可能會發生的。這個條件可以是基於一個生物的名稱、身分、或神性，或除此之外必須基於可觀測的動作或性質，且不能基於像是等級、職業、或生命值這類無形的事物。"
                ]
            },
            "{@spell 解除魔法}法術只有在以9環法術被施放才可以結束此法術，且必須以禁錮監獄或用於創造它的特殊構材為目標。",
            "你同時只能使用特定的特殊構材創造一個禁錮監獄。若你使用相同的構材再次施放此法術，則前次施法的目標將立即從它的禁錮中被釋放。"
        ],
        "page": 252,
        "savingThrow": [
            "wisdom"
        ],
        "conditionInflict": [
            "restrained"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "焚雲術",
        "ENG_name": "Incendiary Cloud",
        "level": 8,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 150
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一團貫穿著白熱餘火的盤旋煙雲出現在射程內一點為中心的20呎半徑球體範圍內。這團煙雲會繞過轉角散佈，且它所在的區域被重度遮蔽。。它會在法術持續期間持續存在，或直到一陣中速或更強（風速至少每小時10哩）的風將它吹散。",
            "當這團煙雲出現時，每個在雲內的生物都必須進行一次敏捷豁免。一個豁免失敗的目標將受到{@dice 10d8}火焰傷害，豁免成功則只受到一半的傷害。在一個回合中第一次進入此法術的區域，或在該處結束它回合的生物也必須進行此豁免檢定。",
            "在你的每個回合開始時，這團煙雲會向著你所選的方向直線移動10呎。"
        ],
        "page": 253,
        "damageInflict": [
            "fire"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "造成傷勢",
        "ENG_name": "Inflict Wounds",
        "level": 1,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Oathbreaker",
                        "source": "DMG"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Divine Soul",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Destruction (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "對你可以觸及的一個生物進行一次近戰法術攻擊。若命中，目標受到{@dice 3d10}死靈傷害。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 3d10|1-9|1d10}。"
                ]
            }
        ],
        "page": 253,
        "damageInflict": [
            "necrotic"
        ],
        "spellAttack": [
            "M"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "疫病蟲群",
        "ENG_name": "Insect Plague",
        "level": 5,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 300
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "幾粒糖、穀物、和一抹油脂"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Nature",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Tempest",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Desert"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Forest"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Grassland"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Swamp"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest (UA)",
                        "source": "UAPaladin"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Strength (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Primeval Guardian (UA)",
                        "source": "UARangerAndRogue"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Primeval Guardian (UA)",
                        "source": "UARangerAndRogue"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "成群、螫人的蝗蟲充斥在射程內以你所選擇一點為中心的20呎半徑球體範圍內。該球體會繞過轉角。該球體會在法術持續期間持續存在，且它所在的區域被輕度遮蔽。這個球體區域為困難地形。",
            "當這個區域出現時，每個在其中的生物都必須進行一次體質豁免。一個豁免失敗的目標將受到{@dice 4d10}穿刺傷害，豁免成功則只受到一半的傷害。一個生物也必須在一個回合中第一次進入該區域時，或在該處結束它的回合時進行此豁免檢定。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用6環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 4d10|5-9|1d10}。"
                ]
            }
        ],
        "page": 254,
        "damageInflict": [
            "piercing"
        ],
        "savingThrow": [
            "constitution"
        ],
        "areaTags": [
            "S"
        ],
        "backgrounds": [
            {
                "name": "Golgari Agent",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "隱形術",
        "ENG_name": "Invisibility",
        "level": 2,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一根被封入阿拉伯膠的眼睫毛"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Grassland"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Treachery (UA)",
                        "source": "UAPaladin"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Giant Soul (UA)",
                        "source": "UAGiantSoulSorcerer",
                        "subSubclass": "Cloud"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一個你觸碰的生物變得{@condition 隱形}直到法術結束。只要目標所穿戴或攜帶的東西還在目標身上，它們也都將保持{@condition 隱形}。此法術將在目標攻擊或施放法術時結束。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以再額外選擇一個生物作為目標。"
                ]
            }
        ],
        "page": 254,
        "races": [
            {
                "name": "Dwarf (Duergar)",
                "source": "SCAG",
                "baseName": "Dwarf",
                "baseSource": "PHB"
            },
            {
                "name": "Dwarf (Duergar)",
                "source": "MTF",
                "baseName": "Dwarf",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Abyssal)",
                "source": "UAThatOldBlackMagic",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Dispater)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Glasya)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Glasya)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "conditionInflict": [
            "invisible"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "跳躍術",
        "ENG_name": "Jump",
        "level": 1,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一隻蚱蜢的後腿"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Seeker (UA)",
                        "source": "UATheFaithful"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Lolth (Twitter)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個生物。直到法術結束前，目標的跳躍距離變為原本的三倍。"
        ],
        "page": 254,
        "races": [
            {
                "name": "Gith (Githyanki)",
                "source": "UAEladrinAndGith",
                "baseName": "Gith",
                "baseSource": "UAEladrinAndGith"
            },
            {
                "name": "Gith (Githyanki)",
                "source": "MTF",
                "baseName": "Gith",
                "baseSource": "MTF"
            }
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Simic Scientist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "敲擊術",
        "ENG_name": "Knock",
        "level": 2,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "選擇一個射程內你所能看見的一個物體。這個物品可以是一扇門、一個盒子、一個寶箱、一副鐐銬、一個掛鎖、或其他包含著以尋常或魔法方式阻止他人使用的物體。",
            "一個被尋常鎖關住、釘住、或閂住的物體將被解鎖、解封、或被解閂。如果該物體被複數道鎖給鎖上，則只有其中一個會被解鎖。",
            "若你選擇一個被{@spell 祕法鎖}給關住的目標，則該法術將被壓制10分鐘，在這段時間內目標將可以被正常地打開或關上。",
            "當你施放此法術時，一個距離300呎內都能被聽見的響亮敲擊聲將從目標物體上發出。"
        ],
        "page": 254
    },
    {
        "name": "通曉傳奇",
        "ENG_name": "Legend Lore",
        "level": 5,
        "school": "D",
        "time": [
            {
                "number": 10,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "價值至少250金幣的焚香，在施法時消耗，以及四塊各自價值至少50金幣的象牙長片",
                "cost": 250,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Undying",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Seeker (UA)",
                        "source": "UATheFaithful"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "描述或指名一個人、地方、或物體。此法術將在你腦海中形成與你指定事物有關重大傳說的簡短概述。這些傳說可能會包括當今流傳的傳聞、被遺忘的故事、或甚至尚未被廣泛知曉秘密學問。若你指定的事物並沒有傳奇性的地位，則你不會得到任何情報。你若掌握越多關於該事物的情報，你得到的情報也會越準確而詳細。",
            "你得到的情報是準確的，但可能會被透過晦澀的語言表達。舉例來說，若你手中持有一把神秘的魔法斧頭，此法術可能會產生這段信息：「痛苦將賜予觸碰此斧的惡者，就連斧柄都將切開惡者的手。只有真正的石之子，摩拉丁的愛人與摯愛，以雙唇詠出聖言「魯那格」，方能喚醒此斧的真正力量。」"
        ],
        "page": 254
    },
    {
        "name": "李歐蒙秘藏箱",
        "ENG_name": "Leomund's Secret Chest",
        "level": 4,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一個大小為3呎x2呎x2呎，由價值至少5,000金幣的稀有材料製成的精美箱子，和一個價值至少50金幣，以相同材料製成的微型箱子複製品",
                "cost": 5000
            }
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Arcana",
                        "source": "SCAG"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你將一個箱子和其內容物藏在乙太位面。你必須觸碰作為此法術材料構材的這個箱子和它的微型複製品。這個箱子可以容納最多12立方呎的非活體物質（3呎x2呎x2呎）。",
            "當這個箱子存在於乙太位面，你可以使用一個動作並觸碰其複製品以喚回這個箱子。它將出現在一處距離你5呎內的未被佔據空間的地面。你可以藉由使用一個動作並同時觸碰這個箱子和其複製品以將它送回乙太位面。",
            "在60天後，每一天此法術的效果都會有累積5%的機率就此結束。此法術會在你再次施放此法術時、箱子的小複製品被摧毀時、或是你選擇以一個動作結束此法術時結束。若此法術結束時那個較大的那個箱子仍處在乙太位面，則它將就此遺失，無法挽回。"
        ],
        "page": 254,
        "permanentEffects": true,
        "backgrounds": [
            {
                "name": "Orzhov Representative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "李歐蒙小屋",
        "ENG_name": "Leomund's Tiny Hut",
        "level": 3,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "hemisphere",
            "distance": {
                "type": "feet",
                "amount": 10
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一個小水晶串珠"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 8
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "一個10呎半徑不可移動的半球形力場突然出現在你周圍和上方，並在法術持續期間維持靜止。此法術將在你離開它的範圍時結束。",
            "這個半球可以容納你和九個體型為中型或更小的生物。若該區域內包括了一個大型生物或超過九個生物，則此法術失敗。在你施放此法術時就處於半球內的生物和物體可以自由地移動穿過此半球。所有其他生物和物體都將被阻擋而無法穿過半球。法術和其他魔法效果無法延伸或被施放穿過半球。無論外側的天候如何，半球內的空氣永遠舒適而乾燥。",
            "直到此法術結束前，你可以控制半球內部的照明變為微光或黑暗。從外側看，這個半球是不透明且呈現任何你所選的顏色，但它從內側看出去則是透明的。"
        ],
        "page": 255,
        "areaTags": [
            "H"
        ]
    },
    {
        "name": "次級復原術",
        "ENG_name": "Lesser Restoration",
        "level": 2,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Life",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Devotion",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個生物，並結束影響著它的任一個疾病或狀態。這些狀態可以是{@condition 目盲}、{@condition 耳聾}、{@condition 麻痺}、或{@condition 中毒}。"
        ],
        "page": 255,
        "races": [
            {
                "name": "Aasimar",
                "source": "DMG"
            }
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "浮空術",
        "ENG_name": "Levitate",
        "level": 2,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一條小皮環或者一根彎成杯型且末端有著長柄的金絲"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Seeker (UA)",
                        "source": "UATheFaithful"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "射程內你所選且你能看見的一個生物或未被固定的物體將垂直升起最多20呎，且在持續時間內維持漂浮的狀態。此法術可以浮起一個重量最多500磅的目標。一個成功通過體質豁免的非自願生物將不受影響。",
            "目標只能藉由推拉觸及範圍內固定的物體或表面來移動（像是牆壁或天花板），這讓它能如同攀爬一樣移動。你可以在你的回合改變目標的上下高度最多20呎。如果你自己就是目標，則你可以把上下移動當作你正常移動的一部分。除此之外，你可以使用你的動作去移動目標，而目標也必須待在法術的射程內。",
            "當法術結束時，若目標仍在半空中，它將會緩緩的飄落到地面上。"
        ],
        "page": 255,
        "savingThrow": [
            "constitution"
        ],
        "races": [
            {
                "name": "Genasi (Air)",
                "source": "EEPC",
                "baseName": "Genasi",
                "baseSource": "EEPC"
            },
            {
                "name": "Tiefling (Abyssal)",
                "source": "UAThatOldBlackMagic",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "光亮術",
        "ENG_name": "Light",
        "level": 0,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "m": "一隻螢火蟲或螢光苔"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Undying Light (UA)",
                        "source": "UALightDarkUnderdark"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你碰觸一個任一邊都不大於10呎的物體。直到法術結束前，該物體將散發出20呎半徑的明亮光照和再延伸20呎的微光光照。光的顏色可以隨你喜歡。用不透光的東西完全覆蓋該物體將會遮住光線。此法術將會在你再次施放它或用一個動作解消時結束。",
            "如果你以一個敵對生物穿戴或持握的物體為目標，則該生物必須成功通過一個敏捷豁免以迴避此法術。"
        ],
        "page": 255,
        "savingThrow": [
            "dexterity"
        ],
        "races": [
            {
                "name": "Aasimar (Fallen)",
                "source": "VGM",
                "baseName": "Aasimar",
                "baseSource": "VGM"
            },
            {
                "name": "Aasimar (Protector)",
                "source": "VGM",
                "baseName": "Aasimar",
                "baseSource": "VGM"
            },
            {
                "name": "Aasimar (Scourge)",
                "source": "VGM",
                "baseName": "Aasimar",
                "baseSource": "VGM"
            },
            {
                "name": "Aasimar",
                "source": "DMG"
            },
            {
                "name": "Tiefling (Abyssal)",
                "source": "UAThatOldBlackMagic",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ]
    },
    {
        "name": "閃電箭矢",
        "ENG_name": "Lightning Arrow",
        "level": 3,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在法術持續期間，下一次你進行遠程武器攻擊時，該武器的彈藥、或若其為投擲武器的話則該武器本身，將轉化成一束閃電。如常進行一次攻擊檢定。若命中則目標受到{@dice 4d8}閃電傷害，失手的話則只受到一半的傷害。此法術傷害取代原本的武器傷害。",
            "無論你命中與否，每個距離該目標10呎內的生物都必須進行一次敏捷豁免。每個豁免失敗的生物將受到{@dice 2d8}閃電傷害，豁免成功則只受到一半的傷害。",
            "該發彈藥或武器將接著回復它原本的型態。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用4環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，此法術的兩個傷害都會再增加{@scaledice 4d8;2d8|3-9|1d8}。"
                ]
            }
        ],
        "page": 255,
        "damageInflict": [
            "lightning"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "閃電束",
        "ENG_name": "Lightning Bolt",
        "level": 3,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "line",
            "distance": {
                "type": "feet",
                "amount": 100
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一塊毛皮和一桿琥珀、水晶、或玻璃"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Mountain"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "City (PSA)",
                        "source": "UAModernMagic"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Destruction (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道閃電從你向著你所選擇的一個方向轟鳴而出，形成一束100呎長、5呎寬的直線。每個在這個直線內的生物必須進行一次敏捷豁免。豁免失敗的生物將受到{@dice 8d6}閃電傷害，豁免成功則只受到一半的傷害。",
            "這束閃電會點燃範圍內所有未被穿戴或攜帶的可燃物體。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用4環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 8d6|3-9|1d6}。"
                ]
            }
        ],
        "page": 255,
        "damageInflict": [
            "lightning"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "L"
        ]
    },
    {
        "name": "動植物定位術",
        "ENG_name": "Locate Animals or Plants",
        "level": 2,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "少許尋血獵犬的毛"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "描述或指名一種特定的野獸或植物。專注於你周遭環境的自然之語，若5哩以內存在該類生物或植物，則你得知距離你最近的該生物或植物所在的方向與距離。"
        ],
        "page": 256
    },
    {
        "name": "生物定位術",
        "ENG_name": "Locate Creature",
        "level": 4,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "少許尋血獵犬的毛"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Swamp"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "City (PSA)",
                        "source": "UAModernMagic"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Raven Queen (UA)",
                        "source": "UAWarlockAndWizard"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Seeker (UA)",
                        "source": "UATheFaithful"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order (UA)",
                        "source": "UAOrderDomain"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order",
                        "source": "GGR"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "描述或指名一個你所熟悉的生物。只要該生物距離你1,000呎以內，你就可以感知到該生物所在位置的方向。若該生物正在移動，你也能知道它移動的方向。",
            "此法術可以定位一個你已知的特定生物，只要你曾在近距離\u201430呎距離內\u2014至少看過它一次。或者，此法術可以定位特定種類中（像是一個人類或一隻獨角獸）離你最近的一個生物。如果你所描述或指名的生物正處於另一種不同的形態，例如處於{@spell 變形術}法術的效果下，則此法術將無法定位該生物。",
            "若有至少10呎寬的流水阻擋在你和該生物之間的直線通路上，則此法術將無法定位該生物。"
        ],
        "page": 256
    },
    {
        "name": "物品定位術",
        "ENG_name": "Locate Object",
        "level": 2,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一根分岔的樹枝"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Seeker (UA)",
                        "source": "UATheFaithful"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "描述或指名一個你所熟悉的物體。只要該物體距離你1,000呎以內，你就可以感知到該物體所在位置的方向。若該物體正在移動，你也能知道它移動的方向。",
            "此法術可以定位一個你已知的特定物體，只要你曾在近距離\u201430呎距離內\u2014至少看過它一次。或者，此法術可以定位特定種類中離你最近的一個物體，像是某一種服裝、珠寶、家具、工具、或武器。",
            "若有任意厚度的鉛擋在你和物體之間的直線通路上，即使只是薄薄一層，則此法術將無法定位該物體。"
        ],
        "page": 256
    },
    {
        "name": "大步奔行",
        "ENG_name": "Longstrider",
        "level": 1,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一撮泥土"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個生物。直到法術結束前，目標的移動速度增加10呎。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以再額外選擇一個生物作為目標。"
                ]
            }
        ],
        "page": 256,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "法師護甲",
        "ENG_name": "Mage Armor",
        "level": 1,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一塊曬乾的皮革"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 8
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個沒有穿戴護甲的自願生物，直到法術結束前，一道防護性的魔法力場將環繞在它身邊。目標的基本AC變為13+它的敏捷調整值。此法術將在目標穿戴護甲或你以一個動作解消此法術時結束。"
        ],
        "page": 256,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "法師之手",
        "ENG_name": "Mage Hand",
        "level": 0,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一隻幽靈般的漂浮手掌在射程內你所選擇的一點出現。這隻手持續到法術的持續時間結束或直到你用一個動作解消它。這隻手會在它跟你的距離超過30呎或你再次施放此法術時消失。",
            "你可以使用你的動作去控制這隻手。你可以使用這隻手去操作一個物體、打開一扇未上鎖的門或容器、或者倒出小瓶內的東西。你可以在你每次使用它的時候移動這隻手最多30呎。",
            "這隻手不能攻擊、啟動魔法物品、或運載超過10磅的東西。"
        ],
        "page": 256,
        "races": [
            {
                "name": "Gith (Githyanki)",
                "source": "UAEladrinAndGith",
                "baseName": "Gith",
                "baseSource": "UAEladrinAndGith"
            },
            {
                "name": "Gith (Githzerai)",
                "source": "UAEladrinAndGith",
                "baseName": "Gith",
                "baseSource": "UAEladrinAndGith"
            },
            {
                "name": "Gith (Githyanki)",
                "source": "MTF",
                "baseName": "Gith",
                "baseSource": "MTF"
            },
            {
                "name": "Gith (Githzerai)",
                "source": "MTF",
                "baseName": "Gith",
                "baseSource": "MTF"
            },
            {
                "name": "Tiefling (Mammon)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Mephistopheles)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Mammon)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Mephistopheles)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "backgrounds": [
            {
                "name": "Dimir Operative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "防護法陣",
        "ENG_name": "Magic Circle",
        "level": 3,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 10
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "價值至少100金幣的聖水或鐵和銀粉，在施法時消耗",
                "cost": 100,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Arcana",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Monster Slayer (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Monster Slayer",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Monster Slayer (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Monster Slayer",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你以射程內你所能看見地面上的一處為中心，創造出一個10呎半徑、20呎高的魔法能量圓柱。閃爍的符文將出現在圓柱與地面或其他表面交界處的位置。",
            "選擇以下一個或多個生物類型：天界生物、元素、精類、邪魔、或不死生物。這個法陣將對所選類型的生物產生以下影響：",
            {
                "type": "list",
                "items": [
                    "該生物無法自願地以非魔法手段進入圓柱區域。若該生物嘗試使用傳送或跨位面旅行這麼做，則它必須先成功通過一次魅力豁免。",
                    "該生物對圓柱內的目標所進行的攻擊檢定具有劣勢。",
                    "圓柱內的目標不會被該生物{@condition 魅惑}、{@condition 恐懼}、或附身。"
                ]
            },
            "當你施放此法術時，你可以選擇讓這個魔法以相反的方向運作，避免指定類型的一個生物離開圓柱區域，並保護位於圓柱外面的目標。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用4環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，法術的持續時間就會再增加1小時。"
                ]
            }
        ],
        "page": 256,
        "savingThrow": [
            "charisma"
        ],
        "areaTags": [
            "Y"
        ]
    },
    {
        "name": "魔魂壺",
        "ENG_name": "Magic Jar",
        "level": 6,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "價值至少500金幣的一個寶石、水晶、聖物匣、或其他裝飾性容器",
                "cost": 500
            }
        },
        "duration": [
            {
                "type": "permanent",
                "ends": [
                    "dispel"
                ]
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你的身體陷入僵直性狀態，而你的靈魂離開身體並進入你用做此法術材料構材的容器中。當你的靈魂存在於該容器時，你能如同你處於該容器所在的空間一樣察覺你周遭的環境。你無法移動或採取反應。你唯一能採取的動作是將你自己的靈魂投射到最遠距離該容器的100呎範圍內，選擇回到你仍活著的身體內（並結束此法術），或嘗試附身一個類人生物的身體。",
            "你可以嘗試附身任何距離你100呎內且你能看見的類人生物（被{@spell 防護善惡}或{@spell 防護法陣}守護的生物無法被附身）。該目標必須進行一次魅力豁免。若豁免失敗，你的靈魂將移進目標的身體，且目標的靈魂將被困在容器中。若豁免成功，目標將成功抵抗你附身它的嘗試，且你在24小時內不能再附身它。",
            "一旦你成功附身一個生物的身體，你將得以控制它。你的遊戲數據將被該生物的數據取代，儘管你仍保有你的陣營，以及你的智力、睿知、和魅力屬性值。你保有你自己職業能力所帶來的好處。如果目標具有任何職業等級，你無法使用它的任何職業能力。",
            "在此同時，被附身生物的靈魂可以透過它自己的感官從容器察覺環境，但它無法移動或採取任何動作。",
            "當附身於一具身體時，若該容器距離你100呎內，則你可以使用你的動作以從宿主的身體回到容器內，並讓宿主生物的靈魂回到它自己的身體中。若宿主的身體在你處於其中時死亡，則該生物死亡，且你必須進行一次對抗你自己法術豁免DC的魅力豁免。若豁免成功且容器距離你100呎內，則你將回到容器內，否則你也會死亡。",
            "若該容器被摧毀或此法術結束，則你的靈魂將立刻回到你的身體中。若你的身體距離你超過100呎、或你的身體在你嘗試回到它時已經死亡，則你將死亡。若另一個生物的靈魂在容器被摧毀時處於其中，且若它的身體距離其100呎內且仍然活著，則該生物的靈魂將回到它的身體中，否則該生物將死亡。",
            "當此法術結束時，容器將被摧毀。"
        ],
        "page": 257,
        "savingThrow": [
            "charisma"
        ]
    },
    {
        "name": "魔法飛彈",
        "ENG_name": "Magic Missile",
        "level": 1,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Arcana",
                        "source": "SCAG"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你創造出三支發著光的魔法力場箭矢。每支箭矢各自命中射程內你所選且你能看見的一個生物。一支箭矢會對它的目標造成{@dice 1d4 + 1}力場傷害。所有箭矢都將同時擊中，且你可以決定它們要命中同一個或複數個生物。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，此法術就可以再額外創造一支箭矢。"
                ]
            }
        ],
        "page": 257,
        "damageInflict": [
            "force"
        ],
        "races": [
            {
                "name": "Tiefling (Abyssal)",
                "source": "UAThatOldBlackMagic",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Mephistopheles)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "areaTags": [
            "ST",
            "MT"
        ]
    },
    {
        "name": "魔嘴術",
        "ENG_name": "Magic Mouth",
        "level": 2,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一小塊蜂巢和價值至少10金幣的翡翠塵，在施法時消耗",
                "cost": 10,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "permanent",
                "ends": [
                    "dispel"
                ]
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "你在射程內的一個物體注入一段訊息，這段訊息將在觸發條件被滿足時被說出。選擇一個你所能看見且未被其他生物穿戴或攜帶的物體。接著說出一段訊息，這段信息的長度必須不超過25個字，但可以用最多10分鐘的時間被傳達。最後，決定一個將會觸發此法術以傳達你訊息的情境。",
            "當該情境發生，一個魔法嘴將出現在物體上，並以你的聲音和你述說時相同的音量復述該訊息。若你所選擇的物體有一張嘴或看起來像嘴巴的東西（例如雕像的嘴），則魔法嘴會出現在該處，讓其看起來像是從該物體的嘴巴說出話語。當你施放此法術時，你可以讓此法術在傳達該訊息後結束、或是讓它繼續存在並在每次被觸發時都再一次重述這段訊息。",
            "觸發的情境可以很籠統也可以很具體，由你決定。但它必須要基於距離該物體30呎內所發生的視覺或聲音狀況。舉例來說，你可以指示魔嘴在有任何生物移進該物體30呎範圍內時、或當30呎內有銀製鈴鐺響起時，讓其說出訊息。"
        ],
        "page": 257
    },
    {
        "name": "魔化武器",
        "ENG_name": "Magic Weapon",
        "level": 2,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Arcana",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "War",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade (UA)",
                        "source": "UAWarlockAndWizard"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Stone",
                        "source": "UASorcerer"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Zeal (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一把非魔法武器。直到此法術結束前，該武器變成魔法武器，在攻擊檢定和傷害骰上具有+1加值。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用4環或更高的法術位施放此法術時，加值增加至+2。當你使用6環或更高的法術位施放此法術時，加值增加至+3。"
                ]
            }
        ],
        "page": 257
    },
    {
        "name": "強效幻影",
        "ENG_name": "Major Image",
        "level": 3,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "少許羊毛"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你創造出一個物體、生物、或其他可見現象的幻影，必須不大於一個20呎邊長的立方體。這個幻影會出現在射程內你所能看見的一處，並持續到法術的持續時間結束。它看起來是完全真實的，也具有合適於它所描繪事物的聲音、氣味、和溫度。你無法創造出足以造成傷害的高熱或寒冷、足以造成雷鳴傷害的巨大聲響、或是能讓一個生物噁心的氣味（像是{@creature 戰蜥人}的惡臭）。",
            "只要你還在幻影的射程內，你就可以使用你的動作以讓幻影移動到射程內的任意一處。隨著幻影改變它的位置，你可以修改它的外觀以讓幻影的移動顯得比較自然。舉例來說，如果你創造出一個生物的幻影並移動它，你可以修改該幻影以讓它看起來像是在走路。同樣的，你可以使這個幻影在不同時機發出不同的聲音，甚至可以讓它進行一場對話。",
            "由於東西會穿過幻影，與幻影的任何物理性互動都將暴露它是幻象的事實。一個使用它的動作去檢視幻影的生物，可以透過一個成功的智力（{@skill 調查}）檢定辨識出它是幻象，其難度等同於你的法術豁免DC。如果一個生物辨識出這是幻象，該生物的視線將可以穿透該影像，且它的其他感官效果對該生物而言將變得模糊黯淡。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用6環或更高的法術位施放此法術時，此法術將持續直到被解消，且不再需要你的專注。"
                ]
            }
        ],
        "page": 258,
        "opposedCheck": [
            "intelligence"
        ]
    },
    {
        "name": "群體治療傷勢",
        "ENG_name": "Mass Cure Wounds",
        "level": 5,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Life",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Solidarity (PSA)",
                        "source": "PSA"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一波治癒能量從射程內你所選擇的一點沖刷而出。選擇最多六個處於以該點為中心30呎半徑球體內的生物。每個生物回復等同於{@dice 3d8}+你的施法屬性調整值的生命值。此法術對不死生物或構裝體沒有任何效果。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用6環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，治療量便會再增加{@scaledice 3d8|5-9|1d8}。"
                ]
            }
        ],
        "page": 258,
        "isHeal": true,
        "areaTags": [
            "MT",
            "S"
        ]
    },
    {
        "name": "群體治癒術",
        "ENG_name": "Mass Heal",
        "level": 9,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一陣治癒能量洪流從你流至你周圍的重傷生物體內。你回復最多700點生命值，由你決定如何分配給射程內任意數量你所能看見的生物。且此法術所治癒的生物身上所有的疾病、以及任何使它們{@condition 目盲}或{@condition 耳聾}的效果都將被痊癒。此法術對不死生物或構裝體沒有任何效果。"
        ],
        "page": 258,
        "isHeal": true,
        "areaTags": [
            "MT"
        ]
    },
    {
        "name": "群體治癒真言",
        "ENG_name": "Mass Healing Word",
        "level": 3,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order (UA)",
                        "source": "UAOrderDomain"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "隨著你喊出回復真言，射程內你所選最多六個且你能看見的生物回復等同於{@dice 1d4}+你的施法屬性調整值的生命值。此法術對不死生物或構裝體沒有任何效果。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用4環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，治療量便會再增加{@scaledice 1d4|3-9|1d4}。"
                ]
            }
        ],
        "page": 258,
        "isHeal": true,
        "areaTags": [
            "MT"
        ]
    },
    {
        "name": "群體暗示術",
        "ENG_name": "Mass Suggestion",
        "level": 6,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "m": "一隻蛇的舌頭和一小塊蜂窩或一滴甜油"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 24
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order",
                        "source": "GGR"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你提議一套行動（限制為一到兩個句子），並魔法性地影響射程內最多十二個你所能看見，且它能聽見和理解你的生物。不會被{@condition 魅惑}的生物免疫於這個效果。這項提議的措辭必須讓這套行動聽起來合情合理。要求該名生物刺自己、撲向長矛、自焚、或其他明顯有害的行動將會使此法術結束。",
            "每個目標都必須進行一次睿知豁免。若豁免失敗，則它會盡它的全力去實行你所描述的行動。這套行動可以在整個法術持續期間被持續。若被提議的行動在更短的時間內被完成，則法術將會在目標完成它被要求去做的事時結束。",
            "你也可以指定一些在法術持續期間會觸發特定行動的特定條件。舉例來說，你可以暗示一群守衛將他們所有的錢財送給他們第一個遇見的乞丐。如果在法術時效結束前沒有滿足條件，則該行動不會被執行。",
            "若你或你的任何同伴傷害了一個受此法術影響的生物，則該生物身上的法術效果結束。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用7環法術位施放此法術時，此法術的持續時間變為10天。當你使用8環法術位施放此法術時，持續時間變為30天。當你使用9環法術位施放此法術時，持續時間變為1年又1天。"
                ]
            }
        ],
        "page": 258,
        "savingThrow": [
            "wisdom"
        ],
        "conditionInflict": [
            "charmed"
        ],
        "areaTags": [
            "MT"
        ]
    },
    {
        "name": "迷宮術",
        "ENG_name": "Maze",
        "level": 8,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你將射程內一個你所能看見的生物放逐到一個迷宮似的半位面。目標將在法術持續期間內留在該處、或直到它從該迷宮中逃出。",
            "目標可以使用它的動作以嘗試逃脫。當它這麼做時，它進行一次DC 20的智力檢定。若它檢定成功，則它成功逃脫，且此法術結束（{@creature 米諾陶}或{@creature 巨牛魔}將自動通過此檢定）。",
            "當此法術結束時，目標將重新出現在它離開時所在的空間，或若該空間已被佔據，則出現在最近的一處未被佔據空間。"
        ],
        "page": 258,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "融身入石",
        "ENG_name": "Meld into Stone",
        "level": 3,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 8
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Mountain"
                    }
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "你進入一個大小足以完全容納你身體的石製物體或表面，在法術持續期間將你自己和你所攜帶的所有裝備融入石頭中。藉由使用你的移動速度，你可以從一個你能碰觸的位置進入石頭中。任何非魔法感官都無法看見或察覺你的存在。",
            "當與石頭融合時，你無法看見外頭發生的事，且你用於聆聽外界聲音所進行的睿知（{@skill 感知}）豁免具有劣勢。你仍能認知到時間的流逝，且可以在與石頭融合時對自己施放法術。你可以使用你的移動速度從你進入石頭的位置離開，這麼做將結束法術。除此之外你無法移動。",
            "石頭受到的輕微物理損傷並不會傷害到你，但石頭的部分毀損或者形狀改變（改變到不再足以容納你的程度）將把你從石頭中逐出，並對你造成{@dice 6d6}鈍擊傷害。石頭的完全毀損（或被轉變成另一種不同的物質）將把你從石頭中逐出，並對你造成50點鈍擊傷害。若被從中逐出，你將摔倒{@condition 伏地}於距離你進入石頭處最近的一處未被佔據的空間。"
        ],
        "page": 259,
        "damageInflict": [
            "bludgeoning"
        ],
        "conditionInflict": [
            "prone"
        ],
        "backgrounds": [
            {
                "name": "Dimir Operative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "馬友夫強酸箭",
        "ENG_name": "Melf's Acid Arrow",
        "level": 2,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 90
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "大黃葉的粉末以及蝰蛇的胃袋"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Swamp"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道閃爍的綠色箭矢襲向射程內的一個目標並爆散成酸霧。對目標進行一次遠程法術攻擊。若命中，目標將立刻受到{@dice 4d4}酸蝕傷害，並在它的下個回合結束時再受到{@dice 2d4}酸蝕傷害。若沒有命中，則酸液箭矢將濺射到目標身上，造成初始傷害一半的傷害，且不會在它的下個回合結束時造成傷害。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，初始傷害和後續傷害都會再增加{@scaledice 4d4;2d4|2-9|1d4}。"
                ]
            }
        ],
        "page": 259,
        "damageInflict": [
            "acid"
        ],
        "spellAttack": [
            "R"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "修復術",
        "ENG_name": "Mending",
        "level": 0,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "兩塊天然磁石"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術修復你所碰觸的一個物體上的一處破損或裂縫，像是破掉的鐵絲網、斷成兩半的鑰匙、被撕裂的斗篷、漏水的酒袋等等。只要破損或裂縫的任一邊不超過1呎，你就能修復它，不留下任何傷痕。",
            "此法術可以物理性的修復魔法物品或構裝體，但無法將這些物體的魔法給回復。"
        ],
        "page": 259
    },
    {
        "name": "傳訊術",
        "ENG_name": "Message",
        "level": 0,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一小段銅線"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "round",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你用手指指向射程內的一個生物並低聲說出一段訊息。目標（且只有目標）會聽到這段訊息並能夠以只有你能聽到的低語回覆。",
            "如果你熟悉該目標且知道他正位於屏障後方，則你可以讓此法術的效果穿透固體。這個法術並不需要沿著直線傳播，而可以自由地繞過轉角或穿過開口。"
        ],
        "page": 259,
        "races": [
            {
                "name": "Tiefling (Abyssal)",
                "source": "UAThatOldBlackMagic",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Azorius Functionary",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "流星爆",
        "ENG_name": "Meteor Swarm",
        "level": 9,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "miles",
                "amount": 1
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "熾烈的火焰球體轟炸射程內地面上你所能看見的四個點。每個位於以你所選各點為中心40呎半徑球體範圍內的生物都必須進行一次敏捷豁免。這個球體範圍會繞過轉角。一個豁免失敗的生物將受到{@dice 20d6}火焰傷害和{@dice 20d6}鈍擊傷害，豁免成功則只受到一半的傷害。一個同時處於多個烈焰爆炸範圍的生物只會被影響一次。",
            "此法術會傷害範圍內的物體，並點燃所有未被穿戴或攜帶的可燃物體。"
        ],
        "page": 259,
        "damageInflict": [
            "bludgeoning",
            "fire"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "心靈屏障",
        "ENG_name": "Mind Blank",
        "level": 8,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 24
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "直到此法術結束前，一個你碰觸的自願生物將免疫於精神傷害、任何能感知情緒或讀取它思想的效果、預言系法術、以及{@condition 魅惑}狀態。此法術甚至能夠阻擋用於影響目標心靈或獲得關於目標資訊的{@spell 祈願術}法術、以及其他類似效果的法術或力量。"
        ],
        "page": 259,
        "damageInflict": [
            "psychic"
        ],
        "damageImmune": [
            "psychic"
        ]
    },
    {
        "name": "次級幻象",
        "ENG_name": "Minor Illusion",
        "level": 0,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "s": true,
            "m": "少許羊毛"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Giant Soul (UA)",
                        "source": "UAGiantSoulSorcerer",
                        "subSubclass": "Cloud"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內創造一段聲音或一個物體的影像，持續到法術的持續時間結束。這個幻象也會在你以一個動作解消它或再次施放此法術時消失。",
            "如果你創造一段聲音，它的音量可以小至低語，大致尖叫。它可以是你的聲音、其他人的聲音、獅子的吼叫聲、擊鼓聲、或任何其他你所選擇的聲音。這個聲音在持續時間內持續而不衰弱，或者你也可以在法術結束前於不同時機發出不相關的聲音。",
            "如果你創造出一個物體的影像\u2014像是一張椅子、泥濘腳印、或一個小箱子\u2014它必須不大於一個5呎邊長的立方體。這個影像無法創造出聲音、光照、氣味、或其他感官效果。由於東西會穿過幻象，與影像的任何物理性互動都將暴露它是幻象的事實。",
            "如果一個生物使用它的動作去檢視該聲音或影像，它可以透過一個成功的智力（{@skill 調查}）檢定辨識出它是幻象，難度等同於你的法術豁免DC。如果一個生物辨識出這是幻象，幻象對該生物而言將變得模糊黯淡。"
        ],
        "page": 260,
        "opposedCheck": [
            "intelligence"
        ],
        "races": [
            {
                "name": "Elf (Eladrin)",
                "source": "UAEladrinAndGith",
                "baseName": "Elf",
                "baseSource": "PHB"
            },
            {
                "name": "Gnome (Forest)",
                "source": "PHB",
                "baseName": "Gnome",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Glasya)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Glasya)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ]
    },
    {
        "name": "海市蜃樓",
        "ENG_name": "Mirage Arcane",
        "level": 7,
        "school": "I",
        "time": [
            {
                "number": 10,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "sight"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "day",
                    "amount": 10
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你使一片最大1哩平方範圍內的地形在視覺、聽覺、嗅覺、和甚至觸覺上都像是另一種地形。然而，地形的大致形狀仍保持不變。一片開闊的平原或道路可以被變得像是一片沼澤、丘陵、裂谷或其他難以通過或者無法通過的地形。一個池塘可以被變得看起來像是一片草原，一個懸崖可以像是一段緩坡，或者讓一條亂石溪谷變得像是一條寬闊平坦的道路。",
            "同樣的，你也可以改變建築物的外觀，或是在本來沒有建築物的位置上添加一棟。此法術並不能偽裝、隱藏、或是添加生物。",
            "這個幻象包括了聽覺、視覺、觸覺、和嗅覺要素，因此它可以將平整的地表變成困難地形（反之亦然），或阻礙通過這片區域的移動。一旦幻象地形中的任意部分（像是石頭或樹枝）被移出此法術區域外，它將會立即消失。",
            "具有真實視覺的生物可以看穿幻象，並看見這片地形的真實型態；然而，任何其他幻象的要素仍會保留，因此即使該生物能意識到幻象的存在，它仍然能夠與這個幻象進行物理性的互動。"
        ],
        "page": 260
    },
    {
        "name": "鏡影術",
        "ENG_name": "Mirror Image",
        "level": 2,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Trickery",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Coast"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Treachery (UA)",
                        "source": "UAPaladin"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ambition (PSA)",
                        "source": "PSA"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "三個你自己的幻影複製體出現在你的位置。直到法術結束前，複製體會跟著你移動、模仿你的動作、並變換位置，因此不可能追蹤判斷哪一個影像才是真身。你可以使用你的動作解消這些幻影複製體。",
            "在法術持續期間，每當有一個生物以你為攻擊的目標，骰一顆{@dice d20}以決定該攻擊是否以你的其中一個複製體為目標。",
            "若你有三個複製體，你必須骰出6或以上才能使該攻擊改為以複製體為目標。當有二個複製體，你必須骰出8或以上。當有一個複製體，則你必須骰出11以上。",
            "一個複製體的AC等同於10+你的敏捷調整值。若攻擊命中一個複製體，則該複製體被摧毀。一個複製體只會被一次命中它的攻擊摧毀，而無視所有其他傷害和效果。此法術會在所有複製體被摧毀時結束。",
            "若一個生物無法視物，或依賴視覺以外的感知，像是盲視、或它可以察覺幻影的真偽，例如透過真實視覺，則該生物將不會受此法術影響。"
        ],
        "page": 260,
        "races": [
            {
                "name": "Tiefling (Abyssal)",
                "source": "UAThatOldBlackMagic",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ]
    },
    {
        "name": "假象術",
        "ENG_name": "Mislead",
        "level": 5,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在變為{@condition 隱形}的同時，一個你的幻象複製體出現在你所在的位置。這個複製體會在法術持續期間內持續存在，但隱形效果會在你攻擊或施放法術時結束。",
            "你可以使用你的動作移動你的幻象複製體至最多等同你移動速度兩倍的距離，並讓它以你選擇的方式打手勢、說話、並行動。",
            "你可以透過它的眼睛視物並透過它的耳朵聆聽，就如同你位於它所在的位置。在你的每個回合以一個附贈動作，你可以從在它的感官和你的感官之間切換。當你使用它的感官時，你對你自己的周遭環境視作{@condition 耳聾}和{@condition 目盲}。"
        ],
        "page": 260,
        "conditionInflict": [
            "blinded",
            "deafened",
            "invisible"
        ]
    },
    {
        "name": "迷蹤步",
        "ENG_name": "Misty Step",
        "level": 2,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Coast"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ancients",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Vengeance",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Horizon Walker",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Horizon Walker",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "短暫的被一陣銀色迷霧環繞，你傳送到最多30呎距離的一處你所能看見的未被佔據空間。"
        ],
        "page": 260,
        "races": [
            {
                "name": "Elf (Eladrin)",
                "source": "DMG",
                "baseName": "Elf",
                "baseSource": "PHB"
            },
            {
                "name": "Gith (Githyanki)",
                "source": "UAEladrinAndGith",
                "baseName": "Gith",
                "baseSource": "UAEladrinAndGith"
            },
            {
                "name": "Gith (Githyanki)",
                "source": "MTF",
                "baseName": "Gith",
                "baseSource": "MTF"
            }
        ]
    },
    {
        "name": "修改記憶",
        "ENG_name": "Modify Memory",
        "level": 5,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Trickery",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ambition (PSA)",
                        "source": "PSA"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你嘗試重塑另一個生物的記憶。一個你所能看見的生物必須進行一次睿知豁免。若你正在與該生物戰鬥，則它在該豁免檢定中具有優勢。若豁免失敗，目標將在法術持續期間被你{@condition 魅惑}。被{@condition 魅惑}的生物將陷入{@condition 無力}狀態，且無法意識到它的周遭環境，儘管它仍然能聽見你。如果它受到任何傷害或成為其他法術的目標，則此法術結束，且目標的記憶不會受到任何修改。",
            "在魅惑效果持續時，你可以影響目標關於它在過去24小時內經歷，且持續不超過10分鐘的一個事件的記憶。你可以永久消除關於這個事件的所有記憶、讓目標能完美清晰地回憶起該事件的所有細節、改變它對該事件細節的記憶、或創造一段關於其他事件的記憶。",
            "你必須對目標說話以描述它的記憶如何被影響，且它必須要能夠理解你的語言好讓你植入被修改的記憶。它的大腦將自動填補你描述中所有細節的漏洞。若此法術在你描述完被修改的記憶之前結束，該生物的記憶將不會被修改。否則被修改的記憶將在法術結束時根植於目標心中。",
            "一段被修改的記憶不一定會影響生物的行為，尤其是若這段記憶與該生物的天性、陣營、或信仰相違背。一段不合邏輯的記憶，例如植入一段關於該生物是多麼享受將自己浸泡在強酸中的記憶，可能會被忽視，被當作一場惡夢。DM可能會認定一段被修改的記憶太過荒謬，以至於無法顯著影響該生物的行為。",
            "一個施放於目標的{@spell 移除詛咒}或{@spell 高等復原術}可以恢復該生物真正的記憶。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用6環或更高的法術位施放此法術時，你可以修改目標記憶中最多7天前(6環)、30天前(7環)、1年前(8環)、或在過去任何時候(9環)所發生事件的記憶。"
                ]
            }
        ],
        "page": 261,
        "savingThrow": [
            "wisdom"
        ],
        "permanentEffects": true,
        "conditionInflict": [
            "charmed",
            "incapacitated"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Dimir Operative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "月華之光",
        "ENG_name": "Moonbeam",
        "level": 2,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "數粒月籽藤的種子和一塊乳白色長石"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ancients",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道閃爍著蒼白光芒的銀光在以射程內一點為中心的5呎半徑、40呎高的圓柱空間內照下。直到法術結束前，微光光照充滿該圓柱。",
            "當一個生物在此法術區域中開始它的回合、或在一個回合中第一次進入該區域，則它將被幽靈般的火舌吞沒並造成燒灼般的劇痛，且它必須進行一次體質豁免。若豁免失敗，則它將受到{@dice 2d10}光耀傷害，豁免成功則只受到一半的傷害。",
            "變形者(shapechanger)在進行此豁免檢定時具有劣勢。若它豁免失敗，則它將立刻變回它原本的型態、且直到離開此法術的光照前都無法變換成不同的形態。",
            "在你施放此法術之後的每個你的回合，你可以使用一個動作以移動這束光朝任意方向移動最多60呎。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 2d10|2-9|1d10}。"
                ]
            }
        ],
        "page": 261,
        "damageInflict": [
            "radiant"
        ],
        "savingThrow": [
            "constitution"
        ],
        "areaTags": [
            "Y"
        ]
    },
    {
        "name": "魔鄧肯忠犬",
        "ENG_name": "Mordenkainen's Faithful Hound",
        "level": 4,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一個銀製小哨、一根骨頭、和一條線"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 8
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內你所能看見的一處未被佔據空間召喚出一隻幻影看門狗，它將在法術持續期間維持存在，直到你以一個動作將它解消、或直到你移動到距離它超過100呎外的地方。",
            "這隻獵犬對除了你以外的所有生物而言是{@condition 隱形}的，且不會被傷害。當一個體型為小型或更大生物來到距離你30呎內的位置，而沒有先說出你在施放此法術時指定的密語，則獵犬將開始大聲吠叫。這隻獵犬可以看見{@condition 隱形}的生物，且可以看見乙太位面的事物。它無視幻象。",
            "在每次你的回合開始時，這隻獵犬會嘗試啃咬一個距離它5呎內，且對你有敵意的生物。這隻獵犬的攻擊加值等同於你的施法屬性調整值+你的熟練加值。若命中，則它造成{@dice 4d8}穿刺傷害。"
        ],
        "page": 261,
        "damageInflict": [
            "piercing"
        ]
    },
    {
        "name": "魔鄧肯豪宅術",
        "ENG_name": "Mordenkainen's Magnificent Mansion",
        "level": 7,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 300
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一個象牙雕刻而成的正門模型、一小塊打磨過的大理石、和一根銀製小湯匙，各自價值至少5金幣",
                "cost": 5
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 24
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內變出一座位於異次元的住處，並在法術持續期間持續存在。你決定它唯一的入口出現在何處。這個入口閃爍著微光，且為5呎寬和10呎高。只要傳送門仍保持開啟，你和任何你在施放此法術時指定的生物就可以進入這座異次元住處。你可以在你距離傳送門30呎內時開啟或關上這個傳送門。當傳送門被關上，它將變為隱形。",
            "在傳送門內，是一座連接著許多房間的華麗大廳。住處內的空氣清新且溫暖。",
            "你可以創造出任何你想要樓層規劃，但它的空間不能超過50個10呎邊長立方體所構成的空間。這個場所的家具和裝潢由你決定。它含有足夠的食物以為最多100人提供九道菜的盛宴。100個近乎隱形的僕役組織而成的職員將招待所有進入住處的人。你決定這些僕役的視覺外觀和衣著。它們將完全服從你的命令。每個僕役都能夠執行任何尋常人類僕役可以執行的工作，但它們無法攻擊、或採取任何會對其它生物有直接傷害的行動。這些僕役可以拿取東西、打掃、縫補、摺衣服、點火、上菜、和倒酒等等。這些僕役可以在豪宅內四處移動，但不能離開豪宅。家具和其他由此法術創造的物體將在被移出豪宅時如煙消散。當此法術結束時，任何仍在異次元空間內的生物都將被逐出至最接近入口處的開放空間。"
        ],
        "page": 261
    },
    {
        "name": "魔鄧肯私人密室",
        "ENG_name": "Mordenkainen's Private Sanctum",
        "level": 4,
        "school": "A",
        "time": [
            {
                "number": 10,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一片薄鉛片、一塊不透光玻璃、一團棉花或布料、和貴橄欖石粉末"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 24
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你用魔法保護射程內一個區域的安全。該區域為一個立方體區域，各邊長最小為5呎，最大為100呎。此法術持續到法術持續期間結束，或直到你使用一個動作將它解消。",
            "當你施放此法術時，你決定此法術將提供怎樣的安全防護，從以下特性中選擇任意個或全部：",
            {
                "type": "list",
                "items": [
                    "聲音不會穿過位於守護區域邊緣的屏障。",
                    "守護區域的屏障看起來暗沉而朦朧，防止視覺（包括黑暗視覺）穿透它。",
                    "透過預言系法術創造的感應器無法出現在受保護的區域內，也無法穿過它邊緣的屏障。",
                    "該區域內的生物無法被作為預言系法術的目標。",
                    "任何事物都無法傳送進入或出去被守護的區域。",
                    "守護區域內進行的位面旅行將被阻擋。"
                ]
            },
            "在一年內每天持續在同一個地方施放此法術，將會使此效果成為永久效果。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用5環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就可以讓立方體的大小再增加100呎。因此你可以藉由使用5環法術位來保護一個各邊長最多200呎的立方體區域。"
                ]
            }
        ],
        "page": 262,
        "permanentEffects": true
    },
    {
        "name": "魔鄧肯之劍",
        "ENG_name": "Mordenkainen's Sword",
        "level": 7,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一把白金製成，銅鋅合金劍柄的寶劍模型，價值250金幣",
                "cost": 250
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你創造出一塊劍形的力場平面，漂浮於射程內。它將在法術持續期間內持續存在。",
            "當這把劍出現時，你可以對距離這把劍5呎內的一個目標進行一次近戰法術攻擊。若命中，則目標將受到{@dice 3d10}力場傷害。直到此法術結束前，你可以在你的每個回合以一個附贈動作移動該這把劍最多20呎距離到一處你所能看見的位置，並再對一個相同或不同的目標重複進行一次此攻擊。"
        ],
        "page": 262,
        "damageInflict": [
            "force"
        ],
        "spellAttack": [
            "M"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "地動術",
        "ENG_name": "Move Earth",
        "level": 6,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一把鐵刃和一個裝有泥土混合物的小袋\u2014黏土、壤土、和沙土"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 2
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "選擇射程內一處各邊不超過40呎的地表區域。你可以在法術持續期間以任何你所選擇的方式重塑該區域內的泥土、沙、或黏土。你可以升起或降低該區域的海拔高度、創造或填滿一道溝壑，升起或移平一道牆、或形成一根立柱。任何這類變化的程度都不能超過這片區域最大邊長的一半。因此，若你影響一塊40呎平方的方形區域，你可以創造出一個最多20呎高的立柱、將這片方形區域的高度提升或降低最多20呎、或挖掘一道最多20呎深的溝壑，諸如此類。這些變化將會花費10分鐘來完成。",
            "每次你為此法術維持了10分鐘的專注後，你都可以再選擇影響一片新的地表區域。",
            "由於地表的變化發生的相當緩慢，區域內的生物通常不會因為地表的變動而被困住或受傷。",
            "此法術無法改變天然岩石或石製建築。岩石和建築物會被搬移以適應新的地形。若你重塑地形的方式可能會導致建築結構不穩定，則它可能會因此崩塌。",
            "同樣的，此法術無法直接影響植物的生長。被影響的土壤會帶著任何生長在上面的植物一起移動。"
        ],
        "page": 263,
        "areaTags": [
            "Q"
        ]
    },
    {
        "name": "迴避偵測",
        "ENG_name": "Nondetection",
        "level": 3,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一撮價值25金幣的鑽石塵撒在目標身上，在施法時消耗",
                "cost": 25,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 8
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge (PSA)",
                        "source": "PSA"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在法術持續期間，你隱藏你所觸碰的目標不受預言系法術偵測。目標可以是一個自願生物、一個地方、或一個各邊不超過10呎的物體。目標將無法成為任何預言系法術的目標，也無法透過魔法占卜偵測等手段被察覺。"
        ],
        "page": 263,
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Dimir Operative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "涅斯圖魔法靈光",
        "ENG_name": "Nystul's Magic Aura",
        "level": 2,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一小塊方形絲綢"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 24
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Arcana",
                        "source": "SCAG"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在一個你觸碰的生物或物體上放置一個幻象，使預言系法術揭示出關於它錯誤的情報。目標可以是一個自願生物或一個未被另一個生物穿戴或攜帶的物體。",
            "當你施放此法術時，選擇以下一個或兩個效果。這個效果將在法術持續期間內持續存在。如果你每天對相同的生物或物體施放此法術持續30天，且每次都選擇相同的效果，則此幻象將持續直到它被解消。",
            {
                "type": "entries",
                "name": "虛假靈光",
                "entries": [
                    "你改變目標在那些偵測魔法靈光的法術和魔法效果下的表現方式，例如{@spell 偵測魔法}。你可以使非魔法物體看起來像是魔法物體，使魔法物體看起來像是非魔法，或改變該物體的魔法靈光好讓其看起來像是屬於另一個你所選的特定魔法學派。當你對一個物體使用這個效果，你可以使這個虛假的魔法向任何使用此物品的生物顯現出來。"
                ]
            },
            {
                "type": "entries",
                "name": "偽裝",
                "entries": [
                    "你改變目標在那些偵測生物類型的法術和魔法效果下的表現方式，例如聖騎士的神聖感知或{@spell 徽記術}的觸發條件。你選擇一種生物類型，且其它法術和魔法效果將視目標如同它是該類型或該陣營。"
                ]
            }
        ],
        "page": 263,
        "permanentEffects": true,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "歐提路克冰凍法球",
        "ENG_name": "Otiluke's Freezing Sphere",
        "level": 6,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 300
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一個小水晶球"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一個寒冰能量形成的急凍球體從你的指尖襲向射程內你所選擇的一點，並在該處爆炸席捲60呎半徑的球體範圍。每個在該範圍內的生物都必須進行一次體質豁免。若豁免失敗，該生物受到{@dice 10d6}寒冰傷害，豁免成功則只受到一半的傷害。",
            "若這個球體擊中一片水體或主要由水組成的液體（不包括水構成的生物），則它將把30呎平方範圍內的液體凍結6吋厚。這塊冰將維持1分鐘。游在被凍結水面的生物將被困在冰中。一個被困住的生物可以使用一個動作進行一次對抗你法術豁免DC的力量檢定以破冰而出。",
            "若你希望，則你可以在完成此法術後選擇不發射這個球體。一顆尺寸大約等同投石索彈丸，觸感冰涼的小球體將出現在你手中。在任何時候，你或一個你交付此球體的生物可以將此球體投擲出去（射程40呎），或使用{@item 投石索|phb}將之投出（投石索的正常射程）。它將在衝擊中粉碎，並產生與正常施放此法術時相同的效果。你也可以不粉碎該球體而將之設置好。在1分鐘後，若該球體尚未被粉碎，則它將爆炸。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用7環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 10d6|6-9|1d6}。"
                ]
            }
        ],
        "page": 263,
        "damageInflict": [
            "cold"
        ],
        "savingThrow": [
            "constitution"
        ],
        "opposedCheck": [
            "strength"
        ],
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "歐提路克魔封法球",
        "ENG_name": "Otiluke's Resilient Sphere",
        "level": 4,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一塊透明的半球體水晶和一塊與之匹配的半球體阿拉伯膠"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Protection (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一個微微發光的球體力場將射程內一個體型為大型或更小的生物或物體封入其中。一個非自願的生物可以進行一次敏捷豁免。若豁免失敗，則該生物在法術持續期間被封入球內。",
            "沒有任何事物\u2014包括物質、能量、或其他法術效果\u2014可以穿過這道屏障，無論進或出都一樣，儘管球體內的生物仍可以呼吸。該球體免疫所有傷害，且在裡面的生物或物體不會被任何源自外面的攻擊或效果傷害，也不能對任何外面的事物造成傷害。",
            "這個球體沒有重量，且大小剛好足夠容納裡面的生物或物體。一個被封住的生物可以使用它的動作以推動球面，並因此滾動球體移動最多該生物移動速度一半的距離。同樣的，這個球體也可以被其他生物拿起或移動。",
            "以該球體為目標的{@spell 解離術}將摧毀它，而不會傷害到任何在裡面的事物。"
        ],
        "page": 264,
        "damageImmune": [
            "acid",
            "bludgeoning",
            "cold",
            "fire",
            "force",
            "lightning",
            "necrotic",
            "piercing",
            "poison",
            "psychic",
            "radiant",
            "slashing",
            "thunder"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Izzet Engineer",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "奧圖狂舞術",
        "ENG_name": "Otto's Irresistible Dance",
        "level": 6,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "選擇射程內你所能看見的一個生物。目標將在法術持續期間於原地開始跳起滑稽的舞步：搖擺曳步、踢躂雙腳、蹦蹦跳跳。不會被{@condition 魅惑}的生物免疫於這個法術。",
            "一個跳舞中的生物必須使用它所有的移動速度在原地跳舞，而不能離開它所在的位置，且在敏捷豁免和攻擊檢定中具有劣勢。當目標受到此法術的影響時，其他生物對它進行的攻擊檢定將具有優勢。以一個動作，跳舞中的生物可以進行一次睿知豁免以恢復自身的控制。若豁免成功，則此法術結束。"
        ],
        "page": 264,
        "savingThrow": [
            "wisdom"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "行蹤無跡",
        "ENG_name": "Pass without Trace",
        "level": 2,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一片槲寄生葉子燒成的灰和一小枝雲杉"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Trickery",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Grassland"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "從你身上散發出陰影帷幕和寂靜，遮掩你和你的同伴不受偵測。在法術持續期間，每個距離你30呎範圍內你所選擇的生物（包括你）在敏捷（{@skill 隱匿}）檢定上都獲得+10加值，且無法被魔法以外的手段追蹤。獲得這個好處的生物不會留下任何足跡或其他走過的痕跡。"
        ],
        "page": 264,
        "races": [
            {
                "name": "Genasi (Earth)",
                "source": "EEPC",
                "baseName": "Genasi",
                "baseSource": "EEPC"
            }
        ],
        "areaTags": [
            "MT"
        ],
        "backgrounds": [
            {
                "name": "Dimir Operative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "穿牆術",
        "ENG_name": "Passwall",
        "level": 5,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一撮芝麻籽"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Mountain"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Seeker (UA)",
                        "source": "UATheFaithful"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Treachery (UA)",
                        "source": "UAPaladin"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一個通道出現在射程內你所能看見的一道木質、石膏製、或石製表面（像是牆、天花板、或地板）上你所選擇的一點，且在法術持續期間持續存在。你決定這個開口的尺寸：最多5呎寬、8呎高、及20呎深。這個通道不會讓周遭結構因此不穩定。",
            "當這個開口消失時，任何仍在此法術創造的通道裡的生物或物體將會被安全地排到距離你施法表面最近的一處未被佔據空間。"
        ],
        "page": 264
    },
    {
        "name": "魅影之力",
        "ENG_name": "Phantasmal Force",
        "level": 2,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "少許羊毛"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Archfey",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Great Old One",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你創造出一個深植在射程內你所能看見的一個生物心中的幻象。目標必須進行一次智力豁免。若豁免失敗，你在法術持續期間創造出一個幻象物體、生物、或其他可視現象，這個幻象的大小不能超過10呎邊長立方體空間，且只會被目標感知。此法術對不死生物或構裝體沒有任何效果。",
            "這個幻象包括了聲音、溫度、和其他感官刺激，同樣只有該生物能察覺。",
            "目標可以使用它的動作以一次對抗你法術豁免DC的智力({@skill 調查})檢定去細查這個幻象。若檢定成功，目標將理解到這個幻象是虛假的，且此法術結束。",
            "當一個生物被此法術影響，目標將視幻象為真實存在的。目標會合理化任何與幻象互動所產生的不合理結果。舉例來說，一個嘗試走過橫跨峽谷的幻象橋的生物將會在它踏出腳步的時候墜落。若目標從這次墜落中倖存，它仍會相信那座橋是存在的，並會為它的墜落想出一些其他解釋\u2014也許它被推了一把、它失足滑落、或也許是一陣強風將它吹了下來。",
            "一個受影響的目標對幻象的真實性是如此的深信不疑，甚至會讓它從幻象中受到傷害。一個被創造成生物的幻象可以攻擊目標。同樣的，一個被創造成火焰、一池酸液、或岩漿的幻象也可以燒灼目標。在你的每個回合，若目標距離幻象5呎以內，且只要幻象呈現為可以合理造成傷害（例如藉由攻擊）的生物或危險，則幻象將可以對目標造成{@dice 1d6}精神傷害。目標會認為它受到與幻象相符的傷害類型。"
        ],
        "page": 264,
        "damageInflict": [
            "psychic"
        ],
        "savingThrow": [
            "intelligence"
        ],
        "opposedCheck": [
            "intelligence"
        ]
    },
    {
        "name": "魅影殺手",
        "ENG_name": "Phantasmal Killer",
        "level": 4,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade (UA)",
                        "source": "UAWarlockAndWizard"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你挖掘出射程內你所能看見的一個生物的惡夢，並創造出一個只能被該生物看見的幻象，表現出它心底最深的恐懼。目標必須進行一次睿知豁免。若豁免失敗，則目標在法術持續期間變得{@condition 恐懼}。在此法術結束前，每次目標的回合結束時，目標必須成功通過一次睿知豁免，否則受到{@dice 4d10}精神傷害。若豁免成功，則此法術結束。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用5環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 4d10|4-9|1d10}。"
                ]
            }
        ],
        "page": 265,
        "damageInflict": [
            "psychic"
        ],
        "savingThrow": [
            "wisdom"
        ],
        "conditionInflict": [
            "frightened"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "魅影駒",
        "ENG_name": "Phantom Steed",
        "level": 3,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "一個大型，仿真似馬的生物出現在射程內一處你所選擇的未被佔據空間。你決定該生物的樣貌，且它將裝備著鞍座、馬嚼、和韁繩。任何由此法術創造的裝備都將在被帶離魅影駒超過10呎後化作一陣煙霧消失。",
            "在法術持續期間，你或一個你所選擇的生物可以騎乘這匹魅影駒。該生物使用{@creature 騎用馬}的數據資料，但它具有100呎的移動速度，且可以在一小時內旅行10哩。當此法術結束時，這匹魅影駒將緩緩消散，給騎乘者1分鐘的時間下馬。此法術將在你使用一個動作解除它或這匹魅影駒受到任何傷害時結束。"
        ],
        "page": 265
    },
    {
        "name": "異界盟友",
        "ENG_name": "Planar Ally",
        "level": 6,
        "school": "C",
        "time": [
            {
                "number": 10,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你懇求一個異界存在的幫助。該存在必須是你所知道的：一位神祗、一位原初之祖、一位惡魔親王、或一些其他宇宙力量的存在。這個存在將派遣一個忠於它的{@filter 天界生物|bestiary|type=celestial|miscellaneous=!swarm}、{@filter 元素|bestiary|type=elemental|miscellaneous=!swarm}、或{@filter 邪魔|bestiary|type=fiend|miscellaneous=!swarm}前來協助你，使該生物出現在射程內的一處未被佔據空間。若你知曉一個特定生物的名字，則你可以在施放此法術時說出它的名字以請求派遣該生物出現協助，但你仍可能會得到一個不同的生物（由DM決定）。",
            "當該生物出現，它不會被強迫做出任何行為。你可以提供報酬交換以請求該生物執行一項服務，但它沒有任何義務這麼做。這些請求的任務事項範圍從簡單（帶我們飛越峽谷，或在一場戰鬥中幫助我們）到復雜（暗中監視我們的敵人，或在我們突入地城時保護我們）。你必須要能與該生物交流，才能與它商議服務的代價。",
            "報酬可以是各式各樣的形式。一個天界生物可能會要求你捐獻一筆可觀的金錢或魔法物品給一座關聯的寺廟，而一個邪魔則可能會要求一項活祭或一份財寶。某些生物可能會要求你完成一項任務以換取它們的服務。",
            "根據經驗，一個能夠按分鐘計算的任務需要價值每分鐘100金幣的報酬。一個可以按小時計算的任務需要每小時1,000金幣的報酬。一個可以按天計算的任務（至多10天）則需要每天10,000金幣的報酬。DM可以根據你施放此法術時的情況調整這些報酬的多寡。若該任務符合該生物的道德觀，則所需報酬可能會被減半或甚至被放棄。沒有風險的任務通常只需要建議報酬的一半，而特別危險的任務可能會需要支付更多的酬勞。這些生物極少會接受看上去像自殺的任務。",
            "在該生物完成任務後，或超過了服務所商議的持續時間，則該生物將回到它的原生位面。若符合任務且可能達成的話，則它將在此之前回到你身邊並回報結果。若你不能同意該生物服務所需的報酬，則該生物將立刻返回它的原生位面。",
            "一個被招募加入你隊伍的生物將被視作隊伍的一名成員，且會正常分享隊伍所獲得的經驗值。"
        ],
        "isSummon": true,
        "page": 265
    },
    {
        "name": "異界誓縛",
        "ENG_name": "Planar Binding",
        "level": 5,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "hour"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一個價值至少1,000金幣的珠寶，在施法時消耗",
                "cost": 1000,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 24
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Arcana",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Monster Slayer (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Monster Slayer",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Monster Slayer (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Monster Slayer",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "透過此法術，你嘗試誓縛一個{@filter 天界生物|bestiary|type=celestial|miscellaneous=!swarm}、一個{@filter 元素|bestiary|type=elemental|miscellaneous=!swarm}、一個{@filter 精類|bestiary|type=fey|miscellaneous=!swarm}、或一個{@filter 邪魔|bestiary|type=fiend|miscellaneous=!swarm}以為你服務。該生物必須在此法術的整個施法過程處於射程內。（通常該生物會先被召喚至一個反向的{@spell 防護法陣}內，好讓它在此法術的施放過程中保持被困。）在此法術施放完成時，目標必須進行一次魅力豁免。若豁免失敗，它將在法術持續期間被誓縛以服侍你。若該生物是被另一個法術召喚或創造，則該法術的持續時間將被延長以符合此法術的持續時間。",
            "一個被誓縛的生物必須盡它所能的遵循你的命令。你可能會命令該生物陪伴你冒險、守衛一個場所、或傳送一段訊息。該生物會按照字面解釋服從你的命令，但若該生物對你有敵意，則它會盡力曲解你的字面意思以達成它自己的目標。若該生物在此法術結束前完成了你的命令，只要你和它處於相同的存在位面，則它將回到你身邊以回報這個事實。若你處於不同的存在位面，則它將返回你誓縛它的場所，並留在該處直到此法術結束。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用更高的法術位施放此法術時，此法術的持續時間將在使用6環法術位時增加至10天，7環法術位時增加至30天，8環法術位時增加至180天，且9環法術位時增加至1年又1天。"
                ]
            }
        ],
        "page": 265,
        "savingThrow": [
            "charisma"
        ],
        "isSummon": true,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "異界傳送",
        "ENG_name": "Plane Shift",
        "level": 7,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一根價值至少250金幣，分叉的金屬棒，調諧於一個特定的存在位面",
                "cost": 250
            }
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你和最多八個牽手形成一個圓圈的自願生物被傳送到一個不同的存在位面。你可以概略地指定一個目的地，像是位於火元素位面的黃銅城、或是位於九層地獄第二層的迪斯帕特宮殿。且你們出現在目的地內或其附近。舉例來說，若你試圖抵達黃銅城，則根據DM的判斷，你可能會被傳送到它灰燼之門前的鋼鐵大道上，或到一處隔著火焰之海與城市相望的所在。",
            "或者，若你知曉某個位於另一個存在位面的傳送法陣的符文序列，則此法術可以帶你們傳送到該法陣。若該傳送法陣太小而無法容納所有你傳送的生物，則它們將出現在鄰近法陣最近的未被佔據空間。",
            "你可以使用此法術以放逐一個非自願生物到另一個位面。選擇一個你觸及範圍內的生物，並對它進行一次近戰法術攻擊。若命中，則該生物必須進行一次魅力豁免。若該生物在此豁免檢定中失敗，則它將被傳送到你指定的存在位面中的隨機一處。被這樣傳送的生物必須自己找到返回你當下所處存在位面的途徑。"
        ],
        "page": 266,
        "savingThrow": [
            "charisma"
        ],
        "spellAttack": [
            "M"
        ],
        "areaTags": [
            "ST",
            "MT"
        ]
    },
    {
        "name": "植物滋長",
        "ENG_name": "Plant Growth",
        "level": 3,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            },
            {
                "number": 8,
                "unit": "hour"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 150
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Nature",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Forest"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ancients",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Archfey",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術將把活力引導至一個特定區域內的植物之中。此法術有兩種可能的用法，提供即效或長期的好處。",
            "若你以一個動作施放此法術，則選擇射程內一點。以該點為中心100呎半徑範圍內的所有普通植物將變得的茂密並生長過盛。一個移經該區域的生物每移動1呎距離都必須消耗4呎的移動速度。",
            "你可以從此法術區域內排除一個或更多任意大小的區域不受此法術影響。",
            "若你以超過8小時的時間施放此法術，則你使這片土地變得肥沃。以射程內一點為中心半哩半徑範圍內的所有植物都會變得豐饒持續整整1年。這些植物在收穫時將產出原本兩倍數量的食物。"
        ],
        "page": 266,
        "backgrounds": [
            {
                "name": "Golgari Agent",
                "source": "GGR"
            },
            {
                "name": "Selesnya Initiate",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "毒氣噴灑",
        "ENG_name": "Poison Spray",
        "level": 0,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 10
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你朝著射程內你所能看見的一個生物伸出手，並從你的手掌噴出一股有毒氣體。該生物必須成功通過一次體質豁免，否則受到{@dice 1d12}毒素傷害。",
            "此法術的傷害將在你的等級升至5級時增加至{@dice 2d12}，11級時{@dice 3d12}，17級時{@dice 4d12}。"
        ],
        "page": 266,
        "damageInflict": [
            "poison"
        ],
        "savingThrow": [
            "constitution"
        ],
        "scalingEffects": true,
        "races": [
            {
                "name": "Yuan-ti Pureblood",
                "source": "VGM"
            }
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "變形術",
        "ENG_name": "Polymorph",
        "level": 4,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一個毛蟲繭"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Trickery",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術將射程內一個你所能看見的生物轉變成一個新的型態。一個非自願的生物必須進行一次睿知豁免以避免此效果。這個效果對變形者或生命值為零的生物沒有任何效果。",
            "這個轉變會在法術持續期間維持，或直到目標的生命值歸零或死亡。這個新型態可以是任何挑戰等級等於或低於目標挑戰等級（或若目標沒有挑戰等級，則為目標的等級）的野獸。目標的遊戲數據，包括心智屬性值，都會被所選野獸的數據資料給取代。目標保留它的陣營和個性。",
            "目標取用它新型態的生命值。當它回復它原本的型態時，該生物將取回它轉變之前的生命值。若它是因為生命值歸零而回復，則任何溢出傷害都將被帶到它原本的型態，扣減它原本的生命值。只要這個溢出傷害沒有讓該生物原本的型態生命值歸零，它就不會被擊倒{@condition 昏迷}。",
            "該生物被限制只能進行它新型態天生所能進行的動作，且它無法說話、施放法術、或採取任何其他需要雙手或語言的動作。",
            "目標的裝備將被融入新形態之中。目標無法啟動、使用、揮舞、或透過其他方式來從它的裝備獲得好處。"
        ],
        "page": 266,
        "savingThrow": [
            "wisdom"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Simic Scientist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "律令治癒",
        "ENG_name": "Power Word Heal",
        "level": 9,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一波治癒能量沖刷你所碰觸的生物。目標回復它所有的生命值。若該生物被{@condition 魅惑}、{@condition 恐懼}、{@condition 麻痺}、或{@condition 震懾}，則該狀態結束。若該生物處於{@condition 伏地}狀態，則它可以使用它的反應起身。此法術對不死生物或構裝體沒有任何效果。"
        ],
        "page": 266,
        "isHeal": true,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "律令死亡",
        "ENG_name": "Power Word Kill",
        "level": 9,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你說出一句律令真言，強迫一個射程內你所能看見的生物立即死亡。若你所選的該生物擁有100點生命值或更少，則它立刻死亡。否則此法術不會產生任何效果。"
        ],
        "page": 266,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "律令震懾",
        "ENG_name": "Power Word Stun",
        "level": 8,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你說出一句律令真言，壓倒射程內你所能看見的一個生物的心靈，使它驚愕呆愣。若目標擁有150點生命值或更少，則它將陷入{@condition 震懾}狀態。否則此法術不會產生任何效果。",
            "被{@condition 震懾}的目標必須在每次它的回合結束時進行一次體質豁免。若豁免成功，則此震懾效果結束。"
        ],
        "page": 267,
        "savingThrow": [
            "constitution"
        ],
        "conditionInflict": [
            "stunned"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "治癒祈禱",
        "ENG_name": "Prayer of Healing",
        "level": 2,
        "school": "V",
        "time": [
            {
                "number": 10,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "最多六個射程內你所選擇且你能看見的生物回復等同於{@dice 2d8}+你的施法屬性調整值的生命值。此法術對不死生物或構裝體沒有任何效果。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，治療量便會再增加{@scaledice 2d8|2-9|1d8}。"
                ]
            }
        ],
        "page": 267,
        "isHeal": true,
        "areaTags": [
            "MT"
        ]
    },
    {
        "name": "魔法技倆",
        "ENG_name": "Prestidigitation",
        "level": 0,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 10
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1,
                    "upTo": true
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Fighter",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Arcane Archer",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "這個法術是新手施法者用來練習的小小魔法把戲。你在射程內創造出下列其中一種魔法效果：",
            {
                "type": "list",
                "items": [
                    "你創造出一個即效、無害的感官效果，像是一陣火花飛濺、一陣微風、模糊的音符、或一陣怪味。",
                    "你立刻點亮或熄滅一根蠟燭、火炬、或一處小型篝火。",
                    "你立刻清潔或弄髒一個不大於1呎立方的物體。",
                    "你將一個最大1呎立方的無生命材料冷卻、溫熱、或調味長達1小時。",
                    "你讓一片顏色、一個小記號、或一個符號出現在物體或一處表面上長達1小時。",
                    "你創造出一個非魔法的小飾物或一個能放入你手中的幻影，並持續直到你的下個回合結束。"
                ]
            },
            "如果你多次施放這個法術，你可以讓最多三個非即效的效果同時生效，且你可以用一個動作解消像這樣的一個效果。"
        ],
        "page": 267,
        "races": [
            {
                "name": "Tiefling (Abyssal)",
                "source": "UAThatOldBlackMagic",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ]
    },
    {
        "name": "虹光噴射",
        "ENG_name": "Prismatic Spray",
        "level": 7,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "cone",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "八道多彩的射線光束從你的手中閃耀掠出。每道射線都有著不同顏色和不同的能量和效果。每個在60呎錐形範圍內的生物都必須進行一次敏捷豁免。為每個目標骰一顆{@dice d8}以決定哪個顏色的射線影響了它。",
            {
                "type": "entries",
                "name": "1-紅色",
                "entries": [
                    "目標若豁免失敗將{@dice 10d6}火焰傷害，豁免成功則只受到一半的傷害。"
                ]
            },
            {
                "type": "entries",
                "name": "2-橙色",
                "entries": [
                    "目標若豁免失敗將{@dice 10d6}酸蝕傷害，豁免成功則只受到一半的傷害。"
                ]
            },
            {
                "type": "entries",
                "name": "3-黃色",
                "entries": [
                    "目標若豁免失敗將{@dice 10d6}閃電傷害，豁免成功則只受到一半的傷害。"
                ]
            },
            {
                "type": "entries",
                "name": "4-綠色",
                "entries": [
                    "目標若豁免失敗將{@dice 10d6}毒素傷害，豁免成功則只受到一半的傷害。"
                ]
            },
            {
                "type": "entries",
                "name": "5-藍色",
                "entries": [
                    "目標若豁免失敗將{@dice 10d6}寒冰傷害，豁免成功則只受到一半的傷害。"
                ]
            },
            {
                "type": "entries",
                "name": "6-靛色",
                "entries": [
                    "若豁免失敗，目標將陷入{@condition 束縛}狀態。它接著必須在它的每個回合結束時進行一次體質豁免。若它成功通過三次豁免，則此法術結束。若它豁免失敗三次，則它將永久地被變成石頭並陷入{@condition 石化}狀態。這些豁免檢定的成功和失敗並不需要是連續的；記錄這兩者的次數直到目標集齊其中一邊三次。"
                ]
            },
            {
                "type": "entries",
                "name": "7-紫色",
                "entries": [
                    "若豁免失敗，目標將陷入{@condition 目盲}狀態。它接著必須在你的下個回合開始時進行一次睿知豁免。若豁免成功則結束{@condition 目盲}狀態。若它豁免失敗，則該生物將被傳送到另一個由DM所選擇的存在位面，且不再{@condition 目盲}。（通常，一個不在它原生位面的生物將被驅逐回它的原生位面，而其他生物則通常會被傳送到星界或乙太位面。)"
                ]
            },
            {
                "type": "entries",
                "name": "8-特殊",
                "entries": [
                    "目標被兩道射線擊中。再骰二次，並在骰到8時重骰。"
                ]
            }
        ],
        "page": 267,
        "damageInflict": [
            "acid",
            "cold",
            "fire",
            "lightning",
            "poison"
        ],
        "savingThrow": [
            "dexterity",
            "constitution",
            "wisdom"
        ],
        "permanentEffects": true,
        "conditionInflict": [
            "blinded",
            "petrified",
            "restrained"
        ],
        "areaTags": [
            "N"
        ]
    },
    {
        "name": "虹光法牆",
        "ENG_name": "Prismatic Wall",
        "level": 9,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道閃爍、多彩的光線平面構成一道垂直不透光的牆壁\u2014最多90呎長、30呎高、和1吋厚\u2014並在射程內以你所能看見的一點為中心出現。或者，你可以將這道牆形塑成一個以射程內你所選擇一點為中心，直徑最多30呎的球體。這道牆將在法術持續期間內於該處持續存在。若你將這道牆設置在一個會穿過被生物佔據空間的位置，則此法術失敗，且你的動作和法術位將被浪費。",
            "這道牆散發出100呎範圍的明亮光照以及再延伸100呎的微光光照。你和你在施放此法術時所指定的生物可以穿過並待在牆壁附近而不被其傷害。若其他可以看見這道牆壁的生物移動到距離它20呎內的位置，或在該處開始它的回合，則該生物必須成功通過一次體質豁免，否則陷入{@condition 目盲}狀態長達1分鐘。",
            "這道牆是由七層彩光構成，每層都有著不同的顏色。當一個生物嘗試進入或穿過這道牆，它將一次一層的穿過所有光層。它每穿過一層光層，該生物就必須進行一次敏捷豁免，否則受到該光層下述的特性給影響。",
            "這道牆可以被摧毀，同樣按照紅到紫的順序一次一層處理。一旦一層光層被摧毀，它將在此法術的持續期間中維持被摧毀的狀態。{@spell 反魔法結界}對虹光法牆沒有任何效果。",
            {
                "type": "entries",
                "name": "紅色",
                "entries": [
                    "生物若豁免失敗則受到{@dice 10d6}火焰傷害，豁免成功則只受到一半的傷害。當此光層存在時，非魔法遠程攻擊無法穿透這道牆。此光層可以透過對其造成至少25點寒冰傷害來摧毀。"
                ]
            },
            {
                "type": "entries",
                "name": "橙色",
                "entries": [
                    "生物若豁免失敗則受到{@dice 10d6}酸蝕傷害，豁免成功則只受到一半的傷害。當此光層存在時，魔法遠程攻擊無法穿透這道牆。此光層可以透過一陣強風來摧毀。"
                ]
            },
            {
                "type": "entries",
                "name": "黃色",
                "entries": [
                    "生物若豁免失敗則受到{@dice 10d6}閃電傷害，豁免成功則只受到一半的傷害。此光層可以透過對其造成至少60點寒冰傷害來摧毀。"
                ]
            },
            {
                "type": "entries",
                "name": "綠色",
                "entries": [
                    "生物若豁免失敗則受到{@dice 10d6}毒素傷害，豁免成功則只受到一半的傷害。{@spell 穿牆術}、或其他相同或更高環階且可以在固體表面上開啟通道的法術可以摧毀此光層。"
                ]
            },
            {
                "type": "entries",
                "name": "藍色",
                "entries": [
                    "生物若豁免失敗則受到{@dice 10d6}寒冰傷害，豁免成功則只受到一半的傷害。此光層可以透過對其造成至少25點火焰傷害來摧毀。"
                ]
            },
            {
                "type": "entries",
                "name": "靛色",
                "entries": [
                    "若豁免失敗，生物將陷入{@condition 束縛}狀態。它接著必須在它的每個回合結束時進行一次體質豁免。若它成功通過三次豁免，則此法術結束。若它豁免失敗三次，則它將永久地被變成石頭並陷入{@condition 石化}狀態。這些豁免檢定的成功和失敗並不需要是連續的；記錄這兩者的次數直到目標集齊其中一邊三次。",
                    "當此光層存在時，法術無法穿透這道牆。此光層可以透過{@spell 晝明術}法術、或其他相同或更高環階的類似法術所散發的明亮光照來摧毀。"
                ]
            },
            {
                "type": "entries",
                "name": "紫色",
                "entries": [
                    "若豁免失敗，生物將陷入{@condition 目盲}狀態。它接著必須在你的下個回合開始時進行一次睿知豁免。若豁免成功則結束{@condition 目盲}狀態。若它豁免失敗，則該生物將被傳送到另一個由DM所選擇的存在位面，且不再{@condition 目盲}。（通常，一個不在它原生位面的生物將被驅逐回它的原生位面，而其他生物則通常會被傳送到星界或乙太位面。)此光層可以透過{@spell 解除魔法}法術、或其他相同或更高環階且的結束法術和魔法效果的類似法術來摧毀。"
                ]
            }
        ],
        "page": 267,
        "damageInflict": [
            "acid",
            "cold",
            "fire",
            "force",
            "lightning",
            "poison"
        ],
        "savingThrow": [
            "constitution",
            "dexterity",
            "wisdom"
        ],
        "permanentEffects": true,
        "conditionInflict": [
            "blinded",
            "petrified",
            "restrained"
        ],
        "areaTags": [
            "W"
        ]
    },
    {
        "name": "燃火術",
        "ENG_name": "Produce Flame",
        "level": 0,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一團搖曳的火焰出現在你手中。火焰將在法術持續時間內在那存留，且不會傷害你或你的裝備。火焰會散發出10呎半徑的亮光和再延伸10呎的微光。此法術將會在你用一個動作解消或再次施放它時結束。",
            "你也可以使用這團火焰攻擊，儘管這麼做會讓此法術結束。當你施放這個法術、或在之後的回合以一個動作，你可以向一個距離你30呎內的生物投出這團火焰。進行一次遠程法術攻擊。若命中，目標受到{@dice 1d8}火焰傷害。",
            "此法術的傷害將在你的等級升至5級時增加至{@dice 2d8}，11級時{@dice 3d8}，17級時{@dice 4d8}。"
        ],
        "page": 269,
        "damageInflict": [
            "fire"
        ],
        "spellAttack": [
            "R"
        ],
        "scalingEffects": true,
        "races": [
            {
                "name": "Genasi (Fire)",
                "source": "EEPC",
                "baseName": "Genasi",
                "baseSource": "EEPC"
            }
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Gruul Anarch",
                "source": "GGR"
            },
            {
                "name": "Izzet Engineer",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "預置幻象",
        "ENG_name": "Programmed Illusion",
        "level": 6,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "少許羊毛和價值至少25金幣的翡翠塵",
                "cost": 25
            }
        },
        "duration": [
            {
                "type": "permanent",
                "ends": [
                    "dispel"
                ]
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內創造出一個物體、生物、或其他可見現象的幻象，並會在特定情況發生時顯現。這個幻象在那之前將無法被察覺。它必須不大於一個30呎邊長的立方體，且你在施放此法術時決定這個幻象的行為以及它會發出的聲音。這個被編寫的演出可以持續最多5分鐘。",
            "當你所指定的情況發生時，這個幻象將會出現並執行你所設定的行為。一旦這個幻象完成演出，它將消失並潛伏待機10分鐘。在此之後，這個幻象就可以再次被啟動。",
            "這個觸發條件可以很籠統也可以很具體，由你決定。但它必須要基於距離該區域30呎內所發生的視覺或聲音狀況。舉例來說，你可以創造一道你自己的幻象，讓它出現並警告其他嘗試開啟一扇陷阱門的人，或者你可以設定這個幻象只會在一個生物說出正確的字詞時才會被觸發。",
            "由於東西會穿過幻影，與幻影的任何物理性互動都將暴露它是幻象的事實。一個使用它的動作去檢視幻影的生物，可以透過一個成功的智力（{@skill 調查}）檢定辨識出它是幻象，其難度等同於你的法術豁免DC。如果一個生物辨識出這是幻象，該生物的視線將可以穿透該影像，且任何幻象所製造出的聲音對該生物而言都會顯得空洞虛偽。"
        ],
        "page": 269,
        "opposedCheck": [
            "intelligence"
        ]
    },
    {
        "name": "投射幻影",
        "ENG_name": "Project Image",
        "level": 7,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "miles",
                "amount": 500
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一個由價值至少5金幣的材料製成的一個你的小模型",
                "cost": 5
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "day",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你創出一個你自己的幻象複製體，在法術持續期間持續存在。這個複製體可以出現在射程內任何你曾經見過的地方，無論你與該處之間有沒有障礙物都一樣。除了沒有實體之外，這個幻象看起來和聽起來都和你一模一樣。若幻象受到任何傷害，則它將消失，且此法術結束。",
            "你可以使用你的動作以移動這個幻象最多等同於你移動速度兩倍的距離，並讓它以你選擇的方式打手勢、說話、並行動。它將完美地模仿你的舉止習慣。",
            "你可以透過它的眼睛視物並透過它的耳朵聆聽，就如同你位於它所在的位置。在你的每個回合以一個附贈動作，你可以從在它的感官和你的感官之間切換。當你使用它的感官時，你對你自己的周遭環境視作{@condition 耳聾}和{@condition 目盲}。",
            "由於東西會穿過幻影，與幻影的任何物理性互動都將暴露它是幻象的事實。一個使用它的動作去檢視幻影的生物，可以透過成功通過一次對抗你法術豁免DC的智力（{@skill 調查}）檢定以辨識出它是幻象。如果一個生物辨識出這是幻象，該生物的視線將可以穿透該影像，且任何它所製造出的聲音對該生物而言都會顯得空洞虛偽。"
        ],
        "page": 270,
        "opposedCheck": [
            "intelligence"
        ],
        "conditionInflict": [
            "blinded",
            "deafened"
        ]
    },
    {
        "name": "防護能量",
        "ENG_name": "Protection from Energy",
        "level": 3,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Desert"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ancients",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Vengeance",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Protection (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Strength (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Horizon Walker (UA)",
                        "source": "UARangerAndRogue"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Horizon Walker (UA)",
                        "source": "UARangerAndRogue"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在法術持續期間，你所觸碰的自願生物對一個你所選擇的傷害類型擁有抗性：酸蝕、寒冰、火焰、閃電、雷鳴。"
        ],
        "page": 270,
        "damageResist": [
            "acid",
            "cold",
            "fire",
            "lightning",
            "thunder"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "防護善惡",
        "ENG_name": "Protection from Evil and Good",
        "level": 1,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "聖水或鐵和銀的粉末，在施法時消耗",
                "consume": true
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Devotion",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Protection (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Horizon Walker (UA)",
                        "source": "UARangerAndRogue"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Horizon Walker",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Horizon Walker (UA)",
                        "source": "UARangerAndRogue"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Horizon Walker",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Monster Slayer (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Monster Slayer",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Monster Slayer (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Monster Slayer",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Divine Soul",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "直到法術結束前，一個你觸碰的自願生物在對抗特定類型的生物時受到保護：天界、異怪、元素、精類、邪魔、和不死生物。",
            "這項保護提供了數個好處：這些類別的生物在對目標進行的攻擊檢定具有劣勢。目標也不會被它們{@condition 魅惑}、{@condition 恐懼}、或附身。如果目標已經被這類生物{@condition 魅惑}、{@condition 恐懼}、或附身，則目標將在之後任何對抗相關效果的豁免檢定中具有優勢。"
        ],
        "page": 270,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "防護毒素",
        "ENG_name": "Protection from Poison",
        "level": 2,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Strength (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Protection (UA)",
                        "source": "UAClericDivineDomains"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個生物。如果它處於{@condition 中毒}狀態，則你中和該毒素。如果有多於一種毒素正影響著目標，則你中和一種你知道的毒素、或者你中和隨機一種毒素。",
            "在法術持續期間，目標在對抗{@condition 中毒}的豁免檢定中具有優勢，且它獲得對毒素傷害的抗性。"
        ],
        "page": 270,
        "damageResist": [
            "poison"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Golgari Agent",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "淨化飲食",
        "ENG_name": "Purify Food and Drink",
        "level": 1,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 10
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "以你在射程內所選一點為中心，5呎半徑球體內的所有非魔法的食物和飲料被淨化，且變得沒有毒素和疾病。"
        ],
        "page": 270,
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "喚醒死者",
        "ENG_name": "Raise Dead",
        "level": 5,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "hour"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一顆價值至少500金幣的鑽石，在施法時消耗",
                "cost": 500,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Life",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰的一個已死的生物，只要它死亡時間不超過10天，你就可以讓它復活。如果該生物的靈魂願意且能自由地回到身體上，則該生物將以1點生命值的狀態復活。",
            "此法術也會中和並治療任何在該生物死亡時影響著它的毒素和疾病。然而，此法術並不能移除魔法疾病、詛咒、或其他類似效果；若這些效果沒有在施放此法術前被移除，則它們將在該生物復活之後繼續發揮效果。此法術無法復活不死生物。",
            "此法術會癒合所有肉體傷口，但並不會恢復失去的身體部位。若該生物失去任何維生所必須的身體部位或器官\u2014比如說它的頭\u2014則此法術將自動失敗。",
            "從死裡復活的過程是相當艱苦的。目標將在它所有的攻擊檢定、豁免檢定、和屬性檢定上承受\u22124的減值。每當目標完成一次長休，這個減值便會減輕1點，直到它完全消失。"
        ],
        "page": 270,
        "isHeal": true
    },
    {
        "name": "拉瑞心靈聯結",
        "ENG_name": "Rary's Telepathic Bond",
        "level": 5,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "來自兩種不同生物的蛋殼碎片"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "你在射程內最多八個你所選擇的自願生物之間創造一道心靈連結，在法術持續期間使每個生物在精神上與所有其他生物聯繫在一起。智力為2或更低的生物不會受到此法術的影響。",
            "直到此法術結束前，無論目標之間有沒有共通的語言，它們都可以透過這道連結用心靈溝通。這個溝通方式可以跨越任何距離，但不能跨越不同的存在位面。"
        ],
        "page": 270,
        "areaTags": [
            "MT"
        ]
    },
    {
        "name": "衰弱射線",
        "ENG_name": "Ray of Enfeeblement",
        "level": 2,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Death",
                        "source": "DMG"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ambition (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道帶著衰弱能量的漆黑光束從你的手指躍向射程內的一個生物。對目標進行一次遠程法術攻擊。若命中，直到法術結束前，目標進行使用力量的武器攻擊時將只造成一半的傷害。",
            "在目標的每個回合結束時，它可以對此法術進行一次體質豁免。若豁免成功，則此法術結束。"
        ],
        "page": 271,
        "savingThrow": [
            "constitution"
        ],
        "spellAttack": [
            "R"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Golgari Agent",
                "source": "GGR"
            },
            {
                "name": "Orzhov Representative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "冷凍射線",
        "ENG_name": "Ray of Frost",
        "level": 0,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Giant Soul (UA)",
                        "source": "UAGiantSoulSorcerer",
                        "subSubclass": "Frost"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道冰冷的藍白色光束向著射程內的一個生物疾馳而去。對目標進行一次遠程法術攻擊。若命中，目標將受到{@dice 1d8}寒冰傷害，且直到你的下個回合開始前，它的移動速度減少10呎。",
            "此法術的傷害將在你的等級升至5級時增加至{@dice 2d8}，11級時{@dice 3d8}，17級時{@dice 4d8}。"
        ],
        "page": 271,
        "damageInflict": [
            "cold"
        ],
        "spellAttack": [
            "R"
        ],
        "scalingEffects": true,
        "races": [
            {
                "name": "Tiefling (Levistus)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Levistus)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "致病射線",
        "ENG_name": "Ray of Sickness",
        "level": 1,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Death",
                        "source": "DMG"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Undying",
                        "source": "SCAG"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道令人作嘔的綠色能量衝向射程內的一個生物。對目標進行一次遠程法術攻擊。若命中，目標將受到{@dice 2d8}毒素傷害，且必須進行一次體質豁免。若豁免失敗，則它直到你的下個回合結束前將陷入{@condition 中毒}狀態。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 2d8|1-9|1d8}。"
                ]
            }
        ],
        "page": 271,
        "damageInflict": [
            "poison"
        ],
        "savingThrow": [
            "constitution"
        ],
        "spellAttack": [
            "R"
        ],
        "races": [
            {
                "name": "Tiefling (Baalzebul)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Baalzebul)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "conditionInflict": [
            "poisoned"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Golgari Agent",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "再生術",
        "ENG_name": "Regenerate",
        "level": 7,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一個轉經輪和聖水"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個生物並促進它的自然回復能力。目標回復{@dice 4d8 + 15}點生命值。在法術持續期間，目標將在它的每個回合開始時回復1點生命值（每分鐘回復10點生命值）。",
            "若目標有任何殘缺的身體部位（手指、腿、尾巴、諸如此類），則這些身體部位將在2分鐘後回復。若你持有這些被斷開的肢體並將之按在斷口上，則此法術將瞬間使該肢體與斷口接合。"
        ],
        "page": 271,
        "isHeal": true,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "轉生術",
        "ENG_name": "Reincarnate",
        "level": 5,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "hour"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "價值至少1,000金幣的稀有塗油和軟膏，在施法時消耗",
                "cost": 1000,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個死去的類人生物或它一部份的遺體。只要該生物死亡不超過10天，此法術就會為它形塑出一具新的成年軀體，並呼喚它的靈魂進入這具軀體。若目標生物的靈魂無法或不願意這麼做，則此法術失敗。",
            "這個魔法會為該生物製造出一具新的身體，並很可能會導致該生物的種族發生改變。DM將骰{@dice d100}並查閱下列表格以決定當該生物會以什麼型態復活，或者DM從中選擇一個型態。",
            {
                "type": "table",
                "caption": "轉生種族",
                "colLabels": [
                    "{@dice d100}",
                    "種族"
                ],
                "colStyles": [
                    "col-1 text-align-center no-wrap",
                    "col-11"
                ],
                "rows": [
                    [
                        {
                            "type": "cell",
                            "roll": {
                                "min": 1,
                                "max": 4,
                                "pad": true
                            }
                        },
                        "{@race 龍裔}"
                    ],
                    [
                        {
                            "type": "cell",
                            "roll": {
                                "min": 5,
                                "max": 13,
                                "pad": true
                            }
                        },
                        "{@race 矮人(丘陵)|phb|丘陵矮人}"
                    ],
                    [
                        {
                            "type": "cell",
                            "roll": {
                                "min": 14,
                                "max": 21
                            }
                        },
                        "{@race 矮人(高山)|phb|高山矮人}"
                    ],
                    [
                        {
                            "type": "cell",
                            "roll": {
                                "min": 22,
                                "max": 25
                            }
                        },
                        "{@race 精靈(卓爾)|phb|黑暗精靈}"
                    ],
                    [
                        {
                            "type": "cell",
                            "roll": {
                                "min": 26,
                                "max": 34
                            }
                        },
                        "{@race 精靈(高等)|phb|高等精靈}"
                    ],
                    [
                        {
                            "type": "cell",
                            "roll": {
                                "min": 35,
                                "max": 42
                            }
                        },
                        "{@race 精靈(木)|phb|木精靈}"
                    ],
                    [
                        {
                            "type": "cell",
                            "roll": {
                                "min": 43,
                                "max": 46
                            }
                        },
                        "{@race 地侏(林)|phb|林地侏}"
                    ],
                    [
                        {
                            "type": "cell",
                            "roll": {
                                "min": 47,
                                "max": 52
                            }
                        },
                        "{@race 地侏(岩)|phb|岩地侏}"
                    ],
                    [
                        {
                            "type": "cell",
                            "roll": {
                                "min": 53,
                                "max": 56
                            }
                        },
                        "{@race 半精靈}"
                    ],
                    [
                        {
                            "type": "cell",
                            "roll": {
                                "min": 57,
                                "max": 60
                            }
                        },
                        "{@race 半獸人}"
                    ],
                    [
                        {
                            "type": "cell",
                            "roll": {
                                "min": 61,
                                "max": 68
                            }
                        },
                        "{@race 半身人(輕足)|phb|輕足半身人}"
                    ],
                    [
                        {
                            "type": "cell",
                            "roll": {
                                "min": 69,
                                "max": 76
                            }
                        },
                        "{@race 半身人(強魄)|phb|強魄半身人}"
                    ],
                    [
                        {
                            "type": "cell",
                            "roll": {
                                "min": 77,
                                "max": 96
                            }
                        },
                        "{@race 人類}"
                    ],
                    [
                        {
                            "type": "cell",
                            "roll": {
                                "min": 97,
                                "max": 0,
                                "pad": true
                            }
                        },
                        "{@race 提夫林}"
                    ]
                ]
            },
            "轉生後的生物保留它前生的記憶和經驗。它也保留它原本型態擁有的所有能力，除了它把原本的種族換成新的種族，並根據其種族改變它的種族特性。"
        ],
        "page": 271
    },
    {
        "name": "移除詛咒",
        "ENG_name": "Remove Curse",
        "level": 3,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "隨著你的觸碰，所有正影響著一個生物或物體的詛咒都將結束。如果該物體是被詛咒的魔法物品，它的詛咒仍會存在，但此法術會破壞它擁有者和該物體的同調，並因此可以將它脫下或丟棄。"
        ],
        "page": 271,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "提升抗力",
        "ENG_name": "Resistance",
        "level": 0,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一件小型斗篷"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Giant Soul (UA)",
                        "source": "UAGiantSoulSorcerer",
                        "subSubclass": "Stone"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個自願生物。在法術結束前一次，目標可以擲一顆{@dice d4}，並將骰出的數字加到它所選的一次豁免檢定中。它可以在進行該豁免檢定之前或之後擲這顆骰。然後法術將會結束。"
        ],
        "page": 272,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "復活術",
        "ENG_name": "Resurrection",
        "level": 7,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "hour"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一顆價值至少1,000金幣的鑽石，在施法時消耗",
                "cost": 1000,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰的一個死亡不超過一個世紀、並非因年老而死去、且非不死生物的生物。如果它的靈魂願意且不受拘束，則目標將以生命值全滿的狀態復活。",
            "此法術會中和並治療任何在該生物死亡時影響著它的毒素和疾病。然而，此法術並不能移除魔法疾病、詛咒、或其他類似效果；若這些效果沒有在施放此法術前被移除，則它們將在該生物復活之後繼續發揮效果。",
            "此法術會癒合所有肉體傷口，並會恢復任何失去的身體部位。",
            "從死裡復活的過程是相當艱苦的。目標將在它所有的攻擊檢定、豁免檢定、和屬性檢定上承受\u22124的減值。每當目標完成一次長休，這個減值便會減輕1點，直到它完全消失。",
            "施放此法術以復活一個死亡超過一年或更久的生物會對你造成極大的負擔。直到你完成一次長休前，你無法再次施放此法術，且你在所有的攻擊檢定、豁免檢定、和屬性檢定上具有劣勢。"
        ],
        "page": 272,
        "isHeal": true
    },
    {
        "name": "重力反轉",
        "ENG_name": "Reverse Gravity",
        "level": 7,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 100
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一顆天然磁石和一些鐵屑"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術將使以射程內一點為中心，50呎半徑，100呎高的圓柱體區域內的重力反轉。當你施放此法術時，區域內所有沒有被固定在地面上的生物和物體都會向上墜落，直到抵達該區域的頂端為止。一個生物可以進行一次敏捷豁免以抓住一件被固定的物體，從而避免向上墜落。",
            "若某些固體物體（像是天花板）在墜落的過程中被碰撞，則墜落中的物體和生物將受到如同正常向下墜落時的衝擊。若一個物體或生物在沒有撞上任何東西的情況下抵達區域的頂端，則它將在法術持續期間內留在該處，輕微擺動。",
            "在法術持續時間結束時，受影響的物體和生物將重新向下墜落。"
        ],
        "page": 272,
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "Y"
        ]
    },
    {
        "name": "回生術",
        "ENG_name": "Revivify",
        "level": 3,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "價值300金幣的鑽石，在施法時消耗",
                "cost": 300,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Life",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個在過去一分鐘內死去的生物。該生物將以1點生命值的狀態復活。此法術無法復活因年老而死去的生物，也無法恢復它任何失去的身體部位。"
        ],
        "page": 272,
        "isHeal": true,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "通天繩",
        "ENG_name": "Rope Trick",
        "level": 2,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "玉米粉和一卷扭曲成環形的羊皮紙"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Deep Stalker (UA)",
                        "source": "UALightDarkUnderdark"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Gloom Stalker",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Deep Stalker (UA)",
                        "source": "UATheRangerRevised"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Gloom Stalker",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個最多60呎長的繩子。繩子的一端將抬升至空中，直到整條繩子與地面垂直懸掛。在繩子的上端，一道隱形的入口將通往一個異位面空間，持續直到法術結束。",
            "這個異位面空間可以在攀爬到繩子的頂端時進入。這個空間可以容納最多八個中型或小型生物。這條繩子可以被拉入該空間，使繩子從空間外看起來就像是憑空消失一樣。",
            "攻擊和法術無法穿出或穿入異位面的入口，但在異位面內的人可以透過入口看到外面的景象，就彷彿以繩子為中心的位置有著一扇3呎x5呎大小的窗戶一樣。",
            "當此法術結束時，任何在異位面內的東西都會掉出來。"
        ],
        "page": 272,
        "backgrounds": [
            {
                "name": "Izzet Engineer",
                "source": "GGR"
            },
            {
                "name": "Izzet Engineer",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "聖焰",
        "ENG_name": "Sacred Flame",
        "level": 0,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Undying Light (UA)",
                        "source": "UALightDarkUnderdark"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "火焰般的光輝向射程內你所能看見的一個生物降下。目標必須成功通過一次敏捷豁免，否則受到{@dice 1d8}光耀傷害。目標在此豁免檢定中並不會獲得掩護所帶來的好處。",
            "此法術的傷害將在你的等級升至5級時增加至{@dice 2d8}，11級時{@dice 3d8}，17級時{@dice 4d8}。"
        ],
        "page": 272,
        "damageInflict": [
            "radiant"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "scalingEffects": true,
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Boros Legionnaire",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "聖域術",
        "ENG_name": "Sanctuary",
        "level": 1,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一面小銀鏡"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Devotion",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Raven Queen (UA)",
                        "source": "UAWarlockAndWizard"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你守護射程內一個生物不受攻擊。直到法術結束前，以被守護生物為目標進行攻擊或施放危害法術的任何生物都必須先進行一次睿知豁免。若豁免失敗，該生物必須選擇另一個目標，否則該次攻擊或法術失敗。此法術並不會從範圍效果中保護被守護的生物，像是{@spell 火球術}。",
            "若被守護的生物進行一次攻擊、施放一個會影響敵人的法術、或對另一個生物造成傷害，則此法術結束。"
        ],
        "page": 272,
        "savingThrow": [
            "wisdom"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "灼熱射線",
        "ENG_name": "Scorching Ray",
        "level": 2,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Light",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Fiend",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你創造三條火焰射線，並將它們射向射程內的目標。你可以把它們射向同一個或複數個目標。",
            "為每一道射線進行各自的遠程法術攻擊檢定。若命中，目標將受到{@dice 2d6}火焰傷害。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，你就能再額外創造一條射線。"
                ]
            }
        ],
        "page": 273,
        "damageInflict": [
            "fire"
        ],
        "spellAttack": [
            "R"
        ],
        "areaTags": [
            "ST",
            "MT"
        ],
        "backgrounds": [
            {
                "name": "Boros Legionnaire",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "探知",
        "ENG_name": "Scrying",
        "level": 5,
        "school": "D",
        "time": [
            {
                "number": 10,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一個價值至少1,000金幣的法器，像是水晶球、銀製鏡子、或一個盛裝聖水的聖水盆",
                "cost": 1000
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Light",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Coast"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Swamp"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Vengeance",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你可以看見和聽見一個你所選擇的，與你處於相同存在位面的特定生物。目標必須進行一次睿知豁免，且此豁免檢定會根據你對目標的瞭解程度、以及你與目標之間的物理聯繫程度而受到調整值影響。若目標知道你正在施放此法術且若它願意被你觀察，則它可以自願在此豁免檢定中失敗。",
            {
                "type": "table",
                "caption": "對目標的瞭解程度",
                "colLabels": [
                    "瞭解程度",
                    "豁免調整值"
                ],
                "colStyles": [
                    "col-11",
                    "col-1 text-align-center"
                ],
                "rows": [
                    [
                        "間接理解（你曾聽說過目標）",
                        "+5"
                    ],
                    [
                        "親身接觸（你曾見過目標）",
                        "+0"
                    ],
                    [
                        "熟悉（你相當瞭解目標）",
                        "-5"
                    ]
                ]
            },
            {
                "type": "table",
                "caption": "與目標的聯繫程度",
                "colLabels": [
                    "聯繫程度",
                    "豁免調整值"
                ],
                "colStyles": [
                    "col-11",
                    "col-1 text-align-center"
                ],
                "rows": [
                    [
                        "肖像或圖像",
                        "-2"
                    ],
                    [
                        "所有物或衣服",
                        "-4"
                    ],
                    [
                        "身體部位、一縷頭髮、一塊指甲、諸如此類",
                        "-10"
                    ]
                ]
            },
            "若豁免成功，則目標不會受到影響，且你在24小時內無法再對它使用此法術。",
            "若豁免失敗，此法術將在距離目標10呎內的位置創造出一個隱形的感應器。你可以透過該感應器看見和聽見，就如同你位於該空間一樣。該感應器會隨著目標移動，在法術持續期間維持在距離它10呎內的位置。一個可以看見{@condition 隱形}物體的生物可以看見感應器呈現一個約為你拳頭大小，發著光的無形球體。",
            "你也可以不以生物為目標，而是選擇一個你過去曾經見過的地方做為此法術的目標。當你這麼做時，感應器將出現在該地方且不會移動。"
        ],
        "page": 273,
        "savingThrow": [
            "wisdom"
        ]
    },
    {
        "name": "熾炎斬",
        "ENG_name": "Searing Smite",
        "level": 1,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Stone",
                        "source": "UASorcerer"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Zeal (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在法術持續期間，下一次你以近戰武器攻擊命中一個生物時，你的武器閃耀著強烈白熱光芒，該攻擊對目標造成額外{@dice 1d6}火焰傷害，並使目標起火燃燒。直到法術結束前，在它的每個回合開始時，目標都必須進行一次體質豁免。若豁免失敗，它將受到{@dice 1d6}火焰傷害。若豁免成功，則此法術結束。如果該目標或一個距離它5呎以內的生物使用一個動作去撲滅火焰、或有其他效果熄滅了火焰（像是目標被水給淹沒），則此法術結束。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，攻擊所造成的初始傷害便會再增加{@scaledice 1d6|1-9|1d6}。"
                ]
            }
        ],
        "page": 274,
        "damageInflict": [
            "fire"
        ],
        "savingThrow": [
            "constitution"
        ],
        "races": [
            {
                "name": "Tiefling (Zariel)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Zariel)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ]
    },
    {
        "name": "識破隱形",
        "ENG_name": "See Invisibility",
        "level": 2,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一撮滑石粉和一小把銀粉"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在法術持續期間，你可以看見{@condition 隱形}生物和物體，就如同它們是正常可見的。且你可以看見乙太位面。乙太位面的生物和物體在你眼中將呈現幽靈般的半透明。"
        ],
        "page": 274
    },
    {
        "name": "偽裝術",
        "ENG_name": "Seeming",
        "level": 5,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 8
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Archfey",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Deep Stalker (UA)",
                        "source": "UALightDarkUnderdark"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Gloom Stalker",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Deep Stalker (UA)",
                        "source": "UATheRangerRevised"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Gloom Stalker",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術讓你能夠改變射程內任意個你所能看見的生物的外觀。你賦予每個你所選的生物一個新的、虛假的外貌。一個非自願生物可以進行一次魅力豁免，若它豁免成功，則它不受此法術的影響。",
            "此法術可以改變身體外觀，也可以偽裝衣服、護甲、武器、和裝備。你可以讓每一個生物看起來比原本更矮或更高1呎，或表現得更瘦、更胖、或在兩者之間。你無法改變目標的身體型態，因此你必須採用有著相同基本肢體架構的外型。除此之外，該幻術的表現程度由你決定。此法術在法術持續期間內持續存在，除非你使用你的動作以提前解消它。",
            "此法術帶來的改變經不起物理的檢驗。舉例來說，若你使用此法術為自己添了一頂帽子，其他物體會穿過這頂帽子，且任何碰觸帽子的人會什麼都摸不到或直接摸到你的頭和頭髮。若你使用此法術讓自己看起來比原本更瘦，則某人向著你伸出的手將在途中撞到你，儘管它看起來像是還在半空中",
            "一個生物可以使用它的動作去檢驗目標的外表，並進行一次對抗你法術豁免DC的智力（{@skill 調查}）檢定。若檢定成功，則它將注意到目標的外觀經過偽裝。"
        ],
        "page": 274,
        "savingThrow": [
            "charisma"
        ],
        "opposedCheck": [
            "intelligence"
        ],
        "areaTags": [
            "MT"
        ]
    },
    {
        "name": "短訊術",
        "ENG_name": "Sending",
        "level": 3,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "unlimited"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一小段優質銅線"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "round",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Great Old One",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Seeker (UA)",
                        "source": "UATheFaithful"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你對一個你所熟悉的生物送出一段二十五個字以內的簡短訊息。該生物會在心中聽到這段訊息，並可以立刻以相同的方式回覆。若它認識你則會認出發訊者是你。此法術可以讓智力值至少為1的生物理解你訊息的意思。",
            "你可以跨越任何距離傳送這段訊息、甚至傳送至位於另一個位面的存在。然而若目標與你處於不同的位面，則這段訊息會有5%的機率無法傳達。"
        ],
        "page": 274
    },
    {
        "name": "隔離術",
        "ENG_name": "Sequester",
        "level": 7,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "鑽石、綠寶石、紅寶石、藍寶石塵混合而成，價值至少5,000金幣的粉末，在施法時消耗",
                "cost": 5000,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "permanent",
                "ends": [
                    "dispel"
                ]
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "透過此法術，一個自願生物或一個物體可以被藏匿起來，且在法術持續期間內不會被偵測到。當你施放此法術並觸碰一個目標，它將變為{@condition 隱形}，且無法成為{@filter 預言系法術|spells|school=D}的目標，或被預言系法術創造出的探知感應器給察覺到。",
            "若該目標為一個生物，則它將陷入一種假死狀態。它身上的時間將停止流動，且它不會衰老。",
            "你可以設置一個條件以讓此法術提前結束。這個條件可以由你任意決定，但它必須在距離目標1哩內發生或可被看見的事件。例如「經過1,000年後」或「當泰拉斯奎巨獸甦醒時」。此法術也會在目標受到任何傷害時結束。"
        ],
        "page": 274,
        "conditionInflict": [
            "invisible"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "形體變化",
        "ENG_name": "Shapechange",
        "level": 9,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一個價值至少1,500金幣的玉質飾環，你必須在施放此法術前戴在頭上",
                "cost": 1500
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在法術持續期間內變成一個不同生物的型態。這個新型態可以是任何挑戰等級等於或低於你等級的生物。該生物不能是構裝體或不死生物，且你必須曾經看過這類生物至少一次。你轉變成該生物的一個尋常個體，不具備任何職業等級或施法特質。",
            "你的遊戲數據將被所選生物的數據資料給取代，但你保留你的陣營和智力、睿知、和魅力值。你也保留你的所有技能和豁免熟練，並額外獲得該生物所具有的熟練。若該生物具有與你相同的熟練項，且它數據資料中列出的加值比你的還要高，則你使用該生物的加值取代你自己的。你不能使用新型態的任何傳奇動作或巢穴動作。",
            "你取用新型態的生命值和生命骰。當你回復你原本的型態時，你將取回你轉變之前的生命值。若你是因為生命值歸零而回復原本型態，則任何溢出傷害都將被帶到你原本的型態，扣減你原本的生命值。只要這個溢出傷害沒有讓你原本型態的生命值歸零，你就不會被擊倒{@condition 昏迷}。",
            "你保有任何來自你職業、種族、或其他來源的好處並得以使用它們，只要你的新形態在物理上能夠這麼做。你不能使用任何你擁有的特殊感官（例如黑暗視覺），除非你新型態也具有該感官。只有在該生物可以正常說話的情況下，你才能夠說話。",
            "當你轉變時，你選擇你的裝備是會掉在地上、融入新型態、或是被新型態穿戴。被穿戴的裝備將正常生效。DM將根據該生物的體型和形狀以決定新型態是否可以正常穿戴你的每個裝備。你的裝備並不會改變形狀或尺寸以符合你的新形態，因此任何新型態無法穿戴的裝備將會掉在地上或融入新型態。融入新型態的裝備不會產生任何效果。",
            "在此法術的持續期間，你可以使用你的動作以變成一個不同的型態，其限制與規則與第一次變形相同，除了一個例外：若你新型態的生命值具有比你當下型態更多的生命值，則你的生命值將維持其當下的數值。"
        ],
        "page": 274
    },
    {
        "name": "粉碎音波",
        "ENG_name": "Shatter",
        "level": 2,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一片雲母"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Tempest",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Zeal (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Destruction (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一陣令人痛苦的劇烈噪音突然地從射程內你所選擇的一點迸發巨響。處於以該點為圓心10呎半徑球體內的每個生物都必須進行一次體質豁免。豁免失敗的生物將受到{@dice 3d8}雷鳴傷害，豁免成功則只受到一半的傷害。一個由無機質材料，像是石頭、水晶、或金屬構成的生物在該豁免檢定上具有劣勢。",
            "一個未被穿戴或攜帶的非魔法物體若處於法術範圍內，也會受到該傷害。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 3d8|2-9|1d8}。"
                ]
            }
        ],
        "page": 275,
        "damageInflict": [
            "thunder"
        ],
        "savingThrow": [
            "constitution"
        ],
        "areaTags": [
            "S"
        ],
        "backgrounds": [
            {
                "name": "Gruul Anarch",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "護盾術",
        "ENG_name": "Shield",
        "level": 1,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "reaction",
                "condition": "在你被一次攻擊命中或成為{@spell 魔法飛彈}法術的目標時進行"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "round",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade (UA)",
                        "source": "UAWarlockAndWizard"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道不可見的魔法力場屏障出現並保護你。直到你的下個回合開始之前，包括觸發此法術的攻擊在內，你的AC獲得+5加值，且你不會受到來自魔法飛彈的傷害。"
        ],
        "page": 275,
        "races": [
            {
                "name": "Gith (Githzerai)",
                "source": "UAEladrinAndGith",
                "baseName": "Gith",
                "baseSource": "UAEladrinAndGith"
            },
            {
                "name": "Gith (Githzerai)",
                "source": "MTF",
                "baseName": "Gith",
                "baseSource": "MTF"
            }
        ]
    },
    {
        "name": "虔誠護盾",
        "ENG_name": "Shield of Faith",
        "level": 1,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一小張寫有一些神聖文字的羊皮紙"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "War",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Strength (PSA)",
                        "source": "PSA"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道閃爍著微光的力場出現並環繞在射程內你所選擇的一個生物身邊，使它在法術持續時間內的AC獲得+2加值。"
        ],
        "page": 275,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "橡棍術",
        "ENG_name": "Shillelagh",
        "level": 0,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "槲寄生、一片酢漿草的葉子、和一根棍棒或長棍"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Giant Soul (UA)",
                        "source": "UAGiantSoulSorcerer",
                        "subSubclass": "Hill"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你正持握的{@item 棍棒|phb}或{@item 長棍|phb}的木頭被自然之力充盈。在法術持續期間，當你使用該武器進行近戰攻擊，你可以使用你的施法屬性代替力量來進行攻擊檢定和傷害骰，且該武器的傷害骰變為{@dice d8}。如果該武器原本不是魔法武器，則它也將變成魔法武器。此法術將在你在一次施放它或丟下該武器時結束﹐"
        ],
        "page": 275
    },
    {
        "name": "電爪",
        "ENG_name": "Shocking Grasp",
        "level": 0,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Giant Soul (UA)",
                        "source": "UAGiantSoulSorcerer",
                        "subSubclass": "Storm"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "閃電從你的手中躍出以電擊你嘗試碰觸的一個生物。對目標進行一次近戰法術攻擊。若目標正穿戴著金屬製成的護甲，則你在該攻擊檢定中具有優勢。若命中，目標將受到{@dice 1d8}閃電傷害，且它直到它的下個回合開始前都不能採取反應。",
            "此法術的傷害將在你的等級升至5級時增加至{@dice 2d8}，11級時{@dice 3d8}，17級時{@dice 4d8}。"
        ],
        "page": 275,
        "damageInflict": [
            "lightning"
        ],
        "spellAttack": [
            "M"
        ],
        "scalingEffects": true,
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Izzet Engineer",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "沉默術",
        "ENG_name": "Silence",
        "level": 2,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Desert"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Undying",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Raven Queen (UA)",
                        "source": "UAWarlockAndWizard"
                    }
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "在法術持續期間，任何聲音都無法在射程內你所選擇一點為中心的20呎半徑球體內被製造或傳入其中。任何完全處於球體範圍內的生物或物體將免疫於雷鳴傷害，且當完全處於其中，生物將視作{@condition 耳聾}。在裡面不可能施放需要聲音構材的法術。"
        ],
        "page": 275,
        "conditionInflict": [
            "deafened"
        ],
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "無聲幻影",
        "ENG_name": "Silent Image",
        "level": 1,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "少許羊毛"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你創造出一個物體、生物、或其他可見現象的幻影，它必須不大於一個15呎邊長的立方體。這個幻影會出現在射程內一處，且持續到法術的持續時間結束。這個幻影純粹只有視覺效果；它並不包含聲音、氣味、或其他感官效果。",
            "你可以使用你的動作來使幻影移動到射程內的任意一處。隨著幻影改變它的位置，你可以修改它的外觀以讓幻影的移動顯得比較自然。舉例來說，如果你創造出一個生物的幻影並移動它，你可以修改該幻影以讓它看起來像是在走路。",
            "由於東西會穿過幻影，與幻影的任何物理性互動都將暴露它是幻象的事實。一個使用它的動作去檢視幻影的生物，可以透過一個成功的智力（{@skill 調查}）檢定辨識出它是幻象，其難度等同於你的法術豁免DC。如果一個生物辨識出這是幻象，該生物的視線將可以穿透該影像。"
        ],
        "page": 276,
        "opposedCheck": [
            "intelligence"
        ]
    },
    {
        "name": "擬像術",
        "ENG_name": "Simulacrum",
        "level": 7,
        "school": "I",
        "time": [
            {
                "number": 12,
                "unit": "hour"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "份量足以製作一個複製生物的活體尺寸複製體的雪或冰；放在冰或雪內的一些毛髮、指甲屑、或其他該生物的身體部分；以及價值1,500金幣的紅寶石塵，用以灑在複製品上，且在施法時消耗",
                "cost": 1500,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "permanent",
                "ends": [
                    "dispel"
                ]
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "選擇一個在此法術的完整施法過程中都處於射程內的野獸或類人生物，你塑造出一個它的幻象複製體。這個複製體是一個生物，部分真實，由冰或雪所構成，可以採取動作，且可以如同一個正常生物被影響。它與本尊看起來一模一樣，但只有該生物一半的生命值最大值，且在被塑造出來時沒有任何裝備。除此之外，這個幻象具有所有其複製生物的數據資料，但其生物類型為構裝體。",
            "這個擬像對你和你所指定的生物友善。它會服從任何你的口頭指令，並在戰鬥中於你的回合依據你所希望的方式移動和行動。擬像缺乏學習和變得強大的能力，因此它永遠無法提升它的等級或其他能力，也無法恢復消耗掉的法術位。",
            "若這個擬像被傷害，你可以在煉金實驗室內修理它，每使用價值100金幣的稀有藥草和材料，它就會回復一點生命值。這個擬像會持續存在直到它的生命值歸零，並在之後變回冰雪並立即融化。",
            "若你再次施放此法術，任何你使用此法術所創造，且當下正啟動中的複製體將立刻被摧毀。"
        ],
        "page": 276
    },
    {
        "name": "睡眠術",
        "ENG_name": "Sleep",
        "level": 1,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 90
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一撮細沙、玫瑰花瓣、或一隻蟋蟀"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Archfey",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術將讓生物們陷入一陣魔法性的睡眠中。骰{@dice 5d8}；其總和決定了此法術所能影響生物的總生命值。在射程內你所選一點周圍20呎內的所有生物將按其當前生命值由小到大受到影響（忽略{@condition 昏迷}的生物）。",
            "從有著最低當前生命值的生物開始，每個受到此法術影響的生物將{@condition 昏迷}直到此法術結束、睡眠者受到傷害、或有人使用它的動作把睡眠者搖醒或拍醒。在處理下一個有著最低生命值的生物之前，從擲骰總和中減去前一個生物的生命值。生物的生命值必須少於或等於剩餘總和才會受到影響。",
            "不死生物和免疫{@condition 魅惑}的生物不會受到此法術的影響。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，就可以再額外骰{@scaledice 5d8|1-9|2d8}。"
                ]
            }
        ],
        "page": 276,
        "conditionInflict": [
            "unconscious"
        ],
        "areaTags": [
            "S"
        ],
        "backgrounds": [
            {
                "name": "Dimir Operative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "雪雨暴",
        "ENG_name": "Sleet Storm",
        "level": 3,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 150
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一撮灰塵和幾滴水"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Tempest",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Arctic"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "直到此法術結束前，以射程內你所選擇的一點為中心的40呎半徑、20呎高的圓柱區域內，寒冷刺骨的凍雨和雪雹傾盆而下。這個區域被重度遮蔽，且這個區域內暴露的火焰將被澆熄。",
            "這個區域內的地面將被滑溜的冰層覆蓋，使其變成困難地形。當一個生物在此法術區域中開始它的回合、或在一個回合中第一次進入該區域，則它必須進行一次敏捷豁免。若豁免失敗，則它將摔倒{@condition 伏地}。",
            "若一個生物在此法術區域內開始它的回合，且它正專注於一個法術，則該生物必須成功通過一次對抗你法術豁免DC的體質豁免，否則失去專注。"
        ],
        "page": 276,
        "savingThrow": [
            "dexterity",
            "constitution"
        ],
        "conditionInflict": [
            "prone"
        ],
        "areaTags": [
            "Y"
        ]
    },
    {
        "name": "緩速術",
        "ENG_name": "Slow",
        "level": 3,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一滴糖蜜"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Arctic"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Protection (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order (UA)",
                        "source": "UAOrderDomain"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order",
                        "source": "GGR"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你扭曲射程內40呎邊長立方體內的最多六個生物周遭的時間。每個目標必須成功通過一次睿知豁免，否則在法術持續期間被此法術影響。",
            "一個受影響生物的移動速度減半，在敏捷豁免和AC上承受\u22122罰值，且無法採取反應。在它的回合，它只能使用一個動作或一個附贈動作，而不能在同一回合使用兩者。無論該生物有什麼能力或魔法物品，它都不能在它的回合進行超過一次的近戰或遠程攻擊。",
            "若該生物嘗試施展一個施法時間為1個動作的法術，骰{@dice d20}。若骰出來的數字為11或更高，則直到該生物的下個回合前該法術都還不會生效，且該生物必須在下個回合使用它的動作以完成該法術。若它不能這麼做，則該法術被浪費。",
            "一個受此法術影響的生物可以在它的每個回合結束時再進行一次睿知豁免。若豁免成功，則結束這個法術對目標的效果。"
        ],
        "page": 277,
        "savingThrow": [
            "wisdom",
            "dexterity"
        ],
        "areaTags": [
            "MT",
            "C"
        ]
    },
    {
        "name": "拯救瀕死",
        "ENG_name": "Spare the Dying",
        "level": 0,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個生命值為0的活著的生物。該生物的傷勢變得穩定。此法術對於不死生物和構裝生物沒有效果。"
        ],
        "page": 277,
        "races": [
            {
                "name": "Elf (Shadar-kai)",
                "source": "UAElfSubraces",
                "baseName": "Elf",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Abyssal)",
                "source": "UAThatOldBlackMagic",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Golgari Agent",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "動物交談術",
        "ENG_name": "Speak with Animals",
        "level": 1,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Nature",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ancients",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Undying",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Barbarian",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Totem Warrior",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "你在法術持續期間獲得能夠理解且與野獸透過言語溝通的能力。許多野獸的知識和認知能力受限於他們的智力，但至少，牠們都能提供你關於周遭地域和怪物的情報，包括任何牠們能察覺或在過去幾天內察覺到的事物。你也許可以說服也受幫你一個小忙，由DM決定。"
        ],
        "page": 277,
        "backgrounds": [
            {
                "name": "Gruul Anarch",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "死者交談術",
        "ENG_name": "Speak with Dead",
        "level": 3,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 10
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "燃燒焚香"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Undying",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Raven Queen (UA)",
                        "source": "UAWarlockAndWizard"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你賦予射程內一個你選擇的屍體虛假的生命和智力，讓它能回答你所提出的問題。這具屍體必須仍擁有嘴巴，且不能是不死生物。若這具屍體在最近10天內曾做為此法術的目標,則此法術失敗。",
            "直到此法術結束前，你可以詢問屍體最多五個問題。這具屍體只會知曉它生前所知的事情，包括語言。它的回答通常會是簡短的、晦澀的、或重覆的。若你對它有敵意、或它將你認做敵人，這具屍體不會被強迫提供誠實的回答。此法術並不會讓該生物的靈魂回到它的身體，而只會帶回它的精魄。因此，這具屍體無法得知新的情報、無法理解任何它在死後發生的事情、也無法推測關於未來的事件。"
        ],
        "page": 277,
        "backgrounds": [
            {
                "name": "Orzhov Representative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "植物交談術",
        "ENG_name": "Speak with Plants",
        "level": 3,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "radius",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你賦予距離你30呎內的植物有限的知覺和活力，給予它們與你溝通並遵從你簡單命令的能力。你可以詢問植物關於在此法術範圍的過去幾天內所發生的事件，藉此知曉關於曾經過這裡的生物、天氣、和其它事項的情報。",
            "你也可以將植物生長而導致的困難地形（像是灌木叢和矮樹叢）在持續期間轉變成普通地形。或你可以使有植物存在的普通地形在持續期間轉變成困難地形，例如讓藤蔓和樹枝阻撓追兵。",
            "根據DM的判斷，植物也可能可以執行其它你所指示的任務。此法術並不能讓植物拔根而起並四處移動，但它們可以自由的移動它們的枝枒、蔓鬚、和莖桿。",
            "如果一個植物生物在該區域內，你可以如同你和它之間有著共通語言一般與之交談，但你不會因此獲得影響它的魔法能力。",
            "此法術可以讓{@spell 糾纏術}創造出的植物釋放一個被{@condition 束縛}的生物。"
        ],
        "page": 277,
        "backgrounds": [
            {
                "name": "Selesnya Initiate",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "蛛行術",
        "ENG_name": "Spider Climb",
        "level": 2,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一滴瀝青和一隻蜘蛛"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Forest"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Mountain"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Underdark"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "直到法術結束前，一個你觸碰的自願生物獲得在垂直表面上下移動、或甚至在天花板上下顛倒的移動的能力，而無須使用它的雙手。目標同時獲得等同於它步行速度的攀爬速度。"
        ],
        "page": 277,
        "races": [
            {
                "name": "Tiefling (Abyssal)",
                "source": "UAThatOldBlackMagic",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "backgrounds": [
            {
                "name": "Golgari Agent",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "荊棘叢生",
        "ENG_name": "Spike Growth",
        "level": 2,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 150
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "七根銳利棘刺或七根小樹枝，每根的一端都被削尖"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Nature",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Arctic"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Mountain"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Giant Soul (UA)",
                        "source": "UAGiantSoulSorcerer",
                        "subSubclass": "Stone"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "以射程內一點為中心20呎半徑的地表扭曲變形，並長出堅硬的棘刺。在法術持續期間，這個區域變為困難地形。當一個生物移進或在該區域內移動，則它每移動5呎變會受到{@dice 2d4}穿刺傷害。",
            "地表的這個變化被偽裝且看起來相當自然。任何在此法術被施放時沒有看見該區域的生物必須成功通過一次對抗你法術豁免DC的睿知（{@skill 感知}）檢定，才能在進入前發現該地形的危險。"
        ],
        "page": 277,
        "damageInflict": [
            "piercing"
        ],
        "opposedCheck": [
            "wisdom"
        ],
        "areaTags": [
            "R"
        ]
    },
    {
        "name": "靈體守衛",
        "ENG_name": "Spirit Guardians",
        "level": 3,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "radius",
            "distance": {
                "type": "feet",
                "amount": 15
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一個聖徽"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "War",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Crown",
                        "source": "SCAG"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你呼喚出靈體們以保護自己。它們將在法術持續期間在距離你15呎的範圍內飛掠環繞著你。若你的陣營為善良或中立，則它們的靈體外型看起來會像是天使或精類（由你決定）。若你的陣營為邪惡，則它們看起來會像是邪魔。",
            "當你施放此法術時，你可指定任意數量個你所能看見的生物不受此法術影響。一個被影響的生物在範圍內的速度減半，且當該生物在一個回合中第一次進入該區域、或在該處開始它的回合，則它必須進行一次睿知豁免。若豁免失敗，則該生物將受到{@dice 3d8}光耀傷害（若你為善良或中立）或{@dice 3d8}死靈傷害（若你為邪惡）。若豁免成功，則該生物只受到一半的傷害。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用4環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 3d8|3-9|1d8}。"
                ]
            }
        ],
        "page": 278,
        "damageInflict": [
            "necrotic",
            "radiant"
        ],
        "savingThrow": [
            "wisdom"
        ],
        "areaTags": [
            "S"
        ],
        "backgrounds": [
            {
                "name": "Orzhov Representative",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "靈體武器",
        "ENG_name": "Spiritual Weapon",
        "level": 2,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Life",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "War",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Raven Queen (UA)",
                        "source": "UAWarlockAndWizard"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest (UA)",
                        "source": "UAPaladin"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest v2 (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內創造出一把浮空、靈體的武器，在法術持續期間內持續存在，或直到你再次施放此法術。當你施放此法術時，你可以對距離該武器5呎內的一個生物進行一次近戰法術攻擊。若命中，則目標將受到等同於{@dice 1d8}+你的施法屬性調整值的力場傷害。",
            "在你的回合以一個附贈動作，你可以移動該武器最多20呎距離，並對距離它5呎內的一個生物再重複進行一次該攻擊。",
            "此武器可以有著任何你所選的外型。信仰關聯於特定武器的神明（例如聖卡斯伯特以他的硬頭槌聞名，而索爾則以祂的槌子聞名）的牧師會使此法術的外型與該武器相似。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用3環或更高的法術位施放此法術時，你使用的法術位每比原本高二環，傷害便會再增加{@scaledice 1d8|2,4,6,8|1d8}。"
                ]
            }
        ],
        "page": 278,
        "damageInflict": [
            "force"
        ],
        "spellAttack": [
            "M"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "驚震斬",
        "ENG_name": "Staggering Smite",
        "level": 4,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade (UA)",
                        "source": "UAWarlockAndWizard"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Stone",
                        "source": "UASorcerer"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Destruction (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在法術持續期間，下一次你以近戰武器攻擊命中一個生物時，你的武器將同時刺穿它的身體與心靈，且該攻擊將對目標造成額外{@dice 4d6}精神傷害。目標必須進行一次睿知檢定。若豁免失敗，則直到它的下個回合結束前，它的攻擊檢定和屬性檢定將具有劣勢。"
        ],
        "page": 278,
        "damageInflict": [
            "psychic"
        ],
        "savingThrow": [
            "wisdom"
        ]
    },
    {
        "name": "臭雲術",
        "ENG_name": "Stinking Cloud",
        "level": 3,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 90
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一顆腐爛的蛋或幾片臭菘的葉子"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Swamp"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Underdark"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Fiend",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你以射程內一點為中心創造出一團20呎半徑球形，令人作嘔的黃色毒氣。這團雲會繞過轉角散佈，且它所在的區域被重度遮蔽。這團雲會在法術持續期間於空中徘徊不散。",
            "每個完全處於這團雲內的生物在它的回合開始時必須進行一次體質豁免以對抗毒素。若豁免失敗，則該生物將花費它的動作乾嘔發暈。不需要呼吸或免疫毒素的生物將自動成功於這個豁免檢定。",
            "一陣中速的風（風速至少每小時10哩）可以在4輪之後吹散這團雲。一陣強風（風速至少每小時20哩）可以在1輪之後吹散這團雲。"
        ],
        "page": 278,
        "savingThrow": [
            "constitution"
        ],
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "塑石術",
        "ENG_name": "Stone Shape",
        "level": 4,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "軟黏土，必須被捏成你想要使石製物體變成的大致形狀"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Mountain"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Underdark"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰一個大小為中型或更小的石製物體、或一塊各邊長都不超過5呎的岩石區塊，並將它塑造成任何你想要的形狀。舉例來說，你可以將一塊大石頭塑造成一把武器、雕像、棺材、或只要牆壁的厚度小於5呎，就可以在牆壁上開出一個小型通道。你也可以使一扇石製的門或門框變形以把門封住。你所創造的物體可以有最多兩條鉸鏈和一道門閂，但不可能創造出更精良的機械結構。"
        ],
        "page": 278
    },
    {
        "name": "石膚術",
        "ENG_name": "Stoneskin",
        "level": 4,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "價值100金幣的鑽石塵，在施法時消耗",
                "cost": 100,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "War",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ancients",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest v2 (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Conquest",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Strength (PSA)",
                        "source": "PSA"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術將讓一個你所觸碰的自願生物的肌膚如同石頭一般堅硬。直到法術結束前，目標對非魔法的鈍擊、穿刺、劈砍傷害具有抗性。"
        ],
        "page": 278,
        "damageResist": [
            "bludgeoning",
            "piercing",
            "slashing"
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Gruul Anarch",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "復仇風暴",
        "ENG_name": "Storm of Vengeance",
        "level": 9,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "sight"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一團翻攪的風暴雷雲以你所能看見的一點為中心緩緩成形，並一直蔓延到360呎半徑的範圍。在這個區域內電閃雷鳴、狂風呼嘯。每個在這片雷雲出現時處於其下方的生物（雷雲下方不超過5,000呎的距離）必須進行一次體質豁免。若豁免失敗，該生物將受到{@dice 2d6}雷鳴傷害，且陷入{@condition 耳聾}狀態長達5分鐘。",
            "你每維持一輪對此法術的專注，這個風暴就會在你的回合產生不同的效果。",
            {
                "type": "entries",
                "name": "第二輪",
                "entries": [
                    "酸蝕之雨從雷雲降下。每個在雷雲下方的生物和物體都將受到{@dice 1d6}酸蝕傷害。"
                ]
            },
            {
                "type": "entries",
                "name": "第三輪",
                "entries": [
                    "你從雷雲中喚出六道閃電擊向雷雲下方六個你所選擇的生物或物體。各生物或物體不能被多於一道閃電襲擊。一個被襲擊的生物必須進行一次敏捷豁免。豁免失敗的生物將受到{@dice 10d6}閃電傷害，豁免成功則只受到一半的傷害。"
                ]
            },
            {
                "type": "entries",
                "name": "第四輪",
                "entries": [
                    "冰雹從雷雲傾盆而下。每個在雷雲下方的生物都將受到{@dice 2d6}鈍擊傷害。"
                ]
            },
            {
                "type": "entries",
                "name": "第五～十輪",
                "entries": [
                    "狂風和刺骨的雨勢侵襲整片雷雲下方的區域。這片區域變成困難地形，且它被重度遮蔽。每個在該處的生物將受到{@dice 1d6}寒冰傷害。在這片區域內進行遠程武器攻擊是不可能的。該處的狂風暴雨在維持法術專注時被視作嚴重干擾。最後，這片區域的強烈風勢（風速為每小時20到50哩）將自動吹散雲煙、迷霧、或其他類似現象，無論它是魔法性或尋常現象都一樣。"
                ]
            }
        ],
        "page": 279,
        "damageInflict": [
            "acid",
            "bludgeoning",
            "cold",
            "lightning",
            "thunder"
        ],
        "savingThrow": [
            "constitution",
            "dexterity"
        ],
        "conditionInflict": [
            "deafened"
        ],
        "areaTags": [
            "Y"
        ]
    },
    {
        "name": "暗示術",
        "ENG_name": "Suggestion",
        "level": 2,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "m": "一隻蛇的舌頭和一小塊蜂窩或一滴甜油"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 8
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Knowledge (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Beauty (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你提議一套行動（限制為一到兩個句子），並魔法性地影響射程內一個你所能看見，且它能聽見和理解你的生物。不會被{@condition 魅惑}的生物免疫於這個效果。這項提議的措辭必須讓這套行動聽起來合情合理。要求該名生物刺自己、撲向長矛、自焚、或其他明顯有害的行動將會使此法術結束。",
            "目標必須進行一次睿知豁免。若豁免失敗，則它會盡它的全力去實行你所描述的行動。這組行動可以在整個法術持續期間被持續。若被提議的行動在更短的時間內被完成，則法術將會在目標完成它被要求去做的事時結束。",
            "你也可以指定一些在法術持續期間會觸發特定行動的特定條件。舉例來說，你可以暗示一位騎士將她的戰馬送給她第一個遇見的乞丐。如果在法術時效結束前沒有滿足條件，則該行動不會被執行。",
            "若你或你的任何同伴傷害了目標，則此法術結束。"
        ],
        "page": 279,
        "savingThrow": [
            "wisdom"
        ],
        "races": [
            {
                "name": "Tiefling (Fierna)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Fierna)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Yuan-ti Pureblood",
                "source": "VGM"
            }
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "烈日光束",
        "ENG_name": "Sunbeam",
        "level": 6,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "line",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一面放大鏡"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道耀眼的光耀射線從你的手中閃射而出一束5呎寬、60呎長的直線。每個在這個直線內的生物必須進行一次體質豁免。若豁免失敗，該生物將受到{@dice 6d8}光耀傷害且陷入{@condition 目盲}直到你的下個回合。豁免成功則只受到一半的傷害。若豁免成功，該生物只受到一半的傷害，且不會因此法術陷入{@condition 目盲}。不死生物和泥怪在此豁免檢定中具有劣勢。",
            "直到此法術結束前，你能夠以一個動作再射出一道新的光耀射線。",
            "在法術持續期間，耀眼的光輝粒子在你手中閃耀。它將散發出30呎半徑的明亮光照和再延伸30呎的微光光照。這道光線視為日光。"
        ],
        "page": 279,
        "damageInflict": [
            "radiant"
        ],
        "savingThrow": [
            "constitution"
        ],
        "conditionInflict": [
            "blinded"
        ],
        "areaTags": [
            "L"
        ]
    },
    {
        "name": "陽炎爆",
        "ENG_name": "Sunburst",
        "level": 8,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 150
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "火焰和一小塊太陽石"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "耀眼奪目的陽光在以射程內你所選擇一點為中心的60呎半徑內閃現爆發。每個在這道光線內的生物必須進行一次體質豁免。若豁免失敗，該生物將受到{@dice 12d6}光耀傷害，且陷入{@condition 目盲}狀態長達1分鐘。若豁免成功，該生物只受到一半的傷害，且不會陷入{@condition 目盲}。不死生物和泥怪在此豁免檢定中具有劣勢。",
            "一個因此法術而陷入{@condition 目盲}狀態的生物可以在它的每個回合結束時進行一次體質豁免。若豁免成功，則它不再處於{@condition 目盲}狀態。",
            "此法術將驅散任何它範圍內由法術所創造出的黑暗。"
        ],
        "page": 279,
        "damageInflict": [
            "radiant"
        ],
        "savingThrow": [
            "constitution"
        ],
        "conditionInflict": [
            "blinded"
        ],
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "迅捷箭袋",
        "ENG_name": "Swift Quiver",
        "level": 5,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一個裝有至少一發彈藥的箭袋"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你轉變你的箭袋以讓它能夠製造出無窮無盡的非魔法彈藥供給，就好像彈藥在你的手伸進箭袋時跳到你手中一樣。",
            "直到此法術結束前，在你的每個回合，你可以使用一個附贈動作以一把使用來自箭袋彈藥的武器進行二次攻擊。每次你進行這種遠程攻擊時，你的箭袋都會用魔法將你所使用的彈藥替換成一發相似的非魔法彈藥。任何由此法術創造出來的彈藥都會在此法術結束時被摧毀。如果該箭袋離開了你的掌握，則此法術結束。"
        ],
        "page": 279,
        "scalingEffects": true
    },
    {
        "name": "徽記術",
        "ENG_name": "Symbol",
        "level": 7,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "總共價值至少1,000金幣的水銀、磷、和鑽石與貓眼石的粉末，在施法時消耗",
                "cost": 1000,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "permanent",
                "ends": [
                    "dispel",
                    "trigger"
                ]
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "當你施放此法術時，你刻寫一個具有傷害性的銘文。你可以刻寫在一個表面（像是桌面、一區地面或牆面）或者一個能被關上以隱蔽銘文的物體中（像是一本書、一張卷軸、或一個寶箱）。若你選擇刻寫在表面，則此銘文覆蓋一片不超過10呎直徑的區域。若你選擇刻寫在物體中，則該物體必須留在它所在的位置；若該物體被移離你施放此法術的位置超過10呎，該銘文將被破壞，且此法術在不被觸發的情況下結束。",
            "銘文幾乎是隱形的，且需要成功通過一次對抗你法術豁免DC的智力（{@skill 調查}）檢定才能被發現。",
            "當施放此法術時，你決定什麼東西將會觸發銘文。對於刻寫於表面的銘文而言，最典型的觸發方式包括觸碰或站在銘文上、移開蓋住銘文的其他物體、接近到符文的一定範圍內、或是操作刻有銘文的物體等等。對於刻寫在物體內部的銘文而言，最常見的觸發方式包括打開該物體、接近到該物體的一定範圍內、或看見或閱讀符文。",
            "你可以進一步定義觸發條件，好讓此法術只會在特定情況、或根據生物的物理特徵（像是高度或重量）、或生物類型（例如可以被設置成只對鬼婆或變形者產生影響）。你也可以設定讓特定生物不會觸發銘文，例如說出特定密語的生物等等。",
            "當你刻寫銘文時，選擇以下其中一個效果選項。一旦被觸發，銘文將會發光，並在60呎半徑內的球體範圍內散發微光光照長達10分鐘，在這之後此法術結束。每個在銘文作用時處於球體範圍的生物，以及在一個回合中第一次進入球體範圍內，或在該處結束它回合的生物，都會成為銘文效果的目標。",
            {
                "type": "entries",
                "name": "死亡",
                "entries": [
                    "每個目標都必須進行一次體質豁免，若豁免失敗將受到{@dice 10d10}死靈傷害，豁免成功則只受到一半的傷害。"
                ]
            },
            {
                "type": "entries",
                "name": "不諧",
                "entries": [
                    "每個目標都必須進行一次體質豁免。若豁免失敗，目標將和其他生物爭吵怒罵長達1分鐘。在這段期間，它將無法進行有意義的溝通，且在攻擊檢定和屬性檢定中具有劣勢。"
                ]
            },
            {
                "type": "entries",
                "name": "恐懼",
                "entries": [
                    "每個目標都必須進行一次睿知豁免。若豁免失敗則陷入{@condition 恐懼}狀態長達1分鐘。當處於{@condition 恐懼}狀態，目標將丟下任何它所持握的東西，且若可以的話，必須在它的每個回合移動遠離銘文至少30呎距離。"
                ]
            },
            {
                "type": "entries",
                "name": "絕望",
                "entries": [
                    "每個目標都必須進行一次魅力豁免。若豁免失敗，目標將被絕望給征服長達1分鐘。在這段時間，它無法攻擊或以任何生物做為傷害性能力、法術、或其他魔法效果的目標。"
                ]
            },
            {
                "type": "entries",
                "name": "瘋狂",
                "entries": [
                    "每個目標都必須進行一次智力豁免。若豁免失敗，目標將陷入瘋狂長達1分鐘。一個瘋狂的生物無法採取動作、無法理解其他生物在說什麼，無法閱讀，且只能說出無意義的胡言亂語。DM將控制它的移動，且它的移動將會變得古怪而無規律。"
                ]
            },
            {
                "type": "entries",
                "name": "苦痛",
                "entries": [
                    "每個目標都必須進行一次體質豁免，若豁免失敗則在難以忍受的痛苦下陷入{@condition 無力}狀態長達1分鐘。"
                ]
            },
            {
                "type": "entries",
                "name": "沉眠",
                "entries": [
                    "每個目標都必須進行一次睿知豁免，若豁免失敗則陷入{@condition 昏迷}狀態長達10分鐘。一個生物會在它受到傷害，或其他人使用一個動作將它搖醒或拍醒時醒轉。"
                ]
            },
            {
                "type": "entries",
                "name": "震懾",
                "entries": [
                    "每個目標都必須進行一次睿知豁免。若豁免失敗則陷入{@condition 震懾}狀態長達1分鐘。"
                ]
            }
        ],
        "page": 280,
        "damageInflict": [
            "necrotic"
        ],
        "savingThrow": [
            "constitution",
            "wisdom",
            "charisma",
            "intelligence"
        ],
        "opposedCheck": [
            "intelligence"
        ],
        "conditionInflict": [
            "frightened",
            "incapacitated",
            "stunned",
            "unconscious"
        ],
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "塔莎狂笑術",
        "ENG_name": "Tasha's Hideous Laughter",
        "level": 1,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "小餡餅以及一根揮舞於空中的羽毛"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Great Old One",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一個射程內你所選擇且你能看見的生物若被此法術影響，將會覺得它所感知到的一切事物都變的滑稽可笑，並因此陷入瘋狂大笑中。目標必須成功通過一次睿知豁免，否則將{@condition 伏地}，且在法術持續期間變得{@condition 無力}，無法起身。一個智力數值為4或更低的生物不會受到影響。",
            "在它的每個回合結束時，以及每次它受到傷害時，目標都可以再進行一次睿知豁免。如果該豁免是被傷害觸發，則目標在該豁免檢定中具有優勢。若豁免成功，則此法術結束。"
        ],
        "page": 280,
        "savingThrow": [
            "wisdom"
        ],
        "races": [
            {
                "name": "Tiefling (Abyssal)",
                "source": "UAThatOldBlackMagic",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "conditionInflict": [
            "incapacitated",
            "prone"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "心靈遙控",
        "ENG_name": "Telekinesis",
        "level": 5,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Great Old One",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你獲得透過意念移動或操縱生物或物體的能力。當你施放此法術時，且在持續期間內每個你的回合以一個動作，你可以對射程內你所能看見的一個生物或物體運用你的意念，造成以下相應的效果。你可以在每一輪影響相同的目標，或在任何時候選擇一個新的目標。若你切換目標，則前一個目標將不再受到此法術影響。",
            {
                "type": "entries",
                "name": "生物",
                "entries": [
                    "你可以嘗試移動一個體型為巨型或更小的生物。使用你的施法屬性進行一次屬性檢定以對抗該生物的力量檢定。若你在此對抗中勝出，則你可以將該生物向任意方向（包括向上）移動最多30呎，但不能移動超出此法術的射程範圍。直到你的下個回合結束前，該生物將被你的心靈抓握給{@condition 束縛}。一個被向上抬起的生物將被懸吊在半空中。"
                ]
            },
            "在隨後的回合中，你可以使用你的動作藉由重複該對抗以嘗試維持你的心靈抓握。",
            {
                "type": "entries",
                "name": "物體",
                "entries": [
                    "你可以嘗試移動一個重量最多1,000磅的物體。若該物體沒有被穿戴或攜帶，則你可以自動將它向任意方向移動最多30呎，但不能移動超出此法術的射程範圍。"
                ]
            },
            "若該物體被某個生物穿戴或攜帶，則你必須使用你的施法屬性進行一次屬性檢定以對抗該生物的力量檢定。若你成功，則你將把該物體從該生物身上拖走，並將它向任意方向移動最多30呎，但不能移動超出此法術的射程範圍。",
            "你可以運用你的心靈抓握進行精密的操作，像是操作一件簡單的工具、打開一扇門或一個容器、把一個物品放入或拿出一個打開的容器、或倒出小瓶中的內容物。"
        ],
        "page": 280,
        "conditionInflict": [
            "restrained"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "心靈感應",
        "ENG_name": "Telepathy",
        "level": 8,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "unlimited"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一對相連的銀製戒指"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 24
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在你自己和一個你所熟悉的自願生物之間創造一道心靈連結。該生物可以位於你所在存在位面上的任何地方。若你或目標不再處於相同的位面，則此法術結束。",
            "直到此法術結束前，你和目標可以透過這道連結與對方即時分享話語、影像、聲音、和其他感官信息，且目標將會認出與它交流的生物是你。此法術能夠讓一個智力至少為1的生物理解你話語的意義以及任何你傳給它的感官信息。"
        ],
        "page": 281,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "傳送術",
        "ENG_name": "Teleport",
        "level": 7,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 10
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "這個法術將瞬間把你和最多八個射程內你所選且你能看見的自願生物、或一個射程內你所能看見的物體，傳送到一處你所選擇的目的地。若你以一個物體為目標，則它必須能夠容納於一個10呎邊長立方體內，且它不能被一個非自願生物給持握或攜帶。",
            "你必須知曉你所選擇的目的地，且它必須要與你處於相同的存在位面。你對目的地的熟悉程度將會決定你是否能成功地抵達該處。DM將骰{@dice d100}並查閱下表。",
            {
                "type": "table",
                "caption": "瞬間傳送",
                "colLabels": [
                    "熟悉程度",
                    "事故",
                    "類似區域",
                    "偏離目的",
                    "順利抵達"
                ],
                "colStyles": [
                    "col-8",
                    "col-1 text-align-center no-wrap",
                    "col-1 text-align-center no-wrap",
                    "col-1 text-align-center no-wrap",
                    "col-1 text-align-center no-wrap"
                ],
                "rows": [
                    [
                        "永久法陣",
                        "\u2014",
                        "\u2014",
                        "\u2014",
                        "01\u2013100"
                    ],
                    [
                        "關聯物體",
                        "\u2014",
                        "\u2014",
                        "\u2014",
                        "01\u2013100"
                    ],
                    [
                        "非常熟悉",
                        "01\u201305",
                        "06\u201313",
                        "14\u201324",
                        "25\u2013100"
                    ],
                    [
                        "偶然見過",
                        "01\u201333",
                        "34\u201343",
                        "44\u201353",
                        "54\u2013100"
                    ],
                    [
                        "見過一次",
                        "01\u201343",
                        "44\u201353",
                        "54\u201373",
                        "74\u2013100"
                    ],
                    [
                        "僅憑描述",
                        "01\u201343",
                        "44\u201353",
                        "54\u201373",
                        "74\u2013100"
                    ],
                    [
                        "不實目的地",
                        "01\u201350",
                        "51\u2013100",
                        "\u2014",
                        "\u2014"
                    ]
                ]
            },
            {
                "type": "entries",
                "name": "熟悉程度",
                "entries": [
                    "「永久法陣」代表一個你知曉其符咒結果的永久性傳送法陣。「關聯物體」代表你擁有一個在過去六個月內從目的地被拿走的物體，像是一本來自法師書庫的書、來自皇家套房的床單、或是一塊來自巫妖秘密陵墓的大理石塊。"
                ]
            },
            "「非常熟悉」代表一處你經常造訪的場所、一處你曾仔細調查過的地方、或是一處你在施法時能夠看見的地方。「偶然見過」代表著你曾見過不只一次，但並不非常熟悉的某地。「見過一次」代表一處你曾見過一次的地方，例如透過魔法見過。「僅憑描述」代表一處你透過其他人的描述才知道其地點和外觀的場所，例如透過地圖知悉。",
            "「不實目的地」代表一處不存在的場所。或許你在嘗試探知敵人的巢穴時看到了幻象，又或者你嘗試傳送到一處熟悉的地點，但它已不復存在。",
            {
                "type": "entries",
                "name": "順利抵達",
                "entries": [
                    "你和你們一群人（或目標物體）出現在你想要去的地方。"
                ]
            },
            {
                "type": "entries",
                "name": "偏離目的",
                "entries": [
                    "你和你們一群人（或目標物體）出現在偏離目的地隨機距離和隨機方位的地方。偏離距離為預期傳送距離的{@dice 1d10 × 1d10}%。舉例來說，若你嘗試傳送120哩，偏離目的，並用兩顆{@dice d10}分別骰出了5和3的結果，則你們將偏離目的地等同總距離15%的距離，也就是18哩。DM會透過骰一顆{@dice d8}以決定偏離的方位，指定1為北方，2為東北方，3為東方，按照羅盤的八個方位以此類推。如果你打算傳送到一個沿岸城市，卻向著海洋的方向偏離了18哩，那你們可能就有麻煩了。"
                ]
            },
            {
                "type": "entries",
                "name": "類似區域",
                "entries": [
                    "你和你們一群人（或目標物體）抵達一處與目的區域不同，但在視覺上或主題上與該處相似的區域。舉例來說，若你打算回到你自己的實驗室，你可能會抵達另一個法師的實驗室、或一處擁有許多與你實驗室相同的工具設備的煉金器材店。一般來說，你會出現在一處距離最近的類似場所，但由於此法術沒有距離限制，你仍可能抵達位於該位面的任何地方。"
                ]
            },
            {
                "type": "entries",
                "name": "事故",
                "entries": [
                    "這個法術的無常魔法導致旅途變得痛苦艱難。每個被傳送的生物（或目標物體）將受到{@dice 3d10}力場傷害，且DM會再重骰一次表以決定你們抵達何處（事故可能會多次發生，每次都會造成傷害）。"
                ]
            }
        ],
        "page": 281,
        "permanentEffects": true
    },
    {
        "name": "傳送法陣",
        "ENG_name": "Teleportation Circle",
        "level": 5,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 10
            }
        },
        "components": {
            "v": true,
            "m": {
                "text": "價值50金幣，混有珍貴寶石的稀有粉筆和墨水，在施法時消耗",
                "cost": 50,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "round",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Arcana",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Horizon Walker (UA)",
                        "source": "UARangerAndRogue"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Horizon Walker",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Horizon Walker (UA)",
                        "source": "UARangerAndRogue"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Horizon Walker",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "當你施放此法術時，你在地上畫出一個直徑十呎，刻有符文的圓環。這個法陣將把你所在的位置，連結至一個與你處於相同存在位面，你所選擇且你知曉其符文序列的永久傳送法陣。一道閃爍微光的傳送門將在你所繪製的圓環中開啟，並持續直到你的下個回合結束。任何進入傳送門的生物將立刻出現在距離目標法陣5呎內一處未被佔據空間，或若該空間已被佔據則出現在離該法陣最近的一處未被佔據空間。",
            "許多大型神殿、公會、和其他重要場所都會在其中某處設有永久傳送法陣。每個這種法陣都包括一串獨特的符文序列\u2014一段以特定形式排列的魔法符文字串。當你首次獲得施放此法術的能力時，你將習得兩個位於物質位面的永久傳送法陣的符文序列，由DM決定。你可以在你的冒險過程中習得額外的符文序列。你可以在花費1分鐘研究後記住新的符文序列。",
            "你可以透過每天在相同地點施放此法術長達一整年來創造一個永久的傳送法陣。當你如此施放此法術時，你並不需要使用該法陣進行傳送。"
        ],
        "page": 282,
        "permanentEffects": true
    },
    {
        "name": "譚森浮碟術",
        "ENG_name": "Tenser's Floating Disk",
        "level": 1,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一滴水銀"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "此法術在射程內你所選且能看見的一處未佔據空間內創造出一個水平的圓形力場平面。它有著3呎直徑，厚1吋，且漂浮於離地3呎的位置。這個浮碟在法術持續期間將維持存在，且可以承擔最多500磅的重量。如果有更多的重量被放到它上面，則此法術結束，且浮碟上放置的所有東西都會掉到地上。",
            "浮碟在你距離它20呎內時是靜止不動的。若你移動到距離它20呎外的地方，浮碟會跟隨你以保持與你之間的距離在20呎內。它可以穿過崎嶇的地形、上下樓、斜坡等等，但它的高度變化不能超過10呎或以上。舉例來說，浮碟無法越過10呎深的窪坑；如果它是在坑底被創造出來的，那它也無法離開這個窪坑。",
            "如果你移離浮碟超過100呎（通常是因為它沒辦法繞過障礙物以繼續跟隨你），則此法術結束。"
        ],
        "page": 282,
        "races": [
            {
                "name": "Tiefling (Mammon)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Mammon)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ]
    },
    {
        "name": "奇術",
        "ENG_name": "Thaumaturgy",
        "level": 0,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1,
                    "upTo": true
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內展現一個小小奇蹟，一種超自然力量的象徵。你在射程內創造出下列其中一種魔法效果：",
            {
                "type": "list",
                "items": [
                    "你的音量提高到比原本大最多三倍，持續1分鐘。",
                    "你使火焰搖曳、變亮、昏暗、或改變顏色，持續1分鐘。",
                    "你使地表產生無害的震動，持續1分鐘。",
                    "你創造出一個從射程內你所選擇的一處為源頭發出的瞬間聲響，像是轟隆雷鳴、烏鴉尖嘯、或不祥的低語等等。",
                    "你立刻使一扇未上鎖的門或窗突然打開或猛然關上。",
                    "你改變你眼睛的外觀，持續1分鐘。"
                ]
            },
            "如果你多次施放這個法術，你可以讓最多三個1分鐘的效果同時生效，且你可以用一個動作解消像這樣的一個效果。"
        ],
        "page": 282,
        "races": [
            {
                "name": "Elf (Shadar-kai)",
                "source": "UAElfSubraces",
                "baseName": "Elf",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Zariel)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Variant)",
                "source": "SCAG",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Variant)",
                "source": "SCAG",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Asmodeus)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Baalzebul)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling",
                "source": "PHB",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Zariel)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Asmodeus)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Baalzebul)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Dispater)",
                "source": "MTF",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            },
            {
                "name": "Tiefling (Dispater)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ]
    },
    {
        "name": "荊棘之鞭",
        "ENG_name": "Thorn Whip",
        "level": 0,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "帶刺植物的莖"
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你創造出一個藤蔓般，長滿棘刺的長鞭，在你的指令之下向著射程內的一個生物猛擊。對該目標進行一次近戰法術攻擊。若攻擊命中，該生物受到{@dice 1d6}穿刺傷害，且若該生物的體型為大型或更小，你將該生物朝你拉近最多10呎。",
            "此法術的傷害將在你的等級升至5級時增加至{@dice 2d6}，11級時{@dice 3d6}，17級時{@dice 4d6}。"
        ],
        "page": 282,
        "damageInflict": [
            "piercing"
        ],
        "spellAttack": [
            "M"
        ],
        "scalingEffects": true,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "雷霆斬",
        "ENG_name": "Thunderous Smite",
        "level": 1,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Stone",
                        "source": "UASorcerer"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Zeal (PSA)",
                        "source": "PSA"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在法術持續期間，下一次你以近戰武器攻擊命中時，你的武器響徹出一陣距離你300呎內都能聽見的雷鳴聲，且該攻擊對目標造成額外{@dice 2d6}雷鳴傷害。此外，若該目標為生物，則它必須成功通過一次力量豁免，否則被推離你10呎並被擊倒{@condition 伏地}。"
        ],
        "page": 282,
        "damageInflict": [
            "thunder"
        ],
        "savingThrow": [
            "strength"
        ],
        "conditionInflict": [
            "prone"
        ]
    },
    {
        "name": "雷鳴波",
        "ENG_name": "Thunderwave",
        "level": 1,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "cube",
            "distance": {
                "type": "feet",
                "amount": 15
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Tempest",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Kraken (Stream)",
                        "source": "Stream"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Giant Soul (UA)",
                        "source": "UAGiantSoulSorcerer",
                        "subSubclass": "Storm"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一波雷鳴力場從你身上橫掃而出。處於以你為源頭的15呎邊長立方體空間內的每個生物都必須進行一次體質豁免。若豁免失敗，則該生物受到{@dice 2d8}雷鳴傷害且被推離你10呎距離。若豁免成功，該生物只受到一半的傷害，且不會被推離。",
            "除此之外，完整處於效果範圍內且未被固定的物體將會被法術的效果自動推離你10呎距離，且此法術會發出一陣距離你300呎內都能聽見的雷鳴巨響。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 2d8|1-9|1d8}。"
                ]
            }
        ],
        "page": 282,
        "damageInflict": [
            "thunder"
        ],
        "savingThrow": [
            "constitution"
        ],
        "races": [
            {
                "name": "Tiefling (Abyssal)",
                "source": "UAThatOldBlackMagic",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "areaTags": [
            "C"
        ],
        "backgrounds": [
            {
                "name": "Gruul Anarch",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "時間停止",
        "ENG_name": "Time Stop",
        "level": 9,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你短暫地停止除了你之外所有人的時間流動。其他生物的時間停止流逝，而你則連續採取{@dice 1d4 + 1}回合，在這段期間你可以正常地使用動作和移動。",
            "若你在這段期間使用其中一個動作或任何創造出的效果影響了一個除你以外的生物、或一個被你以外的人穿戴或攜帶的物品，則此法術結束。此外，此法術也會在你移動到一處距離你施法地點超過1,000呎的地點時結束。"
        ],
        "page": 283
    },
    {
        "name": "巧舌術",
        "ENG_name": "Tongues",
        "level": 3,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "m": "一個金字形神塔的小型陶製模型"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術將賦予你所觸碰的生物理解任何它所聽到的語言的能力。除此之外，當目標說話時，任何能聽見目標且知曉至少一種語言的生物也能理解它的話語。"
        ],
        "page": 283
    },
    {
        "name": "植物遁走術",
        "ENG_name": "Transport via Plants",
        "level": 6,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 10
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "round",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術將在一個射程內，體型為大型或更大的非活化植物與另一個處於相同存在位面，位於任意距離外的植物之間創造一道魔法連結。你必須曾經見過或碰觸過做為目的地的植物至少一次。在法術持續期間，任何生物都可以走進目標植物，並使用5呎移動速度從目的地植物走出。"
        ],
        "page": 283
    },
    {
        "name": "樹躍術",
        "ENG_name": "Tree Stride",
        "level": 5,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Nature",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ancients",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你獲得進入樹木中，並從樹木內部移動到500呎內另一棵同種樹木內部的能力。這兩棵樹木必須是活著的，且至少要與你的體型相同。你必須使用5呎移動速度以進入一棵樹。你將瞬間知曉距離500呎內所有其他同種樹木的位置，並且，做為你進入這棵樹所使用移動速度的一部份，你可以移動至這些同種樹木的其中一棵，或移出你所在的樹木。藉由使用另外的5呎移動速度，你將出現在距離目的地樹木5呎內你所選擇的一處。若你已經沒有剩下的移動速度，則你將出現在距離你所進入的樹木5呎內的一處。",
            "在法術持續期間，你每輪可以使用這個傳送能力一次。你必須在樹木外面結束你的回合。"
        ],
        "page": 283
    },
    {
        "name": "完全變形術",
        "ENG_name": "True Polymorph",
        "level": 9,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一滴水銀、一團阿拉伯膠、和一縷煙霧"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "選擇射程內一個你所能看見的生物或非魔法物體。你將該生物轉變成一個不同的生物、生物變成非魔法物體、或將該物體變成一個生物（該物體必須未被其他生物穿戴或攜帶）。這個轉變將在法術持續期間內持續生效，或直到目標的生命值歸零或死亡。若你在此法術的完整持續時間內都維持著專注，則這個轉變將持續直到它被解消。",
            "此法術對變形者或生命值為零的生物沒有任何效果。一個非自願的生物可以進行一次睿知豁免，且若它豁免成功，則它將不受此法術的影響。",
            {
                "type": "entries",
                "name": "生物變成生物",
                "entries": [
                    "若你將一個生物變成另一種生物，它的新型態可以是任何你所選的，挑戰等級等於或低於目標挑戰等級（或若目標沒有挑戰等級，則為目標的等級）的生物。目標的遊戲數據，包括心智屬性值，都會被它新型態的數據資料給取代。但它保留它的陣營和個性。"
                ]
            },
            "目標取用它新型態的生命值，且當它回復它原本的型態時，該生物將取回它轉變之前的生命值。若它是因為生命值歸零而回復，則任何溢出傷害都將被帶到它原本的型態，扣減它原本的生命值。只要這個溢出傷害沒有讓該生物原本型態的生命值歸零，它就不會被擊倒{@condition 昏迷}。",
            "該生物被限制只能進行它新型態天生所能進行的動作，且它無法說話、施放法術、或採取任何其他需要雙手或語言的動作，除非它的新型態能夠做出這類動作。",
            "目標的裝備將被融入新形態之中。目標無法啟動、使用、揮舞、或透過其他方式來從它的裝備獲得好處。",
            {
                "type": "entries",
                "name": "物體變成生物",
                "entries": [
                    "你可以將一個物體變成一個任意種類的生物，只要該生物的體型不超過該物體的尺寸，且該生物的{@filter 挑戰等級不大於9或更低|bestiary|challenge rating=0;1/8;1/4;1/2;1;2;3;4;5;67;8;9|miscellaneous=!swarm}。該生物對你和你的同伴友善。它在每個你的回合行動。你決定它將採取什麼動作以及它如何移動。這個生物的數據資料由DM掌控，且由DM處理它所有的動作和移動。"
                ]
            },
            "若此法術變為永久有效，你將不再能控制該生物。根據你對待它的方式，它可能會維持對你的友善態度。",
            {
                "type": "entries",
                "name": "生物變成物體",
                "entries": [
                    "若你將一個生物變成一個物體，只要該物體的尺寸不超過該生物的體型，則它將連同它所穿戴或攜帶的所有東西一起被轉變成該型態。該生物的數據資料將變成該物體的數據，且在此法術結束之後，它將回復它原本的型態，而該生物不會擁有處於這個型態時的記憶。"
                ]
            }
        ],
        "page": 283,
        "savingThrow": [
            "wisdom"
        ],
        "permanentEffects": true,
        "isSummon": true,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "完全復活術",
        "ENG_name": "True Resurrection",
        "level": 9,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "hour"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "少量聖水和價值至少25,000金幣的鑽石，在施法時消耗",
                "cost": 25000,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你觸碰的一個死亡不超過200年，且並非因年老而死去的生物。如果它的靈魂願意且不受拘束，則目標將以生命值全滿的狀態復活。",
            "此法術會癒合所有傷口，中和任何毒素、治癒所有疾病、並解除任何在該生物死亡時影響它的詛咒。此法術會取代受損或遺失的器官和肢體。若該生物為不死生物，則它將被回復成非不死生物的型態。",
            "若原本的身體已經不復存在，此法術甚至可以提供一具新的身體，但在這個情況下你必須說出該生物的名字。該生物接著將會出現在距離你10呎內一處你所選擇的未被佔據空間。"
        ],
        "page": 284,
        "isHeal": true,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "真知術",
        "ENG_name": "True Seeing",
        "level": 6,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一個價值25金幣，由蘑菇粉末、番紅花、和油脂製成的眼藥膏，在施法時消耗",
                "cost": 25,
                "consume": true
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術將會賦予你所觸碰的自願生物看見事物本質的能力。在法術持續期間，該生物獲得真實視覺，能察覺到被魔法隱藏的暗門、且可以看見乙太位面內的事物，以上這些能力的範圍皆為120呎。"
        ],
        "page": 284
    },
    {
        "name": "克敵機先",
        "ENG_name": "True Strike",
        "level": 0,
        "school": "D",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "round",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你伸出你的手並指向射程內的一個目標。你的魔法讓得以短暫理解該目標的防禦弱點。在你的下個回合，只要此法術尚未結束，你對該目標進行的第一次攻擊檢定獲得優勢。"
        ],
        "page": 284,
        "races": [
            {
                "name": "Tiefling (Abyssal)",
                "source": "UAThatOldBlackMagic",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ]
    },
    {
        "name": "海嘯術",
        "ENG_name": "Tsunami",
        "level": 8,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "sight"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "round",
                    "amount": 6
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一面水牆在射程內你所選擇的一點突然出現。你可以使這道牆呈現最多300呎長、300呎高、以及50呎厚。這道牆在法術持續期間內持續存在。",
            "當這道牆出現時，每個在範圍內的生物都必須進行一次力量豁免。若豁免失敗，該生物將受到{@dice 6d10}鈍擊傷害，豁免成功則只受到一半的傷害。",
            "在這道牆出現後你的每個回合開始時，這道牆，和任何在其中的生物，將移動遠離你50呎的距離。任何在這道牆內、或在水牆移動時其所在空間被水牆進入的體型為巨型或以下的生物，都必須成功通過一次力量豁免，否則受到{@dice 5d10}鈍擊傷害。一個生物在每輪只會受到此傷害一次。在該回合結束時，這道牆的高度將會減少50呎，且在後續輪中此法術對生物所造成的傷害將減少{@dice 1d10}。當這道牆的高度降低至0呎，此法術結束。",
            "一個在水牆內的生物可以藉由游泳移動。但因為波濤的阻力，該生物必須成功通過一次對抗你法術豁免DC的力量（{@skill 運動}）檢定才能夠移動。若它在此檢定中失敗，則它無法移動。一個移出水牆區域的生物將會墜落到地面。"
        ],
        "page": 284,
        "damageInflict": [
            "bludgeoning"
        ],
        "savingThrow": [
            "strength"
        ],
        "opposedCheck": [
            "strength"
        ],
        "areaTags": [
            "W"
        ]
    },
    {
        "name": "隱形僕役",
        "ENG_name": "Unseen Servant",
        "level": 1,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一根線和一塊木頭"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "此法術創造出一個{@condition 隱形}、無心智、無形的中型力場，可以在法術結束之前在你的命令下執行簡單的工作。這個僕役將在射程內一處未被占據的空間出現。它有著AC 10，1點生命值，以及2點力量，且它不能攻擊。當它的生命值歸零，此法術結束。",
            "你的每個回合一次，以一次附贈動作，你可以用精神命令這個僕役移動最多15呎並與一個物件互動。這個僕役可以執行人類僕從可以進行的簡單工作，像是拿取東西、打掃、縫補、摺衣服、點火、上菜、和倒酒等等。一旦你下達了命令，這個僕役將會盡它的全力去執行任務，直到工作完成，並接著等候你的下一個命令。",
            "如果你命令僕役去執行一項會讓它離你超過60呎距離的工作，則此法術結束。"
        ],
        "page": 284,
        "backgrounds": [
            {
                "name": "Izzet Engineer",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "吸血鬼之觸",
        "ENG_name": "Vampiric Touch",
        "level": 3,
        "school": "N",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Death",
                        "source": "DMG"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Ambition (PSA)",
                        "source": "PSA"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Grave",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Lolth (Twitter)",
                        "source": "Twitter"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Darkness (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你纏繞著陰影之手的觸碰可以吸取他人的生命力來醫治自己的傷勢。對一個在你觸及範圍內的生物進行一次近戰法術攻擊。若命中，則目標將受到{@dice 3d6}死靈傷害，且你回復等同於造成死靈傷害一半數值的生命值。直到法術結束前，你可以在每個你的回合以一個動作再進行此攻擊。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用4環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 3d6|3-9|1d6}。"
                ]
            }
        ],
        "page": 285,
        "damageInflict": [
            "necrotic"
        ],
        "spellAttack": [
            "M"
        ],
        "isHeal": true,
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "惡毒嘲笑",
        "ENG_name": "Vicious Mockery",
        "level": 0,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你對射程內你所能看見的一個生物說出一句被精妙魔力點綴的侮辱詞句。如果該生物能聽見你（儘管它不需要理解你），它必須成功通過一次睿知豁免，否則受到{@dice 1d4}精神傷害，且直到它的下個回合結束前，它的下一個攻擊檢定將承受劣勢。",
            "此法術的傷害將在你的等級升至5級時增加至{@dice 2d4}，11級時{@dice 3d4}，17級時{@dice 4d4}。"
        ],
        "page": 285,
        "damageInflict": [
            "psychic"
        ],
        "savingThrow": [
            "wisdom"
        ],
        "scalingEffects": true,
        "races": [
            {
                "name": "Tiefling (Variant)",
                "source": "SCAG",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Rakdos Cultist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "火牆術",
        "ENG_name": "Wall of Fire",
        "level": 4,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一小塊磷"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Light",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Fiend",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial (UA)",
                        "source": "UARevisedClassOptions"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Celestial",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Forge",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內一處固體表面上創造出一道火牆。你可以使這道牆呈現最多60呎長、20呎高、以及1呎厚，或形成一道有著直徑最多20呎長、20呎高、以及1呎厚的環型牆。這道牆不透光，且持續直到法術持續時間結束。",
            "當這道牆出現時，每個處於其區域內的生物都必須進行一次敏捷豁免。若豁免失敗，則該生物將受到{@dice 5d8}火焰傷害，豁免成功則只受到一半的傷害。",
            "在你施放此法術時選擇這道牆的其中一側，每個在距離該側牆面10呎內或牆壁內部結束它回合的生物將會受到{@dice 5d8}火焰傷害。在一個回合中第一次進入牆壁或在該處結束它回合的生物會受到同樣的傷害。這道牆的另一側則不會造成傷害。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用5環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，傷害便會再增加{@scaledice 5d8|4-9|1d8}。"
                ]
            }
        ],
        "page": 285,
        "damageInflict": [
            "fire"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "W"
        ],
        "backgrounds": [
            {
                "name": "Boros Legionnaire",
                "source": "GGR"
            },
            {
                "name": "Rakdos Cultist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "力牆術",
        "ENG_name": "Wall of Force",
        "level": 5,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一撮碾碎純淨寶石所製成的粉塵"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Protection (UA)",
                        "source": "UAClericDivineDomains"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Redemption",
                        "source": "XGE"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道隱形的力場之牆在射程內你所選擇的一點突然出現。這道牆將呈現任何你所選擇的方向，例如做為一道水平或垂直的屏障、或是傾斜一定角度。它可以自由浮於空中、或佇立於固體表面上。你可以將它形塑成最多半徑10呎的半球體或球體，或形塑成一個最多由十個10呎x10呎板塊構成的平坦表面。每個板塊都必須與另一個板塊相連。這道牆在任何型態的厚度皆為1/4吋。它會在法術持續期間持續存在。若這道牆在出現時切穿了一個生物所在的空間，則該生物將被推到牆的其中一側（由你選擇哪一側）。",
            "沒有任何事物可以物理性的穿過這道牆。它免疫所有傷害，且無法被{@spell 解除魔法}給解除。然而，{@spell 解離術}法術會立即地摧毀這道牆。這道牆會同時延伸至乙太位面，阻止乙太體穿過這道牆。"
        ],
        "page": 285,
        "damageImmune": [
            "force"
        ],
        "areaTags": [
            "W"
        ]
    },
    {
        "name": "冰牆術",
        "ENG_name": "Wall of Ice",
        "level": 6,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一小塊石英"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內一處固體表面上創造出一道冰牆。你可以將它形塑成最多半徑10呎的半球體或球體，或形塑成一個最多由十個10呎x10呎板塊構成的平坦表面。每個板塊都必須與另一個板塊相連。這道牆在任何型態的厚度皆為1吋，並會在法術持續期間持續存在。",
            "若這道牆在出現時切穿了一個生物所在的空間，則在該區域內的生物將被推到牆的其中一側，且必須進行一次敏捷豁免。若豁免失敗，則該生物將受到{@dice 10d6}寒冰傷害，豁免成功則只受到一半的傷害。",
            "這道牆是一個可以被傷害並因此損壞的物體。它具有AC 12，每1吋厚度30點的生命值，且對火焰傷害的易傷。將一塊10呎區塊牆壁的生命值歸零將會摧毀它，並在這道牆佔據的空間留下一層刺骨寒氣。一個在一個回合第一次移動穿過這層刺骨寒氣的生物必須進行一次體質豁免。該生物若豁免失敗則受到{@dice 5d6}寒冰傷害，豁免成功則只受到一半的傷害。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用7環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，這道牆出現時所造成的傷害便會再增加{@scaledice 10d6|6-9|2d6}，且穿過刺骨寒氣所受到的傷害也會再增加{@scaledice 5d6|6-9|1d6}。"
                ]
            }
        ],
        "page": 285,
        "damageInflict": [
            "cold"
        ],
        "savingThrow": [
            "dexterity",
            "constitution"
        ],
        "areaTags": [
            "W"
        ]
    },
    {
        "name": "石牆術",
        "ENG_name": "Wall of Stone",
        "level": 5,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一小塊花崗岩"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Desert"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Mountain"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道非魔法的堅石之牆在射程內你所選擇的一點突然出現。這道牆有6吋厚，且由十個10呎x10呎的板塊所構成。每個板塊都必須與另一個板塊相連。或者，你可以創造出厚度只有3吋的10呎x20呎的板塊。",
            "若這道牆在出現時切穿了一個生物所在的空間，則該生物將被推到牆的其中一側（由你選擇哪一側）。若一個生物將會被這道牆（或是被這道牆跟另一個固體表面）全面環繞，則該生物可以進行一次敏捷豁免。若豁免成功，則它可以使用它的反應以移動最多等同它移動速度的距離，好讓它不會被這道牆給包圍。",
            "這道牆可以是任何你想要的形狀，但它不能佔據其他生物或物體所在的空間。這道牆不需要是垂直的，也不需要立於任何穩固的地基。然而，它必須與既存且能牢固支撐它的石頭融合。因此你可以使用此法術以在峽谷之間造橋、或創造出斜坡。",
            "若你創造出一道長度超過20呎的橋，則你必須將每個板塊的尺寸減半以製作支撐結構。你可以粗略地在牆上形塑出槍眼、城垛、或類似的構造。",
            "這道牆是一個石製物體，可以被傷害並因此損壞。每個板塊都具有AC 15，每1吋厚度30點的生命值。將一個板塊的生命值歸零將會摧毀它，並在DM的裁斷下可能會導致相連的板塊隨之崩塌。",
            "若你在此法術的完整持續時間內都維持著專注，則這道牆將變為永久造物且不會被解除。否則這道牆將在此法術結束時消失。"
        ],
        "page": 287,
        "savingThrow": [
            "dexterity"
        ],
        "permanentEffects": true,
        "areaTags": [
            "W"
        ]
    },
    {
        "name": "棘牆術",
        "ENG_name": "Wall of Thorns",
        "level": 6,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一把荊棘"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你創造出一面堅韌柔軟、林立著銳利棘刺的糾纏灌木之牆。這道牆將出現在射程內一處固體表面上，並在法術持續期間內持續存在。你選擇使這道牆呈現最多60呎長、10呎高、以及5呎厚，或形成一道有著直徑最多20呎長、20呎高、以及5呎厚的環型牆。這道牆會隔絕視線。",
            "當這道牆出現時，每個處於其區域內的生物都必須進行一次敏捷豁免。若豁免失敗，則該生物將受到{@dice 7d8}穿刺傷害，豁免成功則只受到一半的傷害。",
            "一個生物可以移動穿過這道牆，儘管這個過程會緩慢而痛苦。一個生物每穿過這道牆1呎，它都必須消耗4呎的移動速度。除此之外，當一個生物在一個回合中第一次進入這道牆，或在該處結束它的回合，該生物都必須進行一次敏捷豁免。若豁免失敗，則它受到{@dice 7d8}穿刺傷害，豁免成功則只受到一半的傷害。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用7環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，兩種傷害都會再增加{@scaledice 7d8|6-9|1d8}。"
                ]
            }
        ],
        "page": 287,
        "damageInflict": [
            "piercing",
            "slashing"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "areaTags": [
            "W"
        ]
    },
    {
        "name": "守護聯結",
        "ENG_name": "Warding Bond",
        "level": 2,
        "school": "A",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "touch"
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": {
                "text": "一對各自價值至少50金幣的白金指環，你和目標必須在法術持續期間穿戴",
                "cost": 50
            }
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Crown",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Solidarity (PSA)",
                        "source": "PSA"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "此法術守護著你觸碰的一個自願生物，且在你和目標之間創造一道神祕的連結直到法術結束。當目標處於你60呎範圍內，它的AC和豁免檢定將獲得+1加值，且它獲得對所有傷害的抗性。同時，每當它受到傷害，你也將承受等量的傷害。",
            "此法術將在你的生命值歸零、或你與目標分開距離超過60呎時結束。它也會在此法術被重複施放於任一個被連結生物時結束。你也可以以一個動作解消此法術。"
        ],
        "page": 287,
        "areaTags": [
            "ST"
        ],
        "backgrounds": [
            {
                "name": "Selesnya Initiate",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "水下呼吸",
        "ENG_name": "Water Breathing",
        "level": 3,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一截短蘆葦或一根麥稈"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 24
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Coast"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Kraken (Stream)",
                        "source": "Stream"
                    }
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "直到此法術結束前，此法術能賦予射程內最多十個你所能看見的自願生物在水下呼吸的能力。受影響的生物同時也保留它們正常的呼吸模式。"
        ],
        "page": 287,
        "areaTags": [
            "MT"
        ],
        "backgrounds": [
            {
                "name": "Simic Scientist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "水面行走",
        "ENG_name": "Water Walk",
        "level": 3,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一塊軟木塞"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                },
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Artificer",
                    "source": "UAArtificer"
                },
                {
                    "name": "Artificer Revisited",
                    "source": "UAArtificerRevisited"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Coast"
                    }
                },
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Swamp"
                    }
                }
            ]
        },
        "source": "PHB",
        "meta": {
            "ritual": true
        },
        "entries": [
            "此法術將給予在任何液體表面上行走的能力\u2014像是水、酸液、泥漿、雪、流沙、或岩漿\u2014就如同它們是無害的固體表面一樣（走過熔岩的生物仍可能會因為高溫而受到傷害）。射程內最多十個你所能看見的生物將在法術持續期間獲得這個能力。",
            "若你以一個被液體淹沒的生物為目標，此法術將以每輪60呎的速率將目標帶到液體表面。"
        ],
        "page": 287,
        "areaTags": [
            "MT"
        ]
    },
    {
        "name": "蛛網術",
        "ENG_name": "Web",
        "level": 2,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "少許蜘蛛網"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Druid",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Land",
                        "source": "PHB",
                        "subSubclass": "Underdark"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Lolth (Twitter)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內一點召喚出一大片又厚又黏的蛛網。蛛網將在法術持續期間佔據以該點為中心的20呎邊長立方體空間。蛛網為困難地形，且輕度遮蔽該區域。",
            "若蛛網並未固定在兩個固體之間（像是牆或樹）、或沒有被疊在地板或天花板上，則被召喚的蛛網將自己塌陷，且此法術將在你的下個回合開始時結束。疊在平坦表面上的蛛網有著5呎的厚度。",
            "每個在蛛網中開始他回合、或在他回合進入蛛網的生物都必須進行一次敏捷豁免。若豁免失敗，則只要該生物還在網中，它就被{@condition 束縛}直到它被從中釋放。",
            "一個被蛛網{@condition 束縛}的生物可以使用它的動作以進行一次對抗你法術豁免DC的力量檢定。若檢定成功，則它不再被{@condition 束縛}。",
            "這個蛛網是可燃的。任何暴露在火焰之下的5呎邊長立方體的蛛網將會在1輪內被燒盡，並對任何在火焰中開始它們回合的生物造成{@dice 2d4}火焰傷害。"
        ],
        "page": 287,
        "damageInflict": [
            "fire"
        ],
        "savingThrow": [
            "dexterity"
        ],
        "opposedCheck": [
            "strength"
        ],
        "races": [
            {
                "name": "Tiefling (Mephistopheles)",
                "source": "UAFiendishOptions",
                "baseName": "Tiefling",
                "baseSource": "PHB"
            }
        ],
        "conditionInflict": [
            "restrained"
        ],
        "areaTags": [
            "C"
        ]
    },
    {
        "name": "怪影殺手",
        "ENG_name": "Weird",
        "level": 9,
        "school": "I",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "利用一群生物心中最深的恐懼，你在它們的腦海中創造出一群只有它們才能看見的幻象生物。每個位於射程內你所選擇一點為中心的30呎半徑球體範圍內的生物都必須進行一次睿知豁免。若豁免失敗，該生物將在法術持續期間陷入{@condition 恐懼}狀態。這道幻象將喚出生物最深的恐懼，將它最駭人的惡夢顯現成一個無法擺脫的威脅。在被{@condition 恐懼}生物的每個回合結束時，它必須成功通過一次睿知豁免，否則受到{@dice 4d10}精神傷害。若豁免成功，則結束這個法術對該生物的影響。"
        ],
        "page": 288,
        "damageInflict": [
            "psychic"
        ],
        "savingThrow": [
            "wisdom"
        ],
        "conditionInflict": [
            "frightened"
        ],
        "areaTags": [
            "S"
        ]
    },
    {
        "name": "御風而行",
        "ENG_name": "Wind Walk",
        "level": 6,
        "school": "T",
        "time": [
            {
                "number": 1,
                "unit": "minute"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "火焰和聖水"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "hour",
                    "amount": 8
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你和射程內最多十個你所能看見的自願生物將在法術持續期間呈現氣體型態，看起來就如同一縷雲霧。當處於此雲霧型態，生物將具有300呎的飛行速度，並對所有非魔法武器造成的傷害具有抗性。處於這個型態的生物唯一能做的動作是{@action 疾走}動作或變回它原本的型態。回復原型態需要花費1分鐘的時間，該生物在這段時間將處於{@condition 無力}狀態且無法移動。直到此法術結束前，該生物也可以再變回雲霧型態，而這個轉變過程也同樣需要花費1分鐘。",
            "若一個處於雲霧型態的生物在此效果結束時飛在空中，則該生物將在1分鐘內以每輪60呎的速度下降直到安全落地。若它在1分鐘之後仍未落地，則該生物將墜落剩下的距離。"
        ],
        "page": 288,
        "conditionInflict": [
            "incapacitated"
        ],
        "areaTags": [
            "MT"
        ]
    },
    {
        "name": "風牆術",
        "ENG_name": "Wind Wall",
        "level": 3,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 120
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一把小扇和一根異地之物的羽毛"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Druid",
                    "source": "PHB"
                },
                {
                    "name": "Ranger",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Nature",
                        "source": "PHB"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一道強風之牆從射程內你所選擇的一處地面升起。你可以使這道牆呈現最多50呎長、15呎高、以及1呎厚。你可以自由形塑這道牆的形狀，但它必須沿著地面形成一條連續的路線。這道牆持續直到法術持續時間結束。",
            "當這道牆出現時，每個處於其區域內的生物都必須進行一次力量豁免。一個豁免失敗的目標將受到{@dice 3d8}鈍擊傷害，豁免成功則只受到一半的傷害。",
            "這陣強風會驅離雲霧、濃煙、和其他氣體。體型為小型或更小的飛行生物或物體無法穿過這道牆。被帶進這道牆內的未被固定的輕量物質將會向上吹飛。射向牆後目標的箭、弩矢、和其他尋常的投射物會被向上偏斜，並因此自動失手。（巨人或投石機投出的巨岩、以及其他類似的投射物，則不會受到影響。）處於{@spell 氣化形體}的生物無法穿過這道牆。"
        ],
        "page": 288,
        "damageInflict": [
            "bludgeoning"
        ],
        "savingThrow": [
            "strength"
        ],
        "areaTags": [
            "W"
        ],
        "backgrounds": [
            {
                "name": "Simic Scientist",
                "source": "GGR"
            }
        ]
    },
    {
        "name": "祈願術",
        "ENG_name": "Wish",
        "level": 9,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "祈願術是凡間生物所能施展最為強大的法術。藉由單純地大聲說出願望，你就能根據你的渴望操弄現實世界的根基。",
            "此法術的基本用途是複製任何其他8環或以下法術的效果。你不需要滿足任何該法術的需求，包括消耗構材。該法術將單純地發揮效果。或者，你可以選擇創造以下其中一種效果：",
            {
                "type": "list",
                "items": [
                    "你創造出一個並非魔法物品，且價值最高25,000金幣的物體。這個物體的各邊尺寸不能超過300呎，且它將出現在你所能看見地面上的一處未被佔據空間。",
                    "你讓最多二十個你所能看見的生物回復所有的生命值，且你結束所有它們身上在{@spell 高等復原術}法術中記載的效果。",
                    "你賦予最多十個你所能看見的生物對於一種你所選擇的傷害類型的抗力。",
                    "你賦予最多十個你所能看見的生物免疫於一種法術或其他魔法效果長達8小時。舉例來說，你可以使你和你的所有同伴免疫於{@creature 半巫妖}的生命吸取攻擊。",
                    "藉由強迫重骰任何在上一輪內進行的擲骰，你撤銷一件剛剛發生的事件（包括你的上一回合）。現實將自我形塑以適應新的擲骰結果。舉例來說，祈願術可以撤銷對手成功的豁免檢定、一個敵人的重擊、或一個友方失敗的豁免檢定。你可以強迫該次重骰具有優勢或劣勢，且你可以選擇要使用重骰後的擲骰結果或是使用原本的結果。"
                ]
            },
            "你也可以藉由此法術達成某件不在上述範例的結果。盡可能精準地向DM敘述你的願望。DM擁有充分的自由去裁定這個願望會導致什麼樣的結果；願望越大，結果就越有可能出錯。此法術可能會單純的失敗、你所想要的效果可能會被部分達成、或者你可能會因為你措辭表達願望的方式而承受某些無法預期的後果做為結果。舉例來說，許願讓一個反派死亡可能會讓你穿越到未來該反派已經死亡的時間段，將你實質意義上被從遊戲中除外。同樣的，許願獲得一個傳奇魔法物品或神器可能會立刻將你傳送到該物品當前持有者的面前。",
            "施放此法術以產生任何複製其它法術以外的效果都將對你造成極大的負擔。在承受此負擔後，直到完成一次長休之前，你每施放一次法術，都會使你受到每環階{@dice 1d10}的死靈傷害。這個傷害無法被任何方式減少或避免。此外，若你的力量不為3或更低，則你的力量將減少至3，持續{@dice 2d4}天。在這幾天內，你每花費一整天休息且不進行任何除了輕省活動以外的事情，則你剩餘的回復時間將減少2天。最後，若你承受此負擔，則你將有{@chance 33}的機率再也無法施放祈願術。"
        ],
        "page": 288,
        "damageInflict": [
            "necrotic"
        ],
        "damageResist": [
            "acid",
            "bludgeoning",
            "cold",
            "fire",
            "force",
            "lightning",
            "necrotic",
            "piercing",
            "poison",
            "psychic",
            "radiant",
            "slashing",
            "thunder"
        ],
        "isHeal": true
    },
    {
        "name": "巫術箭",
        "ENG_name": "Witch Bolt",
        "level": 1,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 30
            }
        },
        "components": {
            "v": true,
            "s": true,
            "m": "一枝來自被閃電擊中的樹的細枝"
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Sorcerer",
                    "source": "PHB"
                },
                {
                    "name": "Warlock",
                    "source": "PHB"
                },
                {
                    "name": "Wizard",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "一束劈啪作響的青色能量束向著射程內一個生物疾刺而去，在你和目標之間形成一道持續著的電弧。對該目標進行一次遠程法術攻擊。若命中，目標將受到{@dice 1d12}閃電傷害，且在法術持續期間內每個你的回合，你都可以使用你的動作對該目標自動造成{@dice 1d12}閃電傷害。若你使用你的動作去做其他事，則此法術結束。此法術也會在目標一度離開法術的射程、或它對你來說有著全掩護時結束。"
        ],
        "entriesHigherLevel": [
            {
                "type": "entries",
                "name": "升環效果",
                "entries": [
                    "當你使用2環或更高的法術位施放此法術時，你使用的法術位每比原本高一環，初始傷害便會再增加{@scaledice 1d12|1-9|1d12}。"
                ]
            }
        ],
        "page": 289,
        "damageInflict": [
            "lightning"
        ],
        "spellAttack": [
            "R"
        ],
        "areaTags": [
            "ST"
        ]
    },
    {
        "name": "回返真言",
        "ENG_name": "Word of Recall",
        "level": 6,
        "school": "C",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 5
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "instant"
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Cleric",
                    "source": "PHB"
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你和最多五個距離你5呎內的自願生物將被立刻傳送到一處事先指定的避難聖所。你和任何與你一起被傳送的生物將出現在距離你預備你避難聖所時（見下述）所指定地點最近的未被佔據空間。若你在施放此法述時沒有先準備避難聖所，則此法術將不會發揮任何效果。",
            "你必須藉由在一處供奉你神祇、或與你神祇有強烈聯繫的場所內施放此法術以指定一處避難聖所。若你嘗試在一個並非供奉你神祇的區域以這個方式施放此法術，則此法術將不會發揮任何效果。"
        ],
        "page": 289
    },
    {
        "name": "激憤斬",
        "ENG_name": "Wrathful Smite",
        "level": 1,
        "school": "V",
        "time": [
            {
                "number": 1,
                "unit": "bonus"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "self"
            }
        },
        "components": {
            "v": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 1
                },
                "concentration": true
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade (UA)",
                        "source": "UAWarlockAndWizard"
                    }
                },
                {
                    "class": {
                        "name": "Warlock",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Hexblade",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Sorcerer",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Stone",
                        "source": "UASorcerer"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Destruction (Stream)",
                        "source": "Twitter"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "在法術持續期間，下一次你以近戰武器攻擊命中時，你的攻擊造成額外{@dice 1d6}精神傷害。此外，若該目標為生物，則它必須成功通過一次睿知豁免，否則直到法術結束前對你感到{@condition 恐懼}。以一個動作，該生物可以進行一次對抗你法術豁免DC的睿知檢定以取回它的決心並結束此法術。"
        ],
        "page": 289,
        "damageInflict": [
            "psychic"
        ],
        "savingThrow": [
            "wisdom"
        ],
        "opposedCheck": [
            "wisdom"
        ],
        "conditionInflict": [
            "frightened"
        ]
    },
    {
        "name": "誠實之域",
        "ENG_name": "Zone of Truth",
        "level": 2,
        "school": "E",
        "time": [
            {
                "number": 1,
                "unit": "action"
            }
        ],
        "range": {
            "type": "point",
            "distance": {
                "type": "feet",
                "amount": 60
            }
        },
        "components": {
            "v": true,
            "s": true
        },
        "duration": [
            {
                "type": "timed",
                "duration": {
                    "type": "minute",
                    "amount": 10
                }
            }
        ],
        "classes": {
            "fromClassList": [
                {
                    "name": "Bard",
                    "source": "PHB"
                },
                {
                    "name": "Cleric",
                    "source": "PHB"
                },
                {
                    "name": "Paladin",
                    "source": "PHB"
                }
            ],
            "fromSubclass": [
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Devotion",
                        "source": "PHB"
                    }
                },
                {
                    "class": {
                        "name": "Paladin",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Crown",
                        "source": "SCAG"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Monster Slayer (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                },
                {
                    "class": {
                        "name": "Ranger",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Monster Slayer",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Monster Slayer (UA)",
                        "source": "UAATrioOfSubclasses"
                    }
                },
                {
                    "class": {
                        "name": "Ranger (Revised)",
                        "source": "UATheRangerRevised"
                    },
                    "subclass": {
                        "name": "Monster Slayer",
                        "source": "XGE"
                    }
                },
                {
                    "class": {
                        "name": "Cleric",
                        "source": "PHB"
                    },
                    "subclass": {
                        "name": "Order",
                        "source": "GGR"
                    }
                }
            ]
        },
        "source": "PHB",
        "entries": [
            "你在射程內以你所選擇的一點為中心創造出一個15呎半徑球體範圍，能夠抵禦謊言的魔法領域。直到法術結束前，一個在此法術區域中開始它的回合、或在一個回合中第一次進入該區域的生物必須進行一次魅力豁免。若豁免失敗，則當該生物仍在效果半徑內，它就不能故意說謊。你會知道每個生物的豁免檢定是成功還是失敗。",
            "一個受影響的生物會意識到這個法術，並可以因此避免回答那些它們通常會以謊言答覆的問題。這些生物可以在回答時含糊其辭，只要它的回答還在誠實的範圍內就沒問題。"
        ],
        "page": 289,
        "savingThrow": [
            "charisma"
        ],
        "areaTags": [
            "S"
        ],
        "backgrounds": [
            {
                "name": "Orzhov Representative",
                "source": "GGR"
            }
        ]
    }
]

const idx = lunr(function () {
    this.use(lunr.multiLanguage('en', 'zh'))

    this.field('name')
    this.field('ENG_name')

    this.ref('name')
    spell.forEach(function (doc) {
        this.add(doc)
    }, this)
})
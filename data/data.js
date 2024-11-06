var sucai = [{
    name: '土豆',
    emoji: '🥔',
  },
  {
    name: '胡萝卜',
    emoji: '🥕',
  },
  {
    name: '花菜',
    emoji: '🥦',
  },
  {
    name: '白萝卜',
    emoji: '🥣',
  },
  {
    name: '西葫芦',
    emoji: '🥒',
  },
  {
    name: '番茄',
    emoji: '🍅',
    alias: '西红柿',
  },
  {
    name: '芹菜',
    emoji: '🥬',
  },
  {
    name: '黄瓜',
    emoji: '🥒',
  },
  {
    name: '洋葱',
    emoji: '🧅',
  },
  {
    name: '莴笋',
    emoji: '🎍',
  },
  {
    name: '菌菇',
    emoji: '🍄',
  },
  {
    name: '茄子',
    emoji: '🍆',
  },
  {
    name: '豆腐',
    emoji: '🍲',
  },
  {
    name: '包菜',
    emoji: '🥗',
    // image: '/images/cabbage-dog.jpg',
  },
  {
    name: '白菜',
    emoji: '🥬',
  }
]
var rou = [{
    name: '午餐肉',
    emoji: '🥓',
  },
  {
    name: '香肠',
    emoji: '🌭',
  },
  {
    name: '腊肠',
    emoji: '🌭',
  },
  {
    name: '鸡肉',
    emoji: '🐤',
  },
  {
    name: '猪肉',
    emoji: '🐷',
  },
  {
    name: '鸡蛋',
    emoji: '🥚',
  },
  {
    name: '虾',
    emoji: '🦐',
  },
  {
    name: '牛肉',
    emoji: '🐮',
  },
  {
    name: '骨头',
    emoji: '🦴',
  },
  {
    name: '鱼（Todo）',
    emoji: '🐟',
  }
]

var zhushi = [{
    name: '面食',
    emoji: '🍝',
  },
  {
    name: '面包',
    emoji: '🍞',
  },
  {
    name: '米',
    emoji: '🍚',
  },
  {
    name: '方便面',
    emoji: '🍜',
  }
]

var chuju = [{
    name: '烤箱',
    // disabled:'1',
    emoji: '',
    icon: 'kaoxiang',
  },
  {
    name: '空气炸锅',
    emoji: '',
    icon: 'kongqizhaguo',
  },
  {
    name: '微波炉',
    emoji: '',
    icon: 'weibolu',
  },
  {
    name: '电饭煲',
    emoji: '',
    icon: 'dianfanbao',
  },
  {
    label: '一口能炒又能煮的大锅',
    name: '一口大锅',
    emoji: '',
    icon: 'daguo',
  }
]

var re = function (d) {
  return d;
}

// var setsel=function(num){
//   chuju[num]['disabled']=true;
// }

module.exports = {
  sucai: sucai,
  rou: rou,
  chuju: chuju,
  zhushi: zhushi,
  re: re
}


//生成随机UID
const genUid = () => {
  var length = 20
  var soupLength = genUid.soup_.length
  var id = []
  for (var i = 0; i < length; i++) {
    id[i] = genUid.soup_.charAt(Math.random() * soupLength)
  }
  return id.join('')
}
genUid.soup_ = '!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
genUid() // ;l`yCPc9A8IuK}?N6,%}


//无loop生成指定长度的数组
const List = len => [...new Array(len).keys()]
const list = List(10) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


//一行代码去重数组
const list = [1, 1, 2, 3, 6, 45, 8, 5, 4, 6, 5]
const uniqueList = [...new Set(list)] // [1, 2, 3, 6, 45, 8, 5, 4]


//RGB色值生成16进制色值
const rgb2Hex = (r, g, b) => {
  r = Math.max(Math.min(Number(r), 100), 0) * 2.55
  g = Math.max(Math.min(Number(g), 100), 0) * 2.55
  b = Math.max(Math.min(Number(b), 100), 0) * 2.55
  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2)
  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2)
  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2)
  return '#' + r + g + b
}
rgb2Hex(100, 50, 0) // "#ff7f00"


//颜色混合
const colourBlend = (c1, c2, ratio) => {
  ratio = Math.max(Math.min(Number(ratio), 1), 0)
  let r1 = parseInt(c1.substring(1, 3), 16)
  let g1 = parseInt(c1.substring(3, 5), 16)
  let b1 = parseInt(c1.substring(5, 7), 16)
  let r2 = parseInt(c2.substring(1, 3), 16)
  let g2 = parseInt(c2.substring(3, 5), 16)
  let b2 = parseInt(c2.substring(5, 7), 16)
  let r = Math.round(r1 * (1 - ratio) + r2 * ratio)
  let g = Math.round(g1 * (1 - ratio) + g2 * ratio)
  let b = Math.round(b1 * (1 - ratio) + b2 * ratio)
  r = ('0' + (r || 0).toString(16)).slice(-2)
  g = ('0' + (g || 0).toString(16)).slice(-2)
  b = ('0' + (b || 0).toString(16)).slice(-2)
  return '#' + r + g + b
}
colourBlend('#ff0000', '#3333ff', 0.5) // "#991a80"


//判断是否为质数
const mathIsPrime = n => {
  if (n === 2 || n === 3) {
    return true
  }
  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {
    return false;
  }
  for (let x = 6; x <= Math.sqrt(n) + 1; x += 6) {
    if (n % (x - 1) == 0 || n % (x + 1) == 0) {
      return false
    }
  }
  return true
}
mathIsPrime(0) // true


//遍历类数组对象
const elements = document.querySelectorAll(selector);
[].prototype.forEach.call(elements, (el, idx, list) => {
  console.log(el) // 元素节点
})


//判断对象类型
const type = data => Object.prototype.toString.call(data).replace(/^\[object (.+)\]$/, '$1').toLowerCase()
type({}) // object


//优化多层判断条件
const getScore = score => {
  const scoreData = new Array(101).fill(0)
    .map((data, idx) => ([idx, () => (idx < 60 ? '不及格' : '及格')]))
  const scoreMap = new Map(scoreData)
  return (scoreMap.get(score)
    ? scoreMap.get(score)()
    : '未知分数')
}
getScore(30) // 不及格


//时间格式化
const dateFormatter = (formatter, date) => {
  date = (date ? new Date(date) : new Date)
  const Y = date.getFullYear() + '',
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds()
  return formatter.replace(/YYYY|yyyy/g, Y)
    .replace(/YY|yy/g, Y.substr(2, 2))
    .replace(/MM/g, (M < 10 ? '0' : '') + M)
    .replace(/DD/g, (D < 10 ? '0' : '') + D)
    .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
    .replace(/mm/g, (m < 10 ? '0' : '') + m)
    .replace(/ss/g, (s < 10 ? '0' : '') + s)
}

dateFormatter('YYYY-MM-DD HH:mm', '1995/02/15 13:55') // 1995-02-15 13:55






























































































微信扫一扫
关注该公众号












































const map = new Map()
// 添加属性
map.set('name', 'paul')
map.set('age','23')
// 获取属性
const n = map.get('name')
console.log(n) // paul
// 删除属性
map.delete('name')
// 获取所有捡
map.keys()
// 获取所有值
map.values()
map.set('name','tom')
// 遍历
for(let item of map){
    console.log(item)
}
map.forEach((v,i)=>{
    console.log(v,i)
})
for(const [key, value] of map){
    console.log(key, value)
}
// age 23
// name tom
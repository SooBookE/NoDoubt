const data = require('./data/hobby_202210.json')
// let sexdstn_flag_cd,agrde_flag_nm, wt3m_expr_lsr_cltur_value
let arr = []
for(const da of data){
    let {sexdstn_flag_cd:gen,agrde_flag_nm:age, wt3m_expr_lsr_cltur_value:clt}=da
    arr.push({gen, age, clt})
}
console.log(arr)

// console.log(data)
// let arr = []
// data.forEach(v=>arr.push(v.wt3m_expr_lsr_cltur_value))

// let arrr = []
// // console.log(arr.forEach(v=>v.split(',')))
// for(const ar of arr){
//     arrr.push(ar.split(','))
// }
// // console.log(arrr)
// arrr=arrr.map(v=>v[0])
// // arrr.forEach(v=>console.log(v))
// arrr=arrr.filter((v,i)=>i===arrr.indexOf(v))

// console.log(arrr)
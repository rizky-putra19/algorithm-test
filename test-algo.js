function cekStr(str1, str2) {
    let strJoin = str1.concat(str2)
    let result = []
    
    for (let i=0; i < str1.length;i++) {
        for (let j=0; j < str1.length; j++) {
            if (str1[i] == str2[j]) {
                result.push(str1[i])
            }
        }
    }
    
    
    if (strJoin.length-1 == result.length) {
        return true
    } else {
        return false
    }
}

const str1 = "aaz"
const str2 = "zza"

console.log(cekStr(str1, str2))
console.log(123)

const str = `
010-1234-5678
thesecon@naver.com
The quick brown fox jumps over the lazy dog
aabbcccdddd
`

// const regexp = new RegExp('the', 'gi')
const regexp = /the/
// console.log(str.match(regexp))
console.log(regexp.test(str))
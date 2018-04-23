//students 按分数的高低从大到小排列
var students = ['小明','小红','小花'];
var scores = { 小明: 59, 小红: 99, 小花: 80 };
students.sort( function(x,y){
  return scores[y]-scores[x];
})

//获取所有偶数,得到所有偶数的平方
var a = [1,2,3,4,5,6,7,8,9]
a.filter(function(value,key){return value%2===0}).map(value=>value*value) // [4,16,36,64]

//计算所有奇数的和
var a = [1,2,3,4,5,6,7,8,9]
a.reduce(function(sum,n){
  if(n % 2 !== 0){
    sum=sum+n;
  }
    return sum;
  },0)
function armstrong(){
    let num=Number(document.getElementById('s1').value)
    let sum=0
    let temp=num
    let str=num.toString()
    let len=str.length
    while(temp>0){
        digit=temp%10
        sum+=digit**len
        temp=Math.floor(temp/10)
    }
    if(num===sum){
        document.getElementById('arm').innerHTML=(`${num} is a armstrong number`)
    }
    else{
        document.getElementById('arm').innerHTML=(`${num} is a not armstrong number`)
    }
}
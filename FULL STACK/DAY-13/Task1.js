f=["apple","orange","jackfruit","banana","dates"];
console.log(f[2]);

f.push("grapes");
f.shift();
console.log(f.length);

for(let i=0;i<f.length;i++)
{
    console.log(f[i]);
}

f.reverse()
console.log(f)

num=[1,2,3,4,5];
let sm=0;

for(let i=0;i<5;i++)
{
     sm+=num[i];   
}

console.log(sm)
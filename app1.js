let caunoi1={
    noidung: "Do right. Do your best. Treat others as you want to be treated.",
    tacgia: "Lou Holtz"
}
let caunoi2={
    noidung: "Just do the best you can. No one can do more than that.",
    tacgia: "John Wooden"
}
let caunoi3={
    noidung: "Things turn out best for the people who make the best of the way things turn out.",
    tacgia: "John Wooden"
}
let caunoi4={
    noidung: "I am as bad as the worst, but, thank God, I am as good as the best.",
    tacgia: "Walt Whitman"
}
let caunoi5={
    noidung: "I do the very best I know how - the very best I can; and I mean to keep on doing so until the end.",
    tacgia: "Abraham Lincoln"
}
let caunoi6={
    noidung: "I have the simplest tastes. I am always satisfied with the best.",
    tacgia: "Oscar Wilde"
}
let caunoi7={
    noidung: "If a man does his best, what else is there?",
    tacgia: "George S. Patton"
}
let caunoi8={
    noidung: "I'm selfish, impatient, and a little insecure. I make mistakes, I'm out of control, and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    tacgia: "Marilyn Monroe"
}
let caunoi9={
    noidung: "The best way to find yourself is to lose yourself in the service of others.",
    tacgia: "Mahatma Gandhi"
}
let caunoi10={
    noidung: "In any moment of decision, the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is nothing.",
    tacgia: "Theodore Roosevelt"
}
    let caccaunoi=[
    caunoi1,
    caunoi2,
    caunoi3,
    caunoi4,
    caunoi5,
    caunoi6,
    caunoi7,
    caunoi8,
    caunoi9,
    caunoi10
]
console.log(caccaunoi);

let para = document.getElementById("caunoicaunoi");
let author = document.getElementById("nguoinoi");

para.textContent=caunoi1.noidung;
author.textContent=caunoi1.tacgia;

let i=1;
khoidonglai.addEventListener("click",function(){
    para.textContent=caccaunoi[i].noidung; 
    author.textContent=caccaunoi[i].tacgia;
    i+=1;
    if(i===caccaunoi.length)
    {
        i=0;
    }
})







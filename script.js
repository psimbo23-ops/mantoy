const text = `Hi?

First thing first Happy happy birthday, to the person who I once called mine.

Although we don't talk, I wish and pray you achieve everything you hope for.

Despite our past I want you to know I will keep my promise. I will continue to support you even if not necessary and cheer silently.

I don't really know where we stand now, but I do know one thing—you were once someone very important in my life. Until this day you are still very important in my life, and that feeling will never disappear just like that.

I hope today you feel appreciated, loved, and at peace, even if that peace doesn't come from me anymore.

Thank you for all the memories we shared and know I will treasure them forever.

I can't bring myself to deliver this message to you personally out of respect.

Nakng sad pud.

Even though we went our separate ways, I hope you know how much you meant to me.

Dri nalang siguro taman kay murag hurot na akong luha. HAHAHAHAHAHA.

Sorry if ma-late nako ni og hatag sa imoha. Unta dawaton gihapon nimo.

Once again,

Happy Birthday. 🫶`;

let i = 0;

function typeWriter(){
    if(i < text.length){
        document.getElementById("message").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,20);
    }
}

window.onload = typeWriter;

// Floating Hearts

function createHeart(){

    const heart = document.createElement("span");

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100+"vw";
    heart.style.fontSize = (15+Math.random()*25)+"px";
    heart.style.animationDuration = (5+Math.random()*5)+"s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

}

setInterval(createHeart,300);
cards = [
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJ4Gv_mlzLn-cr8haAXGZk9bCsogMmrhdd4UqbUxprzr3ztK6EnJF8m0fhAsZ9L_0kWM&usqp=CAU",
        value:1,
        status:"closed"
    },

    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJ4Gv_mlzLn-cr8haAXGZk9bCsogMmrhdd4UqbUxprzr3ztK6EnJF8m0fhAsZ9L_0kWM&usqp=CAU",
        value:1,
        status:"closed"
    },

    {
        image:"https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png",
        value:2,
        status:"closed"
    },

    {
        image:"https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png",
        value:2,
        status:"closed"
    },

    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGsRsajcZ_utm2_HdQIWgfV9UjAJNZHQWnr6O3_bIHWq1ijrv1LifPImoXKWxCBKrqycg&usqp=CAU",
        value:3,
        status:"closed"
    },

    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGsRsajcZ_utm2_HdQIWgfV9UjAJNZHQWnr6O3_bIHWq1ijrv1LifPImoXKWxCBKrqycg&usqp=CAU",
        value:3,
        status:"closed"
    },

    {
        image:"https://www.pngitem.com/pimgs/m/161-1619290_nobita-and-shizuka-png-transparent-png.png",
        value:4,
        status:"closed"
    },

    {
        image:"https://www.pngitem.com/pimgs/m/161-1619290_nobita-and-shizuka-png-transparent-png.png",
        value:4,
        status:"closed"
    },

]


 let cardCopy = "cards"


 //------shuffling-------

 let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}



function displayCards(data){

    let cardsString="";

    

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });


    document.getElementById('cards').innerHTML=cardsString;

}


displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // reste after one guess 
            val1=null;
            val2=null;
            cardCount=1;

        }
        else{

            alert("game over");
            location.reload();

        }

        
    }

    displayCards(cards);

}
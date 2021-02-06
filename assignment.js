//kilometerToMeter
function kilometerToMeter(kilometer) {
    if (kilometer > 0 ) {
        Meter=kilometer*1000;
        return Meter;
    }
    else{
        Meter="Distance cannot be negative"
        return Meter;
    }
}
// var hop =kilometerToMeter(-20);
// console.log(hop);
// budgetCalculator
function budgetCalculator(watch, phone, laptop){
    if(watch,phone,laptop>0){
        var watch =watch*50;
        var phone = phone*100;
        var laptop=laptop*500;
        totalcost= watch+phone+laptop;
        return totalcost;
    }
    else{
        totalcost="Item cannot be negative"
        return totalcost;
    }
}
// var hop = budgetCalculator(-2,-4,-1);
// console.log(hop);
//hotelCost
function hotelCost(days){
    if(days<=0){
        var cost = "Day cannot be negative";
    }
    else if(days<=10){
        var cost = days*100; 
    }
    else if(days<=20){
        var cost1 =10*100;
        var costt = days-10;
        var cost2 = costt*80;
        cost = cost1+cost2;   
    }
    else{
        var costtt = 10*100;
        var costttt = 10*80;
        var cost3 = days-20;
        var cost4 = cost3*50;
        cost = costtt+costttt+cost4;
    }
    return cost;
}
// var hop =hotelCost(40);
// console.log(hop);
function megaFriend(friend) {

    var longestName = friend[0];

    for (var i = 0; i < friend.length; i++) {
        if (longestName.length < friend[i].length) {
            longestName = friend[i];
        }
    }
    return longestName;
}
// var hop = megaFriend(["Kalam","rohimm","rupommm","sakibkhan","sakibkhan"]);
// console.log(hop);
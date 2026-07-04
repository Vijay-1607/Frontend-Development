function generateNumber()
{
    let luckyNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("number").innerHTML =
    luckyNumber;
}
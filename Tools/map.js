//Create a ctx canvas. 
//Have predetermined lines for each road. 
//Click on a road and it will draw a line to that point and take the easiest route to travel along roads.



class coord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const mapCanvas = document.getElementById("mapCanvas");
const mapImg = document.getElementById("mapImg");
if(mapImg){
    mapCanvas.height = mapImg.height;
    mapCanvas.width = mapImg.width;
}


const destinations = [
    {Name: "Askmadael", Coord: new coord(mapImg.clientWidth * 0.8005, mapImg.clientHeight * 0.355)}, 
    {Name: "Vaelro", Coord: new coord(mapImg.clientWidth * 0.747, mapImg.clientHeight * 0.358)},
    {Name: "Grey Hills", Coord: new coord(mapImg.clientWidth * 0.777, mapImg.clientHeight * 0.48)},
    {Name: "Ikros", Coord: new coord(mapImg.clientWidth * 0.792, mapImg.clientHeight * 0.646)}
]

MapDestination(destinations[0], destinations[3]);
function MapDestination(currentDestination, finalDestination){

    var start = currentDestination.Coord;
    var end = finalDestination.Coord;

    let closestDestination = {Name: "None", Coord: new coord(0,0)};
    var closestResult;
    let destinationList = destinations;
    var targetIndex = destinationList.indexOf(destinationList.find(d => d.Name == currentDestination.Name));

    console.log(targetIndex);
    
    if (targetIndex > -1) { // only splice array when item is found
        destinationList.splice(targetIndex, 1); // 2nd parameter means remove one item only
      }
    destinationList.forEach(dest => {
        
        var result = Math.sqrt(Math.pow((dest.Coord.x - start.x), 2) + Math.pow((dest.Coord.y - start.y), 2));
        console.log("The result is: " + result);
        console.log(`The closest city is: ${closestDestination.Name} and has a distance of: ${closestResult}`);
        if(closestDestination.Name == "None"){
            closestResult = result;
            closestDestination.Name = dest.Name;
            closestDestination.Coord = dest.Coord;
        }
        if(result < closestResult){
            closestResult = result;
            closestDestination.Name = dest.Name;
            closestDestination.Coord = dest.Coord;
        }
    });

    console.log("The closest destination is: " + closestDestination.Name);


    // while(start.x != end.x || start.y != end.y){
    //     GetDestination(start, direction);
    // }
}


// function d(point) {
//     return Math.pow(point.x, 2) + Math.pow(point.y, 2);
//   }
  


// function GetDestination(position, direction){

    

//     var closest = points.slice(1).reduce(function(min, p) {
//         if (d(p.Coord) < min.d) min.point = p;
//         return min;
//       }, {point: points[0], d:d(points[0])}).point;
    
// }


function DrawPath(start, end){
    console.log("Start position: X: " + start.x + " Y: " + start.y);
    console.log("End position: X: " + end.x + " Y: " + end.y);
    //Draw the line.
    var ctx = mapCanvas.getContext("2d");
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);

    ctx.stroke();
}
function findArea() {
    let triangle = [parseInt(document.getElementById("side_a").value),parseInt(document.getElementById("side_b").value),parseInt(document.getElementById("side_c").value),];
    let s = (triangle[0]+triangle[1]+triangle[2])/2;
    let h = triangle[1]/2;
    let equalSide = ((s*(s-triangle[0]))*(s-triangle[1])*(s-triangle[2]));
    let sqr = Math.sqrt(equalSide).toFixed(2);
    let height = sqr/h;
    let area = (triangle[1]*height)/2;
    document.getElementById("answer").innerHTML = area.toFixed(2) 
}
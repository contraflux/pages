const filterMath = document.getElementById('filter-math');
const filterPhysics = document.getElementById('filter-physics');

let selectedMath = false;
let selectedPhysics = false;

filterMath.addEventListener('click', () => {
    selectedMath = !selectedMath;
    if (selectedMath) {
        filterMath.style.backgroundColor = "rgb(190, 200, 220)";  
        filterMath.style.color = "rgb(22, 22, 28)";  

        selectedPhysics = false;
        filterPhysics.style.backgroundColor = "rgb(22, 22, 28)";
        filterPhysics.style.color = "rgb(190, 200, 220)"; 
    } else {
        filterMath.style.backgroundColor = "rgb(22, 22, 28)";
        filterMath.style.color = "rgb(190, 200, 220)"; 
    }
});

filterPhysics.addEventListener('click', () => {
    selectedPhysics = !selectedPhysics;
    if (selectedPhysics) {
        filterPhysics.style.backgroundColor = "rgb(190, 200, 220)";  
        filterPhysics.style.color = "rgb(22, 22, 28)";  

        selectedMath = false;
        filterMath.style.backgroundColor = "rgb(22, 22, 28)";
        filterMath.style.color = "rgb(190, 200, 220)"; 
    } else {
        filterPhysics.style.backgroundColor = "rgb(22, 22, 28)";
        filterPhysics.style.color = "rgb(190, 200, 220)"; 
    }
});
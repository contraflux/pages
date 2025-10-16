const filterMSFS = document.getElementById('filter-msfs');
const filterDCS = document.getElementById('filter-dcs');
const filterScenery = document.getElementById('filter-scenery');
const filterLivery = document.getElementById('filter-livery');
const filterC182T = document.getElementById('filter-c182t');
const filterOH58D = document.getElementById('filter-oh58d');
const filterAH64D = document.getElementById('filter-ah64d');
const filterUH60L = document.getElementById('filter-uh60l');

let selectedMSFS = false;
let selectedDCS = false;
let selectedScenery = false;
let selectedLivery = false;
let selectedC182T = false;
let selectedOH58D = false;
let selectedAH64D = false;
let selectedUH60L = false;

filterMSFS.addEventListener('click', () => {
    selectedMSFS = !selectedMSFS;
    if (selectedMSFS) {
        filterMSFS.style.backgroundColor = "rgb(190, 200, 220)";  
        filterMSFS.style.color = "rgb(22, 22, 28)";  

        selectedDCS = false;
        filterDCS.style.backgroundColor = "rgb(22, 22, 28)";
        filterDCS.style.color = "rgb(190, 200, 220)"; 
    } else {
        filterMSFS.style.backgroundColor = "rgb(22, 22, 28)";
        filterMSFS.style.color = "rgb(190, 200, 220)"; 
    }
});

filterDCS.addEventListener('click', () => {
    selectedDCS = !selectedDCS;
    if (selectedDCS) {
        filterDCS.style.backgroundColor = "rgb(190, 200, 220)";  
        filterDCS.style.color = "rgb(22, 22, 28)";

        selectedMSFS = false;
        filterMSFS.style.backgroundColor = "rgb(22, 22, 28)";
        filterMSFS.style.color = "rgb(190, 200, 220)"; 
    } else {
        filterDCS.style.backgroundColor = "rgb(22, 22, 28)";
        filterDCS.style.color = "rgb(190, 200, 220)"; 
    }
});

filterScenery.addEventListener('click', () => {
    selectedScenery = !selectedScenery;
    if (selectedScenery) {
        filterScenery.style.backgroundColor = "rgb(190, 200, 220)";  
        filterScenery.style.color = "rgb(22, 22, 28)";

        selectedLivery = false;
        filterLivery.style.backgroundColor = "rgb(22, 22, 28)";
        filterLivery.style.color = "rgb(190, 200, 220)";
    } else {
        filterScenery.style.backgroundColor = "rgb(22, 22, 28)";
        filterScenery.style.color = "rgb(190, 200, 220)"; 
    }
});

filterLivery.addEventListener('click', () => {
    selectedLivery = !selectedLivery;
    if (selectedLivery) {
        filterLivery.style.backgroundColor = "rgb(190, 200, 220)";  
        filterLivery.style.color = "rgb(22, 22, 28)";

        selectedScenery = false;
        filterScenery.style.backgroundColor = "rgb(22, 22, 28)";
        filterScenery.style.color = "rgb(190, 200, 220)"; 
    } else {
        filterLivery.style.backgroundColor = "rgb(22, 22, 28)";
        filterLivery.style.color = "rgb(190, 200, 220)"; 
    }
});

filterC182T.addEventListener('click', () => {
    selectedC182T = !selectedC182T;
    if (selectedC182T) {
        filterC182T.style.backgroundColor = "rgb(190, 200, 220)";  
        filterC182T.style.color = "rgb(22, 22, 28)";

        selectedOH58D = false;
        filterOH58D.style.backgroundColor = "rgb(22, 22, 28)";
        filterOH58D.style.color = "rgb(190, 200, 220)"; 
        selectedAH64D = false;
        filterAH64D.style.backgroundColor = "rgb(22, 22, 28)";
        filterAH64D.style.color = "rgb(190, 200, 220)"; 
        selectedUH60L = false;
        filterUH60L.style.backgroundColor = "rgb(22, 22, 28)";
        filterUH60L.style.color = "rgb(190, 200, 220)"; 
    } else {
        filterC182T.style.backgroundColor = "rgb(22, 22, 28)";
        filterC182T.style.color = "rgb(190, 200, 220)"; 
    }
});

filterOH58D.addEventListener('click', () => {
    selectedOH58D = !selectedOH58D;
    if (selectedOH58D) {
        filterOH58D.style.backgroundColor = "rgb(190, 200, 220)";  
        filterOH58D.style.color = "rgb(22, 22, 28)";

        selectedC182T = false;
        filterC182T.style.backgroundColor = "rgb(22, 22, 28)";
        filterC182T.style.color = "rgb(190, 200, 220)"; 
        selectedAH64D = false;
        filterAH64D.style.backgroundColor = "rgb(22, 22, 28)";
        filterAH64D.style.color = "rgb(190, 200, 220)"; 
        selectedUH60L = false;
        filterUH60L.style.backgroundColor = "rgb(22, 22, 28)";
        filterUH60L.style.color = "rgb(190, 200, 220)"; 
    } else {
        filterOH58D.style.backgroundColor = "rgb(22, 22, 28)";
        filterOH58D.style.color = "rgb(190, 200, 220)"; 
    }
});

filterAH64D.addEventListener('click', () => {
    selectedAH64D = !selectedAH64D;
    if (selectedAH64D) {
        filterAH64D.style.backgroundColor = "rgb(190, 200, 220)";  
        filterAH64D.style.color = "rgb(22, 22, 28)";

        selectedC182T = false;
        filterC182T.style.backgroundColor = "rgb(22, 22, 28)";
        filterC182T.style.color = "rgb(190, 200, 220)"; 
        selectedOH58D = false;
        filterOH58D.style.backgroundColor = "rgb(22, 22, 28)";
        filterOH58D.style.color = "rgb(190, 200, 220)"; 
        selectedUH60L = false;
        filterUH60L.style.backgroundColor = "rgb(22, 22, 28)";
        filterUH60L.style.color = "rgb(190, 200, 220)"; 
    } else {
        filterAH64D.style.backgroundColor = "rgb(22, 22, 28)";
        filterAH64D.style.color = "rgb(190, 200, 220)"; 
    }
});

filterUH60L.addEventListener('click', () => {
    selectedUH60L = !selectedUH60L;
    if (selectedUH60L) {
        filterUH60L.style.backgroundColor = "rgb(190, 200, 220)";  
        filterUH60L.style.color = "rgb(22, 22, 28)";

        selectedC182T = false;
        filterC182T.style.backgroundColor = "rgb(22, 22, 28)";
        filterC182T.style.color = "rgb(190, 200, 220)"; 
        selectedOH58D = false;
        filterOH58D.style.backgroundColor = "rgb(22, 22, 28)";
        filterOH58D.style.color = "rgb(190, 200, 220)"; 
        selectedAH64D = false;
        filterAH64D.style.backgroundColor = "rgb(22, 22, 28)";
        filterAH64D.style.color = "rgb(190, 200, 220)"; 
    } else {
        filterUH60L.style.backgroundColor = "rgb(22, 22, 28)";
        filterUH60L.style.color = "rgb(190, 200, 220)"; 
    }
});
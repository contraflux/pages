class Filter {
    constructor(elementId, affectedIds) {
        this.element = document.getElementById(elementId);
        this.state = false;
        this.affectedIds = affectedIds;
        this.dependencies = [];
        this.element.addEventListener('click', () => this.switchState());
    }

    switchState() {
        if (this.state) {
            this.setInactive();
        } else {
            for (const dependentFilter of this.dependencies) {
                dependentFilter.setInactive();
            }
            this.setActive();
        }

        updateStates();
    }

    setActive() {
        this.state = true;
        this.element.style.backgroundColor = "rgb(190, 200, 220)";  
        this.element.style.color = "rgb(22, 22, 28)"; 
    }

    setInactive() {
        this.state = false;
        this.element.style.backgroundColor = "rgb(22, 22, 28)"; 
        this.element.style.color = "rgb(190, 200, 220)";
    }
}

function updateStates() {
    for (const item of all_items) {
        let master = true;
        let show = false;
        let hide = false;

        for (const filter of all_filters) {
            if (filter.state) {
                master = false;
                if (filter.affectedIds.includes(item)) {
                    show = true;
                } else {
                    hide = true;
                }
            }
        }

        if ((!hide && show) || master) {
            document.getElementById(item).className = "project";
        } else {
            document.getElementById(item).className = "project hidden";
        }
    }
}

const math = new Filter('filter-math', ['vector-fields', 'matrices']);
const physics = new Filter('filter-physics', ['vector-fields', 'circuits', 'charges', 'minkowski']);

math.dependencies = [physics];
physics.dependencies = [math];

const all_items = ['vector-fields', 'circuits', 'matrices', 'charges', 'minkowski'];
const all_filters = [math, physics];
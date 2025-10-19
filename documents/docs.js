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
    let all_hidden = true;
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
            document.getElementById(item).className = "document";
            all_hidden = false;
        } else {
            document.getElementById(item).className = "document hidden";
        }
    }

    if (all_hidden) {
        document.getElementById('no-results').style.display = "block";
    } else {
        document.getElementById('no-results').style.display = "none";
    }
}

const math = new Filter('filter-math', ['surface-integrals', 'surface-derivatives']);
const physics = new Filter('filter-physics', ['ampere', 'rlc', 'reference-frames']);

math.dependencies = [physics];
physics.dependencies = [math];

const all_items = ['ampere', 'rlc', 'reference-frames', 'surface-integrals', 'surface-derivatives'];
const all_filters = [math, physics];
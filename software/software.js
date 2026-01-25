class Filter {
    constructor(elementId, allowSetInactive, affectedIds) {
        this.element = document.getElementById(elementId);
        this.state = false;
        this.affectedIds = affectedIds;
        this.dependencies = [];
        this.element.addEventListener('click', () => this.switchState());
        this.allowSetInactive = allowSetInactive;
    }

    switchState() {
        if (!this.state) {
            for (const dependentFilter of this.dependencies) {
                dependentFilter.setInactive();
            }
            this.setActive();
        } else if (this.allowSetInactive) {
            this.setInactive();
        }

        updateStates();
    }

    setActive() {
        this.state = true;
        this.element.style.borderBottomColor = "var(--accent)";
    }

    setInactive() {
        this.state = false;
        this.element.style.borderBottomColor = "";
    }
}

function updateStates() {
    let all_hidden = true;
    for (const item of items) {
        let master = true;
        let show = false;
        let hide = false;

        for (const filter of filters) {
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
            document.getElementById(item).className = "entry";
            all_hidden = false;
        } else {
            document.getElementById(item).className = "entry entry-hidden";
        }
    }
}

const items = ['vector-fields', 'circuits', 'matrices', 'charges', 'relativity', 'electromagnetism', 'fluids'];

const all = new Filter('select-all', false, items)
const math = new Filter('select-math', false, ['vector-fields', 'matrices']);
const physics = new Filter('select-physics', false, ['vector-fields', 'circuits', 'charges', 'relativity', 'electromagnetism', 'fluids']);

all.dependencies = [math, physics];
math.dependencies = [all, physics];
physics.dependencies = [all, math];

const filters = [all, math, physics];

all.setActive();

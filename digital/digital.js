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

const items = ['kayz', 'kjpx', 'ny03', '21n', 'khwv', '7b2', 'kjra', 'n67ad', '2-17-a', '2-17-b', '6-6-c', '1-10', '1-101-b', '1-101-c', '5-101-a', '5-101-c'];

const all = new Filter('select-all', false, items)
const msfs = new Filter('select-msfs', false, ['kayz', 'kjpx', 'ny03', '21n', 'khwv', '7b2', 'kjra', 'n67ad']);
const dcs = new Filter('select-dcs', false, ['2-17-a', '2-17-b', '6-6-c', '1-10', '1-101-b', '1-101-c', '5-101-a', '5-101-c']);

all.dependencies = [msfs, dcs];
msfs.dependencies = [all, dcs];
dcs.dependencies = [all, msfs];

const scenery = new Filter('select-scenery', true, ['kayz', 'kjpx', 'ny03', '21n', 'khwv', '7b2', 'kjra']);
const livery = new Filter('select-livery', true, ['n67ad', '2-17-a', '2-17-b', '6-6-c', '1-10', '1-101-b', '1-101-c', '5-101-a', '5-101-c']);

scenery.dependencies = [livery];
livery.dependencies = [scenery];

const filters = [msfs, dcs, scenery, livery];

all.setActive();

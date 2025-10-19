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
            document.getElementById(item).className = "asset";
            all_hidden = false;
        } else {
            document.getElementById(item).className = "asset hidden";
        }
    }

    if (all_hidden) {
        document.getElementById('no-results').style.display = "block";
    } else {
        document.getElementById('no-results').style.display = "none";
    }
}

const msfs = new Filter('filter-msfs', ['kayz', 'kjpx', 'ny03', '21n', 'khwv', '7b2', 'kjra', 'n67ad']);
const dcs = new Filter('filter-dcs', ['2-17-a', '2-17-b', '6-6-c', '1-10', '1-101-b', '1-101-c', '5-101-a', '5-101-c']);

msfs.dependencies = [dcs];
dcs.dependencies = [msfs];

const scenery = new Filter('filter-scenery', ['kayz', 'kjpx', 'ny03', '21n', 'khwv', '7b2', 'kjra']);
const livery = new Filter('filter-livery', ['n67ad', '2-17-a', '2-17-b', '6-6-c', '1-10', '1-101-b', '1-101-c', '5-101-a', '5-101-c']);

scenery.dependencies = [livery];
livery.dependencies = [scenery];

const c182t = new Filter('filter-c182t', ['n67ad']);
const oh58d = new Filter('filter-oh58d', ['2-17-b']);
const ah64d = new Filter('filter-ah64d', ['2-17-a', '6-6-c', '1-10', '1-101-b', '1-101-c']);
const uh60l = new Filter('filter-uh60l', ['5-101-a', '5-101-c']);

c182t.dependencies = [oh58d, ah64d, uh60l];
oh58d.dependencies = [c182t, ah64d, uh60l];
ah64d.dependencies = [c182t, oh58d, uh60l];
uh60l.dependencies = [c182t, oh58d, ah64d];

const all_items = ['kayz', 'kjpx', 'ny03', '21n', 'khwv', '7b2', 'kjra', 'n67ad', '2-17-a', '2-17-b', '6-6-c', '1-10', '1-101-b', '1-101-c', '5-101-a', '5-101-c'];
const all_filters = [msfs, dcs, scenery, livery, c182t, oh58d, ah64d, uh60l];
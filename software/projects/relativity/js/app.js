/**
 * app
 * 
 * Main script for the app, contains evaluation of user input, calling of draw
 * functions for the scalar fields, vector fields, and charges, periodic function
 * and event listeners
 * 
 * @author contraflux
 * @date 10/10/2025
 */

import { GridContainer} from "./components/Container.js"
import { Vector } from "./components/Vector.js";
import { light } from "./util/utilities.js";
import { drawGrid, drawVector } from "./util/plotting.js"

export const gridContainer = new GridContainer('canvas');

const canvas = gridContainer.canvas;
const ctx = gridContainer.ctx;

const v0Input = document.getElementById('v');
const w0Input = document.getElementById('w');
// const v1Input = document.getElementById('v1');

const gammaDisplay = document.getElementById('gamma');
const eigval1Display = document.getElementById('eigenvalue-1');
const eigval2Display = document.getElementById('eigenvalue-2');
const timeDisplay = document.getElementById('t-prime');
const lengthDisplay = document.getElementById('x-prime');

const primaryOption = document.getElementById('primary-worldline');
const secondaryOption = document.getElementById('secondary-worldline');
const photonOption = document.getElementById('photon-worldlines');
const gridOption = document.getElementById('grid-display');

// Assume the speed of light c = 1

const c = 1;

function appPeriodic() {
    const v0 = parseFloat(v0Input.value);
    const w0 = parseFloat(w0Input.value);
    // const v1 = parseFloat(v1Input.value);

    const gamma = 1 / Math.sqrt( 1 - Math.pow(v0 / c, 2))
    const gamma_2 = 1 / Math.sqrt( 1 - Math.pow(w0 / c, 2))

    gammaDisplay.innerHTML = gamma.toFixed(10);
    timeDisplay.innerHTML = "Δt' = " + gamma.toFixed(5) + " Δt ";
    lengthDisplay.innerHTML = "Δx = " + (1/gamma).toFixed(5) + " Δx'";
    eigval1Display.innerHTML = (gamma * (1 - v0)).toFixed(5);
    eigval2Display.innerHTML = (gamma * (1 + v0)).toFixed(5);

    gridContainer.matrix.a11 = gamma;
    gridContainer.matrix.a12 = -gamma * v0;
    gridContainer.matrix.a21 = -gamma * v0;
    gridContainer.matrix.a22 = gamma;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = light;
    ctx.strokeStyle = light;
    ctx.font = "12px serif";

    const e1 = new Vector(1, 0);
    const e2 = new Vector(0, 1);

    const v0t = new Vector(v0*gamma, 1*gamma);

    const w0t = new Vector(w0*gamma_2, 1*gamma_2);
    const w0t_bar = gridContainer.matrix.multiply(w0t);

    const ct = new Vector(1, 1);
    const nct = new Vector(-1, 1);

    const ct_bar = gridContainer.matrix.getInverse().multiply(ct);
    const nct_bar = gridContainer.matrix.getInverse().multiply(nct);

    const ebar_1 = gridContainer.matrix.getInverse().multiply(e1);
    const ebar_2 = gridContainer.matrix.getInverse().multiply(e2);

    drawGridOption(gridOption, [e1, e2], [ebar_1, ebar_2], "white", "#7c98ff", 0.5, 1);

    drawVectorOption(photonOption, ct, ct_bar, "#7cff98", 3, 1);

    drawVectorOption(photonOption, nct, nct_bar, "#7cff98", 3, 1);

    drawVector(gridContainer, v0t, "#ff987c", 3, true);

    drawVectorOption(secondaryOption, w0t, w0t_bar, "#ff7cff", 3, 1);
}

function drawGridOption(option, initial_basis, final_basis, color_initial, color_final, width_initial, width_final) {
    let initial_time_label = "t";
    let initial_position_label = "x";
    let final_time_label = "t'";
    let final_position_label = "x'";
    if (initial_basis[0].equals(final_basis[0]) && initial_basis[1].equals(final_basis[1])) {
        final_time_label = initial_time_label;
        final_position_label = initial_position_label;
    }
    if (option.value == "first" || option.value == "both") {
        drawGrid(gridContainer, initial_basis[0], initial_basis[1], initial_time_label, initial_position_label, color_initial, width_initial);
    }
    if (option.value == "second" || option.value == "both") {
        drawGrid(gridContainer, final_basis[0], final_basis[1], final_time_label, final_position_label, color_final, width_final);
    }
}

function drawVectorOption(option, initial, final, color, width_initial, width_final) {
    if (option.value == "first" || option.value == "both") {
        drawVector(gridContainer, initial, color, width_initial, true);
    }
    if (option.value == "second" || option.value == "both") {
        drawVector(gridContainer, final, color, width_final, true);
    }
}

canvas.addEventListener('mousedown', (e) => { gridContainer.isDragging = true; });
canvas.addEventListener('mousemove', (e) => gridContainer.dragGrid(e));
canvas.addEventListener('mouseup', () => { gridContainer.isDragging = false; })
canvas.addEventListener('wheel', (e) => gridContainer.zoomGrid(e));

document.addEventListener('keypress', (e) => {
    if (e.key == 'r') {
        gridContainer.resetFields();
        e11_input.value = 1;
        e12_input.value = 0;
        e21_input.value = 0;
        e22_input.value = 1;
    }
});

setInterval(appPeriodic, 10);
"use strict";
let objectiveBtn = document.querySelector('.objectivebtn');
let educationBtn = document.querySelector('.educationbtn');
let skillsBtn = document.querySelector('.skillsbtn');
let expBtn = document.querySelector('.expbtn');
let objectiveSec = document.getElementById('objectiveSec');
let educationSec = document.getElementById('educationSec');
let skillsSec = document.getElementById('skillsSec');
let expSec = document.getElementById('expSec');
objectiveBtn === null || objectiveBtn === void 0 ? void 0 : objectiveBtn.addEventListener('click', () => {
    objectiveSec.style.display = objectiveSec.style.display === 'block' ? 'none' : 'block';
});
educationBtn === null || educationBtn === void 0 ? void 0 : educationBtn.addEventListener('click', () => {
    educationSec.style.display = educationSec.style.display === 'block' ? 'none' : 'block';
});
skillsBtn === null || skillsBtn === void 0 ? void 0 : skillsBtn.addEventListener('click', () => {
    skillsSec.style.display = skillsSec.style.display === 'block' ? 'none' : 'block';
});
expBtn === null || expBtn === void 0 ? void 0 : expBtn.addEventListener('click', () => {
    expSec.style.display = expSec.style.display === 'block' ? 'none' : 'block';
});

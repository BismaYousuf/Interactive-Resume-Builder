"use strict";
let objectiveBtn = document.querySelector('.objectivebtn');
let educationBtn = document.querySelector('.educationbtn');
let skillsBtn = document.querySelector('.skillsbtn');
let expBtn = document.querySelector('.expbtn');
let objectiveSec = document.getElementById('objectiveSec');
let educationSec = document.getElementById('educationSec');
let skillsSec = document.getElementById('skillsSec');
let expSec = document.getElementById('expSec');
objectiveBtn?.addEventListener('click', () => {
    objectiveSec.style.display = objectiveSec.style.display === 'block' ? 'none' : 'block';
});
educationBtn?.addEventListener('click', () => {
    educationSec.style.display = educationSec.style.display === 'block' ? 'none' : 'block';
});
skillsBtn?.addEventListener('click', () => {
    skillsSec.style.display = skillsSec.style.display === 'block' ? 'none' : 'block';
});
expBtn?.addEventListener('click', () => {
    expSec.style.display = expSec.style.display === 'block' ? 'none' : 'block';
});

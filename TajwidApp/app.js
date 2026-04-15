/* ================= THE CONDUCTOR (app.js) ================= */

// 1. Import everything we need from our other files
import { 
    toggleTheme, 
    switchTab, 
    toggleAccordion, 
    highlightZone, 
    resetZones 
} from './ui.js';

import { playAudio } from './audio.js';

import { 
    renderQuiz, 
    submitQuiz, 
    initRuleBuilder 
} from './logic.js';

// 2. EXPOSE TO HTML
// We must attach these to the 'window' object so your HTML buttons 
// like onclick="switchTab('intro')" can find them.
window.toggleTheme = toggleTheme;
window.switchTab = switchTab;
window.toggleAccordion = toggleAccordion;
window.highlightZone = highlightZone;
window.resetZones = resetZones;
window.playAudio = playAudio;
window.submitQuiz = submitQuiz;

// Simple reset function for the quiz
window.resetQuiz = () => {
    document.getElementById('quiz-results').classList.add('hidden');
    renderQuiz();
};

// 3. START THE APP
// This runs as soon as the page finishes loading
document.addEventListener('DOMContentLoaded', () => {
    console.log("Tajwid App Initialized!");
    
    // Set up the Quiz
    renderQuiz();
    
    // Set up the Arabic Keyboard
    initRuleBuilder();
    
    // (Optional) You can add logic to initialize the 33 Noon Qutni table here too
});
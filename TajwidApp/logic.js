import { quizData, arabicLetters, qutniData } from './data.js';

/* ================= QUIZ ENGINE ================= */

export function renderQuiz() {
    const formEl = document.getElementById('quiz-form');
    if (!formEl) return;
    
    formEl.innerHTML = '';
    quizData.forEach((q, qIndex) => {
        const qBlock = document.createElement('div');
        qBlock.className = 'mb-8 question-block';
        qBlock.dataset.id = q.id;

        let titleHtml = `<h3 class="text-lg font-semibold mb-4"><span><span class="text-brand-500 mr-2">${qIndex + 1}.</span> ${q.question}</span>`;
        
        if (q.audioVerse) {
            titleHtml += ` <button type="button" onclick="playAudio(this, 'https://everyayah.com/data/Alafasy_128kbps/${q.audioVerse}.mp3')" class="play-btn inline-flex items-center justify-center w-8 h-8 bg-brand-500 text-white rounded-full shadow-md ml-2"><svg class="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/></svg></button>`;
        }
        titleHtml += `</h3>`;
        
        qBlock.innerHTML = titleHtml;

        const optionsWrapper = document.createElement('div');
        optionsWrapper.className = 'space-y-3';

        q.options.forEach((opt, optIndex) => {
            optionsWrapper.innerHTML += `
                <label class="flex items-center p-3 rounded border border-gray-200 dark:border-slate-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors option-label">
                    <input type="radio" name="q${q.id}" value="${optIndex}" class="mr-3" required>
                    <span class="text-gray-700 dark:text-gray-300 font-medium">${opt}</span>
                </label>`;
        });

        qBlock.appendChild(optionsWrapper);
        qBlock.innerHTML += `<p class="mt-3 text-sm hidden font-semibold feedback-text"></p>`;
        formEl.appendChild(qBlock);
    });

    formEl.innerHTML += `<button type="submit" class="w-full md:w-auto bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors">Submit Answers</button>`;
}

export function submitQuiz(e) {
    e.preventDefault();
    const formEl = document.getElementById('quiz-form');
    const formData = new FormData(formEl);
    let score = 0;

    quizData.forEach((q) => {
        const selectedVal = parseInt(formData.get(`q${q.id}`));
        const qBlock = document.querySelector(`.question-block[data-id="${q.id}"]`);
        const labels = qBlock.querySelectorAll('.option-label');
        const feedback = qBlock.querySelector('.feedback-text');

        qBlock.querySelectorAll('input').forEach(i => i.disabled = true);

        labels.forEach((lbl, idx) => {
            if (idx === q.answer) {
                lbl.classList.add('bg-emerald-50', 'dark:bg-emerald-900/30', 'border-emerald-500');
            } else if (idx === selectedVal) {
                lbl.classList.add('bg-red-50', 'dark:bg-red-900/30', 'border-red-500');
            }
        });

        feedback.classList.remove('hidden');
        if (selectedVal === q.answer) {
            score++;
            feedback.innerText = "✓ Correct!";
            feedback.className = "mt-3 text-sm font-semibold text-emerald-600";
        } else {
            feedback.innerText = "✗ Incorrect.";
            feedback.className = "mt-3 text-sm font-semibold text-red-600";
        }
    });

    document.getElementById('quiz-results').classList.remove('hidden');
    document.getElementById('score-text').innerText = `You scored ${score} out of ${quizData.length}.`;
}

/* ================= RULE BUILDER ENGINE ================= */

export function initRuleBuilder() {
    const keyboard = document.getElementById('arabic-keyboard');
    if (!keyboard) return;
    
    keyboard.innerHTML = '';
    arabicLetters.forEach(letter => {
        const btn = document.createElement('button');
        btn.className = 'arabic-key bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-800 dark:text-white text-xl font-arabic py-2 rounded-lg cursor-pointer flex items-center justify-center';
        btn.innerText = letter;
        btn.onclick = () => calculateRule(letter, btn);
        keyboard.appendChild(btn);
    });
}

function calculateRule(letter, btnElement) {
    document.querySelectorAll('.arabic-key').forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');

    const rules = {
        izhar: { letters: ['ء','ه','ع','ح','غ','خ'], name: 'Izhar (Clear)' },
        idghamGhunnah: { letters: ['ي','ن','م','و'], name: 'Idgham w/ Ghunnah' },
        idghamNoGhunnah: { letters: ['ل','ر'], name: 'Idgham w/o Ghunnah' },
        iqlab: { letters: ['ب'], name: 'Iqlab (Conversion)' }
    };

    let found = Object.values(rules).find(r => r.letters.includes(letter)) || { name: 'Ikhfa (Concealment)' };
    
    document.getElementById('rule-badge').innerText = found.name;
    document.getElementById('rule-badge').classList.remove('hidden');
    document.getElementById('rule-equation').innerText = `نْ + ${letter}`;
}
// 1. The Arabic Alphabet for the Rule Builder
export const arabicLetters = ['ء','ب','ت','ث','ج','ح','خ','د','ذ','ر','ز','س','ش','ص','ض','ط','ظ','ع','غ','ف','ق','ك','ل','م','ن','ه','و','ي'];

// 2. The 33 Noon Qutni Instances
export const qutniData = [
    { id: 1, name: "Al-Baqarah", no: 2, verse: 180 },
    { id: 2, name: "Al-A'raf", no: 7, verse: 8 },
    { id: 3, name: "Al-A'raf", no: 7, verse: 158 },
    { id: 4, name: "Al-A'raf", no: 7, verse: 164 },
    { id: 5, name: "Al-A'raf", no: 7, verse: 177 },
    { id: 6, name: "At-Tawbah", no: 9, verse: 24 },
    { id: 7, name: "At-Tawbah", no: 9, verse: 120 },
    { id: 8, name: "Hud", no: 11, verse: 42 },
    { id: 9, name: "Ibraheem", no: 14, verse: 18 },
    { id: 10, name: "Ibraheem", no: 14, verse: 26 },
    { id: 11, name: "Al-Hijr", no: 15, verse: 61 },
    { id: 12, name: "An-Nahl", no: 16, verse: 60 },
    { id: 13, name: "Al-Kahf", no: 18, verse: 11 },
    { id: 14, name: "Al-Kahf", no: 18, verse: 88 },
    { id: 15, name: "Maryam", no: 19, verse: 7 },
    { id: 16, name: "Maryam", no: 19, verse: 61 },
    { id: 17, name: "Al-Hajj", no: 22, verse: 11 },
    { id: 18, name: "Al-Hajj", no: 22, verse: 25 },
    { id: 19, name: "Al-Muminoon", no: 23, verse: 38 },
    { id: 20, name: "Al-Furqan", no: 25, verse: 4 },
    { id: 21, name: "Al-Furqan", no: 25, verse: 37 },
    { id: 22, name: "Ash-Shu'ara", no: 26, verse: 123 },
    { id: 23, name: "Ash-Shu'ara", no: 26, verse: 141 },
    { id: 24, name: "Ash-Shu'ara", no: 26, verse: 160 },
    { id: 25, name: "Saba", no: 34, verse: 31 },
    { id: 26, name: "As-Saaffaat", no: 37, verse: 30 },
    { id: 27, name: "Ghaafir", no: 40, verse: 8 },
    { id: 28, name: "Al-Jaathiyah", no: 45, verse: 9 },
    { id: 29, name: "An-Najm", no: 53, verse: 50 },
    { id: 30, name: "Al-Hadeed", no: 57, verse: 16 },
    { id: 31, name: "Al-Jumu'ah", no: 62, verse: 11 },
    { id: 32, name: "Al-Qiyamah", no: 75, verse: 12 },
    { id: 33, name: "Al-Qiyamah", no: 75, verse: 30 }
];

// 3. Quiz Data
export const quizData = [
    {
        id: 1,
        question: "Which anatomical region (Makhraj) is responsible for producing the three long vowel sounds (Madd letters)?",
        options: ["Al-Halq (The Throat)", "Al-Lisan (The Tongue)", "Al-Jawf (The Oral/Throat Cavity)", "Al-Khaishum (The Nasal Passage)"],
        answer: 2
    },
    {
        id: 2,
        question: "When the letter Ba (ب) carries a Sukoon, which intrinsic phonetic characteristic (Sifah) causes a bouncing/echoing sound?",
        options: ["Safir (Whistling)", "Takrir (Trilling)", "Tafashshi (Spreading)", "Qalqalah (Echoing)"],
        answer: 3
    },
    {
        id: 3,
        question: "What rule is triggered when a Noon Sakinah is immediately followed by the letter Ba (ب)?",
        options: ["Iqlab (Conversion to hidden Meem)", "Ikhfa (Concealment)", "Idgham (Merging)", "Izhar (Clear Pronunciation)"],
        answer: 0
    },
    {
        id: 4,
        question: "In the Hafs transmission, what is the mandatory elongation duration for Madd Lazim (Compulsory Elongation)?",
        options: ["2 beats", "4 beats", "5 beats", "Exactly 6 beats"],
        answer: 3
    },
    {
        id: 5,
        question: "What is the function of the Sifr Mustateel (the oval/standing zero) in the Uthmani script?",
        options: ["The letter is never pronounced.", "The letter is pronounced ONLY when stopping.", "It indicates a mandatory pause.", "It signals the merging of two consonants."],
        answer: 1
    }
];
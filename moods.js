/* ============================================
MEMBER 3: MOOD FUNCTIONALITY
Team Member: [by hayat]
Task: Interactive mood selection with Quranic verses
============================================ */

// Enhanced mood data with Quranic verses
const moodData = [
    {
        id: "sad", mood: "sad", icon: "😔", label: "Sad",
        arabic: "لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا",
        translation: "Do not be sad; indeed Allah is with us.",
        reference: "At-Tawbah 9:40"
    },
    {
        id: "stressed", mood: "stressed", icon: "😰", label: "Stressed",
        arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
        translation: "Indeed, with hardship comes ease.",
        reference: "Ash-Sharh 94:6"
    },
    {
        id: "anxious", mood: "anxious", icon: "😥", label: "Anxious",
        arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
        translation: "Surely in the remembrance of Allah do hearts find rest.",
        reference: "Ar-Ra'd 13:28"
    },
    {
        id: "worried", mood: "worried", icon: "😟", label: "Worried",
        arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
        translation: "Whoever relies upon Allah  He is sufficient for them.",
        reference: "At-Talaq 65:3"
    },
    {
        id: "overwhelmed", mood: "overwhelmed", icon: "😵", label: "Overwhelmed",
        arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
        translation: "Allah does not burden a soul beyond what it can bear.",
        reference: "Al-Baqarah 2:286"
    },
    {
        id: "patient", mood: "patient", icon: "⏳", label: "Need Patience",
        arabic: "وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ",
        translation: "Be patient, and your patience is only through Allah.",
        reference: "An-Nahl 16:127"
    },
    {
        id: "grateful", mood: "grateful", icon: "🙏", label: "Grateful",
        arabic: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",
        translation: "And proclaim the blessings of your Lord.",
        reference: "Ad-Duha 93:11"
    },
    {
        id: "thankful", mood: "thankful", icon: "😊", label: "Thankful",
        arabic: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
        translation: "If you are grateful, I will surely increase you.",
        reference: "Ibrahim 14:7"
    },
    {
        id: "forgiveness", mood: "forgiveness", icon: "🤲", label: "Seeking Forgiveness",
        arabic: "إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا",
        translation: "Indeed, Allah forgives all sins.",
        reference: "Az-Zumar 39:53"
    },
    {
        id: "repentance", mood: "repentance", icon: "🕋", label: "Repentance",
        arabic: "وَاسْتَغْفِرُوا رَبَّكُمْ ثُمَّ تُوبُوا إِلَيْهِ",
        translation: "Seek your Lord's forgiveness, then turn to Him in repentance.",
        reference: "Hud 11:52"
    },
    {
        id: "abandoned", mood: "abandoned", icon: "😞", label: "Feeling Alone",
        arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَى",
        translation: "Your Lord has not abandoned you, nor hated you.",
        reference: "Ad-Duha 93:3"
    },
    {
        id: "supported", mood: "supported", icon: "🤝", label: "Need Support",
        arabic: "إِنِّي مَعَكُمَا أَسْمَعُ وَأَرَى",
        translation: "I am with you both; I hear and I see.",
        reference: "Ta-Ha 20:46"
    },
    {
        id: "angry", mood: "angry", icon: "😠", label: "Angry",
        arabic: "وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ",
        translation: "Those who control their anger and forgive people.",
        reference: "Aal-Imran 3:134"
    },
    {
        id: "conflict", mood: "conflict", icon: "⚔️", label: "In Conflict",
        arabic: "ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ",
        translation: "Respond with what is better.",
        reference: "Fussilat 41:34"
    },
    {
        id: "guidance", mood: "guidance", icon: "🧭", label: "Need Guidance",
        arabic: "وَمَن يَهْدِ اللَّهُ فَمَا لَهُ مِن مُّضِلٍّ",
        translation: "Whoever Allah guides, none can mislead.",
        reference: "Az-Zumar 39:37"
    },
    {
        id: "hopeful", mood: "hopeful", icon: "🌟", label: "Hopeful",
        arabic: "وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ",
        translation: "Perhaps you dislike something that is good for you.",
        reference: "Al-Baqarah 2:216"
    },
    {
        id: "tired", mood: "tired", icon: "😴", label: "Tired",
        arabic: "فَإِذَا فَرَغْتَ فَانصَبْ",
        translation: "So when you finish your tasks, stand up (in worship and effort).",
        reference: "Ash-Sharh 94:7"
    },
    {
        id: "effort", mood: "effort", icon: "💪", label: "Need Motivation",
        arabic: "إِنَّ سَعْيَكُمْ لَشَتَّى",
        translation: "Surely your efforts are diverse.",
        reference: "Al-Layl 92:4"
    },
    {
        id: "uncertain", mood: "uncertain", icon: "❓", label: "Uncertain",
        arabic: "وَمَا تَدْرِي نَفْسٌ مَّاذَا تَكْسِبُ غَدًا",
        translation: "No soul knows what tomorrow will bring.",
        reference: "Luqman 31:34"
    },
    {
        id: "lonely", mood: "lonely", icon: "🌙", label: "Lonely",
        arabic: "رَبِّي لَا تَذَرْنِي فَرْدًا",
        translation: "My Lord, do not leave me alone.",
        reference: "Maryam 19:5"
    }
];
let currentVerse = null;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeMoodPage();
});

function initializeMoodPage() {
    const moodGrid = document.querySelector('.mood-grid');
    
    // Clear existing static mood cards
    moodGrid.innerHTML = '';
    
    // Create dynamic mood cards
    moodData.forEach(mood => {
        const moodCard = document.createElement('div');
        moodCard.className = 'mood-card';
        moodCard.innerHTML = `
            <div class="mood-icon">${mood.icon}</div>
            <div class="mood-label">${mood.label}</div>
        `;
        moodCard.addEventListener('click', () => handleMoodSelection(mood, moodCard));
        moodGrid.appendChild(moodCard);
    });
}

function handleMoodSelection(mood, moodCard) {
    // Remove selected class from all cards
    document.querySelectorAll('.mood-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selected class to clicked card
    moodCard.classList.add('selected');
    
    // Display verse in the Dua section
    displayVerse(mood);
    
    // Store current verse
    currentVerse = mood;
}

function displayVerse(mood) {
    const duaCard = document.querySelector('.dua-card');
    duaCard.innerHTML = `
        <p class="verse-arabic arabic">${mood.arabic}</p>
        <p class="verse-translation">${mood.translation}</p>
        <p class="verse-reference">${mood.reference}</p>
    `;
    
    // Add animation
    duaCard.style.animation = 'none';
    setTimeout(() => {
        duaCard.style.animation = 'fadeIn 0.6s ease-in-out';
    }, 10);
    
    // Scroll to verse section
    document.querySelector('.dua-card').scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
    });
}

console.log('Mood functionality loaded successfully!');

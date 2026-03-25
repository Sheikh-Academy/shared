/**
 * Global Configuration for Sheikh Academy
 * Features: Default difficulty ratios, Timer settings, and Board standards.
 * [পয়েন্ট ৫ - গ্লোবাল সেটিংস এবং ডিফল্ট হার]
 */

const AppConfig = {
    // ডিফল্ট ডিফিকাল্টি রেশিও (পয়েন্ট ৫)
    // শিক্ষক চাইলে এগুলো কন্ট্রোল প্যানেল থেকে পরিবর্তন করতে পারবেন
    difficultyRatios: {
        easy: 30,    // সহজ প্রশ্নের হার (৩০%)
        medium: 40,  // মধ্যম প্রশ্নের হার (৪০%)
        hard: 30     // কঠিন প্রশ্নের হার (৩০%)
    },

    // সময় ও মার্কস সেটিংস (পয়েন্ট ১৩)
    examSettings: {
        secondsPerMCQ: 40,        // প্রতিটি এমসিকিউ এর জন্য সময় (সেকেন্ড)
        marksPerMCQ: 1,           // প্রতিটি এমসিকিউ এর মান
        creativeTimeLimit: 1200,  // প্রতিটি সৃজনশীল প্রশ্নের গড় সময় (২০ মিনিট)
    },

    // বোর্ড স্টাইল কনফিগারেশন (পয়েন্ট ১১, ২২)
    boardDefaults: {
        paperSize: 'A4',
        defaultColumns: 2,        // এমসিকিউ এর জন্য ডিফল্ট কলাম
        watermarkText: 'SHEIKH ACADEMY',
        fontFamily: "'Kalpurush', 'Times New Roman', serif"
    },

    // ডাটাবেস এবং আর্কাইভ সেটিংস
    database: {
        totalQuestionLimit: 15000,
        syncInterval: 3600,       // ১ ঘণ্টা পর পর সিঙ্ক হবে (সেকেন্ডে)
    },

    /**
     * সেটিংস আপডেট করার ফাংশন
     * @param {Object} newConfig - নতুন কনফিগারেশন অবজেক্ট
     */
    updateConfig: function(newConfig) {
        Object.assign(this.difficultyRatios, newConfig.difficultyRatios);
        Object.assign(this.examSettings, newConfig.examSettings);
        // লোকাল স্টোরেজে সেভ করে রাখা যেতে পারে যাতে রিফ্রেশ করলে না হারায়
        localStorage.setItem('sa_app_config', JSON.stringify(this));
    },

    /**
     * সেভ করা কনফিগারেশন লোড করা
     */
    loadSavedConfig: function() {
        const saved = localStorage.getItem('sa_app_config');
        if (saved) {
            const parsed = JSON.parse(saved);
            Object.assign(this, parsed);
        }
    }
};

// অ্যাপ লোড হওয়ার সময় আগের সেটিংস থাকলে তা নিয়ে আসা
AppConfig.loadSavedConfig();

// গ্লোবাল এক্সেস
window.AppConfig = AppConfig;

/**
 * Utility Functions for Sheikh Academy
 * Features: English to Bangla number conversion, Date formatting, and Language detection.
 * [পয়েন্ট ১১ - প্রশ্নের ক্রমিক ও নম্বর বরাদ্দ বাংলা/ইংরেজিতে নিয়ন্ত্রণ]
 */

const Utils = {
    // বাংলা সংখ্যার ম্যাপ
    bnNumbers: {
        '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
        '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
    },

    /**
     * সংখ্যাকে বাংলায় রূপান্তর করা
     * @param {number|string} num - যে সংখ্যাটি রূপান্তর করতে হবে
     * @param {string} lang - প্রশ্নের ভাষা ('bn' বা 'en')
     */
    toBengaliNumber: function(num, lang = 'bn') {
        if (!num) return '';
        if (lang === 'en') return num.toString(); // ইংরেজি হলে সরাসরি রিটার্ন

        return num.toString().split('').map(digit => {
            return this.bnNumbers[digit] || digit;
        }).join('');
    },

    /**
     * টেক্সট থেকে ভাষা শনাক্ত করা (অটোমেটিক লজিক)
     * যদি টেক্সটে বাংলা বর্ণ থাকে তবে 'bn' রিটার্ন করবে
     */
    detectLanguage: function(text) {
        const bnRegex = /[\u0980-\u09FF]/;
        return bnRegex.test(text) ? 'bn' : 'en';
    },

    /**
     * তারিখ ফরম্যাট করা (যেমন: ২৫ মার্চ, ২০২৪)
     */
    formatDate: function(date, lang = 'bn') {
        const d = new Date(date);
        const day = this.toBengaliNumber(d.getDate(), lang);
        const year = this.toBengaliNumber(d.getFullYear(), lang);
        
        const monthsBn = [
            'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
            'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
        ];
        const monthsEn = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const month = (lang === 'bn') ? monthsBn[d.getMonth()] : monthsEn[d.getMonth()];
        return (lang === 'bn') ? `${day} ${month}, ${year}` : `${month} ${day}, ${year}`;
    },

    /**
     * প্রশ্নের পাশে নম্বর বরাদ্দ দেখানো (পয়েন্ট ৩)
     * @param {number} marks - বরাদ্দকৃত নম্বর
     * @param {string} lang - ভাষা
     */
    formatMarks: function(marks, lang = 'bn') {
        const num = this.toBengaliNumber(marks, lang);
        return lang === 'bn' ? `[মান: ${num}]` : `[Marks: ${num}]`;
    },

    /**
     * ক্রমিক নম্বর ফরম্যাট করা (১. অথবা (১))
     */
    formatSerial: function(index, style = 'dot', lang = 'bn') {
        const num = this.toBengaliNumber(index, lang);
        switch(style) {
            case 'bracket': return `(${num})`;
            case 'dot': return `${num}.`;
            default: return num;
        }
    }
};

// গ্লোবাল এক্সেস
window.Utils = Utils;

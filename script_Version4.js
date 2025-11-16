// التنقل بين الأقسام
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(sec => sec.classList.remove('show'));
        link.classList.add('active');
        const target = link.getAttribute('data-section');
        document.getElementById(target).classList.add('show');
    });
});

// زر تبديل الوضع
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// تغيير النص الترحيبي
const greetings = [
    "مرحباً بك في عالم ألعاب لا حدود له!",
    "استمتع وأطلق مهاراتك في أشهر الألعاب هنا.",
    "باب اللعبة مفتوح لك دائمًا للتحدي!",
    "انطلق واكتشف استراتيجيات جديدة في عالم الألعاب.",
];
let greetIndex = 0;
document.getElementById('change-greeting').addEventListener('click', () => {
    greetIndex = (greetIndex + 1) % greetings.length;
    document.getElementById('greeting').textContent = greetings[greetIndex];
});

// تحميل لعبة FIFA 2023
const fifaBtn = document.getElementById('download-fifa');
const downloadMsg = document.getElementById('download-message');
if (fifaBtn) {
    fifaBtn.addEventListener('click', () => {
        // رابط وهمي فقط لهذا المثال
        downloadMsg.innerHTML = 'جاري تحميل <b>FIFA 2023</b>...<br>شكرًا لاختيارك موقعنا!';
        // فعليًا يمكنك فتح الرابط الحقيقي:
        setTimeout(() => {
            window.location.href = "https://example.com/fifa2023-app.apk"; // غيّر إلى رابط التطبيق الحقيقي إن توفر
        }, 1800); // تأخير وهمي قبل التحميل
    });
}
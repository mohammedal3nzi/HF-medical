// استبدل الرابط أدناه بالرابط الذي ترغب في الانتقال إليه
const linkUrl = 'http://127.0.0.1:5500/123.html'; 

// إضافة حدث النقر للعنصر .ipad-screen
document.querySelector('.ipad-screen').addEventListener('click', () => {
    window.location.href = linkUrl;
});

// إضافة حدث النقر للزر لتجنب التوجيه عند النقر على الزر
document.querySelector('.ipad-button').addEventListener('click', (event) => {
    event.stopPropagation(); // منع النقر على الزر من التوجيه إلى الرابط
});

// وظيفة تحديث الساعة
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
}

// تحديث الساعة كل ثانية
setInterval(updateClock, 1000);

// التحديث الأول عند تحميل الصفحة
updateClock();

function updateDate() {
    const now = new Date();
    
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // الأشهر تبدأ من 0
    const year = now.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    document.getElementById('current-date').textContent = formattedDate;
}

// تحديث التاريخ عند تحميل الصفحة
updateDate();
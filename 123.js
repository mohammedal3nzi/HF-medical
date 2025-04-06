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
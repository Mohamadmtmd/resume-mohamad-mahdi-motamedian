// انیمیشن پر شدن Progress Barها
window.addEventListener("scroll", () => {
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach(bar => {
        const value = bar.getAttribute("data-skill");
        const position = bar.getBoundingClientRect().top;
        if (position < window.innerHeight - 50) {
            bar.style.width = value + "%";
        }
    });
});

// دکمه بازگشت به بالا
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// دکمه ارسال پیام
document.getElementById("contactBtn").addEventListener("click", () => {
    alert("برای ارتباط، لطفاً از طریق ایمیل m.m.motamedi1382@gmail.com اقدام کنید.");
});
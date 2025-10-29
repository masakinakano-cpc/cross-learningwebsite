/**
 * サービスページ用JavaScript
 * B-SCORE風のクリーンでスムーズなインタラクション
 */

// スクロール時のフェードインアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', () => {
    // フェードインアニメーションの設定
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // スムーズスクロール
    initSmoothScroll();

    // ヘッダーのスクロール時の背景変更
    initHeaderScroll();
});

/**
 * スムーズスクロールの初期化
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // '#'のみの場合はスキップ
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * ヘッダーのスクロール時の背景変更
 */
function initHeaderScroll() {
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
        }

        lastScroll = currentScroll;
    });
}

/**
 * カウントアップアニメーション（統計数値用）
 */
function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        element.textContent = current.toLocaleString();

        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// 統計数値のカウントアップアニメーション（必要に応じて使用）
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const finalValue = parseInt(entry.target.dataset.count);
            if (!isNaN(finalValue)) {
                animateValue(entry.target, 0, finalValue, 2000);
            }
        }
    });
}, observerOptions);

// カウントアップ対象の要素を監視
document.addEventListener('DOMContentLoaded', () => {
    const countElements = document.querySelectorAll('[data-count]');
    countElements.forEach(el => statObserver.observe(el));
});

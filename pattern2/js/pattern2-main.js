// パターン2 - メインJavaScript

document.addEventListener('DOMContentLoaded', function() {
    // ナビゲーション関連
    initNavigation();
    
    // スムーススクロール
    initSmoothScroll();
    
    // アニメーション
    initAnimations();
    
    // フォーム関連
    initForms();
    
    // その他のインタラクション
    initInteractions();
});

// ナビゲーション初期化
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // モバイルメニューの開閉
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // ナビゲーションリンクのアクティブ状態管理
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // アクティブクラスの更新
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // モバイルメニューを閉じる
            if (navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
            
            // スムーススクロール
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // スクロール時のナビゲーション背景変更
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// スムーススクロール初期化
function initSmoothScroll() {
    // ページ内リンクのスムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// アニメーション初期化
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // アニメーション対象要素を監視
    const animateElements = document.querySelectorAll(`
        .problem-card,
        .strength-card,
        .testimonial-card,
        .pricing-card,
        .trust-logos .logo-item
    `);
    
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
    
    // カウンターアニメーション
    initCounterAnimation();
}

// カウンターアニメーション
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // 数値のフォーマット
        if (element.textContent.includes('%')) {
            element.textContent = Math.floor(current) + '%';
        } else if (element.textContent.includes('+')) {
            element.textContent = Math.floor(current).toLocaleString() + '+';
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// フォーム初期化
function initForms() {
    // CTAボタンのクリックイベント
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-cta-primary, .btn-pricing');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // アナリティクスイベント送信（実装時）
            // gtag('event', 'cta_click', {
            //     'event_category': 'engagement',
            //     'event_label': this.textContent.trim()
            // });
            
            // お問い合わせフォーム表示または外部リンク
            showContactModal();
        });
    });
    
    // 資料ダウンロードボタン
    const downloadButtons = document.querySelectorAll('.btn-secondary, .btn-cta-secondary');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // アナリティクスイベント送信（実装時）
            // gtag('event', 'download_click', {
            //     'event_category': 'engagement',
            //     'event_label': '資料ダウンロード'
            // });
            
            // 資料ダウンロード処理
            showDownloadModal();
        });
    });
}

// お問い合わせモーダル表示
function showContactModal() {
    // 実際の実装では、モーダルを表示するか外部フォームにリダイレクト
    alert('お問い合わせフォームを表示します。\n実際の実装では、モーダルまたは外部フォームに遷移します。');
    
    // 例：外部フォームへのリダイレクト
    // window.open('https://example.com/contact', '_blank');
}

// 資料ダウンロードモーダル表示
function showDownloadModal() {
    // 実際の実装では、ダウンロードフォームを表示
    alert('資料ダウンロードフォームを表示します。\n実際の実装では、ダウンロードフォームまたはPDFダウンロードを開始します。');
    
    // 例：PDFダウンロード
    // const link = document.createElement('a');
    // link.href = '/assets/brochure.pdf';
    // link.download = 'クロスラーニング_資料.pdf';
    // link.click();
}

// その他のインタラクション初期化
function initInteractions() {
    // ロゴのホバーエフェクト
    const logoItems = document.querySelectorAll('.logo-item');
    logoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // カードのホバーエフェクト
    const cards = document.querySelectorAll('.problem-card, .strength-card, .testimonial-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // パフォーマンス最適化：デバウンス
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            // スクロール関連の処理
            updateActiveNavLink();
        }, 10);
    });
}

// アクティブなナビゲーションリンクの更新
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ユーティリティ関数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ページ読み込み完了時の処理
window.addEventListener('load', function() {
    // ローディングアニメーションの終了
    document.body.classList.add('loaded');
    
    // パフォーマンス測定（開発時のみ）
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`ページ読み込み時間: ${loadTime}ms`);
    }
});

// エラーハンドリング
window.addEventListener('error', function(e) {
    console.error('JavaScript エラー:', e.error);
    // 実際の実装では、エラー追跡サービスに送信
});

// リサイズイベントの最適化
window.addEventListener('resize', debounce(function() {
    // リサイズ時の処理
    updateLayout();
}, 250));

function updateLayout() {
    // レイアウト更新処理
    const isMobile = window.innerWidth <= 768;
    document.body.classList.toggle('mobile', isMobile);
}

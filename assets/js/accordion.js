// ヘッダーアコーディオン（レスポンシブ）
export function HeaderAccordion() {
    const headerAccordion = document.querySelectorAll(".mainmenu-li");

    headerAccordion.forEach((accordion) => {
        accordion.addEventListener("click", () => {
            accordion.classList.toggle("open");
        });
    });
}


// フッターアコーディオン
export function initFooterAccordion() {
    const footerAccordion = document.querySelectorAll(".footer-li");

    footerAccordion.forEach((accord) => {
        accord.addEventListener("click", () => {
            accord.classList.toggle("open");
        });
    });
}
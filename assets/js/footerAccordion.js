// フッターアコーディオン
export function initFooterAccordion() {
    const footerAccordion = document.querySelectorAll(".footer-li");

    footerAccordion.forEach((accordion) => {
        accordion.addEventListener("click", () => {
            accordion.classList.toggle("open");
        });
    });
}
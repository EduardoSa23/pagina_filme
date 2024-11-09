document.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    const sections = document.querySelectorAll("section");

    if (sections.length > 0) {
        const firstSection = sections[0];
        const headerRect = header.getBoundingClientRect();
        const firstSectionRect = firstSection.getBoundingClientRect();

        if (headerRect.bottom <= firstSectionRect.bottom && headerRect.top >= firstSectionRect.top) {
            header.classList.add("scrolled");
        } else {
            let isInOtherSection = Array.from(sections).slice(1).some(section => {
                const sectionRect = section.getBoundingClientRect();
                return headerRect.bottom > sectionRect.top && headerRect.top < sectionRect.bottom;
            });

            if (isInOtherSection) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
    }
});

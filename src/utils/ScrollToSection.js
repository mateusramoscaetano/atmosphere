export const scrollToSection = (sectionId, offset = 0) => {
  const section = document.getElementById(sectionId);
  console.log(section)
  if (section) {
    const scrollTo = section.offsetTop - offset;
    window.scrollTo({ top: scrollTo, behavior: "smooth" });
  }
};

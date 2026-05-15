function guideList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function guideResources(resources) {
  return resources.map((resource) => `<a class="resource-link" href="${resource.url}" target="_blank" rel="noreferrer">${resource.label}</a>`).join("");
}

function guideFormulas(formulas) {
  return formulas.map((formula) => `
    <div class="formula-card">
      <code>\\(${formula.latex}\\)</code>
      <p><strong>Symbols:</strong> ${formula.symbols}</p>
      <p><strong>When and why to use it:</strong> ${formula.use}</p>
      <p><strong>Intuition:</strong> ${formula.intuition}</p>
      <p><strong>Worked mini-example:</strong> ${formula.example}</p>
    </div>
  `).join("");
}

function renderGuide() {
  const root = document.getElementById("guideRoot");
  const concepts = window.PHYSICS101_CONCEPTS || [];
  const deep = window.PHYSICS101_DEEP_GUIDE || {};
  if (!root) return;

  root.innerHTML = concepts.map((concept, subjectIndex) => {
    const guide = deep[concept.id];
    if (!guide) return "";
    return `
      <section class="guide-subject" id="${concept.id}">
        <article class="card">
          <div>
            <div class="tag-row">
              <span class="tag">Subject ${subjectIndex + 1}</span>
              <span class="tag">${concept.group}</span>
              <span class="tag">Prerequisites: ${concept.prereq.length ? concept.prereq.join(", ") : "none"}</span>
            </div>
            <h2>${concept.title}</h2>
            <p>${concept.summary}</p>
            <p style="margin-top:10px"><strong>How to study this subject:</strong> ${guide.studyAdvice}</p>
          </div>
          <div class="book-list">
            ${concept.books.map((book, index) => `
              <div class="book-item">
                <div class="book-kicker">Recommended book ${index + 1}</div>
                <h4>${book.title}</h4>
                <p><strong>How to use it:</strong> ${book.use}</p>
                <p><strong>Read these topics:</strong> ${book.chapters}</p>
                <p><strong>Mini summary:</strong> ${book.summary}</p>
              </div>
            `).join("")}
          </div>
          <div>
            ${guide.chapters.map((chapter, chapterIndex) => `
              <section class="guide-chapter">
                <div class="guide-meta">Chapter ${chapterIndex + 1} from ${chapter.book}</div>
                <h3>${chapter.title}</h3>
                <p>${chapter.summary}</p>
                <div class="chapter-columns">
                  <div>
                    <h4>Main Concepts</h4>
                    <ul>${guideList(chapter.concepts)}</ul>
                    <h4>Why This Matters</h4>
                    <p>${chapter.why}</p>
                    <h4>After Finishing, You Should Be Able To</h4>
                    <p>${chapter.outcomes}</p>
                  </div>
                  <div>
                    <h4>Essential</h4>
                    <ul>${guideList(chapter.essential)}</ul>
                    <h4>Optional Later</h4>
                    <ul>${guideList(chapter.optional)}</ul>
                    <h4>Checkpoints</h4>
                    <ul>${guideList(chapter.checkpoints)}</ul>
                  </div>
                </div>
                <h4>Formula Explanations</h4>
                <div class="formula-list">${guideFormulas(chapter.formulas)}</div>
                <div class="chapter-columns">
                  <div>
                    <h4>Mini Self-Test</h4>
                    <ol>${guideList(chapter.selfTest)}</ol>
                  </div>
                  <div>
                    <h4>Videos, Notes, Problem Sets, And Exams</h4>
                    <div class="resource-list">${guideResources(chapter.resources)}</div>
                  </div>
                </div>
              </section>
            `).join("")}
          </div>
        </article>
      </section>
    `;
  }).join("");

  if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([root]);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("printGuide")?.addEventListener("click", () => window.print());
  renderGuide();
});

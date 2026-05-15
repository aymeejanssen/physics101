const STORE_KEY = "physics101-ai-profile-v1";

const CONCEPTS = [
  { id: "arithmetic", title: "Arithmetic Foundations", group: "Foundation", level: 0, prereq: [], goal: "Fractions, ratios, powers, scientific notation, units, and dimensional thinking." },
  { id: "algebra", title: "Algebra", group: "Foundation", level: 1, prereq: ["arithmetic"], goal: "Equations, functions, graph reading, exponentials, logarithms, and symbolic manipulation." },
  { id: "trig", title: "Trigonometry", group: "Foundation", level: 2, prereq: ["algebra"], goal: "Radians, unit circle, identities, sine waves, phase, amplitude, and oscillations." },
  { id: "calculus", title: "Calculus", group: "Math", level: 3, prereq: ["algebra", "trig"], goal: "Limits, derivatives, integrals, multivariable calculus, and vector calculus." },
  { id: "linear", title: "Linear Algebra", group: "Math", level: 4, prereq: ["algebra"], goal: "Vectors, matrices, vector spaces, eigenvalues, eigenvectors, Hermitian operators." },
  { id: "de", title: "Differential Equations", group: "Math", level: 5, prereq: ["calculus"], goal: "ODEs, PDEs, oscillators, Fourier methods, and boundary conditions." },
  { id: "mechanics", title: "Classical Mechanics", group: "Physics", level: 6, prereq: ["calculus"], goal: "Newtonian, Lagrangian, Hamiltonian mechanics, energy, momentum, oscillations." },
  { id: "em", title: "Electromagnetism", group: "Physics", level: 7, prereq: ["calculus", "linear"], goal: "Fields, potentials, Maxwell equations, waves, radiation, and boundary problems." },
  { id: "thermo", title: "Thermodynamics", group: "Physics", level: 8, prereq: ["calculus", "mechanics"], goal: "Heat, work, entropy, equilibrium, engines, and thermodynamic potentials." },
  { id: "statmech", title: "Statistical Mechanics", group: "Physics", level: 9, prereq: ["thermo", "linear"], goal: "Microstates, ensembles, Boltzmann factors, partition functions, quantum statistics." },
  { id: "sr", title: "Special Relativity", group: "Modern", level: 10, prereq: ["mechanics"], goal: "Spacetime, Lorentz transformations, four-vectors, relativistic energy and momentum." },
  { id: "gr", title: "General Relativity", group: "Advanced", level: 11, prereq: ["sr", "calculus", "linear"], goal: "Tensors, curvature, geodesics, Einstein equation, black holes, and cosmology." },
  { id: "qm", title: "Quantum Mechanics", group: "Modern", level: 12, prereq: ["linear", "de", "mechanics"], goal: "Wavefunctions, operators, Hilbert spaces, spin, hydrogen, perturbation, scattering." },
  { id: "qft", title: "Quantum Field Theory", group: "Advanced", level: 13, prereq: ["qm", "sr"], goal: "Fields, creation and annihilation operators, path integrals, QED, renormalization ideas." },
  { id: "particle", title: "Particle Physics", group: "Advanced", level: 14, prereq: ["qft"], goal: "Symmetries, Standard Model, quarks, leptons, gauge bosons, and Higgs overview." },
  { id: "condensed", title: "Condensed Matter", group: "Advanced", level: 15, prereq: ["qm", "statmech"], goal: "Crystals, reciprocal space, phonons, bands, semiconductors, superconductivity." },
  { id: "computational", title: "Computational Physics", group: "Advanced", level: 16, prereq: ["calculus", "linear"], goal: "Numerical integration, ODE/PDE solvers, eigenproblems, Monte Carlo, simulations." }
];

const QUESTION_BANK = {
  start: [
    { id: "arith1", category: "Mathematics", concept: "arithmetic", prompt: "Compute 3/4 + 2/3.", choices: ["5/7", "17/12", "13/12", "6/12"], answer: 1, weakness: "fraction arithmetic", remedial: "arith2" },
    { id: "alg1", category: "Mathematics", concept: "algebra", prompt: "Solve for x: 2x + 5 = 17.", choices: ["x = 4", "x = 5", "x = 6", "x = 11"], answer: 2, weakness: "linear equations", remedial: "alg2", advanced: "calc1" },
    { id: "trig1", category: "Mathematics", concept: "trig", prompt: "What is sin^2(theta) + cos^2(theta)?", choices: ["0", "1", "tan(theta)", "depends on theta"], answer: 1, weakness: "trigonometric identities", advanced: "waves1" },
    { id: "phys1", category: "Conceptual physics", concept: "mechanics", prompt: "A force acts on a mass. If the same force acts on twice the mass, what happens to acceleration?", choices: ["It doubles", "It halves", "It stays the same", "It becomes zero"], answer: 1, weakness: "Newton's second law", advanced: "energy1" },
    { id: "reason1", category: "Reasoning", concept: "reasoning", prompt: "If y is proportional to x^2, what happens to y when x triples?", choices: ["y triples", "y becomes 6 times larger", "y becomes 9 times larger", "y is unchanged"], answer: 2, weakness: "proportional reasoning" },
    { id: "style1", category: "Learning style", concept: "style", prompt: "When learning a hard idea, what helps you most first?", choices: ["A visual picture", "A step-by-step derivation", "An analogy", "A practice problem"], style: ["visual", "derivation", "analogy", "problem"] }
  ],
  extra: {
    arith2: { id: "arith2", category: "Mathematics repair", concept: "arithmetic", prompt: "Which is larger?", choices: ["0.7", "2/3", "They are equal", "Cannot tell"], answer: 0, weakness: "number comparison" },
    alg2: { id: "alg2", category: "Algebra repair", concept: "algebra", prompt: "If f(x)=x^2, what is f(3)?", choices: ["5", "6", "9", "x^6"], answer: 2, weakness: "function evaluation" },
    calc1: { id: "calc1", category: "Calculus", concept: "calculus", prompt: "What is d/dx of x^3?", choices: ["x^2", "2x", "3x^2", "3x"], answer: 2, weakness: "derivatives", advanced: "linear1" },
    linear1: { id: "linear1", category: "Linear algebra", concept: "linear", prompt: "In A v = lambda v, v is called what?", choices: ["Eigenvector", "Derivative", "Integral", "Scalar field"], answer: 0, weakness: "eigenvectors", advanced: "qm1" },
    waves1: { id: "waves1", category: "Waves", concept: "de", prompt: "A standing wave in a box is mainly caused by what?", choices: ["Boundary conditions", "Friction", "Gravity only", "Temperature only"], answer: 0, weakness: "boundary conditions" },
    energy1: { id: "energy1", category: "Mechanics", concept: "mechanics", prompt: "For a frictionless falling object, gravitational potential energy mostly becomes what?", choices: ["Charge", "Kinetic energy", "Mass", "Entropy"], answer: 1, weakness: "energy conservation" },
    qm1: { id: "qm1", category: "Quantum readiness", concept: "qm", prompt: "What does |psi(x)|^2 represent in quantum mechanics?", choices: ["Force", "Probability density", "Temperature", "Magnetic field"], answer: 1, weakness: "wavefunction interpretation" }
  }
};

const TEXTBOOKS = [
  {
    title: "OpenStax Precalculus and Calculus",
    level: "Foundation to university math",
    chapters: [
      chapter("Functions and graphs", "Functions, inverse functions, transformations, exponentials, logarithms.", "See equations as objects with shape and behavior.", "Confusing slope, value, and area."),
      chapter("Derivatives and integrals", "Rates of change, accumulation, fundamental theorem, optimization.", "Calculus turns motion and probability into computable language.", "Memorizing rules without interpreting units."),
      chapter("Multivariable calculus", "Partial derivatives, gradients, multiple integrals, vector calculus.", "Physics fields need spatial change and spatial accumulation.", "Using Cartesian coordinates when symmetry suggests polar or spherical.")
    ]
  },
  {
    title: "Strang, Introduction to Linear Algebra",
    level: "Quantum math language",
    chapters: [
      chapter("Vectors and matrices", "Linear systems, transformations, basis, rank.", "A quantum state is a vector; an observable is operator-like.", "Treating matrices as tables instead of transformations."),
      chapter("Orthogonality", "Inner products, projections, orthonormal bases.", "Measurement probabilities rely on projection-like thinking.", "Forgetting normalization."),
      chapter("Eigenvalues and eigenvectors", "A v = lambda v, diagonalization, symmetric matrices.", "Measured values in quantum theory are eigenvalue problems.", "Solving the determinant but not interpreting the result.")
    ]
  },
  {
    title: "Taylor, Classical Mechanics",
    level: "Serious undergraduate mechanics",
    chapters: [
      chapter("Newtonian mechanics", "Forces, momentum, energy, oscillations.", "Classical mechanics gives the baseline quantum theory modifies.", "Choosing formulas before drawing the system."),
      chapter("Lagrangian mechanics", "Generalized coordinates, action, Euler-Lagrange equations.", "Modern physics often starts from energy and symmetry, not just forces.", "Not defining coordinates and constraints clearly."),
      chapter("Hamiltonian mechanics", "Phase space, energy function, canonical variables.", "The Hamiltonian becomes the quantum energy operator.", "Thinking Hamiltonian is always just total energy without assumptions.")
    ]
  },
  {
    title: "Griffiths, Introduction to Electrodynamics",
    level: "Fields and potentials",
    chapters: [
      chapter("Vector analysis", "Gradient, divergence, curl, line and surface integrals.", "E&M is where vector calculus becomes physical.", "Mixing up divergence and curl interpretations."),
      chapter("Electrostatics and potentials", "Fields, Gauss law, potential, boundary conditions.", "Potentials become deeply important in quantum theory.", "Ignoring boundary conditions."),
      chapter("Maxwell equations", "Time-varying fields, induction, electromagnetic waves.", "Light is an electromagnetic wave; quantum theory later quantizes fields.", "Memorizing equations without physical meaning.")
    ]
  },
  {
    title: "Griffiths and Schroeter, Introduction to Quantum Mechanics",
    level: "Main quantum text",
    chapters: [
      chapter("Wavefunction", "Probability interpretation, normalization, expectation values.", "This is where reality becomes probability amplitudes.", "Confusing psi with |psi|^2."),
      chapter("Time-independent Schrodinger equation", "Infinite wells, finite wells, tunneling, oscillator.", "Standard solvable systems are the templates for everything later.", "Forgetting boundary and continuity conditions."),
      chapter("Formalism and angular momentum", "Hilbert space, operators, commutators, spin.", "The abstract rules explain why the calculations work.", "Treating noncommuting observables like ordinary numbers.")
    ]
  },
  {
    title: "Shankar, Principles of Quantum Mechanics",
    level: "Advanced quantum formalism",
    chapters: [
      chapter("Mathematical introduction", "Vector spaces, dual spaces, operators, postulates.", "A rigorous rebuild of the theory from linear algebra.", "Jumping in before linear algebra is stable."),
      chapter("Symmetries and rotations", "Generators, angular momentum algebra, conservation.", "Symmetry is the organizing language of advanced physics.", "Not connecting generators to transformations."),
      chapter("Approximation and scattering", "Perturbation theory, WKB, scattering methods.", "Most real systems need approximations.", "Applying approximations without checking assumptions.")
    ]
  }
];

function chapter(title, concepts, intuition, mistake) {
  return {
    title,
    concepts,
    intuition,
    derivation: "Write assumptions, choose coordinates, define variables, derive equations, check units, then test limiting cases.",
    formulas: "Formula notes include meaning, units, assumptions, and one worked use case.",
    mistake,
    worked: "Worked examples should show setup, physical interpretation, calculation, and sanity check.",
    practice: "Practice includes conceptual checks, computational problems, and one derivation exercise.",
    visual: "Visual summary: diagram + graph + animated parameter change."
  };
}

let profile = loadProfile();
let diagnostic = null;
let simTime = 0;

function loadProfile() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) || "null");
  } catch {
    return null;
  }
}

function saveProfile(next) {
  profile = next;
  localStorage.setItem(STORE_KEY, JSON.stringify(next));
  renderAll();
}

function defaultProfile() {
  return {
    scores: { math: 0, physics: 0, reasoning: 0 },
    attempts: 0,
    style: "visual",
    weaknesses: [],
    answered: [],
    mastered: ["arithmetic"],
    currentLevel: 1,
    roadmap: buildRoadmap(1, ["algebra", "trig", "calculus", "linear", "mechanics"])
  };
}

function buildRoadmap(level, priorityConcepts = []) {
  const ordered = CONCEPTS
    .filter((concept) => concept.level >= Math.max(0, level - 1))
    .slice(0, 9);
  const priority = priorityConcepts
    .map((id) => CONCEPTS.find((concept) => concept.id === id))
    .filter(Boolean);
  const combined = [...priority, ...ordered].filter((concept, index, arr) => arr.findIndex((item) => item.id === concept.id) === index);
  return combined.slice(0, 8).map((concept, index) => ({
    title: concept.title,
    concept: concept.id,
    week: index + 1,
    task: concept.goal
  }));
}

function conceptStatus(concept) {
  const activeProfile = profile || defaultProfile();
  if (activeProfile.mastered?.includes(concept.id)) return "mastered";
  const prereqsMet = concept.prereq.every((id) => activeProfile.mastered?.includes(id) || id === "arithmetic");
  const inRoadmap = activeProfile.roadmap?.some((step) => step.concept === concept.id);
  if (prereqsMet || inRoadmap || concept.level <= activeProfile.currentLevel + 1) return "learning";
  return "locked";
}

function bootFieldCanvas(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let points = [];
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    points = Array.from({ length: Math.min(120, Math.floor(width / 12)) }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - .5) * .18,
      vy: (Math.random() - .5) * .18,
      phase: i * .31
    }));
  }

  function draw(time = 0) {
    const t = time * .001;
    ctx.clearRect(0, 0, width, height);
    const bg = ctx.createLinearGradient(0, 0, width, height);
    bg.addColorStop(0, "#070a10");
    bg.addColorStop(.5, "#102633");
    bg.addColorStop(1, "#171024");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < 10; i += 1) {
      ctx.beginPath();
      const r = 80 + i * 33 + Math.sin(t + i) * 8;
      ctx.ellipse(width * .68, height * .46, r * 1.65, r * .42, i * .23 + t * .06, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${i % 3 === 0 ? "45,212,191" : i % 3 === 1 ? "243,201,105" : "155,140,255"}, ${.18 - i * .01})`;
      ctx.stroke();
    }

    points.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -8) p.x = width + 8;
      if (p.x > width + 8) p.x = -8;
      if (p.y < -8) p.y = height + 8;
      if (p.y > height + 8) p.y = -8;
      const pulse = .6 + Math.sin(t * 2 + p.phase) * .4;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.2 + pulse * 1.8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(247,244,234,${.22 + pulse * .28})`;
      ctx.fill();
      for (let j = i + 1; j < points.length; j += 1) {
        const q = points[j];
        const d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 115) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(99,179,255,${(1 - d / 115) * .13})`;
          ctx.stroke();
        }
      }
    });
    if (!reduced) requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
}

function openDiagnostic(reset = false) {
  const modal = document.getElementById("diagnosticModal");
  if (!modal) return;
  document.body.classList.add("modal-open");
  modal.setAttribute("aria-hidden", "false");
  if (reset || !diagnostic) startDiagnostic();
}

function closeDiagnostic() {
  const modal = document.getElementById("diagnosticModal");
  document.body.classList.remove("modal-open");
  modal?.setAttribute("aria-hidden", "true");
}

function startDiagnostic() {
  diagnostic = {
    queue: [...QUESTION_BANK.start],
    current: null,
    selected: null,
    scores: { math: 0, physics: 0, reasoning: 0 },
    possible: { math: 0, physics: 0, reasoning: 0 },
    weaknesses: [],
    style: "visual",
    answered: []
  };
  document.getElementById("diagnosticResult").classList.remove("show");
  document.getElementById("questionCard").style.display = "grid";
  showNextDiagnosticQuestion();
}

function showNextDiagnosticQuestion() {
  if (!diagnostic.queue.length || diagnostic.answered.length >= 11) {
    finishDiagnostic();
    return;
  }
  diagnostic.current = diagnostic.queue.shift();
  diagnostic.selected = null;
  const q = diagnostic.current;
  document.getElementById("questionText").textContent = q.prompt;
  document.getElementById("diagStep").textContent = `Question ${diagnostic.answered.length + 1}`;
  document.getElementById("diagCategory").textContent = q.category;
  document.getElementById("diagFill").style.width = `${Math.min(95, diagnostic.answered.length * 10)}%`;
  const grid = document.getElementById("choiceGrid");
  grid.innerHTML = q.choices.map((choice, index) => `<button class="choice" type="button" data-choice="${index}">${choice}</button>`).join("");
  grid.querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", () => {
      diagnostic.selected = Number(button.dataset.choice);
      grid.querySelectorAll(".choice").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
    });
  });
}

function submitDiagnosticAnswer() {
  const q = diagnostic.current;
  if (!q || diagnostic.selected === null) return;
  const chosen = diagnostic.selected;
  let correct = false;

  if (q.style) {
    diagnostic.style = q.style[chosen];
  } else {
    correct = chosen === q.answer;
    const domain = q.category.includes("physics") || ["mechanics", "qm", "de"].includes(q.concept) ? "physics" :
      q.category === "Reasoning" ? "reasoning" : "math";
    diagnostic.possible[domain] += 1;
    if (correct) {
      diagnostic.scores[domain] += 1;
      if (q.advanced && QUESTION_BANK.extra[q.advanced]) {
        diagnostic.queue.splice(1, 0, QUESTION_BANK.extra[q.advanced]);
      }
    } else {
      diagnostic.weaknesses.push(q.weakness);
      if (q.remedial && QUESTION_BANK.extra[q.remedial]) {
        diagnostic.queue.unshift(QUESTION_BANK.extra[q.remedial]);
      }
    }
  }

  diagnostic.answered.push({ id: q.id, chosen, correct, concept: q.concept });
  showNextDiagnosticQuestion();
}

function percent(score, possible) {
  return possible ? Math.round((score / possible) * 100) : 50;
}

function finishDiagnostic() {
  const math = percent(diagnostic.scores.math, diagnostic.possible.math);
  const physics = percent(diagnostic.scores.physics, diagnostic.possible.physics);
  const reasoning = percent(diagnostic.scores.reasoning, diagnostic.possible.reasoning);
  const avg = Math.round((math + physics + reasoning) / 3);
  const level = avg < 35 ? 0 : avg < 55 ? 1 : avg < 72 ? 3 : avg < 86 ? 6 : 10;
  const mastered = ["arithmetic"];
  if (math > 45) mastered.push("algebra");
  if (math > 55) mastered.push("trig");
  if (math > 70) mastered.push("calculus");
  if (math > 78) mastered.push("linear");
  if (physics > 55) mastered.push("mechanics");
  if (physics > 70) mastered.push("em");

  const priority = diagnostic.weaknesses.includes("linear equations") || diagnostic.weaknesses.includes("function evaluation")
    ? ["algebra", "trig", "calculus", "linear", "mechanics", "de", "qm"]
    : diagnostic.weaknesses.includes("derivatives")
      ? ["calculus", "linear", "de", "mechanics", "qm"]
      : ["calculus", "linear", "mechanics", "de", "em", "qm", "computational"];

  const nextProfile = {
    scores: { math, physics, reasoning },
    attempts: (profile?.attempts || 0) + 1,
    style: diagnostic.style,
    weaknesses: [...new Set(diagnostic.weaknesses)],
    answered: diagnostic.answered,
    mastered: [...new Set(mastered)],
    currentLevel: level,
    roadmap: buildRoadmap(level, priority)
  };
  diagnostic.generatedProfile = nextProfile;
  document.getElementById("questionCard").style.display = "none";
  document.getElementById("diagnosticResult").classList.add("show");
  document.getElementById("diagFill").style.width = "100%";
  document.getElementById("resultSummary").textContent =
    `Math ${math}%, physics ${physics}%, reasoning ${reasoning}%. Learning style: ${diagnostic.style}. Recommended start: ${nextProfile.roadmap[0]?.title || "Arithmetic Foundations"}.`;
}

function applyDiagnosticRoadmap() {
  if (diagnostic?.generatedProfile) {
    saveProfile(diagnostic.generatedProfile);
    closeDiagnostic();
  }
}

function renderDashboard() {
  const p = profile || defaultProfile();
  const avg = Math.round((p.scores.math + p.scores.physics + p.scores.reasoning) / 3);
  document.getElementById("profileTitle").textContent = profile ? "Your current learning profile" : "Demo profile until intake is taken";
  document.getElementById("profileSummary").textContent =
    `Math ${p.scores.math}%, physics ${p.scores.physics}%, reasoning ${p.scores.reasoning}%. Tutor style: ${p.style}.`;
  document.getElementById("profileTags").innerHTML = [
    `Level ${p.currentLevel}`,
    `${p.style} learner`,
    `${p.mastered.length} concepts started`,
    `${p.attempts || 0} intake attempt${(p.attempts || 0) === 1 ? "" : "s"}`
  ].map((tag) => `<span class="tag">${tag}</span>`).join("");
  document.getElementById("masteryFill").style.width = `${Math.min(100, avg)}%`;
  document.getElementById("weaknessList").innerHTML = p.weaknesses?.length
    ? p.weaknesses.map((weakness) => `<li>${weakness}</li>`).join("")
    : "<li>No weaknesses recorded yet.</li>";
  document.getElementById("roadmapList").innerHTML = p.roadmap.map((step) => `
    <div class="roadmap-step">
      <span>${step.week}</span>
      <div><h4>${step.title}</h4><p>${step.task}</p></div>
    </div>
  `).join("");
}

function renderCurriculum() {
  const grid = document.getElementById("curriculumGrid");
  grid.innerHTML = CONCEPTS.map((concept) => {
    const status = conceptStatus(concept);
    return `
      <article class="card concept-card ${status}" data-state="${status}" data-concept="${concept.id}">
        <h3>${concept.title}</h3>
        <p>${concept.goal}</p>
        <div class="tag-row">
          <span class="tag">${concept.group}</span>
          <span class="tag">Level ${concept.level}</span>
        </div>
      </article>
    `;
  }).join("");
  grid.querySelectorAll(".concept-card").forEach((card) => {
    card.addEventListener("click", () => {
      const p = profile || defaultProfile();
      const id = card.dataset.concept;
      if (!p.mastered.includes(id)) p.mastered.push(id);
      saveProfile(p);
    });
  });
}

function renderTutorSelects() {
  const options = CONCEPTS.map((c) => `<option value="${c.id}">${c.title}</option>`).join("");
  document.getElementById("tutorConcept").innerHTML = options;
  document.getElementById("practiceConcept").innerHTML = options;
}

function addMessage(role, text) {
  const log = document.getElementById("chatLog");
  const div = document.createElement("div");
  div.className = `message ${role}`;
  div.innerHTML = text;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
  if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([div]);
}

function tutorConcept() {
  return CONCEPTS.find((c) => c.id === document.getElementById("tutorConcept").value) || CONCEPTS[1];
}

function startTutor() {
  const concept = tutorConcept();
  const level = document.getElementById("tutorLevel").value;
  document.getElementById("chatLog").innerHTML = "";
  addMessage("ai", `<strong>Socratic start: ${concept.title}</strong><br>${concept.goal}<br><br>Before I explain, what do you think this concept is trying to model or measure? Answer in one or two sentences.`);
  addMessage("ai", `I will teach at the <strong>${level}</strong> level and watch for your known weaknesses: ${(profile?.weaknesses || ["none yet"]).join(", ")}.`);
}

function sendTutorReply() {
  const reply = document.getElementById("learnerReply").value.trim();
  if (!reply) return;
  const concept = tutorConcept();
  addMessage("user", reply);
  document.getElementById("learnerReply").value = "";
  const tooShort = reply.split(/\s+/).length < 8;
  if (tooShort) {
    const p = profile || defaultProfile();
    p.weaknesses = [...new Set([...(p.weaknesses || []), "needs fuller explanations"])];
    saveProfile(p);
    addMessage("ai", `Good start, but make it more physical. What quantity changes, what stays conserved, and what equation would represent that?`);
  } else {
    addMessage("ai", `Nice. Now test the idea: what would happen in an extreme case? For <strong>${concept.title}</strong>, choose a simple limit and predict the result before calculating.`);
  }
}

function tutorHint() {
  const c = tutorConcept();
  addMessage("ai", `<strong>Hint ladder step:</strong> Start by naming the known quantities and the unknown. Then choose the smallest equation that connects them. For ${c.title}, the prerequisite ideas are ${c.prereq.length ? c.prereq.join(", ") : "basic quantities and units"}.`);
}

function tutorExplain() {
  const c = tutorConcept();
  const level = document.getElementById("tutorLevel").value;
  const explanations = {
    intuitive: `${c.title} is about building a mental picture first: ${c.goal}`,
    calculus: `${c.title} becomes powerful when you express change with derivatives, totals with integrals, and constraints with equations.`,
    formal: `${c.title} should be written as definitions, assumptions, equations, solution conditions, and interpretation of the result.`,
    research: `${c.title} becomes research-level when you ask what model assumptions fail, how to approximate, and how to connect it to experiments or computation.`
  };
  addMessage("ai", `<strong>Full explanation:</strong> ${explanations[level]}`);
}

function renderTextbooks() {
  const root = document.getElementById("textbookGrid");
  root.innerHTML = TEXTBOOKS.map((book) => `
    <article class="card">
      <h3>${book.title}</h3>
      <p>${book.level}</p>
      ${book.chapters.map((ch) => `
        <details class="chapter">
          <summary>${ch.title}</summary>
          <div class="chapter-body">
            <p><strong>Key concepts:</strong> ${ch.concepts}</p>
            <p><strong>Intuition:</strong> ${ch.intuition}</p>
            <p><strong>Derivation:</strong> ${ch.derivation}</p>
            <p><strong>Formulas:</strong> ${ch.formulas}</p>
            <p><strong>Common mistake:</strong> ${ch.mistake}</p>
            <p><strong>Worked example:</strong> ${ch.worked}</p>
            <p><strong>Practice:</strong> ${ch.practice}</p>
            <p><strong>Visual summary:</strong> ${ch.visual}</p>
          </div>
        </details>
      `).join("")}
    </article>
  `).join("");
}

function drawSim() {
  const canvas = document.getElementById("simCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  const a = Number(document.getElementById("paramA").value) / 100;
  const b = Number(document.getElementById("paramB").value) / 100;
  const type = document.getElementById("simType").value;
  simTime += .035;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#03060a";
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "rgba(247,244,234,.14)";
  for (let x = 0; x < w; x += 45) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
  for (let y = 0; y < h; y += 45) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

  if (type === "mechanics") {
    document.getElementById("simExplanation").textContent = "A controls launch angle; B controls launch speed.";
    const angle = .25 + a * 1.1;
    const speed = 90 + b * 190;
    ctx.strokeStyle = "#2dd4bf";
    ctx.lineWidth = 4;
    ctx.beginPath();
    for (let t = 0; t < 4; t += .04) {
      const x = 70 + speed * Math.cos(angle) * t;
      const y = h - 70 - (speed * Math.sin(angle) * t - 45 * t * t);
      if (t === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  if (type === "waves") {
    document.getElementById("simExplanation").textContent = "A controls wavelength; B controls second-wave phase.";
    ctx.lineWidth = 3;
    for (const [color, phase] of [["#63b3ff", 0], ["#ff6b5a", b * Math.PI * 2], ["#f3c969", b * Math.PI * 2]]) {
      ctx.beginPath();
      for (let x = 0; x < w; x += 3) {
        const y1 = Math.sin(x * (.01 + a * .04) + simTime + phase) * 70;
        const y2 = color === "#f3c969" ? Math.sin(x * (.01 + a * .04) + simTime) * 70 + Math.sin(x * (.01 + a * .04) + simTime + b * Math.PI * 2) * 70 : y1;
        const y = h / 2 + (color === "#f3c969" ? y2 * .55 : y1);
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = color;
      ctx.stroke();
    }
  }
  if (type === "em") {
    document.getElementById("simExplanation").textContent = "A and B move charges. Lines show a simplified electric field pattern.";
    const charges = [{ x: w * (.25 + a * .25), y: h * .5, q: 1 }, { x: w * (.75 - b * .25), y: h * .5, q: -1 }];
    charges.forEach((charge) => {
      ctx.beginPath(); ctx.arc(charge.x, charge.y, 18, 0, Math.PI * 2);
      ctx.fillStyle = charge.q > 0 ? "#ff6b5a" : "#63b3ff"; ctx.fill();
    });
    for (let i = 0; i < 28; i += 1) {
      const angle = i / 28 * Math.PI * 2;
      ctx.beginPath();
      let x = charges[0].x + Math.cos(angle) * 22;
      let y = charges[0].y + Math.sin(angle) * 22;
      ctx.moveTo(x, y);
      for (let step = 0; step < 70; step += 1) {
        const dx = charges[1].x - x;
        const dy = charges[1].y - y;
        const d = Math.max(1, Math.hypot(dx, dy));
        x += dx / d * 8 + Math.cos(angle) * 1.5;
        y += dy / d * 8 + Math.sin(angle) * 1.5;
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(45,212,191,.36)"; ctx.stroke();
    }
  }
  if (type === "relativity") {
    document.getElementById("simExplanation").textContent = "A tilts worldline velocity; B changes event spacing.";
    const cx = w / 2, cy = h - 70;
    ctx.strokeStyle = "#f3c969"; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx - 260, cy - 360); ctx.moveTo(cx, cy); ctx.lineTo(cx + 260, cy - 360); ctx.stroke();
    ctx.strokeStyle = "#2dd4bf"; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + (a - .5) * 320, 70); ctx.stroke();
    ctx.fillStyle = "#fffaf0"; ctx.fillText("light cone", cx + 20, cy - 260);
  }
  if (type === "quantum") {
    document.getElementById("simExplanation").textContent = "A controls quantum number n; B controls box width.";
    const n = 1 + Math.floor(a * 5);
    const left = 110 + b * 80;
    const right = w - left;
    ctx.strokeStyle = "#fffaf0"; ctx.lineWidth = 2;
    ctx.strokeRect(left, 80, right - left, h - 160);
    ctx.beginPath();
    for (let x = left; x <= right; x += 2) {
      const u = (x - left) / (right - left);
      const psi = Math.sin(n * Math.PI * u);
      const y = h / 2 - psi * 120;
      if (x === left) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "#9b8cff"; ctx.lineWidth = 4; ctx.stroke();
    ctx.fillStyle = "#f3c969"; ctx.fillText(`n = ${n}`, left + 20, 110);
  }
  if (type === "particle") {
    document.getElementById("simExplanation").textContent = "A controls collision energy; B controls scattering angle.";
    const cx = w / 2, cy = h / 2;
    ctx.strokeStyle = "#63b3ff"; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(80, cy); ctx.lineTo(cx, cy); ctx.moveTo(w - 80, cy); ctx.lineTo(cx, cy); ctx.stroke();
    for (let i = 0; i < 8; i += 1) {
      const angle = i / 8 * Math.PI * 2 + b * Math.PI;
      const len = 120 + a * 220 * (i % 2 ? .7 : 1);
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(angle) * len, cy + Math.sin(angle) * len);
      ctx.strokeStyle = i % 2 ? "#ff6b5a" : "#2dd4bf"; ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(cx, cy, 18 + a * 12, 0, Math.PI * 2); ctx.fillStyle = "#f3c969"; ctx.fill();
  }
}

function drawViz() {
  const canvas = document.getElementById("vizCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  const type = document.getElementById("vizType").value;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#03060a"; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "rgba(247,244,234,.13)";
  for (let x = 0; x < w; x += 45) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
  for (let y = 0; y < h; y += 45) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

  if (type === "fourier") {
    document.getElementById("vizExplanation").textContent = "A square-like signal is built by adding sine waves.";
    for (let n = 1; n <= 7; n += 2) {
      ctx.beginPath();
      for (let x = 0; x < w; x += 3) {
        let y = 0;
        for (let k = 1; k <= n; k += 2) y += Math.sin(k * x * .018 + simTime) / k;
        y = h / 2 - y * 90;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `rgba(45,212,191,${.2 + n * .08})`; ctx.lineWidth = n === 7 ? 4 : 1.5; ctx.stroke();
    }
  }
  if (type === "eigen") {
    document.getElementById("vizExplanation").textContent = "Eigenvectors keep their direction under a transformation.";
    const cx = w / 2, cy = h / 2;
    [[1, 0, "#72df8f"], [0, 1, "#ff6b5a"], [.8, .45, "#f3c969"], [-.45, .8, "#63b3ff"]].forEach(([x, y, color]) => {
      drawArrow(ctx, cx, cy, cx + x * 170, cy - y * 170, color);
      drawArrow(ctx, cx, cy, cx + x * 230, cy - y * 105, color, .35);
    });
  }
  if (type === "probability") {
    document.getElementById("vizExplanation").textContent = "Probability density is |psi|^2, always nonnegative.";
    ctx.beginPath();
    for (let x = 80; x < w - 80; x += 2) {
      const u = (x - 80) / (w - 160);
      const psi = Math.sin(Math.PI * u) + .45 * Math.sin(3 * Math.PI * u + simTime);
      const y = h - 80 - psi * psi * 100;
      if (x === 80) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "#9b8cff"; ctx.lineWidth = 4; ctx.stroke();
  }
  if (type === "spacetime") {
    document.getElementById("vizExplanation").textContent = "Spacetime diagrams show which events can influence others.";
    const cx = w / 2, cy = h - 70;
    drawArrow(ctx, cx, cy, cx, 60, "#fffaf0");
    drawArrow(ctx, cx, cy, w - 70, cy, "#fffaf0");
    ctx.strokeStyle = "#f3c969"; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx - 260, 70); ctx.moveTo(cx, cy); ctx.lineTo(cx + 260, 70); ctx.stroke();
  }
  if (type === "tensor") {
    document.getElementById("vizExplanation").textContent = "A tensor-like transformation deforms vectors and grid geometry.";
    for (let x = 120; x < w - 100; x += 70) {
      for (let y = 100; y < h - 90; y += 70) {
        const nx = x + Math.sin(y * .02 + simTime) * 22;
        const ny = y + Math.cos(x * .02 + simTime) * 22;
        ctx.beginPath(); ctx.arc(nx, ny, 4, 0, Math.PI * 2); ctx.fillStyle = "#2dd4bf"; ctx.fill();
      }
    }
  }
}

function drawArrow(ctx, x1, y1, x2, y2, color, alpha = 1) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  ctx.strokeStyle = color;
  ctx.globalAlpha = alpha;
  ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x2, y2); ctx.lineTo(x2 - Math.cos(angle - .4) * 14, y2 - Math.sin(angle - .4) * 14); ctx.lineTo(x2 - Math.cos(angle + .4) * 14, y2 - Math.sin(angle + .4) * 14); ctx.closePath(); ctx.fillStyle = color; ctx.fill();
  ctx.globalAlpha = 1;
}

function renderPractice() {
  const concept = CONCEPTS.find((c) => c.id === document.getElementById("practiceConcept").value) || CONCEPTS[0];
  const type = document.getElementById("practiceType").value;
  const templates = {
    adaptive: `Explain the most important prerequisite for ${concept.title}, then solve one simple example that uses it.`,
    exam: `A timed exam problem combines ${concept.title} with its prerequisites: ${concept.prereq.join(", ") || "units and algebra"}. Set up the equations and solve step by step.`,
    conceptual: `In plain language, what physical or mathematical structure does ${concept.title} describe? Give one limiting case.`,
    olympiad: `Create a challenging problem where ${concept.title} must be combined with conservation, symmetry, or approximation.`,
    derivation: `Derive the central relation for ${concept.title} from assumptions, definitions, and boundary conditions.`
  };
  document.getElementById("practiceTitle").textContent = `${type[0].toUpperCase()}${type.slice(1)}: ${concept.title}`;
  document.getElementById("practicePrompt").textContent = templates[type];
  document.getElementById("practiceHint").textContent = `Hint: start from prerequisites: ${concept.prereq.join(", ") || "basic quantities, units, and definitions"}. Write knowns, unknowns, and assumptions first.`;
  document.getElementById("practiceAnswer").textContent = `Answer outline: define variables, select the relevant law or definition, derive symbolically, check units, test a limiting case, then interpret the result physically.`;
  document.getElementById("practiceHint").classList.remove("show");
  document.getElementById("practiceAnswer").classList.remove("show");
}

function renderKnowledgeGraph() {
  const root = document.getElementById("knowledgeGraph");
  root.querySelectorAll(".kg-node").forEach((node) => node.remove());
  const positions = {
    arithmetic: [4, 45], algebra: [19, 22], trig: [20, 66], calculus: [36, 40], linear: [49, 20], de: [53, 67],
    mechanics: [68, 35], em: [70, 68], qm: [84, 45], qft: [86, 17], particle: [88, 72], computational: [39, 78]
  };
  Object.entries(positions).forEach(([id, [left, top]]) => {
    const concept = CONCEPTS.find((c) => c.id === id);
    const status = conceptStatus(concept);
    const div = document.createElement("button");
    div.className = `kg-node ${status}`;
    div.style.left = `${left}%`;
    div.style.top = `${top}%`;
    div.textContent = concept.title;
    div.addEventListener("click", () => {
      document.getElementById("graphTitle").textContent = concept.title;
      document.getElementById("graphDetails").innerHTML =
        `<strong>Status:</strong> ${status}<br><strong>Prerequisites:</strong> ${concept.prereq.join(", ") || "none"}<br><strong>Study goal:</strong> ${concept.goal}`;
    });
    root.appendChild(div);
  });
}

function renderAll() {
  renderDashboard();
  renderCurriculum();
  renderKnowledgeGraph();
}

function init() {
  bootFieldCanvas(document.querySelector(".field-canvas"));
  if (!document.getElementById("openDiagnostic")) return;
  renderTutorSelects();
  renderTextbooks();
  renderAll();
  drawSim();
  drawViz();
  setInterval(() => { drawSim(); drawViz(); }, 80);

  document.getElementById("openDiagnostic").addEventListener("click", () => openDiagnostic(true));
  document.getElementById("closeDiagnostic").addEventListener("click", closeDiagnostic);
  document.getElementById("nextQuestion").addEventListener("click", submitDiagnosticAnswer);
  document.getElementById("applyRoadmap").addEventListener("click", applyDiagnosticRoadmap);
  document.getElementById("retakeDiagnostic").addEventListener("click", () => startDiagnostic());
  document.getElementById("startTutor").addEventListener("click", startTutor);
  document.getElementById("sendReply").addEventListener("click", sendTutorReply);
  document.getElementById("getHint").addEventListener("click", tutorHint);
  document.getElementById("explainAnswer").addEventListener("click", tutorExplain);
  document.getElementById("generateProblem").addEventListener("click", renderPractice);
  document.getElementById("showPracticeHint").addEventListener("click", () => document.getElementById("practiceHint").classList.add("show"));
  document.getElementById("showPracticeAnswer").addEventListener("click", () => document.getElementById("practiceAnswer").classList.add("show"));
  ["simType", "paramA", "paramB"].forEach((id) => document.getElementById(id).addEventListener("input", drawSim));
  document.getElementById("vizType").addEventListener("input", drawViz);

  if (!profile) {
    setTimeout(() => openDiagnostic(false), 700);
  }
}

document.addEventListener("DOMContentLoaded", init);

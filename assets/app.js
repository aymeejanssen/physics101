const STORE_KEY = "physics101-ai-profile-v1";

const CONCEPTS = [
  {
    id: "arithmetic",
    title: "Arithmetic Foundations",
    group: "Foundation",
    level: 0,
    prereq: [],
    goal: "Fractions, ratios, powers, scientific notation, units, and dimensional thinking.",
    summary: "This is the reset layer. Physics uses numbers with meaning, so you need fast fraction work, powers of ten, unit conversion, proportional reasoning, and comfort checking whether an answer is physically sensible.",
    mustLearn: ["Fractions, decimals, percentages, and ratios", "Scientific notation and order-of-magnitude estimates", "Unit conversion and dimensional analysis", "Powers, roots, exponents, and significant figures", "Reading a quantity as number plus unit, not just number"],
    books: [
      bookNote("OpenStax Prealgebra / Elementary Algebra", "Use as the repair manual for arithmetic and equation basics.", "Fractions, decimals, ratios, exponents, roots, linear equations.", "Do many small exercises until you can convert units and simplify expressions without hesitation."),
      bookNote("Khan Academy Arithmetic and Pre-Algebra", "Use for drill and fast feedback.", "Fractions, negative numbers, ratios, powers, units.", "This is your daily fluency gym before heavier physics starts.")
    ],
    formulas: [
      formulaNote("a^m a^n = a^{m+n}", "Exponents track repeated multiplication. This is essential for scientific notation and dimensional scaling."),
      formulaNote("1 = \\frac{1000\\,m}{1\\,km} = \\frac{60\\,s}{1\\,min}", "Unit conversion works by multiplying by forms of one, so the physical quantity does not change.")
    ],
    examples: ["Convert 72 km/h into m/s and explain why the answer should be smaller as a number.", "Estimate the number of seconds in one year using powers of ten before using a calculator."],
    checkpoint: "You are ready to move on when unit conversions, fractions, and powers of ten feel boring rather than mysterious."
  },
  {
    id: "algebra",
    title: "Algebra",
    group: "Foundation",
    level: 1,
    prereq: ["arithmetic"],
    goal: "Equations, functions, graph reading, exponentials, logarithms, and symbolic manipulation.",
    summary: "Algebra is how you move from numbers to relationships. In physics you constantly solve for unknowns, rearrange formulas, read graphs, and express how one quantity depends on another.",
    mustLearn: ["Solve linear and quadratic equations", "Manipulate symbols without losing units", "Understand functions, domains, ranges, and graphs", "Use exponentials and logarithms", "Translate word problems into equations"],
    books: [
      bookNote("OpenStax Algebra and Trigonometry", "Use for a full university-prep rebuild.", "Equations, inequalities, functions, polynomial/rational/exponential/logarithmic functions.", "This is the bridge from business math into scientific symbolic thinking."),
      bookNote("Stewart Calculus, Algebra Review Appendices", "Use before calculus if symbolic manipulation is rusty.", "Functions, graphs, exponentials, logs, trigonometric review.", "The appendices are not the main course, but they reveal the algebra you must already control.")
    ],
    formulas: [
      formulaNote("y = mx + b", "A line is a constant-rate relationship. Slope m is change in output per change in input."),
      formulaNote("x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}", "The quadratic formula solves curved relationships such as projectile height, energy wells, and oscillation conditions.")
    ],
    examples: ["Rearrange E = (1/2)mv^2 to solve for v and explain each unit.", "Sketch y = 2e^{-x} and describe what the graph does as x grows."],
    checkpoint: "You should be able to solve for any variable in a physics formula and explain the graph in words."
  },
  {
    id: "trig",
    title: "Trigonometry",
    group: "Foundation",
    level: 2,
    prereq: ["algebra"],
    goal: "Radians, unit circle, identities, sine waves, phase, amplitude, and oscillations.",
    summary: "Trigonometry is the language of angles, rotations, waves, and circular motion. Quantum mechanics, electromagnetism, Fourier analysis, and oscillations all depend on sine and cosine fluency.",
    mustLearn: ["Radians and the unit circle", "Sine, cosine, tangent, and inverse trig", "Core identities and angle formulas", "Amplitude, period, frequency, and phase", "Resolving vectors into components"],
    books: [
      bookNote("OpenStax Precalculus", "Use for a complete trig foundation.", "Trigonometric functions, identities, equations, polar coordinates, vectors.", "Study until sine and cosine feel geometric, not just calculator buttons."),
      bookNote("3Blue1Brown Essence of Trigonometry / Linear Algebra crossover", "Use for visual intuition.", "Unit circle, rotations, projections, vectors.", "This helps connect trig to vector decomposition and later quantum state geometry.")
    ],
    formulas: [
      formulaNote("\\sin^2\\theta + \\cos^2\\theta = 1", "The central identity comes from the unit circle and keeps wave and vector calculations consistent."),
      formulaNote("x(t) = A\\cos(\\omega t + \\phi)", "A sinusoid models oscillation. A is amplitude, omega is angular frequency, phi is phase.")
    ],
    examples: ["Break a 10 N force at 30 degrees into horizontal and vertical components.", "Compare two waves with the same frequency but different phase and predict interference."],
    checkpoint: "You are ready when radians, components, and sine-wave parameters are automatic."
  },
  {
    id: "calculus",
    title: "Calculus",
    group: "Math",
    level: 3,
    prereq: ["algebra", "trig"],
    goal: "Limits, derivatives, integrals, multivariable calculus, and vector calculus.",
    summary: "Calculus is the language of change and accumulation. Motion, fields, probability density, wavefunctions, thermodynamics, and relativity all require derivatives and integrals.",
    mustLearn: ["Limits and continuity", "Derivatives as rates and local linear approximations", "Integrals as accumulation and area", "Partial derivatives and gradients", "Multiple integrals and basic vector calculus"],
    books: [
      bookNote("OpenStax Calculus Vol. 1-3", "Use as the main free university calculus sequence.", "Single-variable calculus, integration techniques, sequences, multivariable calculus, vector calculus.", "Complete the examples and problem sets; physics begins to open after this."),
      bookNote("Calculus Made Easy", "Use as the friendly first pass.", "Derivatives, integrals, and the intuition of small changes.", "Read before or alongside OpenStax if calculus feels emotionally intimidating."),
      bookNote("Stewart Calculus", "Use as a standard university backup.", "Problem-heavy calculus from functions through multivariable topics.", "Excellent for building exam stamina.")
    ],
    formulas: [
      formulaNote("\\frac{d}{dx}x^n = n x^{n-1}", "The power rule measures how a power changes locally."),
      formulaNote("\\int_a^b f(x)\\,dx", "A definite integral accumulates a quantity across an interval, such as displacement from velocity or probability from density.")
    ],
    examples: ["Given x(t)=t^3-2t, compute velocity and acceleration, then explain their signs.", "Integrate a probability density over an interval and interpret the result as probability."],
    checkpoint: "You should solve derivative/integral problems symbolically, interpret units, and know when a partial derivative is needed."
  },
  {
    id: "linear",
    title: "Linear Algebra",
    group: "Math",
    level: 4,
    prereq: ["algebra"],
    goal: "Vectors, matrices, vector spaces, eigenvalues, eigenvectors, Hermitian operators.",
    summary: "Linear algebra is the skeleton of quantum mechanics. States are vectors, measurements are operators, basis changes are transformations, and allowed measurement values are eigenvalues.",
    mustLearn: ["Vectors, matrices, dot products, norms, and projections", "Linear transformations and basis changes", "Solving linear systems", "Eigenvalues, eigenvectors, and diagonalization", "Orthogonality, complex vector spaces, and Hermitian matrices"],
    books: [
      bookNote("Strang, Introduction to Linear Algebra", "Use as the main conceptual university text.", "Matrices as transformations, four subspaces, orthogonality, determinants, eigenvalues.", "The goal is to see geometry behind the algebra."),
      bookNote("Lay, Linear Algebra and Its Applications", "Use for structured practice.", "Linear systems, vector spaces, transformations, eigenvalues, applications.", "Good when you need many graded-style problems."),
      bookNote("MIT 18.06 Gilbert Strang", "Use for lectures and problem sets.", "Full undergraduate linear algebra with exams.", "Pair lectures with written solutions.")
    ],
    formulas: [
      formulaNote("A\\vec v = \\lambda \\vec v", "An eigenvector keeps its direction under A; lambda tells how much it scales. In quantum, measurement values come from eigenvalue equations."),
      formulaNote("\\langle u, v \\rangle = u^\\dagger v", "The inner product measures overlap. Quantum probabilities are built from complex inner products.")
    ],
    examples: ["Find eigenvectors of a 2 by 2 matrix and describe the directions that do not rotate.", "Normalize a vector and compute its projection onto another vector."],
    checkpoint: "You are quantum-ready when eigenvectors, basis changes, and inner products feel like geometry."
  },
  {
    id: "de",
    title: "Differential Equations",
    group: "Math",
    level: 5,
    prereq: ["calculus"],
    goal: "ODEs, PDEs, oscillators, Fourier methods, and boundary conditions.",
    summary: "Differential equations describe systems through their rates of change. Oscillators, waves, circuits, heat flow, and the Schrodinger equation are all differential equation problems.",
    mustLearn: ["Separable and first-order ODEs", "Second-order linear ODEs", "Driven and damped oscillators", "Boundary and initial conditions", "PDE basics and separation of variables"],
    books: [
      bookNote("Boyce and DiPrima, Differential Equations", "Use as the standard university ODE text.", "First-order equations, second-order equations, systems, Laplace transforms, series solutions.", "Do the oscillator and boundary-value chapters carefully."),
      bookNote("Boas, Mathematical Methods in the Physical Sciences", "Use for physics-flavored math.", "ODEs, Fourier series, special functions, PDEs, complex numbers.", "This connects textbook math to actual physics equations."),
      bookNote("MIT 18.03 Differential Equations", "Use for lectures, exams, and practice.", "Linear systems, oscillations, Fourier/Laplace methods.", "A strong checkpoint before serious mechanics and quantum.")
    ],
    formulas: [
      formulaNote("\\frac{d^2x}{dt^2}+\\omega^2 x=0", "The simple harmonic oscillator. Its solutions are sine and cosine waves."),
      formulaNote("X''(x)+k^2X(x)=0", "A separated spatial wave equation. Boundary conditions select allowed modes.")
    ],
    examples: ["Solve the undamped oscillator and identify amplitude, angular frequency, and phase.", "Use boundary conditions X(0)=X(L)=0 to explain why only certain wavelengths fit."],
    checkpoint: "You should be able to solve basic ODEs and explain how boundary conditions create discrete modes."
  },
  {
    id: "mechanics",
    title: "Classical Mechanics",
    group: "Physics",
    level: 6,
    prereq: ["calculus"],
    goal: "Newtonian, Lagrangian, Hamiltonian mechanics, energy, momentum, oscillations.",
    summary: "Mechanics teaches how physical laws become equations of motion. It is the training ground for conservation laws, oscillations, energy methods, and the Hamiltonian idea used in quantum mechanics.",
    mustLearn: ["Newton's laws and free-body diagrams", "Work, energy, momentum, and angular momentum", "Oscillations and normal modes", "Lagrangian mechanics and generalized coordinates", "Hamiltonian mechanics and phase space"],
    books: [
      bookNote("OpenStax University Physics Vol. 1", "Use for the first university mechanics pass.", "Kinematics, forces, energy, momentum, rotation, oscillations, waves.", "Solve many problems before moving to formal mechanics."),
      bookNote("Taylor, Classical Mechanics", "Use for serious undergraduate mechanics.", "Newtonian mechanics, oscillations, calculus of variations, Lagrangian and Hamiltonian mechanics.", "This is the bridge to theoretical physics."),
      bookNote("Feynman Lectures Vol. I", "Use for intuition and taste.", "Motion, conservation laws, oscillations, waves, energy, probability ideas.", "Read selected chapters for deep physical insight, not as your only problem book.")
    ],
    formulas: [
      formulaNote("\\vec F = m\\vec a", "Net force determines acceleration. Always identify the system before applying it."),
      formulaNote("L = T - V", "The Lagrangian is kinetic minus potential energy. The action principle leads to equations of motion.")
    ],
    examples: ["Derive the pendulum equation for small angles and connect it to the harmonic oscillator.", "Use energy conservation to find the speed of a sliding mass without solving for time."],
    checkpoint: "You are ready for quantum when energy, momentum, oscillators, and Hamiltonians are familiar."
  },
  {
    id: "em",
    title: "Electromagnetism",
    group: "Physics",
    level: 7,
    prereq: ["calculus", "linear"],
    goal: "Fields, potentials, Maxwell equations, waves, radiation, and boundary problems.",
    summary: "Electromagnetism teaches field thinking. Instead of only particles, you learn fields, potentials, flux, circulation, waves, and gauge ideas that later become central in quantum field theory.",
    mustLearn: ["Electric and magnetic fields", "Potential, gradient, divergence, curl, and flux", "Gauss law, Ampere law, Faraday law", "Maxwell equations and electromagnetic waves", "Boundary conditions and simple radiation ideas"],
    books: [
      bookNote("OpenStax University Physics Vol. 2", "Use for the first calculus-based E&M pass.", "Electric force, fields, circuits, magnetism, induction, AC, waves.", "Build problem fluency before Griffiths."),
      bookNote("Griffiths, Introduction to Electrodynamics", "Use as the standard theoretical undergraduate text.", "Vector analysis, electrostatics, magnetostatics, electrodynamics, Maxwell equations.", "Read slowly; every equation has geometric meaning."),
      bookNote("MIT 8.02 Electricity and Magnetism", "Use for lectures, assignments, and exams.", "University E&M with problem sets and demonstrations.", "Good for testing whether you can calculate, not just read.")
    ],
    formulas: [
      formulaNote("\\nabla \\cdot \\vec E = \\rho/\\epsilon_0", "Electric field diverges from charge. This is Gauss law in differential form."),
      formulaNote("\\vec F = q(\\vec E + \\vec v \\times \\vec B)", "The Lorentz force tells how charges respond to electric and magnetic fields.")
    ],
    examples: ["Use symmetry and Gauss law to find the electric field of a charged sphere.", "Explain why changing magnetic flux can create an electric field."],
    checkpoint: "You should be able to translate a physical charge/current setup into field equations and boundary conditions."
  },
  {
    id: "thermo",
    title: "Thermodynamics",
    group: "Physics",
    level: 8,
    prereq: ["calculus", "mechanics"],
    goal: "Heat, work, entropy, equilibrium, engines, and thermodynamic potentials.",
    summary: "Thermodynamics studies macroscopic systems through energy, heat, work, entropy, and equilibrium. It prepares you for statistical mechanics and the thermodynamic meaning of quantum states.",
    mustLearn: ["Temperature, heat, work, and internal energy", "First and second laws", "Entropy and reversible/irreversible processes", "Heat engines and efficiency", "Thermodynamic potentials and equilibrium"],
    books: [
      bookNote("OpenStax University Physics Vol. 2", "Use for introductory thermal physics.", "Temperature, kinetic theory, heat, laws of thermodynamics.", "Start here if the language is new."),
      bookNote("Schroeder, Thermal Physics", "Use as the modern undergraduate favorite.", "Entropy, temperature, free energy, Boltzmann statistics, quantum statistics.", "This book connects thermo and statistical mechanics clearly."),
      bookNote("Feynman Lectures Vol. I thermal chapters", "Use for conceptual richness.", "Heat, energy, entropy, statistical viewpoint.", "Read for intuition about why entropy is not just disorder.")
    ],
    formulas: [
      formulaNote("\\Delta U = Q - W", "The first law: internal energy changes by heat added minus work done by the system."),
      formulaNote("dS = \\frac{\\delta Q_{rev}}{T}", "Entropy measures reversible heat flow per temperature and predicts allowed macroscopic processes.")
    ],
    examples: ["Analyze an ideal gas expansion and identify heat, work, and internal energy change.", "Compare reversible and irreversible paths between the same states."],
    checkpoint: "You should be able to reason with energy and entropy without treating heat as a substance."
  },
  {
    id: "statmech",
    title: "Statistical Mechanics",
    group: "Physics",
    level: 9,
    prereq: ["thermo", "linear"],
    goal: "Microstates, ensembles, Boltzmann factors, partition functions, quantum statistics.",
    summary: "Statistical mechanics explains thermodynamics from microscopic probability. It connects energy levels, probability weights, entropy, temperature, and quantum many-particle behavior.",
    mustLearn: ["Microstates and macrostates", "Boltzmann distribution", "Partition functions", "Canonical, microcanonical, and grand canonical ensembles", "Fermi-Dirac and Bose-Einstein statistics"],
    books: [
      bookNote("Schroeder, Thermal Physics", "Use as the main entry point.", "Multiplicity, entropy, temperature, partition functions, quantum gases.", "Work the examples; this is one of the clearest bridges to quantum matter."),
      bookNote("Kittel and Kroemer, Thermal Physics", "Use for a more compact theoretical view.", "Statistical basis of thermodynamics, distributions, quantum statistics.", "Good after Schroeder when you want more compression."),
      bookNote("MIT Statistical Physics courses", "Use for exams and advanced problem sets.", "Ensembles, fluctuations, phase transitions, quantum statistics.", "Use when you want pre-master or master-level testing.")
    ],
    formulas: [
      formulaNote("P_i = \\frac{e^{-E_i/kT}}{Z}", "The Boltzmann weight gives the probability of a state with energy E_i at temperature T."),
      formulaNote("Z = \\sum_i e^{-E_i/kT}", "The partition function normalizes probabilities and generates thermodynamic quantities.")
    ],
    examples: ["Compute probabilities for a two-level system at low and high temperature.", "Explain why many microscopic arrangements can produce the same macrostate."],
    checkpoint: "You should see thermodynamics as probability over energy states."
  },
  {
    id: "sr",
    title: "Special Relativity",
    group: "Modern",
    level: 10,
    prereq: ["mechanics"],
    goal: "Spacetime, Lorentz transformations, four-vectors, relativistic energy and momentum.",
    summary: "Special relativity rebuilds space and time when light speed is invariant. It is mandatory for particle physics, field theory, and any quantum theory that respects high-speed motion.",
    mustLearn: ["Postulates of special relativity", "Time dilation and length contraction", "Lorentz transformations", "Spacetime interval and light cones", "Relativistic energy, momentum, and four-vectors"],
    books: [
      bookNote("Taylor and Wheeler, Spacetime Physics", "Use as the clearest first serious text.", "Spacetime diagrams, invariant interval, momentum-energy, paradoxes.", "This is the book to make relativity visual and calculable."),
      bookNote("OpenStax University Physics Vol. 3", "Use for a standard modern physics overview.", "Relativity, photons, matter waves, atomic physics.", "Good for broad coverage before advanced texts."),
      bookNote("MIT 8.033 Relativity", "Use for deeper undergraduate practice.", "Special relativity and introduction to general relativity.", "Use for problem-set seriousness.")
    ],
    formulas: [
      formulaNote("\\gamma = \\frac{1}{\\sqrt{1-v^2/c^2}}", "The Lorentz factor controls time dilation, length contraction, and relativistic momentum."),
      formulaNote("E^2 = (pc)^2 + (mc^2)^2", "The energy-momentum relation works for massive and massless particles.")
    ],
    examples: ["Use a spacetime diagram to compare two observers' time measurements.", "Compute gamma for v = 0.8c and predict time dilation."],
    checkpoint: "You should reason with invariants rather than absolute space and time."
  },
  {
    id: "gr",
    title: "General Relativity",
    group: "Advanced",
    level: 11,
    prereq: ["sr", "calculus", "linear"],
    goal: "Tensors, curvature, geodesics, Einstein equation, black holes, and cosmology.",
    summary: "General relativity describes gravity as curved spacetime. It requires tensors, geometry, and comfort thinking locally and globally at once.",
    mustLearn: ["Equivalence principle", "Metrics and spacetime intervals", "Tensors and covariant derivatives", "Geodesics and curvature", "Einstein equation and simple solutions"],
    books: [
      bookNote("Hartle, Gravity", "Use as a friendly undergraduate-to-graduate bridge.", "Curved spacetime, geodesics, black holes, cosmology.", "Good first GR book if you are self-studying."),
      bookNote("Schutz, A First Course in General Relativity", "Use for tensor training.", "Special relativity review, tensor calculus, Einstein equation, applications.", "A standard route into serious GR."),
      bookNote("Carroll, Spacetime and Geometry", "Use later for graduate depth.", "Differential geometry, curvature, cosmology, black holes.", "Best after tensors are no longer scary.")
    ],
    formulas: [
      formulaNote("ds^2 = g_{\\mu\\nu}dx^\\mu dx^\\nu", "The metric tells how spacetime intervals are measured."),
      formulaNote("G_{\\mu\\nu}+\\Lambda g_{\\mu\\nu}=\\frac{8\\pi G}{c^4}T_{\\mu\\nu}", "Einstein's equation links spacetime curvature to energy and momentum.")
    ],
    examples: ["Interpret a metric coefficient physically before calculating anything.", "Explain why free fall follows geodesics in curved spacetime."],
    checkpoint: "You are ready when tensors feel like structured bookkeeping for geometry."
  },
  {
    id: "qm",
    title: "Quantum Mechanics",
    group: "Modern",
    level: 12,
    prereq: ["linear", "de", "mechanics"],
    goal: "Wavefunctions, operators, Hilbert spaces, spin, hydrogen, perturbation, scattering.",
    summary: "Quantum mechanics describes reality with probability amplitudes in vector spaces. The subject combines linear algebra, differential equations, Hamiltonians, measurement, and physical interpretation.",
    mustLearn: ["Wavefunctions and probability density", "Operators, observables, and expectation values", "Time-dependent and time-independent Schrodinger equations", "Infinite well, oscillator, tunneling, hydrogen atom", "Spin, angular momentum, perturbation theory, and scattering basics"],
    books: [
      bookNote("Susskind, Quantum Mechanics: The Theoretical Minimum", "Use as the conceptual bridge into real QM.", "States, operators, spin, entanglement, measurement.", "Great before Griffiths if you want the rules in a compact form."),
      bookNote("Griffiths and Schroeter, Introduction to Quantum Mechanics", "Use as the standard undergraduate core.", "Wavefunction, Schrodinger equation, formalism, spin, identical particles, perturbation, scattering.", "This is the main text for university-level self-study."),
      bookNote("Shankar, Principles of Quantum Mechanics", "Use for mathematical maturity and advanced depth.", "Vector spaces, postulates, path integrals, symmetries, approximation methods.", "Use after Griffiths or alongside it if your linear algebra is strong.")
    ],
    formulas: [
      formulaNote("i\\hbar\\frac{\\partial}{\\partial t}\\Psi = \\hat H\\Psi", "The time-dependent Schrodinger equation says the Hamiltonian generates time evolution."),
      formulaNote("\\langle A \\rangle = \\int \\psi^* \\hat A \\psi\\,dx", "An expectation value is the average result predicted for many measurements.")
    ],
    examples: ["Normalize the particle-in-a-box wavefunction and explain why boundary conditions quantize energy.", "Compute the probability of finding a particle in the left half of a box."],
    checkpoint: "You should be able to solve simple systems and explain the physical meaning of the math."
  },
  {
    id: "qft",
    title: "Quantum Field Theory",
    group: "Advanced",
    level: 13,
    prereq: ["qm", "sr"],
    goal: "Fields, creation and annihilation operators, path integrals, QED, renormalization ideas.",
    summary: "Quantum field theory combines quantum mechanics and special relativity. Particles become excitations of fields, interactions are encoded by symmetries and Lagrangians, and calculations often use perturbation theory.",
    mustLearn: ["Classical field theory and Lagrangian density", "Canonical quantization", "Creation and annihilation operators", "Feynman diagrams and perturbation theory", "Gauge symmetry, QED, and renormalization ideas"],
    books: [
      bookNote("Lancaster and Blundell, Quantum Field Theory for the Gifted Amateur", "Use as the approachable first QFT book.", "Classical fields, second quantization, path integrals, QED, renormalization overview.", "Best first pass before a graduate text."),
      bookNote("Peskin and Schroeder, An Introduction to Quantum Field Theory", "Use later as the graduate standard.", "Relativistic fields, scattering, QED, renormalization, non-Abelian gauge theory.", "Do not rush this before Griffiths/Shankar and relativity."),
      bookNote("Tong QFT Lecture Notes", "Use as free high-quality notes.", "Canonical quantization, path integrals, symmetries, gauge fields.", "Excellent for checking concepts alongside books.")
    ],
    formulas: [
      formulaNote("\\mathcal L = \\frac{1}{2}(\\partial_\\mu \\phi)(\\partial^\\mu \\phi)-\\frac{1}{2}m^2\\phi^2", "A simple scalar field Lagrangian encodes field dynamics."),
      formulaNote("[a_p,a_q^\\dagger] = \\delta_{pq}", "Creation and annihilation operators build particle states from field modes.")
    ],
    examples: ["Interpret a Feynman diagram as a term in a perturbation expansion, not a literal movie.", "Quantize a collection of harmonic oscillator modes as a first field model."],
    checkpoint: "You are ready when particles-as-field-excitations is mathematically meaningful."
  },
  {
    id: "particle",
    title: "Particle Physics",
    group: "Advanced",
    level: 14,
    prereq: ["qft"],
    goal: "Symmetries, Standard Model, quarks, leptons, gauge bosons, and Higgs overview.",
    summary: "Particle physics studies the fundamental constituents and interactions of matter. The Standard Model is organized by symmetry, conservation laws, quantum numbers, and scattering evidence.",
    mustLearn: ["Particles, antiparticles, and quantum numbers", "Conservation laws and symmetries", "Quarks, leptons, gauge bosons, and Higgs", "Feynman diagrams as calculation tools", "Cross sections, decays, and experimental signatures"],
    books: [
      bookNote("Griffiths, Introduction to Elementary Particles", "Use as the standard undergraduate particle text.", "Relativistic kinematics, symmetries, quarks, electroweak theory, Standard Model.", "Good after quantum mechanics and special relativity."),
      bookNote("Thomson, Modern Particle Physics", "Use for a modern experimental-theory bridge.", "Detectors, symmetries, weak interactions, QCD, electroweak unification.", "Helpful if you want current particle-physics language."),
      bookNote("Particle Data Group Review", "Use as the official reference.", "Particle properties, constants, review articles.", "Use for lookup, not first learning.")
    ],
    formulas: [
      formulaNote("\\sigma \\sim \\frac{\\text{events}}{\\text{luminosity}}", "A cross section measures interaction probability in scattering experiments."),
      formulaNote("Q = T_3 + \\frac{Y}{2}", "The Gell-Mann-Nishijima-style relation connects charge to weak isospin and hypercharge in symmetry descriptions.")
    ],
    examples: ["Use conservation of charge, lepton number, and energy to decide whether a decay is allowed.", "Read a simple collision event and identify incoming and outgoing particles."],
    checkpoint: "You should connect particle lists to symmetries and experimental signatures."
  },
  {
    id: "condensed",
    title: "Condensed Matter",
    group: "Advanced",
    level: 15,
    prereq: ["qm", "statmech"],
    goal: "Crystals, reciprocal space, phonons, bands, semiconductors, superconductivity.",
    summary: "Condensed matter uses quantum mechanics and statistical mechanics to explain solids and materials. It is the physics of crystals, bands, phonons, semiconductors, magnetism, and superconductivity.",
    mustLearn: ["Crystal lattices and reciprocal space", "Phonons and lattice vibrations", "Free electron model and band theory", "Semiconductors and Fermi surfaces", "Superconductivity and collective behavior"],
    books: [
      bookNote("Kittel, Introduction to Solid State Physics", "Use as the classic undergraduate entry.", "Crystal structure, reciprocal lattice, phonons, electrons, bands, magnetism, superconductivity.", "Broad and standard, with many physical models."),
      bookNote("Ashcroft and Mermin, Solid State Physics", "Use for deeper theoretical mastery.", "Crystal geometry, electron theory, bands, transport, magnetism.", "More demanding and more complete."),
      bookNote("Simon, The Oxford Solid State Basics", "Use as a friendly modern bridge.", "Solids, phonons, electrons, bands, semiconductors.", "Excellent before or alongside Kittel.")
    ],
    formulas: [
      formulaNote("\\psi_{nk}(r)=e^{ik\\cdot r}u_{nk}(r)", "Bloch's theorem says crystal electrons are waves modulated by lattice-periodic functions."),
      formulaNote("E_F", "The Fermi energy marks the highest occupied energy at zero temperature and organizes electron behavior.")
    ],
    examples: ["Explain why a periodic lattice creates allowed and forbidden energy bands.", "Compare conductors, semiconductors, and insulators using band gaps."],
    checkpoint: "You should see materials as many-particle quantum systems with symmetry and statistics."
  },
  {
    id: "computational",
    title: "Computational Physics",
    group: "Advanced",
    level: 16,
    prereq: ["calculus", "linear"],
    goal: "Numerical integration, ODE/PDE solvers, eigenproblems, Monte Carlo, simulations.",
    summary: "Computational physics turns equations into experiments you can run. It is essential for modern physics because many real systems cannot be solved exactly.",
    mustLearn: ["Python basics, arrays, plotting, and numerical error", "Numerical integration and differentiation", "ODE and PDE solvers", "Eigenvalue problems and matrix methods", "Monte Carlo methods and simulation design"],
    books: [
      bookNote("Newman, Computational Physics", "Use as the main self-study text.", "Python computation, integration, ODEs, PDEs, Fourier transforms, Monte Carlo, quantum examples.", "Ideal for building real simulations as you learn."),
      bookNote("Landau, Paez, and Bordeianu, Computational Physics", "Use for broader project-based practice.", "Numerical methods across mechanics, chaos, quantum, statistical physics.", "Good if you want more programming projects."),
      bookNote("SciPy / NumPy documentation", "Use as the practical toolkit reference.", "Linear algebra, integration, optimization, sparse matrices, plotting ecosystem.", "Learn enough to implement the equations yourself.")
    ],
    formulas: [
      formulaNote("x_{n+1}=x_n+h f(x_n,t_n)", "Euler's method is the simplest ODE step; it teaches numerical approximation and error."),
      formulaNote("A\\vec v=\\lambda\\vec v", "Numerical eigenvalue solvers compute allowed modes, energies, and stability directions.")
    ],
    examples: ["Simulate projectile motion and compare numerical output to the analytic formula.", "Build a finite-difference particle-in-a-box Hamiltonian and compute energy levels."],
    checkpoint: "You should be able to code a physics model, test it against a known case, and explain numerical error."
  }
];

function bookNote(title, use, chapters, summary) {
  return { title, use, chapters, summary };
}

function formulaNote(latex, meaning) {
  return { latex, meaning };
}

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

function phaseFor(concept) {
  if (concept.level <= 2) return "Foundation reset";
  if (concept.level <= 5) return "University math core";
  if (concept.level <= 9) return "Bachelor physics core";
  if (concept.level <= 12) return "Modern physics and quantum";
  return "Advanced research branches";
}

function listItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderBookItems(books) {
  return books.map((book, index) => `
    <div class="book-item">
      <div class="book-kicker">Book ${index + 1}</div>
      <h4>${book.title}</h4>
      <p><strong>Why read it:</strong> ${book.use}</p>
      <p><strong>Chapters/topics to study:</strong> ${book.chapters}</p>
      <p><strong>Mini summary:</strong> ${book.summary}</p>
      <p><strong>What to extract from it:</strong> definitions, solved examples, problem-solving patterns, and the formulas that connect to this lesson.</p>
    </div>
  `).join("");
}

function renderFormulaItems(formulas) {
  return formulas.map((formula) => `
    <div class="formula-card">
      <code>\\(${formula.latex}\\)</code>
      <p>${formula.meaning}</p>
    </div>
  `).join("");
}

function renderLearningPath() {
  const root = document.getElementById("learningPath");
  if (!root) return;
  root.innerHTML = CONCEPTS.map((concept, index) => {
    const status = conceptStatus(concept);
    const books = concept.books.slice(0, 2).map((book) => book.title).join(" + ");
    const must = concept.mustLearn.slice(0, 3).join("; ");
    return `
      <article class="learning-step" data-concept="${concept.id}">
        <div class="step-number">${String(index + 1).padStart(2, "0")}</div>
        <div class="card step-body ${status}">
          <div class="tag-row">
            <span class="tag">${phaseFor(concept)}</span>
            <span class="tag">${concept.group}</span>
            <span class="tag">${status}</span>
          </div>
          <h3>${concept.title}</h3>
          <p>${concept.summary}</p>
          <div class="mini-row">
            <div class="mini-panel"><strong>Must learn</strong><p>${must}</p></div>
            <div class="mini-panel"><strong>Main books</strong><p>${books}</p></div>
            <div class="mini-panel"><strong>Checkpoint</strong><p>${concept.checkpoint}</p></div>
          </div>
          <div class="lesson-action-row">
            <button class="button ghost open-lesson" type="button" data-concept="${concept.id}">Open Full Lesson</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
  root.querySelectorAll(".open-lesson").forEach((button) => {
    button.addEventListener("click", () => openConceptLesson(button.dataset.concept));
  });
}

function openConceptLesson(id) {
  const concept = CONCEPTS.find((item) => item.id === id);
  const modal = document.getElementById("conceptModal");
  const body = document.getElementById("conceptModalBody");
  if (!concept || !modal || !body) return;
  document.getElementById("conceptModalTitle").textContent = concept.title;
  document.getElementById("conceptModalSub").textContent = `${phaseFor(concept)}. Learn this before testing it.`;
  body.innerHTML = `
    <div class="lesson-grid">
      <section class="lesson-panel full">
        <h3>What This Subject Is About</h3>
        <p>${concept.summary}</p>
      </section>
      <section class="lesson-panel full book-spotlight">
        <h3>Books To Read For This Topic</h3>
        <p>These are the topic-specific books or university resources to use for this lesson. Read the listed chapters/topics, then do problems from the same section before moving forward.</p>
        <div class="book-list">${renderBookItems(concept.books)}</div>
      </section>
      <section class="lesson-panel">
        <h3>What You Must Learn</h3>
        <ul>${listItems(concept.mustLearn)}</ul>
      </section>
      <section class="lesson-panel">
        <h3>Why It Matters For Quantum Physics</h3>
        <p>${concept.goal}</p>
        <p style="margin-top:8px"><strong>Prerequisites:</strong> ${concept.prereq.length ? concept.prereq.map((item) => CONCEPTS.find((c) => c.id === item)?.title || item).join(", ") : "None. Start here."}</p>
      </section>
      <section class="lesson-panel full">
        <h3>Formulas To Understand</h3>
        <p>Do not memorize these blindly. For each formula, know what every symbol means, the units, the assumptions, and one physical example.</p>
        <div class="formula-list">${renderFormulaItems(concept.formulas)}</div>
      </section>
      <section class="lesson-panel">
        <h3>Worked Example Ideas</h3>
        <ul>${listItems(concept.examples)}</ul>
      </section>
      <section class="lesson-panel">
        <h3>How To Study This Step</h3>
        <ol>
          <li>Read the summary and explain it out loud in plain English.</li>
          <li>Study the listed book chapters or topics.</li>
          <li>Rewrite each formula and define every symbol.</li>
          <li>Work the example ideas without looking at the answer first.</li>
          <li>Only then move to the final tests section.</li>
        </ol>
      </section>
      <section class="lesson-panel full">
        <h3>Ready-To-Move-On Checkpoint</h3>
        <p>${concept.checkpoint}</p>
        <div class="lesson-action-row">
          <button class="button" type="button" id="markLessonStudied" data-concept="${concept.id}">Mark Lesson Studied</button>
          <a class="button secondary" href="#practice" id="jumpToFinalTests">Go To Final Tests</a>
        </div>
      </section>
    </div>
  `;
  document.body.classList.add("modal-open");
  modal.setAttribute("aria-hidden", "false");
  document.getElementById("markLessonStudied")?.addEventListener("click", () => markConceptMastered(concept.id));
  document.getElementById("jumpToFinalTests")?.addEventListener("click", closeConceptLesson);
  if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([body]);
}

function closeConceptLesson() {
  const modal = document.getElementById("conceptModal");
  modal?.setAttribute("aria-hidden", "true");
  if (document.getElementById("diagnosticModal")?.getAttribute("aria-hidden") !== "false") {
    document.body.classList.remove("modal-open");
  }
}

function markConceptMastered(id) {
  const p = profile || defaultProfile();
  p.mastered = [...new Set([...(p.mastered || []), id])];
  p.roadmap = buildRoadmap(p.currentLevel || 1, CONCEPTS.filter((concept) => !p.mastered.includes(concept.id)).slice(0, 8).map((concept) => concept.id));
  saveProfile(p);
  openConceptLesson(id);
}

function renderDashboard() {
  if (!document.getElementById("profileTitle")) return;
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
  if (!grid) return;
  grid.innerHTML = CONCEPTS.map((concept) => {
    const status = conceptStatus(concept);
    return `
      <article class="card concept-card ${status}" data-state="${status}" data-concept="${concept.id}">
        <h3>${concept.title}</h3>
        <p>${concept.summary}</p>
        <div class="tag-row">
          <span class="tag">${concept.group}</span>
          <span class="tag">Level ${concept.level}</span>
        </div>
        <span class="card-action">Open lesson</span>
      </article>
    `;
  }).join("");
  grid.querySelectorAll(".concept-card").forEach((card) => {
    card.addEventListener("click", () => {
      openConceptLesson(card.dataset.concept);
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
  if (!root) return;
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
  if (!root) return;
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
  renderLearningPath();
  renderDashboard();
  renderCurriculum();
  renderKnowledgeGraph();
}

function init() {
  bootFieldCanvas(document.querySelector(".field-canvas"));
  if (!document.getElementById("learningPath")) return;
  renderTutorSelects();
  renderTextbooks();
  renderAll();
  drawSim();
  drawViz();
  setInterval(() => { drawSim(); drawViz(); }, 80);

  document.getElementById("openDiagnostic")?.addEventListener("click", () => openDiagnostic(true));
  document.getElementById("closeDiagnostic")?.addEventListener("click", closeDiagnostic);
  document.getElementById("nextQuestion")?.addEventListener("click", submitDiagnosticAnswer);
  document.getElementById("applyRoadmap")?.addEventListener("click", applyDiagnosticRoadmap);
  document.getElementById("retakeDiagnostic")?.addEventListener("click", () => startDiagnostic());
  document.getElementById("closeConceptModal")?.addEventListener("click", closeConceptLesson);
  document.getElementById("conceptModal")?.addEventListener("click", (event) => {
    if (event.target.id === "conceptModal") closeConceptLesson();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeConceptLesson();
  });
  document.getElementById("startTutor").addEventListener("click", startTutor);
  document.getElementById("sendReply").addEventListener("click", sendTutorReply);
  document.getElementById("getHint").addEventListener("click", tutorHint);
  document.getElementById("explainAnswer").addEventListener("click", tutorExplain);
  document.getElementById("generateProblem").addEventListener("click", renderPractice);
  document.getElementById("showPracticeHint").addEventListener("click", () => document.getElementById("practiceHint").classList.add("show"));
  document.getElementById("showPracticeAnswer").addEventListener("click", () => document.getElementById("practiceAnswer").classList.add("show"));
  ["simType", "paramA", "paramB"].forEach((id) => document.getElementById(id).addEventListener("input", drawSim));
  document.getElementById("vizType").addEventListener("input", drawViz);
}

document.addEventListener("DOMContentLoaded", init);

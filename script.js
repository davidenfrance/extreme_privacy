const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
const assessmentForm = document.querySelector('#assessment-form');
const formStatus = document.querySelector('#form-status');

menuToggle?.addEventListener('click', () => {
  const open = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? 'Close' : 'Menu';
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.textContent = 'Menu';
  });
});

assessmentForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(assessmentForm);
  const name = String(data.get('name') || '').trim();
  formStatus.textContent = `Thank you${name ? `, ${name}` : ''}. Your inquiry has been received. A member of the Extreme Privacy team will follow up discreetly.`;
  assessmentForm.reset();
});

const riskCalculator = document.querySelector('#risk-calculator');
const riskScore = document.querySelector('#risk-score');
const riskLevel = document.querySelector('#risk-level');
const riskSummary = document.querySelector('#risk-summary');
const riskBreakdown = document.querySelector('#risk-breakdown');

const calculatorWeights = {
  property: { residential: 10, commercial: 16, secure: 22 },
  envelope: { light: 16, masonry: 8, unknown: 14 },
  openings: { many: 18, some: 10, controlled: 4 },
  wireless: { dense: 16, moderate: 9, limited: 4 },
  objective: { conversation: 10, communications: 16, sensitive: 22 },
  verification: { none: 14, partial: 7, complete: 2 },
};

const calculatorLabels = {
  property: 'Project type', envelope: 'Envelope uncertainty', openings: 'Openings and penetrations', wireless: 'Wireless environment', objective: 'Privacy objective', verification: 'Existing verification',
};

function selectedValue(name) {
  return riskCalculator?.querySelector(`input[name="${name}"]:checked`)?.value;
}

riskCalculator?.addEventListener('submit', (event) => {
  event.preventDefault();
  const values = Object.keys(calculatorWeights).reduce((result, key) => ({ ...result, [key]: selectedValue(key) }), {});
  const breakdown = Object.entries(values).map(([key, value]) => ({ label: calculatorLabels[key], points: calculatorWeights[key][value] || 0 }));
  const score = Math.min(100, breakdown.reduce((total, item) => total + item.points, 0));
  let level = 'Lower initial signal';
  let summary = 'Your answers suggest a more defined starting point, but field conditions and frequency-specific objectives still need verification.';
  if (score >= 61) {
    level = 'Higher coordination need';
    summary = 'Your answers indicate several factors that warrant an early, coordinated assessment before material or construction decisions are made.';
  } else if (score >= 36) {
    level = 'Moderate coordination need';
    summary = 'Your answers indicate a mixed project profile. A baseline review can help identify openings, systems, and test criteria that deserve attention.';
  }
  riskScore.textContent = score;
  riskLevel.textContent = level;
  riskSummary.textContent = summary;
  riskBreakdown.innerHTML = breakdown.map((item) => `<div><span>${item.label}</span><b>+${item.points}</b></div>`).join('');
});

const briefBuilder = document.querySelector('#brief-builder-form');
const briefText = document.querySelector('#brief-text');
const copyBrief = document.querySelector('#copy-brief');
const briefStatus = document.querySelector('#brief-status');

const briefSelections = { property: 'high-value residence', objective: 'confidential conversations and meetings', stage: 'early feasibility', priority: 'a measured site assessment' };

function renderBrief() {
  briefText.textContent = `I am exploring a ${briefSelections.property} for ${briefSelections.objective}. The project is at ${briefSelections.stage}, and my next priority is ${briefSelections.priority}.`;
}

briefBuilder?.querySelectorAll('.brief-options').forEach((group) => {
  group.addEventListener('click', (event) => {
    const option = event.target.closest('.brief-option');
    if (!option) return;
    group.querySelectorAll('.brief-option').forEach((item) => item.classList.remove('active'));
    option.classList.add('active');
    briefSelections[group.dataset.group] = option.dataset.value;
    renderBrief();
    if (briefStatus) briefStatus.textContent = '';
  });
});

copyBrief?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(briefText.textContent);
    briefStatus.textContent = 'Brief copied to your clipboard.';
  } catch {
    briefStatus.textContent = 'Select and copy the brief text above.';
  }
});

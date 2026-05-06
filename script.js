const $ = (selector) => document.querySelector(selector);

const menuToggle = $('.menu-toggle');
const navLinks = $('#nav-links');
const year = $('#year');

year.textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

const parseGradeRows = (value) => {
  return value
    .split('\n')
    .map((row) => row.trim())
    .filter(Boolean)
    .map((row) => {
      const [grade, coefficient = '1'] = row.replace(';', ',').split(',');
      return {
        grade: Number.parseFloat(grade),
        coefficient: Number.parseFloat(coefficient),
      };
    })
    .filter(({ grade, coefficient }) => Number.isFinite(grade) && Number.isFinite(coefficient));
};

const calculateGrades = () => {
  const rows = parseGradeRows($('#grades-input').value);
  const coefficientTotal = rows.reduce((sum, row) => sum + row.coefficient, 0);

  if (!rows.length || coefficientTotal <= 0) {
    $('#grades-result').textContent = 'Ajoute au moins une note valide, par exemple : 15,2';
    return;
  }

  const total = rows.reduce((sum, row) => sum + row.grade * row.coefficient, 0);
  $('#grades-result').textContent = `Moyenne : ${(total / coefficientTotal).toFixed(2)} / 20`;
};

const countWords = () => {
  const text = $('#words-input').value.trim();
  const words = text ? text.match(/\p{L}[\p{L}'’-]*|\d+/gu) ?? [] : [];
  const sentences = text ? text.split(/[.!?]+/).filter((sentence) => sentence.trim()).length : 0;
  $('#words-result').textContent = `${words.length} mot${words.length > 1 ? 's' : ''} • ${text.length} caractère${text.length > 1 ? 's' : ''} • ${sentences} phrase${sentences > 1 ? 's' : ''}`;
};

const generatePassword = () => {
  const length = Math.min(Math.max(Number.parseInt($('#password-length').value, 10) || 16, 8), 40);
  const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*?';
  const randomValues = new Uint32Array(length);
  crypto.getRandomValues(randomValues);

  $('#password-length').value = length;
  $('#password-result').textContent = Array.from(randomValues, (value) => characters[value % characters.length]).join('');
};

const calculateAge = () => {
  const birthdayValue = $('#birthday-input').value;

  if (!birthdayValue) {
    $('#age-result').textContent = 'Choisis une date de naissance.';
    return;
  }

  const birthday = new Date(`${birthdayValue}T00:00:00`);
  const today = new Date();

  if (birthday > today) {
    $('#age-result').textContent = 'La date de naissance doit être dans le passé.';
    return;
  }

  let years = today.getFullYear() - birthday.getFullYear();
  let months = today.getMonth() - birthday.getMonth();
  let days = today.getDate() - birthday.getDate();

  if (days < 0) {
    months -= 1;
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += previousMonth;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  $('#age-result').textContent = `${years} an${years > 1 ? 's' : ''}, ${months} mois et ${days} jour${days > 1 ? 's' : ''}`;
};

const convertTemperature = () => {
  const value = Number.parseFloat($('#temperature-input').value);
  const scale = $('#temperature-scale').value;

  if (!Number.isFinite(value)) {
    $('#temperature-result').textContent = 'Entre une température valide.';
    return;
  }

  const converted = scale === 'c' ? (value * 9) / 5 + 32 : ((value - 32) * 5) / 9;
  const unit = scale === 'c' ? '°F' : '°C';
  $('#temperature-result').textContent = `${converted.toFixed(1)} ${unit}`;
};

const toolActions = {
  grades: calculateGrades,
  words: countWords,
  password: generatePassword,
  age: calculateAge,
  temperature: convertTemperature,
};

document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-tool]');
  if (!button) return;

  toolActions[button.dataset.tool]?.();
});

$('#words-input').addEventListener('input', countWords);

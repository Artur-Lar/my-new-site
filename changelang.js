let currentLanguage = "ru"; // По умолчанию русский язык

function loadLanguageResources() {
  fetch(`lang_${currentLanguage}.json`)
    .then((response) => response.json())
    .then((data) => {
      // Замените тексты на странице с использованием данных из файла
      document.getElementById("aboutMe").textContent = data.aboutMe;
      document.getElementById("skills").textContent = data.skills;
      document.getElementById("projects").textContent = data.projects;
      document.getElementById("contact").textContent = data.contact;
      document.getElementById("aboutMe_title").textContent = data.aboutMe_title;
      document.getElementById("aboutMe_miniTitle").textContent =
        data.aboutMe_miniTitle;
      document.getElementById("aboutMe_text").textContent = data.aboutMe_text;

      document.getElementById("bookshop_title").textContent =
        data.bookshop_title;
      document.getElementById("bookshop_text_1").textContent =
        data.bookshop_text_1;
      document.getElementById("bookshop_text_2").textContent =
        data.bookshop_text_2;
      document.getElementById("bookshop_text_3").textContent =
        data.bookshop_text_3;
      document.getElementById("bookshop_text_4").textContent =
        data.bookshop_text_4;
      document.getElementById("bookshop_text_5").textContent =
        data.bookshop_text_5;
      document.getElementById("kanban_title").textContent = data.kanban_title;
      document.getElementById("kanban_text_1").textContent = data.kanban_text_1;
      document.getElementById("kanban_text_2").textContent = data.kanban_text_2;
      document.getElementById("kanban_text_3").textContent = data.kanban_text_3;
      document.getElementById("kanban_text_4").textContent = data.kanban_text_4;
      document.getElementById("kanban_text_5").textContent = data.kanban_text_5;
      document.getElementById("scan_title").textContent = data.scan_title;
      document.getElementById("scan_text_1").textContent = data.scan_text_1;
      document.getElementById("scan_text_2").textContent = data.scan_text_2;
      document.getElementById("scan_text_3").textContent = data.scan_text_3;
      document.getElementById("scan_text_4").textContent = data.scan_text_4;
      document.getElementById("scan_text_5").textContent = data.scan_text_5;
      document.getElementById("scan_text_6").textContent = data.scan_text_6;
      document.getElementById("scan_text_7").textContent = data.scan_text_7;
      document.getElementById("scan_text_8").textContent = data.scan_text_8;
      document.getElementById("empList_title").textContent = data.empList_title;
      document.getElementById("empList_text_1").textContent =
        data.empList_text_1;
      document.getElementById("empList_text_2").textContent =
        data.empList_text_2;
      document.getElementById("empList_text_3").textContent =
        data.empList_text_3;
      document.getElementById("skyline_title").textContent = data.skyline_title;
      document.getElementById("skyline_text_1").textContent =
        data.skyline_text_1;
      document.getElementById("skyline_text_2").textContent =
        data.skyline_text_2;
      document.getElementById("skyline_text_3").textContent =
        data.skyline_text_3;
      document.getElementById("skyline_text_4").textContent =
        data.skyline_text_4;
      document.getElementById("skyline_text_5").textContent =
        data.skyline_text_5;
      document.getElementById("skyline_text_6").textContent =
        data.skyline_text_6;
      document.getElementById("skyline_text_7").textContent =
        data.skyline_text_7;
      document.getElementById("contactMe").textContent = data.contactMe;
      document.getElementById("tgProfile").textContent = data.tgProfile;
      document.getElementById("ALarionov").textContent = data.ALarionov;
      // Добавьте другие элементы и тексты
    })
    .catch((error) =>
      console.error(`Failed to load language resources: ${error}`)
    );
}

// Вызывайте эту функцию при загрузке страницы
document.addEventListener("DOMContentLoaded", loadLanguageResources);

// Функция для изменения языка
function changeLanguage(lang) {
  currentLanguage = lang;
  loadLanguageResources();
}

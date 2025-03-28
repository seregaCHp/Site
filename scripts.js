// Функция для плавной прокрутки к секции
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Плавная прокрутка
    }
}

// Функция для переключения видимости выпадающего списка
function toggleDropdown(dropdownId) {
    const dropdownContent = document.getElementById(dropdownId);
    if (dropdownContent) {
        // Закрываем все выпадающие списки, кроме текущего
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            if (dropdown.id !== dropdownId) {
                dropdown.classList.add('hidden');
            }
        });
        // Переключаем видимость текущего выпадающего списка
        dropdownContent.classList.toggle('hidden');
    }
}

// Функция для открытия модального окна
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
    }
}

// Функция для закрытия модального окна
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Закрытие модального окна при клике вне его области
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal.id);
        }
    });
};

// Функция для переключения видимости секций (например, для гайдов, турниров и т.д.)
function toggleSection(sectionId) {
    // Закрываем все секции, кроме текущей
    document.querySelectorAll('.hidden-section').forEach(section => {
        if (section.id !== sectionId) {
            section.classList.add('hidden');
        }
    });

    // Переключаем видимость текущей секции
    const currentSection = document.getElementById(sectionId);
    if (currentSection) {
        currentSection.classList.toggle('hidden');
    }
}

// Инициализация (если нужно)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт загружен!');
    // Здесь можно добавить код, который должен выполниться после загрузки страницы
});
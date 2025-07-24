
//     // Language selector functionality
//     const languageSelector = document.getElementById('languageSelector');
//     const dropdownMenu = document.getElementById('dropdownMenu');
//     // const selectedLanguage = languageSelector.querySelector('.selected-language');
//     const dropdownItems = document.querySelectorAll('.dropdown-item');

//     // Currency selector functionality
//     const currencySelector = document.getElementById('currencySelector');
//     const currencyDropdown = document.getElementById('currencyDropdown');
//     const selectedCurrency = currencySelector.querySelector('.selected-currency');
//     const currencyOptions = document.querySelectorAll('.currency-option');

//     //Toggle language dropdown
//     languageSelector.addEventListener('click', function(e) {
//       e.stopPropagation();
//       languageSelector.classList.toggle('open');
//       currencySelector.classList.remove('open'); // Close currency dropdown
//     });

//     // Toggle currency dropdown
//     currencySelector.addEventListener('click', function(e) {
//       e.stopPropagation();
//       currencySelector.classList.toggle('open');
//       languageSelector.classList.remove('open'); // Close language dropdown
//     });

//     // Close dropdowns when clicking outside
//     document.addEventListener('click', function() {
//       languageSelector.classList.remove('open');
//       currencySelector.classList.remove('open');
//     });

//     // Handle language selection
//     dropdownItems.forEach(item => {
//       item.addEventListener('click', function(e) {
//         e.stopPropagation();
        
//         // Get selected values
//         const lang = this.dataset.lang;
//         const flagClass = this.querySelector('.flag-icon').className;
//         const langName = this.querySelector('.language-name').textContent;
        
//         // Update selected language display
//         selectedLanguage.innerHTML = `
//           <div class="${flagClass}"></div>
//           <span class="language-name">${langName}</span>
//           <span class="dropdown-arrow"></span>
//         `;
        
//         // Update dropdown items visibility
//         dropdownItems.forEach(dropdownItem => {
//           if (dropdownItem.dataset.lang === lang) {
//             dropdownItem.classList.add('selected');
//           } else {
//             dropdownItem.classList.remove('selected');
//           }
//         });
        
//         // Close dropdown
//         languageSelector.classList.remove('open');
        
//         console.log('Language changed to:', langName);
//       });
//     });

//     // Handle currency selection
//     currencyOptions.forEach(option => {
//       option.addEventListener('click', function(e) {
//         e.stopPropagation();
        
//         // Get selected currency
//         const currency = this.dataset.currency;
        
//         // Update selected currency display
//         selectedCurrency.innerHTML = `
//           <span class="currency-name">${currency}</span>
//           <span class="dropdown-arrow"></span>
//         `;
        
//         // Update dropdown options visibility
//         currencyOptions.forEach(currencyOption => {
//           if (currencyOption.dataset.currency === currency) {
//             currencyOption.classList.add('selected');
//           } else {
//             currencyOption.classList.remove('selected');
//           }
//         });
        
//         // Close dropdown
//         currencySelector.classList.remove('open');
        
//         console.log('Currency changed to:', currency);
//       });
//     });

//     // Prevent dropdowns from closing when clicking inside menu
//     dropdownMenu.addEventListener('click', function(e) {
//       e.stopPropagation();
//     });

//     currencyDropdown.addEventListener('click', function(e) {
//       e.stopPropagation();
//     });

//     // Handle hover effects
//     languageSelector.addEventListener('mouseenter', function() {
//       if (!languageSelector.classList.contains('open')) {
//         languageSelector.style.transform = 'translateY(-1px)';
//       }
//     });

//     languageSelector.addEventListener('mouseleave', function() {
//       if (!languageSelector.classList.contains('open')) {
//         languageSelector.style.transform = 'translateY(0)';
//       }
//     });

//     currencySelector.addEventListener('mouseenter', function() {
//       if (!currencySelector.classList.contains('open')) {
//         currencySelector.style.transform = 'translateY(-1px)';
//       }
//     });

//     currencySelector.addEventListener('mouseleave', function() {
//       if (!currencySelector.classList.contains('open')) {
//         currencySelector.style.transform = 'translateY(0)';
//       }
//     });

//     // Initialize - hide currently selected items
//     dropdownItems[0].classList.add('selected');
//     currencyOptions[0].classList.add('selected');const mainImage = document.getElementById('mainImage');
// const mainContainer = document.getElementById('mainContainer');

// const images = [
//   'img/1main.jpg',
//   'img/2main.jpg',
//   'img/3main.jpg'
// ];

// const contentData = {
//   chair: {
//     title: 'From Italia<br>Sale 25% off<br>Armchairs!',
//     subtitle: 'Premium Italian furniture'
//   },
//   cream: {
//     title: 'Natural Cream<br>50% OFF<br>Organic Care',
//     subtitle: 'Smooth and hydrate your skin'
//   },
//   camera: {
//     title: 'Capture Moments<br>20% OFF<br>New Camera',
//     subtitle: 'Fujifilm instant memories'
//   }
// };

// const contentArray = ['chair', 'cream', 'camera'];

// function changeToDot(index) {
//   mainImage.src = images[index];

//   const contentKey = contentArray[index];
//   const content = contentData[contentKey];

//   const overlay = mainContainer.querySelector('.content-overlay');
//   overlay.querySelector('.main-title').innerHTML = content.title;
//   overlay.querySelector('.main-subtitle').textContent = content.subtitle;

//   updateDots(index);

//   mainImage.style.transform = 'scale(1.05)';
//   mainContainer.style.transform = 'scale(1.01)';
//   setTimeout(() => {
//     mainImage.style.transform = 'scale(1)';
//     mainContainer.style.transform = 'scale(1)';
//   }, 300);
// }

// function updateDots(activeIndex) {
//   const dots = document.querySelectorAll('.dot');
//   dots.forEach((dot, index) => {
//     dot.classList.toggle('active', index === activeIndex);
//   });
// }

    
       
         
            
//             // تغيير المحتوى
//             const contentKey = contentArray[index];
//             const content = contentData[contentKey];
//             const overlay = mainContainer.querySelector('.content-overlay');
//             overlay.querySelector('.main-title').innerHTML = content.title;
//             overlay.querySelector('.main-subtitle').textContent = content.subtitle;
            
//             // تحديث النقاط
//             updateDots(index);
            
//             // تأثير بصري
//             mainContainer.style.transform = 'scale(1.01)';
//             setTimeout(() => {
//                 mainContainer.style.transform = 'scale(1)';
//                 mainImage.style.transform = 'scale(1)';
//             }, 300);
        

//         function updateDots(activeIndex) {
//             const dots = document.querySelectorAll('.dot');
//             dots.forEach((dot, index) => {
//                 if (index === activeIndex) {
//                     dot.classList.add('active');
//                 } else {
//                     dot.classList.remove('active');
//                 }
//             });
//         }

//         // تأثيرات إضافية عند تحميل الصفحة
//         window.addEventListener('load', function() {
//             const elements = document.querySelectorAll('.side-image-container, .main-image-container');
//             elements.forEach((element, index) => {
//                 element.style.opacity = '0';
//                 element.style.transform = 'translateY(30px)';
                
//                 setTimeout(() => {
//                     element.style.transition = 'all 0.6s ease';
//                     element.style.opacity = '1';
//                     element.style.transform = 'translateY(0)';
//                 }, index * 200);
//             });
//         });
//     // Search Dropdown Functionality
// const searchInput = document.getElementById('searchInput');
// const searchDropdown = document.getElementById('searchDropdown');
// const searchTags = document.querySelectorAll('.search-tag');

// // Show dropdown when search input is focused
// searchInput.addEventListener('focus', function() {
//   searchDropdown.classList.add('show');
// });

// // Hide dropdown when clicking outside
// document.addEventListener('click', function(event) {
//   if (!event.target.closest('.search-wrapper')) {
//     searchDropdown.classList.remove('show');
//   }
// });

// // Handle search tag clicks
// searchTags.forEach(tag => {
//   tag.addEventListener('click', function() {
//     searchInput.value = this.textContent;
//     searchDropdown.classList.remove('show');
//     searchInput.focus();
//   });
// });

// // Hide dropdown when typing and there's content
// searchInput.addEventListener('input', function() {
//   if (this.value.length > 0) {
//     searchDropdown.classList.remove('show');
//   }
// });

// // Show dropdown again when input is cleared and focused
// searchInput.addEventListener('keyup', function() {
//   if (this.value.length === 0 && document.activeElement === this) {
//     searchDropdown.classList.add('show');
//   }
// });

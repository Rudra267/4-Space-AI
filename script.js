document.addEventListener("DOMContentLoaded", () => {
    const optionCards = document.querySelectorAll(".option-card");
    const inputField = document.querySelector("footer input");
    
    const mainSidebar = document.querySelector(".main-sidebar");
    const sidebarIcon = document.querySelector(".sidebar-icon");

    if (mainSidebar) mainSidebar.classList.add("active");
    if (sidebarIcon) sidebarIcon.style.visibility = "hidden"; // Hide icon

    optionCards.forEach(card => {
        card.addEventListener("click", () => {
            if (inputField) inputField.value = card.textContent;
        });
    });

    const voiceBtn = document.querySelector(".voice-btn");
    if (voiceBtn) {
        voiceBtn.addEventListener("click", () => {
            alert("Voice input feature coming soon!");
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const sidebars = document.querySelectorAll(".main-sidebar");
    const sidebarIcons = document.querySelectorAll(".sidebar-icon");
    const closeIcons = document.querySelectorAll(".sidebar-icon-close");

    if (sidebars.length > 0 && sidebarIcons.length > 0 && closeIcons.length > 0) {
        sidebarIcons.forEach((icon, index) => {
            icon.addEventListener("click", () => {
                sidebars[index].classList.add("active");
                icon.style.visibility = "hidden"; // Hide icon
            });
        });

        closeIcons.forEach((closeIcon, index) => {
            closeIcon.addEventListener("click", () => {
                sidebars[index].classList.remove("active");
                setTimeout(() => {
                    sidebarIcons[index].style.visibility = "visible"; // Show icon
                }, 100);
            });
        });
    }

    const fileBtns = document.querySelectorAll(".file-btn");
    const fileInputs = document.querySelectorAll(".file-input");

    if (fileBtns.length > 0 && fileInputs.length > 0) {
        fileBtns.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                if (fileInputs[index]) {
                    fileInputs[index].click(); // Trigger file selection
                }
            });
        });

        fileInputs.forEach((input) => {
            input.addEventListener("change", (event) => {
                const fileName = event.target.files[0]?.name || "No file selected";
                alert(`Selected File: ${fileName}`);
            });
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const notificationBtn = document.getElementById("notificationBtn");
    const notificationDropdown = document.getElementById("notificationDropdown");

    if (notificationBtn && notificationDropdown) {
        notificationBtn.addEventListener("click", function(event) {
            notificationDropdown.style.display = notificationDropdown.style.display === "block" ? "none" : "block";
            event.stopPropagation();
        });

        document.addEventListener("click", function(event) {
            if (!notificationDropdown.contains(event.target) && event.target !== notificationBtn) {
                notificationDropdown.style.display = "none";
            }
        });
    }
});









document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.querySelector('.project-list');
    const newProjectBtn = document.querySelector('.folder');

    newProjectBtn.addEventListener('click', () => addProjectInput());

    function addProjectInput() {
        // Agar already koi input add hai to doosra na add ho
        if (document.querySelector('.project-input')) return;

        const inputContainer = document.createElement('li');
        inputContainer.classList.add('project-input');

        inputContainer.innerHTML = `
        <div class="prod">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 9.1V14.5C21 18.1 20 19 16 19H6C2 19 1 18.1 1 14.5V5.5C1 1.9 2 1 6 1H7.5C9 1 9.33 1.396 9.9 2.08L11.4 3.88C11.78 4.33 12 4.6 13 4.6H16C20 4.6 21 5.5 21 9.1Z" fill="#EAEBEE" stroke="#3D4C60" stroke-width="1.2" stroke-miterlimit="10"/>
                            </svg>
            <input type="text" class="project-name-input" placeholder="Enter project name" autofocus/>
            </div>
            <div>
            <button class="save-project"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9.83L8.83 12.66L14.5 7" stroke="#292D32" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
            <button class="cancel-project"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.08325 12.9168L12.9166 7.0835" stroke="#292D32" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.9166 12.9168L7.08325 7.0835" stroke="#292D32" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button></div>
        `;

        projectList.prepend(inputContainer);

        const inputField = inputContainer.querySelector('.project-name-input');
        const saveBtn = inputContainer.querySelector('.save-project');
        const cancelBtn = inputContainer.querySelector('.cancel-project');

        saveBtn.addEventListener('click', () => saveProject(inputField.value.trim(), inputContainer));
        cancelBtn.addEventListener('click', () => inputContainer.remove());
    }

    function saveProject(name, inputContainer) {
        if (!name) {
            alert('Project name cannot be empty!');
            return;
        }

        if (isDuplicateName(name)) {
            alert('Duplicate project name!');
            return;
        }

        inputContainer.remove(); // Remove input field
        addProjectToDOM(name); // Add project with formatted structure
    }

    function isDuplicateName(name) {
        return [...document.querySelectorAll('.project-name')].some(p => p.textContent.trim() === name);
    }

    function addProjectToDOM(projectName) {
        const newProject = document.createElement('li');
        newProject.classList.add('project');

        newProject.innerHTML = `
           
            <div class="prod">
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 9.1V14.5C21 18.1 20 19 16 19H6C2 19 1 18.1 1 14.5V5.5C1 1.9 2 1 6 1H7.5C9 1 9.33 1.396 9.9 2.08L11.4 3.88C11.78 4.33 12 4.6 13 4.6H16C20 4.6 21 5.5 21 9.1Z" fill="#EAEBEE" stroke="#3D4C60" stroke-width="1.2" stroke-miterlimit="10"/>
                            </svg>
                <p class="project-name">${projectName}</p>
                <span class="project-status">empty</span>
            </div>
            <div class="three-dot">⋮</div>
                    <ul class="dropdown">
                        <li><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.33331 7.5H10.6666" stroke="#292D32" stroke-opacity="0.9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10.1668V4.8335" stroke="#292D32" stroke-opacity="0.9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.99998 14.1668H9.99998C13.3333 14.1668 14.6666 12.8335 14.6666 9.50016V5.50016C14.6666 2.16683 13.3333 0.833496 9.99998 0.833496H5.99998C2.66665 0.833496 1.33331 2.16683 1.33331 5.50016V9.50016C1.33331 12.8335 2.66665 14.1668 5.99998 14.1668Z" stroke="#292D32" stroke-opacity="0.9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

 New chat in Project</li>
                        <li class="edit-project"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6666 0.833496H5.33331C2.66665 0.833496 1.33331 2.16683 1.33331 4.8335V13.5002C1.33331 13.8668 1.63331 14.1668 1.99998 14.1668H10.6666C13.3333 14.1668 14.6666 12.8335 14.6666 10.1668V4.8335C14.6666 2.16683 13.3333 0.833496 10.6666 0.833496Z" stroke="#292D32" stroke-opacity="0.9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.60667 4.72677L5.14667 8.18677C5.01334 8.3201 4.88667 8.5801 4.86001 8.76677L4.67334 10.0868C4.60668 10.5668 4.94001 10.9001 5.42001 10.8334L6.73999 10.6468C6.92666 10.6201 7.18668 10.4934 7.32001 10.3601L10.78 6.9001C11.3733 6.30677 11.66 5.61343 10.78 4.73343C9.90001 3.84677 9.20667 4.12677 8.60667 4.72677Z" stroke="#292D32" stroke-opacity="0.9" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.11328 5.22021C8.40661 6.26688 9.22661 7.09355 10.2799 7.38688" stroke="#292D32" stroke-opacity="0.9" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

 Edit Project name</li>
                        <li class="delete"><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 3.48665C10.78 3.26665 8.54667 3.15332 6.32 3.15332C5 3.15332 3.68 3.21999 2.36 3.35332L1 3.48665" stroke="#E63C42" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.66669 2.8135L4.81335 1.94016C4.92002 1.30683 5.00002 0.833496 6.12669 0.833496H7.87335C9.00002 0.833496 9.08669 1.3335 9.18669 1.94683L9.33335 2.8135" stroke="#E63C42" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5667 5.59326L11.1334 12.3066C11.06 13.3533 11 14.1666 9.14002 14.1666H4.86002C3.00002 14.1666 2.94002 13.3533 2.86668 12.3066L2.43335 5.59326" stroke="#E63C42" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.88666 10.5H8.10666" stroke="#E63C42" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.33331 7.8335H8.66665" stroke="#E63C42" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Delete Project</li>
                    </ul>
                     <div class="popup">
                        <p>Are you sure?</p>
                        <div class="btns">
                            <button class="cancelDelete">Cancel</button>
                            <button class="confirmDelete">Delete</button>
                        </div>
                        
                    </div>
        `;

        projectList.prepend(newProject);

        // ✅ New project pe event listener lagana zaroori hai
        addEditFunctionality(newProject);
        addDeleteFunctionality(newProject);
    }

    // ✅ Separate function for Edit Functionality
    function addEditFunctionality(project) {
        const editButton = project.querySelector(".edit-project");

        if (!editButton) {
            console.error("Edit button not found!");
            return;
        }

        editButton.addEventListener("click", function () {
            editProjectName(project);
        });
    }

    function editProjectName(project) {
        if (!project) return;

        let projectNameSpan = project.querySelector(".project-name");


        if (!projectNameSpan) {
            console.error("Project name element not found!");
            return;
        }

        let currentName = projectNameSpan.textContent.trim();

        projectNameSpan.innerHTML = `
            <input type="text" class="project-name-input" value="${currentName}" autofocus />
            <div>
            <button class="save-project"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9.83L8.83 12.66L14.5 7" stroke="#292D32" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
            <button class="cancel-project"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.08325 12.9168L12.9166 7.0835" stroke="#292D32" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.9166 12.9168L7.08325 7.0835" stroke="#292D32" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button></div>
        `;

        let inputField = projectNameSpan.querySelector(".project-name-input");

        projectNameSpan.querySelector(".save-project").addEventListener("click", function () {
            let newName = inputField.value.trim();
            if (newName && !isDuplicateName(newName)) {
                projectNameSpan.innerHTML = newName;
            } else {
                alert("Invalid or duplicate name!");
            }
        });

        projectNameSpan.querySelector(".cancel-project").addEventListener("click", function () {
            projectNameSpan.innerHTML = currentName;
        });

        inputField.focus();
    }

    function addDeleteFunctionality(project) {
        const deleteButton = project.querySelector(".delete");
        const popup = project.querySelector(".popup");
        const confirmDelete = project.querySelector(".confirmDelete");
        const cancelDelete = project.querySelector(".cancelDelete");

        if (!deleteButton || !popup || !confirmDelete || !cancelDelete) {
            console.error("Delete elements not found!");
            return;
        }

        deleteButton.addEventListener("click", () => popup.style.display = "block");
        cancelDelete.addEventListener("click", () => popup.style.display = "none");
        confirmDelete.addEventListener("click", () => {
            project.remove();
            alert("Project Deleted!");
        });
    }

    // ✅ Sabhi existing projects pe Edit & Delete functionality apply karna
    document.querySelectorAll(".project").forEach(project => {
        addEditFunctionality(project);
        addDeleteFunctionality(project);
    });

});




// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelectorAll('.project').forEach(project => {
//         const deleteButton = project.querySelector('.delete');
//         const popup = project.querySelector('.popup');
//         const confirmDelete = project.querySelector('.confirmDelete');
//         const cancelDelete = project.querySelector('.cancelDelete');

//         if (deleteButton && popup && confirmDelete && cancelDelete) {
//             deleteButton.addEventListener('click', function () {
//                 popup.style.display = 'block';
//             });

//             cancelDelete.addEventListener('click', function () {
//                 popup.style.display = 'none';
//             });

//             confirmDelete.addEventListener('click', function () {
//                 newProject.remove();
//                 alert('Project Deleted!'); 
//                 popup.style.display = 'none';
//             });
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".edit").forEach(button => {
        button.addEventListener("click", function () {
            let projectItem = this.closest(".project"); // Project ka parent element dhundo
            let projectNameDiv = projectItem.querySelector(".prod"); // Project name wali div
            let currentName = projectNameDiv.textContent.trim(); // Current project name

            // Editable input + Save & Cancel buttons
            projectNameDiv.innerHTML = `
                <input type="text" class="project-name-input" placeholder="Enter project name" value="${currentName}" autofocus />
                <button class="save-project"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9.83L8.83 12.66L14.5 7" stroke="#292D32" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
                <button class="cancel-project"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.08325 12.9168L12.9166 7.0835" stroke="#292D32" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.9166 12.9168L7.08325 7.0835" stroke="#292D32" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
            `;

            let inputField = projectNameDiv.querySelector(".project-name-input");

            // Save button event
            projectNameDiv.querySelector(".save-project").addEventListener("click", function () {
                let newName = inputField.value.trim();
                if (newName) {
                    projectNameDiv.innerHTML = `
                        <svg width="22" height="20" viewBox="0 0 22 20"><path d="..." /></svg>
                        ${newName} <span>3 chats</span>
                    `;
                }
            });

            // Cancel button event
            projectNameDiv.querySelector(".cancel-project").addEventListener("click", function () {
                projectNameDiv.innerHTML = `
                    <svg width="22" height="20" viewBox="0 0 22 20"><path d="..." /></svg>
                    ${currentName} <span>3 chats</span>
                `;
            });

            inputField.focus(); // Input field pe cursor le jao
        });
    });
});





function addIcons(chatDiv) {
    if (!chatDiv.querySelector(".icons")) {
        let iconsDiv = document.createElement("div");
        iconsDiv.classList.add("icons");
        iconsDiv.innerHTML = `
             <svg class="delete-btn" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 5.98665C13.78 5.76665 11.5467 5.65332 9.32 5.65332C8 5.65332 6.68 5.71999 5.36 5.85332L4 5.98665" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.66667 5.31337L7.81334 4.44004C7.92001 3.80671 8 3.33337 9.12667 3.33337H10.8733C12 3.33337 12.0867 3.83337 12.1867 4.44671L12.3333 5.31337" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.5667 8.09326L14.1334 14.8066C14.06 15.8533 14 16.6666 12.14 16.6666H7.86002C6.00002 16.6666 5.94002 15.8533 5.86668 14.8066L5.43335 8.09326" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.88664 13H11.1066" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.33333 10.3334H11.6667" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg class="delete-hover" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="4" fill="#292D32"/>
                <path d="M15.1422 6.6297C13.3157 5.941 11.4538 5.33944 9.57187 4.83517C8.45623 4.53624 7.32548 4.29365 6.17964 4.1074L5 3.9121" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.25147 4.17347L8.57321 3.46855C8.80679 2.95743 8.9816 2.57549 9.93384 2.83064L11.4101 3.2262C12.3623 3.48136 12.3224 3.92358 12.268 4.4646L12.1957 5.23031" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.9958 8.83154L13.6167 14.7057C13.5525 15.6215 13.5 16.3332 11.8725 16.3332H8.1275C6.5 16.3332 6.4475 15.6215 6.38333 14.7057L6.00417 8.83154" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 13L11 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 11L11.1355 13.1355" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg  class="menu" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99998 6H9.99988" stroke="#292D32" stroke-width="2" stroke-linecap="round"/>
                <path d="M10 10H9.9999" stroke="#292D32" stroke-width="2" stroke-linecap="round"/>
                <path d="M10 14H9.9999" stroke="#292D32" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <ul class="dropdown-2">
                                <li  class="rename-chat"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6666 0.833496H5.33331C2.66665 0.833496 1.33331 2.16683 1.33331 4.8335V13.5002C1.33331 13.8668 1.63331 14.1668 1.99998 14.1668H10.6666C13.3333 14.1668 14.6666 12.8335 14.6666 10.1668V4.8335C14.6666 2.16683 13.3333 0.833496 10.6666 0.833496Z" stroke="#292D32" stroke-opacity="0.9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.60667 4.72677L5.14667 8.18677C5.01334 8.3201 4.88667 8.5801 4.86001 8.76677L4.67334 10.0868C4.60668 10.5668 4.94001 10.9001 5.42001 10.8334L6.73999 10.6468C6.92666 10.6201 7.18668 10.4934 7.32001 10.3601L10.78 6.9001C11.3733 6.30677 11.66 5.61343 10.78 4.73343C9.90001 3.84677 9.20667 4.12677 8.60667 4.72677Z" stroke="#292D32" stroke-opacity="0.9" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.11328 5.22021C8.40661 6.26688 9.22661 7.09355 10.2799 7.38688" stroke="#292D32" stroke-opacity="0.9" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
         Rename</li>
                                <li  class="move-chat move-chat-container">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.91334 12.7067C2.74 12.7067 2.58 12.5467 2.58 9.37337C2.58 6.20004 2.74 6.04004 5.91334 6.04004H13.2467" stroke="#292D32" stroke-opacity="0.9" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.7132 7.70691L13.4199 6.00025L11.7132 4.29358" stroke="#292D32" stroke-opacity="0.9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        
         Move to
    <ul class="dropdown-3">
        <li><svg class="icon-btn" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 9.1V14.5C21 18.1 20 19 16 19H6C2 19 1 18.1 1 14.5V5.5C1 1.9 2 1 6 1H7.5C9 1 9.33 1.396 9.9 2.08L11.4 3.88C11.78 4.33 12 4.6 13 4.6H16C20 4.6 21 5.5 21 9.1Z" fill="#EAEBEE" stroke="#3D4C60" stroke-width="1.2" stroke-miterlimit="10"/>
                            <svg class="icon-hover" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.33371 8.11933V4.68599C2.33371 2.41933 2.90038 1.85266 5.16704 1.85266H6.01371C6.86038 1.85266 7.05371 2.10599 7.37371 2.53266L8.22038 3.66599C8.43371 3.94599 8.56038 4.11933 9.12704 4.11933H10.827C13.0937 4.11933 13.6604 4.68599 13.6604 6.95266V8.146" fill="#BBBDBF"/>
    <path d="M2.33371 8.11933V4.68599C2.33371 2.41933 2.90038 1.85266 5.16704 1.85266H6.01371C6.86038 1.85266 7.05371 2.10599 7.37371 2.53266L8.22038 3.66599C8.43371 3.94599 8.56038 4.11933 9.12704 4.11933H10.827C13.0937 4.11933 13.6604 4.68599 13.6604 6.95266V8.146" stroke="#647080" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.4464 10.0348L14.1797 13.3682C14.0797 14.3882 13.9997 15.1682 12.193 15.1682H3.80638C1.99971 15.1682 1.91971 14.3882 1.81971 13.3682L1.55305 10.0348C1.49971 9.48151 1.67305 8.96817 1.98638 8.57484C1.99305 8.56817 1.99305 8.56817 1.99971 8.56151C2.36638 8.11484 2.91971 7.83484 3.53971 7.83484H12.4597C13.0797 7.83484 13.6264 8.11484 13.9864 8.54817C13.993 8.55484 13.9997 8.56151 13.9997 8.56817C14.3264 8.96151 14.5064 9.47484 14.4464 10.0348Z" fill="white" stroke="#647080" stroke-width="1.2" stroke-miterlimit="10"/>
    <path d="M5 11.2857L11 11.2857L9.71429 10" stroke="#647080" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11 11.2856L9.71429 12.5714" stroke="#647080" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

                            </svg>MyNew Project</li>
        <li ><svg class="icon-btn" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 9.1V14.5C21 18.1 20 19 16 19H6C2 19 1 18.1 1 14.5V5.5C1 1.9 2 1 6 1H7.5C9 1 9.33 1.396 9.9 2.08L11.4 3.88C11.78 4.33 12 4.6 13 4.6H16C20 4.6 21 5.5 21 9.1Z" fill="#EAEBEE" stroke="#3D4C60" stroke-width="1.2" stroke-miterlimit="10"/>
                            </svg> <svg class="icon-hover" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.33371 8.11933V4.68599C2.33371 2.41933 2.90038 1.85266 5.16704 1.85266H6.01371C6.86038 1.85266 7.05371 2.10599 7.37371 2.53266L8.22038 3.66599C8.43371 3.94599 8.56038 4.11933 9.12704 4.11933H10.827C13.0937 4.11933 13.6604 4.68599 13.6604 6.95266V8.146" fill="#BBBDBF"/>
    <path d="M2.33371 8.11933V4.68599C2.33371 2.41933 2.90038 1.85266 5.16704 1.85266H6.01371C6.86038 1.85266 7.05371 2.10599 7.37371 2.53266L8.22038 3.66599C8.43371 3.94599 8.56038 4.11933 9.12704 4.11933H10.827C13.0937 4.11933 13.6604 4.68599 13.6604 6.95266V8.146" stroke="#647080" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.4464 10.0348L14.1797 13.3682C14.0797 14.3882 13.9997 15.1682 12.193 15.1682H3.80638C1.99971 15.1682 1.91971 14.3882 1.81971 13.3682L1.55305 10.0348C1.49971 9.48151 1.67305 8.96817 1.98638 8.57484C1.99305 8.56817 1.99305 8.56817 1.99971 8.56151C2.36638 8.11484 2.91971 7.83484 3.53971 7.83484H12.4597C13.0797 7.83484 13.6264 8.11484 13.9864 8.54817C13.993 8.55484 13.9997 8.56151 13.9997 8.56817C14.3264 8.96151 14.5064 9.47484 14.4464 10.0348Z" fill="white" stroke="#647080" stroke-width="1.2" stroke-miterlimit="10"/>
    <path d="M5 11.2857L11 11.2857L9.71429 10" stroke="#647080" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11 11.2856L9.71429 12.5714" stroke="#647080" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>LV Singapore</li>
        <li ><svg class="icon-btn" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 9.1V14.5C21 18.1 20 19 16 19H6C2 19 1 18.1 1 14.5V5.5C1 1.9 2 1 6 1H7.5C9 1 9.33 1.396 9.9 2.08L11.4 3.88C11.78 4.33 12 4.6 13 4.6H16C20 4.6 21 5.5 21 9.1Z" fill="#EAEBEE" stroke="#3D4C60" stroke-width="1.2" stroke-miterlimit="10"/>
                            </svg> <svg class="icon-hover" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.33371 8.11933V4.68599C2.33371 2.41933 2.90038 1.85266 5.16704 1.85266H6.01371C6.86038 1.85266 7.05371 2.10599 7.37371 2.53266L8.22038 3.66599C8.43371 3.94599 8.56038 4.11933 9.12704 4.11933H10.827C13.0937 4.11933 13.6604 4.68599 13.6604 6.95266V8.146" fill="#BBBDBF"/>
    <path d="M2.33371 8.11933V4.68599C2.33371 2.41933 2.90038 1.85266 5.16704 1.85266H6.01371C6.86038 1.85266 7.05371 2.10599 7.37371 2.53266L8.22038 3.66599C8.43371 3.94599 8.56038 4.11933 9.12704 4.11933H10.827C13.0937 4.11933 13.6604 4.68599 13.6604 6.95266V8.146" stroke="#647080" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.4464 10.0348L14.1797 13.3682C14.0797 14.3882 13.9997 15.1682 12.193 15.1682H3.80638C1.99971 15.1682 1.91971 14.3882 1.81971 13.3682L1.55305 10.0348C1.49971 9.48151 1.67305 8.96817 1.98638 8.57484C1.99305 8.56817 1.99305 8.56817 1.99971 8.56151C2.36638 8.11484 2.91971 7.83484 3.53971 7.83484H12.4597C13.0797 7.83484 13.6264 8.11484 13.9864 8.54817C13.993 8.55484 13.9997 8.56151 13.9997 8.56817C14.3264 8.96151 14.5064 9.47484 14.4464 10.0348Z" fill="white" stroke="#647080" stroke-width="1.2" stroke-miterlimit="10"/>
    <path d="M5 11.2857L11 11.2857L9.71429 10" stroke="#647080" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11 11.2856L9.71429 12.5714" stroke="#647080" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>SG Orchard</li>
    </ul>
</li>
         </li>
                                <li class="delete-chat"><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 3.48665C10.78 3.26665 8.54667 3.15332 6.32 3.15332C5 3.15332 3.68 3.21999 2.36 3.35332L1 3.48665" stroke="#E63C42" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.66669 2.8135L4.81335 1.94016C4.92002 1.30683 5.00002 0.833496 6.12669 0.833496H7.87335C9.00002 0.833496 9.08669 1.3335 9.18669 1.94683L9.33335 2.8135" stroke="#E63C42" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.5667 5.59326L11.1334 12.3066C11.06 13.3533 11 14.1666 9.14002 14.1666H4.86002C3.00002 14.1666 2.94002 13.3533 2.86668 12.3066L2.43335 5.59326" stroke="#E63C42" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.88666 10.5H8.10666" stroke="#E63C42" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.33331 7.8335H8.66665" stroke="#E63C42" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
         Remove</li>
                            </ul>
        `;

        chatDiv.appendChild(iconsDiv);

        let deleteBtn = iconsDiv.querySelector(".delete-btn");
        if (deleteBtn) {
            deleteBtn.addEventListener("click", function () {
                let parentGroup = chatDiv.closest(".chat-group"); // Group container

                chatDiv.remove(); // 🗑️ Remove chat instantly

                // ✅ If no chats left, delete the whole group
                if (parentGroup && parentGroup.querySelectorAll(".chats").length === 0) {
                    parentGroup.remove();
                }
            });
        }
        
    }
}

function removeIcons(chatDiv) {
    let iconsDiv = chatDiv.querySelector(".icons");
    if (iconsDiv) {
        iconsDiv.remove();
    }
}


document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (event) {
        let target = event.target;

        // 🛠️ Open/Close Dropdown Menu
        if (target.classList.contains("menu")) {
            let dropdown = target.closest(".icons").querySelector(".dropdown-2");

            if (dropdown) {
                let isOpen = dropdown.style.display === "block";
                document.querySelectorAll(".dropdown-2").forEach(d => d.style.display = "none");
                dropdown.style.display = isOpen ? "none" : "block";
            }
        }

        // ✅ Rename Chat (Now with Inline Editing)
        if (target.closest(".rename-chat")) {
            let chatDiv = target.closest(".chats");
            editChatName(chatDiv);
        }

        // ✅ Move Chat (Placeholder)
        // if (target.closest(".move-chat")) {
        //     alert("Move to feature coming soon!");
        // }

        // ✅ Delete Chat (Improved UX)
        if (target.closest(".delete-chat")) {
            let chatDiv = target.closest(".chats");
            let parentGroup = chatDiv.closest(".chat-group");

            if (confirm("Are you sure you want to delete this chat?")) {
                chatDiv.remove();

                // ✅ If no chats left, delete the whole group
                if (parentGroup && parentGroup.querySelectorAll(".chats").length === 0) {
                    parentGroup.remove();
                }
            }
        }
    });

    // 🔥 Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".icons")) {
            document.querySelectorAll(".dropdown-2").forEach(dropdown => {
                dropdown.style.display = "none";
            });
        }
    });
});

// ✅ Edit Chat Name Function (Now targets `.chat-item`)
function editChatName(chatDiv) {
    if (!chatDiv) return;

    let chatItem = chatDiv.querySelector(".chat-item");
    if (!chatItem) return;

    let currentName = chatItem.textContent.trim();

    chatItem.innerHTML = `
        <input type="text" class="project-name-input chat-name-input" placeholder="Enter project name" value="${currentName}" autofocus />
        <div class="edit-buttons">
                <button class="save-chat"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9.83L8.83 12.66L14.5 7" stroke="#292D32" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
                <button class="cancel-chat"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.08325 12.9168L12.9166 7.0835" stroke="#292D32" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.9166 12.9168L7.08325 7.0835" stroke="#292D32" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
</div>
    `;

    let inputField = chatItem.querySelector(".chat-name-input");

    // ✅ Save New Name
    chatItem.querySelector(".save-chat").addEventListener("click", function () {
        let newName = inputField.value.trim();
        if (newName && !isDuplicateChatName(newName)) {
            chatItem.innerHTML = newName;
        } else {
            alert("Invalid or duplicate name!");
        }
    });

    // ❌ Cancel Editing
    chatItem.querySelector(".cancel-chat").addEventListener("click", function () {
        chatItem.innerHTML = currentName;
    });

    inputField.focus();
}

// ✅ Function to Check Duplicate Chat Names
function isDuplicateChatName(newName) {
    let allNames = Array.from(document.querySelectorAll(".chat-item")).map(el => el.textContent.trim());
    return allNames.includes(newName);
}



// document.addEventListener("DOMContentLoaded", function () {
//     let projectNames = document.querySelectorAll(".project-name");
//     let dropdown = document.querySelector(".move-chat-container .dropdown-3");

//     // Debugging ke liye check karein ki elements mil rahe hain ya nahi
//     console.log("Projects found:", projectNames.length);
//     console.log("Dropdown found:", dropdown);

//     if (!dropdown) {
//         console.error("Dropdown '.dropdown-3' nahi mila! Check karo ki yeh exist karta hai.");
//         return;
//     }

//     dropdown.innerHTML = ""; // Pehle ka content clear karo

//     if (projectNames.length === 0) {
//         console.error("Koi bhi '.project-name' nahi mila! Ensure karein ki yeh page pe hai.");
//         return;
//     }

//     projectNames.forEach((project) => {
//         let listItem = document.createElement("li");
//         listItem.classList.add("project");

//         let projectText = document.createElement("p");
//         projectText.classList.add("project-name");
//         projectText.textContent = project.textContent; // Project name insert karo

//         listItem.appendChild(projectText);
//         dropdown.appendChild(listItem);
//     });
// });






document.querySelectorAll(".project").forEach(project => {
    project.addEventListener("click", function () {
        // Pehle se active project ko close karo
        document.querySelectorAll(".project.active").forEach(activeProject => {
            if (activeProject !== this) {
                activeProject.classList.remove("active");
                let prevChatList = activeProject.nextElementSibling;
                if (prevChatList && prevChatList.classList.contains("toggle-div")) {
                    prevChatList.style.display = "none";
                }
                let prevIcon = activeProject.querySelector("svg");
                if (prevIcon) {
                    prevIcon.innerHTML = `<path d="M21 9.1V14.5C21 18.1 20 19 16 19H6C2 19 1 18.1 1 14.5V5.5C1 1.9 2 1 6 1H7.5C9 1 9.33 1.396 9.9 2.08L11.4 3.88C11.78 4.33 12 4.6 13 4.6H16C20 4.6 21 5.5 21 9.1Z" fill="#EAEBEE" stroke="#3D4C60" stroke-width="1.2" stroke-miterlimit="10"/>`; // Default icon
                }
            }
        });

        // Apne baad wali chat-list toggle karo
        let chatList = this.nextElementSibling;
        if (chatList && chatList.classList.contains("toggle-div")) {
            let isOpen = this.classList.toggle("active");
            chatList.style.display = isOpen ? "block" : "none";

            // 🟢 **SVG icon change karo**  
            let icon = this.querySelector("svg");
            if (icon) {
                icon.innerHTML = isOpen
                    ? `
<path d="M3.50001 11.43V6.28003C3.50001 2.88003 4.35001 2.03003 7.75001 2.03003H9.02001C10.29 2.03003 10.58 2.41003 11.06 3.05003L12.33 4.75003C12.65 5.17003 12.84 5.43003 13.69 5.43003H16.24C19.64 5.43003 20.49 6.28003 20.49 9.68003V11.47" fill="#60B4D2"/>
<path d="M3.50001 11.43V6.28003C3.50001 2.88003 4.35001 2.03003 7.75001 2.03003H9.02001C10.29 2.03003 10.58 2.41003 11.06 3.05003L12.33 4.75003C12.65 5.17003 12.84 5.43003 13.69 5.43003H16.24C19.64 5.43003 20.49 6.28003 20.49 9.68003V11.47" stroke="#2974D2" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.67 14.3L21.27 19.3C21.12 20.83 21 22 18.29 22H5.71001C3.00001 22 2.88001 20.83 2.73001 19.3L2.33001 14.3C2.25001 13.47 2.51001 12.7 2.98001 12.11C2.99001 12.1 2.99001 12.1 3.00001 12.09C3.55001 11.42 4.38001 11 5.31001 11H18.69C19.62 11 20.44 11.42 20.98 12.07C20.99 12.08 21 12.09 21 12.1C21.49 12.69 21.76 13.46 21.67 14.3Z" fill="#69C4E5" stroke="#2974D2" stroke-width="1.2" stroke-miterlimit="10"/>
<path d="M9.43001 17H14.57" stroke="#2974D2" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>

`  // Cross icon
                    : `<path d="M21 9.1V14.5C21 18.1 20 19 16 19H6C2 19 1 18.1 1 14.5V5.5C1 1.9 2 1 6 1H7.5C9 1 9.33 1.396 9.9 2.08L11.4 3.88C11.78 4.33 12 4.6 13 4.6H16C20 4.6 21 5.5 21 9.1Z" fill="#EAEBEE" stroke="#3D4C60" stroke-width="1.2" stroke-miterlimit="10"/>`; // Default icon
            }
        }
    });
});


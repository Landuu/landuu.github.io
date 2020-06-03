
function process_data(data) {
    data.forEach(project => {
        let icons_html = new String();

        project.icons.forEach(icon => {
            icons_html += `
                <box-icon name='${icon.name}' type='logo' size='md' color='${icon.color}'></box-icon>
            `;
        });

        let project_html = `
            <div class="col-lg-6 mb-5">
                <div class="card p-3" onclick="location.href = '${project.link}'">
                    <div class="card-title mb-3 p-1 flex-center">
                        <a class="card-github mr-2" href="${project.github}">
                            <box-icon type='logo' name='github' size='md'></box-icon>
                        </a>
                        <h4 class="card-app-name text-center p-0 m-0">${project.name}</h4>
                    </div>
                    <div class="card-line"></div>
                    <div class="card-desc py-3 px-4 flex-center text-center">
                        ${project.desc}
                    </div>
                    <div class="card-footer text-center mt-1">
                        ${icons_html}
                    </div>
                </div>
            </div>
        `;

        document.querySelector('#projects_row').innerHTML += project_html;
    });
}

fetch('./projects.json')
    .then(res => res.json())
    .then(res => process_data(res));


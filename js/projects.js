// Function to filter projects by category
function filterProjects(category)
{
    const projects = document.querySelectorAll('.project-card');

    if (category === 'all') {
        projects.forEach(project =>
        {
            project.style.display = 'block';
        });
    } else {
        projects.forEach(project =>
        {
            if (project.dataset.category === category) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }
}

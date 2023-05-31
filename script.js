document.addEventListener('DOMContentLoaded', function() {
  const courses = document.querySelectorAll('.course');

  courses.forEach(function(course) {
    const description = course.querySelector('p'); // Get the course description element

    course.addEventListener('click', function() {
      this.classList.toggle('active');
      description.style.display = this.classList.contains('active') ? 'block' : 'none';
    });
  });
});


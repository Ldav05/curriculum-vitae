$(document).ready(function () {
  const themeToggle = $("#theme-toggle");
  const body = $("body");
  const themeStyle = $("#theme-style");
  const downloadBtn = $("#download-pdf");
  const languageToggle = $("#language-toggle"); // Nuevo botón de cambio de idioma
  const starsContainer = $("#stars"); // Contenedor de estrellas

  themeToggle.click(function () {
    if (body.hasClass("light-mode")) {
      body.removeClass("light-mode").addClass("dark-mode");
      themeStyle.attr("href", "dark.css");
      $('label.form-check-label[for="language-switch"]').css('color', 'black');
      $('nav.navbar').removeClass('navbar-dark bg-dark').addClass('navbar-light bg-light');
      // Agregar estrellas en modo oscuro
      addStars();
      // Cambiar el ícono a sol (modo claro)
      var icon = themeToggle.find(".bi");
      icon.removeClass("bi-moon").addClass("bi-sun");
    } else {
      body.removeClass("dark-mode").addClass("light-mode");
      themeStyle.attr("href", "light.css");
      $('nav.navbar').removeClass('navbar-light bg-light').addClass('navbar-dark bg-dark');
      // Eliminar estrellas en modo claro
      starsContainer.empty();
      // Cambiar el ícono a luna (modo oscuro)
      var icon = themeToggle.find(".bi");
      icon.removeClass("bi-sun").addClass("bi-moon");
    }
  });

  function addStars() {
    const numStars = 300; // Ajustar la cantidad de estrellas
    const containerWidth = starsContainer.width();
    const containerHeight = starsContainer.height();
    for (let i = 0; i < numStars; i++) {
      const size = Math.random() * 2;
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;
      const duration = Math.random() * 5 + 5;
      const opacity = Math.random() * 0.5 + 0.5;
      const star = $('<div class="star"></div>').css({
        width: size + "px",
        height: size + "px",
        left: x + "px",
        top: y + "px",
        animationDuration: duration + "s",
        opacity: opacity,
      });
      starsContainer.append(star);
    }
  }

  downloadBtn.click(function () {
    const doc = new jsPDF();
    doc.text("Luis Gordon - CV", 10, 10);

    const content = $("#resume-content").text();
    const splitContent = doc.splitTextToSize(content, 180);
    doc.text(splitContent, 10, 20);

    doc.save("Luis_Gordon_CV.pdf");
  });

  // Función para cambiar el idioma con el switch
  $("#language-switch").change(function () {
    const aboutSection = $("#about");
    const workSection = $("#work");
    const educationSection = $("#education");
    const skillsSection = $("#skills");
    const contactSection = $("#contact");

    // Si el switch está marcado, cambiar a inglés
    if (!$(this).is(":checked")) {
      aboutSection.find("h1").text("About Me");
      aboutSection
        .find("p")
        .text(
          "Hello, I'm Luis Gordon, a passionate Systems Engineer with experience in web application development and generating informative reports. I have worked on application development, providing technological solutions that support the strategies and decisions of general management. My contributions have had a positive impact on the company's production and profitability. I am organized, motivated, and committed to problem-solving. Additionally, I am known for being responsible, punctual, and respectful, with excellent adaptability and teamwork skills."
        );
      workSection.find("h2").text("Work Experience");
      workSection.find("h4").text("Baterías Willard S.A.");
      const newList = `
    <ul class="justified-text">
        <li>Develop reports and information queries (Use PHP, Java, or .NET to develop HTML forms/pages that display the requested information).</li>
        <li>Support in the development of web applications.</li>
        <li>Support technological solutions for the strategies and decisions made by general management that affect the company's production and profitability. Standardize development technology (Application templates).</li>
        <li>Apply the rules and procedures outlined in the Self-Control and Risk Management System.</li>
        <li>Manage and channel system PQR requests.</li>
    </ul>`;
      workSection.find("ul").replaceWith(newList);
      educationSection.find("h2").text("Education");
      educationSection.find("#degree").text("Bachelor's in Systems Engineering");
      educationSection.find("#pdegree").text("Universidad de la Costa, 2019-2024");
      educationSection.find("#scrum").text("Certification program in Agile Frameworks");
      educationSection.find("#pscrum").text("Universidad de la Costa, 2023");
      skillsSection.find("h2").text("Skills");
      contactSection.find("h2").text("Contact");
      contactSection
        .find("p")
        .html(
          'Email: <a href="mailto:luisdgordon@gmail.com">luisdgordon@gmail.com</a>'
        );
      $("#language-switch").next().text("English");
    } else {
      // Si el switch no está marcado, cambiar a español
      aboutSection.find("h1").text("Acerca de Mí");
      aboutSection
        .find("p")
        .text(
          "Hola, soy Luis Gordon, un apasionado Ingeniero de Sistemas con experiencia en desarrollo de aplicaciones web, generación de reportes informativos y atención al cliente. He trabajado en el desarrollo de aplicaciones, proporcionando soluciones tecnológicas que respaldan las estrategias y decisiones de la gerencia general. Mis contribuciones han tenido un impacto positivo en la producción y rentabilidad de la empresa. Soy organizado, motivado y comprometido con la resolución de problemas. Además, me destaco por ser responsable, puntual y respetuoso, con una excelente capacidad de adaptación y trabajo en equipo. Curso Básico de Algoritmos y Pensamiento Lógico Curso Profesional de Git y GitHub"
        );
      workSection.find("h2").text("Experiencia Laboral");
      workSection.find("h4").text("Baterías Willard S.A.");
      const newListEs = `
    <ul class="justified-text">
        <li>Desarrollar reportes y consultas de información (Utilizar PHP, Java o Punto Net para desarrollar formularios/páginas HTML que muestren la información solicitada).</li>
        <li>Apoyar en el desarrollo de aplicaciones Web.</li>
        <li>Apoyar con soluciones tecnológicas las estrategias y decisiones que tome la gerencia general que influyan en la producción y rentabilidad de la empresa. Estandarizar la tecnología de Desarrollo (Plantilla de aplicativos).</li>
        <li>Aplicar las normas y procedimientos contemplados en el Sistema de Autocontrol y Gestión del Riesgo.</li>
        <li>Gestionar y canalizar las Solicitudes PQR de sistema.</li>
    </ul>`;
    workSection.find("ul").replaceWith(newListEs);

      educationSection.find("h2").text("Educación");
      educationSection
        .find("h5")
        .text("Maestría en Ciencias de la Computación");
      educationSection.find("p").text("Universidad de XYZ, 2015-2017");
      skillsSection.find("h2").text("Habilidades");
      contactSection.find("#h2contact").text("Contacto")
      contactSection
        .find("p")
        .html(
          'Correo electrónico: <a href="mailto:luisdgordon@gmail.com">luisdgordon@gmail.com</a>'
        );
      $("#language-switch").next().text("Español");
    }
  });

  // Botón para volver al principio
  const floatButtons = $("#float-buttos");
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      floatButtons.fadeIn();
    } else {
      floatButtons.fadeOut();
    }
  });
  
});

export function projectsSectionFunctionality() {
  const projects = [
    {
      image: 'Cumbul.jpg',
      title: 'Kapten Guild',
      description: 'Beliau Adalah Kapten Dari Guild Svs Yang Telah Dibuat Sejak 2018',
      nickname: 'Svs Cumbul',
      role: 'Leader',
      socialMedia: [
        { name: "Instagram", url: "https://www.instagram.com/atinnnsumbulll/", icon: "instagram (1).png" },
        { name: "Tiktok", url: "https://www.tiktok.com/@atinnnn001", icon: "tik-tok.png" },
      ]
    },
    {
      image: 'Zero.jpg',
      title: 'Officer Guild',
      description: 'Beliau Adalah Officer Atau Adiknya Kapten Dari Guild Ini',
      nickname: 'Svs Zero',
      role: 'Officer',
      socialMedia: [
        { name: "Tiktok", url: "https://www.tiktok.com/@madantiktokk512", icon: "tik-tok.png" },
      ]
    },
    {
      image: 'Knoxx.jpg',
      title: 'Officer Guild',
      description: 'Beliau Adalah Officer Guild Ini',
      nickname: 'Svs Knoxx',
      role: 'Officer',
      socialMedia: [
        { name: "Instagram", url: "hhttps://www.instagram.com/dafxlzyy/", icon: "instagram (1).png" },
        { name: "Tiktok", url: "https://www.tiktok.com/@atinnnn001", icon: "tik-tok.png" },
      ]
    },
    {
    image: 'anomali.jpg',
      title: 'Anomali',
      description: 'Tidak Ada Yang Tau Dia Masih Di Guild Ini Atau Tidak',
      nickname: '?',
      role: '?',
      socialMedia: [
        { name: "Instagram", url: "https://www.instagram.com/c.albrt/", icon: "instagram (1).png" },
      ]
    },
    {
      image: 'White d16.jpg',
      title: 'Member Guild',
      description: 'Beliau Adalah Member Kesayangan Kapten Atau Adek Pungut Kapten Guild Ini',
      nickname: 'White D16',
      role: 'Member',
      socialMedia: [
        { name: "Instagram", url: "https://www.instagram.com/das.lys/", icon: "instagram (1).png" },
        { name: "Tiktok", url: "https://www.tiktok.com/@belxruok", icon: "tik-tok.png" },
      ]
    }
  ];

  let projectHTML = '';

  projects.forEach(project => {
    // Membuat bagian ikon media sosial untuk setiap proyek
    let socialMediaHTML = '<div class="social-media">';
    project.socialMedia.forEach(social => {
      socialMediaHTML += `
        <a href="${social.url}" target="_blank">
          <img src="images and icons/icons/${social.icon}" class="socmed-icon" alt="${social.name}-icon" />
        </a>
      `;
    });
    socialMediaHTML += '</div>';

    projectHTML += `
      <div class="project-card">
        <div class="container title-and-description">
          <h2 class="project-title">${project.title}</h2>
          <p class="project-description semi-transparent-word">${project.description}</p>
          ${socialMediaHTML}  <!-- Menampilkan ikon media sosial di dalam proyek -->
        </div>
        <div class="fade-bgColor"></div>
        <div class="container image-and-result">   
          <img class="project-image" src="images and icons/icons/${project.image}" alt="proj-img" />
          <div class="project-result d-flex">
            <div>
              <p class="role semi-transparent-word">Role</p>
              <p class="result">${project.role}</p>
            </div>  
            <div>
              <p class="satisfaction semi-transparent-word">Nickname</p>
              <p class="result">${project.nickname || '-'}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  // Memasukkan proyek ke dalam container di HTML
  document.querySelector('.projects-container').innerHTML = projectHTML;
}

export function RenderContent(){


    // ----------------RENDERING HOME SECTION-------------------//
    const homeDetails = {
      greetTxt: `Hello everyone, we`,
      name: 'SvS Sandwich Guild',
      profilePhoto: 'logogl.jpg',
      welcomeTxt: 'welcome to our guild website.',
      githubLink: 'https://github.com/Dapfzz',
      tiktokLink: 'https://www.tiktok.com/@atinnnn001?is_from_webapp=1&sender_device=pc',
      instagramLink: 'https://www.instagram.com/atinnnsumbulll?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      ytLink: 'https://www.youtube.com/@DafXlzy.'
    }
  
    const homeHTML = `
      <div class="profile-detail">
        <p>${homeDetails.greetTxt}</p>
        <h1 class="my-name gradient-word">${homeDetails.name}</h1>
        <h2 class="display-skills gradient-word"></h2>
        <p>${homeDetails.welcomeTxt}</p>
        <div class="my-social-media-accounts">
          <a
            class="social-media"
            target="_blank"
            href="${homeDetails.tiktokLink}">
            <img src="images and icons/icons/tik-tok.png" alt="tiktok icon" />
          </a>
          <a class="social-media" target="_blank" href="${homeDetails.instagramLink}">
            <img src="images and icons/icons/instagram (1).png" alt="insta icon" />
          </a>
        </div>
      </div>
  
      <div class="profile-pic">
        <div id="first-layer">
          <img
            id="logogl-img"
            src="images and icons/images/${homeDetails.profilePhoto}"
            alt="logogl img" />
        </div>
      </div>
    `;
    
    const homeSection = document.querySelector('#home-section').innerHTML = homeHTML;
      
  
  
  
  
     // ----------------RENDERING ABOUT SECTION-------------------//
     const aboutDetails = {
      myPhoto: 'logogl.jpg',
      aboutMeFirstPrgrph: `Hello, Selamat Datang Di Website Guild Svs Sandwich.Di Website Ini Kami Akan Mmeberikan Beberapa Informasi Dari Guild Kami Seperti Anggota Dan Lainnya.`,
      aboutMeSecondPrgrph: `Selain Itu,Disini Kalian Juga Bisa Melihat Tentang Perkembangan Dari Guild Kami.Jika Kalian Ingin Masuk Guild Kami Bisa Hubungi Media Sosial Di Halaman Utama Kami.`
     }
  
     const aboutHTML = `
      <h2 class="section-name about">ABOUT ME <span class="line"></span></h2>
      <div class="container">
        <div>
          <img
            class="profile-pic"
            src="images and icons/images/${aboutDetails.myPhoto}"
            alt="profile img" />
        </div>
        <div class="about-self scroll-reveal">
          <p class="first-paragraph">
            <span>${aboutDetails.aboutMeFirstPrgrph}</span>
          </p>
          <br />
          <p class="second-paragraph">
            <span>${aboutDetails.aboutMeSecondPrgrph}</span>
          </p>
        </div>
      </div>
     `
  
    const aboutSection = document.querySelector('#about-section').innerHTML = aboutHTML;
  
  
  
  
      // ----------------RENDERING Member SECTION-------------------//
  
      const skills = [
        { iconName: "pp.jpg", skillName: "Kapten Sumbul" },
        { iconName: "pp.jpg", skillName: "Madan" },
        { iconName: "pp.jpg", skillName: "Dafa Jawa" },
        { iconName: "pp.jpg", skillName: "Albob" },
        { iconName: "pp.jpg", skillName: "Detol Palembang" },
        { iconName: "pp.jpg", skillName: "Yasaa" },
        { iconName: "pp.jpg", skillName: "Adam" },
        { iconName: "pp.jpg", skillName: "Open Member" },
        { iconName: "pp.jpg", skillName: "Open Member" },
      ];
  
      const skillHTML = `
          <h2 class="section-name"><span class="line"></span> Member</h2>
            
            <div class="skills-container d-flex">
            </div>
      `
  
    const skillSection = document.querySelector('#skills-section').innerHTML = skillHTML;
    
    let skillCard = ''
    skills.forEach(skill => {
     skillCard += `<div class="skill">
      <img src="images and icons/icons/${skill.iconName}" alt="" class="skill-icon">
      <p class="skill-name">${skill.skillName}</p>
    </div>`
    });
    const skillsContainer = document.querySelector('.skills-container').innerHTML = skillCard;
  
  
  
  

    const contactDetails = {
      heading: ' CONNECT WITH ME',
      subheading: 'Let’s Make Something Cool Together',
    }
    const contactHTML = `
      <h2 class="section-name">${contactDetails.heading}</h2>
      <p class="subheading">${contactDetails.subheading}</p>
      <form class="f-flex">
        <div class="input-container">
          <input class="input name" type="text" placeholder="Name" required />
          <input class="input email" type="email" placeholder="Email" required/>
        </div>
  
        <div class="txt-area-btn-container">
          <textarea name="Message-me" class="input" placeholder="Enter your Messsage"></textarea> 
          <button id="submit-btn">Submit</button>
        </div>
      
      </form>
    `;
  
    const contactSection = document.querySelector('#contact-section').innerHTML = contactHTML;
  }
  
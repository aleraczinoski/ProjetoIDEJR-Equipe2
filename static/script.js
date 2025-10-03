document.addEventListener("DOMContentLoaded", function () {
  
  // --- Script do Menu Hamburger ---
  const hamburger = document.querySelector("#hamburg");
  const hamburgMenu = document.querySelector(".hamburgclick");
  if (hamburger && hamburgMenu) {
    hamburger.addEventListener("click", function () {
      hamburgMenu.classList.toggle("active");
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1200) {
        hamburgMenu.classList.remove("active");
      }
    });
    const menuLinks = document.querySelectorAll(".hamburgclick a");
    menuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        hamburgMenu.classList.remove("active");
      });
    });
  }

  // --- Função para iniciar o Carrossel de projetos ---
  function initProjetosSlider() {
    const slider = document.getElementById("projetos-carousel-slider");
    const btnLeft = document.getElementById("projetos-carousel-btn-left");
    const btnRight = document.getElementById("projetos-carousel-btn-right");
    const thumb = document.querySelector(".carousel-thumb-horizontal");
    const track = document.querySelector(".carousel-track-horizontal");
    const imageOverlay = document.getElementById("project-image-overlay");

    if (!slider || !btnLeft || !btnRight || !thumb || !track || !imageOverlay) {
      console.error("Elementos do carrossel de projetos não encontrados.");
      return;
    }

    const projects = [
      {
        title: "Portas Abertas 2025",
        description:
          "Uma oficina de programação em Portugol para o evento \"Portas Abertas\".<br><br>O grupo preparou uma apresentação sobre sua história e conduziu sessões de 30 minutos com os participantes, que tiveram uma boa adesão.",
      },
      {
        title: "Torneio Feminino de Programação",
        description:
          "Uma colaboração com o Laboratório de Programação Competitiva (LPC).<br><br>As atividades envolveram o auxílio na organização do torneio, monitoria das participantes durante a prova e a confecção de materiais de divulgação (artes e slides).",
      },
      {
        title: "Cofferência - Roda de Conversa",
        description:
          "Um evento para divulgar o projeto Program.Ada para outras mulheres da instituição.<br><br>O grupo apresentou seu papel na comunidade e como o projeto foi criado.",
      },
      {
        title: "Ação nas Enchentes",
        description:
          "Uma iniciativa de voluntariado para ajudar vítimas das enchentes.<br><br>O projeto envolveu a arrecadação de fundos, a compra e distribuição de itens de higiene, roupas e alimentos para animais, além da organização de notas e formulários para prestação de contas.",
      },
      {
        title: "Carpool",
        description:
          "Um projeto de caronas solidárias, criado em resposta às enchentes.<br><br>O grupo organizou formulários e grupos para conectar colegas que precisavam de transporte para o campus.",
      },
    ];

    let currentPage = 0;
    const totalPages = projects.length;

    slider.innerHTML = projects.map(p => `
        <div class="project-card">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
        </div>`
    ).join("");

    function updateSliderPosition() {
      const offset = currentPage * 100;
      slider.style.transform = `translateX(-${offset}%)`;
      updateThumbPosition();

      if (currentPage === 0) {
        imageOverlay.innerHTML = `<img src="https://ps2025v2-3n2i4makt-henrique-lindemanns-projects.vercel.app/_next/image?url=%2Fimages%2Fprojetos%2FPA.png&w=256&q=75" alt="Imagem do Projeto 1">`;
        imageOverlay.classList.add('active');
      } else if (currentPage === 2) {
        imageOverlay.innerHTML = `<img src="https://ps2025v2-3n2i4makt-henrique-lindemanns-projects.vercel.app/_next/image?url=%2Fimages%2Fprojetos%2FRC.png&w=256&q=75" alt="Imagem do Projeto 2">`;
        imageOverlay.classList.add('active');
      } else {
        imageOverlay.innerHTML = '';
        imageOverlay.classList.remove('active');
      }
    }

    function updateThumbPosition() {
      if (totalPages > 1) {
        const progress = currentPage / (totalPages - 1);
        const newLeft = progress * (track.offsetWidth - thumb.offsetWidth);
        thumb.style.left = `${newLeft}px`;
      }
    }

    btnLeft.addEventListener("click", () => {
      if (currentPage === 0) {
        currentPage = totalPages - 1;
      } else {
        currentPage--;
      }
      updateSliderPosition();
    });

    btnRight.addEventListener("click", () => {
      if (currentPage === totalPages - 1) {
        currentPage = 0;
      } else {
        currentPage++;
      }
      updateSliderPosition();
    });

    window.addEventListener('resize', updateThumbPosition);
    updateSliderPosition();
  }

  // --- Função para iniciar o Carrossel de INTEGRANTES ---
  function initIntegrantesSlider() {
    const slider = document.getElementById("integrantes-carousel-slider");
    const btnUp = document.getElementById("integrantes-carousel-btn-up");
    const btnDown = document.getElementById("integrantes-carousel-btn-down");
    const thumb = document.querySelector("#integrantes .carousel-thumb");
    const track = document.querySelector("#integrantes .carousel-track");

    if (!slider || !btnUp || !btnDown || !thumb || !track) {
      console.error("Elementos do carrossel de integrantes não encontrados.");
      return;
    }

    const members = [
      {
        nome: "Kamile Pimentel",
        curso: "Ciência da Computação",
        date: "2022/1",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Fkp.png&w=128&q=75",
      },
      {
        nome: "Luana Hahn",
        curso: "Ciência da Computação",
        date: "2021/1",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Flh.png&w=128&q=75",
      },
      {
        nome: "Kathleen Hoff (Kathi)",
        curso: "Ciência da Computação",
        date: "2020/2",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Fkh.png&w=128&q=75",
      },
      {
        nome: "Thais Marcelle (Marti)",
        curso: "Engenharia da Computação",
        date: "2022/1",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Ftm.png&w=128&q=75",
      },
      {
        nome: "Luma Beserra",
        curso: "Ciência da Computação",
        date: "",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Flb.png&w=128&q=75",
      },
      {
        nome: "Milena Silva Braga",
        curso: "Ciência da Computação",
        date: "2019/2",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Fmsb.png&w=128&q=75",
      },
      {
        nome: "Ingrid Murielem",
        curso: "Ciência da Computação",
        date: "",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Fim.png&w=128&q=75",
      },
      {
        nome: "Julianne Emanuelle Martins",
        curso: "Ciência da Computação",
        date: "2022/1",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Fjem.png&w=128&q=75",
      },
      {
        nome: "Juliana Schmitt",
        curso: "Ciência da Computação",
        date: "",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Fjs.png&w=128&q=75",
      },
      {
        nome: "Maria Flávia Borrajo Tondo",
        curso: "Mestrado",
        date: "2023/2",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Fmfbt.png&w=128&q=75",
      },
      {
        nome: "Joana Campos",
        curso: "Ciência da Computação",
        date: "2021/1",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Fjc.png&w=128&q=75",
      },
      {
        nome: "Gisele Rotta ",
        curso: "Ciência da Computação",
        date: "2023/1",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Fgr.png&w=128&q=75",
      },
      {
        nome: "Laura Grippa",
        curso: "Ciência da Computação",
        date: "2018/1",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Flg.png&w=128&q=75",
      },
      {
        nome: "Lisa Manami Adate",
        curso: "Ciência da Computação",
        date: "2023/2",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Flma.png&w=128&q=75",
      },
      {
        nome: "Bruna Schmidt",
        curso: "Engenharia da Computação",
        date: "2023/1",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Fbs.png&w=128&q=75",
      },
      {
        nome: "Sofia Popsin Gomes",
        curso: "Engenharia da Computação",
        date: "2019/2",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Fspg.png&w=128&q=75",
      },
      {
        nome: "Elisa Cristini",
        curso: "Ciência da Computação",
        date: "2023/2",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Fec.png&w=128&q=75",
      },
      {
        nome: "Jade Hatanaka",
        curso: "Ciência da Computação",
        date: "2021/1",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Fjh.png&w=128&q=75",
      },
      {
        nome: "Leticia Santos Machado",
        curso: "Ciência da Computação",
        date: "",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Flsm.png&w=128&q=75",
      },
      {
        nome: "Isis Burmeister Pericolo",
        curso: "Ciência da Computação",
        date: "2018/1",
        img: "https://ps2025v2.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Fibp.png&w=128&q=75",
      },
      {
        nome: "Mariana Kaori",
        curso: "Engenharia da Computação",
        date: "2020/1",
        img: "https://ps2025v2-3n2i4makt-henrique-lindemanns-projects.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Fmk.png&w=128&q=75",
      },
      {
        nome: "Laura Keidann",
        curso: "Ciência da Computação",
        date: "",
        img: "https://ps2025v2-3n2i4makt-henrique-lindemanns-projects.vercel.app/_next/image?url=%2Fimages%2Fintegrantes%2Flk.png&w=128&q=75",
      },
    ];

    let currentPage = 0;
    let totalPages = 0;
    let itemsPerPage = 4;
    let cardHeight = 0;

    slider.innerHTML = members.map(m => `
        <div class="member-card">
            <img src="${m.img}" alt="Foto de ${m.nome}" loading="lazy">
            <div class="member-info">
                <p class="member-nome">${m.nome}</p>
                <p class="member-curso">${m.curso}</p>
                ${m.date ? `<p class="member-date">Ingresso na faculdade: ${m.date}</p>` : ""}
            </div>
        </div>`
    ).join("");

    function calculateLayout() {
      const firstCard = slider.children[0];
      if (!firstCard) return;
      
      itemsPerPage = 4;
      totalPages = Math.ceil(members.length / itemsPerPage);
      const rowGap = parseFloat(window.getComputedStyle(slider).rowGap);
      cardHeight = firstCard.offsetHeight + rowGap;
      currentPage = 0;
      updateSliderPosition();
    }

    function updateButtons() {
      btnUp.disabled = currentPage === 0;
      btnDown.disabled = currentPage >= totalPages - 1;
    }

    function moveSlider(direction) {
      if (direction === "up" && currentPage > 0) {
        currentPage--;
      } else if (direction === "down" && currentPage < totalPages - 1) {
        currentPage++;
      }
      updateSliderPosition();
    }

    function updateSliderPosition() {
      let yOffset = 0;
      if (window.innerWidth <= 900) {
        yOffset = currentPage * itemsPerPage * cardHeight;
      } else {
        yOffset = currentPage * cardHeight;
      }
      slider.style.transform = `translateY(-${yOffset}px)`;
      updateButtons();
      updateThumbPosition();
    }

    function updateThumbPosition() {
      if (totalPages > 1) {
        const progress = currentPage / (totalPages - 1);
        if (window.innerWidth <= 900) {
          thumb.style.top = "0px";
          const newLeft = progress * (track.offsetWidth - thumb.offsetWidth);
          thumb.style.left = `${newLeft}px`;
        } else {
          thumb.style.left = "0px";
          const newTop = progress * (track.offsetHeight - thumb.offsetHeight);
          thumb.style.top = `${newTop}px`;
        }
      }
    }

    btnUp.addEventListener("click", () => moveSlider("up"));
    btnDown.addEventListener("click", () => moveSlider("down"));
    window.addEventListener("resize", calculateLayout);
    setTimeout(calculateLayout, 200);
  }

  // --- Script do Formulário ---
  const form = document.getElementById("Formulario");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const dadosDoForm = new FormData(form);
      fetch("/processar", {
        method: "POST",
        body: dadosDoForm,
      })
      .then((response) => {
        if (response.status === 204) form.reset();
        else console.error("Erro no servidor, status:", response.status);
      })
      .catch((error) => console.error("Erro de rede:", error));
    });
  }
  
  initProjetosSlider();
  initIntegrantesSlider();

});
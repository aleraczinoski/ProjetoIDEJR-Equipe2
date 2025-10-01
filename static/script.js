document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector("#hamburg");
  const hamburgMenu = document.querySelector(".hamburgclick");
  hamburger.addEventListener("click", function () {
    hamburgMenu.classList.toggle("active");
  });
  window.addEventListener("resize", function () {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1200) {
      hamburgMenu.classList.remove("active");
    }
  });
  const menuLinks = document.querySelectorAll(".hamburgclick a");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      hamburgMenu.classList.remove("active");
    });
  });

  // --- Script do Carrossel ---
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

  const slider = document.getElementById("carousel-slider");
  const btnUp = document.getElementById("carousel-btn-up");
  const btnDown = document.getElementById("carousel-btn-down");
  const thumb = document.querySelector(".carousel-thumb");
  const track = document.querySelector(".carousel-track");

  if (slider && btnUp && btnDown) {
    // Variáveis de estado do carrossel
    let currentPage = 0;
    let totalPages = 0;
    let itemsPerPage = 4;
    let cardHeight = 0;

    slider.innerHTML = members
      .map(
        (member) => `
                    <div class="member-card">
                        <img src="${member.img}" alt="Foto de ${
          member.nome
        }" loading="lazy">
                        <div class="member-info">
                            <p class="member-nome">${member.nome}</p>
                            <p class="member-curso">${member.curso}</p>
                            ${
                              member.date
                                ? `<p class="member-date">Ingresso na faculdade: ${member.date}</p>`
                                : ""
                            }
                        </div>
                    </div>
                `
      )
      .join("");

    const calculateLayout = () => {
      const screenWidth = window.innerWidth;

      itemsPerPage = 4;
      totalPages = Math.ceil(members.length / itemsPerPage);
      const firstCard = slider.children[0];
      const rowGap = parseFloat(window.getComputedStyle(slider).rowGap);
      cardHeight = firstCard.offsetHeight + rowGap;
      currentPage = 0;
      updateSliderPosition();
    };

    const updateButtons = () => {
      btnUp.disabled = currentPage === 0;
      btnDown.disabled = currentPage >= totalPages - 1;
    };

    const moveSlider = (direction) => {
      if (direction === "up" && currentPage > 0) {
        currentPage--;
      } else if (direction === "down" && currentPage < totalPages - 1) {
        currentPage++;
      }
      updateSliderPosition();
    };

    const updateSliderPosition = () => {
      let yOffset = 0;

      // Mobile
      if (window.innerWidth <= 900) {
        yOffset = currentPage * itemsPerPage * cardHeight;
      }
      // Desktop
      else {
        yOffset = currentPage * cardHeight;
      }
      slider.style.transform = `translateY(-${yOffset}px)`;
      updateButtons();
      updateThumbPosition();
    };

    const updateThumbPosition = () => {
      if (thumb && track && totalPages > 1) {
        const progress = currentPage / (totalPages - 1);

        // Modo horizontal
        if (window.innerWidth <= 900) {
          thumb.style.top = "0px";
          const newLeft = progress * (track.offsetWidth - thumb.offsetWidth);
          thumb.style.left = `${newLeft}px`;
        }
        // Modo vertical
        else {
          thumb.style.left = "0px";
          const newTop = progress * (track.offsetHeight - thumb.offsetHeight);
          thumb.style.top = `${newTop}px`;
        }
      }
    };

    btnUp.addEventListener("click", () => moveSlider("up"));
    btnDown.addEventListener("click", () => moveSlider("down"));

    window.addEventListener("resize", calculateLayout);
    setTimeout(calculateLayout, 200);
  }
});

const form = document.getElementById("Formulario");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Iniciando envio assíncrono...");

    const dadosDoForm = new FormData(form);

    fetch("/processar", {
      method: "POST",
      body: dadosDoForm,
    })
      .then((response) => {
        if (response.status === 204) {
          form.reset();

          console.log("Mensagem enviada e inputs limpos (Status 204 OK).");
        } else if (response.status === 400) {
          console.error(
            "ERRO 400: Por favor, preencha todos os campos do formulário."
          );
        } else {
          console.error("ERRO NO SERVIDOR. Status:", response.status);
        }
      })
      .catch((error) => {
        console.error("Erro de rede ao processar o formulário:", error);
      });
  });
} else {
  console.error(
    "ERRO JS: O elemento de formulário com ID 'Formulario' não foi encontrado."
  );
}

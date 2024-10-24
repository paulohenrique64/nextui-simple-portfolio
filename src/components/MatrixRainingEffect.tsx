import React, { useEffect, useRef } from "react";

const MatrixRainingCode: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Verifica se o canvas está disponível
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Verifica se o contexto 2D está disponível

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let columns = Math.floor(width / 20); // Número de colunas baseado na largura do caractere
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    const charArray = characters.split("");
    let drops: number[] = []; // Declara drops como um array de números

    // Inicializa as gotas
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    let frameRate = 25; // Ajusta a taxa de quadros (valor mais baixo = velocidade mais lenta)
    let lastFrameTime = Date.now();

    const draw = () => {
      // Cria um retângulo preto translúcido para criar o efeito de desvanecimento
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, width, height);

      //ctx.fillStyle = "#74FF74"; // verde claro
      //ctx.fillStyle = "#87FF87"; // verde mais claro
      ctx.fillStyle = "#97FF97"; // verde mais claro ainda

      // Desenha os caracteres
      ctx.font = "15px monospace";
      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        // Redefine as gotas quando atingem o fundo do canvas
        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - lastFrameTime;

      // Atualiza a animação somente se tempo suficiente tiver passado
      if (elapsedTime > 1000 / frameRate) {
        draw();
        lastFrameTime = currentTime;
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Atualiza as dimensões do canvas ao redimensionar a janela
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / 20);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }
    };

    // Verifica se o usuário está em um dispositivo móvel antes de lidar com eventos de redimensionamento e rolagem
    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
    if (!isMobileDevice) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (!isMobileDevice) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <canvas className="matrix-canvas fixed top-0 left-0 z-[-1]" ref={canvasRef}></canvas>
  );
};

export default MatrixRainingCode;
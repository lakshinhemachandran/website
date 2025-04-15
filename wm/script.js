(function () {
    const a = document.createElement("a");
    a.href = "https://quantumdev.cc";
    a.target = "_blank";
  
    const div = document.createElement("div");
    div.id = "watermark";
    div.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
      border-radius: 12px;
      padding: 12px 16px;
      font-size: 18px;
      max-width: fit-content;
      z-index: 9999;
      cursor: pointer;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
      font-family: 'Fira Code', monospace;
      color: white;
      transition: all 0.3s ease-in-out;
    `;
  
    const img = document.createElement("img");
    img.src = "https://quantumdev.cc/images/quantum.png";
    img.alt = "QuantumDev Logo";
    img.style.cssText = `
      height: 40px;
      margin-right: 12px;
      object-fit: contain;
      border-radius: 50%;
      filter: brightness(0.85);
      transition: all 0.3s ease;
    `;
  
    const innerDiv = document.createElement("div");
    innerDiv.style.cssText = `
      display: flex;
      flex-direction: column;
      text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
    `;
  
    const p1 = document.createElement("p");
    p1.textContent = "Developed by QuantumDev";
    p1.style.cssText = `
      margin: 0;
      font-weight: 700;
      font-size: 16px;
      letter-spacing: 1px;
      color: white;
    `;
  
    const p2 = document.createElement("p");
    p2.textContent = "quantumdev.cc";
    p2.style.cssText = `
      margin: 0;
      font-size: 14px;
      opacity: 0.9;
      letter-spacing: 0.5px;
    `;
  
    div.onmouseover = function () {
      div.style.transform = "scale(1.05)";
      div.style.boxShadow = "0 20px 40px rgba(0,0,0,0.7), 0 0 25px rgba(255,255,255,0.5)";
      div.style.background = "linear-gradient(45deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7))";
      img.style.filter = "brightness(1.1)";
      p1.style.color = "#ff9e00";
    };
  
    div.onmouseout = function () {
      div.style.transform = "scale(1)";
      div.style.boxShadow = "0 12px 24px rgba(0,0,0,0.5)";
      div.style.background = "linear-gradient(45deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6))";
      img.style.filter = "brightness(0.85)";
      p1.style.color = "white";
    };
  
    innerDiv.appendChild(p1);
    innerDiv.appendChild(p2);
    div.appendChild(img);
    div.appendChild(innerDiv);
    a.appendChild(div);
    document.currentScript.parentNode.insertBefore(a, document.currentScript);
  })();
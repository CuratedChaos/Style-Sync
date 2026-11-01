(() => {
  "use strict";

  const products = [
    { id: "white-oxford", name: "White Oxford", category: "shirts", type: "Oxford shirt", fit: "Regular fit", material: "Cotton blend", price: 1999, color: "#e8e4da", image: "assets/shirts/shirt1.svg", alt: "Ivory white Oxford shirt", note: "Keep it effortless with beige chinos and clean white sneakers. A timeless base layer for a polished everyday look." },
    { id: "black-classic", name: "Black Classic", category: "shirts", type: "Classic shirt", fit: "Slim fit", material: "Cotton satin", price: 1899, color: "#292929", image: "assets/shirts/shirt2.svg", alt: "Black slim-fit button shirt", note: "Let the deep black do the work. Pair it with charcoal trousers and a simple watch for a sharp, understated look." },
    { id: "denim-blue", name: "Denim Blue", category: "shirts", type: "Denim shirt", fit: "Relaxed fit", material: "Soft denim", price: 2199, color: "#4f7296", image: "assets/shirts/shirt3.svg", alt: "Blue denim shirt", note: "Wear it open over a plain white tee with dark denim. Keep the rest simple and let the texture stand out." },
    { id: "polo-premium", name: "Polo Premium", category: "polos", type: "Piqué polo", fit: "Classic fit", material: "Cotton piqué", price: 1699, color: "#718b70", image: "assets/shirts/shirt4.svg", alt: "Sage green polo shirt", note: "A versatile smart-casual pick. Try stone chinos and low-profile sneakers for an easy weekend uniform." },
    { id: "oversized-tee", name: "Oversized Tee", category: "tees", type: "Everyday T-shirt", fit: "Oversized fit", material: "Heavyweight jersey", price: 1499, color: "#b5a1c8", image: "assets/shirts/shirt5.svg", alt: "Lavender oversized T-shirt", note: "Lean into the relaxed silhouette with straight-leg jeans and chunky sneakers. Keep the proportions balanced." },
    { id: "grey-hoodie", name: "Grey Hoodie", category: "hoodies", type: "Pullover hoodie", fit: "Relaxed fit", material: "Brushed fleece", price: 2499, color: "#92949a", image: "assets/shirts/shirt6.svg", alt: "Grey pullover hoodie", note: "Layer over a light tee with dark jeans. A tonal pair of sneakers will make the whole outfit feel considered." }
  ];

  const categoryLabels = { all: "All", shirts: "Shirts", polos: "Polos", tees: "Tees", hoodies: "Hoodies" };
  const elements = {
    productGrid: document.getElementById("productGrid"),
    itemCount: document.getElementById("itemCount"),
    emptyState: document.getElementById("emptyState"),
    search: document.getElementById("productSearch"),
    categoryTabs: document.getElementById("categoryTabs"),
    recommendation: document.getElementById("recommendationText"),
    camera: document.getElementById("camera"),
    cameraButton: document.getElementById("cameraButton"),
    cameraButtonText: document.getElementById("cameraButtonText"),
    resetButton: document.getElementById("resetButton"),
    snapshotButton: document.getElementById("snapshotButton"),
    cameraState: document.getElementById("cameraState"),
    cameraStateText: document.getElementById("cameraStateText"),
    idleGuide: document.getElementById("idleGuide"),
    mirrorFrame: document.getElementById("mirrorFrame"),
    shirtOverlay: document.getElementById("shirtOverlay"),
    selectedName: document.getElementById("selectedName"),
    selectedDescription: document.getElementById("selectedDescription"),
    selectedPrice: document.getElementById("selectedPrice"),
    captionSwatch: document.getElementById("captionSwatch"),
    stageMessage: document.getElementById("stageMessage"),
    overlayState: document.getElementById("overlayState"),
    overlayToggle: document.getElementById("overlayToggle"),
    flipButton: document.getElementById("flipButton"),
    garmentSize: document.getElementById("garmentSize"),
    garmentPosition: document.getElementById("garmentPosition"),
    sizeValue: document.getElementById("sizeValue"),
    positionValue: document.getElementById("positionValue"),
    toast: document.getElementById("toast")
  };

  let selectedProductId = products[0].id;
  let activeCategory = "all";
  let cameraStream = null;
  let overlayVisible = true;
  let mirrorFlipped = true;
  let toastTimer = null;

  const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

  function showToast(message) {
    if (!elements.toast) return;
    elements.toast.textContent = message;
    elements.toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 2800);
  }

  function getVisibleProducts() {
    const query = elements.search.value.trim().toLowerCase();
    return products.filter(product => {
      const categoryMatch = activeCategory === "all" || product.category === activeCategory;
      const searchMatch = !query || `${product.name} ${product.type} ${product.fit} ${product.material} ${product.category}`.toLowerCase().includes(query);
      return categoryMatch && searchMatch;
    });
  }

  function renderProducts() {
    const visible = getVisibleProducts();
    elements.productGrid.innerHTML = visible.map(product => `
      <button class="product-card${product.id === selectedProductId ? " is-selected" : ""}" type="button" data-product-id="${product.id}" aria-pressed="${product.id === selectedProductId}" aria-label="Select ${product.name}, ${money.format(product.price)}">
        <span class="product-thumb"><img src="${product.image}" alt="${product.alt}" loading="eager"></span>
        <span class="product-meta"><strong>${product.name}</strong><span class="product-price">${money.format(product.price)}</span></span>
        <span class="product-subtitle">${product.type} · ${product.fit}</span>
        <span class="selected-check" aria-hidden="true">✓</span>
      </button>
    `).join("");

    elements.itemCount.textContent = `${String(visible.length).padStart(2, "0")} ${visible.length === 1 ? "piece" : "pieces"}`;
    elements.emptyState.hidden = visible.length !== 0;
  }

  function setSelectedProduct(productId) {
    const product = products.find(item => item.id === productId);
    if (!product) return;
    selectedProductId = product.id;

    elements.shirtOverlay.src = product.image;
    elements.shirtOverlay.alt = `${product.name} garment preview`;
    elements.selectedName.textContent = product.name;
    elements.selectedDescription.textContent = `${product.material} · ${product.fit}`;
    elements.selectedPrice.textContent = money.format(product.price);
    elements.captionSwatch.style.background = product.color;
    elements.recommendation.textContent = product.note;

    renderProducts();
    updateStageMessage();
  }

  function setCategory(category) {
    if (!(category in categoryLabels)) return;
    activeCategory = category;
    elements.categoryTabs.querySelectorAll("[data-category]").forEach(button => {
      const isActive = button.dataset.category === category;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    const visible = getVisibleProducts();
    if (visible.length && !visible.some(product => product.id === selectedProductId)) {
      setSelectedProduct(visible[0].id);
    } else {
      renderProducts();
    }
  }

  function setCameraState(isLive) {
    elements.camera.classList.toggle("is-live", isLive);
    elements.mirrorFrame.classList.toggle("is-camera-live", isLive);
    elements.cameraState.classList.toggle("is-live", isLive);
    elements.cameraStateText.textContent = isLive ? "CAMERA LIVE" : "CAMERA OFF";
    elements.cameraButton.setAttribute("aria-pressed", String(isLive));
    elements.cameraButtonText.textContent = isLive ? "Stop camera" : "Start camera";
    elements.idleGuide.classList.toggle("is-hidden", isLive);
    updateStageMessage();
  }

  function updateStageMessage() {
    const product = products.find(item => item.id === selectedProductId) || products[0];
    if (cameraStream) {
      elements.stageMessage.textContent = `Live preview · ${product.name} selected`;
    } else {
      elements.stageMessage.textContent = `Camera is off · ${product.name} selected`;
    }
  }

  function updateOverlayState() {
    elements.shirtOverlay.classList.toggle("is-hidden", !overlayVisible);
    elements.overlayToggle.textContent = overlayVisible ? "Hide garment" : "Show garment";
    elements.overlayToggle.setAttribute("aria-pressed", String(overlayVisible));
    elements.overlayState.textContent = overlayVisible ? "Overlay on" : "Overlay off";
  }

  function updateFitControls() {
    const size = Number(elements.garmentSize.value);
    const position = Number(elements.garmentPosition.value);
    document.documentElement.style.setProperty("--garment-width", `${size}%`);
    document.documentElement.style.setProperty("--garment-top", `${position}%`);
    elements.sizeValue.value = `${size}%`;
    elements.sizeValue.textContent = `${size}%`;
    elements.positionValue.value = `${position}%`;
    elements.positionValue.textContent = `${position}%`;
  }

  function setMirrorFlipped(flipped) {
    mirrorFlipped = flipped;
    elements.camera.classList.toggle("is-unmirrored", !flipped);
    elements.flipButton.setAttribute("aria-pressed", String(flipped));
    elements.flipButton.querySelector("span").textContent = flipped ? "Mirror view" : "Normal view";
  }

  async function startCamera() {
    if (cameraStream) return;
    if (!navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== "function") {
      showToast("Camera access requires localhost or HTTPS. Open this app at http://127.0.0.1:8000.");
      return;
    }

    elements.cameraButton.disabled = true;
    elements.cameraButtonText.textContent = "Connecting…";

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: { ideal: "user" }
        }
      });

      cameraStream = stream;
      elements.camera.srcObject = stream;
      await elements.camera.play();
      setCameraState(true);
      stream.getVideoTracks().forEach(track => {
        track.addEventListener("ended", () => {
          if (cameraStream === stream) stopCamera(false);
        }, { once: true });
      });
      showToast("Camera connected. Adjust the garment overlay to line it up with your reflection.");
    } catch (error) {
      console.error("StyleSync camera error:", error);
      if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
      }
      cameraStream = null;
      elements.camera.srcObject = null;
      setCameraState(false);

      const messages = {
        NotAllowedError: "Camera permission was blocked. Allow camera access in your browser settings, then try again.",
        NotFoundError: "No camera was found on this device.",
        NotReadableError: "The camera is busy in another app. Close the app using it and try again.",
        OverconstrainedError: "The camera does not support the requested settings. Try another camera.",
        SecurityError: "Camera access is blocked by browser security. Use localhost or HTTPS."
      };
      showToast(messages[error.name] || `The camera could not start (${error.name || "unknown error"}). Check browser permissions and try again.`);
    } finally {
      elements.cameraButton.disabled = false;
      elements.cameraButtonText.textContent = cameraStream ? "Stop camera" : "Start camera";
    }
  }

  function stopCamera(showMessage = true) {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      cameraStream = null;
    }
    if (elements.camera) {
      elements.camera.pause();
      elements.camera.srcObject = null;
    }
    setCameraState(false);
    if (showMessage) showToast("Camera stopped.");
  }

  function resetPreview() {
    stopCamera(false);
    elements.search.value = "";
    setCategory("all");
    setSelectedProduct(products[0].id);
    elements.garmentSize.value = "34";
    elements.garmentPosition.value = "22";
    updateFitControls();
    overlayVisible = true;
    updateOverlayState();
    setMirrorFlipped(true);
    showToast("Preview reset to the White Oxford.");
  }

  async function saveSnapshot() {
    if (overlayVisible && !elements.shirtOverlay.complete) {
      await new Promise(resolve => {
        elements.shirtOverlay.addEventListener("load", resolve, { once: true });
        elements.shirtOverlay.addEventListener("error", resolve, { once: true });
      });
    }
    const frame = elements.mirrorFrame;
    const rect = frame.getBoundingClientRect();
    const width = 1280;
    const height = Math.max(720, Math.round(width * (rect.height / rect.width)));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) {
      showToast("Snapshot is not supported by this browser.");
      return;
    }

    const gradient = context.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#eee9e5");
    gradient.addColorStop(1, "#f8f5f1");
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    if (cameraStream && elements.camera.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      context.save();
      if (mirrorFlipped) {
        context.translate(width, 0);
        context.scale(-1, 1);
      }
      context.drawImage(elements.camera, 0, 0, width, height);
      context.restore();
    }

    if (overlayVisible && elements.shirtOverlay.complete && elements.shirtOverlay.naturalWidth) {
      const overlayRect = elements.shirtOverlay.getBoundingClientRect();
      const x = ((overlayRect.left - rect.left) / rect.width) * width;
      const y = ((overlayRect.top - rect.top) / rect.height) * height;
      const w = (overlayRect.width / rect.width) * width;
      const h = (overlayRect.height / rect.height) * height;
      context.save();
      context.shadowColor = "rgba(46,35,23,.16)";
      context.shadowBlur = 22;
      context.shadowOffsetY = 10;
      context.drawImage(elements.shirtOverlay, x, y, w, h);
      context.restore();
    }

    context.fillStyle = "rgba(255,255,255,.82)";
    context.fillRect(28, height - 62, 420, 38);
    context.fillStyle = "#51483d";
    context.font = "600 17px Arial, sans-serif";
    const product = products.find(item => item.id === selectedProductId) || products[0];
    context.fillText(`StyleSync  /  ${product.name}  /  ${money.format(product.price)}`, 43, height - 37);

    canvas.toBlob(blob => {
      if (!blob) {
        showToast("Snapshot could not be created. Please try again.");
        return;
      }
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `stylesync-${product.id}-preview.png`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      showToast("Snapshot saved to your downloads.");
    }, "image/png");
  }

  elements.productGrid.addEventListener("click", event => {
    const card = event.target.closest("[data-product-id]");
    if (card) setSelectedProduct(card.dataset.productId);
  });

  elements.categoryTabs.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (button) setCategory(button.dataset.category);
  });

  elements.search.addEventListener("input", renderProducts);
  elements.cameraButton.addEventListener("click", () => cameraStream ? stopCamera() : startCamera());
  elements.resetButton.addEventListener("click", resetPreview);
  elements.snapshotButton.addEventListener("click", saveSnapshot);
  elements.overlayToggle.addEventListener("click", () => {
    overlayVisible = !overlayVisible;
    updateOverlayState();
  });
  elements.flipButton.addEventListener("click", () => setMirrorFlipped(!mirrorFlipped));
  elements.garmentSize.addEventListener("input", updateFitControls);
  elements.garmentPosition.addEventListener("input", updateFitControls);

  // Keyboard shortcut: / focuses the wardrobe search without hijacking text fields.
  document.addEventListener("keydown", event => {
    const target = event.target;
    const isTyping = target instanceof HTMLElement && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));
    if (event.key === "/" && !isTyping) {
      event.preventDefault();
      elements.search.focus();
    }
    if (event.key === "Escape" && document.activeElement === elements.search) {
      elements.search.value = "";
      renderProducts();
      elements.search.blur();
    }
  });

  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const observedSections = ["home", "products", "how-it-works", "about"]
    .map(id => document.getElementById(id))
    .filter(Boolean);
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach(link => link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`));
    }, { rootMargin: "-10% 0px -80% 0px", threshold: 0 });
    observedSections.forEach(section => observer.observe(section));
  }

  window.addEventListener("beforeunload", () => stopCamera(false));

  renderProducts();
  setSelectedProduct(selectedProductId);
  setCameraState(false);
  updateFitControls();
  updateOverlayState();
  setMirrorFlipped(true);
})();

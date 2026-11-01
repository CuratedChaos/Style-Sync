(() => {
  "use strict";

  const products = [
    {
      id: "white-oxford", name: "White Oxford", category: "shirts", type: "Oxford shirt", fit: "Regular fit", material: "Cotton Oxford", price: 1999, color: "#e8e4da", colorName: "Soft ivory", image: "assets/shirts/shirt1.svg", alt: "Ivory White Oxford button-down shirt",
      note: "Keep it effortless with beige chinos and clean white sneakers. A timeless base layer for a polished everyday look.",
      categoryLabel: "SHIRTS / EVERYDAY ESSENTIAL", materialBadge: "OXFORD TEXTURE",
      description: "A crisp, timeless button-down with a softly pebbled Oxford surface, a neat collar and an easy regular silhouette. Designed as the kind of dependable piece that moves from class to casual plans without trying too hard.",
      features: ["Button-down collar", "Clean front placket", "Chest pocket detail", "Curved hem"],
      specs: [["FABRIC STORY", "Cotton Oxford weave"], ["SURFACE", "Basket-like texture"], ["SILHOUETTE", "Easy regular fit"], ["FEEL", "Crisp with a soft handfeel"]],
      fitAdvice: "Regular fit · Choose your usual size for an easy, balanced silhouette.", care: "Wash cold with similar colours. Turn inside out and use a low-heat iron.",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },
    {
      id: "black-classic", name: "Black Classic", category: "shirts", type: "Classic shirt", fit: "Slim fit", material: "Smooth cotton blend", price: 1899, color: "#292929", colorName: "Midnight black", image: "assets/shirts/shirt2.svg", alt: "Midnight black slim-fit button shirt",
      note: "Let the deep black do the work. Pair it with charcoal trousers and a simple watch for a sharp, understated look.",
      categoryLabel: "SHIRTS / AFTER-HOURS CLASSIC", materialBadge: "SMOOTH FINISH",
      description: "A clean, close-to-the-body shirt with a subtle sheen and sharp lines. The minimal front keeps the look refined, while the slim shape gives it a smarter, more tailored feel.",
      features: ["Structured point collar", "Full button placket", "Single chest pocket", "Tailored sleeve shape"],
      specs: [["FABRIC STORY", "Smooth cotton blend"], ["SURFACE", "Fine diagonal twill look"], ["SILHOUETTE", "Close slim fit"], ["FEEL", "Smooth with a fluid drape"]],
      fitAdvice: "Slim fit · Between sizes? Size up for a little more room through the chest.", care: "Wash inside out with dark colours. Avoid bleach and dry in shade to protect the deep tone.",
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: "denim-blue", name: "Denim Blue", category: "shirts", type: "Denim shirt", fit: "Relaxed fit", material: "Mid-weight denim", price: 2199, color: "#4f7296", colorName: "Washed indigo", image: "assets/shirts/shirt3.svg", alt: "Washed indigo blue denim shirt with chest pockets",
      note: "Wear it open over a plain white tee with dark denim. Keep the rest simple and let the texture stand out.",
      categoryLabel: "SHIRTS / TEXTURE LAYER", materialBadge: "DENIM CHARACTER",
      description: "A relaxed denim-inspired layer with visible topstitching, a defined yoke and practical chest pockets. The washed blue tone brings in texture without making the outfit feel too heavy.",
      features: ["Western-style yoke", "Twin chest pockets", "Contrast topstitching", "Metal-look buttons"],
      specs: [["FABRIC STORY", "Mid-weight denim"], ["SURFACE", "Washed twill texture"], ["SILHOUETTE", "Relaxed fit"], ["FEEL", "Structured, softening with wear"]],
      fitAdvice: "Relaxed fit · Wear true to size for a loose layer or size down for a neater shape.", care: "Wash separately the first few times. Turn inside out and dry away from direct sunlight.",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: "polo-premium", name: "Polo Premium", category: "polos", type: "Piqué polo", fit: "Classic fit", material: "Cotton piqué knit", price: 1699, color: "#718b70", colorName: "Sage green", image: "assets/shirts/shirt4.svg", alt: "Sage green cotton piqué polo shirt",
      note: "A versatile smart-casual pick. Try stone chinos and low-profile sneakers for an easy weekend uniform.",
      categoryLabel: "POLOS / SMART CASUAL", materialBadge: "PIQUÉ KNIT",
      description: "A smart-casual staple with a breathable-looking waffle-knit surface, a structured collar and a short button placket. The classic shape is neat without feeling formal.",
      features: ["Ribbed polo collar", "Two-button placket", "Rib-knit sleeve ends", "Straight hem"],
      specs: [["FABRIC STORY", "Cotton piqué knit"], ["SURFACE", "Mini waffle texture"], ["SILHOUETTE", "Classic fit"], ["FEEL", "Textured and airy"]],
      fitAdvice: "Classic fit · Keep your usual size for a clean shoulder line and comfortable body room.", care: "Wash cold on a gentle cycle. Reshape the collar while damp and dry flat or on a hanger.",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },
    {
      id: "oversized-tee", name: "Oversized Tee", category: "tees", type: "Everyday T-shirt", fit: "Oversized fit", material: "Heavyweight jersey", price: 1499, color: "#b5a1c8", colorName: "Dusty lavender", image: "assets/shirts/shirt5.svg", alt: "Dusty lavender oversized heavyweight T-shirt",
      note: "Lean into the relaxed silhouette with straight-leg jeans and chunky sneakers. Keep the proportions balanced.",
      categoryLabel: "TEES / OFF-DUTY UNIFORM", materialBadge: "HEAVY JERSEY",
      description: "A roomy tee with a dropped shoulder, substantial jersey feel and a clean crew neckline. Built around an easy streetwear silhouette with enough structure to hold its shape.",
      features: ["Ribbed crew neck", "Dropped shoulders", "Wide relaxed body", "Reinforced sleeve hems"],
      specs: [["FABRIC STORY", "Heavyweight jersey"], ["SURFACE", "Fine cotton-knit grain"], ["SILHOUETTE", "Oversized fit"], ["FEEL", "Substantial and soft"]],
      fitAdvice: "Oversized fit · Your usual size gives the intended relaxed shape; size down for less volume.", care: "Wash inside out with similar colours. Avoid high heat to help maintain the neckline and shape.",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },
    {
      id: "grey-hoodie", name: "Grey Hoodie", category: "hoodies", type: "Pullover hoodie", fit: "Relaxed fit", material: "Brushed fleece", price: 2499, color: "#92949a", colorName: "Heather grey", image: "assets/shirts/shirt6.svg", alt: "Heather grey pullover hoodie with drawstrings and pouch pocket",
      note: "Layer over a light tee with dark jeans. A tonal pair of sneakers will make the whole outfit feel considered.",
      categoryLabel: "HOODIES / LAYERING PIECE", materialBadge: "BRUSHED FLEECE",
      description: "A cosy pullover layer with a dimensional hood, adjustable drawcords and a roomy front pouch. The relaxed profile makes it an easy top layer for cooler days.",
      features: ["Double-layer hood", "Adjustable drawcords", "Kangaroo pouch pocket", "Rib-knit cuffs and hem"],
      specs: [["FABRIC STORY", "Brushed fleece"], ["SURFACE", "Soft heather texture"], ["SILHOUETTE", "Relaxed fit"], ["FEEL", "Warm and plush"]],
      fitAdvice: "Relaxed fit · Choose your usual size for layering room or size down for a closer fit.", care: "Wash inside out on a cool cycle. Do not iron directly over prints or trims; reshape while damp.",
      sizes: ["S", "M", "L", "XL", "XXL"]
    }
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
    cameraSelect: document.getElementById("cameraSelect"),
    cameraZoomControl: document.getElementById("cameraZoomControl"),
    cameraZoom: document.getElementById("cameraZoom"),
    cameraZoomValue: document.getElementById("cameraZoomValue"),
    expandMirrorButton: document.getElementById("expandMirrorButton"),
    resetButton: document.getElementById("resetButton"),
    snapshotButton: document.getElementById("snapshotButton"),
    cameraState: document.getElementById("cameraState"),
    cameraStateText: document.getElementById("cameraStateText"),
    poseStatus: document.getElementById("poseStatus"),
    poseCanvas: document.getElementById("poseCanvas"),
    garmentCanvas: document.getElementById("garmentCanvas"),
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
    toast: document.getElementById("toast"),
    detailImage: document.getElementById("detailProductImage"),
    detailIndex: document.getElementById("detailIndex"),
    detailColorDot: document.getElementById("detailColorDot"),
    detailColorName: document.getElementById("detailColorName"),
    detailMaterialBadge: document.getElementById("detailMaterialBadge"),
    detailCategory: document.getElementById("detailCategory"),
    detailProductName: document.getElementById("detailProductName"),
    detailProductPrice: document.getElementById("detailProductPrice"),
    detailDescription: document.getElementById("detailDescription"),
    detailFeatures: document.getElementById("detailFeatures"),
    detailSpecs: document.getElementById("detailSpecs"),
    sizeOptions: document.getElementById("sizeOptions"),
    selectedSizeLabel: document.getElementById("selectedSizeLabel"),
    detailFitNote: document.getElementById("detailFitNote"),
    detailCare: document.getElementById("detailCare")
  };

  let selectedProductId = products[0].id;
  let selectedSize = "M";
  let activeCategory = "all";
  let cameraStream = null;
  let overlayVisible = true;
  let mirrorFlipped = true;
  let toastTimer = null;
  let poseLandmarker = null;
  let poseLandmarkerPromise = null;
  let poseAnimationFrame = 0;
  let poseTrackingRequested = false;
  let poseTrackingReady = false;
  let poseUnavailable = false;
  let poseDetected = false;
  let lastInferenceAt = 0;
  let lastVideoTime = -1;
  let lastTaskTimestamp = 0;
  let latestPoseAt = 0;
  let latestLandmarks = null;
  let smoothedGarmentPoints = null;
  let latestSegmentationCanvas = null;
  let segmentationFrameCounter = 0;
  let selectedCameraDeviceId = "";
  let activeCameraTrack = null;
  let cameraZoomCapabilities = null;
  let stageResizeObserver = null;
  let stageRefreshFrame = 0;

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
      const searchMatch = !query || `${product.name} ${product.type} ${product.fit} ${product.material} ${product.category} ${product.colorName} ${product.materialBadge} ${product.description} ${product.features.join(" ")}`.toLowerCase().includes(query);
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
        <span class="product-material-line"><i style="background:${product.color}"></i>${product.material}</span>
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

    // The expanded product story stays in sync with the selected wardrobe piece.
    elements.detailImage.src = product.image;
    elements.detailImage.alt = `Detailed illustration of ${product.name}`;
    elements.detailIndex.textContent = `${String(products.indexOf(product) + 1).padStart(2, "0")} / ${String(products.length).padStart(2, "0")}`;
    elements.detailColorDot.style.background = product.color;
    elements.detailColorName.textContent = product.colorName;
    elements.detailMaterialBadge.textContent = product.materialBadge;
    elements.detailCategory.textContent = product.categoryLabel;
    elements.detailProductName.textContent = product.name;
    elements.detailProductPrice.textContent = money.format(product.price);
    elements.detailDescription.textContent = product.description;
    elements.detailFeatures.innerHTML = product.features.map(feature => `<span>${feature}</span>`).join("");
    elements.detailSpecs.innerHTML = product.specs.map(([label, value]) => `<div class="detail-spec"><span>${label}</span><strong>${value}</strong></div>`).join("");
    elements.detailFitNote.textContent = `${product.fitAdvice} Preview scaling is visual only.`;
    elements.detailCare.textContent = product.care;

    // Keep the chosen preview size when possible; otherwise move to a size offered by this demo item.
    if (!product.sizes.includes(selectedSize)) selectedSize = product.sizes.includes("M") ? "M" : product.sizes[Math.floor(product.sizes.length / 2)];
    renderSizeOptions();
    renderProducts();
    updateStageMessage();
    if (poseDetected && latestLandmarks) drawGarmentOverlay(latestLandmarks, elements.mirrorFrame.getBoundingClientRect());
  }

  function renderSizeOptions() {
    elements.sizeOptions.innerHTML = ["XS", "S", "M", "L", "XL", "XXL"].map(size =>
      `<button type="button" data-size="${size}" aria-pressed="${size === selectedSize}">${size}</button>`
    ).join("");
    elements.selectedSizeLabel.textContent = `SIZE ${selectedSize}`;
  }

  function chooseSize(size) {
    const previewWidths = { XS: 28, S: 31, M: 34, L: 37, XL: 40, XXL: 43 };
    if (!(size in previewWidths)) return;
    selectedSize = size;
    elements.garmentSize.value = String(previewWidths[size]);
    renderSizeOptions();
    updateFitControls();
    showToast(`Preview scale changed to ${size}. This is not a measured fit recommendation.`);
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
    if (!cameraStream) {
      elements.stageMessage.textContent = `Camera is off · ${product.name} selected`;
    } else if (poseDetected) {
      elements.stageMessage.textContent = `Body detected · tracking ${product.name}`;
    } else if (poseUnavailable) {
      elements.stageMessage.textContent = `Camera live · manual preview for ${product.name}`;
    } else if (poseTrackingReady || poseTrackingRequested) {
      elements.stageMessage.textContent = "Move camera back until head, shoulders and waist are visible";
    } else {
      elements.stageMessage.textContent = `Live preview · ${product.name} selected`;
    }
  }

  function setPoseStatus(label, state) {
    if (!elements.poseStatus) return;
    elements.poseStatus.textContent = label;
    elements.poseStatus.dataset.state = state;
  }

  async function loadPoseLandmarker() {
    if (poseLandmarker) return poseLandmarker;
    if (!poseLandmarkerPromise) {
      poseLandmarkerPromise = (async () => {
        // The library, WebAssembly files and model are fetched on first use.
        const vision = await import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/vision_bundle.mjs");
        const fileset = await vision.FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
        );
        return vision.PoseLandmarker.createFromOptions(fileset, {
          baseOptions: {
            modelAssetPath: "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task"
          },
          runningMode: "VIDEO",
          numPoses: 1,
          minPoseDetectionConfidence: 0.55,
          minPosePresenceConfidence: 0.55,
          minTrackingConfidence: 0.5,
          outputSegmentationMasks: true
        });
      })().then(task => {
        poseLandmarker = task;
        return task;
      }).catch(error => {
        poseLandmarkerPromise = null;
        throw error;
      });
    }
    return poseLandmarkerPromise;
  }

  function landmarkVisible(landmark, threshold = 0.45) {
    if (!landmark) return false;
    const visibility = landmark.visibility ?? landmark.presence ?? 1;
    const presence = landmark.presence ?? visibility;
    return visibility >= threshold && presence >= threshold;
  }

  function smoothLandmarkSet(previous, current, responsiveness = .62) {
    if (!Array.isArray(current)) return current;
    if (!Array.isArray(previous) || previous.length !== current.length) return current.map(point => point ? { ...point } : point);
    return current.map((point, index) => {
      const prior = previous[index];
      if (!point || !prior) return point ? { ...point } : point;
      const visibility = point.visibility ?? point.presence ?? 1;
      const presence = point.presence ?? visibility;
      // Trust the latest point immediately when it is newly visible; otherwise damp jitter.
      const blend = visibility < .18 || presence < .18 ? 1 : responsiveness;
      return {
        ...point,
        x: prior.x + (point.x - prior.x) * blend,
        y: prior.y + (point.y - prior.y) * blend,
        z: Number.isFinite(point.z) && Number.isFinite(prior.z) ? prior.z + (point.z - prior.z) * blend : point.z
      };
    });
  }

  function getStageImageTransform(sourceWidth, sourceHeight, rect, fit = "cover") {
    if (!sourceWidth || !sourceHeight || !rect.width || !rect.height) return null;
    const scale = fit === "contain"
      ? Math.min(rect.width / sourceWidth, rect.height / sourceHeight)
      : Math.max(rect.width / sourceWidth, rect.height / sourceHeight);
    const renderedWidth = sourceWidth * scale;
    const renderedHeight = sourceHeight * scale;
    return {
      scale,
      x: (rect.width - renderedWidth) / 2,
      y: (rect.height - renderedHeight) / 2,
      width: renderedWidth,
      height: renderedHeight
    };
  }

  function currentStageFit() {
    return window.getComputedStyle(elements.camera).objectFit || "cover";
  }

  function toStagePoint(landmark, rect) {
    const videoWidth = elements.camera.videoWidth;
    const videoHeight = elements.camera.videoHeight;
    const transform = getStageImageTransform(videoWidth, videoHeight, rect, currentStageFit());
    if (!transform || !landmark) return null;
    let x = transform.x + landmark.x * transform.width;
    const y = transform.y + landmark.y * transform.height;
    if (mirrorFlipped) x = rect.width - x;
    return { x, y };
  }

  function drawSourceToStage(context, source, sourceWidth, sourceHeight, rect, mirrored = mirrorFlipped) {
    const transform = getStageImageTransform(sourceWidth, sourceHeight, rect, currentStageFit());
    if (!transform || !source) return;
    context.save();
    if (mirrored) {
      context.translate(rect.width, 0);
      context.scale(-1, 1);
    }
    context.drawImage(source, transform.x, transform.y, transform.width, transform.height);
    context.restore();
  }

  function makeSegmentationMaskCanvas(mask) {
    if (!mask || !mask.width || !mask.height) return null;
    try {
      let values;
      if (typeof mask.getAsFloat32Array === "function") values = mask.getAsFloat32Array();
      else if (typeof mask.getAsUint8Array === "function") values = mask.getAsUint8Array();
      if (!values || values.length < mask.width * mask.height) return null;

      const canvas = document.createElement("canvas");
      canvas.width = mask.width;
      canvas.height = mask.height;
      const context = canvas.getContext("2d", { willReadFrequently: false });
      if (!context) return null;
      const image = context.createImageData(mask.width, mask.height);
      const isByteMask = values instanceof Uint8Array || values instanceof Uint8ClampedArray;
      for (let index = 0; index < mask.width * mask.height; index++) {
        const confidence = isByteMask ? values[index] / 255 : values[index];
        // Soft threshold retains clean garment edges while suppressing background noise.
        const alpha = Math.max(0, Math.min(1, (confidence - 0.20) / 0.62));
        const offset = index * 4;
        image.data[offset] = 255;
        image.data[offset + 1] = 255;
        image.data[offset + 2] = 255;
        image.data[offset + 3] = Math.round(alpha * 255);
      }
      context.putImageData(image, 0, 0);
      return canvas;
    } catch (error) {
      console.warn("StyleSync segmentation mask fallback:", error);
      return null;
    }
  }

  function mixColor(hex, target, amount) {
    const value = hex.replace('#', '');
    const targetValue = target.replace('#', '');
    const source = [0, 2, 4].map(index => parseInt(value.slice(index, index + 2), 16));
    const dest = [0, 2, 4].map(index => parseInt(targetValue.slice(index, index + 2), 16));
    return `#${source.map((channel, index) => Math.round(channel + (dest[index] - channel) * amount).toString(16).padStart(2, '0')).join('')}`;
  }

  function unitVector(from, to) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const length = Math.hypot(dx, dy) || 1;
    return { x: dx / length, y: dy / length };
  }

  function pointOffset(point, x, y) {
    return { x: point.x + x, y: point.y + y };
  }

  function makeSleevePath(shoulder, elbow, cuff, shoulderWidth, elbowWidth, cuffWidth) {
    const upper = unitVector(shoulder, elbow);
    const lower = unitVector(elbow, cuff);
    const upperNormal = { x: -upper.y, y: upper.x };
    const lowerNormal = { x: -lower.y, y: lower.x };
    const path = new Path2D();
    path.moveTo(shoulder.x + upperNormal.x * shoulderWidth, shoulder.y + upperNormal.y * shoulderWidth);
    path.quadraticCurveTo(elbow.x + upperNormal.x * elbowWidth, elbow.y + upperNormal.y * elbowWidth, cuff.x + lowerNormal.x * cuffWidth, cuff.y + lowerNormal.y * cuffWidth);
    path.lineTo(cuff.x - lowerNormal.x * cuffWidth, cuff.y - lowerNormal.y * cuffWidth);
    path.quadraticCurveTo(elbow.x - upperNormal.x * elbowWidth, elbow.y - upperNormal.y * elbowWidth, shoulder.x - upperNormal.x * shoulderWidth, shoulder.y - upperNormal.y * shoulderWidth);
    path.quadraticCurveTo(shoulder.x, shoulder.y, shoulder.x + upperNormal.x * shoulderWidth, shoulder.y + upperNormal.y * shoulderWidth);
    path.closePath();
    return path;
  }

  function drawTextileTexture(context, path, bounds, kind, distance) {
    context.save();
    context.clip(path);
    const left = Math.max(0, bounds.left);
    const right = Math.min(elements.mirrorFrame.clientWidth, bounds.right);
    const top = Math.max(0, bounds.top);
    const bottom = Math.min(elements.mirrorFrame.clientHeight, bounds.bottom);
    const span = Math.max(1, (right - left) + (bottom - top));
    const spacing = Math.max(7, Math.min(18, distance * (kind === "fleece" ? .035 : .028)));
    context.lineWidth = Math.max(.55, distance * .0018);

    if (kind === "denim") {
      context.strokeStyle = "rgba(255,255,255,.20)";
      for (let offset = left - (bottom - top); offset < right + (bottom - top); offset += spacing * 1.35) {
        context.beginPath(); context.moveTo(offset, top); context.lineTo(offset + (bottom - top) * .62, bottom); context.stroke();
      }
      context.strokeStyle = "rgba(18,35,52,.12)";
      for (let offset = left - (bottom - top); offset < right + (bottom - top); offset += spacing * 1.35) {
        context.beginPath(); context.moveTo(offset + 2, top); context.lineTo(offset + 2 + (bottom - top) * .62, bottom); context.stroke();
      }
    } else if (kind === "oxford") {
      context.strokeStyle = "rgba(110,100,82,.10)";
      for (let y = top; y < bottom; y += spacing) {
        context.beginPath(); context.moveTo(left, y); context.lineTo(right, y); context.stroke();
      }
      context.strokeStyle = "rgba(255,255,255,.23)";
      for (let x = left; x < right; x += spacing) {
        context.beginPath(); context.moveTo(x, top); context.lineTo(x, bottom); context.stroke();
      }
    } else if (kind === "smooth") {
      context.strokeStyle = "rgba(255,255,255,.075)";
      context.lineWidth = Math.max(.5, distance * .0015);
      for (let offset = left - (bottom - top); offset < right + (bottom - top); offset += spacing * 2.3) {
        context.beginPath(); context.moveTo(offset, top); context.lineTo(offset + (bottom - top) * .46, bottom); context.stroke();
      }
      context.strokeStyle = "rgba(0,0,0,.07)";
      for (let offset = left - (bottom - top); offset < right + (bottom - top); offset += spacing * 2.3) {
        context.beginPath(); context.moveTo(offset + 2, top); context.lineTo(offset + 2 + (bottom - top) * .46, bottom); context.stroke();
      }
    } else if (kind === "pique") {
      context.fillStyle = "rgba(255,255,255,.25)";
      for (let y = top + 2; y < bottom; y += spacing * .82) {
        const shift = (Math.floor(y / spacing) % 2) * spacing * .38;
        for (let x = left + shift + 2; x < right; x += spacing) {
          context.beginPath(); context.arc(x, y, Math.max(.7, distance * .0028), 0, Math.PI * 2); context.fill();
        }
      }
      context.strokeStyle = "rgba(27,42,28,.08)";
      context.lineWidth = Math.max(.6, distance * .002);
      for (let y = top + spacing / 2; y < bottom; y += spacing) {
        context.beginPath(); context.moveTo(left, y); context.lineTo(right, y); context.stroke();
      }
    } else if (kind === "fleece") {
      context.strokeStyle = "rgba(255,255,255,.22)";
      context.lineWidth = Math.max(.55, distance * .0021);
      for (let y = top; y < bottom; y += spacing * .72) {
        const shift = (Math.floor(y / spacing) % 2) * spacing * .36;
        for (let x = left + shift; x < right; x += spacing * 1.05) {
          context.beginPath(); context.moveTo(x, y); context.lineTo(x + spacing * .18, y - spacing * .11); context.stroke();
        }
      }
      context.strokeStyle = "rgba(35,36,40,.08)";
      context.lineWidth = Math.max(.5, distance * .0018);
      for (let y = top + spacing; y < bottom; y += spacing * 2.1) {
        context.beginPath(); context.moveTo(left, y); context.quadraticCurveTo((left + right) / 2, y + spacing * .13, right, y); context.stroke();
      }
    } else {
      context.strokeStyle = "rgba(255,255,255,.20)";
      for (let y = top + spacing / 2; y < bottom; y += spacing) {
        context.beginPath(); context.moveTo(left, y); context.quadraticCurveTo((left + right) / 2, y + 2, right, y); context.stroke();
      }
      context.strokeStyle = "rgba(60,50,70,.08)";
      for (let y = top + spacing; y < bottom; y += spacing * 2) {
        context.beginPath(); context.moveTo(left, y); context.quadraticCurveTo((left + right) / 2, y + 1, right, y); context.stroke();
      }
    }

    // Light drape lines make the overlay read as fabric instead of a flat vector.
    context.lineWidth = Math.max(1, distance * .005);
    context.strokeStyle = "rgba(20,18,17,.075)";
    context.beginPath();
    context.moveTo((left + right) / 2 - distance * .14, top + distance * .23);
    context.quadraticCurveTo((left + right) / 2 - distance * .06, top + distance * .48, (left + right) / 2 - distance * .12, top + distance * .70);
    context.moveTo((left + right) / 2 + distance * .14, top + distance * .23);
    context.quadraticCurveTo((left + right) / 2 + distance * .06, top + distance * .48, (left + right) / 2 + distance * .12, top + distance * .70);
    context.stroke();

    const sheen = context.createLinearGradient(left, 0, right, 0);
    sheen.addColorStop(0, "rgba(255,255,255,.02)");
    sheen.addColorStop(.34, "rgba(255,255,255,.10)");
    sheen.addColorStop(.52, "rgba(255,255,255,.18)");
    sheen.addColorStop(1, "rgba(0,0,0,.10)");
    context.fillStyle = sheen;
    context.fillRect(left, top, Math.max(1, right - left), Math.max(1, bottom - top));
    context.restore();
  }

  function drawGarmentOverlay(landmarks, rect) {
    const canvas = elements.garmentCanvas;
    if (!canvas || !landmarks || !rect || !rect.width || !rect.height) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.round(rect.width * dpr);
    const height = Math.round(rect.height * dpr);
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    const context = canvas.getContext("2d");
    if (!context) return;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.clearRect(0, 0, rect.width, rect.height);

    const pointAt = (index, threshold = .22) => landmarkVisible(landmarks[index], threshold) ? toStagePoint(landmarks[index], rect) : null;
    const rawArms = [
      { shoulder: pointAt(11, .42), elbow: pointAt(13, .20), wrist: pointAt(15, .18), side: "left" },
      { shoulder: pointAt(12, .42), elbow: pointAt(14, .20), wrist: pointAt(16, .18), side: "right" }
    ].filter(arm => arm.shoulder).sort((a, b) => a.shoulder.x - b.shoulder.x);
    if (rawArms.length !== 2) return;

    const rawShoulderLeft = rawArms[0].shoulder;
    const rawShoulderRight = rawArms[1].shoulder;
    const rawAxis = unitVector(rawShoulderLeft, rawShoulderRight);
    const rawShoulderDistance = Math.hypot(rawShoulderRight.x - rawShoulderLeft.x, rawShoulderRight.y - rawShoulderLeft.y);
    if (rawShoulderDistance < 26 || rawShoulderDistance > rect.width * .92) return;

    const centerRaw = { x: (rawShoulderLeft.x + rawShoulderRight.x) / 2, y: (rawShoulderLeft.y + rawShoulderRight.y) / 2 };
    let down = { x: -rawAxis.y, y: rawAxis.x };
    if (down.y < 0) down = { x: -down.x, y: -down.y };
    const sizeScale = 1 + (Number(elements.garmentSize.value) - 34) * .009;
    const verticalOffset = -(Number(elements.garmentPosition.value) - 22) * rect.height / 100;
    const adjust = point => ({
      x: centerRaw.x + (point.x - centerRaw.x) * sizeScale,
      y: centerRaw.y + (point.y - centerRaw.y) * sizeScale + verticalOffset
    });
    const local = (x, y) => ({
      x: centerRaw.x + rawAxis.x * rawShoulderDistance * sizeScale * x + down.x * rawShoulderDistance * sizeScale * y,
      y: centerRaw.y + rawAxis.y * rawShoulderDistance * sizeScale * x + down.y * rawShoulderDistance * sizeScale * y + verticalOffset
    });
    const shoulderLeft = adjust(rawShoulderLeft);
    const shoulderRight = adjust(rawShoulderRight);
    const center = { x: (shoulderLeft.x + shoulderRight.x) / 2, y: (shoulderLeft.y + shoulderRight.y) / 2 };
    const distance = rawShoulderDistance * sizeScale;

    const product = products.find(item => item.id === selectedProductId) || products[0];
    const kind = product.id === "grey-hoodie" ? "hoodie"
      : product.id === "polo-premium" ? "polo"
      : product.id === "oversized-tee" ? "tee"
      : product.id === "denim-blue" ? "denim"
      : product.id === "white-oxford" ? "oxford"
      : product.id === "black-classic" ? "classic" : "shirt";
    const longSleeves = ["hoodie", "denim", "oxford", "classic", "shirt"].includes(kind);
    let torsoHalf = kind === "tee" ? .52 : kind === "hoodie" ? .50 : kind === "denim" ? .47 : kind === "oxford" ? .45 : kind === "polo" ? .45 : kind === "classic" ? .41 : .43;
    const base = product.color;
    const light = mixColor(base, "#ffffff", kind === "hoodie" ? .25 : .22);
    const dark = mixColor(base, "#171719", kind === "hoodie" ? .20 : .24);
    const gradientFor = (from, to) => {
      const gradient = context.createLinearGradient(from.x, from.y, to.x, to.y);
      gradient.addColorStop(0, light);
      gradient.addColorStop(.48, base);
      gradient.addColorStop(1, dark);
      return gradient;
    };
    const textureKind = kind === "hoodie" ? "fleece" : kind === "denim" ? "denim" : kind === "oxford" || kind === "shirt" ? "oxford" : kind === "classic" ? "smooth" : kind === "polo" ? "pique" : "jersey";

    const arms = rawArms.map((arm, index) => {
      const shoulder = adjust(arm.shoulder);
      const elbow = arm.elbow ? adjust(arm.elbow) : local(index === 0 ? -.68 : .68, .52);
      let wrist = arm.wrist ? adjust(arm.wrist) : null;
      if (!wrist) {
        const direction = unitVector(shoulder, elbow);
        wrist = pointOffset(elbow, direction.x * distance * .70, direction.y * distance * .70);
      } else {
        // Stop the garment just before the wrist crease so the hand remains visible.
        const forearm = unitVector(elbow, wrist);
        const wristLength = Math.hypot(wrist.x - elbow.x, wrist.y - elbow.y);
        wrist = pointOffset(wrist, -forearm.x * wristLength * .055, -forearm.y * wristLength * .055);
      }
      const outward = index === 0 ? -1 : 1;
      // Let the sleeve cap overlap the shoulder landmark slightly, preventing a visible gap.
      const sleeveOutset = kind === "tee" ? .065 : kind === "hoodie" ? .052 : .035;
      const sleeveStart = pointOffset(
        shoulder,
        rawAxis.x * distance * sleeveOutset * outward - down.x * distance * .012,
        rawAxis.y * distance * sleeveOutset * outward - down.y * distance * .012
      );
      return { shoulder, sleeveStart, elbow, wrist, outward };
    });

    const hipLeftRaw = pointAt(23, .20);
    const hipRightRaw = pointAt(24, .20);
    let bottomLeft, bottomRight;
    if (hipLeftRaw && hipRightRaw) {
      const hips = [adjust(hipLeftRaw), adjust(hipRightRaw)].sort((a, b) => a.x - b.x);
      const hipDistance = Math.hypot(hips[1].x - hips[0].x, hips[1].y - hips[0].y);
      const hipMidY = (hips[0].y + hips[1].y) / 2;
      if (hipDistance > distance * .30 && hipMidY > center.y + distance * .35 && hipMidY < center.y + distance * 2.2) {
        // Use the observed hip width to taper the garment body instead of carrying
        // the full shoulder span all the way to the hem.
        const hipRatio = Math.max(.36, Math.min(.90, hipDistance / rawShoulderDistance));
        const silhouetteBias = kind === "tee" ? .045 : kind === "hoodie" || kind === "denim" ? .025 : kind === "polo" ? -.01 : kind === "classic" ? -.045 : -.02;
        torsoHalf = Math.max(.38, Math.min(.55, .32 + hipRatio * .18 + silhouetteBias));
        const hemDrop = distance * (kind === "tee" ? .075 : kind === "hoodie" ? .115 : kind === "polo" ? .045 : .06);
        bottomLeft = pointOffset(hips[0], -rawAxis.x * distance * .04 + down.x * hemDrop, -rawAxis.y * distance * .04 + down.y * hemDrop);
        bottomRight = pointOffset(hips[1], rawAxis.x * distance * .04 + down.x * hemDrop, rawAxis.y * distance * .04 + down.y * hemDrop);
      }
    }
    if (!bottomLeft || !bottomRight) {
      const hemY = kind === "tee" ? 1.12 : kind === "hoodie" ? 1.28 : 1.20;
      bottomLeft = local(-torsoHalf, hemY);
      bottomRight = local(torsoHalf, hemY);
    }

    // Pose shoulder landmarks sit at the arm joints, below the visible shoulder cap.
    // Raise the yoke so the virtual garment covers the wearer's shirt across the shoulders.
    const shoulderOutset = kind === "tee" ? .090 : kind === "hoodie" ? .078 : .065;
    const shoulderLift = kind === "hoodie" ? .205 : kind === "tee" ? .205 : .190;
    const topLeft = pointOffset(
      shoulderLeft,
      -rawAxis.x * distance * shoulderOutset - down.x * distance * shoulderLift,
      -rawAxis.y * distance * shoulderOutset - down.y * distance * shoulderLift
    );
    const topRight = pointOffset(
      shoulderRight,
      rawAxis.x * distance * shoulderOutset - down.x * distance * shoulderLift,
      rawAxis.y * distance * shoulderOutset - down.y * distance * shoulderLift
    );
    const sideLeft = local(-torsoHalf - shoulderOutset * .40, .48);
    const sideRight = local(torsoHalf + shoulderOutset * .40, .48);

    // Place the neckline at the base of the neck, rather than at the shoulder midpoint.
    // Ear landmarks improve placement when the head is visible; if the head is cropped,
    // use a stronger shoulder-relative lift. Clamp it to the camera frame to avoid
    // accidentally painting above the visible neck area.
    const earLeft = pointAt(7, .38), earRight = pointAt(8, .38);
    let neckProjection = -distance * .30;
    if (earLeft && earRight) {
      const earMid = { x: (earLeft.x + earRight.x) / 2, y: (earLeft.y + earRight.y) / 2 };
      const earProjection = (earMid.x - center.x) * down.x + (earMid.y - center.y) * down.y + distance * .17;
      neckProjection = Math.max(-distance * .32, Math.min(-distance * .12, earProjection));
    }
    const minNeckY = Math.min(rect.height - distance * .12, 18);
    const projectedNeckY = center.y + down.y * neckProjection;
    if (down.y > .2 && projectedNeckY < minNeckY) {
      neckProjection += (minNeckY - projectedNeckY) / down.y;
    }
    const neckCenter = pointOffset(center, down.x * neckProjection, down.y * neckProjection);
    const neckHalf = distance * (kind === "hoodie" ? .095 : kind === "polo" ? .105 : kind === "tee" ? .105 : .095);
    // A shallow U-shaped opening leaves only the wearer's actual neck exposed.
    const neckSideDrop = distance * .025;
    const neckLeft = pointOffset(neckCenter, -rawAxis.x * neckHalf + down.x * neckSideDrop, -rawAxis.y * neckHalf + down.y * neckSideDrop);
    const neckRight = pointOffset(neckCenter, rawAxis.x * neckHalf + down.x * neckSideDrop, rawAxis.y * neckHalf + down.y * neckSideDrop);
    const neckBottom = pointOffset(neckCenter, down.x * distance * .070, down.y * distance * .070);
    const neckLocal = (x, y) => ({
      x: neckCenter.x + rawAxis.x * distance * x + down.x * distance * y,
      y: neckCenter.y + rawAxis.y * distance * x + down.y * distance * y
    });
    const bottomCenter = { x: (bottomLeft.x + bottomRight.x) / 2, y: (bottomLeft.y + bottomRight.y) / 2 };
    const torsoDepth = Math.max(distance * .78, Math.abs((bottomCenter.x - center.x) * down.x + (bottomCenter.y - center.y) * down.y));
    const localBody = (x, y) => ({
      x: center.x + rawAxis.x * distance * x + down.x * torsoDepth * y,
      y: center.y + rawAxis.y * distance * x + down.y * torsoDepth * y
    });
    const bounds = {
      left: Math.max(0, Math.min(topLeft.x, topRight.x, bottomLeft.x, arms[0].wrist.x, arms[1].wrist.x) - distance * .12),
      right: Math.min(rect.width, Math.max(topLeft.x, topRight.x, bottomRight.x, arms[0].wrist.x, arms[1].wrist.x) + distance * .12),
      top: Math.max(0, Math.min(topLeft.y, topRight.y, center.y - distance * .28)),
      bottom: Math.min(rect.height, Math.max(bottomLeft.y, bottomRight.y, arms[0].wrist.y, arms[1].wrist.y) + distance * .08)
    };

    const drawFabric = (path, shadow = true) => {
      context.save();
      if (shadow) {
        context.shadowColor = "rgba(25,22,20,.18)";
        context.shadowBlur = Math.max(3, distance * .018);
        context.shadowOffsetY = Math.max(1, distance * .008);
      }
      context.fillStyle = gradientFor(local(-.25, .08), local(.30, 1.0));
      context.fill(path);
      context.shadowBlur = 0;
      context.strokeStyle = mixColor(base, "#171719", .30);
      context.lineWidth = Math.max(1.15, distance * .0055);
      context.stroke(path);
      drawTextileTexture(context, path, bounds, textureKind, distance);
      context.restore();
    };

    context.save();
    context.lineJoin = "round";
    context.lineCap = "round";

    // 1) Hoodie hood: show only its folded back seam at the nape.
    // The hood fabric itself stays behind the head/neck and is not painted across the face or chest.
    if (kind === "hoodie") {
      context.strokeStyle = "rgba(42,43,47,.38)";
      context.lineWidth = Math.max(1.2, distance * .006);
      context.beginPath();
      const hoodSeamLeft = local(-.18, -.045);
      const hoodSeamControl = local(0, .075);
      const hoodSeamRight = local(.18, -.045);
      context.moveTo(hoodSeamLeft.x, hoodSeamLeft.y);
      context.quadraticCurveTo(hoodSeamControl.x, hoodSeamControl.y, hoodSeamRight.x, hoodSeamRight.y);
      context.stroke();
      context.strokeStyle = "rgba(255,255,255,.28)";
      context.lineWidth = Math.max(1, distance * .0035);
      context.beginPath();
      const hoodFoldLeft = local(-.145, -.025);
      const hoodFoldControl = local(0, .045);
      const hoodFoldRight = local(.145, -.025);
      context.moveTo(hoodFoldLeft.x, hoodFoldLeft.y);
      context.quadraticCurveTo(hoodFoldControl.x, hoodFoldControl.y, hoodFoldRight.x, hoodFoldRight.y);
      context.stroke();
    }

    // 2) Independent sleeves follow shoulder → elbow → wrist. Torso is drawn over their roots.
    arms.forEach((arm, index) => {
      const end = longSleeves ? arm.wrist : pointOffset(arm.sleeveStart,
        (arm.elbow.x - arm.sleeveStart.x) * .55,
        (arm.elbow.y - arm.sleeveStart.y) * .55);
      const shoulderWidth = kind === "hoodie" ? .148 : kind === "classic" ? .108 : longSleeves ? .118 : kind === "tee" ? .152 : .132;
      const elbowWidth = kind === "hoodie" ? .112 : kind === "classic" ? .078 : longSleeves ? .088 : .104;
      const cuffWidth = kind === "hoodie" ? .078 : kind === "classic" ? .050 : longSleeves ? .058 : .086;
      const path = makeSleevePath(arm.sleeveStart, arm.elbow, end, distance * shoulderWidth, distance * elbowWidth, distance * cuffWidth);
      drawFabric(path, true);
      const direction = unitVector(arm.elbow, end);
      const normal = { x: -direction.y, y: direction.x };
      context.strokeStyle = "rgba(255,255,255,.60)";
      context.lineWidth = Math.max(1.4, distance * .006);
      context.beginPath();
      context.moveTo(end.x + normal.x * distance * cuffWidth, end.y + normal.y * distance * cuffWidth);
      context.lineTo(end.x - normal.x * distance * cuffWidth, end.y - normal.y * distance * cuffWidth);
      context.stroke();
      if (kind === "hoodie") {
        context.strokeStyle = "rgba(40,40,43,.24)";
        context.lineWidth = Math.max(1, distance * .004);
        context.beginPath();
        context.moveTo(end.x + normal.x * distance * cuffWidth * .72, end.y + normal.y * distance * cuffWidth * .72);
        context.lineTo(end.x - normal.x * distance * cuffWidth * .72, end.y - normal.y * distance * cuffWidth * .72);
        context.stroke();
      }
    });

    // 3) Torso is strictly shoulder-to-hip geometry. Arm landmarks no longer define torso width.
    const bodyPath = new Path2D();
    // Start exactly at the shoulder joints, then curve inward to the neckline.
    // This gives the garment a shoulder slope instead of a flat horizontal top.
    bodyPath.moveTo(topLeft.x, topLeft.y);
    const leftShoulderControl = local(-.30, -.185);
    bodyPath.quadraticCurveTo(leftShoulderControl.x, leftShoulderControl.y, neckLeft.x, neckLeft.y);
    bodyPath.quadraticCurveTo(neckBottom.x - rawAxis.x * distance * .035, neckBottom.y, neckBottom.x, neckBottom.y);
    bodyPath.quadraticCurveTo(neckBottom.x + rawAxis.x * distance * .035, neckBottom.y, neckRight.x, neckRight.y);
    const rightShoulderControl = local(.30, -.185);
    bodyPath.quadraticCurveTo(rightShoulderControl.x, rightShoulderControl.y, topRight.x, topRight.y);
    bodyPath.quadraticCurveTo(sideRight.x + rawAxis.x * distance * .035, sideRight.y - down.y * distance * .035, sideRight.x, sideRight.y);
    const rightWaistControl = local(torsoHalf * .90, .79);
    bodyPath.quadraticCurveTo(rightWaistControl.x, rightWaistControl.y, bottomRight.x, bottomRight.y);
    bodyPath.quadraticCurveTo(bottomCenter.x + down.x * distance * .04, bottomCenter.y + down.y * distance * .04, bottomLeft.x, bottomLeft.y);
    const leftWaistControl = local(-torsoHalf * .90, .79);
    bodyPath.quadraticCurveTo(leftWaistControl.x, leftWaistControl.y, sideLeft.x, sideLeft.y);
    bodyPath.quadraticCurveTo(sideLeft.x - rawAxis.x * distance * .035, sideLeft.y - down.y * distance * .035, topLeft.x, topLeft.y);
    bodyPath.closePath();
    drawFabric(bodyPath, true);

    // Neckline ring / collar details.
    if (kind === "shirt" || kind === "oxford" || kind === "classic" || kind === "denim") {
      const collarLeft = neckLeft, collarRight = neckRight;
      const collarMid = neckBottom;
      const leftFlap = new Path2D();
      leftFlap.moveTo(collarLeft.x, collarLeft.y);
      leftFlap.lineTo(neckLocal(-.045, .105).x, neckLocal(-.045, .105).y);
      leftFlap.lineTo(collarMid.x, collarMid.y);
      leftFlap.lineTo(neckLocal(-.075, -.025).x, neckLocal(-.075, -.025).y);
      leftFlap.closePath();
      const rightFlap = new Path2D();
      rightFlap.moveTo(collarRight.x, collarRight.y);
      rightFlap.lineTo(neckLocal(.045, .105).x, neckLocal(.045, .105).y);
      rightFlap.lineTo(collarMid.x, collarMid.y);
      rightFlap.lineTo(neckLocal(.075, -.025).x, neckLocal(.075, -.025).y);
      rightFlap.closePath();
      context.fillStyle = mixColor(base, "#ffffff", .38); context.fill(leftFlap); context.fill(rightFlap);
      context.strokeStyle = "rgba(42,36,30,.35)"; context.lineWidth = Math.max(1, distance * .004); context.stroke(leftFlap); context.stroke(rightFlap);
      context.strokeStyle = "rgba(255,255,255,.76)"; context.lineWidth = Math.max(1.5, distance * .006);
      context.beginPath(); context.moveTo(neckBottom.x, neckBottom.y + down.y * distance * .06); context.lineTo(bottomCenter.x, bottomCenter.y - down.y * distance * .08); context.stroke();
      for (let index = 0; index < 5; index++) {
        const point = localBody(0, .18 + index * .15);
        context.fillStyle = "rgba(255,255,255,.92)";
        context.beginPath(); context.arc(point.x + rawAxis.x * distance * .012, point.y, Math.max(1.5, distance * .007), 0, Math.PI * 2); context.fill();
      }
      if (kind === "denim") {
        // Western yoke and twin patch pockets distinguish the denim shirt cut.
        context.strokeStyle = "rgba(245,248,252,.72)";
        context.lineWidth = Math.max(1.3, distance * .005);
        context.beginPath();
        const yokeLeft = localBody(-.43, .21), yokeCenter = localBody(0, .31), yokeRight = localBody(.43, .21);
        context.moveTo(yokeLeft.x, yokeLeft.y);
        context.quadraticCurveTo(yokeCenter.x, yokeCenter.y, yokeRight.x, yokeRight.y);
        context.stroke();
        [-1, 1].forEach(side => {
          const pocketCenter = localBody(side * .255, .39);
          const pocketWidth = distance * .105, pocketHeight = distance * .15;
          const pocket = new Path2D();
          pocket.moveTo(pocketCenter.x - pocketWidth, pocketCenter.y);
          pocket.lineTo(pocketCenter.x + pocketWidth, pocketCenter.y);
          pocket.lineTo(pocketCenter.x + pocketWidth * .88, pocketCenter.y + pocketHeight * .82);
          pocket.lineTo(pocketCenter.x, pocketCenter.y + pocketHeight);
          pocket.lineTo(pocketCenter.x - pocketWidth * .88, pocketCenter.y + pocketHeight * .82);
          pocket.closePath();
          context.fillStyle = mixColor(base, "#ffffff", .09); context.fill(pocket);
          context.strokeStyle = "rgba(241,247,253,.68)"; context.lineWidth = Math.max(1, distance * .004); context.stroke(pocket);
          context.fillStyle = "rgba(231,237,242,.88)";
          context.beginPath(); context.arc(pocketCenter.x, pocketCenter.y + pocketHeight * .18, Math.max(1.4, distance * .005), 0, Math.PI * 2); context.fill();
        });
      } else {
        const pocketY = localBody(.25, .32);
        context.strokeStyle = "rgba(255,255,255,.56)"; context.lineWidth = Math.max(1.1, distance * .0045);
        context.strokeRect(pocketY.x - distance * .065, pocketY.y, distance * .13, distance * .16);
      }
    } else if (kind === "polo") {
      const leftCollar = neckLeft, rightCollar = neckRight, centerCollar = neckBottom;
      const collar = new Path2D();
      collar.moveTo(leftCollar.x, leftCollar.y);
      collar.lineTo(neckLocal(-.045, .105).x, neckLocal(-.045, .105).y);
      collar.lineTo(centerCollar.x, centerCollar.y);
      collar.lineTo(neckLocal(.045, .105).x, neckLocal(.045, .105).y);
      collar.lineTo(rightCollar.x, rightCollar.y);
      collar.closePath();
      context.fillStyle = mixColor(base, "#ffffff", .30); context.fill(collar);
      context.strokeStyle = "rgba(35,38,31,.35)"; context.lineWidth = Math.max(1, distance * .004); context.stroke(collar);
      context.strokeStyle = "rgba(255,255,255,.78)"; context.lineWidth = Math.max(1.5, distance * .006);
      context.beginPath(); context.moveTo(centerCollar.x, centerCollar.y); context.lineTo(localBody(0, .36).x, localBody(0, .36).y); context.stroke();
      [0, 1].forEach(index => { const p = localBody(.012, .20 + index * .09); context.fillStyle = "rgba(255,255,255,.9)"; context.beginPath(); context.arc(p.x, p.y, Math.max(1.4, distance * .006), 0, Math.PI * 2); context.fill(); });
    } else if (kind === "hoodie") {
      // A compact ribbed neck seam closes the upper chest without covering the neck.
      context.strokeStyle = "rgba(255,255,255,.72)";
      context.lineWidth = Math.max(2, distance * .009);
      context.beginPath();
      context.moveTo(neckLeft.x, neckLeft.y);
      context.quadraticCurveTo(neckBottom.x, neckBottom.y + down.y * distance * .018, neckRight.x, neckRight.y);
      context.stroke();
      context.strokeStyle = "rgba(38,39,43,.24)";
      context.lineWidth = Math.max(1, distance * .0035);
      context.beginPath();
      context.moveTo(neckLeft.x, neckLeft.y + down.y * distance * .012);
      context.quadraticCurveTo(neckBottom.x, neckBottom.y + down.y * distance * .030, neckRight.x, neckRight.y + down.y * distance * .012);
      context.stroke();

      // Hood drawcords and kangaroo pocket sit on the front panel, below the neckline.
      context.strokeStyle = "rgba(245,245,245,.92)"; context.lineWidth = Math.max(2, distance * .009);
      [-1, 1].forEach(side => {
        const start = pointOffset(neckBottom, rawAxis.x * distance * side * .045 + down.x * distance * .06, rawAxis.y * distance * side * .045 + down.y * distance * .06), end = localBody(side * .075, .48);
        const controlOne = localBody(side * .07, .22), controlTwo = localBody(side * .045, .39);
        context.beginPath(); context.moveTo(start.x, start.y);
        context.bezierCurveTo(controlOne.x, controlOne.y, controlTwo.x, controlTwo.y, end.x, end.y);
        context.stroke();
        context.fillStyle = "rgba(245,245,245,.94)"; context.beginPath(); context.arc(end.x, end.y, Math.max(2, distance * .009), 0, Math.PI * 2); context.fill();
      });
      const pocket = new Path2D();
      pocket.moveTo(localBody(-.29, .58).x, localBody(-.29, .58).y);
      pocket.quadraticCurveTo(localBody(0, .54).x, localBody(0, .54).y, localBody(.29, .58).x, localBody(.29, .58).y);
      pocket.lineTo(localBody(.255, .80).x, localBody(.255, .80).y);
      pocket.quadraticCurveTo(localBody(0, .87).x, localBody(0, .87).y, localBody(-.255, .80).x, localBody(-.255, .80).y);
      pocket.closePath();
      context.fillStyle = mixColor(base, "#16171a", .08); context.fill(pocket);
      context.strokeStyle = "rgba(255,255,255,.48)"; context.lineWidth = Math.max(1.3, distance * .006); context.stroke(pocket);
      context.strokeStyle = "rgba(255,255,255,.48)"; context.lineWidth = Math.max(1.5, distance * .006);
      context.beginPath(); context.moveTo(bottomLeft.x, bottomLeft.y - down.y * distance * .035); context.quadraticCurveTo(bottomCenter.x, bottomCenter.y + down.y * distance * .01, bottomRight.x, bottomRight.y - down.y * distance * .035); context.stroke();
      context.strokeStyle = "rgba(34,35,39,.18)"; context.lineWidth = Math.max(1.2, distance * .006);
      context.beginPath(); context.moveTo(bottomLeft.x, bottomLeft.y - down.y * distance * .012); context.quadraticCurveTo(bottomCenter.x, bottomCenter.y + down.y * distance * .032, bottomRight.x, bottomRight.y - down.y * distance * .012); context.stroke();
    } else {
      // Ribbed crew neck and dropped shoulder seams for the oversized tee.
      context.strokeStyle = "rgba(255,255,255,.82)"; context.lineWidth = Math.max(2.4, distance * .012);
      context.beginPath(); context.moveTo(neckLeft.x, neckLeft.y); context.quadraticCurveTo(neckBottom.x, neckBottom.y + down.y * distance * .025, neckRight.x, neckRight.y); context.stroke();
      context.strokeStyle = "rgba(70,54,88,.25)"; context.lineWidth = Math.max(1, distance * .004);
      context.beginPath(); context.moveTo(topLeft.x + rawAxis.x * distance * .07, topLeft.y + down.y * distance * .05); context.lineTo(sideLeft.x + rawAxis.x * distance * .02, sideLeft.y); context.moveTo(topRight.x - rawAxis.x * distance * .07, topRight.y + down.y * distance * .05); context.lineTo(sideRight.x - rawAxis.x * distance * .02, sideRight.y); context.stroke();
    }

    // Tailored construction seams and a subtle hem topstitch.
    context.strokeStyle = "rgba(255,255,255,.48)";
    context.lineWidth = Math.max(1, distance * .0035);
    context.setLineDash([Math.max(2, distance * .010), Math.max(2, distance * .008)]);
    context.beginPath();
    context.moveTo(bottomLeft.x + rawAxis.x * distance * .04, bottomLeft.y - down.y * distance * .025);
    context.quadraticCurveTo(bottomCenter.x, bottomCenter.y + down.y * distance * .02, bottomRight.x - rawAxis.x * distance * .04, bottomRight.y - down.y * distance * .025);
    context.stroke();
    context.setLineDash([]);
    context.restore();

    // 4) Use the person mask to trim garment edges to the live silhouette.
    if (latestSegmentationCanvas) {
      context.save();
      context.globalCompositeOperation = "destination-in";
      drawSourceToStage(context, latestSegmentationCanvas, latestSegmentationCanvas.width, latestSegmentationCanvas.height, rect, mirrorFlipped);
      context.restore();
    }

    // The raised yoke reaches the neck base; only the small natural neck opening remains visible.
    // Avoid repainting a guessed face ellipse over the garment: that can cover the whole chest on
    // cameras with unusual framing. Person segmentation is the only foreground edge mask here.

  }

  function clearGarmentCanvas() {
    const canvas = elements.garmentCanvas;
    const context = canvas && canvas.getContext('2d');
    if (context) {
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  function clearPoseCanvas() {
    const canvas = elements.poseCanvas;
    const context = canvas && canvas.getContext("2d");
    if (context) {
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  function handlePoseResult(result) {
    const landmarks = result && result.landmarks && result.landmarks[0];
    const rect = elements.mirrorFrame.getBoundingClientRect();
    if (!landmarks || !landmarkVisible(landmarks[11]) || !landmarkVisible(landmarks[12])) {
      if (performance.now() - latestPoseAt > 650) {
        poseDetected = false;
        latestLandmarks = null;
        smoothedGarmentPoints = null;
        latestSegmentationCanvas = null;
        elements.mirrorFrame.classList.remove("pose-detected");
        elements.shirtOverlay.classList.add("is-searching");
        clearPoseCanvas();
        clearGarmentCanvas();
        setPoseStatus("STEP BACK / FULL FRAME", "searching");
        updateStageMessage();
      }
      return;
    }

    const leftShoulder = toStagePoint(landmarks[11], rect);
    const rightShoulder = toStagePoint(landmarks[12], rect);
    if (!leftShoulder || !rightShoulder) return;
    const shoulderDistance = Math.hypot(rightShoulder.x - leftShoulder.x, rightShoulder.y - leftShoulder.y);
    if (shoulderDistance < 34 || shoulderDistance > rect.width * 0.9) return;

    latestPoseAt = performance.now();
    poseDetected = true;
    elements.mirrorFrame.classList.add("pose-detected");
    elements.shirtOverlay.classList.remove("is-searching");
    latestLandmarks = smoothLandmarkSet(latestLandmarks, landmarks, .62);
    if (result.segmentationMasks && result.segmentationMasks[0]) {
      // Copy mask data on alternating frames to balance edge quality with webcam FPS.
      segmentationFrameCounter += 1;
      if (segmentationFrameCounter % 2 === 0 || !latestSegmentationCanvas) {
        latestSegmentationCanvas = makeSegmentationMaskCanvas(result.segmentationMasks[0]);
      }
    }
    drawGarmentOverlay(latestLandmarks, rect);
    setPoseStatus("BODY TRACKED", "detected");
    updateStageMessage();
  }

  function runPoseLoop() {
    if (!cameraStream || !poseTrackingRequested || !poseLandmarker) return;
    const now = performance.now();
    const video = elements.camera;
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && video.currentTime !== lastVideoTime && now - lastInferenceAt >= 80) {
      lastInferenceAt = now;
      lastVideoTime = video.currentTime;
      try {
        lastTaskTimestamp = Math.max(now, lastTaskTimestamp + 1);
        const result = poseLandmarker.detectForVideo(video, lastTaskTimestamp);
        handlePoseResult(result);
      } catch (error) {
        console.error("StyleSync pose detection error:", error);
        poseUnavailable = true;
        poseTrackingReady = false;
        poseTrackingRequested = false;
        poseDetected = false;
        elements.shirtOverlay.classList.remove("is-searching");
        elements.mirrorFrame.classList.remove("pose-detected");
        clearPoseCanvas();
        clearGarmentCanvas();
        setPoseStatus("AI UNAVAILABLE", "error");
        updateStageMessage();
        showToast("Camera is live, but pose tracking stopped. You can still position the garment manually.");
        return;
      }
    }
    poseAnimationFrame = window.requestAnimationFrame(runPoseLoop);
  }

  function withTimeout(promise, milliseconds) {
    let timeoutId;
    const timeout = new Promise((resolve, reject) => {
      timeoutId = window.setTimeout(() => reject(new Error("Pose model loading timed out.")), milliseconds);
    });
    return Promise.race([promise, timeout]).finally(() => window.clearTimeout(timeoutId));
  }

  async function startPoseTracking() {
    poseTrackingRequested = true;
    poseTrackingReady = false;
    poseUnavailable = false;
    poseDetected = false;
    latestPoseAt = 0;
    smoothedGarmentPoints = null;
    latestLandmarks = null;
    elements.shirtOverlay.classList.add("is-searching");
    elements.mirrorFrame.classList.remove("pose-detected");
    clearPoseCanvas();
    clearGarmentCanvas();
    setPoseStatus("LOADING AI", "loading");
    updateStageMessage();

    try {
      await withTimeout(loadPoseLandmarker(), 20000);
      if (!cameraStream || !poseTrackingRequested) return;
      poseTrackingReady = true;
      lastInferenceAt = 0;
      lastVideoTime = -1;
      lastTaskTimestamp = 0;
      setPoseStatus("STEP BACK / FULL FRAME", "searching");
      updateStageMessage();
      runPoseLoop();
    } catch (error) {
      console.error("StyleSync pose model could not load:", error);
      if (error && error.message === "Pose model loading timed out.") poseLandmarkerPromise = null;
      if (!cameraStream) return;
      poseUnavailable = true;
      poseTrackingRequested = false;
      elements.shirtOverlay.classList.remove("is-searching");
      setPoseStatus("AI UNAVAILABLE", "error");
      updateStageMessage();
      showToast("The AI model could not load. Check your internet connection; manual garment preview is still available.");
    }
  }

  function stopPoseTracking() {
    poseTrackingRequested = false;
    poseTrackingReady = false;
    poseDetected = false;
    poseUnavailable = false;
    latestPoseAt = 0;
    smoothedGarmentPoints = null;
    latestLandmarks = null;
    latestSegmentationCanvas = null;
    segmentationFrameCounter = 0;
    if (poseAnimationFrame) window.cancelAnimationFrame(poseAnimationFrame);
    poseAnimationFrame = 0;
    elements.mirrorFrame.classList.remove("pose-detected");
    elements.shirtOverlay.classList.remove("is-searching");
    elements.shirtOverlay.style.left = "";
    elements.shirtOverlay.style.top = "";
    elements.shirtOverlay.style.width = "";
    elements.shirtOverlay.style.transform = "";
    clearPoseCanvas();
    clearGarmentCanvas();
    setPoseStatus("AI STANDBY", "idle");
  }

  function updateOverlayState() {
    elements.shirtOverlay.classList.toggle("is-hidden", !overlayVisible);
    if (elements.garmentCanvas) elements.garmentCanvas.classList.toggle("is-hidden", !overlayVisible);
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
    if (poseDetected && latestLandmarks) drawGarmentOverlay(latestLandmarks, elements.mirrorFrame.getBoundingClientRect());
  }

  function refreshStageAfterResize() {
    if (stageRefreshFrame) window.cancelAnimationFrame(stageRefreshFrame);
    stageRefreshFrame = window.requestAnimationFrame(() => {
      stageRefreshFrame = 0;
      if (poseDetected && latestLandmarks) drawGarmentOverlay(latestLandmarks, elements.mirrorFrame.getBoundingClientRect());
    });
  }

  function installStageResizeHandling() {
    if ("ResizeObserver" in window) {
      stageResizeObserver = new ResizeObserver(refreshStageAfterResize);
      stageResizeObserver.observe(elements.mirrorFrame);
    }
    window.addEventListener("resize", refreshStageAfterResize, { passive: true });
    window.addEventListener("orientationchange", () => window.setTimeout(refreshStageAfterResize, 180), { passive: true });
    if (window.visualViewport) window.visualViewport.addEventListener("resize", refreshStageAfterResize, { passive: true });
    if (navigator.mediaDevices && navigator.mediaDevices.addEventListener) {
      navigator.mediaDevices.addEventListener("devicechange", () => void refreshCameraDevices());
    }
  }

  async function refreshCameraDevices(activeDeviceId = "") {
    if (!elements.cameraSelect || !navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return;
    try {
      const devices = (await navigator.mediaDevices.enumerateDevices()).filter(device => device.kind === "videoinput");
      const current = activeDeviceId || selectedCameraDeviceId;
      const escapeAttribute = value => String(value || "").replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
      elements.cameraSelect.innerHTML = '<option value="">Auto camera</option>' + devices.map((device, index) => {
        const label = device.label || `Camera ${index + 1}`;
        return `<option value="${escapeAttribute(device.deviceId)}">${escapeAttribute(label)}</option>`;
      }).join("");
      elements.cameraSelect.value = current && devices.some(device => device.deviceId === current) ? current : "";
    } catch (error) {
      console.warn("Unable to enumerate camera devices:", error);
    }
  }

  async function toggleMirrorFullscreen() {
    try {
      if (!document.fullscreenElement) {
        if (elements.mirrorFrame.requestFullscreen) await elements.mirrorFrame.requestFullscreen();
      } else if (document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch (error) {
      showToast("Fullscreen is unavailable in this browser. You can still resize the window.");
    }
  }

  function setMirrorFlipped(flipped) {
    mirrorFlipped = flipped;
    elements.camera.classList.toggle("is-unmirrored", !flipped);
    elements.flipButton.setAttribute("aria-pressed", String(flipped));
    elements.flipButton.querySelector("span").textContent = flipped ? "Mirror view" : "Normal view";
  }

  function hideCameraZoomControl(message = "") {
    cameraZoomCapabilities = null;
    if (elements.cameraZoomControl) elements.cameraZoomControl.hidden = true;
    if (elements.cameraZoomValue && message) elements.cameraZoomValue.textContent = message;
  }

  async function configureCameraFraming(track) {
    activeCameraTrack = track || null;
    hideCameraZoomControl();
    if (!track || typeof track.getCapabilities !== "function" || !elements.cameraZoom) {
      showToast("This camera has fixed framing. Move it farther back to include more of your body.");
      return;
    }

    try {
      const capabilities = track.getCapabilities();
      const zoom = capabilities && capabilities.zoom;
      if (!zoom || !Number.isFinite(zoom.min) || !Number.isFinite(zoom.max) || zoom.max <= zoom.min) {
        showToast("This camera has no adjustable zoom-out control. Move it farther back for a fuller view.");
        return;
      }

      cameraZoomCapabilities = { min: zoom.min, max: zoom.max, step: zoom.step || 0.1 };
      elements.cameraZoom.min = String(zoom.min);
      elements.cameraZoom.max = String(zoom.max);
      elements.cameraZoom.step = String(cameraZoomCapabilities.step);
      elements.cameraZoom.value = String(zoom.min);
      if (elements.cameraZoomControl) elements.cameraZoomControl.hidden = false;
      if (elements.cameraZoomValue) elements.cameraZoomValue.textContent = "WIDEST";

      // Start at the camera's widest available framing. Some webcams expose only a fixed zoom.
      await track.applyConstraints({ advanced: [{ zoom: zoom.min }] });
    } catch (error) {
      console.info("StyleSync: camera does not expose an adjustable zoom control.", error);
      hideCameraZoomControl();
    }
  }

  async function applyCameraZoom() {
    if (!activeCameraTrack || !cameraZoomCapabilities || !elements.cameraZoom) return;
    const zoom = Number(elements.cameraZoom.value);
    try {
      await activeCameraTrack.applyConstraints({ advanced: [{ zoom }] });
      if (elements.cameraZoomValue) {
        const isWide = Math.abs(zoom - cameraZoomCapabilities.min) < cameraZoomCapabilities.step / 2;
        elements.cameraZoomValue.textContent = isWide ? "WIDEST" : `${zoom.toFixed(1)}×`;
      }
      refreshStageAfterResize();
    } catch (error) {
      console.warn("StyleSync camera zoom could not be changed:", error);
      showToast("This camera does not support that zoom setting.");
    }
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
      const videoConstraints = {
        width: { ideal: 1280 },
        height: { ideal: 960 },
        aspectRatio: { ideal: 4 / 3 },
        frameRate: { ideal: 30, max: 30 }
      };
      if (selectedCameraDeviceId) videoConstraints.deviceId = { exact: selectedCameraDeviceId };
      else videoConstraints.facingMode = { ideal: "user" };
      const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: videoConstraints });

      cameraStream = stream;
      elements.camera.srcObject = stream;
      await elements.camera.play();
      const activeTrack = stream.getVideoTracks()[0];
      const activeTrackSettings = activeTrack?.getSettings?.() || {};
      if (activeTrackSettings.deviceId) selectedCameraDeviceId = activeTrackSettings.deviceId;
      await configureCameraFraming(activeTrack);
      await refreshCameraDevices(activeTrackSettings.deviceId || "");
      setCameraState(true);
      refreshStageAfterResize();
      void startPoseTracking();
      stream.getVideoTracks().forEach(track => {
        track.addEventListener("ended", () => {
          if (cameraStream === stream) stopCamera(false);
        }, { once: true });
      });
      showToast("Camera connected. For a fuller view, use the widest camera framing and stand back until your head, shoulders and waist fit in frame.");
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
    stopPoseTracking();
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      cameraStream = null;
    }
    activeCameraTrack = null;
    hideCameraZoomControl();
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
    selectedSize = "M";
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
      // Match the live stage's cover/contain mapping so portrait snapshots do not stretch.
      drawSourceToStage(context, elements.camera, elements.camera.videoWidth, elements.camera.videoHeight, { width, height }, mirrorFlipped);
    }

    if (poseDetected && elements.poseCanvas) {
      context.drawImage(elements.poseCanvas, 0, 0, width, height);
    }

    if (overlayVisible && poseDetected && elements.garmentCanvas) {
      context.drawImage(elements.garmentCanvas, 0, 0, width, height);
    } else if (overlayVisible && !elements.shirtOverlay.classList.contains("is-searching") && elements.shirtOverlay.complete && elements.shirtOverlay.naturalWidth) {
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

  elements.sizeOptions.addEventListener("click", event => {
    const button = event.target.closest("[data-size]");
    if (button && !button.disabled) chooseSize(button.dataset.size);
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
  elements.expandMirrorButton?.addEventListener("click", toggleMirrorFullscreen);
  document.addEventListener("fullscreenchange", () => {
    const active = document.fullscreenElement === elements.mirrorFrame;
    elements.expandMirrorButton?.setAttribute("aria-pressed", String(active));
    if (elements.expandMirrorButton) {
      elements.expandMirrorButton.title = active ? "Exit expanded mirror" : "Expand smart mirror";
      elements.expandMirrorButton.setAttribute("aria-label", elements.expandMirrorButton.title);
    }
    refreshStageAfterResize();
  });
  elements.cameraSelect?.addEventListener("change", async () => {
    selectedCameraDeviceId = elements.cameraSelect.value;
    if (cameraStream) {
      stopCamera(false);
      await startCamera();
    }
  });
  elements.cameraZoom?.addEventListener("input", applyCameraZoom);
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
  const observedSections = ["home", "products", "product-details", "how-it-works", "about"]
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
  installStageResizeHandling();
  void refreshCameraDevices();
  updateFitControls();
  updateOverlayState();
  setMirrorFlipped(true);
})();

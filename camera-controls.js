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
      elements.stageMessage.textContent = "Camera live · step into the frame";
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
          outputSegmentationMasks: false
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

  function toStagePoint(landmark, rect) {
    const videoWidth = elements.camera.videoWidth;
    const videoHeight = elements.camera.videoHeight;
    if (!videoWidth || !videoHeight) return null;

    // Match object-fit: cover cropping before applying the mirrored preview.
    const scale = Math.max(rect.width / videoWidth, rect.height / videoHeight);
    const renderedWidth = videoWidth * scale;
    const renderedHeight = videoHeight * scale;
    const cropX = (renderedWidth - rect.width) / 2;
    const cropY = (renderedHeight - rect.height) / 2;
    let x = landmark.x * renderedWidth - cropX;
    const y = landmark.y * renderedHeight - cropY;
    if (mirrorFlipped) x = rect.width - x;
    return { x, y };
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
    context.lineWidth = 0.65;
    if (kind === 'denim' || kind === 'oxford') {
      context.strokeStyle = kind === 'denim' ? 'rgba(255,255,255,.12)' : 'rgba(255,255,255,.17)';
      const span = Math.max(1, (right - left) + (bottom - top));
      const spacing = Math.max(22, span / 28);
      for (let offset = left - (bottom - top); offset < right + (bottom - top); offset += spacing) {
        context.beginPath();
        context.moveTo(offset, top);
        context.lineTo(offset + (bottom - top) * 0.55, bottom);
        context.stroke();
      }
      if (kind === 'oxford') {
        context.strokeStyle = 'rgba(91,78,61,.07)';
        for (let y = top; y < bottom; y += Math.max(24, span / 24)) {
          context.beginPath(); context.moveTo(left, y); context.lineTo(right, y); context.stroke();
        }
      }
    } else if (kind === 'pique') {
      context.fillStyle = 'rgba(255,255,255,.20)';
      const spacing = Math.max(20, ((right - left) + (bottom - top)) / 34);
      for (let y = top + 3; y < bottom; y += spacing) {
        for (let x = left + 3; x < right; x += spacing) context.fillRect(x, y, 1.25, 1.25);
      }
    } else if (kind === 'fleece') {
      context.strokeStyle = 'rgba(255,255,255,.14)';
      const spacing = Math.max(22, ((right - left) + (bottom - top)) / 30);
      for (let y = top; y < bottom; y += spacing) {
        for (let x = left + ((Math.floor(y / 10) % 2) * spacing * .25); x < right; x += spacing) {
          context.beginPath(); context.moveTo(x, y); context.lineTo(x + 3, y - 2); context.stroke();
        }
      }
    } else {
      context.strokeStyle = 'rgba(255,255,255,.15)';
      const spacing = Math.max(22, ((right - left) + (bottom - top)) / 28);
      for (let y = top + 5; y < bottom; y += spacing) {
        context.beginPath(); context.moveTo(left, y); context.quadraticCurveTo((left + right) / 2, y + 2, right, y); context.stroke();
      }
    }
    // A soft centre highlight gives the fabric some volume without obscuring the live person.
    const sheen = context.createLinearGradient(left, 0, right, 0);
    sheen.addColorStop(0, 'rgba(255,255,255,.04)');
    sheen.addColorStop(.48, 'rgba(255,255,255,.19)');
    sheen.addColorStop(1, 'rgba(0,0,0,.08)');
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
    const context = canvas.getContext('2d');
    if (!context) return;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.clearRect(0, 0, rect.width, rect.height);

    const trackedPoints = {};
    [11, 12, 13, 14, 15, 16, 23, 24].forEach(index => {
      trackedPoints[index] = landmarkVisible(landmarks[index], index === 11 || index === 12 ? .45 : .24)
        ? toStagePoint(landmarks[index], rect) : null;
    });
    if (smoothedGarmentPoints) {
      Object.keys(trackedPoints).forEach(key => {
        const currentPoint = trackedPoints[key];
        const previousPoint = smoothedGarmentPoints[key];
        if (currentPoint && previousPoint) {
          trackedPoints[key] = {
            x: previousPoint.x + (currentPoint.x - previousPoint.x) * .42,
            y: previousPoint.y + (currentPoint.y - previousPoint.y) * .42
          };
        }
      });
    }
    smoothedGarmentPoints = trackedPoints;

    const product = products.find(item => item.id === selectedProductId) || products[0];
    const kind = product.id === 'grey-hoodie' ? 'hoodie'
      : product.id === 'polo-premium' ? 'polo'
      : product.id === 'oversized-tee' ? 'tee'
      : product.id === 'denim-blue' ? 'denim'
      : product.id === 'white-oxford' ? 'oxford' : 'shirt';
    const longSleeves = kind === 'hoodie' || kind === 'denim' || kind === 'oxford' || kind === 'shirt';
    const rawArms = [
      { shoulder: trackedPoints[11], elbow: trackedPoints[13], wrist: trackedPoints[15] },
      { shoulder: trackedPoints[12], elbow: trackedPoints[14], wrist: trackedPoints[16] }
    ].filter(arm => arm.shoulder).sort((a, b) => a.shoulder.x - b.shoulder.x);
    if (rawArms.length !== 2) return;

    const shoulderLeft = rawArms[0].shoulder;
    const shoulderRight = rawArms[1].shoulder;
    const shoulderDistance = Math.hypot(shoulderRight.x - shoulderLeft.x, shoulderRight.y - shoulderLeft.y);
    if (shoulderDistance < 25) return;
    const center = { x: (shoulderLeft.x + shoulderRight.x) / 2, y: (shoulderLeft.y + shoulderRight.y) / 2 };
    const sizeScale = Number(elements.garmentSize.value) / 34;
    const verticalOffset = -(Number(elements.garmentPosition.value) - 22) * rect.height / 100;
    const adjust = point => ({
      x: center.x + (point.x - center.x) * sizeScale,
      y: center.y + (point.y - center.y) * sizeScale + verticalOffset
    });
    const arms = rawArms.map((arm, index) => {
      const shoulder = adjust(arm.shoulder);
      const outward = index === 0 ? -1 : 1;
      let elbow = arm.elbow ? adjust(arm.elbow) : pointOffset(shoulder, outward * shoulderDistance * .40, shoulderDistance * .38);
      let wrist = arm.wrist ? adjust(arm.wrist) : pointOffset(elbow, outward * shoulderDistance * .24, shoulderDistance * .43);
      // If an elbow is visible but the wrist is not, continue the same natural arm direction.
      if (!arm.wrist && arm.elbow) {
        const direction = unitVector(shoulder, elbow);
        wrist = pointOffset(elbow, direction.x * shoulderDistance * .67, direction.y * shoulderDistance * .67);
      }
      return { shoulder, elbow, wrist };
    });

    const hips = [trackedPoints[23], trackedPoints[24]].filter(Boolean).sort((a, b) => a.x - b.x).map(adjust);
    const axis = unitVector(shoulderLeft, shoulderRight);
    const distance = shoulderDistance * sizeScale;
    const neckHalf = distance * (kind === 'hoodie' ? .115 : .105);
    const topLeft = pointOffset(adjust(shoulderLeft), -axis.x * distance * .045, -axis.y * distance * .045);
    const topRight = pointOffset(adjust(shoulderRight), axis.x * distance * .045, axis.y * distance * .045);

    let bottomLeft, bottomRight;
    if (hips.length === 2 && Math.abs(hips[1].y - hips[0].y) < rect.height * .52) {
      const relaxed = kind === 'tee' ? .30 : kind === 'hoodie' ? .28 : kind === 'denim' ? .26 : .24;
      bottomLeft = pointOffset(hips[0], -axis.x * distance * relaxed, distance * .09);
      bottomRight = pointOffset(hips[1], axis.x * distance * relaxed, distance * .09);
      const minimumBottom = center.y + distance * 1.05;
      if ((bottomLeft.y + bottomRight.y) / 2 < minimumBottom) {
        const correction = minimumBottom - (bottomLeft.y + bottomRight.y) / 2;
        bottomLeft.y += correction;
        bottomRight.y += correction;
      }
    } else {
      const bodyWidth = kind === 'tee' ? .58 : kind === 'hoodie' ? .54 : .50;
      bottomLeft = { x: center.x - distance * bodyWidth, y: center.y + distance * 1.22 + verticalOffset };
      bottomRight = { x: center.x + distance * bodyWidth, y: center.y + distance * 1.22 + verticalOffset };
    }
    const bottomY = Math.max(bottomLeft.y, bottomRight.y);

    const sleeveEnds = arms.map(arm => {
      if (longSleeves) return arm.elbow;
      return pointOffset(arm.shoulder, (arm.elbow.x - arm.shoulder.x) * .52, (arm.elbow.y - arm.shoulder.y) * .52);
    });
    const innerSleeveEdges = arms.map((arm, index) => {
      const end = sleeveEnds[index];
      const direction = unitVector(arm.shoulder, end);
      const normal = { x: -direction.y, y: direction.x };
      const halfWidth = distance * (longSleeves ? .105 : .118);
      const first = pointOffset(end, normal.x * halfWidth, normal.y * halfWidth);
      const second = pointOffset(end, -normal.x * halfWidth, -normal.y * halfWidth);
      return Math.abs(first.x - center.x) < Math.abs(second.x - center.x) ? first : second;
    });

    const bodyPath = new Path2D();
    bodyPath.moveTo(topLeft.x, topLeft.y);
    bodyPath.lineTo(center.x - axis.x * neckHalf, center.y + distance * .025 + verticalOffset);
    bodyPath.quadraticCurveTo(center.x - axis.x * neckHalf * .55, center.y + distance * .155 + verticalOffset, center.x, center.y + distance * .155 + verticalOffset);
    bodyPath.quadraticCurveTo(center.x + axis.x * neckHalf * .55, center.y + distance * .155 + verticalOffset, center.x + axis.x * neckHalf, center.y + distance * .025 + verticalOffset);
    bodyPath.lineTo(topRight.x, topRight.y);
    bodyPath.lineTo(innerSleeveEdges[1].x, innerSleeveEdges[1].y);
    bodyPath.lineTo(bottomRight.x, bottomRight.y);
    bodyPath.quadraticCurveTo(center.x + distance * .36, bottomY + distance * .055, bottomLeft.x, bottomLeft.y);
    bodyPath.lineTo(innerSleeveEdges[0].x, innerSleeveEdges[0].y);
    bodyPath.closePath();

    const bounds = {
      left: Math.min(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x, ...arms.map(arm => arm.wrist.x)) - distance * .2,
      right: Math.max(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x, ...arms.map(arm => arm.wrist.x)) + distance * .2,
      top: Math.min(topLeft.y, topRight.y, ...arms.map(arm => arm.shoulder.y), center.y - distance * (kind === 'hoodie' ? .40 : .08)),
      bottom: Math.max(bottomLeft.y, bottomRight.y, ...arms.map(arm => arm.wrist.y)) + distance * .12
    };
    const base = product.color;
    const light = mixColor(base, '#ffffff', .23);
    const dark = mixColor(base, '#1c1a18', .24);
    const gradientFor = (from, to) => {
      const gradient = context.createLinearGradient(from.x, from.y, to.x, to.y);
      gradient.addColorStop(0, light);
      gradient.addColorStop(.48, base);
      gradient.addColorStop(1, dark);
      return gradient;
    };

    context.save();
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.shadowColor = 'rgba(22,18,14,.22)';
    context.shadowBlur = Math.max(5, distance * .025);
    context.shadowOffsetY = Math.max(2, distance * .012);

    // The hood sits behind the shoulders, while the sleeves extend along the actual arm landmarks.
    if (kind === 'hoodie') {
      const hood = new Path2D();
      hood.moveTo(center.x - neckHalf * 1.55, center.y + distance * .06 + verticalOffset);
      hood.bezierCurveTo(center.x - distance * .29, center.y - distance * .28 + verticalOffset, center.x + distance * .29, center.y - distance * .28 + verticalOffset, center.x + neckHalf * 1.55, center.y + distance * .06 + verticalOffset);
      hood.quadraticCurveTo(center.x, center.y + distance * .28 + verticalOffset, center.x - neckHalf * 1.55, center.y + distance * .06 + verticalOffset);
      hood.closePath();
      context.fillStyle = gradientFor({ x: center.x - distance * .22, y: center.y }, { x: center.x + distance * .22, y: center.y + distance * .2 });
      context.fill(hood);
      context.strokeStyle = 'rgba(35,35,39,.42)'; context.lineWidth = Math.max(1.5, distance * .008); context.stroke(hood);
    }

    const sleevePaths = [];
    for (const arm of arms) {
      let elbow = arm.elbow;
      let cuff = arm.wrist;
      if (!longSleeves) {
        const shortEnd = pointOffset(arm.shoulder, (elbow.x - arm.shoulder.x) * .52, (elbow.y - arm.shoulder.y) * .52);
        const shortDirection = unitVector(arm.shoulder, elbow);
        const cuffEnd = pointOffset(shortEnd, shortDirection.x * distance * .045, shortDirection.y * distance * .045);
        const path = makeSleevePath(arm.shoulder, shortEnd, cuffEnd, distance * .155, distance * .118, distance * .105);
        sleevePaths.push({ path, arm, cuff: cuffEnd, isLong: false });
      } else {
        const path = makeSleevePath(arm.shoulder, elbow, cuff, distance * .145, distance * .105, distance * .068);
        sleevePaths.push({ path, arm, cuff, isLong: true });
      }
    }
    sleevePaths.forEach(({ path, cuff, isLong, arm }) => {
      context.fillStyle = gradientFor({ x: center.x - distance * .6, y: center.y }, { x: center.x + distance * .6, y: center.y + distance });
      context.fill(path);
      context.shadowBlur = 0;
      context.strokeStyle = mixColor(base, '#171513', .28);
      context.lineWidth = Math.max(1.3, distance * .007);
      context.stroke(path);
      drawTextileTexture(context, path, bounds, kind === 'hoodie' ? 'fleece' : kind === 'denim' ? 'denim' : kind === 'oxford' ? 'oxford' : kind === 'polo' ? 'pique' : kind === 'tee' ? 'jersey' : 'jersey', distance);
      if (isLong) {
        const direction = unitVector(arms.find(item => item.wrist === cuff)?.elbow || center, cuff);
        const normal = { x: -direction.y, y: direction.x };
        context.strokeStyle = 'rgba(255,255,255,.62)';
        context.lineWidth = Math.max(2, distance * .012);
        context.beginPath();
        context.moveTo(cuff.x + normal.x * distance * .066, cuff.y + normal.y * distance * .066);
        context.lineTo(cuff.x - normal.x * distance * .066, cuff.y - normal.y * distance * .066);
        context.stroke();
      } else {
        const direction = unitVector(arm.shoulder, arm.elbow);
        const normal = { x: -direction.y, y: direction.x };
        context.strokeStyle = 'rgba(255,255,255,.55)';
        context.lineWidth = Math.max(1.2, distance * .007);
        context.beginPath();
        context.moveTo(cuff.x + normal.x * distance * .105, cuff.y + normal.y * distance * .105);
        context.lineTo(cuff.x - normal.x * distance * .105, cuff.y - normal.y * distance * .105);
        context.stroke();
      }
    });

    context.fillStyle = gradientFor(topLeft, bottomRight);
    context.fill(bodyPath);
    context.shadowBlur = 0;
    context.strokeStyle = mixColor(base, '#171513', .30);
    context.lineWidth = Math.max(1.5, distance * .008);
    context.stroke(bodyPath);
    const textureKind = kind === 'hoodie' ? 'fleece' : kind === 'denim' ? 'denim' : kind === 'oxford' ? 'oxford' : kind === 'polo' ? 'pique' : 'jersey';
    drawTextileTexture(context, bodyPath, bounds, textureKind, distance);

    // Garment-specific neckline and front construction.
    const neckY = center.y + distance * .155 + verticalOffset;
    context.lineWidth = Math.max(2, distance * .012);
    context.strokeStyle = 'rgba(255,255,255,.78)';
    context.beginPath(); context.moveTo(center.x - neckHalf, center.y + distance * .025 + verticalOffset); context.quadraticCurveTo(center.x, neckY + distance * .025, center.x + neckHalf, center.y + distance * .025 + verticalOffset); context.stroke();

    if (kind === 'shirt' || kind === 'oxford' || kind === 'denim') {
      const collar = new Path2D();
      collar.moveTo(center.x - neckHalf, center.y + distance * .025 + verticalOffset);
      collar.lineTo(center.x - neckHalf * .56, center.y + distance * .235 + verticalOffset);
      collar.lineTo(center.x, center.y + distance * .15 + verticalOffset);
      collar.lineTo(center.x + neckHalf * .56, center.y + distance * .235 + verticalOffset);
      collar.lineTo(center.x + neckHalf, center.y + distance * .025 + verticalOffset);
      collar.lineTo(center.x + neckHalf * .72, center.y + distance * .005 + verticalOffset);
      collar.lineTo(center.x, center.y + distance * .105 + verticalOffset);
      collar.lineTo(center.x - neckHalf * .72, center.y + distance * .005 + verticalOffset);
      collar.closePath();
      context.fillStyle = mixColor(base, '#ffffff', .35); context.fill(collar);
      context.strokeStyle = 'rgba(40,35,30,.35)'; context.lineWidth = Math.max(1, distance * .005); context.stroke(collar);
      context.strokeStyle = 'rgba(255,255,255,.68)'; context.lineWidth = Math.max(1.4, distance * .007);
      context.beginPath(); context.moveTo(center.x, neckY); context.lineTo(center.x, bottomY - distance * .10); context.stroke();
      const buttonCount = 5;
      context.fillStyle = 'rgba(255,255,255,.82)';
      for (let index = 0; index < buttonCount; index++) {
        const y = neckY + distance * (.22 + index * .18);
        if (y < bottomY - distance * .06) { context.beginPath(); context.arc(center.x + distance * .012, y, Math.max(1.5, distance * .009), 0, Math.PI * 2); context.fill(); }
      }
      if (kind === 'denim') {
        context.strokeStyle = 'rgba(255,255,255,.75)'; context.lineWidth = Math.max(1.3, distance * .006);
        [-1, 1].forEach(side => {
          const x = center.x + side * distance * .23, y = center.y + distance * .39;
          context.strokeRect(x - distance * .075, y, distance * .15, distance * .17);
          context.beginPath(); context.moveTo(x - distance * .075, y + distance * .02); context.lineTo(x, y + distance * .06); context.lineTo(x + distance * .075, y + distance * .02); context.stroke();
        });
      } else {
        const x = center.x + distance * .23, y = center.y + distance * .39;
        context.strokeStyle = 'rgba(255,255,255,.62)'; context.lineWidth = Math.max(1.2, distance * .006); context.strokeRect(x - distance * .075, y, distance * .15, distance * .17);
      }
    } else if (kind === 'polo') {
      const collar = new Path2D();
      collar.moveTo(center.x - neckHalf, center.y + distance * .02 + verticalOffset);
      collar.lineTo(center.x - distance * .045, center.y + distance * .19 + verticalOffset);
      collar.lineTo(center.x, center.y + distance * .12 + verticalOffset);
      collar.lineTo(center.x + distance * .045, center.y + distance * .19 + verticalOffset);
      collar.lineTo(center.x + neckHalf, center.y + distance * .02 + verticalOffset);
      collar.lineTo(center.x + neckHalf * .7, center.y + distance * .01 + verticalOffset);
      collar.lineTo(center.x, center.y + distance * .105 + verticalOffset);
      collar.closePath();
      context.fillStyle = mixColor(base, '#ffffff', .34); context.fill(collar); context.strokeStyle = 'rgba(35,35,30,.35)'; context.stroke(collar);
      context.strokeStyle = 'rgba(255,255,255,.78)'; context.lineWidth = Math.max(1.5, distance * .008);
      context.beginPath(); context.moveTo(center.x, center.y + distance * .17); context.lineTo(center.x, center.y + distance * .42); context.stroke();
      context.fillStyle = 'rgba(255,255,255,.82)';
      [0, 1].forEach(index => { context.beginPath(); context.arc(center.x + distance * .014, center.y + distance * (.24 + index * .10), Math.max(1.4, distance * .008), 0, Math.PI * 2); context.fill(); });
    } else if (kind === 'hoodie') {
      context.strokeStyle = 'rgba(245,245,245,.86)'; context.lineWidth = Math.max(2, distance * .012);
      [-1, 1].forEach(side => {
        context.beginPath(); context.moveTo(center.x + side * distance * .055, center.y + distance * .17); context.quadraticCurveTo(center.x + side * distance * .095, center.y + distance * .38, center.x + side * distance * .085, center.y + distance * .48); context.stroke();
        context.fillStyle = 'rgba(245,245,245,.9)'; context.beginPath(); context.arc(center.x + side * distance * .085, center.y + distance * .48, Math.max(2, distance * .012), 0, Math.PI * 2); context.fill();
      });
      const pocket = new Path2D();
      pocket.moveTo(center.x - distance * .29, center.y + distance * .72);
      pocket.quadraticCurveTo(center.x, center.y + distance * .66, center.x + distance * .29, center.y + distance * .72);
      pocket.lineTo(center.x + distance * .25, center.y + distance * .91);
      pocket.quadraticCurveTo(center.x, center.y + distance * .98, center.x - distance * .25, center.y + distance * .91);
      pocket.closePath();
      context.fillStyle = 'rgba(0,0,0,.07)'; context.fill(pocket);
      context.strokeStyle = 'rgba(255,255,255,.52)'; context.lineWidth = Math.max(1.5, distance * .008); context.stroke(pocket);
      context.strokeStyle = 'rgba(255,255,255,.70)'; context.lineWidth = Math.max(2, distance * .012);
      context.beginPath(); context.moveTo(bottomLeft.x, bottomLeft.y - distance * .04); context.quadraticCurveTo(center.x, bottomY + distance * .015, bottomRight.x, bottomRight.y - distance * .04); context.stroke();
    } else {
      // Crew-neck tee: a clear rib collar and dropped shoulder seam.
      context.strokeStyle = 'rgba(255,255,255,.8)'; context.lineWidth = Math.max(2.5, distance * .016);
      context.beginPath(); context.moveTo(center.x - neckHalf, center.y + distance * .025 + verticalOffset); context.quadraticCurveTo(center.x, center.y + distance * .21 + verticalOffset, center.x + neckHalf, center.y + distance * .025 + verticalOffset); context.stroke();
      context.strokeStyle = 'rgba(80,65,95,.28)'; context.lineWidth = Math.max(1, distance * .006);
      context.beginPath(); context.moveTo(topLeft.x + axis.x * distance * .08, topLeft.y + distance * .04); context.lineTo(bottomLeft.x + axis.x * distance * .04, bottomLeft.y - distance * .04); context.moveTo(topRight.x - axis.x * distance * .08, topRight.y + distance * .04); context.lineTo(bottomRight.x - axis.x * distance * .04, bottomRight.y - distance * .04); context.stroke();
    }

    // Small sleeve seams and a neat hem make the cut legible at demo distance.
    context.strokeStyle = 'rgba(255,255,255,.55)';
    context.lineWidth = Math.max(1, distance * .006);
    context.setLineDash([Math.max(2, distance * .012), Math.max(2, distance * .009)]);
    context.beginPath();
    context.moveTo(bottomLeft.x + distance * .04, bottomLeft.y - distance * .035);
    context.quadraticCurveTo(center.x, bottomY + distance * .04, bottomRight.x - distance * .04, bottomRight.y - distance * .035);
    context.stroke();
    context.setLineDash([]);
    context.restore();
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
        elements.mirrorFrame.classList.remove("pose-detected");
        elements.shirtOverlay.classList.add("is-searching");
        clearPoseCanvas();
        clearGarmentCanvas();
        setPoseStatus("STEP INTO FRAME", "searching");
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
    latestLandmarks = landmarks;
    drawGarmentOverlay(landmarks, rect);
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
      setPoseStatus("STEP INTO FRAME", "searching");
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
      void startPoseTracking();
      stream.getVideoTracks().forEach(track => {
        track.addEventListener("ended", () => {
          if (cameraStream === stream) stopCamera(false);
        }, { once: true });
      });
      showToast("Camera connected. The AI tracker is loading; stand back so your shoulders are visible.");
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
      context.save();
      if (mirrorFlipped) {
        context.translate(width, 0);
        context.scale(-1, 1);
      }
      context.drawImage(elements.camera, 0, 0, width, height);
      context.restore();
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
  updateFitControls();
  updateOverlayState();
  setMirrorFlipped(true);
})();

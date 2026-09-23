import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DSceneProps {
  className?: string;
}

export const Hero3DScene: React.FC<Hero3DSceneProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // OFFICIAL GOOGLE BRAND COLORS
    const GOOGLE_BLUE = 0x4285f4;
    const GOOGLE_RED = 0xea4335;
    const GOOGLE_YELLOW = 0xfbbc05;
    const GOOGLE_GREEN = 0x34a853;

    // SCENE & CAMERA
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x121417, 0.032);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 700;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 9);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 3D OBJECTS ROOT GROUP
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Helper to position group responsively
    const updateGroupPosition = (w: number) => {
      if (w >= 1024) {
        rootGroup.position.set(2.4, 0.1, 0);
      } else {
        rootGroup.position.set(0, -0.2, 0);
      }
    };
    updateGroupPosition(width);

    // 1. Central Core Sphere - The Indexed World Wide Web (Google Knowledge Hub)
    const coreGeometry = new THREE.IcosahedronGeometry(1.65, 2);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x16191f,
      roughness: 0.3,
      metalness: 0.85,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    rootGroup.add(coreMesh);

    // 2. Wireframe Lattice Overlay (Google Blue Hologram)
    const wireGeometry = new THREE.IcosahedronGeometry(1.68, 2);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: GOOGLE_BLUE,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
    rootGroup.add(wireMesh);

    // 3. Inner Pulsing Search Energy Core
    const innerGeometry = new THREE.SphereGeometry(1.05, 24, 24);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: GOOGLE_YELLOW,
      transparent: true,
      opacity: 0.28,
      wireframe: true,
    });
    const innerCore = new THREE.Mesh(innerGeometry, innerMaterial);
    rootGroup.add(innerCore);

    // 4. The 4 Official Google Orbit Rings (Search, Maps, Insights, Conversion)
    const createOrbitRing = (radius: number, tube: number, rotX: number, rotY: number, color: number, opacity: number) => {
      const ringGeom = new THREE.TorusGeometry(radius, tube, 16, 120);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
        wireframe: true,
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.rotation.x = rotX;
      ringMesh.rotation.y = rotY;
      return ringMesh;
    };

    // Google Blue Orbit (Google Search)
    const orbitBlue = createOrbitRing(2.7, 0.013, Math.PI / 3, Math.PI / 6, GOOGLE_BLUE, 0.7);
    // Google Red Orbit (Google Maps / Geolocation)
    const orbitRed = createOrbitRing(3.2, 0.011, -Math.PI / 4, Math.PI / 4, GOOGLE_RED, 0.55);
    // Google Yellow Orbit (Google Ratings & Search Insights)
    const orbitYellow = createOrbitRing(3.7, 0.010, Math.PI / 2.2, -Math.PI / 5, GOOGLE_YELLOW, 0.5);
    // Google Green Orbit (Google Conversion & WhatsApp ROI)
    const orbitGreen = createOrbitRing(4.3, 0.009, -Math.PI / 3.2, Math.PI / 5.5, GOOGLE_GREEN, 0.5);

    rootGroup.add(orbitBlue);
    rootGroup.add(orbitRed);
    rootGroup.add(orbitYellow);
    rootGroup.add(orbitGreen);

    // 5. Stylized 3D Search Scanner / Magnifying Reticle (Internet Search Engine Symbol)
    const searchScannerGroup = new THREE.Group();

    // Magnifying Glass Ring Frame (Google Blue)
    const lensFrameGeom = new THREE.TorusGeometry(0.72, 0.045, 16, 64);
    const lensFrameMat = new THREE.MeshStandardMaterial({
      color: GOOGLE_BLUE,
      emissive: GOOGLE_BLUE,
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.15,
    });
    const lensFrame = new THREE.Mesh(lensFrameGeom, lensFrameMat);
    searchScannerGroup.add(lensFrame);

    // Holographic Translucent Lens Glass
    const lensGlassGeom = new THREE.CircleGeometry(0.70, 32);
    const lensGlassMat = new THREE.MeshBasicMaterial({
      color: 0x8ab4f8,
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const lensGlass = new THREE.Mesh(lensGlassGeom, lensGlassMat);
    searchScannerGroup.add(lensGlass);

    // Scanner Reticle Crosshair (Search Index Target)
    const reticleGeom = new THREE.RingGeometry(0.35, 0.37, 32);
    const reticleMat = new THREE.MeshBasicMaterial({
      color: GOOGLE_YELLOW,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
    });
    const reticle = new THREE.Mesh(reticleGeom, reticleMat);
    searchScannerGroup.add(reticle);

    // Magnifying Glass Handle (High-tech angled stem)
    const handleGeom = new THREE.CylinderGeometry(0.045, 0.055, 0.7, 16);
    const handleMat = new THREE.MeshStandardMaterial({
      color: 0x2d3139,
      metalness: 0.8,
      roughness: 0.3,
    });
    const handle = new THREE.Mesh(handleGeom, handleMat);
    handle.position.set(0.68, -0.68, 0);
    handle.rotation.z = Math.PI / 4;
    searchScannerGroup.add(handle);

    // Radar Scanning Beam inside the lens (Crawling the web)
    const radarSweepGeom = new THREE.ConeGeometry(0.68, 0.02, 32, 1, true, 0, Math.PI / 2.5);
    const radarSweepMat = new THREE.MeshBasicMaterial({
      color: GOOGLE_BLUE,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const radarSweep = new THREE.Mesh(radarSweepGeom, radarSweepMat);
    radarSweep.rotation.x = Math.PI / 2;
    searchScannerGroup.add(radarSweep);

    rootGroup.add(searchScannerGroup);

    // 6. The 4 Official Google Satellites (Google Ecosystem Nodes)
    const satelliteNodes: { mesh: THREE.Mesh; orbitRadius: number; speed: number; angle: number; yOffset: number }[] = [];

    const createSatellite = (size: number, color: number, orbitRadius: number, speed: number, yOffset: number) => {
      const geom = new THREE.SphereGeometry(size, 20, 20);
      const mat = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.95,
        roughness: 0.15,
        metalness: 0.7,
      });
      const mesh = new THREE.Mesh(geom, mat);

      // Add a subtle halo aura around each Google satellite
      const auraGeom = new THREE.SphereGeometry(size * 1.5, 16, 16);
      const auraMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.25,
        wireframe: true,
      });
      const auraMesh = new THREE.Mesh(auraGeom, auraMat);
      mesh.add(auraMesh);

      rootGroup.add(mesh);
      return { mesh, orbitRadius, speed, angle: Math.random() * Math.PI * 2, yOffset };
    };

    // Google Blue Node (Google Search Core)
    satelliteNodes.push(createSatellite(0.20, GOOGLE_BLUE, 2.7, 0.7, 0.35));
    // Google Red Node (Google Maps / Geolocation)
    satelliteNodes.push(createSatellite(0.18, GOOGLE_RED, 3.2, -0.55, -0.25));
    // Google Yellow Node (Google Ratings / Reviews & Search Insights)
    satelliteNodes.push(createSatellite(0.16, GOOGLE_YELLOW, 3.7, 0.45, 0.4));
    // Google Green Node (Google Conversions / Leads & WhatsApp)
    satelliteNodes.push(createSatellite(0.17, GOOGLE_GREEN, 4.3, -0.38, -0.45));

    // 7. Expanded 3D Search Particle Cloud with Official Google Colors
    const particleCount = 460;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cBlue = new THREE.Color(GOOGLE_BLUE);
    const cRed = new THREE.Color(GOOGLE_RED);
    const cYellow = new THREE.Color(GOOGLE_YELLOW);
    const cGreen = new THREE.Color(GOOGLE_GREEN);
    const cNeutral = new THREE.Color(0x707d93);

    for (let i = 0; i < particleCount; i++) {
      // Wide volumetric distribution covering full hero background width and depth
      positions[i * 3] = (Math.random() - 0.5) * 22.0;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12.0;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8.5;

      const rand = Math.random();
      let chosenColor = cNeutral;
      if (rand < 0.30) {
        chosenColor = cBlue; // 30% Google Blue
      } else if (rand < 0.52) {
        chosenColor = cRed; // 22% Google Red
      } else if (rand < 0.74) {
        chosenColor = cYellow; // 22% Google Yellow
      } else if (rand < 0.92) {
        chosenColor = cGreen; // 18% Google Green
      }

      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.065,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 8. Dynamic Search Index Network Lines (Connecting indexed web queries)
    const lineCount = 18;
    const linePositions = new Float32Array(lineCount * 2 * 3);
    const lineColors = new Float32Array(lineCount * 2 * 3);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const searchIndexLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    rootGroup.add(searchIndexLines);

    // 9. OFFICIAL GOOGLE 4-COLOR LIGHTING RIG
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    // Google Blue Key Light (Top-Left)
    const lightBlue = new THREE.PointLight(GOOGLE_BLUE, 3.2, 18);
    lightBlue.position.set(5, 4, 5);
    scene.add(lightBlue);

    // Google Red Rim Light (Top-Right)
    const lightRed = new THREE.PointLight(GOOGLE_RED, 2.6, 16);
    lightRed.position.set(-5, 3, 4);
    scene.add(lightRed);

    // Google Yellow Accent Light (Bottom-Right)
    const lightYellow = new THREE.PointLight(GOOGLE_YELLOW, 2.2, 14);
    lightYellow.position.set(4, -3, 4);
    scene.add(lightYellow);

    // Google Green Fill Light (Bottom-Left)
    const lightGreen = new THREE.PointLight(GOOGLE_GREEN, 2.2, 14);
    lightGreen.position.set(-4, -3, 3);
    scene.add(lightGreen);

    // MOUSE PARALLAX TRACKING
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 0.75;
      targetRotationX = y * 0.6;
    };

    window.addEventListener('mousemove', handlePointerMove);

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth === 0 || newHeight === 0) return;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      updateGroupPosition(newWidth);
    };

    window.addEventListener('resize', handleResize);

    // ANIMATION LOOP
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let scannerAngle = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth mouse parallax lerp
        rootGroup.rotation.y += (targetRotationY - rootGroup.rotation.y) * 0.06;
        rootGroup.rotation.x += (targetRotationX - rootGroup.rotation.x) * 0.06;

        // Autonomous idle 3D rotation of the core World Wide Web sphere
        coreMesh.rotation.y += 0.22 * delta;
        coreMesh.rotation.x += 0.10 * delta;

        wireMesh.rotation.y -= 0.32 * delta;
        wireMesh.rotation.z += 0.16 * delta;

        // Pulsing Google search energy core
        innerCore.rotation.y += 0.40 * delta;
        const pulse = 1 + Math.sin(elapsedTime * 2.6) * 0.08;
        innerCore.scale.set(pulse, pulse, pulse);

        // Rotation of the 4 Google Orbit Rings
        orbitBlue.rotation.z += 0.22 * delta;
        orbitRed.rotation.z -= 0.18 * delta;
        orbitYellow.rotation.z += 0.15 * delta;
        orbitGreen.rotation.z -= 0.12 * delta;

        // Volumetric Google particle field slow drift
        particles.rotation.y += 0.035 * delta;

        // Search Scanner / Magnifying Glass animation: crawling/inspecting the 3D space
        scannerAngle += 0.38 * delta;
        const scannerOrbitRadius = 3.3;
        searchScannerGroup.position.x = Math.cos(scannerAngle) * scannerOrbitRadius;
        searchScannerGroup.position.y = Math.sin(scannerAngle * 1.6) * 1.1 + 0.3;
        searchScannerGroup.position.z = Math.sin(scannerAngle) * scannerOrbitRadius * 0.75 + 0.5;

        // Angle the scanner toward the center core like it's scanning the web
        searchScannerGroup.rotation.y = -scannerAngle + Math.PI / 2;
        searchScannerGroup.rotation.x = Math.sin(scannerAngle * 2) * 0.2;
        searchScannerGroup.rotation.z = Math.cos(scannerAngle) * 0.2;

        // Rotate the radar sweep beam inside the search lens
        radarSweep.rotation.z += 2.4 * delta;

        // Movement of the 4 Google Satellites (Search, Maps, Reviews, Conversion)
        satelliteNodes.forEach((node) => {
          node.angle += node.speed * delta;
          node.mesh.position.x = Math.cos(node.angle) * node.orbitRadius;
          node.mesh.position.z = Math.sin(node.angle) * node.orbitRadius;
          node.mesh.position.y = Math.sin(node.angle * 2.2) * 0.45 + node.yOffset;
        });

        // Update dynamic search index lines connecting search scanner to satellites
        const posArray = lineGeometry.attributes.position.array as Float32Array;
        const colArray = lineGeometry.attributes.color.array as Float32Array;

        for (let j = 0; j < satelliteNodes.length && j < 4; j++) {
          const sNode = satelliteNodes[j];
          // Line from search scanner to each satellite
          const idx = j * 6;
          posArray[idx] = searchScannerGroup.position.x;
          posArray[idx + 1] = searchScannerGroup.position.y;
          posArray[idx + 2] = searchScannerGroup.position.z;

          posArray[idx + 3] = sNode.mesh.position.x;
          posArray[idx + 4] = sNode.mesh.position.y;
          posArray[idx + 5] = sNode.mesh.position.z;

          const satColor = j === 0 ? cBlue : j === 1 ? cRed : j === 2 ? cYellow : cGreen;
          colArray[idx] = cBlue.r;
          colArray[idx + 1] = cBlue.g;
          colArray[idx + 2] = cBlue.b;

          colArray[idx + 3] = satColor.r;
          colArray[idx + 4] = satColor.g;
          colArray[idx + 5] = satColor.b;
        }
        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.attributes.color.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose all geometries and materials
      coreGeometry.dispose();
      coreMaterial.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();

      lensFrameGeom.dispose();
      lensFrameMat.dispose();
      lensGlassGeom.dispose();
      lensGlassMat.dispose();
      reticleGeom.dispose();
      reticleMat.dispose();
      handleGeom.dispose();
      handleMat.dispose();
      radarSweepGeom.dispose();
      radarSweepMat.dispose();

      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[420px] lg:min-h-[520px] pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface CubePalette {
  base: number;
  side: number;
  top: number;
  accent: number;
  edge: number;
}

const palettes: CubePalette[] = [
  { base: 0x087f9e, side: 0x07385f, top: 0x62d8e8, accent: 0xb8ff70, edge: 0xd7fbff },
  { base: 0x5b4ab5, side: 0x211b58, top: 0xa58aff, accent: 0x72f4ff, edge: 0xe7e1ff },
  { base: 0xb36b24, side: 0x54250f, top: 0xf0b84b, accent: 0x71efff, edge: 0xffe7ad },
  { base: 0x5b9d32, side: 0x214b27, top: 0xa8e85e, accent: 0xd9ff82, edge: 0xedffc9 },
];

const makePanel = (size: number, color: number) => {
  const geometry = new THREE.PlaneGeometry(size * 0.48, size * 0.48);
  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.28,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const panel = new THREE.Mesh(geometry, material);
  const panelEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(geometry),
    new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.5 }),
  );
  panel.add(panelEdges);
  return panel;
};

const makeCube = (size: number, palette: CubePalette, detailed = false) => {
  const group = new THREE.Group();
  const geometry = new THREE.BoxGeometry(size, size, size);
  const faceColors = [palette.side, palette.side, palette.top, palette.side, palette.base, palette.side];
  const materials = faceColors.map((color, index) => new THREE.MeshPhysicalMaterial({
    color,
    metalness: 0.62,
    roughness: index === 2 ? 0.14 : 0.23,
    clearcoat: 1,
    clearcoatRoughness: 0.12,
    emissive: new THREE.Color(index === 2 ? palette.accent : color).multiplyScalar(index === 2 ? 0.14 : 0.07),
    transparent: true,
    opacity: 0.38,
    depthWrite: false,
  }));
  const mesh = new THREE.Mesh(geometry, materials);
  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(geometry),
    new THREE.LineBasicMaterial({ color: palette.edge, transparent: true, opacity: 0.58 }),
  );
  const frame = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(size * 1.13, size * 1.13, size * 1.13)),
    new THREE.LineBasicMaterial({ color: palette.accent, transparent: true, opacity: detailed ? 0.3 : 0.16 }),
  );
  const energy = new THREE.Mesh(
    new THREE.OctahedronGeometry(size * (detailed ? 0.24 : 0.19), 0),
    new THREE.MeshBasicMaterial({ color: palette.accent, transparent: true, opacity: 0.48, depthWrite: false }),
  );
  energy.name = "cube-energy";
  frame.name = "cube-frame";
  group.add(mesh, edges, frame, energy);

  if (detailed) {
    const frontPanel = makePanel(size, palette.accent);
    frontPanel.position.z = size * 0.505;
    const topPanel = makePanel(size * 0.88, palette.edge);
    topPanel.position.y = size * 0.505;
    topPanel.rotation.x = -Math.PI / 2;
    const sidePanel = makePanel(size * 0.78, palette.top);
    sidePanel.position.x = size * 0.505;
    sidePanel.rotation.y = Math.PI / 2;
    group.add(frontPanel, topPanel, sidePanel);
  }
  return group;
};

export const WebGLCubeScene = () => {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 1.2, 13);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    host.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x9edfff, 0.72));
    const key = new THREE.DirectionalLight(0xbdf7ff, 4.2);
    key.position.set(4, 6, 8);
    scene.add(key);
    const rim = new THREE.PointLight(0xb8ff70, 32, 20);
    rim.position.set(-5, 2, 4);
    scene.add(rim);
    const blue = new THREE.PointLight(0x38cfff, 26, 18);
    blue.position.set(5, -3, 2);
    scene.add(blue);

    const core = makeCube(2.25, palettes[0], true);
    core.rotation.set(-0.35, 0.65, 0.08);
    scene.add(core);

    const inner = makeCube(0.72, palettes[3]);
    inner.scale.setScalar(0.82);
    core.add(inner);

    const satellites = Array.from({ length: 11 }, (_, index) => {
      const lane = index % 3;
      const pivot = new THREE.Group();
      pivot.rotation.set([0.35, 1.05, -0.62][lane], [-0.22, 0.28, -0.48][lane], index * 0.71);
      scene.add(pivot);
      const cube = makeCube([0.38, 0.5, 0.32, 0.44][index % 4], palettes[index % palettes.length]);
      cube.position.x = [3.5, 4.35, 5.15][lane] + (index % 4) * 0.08;
      cube.rotation.set(index * 0.41, index * 0.63, index * 0.28);
      pivot.add(cube);
      return { pivot, cube, speed: [0.34, -0.24, 0.18][lane], phase: index * 0.9 };
    });

    const rings = [
      { radius: 3.35, tube: 0.012, color: 0x67e8f9, rotation: [1.2, 0.12, 0.1] },
      { radius: 4.5, tube: 0.009, color: 0xa3e635, rotation: [0.82, 0.7, -0.3] },
      { radius: 5.55, tube: 0.007, color: 0x4dd7ff, rotation: [1.42, -0.42, 0.5] },
    ].map(({ radius, tube, color, rotation }) => {
      const mesh = new THREE.Mesh(
        new THREE.TorusGeometry(radius, tube, 8, 160),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.26 }),
      );
      mesh.rotation.set(rotation[0], rotation[1], rotation[2]);
      scene.add(mesh);
      return mesh;
    });

    const frameGeometry = new THREE.IcosahedronGeometry(6.2, 1);
    const frame = new THREE.LineSegments(
      new THREE.EdgesGeometry(frameGeometry),
      new THREE.LineBasicMaterial({ color: 0x57d7e8, transparent: true, opacity: 0.055 }),
    );
    scene.add(frame);

    const starCount = 190;
    const positions = new Float32Array(starCount * 3);
    for (let index = 0; index < starCount; index += 1) {
      const radius = 7 + Math.random() * 11;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[index * 3 + 1] = radius * Math.cos(phi);
      positions[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({ color: 0xb7f3ff, size: 0.035, transparent: true, opacity: 0.62 }),
    );
    scene.add(stars);

    const pointer = new THREE.Vector2();
    let frameId = 0;
    const clock = new THREE.Clock();

    const resize = () => {
      const { clientWidth, clientHeight } = host;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / Math.max(clientHeight, 1);
      camera.updateProjectionMatrix();
    };
    const move = (event: PointerEvent) => {
      pointer.x = event.clientX / window.innerWidth - 0.5;
      pointer.y = event.clientY / window.innerHeight - 0.5;
    };
    const animate = () => {
      const time = clock.getElapsedTime();
      core.rotation.y = 0.65 + time * 0.16;
      core.rotation.x = -0.35 + Math.sin(time * 0.45) * 0.1;
      core.getObjectByName("cube-frame")!.rotation.set(time * 0.18, -time * 0.24, time * 0.12);
      core.getObjectByName("cube-energy")!.rotation.set(time * 0.7, time * -0.9, time * 0.45);
      inner.rotation.x = time * -0.8;
      inner.rotation.y = time * 0.65;
      satellites.forEach(({ pivot, cube, speed, phase }) => {
        pivot.rotation.z += speed * 0.008;
        cube.rotation.x += 0.006;
        cube.rotation.y += 0.009;
        cube.position.y = Math.sin(time * 0.8 + phase) * 0.18;
        cube.scale.setScalar(0.88 + Math.sin(time * 0.65 + phase) * 0.12);
        cube.getObjectByName("cube-frame")!.rotation.y = time * -0.5 + phase;
        cube.getObjectByName("cube-energy")!.rotation.x = time * 1.1 + phase;
      });
      rings.forEach((ring, index) => { ring.rotation.z += (index % 2 ? -1 : 1) * 0.0008; });
      frame.rotation.y = time * -0.025;
      stars.rotation.y = time * 0.006;
      camera.position.x += (pointer.x * 1.2 - camera.position.x) * 0.025;
      camera.position.y += (-pointer.y * 0.8 + 1.2 - camera.position.y) * 0.025;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments || object instanceof THREE.Points) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.dispose();
      host.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={hostRef} className="cyber-webgl absolute inset-0" />;
};

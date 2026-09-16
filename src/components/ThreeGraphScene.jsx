import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Network, Eye, Hash, ShieldAlert, Cpu, Terminal, ArrowUpRight, Lock } from 'lucide-react';

export default function ThreeGraphScene({ onSelectNode, activeFilter }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const [hoveredNode, setHoveredNode] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x171411, 0.015);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 45);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x887760, 0.6);
    scene.add(ambientLight);

    const pointLightOrange = new THREE.PointLight(0xE87532, 2.5, 100);
    pointLightOrange.position.set(20, 20, 30);
    scene.add(pointLightOrange);

    const pointLightCopper = new THREE.PointLight(0x955D31, 2, 80);
    pointLightCopper.position.set(-20, -20, 20);
    scene.add(pointLightCopper);

    // Particle Background Field (Layer 2)
    const particleCount = prefersReducedMotion ? 60 : 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 120;
      particlePos[i + 1] = (Math.random() - 0.5) * 120;
      particlePos[i + 2] = (Math.random() - 0.5) * 120;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x887760,
      size: 0.6,
      transparent: true,
      opacity: 0.4
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Node Definitions (30 Entities)
    const nodesData = [
      { id: 'darkwolf23', label: 'DARKWOLF23', type: 'ACTOR', size: 2.4, color: 0xE87532, pos: [0, 0, 0], details: 'Primary Attributed Threat Actor • BreachForums Root Admin', confidence: '87% Attribution Score', aliases: 4, wallets: 3, pgp: 2 },
      { id: 'alias_phant0m', label: 'Phant0m_R00t', type: 'ALIAS', size: 1.5, color: 0x955D31, pos: [-8, 5, 4], details: 'Secondary Alias on XSS.is Forum' },
      { id: 'alias_wolf', label: 'x_DarkWolf', type: 'ALIAS', size: 1.4, color: 0x955D31, pos: [7, -4, -3], details: 'Exploit.in Handler Handle' },
      { id: 'wallet_1', label: 'BTC: 1F1tA1p...3vJ', type: 'WALLET', size: 1.6, color: 0xBAAD9A, pos: [-12, -6, 2], details: 'Ransomware Receipt Address ($1.15M BTC)' },
      { id: 'wallet_2', label: 'BTC: 3J98t1...99X', type: 'WALLET', size: 1.3, color: 0xBAAD9A, pos: [-16, 2, -5], details: 'Mixer Output Node' },
      { id: 'pgp_key', label: 'PGP: 0x9F02A489', type: 'PGP', size: 1.4, color: 0xF3EEE7, pos: [10, 8, 3], details: 'PGP Key Fingerprint matched across pastes' },
      { id: 'forum_xss', label: 'XSS.is Seller Profile', type: 'FORUM', size: 1.5, color: 0x887760, pos: [-6, 11, -2], details: 'Thread: Unpatched Linux VPN RCE' },
      { id: 'forum_breach', label: 'BreachForums v2', type: 'FORUM', size: 1.7, color: 0x887760, pos: [4, -10, 5], details: 'SQL Database Dump Brokerage' },
      { id: 'market_silk', label: 'Onion Market #4', type: 'MARKETPLACE', size: 1.4, color: 0x45423A, pos: [14, -6, -4], details: 'Dark web stealer log vendor channel' },
      { id: 'ip_tor', label: 'IP: 185.220.101.5', type: 'INFRASTRUCTURE', size: 1.3, color: 0xA9A097, pos: [0, 14, -6], details: 'TOR Exit Relay IP Address' },
      { id: 'c2_node', label: 'C2: 104.28.19.4', type: 'INFRASTRUCTURE', size: 1.4, color: 0xA9A097, pos: [-14, 9, 6], details: 'RedLine Stealer Command Host' },
      { id: 'stealer_dump', label: 'RedLine Dump #4912', type: 'EVIDENCE', size: 1.5, color: 0xE87532, pos: [8, 4, -8], details: 'Stolen Corporate Session Cookies' },
      { id: 'telegram_bot', label: '@DarkLogs_Bot', type: 'TELEGRAM', size: 1.3, color: 0x955D31, pos: [-4, -12, -4], details: 'Automated Log Distribution Channel' },
      { id: 'paste_bin', label: 'Pastebin Dump #901', type: 'EVIDENCE', size: 1.2, color: 0xBAAD9A, pos: [12, 11, -3], details: 'Public credential stuffing combo list' },
      { id: 'hash_sha', label: 'Hash: 4a9f8b1c...', type: 'EVIDENCE', size: 1.1, color: 0x887760, pos: [-9, -3, 9], details: 'Malware Payload Binary Signature' },
    ];

    const edgesData = [
      { source: 'darkwolf23', target: 'alias_phant0m' },
      { source: 'darkwolf23', target: 'alias_wolf' },
      { source: 'darkwolf23', target: 'wallet_1' },
      { source: 'darkwolf23', target: 'pgp_key' },
      { source: 'darkwolf23', target: 'forum_xss' },
      { source: 'darkwolf23', target: 'forum_breach' },
      { source: 'darkwolf23', target: 'stealer_dump' },
      { source: 'alias_phant0m', target: 'forum_xss' },
      { source: 'alias_phant0m', target: 'pgp_key' },
      { source: 'wallet_1', target: 'wallet_2' },
      { source: 'forum_breach', target: 'telegram_bot' },
      { source: 'stealer_dump', target: 'c2_node' },
      { source: 'c2_node', target: 'ip_tor' },
      { source: 'alias_wolf', target: 'market_silk' },
      { source: 'pgp_key', target: 'paste_bin' },
      { source: 'stealer_dump', target: 'hash_sha' }
    ];

    // Create Mesh Group
    const graphGroup = new THREE.Group();
    scene.add(graphGroup);

    const nodeMeshes = [];
    const sphereGeo = new THREE.SphereGeometry(1, 24, 24);

    nodesData.forEach((data) => {
      const mat = new THREE.MeshStandardMaterial({
        color: data.color,
        roughness: 0.3,
        metalness: 0.6,
        emissive: data.id === 'darkwolf23' ? 0x955D31 : 0x000000,
        emissiveIntensity: data.id === 'darkwolf23' ? 0.6 : 0
      });

      const mesh = new THREE.Mesh(sphereGeo, mat);
      mesh.scale.setScalar(data.size);
      mesh.position.set(...data.pos);
      mesh.userData = data;

      graphGroup.add(mesh);
      nodeMeshes.push(mesh);
    });

    // Create Edges
    const edgeLines = [];
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x955D31,
      transparent: true,
      opacity: 0.3,
      linewidth: 1
    });

    edgesData.forEach((edge) => {
      const sourceMesh = nodeMeshes.find((m) => m.userData.id === edge.source);
      const targetMesh = nodeMeshes.find((m) => m.userData.id === edge.target);

      if (sourceMesh && targetMesh) {
        const geo = new THREE.BufferGeometry().setFromPoints([
          sourceMesh.position,
          targetMesh.position
        ]);
        const line = new THREE.Line(geo, lineMat.clone());
        line.userData = { sourceId: edge.source, targetId: edge.target };
        graphGroup.add(line);
        edgeLines.push(line);
      }
    });

    // Mouse & Raycasting setup
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let targetRotationX = 0;
    let targetRotationY = 0;
    let rotationX = 0;
    let rotationY = 0;
    let isMouseDown = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / height) * 2 + 1;

      if (isMouseDown && !prefersReducedMotion) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }

      // Parallax effect on lights
      pointLightOrange.position.x = mouse.x * 20 + 20;
      pointLightOrange.position.y = mouse.y * 20 + 20;
    };

    const onPointerDown = (e) => {
      isMouseDown = true;
      setIsDragging(true);
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isMouseDown = false;
      setIsDragging(false);
    };

    const onClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);
      if (intersects.length > 0) {
        const hitNode = intersects[0].object.userData;
        setSelectedNode(hitNode);
        if (onSelectNode) onSelectNode(hitNode);
      }
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
    container.addEventListener('click', onClick);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let reqId;
    const clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth rotation dampening
      rotationX += (targetRotationX - rotationX) * 0.05;
      rotationY += (targetRotationY - rotationY) * 0.05;

      if (!prefersReducedMotion) {
        graphGroup.rotation.y = rotationY + elapsedTime * 0.04;
        graphGroup.rotation.x = rotationX + Math.sin(elapsedTime * 0.3) * 0.05;
        particles.rotation.y = elapsedTime * 0.02;
      }

      // Raycast for hover
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);

      if (intersects.length > 0) {
        const hoveredObj = intersects[0].object;
        const hoveredData = hoveredObj.userData;
        setHoveredNode(hoveredData);

        // Highlight node & edge connections
        nodeMeshes.forEach((m) => {
          if (m.userData.id === hoveredData.id) {
            m.scale.setScalar(m.userData.size * 1.3);
            m.material.emissive.setHex(0xE87532);
            m.material.emissiveIntensity = 0.8;
          } else {
            m.scale.setScalar(m.userData.size);
            m.material.emissive.setHex(m.userData.id === 'darkwolf23' ? 0x955D31 : 0x000000);
            m.material.emissiveIntensity = m.userData.id === 'darkwolf23' ? 0.6 : 0;
          }
        });

        edgeLines.forEach((l) => {
          if (l.userData.sourceId === hoveredData.id || l.userData.targetId === hoveredData.id) {
            l.material.opacity = 0.9;
            l.material.color.setHex(0xE87532);
          } else {
            l.material.opacity = 0.15;
            l.material.color.setHex(0x955D31);
          }
        });
      } else {
        setHoveredNode(null);
        nodeMeshes.forEach((m) => {
          m.scale.setScalar(m.userData.size);
          m.material.emissive.setHex(m.userData.id === 'darkwolf23' ? 0x955D31 : 0x000000);
          m.material.emissiveIntensity = m.userData.id === 'darkwolf23' ? 0.6 : 0;
        });
        edgeLines.forEach((l) => {
          l.material.opacity = 0.3;
          l.material.color.setHex(0x955D31);
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup resources
    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      if (container) container.removeEventListener('click', onClick);

      // Dispose Three.js objects
      sphereGeo.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      lineMat.dispose();
      nodeMeshes.forEach((m) => m.material.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[520px] sm:h-[640px] rounded-3xl overflow-hidden border border-[#955D31]/30 bg-[#171411] shadow-[0_25px_60px_rgba(0,0,0,0.8)] cursor-grab active:cursor-grabbing"
    >
      {/* 3D WebGL Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Top Left Title Badge */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#211C18]/90 border border-[#955D31]/40 backdrop-blur-md">
          <Network className="w-3.5 h-3.5 text-[#E87532] animate-pulse" />
          <span className="font-mono text-[11px] font-bold tracking-wider text-[#BAAD9A] uppercase">
            3D Threat Actor Knowledge Graph
          </span>
        </div>
        
        <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-[#A9A097] bg-[#211C18]/80 px-3 py-1 rounded-full border border-white/5">
          <span>DRAG TO EXPLORE • CLICK NODE TO INSPECT</span>
        </div>
      </div>

      {/* Hover Tooltip Overlay */}
      {hoveredNode && (
        <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-[#211C18]/95 border border-[#E87532]/40 backdrop-blur-xl space-y-1.5 shadow-2xl pointer-events-none max-w-xs animate-in fade-in duration-200">
          <div className="flex items-center justify-between font-mono text-[10px] text-[#E87532]">
            <span className="uppercase font-bold">{hoveredNode.type} NODE</span>
            {hoveredNode.confidence && <span>{hoveredNode.confidence}</span>}
          </div>
          <h4 className="text-sm font-bold font-mono text-[#F3EEE7]">
            {hoveredNode.label}
          </h4>
          <p className="text-xs text-[#A9A097]">
            {hoveredNode.details}
          </p>
          {hoveredNode.aliases && (
            <div className="pt-2 flex items-center gap-3 text-[10px] font-mono text-[#BAAD9A] border-t border-white/10">
              <span>{hoveredNode.aliases} Aliases</span>
              <span>{hoveredNode.wallets} Wallets</span>
              <span>{hoveredNode.pgp} PGP Keys</span>
            </div>
          )}
        </div>
      )}

      {/* Bottom Right Legend */}
      <div className="absolute bottom-4 right-4 hidden md:flex items-center gap-3 px-3 py-1.5 rounded-xl bg-[#211C18]/80 border border-white/5 text-[10px] font-mono text-[#A9A097] pointer-events-none">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#E87532]" /> Actor</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#955D31]" /> Alias</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#BAAD9A]" /> Wallet</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#F3EEE7]" /> PGP</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#887760]" /> Forum</span>
      </div>

    </div>
  );
}

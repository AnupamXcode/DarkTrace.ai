import React, { useRef, useEffect, useState } from 'react';
import { Network, Eye, Hash, ShieldAlert, Cpu, Terminal, ArrowUpRight, CheckCircle2, Copy } from 'lucide-react';

export default function KnowledgeGraphCanvas({ onSelectNode }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = containerRef.current.clientWidth);
    let height = (canvas.height = containerRef.current.clientHeight);

    const handleResize = () => {
      if (!containerRef.current) return;
      width = canvas.width = containerRef.current.clientWidth;
      height = canvas.height = containerRef.current.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Initial node layout definition
    const nodes = [
      { id: 'actor_main', label: 'Phant0m_R00t (APT-319)', type: 'ACTOR', val: 18, color: '#FF6A00', x: width * 0.45, y: height * 0.45, vx: 0.2, vy: 0.15, details: 'Attributed Threat Actor - BreachForums Admin / Exploit Broker' },
      { id: 'wallet_1', label: 'BTC: 1F1tA1p...3vJ', type: 'WALLET', val: 12, color: '#FF9D4D', x: width * 0.22, y: height * 0.3, vx: -0.1, vy: 0.2, details: 'Ransom Payment Address ($420,000 USD traced)' },
      { id: 'telegram_1', label: '@Phant0m_Admin', type: 'TELEGRAM', val: 12, color: '#FF6A00', x: width * 0.68, y: height * 0.25, vx: 0.15, vy: -0.1, details: 'Telegram Channel ID #9041 - Malware distribution' },
      { id: 'pgp_key', label: 'PGP: 0x9F02A489', type: 'PGP', val: 10, color: '#F5F5F0', x: width * 0.35, y: height * 0.72, vx: -0.1, vy: -0.15, details: 'Verified PGP Key matched across XSS.is and Exploit.in' },
      { id: 'stealer_log', label: 'RedLine Stealer #4912', type: 'STEALER', val: 11, color: '#FF4500', x: width * 0.78, y: height * 0.6, vx: 0.1, vy: 0.1, details: 'Stolen Session Cookie: admin@corp-logistics.com' },
      { id: 'forum_xss', label: 'XSS.is Seller Profile', type: 'FORUM', val: 10, color: '#E07A5F', x: width * 0.15, y: height * 0.6, vx: 0.15, vy: 0.05, details: 'Thread: "Selling Unpatched Linux VPN RCE $45k"' },
      { id: 'ip_node', label: 'IP: 185.220.101.5 (TOR Exit)', type: 'IP', val: 9, color: '#9A948C', x: width * 0.6, y: height * 0.8, vx: -0.2, vy: 0.1, details: 'Relay Node linked to C2 Beaconing' },
      { id: 'breach_db', label: 'Corp-Finance-2025 DB', type: 'BREACH', val: 13, color: '#FF6A00', x: width * 0.3, y: height * 0.15, vx: 0.05, vy: -0.2, details: 'SQL Dump with 3.4M Bcrypt hashes' },
    ];

    const edges = [
      { source: 'actor_main', target: 'wallet_1', label: 'Receives BTC' },
      { source: 'actor_main', target: 'telegram_1', label: 'Operates Channel' },
      { source: 'actor_main', target: 'pgp_key', label: 'Signed Key' },
      { source: 'actor_main', target: 'stealer_log', label: 'Deploys Payload' },
      { source: 'actor_main', target: 'forum_xss', label: 'Registered Alias' },
      { source: 'telegram_1', target: 'stealer_log', label: 'Publishes Logs' },
      { source: 'pgp_key', target: 'forum_xss', label: 'Profile Signature' },
      { source: 'wallet_1', target: 'breach_db', label: 'Ransom Transaction' },
      { source: 'stealer_log', target: 'ip_node', label: 'C2 IP Connection' },
    ];

    // Mouse parallax tracking
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;

      // Find hovered node
      let found = null;
      nodes.forEach((node) => {
        const dx = mouse.targetX - node.x;
        const dy = mouse.targetY - node.y;
        if (Math.sqrt(dx * dx + dy * dy) < node.val + 8) {
          found = node;
        }
      });
      setHoveredNode(found);
    };

    const handleClick = () => {
      if (hoveredNode) {
        setSelectedNode(hoveredNode);
        if (onSelectNode) onSelectNode(hoveredNode);
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);

    let step = 0;

    const render = () => {
      step += 0.03;

      // Smooth mouse interpolation for parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const parallaxX = (mouse.x - width / 2) * 0.02;
      const parallaxY = (mouse.y - height / 2) * 0.02;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle warm grid lines
      ctx.strokeStyle = 'rgba(255, 106, 0, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update positions with subtle floating bouncing bounds
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 40 || node.x > width - 40) node.vx *= -1;
        if (node.y < 40 || node.y > height - 40) node.vy *= -1;
      });

      // Draw Edges with pulses
      edges.forEach((edge) => {
        const source = nodes.find((n) => n.id === edge.source);
        const target = nodes.find((n) => n.id === edge.target);
        if (!source || !target) return;

        const isHighlighted =
          (hoveredNode && (hoveredNode.id === source.id || hoveredNode.id === target.id)) ||
          (selectedNode && (selectedNode.id === source.id || selectedNode.id === target.id));

        ctx.beginPath();
        ctx.moveTo(source.x + parallaxX, source.y + parallaxY);
        ctx.lineTo(target.x + parallaxX, target.y + parallaxY);

        if (isHighlighted) {
          ctx.strokeStyle = 'rgba(255, 106, 0, 0.8)';
          ctx.lineWidth = 2;
        } else {
          ctx.strokeStyle = 'rgba(255, 106, 0, 0.18)';
          ctx.lineWidth = 1;
        }
        ctx.stroke();

        // Draw traveling energy particle on edge
        const particlePos = (step + (source.val % 3)) % 1;
        const px = source.x + (target.x - source.x) * particlePos + parallaxX;
        const py = source.y + (target.y - source.y) * particlePos + parallaxY;

        ctx.beginPath();
        ctx.arc(px, py, isHighlighted ? 3 : 2, 0, Math.PI * 2);
        ctx.fillStyle = isHighlighted ? '#FF9D4D' : 'rgba(255, 106, 0, 0.6)';
        ctx.shadowColor = '#FF6A00';
        ctx.shadowBlur = isHighlighted ? 10 : 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw Nodes
      nodes.forEach((node) => {
        const nx = node.x + parallaxX;
        const ny = node.y + parallaxY;

        const isHovered = hoveredNode && hoveredNode.id === node.id;
        const isSelected = selectedNode && selectedNode.id === node.id;

        // Outer glow aura
        if (isHovered || isSelected || node.type === 'ACTOR') {
          ctx.beginPath();
          ctx.arc(nx, ny, node.val + (isHovered ? 12 : 8), 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 106, 0, 0.15)';
          ctx.fill();
        }

        // Main Node Circle
        ctx.beginPath();
        ctx.arc(nx, ny, node.val, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#FF9D4D' : node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isHovered ? 20 : 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Border ring
        ctx.beginPath();
        ctx.arc(nx, ny, node.val + 2, 0, Math.PI * 2);
        ctx.strokeStyle = isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = isSelected ? 2 : 1;
        ctx.stroke();

        // Node Label
        ctx.font = '11px ui-monospace, SFMono-Regular, monospace';
        ctx.fillStyle = isHovered || isSelected ? '#FFFFFF' : '#F5F5F0';
        ctx.fillText(node.label, nx + node.val + 8, ny + 4);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('click', handleClick);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [hoveredNode, selectedNode]);

  return (
    <div ref={containerRef} className="relative w-full h-[480px] sm:h-[560px] rounded-3xl overflow-hidden border border-[rgba(255,106,0,0.2)] bg-[#0C0702] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
      
      {/* Interactive Canvas */}
      <canvas ref={canvasRef} className="w-full h-full cursor-pointer block" />

      {/* Canvas Top Bar Controls & Metadata */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#120A04]/90 border border-[rgba(255,106,0,0.3)] backdrop-blur-md">
          <Network className="w-3.5 h-3.5 text-[#FF6A00] animate-pulse" />
          <span className="font-mono text-[11px] font-bold tracking-wider text-[#FF9D4D] uppercase">
            Interactive Entity Attribution Graph
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-[#9A948C] bg-[#120A04]/80 px-3 py-1 rounded-full border border-white/5">
          <span>Move mouse to tilt • Click node to inspect entity</span>
        </div>
      </div>

      {/* Hovered / Selected Entity Detail Card Overlay */}
      {(hoveredNode || selectedNode) && (
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md p-4 rounded-2xl bg-[#120A04]/95 border border-[rgba(255,106,0,0.4)] backdrop-blur-xl space-y-2 shadow-2xl animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <span className="editorial-badge">
              {(hoveredNode || selectedNode).type} ENTITY
            </span>
            <span className="text-[10px] font-mono text-[#FF9D4D]">
              94.2% Correlation Score
            </span>
          </div>
          <h4 className="text-sm font-bold font-mono text-white flex items-center gap-2">
            {(hoveredNode || selectedNode).label}
          </h4>
          <p className="text-xs text-[#9A948C]">
            {(hoveredNode || selectedNode).details}
          </p>
        </div>
      )}

      {/* Legend Badge */}
      <div className="absolute bottom-4 right-4 hidden md:flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-[#120A04]/90 border border-white/5 text-[10px] font-mono text-[#9A948C]">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#FF6A00]" /> Actor Persona</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#FF9D4D]" /> BTC Wallet</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#F5F5F0]" /> PGP Key</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#FF4500]" /> Stealer Log</span>
      </div>

    </div>
  );
}

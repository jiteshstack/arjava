import React from 'react';

export const Logo = ({ 
  className = "w-8 h-8", 
  tealColor = "#06b6d4",  // Cyan-500 (more vibrant, professional teal)
  orangeColor = "#f59e0b"  // Amber-500 (warmer, more professional orange)
}: { 
  className?: string; 
  tealColor?: string;
  orangeColor?: string;
}) => {
  // Optimized node positions for better visual balance
  // All coordinates are relative to center (20, 20)
  const nodes = [
    { id: 'top', x: 20, y: 8, color: tealColor, isAccent: false },           // Top center - teal
    { id: 'upperLeft', x: 10, y: 14, color: orangeColor, isAccent: true },   // Upper left - orange
    { id: 'upperRight', x: 30, y: 14, color: orangeColor, isAccent: true },  // Upper right - orange
    { id: 'center', x: 20, y: 20, color: tealColor, isAccent: false },        // Center - teal
    { id: 'lowerLeft', x: 10, y: 26, color: tealColor, isAccent: false },     // Lower left - teal
    { id: 'lowerRight', x: 30, y: 26, color: tealColor, isAccent: false },    // Lower right - teal
    { id: 'bottom', x: 20, y: 32, color: tealColor, isAccent: false },        // Bottom center - teal
  ];

  // Enhanced visual parameters
  const nodeRadius = 3.2;
  const accentNodeRadius = 3.5; // Slightly larger accent nodes for emphasis
  const lineColor = tealColor;
  const lineWidth = 1.3;
  const lineOpacity = 0.65;

  // Generate all connections (every node to every other node)
  const connections: Array<{ x1: number; y1: number; x2: number; y2: number }> = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      connections.push({
        x1: nodes[i].x,
        y1: nodes[i].y,
        x2: nodes[j].x,
        y2: nodes[j].y,
      });
    }
  }

  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        {/* Gradient for teal nodes - adds depth */}
        <radialGradient id="tealGradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor={tealColor} stopOpacity="1" />
          <stop offset="100%" stopColor={tealColor} stopOpacity="0.85" />
        </radialGradient>
        
        {/* Gradient for orange nodes - adds depth */}
        <radialGradient id="orangeGradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor={orangeColor} stopOpacity="1" />
          <stop offset="100%" stopColor={orangeColor} stopOpacity="0.85" />
        </radialGradient>
        
        {/* Subtle glow filter for nodes */}
        <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Connection lines - drawn first so they appear behind nodes */}
      {connections.map((conn, idx) => (
        <line
          key={`line-${idx}`}
          x1={conn.x1}
          y1={conn.y1}
          x2={conn.x2}
          y2={conn.y2}
          stroke={lineColor}
          strokeWidth={lineWidth}
          strokeOpacity={lineOpacity}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      
      {/* Nodes - drawn on top of connections with enhanced styling */}
      {nodes.map((node) => {
        const radius = node.isAccent ? accentNodeRadius : nodeRadius;
        const gradientId = node.isAccent ? 'orangeGradient' : 'tealGradient';
        
        return (
          <g key={node.id} filter="url(#nodeGlow)">
            {/* Subtle outer glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r={radius + 0.5}
              fill={node.color}
              opacity="0.2"
            />
            {/* Main node with gradient */}
            <circle
              cx={node.x}
              cy={node.y}
              r={radius}
              fill={`url(#${gradientId})`}
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="0.4"
            />
            {/* Inner highlight for depth */}
            <circle
              cx={node.x}
              cy={node.y - 0.8}
              r={radius * 0.4}
              fill="rgba(255, 255, 255, 0.3)"
              opacity="0.6"
            />
          </g>
        );
      })}
    </svg>
  );
};
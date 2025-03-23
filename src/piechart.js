import React, { useState, useEffect } from 'react';

const AnimatedLoadingPieChart = () => {
    const [animationProgress, setAnimationProgress] = useState(0);

    // Data for the pie chart
    const data = [
        { name: 'NVDA', value: 50, color: '#76b900' },
        { name: 'AMD', value: 25, color: '#76b9ff' },
        { name: 'TSLA', value: 25, color: '#f0bf00' }
    ];

    // Calculate total value
    const total = data.reduce((sum, item) => sum + item.value, 0);

    // Animation effect
    useEffect(() => {
        if (animationProgress < 100) {
            const timer = setTimeout(() => {
                setAnimationProgress(prev => Math.min(prev + 1, 100));
            }, 20);
            return () => clearTimeout(timer);
        }
    }, [animationProgress]);

    // SVG parameters
    const size = 300;
    const center = size / 2;
    const radius = 150;
    const labelRadius = radius * 0.7;

    // Define glow filter
    const glowFilter = (
        <defs>
            <filter id="glow" x="-20%" y="-20%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
    );

    // Calculate and create pie slices
    const createPieSlices = () => {
        let currentAngle = 0;

        return data.map((item, index) => {
            // Calculate angle for this slice
            const sliceAngle = (item.value / total) * 180;

            // Calculate the current visible angle based on animation progress
            const maxVisibleAngle = (animationProgress / 100) * 360;
            const visibleSliceAngle = Math.min(
                sliceAngle,
                Math.max(0, maxVisibleAngle - currentAngle)
            );

            // Only render if some part of this slice is visible
            if (visibleSliceAngle <= 0) {
                currentAngle += sliceAngle;
                return null;
            }

            // Calculate SVG arc parameters
            const startAngle = currentAngle;
            const endAngle = currentAngle + visibleSliceAngle;

            const startX = center + radius * Math.sin((startAngle * Math.PI) / 180);
            const startY = center - radius * Math.cos((startAngle * Math.PI) / 180);
            const endX = center + radius * Math.sin((endAngle * Math.PI) / 180);
            const endY = center - radius * Math.cos((endAngle * Math.PI) / 180);

            // Flag for arc drawing (1 if slice is less than 180 degrees)
            const largeArcFlag = visibleSliceAngle <= 180 ? 0 : 1;

            // Create SVG path
            const path = `
        M ${center} ${center}
        L ${startX} ${startY}
        A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}
      `;

            // Calculate position for label
            const labelAngle = startAngle + (visibleSliceAngle / 2);
            const labelX = center + labelRadius * Math.sin((labelAngle * Math.PI) / 180);
            const labelY = center - labelRadius * Math.cos((labelAngle * Math.PI) / 180);

            // Update current angle for next slice
            const fullSliceAngle = currentAngle + sliceAngle;
            currentAngle = fullSliceAngle;

            // Only show label if slice is mostly visible
            const showLabel = sliceAngle > 10;

            return (
                <g key={index}>
                    {/* Glow effect (same path but blurred) */}
                    <path
                        d={path}
                        fill={item.color}
                        opacity="0.9"
                        filter="url(#glow)"
                    />
                    {/* Main slice */}
                    <path
                        d={path}
                        fill={item.color}
                        stroke="#502F77"
                        strokeWidth="1"
                    />
                    {showLabel && (
                        <g>
                            <text x={labelX}
                                y={labelY}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="#fff"
                                fontSize="14"
                                fontWeight="bold">

                                {item.name}
                            </text>
                            <text
                                x={labelX}
                                y={labelY+15}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="#fff"
                                fontSize="10"
                                fontWeight="light"
                            >
                                {item.value}%
                            </text>
                        </g>
                    )}
                </g>
            );
        });
    };

    return (
        <svg width="auto" height="auto" viewBox="150 0 150 300" preserveAspectRatio="none" display={"block"}>
            {glowFilter}
            {createPieSlices()}
        </svg>
    );
};

export default AnimatedLoadingPieChart;
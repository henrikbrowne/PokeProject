// src/components/BuzzwordRain.tsx
import { Box, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useMemo } from "react";

type BuzzwordRainProps = {
  words: string[];
  /** How many falling items to render (they loop). */
  count?: number;
  /** Min/Max fall duration in seconds */
  minDuration?: number;
  maxDuration?: number;
  /** Min/Max font size in px */
  minSize?: number;
  maxSize?: number;
  /** Optional: confine to a specific height; defaults to parent size */
  height?: string | number;
  /** Optional: zIndex overlay; default 1 */
  zIndex?: number;
  /** Optional: color or Chakra token (e.g. "whiteAlpha.900") */
  color?: string;
  /** Optional: vertical padding so words start slightly above view */
  startOffset?: number; // px
};

const fall = keyframes`
  0%   { transform: translate3d(0, -110%, 0); opacity: 0; }
  5%   { opacity: 1; }
  100% { transform: translate3d(0, 110vh, 0); opacity: 0.9; }
`;

export default function BuzzwordRain({
  words,
  count = 40,
  minDuration = 6,
  maxDuration = 14,
  minSize = 12,
  maxSize = 28,
  height = "100%",
  zIndex = 1,
  color = "whiteAlpha.900",
  startOffset = 40,
}: BuzzwordRainProps) {
  // Precompute random positions/durations so they stay stable.
  const drops = useMemo(() => {
    if (!words || words.length === 0) return [];
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;
    const choose = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

    return Array.from({ length: count }).map(() => {
      const left = rand(0, 100); // vw %
      const delay = rand(0, 6);  // s
      const duration = rand(minDuration, maxDuration); // s
      const fontSize = rand(minSize, maxSize); // px
      const word = choose(words);
      const rotate = Math.random() < 0.5 ? rand(-10, 10) : rand(-25, 25);
      const weight = Math.random() < 0.7 ? 600 : 400;
      const letterSpacing = Math.random() < 0.5 ? "0.02em" : "0.08em";
      return { left, delay, duration, fontSize, word, rotate, weight, letterSpacing };
    });
  }, [words, count, minDuration, maxDuration, minSize, maxSize]);

  return (
    <Box
      position="absolute"
      inset={0}
      h={height}
      overflow="hidden"
      pointerEvents="none"
      zIndex={zIndex}
    >
      {drops.map((d, i) => (
        <Text
          key={i}
          position="absolute"
          top={`-${startOffset}px`}
          left={`${d.left}vw`}
          fontSize={`${d.fontSize}px`}
          fontWeight={d.weight as any}
          letterSpacing={d.letterSpacing as any}
          color={color}
          textShadow="0 2px 6px rgba(0,0,0,0.35)"
          whiteSpace="nowrap"
          transform={`rotate(${d.rotate}deg)`}
          animation={`${fall} ${d.duration}s linear ${d.delay}s infinite`}
          willChange="transform, opacity"
          userSelect="none"
        >
          {d.word}
        </Text>
      ))}
    </Box>
  );
}

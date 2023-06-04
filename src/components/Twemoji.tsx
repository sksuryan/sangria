import React, { FC, memo } from "react";

interface Props {
  emoji: string;
  width?: number;
  height?: number;
  className?: string;
}

const Twemoji: FC<Props> = ({ emoji, className }) => {
  const imageSrc = emoji.codePointAt(0)?.toString(16);

  return (
    <span className={`emoji ${className}`}>
      <img
        src={`https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/${imageSrc}.svg`}
        alt={emoji}
        loading="eager"
        className="emoji"
      />
    </span>
  );
};

export default memo(Twemoji);

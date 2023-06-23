import React from "react";

type StyleSampleProps = {
  styles: React.CSSProperties;
};

export default function StylePropSample({ styles }: StyleSampleProps) {
  return <div style={styles}>StylePropSample</div>;
}

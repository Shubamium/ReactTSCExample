import { useState } from "react";

export default function UseStateSample() {
  const [isSmart, setSmart] = useState<boolean | null>(true);
  return (
    <div>
      <h2>Use State Sample</h2>
      {isSmart ? <p>It is smart</p> : <p>It isn't smart</p>}
    </div>
  );
}
